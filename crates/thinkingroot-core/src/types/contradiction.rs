use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use super::{ClaimId, ContradictionId};

/// A detected conflict between two active claims.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Contradiction {
    pub id: ContradictionId,
    pub claim_a: ClaimId,
    pub claim_b: ClaimId,
    pub detected_at: DateTime<Utc>,
    pub status: ConflictStatus,
    pub resolution: Option<Resolution>,
    pub resolved_by: Option<ResolvedBy>,
    pub explanation: Option<String>,
}

impl Contradiction {
    pub fn new(claim_a: ClaimId, claim_b: ClaimId) -> Self {
        Self {
            id: ContradictionId::new(),
            claim_a,
            claim_b,
            detected_at: Utc::now(),
            status: ConflictStatus::Detected,
            resolution: None,
            resolved_by: None,
            explanation: None,
        }
    }

    pub fn with_explanation(mut self, explanation: impl Into<String>) -> Self {
        self.explanation = Some(explanation.into());
        self
    }

    pub fn resolve(&mut self, resolution: Resolution, by: ResolvedBy) {
        self.status = ConflictStatus::Resolved;
        self.resolution = Some(resolution);
        self.resolved_by = Some(by);
    }

    pub fn mark_under_review(&mut self) {
        self.status = ConflictStatus::UnderReview;
    }

    pub fn accept(&mut self) {
        self.status = ConflictStatus::Accepted;
    }

    pub fn is_unresolved(&self) -> bool {
        matches!(
            self.status,
            ConflictStatus::Detected | ConflictStatus::UnderReview
        )
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ConflictStatus {
    Detected,
    UnderReview,
    Resolved,
    Accepted,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum Resolution {
    /// claim_a supersedes claim_b.
    SupersedeA,
    /// claim_b supersedes claim_a.
    SupersedeB,
    /// Both claims are valid in different contexts.
    BothValid { context: String },
    /// Claims were merged into a new unified claim.
    Merged { merged_claim: ClaimId },
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ResolvedBy {
    Auto { reason: String },
    Human { user: String },
    Agent { agent_id: String },
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn contradiction_lifecycle() {
        let c1 = ClaimId::new();
        let c2 = ClaimId::new();
        let mut contradiction = Contradiction::new(c1, c2);

        assert!(contradiction.is_unresolved());
        assert_eq!(contradiction.status, ConflictStatus::Detected);

        contradiction.mark_under_review();
        assert!(contradiction.is_unresolved());

        contradiction.resolve(
            Resolution::SupersedeA,
            ResolvedBy::Auto {
                reason: "newer source".into(),
            },
        );
        assert!(!contradiction.is_unresolved());
        assert_eq!(contradiction.status, ConflictStatus::Resolved);
    }
}
