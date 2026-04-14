use std::collections::{HashMap, HashSet};
use std::path::PathBuf;
use std::sync::Arc;

use serde::{Deserialize, Serialize};
use tokio::sync::{Mutex, RwLock};

pub use crate::pipeline::PipelineResult;
use crate::graph_cache::{CachedClaim, KnowledgeGraph, RawGraphData};
use thinkingroot_core::{Config, Error, Result};
use thinkingroot_graph::StorageEngine;
use thinkingroot_verify::Verifier;
pub use thinkingroot_verify::verifier::VerificationResult;

// ---------------------------------------------------------------------------
// Public response types
// ---------------------------------------------------------------------------

#[derive(Debug, Clone, Serialize)]
pub struct WorkspaceInfo {
    pub name: String,
    pub path: String,
    pub entity_count: usize,
    pub claim_count: usize,
    pub source_count: usize,
}

#[derive(Debug, Clone, Serialize)]
pub struct EntityInfo {
    pub id: String,
    pub name: String,
    pub entity_type: String,
    pub claim_count: usize,
}

#[derive(Debug, Clone, Serialize)]
pub struct EntityDetail {
    pub id: String,
    pub name: String,
    pub entity_type: String,
    pub aliases: Vec<String>,
    pub claims: Vec<ClaimInfo>,
    pub relations: Vec<RelationInfo>,
}

