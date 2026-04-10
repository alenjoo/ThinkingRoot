use chrono::{DateTime, Utc};
use ordered_float::OrderedFloat;
use serde::{Deserialize, Serialize};

use super::{ClaimId, EntityId, RelationId};

/// A typed, directed edge between two entities in the knowledge graph.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Relation {
    pub id: RelationId,
    pub from: EntityId,
    pub to: EntityId,
    pub relation_type: RelationType,
    pub evidence: Vec<ClaimId>,
    pub strength: Strength,
    pub valid_from: DateTime<Utc>,
    pub valid_until: Option<DateTime<Utc>>,
    pub description: Option<String>,
}

impl Relation {
    pub fn new(from: EntityId, to: EntityId, relation_type: RelationType) -> Self {
        Self {
            id: RelationId::new(),
            from,
            to,
            relation_type,
            evidence: Vec::new(),
            strength: Strength::new(1.0),
            valid_from: Utc::now(),
            valid_until: None,
            description: None,
        }
    }

    pub fn with_evidence(mut self, claim: ClaimId) -> Self {
        if !self.evidence.contains(&claim) {
            self.evidence.push(claim);
        }
        self
    }

    pub fn with_strength(mut self, strength: f64) -> Self {
        self.strength = Strength::new(strength);
        self
    }

    pub fn with_description(mut self, desc: impl Into<String>) -> Self {
        self.description = Some(desc.into());
        self
    }

    pub fn add_evidence(&mut self, claim: ClaimId) {
        if !self.evidence.contains(&claim) {
            self.evidence.push(claim);
            // More evidence = stronger relation, cap at 1.0.
            let new_strength = (self.strength.value() + 0.1).min(1.0);
            self.strength = Strength::new(new_strength);
        }
    }

    pub fn is_active(&self) -> bool {
        self.valid_until.is_none_or(|until| until > Utc::now())
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum RelationType {
    DependsOn,
    OwnedBy,
    Replaces,
    Contradicts,
    Implements,
    Uses,
    Contains,
    CreatedBy,
    PartOf,
    RelatedTo,
    Calls,
    ConfiguredBy,
    TestedBy,
}

/// Relation strength clamped to [0.0, 1.0].
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize)]
pub struct Strength(OrderedFloat<f64>);

impl Strength {
    pub fn new(value: f64) -> Self {
        Self(OrderedFloat(value.clamp(0.0, 1.0)))
    }

    pub fn value(&self) -> f64 {
        self.0.into_inner()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn relation_evidence_strengthens() {
        let e1 = EntityId::new();
        let e2 = EntityId::new();
        let mut rel = Relation::new(e1, e2, RelationType::DependsOn).with_strength(0.5);

        let c1 = ClaimId::new();
        let c2 = ClaimId::new();
        rel.add_evidence(c1);
        rel.add_evidence(c2);

        assert_eq!(rel.evidence.len(), 2);
        assert!(rel.strength.value() > 0.5);
    }

    #[test]
    fn no_duplicate_evidence() {
        let e1 = EntityId::new();
        let e2 = EntityId::new();
        let mut rel = Relation::new(e1, e2, RelationType::Uses);
        let c = ClaimId::new();
        rel.add_evidence(c);
        rel.add_evidence(c);
        assert_eq!(rel.evidence.len(), 1);
    }
}
