use std::collections::HashMap;
use tokio::sync::Semaphore;
use std::sync::Arc;

use thinkingroot_core::config::Config;
use thinkingroot_core::ir::DocumentIR;
use thinkingroot_core::types::*;
use thinkingroot_core::Result;

use crate::llm::LlmClient;
use crate::prompts;
use crate::schema::ExtractionResult;

/// The main extraction engine. Takes DocumentIRs and produces
/// Claims, Entities, and Relations via LLM extraction.
pub struct Extractor {
    llm: LlmClient,
    concurrency: usize,
    min_confidence: f64,
}

/// The combined output of extraction across all documents.
#[derive(Debug, Default)]
pub struct ExtractionOutput {
    pub claims: Vec<Claim>,
    pub entities: Vec<Entity>,
    pub relations: Vec<Relation>,
    /// Maps ClaimId → entity names that the claim references.
    /// Used by the Linker to create claim→entity edges.
    pub claim_entity_names: HashMap<ClaimId, Vec<String>>,
    pub sources_processed: usize,
    pub chunks_processed: usize,
}

impl Extractor {
    pub async fn new(config: &Config) -> Result<Self> {
        let llm = LlmClient::new(&config.llm)
            .await?
            .with_max_retries(config.extraction.max_retries);

        Ok(Self {
            llm,
            concurrency: config.llm.max_concurrent_requests,
            min_confidence: config.extraction.min_confidence,
        })
    }

    /// Extract knowledge from a batch of documents.
    pub async fn extract_all(
        &self,
        documents: &[DocumentIR],
        workspace_id: WorkspaceId,
    ) -> Result<ExtractionOutput> {
        let semaphore = Arc::new(Semaphore::new(self.concurrency));
        let mut output = ExtractionOutput::default();

        for doc in documents {
            let result = self.extract_document(doc, workspace_id, &semaphore).await?;
            output.merge(result);
            output.sources_processed += 1;
        }

        tracing::info!(
            "extraction complete: {} claims, {} entities, {} relations from {} sources",
            output.claims.len(),
            output.entities.len(),
            output.relations.len(),
            output.sources_processed,
        );

        Ok(output)
    }

    /// Extract knowledge from a single document.
    async fn extract_document(
        &self,
        doc: &DocumentIR,
        workspace_id: WorkspaceId,
        semaphore: &Arc<Semaphore>,
    ) -> Result<ExtractionOutput> {
        let mut output = ExtractionOutput::default();

        for chunk in &doc.chunks {
            let _permit = semaphore.acquire().await.map_err(|e| {
                thinkingroot_core::Error::Extraction {
                    source_id: doc.source_id.to_string(),
                    message: format!("semaphore error: {e}"),
                }
            })?;

            let context = prompts::build_context(
                &doc.uri,
                chunk.language.as_deref(),
                chunk.heading.as_deref(),
            );

            match self.llm.extract(&chunk.content, &context).await {
                Ok(result) => {
                    let converted = self.convert_result(result, doc.source_id, workspace_id);
                    output.merge(converted);
                    output.chunks_processed += 1;
                }
                Err(e) => {
                    tracing::warn!(
                        "extraction failed for chunk in {}: {e}",
                        doc.uri
                    );
                }
            }
        }

        Ok(output)
    }

    /// Convert LLM extraction results into core types.
    fn convert_result(
        &self,
        result: ExtractionResult,
        source_id: SourceId,
        workspace_id: WorkspaceId,
    ) -> ExtractionOutput {
        let mut output = ExtractionOutput::default();

        // Convert entities.
        let mut entity_map = std::collections::HashMap::new();
        for ext_entity in &result.entities {
            let entity_type = parse_entity_type(&ext_entity.entity_type);
            let mut entity = Entity::new(&ext_entity.name, entity_type);
            for alias in &ext_entity.aliases {
                entity.add_alias(alias);
            }
            entity.description = ext_entity.description.clone();
            entity_map.insert(ext_entity.name.to_lowercase(), entity.id);
            output.entities.push(entity);
        }

        // Convert claims and track their entity references.
        for ext_claim in &result.claims {
            if ext_claim.confidence < self.min_confidence {
                continue;
            }
            let claim_type = parse_claim_type(&ext_claim.claim_type);
            let claim = Claim::new(&ext_claim.statement, claim_type, source_id, workspace_id)
                .with_confidence(ext_claim.confidence);
            if !ext_claim.entities.is_empty() {
                output
                    .claim_entity_names
                    .insert(claim.id, ext_claim.entities.clone());
            }
            output.claims.push(claim);
        }

        // Convert relations.
        for ext_rel in &result.relations {
            let from_id = entity_map.get(&ext_rel.from_entity.to_lowercase());
            let to_id = entity_map.get(&ext_rel.to_entity.to_lowercase());

            if let (Some(&from), Some(&to)) = (from_id, to_id) {
                let rel_type = parse_relation_type(&ext_rel.relation_type);
                let rel = Relation::new(from, to, rel_type)
                    .with_description(ext_rel.description.clone().unwrap_or_default());
                output.relations.push(rel);
            }
        }

        output
    }
}

impl ExtractionOutput {
    fn merge(&mut self, other: ExtractionOutput) {
        self.claims.extend(other.claims);
        self.entities.extend(other.entities);
        self.relations.extend(other.relations);
        self.claim_entity_names.extend(other.claim_entity_names);
        self.sources_processed += other.sources_processed;
        self.chunks_processed += other.chunks_processed;
    }
}

fn parse_claim_type(s: &str) -> ClaimType {
    match s.to_lowercase().as_str() {
        "fact" => ClaimType::Fact,
        "decision" => ClaimType::Decision,
        "opinion" => ClaimType::Opinion,
        "plan" => ClaimType::Plan,
        "requirement" => ClaimType::Requirement,
        "metric" => ClaimType::Metric,
        "definition" => ClaimType::Definition,
        "dependency" => ClaimType::Dependency,
        "api_signature" => ClaimType::ApiSignature,
        "architecture" => ClaimType::Architecture,
        _ => ClaimType::Fact,
    }
}

fn parse_entity_type(s: &str) -> EntityType {
    match s.to_lowercase().as_str() {
        "person" => EntityType::Person,
        "system" => EntityType::System,
        "service" => EntityType::Service,
        "concept" => EntityType::Concept,
        "team" => EntityType::Team,
        "api" => EntityType::Api,
        "database" => EntityType::Database,
        "library" => EntityType::Library,
        "file" => EntityType::File,
        "module" => EntityType::Module,
        "function" => EntityType::Function,
        "config" => EntityType::Config,
        "organization" => EntityType::Organization,
        _ => EntityType::Concept,
    }
}

fn parse_relation_type(s: &str) -> RelationType {
    match s.to_lowercase().as_str() {
        "depends_on" => RelationType::DependsOn,
        "owned_by" => RelationType::OwnedBy,
        "replaces" => RelationType::Replaces,
        "contradicts" => RelationType::Contradicts,
        "implements" => RelationType::Implements,
        "uses" => RelationType::Uses,
        "contains" => RelationType::Contains,
        "created_by" => RelationType::CreatedBy,
        "part_of" => RelationType::PartOf,
        "related_to" => RelationType::RelatedTo,
        "calls" => RelationType::Calls,
        "configured_by" => RelationType::ConfiguredBy,
        "tested_by" => RelationType::TestedBy,
        _ => RelationType::RelatedTo,
    }
}
