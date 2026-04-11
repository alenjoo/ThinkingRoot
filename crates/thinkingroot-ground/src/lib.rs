mod lexical;
mod span;
mod grounder;
pub mod dedup;

#[cfg(feature = "vector")]
mod semantic;

pub use grounder::{Grounder, GroundingConfig, GroundingVerdict};
pub use lexical::LexicalJudge;
pub use span::SpanJudge;

#[cfg(feature = "vector")]
pub use semantic::SemanticJudge;
