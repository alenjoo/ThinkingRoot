use criterion::{BenchmarkId, Criterion, criterion_group, criterion_main};
use thinkingroot_core::{Claim, ClaimType, Entity, EntityType, Sensitivity, SourceId, WorkspaceId};

// ---------------------------------------------------------------------------
// Helper constructors
// ---------------------------------------------------------------------------

fn make_entity(i: usize) -> Entity {
    Entity::new(format!("bench-entity-{i}"), EntityType::Service)
        .with_description(format!("A benchmark entity for serialization testing #{i}"))
}

fn make_claim(i: usize) -> Claim {
    let ws = WorkspaceId::new();
    let src = SourceId::new();
    Claim::new(
        format!("Claim {i}: The system processes requests within 10ms"),
        ClaimType::Fact,
        src,
        ws,
    )
    .with_confidence(0.85)
    .with_sensitivity(Sensitivity::Internal)
}

// ---------------------------------------------------------------------------
// Benchmarks
// ---------------------------------------------------------------------------

fn bench_entity_json_roundtrip(c: &mut Criterion) {
    let entity = make_entity(0);
    c.bench_function("serialization/entity_json_roundtrip", |b| {
        b.iter(|| {
            let json = serde_json::to_string(&entity).expect("serialize entity");
            let _: Entity = serde_json::from_str(&json).expect("deserialize entity");
        });
    });
}

fn bench_claim_json_roundtrip(c: &mut Criterion) {
    let claim = make_claim(0);
    c.bench_function("serialization/claim_json_roundtrip", |b| {
        b.iter(|| {
            let json = serde_json::to_string(&claim).expect("serialize claim");
            let _: Claim = serde_json::from_str(&json).expect("deserialize claim");
        });
    });
}

fn bench_entity_vec_json(c: &mut Criterion) {
    let sizes: &[usize] = &[10, 100, 1000];
    let mut group = c.benchmark_group("serialization/entity_vec_json");

    for &n in sizes {
        let entities: Vec<Entity> = (0..n).map(make_entity).collect();

        group.bench_with_input(BenchmarkId::new("serialize", n), &entities, |b, ents| {
            b.iter(|| serde_json::to_string(ents).expect("serialize entities"));
        });

        let json = serde_json::to_string(&entities).expect("pre-serialize");
        group.bench_with_input(BenchmarkId::new("deserialize", n), &json, |b, j| {
            b.iter(|| {
                let _: Vec<Entity> = serde_json::from_str(j).expect("deserialize entities");
            });
        });
    }

    group.finish();
}

fn bench_claim_msgpack_roundtrip(c: &mut Criterion) {
    let claim = make_claim(0);
    c.bench_function("serialization/claim_msgpack_roundtrip", |b| {
        b.iter(|| {
            let bytes = rmp_serde::to_vec(&claim).expect("serialize claim msgpack");
            let _: Claim = rmp_serde::from_slice(&bytes).expect("deserialize claim msgpack");
        });
    });
}

fn bench_claim_vec_msgpack(c: &mut Criterion) {
    let sizes: &[usize] = &[10, 100, 1000];
    let mut group = c.benchmark_group("serialization/claim_vec_msgpack");

    for &n in sizes {
        let claims: Vec<Claim> = (0..n).map(make_claim).collect();

        group.bench_with_input(BenchmarkId::new("serialize", n), &claims, |b, cls| {
            b.iter(|| rmp_serde::to_vec(cls).expect("serialize claims msgpack"));
        });
    }

    group.finish();
}

fn bench_blake3_hash(c: &mut Criterion) {
    let sizes_kb: &[usize] = &[1, 10, 100, 1000];
    let mut group = c.benchmark_group("serialization/blake3_hash");

    for &kb in sizes_kb {
        let data: Vec<u8> = (0..kb * 1024).map(|i| (i % 256) as u8).collect();

        group.bench_with_input(BenchmarkId::new("kb", kb), &data, |b, d| {
            b.iter(|| blake3::hash(d));
        });
    }

    group.finish();
}

// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------

criterion_group!(
    benches,
    bench_entity_json_roundtrip,
    bench_claim_json_roundtrip,
    bench_entity_vec_json,
    bench_claim_msgpack_roundtrip,
    bench_claim_vec_msgpack,
    bench_blake3_hash,
);
criterion_main!(benches);
