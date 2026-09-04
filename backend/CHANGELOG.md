# Go backend change log

## Unreleased

- Rebased the backend integration onto RC114 and verified the new Trichomycetes extension resource is delivered byte-for-byte.

## 2026-09-04 — protocol v1 foundation

- Added an independent Go HTTP backend under `backend/` on `feat/go-backend`.
- Added release/capability discovery, canonical entity/profile/evidence queries, COL26.8 routed name and hierarchy queries, package/scene/map indexes, byte-preserving resources and resumable full-profile sync.
- Added lazy SHA-256 ETags, HTTP range handling, bounded shard caching and an atomic deterministic inventory builder.
- Added real-RC113 functional tests and a benchmark protocol. No public deployment URL, cloud resource, credential, CI action or additional scientific content was introduced.
