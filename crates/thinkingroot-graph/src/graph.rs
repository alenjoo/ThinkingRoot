use std::collections::BTreeMap;
use std::path::Path;

use chrono;
use cozo::{DataValue, DbInstance, NamedRows, Num, ScriptMutability};
use thinkingroot_core::{Error, Result};

/// Graph storage backed by CozoDB — an embedded Datalog database.
/// Datalog gives us recursive graph queries, pattern matching, and built-in
/// graph algorithms (PageRank, shortest path) out of the box.
pub struct GraphStore {
    db: DbInstance,
}

impl GraphStore {
    /// Open or create a CozoDB database at the given path and initialize the schema.
    pub fn init(path: &Path) -> Result<Self> {
        let db_path = path.join("graph.db");
        let db = DbInstance::new("sqlite", db_path.to_str().unwrap_or("."), "")
            .map_err(|e| Error::GraphStorage(format!("failed to open cozo db: {e}")))?;

        let store = Self { db };
        store.create_schema()?;
        Ok(store)
    }

    /// Create all relations (tables) if they don't exist.
    /// CozoDB's `:create` fails if the relation already exists, so we
    /// silently ignore "already exists" errors on subsequent runs.
    fn create_schema(&self) -> Result<()> {
        let relations = [
            ":create sources {
                id: String
                =>
                uri: String,
                source_type: String,
                author: String default '',
                content_hash: String default '',
                trust_level: String default 'Unknown',
                byte_size: Int default 0
            }",
            ":create claims {
                id: String
                =>
                statement: String,
                claim_type: String,
                source_id: String,
                confidence: Float default 0.8,
                sensitivity: String default 'Public',
                workspace_id: String default '',
                created_at: Float default 0.0
            }",
            ":create entities {
                id: String
                =>
                canonical_name: String,
                entity_type: String,
                description: String default ''
            }",
            ":create claim_source_edges {
                claim_id: String,
                source_id: String
            }",
            ":create claim_entity_edges {
                claim_id: String,
                entity_id: String
            }",
            ":create entity_relations {
                from_id: String,
                to_id: String,
                relation_type: String
                =>
                strength: Float default 1.0
            }",
            ":create claim_temporal {
                claim_id: String
                =>
                valid_from: Float default 0.0,
                valid_until: Float default 0.0,
                superseded_by: String default ''
            }",
            ":create contradictions {
                id: String
                =>
                claim_a: String,
                claim_b: String,
                explanation: String default '',
                status: String default 'Detected',
                detected_at: Float default 0.0
            }",
        ];

        for stmt in &relations {
            match self.db.run_default(stmt) {
                Ok(_) => {}
                Err(e) => {
                    let msg = e.to_string();
                    // Ignore "already exists" errors on re-init.
                    if !msg.contains("already exists") && !msg.contains("conflicts with an existing") {
                        return Err(Error::GraphStorage(format!(
                            "schema creation failed: {msg}"
                        )));
                    }
                }
            }
        }

        tracing::info!("graph schema initialized (cozo/datalog)");
        Ok(())
    }

    /// Run a Datalog query with parameters, returning NamedRows.
    fn query(&self, script: &str, params: BTreeMap<String, DataValue>) -> Result<NamedRows> {
        self.db
            .run_script(script, params, ScriptMutability::Mutable)
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))
    }

    /// Run a read-only Datalog query.
    fn query_read(&self, script: &str) -> Result<NamedRows> {
        self.db
            .run_script(script, BTreeMap::new(), ScriptMutability::Immutable)
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))
    }

    /// Insert a source node.
    pub fn insert_source(&self, source: &thinkingroot_core::Source) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("id".into(), DataValue::Str(source.id.to_string().into()));
        params.insert("uri".into(), DataValue::Str(source.uri.clone().into()));
        params.insert(
            "source_type".into(),
            DataValue::Str(format!("{:?}", source.source_type).into()),
        );
        params.insert(
            "author".into(),
            DataValue::Str(source.author.clone().unwrap_or_default().into()),
        );
        params.insert(
            "content_hash".into(),
            DataValue::Str(source.content_hash.0.clone().into()),
        );
        params.insert(
            "trust_level".into(),
            DataValue::Str(format!("{:?}", source.trust_level).into()),
        );
        params.insert(
            "byte_size".into(),
            DataValue::Num(Num::Int(source.byte_size as i64)),
        );

        self.query(
            r#"?[id, uri, source_type, author, content_hash, trust_level, byte_size] <- [[
                $id, $uri, $source_type, $author, $content_hash, $trust_level, $byte_size
            ]]
            :put sources {id => uri, source_type, author, content_hash, trust_level, byte_size}"#,
            params,
        )?;
        Ok(())
    }

    /// Insert a claim node.
    pub fn insert_claim(&self, claim: &thinkingroot_core::Claim) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("id".into(), DataValue::Str(claim.id.to_string().into()));
        params.insert(
            "statement".into(),
            DataValue::Str(claim.statement.clone().into()),
        );
        params.insert(
            "claim_type".into(),
            DataValue::Str(format!("{:?}", claim.claim_type).into()),
        );
        params.insert(
            "source_id".into(),
            DataValue::Str(claim.source.to_string().into()),
        );
        params.insert(
            "confidence".into(),
            DataValue::Num(Num::Float(claim.confidence.value())),
        );
        params.insert(
            "sensitivity".into(),
            DataValue::Str(format!("{:?}", claim.sensitivity).into()),
        );
        params.insert(
            "workspace_id".into(),
            DataValue::Str(claim.workspace.to_string().into()),
        );
        params.insert(
            "created_at".into(),
            DataValue::Num(Num::Float(claim.created_at.timestamp() as f64)),
        );

        self.query(
            r#"?[id, statement, claim_type, source_id, confidence, sensitivity, workspace_id, created_at] <- [[
                $id, $statement, $claim_type, $source_id, $confidence, $sensitivity, $workspace_id, $created_at
            ]]
            :put claims {id => statement, claim_type, source_id, confidence, sensitivity, workspace_id, created_at}"#,
            params,
        )?;
        Ok(())
    }

    /// Insert an entity node.
    pub fn insert_entity(&self, entity: &thinkingroot_core::Entity) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("id".into(), DataValue::Str(entity.id.to_string().into()));
        params.insert(
            "name".into(),
            DataValue::Str(entity.canonical_name.clone().into()),
        );
        params.insert(
            "etype".into(),
            DataValue::Str(format!("{:?}", entity.entity_type).into()),
        );
        params.insert(
            "desc".into(),
            DataValue::Str(entity.description.clone().unwrap_or_default().into()),
        );

        self.query(
            r#"?[id, canonical_name, entity_type, description] <- [[$id, $name, $etype, $desc]]
            :put entities {id => canonical_name, entity_type, description}"#,
            params,
        )?;
        Ok(())
    }

    /// Create a relationship between a claim and its source.
    pub fn link_claim_to_source(&self, claim_id: &str, source_id: &str) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("cid".into(), DataValue::Str(claim_id.into()));
        params.insert("sid".into(), DataValue::Str(source_id.into()));

        self.query(
            r#"?[claim_id, source_id] <- [[$cid, $sid]]
            :put claim_source_edges {claim_id, source_id}"#,
            params,
        )?;
        Ok(())
    }

    /// Create a relationship between a claim and an entity.
    pub fn link_claim_to_entity(&self, claim_id: &str, entity_id: &str) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("cid".into(), DataValue::Str(claim_id.into()));
        params.insert("eid".into(), DataValue::Str(entity_id.into()));

        self.query(
            r#"?[claim_id, entity_id] <- [[$cid, $eid]]
            :put claim_entity_edges {claim_id, entity_id}"#,
            params,
        )?;
        Ok(())
    }

    /// Create a relationship between two entities.
    pub fn link_entities(
        &self,
        from_id: &str,
        to_id: &str,
        relation_type: &str,
        strength: f64,
    ) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("fid".into(), DataValue::Str(from_id.into()));
        params.insert("tid".into(), DataValue::Str(to_id.into()));
        params.insert("rtype".into(), DataValue::Str(relation_type.into()));
        params.insert("str".into(), DataValue::Num(Num::Float(strength)));

        self.query(
            r#"?[from_id, to_id, relation_type, strength] <- [[$fid, $tid, $rtype, $str]]
            :put entity_relations {from_id, to_id, relation_type => strength}"#,
            params,
        )?;
        Ok(())
    }

    /// Query all entities.
    pub fn get_all_entities(&self) -> Result<Vec<(String, String, String)>> {
        let result = self.query_read(
            "?[id, canonical_name, entity_type] := *entities{id, canonical_name, entity_type}",
        )?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                )
            })
            .collect())
    }

    /// Query all claims for a given entity (Datalog join).
    pub fn get_claims_for_entity(&self, entity_id: &str) -> Result<Vec<(String, String, String)>> {
        let mut params = BTreeMap::new();
        params.insert("eid".into(), DataValue::Str(entity_id.into()));

        let result = self.db
            .run_script(
                r#"?[id, statement, claim_type] :=
                    *claim_entity_edges{claim_id: id, entity_id: $eid},
                    *claims{id, statement, claim_type}"#,
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                )
            })
            .collect())
    }

    /// Insert a contradiction.
    pub fn insert_contradiction(
        &self,
        id: &str,
        claim_a: &str,
        claim_b: &str,
        explanation: &str,
    ) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("id".into(), DataValue::Str(id.into()));
        params.insert("ca".into(), DataValue::Str(claim_a.into()));
        params.insert("cb".into(), DataValue::Str(claim_b.into()));
        params.insert("expl".into(), DataValue::Str(explanation.into()));
        params.insert(
            "ts".into(),
            DataValue::Num(Num::Float(chrono::Utc::now().timestamp() as f64)),
        );

        self.query(
            r#"?[id, claim_a, claim_b, explanation, status, detected_at] <- [[
                $id, $ca, $cb, $expl, 'Detected', $ts
            ]]
            :put contradictions {id => claim_a, claim_b, explanation, status, detected_at}"#,
            params,
        )?;
        Ok(())
    }

    /// Get all contradictions.
    pub fn get_contradictions(&self) -> Result<Vec<(String, String, String, String, String)>> {
        let result = self.query_read(
            "?[id, claim_a, claim_b, explanation, status] := *contradictions{id, claim_a, claim_b, explanation, status}",
        )?;
        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                    dv_to_string(&row[3]),
                    dv_to_string(&row[4]),
                )
            })
            .collect())
    }

    /// Get claims for a specific entity with their source URIs (Datalog 3-way join).
    pub fn get_claims_with_sources_for_entity(
        &self,
        entity_id: &str,
    ) -> Result<Vec<(String, String, String, String, f64)>> {
        let mut params = BTreeMap::new();
        params.insert("eid".into(), DataValue::Str(entity_id.into()));

        let result = self
            .db
            .run_script(
                r#"?[id, statement, claim_type, uri, confidence] :=
                    *claim_entity_edges{claim_id: id, entity_id: $eid},
                    *claims{id, statement, claim_type, source_id, confidence},
                    *sources{id: source_id, uri}"#,
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                    dv_to_string(&row[3]),
                    match &row[4] {
                        DataValue::Num(Num::Float(f)) => *f,
                        DataValue::Num(Num::Int(i)) => *i as f64,
                        _ => 0.8,
                    },
                )
            })
            .collect())
    }

    /// Get all entity relations (for architecture map).
    pub fn get_all_relations(&self) -> Result<Vec<(String, String, String, String, String, f64)>> {
        let result = self.query_read(
            r#"?[from_name, to_name, rel_type, from_type, to_type, strength] :=
                *entity_relations{from_id, to_id, relation_type: rel_type, strength},
                *entities{id: from_id, canonical_name: from_name, entity_type: from_type},
                *entities{id: to_id, canonical_name: to_name, entity_type: to_type}"#,
        )?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                    dv_to_string(&row[3]),
                    dv_to_string(&row[4]),
                    match &row[5] {
                        DataValue::Num(Num::Float(f)) => *f,
                        DataValue::Num(Num::Int(i)) => *i as f64,
                        _ => 1.0,
                    },
                )
            })
            .collect())
    }

    /// Count stale claims (created_at older than cutoff_timestamp).
    pub fn count_stale_claims(&self, cutoff_timestamp: f64) -> Result<usize> {
        let mut params = BTreeMap::new();
        params.insert("cutoff".into(), DataValue::Num(Num::Float(cutoff_timestamp)));

        let result = self
            .db
            .run_script(
                "?[count(id)] := *claims{id, created_at}, created_at < $cutoff",
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        if let Some(row) = result.rows.first() {
            match &row[0] {
                DataValue::Num(Num::Int(n)) => Ok(*n as usize),
                DataValue::Num(Num::Float(n)) => Ok(*n as usize),
                _ => Ok(0),
            }
        } else {
            Ok(0)
        }
    }

    /// Check if a source with this content_hash already exists.
    pub fn source_hash_exists(&self, content_hash: &str) -> Result<bool> {
        let mut params = BTreeMap::new();
        params.insert("hash".into(), DataValue::Str(content_hash.into()));

        let result = self
            .db
            .run_script(
                "?[count(id)] := *sources{id, content_hash}, content_hash == $hash",
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        if let Some(row) = result.rows.first() {
            match &row[0] {
                DataValue::Num(Num::Int(n)) => Ok(*n > 0),
                DataValue::Num(Num::Float(n)) => Ok(*n > 0.0),
                _ => Ok(false),
            }
        } else {
            Ok(false)
        }
    }

    /// Get all claims of a specific type (e.g., "Decision", "Requirement").
    pub fn get_claims_by_type(&self, claim_type: &str) -> Result<Vec<(String, String, String, f64, String)>> {
        let mut params = BTreeMap::new();
        params.insert("ctype".into(), DataValue::Str(claim_type.into()));

        let result = self
            .db
            .run_script(
                r#"?[id, statement, source_id, confidence, uri] :=
                    *claims{id, statement, claim_type, source_id, confidence},
                    claim_type == $ctype,
                    *claim_source_edges{claim_id: id, source_id: sid},
                    *sources{id: sid, uri}"#,
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                    match &row[3] {
                        DataValue::Num(Num::Float(f)) => *f,
                        DataValue::Num(Num::Int(i)) => *i as f64,
                        _ => 0.8,
                    },
                    dv_to_string(&row[4]),
                )
            })
            .collect())
    }

    /// Get all claims with their source URIs (for bulk artifact generation).
    pub fn get_all_claims_with_sources(&self) -> Result<Vec<(String, String, String, f64, String)>> {
        let result = self.query_read(
            r#"?[id, statement, claim_type, confidence, uri] :=
                *claims{id, statement, claim_type, confidence},
                *claim_source_edges{claim_id: id, source_id: sid},
                *sources{id: sid, uri}"#,
        )?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                    match &row[3] {
                        DataValue::Num(Num::Float(f)) => *f,
                        DataValue::Num(Num::Int(i)) => *i as f64,
                        _ => 0.8,
                    },
                    dv_to_string(&row[4]),
                )
            })
            .collect())
    }

    /// Get relations for a specific entity (by name).
    pub fn get_relations_for_entity(&self, entity_name: &str) -> Result<Vec<(String, String, f64)>> {
        let mut params = BTreeMap::new();
        params.insert("name".into(), DataValue::Str(entity_name.into()));

        let result = self
            .db
            .run_script(
                r#"?[to_name, rel_type, strength] :=
                    *entities{id: from_id, canonical_name: $name},
                    *entity_relations{from_id, to_id, relation_type: rel_type, strength},
                    *entities{id: to_id, canonical_name: to_name}"#,
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    match &row[2] {
                        DataValue::Num(Num::Float(f)) => *f,
                        DataValue::Num(Num::Int(i)) => *i as f64,
                        _ => 1.0,
                    },
                )
            })
            .collect())
    }

    /// Get all source URIs.
    pub fn get_all_sources(&self) -> Result<Vec<(String, String, String)>> {
        let result = self.query_read(
            "?[id, uri, source_type] := *sources{id, uri, source_type}",
        )?;
        Ok(result
            .rows
            .iter()
            .map(|row| (dv_to_string(&row[0]), dv_to_string(&row[1]), dv_to_string(&row[2])))
            .collect())
    }

    /// Count orphaned claims (claims whose source_id has no matching source).
    pub fn count_orphaned_claims(&self) -> Result<usize> {
        let result = self.query_read(
            r#"?[count(cid)] :=
                *claims{id: cid, source_id},
                not *sources{id: source_id}"#,
        )?;
        if let Some(row) = result.rows.first() {
            match &row[0] {
                DataValue::Num(Num::Int(n)) => Ok(*n as usize),
                DataValue::Num(Num::Float(n)) => Ok(*n as usize),
                _ => Ok(0),
            }
        } else {
            Ok(0)
        }
    }

    /// Search claims by keyword (case-insensitive substring match).
    pub fn search_claims(&self, keyword: &str) -> Result<Vec<(String, String, String, f64, String)>> {
        let mut params = BTreeMap::new();
        params.insert("kw".into(), DataValue::Str(keyword.to_lowercase().into()));

        let result = self
            .db
            .run_script(
                r#"?[id, statement, claim_type, confidence, uri] :=
                    *claims{id, statement, claim_type, confidence},
                    lower_stmt = lowercase(statement),
                    regex_matches(lower_stmt, $kw),
                    *claim_source_edges{claim_id: id, source_id: sid},
                    *sources{id: sid, uri}"#,
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        Ok(result
            .rows
            .iter()
            .map(|row| {
                (
                    dv_to_string(&row[0]),
                    dv_to_string(&row[1]),
                    dv_to_string(&row[2]),
                    match &row[3] {
                        DataValue::Num(Num::Float(f)) => *f,
                        DataValue::Num(Num::Int(i)) => *i as f64,
                        _ => 0.8,
                    },
                    dv_to_string(&row[4]),
                )
            })
            .collect())
    }

    /// Search entities by name (case-insensitive substring match).
    pub fn search_entities(&self, keyword: &str) -> Result<Vec<(String, String, String)>> {
        let mut params = BTreeMap::new();
        params.insert("kw".into(), DataValue::Str(keyword.to_lowercase().into()));

        let result = self
            .db
            .run_script(
                r#"?[id, canonical_name, entity_type] :=
                    *entities{id, canonical_name, entity_type},
                    lower_name = lowercase(canonical_name),
                    regex_matches(lower_name, $kw)"#,
                params,
                ScriptMutability::Immutable,
            )
            .map_err(|e| Error::GraphStorage(format!("query failed: {e}")))?;

        Ok(result
            .rows
            .iter()
            .map(|row| (dv_to_string(&row[0]), dv_to_string(&row[1]), dv_to_string(&row[2])))
            .collect())
    }

    /// Set temporal metadata for a claim (valid_from, valid_until, superseded_by).
    pub fn set_claim_temporal(
        &self,
        claim_id: &str,
        valid_from: f64,
        valid_until: f64,
        superseded_by: &str,
    ) -> Result<()> {
        let mut params = BTreeMap::new();
        params.insert("cid".into(), DataValue::Str(claim_id.into()));
        params.insert("vf".into(), DataValue::Num(Num::Float(valid_from)));
        params.insert("vu".into(), DataValue::Num(Num::Float(valid_until)));
        params.insert("sb".into(), DataValue::Str(superseded_by.into()));

        self.query(
            r#"?[claim_id, valid_from, valid_until, superseded_by] <- [[$cid, $vf, $vu, $sb]]
            :put claim_temporal {claim_id => valid_from, valid_until, superseded_by}"#,
            params,
        )?;
        Ok(())
    }

    /// Supersede a claim: set its valid_until to now and record the superseding claim.
    pub fn supersede_claim(&self, old_claim_id: &str, new_claim_id: &str) -> Result<()> {
        let now = chrono::Utc::now().timestamp() as f64;
        self.set_claim_temporal(old_claim_id, 0.0, now, new_claim_id)
    }

    /// Count superseded (expired) claims.
    pub fn count_superseded_claims(&self) -> Result<usize> {
        let result = self.query_read(
            r#"?[count(claim_id)] := *claim_temporal{claim_id, valid_until, superseded_by},
                valid_until > 0.0"#,
        )?;
        if let Some(row) = result.rows.first() {
            match &row[0] {
                DataValue::Num(Num::Int(n)) => Ok(*n as usize),
                DataValue::Num(Num::Float(n)) => Ok(*n as usize),
                _ => Ok(0),
            }
        } else {
            Ok(0)
        }
    }

    /// Get total counts of sources, claims, and entities.
    pub fn get_counts(&self) -> Result<(usize, usize, usize)> {
        let s = self.count_relation("sources")?;
        let c = self.count_relation("claims")?;
        let e = self.count_relation("entities")?;
        Ok((s, c, e))
    }

    fn count_relation(&self, name: &str) -> Result<usize> {
        let query = format!("?[count(id)] := *{name}{{id}}");
        let result = self.query_read(&query)?;
        if let Some(row) = result.rows.first() {
            match &row[0] {
                DataValue::Num(Num::Int(n)) => Ok(*n as usize),
                DataValue::Num(Num::Float(n)) => Ok(*n as usize),
                _ => Ok(0),
            }
        } else {
            Ok(0)
        }
    }
}

