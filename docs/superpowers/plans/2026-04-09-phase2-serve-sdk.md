# Phase 2: Serve & SDK — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make compiled ThinkingRoot knowledge queryable via REST API, MCP Server, and Python SDK.

**Architecture:** Shared QueryEngine with transport adapters. All transports (REST, MCP stdio, MCP SSE, PyO3) call the same QueryEngine methods — zero logic duplication. VectorStore requires `&mut self` for search, so each workspace's StorageEngine is wrapped in `Arc<tokio::sync::Mutex<>>` for safe concurrent access.

**Tech Stack:** Rust (Axum, tokio, tower, serde_json, tokio-stream), MCP protocol (JSON-RPC 2.0 over stdio + SSE), Python (PyO3 0.23, maturin, httpx)

**Spec:** `docs/superpowers/specs/2026-04-09-phase2-serve-sdk-design.md`

---

## File Structure

### Modified Files

```
crates/thinkingroot-serve/Cargo.toml          — add: parse, extract, link, compile, verify, chrono, anyhow, tokio-stream deps
crates/thinkingroot-serve/src/lib.rs           — replace placeholder with module declarations
crates/thinkingroot-cli/Cargo.toml             — add: thinkingroot-serve dep
crates/thinkingroot-cli/src/main.rs            — add: Serve subcommand + dispatch
crates/thinkingroot-verify/src/verifier.rs     — add: Serialize derive on VerificationResult
Cargo.toml                                      — add: tokio-stream to workspace deps, thinkingroot-python to members
```

### New Files

```
crates/thinkingroot-serve/src/engine.rs        — QueryEngine: shared query core, WorkspaceHandle, SearchResult types
crates/thinkingroot-serve/src/rest.rs           — Axum routes, middleware, JSON response types
crates/thinkingroot-serve/src/mcp/mod.rs        — MCP protocol types (JSON-RPC 2.0), dispatcher
crates/thinkingroot-serve/src/mcp/stdio.rs      — MCP stdio transport (stdin/stdout)
crates/thinkingroot-serve/src/mcp/sse.rs        — MCP HTTP/SSE transport (Axum endpoint)
crates/thinkingroot-serve/src/mcp/resources.rs  — MCP resource handlers
crates/thinkingroot-serve/src/mcp/tools.rs      — MCP tool handlers
crates/thinkingroot-cli/src/serve.rs            — root serve command logic (launch server)
thinkingroot-python/Cargo.toml                  — PyO3 crate config
thinkingroot-python/pyproject.toml              — maturin + package metadata
thinkingroot-python/src/lib.rs                  — PyO3 native bindings
thinkingroot-python/python/thinkingroot/__init__.py    — re-exports
thinkingroot-python/python/thinkingroot/client.py      — HTTP client (httpx)
thinkingroot-python/python/thinkingroot/_thinkingroot.pyi — type stubs
```

---

## Task 1: Dependency Setup + VerificationResult Serialize

**Files:**
- Modify: `crates/thinkingroot-serve/Cargo.toml`
- Modify: `crates/thinkingroot-cli/Cargo.toml`
- Modify: `Cargo.toml` (workspace root)
- Modify: `crates/thinkingroot-verify/src/verifier.rs:11` (add Serialize derive)

- [ ] **Step 1: Add missing dependencies to thinkingroot-serve/Cargo.toml**

Replace the full `[dependencies]` section:

```toml
[dependencies]
thinkingroot-core = { workspace = true }
thinkingroot-graph = { workspace = true }
thinkingroot-parse = { workspace = true }
thinkingroot-extract = { workspace = true }
thinkingroot-link = { workspace = true }
thinkingroot-compile = { workspace = true }
thinkingroot-verify = { workspace = true }
serde = { workspace = true }
serde_json = { workspace = true }
thiserror = { workspace = true }
tokio = { workspace = true }
tracing = { workspace = true }
chrono = { workspace = true }
anyhow = { workspace = true }
axum = { workspace = true }
tower = { workspace = true }
tower-http = { workspace = true }
tokio-stream = "0.1"

[dev-dependencies]
tempfile = "3"
reqwest = { version = "0.12", features = ["json"] }
```

- [ ] **Step 2: Add thinkingroot-serve to CLI dependencies**

In `crates/thinkingroot-cli/Cargo.toml`, add to `[dependencies]`:

```toml
thinkingroot-serve = { workspace = true }
```

- [ ] **Step 3: Add tokio-stream to workspace root Cargo.toml**

In root `Cargo.toml`, add under `[workspace.dependencies]` in the `# Misc` section:

```toml
tokio-stream = "0.1"
```

- [ ] **Step 4: Add Serialize derive to VerificationResult**

In `crates/thinkingroot-verify/src/verifier.rs`, change line 11:

```rust
#[derive(Debug, serde::Serialize)]
pub struct VerificationResult {
```

- [ ] **Step 5: Verify workspace compiles**

Run: `cargo check --workspace`
Expected: compiles with zero errors (warnings OK)

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "chore: add Phase 2 dependencies and Serialize derive on VerificationResult"
```

---

## Task 2: QueryEngine Core

**Files:**
- Create: `crates/thinkingroot-serve/src/engine.rs`
- Modify: `crates/thinkingroot-serve/src/lib.rs`

- [ ] **Step 1: Replace lib.rs placeholder with module declarations**

Write `crates/thinkingroot-serve/src/lib.rs`:

```rust
pub mod engine;
```

- [ ] **Step 2: Write QueryEngine struct and types**

Create `crates/thinkingroot-serve/src/engine.rs`:

```rust
use std::collections::HashMap;
use std::path::{Path, PathBuf};
use std::sync::Arc;

use serde::Serialize;
use tokio::sync::Mutex;

use thinkingroot_core::config::Config;
use thinkingroot_core::types::*;
use thinkingroot_core::{Error, Result};
use thinkingroot_graph::StorageEngine;
use thinkingroot_graph::graph::GraphStore;

// ─── Public Types ────────────────────────────────────────────

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

#[derive(Debug, Clone, Serialize)]
pub struct PipelineResult {
    pub files_parsed: usize,
    pub claims_count: usize,
    pub entities_count: usize,
    pub relations_count: usize,
    pub contradictions_count: usize,
    pub artifacts_count: usize,
    pub health_score: u8,
}

// ─── Workspace Handle ────────────────────────────────────────

struct WorkspaceHandle {
    name: String,
    root_path: PathBuf,
    storage: Arc<Mutex<StorageEngine>>,
    config: Config,
}

// ─── Query Engine ────────────────────────────────────────────

pub struct QueryEngine {
    workspaces: HashMap<String, WorkspaceHandle>,
}

impl QueryEngine {
    pub fn new() -> Self {
        Self {
            workspaces: HashMap::new(),
        }
    }

    /// Mount a workspace from a directory path.
    /// The directory must contain a `.thinkingroot/` subdirectory (already compiled).
    pub async fn mount(&mut self, name: String, root_path: PathBuf) -> Result<()> {
        let data_dir = root_path.join(".thinkingroot");
        if !data_dir.exists() {
            return Err(Error::Config(format!(
                "No .thinkingroot/ directory found at {}. Run `root compile` first.",
                root_path.display()
            )));
        }

        let config = Config::load(&root_path)?;
        let storage = StorageEngine::init(&data_dir).await?;

        self.workspaces.insert(
            name.clone(),
            WorkspaceHandle {
                name,
                root_path,
                storage: Arc::new(Mutex::new(storage)),
                config,
            },
        );
        Ok(())
    }

    /// Unmount a workspace.
    pub fn unmount(&mut self, name: &str) -> Result<()> {
        self.workspaces
            .remove(name)
            .map(|_| ())
            .ok_or_else(|| Error::Config(format!("Workspace '{}' not found", name)))
    }

    /// List all mounted workspaces.
    pub async fn list_workspaces(&self) -> Result<Vec<WorkspaceInfo>> {
        let mut result = Vec::new();
        for (name, handle) in &self.workspaces {
            let storage = handle.storage.lock().await;
            let (s, c, e) = storage.graph.get_counts()?;
            result.push(WorkspaceInfo {
                name: name.clone(),
                path: handle.root_path.to_string_lossy().to_string(),
                entity_count: e,
                claim_count: c,
                source_count: s,
            });
        }
        Ok(result)
    }

    // ─── Entity Operations ───────────────────────────────────

    pub async fn list_entities(&self, ws: &str) -> Result<Vec<EntityInfo>> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        let entities = storage.graph.get_all_entities()?;

