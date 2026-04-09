use std::collections::HashMap;

use thinkingroot_core::types::*;
use thinkingroot_core::Result;
use thinkingroot_extract::extractor::ExtractionOutput;
use thinkingroot_graph::graph::GraphStore;

use crate::resolution;

/// The Linker takes extraction output and builds the knowledge graph:
/// - Resolves duplicate entities
/// - Detects contradictions
/// - Writes everything to the graph store
pub struct Linker<'a> {
    graph: &'a GraphStore,
}

/// Output of the linking stage.
#[derive(Debug, Default)]
pub struct LinkOutput {
    pub entities_created: usize,
    pub entities_merged: usize,
    pub claims_linked: usize,
    pub relations_linked: usize,
    pub contradictions_detected: usize,
}

impl<'a> Linker<'a> {
    pub fn new(graph: &'a GraphStore) -> Self {
        Self { graph }
    }

    /// Link extracted knowledge into the graph.
    pub fn link(&self, extraction: ExtractionOutput) -> Result<LinkOutput> {
        let mut output = LinkOutput::default();

        // Phase 1: Entity resolution.
        let mut resolved_entities: Vec<Entity> = Vec::new();
        let mut entity_id_map: HashMap<EntityId, EntityId> = HashMap::new();

        for new_entity in extraction.entities {
            match resolution::resolve_entity(&new_entity, &resolved_entities) {
                Some(existing_id) => {
                    // Merge into existing.
                    if let Some(existing) = resolved_entities.iter_mut().find(|e| e.id == existing_id) {
                        entity_id_map.insert(new_entity.id, existing_id);
                        resolution::merge_entities(existing, &new_entity);
                        output.entities_merged += 1;
                    }
                }
                None => {
                    // New entity.
                    entity_id_map.insert(new_entity.id, new_entity.id);
                    resolved_entities.push(new_entity);
                    output.entities_created += 1;
                }
            }
        }

        // Write resolved entities to graph.
        for entity in &resolved_entities {
            self.graph.insert_entity(entity)?;
        }

        // Phase 2: Link claims to sources and entities.
        // Build a name→resolved EntityId lookup (case-insensitive).
        let name_to_entity: HashMap<String, EntityId> = resolved_entities
            .iter()
            .flat_map(|e| {
                let mut names = vec![(e.canonical_name.to_lowercase(), e.id)];
                for alias in &e.aliases {
                    names.push((alias.to_lowercase(), e.id));
                }
                names
            })
            .collect();

        for claim in &extraction.claims {
            self.graph.insert_claim(claim)?;
            self.graph.link_claim_to_source(
                &claim.id.to_string(),
                &claim.source.to_string(),
            )?;

            // Link claim to its referenced entities.
            if let Some(entity_names) = extraction.claim_entity_names.get(&claim.id) {
                for name in entity_names {
                    if let Some(&entity_id) = name_to_entity.get(&name.to_lowercase()) {
                        self.graph.link_claim_to_entity(
                            &claim.id.to_string(),
                            &entity_id.to_string(),
                        )?;
                    }
                }
            }

            output.claims_linked += 1;
        }

        // Phase 3: Link relations (with resolved entity IDs).
        for relation in &extraction.relations {
            let from_id = entity_id_map.get(&relation.from).copied().unwrap_or(relation.from);
            let to_id = entity_id_map.get(&relation.to).copied().unwrap_or(relation.to);

            self.graph.link_entities(
                &from_id.to_string(),
                &to_id.to_string(),
                &format!("{:?}", relation.relation_type),
                relation.strength.value(),
            )?;
            output.relations_linked += 1;
        }

        // Phase 4: Contradiction detection.
        // Group claims by entity, then look for opposing statements.
        output.contradictions_detected = self.detect_contradictions(&extraction.claims, &extraction.claim_entity_names, &name_to_entity)?;

        tracing::info!(
            "linking complete: {} entities ({} merged), {} claims, {} relations, {} contradictions",
            output.entities_created,
            output.entities_merged,
            output.claims_linked,
            output.relations_linked,
            output.contradictions_detected,
        );

        Ok(output)
    }

    /// Detect contradictions: claims about the same entity with opposing signals.
    /// Uses keyword heuristics for Phase 1 (semantic comparison in Phase 2 with embeddings).
    fn detect_contradictions(
        &self,
        claims: &[Claim],
        claim_entity_names: &HashMap<ClaimId, Vec<String>>,
        name_to_entity: &HashMap<String, EntityId>,
    ) -> Result<usize> {
        // Group claims by entity ID.
        let mut entity_claims: HashMap<EntityId, Vec<&Claim>> = HashMap::new();
        for claim in claims {
            if let Some(entity_names) = claim_entity_names.get(&claim.id) {
                for name in entity_names {
                    if let Some(&eid) = name_to_entity.get(&name.to_lowercase()) {
                        entity_claims.entry(eid).or_default().push(claim);
                    }
                }
            }
        }

        let mut count = 0;
        let negation_pairs = [
            ("is", "is not"),
            ("uses", "does not use"),
            ("has", "does not have"),
            ("supports", "does not support"),
            ("requires", "does not require"),
            ("enabled", "disabled"),
            ("true", "false"),
            ("yes", "no"),
            ("deprecated", "active"),
            ("removed", "added"),
        ];

        for (_eid, group) in &entity_claims {
            for i in 0..group.len() {
                for j in (i + 1)..group.len() {
                    let a = &group[i];
                    let b = &group[j];
                    let a_lower = a.statement.to_lowercase();
                    let b_lower = b.statement.to_lowercase();

                    let is_contradiction = negation_pairs.iter().any(|(pos, neg)| {
                        (a_lower.contains(pos) && b_lower.contains(neg))
                            || (a_lower.contains(neg) && b_lower.contains(pos))
                    });

                    if is_contradiction {
                        let contradiction = Contradiction::new(a.id, b.id)
                            .with_explanation(format!(
                                "Potential conflict: \"{}\" vs \"{}\"",
                                truncate(&a.statement, 80),
                                truncate(&b.statement, 80),
                            ));
                        self.graph.insert_contradiction(
                            &contradiction.id.to_string(),
                            &a.id.to_string(),
                            &b.id.to_string(),
                            contradiction.explanation.as_deref().unwrap_or(""),
                        )?;

                        // Auto-supersession: if confidence difference > 0.15,
                        // supersede the lower-confidence claim.
                        let conf_a = a.confidence.value();
                        let conf_b = b.confidence.value();
                        if (conf_a - conf_b).abs() > 0.15 {
                            if conf_a > conf_b {
                                self.graph.supersede_claim(
                                    &b.id.to_string(),
                                    &a.id.to_string(),
                                )?;
                            } else {
                                self.graph.supersede_claim(
                                    &a.id.to_string(),
                                    &b.id.to_string(),
                                )?;
                            }
                        }

                        count += 1;
                    }
                }
            }
        }

        Ok(count)
    }
}

fn truncate(s: &str, max: usize) -> &str {
    if s.len() <= max {
        s
    } else {
        &s[..max]
    }
}