#[derive(Debug, Clone, Serialize)]
pub struct ClaimInfo {
    pub id: String,
    pub statement: String,
    pub claim_type: String,
    pub confidence: f64,
    pub source_uri: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct RelationInfo {
    pub target: String,
    pub relation_type: String,
    pub strength: f64,
}

#[derive(Debug, Clone, Serialize)]
pub struct ArtifactInfo {
    pub artifact_type: String,
    pub available: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct ArtifactContent {
    pub artifact_type: String,
    pub content: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct SourceInfo {
    pub id: String,
    pub uri: String,
    pub source_type: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct ContradictionInfo {
    pub id: String,
    pub claim_a: String,
    pub claim_b: String,
    pub explanation: String,
    pub status: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct SearchResult {
    pub entities: Vec<EntitySearchHit>,
    pub claims: Vec<ClaimSearchHit>,
}

#[derive(Debug, Clone, Serialize)]
pub struct EntitySearchHit {
    pub id: String,
    pub name: String,
    pub entity_type: String,
    pub claim_count: usize,
    pub relevance: f32,
}

#[derive(Debug, Clone, Serialize)]
pub struct ClaimSearchHit {
    pub id: String,
    pub statement: String,
    pub claim_type: String,
    pub confidence: f64,
    pub source_uri: String,
    pub relevance: f32,
}

#[derive(Debug, Clone, Default)]
pub struct ClaimFilter {
    pub claim_type: Option<String>,
    pub entity_name: Option<String>,
    pub min_confidence: Option<f64>,
    pub limit: Option<usize>,
    pub offset: Option<usize>,
}

// ---------------------------------------------------------------------------
// Internal workspace handle
// ---------------------------------------------------------------------------

struct WorkspaceHandle {
    name: String,
    root_path: PathBuf,
    /// Write operations (pipeline, agent contribute) go through CozoDB.
    storage: Arc<Mutex<StorageEngine>>,
    /// All read operations are served from this in-memory cache.
    /// Multiple concurrent requests read simultaneously; compile/contribute
    /// take an exclusive write lock to reload after mutating CozoDB.
    cache: Arc<RwLock<KnowledgeGraph>>,
    config: Config,
}

// ---------------------------------------------------------------------------
// Artifact type <-> filename mapping
// ---------------------------------------------------------------------------

fn artifact_filename(artifact_type: &str) -> Option<&'static str> {
    match artifact_type {
        "architecture-map" => Some("architecture-map.md"),
        "contradiction-report" => Some("contradiction-report.md"),
        "decision-log" => Some("decision-log.md"),
        "task-pack" => Some("task-pack.md"),
        "agent-brief" => Some("agent-brief.md"),
        "runbook" => Some("runbook.md"),
        "health-report" => Some("health-report.md"),
        "entity-pages" => Some("entities"),
        _ => None,
    }
}

/// All known artifact type keys.
const ARTIFACT_TYPES: &[&str] = &[
    "architecture-map",
    "contradiction-report",
    "decision-log",
    "task-pack",
    "agent-brief",
    "runbook",
    "health-report",
    "entity-pages",
];

// ---------------------------------------------------------------------------
// Pagination helper
// ---------------------------------------------------------------------------

fn apply_pagination<T>(vec: &mut Vec<T>, offset: Option<usize>, limit: Option<usize>) {
    if let Some(off) = offset {
        if off >= vec.len() {
            vec.clear();
        } else if off > 0 {
            *vec = vec.split_off(off);
        }
    }
    if let Some(lim) = limit {
        vec.truncate(lim);
    }
}

// ---------------------------------------------------------------------------
// QueryEngine
// ---------------------------------------------------------------------------

pub struct QueryEngine {
    workspaces: HashMap<String, WorkspaceHandle>,
}

impl Default for QueryEngine {
    fn default() -> Self {
        Self::new()
    }
}

impl QueryEngine {
    /// Create a new empty QueryEngine with no mounted workspaces.
    pub fn new() -> Self {
        Self {
            workspaces: HashMap::new(),
        }
    }

    /// Mount a workspace by name, opening the `.thinkingroot/` data directory,
    /// loading the config and storage engine, and warming the in-memory cache.
    pub async fn mount(&mut self, name: String, root_path: PathBuf) -> Result<()> {
        let data_dir = root_path.join(".thinkingroot");
        if !data_dir.exists() {
            return Err(Error::Config(format!(
                "no .thinkingroot directory found at {}",
                root_path.display()
            )));
        }

        // One-time silent migration: move any legacy `.thinkingroot-{slug}/` sibling
        // dirs to the new nested layout `.thinkingroot/branches/{slug}/`.
        match thinkingroot_branch::migrate_legacy_layout(&root_path) {
            Ok(0) => {}
            Ok(n) => tracing::info!(
                "migrated {n} legacy branch director{} to .thinkingroot/branches/",
                if n == 1 { "y" } else { "ies" }
            ),
            Err(e) => tracing::warn!("branch layout migration failed (non-fatal): {e}"),
        }

        let config = Config::load_merged(&root_path)?;
        let storage = StorageEngine::init(&data_dir).await?;
        let cache = KnowledgeGraph::load_from_graph(&storage.graph)?;

        self.workspaces.insert(
            name.clone(),
            WorkspaceHandle {
                name,
                root_path,
                storage: Arc::new(Mutex::new(storage)),
                cache: Arc::new(RwLock::new(cache)),
                config,
            },
        );

        Ok(())
    }

    /// Mount a workspace using an explicit data directory instead of the default
    /// `.thinkingroot/` subdirectory. Used by `root serve --branch` to mount a
    /// branch-scoped data directory such as `.thinkingroot-feature-x/`.
    pub async fn mount_with_data_dir(
        &mut self,
        name: String,
        root_path: PathBuf,
        data_dir: PathBuf,
    ) -> Result<()> {
        if !data_dir.exists() {
            return Err(Error::Config(format!(
                "data directory not found: {}",
                data_dir.display()
            )));
        }

        match thinkingroot_branch::migrate_legacy_layout(&root_path) {
            Ok(0) => {}
            Ok(n) => tracing::info!(
                "migrated {n} legacy branch director{} to .thinkingroot/branches/",
                if n == 1 { "y" } else { "ies" }
            ),
            Err(e) => tracing::warn!("branch layout migration failed (non-fatal): {e}"),
        }

        let config = Config::load_merged(&root_path).unwrap_or_default();
        let storage = StorageEngine::init(&data_dir).await?;
        let cache = KnowledgeGraph::load_from_graph(&storage.graph)?;

        self.workspaces.insert(
            name.clone(),
            WorkspaceHandle {
                name,
                root_path,
                storage: Arc::new(Mutex::new(storage)),
                cache: Arc::new(RwLock::new(cache)),
                config,
            },
        );

        Ok(())
    }

    /// Unmount a previously mounted workspace.
    pub fn unmount(&mut self, name: &str) -> Result<()> {
        self.workspaces
            .remove(name)
            .ok_or_else(|| Error::EntityNotFound(format!("workspace '{name}' not mounted")))?;
        Ok(())
    }

    /// List all currently mounted workspaces with summary counts.
    /// Served from in-memory cache — O(1) per workspace.
    pub async fn list_workspaces(&self) -> Result<Vec<WorkspaceInfo>> {
        let mut result = Vec::with_capacity(self.workspaces.len());
        for handle in self.workspaces.values() {
            let cache = handle.cache.read().await;
            let (source_count, claim_count, entity_count) = cache.counts();
            result.push(WorkspaceInfo {
                name: handle.name.clone(),
                path: handle.root_path.display().to_string(),
                entity_count,
                claim_count,
                source_count,
            });
        }
        Ok(result)
    }

    /// List all entities in a workspace.
    /// Served from in-memory cache — O(n) where n = entity count, zero disk I/O.
    pub async fn list_entities(&self, ws: &str) -> Result<Vec<EntityInfo>> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        let mut result = Vec::with_capacity(cache.entity_count());
        for id in cache.entities_ordered() {
            if let Some(e) = cache.entity_by_id(id) {
                result.push(EntityInfo {
                    id: e.id.clone(),
                    name: e.canonical_name.clone(),
                    entity_type: e.entity_type.clone(),
                    claim_count: cache.entity_claim_count(&e.id),
                });
            }
        }

        Ok(result)
    }

    /// Get detailed information about a single entity by name (case-insensitive).
    /// Served from in-memory cache — O(1) name lookup + O(k) claim/relation fetches.
    pub async fn get_entity(&self, ws: &str, name: &str) -> Result<EntityDetail> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        let entity = cache
            .find_entity_by_name(name)
            .ok_or_else(|| Error::EntityNotFound(name.to_string()))?;

        let claims: Vec<ClaimInfo> = cache
            .claims_for_entity(&entity.id)
            .into_iter()
            .map(cached_claim_to_info)
            .collect();

        let relations: Vec<RelationInfo> = cache
            .relations_for_entity(&entity.canonical_name)
            .into_iter()
            .map(|r| RelationInfo {
                target: r.to_name.clone(),
                relation_type: r.relation_type.clone(),
                strength: r.strength,
            })
            .collect();

        Ok(EntityDetail {
            id: entity.id.clone(),
            name: entity.canonical_name.clone(),
            entity_type: entity.entity_type.clone(),
            aliases: entity.aliases.clone(),
            claims,
            relations,
        })
    }

    /// List claims with optional filtering by type, entity, min confidence, limit, offset.
    /// Served from in-memory cache.
    pub async fn list_claims(&self, ws: &str, filter: ClaimFilter) -> Result<Vec<ClaimInfo>> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        // Entity-scoped path: O(1) name lookup + O(k) claim scan.
        if let Some(ref entity_name) = filter.entity_name {
            let entity = match cache.find_entity_by_name(entity_name) {
                Some(e) => e,
                None => return Ok(Vec::new()),
            };

            let mut claims: Vec<ClaimInfo> = cache
                .claims_for_entity(&entity.id)
                .into_iter()
                .filter(|c| {
                    let type_ok = filter
                        .claim_type
                        .as_ref()
                        .is_none_or(|t| t.eq_ignore_ascii_case(&c.claim_type));
                    let conf_ok =
                        filter.min_confidence.is_none_or(|min| c.confidence >= min);
                    type_ok && conf_ok
                })
                .map(cached_claim_to_info)
                .collect();

            apply_pagination(&mut claims, filter.offset, filter.limit);
            return Ok(claims);
        }

        // Type-filtered or full-listing path.
        let raw: Vec<&CachedClaim> = if let Some(ref ct) = filter.claim_type {
            cache.claims_of_type(ct)
        } else {
            cache.all_claims().collect()
        };

        let mut claims: Vec<ClaimInfo> = raw
            .into_iter()
            .filter(|c| filter.min_confidence.is_none_or(|min| c.confidence >= min))
            .map(cached_claim_to_info)
            .collect();

        apply_pagination(&mut claims, filter.offset, filter.limit);
        Ok(claims)
    }

