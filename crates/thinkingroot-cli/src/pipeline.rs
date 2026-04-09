use std::path::Path;

use console::style;
use indicatif::{ProgressBar, ProgressStyle};

use thinkingroot_core::config::Config;
use thinkingroot_core::types::*;
use thinkingroot_graph::StorageEngine;

/// Result of a full pipeline run.
pub struct PipelineResult {
    pub files_parsed: usize,
    pub claims_count: usize,
    pub entities_count: usize,
    pub relations_count: usize,
    pub contradictions_count: usize,
    pub artifacts_count: usize,
    pub health_score: u8,
}

/// Run the full 6-stage compilation pipeline.
pub async fn run_pipeline(root_path: &Path) -> anyhow::Result<PipelineResult> {
    let config = Config::load(root_path)?;
    let data_dir = root_path.join(&config.workspace.data_dir);

    // Ensure data directory exists.
    std::fs::create_dir_all(&data_dir)?;

    let spinner_style = ProgressStyle::with_template("  {spinner:.cyan} {msg}")
        .unwrap()
        .tick_strings(&["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]);

    // ── Stage 1: PARSE ────────────────────────────────────────────
    let pb = ProgressBar::new_spinner();
    pb.set_style(spinner_style.clone());
    pb.set_message("Parsing sources...");
    pb.enable_steady_tick(std::time::Duration::from_millis(80));

    let documents = thinkingroot_parse::parse_directory(root_path, &config.parsers)?;
    let files_parsed = documents.len();

    pb.finish_with_message(format!(
        "{} Parsed {} files",
        style("✓").green(),
        files_parsed
    ));

    if documents.is_empty() {
        println!(
            "\n  {} No supported files found in {}",
            style("!").yellow(),
            root_path.display()
        );
        return Ok(PipelineResult {
            files_parsed: 0,
            claims_count: 0,
            entities_count: 0,
            relations_count: 0,
            contradictions_count: 0,
            artifacts_count: 0,
            health_score: 0,
        });
    }

    // ── Incremental: filter out unchanged documents ───────────────
    // Initialize storage early so we can check existing hashes.
    let mut storage = StorageEngine::init(&data_dir).await?;

    let mut new_documents = Vec::new();
    let mut skipped = 0usize;
    for doc in &documents {
        if !doc.content_hash.0.is_empty()
            && storage.graph.source_hash_exists(&doc.content_hash.0)?
        {
            skipped += 1;
        } else {
            new_documents.push(doc.clone());
        }
    }

    if skipped > 0 {
        println!(
            "  {} Skipped {} unchanged files (incremental)",
            style("↺").cyan(),
            skipped,
        );
    }

    if new_documents.is_empty() && skipped > 0 {
        // All files unchanged — still run compile + verify on existing graph.
        println!(
            "  {} No changes detected, recompiling artifacts...",
            style("→").cyan(),
        );

        let compiler = thinkingroot_compile::Compiler::new(&config)?;
        let artifacts = compiler.compile_all(&storage.graph, &data_dir)?;

        let verifier = thinkingroot_verify::Verifier::new(&config);
        let verification = verifier.verify(&storage.graph)?;

        config.save(root_path)?;

        return Ok(PipelineResult {
            files_parsed,
            claims_count: 0,
            entities_count: 0,
            relations_count: 0,
            contradictions_count: verification.contradictions,
            artifacts_count: artifacts.len(),
            health_score: verification.health_score.as_percentage(),
        });
    }

    // ── Stage 2: EXTRACT ──────────────────────────────────────────
    let pb = ProgressBar::new_spinner();
    pb.set_style(spinner_style.clone());
    pb.set_message(format!("Extracting knowledge via LLM ({} files)...", new_documents.len()));
    pb.enable_steady_tick(std::time::Duration::from_millis(80));

    let workspace_id = WorkspaceId::new();
    let extractor = thinkingroot_extract::Extractor::new(&config).await?;
    let extraction = extractor.extract_all(&new_documents, workspace_id).await?;

    pb.finish_with_message(format!(
        "{} Extracted {} claims, {} entities, {} relations",
        style("✓").green(),
        extraction.claims.len(),
        extraction.entities.len(),
        extraction.relations.len(),
    ));

    let claims_count = extraction.claims.len();
    let entities_count = extraction.entities.len();
    let relations_count = extraction.relations.len();

    // ── Stage 3: LINK ─────────────────────────────────────────────
    let pb = ProgressBar::new_spinner();
    pb.set_style(spinner_style.clone());
    pb.set_message("Linking knowledge graph...");
    pb.enable_steady_tick(std::time::Duration::from_millis(80));

    // Insert new sources into graph (using the document's source_id so
    // claims can join back to their source via the same ID).
    for doc in &new_documents {
        let source = thinkingroot_core::Source::new(
            doc.uri.clone(),
            doc.source_type,
        )
        .with_id(doc.source_id)
        .with_hash(doc.content_hash.clone());
        storage.graph.insert_source(&source)?;
    }

    let linker = thinkingroot_link::Linker::new(&storage.graph);
    let link_result = linker.link(extraction)?;

    pb.finish_with_message(format!(
        "{} Linked {} entities ({} merged), {} relations",
        style("✓").green(),
        link_result.entities_created,
        link_result.entities_merged,
        link_result.relations_linked,
    ));

    // ── Embed knowledge for semantic search ─────────────────────
    {
        let pb = ProgressBar::new_spinner();
        pb.set_style(spinner_style.clone());
        pb.set_message("Embedding knowledge for semantic search...");
        pb.enable_steady_tick(std::time::Duration::from_millis(80));

        let entities = storage.graph.get_all_entities()?;
        let claims = storage.graph.get_all_claims_with_sources()?;

        // Embed entities: "name (type)" as the text, entity_id as key.
        let entity_items: Vec<(String, String, String)> = entities
            .iter()
            .map(|(id, name, etype)| {
                (
                    format!("entity:{id}"),
                    format!("{name} ({etype})"),
                    format!("entity|{id}|{name}|{etype}"),
                )
            })
            .collect();

        let entity_count = storage.vector.upsert_batch(&entity_items)?;

        // Embed claims: statement as the text.
        let claim_items: Vec<(String, String, String)> = claims
            .iter()
            .map(|(id, statement, ctype, conf, uri)| {
                (
                    format!("claim:{id}"),
                    statement.clone(),
                    format!("claim|{id}|{ctype}|{conf}|{uri}"),
                )
            })
            .collect();

        let claim_count = storage.vector.upsert_batch(&claim_items)?;
        storage.vector.save()?;

        pb.finish_with_message(format!(
            "{} Embedded {} entities + {} claims",
            style("✓").green(),
            entity_count,
            claim_count,
        ));
    }

    // ── Stage 4: COMPILE ──────────────────────────────────────────
    let pb = ProgressBar::new_spinner();
    pb.set_style(spinner_style.clone());
    pb.set_message("Compiling artifacts...");
    pb.enable_steady_tick(std::time::Duration::from_millis(80));

    let compiler = thinkingroot_compile::Compiler::new(&config)?;
    let artifacts = compiler.compile_all(&storage.graph, &data_dir)?;

    pb.finish_with_message(format!(
        "{} Compiled {} artifacts",
        style("✓").green(),
        artifacts.len(),
    ));

    // ── Stage 5: VERIFY ───────────────────────────────────────────
    let pb = ProgressBar::new_spinner();
    pb.set_style(spinner_style.clone());
    pb.set_message("Verifying knowledge health...");
    pb.enable_steady_tick(std::time::Duration::from_millis(80));

    let verifier = thinkingroot_verify::Verifier::new(&config);
    let verification = verifier.verify(&storage.graph)?;

    pb.finish_with_message(format!(
        "{} Health score: {}%",
        style("✓").green(),
        verification.health_score.as_percentage(),
    ));

    // Save config if it didn't exist.
    config.save(root_path)?;

    Ok(PipelineResult {
        files_parsed,
        claims_count,
        entities_count,
        relations_count,
        contradictions_count: verification.contradictions,
        artifacts_count: artifacts.len(),
        health_score: verification.health_score.as_percentage(),
    })
}
