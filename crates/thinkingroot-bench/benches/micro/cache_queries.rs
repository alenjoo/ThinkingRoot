/// cache_queries — KnowledgeGraph (Phase B) vs CozoDB (graph_queries) side-by-side
///
/// Every benchmark here mirrors an identically-named one in graph_queries.rs.
/// The only difference: `fix.cache.*` instead of `fix.graph.*`.
/// Running both benches gives a direct apples-to-apples latency comparison.
use criterion::{BenchmarkId, Criterion, criterion_group, criterion_main};
use thinkingroot_bench::{Fixture, Scale};

fn bench_entity_lookup_by_name(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/entity_lookup_by_name");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.find_entity_by_name(&fix.sample_entity_name));
        });
    }
    group.finish();
}

fn bench_entity_by_id(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/entity_by_id");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.entity_by_id(&fix.sample_entity_id));
        });
    }
    group.finish();
}

fn bench_claims_for_entity(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/claims_for_entity");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.claims_for_entity(&fix.sample_entity_id));
        });
    }
    group.finish();
}

fn bench_claims_of_type(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/claims_of_type");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.claims_of_type("Fact"));
        });
    }
    group.finish();
}

fn bench_relations_for_entity(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/relations_for_entity");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.relations_for_entity(&fix.sample_entity_name));
        });
    }
    group.finish();
}

fn bench_get_counts(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/get_counts");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.counts());
        });
    }
    group.finish();
}

fn bench_source_hash_exists(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/source_hash_exists");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            let key = blake3::hash(b"hash_42").to_hex().to_string();
            b.iter(|| fix.cache.source_hash_exists(&key));
        });
    }
    group.finish();
}

fn bench_all_relations(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/all_relations");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.all_relations().len());
        });
    }
    group.finish();
}

fn bench_top_entities_by_claim_count(c: &mut Criterion) {
    let mut group = c.benchmark_group("cache/top_entities_by_claim_count");
    for scale in Scale::for_bench() {
        let fix = Fixture::generate(scale);
        group.bench_with_input(BenchmarkId::from_parameter(scale), &fix, |b, fix| {
            b.iter(|| fix.cache.top_entities_by_claim_count(10));
        });
    }
    group.finish();
}

criterion_group!(
    benches,
    bench_entity_lookup_by_name,
    bench_entity_by_id,
    bench_claims_for_entity,
    bench_claims_of_type,
    bench_relations_for_entity,
    bench_get_counts,
    bench_source_hash_exists,
    bench_all_relations,
    bench_top_entities_by_claim_count,
);
criterion_main!(benches);
