window.BENCHMARK_DATA = {
  "lastUpdate": 1779958213474,
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
        "date": 1779699154848,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21046,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6564668,
            "range": "± 41680",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223067,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 134290126,
            "range": "± 1485318",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 236387,
            "range": "± 2526",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7646202,
            "range": "± 132462",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68504492,
            "range": "± 379863",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 485587,
            "range": "± 3103",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 941534,
            "range": "± 12576",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55245397,
            "range": "± 160316",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 690021,
            "range": "± 3996",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3369532,
            "range": "± 22459",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13317576,
            "range": "± 90910",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 614544,
            "range": "± 3488",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3008662,
            "range": "± 16221",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11891208,
            "range": "± 87376",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 429219,
            "range": "± 4636",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2089940,
            "range": "± 33699",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7990178,
            "range": "± 42529",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40211,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 216521,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1435235,
            "range": "± 7822",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1726,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3162,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6844,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8399,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 66860,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84116,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 664019,
            "range": "± 2782",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 829420,
            "range": "± 6293",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2049,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6993,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59253,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 587364,
            "range": "± 5981",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1178,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3350,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24782,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 247100,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5972866,
            "range": "± 11349",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5961122,
            "range": "± 27495",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5951755,
            "range": "± 65324",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 102,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14294,
            "range": "± 230",
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
        "date": 1779783922058,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21067,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6554311,
            "range": "± 116528",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222848,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 128886727,
            "range": "± 2518487",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 235996,
            "range": "± 3234",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 9126570,
            "range": "± 395871",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 71160441,
            "range": "± 1519187",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 486761,
            "range": "± 7785",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 979529,
            "range": "± 19877",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 53778480,
            "range": "± 1328526",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 678356,
            "range": "± 9606",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3346563,
            "range": "± 27982",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13182132,
            "range": "± 73494",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 614826,
            "range": "± 5303",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3020664,
            "range": "± 18334",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11985029,
            "range": "± 102136",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 419934,
            "range": "± 2327",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2032521,
            "range": "± 21344",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7820950,
            "range": "± 228403",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39987,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 213894,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1434092,
            "range": "± 7610",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1754,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3195,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7077,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8614,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 67230,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85151,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 671319,
            "range": "± 2710",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 859737,
            "range": "± 15879",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2023,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6943,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 61798,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 593722,
            "range": "± 7943",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1179,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3348,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24810,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 247947,
            "range": "± 1211",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5953642,
            "range": "± 181994",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5948688,
            "range": "± 138099",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5951179,
            "range": "± 11581",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15214,
            "range": "± 75",
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
        "date": 1779871280857,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21150,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6240314,
            "range": "± 115900",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222663,
            "range": "± 3197",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126226856,
            "range": "± 1287880",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 222515,
            "range": "± 3320",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7857527,
            "range": "± 109636",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69851968,
            "range": "± 2930159",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 496078,
            "range": "± 5167",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 947767,
            "range": "± 5763",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56257324,
            "range": "± 977313",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 686212,
            "range": "± 3915",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3364711,
            "range": "± 51862",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13279154,
            "range": "± 134765",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 614554,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3038820,
            "range": "± 30301",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12196494,
            "range": "± 266063",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 424641,
            "range": "± 2851",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2060409,
            "range": "± 8978",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7877743,
            "range": "± 126073",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39838,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 214490,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1442951,
            "range": "± 36351",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1750,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3127,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6932,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8676,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 67415,
            "range": "± 1625",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85804,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 666472,
            "range": "± 11103",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 859331,
            "range": "± 14473",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1991,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7026,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59950,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 594485,
            "range": "± 5683",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1178,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3348,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24795,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248385,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5960524,
            "range": "± 21171",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5957734,
            "range": "± 15911",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5963419,
            "range": "± 55501",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15090,
            "range": "± 111",
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
        "date": 1779958212267,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21115,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6308101,
            "range": "± 58651",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 218957,
            "range": "± 928",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126557864,
            "range": "± 2693184",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 222731,
            "range": "± 4725",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7700140,
            "range": "± 44395",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67679698,
            "range": "± 360943",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 484920,
            "range": "± 4027",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 926372,
            "range": "± 4155",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54234234,
            "range": "± 326884",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 679748,
            "range": "± 17386",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3339272,
            "range": "± 19897",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13191111,
            "range": "± 198627",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 603700,
            "range": "± 5007",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2973031,
            "range": "± 28070",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11713954,
            "range": "± 90477",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 416084,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2020387,
            "range": "± 14707",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7762189,
            "range": "± 66789",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39685,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 213262,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1430387,
            "range": "± 15971",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1682,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3105,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7136,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8418,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 66630,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83304,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 668745,
            "range": "± 5823",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 831688,
            "range": "± 6226",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1988,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6979,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 72320,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 600365,
            "range": "± 2380",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3352,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24747,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 244821,
            "range": "± 1536",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5990615,
            "range": "± 32723",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5996947,
            "range": "± 20544",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6021322,
            "range": "± 28309",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 16290,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}