use std::path::{Path, PathBuf};

use thinkingroot_core::config::ParserConfig;
use thinkingroot_core::{Error, Result};

/// Walk a directory tree and return all parseable files, respecting
/// gitignore rules and the user's exclude patterns.
pub fn walk(root: &Path, config: &ParserConfig) -> Result<Vec<PathBuf>> {
    let mut builder = ignore::WalkBuilder::new(root);

    builder
        .hidden(true) // skip hidden files by default
        .git_ignore(config.respect_gitignore)
        .git_global(config.respect_gitignore)
        .git_exclude(config.respect_gitignore);

    // Add exclude patterns as overrides.
    let mut overrides = ignore::overrides::OverrideBuilder::new(root);
    for pattern in &config.exclude_patterns {
        // Negate patterns: "!pattern" means exclude.
        overrides
            .add(&format!("!{pattern}"))
            .map_err(|e| Error::Config(format!("invalid exclude pattern '{pattern}': {e}")))?;
    }
    let overrides = overrides
        .build()
        .map_err(|e| Error::Config(format!("failed to build overrides: {e}")))?;
    builder.overrides(overrides);

    let mut files = Vec::new();

    for entry in builder.build() {
        let entry = entry.map_err(|e| Error::Io {
            path: Some(root.to_path_buf()),
            source: std::io::Error::other(e.to_string()),
        })?;

        let path = entry.path();

        // Skip directories.
        if !path.is_file() {
            continue;
        }

        // Check file size limit.
        if let Ok(meta) = path.metadata() {
            if meta.len() > config.max_file_size {
                tracing::debug!(
                    "skipping large file: {} ({} bytes)",
                    path.display(),
                    meta.len()
                );
                continue;
            }
        }

        // If include_extensions is set, filter by extension.
        if !config.include_extensions.is_empty() {
            let ext = path
                .extension()
                .and_then(|e| e.to_str())
                .unwrap_or("")
                .to_lowercase();
            if !config
                .include_extensions
                .iter()
                .any(|e| e.to_lowercase() == ext)
            {
                continue;
            }
        }

        files.push(path.to_path_buf());
    }

    files.sort();
    tracing::info!("found {} files in {}", files.len(), root.display());
    Ok(files)
}
