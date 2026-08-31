# Dinoflagellata ITIS authority sidecar

This release-pinned sidecar records the exact nomenclatural crosswalk between
the strict accepted Dinophyceae (Dinoflagellata) species in Catalogue of Life
`COL26.8` (issued 2026-08-20) and the official ITIS monthly SQLite export
`itisSqlite082626` (2026-08-26). It is an identifier/status layer, not a
complete biological species account, a final classification authority, a
phylogeny, or evidence that the two sources use identical species concepts.

## Audited scope

COL26.8 contains 259 strict accepted species below the exact class node
`622D3` (Dinophyceae, the COL representation of Dinoflagellata), all assigned
by the deterministic ownership projection to the `protists-chromists`
nomenclatural resource pack. The pinned ITIS root is accepted class TSN `9874`
(Dinophyceae), with 912 current species and 149 species-level synonym links to
those current species.

The exact representation-only crosswalk produces 60 direct accepted-name
matches, 2 synonym-to-current-name redirects, 0 ambiguous matches and 197
unmatched COL names. All 912 ITIS current species are partitioned: 851 are
explicitly retained as ITIS-only current species because no strict COL name or
official ITIS species synonym resolves to them. Unmatched and ITIS-only rows
are retained rather than forced into a false equivalence.

## Reproducibility

`scripts/build-itis-dinoflagellata-sidecar.mjs` verifies the official ITIS
SQLite SHA-256 recorded in `data/sources/itis-2026-08-26.json`, the fixed COL
registry manifest, and the package ownership projection. It runs exact
recursive descendant SQL for accepted ITIS TSN `9874`, imports only
ITIS-produced nomenclatural fields, removes only the exact COL authorship
suffix, and applies NFC/whitespace/subgenus representation normalization.
Matching is exact; fuzzy, edit-distance, phonetic, case-folded,
diacritic-stripped, token-reordered and higher-taxon matching are prohibited.

The import ledger at
`data/sources/itis-dinoflagellata-sidecar-import-ledger.json` pins every input
checksum, SQL-derived scope statistic, output checksum and generator checksum.
The 259 COL rows are in one deterministic non-overlapping `colUsageId` range
shard. The 851-record ITIS-only partition is a separate immutable gzip shard.

## Delivery boundary

GitHub Pages uses the descriptor and hash inventory only (`web-light`); it does
not publish row-level sidecar shards. Android and iOS `native-full` builds must
include the descriptor and both listed gzip files byte-for-byte.

Source: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0. Catalogue of
Life: `COL26.8`, ChecklistBank dataset `316115`, DOI
[`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY 4.0.
