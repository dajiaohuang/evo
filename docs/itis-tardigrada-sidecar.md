# ITIS Tardigrada TSN sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-tardigrada-sidecar.json` is a deterministic, release-pinned exact-name crosswalk between the strict COL26.8 Tardigrada ownership slice and the official ITIS monthly SQLite export `itisSqlite082626`. The row payloads are deterministic JSONL gzip shards beside it.

The scope is all 1,454 COL26.8 records with `rank=species`, `status=accepted`, and exact ancestor usage ID `L2QNW`. ITIS is queried from valid phylum TSN `155166` (`Tardigrada`) using the exact SQL retained in `scripts/build-itis-tardigrada-sidecar.mjs`. The checked-in import ledger records complete query counts, source/output hashes, the SQLite root audit and stable locator paths.

Matching only removes an exactly supplied COL authorship suffix and applies representation-only Unicode/whitespace/subgenus normalization. All 1,454 names resolve directly to one valid ITIS current species; no fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used. Current ITIS Tardigrada species with no exact COL evidence are retained in the separate seven-record upstream-only partition with `colUsageId: null` and descriptor `colOwnership: null`.

This is a CC0 nomenclatural identifier/status sidecar, not a final classification authority, species-concept equivalence assertion, biological dossier, phylogeny or review decision. The future delivery contract is declarative: Pages light may omit row shards, while Android/iOS full-data builds must copy the descriptor and all checksum-addressed shards. This change does not alter the formal runtime or release manifests.
