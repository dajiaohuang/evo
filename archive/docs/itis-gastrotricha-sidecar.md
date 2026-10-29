# ITIS Gastrotricha TSN sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-gastrotricha-sidecar.json` is a deterministic, release-pinned exact-name crosswalk between the strict COL26.8 Gastrotricha ownership slice and the official ITIS monthly SQLite export `itisSqlite082626`. The row payloads are deterministic JSONL gzip shards beside it.

The scope is all 903 COL26.8 records with `rank=species`, `status=accepted`, and exact ancestor usage ID `B8V3M`. ITIS is queried from valid phylum TSN `57597` (`Gastrotricha`) using the exact SQL retained in `scripts/build-itis-gastrotricha-sidecar.mjs`. The checked-in import ledger records complete query counts, source/output hashes, the SQLite root audit and stable locator paths.

Strict representation-only matching yields 574 direct accepted matches, 8 synonym-to-current-name redirects, 1 ambiguous result and 320 unmatched results. No fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching is used. The 94 current ITIS Gastrotricha species with no exact COL evidence are retained in a separate upstream-only partition with `colUsageId: null` and `colOwnership: null`.

This is a CC0 nomenclatural identifier/status sidecar, not a final classification authority, species-concept equivalence assertion, biological dossier, phylogeny or review decision. Pages light may publish the descriptor without row shards; Android/iOS full-data builds must copy the descriptor and every checksum-addressed shard.
