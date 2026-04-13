use std::collections::{HashMap, HashSet};

use thinkingroot_core::Result;
use thinkingroot_graph::graph::{GraphStore, TopEntity};

// ---------------------------------------------------------------------------
// Cached row types
// ---------------------------------------------------------------------------

#[derive(Debug, Clone)]
pub struct CachedEntity {
    pub id: String,
    pub canonical_name: String,
    pub entity_type: String,
    pub aliases: Vec<String>,
}

#[derive(Debug, Clone)]
pub struct CachedClaim {
    pub id: String,
    pub statement: String,
    pub claim_type: String,
    pub confidence: f64,
    pub source_uri: String,
}

#[derive(Debug, Clone)]
pub struct CachedRelation {
    pub from_name: String,
    pub to_name: String,
    pub from_type: String,
    pub to_type: String,
    pub relation_type: String,
    pub strength: f64,
}

#[derive(Debug, Clone)]
pub struct CachedSource {
    pub id: String,
    pub uri: String,
    pub source_type: String,
}

#[derive(Debug, Clone)]
pub struct CachedContradiction {
    pub id: String,
    pub claim_a: String,
    pub claim_b: String,
    pub explanation: String,
    pub status: String,
}

// ---------------------------------------------------------------------------
// KnowledgeGraph — the in-memory read cache
// ---------------------------------------------------------------------------

/// Full knowledge graph loaded from CozoDB into RAM.
///
/// Every read query served by `QueryEngine` goes here. CozoDB is the durability
/// layer only — it is never read during normal serve operation after load.
///
/// Memory footprint at Large scale (50 K entities / 200 K claims):
///   ~135 MB — fits in a phone's RAM, let alone a server.
///
/// Concurrency: wrap in `Arc<tokio::sync::RwLock<KnowledgeGraph>>` so that
/// multiple requests read simultaneously while pipeline writes (compile /
/// contribute) take an exclusive write lock to reload.
#[derive(Default)]
pub struct KnowledgeGraph {
    // Aggregate counts (O(1) for workspace summary)
    source_count: usize,
    entity_count: usize,
    claim_count: usize,

    // Primary data stores
    sources: Vec<CachedSource>,
    source_hashes: HashSet<String>,
    entities_by_id: HashMap<String, CachedEntity>,
    entities_ordered: Vec<String>,
    claims_by_id: HashMap<String, CachedClaim>,
    relations: Vec<CachedRelation>,
    contradictions: Vec<CachedContradiction>,

    // Inverted indexes — built once at load, give O(1) / O(k) per query
    entity_ids_by_name: HashMap<String, String>,         // lowercase name or alias → entity_id
    claims_by_entity: HashMap<String, Vec<String>>,      // entity_id → Vec<claim_id>
    claims_by_type: HashMap<String, Vec<String>>,        // claim_type → Vec<claim_id>
    relations_by_from_name: HashMap<String, Vec<usize>>, // lowercase from_name → relation indices
}

impl KnowledgeGraph {
    // ── Load ──────────────────────────────────────────────────────────────────

