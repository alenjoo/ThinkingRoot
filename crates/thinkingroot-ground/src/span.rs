/// Judge 2: Span attribution verification.
///
/// Verifies that the LLM's cited `source_quote` actually appears in the source text.
/// Uses fuzzy substring matching to tolerate minor whitespace/punctuation differences.
pub struct SpanJudge;

impl SpanJudge {
    /// Score how well the LLM's cited quote matches the source text.
    ///
    /// Returns a score in [0.0, 1.0]:
    /// - 1.0 = exact verbatim match found in source
    /// - 0.7-0.99 = fuzzy match (whitespace/case normalized)
    /// - 0.0 = quote not found in source at all (likely hallucinated)
    /// - Returns None if no source_quote was provided by the LLM
    pub fn score(source_quote: Option<&str>, source_text: &str) -> Option<f64> {
        let quote = source_quote?;
        if quote.is_empty() {
            return None;
        }

        // Try exact substring match first.
        if source_text.contains(quote) {
            return Some(1.0);
        }

        // Normalize whitespace and try again.
        let norm_quote = normalize(quote);
        let norm_source = normalize(source_text);

        if norm_source.contains(&norm_quote) {
            return Some(0.95);
        }

        // Case-insensitive normalized match.
        let lower_quote = norm_quote.to_lowercase();
        let lower_source = norm_source.to_lowercase();

        if lower_source.contains(&lower_quote) {
            return Some(0.9);
        }

        // Sliding window: find best overlap ratio.
        // This catches quotes that are "almost right" (off by a few chars).
        let best = best_window_overlap(&lower_quote, &lower_source);
        if best >= 0.8 {
            return Some(best * 0.85); // Scale down since it's fuzzy
        }

        Some(0.0)
    }
}

/// Collapse runs of whitespace to single spaces and trim.
fn normalize(s: &str) -> String {
    s.split_whitespace().collect::<Vec<_>>().join(" ")
}

/// Sliding window: find the substring of `haystack` with length = `needle.len()`
/// that has the highest character overlap with `needle`.
/// Returns a ratio in [0.0, 1.0].
fn best_window_overlap(needle: &str, haystack: &str) -> f64 {
    if needle.is_empty() || haystack.is_empty() || needle.len() > haystack.len() {
        return 0.0;
    }

    let needle_bytes = needle.as_bytes();
    let haystack_bytes = haystack.as_bytes();
    let window_len = needle_bytes.len();
    let mut best = 0usize;

    for start in 0..=(haystack_bytes.len() - window_len) {
        let matches = needle_bytes
            .iter()
            .zip(&haystack_bytes[start..start + window_len])
            .filter(|(a, b)| a == b)
            .count();
        if matches > best {
            best = matches;
        }
    }

    best as f64 / window_len as f64
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn exact_match_scores_one() {
        let source = "PostgreSQL stores user data in normalized tables.";
        let quote = "PostgreSQL stores user data in normalized tables.";
        assert_eq!(SpanJudge::score(Some(quote), source), Some(1.0));
    }

    #[test]
    fn whitespace_normalized_match() {
        let source = "PostgreSQL  stores\n  user   data";
        let quote = "PostgreSQL stores user data";
        let score = SpanJudge::score(Some(quote), source).unwrap();
        assert!(score >= 0.9, "expected >= 0.9, got {score}");
    }

    #[test]
    fn case_insensitive_match() {
        let source = "PostgreSQL Stores User Data";
        let quote = "postgresql stores user data";
        let score = SpanJudge::score(Some(quote), source).unwrap();
        assert!(score >= 0.85, "expected >= 0.85, got {score}");
    }

    #[test]
    fn no_match_scores_zero() {
        let source = "PostgreSQL stores user data";
        let quote = "Redis caches session tokens";
        let score = SpanJudge::score(Some(quote), source).unwrap();
        assert!(score < 0.3, "expected < 0.3, got {score}");
    }

    #[test]
    fn no_quote_returns_none() {
        assert_eq!(SpanJudge::score(None, "some source"), None);
    }

    #[test]
    fn empty_quote_returns_none() {
        assert_eq!(SpanJudge::score(Some(""), "some source"), None);
    }

    #[test]
    fn partial_match_via_sliding_window() {
        let source = "The system uses PostgreSQL for primary storage";
        let quote = "system uses PostgreSQL for primary storag"; // typo at end
        let score = SpanJudge::score(Some(quote), source).unwrap();
        assert!(score > 0.5, "expected > 0.5, got {score}");
    }
}
