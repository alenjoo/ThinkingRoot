use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use super::{AgentId, UserId, WorkspaceId};
use crate::config::SourceConfig;

/// A workspace is the top-level container for a knowledge compilation project.
/// It holds sources, policies, agent registrations, and configuration.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Workspace {
    pub id: WorkspaceId,
    pub name: String,
    pub owner: UserId,
    pub root_path: String,
    pub agents: Vec<AgentId>,
    pub source_configs: Vec<SourceConfig>,
    pub created_at: DateTime<Utc>,
    pub last_compiled: Option<DateTime<Utc>>,
}

impl Workspace {
    pub fn new(name: impl Into<String>, root_path: impl Into<String>, owner: UserId) -> Self {
        Self {
            id: WorkspaceId::new(),
            name: name.into(),
            owner,
            root_path: root_path.into(),
            agents: Vec::new(),
            source_configs: Vec::new(),
            created_at: Utc::now(),
            last_compiled: None,
        }
    }

    pub fn mark_compiled(&mut self) {
        self.last_compiled = Some(Utc::now());
    }

    pub fn data_dir(&self) -> std::path::PathBuf {
        std::path::PathBuf::from(&self.root_path).join(".thinkingroot")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn workspace_data_dir() {
        let owner = UserId::new();
        let ws = Workspace::new("test", "/home/user/project", owner);
        assert_eq!(
            ws.data_dir(),
            std::path::PathBuf::from("/home/user/project/.thinkingroot")
        );
    }
}
