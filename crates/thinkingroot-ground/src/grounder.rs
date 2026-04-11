use thinkingroot_core::types::{ClaimId, GroundingMethod};

#[derive(Debug, Clone)]
pub struct GroundingVerdict {
    pub claim_id: ClaimId,
    pub score: f64,
    pub method: GroundingMethod,
    pub lexical_score: f64,
    pub span_score: Option<f64>,
    pub semantic_score: Option<f64>,
    pub rejected: bool,
}

pub struct GroundingConfig {
    pub reject_threshold: f64,
    pub reduce_threshold: f64,
}

impl Default for GroundingConfig {
    fn default() -> Self {
        Self {
            reject_threshold: 0.25,
            reduce_threshold: 0.5,
        }
    }
}

pub struct Grounder {
    config: GroundingConfig,
    #[cfg(feature = "vector")]
    vector_store: Option<std::sync::Arc<thinkingroot_graph::vector::VectorStore>>,
}

impl Grounder {
    pub fn new(config: GroundingConfig) -> Self {
        Self {
            config,
            #[cfg(feature = "vector")]
            vector_store: None,
        }
    }

    #[cfg(feature = "vector")]
    pub fn with_vector_store(
        mut self,
        store: std::sync::Arc<thinkingroot_graph::vector::VectorStore>,
    ) -> Self {
        self.vector_store = Some(store);
        self
    }

    pub fn ground(&self, extraction: thinkingroot_extract::extractor::ExtractionOutput) -> thinkingroot_extract::extractor::ExtractionOutput {
        // Stub — will be implemented in Task 10
        extraction
    }
}
