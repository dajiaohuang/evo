# ITIS Gnathostomulida sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-gnathostomulida-sidecar.json` is a release-pinned descriptor for the exact nomenclatural crosswalk between the 100 strict accepted COL26.8 species descending from `Gnathostomulida` usage ID `B8VF3` and the official ITIS SQLite export `itisSqlite082626`. The corresponding row payloads are deterministic JSONL gzip shards beside the descriptor.

The ITIS boundary is valid phylum TSN `57405` (`Gnathostomulida`). The generated sidecar contains 90 direct current-name matches, 10 explicit unmatched COL names, no synonym redirects and no ambiguous matches. Four valid ITIS current species have no exact COL evidence and are retained in the separate `itis-gnathostomulida-upstream-only-0000.jsonl.gz` partition with `colUsageId: null`.

Matching removes only an exactly supplied COL authorship suffix and applies representation-only NFC, whitespace and one-parenthesized-subgenus normalization. It does not use fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching. The descriptor records byte hashes and an inclusive, non-overlapping `colUsageId` locator; a detail lookup loads one immutable shard.

This CC0 ITIS sidecar is a nomenclatural identifier/status crosswalk, not a final classification authority, species-concept equivalence assertion, biological dossier, phylogeny or scientific-review record. Pages may ship only the small descriptor; Android and iOS full-data builds must ship the descriptor and every listed row shard byte-for-byte. The sidecar itself does not alter runtime or release manifests.