    /// Load the complete knowledge graph from CozoDB into memory.
    ///
    /// Executes 6 bulk queries (not N per-entity queries), builds all inverted
    /// indexes, and returns the fully populated cache. Typical load time at
    /// Large scale: ~1–2 s.  Called once at `root serve` startup and after
    /// each `root compile` / `contribute_claims`.
    pub fn load_from_graph(graph: &GraphStore) -> Result<Self> {
        tracing::debug!("building in-memory knowledge graph cache");

        // ── Sources ───────────────────────────────────────────────────────────
        let raw_sources = graph.get_all_sources()?;
        let source_count = raw_sources.len();

        let source_hashes: HashSet<String> = graph
            .get_sources_with_hashes()?
            .into_iter()
            .map(|(_, hash)| hash)
            .collect();

        let sources: Vec<CachedSource> = raw_sources
            .iter()
            .map(|(id, uri, source_type)| CachedSource {
                id: id.clone(),
                uri: uri.clone(),
                source_type: source_type.clone(),
            })
            .collect();

        // ── Entities + aliases ────────────────────────────────────────────────
        let raw_entities = graph.get_all_entities()?;
        let entity_count = raw_entities.len();

        // One bulk query for all aliases — avoids N per-entity round-trips.
        let mut aliases_by_entity: HashMap<String, Vec<String>> = HashMap::new();
        for (entity_id, alias) in graph.get_all_entity_aliases()? {
            aliases_by_entity.entry(entity_id).or_default().push(alias);
        }

        let mut entities_by_id: HashMap<String, CachedEntity> =
            HashMap::with_capacity(entity_count);
        let mut entity_ids_by_name: HashMap<String, String> =
            HashMap::with_capacity(entity_count * 2);
        let mut entities_ordered: Vec<String> = Vec::with_capacity(entity_count);

        for (id, name, entity_type) in &raw_entities {
            let aliases = aliases_by_entity.remove(id).unwrap_or_default();

            // Index canonical name and every alias under their lowercase forms.
            entity_ids_by_name.insert(name.to_lowercase(), id.clone());
            for alias in &aliases {
                entity_ids_by_name.insert(alias.to_lowercase(), id.clone());
            }

            entities_ordered.push(id.clone());
            entities_by_id.insert(
                id.clone(),
                CachedEntity {
                    id: id.clone(),
                    canonical_name: name.clone(),
                    entity_type: entity_type.clone(),
                    aliases,
                },
            );
        }

        // ── Claims + type index ───────────────────────────────────────────────
        // get_all_claims_with_sources → (id, statement, claim_type, confidence, source_uri)
        let raw_claims = graph.get_all_claims_with_sources()?;
        let claim_count = raw_claims.len();

        let mut claims_by_id: HashMap<String, CachedClaim> =
            HashMap::with_capacity(claim_count);
        let mut claims_by_type: HashMap<String, Vec<String>> = HashMap::new();

        for (id, statement, claim_type, confidence, source_uri) in raw_claims {
            claims_by_type
                .entry(claim_type.clone())
                .or_default()
                .push(id.clone());
            claims_by_id.insert(
                id.clone(),
                CachedClaim {
                    id,
                    statement,
                    claim_type,
                    confidence,
                    source_uri,
                },
            );
        }

        // ── Claim → entity adjacency ──────────────────────────────────────────
        let mut claims_by_entity: HashMap<String, Vec<String>> = HashMap::new();
        for (claim_id, entity_id) in graph.get_all_claim_entity_edges()? {
            claims_by_entity
                .entry(entity_id)
                .or_default()
                .push(claim_id);
        }

        // ── Relations + from-name index ───────────────────────────────────────
        // get_all_relations → (from_name, to_name, rel_type, from_type, to_type, strength)
        let raw_relations = graph.get_all_relations()?;
        let mut relations: Vec<CachedRelation> = Vec::with_capacity(raw_relations.len());
        let mut relations_by_from_name: HashMap<String, Vec<usize>> = HashMap::new();

        for (from_name, to_name, relation_type, from_type, to_type, strength) in raw_relations {
            let idx = relations.len();
            relations_by_from_name
                .entry(from_name.to_lowercase())
                .or_default()
                .push(idx);
            relations.push(CachedRelation {
                from_name,
                to_name,
                from_type,
                to_type,
                relation_type,
                strength,
            });
        }

        // ── Contradictions ────────────────────────────────────────────────────
        let contradictions = graph
            .get_contradictions()?
            .into_iter()
            .map(|(id, claim_a, claim_b, explanation, status)| CachedContradiction {
                id,
                claim_a,
                claim_b,
                explanation,
                status,
            })
            .collect();

        tracing::info!(
            entities = entity_count,
            claims = claim_count,
            sources = source_count,
            "knowledge graph loaded into memory"
        );

        Ok(KnowledgeGraph {
            source_count,
            entity_count,
            claim_count,
            sources,
            source_hashes,
            entities_by_id,
            entities_ordered,
            claims_by_id,
            relations,
            contradictions,
            entity_ids_by_name,
            claims_by_entity,
            claims_by_type,
            relations_by_from_name,
        })
    }