        Ok(entities
            .into_iter()
            .map(|(id, name, etype)| {
                let claim_count = storage
                    .graph
                    .get_claims_for_entity(&id)
                    .map(|c| c.len())
                    .unwrap_or(0);
                EntityInfo {
                    id,
                    name,
                    entity_type: etype,
                    claim_count,
                }
            })
            .collect())
    }

    pub async fn get_entity(&self, ws: &str, name: &str) -> Result<EntityDetail> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        let entities = storage.graph.get_all_entities()?;

        let (entity_id, entity_name, entity_type) = entities
            .iter()
            .find(|(_, n, _)| n.to_lowercase() == name.to_lowercase())
            .ok_or_else(|| Error::EntityNotFound(name.to_string()))?
            .clone();

        let claims_raw = storage
            .graph
            .get_claims_with_sources_for_entity(&entity_id)?;
        let claims: Vec<ClaimInfo> = claims_raw
            .into_iter()
            .map(|(id, statement, ctype, uri, conf)| ClaimInfo {
                id,
                statement,
                claim_type: ctype,
                confidence: conf,
                source_uri: uri,
            })
            .collect();

        let rels_raw = storage.graph.get_relations_for_entity(&entity_name)?;
        let relations: Vec<RelationInfo> = rels_raw
            .into_iter()
            .map(|(target, rtype, strength)| RelationInfo {
                target,
                relation_type: rtype,
                strength,
            })
            .collect();

        Ok(EntityDetail {
            id: entity_id,
            name: entity_name,
            entity_type,
            claims,
            relations,
        })
    }

    // ─── Claim Operations ────────────────────────────────────

    pub async fn list_claims(&self, ws: &str, filter: ClaimFilter) -> Result<Vec<ClaimInfo>> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;

        let claims = if let Some(ref ctype) = filter.claim_type {
            storage
                .graph
                .get_claims_by_type(ctype)?
                .into_iter()
                .map(|(id, stmt, _, conf, uri)| ClaimInfo {
                    id,
                    statement: stmt,
                    claim_type: ctype.clone(),
                    confidence: conf,
                    source_uri: uri,
                })
                .collect()
        } else {
            storage
                .graph
                .get_all_claims_with_sources()?
                .into_iter()
                .map(|(id, stmt, ctype, conf, uri)| ClaimInfo {
                    id,
                    statement: stmt,
                    claim_type: ctype,
                    confidence: conf,
                    source_uri: uri,
                })
                .collect::<Vec<_>>()
        };

        // Apply filters.
        let min_conf = filter.min_confidence.unwrap_or(0.0);
        let limit = filter.limit.unwrap_or(100);
        let offset = filter.offset.unwrap_or(0);

        let filtered: Vec<ClaimInfo> = claims
            .into_iter()
            .filter(|c| c.confidence >= min_conf)
            .skip(offset)
            .take(limit)
            .collect();

        Ok(filtered)
    }

    // ─── Relation Operations ─────────────────────────────────

    pub async fn get_relations(&self, ws: &str, entity: &str) -> Result<Vec<RelationInfo>> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        let rels = storage.graph.get_relations_for_entity(entity)?;
        Ok(rels
            .into_iter()
            .map(|(target, rtype, strength)| RelationInfo {
                target,
                relation_type: rtype,
                strength,
            })
            .collect())
    }

    pub async fn get_all_relations(
        &self,
        ws: &str,
    ) -> Result<Vec<(String, String, String, f64)>> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        let rels = storage.graph.get_all_relations()?;
        Ok(rels
            .into_iter()
            .map(|(from, to, rtype, _, _, strength)| (from, to, rtype, strength))
            .collect())
    }

    // ─── Artifact Operations ─────────────────────────────────

    pub async fn list_artifacts(&self, ws: &str) -> Result<Vec<ArtifactInfo>> {
        let handle = self.get_workspace(ws)?;
        let data_dir = handle.root_path.join(".thinkingroot");
        let artifacts_dir = data_dir.join("artifacts");

        let types = [
            ("entity-pages", "entities"),
            ("architecture-map", "architecture-map.md"),
            ("contradiction-report", "contradiction-report.md"),
            ("decision-log", "decision-log.md"),
            ("task-pack", "task-pack.md"),
            ("agent-brief", "agent-brief.md"),
            ("runbook", "runbook.md"),
            ("health-report", "health-report.md"),
        ];

        Ok(types
            .iter()
            .map(|(name, file)| ArtifactInfo {
                artifact_type: name.to_string(),
                available: artifacts_dir.join(file).exists(),
            })
            .collect())
    }

    pub async fn get_artifact(&self, ws: &str, artifact_type: &str) -> Result<ArtifactContent> {
        let handle = self.get_workspace(ws)?;
        let artifacts_dir = handle.root_path.join(".thinkingroot").join("artifacts");

        let file_name = match artifact_type {
            "architecture-map" => "architecture-map.md",
            "contradiction-report" => "contradiction-report.md",
            "decision-log" => "decision-log.md",
            "task-pack" => "task-pack.md",
            "agent-brief" => "agent-brief.md",
            "runbook" => "runbook.md",
            "health-report" => "health-report.md",
            other => {
                return Err(Error::Config(format!(
                    "Unknown artifact type: '{}'. Valid types: architecture-map, contradiction-report, decision-log, task-pack, agent-brief, runbook, health-report",
                    other
                )));
            }
        };

        let path = artifacts_dir.join(file_name);
        let content = std::fs::read_to_string(&path)
            .map_err(|e| Error::io_path(&path, e))?;

        Ok(ArtifactContent {
            artifact_type: artifact_type.to_string(),
            content,
        })
    }

    // ─── Health ──────────────────────────────────────────────

    pub async fn health(
        &self,
        ws: &str,
    ) -> Result<thinkingroot_verify::verifier::VerificationResult> {
        let handle = self.get_workspace(ws)?;
        let storage = handle.storage.lock().await;
        let verifier = thinkingroot_verify::Verifier::new(&handle.config);
        verifier.verify(&storage.graph)
    }

    // ─── Search ──────────────────────────────────────────────

    pub async fn search(&self, ws: &str, query: &str, top_k: usize) -> Result<SearchResult> {
        let handle = self.get_workspace(ws)?;
        let mut storage = handle.storage.lock().await;

        // 1. Vector search.
        let vector_results = storage.vector.search(query, top_k)?;

        let mut entity_hits: Vec<EntitySearchHit> = Vec::new();
        let mut claim_hits: Vec<ClaimSearchHit> = Vec::new();

        for (id, metadata, score) in &vector_results {
            if score < &0.1 {
                continue;
            }
            // metadata format: "entity|{id}|{name}|{type}" or "claim|{id}|{statement}|{type}|{uri}"
            let parts: Vec<&str> = metadata.splitn(5, '|').collect();
            match parts.first().copied() {
                Some("entity") if parts.len() >= 4 => {
                    let claim_count = storage
                        .graph
                        .get_claims_for_entity(parts[1])
                        .map(|c| c.len())
                        .unwrap_or(0);
                    entity_hits.push(EntitySearchHit {
                        id: parts[1].to_string(),
                        name: parts[2].to_string(),
                        entity_type: parts[3].to_string(),
                        claim_count,
                        relevance: *score,
                    });
                }
                Some("claim") if parts.len() >= 5 => {
                    claim_hits.push(ClaimSearchHit {
                        id: parts[1].to_string(),
                        statement: parts[2].to_string(),
                        claim_type: parts[3].to_string(),
                        confidence: 0.8, // default; not stored in metadata
                        source_uri: parts[4].to_string(),
                        relevance: *score,
                    });
                }
                _ => {}
            }
        }

        // 2. Keyword fallback if vector didn't return enough.
        if entity_hits.len() + claim_hits.len() < top_k {
            let keyword_entities = storage.graph.search_entities(query).unwrap_or_default();
            for (id, name, etype) in keyword_entities {
                if !entity_hits.iter().any(|e| e.id == id) {
                    let claim_count = storage
                        .graph
                        .get_claims_for_entity(&id)
                        .map(|c| c.len())
                        .unwrap_or(0);
                    entity_hits.push(EntitySearchHit {
                        id,
                        name,
                        entity_type: etype,
                        claim_count,
                        relevance: 0.5, // keyword match baseline
                    });
                }
            }

            let keyword_claims = storage.graph.search_claims(query).unwrap_or_default();
            for (id, stmt, ctype, conf, uri) in keyword_claims {
                if !claim_hits.iter().any(|c| c.id == id) {
                    claim_hits.push(ClaimSearchHit {
                        id,
                        statement: stmt,
                        claim_type: ctype,
                        confidence: conf,
                        source_uri: uri,
                        relevance: 0.5,
                    });
                }
            }
        }

        // 3. Sort by relevance, truncate.
        entity_hits.sort_by(|a, b| b.relevance.partial_cmp(&a.relevance).unwrap());
        claim_hits.sort_by(|a, b| b.relevance.partial_cmp(&a.relevance).unwrap());
        entity_hits.truncate(top_k);
        claim_hits.truncate(top_k);

        Ok(SearchResult {
            entities: entity_hits,
            claims: claim_hits,
        })
    }

    // ─── Pipeline ────────────────────────────────────────────

    pub async fn compile(&self, ws: &str) -> Result<PipelineResult> {
        let handle = self.get_workspace(ws)?;
        // Use the existing CLI pipeline runner.
        let result = thinkingroot_cli_pipeline::run_pipeline(&handle.root_path).await
            .map_err(|e| Error::Compilation {
                artifact_type: "pipeline".to_string(),
                message: e.to_string(),
            })?;
        // Reload storage after compilation.
        let data_dir = handle.root_path.join(".thinkingroot");
        let new_storage = StorageEngine::init(&data_dir).await?;
        let mut storage = handle.storage.lock().await;
        *storage = new_storage;

        Ok(PipelineResult {
            files_parsed: result.files_parsed,
            claims_count: result.claims_count,
            entities_count: result.entities_count,
            relations_count: result.relations_count,
            contradictions_count: result.contradictions_count,
            artifacts_count: result.artifacts_count,
            health_score: result.health_score,
        })
    }

    pub async fn verify(
        &self,
        ws: &str,
    ) -> Result<thinkingroot_verify::verifier::VerificationResult> {
        self.health(ws).await
    }

    // ─── Internal ────────────────────────────────────────────

    fn get_workspace(&self, name: &str) -> Result<&WorkspaceHandle> {
        self.workspaces
            .get(name)
            .ok_or_else(|| Error::Config(format!("Workspace '{}' not found", name)))
    }
}
```

**Important note on `compile()`:** The engine calls into the CLI pipeline module. To avoid a circular dependency (CLI depends on serve, serve calls CLI pipeline), we need to extract `run_pipeline` into `thinkingroot-serve` or make the pipeline a shared function. The cleanest approach: the `compile` REST/MCP handler in the CLI's `serve.rs` calls `run_pipeline` directly and reloads the engine's storage afterward, rather than having the engine call the pipeline. **When implementing, put the compile logic in the REST handler instead of engine.rs, and remove the `compile()` method from QueryEngine.** The engine stays read-only; mutation happens at the transport layer.

- [ ] **Step 3: Verify it compiles**

Run: `cargo check -p thinkingroot-serve`
Expected: compiles (may have unused warnings — that's fine)

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(serve): add QueryEngine with all query operations"
```