    /// Get relations for a specific entity by name.
    /// Served from in-memory cache — O(k).
    pub async fn get_relations(&self, ws: &str, entity: &str) -> Result<Vec<RelationInfo>> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        Ok(cache
            .relations_for_entity(entity)
            .into_iter()
            .map(|r| RelationInfo {
                target: r.to_name.clone(),
                relation_type: r.relation_type.clone(),
                strength: r.strength,
            })
            .collect())
    }

    /// Get all relations in the workspace as (from, to, relation_type, strength) tuples.
    /// Served from in-memory cache — O(n) over pre-built Vec, zero disk I/O.
    pub async fn get_all_relations(&self, ws: &str) -> Result<Vec<(String, String, String, f64)>> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        Ok(cache
            .all_relations()
            .iter()
            .map(|r| {
                (
                    r.from_name.clone(),
                    r.to_name.clone(),
                    r.relation_type.clone(),
                    r.strength,
                )
            })
            .collect())
    }

    /// List all known artifact types and whether each is available on disk.
    pub async fn list_artifacts(&self, ws: &str) -> Result<Vec<ArtifactInfo>> {
        let handle = self.get_workspace(ws)?;
        let artifacts_dir = handle.root_path.join(".thinkingroot").join("artifacts");

        let mut result = Vec::with_capacity(ARTIFACT_TYPES.len());
        for &atype in ARTIFACT_TYPES {
            let available = if let Some(filename) = artifact_filename(atype) {
                artifacts_dir.join(filename).exists()
            } else {
                false
            };
            result.push(ArtifactInfo {
                artifact_type: atype.to_string(),
                available,
            });
        }

        Ok(result)
    }

    /// List all sources in the workspace.
    /// Served from in-memory cache.
    pub async fn list_sources(&self, ws: &str) -> Result<Vec<SourceInfo>> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        Ok(cache
            .all_sources()
            .iter()
            .map(|s| SourceInfo {
                id: s.id.clone(),
                uri: s.uri.clone(),
                source_type: s.source_type.clone(),
            })
            .collect())
    }

    /// Read the content of a specific artifact.
    pub async fn get_artifact(&self, ws: &str, artifact_type: &str) -> Result<ArtifactContent> {
        let handle = self.get_workspace(ws)?;
        let filename = artifact_filename(artifact_type).ok_or_else(|| Error::Compilation {
            artifact_type: artifact_type.to_string(),
            message: format!("unknown artifact type: {artifact_type}"),
        })?;

        let artifact_path = handle
            .root_path
            .join(".thinkingroot")
            .join("artifacts")
            .join(filename);

        if artifact_type == "entity-pages" {
            // For entity-pages, concatenate all files in the directory.
            if !artifact_path.is_dir() {
                return Err(Error::Compilation {
                    artifact_type: artifact_type.to_string(),
                    message: "entity-pages directory not found".to_string(),
                });
            }
            let mut content = String::new();
            let mut entries: Vec<_> = std::fs::read_dir(&artifact_path)
                .map_err(|e| Error::io_path(&artifact_path, e))?
                .filter_map(|e| e.ok())
                .collect();
            entries.sort_by_key(|e| e.file_name());

            for entry in entries {
                let path = entry.path();
                if path.extension().and_then(|s| s.to_str()) == Some("md") {
                    let text =
                        std::fs::read_to_string(&path).map_err(|e| Error::io_path(&path, e))?;
                    if !content.is_empty() {
                        content.push_str("\n---\n\n");
                    }
                    content.push_str(&text);
                }
            }
            return Ok(ArtifactContent {
                artifact_type: artifact_type.to_string(),
                content,
            });
        }

        // Regular file artifact.
        if !artifact_path.exists() {
            return Err(Error::Compilation {
                artifact_type: artifact_type.to_string(),
                message: format!("artifact not found at {}", artifact_path.display()),
            });
        }

        let content = std::fs::read_to_string(&artifact_path)
            .map_err(|e| Error::io_path(&artifact_path, e))?;

        Ok(ArtifactContent {
            artifact_type: artifact_type.to_string(),
            content,
        })
    }

    /// Run health/verification checks on the workspace.
    /// Reads directly from CozoDB — verification needs full consistency checks.
    pub async fn health(&self, ws: &str) -> Result<VerificationResult> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        let verifier = Verifier::new(&handle.config);
        verifier.verify(&storage.graph)
    }

    /// Run the full pipeline for a mounted workspace, then refresh the in-memory cache.
    ///
    /// ## Phase C lock-contention design
    ///
    /// The naive approach holds the storage `Mutex` for the entire cache rebuild
    /// (~2 s at Large scale), blocking all vector searches. Instead we use a
    /// three-phase pattern that minimises lock hold times:
    ///
    /// 1. **Pipeline** — runs its own `StorageEngine` internally; no lock held here.
    /// 2. **Noop guard** — if the pipeline reported no changes, skip the reload entirely.
    /// 3. **Fetch raw** — hold storage `Mutex` only for the 6–8 CozoDB bulk queries
    ///    (~300–600 ms), then release before building indexes.
    /// 4. **Build indexes** — pure CPU, no locks held (~400–800 ms). Vector searches
    ///    can proceed concurrently during this phase.
    /// 5. **Atomic swap** — acquire cache write lock only for the pointer swap (~100 μs).
    ///
    /// Net result: storage Mutex contention reduced from ~2 s → ~600 ms;
    ///             cache write-lock contention reduced from ~2 s → ~100 μs.
    pub async fn compile(&self, ws: &str) -> Result<PipelineResult> {
        let handle = self.get_workspace(ws)?;

        // Phase 1: Run pipeline (creates its own StorageEngine — no handle locks held).
        let result = crate::pipeline::run_pipeline(&handle.root_path, None, None).await?;

        // Phase 2: Noop guard — if nothing changed, the cache is still current.
        if !result.cache_dirty {
            tracing::debug!("compile noop — all files unchanged, skipping cache reload");
            return Ok(result);
        }

        // Phase 3: Fetch raw rows from CozoDB — hold storage Mutex only for I/O.
        let raw_data: RawGraphData = {
            let storage = handle.storage.lock().await;
            match KnowledgeGraph::fetch_raw(&storage.graph) {
                Ok(raw) => raw,
                Err(e) => {
                    tracing::warn!("cache fetch after compile failed (non-fatal): {e}");
                    return Ok(result);
                }
            }
        }; // ← storage Mutex released here; vector searches can resume immediately

        // Phase 4: Build in-memory indexes — pure CPU, zero locks held.
        let new_cache = KnowledgeGraph::build_from_raw(raw_data);

        // Phase 5: Atomic swap — write lock held only for the pointer assignment (~100 μs).
        *handle.cache.write().await = new_cache;

        Ok(result)
    }

    /// Search the workspace using vector similarity + keyword fallback.
    ///
    /// Vector search still goes to VectorStore (fastembed).
    /// Entity/claim lookups and claim counts are served from the in-memory cache
    /// — eliminating the N+1 CozoDB queries the old implementation required.
    pub async fn search(&self, ws: &str, query: &str, top_k: usize) -> Result<SearchResult> {
        let handle = self.get_workspace(ws)?;

        // Phase 1: Vector search — brief storage lock, released immediately after.
        let vector_results = {
            let mut storage = handle.storage.lock().await;
            storage.vector.search(query, top_k * 2)?
            // storage Mutex drops here
        };

        let mut entity_hits: Vec<EntitySearchHit> = Vec::new();
        let mut claim_hits: Vec<ClaimSearchHit> = Vec::new();
        let mut seen_entity_ids: HashSet<String> = HashSet::new();
        let mut seen_claim_ids: HashSet<String> = HashSet::new();

        // Phase 2: Resolve vector hits from cache — O(1) per hit, no disk I/O.
        {
            let cache = handle.cache.read().await;

            for (key, _metadata, score) in &vector_results {
                if *score < 0.1 {
                    continue;
                }

                if let Some(bare_id) = key.strip_prefix("entity:")
                    && let Some(e) = cache.entity_by_id(bare_id)
                    && seen_entity_ids.insert(e.id.clone())
                {
                    entity_hits.push(EntitySearchHit {
                        id: e.id.clone(),
                        name: e.canonical_name.clone(),
                        entity_type: e.entity_type.clone(),
                        claim_count: cache.entity_claim_count(&e.id),
                        relevance: *score,
                    });
                    continue;
                }

                if let Some(bare_id) = key.strip_prefix("claim:")
                    && let Some(c) = cache.claim_by_id(bare_id)
                    && seen_claim_ids.insert(c.id.clone())
                {
                    claim_hits.push(ClaimSearchHit {
                        id: c.id.clone(),
                        statement: c.statement.clone(),
                        claim_type: c.claim_type.clone(),
                        confidence: c.confidence,
                        source_uri: c.source_uri.clone(),
                        relevance: *score,
                    });
                }
            }
            // cache read lock drops here — must release before acquiring storage lock below
        }

        // Phase 3: Keyword fallback if vector didn't return enough.
        // Storage lock acquired separately (never held simultaneously with cache lock).
        if entity_hits.len() + claim_hits.len() < top_k {
            let (kw_entities, kw_claims) = {
                let storage = handle.storage.lock().await;
                let ents = storage.graph.search_entities(query)?;
                let cls = storage.graph.search_claims(query)?;
                (ents, cls)
                // storage Mutex drops here
            };

            let cache = handle.cache.read().await;

            for (eid, ename, etype) in kw_entities {
                if seen_entity_ids.insert(eid.clone()) {
                    entity_hits.push(EntitySearchHit {
                        claim_count: cache.entity_claim_count(&eid),
                        id: eid,
                        name: ename,
                        entity_type: etype,
                        relevance: 0.5,
                    });
                }
            }

            for (cid, stmt, ctype, conf, uri) in kw_claims {
                if seen_claim_ids.insert(cid.clone()) {
                    claim_hits.push(ClaimSearchHit {
                        id: cid,
                        statement: stmt,
                        claim_type: ctype,
                        confidence: conf,
                        source_uri: uri,
                        relevance: 0.5,
                    });
                }
            }
            // cache read lock drops here
        }

        // Sort by descending relevance and truncate.
        entity_hits.sort_by(|a, b| {
            b.relevance
                .partial_cmp(&a.relevance)
                .unwrap_or(std::cmp::Ordering::Equal)
        });
        claim_hits.sort_by(|a, b| {
            b.relevance
                .partial_cmp(&a.relevance)
                .unwrap_or(std::cmp::Ordering::Equal)
        });
        entity_hits.truncate(top_k);
        claim_hits.truncate(top_k);

        Ok(SearchResult {
            entities: entity_hits,
            claims: claim_hits,
        })
    }

    /// List tracked contradictions in the workspace.
    /// Served from in-memory cache.
    pub async fn list_contradictions(&self, ws: &str) -> Result<Vec<ContradictionInfo>> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        Ok(cache
            .all_contradictions()
            .iter()
            .map(|c| ContradictionInfo {
                id: c.id.clone(),
                claim_a: c.claim_a.clone(),
                claim_b: c.claim_b.clone(),
                explanation: c.explanation.clone(),
                status: c.status.clone(),
            })
            .collect())
    }

    /// Alias for `health()` — delegates to the same verification logic.
    pub async fn verify(&self, ws: &str) -> Result<VerificationResult> {
        self.health(ws).await
    }

    /// Return a token-efficient workspace overview for agent orientation.
    /// Served entirely from in-memory cache — zero disk I/O.
    pub async fn get_workspace_brief(&self, ws: &str) -> Result<WorkspaceSummary> {
        let handle = self.get_workspace(ws)?;
        let cache = handle.cache.read().await;

        let (source_count, claim_count, entity_count) = cache.counts();
        let top_entities = cache.top_entities_by_claim_count(10);

        let recent_decisions: Vec<(String, f64)> = cache
            .claims_of_type("Decision")
            .into_iter()
            .take(10)
            .map(|c| (c.statement.clone(), c.confidence))
            .collect();

        let contradiction_count = cache
            .all_contradictions()
            .iter()
            .filter(|c| c.status == "Detected")
            .count();

        Ok(WorkspaceSummary {
            workspace: ws.to_string(),
            entity_count,
            claim_count,
            source_count,
            top_entities,
            recent_decisions,
            contradiction_count,
        })
    }

    /// Return full graph context for a named entity.
    ///
    /// This executes 6 Datalog queries directly against CozoDB (incoming relations,
    /// per-entity contradictions). It is kept on CozoDB for correctness; Phase C
    /// will add a full entity-context cache.
    pub async fn get_entity_context(
        &self,
        ws: &str,
        entity_name: &str,
    ) -> Result<Option<thinkingroot_graph::graph::EntityContext>> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        storage.graph.get_entity_context(entity_name)
    }

    /// Write agent-inferred claims directly into the graph, bypassing parse→extract.
    ///
    /// Claims are tagged `ExtractionTier::AgentInferred` and `TrustLevel::Untrusted`.
    /// A subsequent `root compile` will cross-validate against source code and may
    /// promote, supersede, or reject them based on grounding results.
    ///
    /// A synthetic source `mcp://agent/{session_id}` is created to anchor provenance.
    /// The in-memory cache is reloaded after writing so subsequent reads see new claims.
    pub async fn contribute_claims(
        &self,
        ws: &str,
        session_id: &str,
        branch: Option<&str>,
        agent_claims: Vec<AgentClaim>,
    ) -> Result<ContributeResult> {
        use thinkingroot_branch::snapshot::resolve_data_dir;
        use thinkingroot_core::types::{ContentHash, SourceType, TrustLevel};
        use thinkingroot_graph::graph::GraphStore;

        if agent_claims.is_empty() {
            return Ok(ContributeResult {
                accepted_count: 0,
                accepted_ids: vec![],
                source_uri: String::new(),
                warnings: vec!["no claims provided".to_string()],
            });
        }

        let handle = self.get_workspace(ws)?;

        // Synthetic source anchors provenance for all contributed claims.
        let ts = chrono::Utc::now().timestamp();
        let source_uri = format!("mcp://agent/{session_id}");
        let source = thinkingroot_core::Source::new(source_uri.clone(), SourceType::ChatMessage)
            .with_trust(TrustLevel::Untrusted)
            .with_hash(ContentHash(format!("{session_id}-{ts}")));

        // Branch path: writes go to the branch graph only; main cache unchanged.
        if let Some(branch_name) = branch {
            let branch_data_dir = resolve_data_dir(&handle.root_path, Some(branch_name));
            if !branch_data_dir.exists() {
                return Err(Error::EntityNotFound(format!(
                    "branch '{branch_name}' not found — create it first with create_branch"
                )));
            }
            let graph = GraphStore::init(&branch_data_dir.join("graph"))
                .map_err(|e| Error::GraphStorage(format!("branch graph init failed: {e}")))?;
            let (accepted_ids, warnings) =
                Self::write_agent_claims_to_graph(&graph, &source, &agent_claims)?;
            return Ok(ContributeResult {
                accepted_count: accepted_ids.len(),
                accepted_ids,
                source_uri,
                warnings,
            });
        }

        // No active branch — write to main graph, then reload cache.
        let accepted_ids;
        let warnings;
        {
            let storage = handle.storage.lock().await;
            (accepted_ids, warnings) =
                Self::write_agent_claims_to_graph(&storage.graph, &source, &agent_claims)?;

            // Reload while still holding storage lock so no concurrent write
            // can slip in between the CozoDB write and the cache update.
            match KnowledgeGraph::load_from_graph(&storage.graph) {
                Ok(new_cache) => {
                    *handle.cache.write().await = new_cache;
                }
                Err(e) => {
                    tracing::warn!("cache reload after contribute failed (non-fatal): {e}");
                }
            }
        }

        Ok(ContributeResult {
            accepted_count: accepted_ids.len(),
            accepted_ids,
            source_uri,
            warnings,
        })
    }

    /// Inner helper: insert a source + claims into any GraphStore.
    fn write_agent_claims_to_graph(
        graph: &thinkingroot_graph::graph::GraphStore,
        source: &thinkingroot_core::Source,
        agent_claims: &[AgentClaim],
    ) -> Result<(Vec<String>, Vec<String>)> {
        graph.insert_source(source)?;

        let mut accepted_ids: Vec<String> = Vec::new();
        let mut warnings: Vec<String> = Vec::new();

        for ac in agent_claims {
            let claim_type = parse_claim_type_str(&ac.claim_type);
            let claim = thinkingroot_core::Claim::new(
                ac.statement.clone(),
                claim_type,
                source.id,
                thinkingroot_core::types::WorkspaceId::new(),
            )
            .with_confidence(ac.confidence.unwrap_or(0.7))
            .with_extraction_tier(thinkingroot_core::types::ExtractionTier::AgentInferred);

            graph.insert_claim(&claim)?;
            graph.link_claim_to_source(&claim.id.to_string(), &source.id.to_string())?;

            for entity_name in &ac.entities {
                match graph.find_entity_id_by_name(entity_name) {
                    Ok(Some(eid)) => {
                        graph.link_claim_to_entity(&claim.id.to_string(), &eid)?;
                    }
                    Ok(None) => {
                        warnings.push(format!(
                            "entity '{entity_name}' not found — claim saved but unlinked"
                        ));
                    }
                    Err(e) => {
                        warnings.push(format!("entity lookup failed for '{entity_name}': {e}"));
                    }
                }
            }

            accepted_ids.push(claim.id.to_string());
        }

        Ok((accepted_ids, warnings))
    }

    /// Look up a mounted workspace by name, returning an error if not found.
    fn get_workspace(&self, name: &str) -> Result<&WorkspaceHandle> {
        self.workspaces
            .get(name)
            .ok_or_else(|| Error::EntityNotFound(format!("workspace '{name}' not mounted")))
    }
}