    // ── Query methods — all O(1) or O(k) where k = result size ───────────────

    /// `(source_count, claim_count, entity_count)` — O(1).
    pub fn counts(&self) -> (usize, usize, usize) {
        (self.source_count, self.claim_count, self.entity_count)
    }

    pub fn entity_count(&self) -> usize {
        self.entity_count
    }

    /// Entity IDs in insertion order.
    pub fn entities_ordered(&self) -> &[String] {
        &self.entities_ordered
    }

    /// O(1) lookup by entity ID.
    pub fn entity_by_id(&self, id: &str) -> Option<&CachedEntity> {
        self.entities_by_id.get(id)
    }

    /// O(1) lookup by canonical name or alias (case-insensitive).
    pub fn find_entity_by_name(&self, name: &str) -> Option<&CachedEntity> {
        self.entity_ids_by_name
            .get(&name.to_lowercase())
            .and_then(|id| self.entities_by_id.get(id))
    }

    /// Number of claims linked to this entity — O(1).
    pub fn entity_claim_count(&self, entity_id: &str) -> usize {
        self.claims_by_entity
            .get(entity_id)
            .map(|v| v.len())
            .unwrap_or(0)
    }

    /// All claims linked to `entity_id` — O(k).
    pub fn claims_for_entity(&self, entity_id: &str) -> Vec<&CachedClaim> {
        self.claims_by_entity
            .get(entity_id)
            .map(|ids| {
                ids.iter()
                    .filter_map(|id| self.claims_by_id.get(id))
                    .collect()
            })
            .unwrap_or_default()
    }

    /// All claims of a given type — O(k).
    pub fn claims_of_type(&self, claim_type: &str) -> Vec<&CachedClaim> {
        self.claims_by_type
            .get(claim_type)
            .map(|ids| {
                ids.iter()
                    .filter_map(|id| self.claims_by_id.get(id))
                    .collect()
            })
            .unwrap_or_default()
    }

    /// Iterator over all claims (order not guaranteed).
    pub fn all_claims(&self) -> impl Iterator<Item = &CachedClaim> {
        self.claims_by_id.values()
    }

    /// O(1) lookup by claim ID.
    pub fn claim_by_id(&self, id: &str) -> Option<&CachedClaim> {
        self.claims_by_id.get(id)
    }

    /// All outgoing relations for an entity (by name, case-insensitive) — O(k).
    pub fn relations_for_entity(&self, entity_name: &str) -> Vec<&CachedRelation> {
        self.relations_by_from_name
            .get(&entity_name.to_lowercase())
            .map(|idxs| idxs.iter().map(|&i| &self.relations[i]).collect())
            .unwrap_or_default()
    }

    /// All relations in the graph.
    pub fn all_relations(&self) -> &[CachedRelation] {
        &self.relations
    }

    /// All sources.
    pub fn all_sources(&self) -> &[CachedSource] {
        &self.sources
    }

    /// All contradictions.
    pub fn all_contradictions(&self) -> &[CachedContradiction] {
        &self.contradictions
    }

    /// Top N entities ranked by claim count — used for workspace brief.
    /// Returns the same `TopEntity` type that `GraphStore::get_top_entities_by_claim_count` returns.
    pub fn top_entities_by_claim_count(&self, limit: usize) -> Vec<TopEntity> {
        let mut ranked: Vec<(&CachedEntity, usize)> = self
            .entities_by_id
            .values()
            .map(|e| {
                let count = self
                    .claims_by_entity
                    .get(&e.id)
                    .map(|v| v.len())
                    .unwrap_or(0);
                (e, count)
            })
            .collect();

        ranked.sort_unstable_by(|a, b| b.1.cmp(&a.1));
        ranked.truncate(limit);

        ranked
            .into_iter()
            .map(|(e, count)| TopEntity {
                name: e.canonical_name.clone(),
                entity_type: e.entity_type.clone(),
                claim_count: count,
            })
            .collect()
    }

    /// Check whether a content hash is already recorded — O(1).
    pub fn source_hash_exists(&self, hash: &str) -> bool {
        self.source_hashes.contains(hash)
    }
}
