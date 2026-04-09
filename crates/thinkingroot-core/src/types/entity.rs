use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use super::{ClaimId, EntityId};

/// A named thing in the knowledge graph — person, system, concept, etc.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Entity {
    pub id: EntityId,
    pub canonical_name: String,
    pub entity_type: EntityType,
    pub aliases: Vec<String>,
    pub attributes: Vec<ClaimId>,
    pub first_seen: DateTime<Utc>,
    pub last_updated: DateTime<Utc>,
    pub description: Option<String>,
}

impl Entity {
    pub fn new(canonical_name: impl Into<String>, entity_type: EntityType) -> Self {
        let now = Utc::now();
        Self {
            id: EntityId::new(),
            canonical_name: canonical_name.into(),
            entity_type,
            aliases: Vec::new(),
            attributes: Vec::new(),
            first_seen: now,
            last_updated: now,
            description: None,
        }
    }

    pub fn with_alias(mut self, alias: impl Into<String>) -> Self {
        let alias = alias.into();
        if !self.aliases.contains(&alias) && alias != self.canonical_name {
            self.aliases.push(alias);
        }
        self
    }

    pub fn with_description(mut self, desc: impl Into<String>) -> Self {
        self.description = Some(desc.into());
        self
    }

    pub fn add_attribute(&mut self, claim_id: ClaimId) {
        if !self.attributes.contains(&claim_id) {
            self.attributes.push(claim_id);
            self.last_updated = Utc::now();
        }
    }

    pub fn add_alias(&mut self, alias: impl Into<String>) {
        let alias = alias.into();
        if !self.aliases.contains(&alias) && alias != self.canonical_name {
            self.aliases.push(alias);
            self.last_updated = Utc::now();
        }
    }

    /// Check if a name matches this entity (canonical or any alias, case-insensitive).
    pub fn matches_name(&self, name: &str) -> bool {
        let lower = name.to_lowercase();
        self.canonical_name.to_lowercase() == lower
            || self.aliases.iter().any(|a| a.to_lowercase() == lower)
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum EntityType {
    Person,
    System,
    Service,
    Concept,
    Team,
    Api,
    Database,
    Library,
    File,
    Module,
    Function,
    Config,
    Organization,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn entity_name_matching() {
        let entity = Entity::new("PostgreSQL", EntityType::Database)
            .with_alias("postgres")
            .with_alias("pg");

        assert!(entity.matches_name("PostgreSQL"));
        assert!(entity.matches_name("postgresql"));
        assert!(entity.matches_name("postgres"));
        assert!(entity.matches_name("PG"));
        assert!(!entity.matches_name("MySQL"));
    }

    #[test]
    fn no_duplicate_aliases() {
        let entity = Entity::new("Test", EntityType::Concept)
            .with_alias("test_alias")
            .with_alias("test_alias");

        assert_eq!(entity.aliases.len(), 1);
    }

    #[test]
    fn canonical_name_not_aliased() {
        let entity = Entity::new("Test", EntityType::Concept).with_alias("Test");
        assert!(entity.aliases.is_empty());
    }
}