// ---------------------------------------------------------------------------
// Intelligent serve layer types
// ---------------------------------------------------------------------------

/// Token-efficient workspace summary for agent orientation.
#[derive(Debug, Clone, Serialize)]
pub struct WorkspaceSummary {
    pub workspace: String,
    pub entity_count: usize,
    pub claim_count: usize,
    pub source_count: usize,
    pub top_entities: Vec<thinkingroot_graph::graph::TopEntity>,
    pub recent_decisions: Vec<(String, f64)>,
    pub contradiction_count: usize,
}

/// An agent-contributed claim submitted via the `contribute` MCP tool.
#[derive(Debug, Clone, Deserialize)]
pub struct AgentClaim {
    pub statement: String,
    #[serde(default = "default_claim_type")]
    pub claim_type: String,
    pub confidence: Option<f64>,
    #[serde(default)]
    pub entities: Vec<String>,
}

fn default_claim_type() -> String {
    "fact".to_string()
}

/// Result of a `contribute_claims` call.
#[derive(Debug, Clone, Serialize)]
pub struct ContributeResult {
    pub accepted_count: usize,
    pub accepted_ids: Vec<String>,
    pub source_uri: String,
    pub warnings: Vec<String>,
}

/// Parse a claim type string (case-insensitive) into a `ClaimType` enum.
fn parse_claim_type_str(s: &str) -> thinkingroot_core::types::ClaimType {
    use thinkingroot_core::types::ClaimType;
    match s.to_lowercase().as_str() {
        "decision" => ClaimType::Decision,
        "opinion" => ClaimType::Opinion,
        "plan" => ClaimType::Plan,
        "requirement" => ClaimType::Requirement,
        "metric" => ClaimType::Metric,
        "definition" => ClaimType::Definition,
        "dependency" => ClaimType::Dependency,
        "api_signature" | "apisignature" => ClaimType::ApiSignature,
        "architecture" => ClaimType::Architecture,
        _ => ClaimType::Fact,
    }
}

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

fn cached_claim_to_info(c: &CachedClaim) -> ClaimInfo {
    ClaimInfo {
        id: c.id.clone(),
        statement: c.statement.clone(),
        claim_type: c.claim_type.clone(),
        confidence: c.confidence,
        source_uri: c.source_uri.clone(),
    }
}
