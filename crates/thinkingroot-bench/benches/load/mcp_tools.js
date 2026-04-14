// ─── MCP HTTP Latency Benchmark ───────────────────────────────────────────────
// ThinkingRoot MCP uses SSE transport:
//   1. GET /mcp/sse → server creates UUID session, responds with SSE stream
//      (first event is: data: {"type":"endpoint","uri":"/mcp?sessionId=<uuid>"})
//   2. POST /mcp?sessionId=<uuid> → JSON-RPC request → returns 202 Accepted
//      (response body goes to the SSE channel, not the HTTP response)
//
// This script properly:
//   - Creates one SSE session per VU in setUp via a short-read GET
//   - Sends JSON-RPC POSTs with valid session IDs
//   - Measures round-trip HTTP time (202 = success; response is async via SSE)
// ──────────────────────────────────────────────────────────────────────────────

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

const mcpLatency = new Trend('mcp_latency', true);
const mcpFailRate = new Rate('mcp_fail_rate');

const BASE_URL = __ENV.BASE_URL || 'http://127.0.0.1:9876';
const WS = __ENV.WORKSPACE || 'bench-workspace';

const SEARCH_QUERIES = [
  'authentication flow',
  'database connection',
  'cache invalidation',
  'error handling',
  'configuration loading',
];

let _rpcId = 1;
// VU-local session ID — created once per VU on first iteration
let _sessionId = null;

function makeJsonRpc(method, params) {
  return JSON.stringify({
    jsonrpc: '2.0',
    id: _rpcId++,
    method,
    params,
  });
}

/** Establish an MCP SSE session and return the sessionId UUID. */
function createMcpSession() {
  // GET /mcp/sse with a very short timeout so we read just the initial event
  // (the SSE stream never ends, but the first chunk contains the endpoint URI)
  const res = http.get(`${BASE_URL}/mcp/sse`, {
    headers: { 'Accept': 'text/event-stream', 'Cache-Control': 'no-cache' },
    timeout: '2s',
  });

  // Server sends: "data: {\"type\":\"endpoint\",\"uri\":\"/mcp?sessionId=<uuid>\"}\n\n"
  if (res.body) {
    const m = res.body.match(/sessionId=([0-9a-f-]{36})/);
    if (m) return m[1];
  }
  return null;
}

export const options = {
  stages: [
    { duration: '20s', target: 30 },
    { duration: '60s', target: 30 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    // MCP POST returns 202 Accepted — response is delivered async via SSE channel.
    // We measure HTTP transport latency; 202 is the expected success status.
    'mcp_latency': ['p(95)<15', 'p(99)<30'],
    'mcp_fail_rate': ['rate<0.05'],   // allow up to 5% for session setup edge cases
  },
};

export default function () {
  // First iteration: establish this VU's SSE session
  if (_sessionId === null) {
    _sessionId = createMcpSession();
    if (!_sessionId) {
      // Could not create session — record failure and skip iteration
      mcpFailRate.add(1);
      sleep(0.1);
      return;
    }
  }

  const roll = Math.random();
  let body;

  if (roll < 0.80) {
    // 80% — search tool
    const q = SEARCH_QUERIES[Math.floor(Math.random() * SEARCH_QUERIES.length)];
    body = makeJsonRpc('tools/call', {
      name: 'search',
      arguments: { workspace: WS, query: q, top_k: 10 },
    });
  } else if (roll < 0.95) {
    // 15% — query_claims
    body = makeJsonRpc('tools/call', {
      name: 'query_claims',
      arguments: { workspace: WS, claim_type: 'Fact', limit: 20 },
    });
  } else {
    // 5% — health_check
    body = makeJsonRpc('tools/call', {
      name: 'health_check',
      arguments: { workspace: WS },
    });
  }

  const url = `${BASE_URL}/mcp?sessionId=${_sessionId}`;
  const reqParams = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, body, reqParams);

  mcpLatency.add(res.timings.duration);

  // 202 Accepted is the success status for MCP POST (response is async via SSE)
  const success = check(res, {
    'mcp accepted (202)': (r) => r.status === 202,
  });

  // Session expired or invalid — reset so next iteration re-creates it
  if (res.status === 400 || res.status === 404) {
    _sessionId = null;
  }

  mcpFailRate.add(!success);

  sleep(0.1);
}