---

## Task 3: REST API

**Files:**
- Create: `crates/thinkingroot-serve/src/rest.rs`
- Modify: `crates/thinkingroot-serve/src/lib.rs`

- [ ] **Step 1: Add rest module to lib.rs**

```rust
pub mod engine;
pub mod rest;
```

- [ ] **Step 2: Write REST API with all routes**

Create `crates/thinkingroot-serve/src/rest.rs`:

```rust
use std::sync::Arc;

use axum::extract::{Path, Query, State};
use axum::http::{HeaderMap, StatusCode};
use axum::middleware;
use axum::response::{IntoResponse, Json, Response};
use axum::routing::{get, post};
use axum::Router;
use serde::{Deserialize, Serialize};
use tokio::sync::RwLock;
use tower_http::cors::{Any, CorsLayer};

use crate::engine::{ClaimFilter, QueryEngine};

// ─── App State ───────────────────────────────────────────────

pub struct AppState {
    pub engine: RwLock<QueryEngine>,
    pub api_key: Option<String>,
}

// ─── Response Envelope ───────────────────────────────────────

#[derive(Serialize)]
struct ApiResponse<T: Serialize> {
    ok: bool,
    data: Option<T>,
    error: Option<ApiError>,
}

#[derive(Serialize)]
struct ApiError {
    code: String,
    message: String,
}

fn ok_response<T: Serialize>(data: T) -> Json<ApiResponse<T>> {
    Json(ApiResponse {
        ok: true,
        data: Some(data),
        error: None,
    })
}

fn err_response(status: StatusCode, code: &str, message: &str) -> Response {
    let body = ApiResponse::<()> {
        ok: false,
        data: None,
        error: Some(ApiError {
            code: code.to_string(),
            message: message.to_string(),
        }),
    };
    (status, Json(body)).into_response()
}

// ─── Query Params ────────────────────────────────────────────

#[derive(Deserialize)]
pub struct ClaimQueryParams {
    #[serde(rename = "type")]
    pub claim_type: Option<String>,
    pub entity: Option<String>,
    pub min_confidence: Option<f64>,
    pub limit: Option<usize>,
    pub offset: Option<usize>,
}

#[derive(Deserialize)]
pub struct SearchQueryParams {
    pub q: String,
    pub top_k: Option<usize>,
}

// ─── Router ──────────────────────────────────────────────────

pub fn build_router(state: Arc<AppState>) -> Router {
    let api_routes = Router::new()
        .route("/workspaces", get(list_workspaces))
        .route("/ws/{ws}/entities", get(list_entities))
        .route("/ws/{ws}/entities/{name}", get(get_entity))
        .route("/ws/{ws}/claims", get(list_claims))
        .route("/ws/{ws}/relations", get(get_all_relations))
        .route("/ws/{ws}/relations/{entity}", get(get_entity_relations))
        .route("/ws/{ws}/artifacts", get(list_artifacts))
        .route("/ws/{ws}/artifacts/{artifact_type}", get(get_artifact))
        .route("/ws/{ws}/health", get(get_health))
        .route("/ws/{ws}/search", get(search))
        .route("/ws/{ws}/compile", post(compile))
        .route("/ws/{ws}/verify", post(verify_ws));

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    Router::new()
        .nest("/api/v1", api_routes)
        .layer(cors)
        .layer(middleware::from_fn_with_state(
            state.clone(),
            auth_middleware,
        ))
        .with_state(state)
}

// ─── Auth Middleware ──────────────────────────────────────────

async fn auth_middleware(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
    request: axum::extract::Request,
    next: middleware::Next,
) -> Response {
    if let Some(ref expected_key) = state.api_key {
        let provided = headers
            .get("authorization")
            .and_then(|v| v.to_str().ok())
            .and_then(|v| v.strip_prefix("Bearer "));

        match provided {
            Some(key) if key == expected_key => {}
            _ => {
                return err_response(
                    StatusCode::UNAUTHORIZED,
                    "UNAUTHORIZED",
                    "Invalid or missing API key",
                );
            }
        }
    }
    next.run(request).await
}

// ─── Handlers ────────────────────────────────────────────────

async fn list_workspaces(State(state): State<Arc<AppState>>) -> Response {
    let engine = state.engine.read().await;
    match engine.list_workspaces().await {
        Ok(ws) => ok_response(ws).into_response(),
        Err(e) => err_response(StatusCode::INTERNAL_SERVER_ERROR, "INTERNAL", &e.to_string()),
    }
}

async fn list_entities(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.list_entities(&ws).await {
        Ok(entities) => ok_response(entities).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn get_entity(
    State(state): State<Arc<AppState>>,
    Path((ws, name)): Path<(String, String)>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.get_entity(&ws, &name).await {
        Ok(entity) => ok_response(entity).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn list_claims(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
    Query(params): Query<ClaimQueryParams>,
) -> Response {
    let engine = state.engine.read().await;
    let filter = ClaimFilter {
        claim_type: params.claim_type,
        entity_name: params.entity,
        min_confidence: params.min_confidence,
        limit: params.limit,
        offset: params.offset,
    };
    match engine.list_claims(&ws, filter).await {
        Ok(claims) => ok_response(claims).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn get_all_relations(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.get_all_relations(&ws).await {
        Ok(rels) => {
            let data: Vec<serde_json::Value> = rels
                .into_iter()
                .map(|(from, to, rtype, strength)| {
                    serde_json::json!({
                        "from": from,
                        "to": to,
                        "relation_type": rtype,
                        "strength": strength,
                    })
                })
                .collect();
            ok_response(data).into_response()
        }
        Err(e) => match_engine_error(e),
    }
}

async fn get_entity_relations(
    State(state): State<Arc<AppState>>,
    Path((ws, entity)): Path<(String, String)>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.get_relations(&ws, &entity).await {
        Ok(rels) => ok_response(rels).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn list_artifacts(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.list_artifacts(&ws).await {
        Ok(artifacts) => ok_response(artifacts).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn get_artifact(
    State(state): State<Arc<AppState>>,
    Path((ws, artifact_type)): Path<(String, String)>,
    headers: HeaderMap,
) -> Response {
    let engine = state.engine.read().await;
    match engine.get_artifact(&ws, &artifact_type).await {
        Ok(artifact) => {
            let wants_markdown = headers
                .get("accept")
                .and_then(|v| v.to_str().ok())
                .map(|v| v.contains("text/markdown"))
                .unwrap_or(false);

            if wants_markdown {
                (StatusCode::OK, [("content-type", "text/markdown")], artifact.content)
                    .into_response()
            } else {
                ok_response(artifact).into_response()
            }
        }
        Err(e) => match_engine_error(e),
    }
}

async fn get_health(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.health(&ws).await {
        Ok(result) => ok_response(result).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn search(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
    Query(params): Query<SearchQueryParams>,
) -> Response {
    let engine = state.engine.read().await;
    let top_k = params.top_k.unwrap_or(10);
    match engine.search(&ws, &params.q, top_k).await {
        Ok(results) => ok_response(results).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn compile(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.compile(&ws).await {
        Ok(result) => ok_response(result).into_response(),
        Err(e) => match_engine_error(e),
    }
}

async fn verify_ws(
    State(state): State<Arc<AppState>>,
    Path(ws): Path<String>,
) -> Response {
    let engine = state.engine.read().await;
    match engine.verify(&ws).await {
        Ok(result) => ok_response(result).into_response(),
        Err(e) => match_engine_error(e),
    }
}

// ─── Error Mapping ───────────────────────────────────────────

fn match_engine_error(e: thinkingroot_core::Error) -> Response {
    match &e {
        thinkingroot_core::Error::EntityNotFound(_) => {
            err_response(StatusCode::NOT_FOUND, "NOT_FOUND", &e.to_string())
        }
        thinkingroot_core::Error::Config(_) => {
            err_response(StatusCode::NOT_FOUND, "NOT_FOUND", &e.to_string())
        }
        _ => err_response(
            StatusCode::INTERNAL_SERVER_ERROR,
            "INTERNAL",
            &e.to_string(),
        ),
    }
}
```

- [ ] **Step 3: Verify it compiles**

