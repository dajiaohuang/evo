# Ciliophora ITIS authority sidecar

This release-pinned sidecar records the exact nomenclatural crosswalk between
the strict accepted Ciliophora species in Catalogue of Life `COL26.8` (issued
2026-08-20) and the official ITIS monthly SQLite export `itisSqlite082626`
(2026-08-26). It is an identifier/status layer, not a complete biological
species account, a final classification authority, a phylogeny, or evidence
that the two sources use identical species concepts.

## Audited scope

COL26.8 contains 8,507 strict accepted species below the exact phylum node
`3H` (Ciliophora), all assigned by the deterministic ownership projection to
the mixed `protists-chromists` package. The pinned ITIS root is valid phylum TSN
`46211` (Ciliophora), with 410 current species and 16 species-level synonym
links to those current species.

The exact representation-only crosswalk produces 246 direct accepted-name
matches, 6 synonym-to-current-name redirects, 0 ambiguous matches and 8,255
unmatched COL names. All 410 ITIS current species are partitioned: 158 are
explicitly retained as ITIS-only current species because no strict COL name or
official ITIS species synonym resolves to them. Unmatched and ITIS-only rows
are retained rather than forced into a false equivalence.

## Reproducibility

`scripts/build-itis-ciliophora-sidecar.mjs` verifies the official ITIS SQLite
SHA-256 recorded in `data/sources/itis-2026-08-26.json`, the fixed COL registry
manifest, and the package ownership projection. It runs exact recursive
descendant SQL for TSN `46211`, imports only ITIS-produced nomenclatural fields,
removes only the exact COL authorship suffix, and applies NFC/whitespace/
subgenus representation normalization. Matching is exact; fuzzy, edit-distance,
phonetic, case-folded, diacritic-stripped, token-reordered and higher-taxon
matching are prohibited.

The import ledger at
`data/sources/itis-ciliophora-sidecar-import-ledger.json` pins every input
checksum, SQL-derived scope statistic, output checksum and generator checksum.
The 8,507 COL rows are split into three deterministic non-overlapping
`colUsageId` range shards. The 158-record ITIS-only partition is a separate
immutable gzip shard.

## Delivery boundary

GitHub Pages uses the descriptor and hash inventory only (`web-light`); it does
not publish row-level sidecar shards. Android and iOS `native-full` builds must
include the descriptor and all four listed gzip files byte-for-byte.

Source: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0. Catalogue of
Life: `COL26.8`, ChecklistBank dataset `316115`, DOI
[`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY 4.0.
