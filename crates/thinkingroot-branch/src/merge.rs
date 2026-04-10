// crates/thinkingroot-branch/src/merge.rs
use std::path::Path;
use thinkingroot_core::error::Error;
use thinkingroot_core::{KnowledgeDiff, MergedBy, Result};
use thinkingroot_graph::graph::GraphStore;
use crate::branch::BranchRegistry;
use crate::lock::MergeLock;
use crate::snapshot::{resolve_data_dir, slugify};

/// Execute a merge of `branch_name` into main.
///
/// 1. Verify diff.merge_allowed (abort with MergeBlocked if not).
/// 2. Snapshot main's graph.db to graph.db.pre-merge-{slug}-{ts} before any mutation.
/// 3. Open main graph.
/// 4. Insert new claims from diff into main.
/// 5. Link each new claim to matching entities in main (by canonical name lookup).
/// 6. Auto-resolved: supersede the losing claim in main.
/// 7. Insert new entities into main.
/// 8. Link new relations (by canonical name lookup).
/// 9. Rebuild entity relations in main for consistency.
/// 10. Mark branch as merged in registry.
pub async fn execute_merge(
    root_path: &Path,
    branch_name: &str,
    diff: &KnowledgeDiff,
    merged_by: MergedBy,
    _propagate_deletions: bool,
) -> Result<()> {
    if !diff.merge_allowed {
        return Err(Error::MergeBlocked(diff.blocking_reasons.join("; ")));
    }

    // Acquire advisory merge lock — prevents concurrent merges from racing on graph.db.
    let _merge_lock = MergeLock::acquire(root_path)?;

    let main_data_dir = resolve_data_dir(root_path, None);

    // Pre-merge snapshot — copy graph.db before any mutation.
    // This enables `root merge --rollback <branch>` to restore to this point.
    let db_path = main_data_dir.join("graph").join("graph.db");
    if db_path.exists() {
        let ts = chrono::Utc::now().timestamp();
        let slug = slugify(branch_name);
        let backup_path = main_data_dir
            .join("graph")
            .join(format!("graph.db.pre-merge-{slug}-{ts}"));
        std::fs::copy(&db_path, &backup_path)?;
        tracing::debug!(
            "pre-merge snapshot written to {}",
            backup_path.display()
        );
    }

    let main_graph = GraphStore::init(&main_data_dir.join("graph"))?;

    // Insert new claims
    for diff_claim in &diff.new_claims {
        let c = &diff_claim.claim;
        main_graph.insert_claim(c)?;

        // Link to entities by canonical name
        for entity_name in &diff_claim.entity_context {
            if let Some(entity_id) = main_graph.find_entity_id_by_name(entity_name)? {
                main_graph.link_claim_to_entity(&c.id.to_string(), &entity_id)?;
            }
        }
    }

    // Auto-resolved: supersede the loser in main
    for resolution in &diff.auto_resolved {
        if resolution.winner == resolution.branch_claim_id {
            // Branch won — supersede main claim
            main_graph.supersede_claim(
                &resolution.main_claim_id,
                &resolution.branch_claim_id,
            )?;
        }
        // If main won — branch claim is simply not inserted
    }

    // Insert new entities
    for diff_entity in &diff.new_entities {
        main_graph.insert_entity(&diff_entity.entity)?;
    }

    // Link new relations — look up entity IDs by canonical name and call link_entities.
    for diff_relation in &diff.new_relations {
        let from_id = main_graph.find_entity_id_by_name(&diff_relation.from_name)?;
        let to_id = main_graph.find_entity_id_by_name(&diff_relation.to_name)?;
        if let (Some(from), Some(to)) = (from_id, to_id) {
            main_graph.link_entities(&from, &to, &diff_relation.relation_type, diff_relation.strength)?;
        }
    }

    // Rebuild entity relations for consistency
    main_graph.rebuild_entity_relations()?;

    // Mark branch as merged in registry
    let refs_dir = root_path.join(".thinkingroot-refs");
    std::fs::create_dir_all(&refs_dir)?;
    let mut registry = BranchRegistry::load_or_create(&refs_dir)?;
    registry.mark_merged(branch_name, merged_by)?;

    Ok(())
}

/// Roll back a merge by restoring the pre-merge snapshot of graph.db.
///
/// Finds the most recent `graph.db.pre-merge-{slug}-*` backup created when
/// `branch_name` was merged, and copies it back over the current `graph.db`.
///
/// Returns `Err` if no backup is found for the given branch.
pub fn rollback_merge(root_path: &Path, branch_name: &str) -> Result<()> {
    let main_data_dir = resolve_data_dir(root_path, None);
    let graph_dir = main_data_dir.join("graph");
    let slug = slugify(branch_name);
    let prefix = format!("graph.db.pre-merge-{slug}-");

    // Find all matching backups and pick the most recent (highest timestamp).
    let mut candidates: Vec<std::path::PathBuf> = std::fs::read_dir(&graph_dir)?
        .filter_map(|entry| entry.ok())
        .map(|e| e.path())
        .filter(|p| {
            p.file_name()
                .and_then(|n| n.to_str())
                .map(|n| n.starts_with(&prefix))
                .unwrap_or(false)
        })
        .collect();

    if candidates.is_empty() {
        return Err(Error::MergeBlocked(format!(
            "no pre-merge backup found for branch '{}' — cannot roll back",
            branch_name
        )));
    }

    // Sort lexicographically; since the suffix is a Unix timestamp, this gives
    // chronological order and the last element is the most recent backup.
    candidates.sort();
    let backup = candidates.last().expect("non-empty after filter");

    let db_path = graph_dir.join("graph.db");
    std::fs::copy(backup, &db_path)?;
    tracing::info!(
        "rolled back main graph to pre-merge snapshot {}",
        backup.display()
    );
    Ok(())
}