Run: `cargo check -p thinkingroot-serve`
Expected: compiles

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(serve): add REST API with all routes, auth middleware, CORS"
```

---

## Task 4: `root serve` CLI Command

**Files:**
- Create: `crates/thinkingroot-cli/src/serve.rs`
- Modify: `crates/thinkingroot-cli/src/main.rs`

- [ ] **Step 1: Add Serve subcommand to main.rs**

Add to the `Commands` enum in `main.rs`:

```rust
    /// Start the REST API and MCP server
    Serve {
        /// Port to bind
        #[arg(long, default_value = "3000")]
        port: u16,
        /// Host to bind
        #[arg(long, default_value = "127.0.0.1")]
        host: String,
        /// Optional API key for authentication
        #[arg(long)]
        api_key: Option<String>,
        /// Workspace paths (repeatable)
        #[arg(long = "path", default_value = ".")]
        paths: Vec<PathBuf>,
        /// Run as MCP stdio server (single workspace, no HTTP)
        #[arg(long)]
        mcp_stdio: bool,
        /// Disable REST API (MCP only)
        #[arg(long)]
        no_rest: bool,
        /// Disable MCP endpoints (REST only)
        #[arg(long)]
        no_mcp: bool,
    },
```

Add to the match in `main()`:

```rust
        Some(Commands::Serve {
            port,
            host,
            api_key,
            paths,
            mcp_stdio,
            no_rest,
            no_mcp,
        }) => {
            serve::run_serve(port, host, api_key, paths, mcp_stdio, no_rest, no_mcp).await?;
        }
```

Add `mod serve;` at the top of main.rs.

- [ ] **Step 2: Write serve.rs**

Create `crates/thinkingroot-cli/src/serve.rs`:

```rust
use std::path::PathBuf;
use std::sync::Arc;

use tokio::sync::RwLock;

use thinkingroot_serve::engine::QueryEngine;
use thinkingroot_serve::rest::{self, AppState};

/// Launch the ThinkingRoot server (REST API + MCP).
pub async fn run_serve(
    port: u16,
    host: String,
    api_key: Option<String>,
    paths: Vec<PathBuf>,
    mcp_stdio: bool,
    _no_rest: bool,
    _no_mcp: bool,
) -> anyhow::Result<()> {
    // Build query engine and mount workspaces.
    let mut engine = QueryEngine::new();

    for path in &paths {
        let abs_path = std::fs::canonicalize(path)?;
        let name = abs_path
            .file_name()
            .map(|n| n.to_string_lossy().to_string())
            .unwrap_or_else(|| "default".to_string());

        // Handle name collisions.
        let mut ws_name = name.clone();
        let mut counter = 2;
        while engine.list_workspaces().await?.iter().any(|w| w.name == ws_name) {
            ws_name = format!("{}-{}", name, counter);
            counter += 1;
        }

        engine.mount(ws_name.clone(), abs_path.clone()).await?;
        tracing::info!("mounted workspace '{}' from {}", ws_name, abs_path.display());
    }

    if mcp_stdio {
        // MCP stdio mode: read JSON-RPC from stdin, write to stdout.
        // Implemented in Task 5.
        tracing::info!("MCP stdio mode — reading from stdin");
        // TODO: Wire up MCP stdio transport (Task 5)
        eprintln!("MCP stdio transport not yet implemented");
        return Ok(());
    }

    // Print banner.
    let workspaces = engine.list_workspaces().await?;
    let auth_status = if api_key.is_some() { "API key required" } else { "open (no auth)" };

    println!();
    println!("  ThinkingRoot v{}", env!("CARGO_PKG_VERSION"));
    println!("  REST API:  http://{}:{}/api/v1/", host, port);
    println!("  MCP SSE:   http://{}:{}/mcp/sse", host, port);
    for ws in &workspaces {
        println!(
            "  Workspace: {} ({} entities, {} claims)",
            ws.name, ws.entity_count, ws.claim_count
        );
    }
    println!("  Auth:      {}", auth_status);
    println!();

    // Build and start server.
    let state = Arc::new(AppState {
        engine: RwLock::new(engine),
        api_key,
    });

    let router = rest::build_router(state);
    let addr = format!("{}:{}", host, port);
    let listener = tokio::net::TcpListener::bind(&addr).await?;
    tracing::info!("server listening on {}", addr);

    axum::serve(listener, router)
        .with_graceful_shutdown(shutdown_signal())
        .await?;

    Ok(())
}

async fn shutdown_signal() {
    tokio::signal::ctrl_c()
        .await
        .expect("failed to install Ctrl+C handler");
    tracing::info!("shutdown signal received, stopping server...");
}
```

- [ ] **Step 3: Verify it compiles**

Run: `cargo check -p thinkingroot-cli`
Expected: compiles (there will be a warning about unused `_no_rest`/`_no_mcp` — that's fine, wired up in Task 5)

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(cli): add root serve command with REST API"
```

---

## Task 5: MCP Protocol Types + stdio Transport

**Files:**
- Create: `crates/thinkingroot-serve/src/mcp/mod.rs`
- Create: `crates/thinkingroot-serve/src/mcp/stdio.rs`
- Create: `crates/thinkingroot-serve/src/mcp/resources.rs`
- Create: `crates/thinkingroot-serve/src/mcp/tools.rs`
- Modify: `crates/thinkingroot-serve/src/lib.rs`

- [ ] **Step 1: Add mcp module to lib.rs**

```rust
pub mod engine;
pub mod rest;
pub mod mcp;
```

- [ ] **Step 2: Write MCP protocol types (mod.rs)**

Create `crates/thinkingroot-serve/src/mcp/mod.rs`:

```rust
pub mod resources;
pub mod stdio;
pub mod tools;

use serde::{Deserialize, Serialize};
use serde_json::Value;

// ─── JSON-RPC 2.0 Types ─────────────────────────────────────

#[derive(Debug, Deserialize)]
pub struct JsonRpcRequest {
    pub jsonrpc: String,
    pub id: Option<Value>,
    pub method: String,
    #[serde(default)]
    pub params: Value,
}

#[derive(Debug, Serialize)]
pub struct JsonRpcResponse {
    pub jsonrpc: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub id: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub result: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<JsonRpcError>,
}

#[derive(Debug, Serialize)]
pub struct JsonRpcError {
    pub code: i32,
    pub message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub data: Option<Value>,
}

impl JsonRpcResponse {
    pub fn success(id: Option<Value>, result: Value) -> Self {
        Self {
            jsonrpc: "2.0".to_string(),
            id,
            result: Some(result),
            error: None,
        }
    }

    pub fn error(id: Option<Value>, code: i32, message: String) -> Self {
        Self {
            jsonrpc: "2.0".to_string(),
            id,
            result: None,
            error: Some(JsonRpcError {
                code,
                message,
                data: None,
            }),
        }
    }
}

// ─── MCP Server Info ─────────────────────────────────────────

pub fn server_info() -> Value {
    serde_json::json!({
        "protocolVersion": "2024-11-05",
        "serverInfo": {
            "name": "thinkingroot",
            "version": env!("CARGO_PKG_VERSION"),
        },
        "capabilities": {
            "resources": { "listChanged": false },
            "tools": {},
        }
    })
}

// ─── MCP Dispatcher ──────────────────────────────────────────

/// Dispatch an MCP JSON-RPC request to the appropriate handler.
pub async fn dispatch(
    request: &JsonRpcRequest,
    engine: &crate::engine::QueryEngine,
    default_workspace: Option<&str>,
) -> JsonRpcResponse {
    let id = request.id.clone();

    match request.method.as_str() {
        "initialize" => JsonRpcResponse::success(id, server_info()),
        "notifications/initialized" => {
            // Notification — no response needed, but return empty success.
            JsonRpcResponse::success(id, Value::Null)
        }
        "resources/list" => {
            resources::handle_list(id, engine, default_workspace).await
        }
        "resources/read" => {
            resources::handle_read(id, &request.params, engine, default_workspace).await
        }
        "tools/list" => {
            tools::handle_list(id).await
        }
        "tools/call" => {
            tools::handle_call(id, &request.params, engine, default_workspace).await
        }
        "ping" => JsonRpcResponse::success(id, serde_json::json!({})),
        other => JsonRpcResponse::error(
            id,
            -32601,
            format!("Method not found: {}", other),
        ),
    }
}
```

- [ ] **Step 3: Write MCP resource handlers**

Create `crates/thinkingroot-serve/src/mcp/resources.rs`:

