use std::collections::HashMap;

use criterion::{BenchmarkId, Criterion, criterion_group, criterion_main};
use rand::Rng;
use thinkingroot_bench::Scale;

// ---------------------------------------------------------------------------
// BenchVectorIndex — self-contained brute-force vector index (no ONNX needed)
// ---------------------------------------------------------------------------

struct BenchVectorIndex {
    vectors: Vec<(String, Vec<f32>)>,
}

impl BenchVectorIndex {
    /// Generate `count` random vectors of dimension `dim`.
    fn generate(count: usize, dim: usize) -> Self {
        let mut rng = rand::rng();
        let vectors = (0..count)
            .map(|i| {
                let id = format!("vec_{i}");
                let vec: Vec<f32> = (0..dim).map(|_| rng.random_range(-1.0..1.0_f32)).collect();
                (id, vec)
            })
            .collect();
        Self { vectors }
    }

    /// Brute-force cosine similarity search, returns top-k `(id, score)`.
    fn cosine_search(&self, query: &[f32], top_k: usize) -> Vec<(String, f32)> {
        let query_norm = dot_norm(query);
        if query_norm == 0.0 {
            return vec![];
        }

        let mut scores: Vec<(String, f32)> = self
            .vectors
            .iter()
            .map(|(id, vec)| {
                let vec_norm = dot_norm(vec);
                let sim = if vec_norm == 0.0 {
                    0.0
                } else {
                    dot(query, vec) / (query_norm * vec_norm)
                };
                (id.clone(), sim)
            })
            .collect();

        // Sort descending by similarity.
        scores.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap_or(std::cmp::Ordering::Equal));
        scores.truncate(top_k);
        scores
    }
}

#[inline]
fn dot(a: &[f32], b: &[f32]) -> f32 {
    a.iter().zip(b.iter()).map(|(x, y)| x * y).sum()
}

#[inline]
fn dot_norm(v: &[f32]) -> f32 {
    v.iter().map(|x| x * x).sum::<f32>().sqrt()
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const DIM: usize = 384;

/// Deterministic query vector: `(i / dim) - 0.5` for each dimension.
fn deterministic_query(dim: usize) -> Vec<f32> {
    (0..dim).map(|i| (i as f32 / dim as f32) - 0.5).collect()
}

// ---------------------------------------------------------------------------
// Cosine search benchmarks
// ---------------------------------------------------------------------------

fn bench_cosine_search_top5(c: &mut Criterion) {
    let mut group = c.benchmark_group("vector/cosine_search_top5");
    let query = deterministic_query(DIM);
    for &scale in Scale::all() {
        let index = BenchVectorIndex::generate(scale.embedding_count(), DIM);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &index, |b, idx| {
            b.iter(|| idx.cosine_search(&query, 5));
        });
    }
    group.finish();
}

fn bench_cosine_search_top10(c: &mut Criterion) {
    let mut group = c.benchmark_group("vector/cosine_search_top10");
    let query = deterministic_query(DIM);
    for &scale in Scale::all() {
        let index = BenchVectorIndex::generate(scale.embedding_count(), DIM);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &index, |b, idx| {
            b.iter(|| idx.cosine_search(&query, 10));
        });
    }
    group.finish();
}

fn bench_cosine_search_top50(c: &mut Criterion) {
    let mut group = c.benchmark_group("vector/cosine_search_top50");
    let query = deterministic_query(DIM);
    for &scale in Scale::all() {
        let index = BenchVectorIndex::generate(scale.embedding_count(), DIM);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &index, |b, idx| {
            b.iter(|| idx.cosine_search(&query, 50));
        });
    }
    group.finish();
}

// ---------------------------------------------------------------------------
// Upsert benchmarks
// ---------------------------------------------------------------------------

fn bench_upsert_single(c: &mut Criterion) {
    let mut group = c.benchmark_group("vector/upsert_single");
    let mut rng = rand::rng();
    let vec: Vec<f32> = (0..DIM).map(|_| rng.random_range(-1.0..1.0_f32)).collect();
    let meta = "benchmark-meta".to_string();

    group.bench_function("single", |b| {
        b.iter_with_setup(
            || HashMap::<String, (Vec<f32>, String)>::with_capacity(1024),
            |mut map| {
                map.insert("id_0".to_string(), (vec.clone(), meta.clone()));
                map
            },
        );
    });
    group.finish();
}

fn bench_upsert_batch_100(c: &mut Criterion) {
    let mut group = c.benchmark_group("vector/upsert_batch_100");
    let mut rng = rand::rng();
    let entries: Vec<(String, Vec<f32>, String)> = (0..100)
        .map(|i| {
            let id = format!("id_{i}");
            let vec: Vec<f32> = (0..DIM).map(|_| rng.random_range(-1.0..1.0_f32)).collect();
            (id, vec, "benchmark-meta".to_string())
        })
        .collect();

    group.bench_function("batch_100", |b| {
        b.iter_with_setup(
            || HashMap::<String, (Vec<f32>, String)>::with_capacity(1024),
            |mut map| {
                for (id, vec, meta) in &entries {
                    map.insert(id.clone(), (vec.clone(), meta.clone()));
                }
                map
            },
        );
    });
    group.finish();
}

// ---------------------------------------------------------------------------
// Criterion groups
// ---------------------------------------------------------------------------

criterion_group!(
    benches,
    bench_cosine_search_top5,
    bench_cosine_search_top10,
    bench_cosine_search_top50,
    bench_upsert_single,
    bench_upsert_batch_100,
);
criterion_main!(benches);
