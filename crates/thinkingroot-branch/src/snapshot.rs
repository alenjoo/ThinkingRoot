// crates/thinkingroot-branch/src/snapshot.rs
use std::path::{Path, PathBuf};
use std::fs;
use thinkingroot_core::Result;

/// Convert a branch name to a filesystem-safe slug.
/// "feature/graphql" → "feature-graphql"
/// "My Branch" → "my-branch"
pub fn slugify(name: &str) -> String {
    name.to_lowercase()
        .chars()
        .map(|c| if c.is_alphanumeric() || c == '-' { c } else { '-' })
        .collect::<String>()
        .split('-')
        .filter(|s| !s.is_empty())
        .collect::<Vec<_>>()
        .join("-")
}

/// Resolve the data directory for a given branch.
/// main (or None) → `{root}/.thinkingroot`
/// other branch   → `{root}/.thinkingroot-{slug}`
pub fn resolve_data_dir(root_path: &Path, branch: Option<&str>) -> PathBuf {
    match branch {
        None | Some("main") => root_path.join(".thinkingroot"),
        Some(name) => root_path.join(format!(".thinkingroot-{}", slugify(name))),
    }
}

/// Create the directory layout for a new branch:
/// - Copy `{parent_data_dir}/graph/graph.db` → `{branch_data_dir}/graph/graph.db`
/// - Symlink `{parent_data_dir}/models` → `{branch_data_dir}/models`
/// - Symlink `{parent_data_dir}/cache`  → `{branch_data_dir}/cache`
pub fn create_branch_layout(
    parent_data_dir: &Path,
    branch_data_dir: &Path,
) -> Result<()> {
    let branch_graph_dir = branch_data_dir.join("graph");
    fs::create_dir_all(&branch_graph_dir)?;

    // Copy graph.db
    let src_db = parent_data_dir.join("graph").join("graph.db");
    let dst_db = branch_graph_dir.join("graph.db");
    if src_db.exists() {
        fs::copy(&src_db, &dst_db)?;
    }

    // Share models/ (fastembed cache — ~300MB, never duplicate).
    // Unix: symlink. Windows: copy recursively (junctions require elevated perms).
    let parent_models = parent_data_dir.join("models");
    let branch_models = branch_data_dir.join("models");
    if parent_models.exists() && !branch_models.exists() {
        #[cfg(unix)]
        std::os::unix::fs::symlink(&parent_models, &branch_models)?;
        #[cfg(windows)]
        copy_dir_all(&parent_models, &branch_models)?;
    }

    // Share cache/ (extraction cache).
    let parent_cache = parent_data_dir.join("cache");
    let branch_cache = branch_data_dir.join("cache");
    if parent_cache.exists() && !branch_cache.exists() {
        #[cfg(unix)]
        std::os::unix::fs::symlink(&parent_cache, &branch_cache)?;
        #[cfg(windows)]
        copy_dir_all(&parent_cache, &branch_cache)?;
    }

    Ok(())
}

/// Recursively copy a directory tree from `src` to `dst`.
///
/// Used on Windows as a fallback when creating branch layouts, since
/// creating symlinks there requires elevated privileges.
#[allow(dead_code)]
fn copy_dir_all(src: &Path, dst: &Path) -> Result<()> {
    fs::create_dir_all(dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let src_path = entry.path();
        let dst_path = dst.join(entry.file_name());
        if src_path.is_dir() {
            copy_dir_all(&src_path, &dst_path)?;
        } else {
            fs::copy(&src_path, &dst_path)?;
        }
    }
    Ok(())
}