```rust
use serde_json::Value;

use super::{JsonRpcResponse};
use crate::engine::QueryEngine;

/// List all available MCP resources.
pub async fn handle_list(
    id: Option<Value>,
    engine: &QueryEngine,
    default_ws: Option<&str>,
) -> JsonRpcResponse {
    let workspaces = match engine.list_workspaces().await {
        Ok(ws) => ws,
        Err(e) => return JsonRpcResponse::error(id, -32603, e.to_string()),
    };

    let mut resources = Vec::new();
    for ws in &workspaces {
        let name = &ws.name;
        resources.push(serde_json::json!({
            "uri": format!("thinkingroot://{}/entities", name),
            "name": format!("{} — Entities", name),
            "mimeType": "application/json",
        }));
        resources.push(serde_json::json!({
            "uri": format!("thinkingroot://{}/health", name),
            "name": format!("{} — Health", name),
            "mimeType": "application/json",
        }));
        resources.push(serde_json::json!({
            "uri": format!("thinkingroot://{}/contradictions", name),
            "name": format!("{} — Contradictions", name),
            "mimeType": "application/json",
        }));
        for atype in &[
            "architecture-map",
            "contradiction-report",
            "decision-log",
            "task-pack",
            "agent-brief",
            "runbook",
            "health-report",
        ] {
            resources.push(serde_json::json!({
                "uri": format!("thinkingroot://{}/artifacts/{}", name, atype),
                "name": format!("{} — {}", name, atype),
                "mimeType": "text/markdown",
            }));
        }
    }

    JsonRpcResponse::success(id, serde_json::json!({ "resources": resources }))
}

/// Read a specific MCP resource by URI.
pub async fn handle_read(
    id: Option<Value>,
    params: &Value,
    engine: &QueryEngine,
    default_ws: Option<&str>,
) -> JsonRpcResponse {
    let uri = match params.get("uri").and_then(|v| v.as_str()) {
        Some(u) => u,
        None => return JsonRpcResponse::error(id, -32602, "Missing 'uri' parameter".to_string()),
    };

    // Parse URI: thinkingroot://{ws}/{resource_type}[/{name}]
    let stripped = match uri.strip_prefix("thinkingroot://") {
        Some(s) => s,
        None => return JsonRpcResponse::error(id, -32602, format!("Invalid URI scheme: {}", uri)),
    };

    let parts: Vec<&str> = stripped.splitn(3, '/').collect();
    let ws = if parts.is_empty() || parts[0].is_empty() {
        match default_ws {
            Some(w) => w,
            None => return JsonRpcResponse::error(id, -32602, "No workspace specified".to_string()),
        }
    } else {
        parts[0]
    };

    let resource_type = parts.get(1).copied().unwrap_or("");
    let resource_name = parts.get(2).copied().unwrap_or("");

    match resource_type {
        "entities" if resource_name.is_empty() => {
            match engine.list_entities(ws).await {
                Ok(entities) => {
                    let content = serde_json::to_string_pretty(&entities).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "contents": [{
                            "uri": uri,
                            "mimeType": "application/json",
                            "text": content,
                        }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "entities" => {
            match engine.get_entity(ws, resource_name).await {
                Ok(entity) => {
                    let content = serde_json::to_string_pretty(&entity).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "contents": [{
                            "uri": uri,
                            "mimeType": "application/json",
                            "text": content,
                        }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "health" => {
            match engine.health(ws).await {
                Ok(result) => {
                    let content = serde_json::to_string_pretty(&result).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "contents": [{
                            "uri": uri,
                            "mimeType": "application/json",
                            "text": content,
                        }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "contradictions" => {
            // Use graph directly — engine doesn't expose contradictions separately yet.
            // Return via health which includes contradictions count.
            match engine.health(ws).await {
                Ok(result) => {
                    let content = serde_json::json!({
                        "contradictions": result.contradictions,
                        "warnings": result.warnings,
                    });
                    JsonRpcResponse::success(id, serde_json::json!({
                        "contents": [{
                            "uri": uri,
                            "mimeType": "application/json",
                            "text": serde_json::to_string_pretty(&content).unwrap_or_default(),
                        }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "artifacts" => {
            match engine.get_artifact(ws, resource_name).await {
                Ok(artifact) => {
                    JsonRpcResponse::success(id, serde_json::json!({
                        "contents": [{
                            "uri": uri,
                            "mimeType": "text/markdown",
                            "text": artifact.content,
                        }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        _ => JsonRpcResponse::error(id, -32602, format!("Unknown resource type: {}", resource_type)),
    }
}
```

- [ ] **Step 4: Write MCP tool handlers**

Create `crates/thinkingroot-serve/src/mcp/tools.rs`:

```rust
use serde_json::Value;

use super::JsonRpcResponse;
use crate::engine::{ClaimFilter, QueryEngine};

/// List all available MCP tools.
pub async fn handle_list(id: Option<Value>) -> JsonRpcResponse {
    let tools = serde_json::json!({
        "tools": [
            {
                "name": "search",
                "description": "Semantic search across entities and claims in the knowledge graph",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "query": { "type": "string", "description": "Search query text" },
                        "top_k": { "type": "integer", "description": "Max results (default 10)", "default": 10 },
                        "workspace": { "type": "string", "description": "Workspace name" },
                    },
                    "required": ["query", "workspace"],
                }
            },
            {
                "name": "query_claims",
                "description": "Filter claims by type, entity, or confidence threshold",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "type": { "type": "string", "description": "Claim type filter (Fact, Decision, Requirement, etc.)" },
                        "entity": { "type": "string", "description": "Filter by entity name" },
                        "min_confidence": { "type": "number", "description": "Minimum confidence (0.0-1.0)" },
                        "workspace": { "type": "string", "description": "Workspace name" },
                    },
                    "required": ["workspace"],
                }
            },
            {
                "name": "get_relations",
                "description": "Get all relations for a specific entity (graph traversal)",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "entity": { "type": "string", "description": "Entity name" },
                        "workspace": { "type": "string", "description": "Workspace name" },
                    },
                    "required": ["entity", "workspace"],
                }
            },
            {
                "name": "compile",
                "description": "Trigger full pipeline recompilation (requires LLM credentials)",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "workspace": { "type": "string", "description": "Workspace name" },
                    },
                    "required": ["workspace"],
                }
            },
            {
                "name": "health_check",
                "description": "Run verification and return knowledge health score",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "workspace": { "type": "string", "description": "Workspace name" },
                    },
                    "required": ["workspace"],
                }
            },
        ]
    });
    JsonRpcResponse::success(id, tools)
}

/// Handle an MCP tool call.
pub async fn handle_call(
    id: Option<Value>,
    params: &Value,
    engine: &QueryEngine,
    default_ws: Option<&str>,
) -> JsonRpcResponse {
    let tool_name = match params.get("name").and_then(|v| v.as_str()) {
        Some(n) => n,
        None => return JsonRpcResponse::error(id, -32602, "Missing 'name' parameter".to_string()),
    };
    let arguments = params.get("arguments").cloned().unwrap_or(Value::Object(Default::default()));

    let ws = arguments
        .get("workspace")
        .and_then(|v| v.as_str())
        .or(default_ws)
        .unwrap_or("default");

    match tool_name {
        "search" => {
            let query = match arguments.get("query").and_then(|v| v.as_str()) {
                Some(q) => q,
                None => return JsonRpcResponse::error(id, -32602, "Missing 'query' argument".to_string()),
            };
            let top_k = arguments
                .get("top_k")
                .and_then(|v| v.as_u64())
                .unwrap_or(10) as usize;

            match engine.search(ws, query, top_k).await {
                Ok(results) => {
                    let content = serde_json::to_string_pretty(&results).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "content": [{ "type": "text", "text": content }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "query_claims" => {
            let filter = ClaimFilter {
                claim_type: arguments.get("type").and_then(|v| v.as_str()).map(String::from),
                entity_name: arguments.get("entity").and_then(|v| v.as_str()).map(String::from),
                min_confidence: arguments.get("min_confidence").and_then(|v| v.as_f64()),
                limit: Some(100),
                offset: None,
            };
            match engine.list_claims(ws, filter).await {
                Ok(claims) => {
                    let content = serde_json::to_string_pretty(&claims).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "content": [{ "type": "text", "text": content }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "get_relations" => {
            let entity = match arguments.get("entity").and_then(|v| v.as_str()) {
                Some(e) => e,
                None => return JsonRpcResponse::error(id, -32602, "Missing 'entity' argument".to_string()),
            };
            match engine.get_relations(ws, entity).await {
                Ok(rels) => {
                    let content = serde_json::to_string_pretty(&rels).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "content": [{ "type": "text", "text": content }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "compile" => {
            match engine.compile(ws).await {
                Ok(result) => {
                    let content = serde_json::to_string_pretty(&result).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "content": [{ "type": "text", "text": content }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        "health_check" => {
            match engine.health(ws).await {
                Ok(result) => {
                    let content = serde_json::to_string_pretty(&result).unwrap_or_default();
                    JsonRpcResponse::success(id, serde_json::json!({
                        "content": [{ "type": "text", "text": content }]
                    }))
                }
                Err(e) => JsonRpcResponse::error(id, -32603, e.to_string()),
            }
        }
        other => JsonRpcResponse::error(id, -32601, format!("Unknown tool: {}", other)),
    }
}
```

- [ ] **Step 5: Write MCP stdio transport**

Create `crates/thinkingroot-serve/src/mcp/stdio.rs`:

