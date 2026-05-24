window.BENCHMARK_DATA = {
  "lastUpdate": 1779609825284,
  "repoUrl": "https://github.com/alenjoo/ThinkingRoot",
  "entries": {
    "ThinkingRoot Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "DevbyNaveen",
            "username": "DevbyNaveen",
            "email": "Naveenani2025@gmail.com"
          },
          "committer": {
            "name": "DevbyNaveen",
            "username": "DevbyNaveen",
            "email": "Naveenani2025@gmail.com"
          },
          "id": "d790a14bf0743a1c579985fe3d302570b3e7d123",
          "message": "feat(serve+desktop): refresh BrainView + invalidate engrams on merge-to-main\n\nCloses the post-merge staleness gap by reusing existing channels —\nzero new types, SSE events, or Tauri events.\n\nserve/rest.rs:\n- invalidate_engrams_for_root helper does workspace-name reverse\n  lookup via mounted_workspace_roots, then engram_manager\n  invalidate_workspace. Best-effort no-op when root not registered.\n- merge_branch_handler calls it unconditionally on Ok(diff)\n  (handler always targets main).\n- merge_into_branch_handler gates on target == \"main\" so cross-branch\n  merges don't churn engrams.\n\ndesktop/branch_extras.rs:\n- merge_landed_on_main pure predicate: kind == \"merged\" && into ==\n  \"main\". Extracted so the decision is testable without an AppHandle.\n- Subscriber emits \"workspaces-changed\" alongside \"branch-event\"\n  when true. BrainView's existing onWorkspacesChanged listener\n  refetches the brain snapshot — no UI change required.\n\nMirrors finalize_successful_compile's reconciliation: when main's\ngraph mutates, invalidate engrams + signal graph refresh on the same\nwires compile already uses.\n\nVerified:\n- cargo check -p thinkingroot-serve: zero new warnings.\n- cargo test -p thinkingroot-serve --lib: 912 passed, 0 failed.\n- cargo test branch_extras (desktop): 3 new tests pass\n  (merged_into_main, merged_into_other_branch, non_merge_event).",
          "timestamp": "2026-05-21T02:13:44Z",
          "url": "https://github.com/alenjoo/ThinkingRoot/commit/d790a14bf0743a1c579985fe3d302570b3e7d123"
        },
        "date": 1779438012146,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20062,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6646365,
            "range": "± 177031",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 206741,
            "range": "± 938",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 128845384,
            "range": "± 623573",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 200061,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8242705,
            "range": "± 95577",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 75176497,
            "range": "± 516148",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 466914,
            "range": "± 2855",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 946948,
            "range": "± 20479",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 58749485,
            "range": "± 242427",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 628399,
            "range": "± 9363",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3120131,
            "range": "± 113494",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12423734,
            "range": "± 53194",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 562504,
            "range": "± 31021",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2786916,
            "range": "± 34136",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11061884,
            "range": "± 215940",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 385397,
            "range": "± 9513",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1890020,
            "range": "± 13950",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7340511,
            "range": "± 34546",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40555,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 213599,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1418066,
            "range": "± 35221",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1756,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3205,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7951,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8715,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74819,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86826,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 747401,
            "range": "± 29582",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 857748,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1978,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6172,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54051,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 542536,
            "range": "± 2750",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1435,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4016,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30098,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 295262,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6312918,
            "range": "± 123113",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6323404,
            "range": "± 22967",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6319719,
            "range": "± 23788",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 107,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14566,
            "range": "± 108",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DevbyNaveen",
            "username": "DevbyNaveen",
            "email": "Naveenani2025@gmail.com"
          },
          "committer": {
            "name": "DevbyNaveen",
            "username": "DevbyNaveen",
            "email": "Naveenani2025@gmail.com"
          },
          "id": "d790a14bf0743a1c579985fe3d302570b3e7d123",
          "message": "feat(serve+desktop): refresh BrainView + invalidate engrams on merge-to-main\n\nCloses the post-merge staleness gap by reusing existing channels —\nzero new types, SSE events, or Tauri events.\n\nserve/rest.rs:\n- invalidate_engrams_for_root helper does workspace-name reverse\n  lookup via mounted_workspace_roots, then engram_manager\n  invalidate_workspace. Best-effort no-op when root not registered.\n- merge_branch_handler calls it unconditionally on Ok(diff)\n  (handler always targets main).\n- merge_into_branch_handler gates on target == \"main\" so cross-branch\n  merges don't churn engrams.\n\ndesktop/branch_extras.rs:\n- merge_landed_on_main pure predicate: kind == \"merged\" && into ==\n  \"main\". Extracted so the decision is testable without an AppHandle.\n- Subscriber emits \"workspaces-changed\" alongside \"branch-event\"\n  when true. BrainView's existing onWorkspacesChanged listener\n  refetches the brain snapshot — no UI change required.\n\nMirrors finalize_successful_compile's reconciliation: when main's\ngraph mutates, invalidate engrams + signal graph refresh on the same\nwires compile already uses.\n\nVerified:\n- cargo check -p thinkingroot-serve: zero new warnings.\n- cargo test -p thinkingroot-serve --lib: 912 passed, 0 failed.\n- cargo test branch_extras (desktop): 3 new tests pass\n  (merged_into_main, merged_into_other_branch, non_merge_event).",
          "timestamp": "2026-05-21T02:13:44Z",
          "url": "https://github.com/alenjoo/ThinkingRoot/commit/d790a14bf0743a1c579985fe3d302570b3e7d123"
        },
        "date": 1779522692911,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21243,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6243798,
            "range": "± 15002",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 221552,
            "range": "± 5544",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 128106602,
            "range": "± 922756",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 223940,
            "range": "± 4933",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7759093,
            "range": "± 229165",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 70435330,
            "range": "± 756871",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 493799,
            "range": "± 1902",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 944482,
            "range": "± 4677",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54336380,
            "range": "± 703052",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 688672,
            "range": "± 7446",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3385546,
            "range": "± 29877",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13278023,
            "range": "± 114059",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 612247,
            "range": "± 5195",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3005889,
            "range": "± 17644",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11828129,
            "range": "± 166949",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 421262,
            "range": "± 2237",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2058416,
            "range": "± 13681",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7949502,
            "range": "± 72703",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39929,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 215195,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1433971,
            "range": "± 9671",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1689,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3097,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6830,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8526,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 66710,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85039,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 673483,
            "range": "± 11448",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 844134,
            "range": "± 5238",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1966,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7099,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59362,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 584274,
            "range": "± 4109",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3347,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24746,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 246034,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5948114,
            "range": "± 19948",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5943603,
            "range": "± 29622",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5943637,
            "range": "± 11401",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 17043,
            "range": "± 88",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "DevbyNaveen",
            "username": "DevbyNaveen",
            "email": "Naveenani2025@gmail.com"
          },
          "committer": {
            "name": "DevbyNaveen",
            "username": "DevbyNaveen",
            "email": "Naveenani2025@gmail.com"
          },
          "id": "d790a14bf0743a1c579985fe3d302570b3e7d123",
          "message": "feat(serve+desktop): refresh BrainView + invalidate engrams on merge-to-main\n\nCloses the post-merge staleness gap by reusing existing channels —\nzero new types, SSE events, or Tauri events.\n\nserve/rest.rs:\n- invalidate_engrams_for_root helper does workspace-name reverse\n  lookup via mounted_workspace_roots, then engram_manager\n  invalidate_workspace. Best-effort no-op when root not registered.\n- merge_branch_handler calls it unconditionally on Ok(diff)\n  (handler always targets main).\n- merge_into_branch_handler gates on target == \"main\" so cross-branch\n  merges don't churn engrams.\n\ndesktop/branch_extras.rs:\n- merge_landed_on_main pure predicate: kind == \"merged\" && into ==\n  \"main\". Extracted so the decision is testable without an AppHandle.\n- Subscriber emits \"workspaces-changed\" alongside \"branch-event\"\n  when true. BrainView's existing onWorkspacesChanged listener\n  refetches the brain snapshot — no UI change required.\n\nMirrors finalize_successful_compile's reconciliation: when main's\ngraph mutates, invalidate engrams + signal graph refresh on the same\nwires compile already uses.\n\nVerified:\n- cargo check -p thinkingroot-serve: zero new warnings.\n- cargo test -p thinkingroot-serve --lib: 912 passed, 0 failed.\n- cargo test branch_extras (desktop): 3 new tests pass\n  (merged_into_main, merged_into_other_branch, non_merge_event).",
          "timestamp": "2026-05-21T02:13:44Z",
          "url": "https://github.com/alenjoo/ThinkingRoot/commit/d790a14bf0743a1c579985fe3d302570b3e7d123"
        },
        "date": 1779609824736,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20224,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6660649,
            "range": "± 59024",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 204100,
            "range": "± 1055",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 123726897,
            "range": "± 4229070",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 198354,
            "range": "± 9238",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8126189,
            "range": "± 306122",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 76446152,
            "range": "± 1128421",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 473785,
            "range": "± 22454",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 935103,
            "range": "± 3645",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 58693815,
            "range": "± 435026",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 627468,
            "range": "± 4885",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3116038,
            "range": "± 90405",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12475158,
            "range": "± 540429",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 561351,
            "range": "± 2312",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2785991,
            "range": "± 24998",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11121265,
            "range": "± 447919",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 382452,
            "range": "± 12204",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1886326,
            "range": "± 21708",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7384276,
            "range": "± 154290",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40592,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 214437,
            "range": "± 4680",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1425843,
            "range": "± 20050",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1755,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3252,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7601,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8800,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74184,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 91193,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 742887,
            "range": "± 2085",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 904920,
            "range": "± 6385",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1996,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6022,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 53895,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 536054,
            "range": "± 1880",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1435,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4012,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30089,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 293338,
            "range": "± 4879",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6309983,
            "range": "± 21899",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6314634,
            "range": "± 249537",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6349506,
            "range": "± 29737",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14096,
            "range": "± 365",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}