use thinkingroot_graph::vector::VectorStore;

pub struct SemanticJudge;

impl SemanticJudge {
    pub fn score(_claim: &str, _source_text: &str, _vector_store: &VectorStore) -> f64 {
        0.5 // Stub — will be implemented in Task 9
    }
}
