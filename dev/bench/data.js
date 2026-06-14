window.BENCHMARK_DATA = {
  "lastUpdate": 1781426428929,
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
        "date": 1780043139716,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19410,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6669136,
            "range": "± 114284",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 206570,
            "range": "± 936",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 125451391,
            "range": "± 2981903",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 209673,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 10125985,
            "range": "± 219356",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 77982748,
            "range": "± 1181669",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 489672,
            "range": "± 8836",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 974935,
            "range": "± 8032",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 60238324,
            "range": "± 241159",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 629248,
            "range": "± 10319",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3140522,
            "range": "± 17011",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12636290,
            "range": "± 163983",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 562330,
            "range": "± 19470",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2775854,
            "range": "± 73226",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11141894,
            "range": "± 87608",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 382063,
            "range": "± 4873",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1886588,
            "range": "± 52444",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7479421,
            "range": "± 51878",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39973,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212908,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1423956,
            "range": "± 10251",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1788,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3321,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7504,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8415,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74418,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83797,
            "range": "± 5218",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 756607,
            "range": "± 5013",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833099,
            "range": "± 5550",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1981,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6285,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54536,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 538619,
            "range": "± 3570",
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
            "value": 4024,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30243,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294745,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6313718,
            "range": "± 15541",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6319529,
            "range": "± 12450",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6323753,
            "range": "± 13905",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13939,
            "range": "± 55",
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
        "date": 1780127259901,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19496,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6326967,
            "range": "± 41702",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 206289,
            "range": "± 1969",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126351537,
            "range": "± 846236",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 215472,
            "range": "± 2957",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8140224,
            "range": "± 159518",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73845530,
            "range": "± 800763",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 477421,
            "range": "± 8405",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 942912,
            "range": "± 4444",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59577410,
            "range": "± 268326",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 630019,
            "range": "± 4914",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3130784,
            "range": "± 10037",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12445367,
            "range": "± 62096",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 565603,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2786837,
            "range": "± 13898",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11010294,
            "range": "± 37543",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 382437,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1891411,
            "range": "± 27560",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7421550,
            "range": "± 43379",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40009,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 214945,
            "range": "± 6054",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1416623,
            "range": "± 18536",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1725,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3294,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7841,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8507,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 77474,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84638,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 759843,
            "range": "± 1596",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833577,
            "range": "± 4779",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1986,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6273,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54303,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 557084,
            "range": "± 2617",
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
            "value": 4014,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30147,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294400,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6314618,
            "range": "± 29269",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6324083,
            "range": "± 20308",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6290832,
            "range": "± 20251",
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
            "value": 14283,
            "range": "± 65",
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
        "date": 1780216729544,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20946,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6375926,
            "range": "± 176671",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 232424,
            "range": "± 2461",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 140076836,
            "range": "± 1588996",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 238575,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8006546,
            "range": "± 296994",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69893230,
            "range": "± 488365",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 493384,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 955033,
            "range": "± 3699",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55667570,
            "range": "± 224973",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 682079,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3368987,
            "range": "± 20114",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13345576,
            "range": "± 96812",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 622326,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3036292,
            "range": "± 11657",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11955317,
            "range": "± 60711",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 424063,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2049652,
            "range": "± 9282",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7899990,
            "range": "± 56150",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39308,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210235,
            "range": "± 1206",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1412358,
            "range": "± 26714",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1779,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3247,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 8027,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8524,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 77145,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84997,
            "range": "± 1504",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 777512,
            "range": "± 6997",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 844623,
            "range": "± 9651",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2006,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7417,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60612,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 605468,
            "range": "± 3416",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3389,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24953,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248034,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6077796,
            "range": "± 45921",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6097127,
            "range": "± 41618",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6078336,
            "range": "± 43498",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14758,
            "range": "± 97",
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
        "date": 1780308107601,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19470,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6559418,
            "range": "± 52400",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 205468,
            "range": "± 1727",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 129774255,
            "range": "± 1528102",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 210880,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8159102,
            "range": "± 266865",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73873950,
            "range": "± 1749254",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 481256,
            "range": "± 12135",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 957856,
            "range": "± 15719",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59291111,
            "range": "± 299257",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 627732,
            "range": "± 4038",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3125880,
            "range": "± 15460",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12524335,
            "range": "± 282958",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 566760,
            "range": "± 4756",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2796169,
            "range": "± 25103",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11082417,
            "range": "± 53542",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 382167,
            "range": "± 3424",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1891367,
            "range": "± 24512",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7411862,
            "range": "± 216262",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40186,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 214747,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1417464,
            "range": "± 8028",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1750,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3360,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7478,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8355,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74504,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83122,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 759147,
            "range": "± 5510",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833324,
            "range": "± 5531",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2005,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6304,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 55050,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 555105,
            "range": "± 14025",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1435,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4021,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30120,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294160,
            "range": "± 1479",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6319666,
            "range": "± 38381",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6307809,
            "range": "± 21964",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6321388,
            "range": "± 13952",
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
            "value": 14704,
            "range": "± 86",
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
        "date": 1780391132502,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20676,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6621373,
            "range": "± 58764",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222844,
            "range": "± 2428",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 134242058,
            "range": "± 1508633",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 234462,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7796704,
            "range": "± 413281",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69535414,
            "range": "± 684178",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 500881,
            "range": "± 4818",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 957589,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55994285,
            "range": "± 1445096",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 687888,
            "range": "± 39809",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3381639,
            "range": "± 89374",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13370151,
            "range": "± 56309",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 616113,
            "range": "± 4798",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3022037,
            "range": "± 21747",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11899218,
            "range": "± 894791",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 425598,
            "range": "± 2015",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2061980,
            "range": "± 5993",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7953391,
            "range": "± 40574",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39084,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210357,
            "range": "± 4176",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1406871,
            "range": "± 36778",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1775,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3263,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 8076,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8569,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 78188,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84222,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 775135,
            "range": "± 4732",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 839595,
            "range": "± 9310",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1988,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7092,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60820,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 599839,
            "range": "± 9570",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3382,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24932,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248953,
            "range": "± 2414",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5952218,
            "range": "± 9755",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5948831,
            "range": "± 197324",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5951162,
            "range": "± 155687",
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
            "value": 15056,
            "range": "± 142",
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
        "date": 1780480310270,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20607,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6410992,
            "range": "± 35549",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222004,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 130472457,
            "range": "± 1757466",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 228863,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7825081,
            "range": "± 142889",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 70396444,
            "range": "± 682285",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 487176,
            "range": "± 3340",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 962693,
            "range": "± 5334",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55190993,
            "range": "± 269296",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 687511,
            "range": "± 7800",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3397979,
            "range": "± 32277",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13441051,
            "range": "± 43109",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 616130,
            "range": "± 2475",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3034111,
            "range": "± 12839",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11899955,
            "range": "± 43450",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 418649,
            "range": "± 2394",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2052314,
            "range": "± 24176",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7930827,
            "range": "± 25903",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39127,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209196,
            "range": "± 1692",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1399939,
            "range": "± 34457",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1780,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3249,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7647,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8414,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72898,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83423,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 730643,
            "range": "± 3955",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 831016,
            "range": "± 4946",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1993,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7427,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59952,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 600357,
            "range": "± 1994",
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
            "value": 3380,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24909,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248453,
            "range": "± 2301",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5947086,
            "range": "± 12832",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5958811,
            "range": "± 11901",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5951393,
            "range": "± 23448",
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
            "value": 14726,
            "range": "± 49",
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
        "date": 1780563809201,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20951,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6442462,
            "range": "± 37898",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 217822,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 127432715,
            "range": "± 431942",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 228167,
            "range": "± 3814",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7615203,
            "range": "± 341002",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67491089,
            "range": "± 144055",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 486065,
            "range": "± 4370",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 943901,
            "range": "± 6323",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54167389,
            "range": "± 283717",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 693771,
            "range": "± 5959",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3402687,
            "range": "± 10855",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13460303,
            "range": "± 91783",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 626113,
            "range": "± 3026",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3067927,
            "range": "± 18631",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12094992,
            "range": "± 63369",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 424289,
            "range": "± 2871",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2066045,
            "range": "± 18124",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7963606,
            "range": "± 208855",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39124,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210259,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1405035,
            "range": "± 12432",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1736,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3198,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7458,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8434,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73566,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84060,
            "range": "± 3935",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 733416,
            "range": "± 8195",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 834457,
            "range": "± 5835",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2034,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7186,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 61616,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 603352,
            "range": "± 1563",
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
            "value": 3382,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24925,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249249,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5935474,
            "range": "± 18584",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5939876,
            "range": "± 20397",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5927308,
            "range": "± 11161",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14987,
            "range": "± 71",
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
        "date": 1780652915335,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 14659,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5157643,
            "range": "± 38843",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 157646,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 102102910,
            "range": "± 1817488",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 161166,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6133195,
            "range": "± 56647",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 57098295,
            "range": "± 839994",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 359407,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 717609,
            "range": "± 3185",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 46819798,
            "range": "± 206551",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 492511,
            "range": "± 19467",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2441937,
            "range": "± 53226",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9789471,
            "range": "± 70929",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 443305,
            "range": "± 2671",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2145726,
            "range": "± 6845",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8514420,
            "range": "± 89247",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 294696,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1472898,
            "range": "± 18990",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5747119,
            "range": "± 184834",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 31134,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 165378,
            "range": "± 7271",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1096112,
            "range": "± 14772",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1370,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2554,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6246,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6781,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 58051,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 67877,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 603661,
            "range": "± 15640",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 677453,
            "range": "± 2243",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1549,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 5132,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 41925,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 419354,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1052,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2733,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 16715,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 157566,
            "range": "± 9669",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4943698,
            "range": "± 30879",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4934639,
            "range": "± 27768",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4942284,
            "range": "± 19571",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 11315,
            "range": "± 66",
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
        "date": 1780733289265,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20860,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6474917,
            "range": "± 19833",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 219652,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 134134370,
            "range": "± 4494580",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 223017,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7681749,
            "range": "± 85433",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68396846,
            "range": "± 761819",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 491721,
            "range": "± 2189",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 940250,
            "range": "± 6887",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 57753306,
            "range": "± 485746",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 684082,
            "range": "± 7180",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3370116,
            "range": "± 17976",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13317219,
            "range": "± 46378",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 623542,
            "range": "± 2990",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3058079,
            "range": "± 20311",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12018654,
            "range": "± 65213",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 421792,
            "range": "± 2574",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2055943,
            "range": "± 10853",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7931431,
            "range": "± 27008",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39088,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209355,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1400044,
            "range": "± 23696",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1774,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3210,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7428,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8529,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73780,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86064,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 739067,
            "range": "± 2725",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 848070,
            "range": "± 4266",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2012,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7201,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60647,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 606597,
            "range": "± 3002",
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
            "value": 3384,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24923,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249882,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5953061,
            "range": "± 23567",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5950804,
            "range": "± 11916",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5948258,
            "range": "± 23733",
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
            "value": 14864,
            "range": "± 68",
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
        "date": 1780821018103,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19669,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6624441,
            "range": "± 36034",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 205343,
            "range": "± 3015",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 121520611,
            "range": "± 578123",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 216139,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8169140,
            "range": "± 48969",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73436473,
            "range": "± 607296",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 471096,
            "range": "± 7543",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 936205,
            "range": "± 6079",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 58263296,
            "range": "± 259276",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 630463,
            "range": "± 30066",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3138417,
            "range": "± 19768",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12560206,
            "range": "± 102909",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 566740,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2795512,
            "range": "± 13237",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11081684,
            "range": "± 26987",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 385116,
            "range": "± 13925",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1896708,
            "range": "± 12930",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7430887,
            "range": "± 73895",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40096,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212554,
            "range": "± 1746",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1418329,
            "range": "± 19272",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1789,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3337,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7873,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8442,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74785,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83398,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 749471,
            "range": "± 1453",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833359,
            "range": "± 3023",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1989,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6460,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54578,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 539405,
            "range": "± 2274",
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
            "value": 4013,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30097,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294741,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6305335,
            "range": "± 16853",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6307353,
            "range": "± 17164",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6299123,
            "range": "± 18053",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14684,
            "range": "± 69",
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
        "date": 1780908498756,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 17347,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6346497,
            "range": "± 67542",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 157416,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 120455750,
            "range": "± 1014564",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 163667,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8835468,
            "range": "± 131803",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68986455,
            "range": "± 1173019",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 478847,
            "range": "± 4386",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 847786,
            "range": "± 5790",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 51254052,
            "range": "± 463779",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 591574,
            "range": "± 3826",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2997172,
            "range": "± 36013",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12330960,
            "range": "± 106268",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 545184,
            "range": "± 1737",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2733118,
            "range": "± 43702",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11107674,
            "range": "± 88242",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 366027,
            "range": "± 12241",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1845756,
            "range": "± 27635",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7191186,
            "range": "± 78903",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 32064,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 193839,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1439269,
            "range": "± 26484",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1487,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2772,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6309,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 7314,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 60564,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 73203,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 601321,
            "range": "± 1786",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 725997,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1791,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6977,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59703,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 594162,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 842,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2662,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 15354,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 145276,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6970943,
            "range": "± 20883",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6964988,
            "range": "± 13592",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6985515,
            "range": "± 31788",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 93,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 12862,
            "range": "± 71",
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
        "date": 1780993104376,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19262,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6949550,
            "range": "± 176472",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 206733,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126088418,
            "range": "± 1890736",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 222355,
            "range": "± 2061",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8269088,
            "range": "± 267248",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 75329342,
            "range": "± 799217",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 473647,
            "range": "± 4033",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 938607,
            "range": "± 4044",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59135080,
            "range": "± 313688",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 630431,
            "range": "± 10992",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3128630,
            "range": "± 51041",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12474763,
            "range": "± 256540",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 566213,
            "range": "± 5104",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2789983,
            "range": "± 16893",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11071412,
            "range": "± 47341",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 381849,
            "range": "± 5716",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1890826,
            "range": "± 22482",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7378703,
            "range": "± 74155",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39915,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211509,
            "range": "± 1123",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1413728,
            "range": "± 21784",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1764,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3306,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7947,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8424,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 76162,
            "range": "± 2570",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84777,
            "range": "± 2230",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 773390,
            "range": "± 17905",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 848141,
            "range": "± 22824",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2003,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6255,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54588,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 541023,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1434,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4015,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30113,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294782,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6318579,
            "range": "± 20369",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6325951,
            "range": "± 200357",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6323438,
            "range": "± 26003",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14415,
            "range": "± 144",
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
        "date": 1781080639552,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19463,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6644098,
            "range": "± 119426",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 205924,
            "range": "± 996",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126647530,
            "range": "± 4193879",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 222826,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8240868,
            "range": "± 782505",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74823999,
            "range": "± 893741",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 483835,
            "range": "± 8814",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 942257,
            "range": "± 39857",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 58889610,
            "range": "± 1500861",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 630689,
            "range": "± 10056",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3145394,
            "range": "± 211859",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12609248,
            "range": "± 1138128",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 564840,
            "range": "± 26730",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2788937,
            "range": "± 10139",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11067432,
            "range": "± 193430",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 383358,
            "range": "± 2186",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1902653,
            "range": "± 35714",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7448482,
            "range": "± 29994",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40017,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212588,
            "range": "± 4837",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1417810,
            "range": "± 32103",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1739,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3322,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7959,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8586,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 76198,
            "range": "± 2361",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84976,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 764782,
            "range": "± 5503",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 837773,
            "range": "± 7959",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1969,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6531,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54567,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 554137,
            "range": "± 3968",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1435,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4014,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30112,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 296597,
            "range": "± 13548",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6345204,
            "range": "± 117805",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6332708,
            "range": "± 34259",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6360302,
            "range": "± 34786",
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
            "value": 14610,
            "range": "± 105",
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
        "date": 1781169706938,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20370,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6190537,
            "range": "± 40008",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223087,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132335043,
            "range": "± 1082718",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 232522,
            "range": "± 1267",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7687576,
            "range": "± 93172",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68390812,
            "range": "± 697545",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 494501,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 929268,
            "range": "± 3188",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54116192,
            "range": "± 237973",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 684091,
            "range": "± 4607",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3384537,
            "range": "± 9002",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13392073,
            "range": "± 70533",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 621337,
            "range": "± 2733",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3058265,
            "range": "± 10559",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12057444,
            "range": "± 50056",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 421031,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2054689,
            "range": "± 6435",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7937904,
            "range": "± 28456",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 38921,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210688,
            "range": "± 1881",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1406105,
            "range": "± 10002",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1719,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3173,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7561,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8456,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73365,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83841,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 736696,
            "range": "± 2615",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 832009,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2020,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7137,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60870,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 604442,
            "range": "± 2288",
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
            "value": 3378,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24907,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248797,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5945031,
            "range": "± 9092",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5949563,
            "range": "± 9220",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5938704,
            "range": "± 12253",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14759,
            "range": "± 48",
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
        "date": 1781255023452,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20405,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6523668,
            "range": "± 51590",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222558,
            "range": "± 1041",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 134372083,
            "range": "± 1338853",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 220612,
            "range": "± 1936",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8147400,
            "range": "± 256439",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 70021938,
            "range": "± 662937",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 502503,
            "range": "± 5794",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 938593,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56279459,
            "range": "± 538630",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 691432,
            "range": "± 12609",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3379682,
            "range": "± 20447",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13448248,
            "range": "± 162292",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 616784,
            "range": "± 7969",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3019898,
            "range": "± 30414",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11872895,
            "range": "± 141493",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 420616,
            "range": "± 4016",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2048648,
            "range": "± 9691",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7898211,
            "range": "± 39780",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39461,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211352,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1408181,
            "range": "± 16539",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1726,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3206,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7440,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8585,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72921,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85261,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 726171,
            "range": "± 10238",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 837068,
            "range": "± 2514",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2006,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7136,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 61426,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 624819,
            "range": "± 2078",
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
            "value": 3376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24905,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249793,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5949251,
            "range": "± 34042",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5947582,
            "range": "± 11523",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5949574,
            "range": "± 12260",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14123,
            "range": "± 76",
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
        "date": 1781340708136,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20575,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6402132,
            "range": "± 31718",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223161,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132992610,
            "range": "± 1257572",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 235752,
            "range": "± 4345",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7735271,
            "range": "± 89666",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69528025,
            "range": "± 1741336",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 493770,
            "range": "± 3925",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 943559,
            "range": "± 4376",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55169325,
            "range": "± 682515",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 702022,
            "range": "± 4115",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3450852,
            "range": "± 10969",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13635290,
            "range": "± 43302",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 627804,
            "range": "± 2647",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3084266,
            "range": "± 12359",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12169745,
            "range": "± 38606",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 425910,
            "range": "± 1513",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2086373,
            "range": "± 5558",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8058301,
            "range": "± 39840",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39201,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210069,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1403606,
            "range": "± 39408",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1749,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3216,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7454,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8386,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 76339,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83506,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 730932,
            "range": "± 3427",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 827186,
            "range": "± 9415",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1990,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7096,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60616,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 598953,
            "range": "± 3587",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3406,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24940,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 247179,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5943425,
            "range": "± 37902",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5948127,
            "range": "± 6750",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5933189,
            "range": "± 11654",
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
            "value": 14822,
            "range": "± 42",
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
        "date": 1781426427509,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 17595,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6387484,
            "range": "± 99375",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 157955,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 115275154,
            "range": "± 585330",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 155956,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7824376,
            "range": "± 47973",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 65376542,
            "range": "± 1121114",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 493413,
            "range": "± 6004",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 875446,
            "range": "± 3879",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 50696181,
            "range": "± 308614",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 593038,
            "range": "± 4594",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2984626,
            "range": "± 10958",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12126007,
            "range": "± 92988",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 545043,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2705312,
            "range": "± 8119",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 10959153,
            "range": "± 90275",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 367527,
            "range": "± 6724",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1831648,
            "range": "± 9249",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7225478,
            "range": "± 18344",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 32184,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 194259,
            "range": "± 968",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1414759,
            "range": "± 20030",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1557,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2894,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6496,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 7450,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 60436,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 74840,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 602138,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 735884,
            "range": "± 7327",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1903,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6971,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59817,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 594074,
            "range": "± 1755",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 841,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2666,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 15342,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 146331,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6850254,
            "range": "± 15373",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6852838,
            "range": "± 25029",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6850093,
            "range": "± 18111",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13099,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}