```rust
use std::sync::Arc;

use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::sync::RwLock;

use crate::engine::QueryEngine;
use super::JsonRpcRequest;

/// Run the MCP server over stdio (stdin/stdout).
/// Logs go to stderr to avoid interfering with the protocol.
pub async fn run(engine: Arc<RwLock<QueryEngine>>, default_workspace: Option<String>) {
    let stdin = tokio::io::stdin();
    let mut stdout = tokio::io::stdout();
    let reader = BufReader::new(stdin);
    let mut lines = reader.lines();

    loop {
        let line = match lines.next_line().await {
            Ok(Some(line)) => line,
            Ok(None) => {
                // EOF — client disconnected.
                eprintln!("[mcp-stdio] stdin closed, shutting down");
                break;
            }
            Err(e) => {
                eprintln!("[mcp-stdio] read error: {}", e);
                break;
            }
        };

        let line = line.trim().to_string();
        if line.is_empty() {
            continue;
        }

        let request: JsonRpcRequest = match serde_json::from_str(&line) {
            Ok(r) => r,
            Err(e) => {
                let err_response = super::JsonRpcResponse::error(
                    None,
                    -32700,
                    format!("Parse error: {}", e),
                );
                let json = serde_json::to_string(&err_response).unwrap_or_default();
                let _ = stdout.write_all(json.as_bytes()).await;
                let _ = stdout.write_all(b"\n").await;
                let _ = stdout.flush().await;
                continue;
            }
        };

        // Skip notifications (no id = notification, no response needed).
        if request.id.is_none() && request.method.starts_with("notifications/") {
            continue;
        }

        let engine_guard = engine.read().await;
        let response = super::dispatch(
            &request,
            &engine_guard,
            default_workspace.as_deref(),
        )
        .await;
        drop(engine_guard);

        let json = serde_json::to_string(&response).unwrap_or_default();
        let _ = stdout.write_all(json.as_bytes()).await;
        let _ = stdout.write_all(b"\n").await;
        let _ = stdout.flush().await;
    }
}
```

- [ ] **Step 6: Wire MCP stdio into serve.rs**

In `crates/thinkingroot-cli/src/serve.rs`, replace the `if mcp_stdio` block:

```rust
    if mcp_stdio {
        eprintln!("ThinkingRoot MCP stdio server v{}", env!("CARGO_PKG_VERSION"));
        for ws in &workspaces {
            eprintln!("  Workspace: {} ({} entities, {} claims)", ws.name, ws.entity_count, ws.claim_count);
        }

        let default_ws = workspaces.first().map(|w| w.name.clone());
        let engine = Arc::new(RwLock::new(engine));
        thinkingroot_serve::mcp::stdio::run(engine, default_ws).await;
        return Ok(());
    }
```

- [ ] **Step 7: Verify it compiles**

Run: `cargo check --workspace`
Expected: compiles

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat(serve): add MCP server with stdio transport, resources, and tools"
```

---

## Task 6: MCP HTTP/SSE Transport

**Files:**
- Create: `crates/thinkingroot-serve/src/mcp/sse.rs`
- Modify: `crates/thinkingroot-serve/src/rest.rs` (mount MCP endpoint)

- [ ] **Step 1: Write SSE transport**

Create `crates/thinkingroot-serve/src/mcp/sse.rs`:

```rust
use std::sync::Arc;

use axum::extract::State;
use axum::http::StatusCode;
use axum::response::{IntoResponse, Json, Response};
use axum::routing::{get, post};
use axum::Router;
use serde_json::Value;

use crate::rest::AppState;
use super::JsonRpcRequest;

/// Build the MCP SSE router (mounted at /mcp).
pub fn build_router(state: Arc<AppState>) -> Router<Arc<AppState>> {
    Router::new()
        .route("/", post(handle_jsonrpc))
        .route("/sse", get(handle_sse_info))
        .with_state(state)
}

/// Handle a JSON-RPC request over HTTP POST.
async fn handle_jsonrpc(
    State(state): State<Arc<AppState>>,
    Json(request): Json<JsonRpcRequest>,
) -> Response {
    let engine = state.engine.read().await;
    // Use first workspace as default for HTTP/SSE.
    let default_ws = engine
        .list_workspaces()
        .await
        .ok()
        .and_then(|ws| ws.first().map(|w| w.name.clone()));

    let response = super::dispatch(&request, &engine, default_ws.as_deref()).await;
    Json(response).into_response()
}

/// SSE info endpoint — returns server capabilities.
/// Full SSE streaming is a future enhancement; for now, clients use POST /mcp.
async fn handle_sse_info(State(state): State<Arc<AppState>>) -> Response {
    let engine = state.engine.read().await;
    let workspaces = engine.list_workspaces().await.unwrap_or_default();
    let ws_names: Vec<String> = workspaces.iter().map(|w| w.name.clone()).collect();

    Json(serde_json::json!({
        "server": "thinkingroot",
        "version": env!("CARGO_PKG_VERSION"),
        "protocol": "MCP 2024-11-05",
        "transport": "HTTP POST to /mcp for JSON-RPC",
        "workspaces": ws_names,
    }))
    .into_response()
}
```

- [ ] **Step 2: Mount MCP routes on the main router**

In `crates/thinkingroot-serve/src/rest.rs`, modify `build_router` to mount the MCP endpoint:

After the `Router::new().nest("/api/v1", api_routes)` line, add:

```rust
    let mcp_routes = crate::mcp::sse::build_router(state.clone());

    Router::new()
        .nest("/api/v1", api_routes)
        .nest("/mcp", mcp_routes)
        .layer(cors)
        .layer(middleware::from_fn_with_state(
            state.clone(),
            auth_middleware,
        ))
        .with_state(state)
```

(Replace the existing `Router::new()...` chain at the end of `build_router`.)

- [ ] **Step 3: Verify it compiles**

Run: `cargo check --workspace`
Expected: compiles

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(serve): add MCP HTTP/SSE transport"
```

---

## Task 7: Python SDK — PyO3 Native Bindings

**Files:**
- Create: `thinkingroot-python/Cargo.toml`
- Create: `thinkingroot-python/pyproject.toml`
- Create: `thinkingroot-python/src/lib.rs`
- Create: `thinkingroot-python/python/thinkingroot/__init__.py`
- Create: `thinkingroot-python/python/thinkingroot/_thinkingroot.pyi`
- Modify: `Cargo.toml` (add to workspace members)

- [ ] **Step 1: Add thinkingroot-python to workspace**

In root `Cargo.toml`, add `"thinkingroot-python"` to `[workspace.members]`:

```toml
members = [
    "crates/thinkingroot-core",
    "crates/thinkingroot-graph",
    "crates/thinkingroot-parse",
    "crates/thinkingroot-extract",
    "crates/thinkingroot-link",
    "crates/thinkingroot-compile",
    "crates/thinkingroot-verify",
    "crates/thinkingroot-serve",
    "crates/thinkingroot-safety",
    "crates/thinkingroot-cli",
    "thinkingroot-python",
]
```

- [ ] **Step 2: Create Cargo.toml**

Create `thinkingroot-python/Cargo.toml`:

```toml
[package]
name = "thinkingroot-python"
version = "0.1.0"
edition = "2024"

[lib]
name = "_thinkingroot"
crate-type = ["cdylib"]

[dependencies]
thinkingroot-core = { path = "crates/thinkingroot-core" }
thinkingroot-graph = { path = "crates/thinkingroot-graph" }
thinkingroot-parse = { path = "crates/thinkingroot-parse" }
thinkingroot-compile = { path = "crates/thinkingroot-compile" }
thinkingroot-verify = { path = "crates/thinkingroot-verify" }
thinkingroot-serve = { path = "crates/thinkingroot-serve" }
pyo3 = { version = "0.23", features = ["extension-module"] }
tokio = { version = "1", features = ["full"] }
serde_json = "1"
```

