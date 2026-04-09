use std::path::Path;

use thinkingroot_core::{Error, Result};

use crate::graph::GraphStore;
use crate::vector::VectorStore;

/// Unified storage engine combining graph (SQLite) and vector stores.
pub struct StorageEngine {
    pub graph: GraphStore,
    pub vector: VectorStore,
}

impl StorageEngine {
    /// Initialize both storage backends within the given data directory.
    pub async fn init(data_dir: &Path) -> Result<Self> {
        let graph_dir = data_dir.join("graph");
        std::fs::create_dir_all(&graph_dir).map_err(|e| Error::io_path(&graph_dir, e))?;

        let graph = GraphStore::init(&graph_dir)?;
        let vector = VectorStore::init(data_dir).await?;

        Ok(Self { graph, vector })
    }
}
