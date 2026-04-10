use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use super::{ArtifactId, ClaimId, SourceId};

/// A compiled knowledge artifact — the output of the compilation pipeline.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Artifact {
    pub id: ArtifactId,
    pub artifact_type: ArtifactType,
    pub title: String,
    pub content: String,
    pub version: u64,
    pub compiled_from: Vec<ClaimId>,
    pub citations: Vec<Citation>,
    pub health_score: HealthScore,
    pub last_compiled: DateTime<Utc>,
    pub stale: bool,
}

impl Artifact {
    pub fn new(
        artifact_type: ArtifactType,
        title: impl Into<String>,
        content: impl Into<String>,
    ) -> Self {
        Self {
            id: ArtifactId::new(),
            artifact_type,
            title: title.into(),
            content: content.into(),
            version: 1,
            compiled_from: Vec::new(),
            citations: Vec::new(),
            health_score: HealthScore::default(),
            last_compiled: Utc::now(),
            stale: false,
        }
    }

    pub fn add_citation(&mut self, citation: Citation) {
        self.citations.push(citation);
    }

    pub fn mark_stale(&mut self) {
        self.stale = true;
    }

    pub fn recompile(&mut self, content: String, claims: Vec<ClaimId>) {
        self.content = content;
        self.compiled_from = claims;
        self.version += 1;
        self.last_compiled = Utc::now();
        self.stale = false;
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ArtifactType {
    EntityPage,
    DecisionLog,
    TaskPack,
    Runbook,
    ArchitectureMap,
    ContradictionReport,
    AgentBrief,
    HealthReport,
}

/// A citation linking back to the original source.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Citation {
    pub claim_id: ClaimId,
    pub source_id: SourceId,
    pub source_uri: String,
    pub excerpt: Option<String>,
    pub line_range: Option<(u32, u32)>,
}

/// Composite health score for an artifact or the whole knowledge base.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HealthScore {
    pub overall: f64,
    pub freshness: f64,
    pub consistency: f64,
    pub coverage: f64,
    pub provenance: f64,
}

impl Default for HealthScore {
    fn default() -> Self {
        Self {
            overall: 1.0,
            freshness: 1.0,
            consistency: 1.0,
            coverage: 1.0,
            provenance: 1.0,
        }
    }
}

impl HealthScore {
    pub fn compute(freshness: f64, consistency: f64, coverage: f64, provenance: f64) -> Self {
        let overall = freshness * 0.3 + consistency * 0.3 + coverage * 0.2 + provenance * 0.2;
        Self {
            overall,
            freshness,
            consistency,
            coverage,
            provenance,
        }
    }

    pub fn as_percentage(&self) -> u8 {
        (self.overall * 100.0).round().clamp(0.0, 100.0) as u8
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn health_score_computation() {
        let score = HealthScore::compute(0.9, 0.8, 0.7, 1.0);
        // 0.9*0.3 + 0.8*0.3 + 0.7*0.2 + 1.0*0.2 = 0.27 + 0.24 + 0.14 + 0.20 = 0.85
        assert!((score.overall - 0.85).abs() < 0.001);
        assert_eq!(score.as_percentage(), 85);
    }

    #[test]
    fn artifact_versioning() {
        let mut artifact = Artifact::new(
            ArtifactType::EntityPage,
            "PostgreSQL",
            "# PostgreSQL\nA relational database.",
        );
        assert_eq!(artifact.version, 1);
        assert!(!artifact.stale);

        artifact.mark_stale();
        assert!(artifact.stale);

        artifact.recompile("# PostgreSQL\nUpdated content.".into(), vec![]);
        assert_eq!(artifact.version, 2);
        assert!(!artifact.stale);
    }
}
