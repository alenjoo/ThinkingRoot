window.BENCHMARK_DATA = {
  "lastUpdate": 1785916432735,
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
        "date": 1781520960966,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20461,
            "range": "± 2681",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6438816,
            "range": "± 96729",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 221408,
            "range": "± 4292",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 129402448,
            "range": "± 1938628",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 213954,
            "range": "± 6832",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7859217,
            "range": "± 130941",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67228350,
            "range": "± 1280716",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 490583,
            "range": "± 5246",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 950414,
            "range": "± 14958",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54204492,
            "range": "± 780581",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 681127,
            "range": "± 14526",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3392221,
            "range": "± 54648",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13391531,
            "range": "± 223595",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 623234,
            "range": "± 7472",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3023510,
            "range": "± 54520",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11884161,
            "range": "± 199721",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 419191,
            "range": "± 4959",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2042980,
            "range": "± 27621",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7922890,
            "range": "± 124815",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39654,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210915,
            "range": "± 2475",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1401699,
            "range": "± 28509",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1759,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3235,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7661,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8445,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73956,
            "range": "± 1191",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83526,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 737992,
            "range": "± 23004",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 834126,
            "range": "± 10636",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2011,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7100,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 61053,
            "range": "± 1243",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 601922,
            "range": "± 12546",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3376,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24965,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249461,
            "range": "± 5302",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5924005,
            "range": "± 112765",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5925192,
            "range": "± 85289",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5945235,
            "range": "± 72991",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 111,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14973,
            "range": "± 262",
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
        "date": 1781605285435,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20424,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6405671,
            "range": "± 54844",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 219357,
            "range": "± 1507",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 130657946,
            "range": "± 1811999",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 221507,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7852041,
            "range": "± 19910",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68160070,
            "range": "± 300194",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 489492,
            "range": "± 4776",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 919794,
            "range": "± 4288",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54076164,
            "range": "± 172513",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 685237,
            "range": "± 6718",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3396219,
            "range": "± 11458",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13415205,
            "range": "± 54844",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 615978,
            "range": "± 2911",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3041559,
            "range": "± 20248",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12102894,
            "range": "± 88211",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 419628,
            "range": "± 3061",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2064236,
            "range": "± 13000",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7978172,
            "range": "± 41668",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39330,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211195,
            "range": "± 3799",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1410841,
            "range": "± 20863",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1732,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3186,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7582,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8446,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75106,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84166,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 742067,
            "range": "± 7942",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 828782,
            "range": "± 3070",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1956,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7380,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60366,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 601143,
            "range": "± 15862",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3378,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24916,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 247479,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5947913,
            "range": "± 19135",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5952873,
            "range": "± 12539",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5983360,
            "range": "± 21590",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15553,
            "range": "± 151",
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
        "date": 1781690013983,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19571,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6471385,
            "range": "± 46737",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 206544,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126600019,
            "range": "± 1586624",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 208978,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8418911,
            "range": "± 86008",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74781612,
            "range": "± 1310950",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 489948,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 958855,
            "range": "± 7504",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59875773,
            "range": "± 313952",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 632494,
            "range": "± 2150",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3148642,
            "range": "± 26042",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12580349,
            "range": "± 62793",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 566011,
            "range": "± 2734",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2802119,
            "range": "± 9448",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11131051,
            "range": "± 87761",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 380996,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1890212,
            "range": "± 23760",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7383517,
            "range": "± 23270",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39608,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210380,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1410714,
            "range": "± 20088",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1778,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3271,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7869,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8690,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 76847,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 87706,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 747536,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 865992,
            "range": "± 11071",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1977,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6238,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54375,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 538240,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4013,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30086,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294818,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6345388,
            "range": "± 28499",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6277307,
            "range": "± 19737",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6310140,
            "range": "± 20567",
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
            "value": 14656,
            "range": "± 231",
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
        "date": 1781784451372,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 14694,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5037326,
            "range": "± 86462",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 157970,
            "range": "± 4365",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 95686729,
            "range": "± 597621",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 168772,
            "range": "± 2238",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6730769,
            "range": "± 259795",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 57811193,
            "range": "± 1367542",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 363586,
            "range": "± 2005",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 716171,
            "range": "± 8660",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 45812757,
            "range": "± 331261",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 488443,
            "range": "± 3178",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2426098,
            "range": "± 25742",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9683636,
            "range": "± 49597",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 442782,
            "range": "± 4289",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2157874,
            "range": "± 48033",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8525239,
            "range": "± 51100",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 295433,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1470915,
            "range": "± 9557",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5733905,
            "range": "± 31378",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 31186,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 164821,
            "range": "± 1736",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1094908,
            "range": "± 8999",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1361,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2556,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6077,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6486,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 62034,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 63889,
            "range": "± 1022",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 605628,
            "range": "± 3277",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 642984,
            "range": "± 8571",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1536,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 4825,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 42563,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 421587,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1063,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2735,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 16678,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 156773,
            "range": "± 941",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4914005,
            "range": "± 85112",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4931489,
            "range": "± 80225",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4915629,
            "range": "± 26211",
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
            "value": 11331,
            "range": "± 43",
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
        "date": 1781864004461,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20804,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6530787,
            "range": "± 123905",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 225872,
            "range": "± 4636",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132336880,
            "range": "± 2159755",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 232946,
            "range": "± 2286",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7766398,
            "range": "± 64247",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68344379,
            "range": "± 1194760",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 502988,
            "range": "± 8442",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 953098,
            "range": "± 19049",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55129710,
            "range": "± 624651",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 689949,
            "range": "± 2510",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3392513,
            "range": "± 12510",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13423691,
            "range": "± 88663",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 619621,
            "range": "± 8859",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3045577,
            "range": "± 14621",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11982180,
            "range": "± 83039",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 423511,
            "range": "± 7155",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2061260,
            "range": "± 49747",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7941224,
            "range": "± 25816",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39293,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211435,
            "range": "± 5991",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1409146,
            "range": "± 23069",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1780,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3218,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7550,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8563,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73319,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85237,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 736896,
            "range": "± 6951",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 844393,
            "range": "± 4277",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2022,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7196,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60541,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 604299,
            "range": "± 1717",
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
            "value": 3396,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24940,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248613,
            "range": "± 2718",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5955443,
            "range": "± 29411",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5942669,
            "range": "± 7733",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5939698,
            "range": "± 17540",
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
            "value": 14765,
            "range": "± 123",
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
        "date": 1781944131413,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19346,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6466465,
            "range": "± 40727",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 202068,
            "range": "± 915",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 125436080,
            "range": "± 851802",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 214030,
            "range": "± 2065",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7995137,
            "range": "± 120964",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73588505,
            "range": "± 1479879",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 472134,
            "range": "± 2999",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 967626,
            "range": "± 4330",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59296479,
            "range": "± 1349136",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 631556,
            "range": "± 2578",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3155408,
            "range": "± 16342",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12523087,
            "range": "± 102937",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 564039,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2784411,
            "range": "± 7106",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11000725,
            "range": "± 28540",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 387159,
            "range": "± 10027",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1927218,
            "range": "± 16860",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7510381,
            "range": "± 25140",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39971,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211617,
            "range": "± 1471",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1415499,
            "range": "± 19692",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1748,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3352,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7808,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8478,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 76189,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84480,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 744148,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 836815,
            "range": "± 3599",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1968,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6270,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54538,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 561103,
            "range": "± 8918",
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
            "value": 4015,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30104,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 292974,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6316772,
            "range": "± 38015",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6327423,
            "range": "± 48571",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6331554,
            "range": "± 50876",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 106,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14250,
            "range": "± 79",
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
        "date": 1782033953609,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19315,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6686701,
            "range": "± 144086",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 203401,
            "range": "± 3465",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 125156725,
            "range": "± 2825666",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 216379,
            "range": "± 2090",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8413900,
            "range": "± 596596",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 75037060,
            "range": "± 1715053",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 476684,
            "range": "± 3028",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 941305,
            "range": "± 12638",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59800968,
            "range": "± 359265",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 630292,
            "range": "± 5754",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3134792,
            "range": "± 53521",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12572096,
            "range": "± 104795",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 562706,
            "range": "± 3241",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2776547,
            "range": "± 56246",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11094034,
            "range": "± 407358",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 381182,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1889044,
            "range": "± 27120",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7419022,
            "range": "± 50819",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39956,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212053,
            "range": "± 7547",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1418269,
            "range": "± 12814",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1738,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3292,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7496,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8463,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74364,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84337,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 745099,
            "range": "± 2307",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 836455,
            "range": "± 4536",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1979,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6251,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 56054,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 540184,
            "range": "± 1675",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4039,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30117,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 295233,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6333803,
            "range": "± 78807",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6333946,
            "range": "± 30114",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6331285,
            "range": "± 39868",
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
            "value": 14520,
            "range": "± 64",
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
        "date": 1782123724608,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19438,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6432671,
            "range": "± 18407",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 204466,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 122153323,
            "range": "± 732228",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 210892,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7953416,
            "range": "± 48514",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73156370,
            "range": "± 1566642",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 477653,
            "range": "± 8721",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 940097,
            "range": "± 3869",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 58153238,
            "range": "± 1504139",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 628290,
            "range": "± 7163",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3124335,
            "range": "± 33254",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12458588,
            "range": "± 46455",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 565251,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2777839,
            "range": "± 15523",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11048104,
            "range": "± 188451",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 382819,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1913549,
            "range": "± 14466",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7489133,
            "range": "± 25016",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39620,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211835,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1417530,
            "range": "± 43127",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1730,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3316,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7673,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8685,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75961,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85120,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 744212,
            "range": "± 3387",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833634,
            "range": "± 4431",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1986,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6338,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54611,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 539746,
            "range": "± 2464",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4027,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30175,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 296542,
            "range": "± 5016",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6319081,
            "range": "± 22740",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6311235,
            "range": "± 24406",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6313190,
            "range": "± 24159",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14773,
            "range": "± 83",
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
        "date": 1782203647239,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20958,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6545759,
            "range": "± 21107",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 225456,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 135072796,
            "range": "± 2816947",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 234130,
            "range": "± 5029",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7746915,
            "range": "± 141974",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 70779205,
            "range": "± 1222235",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 498563,
            "range": "± 3078",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 1000033,
            "range": "± 7425",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54357497,
            "range": "± 2319757",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 687050,
            "range": "± 11107",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3353514,
            "range": "± 18701",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13236542,
            "range": "± 121328",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 626999,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3042578,
            "range": "± 15380",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11932089,
            "range": "± 70590",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 426094,
            "range": "± 6614",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2050617,
            "range": "± 43077",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7883740,
            "range": "± 51517",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39425,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210409,
            "range": "± 4950",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1404629,
            "range": "± 32400",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1783,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3338,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7589,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8419,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74324,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83813,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 742099,
            "range": "± 17037",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 836456,
            "range": "± 15108",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2038,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7126,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 61466,
            "range": "± 3262",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 609884,
            "range": "± 14016",
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
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24916,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 247404,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5970122,
            "range": "± 104046",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5963503,
            "range": "± 17905",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5954913,
            "range": "± 33434",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 102,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15026,
            "range": "± 435",
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
        "date": 1782289881833,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 14749,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5110980,
            "range": "± 21712",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 156750,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 95327598,
            "range": "± 955953",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 170349,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6337784,
            "range": "± 35471",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 57136302,
            "range": "± 367061",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 359643,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 705845,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 45595755,
            "range": "± 138719",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 485720,
            "range": "± 10461",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2421759,
            "range": "± 8947",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9679423,
            "range": "± 24089",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 443064,
            "range": "± 2488",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2160811,
            "range": "± 10576",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8578481,
            "range": "± 39733",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 295952,
            "range": "± 3414",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1473127,
            "range": "± 15264",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5747428,
            "range": "± 13109",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 31169,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 164933,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1095152,
            "range": "± 18653",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1393,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2624,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6145,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6491,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 60337,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 65451,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 595410,
            "range": "± 2707",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 652474,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1527,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 5070,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 41717,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 417098,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1051,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2737,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 16693,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 157181,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4938083,
            "range": "± 13129",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4934433,
            "range": "± 11814",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4946155,
            "range": "± 11073",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 12301,
            "range": "± 37",
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
        "date": 1782376935396,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20619,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6271987,
            "range": "± 54555",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 215237,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126297418,
            "range": "± 959219",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 222140,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7629499,
            "range": "± 142942",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67492576,
            "range": "± 635393",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 476293,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 924852,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 53486427,
            "range": "± 308680",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 681434,
            "range": "± 3456",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3355199,
            "range": "± 14881",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13250272,
            "range": "± 98780",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 622411,
            "range": "± 4409",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3042736,
            "range": "± 10240",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11981666,
            "range": "± 40020",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 414204,
            "range": "± 3846",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2026255,
            "range": "± 8284",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7823151,
            "range": "± 27059",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39086,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210893,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1401057,
            "range": "± 9792",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1718,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3184,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7502,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8379,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74838,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83218,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 725786,
            "range": "± 2089",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833993,
            "range": "± 1682",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1964,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7008,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60107,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 596645,
            "range": "± 4211",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1176,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3382,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24918,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248779,
            "range": "± 1587",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5945855,
            "range": "± 12623",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5945028,
            "range": "± 9455",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5938298,
            "range": "± 10609",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15173,
            "range": "± 675",
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
        "date": 1782463278779,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 14828,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5028970,
            "range": "± 15707",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 156655,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 97027199,
            "range": "± 553657",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 153499,
            "range": "± 3700",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6128141,
            "range": "± 29517",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 56923573,
            "range": "± 273847",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 363488,
            "range": "± 1935",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 712644,
            "range": "± 9589",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 45501820,
            "range": "± 172089",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 486989,
            "range": "± 3962",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2424382,
            "range": "± 12801",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9668900,
            "range": "± 35593",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 443754,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2158622,
            "range": "± 9602",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8552111,
            "range": "± 37356",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 294914,
            "range": "± 3660",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1467101,
            "range": "± 15753",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5725862,
            "range": "± 18269",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 31278,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 165701,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1098845,
            "range": "± 7378",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1369,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2620,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6201,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6628,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 61622,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 66161,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 585278,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 654600,
            "range": "± 3306",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1537,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 4851,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 42273,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 418906,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1053,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2734,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 16705,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 158114,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4935635,
            "range": "± 19937",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4941894,
            "range": "± 15829",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4938118,
            "range": "± 15076",
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
            "value": 11253,
            "range": "± 45",
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
        "date": 1782549711857,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20909,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6933316,
            "range": "± 147135",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 224272,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 134815170,
            "range": "± 2005324",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 237528,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8015481,
            "range": "± 295405",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69143218,
            "range": "± 702833",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 499379,
            "range": "± 10782",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 951402,
            "range": "± 4785",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56087306,
            "range": "± 300485",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 684177,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3365321,
            "range": "± 26995",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13628818,
            "range": "± 417404",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 620517,
            "range": "± 4790",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3032948,
            "range": "± 30742",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12120042,
            "range": "± 179040",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 417434,
            "range": "± 2619",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2032566,
            "range": "± 71205",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7863251,
            "range": "± 50122",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39376,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211331,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1404339,
            "range": "± 43256",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1742,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3221,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7473,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8392,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72819,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83238,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 731476,
            "range": "± 4582",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 830837,
            "range": "± 2329",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2135,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7148,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60629,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 616224,
            "range": "± 10603",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3380,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24915,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248608,
            "range": "± 2571",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5970888,
            "range": "± 23980",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5969056,
            "range": "± 10967",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5947077,
            "range": "± 29194",
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
            "value": 15142,
            "range": "± 52",
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
        "date": 1782636220376,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20493,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6328151,
            "range": "± 65352",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 220590,
            "range": "± 1412",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 130042646,
            "range": "± 4077080",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 233503,
            "range": "± 1548",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7764091,
            "range": "± 61460",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67738456,
            "range": "± 1041758",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 484093,
            "range": "± 2506",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 939165,
            "range": "± 4721",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54891723,
            "range": "± 421358",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 684849,
            "range": "± 4857",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3362515,
            "range": "± 24168",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13309110,
            "range": "± 107359",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 629252,
            "range": "± 14252",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3059503,
            "range": "± 44595",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12034638,
            "range": "± 337229",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 423629,
            "range": "± 2660",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2046666,
            "range": "± 13334",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7877182,
            "range": "± 58051",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39041,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210822,
            "range": "± 1144",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1405168,
            "range": "± 18139",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1725,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3145,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7507,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8358,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72462,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83057,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 735777,
            "range": "± 4460",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 823288,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1937,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7095,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60533,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 626797,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1176,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3406,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24956,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248427,
            "range": "± 1625",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5966809,
            "range": "± 33183",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5977948,
            "range": "± 33625",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5978547,
            "range": "± 29003",
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
            "value": 14034,
            "range": "± 226",
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
        "date": 1782723774916,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19309,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6442474,
            "range": "± 66537",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 205839,
            "range": "± 1293",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 129061418,
            "range": "± 1463063",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 220548,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8324577,
            "range": "± 282282",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 75007213,
            "range": "± 1866148",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 489422,
            "range": "± 11095",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 918885,
            "range": "± 5794",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59678708,
            "range": "± 345979",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 627682,
            "range": "± 3938",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3138194,
            "range": "± 16307",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12527709,
            "range": "± 109254",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 561470,
            "range": "± 2926",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2788306,
            "range": "± 15126",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11111815,
            "range": "± 101587",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 379022,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1882860,
            "range": "± 14879",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7443953,
            "range": "± 44788",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39784,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211207,
            "range": "± 4285",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1415095,
            "range": "± 8423",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1748,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3302,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7822,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8328,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 76276,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83697,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 743784,
            "range": "± 4111",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 823905,
            "range": "± 4148",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1974,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6469,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 53914,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 541637,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1436,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4048,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30139,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294255,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6291395,
            "range": "± 35650",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6302259,
            "range": "± 15825",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6315055,
            "range": "± 25305",
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
            "value": 14683,
            "range": "± 61",
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
        "date": 1782808477507,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20696,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6499368,
            "range": "± 72068",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222843,
            "range": "± 3621",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 136769708,
            "range": "± 1180722",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 234612,
            "range": "± 1679",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7702687,
            "range": "± 367446",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 70190885,
            "range": "± 791464",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 490017,
            "range": "± 2582",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 946023,
            "range": "± 5228",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55081187,
            "range": "± 339502",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 683190,
            "range": "± 5806",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3373826,
            "range": "± 21748",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13369253,
            "range": "± 54711",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 620553,
            "range": "± 4098",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3045846,
            "range": "± 18067",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11994742,
            "range": "± 40848",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 419808,
            "range": "± 4432",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2054247,
            "range": "± 7409",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7915360,
            "range": "± 20545",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39541,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212580,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1410676,
            "range": "± 23479",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1720,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3177,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7522,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8439,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72885,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84299,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 736784,
            "range": "± 2446",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 836490,
            "range": "± 2693",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2015,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 7156,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 61032,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 606690,
            "range": "± 4634",
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
            "value": 24897,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 246110,
            "range": "± 16557",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5962628,
            "range": "± 14054",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5942234,
            "range": "± 21807",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5958032,
            "range": "± 16238",
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
            "value": 14772,
            "range": "± 96",
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
        "date": 1782895886513,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21160,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6338506,
            "range": "± 19220",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222224,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 125239717,
            "range": "± 674221",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 236781,
            "range": "± 1757",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7695627,
            "range": "± 68420",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67016030,
            "range": "± 528152",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 481672,
            "range": "± 3493",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 977856,
            "range": "± 6957",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 53990968,
            "range": "± 405105",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 676089,
            "range": "± 4425",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3306299,
            "range": "± 72954",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13047779,
            "range": "± 69752",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 611885,
            "range": "± 4183",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2981373,
            "range": "± 12462",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11700707,
            "range": "± 93179",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 413933,
            "range": "± 2456",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2001335,
            "range": "± 16646",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7668027,
            "range": "± 36593",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 38462,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209403,
            "range": "± 1427",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1406531,
            "range": "± 9939",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1771,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3173,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7178,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8664,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 68968,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86799,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 688419,
            "range": "± 4589",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 862443,
            "range": "± 6297",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1977,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6630,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 56573,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 564656,
            "range": "± 3177",
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
            "value": 3373,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24833,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249623,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5947069,
            "range": "± 14898",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5939048,
            "range": "± 12563",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5950306,
            "range": "± 15432",
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
            "value": 14605,
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
        "date": 1782980200245,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21608,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6300144,
            "range": "± 39003",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 220541,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 134013354,
            "range": "± 978155",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 227002,
            "range": "± 2010",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7569752,
            "range": "± 71316",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68781033,
            "range": "± 1606944",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 499021,
            "range": "± 4338",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 942289,
            "range": "± 2921",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55502134,
            "range": "± 1220249",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 695161,
            "range": "± 13683",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3415256,
            "range": "± 54489",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13538536,
            "range": "± 145063",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 626703,
            "range": "± 2792",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3076936,
            "range": "± 19343",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12079422,
            "range": "± 35078",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 421244,
            "range": "± 4562",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2046053,
            "range": "± 6914",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7875112,
            "range": "± 30302",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40002,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 213646,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1429695,
            "range": "± 22651",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1758,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3187,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7158,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8691,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 69256,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 87685,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 688720,
            "range": "± 2988",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 866206,
            "range": "± 2757",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1929,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6613,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 56324,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 566015,
            "range": "± 6139",
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
            "value": 3392,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24844,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 246466,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5945450,
            "range": "± 6673",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5941224,
            "range": "± 55855",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5954897,
            "range": "± 12616",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14751,
            "range": "± 62",
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
        "date": 1783065319812,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21080,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6887380,
            "range": "± 272924",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 210293,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 124046617,
            "range": "± 4032615",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 218685,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8598554,
            "range": "± 562268",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74197331,
            "range": "± 652658",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 479938,
            "range": "± 4995",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 941575,
            "range": "± 21112",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 58012882,
            "range": "± 252724",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 629568,
            "range": "± 3547",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3138499,
            "range": "± 9510",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12485232,
            "range": "± 34645",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 566635,
            "range": "± 6791",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2778225,
            "range": "± 74593",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 10991579,
            "range": "± 48694",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 381308,
            "range": "± 19968",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1880639,
            "range": "± 21971",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7340688,
            "range": "± 38960",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40500,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211678,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1391641,
            "range": "± 31460",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1773,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3269,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7688,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8704,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74276,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86920,
            "range": "± 2090",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 743596,
            "range": "± 3181",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 876262,
            "range": "± 7232",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1942,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6024,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 53919,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 535429,
            "range": "± 18583",
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
            "value": 4015,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30080,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 296176,
            "range": "± 772",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6337547,
            "range": "± 167903",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6325818,
            "range": "± 71617",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6317744,
            "range": "± 23799",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 110,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13845,
            "range": "± 72",
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
        "date": 1783151411311,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20909,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6900914,
            "range": "± 269768",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 276015,
            "range": "± 24237",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 135323343,
            "range": "± 4813870",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 227592,
            "range": "± 3018",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8563878,
            "range": "± 903949",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74518548,
            "range": "± 3520497",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 497483,
            "range": "± 8455",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 964233,
            "range": "± 56274",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 60350193,
            "range": "± 4319589",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 631160,
            "range": "± 13191",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3191150,
            "range": "± 67768",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12597608,
            "range": "± 435620",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 563051,
            "range": "± 3258",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2812751,
            "range": "± 30242",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12055832,
            "range": "± 1487853",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 383322,
            "range": "± 10863",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1901821,
            "range": "± 50523",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8336168,
            "range": "± 493723",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40692,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210371,
            "range": "± 663",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1392636,
            "range": "± 94570",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1786,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3333,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7646,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8562,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74839,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86371,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 741569,
            "range": "± 13377",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 860409,
            "range": "± 11149",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1936,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6219,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 53595,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 538322,
            "range": "± 34500",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4097,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30225,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 295567,
            "range": "± 8000",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6426028,
            "range": "± 49195",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6395098,
            "range": "± 39835",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6406173,
            "range": "± 315441",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 107,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13829,
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
        "date": 1783238647806,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20903,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6655880,
            "range": "± 24184",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 209752,
            "range": "± 1566",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 122614967,
            "range": "± 798580",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 230087,
            "range": "± 2795",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8162670,
            "range": "± 57008",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73074929,
            "range": "± 316754",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 480455,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 965775,
            "range": "± 5256",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 57843249,
            "range": "± 296198",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 635966,
            "range": "± 12762",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3158938,
            "range": "± 17794",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12562861,
            "range": "± 134047",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 567018,
            "range": "± 6558",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2794386,
            "range": "± 16871",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11073107,
            "range": "± 52037",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 382658,
            "range": "± 1581",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1887285,
            "range": "± 19064",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7374810,
            "range": "± 22342",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40413,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209405,
            "range": "± 1715",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1394701,
            "range": "± 10015",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1771,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3310,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7672,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8849,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 74774,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 89097,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 745270,
            "range": "± 3857",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 878088,
            "range": "± 8047",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1926,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6072,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 53836,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 538031,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1420,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 4023,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30152,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 295487,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6326877,
            "range": "± 34393",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6332599,
            "range": "± 36412",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6333523,
            "range": "± 14854",
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
            "value": 14503,
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
        "date": 1783328908504,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 15847,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5290404,
            "range": "± 80615",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 161485,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 97267257,
            "range": "± 406078",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 177920,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6222689,
            "range": "± 28860",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 57085652,
            "range": "± 209139",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 364566,
            "range": "± 22969",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 730219,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 46407144,
            "range": "± 139662",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 493135,
            "range": "± 6275",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2450096,
            "range": "± 11520",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9803250,
            "range": "± 23248",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 447060,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2174578,
            "range": "± 5839",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8643077,
            "range": "± 18692",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 297141,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1487206,
            "range": "± 8501",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5759901,
            "range": "± 20150",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 31624,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 164695,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1080755,
            "range": "± 21315",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1397,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2576,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6084,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6774,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 58354,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 68707,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 586596,
            "range": "± 1652",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 679736,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1496,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 4778,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 41637,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 421861,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1053,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2791,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 16758,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 157072,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4952584,
            "range": "± 11128",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4925459,
            "range": "± 9679",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4926086,
            "range": "± 66788",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 89,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 11452,
            "range": "± 26",
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
        "date": 1783413128790,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21685,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6148489,
            "range": "± 36564",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222479,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 131239670,
            "range": "± 1200913",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 229208,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7677730,
            "range": "± 31831",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69159316,
            "range": "± 796060",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 487068,
            "range": "± 4219",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 932317,
            "range": "± 1722",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54046250,
            "range": "± 454623",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 674371,
            "range": "± 8412",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3323324,
            "range": "± 17534",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13101182,
            "range": "± 54461",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 616672,
            "range": "± 1672",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3007046,
            "range": "± 15603",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11807894,
            "range": "± 265051",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 413428,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2000940,
            "range": "± 9393",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7737662,
            "range": "± 27499",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39066,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209931,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1411546,
            "range": "± 16817",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1706,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3142,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7120,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8551,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 69464,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86342,
            "range": "± 4298",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 694396,
            "range": "± 3126",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 859163,
            "range": "± 3513",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1972,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6544,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 56569,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 561293,
            "range": "± 3512",
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
            "value": 3380,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24843,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 244506,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5940453,
            "range": "± 10252",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5939141,
            "range": "± 11755",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5939946,
            "range": "± 10385",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15032,
            "range": "± 311",
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
        "date": 1783495805653,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21781,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6142311,
            "range": "± 46198",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 218662,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 126962251,
            "range": "± 727156",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 230009,
            "range": "± 1688",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7500175,
            "range": "± 144669",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 71215478,
            "range": "± 1137952",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 494914,
            "range": "± 15485",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 933996,
            "range": "± 7197",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54124660,
            "range": "± 1323590",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 687144,
            "range": "± 4886",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3379235,
            "range": "± 12557",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13364699,
            "range": "± 101532",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 615268,
            "range": "± 2815",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3010244,
            "range": "± 12247",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11943056,
            "range": "± 254453",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 418600,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2042161,
            "range": "± 25469",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7870898,
            "range": "± 97502",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39258,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211896,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1425452,
            "range": "± 27005",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1728,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3200,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7387,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8610,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 69304,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85974,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 692744,
            "range": "± 3650",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 853364,
            "range": "± 2532",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1927,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6673,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57073,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 571202,
            "range": "± 2394",
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
            "value": 3379,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24913,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 245243,
            "range": "± 1390",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5972115,
            "range": "± 26330",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5981817,
            "range": "± 24961",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5979026,
            "range": "± 21819",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 101,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14726,
            "range": "± 122",
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
        "date": 1783585809345,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21255,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6233911,
            "range": "± 19454",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223759,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 127332260,
            "range": "± 669938",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 244952,
            "range": "± 1479",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7836920,
            "range": "± 34673",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67202754,
            "range": "± 301565",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 487788,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 937447,
            "range": "± 6054",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 53669881,
            "range": "± 499217",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 675649,
            "range": "± 18999",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3328079,
            "range": "± 26158",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13148171,
            "range": "± 67337",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 609518,
            "range": "± 4463",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2995446,
            "range": "± 20929",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11778261,
            "range": "± 48073",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 414837,
            "range": "± 2151",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2018415,
            "range": "± 30878",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7767332,
            "range": "± 52885",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39043,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210560,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1413133,
            "range": "± 17406",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1724,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3116,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7201,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8546,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 68446,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85399,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 686217,
            "range": "± 6169",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 854610,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1939,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6633,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 56773,
            "range": "± 1364",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 565425,
            "range": "± 6662",
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
            "value": 3374,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24817,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 247256,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5954448,
            "range": "± 7851",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5943123,
            "range": "± 9401",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5940262,
            "range": "± 6978",
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
            "value": 14637,
            "range": "± 39",
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
        "date": 1783672028023,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20494,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6612124,
            "range": "± 211531",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 227433,
            "range": "± 1709",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 136108943,
            "range": "± 1551382",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 220308,
            "range": "± 2411",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7824958,
            "range": "± 263545",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 71249816,
            "range": "± 767766",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 502722,
            "range": "± 5912",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 974751,
            "range": "± 8082",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56120457,
            "range": "± 1727975",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 686572,
            "range": "± 19632",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3372881,
            "range": "± 33870",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13349786,
            "range": "± 48061",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 616059,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3014308,
            "range": "± 20009",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11840233,
            "range": "± 135084",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 423079,
            "range": "± 2475",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2081196,
            "range": "± 13727",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8026526,
            "range": "± 29273",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40488,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 218032,
            "range": "± 16789",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1452159,
            "range": "± 39256",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1792,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3314,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7759,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8635,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75374,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86384,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 743145,
            "range": "± 13336",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 862281,
            "range": "± 5296",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6924,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 58090,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 580528,
            "range": "± 8107",
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
            "value": 3388,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 25061,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249927,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5962164,
            "range": "± 14856",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5956537,
            "range": "± 12484",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5952959,
            "range": "± 113248",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14964,
            "range": "± 174",
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
        "date": 1783754351117,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20532,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6279488,
            "range": "± 126726",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 219218,
            "range": "± 2467",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132762911,
            "range": "± 2471514",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 221852,
            "range": "± 21034",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 9692513,
            "range": "± 612699",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69301888,
            "range": "± 769555",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 505520,
            "range": "± 9784",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 969717,
            "range": "± 21750",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56018171,
            "range": "± 1630050",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 690014,
            "range": "± 5004",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3399982,
            "range": "± 136551",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13308825,
            "range": "± 207585",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 613268,
            "range": "± 2733",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2986704,
            "range": "± 12023",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11737229,
            "range": "± 76398",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 428105,
            "range": "± 3537",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2086502,
            "range": "± 7862",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8055710,
            "range": "± 38210",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40160,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 216703,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1448298,
            "range": "± 23152",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1745,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3244,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7762,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8571,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73938,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86410,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 756966,
            "range": "± 1927",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 864716,
            "range": "± 8281",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1957,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6955,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 58656,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 595466,
            "range": "± 4451",
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
            "value": 3381,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 25053,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249832,
            "range": "± 3482",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6010905,
            "range": "± 17399",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6007785,
            "range": "± 15527",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6010290,
            "range": "± 81354",
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
            "value": 14844,
            "range": "± 335",
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
        "date": 1783841445783,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20644,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6378980,
            "range": "± 43318",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 221573,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132039369,
            "range": "± 1152661",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 245021,
            "range": "± 4777",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7795723,
            "range": "± 276950",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 70785564,
            "range": "± 540900",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 480057,
            "range": "± 4775",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 964896,
            "range": "± 5176",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55294448,
            "range": "± 214226",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 684400,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3357592,
            "range": "± 8472",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13227595,
            "range": "± 42855",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 618198,
            "range": "± 4450",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3017314,
            "range": "± 15257",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11819279,
            "range": "± 50999",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 429551,
            "range": "± 3992",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2095388,
            "range": "± 15162",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8094114,
            "range": "± 24352",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40271,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 215178,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1453496,
            "range": "± 11808",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1770,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3279,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7680,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8550,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75094,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86334,
            "range": "± 879",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 742595,
            "range": "± 3027",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 862332,
            "range": "± 2939",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1981,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6820,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59094,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 590890,
            "range": "± 4076",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3383,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 25052,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 252508,
            "range": "± 1031",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5975420,
            "range": "± 11481",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5969119,
            "range": "± 8854",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5967749,
            "range": "± 11604",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14957,
            "range": "± 99",
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
        "date": 1783928443027,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 19966,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6402779,
            "range": "± 26943",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 205891,
            "range": "± 2613",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 123826223,
            "range": "± 739192",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 218218,
            "range": "± 1197",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8062797,
            "range": "± 33821",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73556342,
            "range": "± 169028",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 484532,
            "range": "± 5112",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 951179,
            "range": "± 5317",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59474830,
            "range": "± 315795",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 639295,
            "range": "± 2248",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3167826,
            "range": "± 13303",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12594083,
            "range": "± 31609",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 570750,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2812242,
            "range": "± 8142",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11133071,
            "range": "± 34417",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 393746,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1935265,
            "range": "± 128014",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7579835,
            "range": "± 433951",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 41126,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 214455,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1421988,
            "range": "± 31939",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1763,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3320,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7985,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8522,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75752,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85704,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 780003,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 844049,
            "range": "± 13343",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2003,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6583,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54545,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 538514,
            "range": "± 4756",
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
            "value": 4017,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30107,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294293,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6333769,
            "range": "± 35080",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6329264,
            "range": "± 30679",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6316075,
            "range": "± 121759",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 107,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13874,
            "range": "± 70",
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
        "date": 1784012695537,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20134,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6385119,
            "range": "± 21752",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223448,
            "range": "± 7516",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 135165194,
            "range": "± 2017009",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 219612,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7932784,
            "range": "± 219537",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68447806,
            "range": "± 2536806",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 504332,
            "range": "± 50486",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 969684,
            "range": "± 22575",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55725964,
            "range": "± 261795",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 693425,
            "range": "± 3938",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3394199,
            "range": "± 10350",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13390768,
            "range": "± 40479",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 614004,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3011405,
            "range": "± 81370",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11847157,
            "range": "± 44301",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 426261,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2077973,
            "range": "± 16373",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7998879,
            "range": "± 38916",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39797,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 217606,
            "range": "± 3368",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1450200,
            "range": "± 22782",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1783,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3318,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7733,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8505,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75573,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85798,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 748725,
            "range": "± 1719",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 845503,
            "range": "± 6864",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1989,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6891,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59030,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 591195,
            "range": "± 21190",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3421,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 25073,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249398,
            "range": "± 789",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5952863,
            "range": "± 58324",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5947211,
            "range": "± 10305",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5953568,
            "range": "± 152645",
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
            "value": 15121,
            "range": "± 444",
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
        "date": 1784098167371,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 16641,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6428061,
            "range": "± 77923",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 156208,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 121034687,
            "range": "± 868201",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 146758,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8211413,
            "range": "± 206529",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68020031,
            "range": "± 1771249",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 477964,
            "range": "± 4176",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 851462,
            "range": "± 3555",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 51205800,
            "range": "± 302582",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 597149,
            "range": "± 5343",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3036958,
            "range": "± 55250",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12627923,
            "range": "± 191373",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 556483,
            "range": "± 4214",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2751589,
            "range": "± 23482",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11431484,
            "range": "± 165351",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 373337,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1897406,
            "range": "± 37147",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7424028,
            "range": "± 71133",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 32643,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 195305,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1447400,
            "range": "± 23982",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1498,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2778,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6367,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 7368,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 61305,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 73583,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 605942,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 730535,
            "range": "± 2870",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1782,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6774,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 58074,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 576221,
            "range": "± 1930",
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
            "value": 2684,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 15374,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 145685,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6997747,
            "range": "± 40263",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6988030,
            "range": "± 23809",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 7004394,
            "range": "± 28645",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 94,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13084,
            "range": "± 106",
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
        "date": 1784186582682,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20295,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6346917,
            "range": "± 16298",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 220276,
            "range": "± 985",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 130381686,
            "range": "± 1524816",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 227479,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7663671,
            "range": "± 42619",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68718491,
            "range": "± 1710883",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 489490,
            "range": "± 2883",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 952502,
            "range": "± 89324",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 54649315,
            "range": "± 390511",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 688954,
            "range": "± 10317",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3354525,
            "range": "± 12626",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13240035,
            "range": "± 42053",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 612035,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2991621,
            "range": "± 10177",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11737940,
            "range": "± 48430",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 420915,
            "range": "± 5110",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2053648,
            "range": "± 19535",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7912324,
            "range": "± 37327",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40038,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 214410,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1451567,
            "range": "± 10696",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1779,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3340,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7707,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8599,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 75109,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86887,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 753241,
            "range": "± 3415",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 855336,
            "range": "± 6109",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2018,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6834,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 59205,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 598579,
            "range": "± 12975",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1178,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3378,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 25082,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249555,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6020429,
            "range": "± 39498",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6024461,
            "range": "± 27976",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6059581,
            "range": "± 30660",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14599,
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
        "date": 1784272221345,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20817,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6894548,
            "range": "± 55484",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 209815,
            "range": "± 1291",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 128759838,
            "range": "± 499047",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 221419,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8183159,
            "range": "± 42339",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74084752,
            "range": "± 307336",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 483624,
            "range": "± 2245",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 940221,
            "range": "± 3179",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59386103,
            "range": "± 642158",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 636186,
            "range": "± 6632",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3140731,
            "range": "± 8828",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12493007,
            "range": "± 31091",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 571838,
            "range": "± 2182",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2800954,
            "range": "± 10555",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11096741,
            "range": "± 66658",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 390932,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1917101,
            "range": "± 18720",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7469581,
            "range": "± 36246",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 40611,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211751,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1414583,
            "range": "± 10181",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1743,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3212,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7511,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8461,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 73743,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85059,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 741837,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 836650,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1969,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 5973,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 52459,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 526847,
            "range": "± 2088",
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
            "value": 4016,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30096,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 295530,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6301543,
            "range": "± 21951",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6300475,
            "range": "± 64964",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6276234,
            "range": "± 34343",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 110,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 13488,
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
        "date": 1784358196908,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 22977,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6475907,
            "range": "± 89406",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222547,
            "range": "± 1793",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132095504,
            "range": "± 1918431",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 231021,
            "range": "± 1708",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7759336,
            "range": "± 36124",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68658068,
            "range": "± 512417",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 491256,
            "range": "± 2380",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 955409,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56149705,
            "range": "± 159416",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 675748,
            "range": "± 15920",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3324781,
            "range": "± 12790",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13113757,
            "range": "± 37211",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 613869,
            "range": "± 2668",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2992032,
            "range": "± 27870",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11711524,
            "range": "± 355173",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 421280,
            "range": "± 4594",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2052970,
            "range": "± 8371",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7906905,
            "range": "± 19556",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39474,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209851,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1398254,
            "range": "± 19350",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1730,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3148,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7136,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8609,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 67647,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 85810,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 687958,
            "range": "± 4114",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 849850,
            "range": "± 4706",
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
            "value": 6584,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57093,
            "range": "± 4090",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 576273,
            "range": "± 2817",
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
            "value": 3382,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24741,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248506,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5948684,
            "range": "± 13626",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5953416,
            "range": "± 12258",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5947492,
            "range": "± 16825",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14109,
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
        "date": 1784446186745,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21220,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6653864,
            "range": "± 29255",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222655,
            "range": "± 12931",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 136457416,
            "range": "± 1222138",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 241464,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7584435,
            "range": "± 51640",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 71012235,
            "range": "± 484120",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 500892,
            "range": "± 5343",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 941923,
            "range": "± 21173",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55851453,
            "range": "± 483052",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 678296,
            "range": "± 15448",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3301150,
            "range": "± 18106",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12998419,
            "range": "± 76769",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 616765,
            "range": "± 14306",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2980174,
            "range": "± 74884",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11688667,
            "range": "± 98764",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 421986,
            "range": "± 1926",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2029235,
            "range": "± 5368",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7803687,
            "range": "± 25956",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39643,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211640,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1397699,
            "range": "± 19925",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1679,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3155,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7397,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8446,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 69116,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84193,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 691402,
            "range": "± 5306",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 840886,
            "range": "± 3268",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6627,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57297,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 576367,
            "range": "± 10526",
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
            "value": 3379,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24737,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 250784,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5993558,
            "range": "± 29487",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5971809,
            "range": "± 17123",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5974132,
            "range": "± 12416",
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
            "value": 14285,
            "range": "± 59",
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
        "date": 1784534094588,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21529,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6409579,
            "range": "± 160208",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 230271,
            "range": "± 5417",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 140080485,
            "range": "± 1410517",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 249699,
            "range": "± 1814",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7873526,
            "range": "± 289178",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 72741038,
            "range": "± 1242099",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 515535,
            "range": "± 6099",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 988178,
            "range": "± 20034",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56641173,
            "range": "± 483841",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 689712,
            "range": "± 8317",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3372806,
            "range": "± 13637",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13342744,
            "range": "± 108098",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 621758,
            "range": "± 2891",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3030875,
            "range": "± 18013",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11903108,
            "range": "± 92611",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 427743,
            "range": "± 3704",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2080694,
            "range": "± 16225",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8030128,
            "range": "± 67397",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39351,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212505,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1408502,
            "range": "± 19531",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1703,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3178,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7261,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8341,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 70927,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83450,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 698044,
            "range": "± 3329",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833938,
            "range": "± 2850",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2011,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6624,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 56955,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 572118,
            "range": "± 1837",
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
            "value": 3381,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24896,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 245002,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5977781,
            "range": "± 25177",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5959187,
            "range": "± 11176",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5977500,
            "range": "± 23517",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 106,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14923,
            "range": "± 126",
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
        "date": 1784620468518,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 14165,
            "range": "± 1057",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 4613972,
            "range": "± 26903",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 101766,
            "range": "± 1240",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 87167521,
            "range": "± 440714",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 100933,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6156405,
            "range": "± 126849",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 51301641,
            "range": "± 870658",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 334881,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 612637,
            "range": "± 12754",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 38396379,
            "range": "± 78653",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 483629,
            "range": "± 3402",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2373442,
            "range": "± 9250",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9662383,
            "range": "± 33553",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 447396,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2133505,
            "range": "± 31743",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8616408,
            "range": "± 38505",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 303941,
            "range": "± 3648",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1501800,
            "range": "± 60183",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5826048,
            "range": "± 14795",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 26919,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 155823,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1107806,
            "range": "± 25067",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1195,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2120,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 5220,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 5844,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 51296,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 58701,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 506144,
            "range": "± 8771",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 580393,
            "range": "± 9753",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1424,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 5387,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 45194,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 444851,
            "range": "± 3325",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 831,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2584,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 14508,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 137519,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 3336035,
            "range": "± 34464",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 3331596,
            "range": "± 6574",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 3336369,
            "range": "± 4454",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 80,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 10641,
            "range": "± 50",
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
        "date": 1784705276917,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21488,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6508651,
            "range": "± 46035",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 224102,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 140372263,
            "range": "± 3097554",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 235482,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7672034,
            "range": "± 104359",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68788425,
            "range": "± 770365",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 492773,
            "range": "± 6708",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 928289,
            "range": "± 2426",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55408645,
            "range": "± 336584",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 669067,
            "range": "± 3141",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3296509,
            "range": "± 30204",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12929852,
            "range": "± 272410",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 607647,
            "range": "± 10501",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2948746,
            "range": "± 10007",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11623198,
            "range": "± 228130",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 418898,
            "range": "± 5567",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2010002,
            "range": "± 25934",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7892705,
            "range": "± 77350",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39351,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210224,
            "range": "± 3653",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1397457,
            "range": "± 53430",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1667,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3179,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7515,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8305,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 67351,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83529,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 675821,
            "range": "± 10734",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 834537,
            "range": "± 7231",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1998,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6656,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57423,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 573729,
            "range": "± 5062",
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
            "value": 3380,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24818,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248890,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5954447,
            "range": "± 34369",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5953436,
            "range": "± 11629",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5955359,
            "range": "± 11723",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 15117,
            "range": "± 119",
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
        "date": 1784804654495,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 11184,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 4321541,
            "range": "± 283957",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 99185,
            "range": "± 5620",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 78002667,
            "range": "± 1121134",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 86314,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 5057429,
            "range": "± 19144",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 45888590,
            "range": "± 2791454",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 267820,
            "range": "± 17735",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 498198,
            "range": "± 3090",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 32722641,
            "range": "± 80013",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 402419,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 1995587,
            "range": "± 3715",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 8229215,
            "range": "± 39712",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 372322,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 1810753,
            "range": "± 13966",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 7437179,
            "range": "± 49394",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 251963,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1453472,
            "range": "± 126876",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5019835,
            "range": "± 363230",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 23898,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 138507,
            "range": "± 9187",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1007229,
            "range": "± 44778",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 967,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 1710,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 4303,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 4746,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 41638,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 47565,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 419318,
            "range": "± 9969",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 466587,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1140,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 4462,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 36539,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 356143,
            "range": "± 4357",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 737,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2229,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 12489,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 118386,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 3037922,
            "range": "± 12315",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 3041540,
            "range": "± 17701",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 3106882,
            "range": "± 94279",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 65,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 9049,
            "range": "± 679",
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
        "date": 1784878296435,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21328,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6953651,
            "range": "± 159904",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 224506,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 137964319,
            "range": "± 1035716",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 236583,
            "range": "± 1181",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 9040344,
            "range": "± 388508",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73790284,
            "range": "± 1151489",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 507309,
            "range": "± 5079",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 957417,
            "range": "± 10907",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 57212966,
            "range": "± 517678",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 684218,
            "range": "± 8956",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3341556,
            "range": "± 36015",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13317138,
            "range": "± 163677",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 617727,
            "range": "± 14132",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3016335,
            "range": "± 24701",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12021432,
            "range": "± 225328",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 426262,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2046923,
            "range": "± 43700",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7886379,
            "range": "± 76953",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39631,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211702,
            "range": "± 5088",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1409059,
            "range": "± 29111",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1681,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3198,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7093,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8459,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 68008,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83748,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 690272,
            "range": "± 5204",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 838792,
            "range": "± 24234",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1988,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6678,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 58753,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 576352,
            "range": "± 4012",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3380,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24732,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 246513,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5981915,
            "range": "± 17832",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5984511,
            "range": "± 106663",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5996595,
            "range": "± 34603",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14830,
            "range": "± 73",
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
        "date": 1784970922476,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 15154,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 4885841,
            "range": "± 149195",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 109050,
            "range": "± 4605",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 95269951,
            "range": "± 2496597",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 112636,
            "range": "± 4721",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 6579064,
            "range": "± 247866",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 55859503,
            "range": "± 2213257",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 356302,
            "range": "± 13291",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 654462,
            "range": "± 19184",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 40768239,
            "range": "± 1511437",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 507619,
            "range": "± 18659",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2493793,
            "range": "± 71056",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 10110872,
            "range": "± 291947",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 471518,
            "range": "± 17886",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2294775,
            "range": "± 114051",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 9140919,
            "range": "± 203875",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 323727,
            "range": "± 11366",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1595039,
            "range": "± 64380",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 6179657,
            "range": "± 151676",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 28742,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 163705,
            "range": "± 5934",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1176925,
            "range": "± 38647",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1279,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2317,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 5446,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6283,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 54417,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 62848,
            "range": "± 2304",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 528995,
            "range": "± 16695",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 623240,
            "range": "± 22228",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1518,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 5939,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 48921,
            "range": "± 1966",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 475222,
            "range": "± 21925",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 905,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2812,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 15507,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 146162,
            "range": "± 4875",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 3533523,
            "range": "± 151149",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 3532249,
            "range": "± 191018",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 3522807,
            "range": "± 102433",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 86,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 11208,
            "range": "± 412",
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
        "date": 1785051401485,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20937,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6385122,
            "range": "± 31734",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 220892,
            "range": "± 4748",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 128572089,
            "range": "± 1210435",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 231601,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7539090,
            "range": "± 35188",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 68551690,
            "range": "± 401112",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 495802,
            "range": "± 3323",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 972390,
            "range": "± 8253",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55808152,
            "range": "± 490430",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 672610,
            "range": "± 6918",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3300716,
            "range": "± 21313",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12978279,
            "range": "± 117488",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 611896,
            "range": "± 4620",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2971232,
            "range": "± 30899",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11630207,
            "range": "± 48808",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 426828,
            "range": "± 3539",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2050947,
            "range": "± 10323",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7817537,
            "range": "± 38169",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39264,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 209872,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1395691,
            "range": "± 9562",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1669,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3362,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7273,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8407,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 69162,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84159,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 680723,
            "range": "± 10311",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 838793,
            "range": "± 2917",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1951,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6647,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57675,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 567766,
            "range": "± 2081",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3379,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24809,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248231,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5951335,
            "range": "± 14126",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5953107,
            "range": "± 17148",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5949913,
            "range": "± 13015",
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
            "value": 14668,
            "range": "± 84",
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
        "date": 1785222066963,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 17013,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6223320,
            "range": "± 46778",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 158236,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 121192816,
            "range": "± 1112994",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 155536,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8042989,
            "range": "± 175451",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 67128063,
            "range": "± 548900",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 471862,
            "range": "± 11299",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 825860,
            "range": "± 3042",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 50946335,
            "range": "± 590677",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 590713,
            "range": "± 8403",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2971435,
            "range": "± 23820",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12326597,
            "range": "± 120715",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 544557,
            "range": "± 7946",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2721830,
            "range": "± 38527",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11071299,
            "range": "± 70161",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 370937,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1850410,
            "range": "± 21824",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7268809,
            "range": "± 23503",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 32469,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 194145,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1425696,
            "range": "± 31317",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1472,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2879,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 5926,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 7485,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 56176,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 74857,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 568879,
            "range": "± 2913",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 743813,
            "range": "± 2734",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1775,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6746,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57666,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 571044,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 841,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2671,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 15358,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 145198,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6944786,
            "range": "± 26849",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6934647,
            "range": "± 32080",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6932847,
            "range": "± 27456",
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
            "value": 13117,
            "range": "± 155",
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
        "date": 1785309915855,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21503,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6416406,
            "range": "± 33355",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223515,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 135741108,
            "range": "± 875475",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 229605,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7889615,
            "range": "± 263657",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69786279,
            "range": "± 622938",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 499597,
            "range": "± 3891",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 971363,
            "range": "± 2655",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55929021,
            "range": "± 353672",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 680441,
            "range": "± 12229",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3324245,
            "range": "± 11908",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13058347,
            "range": "± 54188",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 618878,
            "range": "± 3039",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2996137,
            "range": "± 11139",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11800844,
            "range": "± 100283",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 427329,
            "range": "± 14458",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2059552,
            "range": "± 9802",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7918699,
            "range": "± 107480",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39246,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 210311,
            "range": "± 771",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1399485,
            "range": "± 24043",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1682,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3234,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7276,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8357,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 67766,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83912,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 700097,
            "range": "± 3855",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 836772,
            "range": "± 2342",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1985,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6706,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 60078,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 571241,
            "range": "± 2620",
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
            "value": 3380,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24753,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 250881,
            "range": "± 2261",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5955937,
            "range": "± 22764",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5959370,
            "range": "± 6423",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5955689,
            "range": "± 9488",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14862,
            "range": "± 384",
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
        "date": 1785395990125,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21269,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6517007,
            "range": "± 19732",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 224415,
            "range": "± 1131",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 135902249,
            "range": "± 3161181",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 240569,
            "range": "± 6210",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8311087,
            "range": "± 298379",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 73260742,
            "range": "± 1030045",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 512261,
            "range": "± 5816",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 949041,
            "range": "± 19036",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 56564171,
            "range": "± 298632",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 677137,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3351089,
            "range": "± 15485",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13401229,
            "range": "± 147626",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 618471,
            "range": "± 6713",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3015526,
            "range": "± 22713",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12185401,
            "range": "± 129373",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 422797,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2066236,
            "range": "± 43350",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7964041,
            "range": "± 35914",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39702,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211388,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1409393,
            "range": "± 40336",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1693,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3185,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7150,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8499,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 67486,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84362,
            "range": "± 1420",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 675196,
            "range": "± 12063",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 844990,
            "range": "± 11149",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1999,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6758,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57924,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 576259,
            "range": "± 3487",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1177,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3381,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24776,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 249536,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6004645,
            "range": "± 30263",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6000261,
            "range": "± 19986",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5975026,
            "range": "± 15653",
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
            "value": 15166,
            "range": "± 295",
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
        "date": 1785484344195,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21252,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6682026,
            "range": "± 61952",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 223766,
            "range": "± 1786",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 132774863,
            "range": "± 1174696",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 238988,
            "range": "± 2130",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8021963,
            "range": "± 240728",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 69744420,
            "range": "± 332643",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 492226,
            "range": "± 1793",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 956281,
            "range": "± 5866",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55840053,
            "range": "± 236439",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 700358,
            "range": "± 6605",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3412998,
            "range": "± 12268",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13812892,
            "range": "± 436120",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 624155,
            "range": "± 2784",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 3048278,
            "range": "± 11131",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 12108846,
            "range": "± 155927",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 434784,
            "range": "± 2258",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2111402,
            "range": "± 7671",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 8121968,
            "range": "± 40768",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39576,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 212739,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1402648,
            "range": "± 21955",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1666,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3128,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7069,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8511,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 69963,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 84045,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 687198,
            "range": "± 13373",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 839970,
            "range": "± 4490",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1983,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6679,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 57848,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 582199,
            "range": "± 4513",
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
            "value": 3384,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24832,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 248799,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5963737,
            "range": "± 13832",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5961985,
            "range": "± 31900",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5970710,
            "range": "± 11933",
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
            "value": 14882,
            "range": "± 63",
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
        "date": 1785568773330,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20478,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6932035,
            "range": "± 22976",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 206466,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 123772726,
            "range": "± 427683",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 206338,
            "range": "± 6775",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8053239,
            "range": "± 44366",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74012848,
            "range": "± 335231",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 493704,
            "range": "± 6090",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 936752,
            "range": "± 5057",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59409316,
            "range": "± 369735",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 634324,
            "range": "± 9222",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3148614,
            "range": "± 9117",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12543737,
            "range": "± 38180",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 567236,
            "range": "± 2613",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2800097,
            "range": "± 50150",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11105831,
            "range": "± 149801",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 388256,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1914743,
            "range": "± 10800",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7466826,
            "range": "± 43130",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 41557,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 216480,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1431931,
            "range": "± 44911",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1756,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3221,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7479,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8605,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72358,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 86294,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 723796,
            "range": "± 6398",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 852107,
            "range": "± 5515",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1924,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 5937,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 52642,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 526427,
            "range": "± 1967",
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
            "value": 4026,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30140,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 295128,
            "range": "± 8765",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6294003,
            "range": "± 28353",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6290327,
            "range": "± 17685",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6286331,
            "range": "± 61671",
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
            "value": 14287,
            "range": "± 52",
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
        "date": 1785657517520,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 15458,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5170825,
            "range": "± 47870",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 158173,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 98053410,
            "range": "± 966809",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 169515,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7181303,
            "range": "± 338096",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 57410170,
            "range": "± 1039635",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 366725,
            "range": "± 3388",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 717915,
            "range": "± 4156",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 46965270,
            "range": "± 634901",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 488753,
            "range": "± 7094",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2430453,
            "range": "± 18919",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 9688774,
            "range": "± 35284",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 445660,
            "range": "± 3886",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2162459,
            "range": "± 45578",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 8589560,
            "range": "± 30153",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 299271,
            "range": "± 2060",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1489104,
            "range": "± 29082",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 5794170,
            "range": "± 161587",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 32048,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 167046,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1097628,
            "range": "± 7164",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1389,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2543,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 5839,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 6463,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 57315,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 65716,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 573202,
            "range": "± 4080",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 642628,
            "range": "± 5512",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1506,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 4657,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 42505,
            "range": "± 990",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 421842,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 1052,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 2732,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 16693,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 157058,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4922206,
            "range": "± 52606",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4936329,
            "range": "± 15874",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4927865,
            "range": "± 9123",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 11205,
            "range": "± 34",
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
        "date": 1785743075822,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 20562,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6945706,
            "range": "± 49616",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 208819,
            "range": "± 815",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 125506595,
            "range": "± 1378638",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 222718,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 8157322,
            "range": "± 27406",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 74290272,
            "range": "± 443329",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 477219,
            "range": "± 2277",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 960107,
            "range": "± 28923",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 59340816,
            "range": "± 384398",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 631705,
            "range": "± 9726",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3134648,
            "range": "± 10882",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 12476638,
            "range": "± 51642",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 564206,
            "range": "± 1546",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2799658,
            "range": "± 13006",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11125441,
            "range": "± 229475",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 388194,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1908319,
            "range": "± 8820",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7460609,
            "range": "± 25617",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 41117,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 211350,
            "range": "± 3494",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1413446,
            "range": "± 20111",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1731,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3195,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7701,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8381,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 72773,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83713,
            "range": "± 2258",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 722369,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 826469,
            "range": "± 2452",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2071,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6009,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 53455,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 526903,
            "range": "± 1329",
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
            "value": 4053,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 30198,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 294698,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 6296777,
            "range": "± 13951",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 6297837,
            "range": "± 15627",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 6291842,
            "range": "± 17212",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 108,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14006,
            "range": "± 87",
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
        "date": 1785828102920,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 21226,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 6619321,
            "range": "± 202477",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 222696,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 128983734,
            "range": "± 1819713",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 242098,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7542515,
            "range": "± 289616",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 72550215,
            "range": "± 1751500",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 488859,
            "range": "± 4576",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 941825,
            "range": "± 6774",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 55451732,
            "range": "± 482503",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 671957,
            "range": "± 6167",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 3303284,
            "range": "± 9083",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 13026005,
            "range": "± 64321",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 607758,
            "range": "± 3029",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2960374,
            "range": "± 12318",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 11611204,
            "range": "± 136372",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 414385,
            "range": "± 3030",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 2003661,
            "range": "± 26319",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7766821,
            "range": "± 44304",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 39275,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 208706,
            "range": "± 6128",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1397138,
            "range": "± 24825",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1675,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 3098,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 7251,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 8322,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 68830,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 83545,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 696326,
            "range": "± 11390",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 833452,
            "range": "± 25565",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 2005,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6742,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 58675,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 576687,
            "range": "± 2393",
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
            "value": 3380,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 24781,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 246973,
            "range": "± 1838",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 5955007,
            "range": "± 19346",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 5949074,
            "range": "± 33447",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 5955725,
            "range": "± 31744",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_single/single",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "vector/upsert_batch_100/batch_100",
            "value": 14361,
            "range": "± 308",
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
        "date": 1785916430761,
        "tool": "cargo",
        "benches": [
          {
            "name": "graph/entity_lookup_by_name/medium",
            "value": 17017,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "graph/entity_search/medium",
            "value": 5478242,
            "range": "± 44634",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_for_entity/medium",
            "value": 122962,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "graph/claims_by_type/medium",
            "value": 113227906,
            "range": "± 593617",
            "unit": "ns/iter"
          },
          {
            "name": "graph/relations_for_entity/medium",
            "value": 129134,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_entities/medium",
            "value": 7445254,
            "range": "± 77615",
            "unit": "ns/iter"
          },
          {
            "name": "graph/all_relations/medium",
            "value": 63467128,
            "range": "± 360982",
            "unit": "ns/iter"
          },
          {
            "name": "graph/contradictions/medium",
            "value": 401314,
            "range": "± 2134",
            "unit": "ns/iter"
          },
          {
            "name": "graph/source_hash_exists/medium",
            "value": 721462,
            "range": "± 4603",
            "unit": "ns/iter"
          },
          {
            "name": "graph/get_counts/medium",
            "value": 48124382,
            "range": "± 191812",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/100",
            "value": 581792,
            "range": "± 4550",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/500",
            "value": 2867164,
            "range": "± 9268",
            "unit": "ns/iter"
          },
          {
            "name": "parser/rust/lines/2000",
            "value": 11653339,
            "range": "± 51568",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/100",
            "value": 533116,
            "range": "± 3105",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/500",
            "value": 2578659,
            "range": "± 33943",
            "unit": "ns/iter"
          },
          {
            "name": "parser/python/lines/2000",
            "value": 10409103,
            "range": "± 53040",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/100",
            "value": 368752,
            "range": "± 7364",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/500",
            "value": 1810921,
            "range": "± 13812",
            "unit": "ns/iter"
          },
          {
            "name": "parser/typescript/lines/2000",
            "value": 7042184,
            "range": "± 124681",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/100",
            "value": 32557,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/500",
            "value": 186051,
            "range": "± 1547",
            "unit": "ns/iter"
          },
          {
            "name": "parser/markdown/lines/2000",
            "value": 1337863,
            "range": "± 11052",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_json_roundtrip",
            "value": 1434,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_json_roundtrip",
            "value": 2561,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/10",
            "value": 6335,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/10",
            "value": 7030,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/100",
            "value": 59858,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/100",
            "value": 70648,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/serialize/1000",
            "value": 589725,
            "range": "± 5970",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/entity_vec_json/deserialize/1000",
            "value": 698655,
            "range": "± 3071",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_msgpack_roundtrip",
            "value": 1724,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/10",
            "value": 6502,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/100",
            "value": 54422,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/claim_vec_msgpack/serialize/1000",
            "value": 531643,
            "range": "± 6621",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1",
            "value": 994,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/10",
            "value": 3067,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/100",
            "value": 17446,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "serialization/blake3_hash/kb/1000",
            "value": 165276,
            "range": "± 8621",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top5/medium",
            "value": 4016527,
            "range": "± 22857",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top10/medium",
            "value": 4037973,
            "range": "± 24989",
            "unit": "ns/iter"
          },
          {
            "name": "vector/cosine_search_top50/medium",
            "value": 4018569,
            "range": "± 23512",
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
            "value": 12541,
            "range": "± 87",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}