/// Extract a String from a DataValue.
fn dv_to_string(val: &DataValue) -> String {
    match val {
        DataValue::Str(s) => s.to_string(),
        DataValue::Num(Num::Int(i)) => i.to_string(),
        DataValue::Num(Num::Float(f)) => f.to_string(),
        DataValue::Null => String::new(),
        other => format!("{other:?}"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn mem_store() -> GraphStore {
        let db = DbInstance::new("mem", "", "").unwrap();
        let store = GraphStore { db };
        store.create_schema().unwrap();
        store
    }

    #[test]
    fn init_and_counts() {
        let store = mem_store();
        let (s, c, e) = store.get_counts().unwrap();
        assert_eq!((s, c, e), (0, 0, 0));
    }

    #[test]
    fn insert_and_query_entity() {
        let store = mem_store();

        let mut params = BTreeMap::new();
        params.insert("id".into(), DataValue::Str("e1".into()));
        params.insert("name".into(), DataValue::Str("Rust".into()));
        params.insert("etype".into(), DataValue::Str("Concept".into()));
        params.insert("desc".into(), DataValue::Str("A language".into()));

        store
            .query(
                r#"?[id, canonical_name, entity_type, description] <- [[$id, $name, $etype, $desc]]
                :put entities {id => canonical_name, entity_type, description}"#,
                params,
            )
            .unwrap();

        let entities = store.get_all_entities().unwrap();
        assert_eq!(entities.len(), 1);
        assert_eq!(entities[0].1, "Rust");
    }

    #[test]
    fn link_and_query_claims_for_entity() {
        let store = mem_store();

        // Insert entity.
        let mut p = BTreeMap::new();
        p.insert("id".into(), DataValue::Str("e1".into()));
        p.insert("name".into(), DataValue::Str("Rust".into()));
        p.insert("etype".into(), DataValue::Str("Concept".into()));
        p.insert("desc".into(), DataValue::Str("".into()));
        store
            .query(
                r#"?[id, canonical_name, entity_type, description] <- [[$id, $name, $etype, $desc]]
                :put entities {id => canonical_name, entity_type, description}"#,
                p,
            )
            .unwrap();

        // Insert claim.
        let mut p = BTreeMap::new();
        p.insert("id".into(), DataValue::Str("c1".into()));
        p.insert("stmt".into(), DataValue::Str("Rust is fast".into()));
        p.insert("ct".into(), DataValue::Str("Fact".into()));
        p.insert("sid".into(), DataValue::Str("s1".into()));
        store
            .query(
                r#"?[id, statement, claim_type, source_id, confidence, sensitivity, workspace_id] <- [[
                    $id, $stmt, $ct, $sid, 0.8, 'Public', ''
                ]]
                :put claims {id => statement, claim_type, source_id, confidence, sensitivity, workspace_id}"#,
                p,
            )
            .unwrap();

        // Link claim → entity.
        store.link_claim_to_entity("c1", "e1").unwrap();

        // Query claims for entity.
        let claims = store.get_claims_for_entity("e1").unwrap();
        assert_eq!(claims.len(), 1);
        assert_eq!(claims[0].1, "Rust is fast");
    }
}
