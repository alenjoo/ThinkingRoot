use serde::{Deserialize, Serialize};
use std::path::Path;

use crate::error::{Error, Result};

/// Top-level configuration for a ThinkingRoot workspace.
/// Stored at `.thinkingroot/config.toml` inside the target directory.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Config {
    #[serde(default)]
    pub workspace: WorkspaceConfig,

    #[serde(default)]
    pub llm: LlmConfig,

    #[serde(default)]
    pub extraction: ExtractionConfig,

    #[serde(default)]
    pub compilation: CompilationConfig,

    #[serde(default)]
    pub verification: VerificationConfig,

    #[serde(default)]
    pub parsers: ParserConfig,
}

impl Config {
    /// Load config from a `.thinkingroot/config.toml` file.
    pub fn load(root_path: &Path) -> Result<Self> {
        let config_path = root_path.join(".thinkingroot").join("config.toml");
        if config_path.exists() {
            let content = std::fs::read_to_string(&config_path)
                .map_err(|e| Error::io_path(&config_path, e))?;
            let config: Config = toml::from_str(&content)?;
            Ok(config)
        } else {
            Ok(Self::default())
        }
    }

    /// Save config to the `.thinkingroot/config.toml` file.
    pub fn save(&self, root_path: &Path) -> Result<()> {
        let dir = root_path.join(".thinkingroot");
        std::fs::create_dir_all(&dir).map_err(|e| Error::io_path(&dir, e))?;
        let config_path = dir.join("config.toml");
        let content = toml::to_string_pretty(self)?;
        std::fs::write(&config_path, content).map_err(|e| Error::io_path(&config_path, e))?;
        Ok(())
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            workspace: WorkspaceConfig::default(),
            llm: LlmConfig::default(),
            extraction: ExtractionConfig::default(),
            compilation: CompilationConfig::default(),
            verification: VerificationConfig::default(),
            parsers: ParserConfig::default(),
        }
    }
}

/// Workspace-level settings.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkspaceConfig {
    pub name: Option<String>,
    pub data_dir: String,
}

impl Default for WorkspaceConfig {
    fn default() -> Self {
        Self {
            name: None,
            data_dir: ".thinkingroot".to_string(),
        }
    }
}

/// LLM provider configuration. Supports multiple providers.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LlmConfig {
    /// The default provider to use (e.g. "openai", "anthropic", "ollama").
    pub default_provider: String,
    /// The model to use for claim extraction.
    pub extraction_model: String,
    /// The model to use for compilation / summarization.
    pub compilation_model: String,
    /// Maximum concurrent LLM requests.
    pub max_concurrent_requests: usize,
    /// Request timeout in seconds.
    pub request_timeout_secs: u64,
    /// Provider-specific overrides.
    #[serde(default)]
    pub providers: ProvidersConfig,
}

impl Default for LlmConfig {
    fn default() -> Self {
        Self {
            default_provider: "bedrock".to_string(),
            extraction_model: "amazon.nova-micro-v1:0".to_string(),
            compilation_model: "amazon.nova-micro-v1:0".to_string(),
            max_concurrent_requests: 5,
            request_timeout_secs: 120,
            providers: ProvidersConfig::default(),
        }
    }
}

#[derive(Debug, Clone, Default, Serialize, Deserialize)]
pub struct ProvidersConfig {
    pub bedrock: Option<BedrockConfig>,
    pub openai: Option<ProviderConfig>,
    pub anthropic: Option<ProviderConfig>,
    pub ollama: Option<ProviderConfig>,
    pub groq: Option<ProviderConfig>,
    pub deepseek: Option<ProviderConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProviderConfig {
    pub api_key_env: Option<String>,
    pub base_url: Option<String>,
    pub default_model: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BedrockConfig {
    pub region: Option<String>,
    pub profile: Option<String>,
}

/// Extraction pipeline settings.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExtractionConfig {
    /// Maximum tokens per chunk sent to the LLM.
    pub max_chunk_tokens: usize,
    /// Minimum confidence threshold for extracted claims.
    pub min_confidence: f64,
    /// Whether to extract relations in addition to claims and entities.
    pub extract_relations: bool,
    /// Maximum retries per extraction request.
    pub max_retries: u32,
}

impl Default for ExtractionConfig {
    fn default() -> Self {
        Self {
            max_chunk_tokens: 4000,
            min_confidence: 0.5,
            extract_relations: true,
            max_retries: 3,
        }
    }
}

/// Compilation settings.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompilationConfig {
    /// Which artifact types to generate.
    pub enabled_artifacts: Vec<String>,
    /// Output directory for artifact files (relative to .thinkingroot/).
    pub output_dir: String,
}

impl Default for CompilationConfig {
    fn default() -> Self {
        Self {
            enabled_artifacts: vec![
                "entity_page".to_string(),
                "architecture_map".to_string(),
                "contradiction_report".to_string(),
                "health_report".to_string(),
            ],
            output_dir: "artifacts".to_string(),
        }
    }
}

/// Verification settings.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VerificationConfig {
    /// Days after which a claim is considered stale.
    pub staleness_days: u32,
    /// Minimum freshness score to pass verification.
    pub min_freshness: f64,
    /// Whether to auto-resolve contradictions when signals are clear (>80%).
    pub auto_resolve: bool,
}

impl Default for VerificationConfig {
    fn default() -> Self {
        Self {
            staleness_days: 90,
            min_freshness: 0.5,
            auto_resolve: true,
        }
    }
}

/// Parser configuration.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ParserConfig {
    /// File extensions to include (empty = all supported).
    pub include_extensions: Vec<String>,
    /// Glob patterns to exclude.
    pub exclude_patterns: Vec<String>,
    /// Whether to respect .gitignore rules.
    pub respect_gitignore: bool,
    /// Maximum file size in bytes to parse.
    pub max_file_size: u64,
}

impl Default for ParserConfig {
    fn default() -> Self {
        Self {
            include_extensions: vec![],
            exclude_patterns: vec![
                "target/**".to_string(),
                "node_modules/**".to_string(),
                ".git/**".to_string(),
                ".thinkingroot/**".to_string(),
                "*.lock".to_string(),
                "*.min.js".to_string(),
                "*.min.css".to_string(),
            ],
            respect_gitignore: true,
            max_file_size: 1_048_576, // 1 MB
        }
    }
}

/// Configuration for a single source connector.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SourceConfig {
    pub name: String,
    pub source_type: String,
    pub path: Option<String>,
    pub url: Option<String>,
    pub enabled: bool,
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::PathBuf;

    #[test]
    fn default_config_is_valid() {
        let config = Config::default();
        assert_eq!(config.llm.default_provider, "bedrock");
        assert_eq!(config.extraction.max_chunk_tokens, 4000);
        assert!(config.parsers.respect_gitignore);
    }

    #[test]
    fn config_roundtrip_toml() {
        let config = Config::default();
        let toml_str = toml::to_string_pretty(&config).unwrap();
        let parsed: Config = toml::from_str(&toml_str).unwrap();
        assert_eq!(parsed.llm.default_provider, config.llm.default_provider);
    }
}
