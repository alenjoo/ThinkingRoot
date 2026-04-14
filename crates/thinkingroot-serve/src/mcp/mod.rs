pub mod resources;
pub mod sse;
pub mod stdio;
pub mod tools;

use serde::{Deserialize, Serialize};
use serde_json::Value;

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

const SUPPORTED_VERSIONS: &[&str] = &["2025-03-26", "2024-11-05"];

pub fn server_info(requested_version: Option<&str>) -> Value {
    // Echo back the client's version if we support it; otherwise use our latest.
    let version = requested_version
        .filter(|v| SUPPORTED_VERSIONS.contains(v))
        .unwrap_or(SUPPORTED_VERSIONS[0]);
    serde_json::json!({
        "protocolVersion": version,
        "serverInfo": { "name": "thinkingroot", "version": env!("CARGO_PKG_VERSION") },
        "capabilities": {
            "resources": { "listChanged": false },
            "tools": {},
            "prompts": {}
        }
    })
}

pub async fn dispatch(
    request: &JsonRpcRequest,
    engine: &crate::engine::QueryEngine,
    default_workspace: Option<&str>,
    session_id: &str,
    sessions: &crate::intelligence::session::SessionStore,
) -> JsonRpcResponse {
    let id = request.id.clone();
    match request.method.as_str() {
        "initialize" => {
            let requested = request.params.get("protocolVersion").and_then(|v| v.as_str());
            JsonRpcResponse::success(id, server_info(requested))
        }
        "notifications/initialized" => JsonRpcResponse::success(id, Value::Null),
        "resources/list" => resources::handle_list(id, engine, default_workspace).await,
        "resources/read" => {
            resources::handle_read(id, &request.params, engine, default_workspace).await
        }
        "tools/list" => tools::handle_list(id).await,
        "tools/call" => {
            tools::handle_call(
                id,
                &request.params,
                engine,
                default_workspace,
                session_id,
                sessions,
            )
            .await
        }
        "ping" => JsonRpcResponse::success(id, serde_json::json!({})),
        other => JsonRpcResponse::error(id, -32601, format!("Method not found: {}", other)),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn server_info_echoes_supported_version() {
        let info = server_info(Some("2025-03-26"));
        assert_eq!(info["protocolVersion"], "2025-03-26");
    }

    #[test]
    fn server_info_falls_back_to_latest_for_unknown_version() {
        let info = server_info(Some("2099-01-01"));
        assert_eq!(info["protocolVersion"], "2025-03-26");
    }

    #[test]
    fn server_info_uses_latest_when_no_version_requested() {
        let info = server_info(None);
        assert_eq!(info["protocolVersion"], "2025-03-26");
    }

    #[test]
    fn server_info_accepts_legacy_version() {
        let info = server_info(Some("2024-11-05"));
        assert_eq!(info["protocolVersion"], "2024-11-05");
    }

    #[test]
    fn server_info_includes_prompts_capability() {
        let info = server_info(None);
        assert!(info["capabilities"]["prompts"].is_object());
    }
}