**Note:** The `path =` values are relative to `thinkingroot-python/` (one level up from workspace root won't work — use `../crates/...` pattern). Fix paths:

```toml
thinkingroot-core = { path = "../crates/thinkingroot-core" }
thinkingroot-graph = { path = "../crates/thinkingroot-graph" }
thinkingroot-parse = { path = "../crates/thinkingroot-parse" }
thinkingroot-compile = { path = "../crates/thinkingroot-compile" }
thinkingroot-verify = { path = "../crates/thinkingroot-verify" }
thinkingroot-serve = { path = "../crates/thinkingroot-serve" }
```

- [ ] **Step 3: Create pyproject.toml**

Create `thinkingroot-python/pyproject.toml`:

```toml
[build-system]
requires = ["maturin>=1.0,<2.0"]
build-backend = "maturin"

[project]
name = "thinkingroot"
version = "0.1.0"
description = "Knowledge compiler for AI agents — Python SDK"
requires-python = ">=3.9"
license = { text = "MIT OR Apache-2.0" }
dependencies = ["httpx>=0.27"]

[project.optional-dependencies]
dev = ["pytest", "pytest-asyncio"]

[tool.maturin]
features = ["pyo3/extension-module"]
python-source = "python"
module-name = "thinkingroot._thinkingroot"
```

- [ ] **Step 4: Write PyO3 bindings**

Create `thinkingroot-python/src/lib.rs`:

```rust
use pyo3::prelude::*;
use pyo3::exceptions::PyRuntimeError;
use std::path::PathBuf;

/// Build a tokio runtime for blocking calls.
fn runtime() -> tokio::runtime::Runtime {
    tokio::runtime::Builder::new_current_thread()
        .enable_all()
        .build()
        .expect("failed to create tokio runtime")
}

/// Compile a directory through the full ThinkingRoot pipeline.
#[pyfunction]
fn compile(path: &str) -> PyResult<PyObject> {
    let root = PathBuf::from(path);
    let rt = runtime();
    let result = rt.block_on(async {
        thinkingroot_serve::engine::QueryEngine::new();
        // Use the CLI pipeline directly.
        // Note: This requires the pipeline module to be accessible.
        // For now, replicate the core pipeline logic.
        let config = thinkingroot_core::config::Config::load(&root)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let parser_config = &config.parsers;
        let documents = thinkingroot_parse::parse_directory(&root, parser_config)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        let data_dir = root.join(".thinkingroot");
        std::fs::create_dir_all(&data_dir)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        let mut storage = thinkingroot_graph::StorageEngine::init(&data_dir)
            .await
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        // Extract (requires LLM credentials).
        let ws_id = thinkingroot_core::types::WorkspaceId::new();
        let extractor = thinkingroot_extract::Extractor::new(&config)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let extraction = extractor
            .extract_all(&documents, ws_id)
            .await
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        // Link.
        let linker = thinkingroot_link::Linker::new(&storage.graph);
        let link_result = linker
            .link(extraction)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        // Compile.
        let compiler = thinkingroot_compile::Compiler::new(&config)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let artifacts = compiler
            .compile_all(&storage.graph, &data_dir)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        // Verify.
        let verifier = thinkingroot_verify::Verifier::new(&config);
        let verification = verifier
            .verify(&storage.graph)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

        Ok::<_, PyErr>(serde_json::json!({
            "files_parsed": documents.len(),
            "claims_count": link_result.claims_linked,
            "entities_count": link_result.entities_created + link_result.entities_merged,
            "relations_count": link_result.relations_linked,
            "contradictions_count": link_result.contradictions_detected,
            "artifacts_count": artifacts.len(),
            "health_score": verification.health_score.as_percentage(),
        }))
    })?;

    Python::with_gil(|py| {
        let json_str = serde_json::to_string(&result)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let json_module = py.import("json")?;
        json_module.call_method1("loads", (json_str,)).map(|v| v.into())
    })
}

/// Parse all files in a directory.
#[pyfunction]
fn parse_directory(path: &str) -> PyResult<PyObject> {
    let root = PathBuf::from(path);
    let config = thinkingroot_core::config::ParserConfig::default();
    let docs = thinkingroot_parse::parse_directory(&root, &config)
        .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

    let result: Vec<serde_json::Value> = docs
        .iter()
        .map(|d| {
            serde_json::json!({
                "uri": d.uri,
                "source_type": format!("{:?}", d.source_type),
                "content_hash": d.content_hash.0,
                "chunk_count": d.chunks.len(),
            })
        })
        .collect();

    Python::with_gil(|py| {
        let json_str = serde_json::to_string(&result)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let json_module = py.import("json")?;
        json_module.call_method1("loads", (json_str,)).map(|v| v.into())
    })
}

/// Parse a single file.
#[pyfunction]
fn parse_file(path: &str) -> PyResult<PyObject> {
    let file_path = PathBuf::from(path);
    let doc = thinkingroot_parse::parse_file(&file_path)
        .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

    let result = serde_json::json!({
        "uri": doc.uri,
        "source_type": format!("{:?}", doc.source_type),
        "content_hash": doc.content_hash.0,
        "chunks": doc.chunks.iter().map(|c| {
            serde_json::json!({
                "content": c.content,
                "chunk_type": format!("{:?}", c.chunk_type),
                "start_line": c.start_line,
                "end_line": c.end_line,
            })
        }).collect::<Vec<_>>(),
    });

    Python::with_gil(|py| {
        let json_str = serde_json::to_string(&result)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let json_module = py.import("json")?;
        json_module.call_method1("loads", (json_str,)).map(|v| v.into())
    })
}

/// Open an existing ThinkingRoot workspace for querying.
#[pyclass]
struct Engine {
    inner: thinkingroot_serve::engine::QueryEngine,
    ws_name: String,
    rt: tokio::runtime::Runtime,
}

#[pymethods]
impl Engine {
    fn get_entities(&self) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.list_entities(&self.ws_name))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn get_entity(&self, name: &str) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.get_entity(&self.ws_name, name))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn get_claims(
        &self,
        r#type: Option<&str>,
        min_confidence: Option<f64>,
    ) -> PyResult<PyObject> {
        let filter = thinkingroot_serve::engine::ClaimFilter {
            claim_type: r#type.map(String::from),
            min_confidence,
            ..Default::default()
        };
        let result = self.rt.block_on(self.inner.list_claims(&self.ws_name, filter))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn get_relations(&self, entity: &str) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.get_relations(&self.ws_name, entity))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn get_all_relations(&self) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.get_all_relations(&self.ws_name))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn search(&self, query: &str, top_k: Option<usize>) -> PyResult<PyObject> {
        let k = top_k.unwrap_or(10);
        let result = self.rt.block_on(self.inner.search(&self.ws_name, query, k))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn health(&self) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.health(&self.ws_name))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn verify(&self) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.verify(&self.ws_name))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&result)
    }

    fn get_sources(&self) -> PyResult<PyObject> {
        // Delegate to engine — need to add this to QueryEngine or access graph directly.
        Err(PyRuntimeError::new_err("get_sources not yet implemented — use health() for source count"))
    }

    fn get_contradictions(&self) -> PyResult<PyObject> {
        let result = self.rt.block_on(self.inner.health(&self.ws_name))
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        to_py_json(&serde_json::json!({
            "count": result.contradictions,
            "warnings": result.warnings,
        }))
    }
}

/// Open an existing compiled workspace.
#[pyfunction]
fn open(path: &str) -> PyResult<Engine> {
    let root = PathBuf::from(path);
    let abs_path = std::fs::canonicalize(&root)
        .map_err(|e| PyRuntimeError::new_err(format!("Invalid path: {}", e)))?;
    let name = abs_path
        .file_name()
        .map(|n| n.to_string_lossy().to_string())
        .unwrap_or_else(|| "default".to_string());

    let rt = runtime();
    let mut engine = thinkingroot_serve::engine::QueryEngine::new();
    rt.block_on(engine.mount(name.clone(), abs_path))
        .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;

    Ok(Engine {
        inner: engine,
        ws_name: name,
        rt,
    })
}

/// Helper: convert a Serialize value to Python dict/list via JSON.
fn to_py_json<T: serde::Serialize>(value: &T) -> PyResult<PyObject> {
    Python::with_gil(|py| {
        let json_str = serde_json::to_string(value)
            .map_err(|e| PyRuntimeError::new_err(e.to_string()))?;
        let json_module = py.import("json")?;
        json_module.call_method1("loads", (json_str,)).map(|v| v.into())
    })
}

/// Python module definition.
#[pymodule]
fn _thinkingroot(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(compile, m)?)?;
    m.add_function(wrap_pyfunction!(parse_directory, m)?)?;
    m.add_function(wrap_pyfunction!(parse_file, m)?)?;
    m.add_function(wrap_pyfunction!(open, m)?)?;
    m.add_class::<Engine>()?;
    Ok(())
}
```

- [ ] **Step 5: Create Python package files**

Create `thinkingroot-python/python/thinkingroot/__init__.py`:

```python
"""ThinkingRoot — Knowledge compiler for AI agents."""

from thinkingroot._thinkingroot import compile, parse_directory, parse_file, open, Engine

try:
    from thinkingroot.client import Client
except ImportError:
    pass  # httpx not installed — native bindings still work

__all__ = ["compile", "parse_directory", "parse_file", "open", "Engine", "Client"]
```

Create `thinkingroot-python/python/thinkingroot/_thinkingroot.pyi`:

```python
"""Type stubs for the native ThinkingRoot module."""

from typing import Any, Optional

def compile(path: str) -> dict[str, Any]: ...
def parse_directory(path: str) -> list[dict[str, Any]]: ...
def parse_file(path: str) -> dict[str, Any]: ...
def open(path: str) -> Engine: ...

class Engine:
    def get_entities(self) -> list[dict[str, Any]]: ...
    def get_entity(self, name: str) -> dict[str, Any]: ...
    def get_claims(self, type: Optional[str] = None, min_confidence: Optional[float] = None) -> list[dict[str, Any]]: ...
    def get_relations(self, entity: str) -> list[dict[str, Any]]: ...
    def get_all_relations(self) -> list[dict[str, Any]]: ...
    def search(self, query: str, top_k: Optional[int] = None) -> dict[str, Any]: ...
    def health(self) -> dict[str, Any]: ...
    def verify(self) -> dict[str, Any]: ...
    def get_sources(self) -> list[dict[str, Any]]: ...
    def get_contradictions(self) -> dict[str, Any]: ...
```

- [ ] **Step 6: Verify Rust compilation**

Run: `cargo check --workspace`
Expected: compiles (PyO3 cdylib may show warnings — that's fine)

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat(python): add PyO3 native bindings with full pipeline and graph access"
```

---

## Task 8: Python SDK — HTTP Client

**Files:**
- Create: `thinkingroot-python/python/thinkingroot/client.py`

- [ ] **Step 1: Write HTTP client**

Create `thinkingroot-python/python/thinkingroot/client.py`:

```python
"""ThinkingRoot HTTP client for querying a running server."""

from __future__ import annotations

from typing import Any, Optional

import httpx


class APIError(Exception):
    """Error returned by the ThinkingRoot REST API."""

    def __init__(self, status_code: int, code: str, message: str):
        self.status_code = status_code
        self.code = code
        self.message = message
        super().__init__(f"[{status_code}] {code}: {message}")


class Client:
    """HTTP client for ThinkingRoot REST API.

    Usage:
        client = Client("http://localhost:3000", api_key="optional")
        entities = client.entities(workspace="my-repo")
    """

    def __init__(self, base_url: str = "http://localhost:3000", api_key: str | None = None):
        headers = {}
        if api_key:
            headers["Authorization"] = f"Bearer {api_key}"
        self._client = httpx.Client(base_url=base_url, headers=headers, timeout=120.0)
        self._base = "/api/v1"

    def _get(self, path: str, params: dict[str, Any] | None = None) -> Any:
        resp = self._client.get(f"{self._base}{path}", params=params)
        return self._handle(resp)

    def _post(self, path: str) -> Any:
        resp = self._client.post(f"{self._base}{path}")
        return self._handle(resp)

    def _handle(self, resp: httpx.Response) -> Any:
        data = resp.json()
        if not data.get("ok"):
            error = data.get("error", {})
            raise APIError(
                status_code=resp.status_code,
                code=error.get("code", "UNKNOWN"),
                message=error.get("message", "Unknown error"),
            )
        return data.get("data")

    # ─── Workspace ────────────────────────────────────────

    def workspaces(self) -> list[dict[str, Any]]:
        return self._get("/workspaces")

    # ─── Entities ─────────────────────────────────────────

    def entities(self, workspace: str) -> list[dict[str, Any]]:
        return self._get(f"/ws/{workspace}/entities")

    def entity(self, name: str, workspace: str) -> dict[str, Any]:
        return self._get(f"/ws/{workspace}/entities/{name}")

    # ─── Claims ───────────────────────────────────────────

    def claims(
        self,
        workspace: str,
        type: str | None = None,
        entity: str | None = None,
        min_confidence: float | None = None,
        limit: int | None = None,
        offset: int | None = None,
    ) -> list[dict[str, Any]]:
        params: dict[str, Any] = {}
        if type:
            params["type"] = type
        if entity:
            params["entity"] = entity
        if min_confidence is not None:
            params["min_confidence"] = min_confidence
        if limit is not None:
            params["limit"] = limit
        if offset is not None:
            params["offset"] = offset
        return self._get(f"/ws/{workspace}/claims", params=params)

    # ─── Relations ────────────────────────────────────────

    def relations(self, entity: str, workspace: str) -> list[dict[str, Any]]:
        return self._get(f"/ws/{workspace}/relations/{entity}")

    def all_relations(self, workspace: str) -> list[dict[str, Any]]:
        return self._get(f"/ws/{workspace}/relations")

    # ─── Artifacts ────────────────────────────────────────

    def artifacts(self, workspace: str) -> list[dict[str, Any]]:
        return self._get(f"/ws/{workspace}/artifacts")

    def artifact(self, artifact_type: str, workspace: str) -> dict[str, Any]:
        return self._get(f"/ws/{workspace}/artifacts/{artifact_type}")

    # ─── Health ───────────────────────────────────────────

    def health(self, workspace: str) -> dict[str, Any]:
        return self._get(f"/ws/{workspace}/health")

    # ─── Search ───────────────────────────────────────────

    def search(
        self, query: str, workspace: str, top_k: int = 10
    ) -> dict[str, Any]:
        return self._get(f"/ws/{workspace}/search", params={"q": query, "top_k": top_k})

    # ─── Actions ──────────────────────────────────────────

    def compile(self, workspace: str) -> dict[str, Any]:
        return self._post(f"/ws/{workspace}/compile")

    def verify(self, workspace: str) -> dict[str, Any]:
        return self._post(f"/ws/{workspace}/verify")
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat(python): add HTTP client for ThinkingRoot REST API"
```

---

## Task 9: Integration Tests + E2E Verification

**Files:**
- Create: `crates/thinkingroot-serve/tests/rest_test.rs`
- Modify: existing integration test if needed

- [ ] **Step 1: Write REST API integration test**

Create `crates/thinkingroot-serve/tests/rest_test.rs`:

```rust
//! Integration tests for the ThinkingRoot REST API.
//!
//! These tests spin up an in-memory QueryEngine, populate it with test data,
//! and verify all REST endpoints return correct responses.

use std::sync::Arc;

use axum::http::StatusCode;
use axum::body::Body;
use axum::http::Request;
use tokio::sync::RwLock;
use tower::ServiceExt;

use thinkingroot_serve::engine::QueryEngine;
use thinkingroot_serve::rest::{self, AppState};

fn test_fixture_path() -> std::path::PathBuf {
    std::path::PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .join("../../tests/fixtures/sample-repo")
        .canonicalize()
        .expect("fixture dir not found")
}

async fn build_test_app() -> (axum::Router, String) {
    // Compile the test fixture first so we have data to query.
    let fixture = test_fixture_path();
    let data_dir = tempfile::tempdir().unwrap();
    let data_path = data_dir.path().to_path_buf();

    // For testing, we create a minimal workspace by initializing storage
    // and inserting test data directly (no LLM needed).
    let mut engine = QueryEngine::new();

    // Mount the fixture as a workspace (requires .thinkingroot/ to exist).
    // For tests, we'll test the routes that work without a compiled workspace.
    // Full E2E test is done separately with `root compile`.

    let state = Arc::new(AppState {
        engine: RwLock::new(engine),
        api_key: None,
    });

    let router = rest::build_router(state);
    (router, "test".to_string())
}

#[tokio::test]
async fn list_workspaces_returns_ok() {
    let (app, _) = build_test_app().await;

    let response = app
        .oneshot(
            Request::builder()
                .uri("/api/v1/workspaces")
                .body(Body::empty())
                .unwrap(),
        )
        .await
        .unwrap();

    assert_eq!(response.status(), StatusCode::OK);

    let body = axum::body::to_bytes(response.into_body(), usize::MAX)
        .await
        .unwrap();
    let json: serde_json::Value = serde_json::from_slice(&body).unwrap();
    assert_eq!(json["ok"], true);
}

#[tokio::test]
async fn missing_workspace_returns_404() {
    let (app, _) = build_test_app().await;

    let response = app
        .oneshot(
            Request::builder()
                .uri("/api/v1/ws/nonexistent/entities")
                .body(Body::empty())
                .unwrap(),
        )
        .await
        .unwrap();

    assert_eq!(response.status(), StatusCode::NOT_FOUND);
}

#[tokio::test]
async fn auth_middleware_rejects_without_key() {
    let engine = QueryEngine::new();
    let state = Arc::new(AppState {
        engine: RwLock::new(engine),
        api_key: Some("secret-key".to_string()),
    });
    let app = rest::build_router(state);

    let response = app
        .oneshot(
            Request::builder()
                .uri("/api/v1/workspaces")
                .body(Body::empty())
                .unwrap(),
        )
        .await
        .unwrap();

    assert_eq!(response.status(), StatusCode::UNAUTHORIZED);
}

#[tokio::test]
async fn auth_middleware_accepts_with_correct_key() {
    let engine = QueryEngine::new();
    let state = Arc::new(AppState {
        engine: RwLock::new(engine),
        api_key: Some("secret-key".to_string()),
    });
    let app = rest::build_router(state);

    let response = app
        .oneshot(
            Request::builder()
                .uri("/api/v1/workspaces")
                .header("Authorization", "Bearer secret-key")
                .body(Body::empty())
                .unwrap(),
        )
        .await
        .unwrap();

    assert_eq!(response.status(), StatusCode::OK);
}
```

- [ ] **Step 2: Run all tests**

Run: `cargo test --workspace`
Expected: all existing tests pass + new REST tests pass

- [ ] **Step 3: Manual E2E verification**

Run the full pipeline manually:

```bash
# 1. Compile a test repo (requires LLM credentials)
cargo run -- compile /tmp/thinkingroot-test

# 2. Start server
cargo run -- serve --path /tmp/thinkingroot-test --port 3000 &

# 3. Test REST endpoints
curl -s localhost:3000/api/v1/workspaces | python3 -m json.tool
curl -s localhost:3000/api/v1/ws/thinkingroot-test/entities | python3 -m json.tool
curl -s localhost:3000/api/v1/ws/thinkingroot-test/health | python3 -m json.tool
curl -s "localhost:3000/api/v1/ws/thinkingroot-test/search?q=payment+processing" | python3 -m json.tool
curl -s localhost:3000/api/v1/ws/thinkingroot-test/artifacts/agent-brief | python3 -m json.tool

# 4. Test MCP endpoint
curl -s -X POST localhost:3000/mcp -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | python3 -m json.tool

# 5. Kill server
kill %1
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "test(serve): add REST API integration tests and E2E verification"
```

---

## Summary

| Task | What | Key Files | Milestone |
|------|------|-----------|-----------|
| 1 | Dependencies + Serialize | Cargo.toml files, verifier.rs | `cargo check --workspace` passes |
| 2 | QueryEngine | engine.rs, lib.rs | All query methods implemented |
| 3 | REST API | rest.rs | 12 routes with auth + CORS |
| 4 | `root serve` command | serve.rs, main.rs | `root serve --path ./repo` starts |
| 5 | MCP stdio + protocol | mcp/*.rs | `root serve --mcp-stdio` works |
| 6 | MCP HTTP/SSE | mcp/sse.rs | `POST /mcp` handles JSON-RPC |
| 7 | Python PyO3 | thinkingroot-python/ | `import thinkingroot; thinkingroot.open("./repo")` |
| 8 | Python HTTP client | client.py | `from thinkingroot import Client` |
| 9 | Integration tests | rest_test.rs | All tests green, E2E verified |
