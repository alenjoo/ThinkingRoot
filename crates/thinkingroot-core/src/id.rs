use serde::{Deserialize, Serialize};
use std::fmt;
use std::marker::PhantomData;
use std::str::FromStr;
use ulid::Ulid;

/// Type-safe wrapper around ULID. The phantom type parameter `T` ensures
/// you can never accidentally pass a `SourceId` where a `ClaimId` is expected.
#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct Id<T> {
    inner: Ulid,
    _marker: PhantomData<T>,
}

impl<T> Id<T> {
    pub fn new() -> Self {
        Self {
            inner: Ulid::new(),
            _marker: PhantomData,
        }
    }

    pub fn from_ulid(ulid: Ulid) -> Self {
        Self {
            inner: ulid,
            _marker: PhantomData,
        }
    }

    pub fn as_ulid(&self) -> Ulid {
        self.inner
    }

    pub fn timestamp_ms(&self) -> u64 {
        self.inner.timestamp_ms()
    }
}

impl<T> Default for Id<T> {
    fn default() -> Self {
        Self::new()
    }
}

impl<T> fmt::Debug for Id<T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.inner)
    }
}

impl<T> fmt::Display for Id<T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.inner)
    }
}

impl<T> Serialize for Id<T> {
    fn serialize<S: serde::Serializer>(&self, serializer: S) -> std::result::Result<S::Ok, S::Error> {
        self.inner.to_string().serialize(serializer)
    }
}

impl<'de, T> Deserialize<'de> for Id<T> {
    fn deserialize<D: serde::Deserializer<'de>>(deserializer: D) -> std::result::Result<Self, D::Error> {
        let s = String::deserialize(deserializer)?;
        let ulid = Ulid::from_str(&s).map_err(serde::de::Error::custom)?;
        Ok(Self::from_ulid(ulid))
    }
}

impl<T: Eq + PartialEq> PartialOrd for Id<T> {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.inner.cmp(&other.inner))
    }
}

impl<T: Eq> Ord for Id<T> {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.inner.cmp(&other.inner)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // Dummy marker type for testing.
    #[derive(Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord)]
    struct TestMarker;

    #[test]
    fn ids_are_unique() {
        let a = Id::<TestMarker>::new();
        let b = Id::<TestMarker>::new();
        assert_ne!(a, b);
    }

    #[test]
    fn roundtrip_serde_json() {
        let id = Id::<TestMarker>::new();
        let json = serde_json::to_string(&id).unwrap();
        let back: Id<TestMarker> = serde_json::from_str(&json).unwrap();
        assert_eq!(id, back);
    }

    #[test]
    fn ordering_is_monotonic() {
        let a = Id::<TestMarker>::new();
        std::thread::sleep(std::time::Duration::from_millis(1));
        let b = Id::<TestMarker>::new();
        assert!(a < b);
    }
}
