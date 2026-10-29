# Cycliophora ITIS authority sidecar

This release-pinned sidecar records the exact nomenclatural crosswalk between the strict accepted Cycliophora species in Catalogue of Life `COL26.8` (issued 2026-08-20) and the official ITIS monthly SQLite export `itisSqlite082626` (2026-08-26). It is an identifier/status layer, not a complete biological species account, a final classification authority, a phylogeny, or evidence that the two sources use identical species concepts.

## Audited scope

COL26.8 contains two strict accepted species below the exact phylum node `622CL` (Cycliophora), both assigned by the existing deterministic ownership projection to the mixed `other-animals` package:

| COL usage ID | COL name | ITIS TSN | ITIS current name | outcome |
| --- | --- | --- | --- | --- |
| `7B6TP` | *Symbion pandora* | `563986` | *Symbion pandora* | accepted |
| `7B75M` | *Symbion americanus* | `722224` | *Symbion americanus* | accepted |

The ITIS root audit found valid phylum `Cycliophora` at TSN `563958`, two current species, and zero species-level synonym links to those current species. Therefore the crosswalk totals are: 2 accepted, 0 synonym redirects, 0 ambiguous, 0 unmatched, and 0 upstream-only current species. The other 99,159 accepted species in the mixed `other-animals` remainder are explicitly non-applicable to this sidecar; that remainder must not be interpreted as Cycliophora.

## Reproducibility

`scripts/build-itis-cycliophora-sidecar.mjs` verifies the official ITIS SQLite SHA-256 recorded in `data/sources/itis-2026-08-26.json`, the fixed COL registry manifest, and the package ownership projection. It runs the exact recursive-descendant SQL for TSN `563958`, imports only `longnames`, `taxonomic_units`, `taxon_unit_types`, and `synonym_links`, removes only the exact COL authorship suffix, and applies NFC/whitespace/subgenus representation normalization. Matching is exact and case-sensitive after that representation normalization; fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered and higher-taxon matching are prohibited.

The import ledger at `data/sources/itis-cycliophora-sidecar-import-ledger.json` pins every input checksum, SQL-derived scope statistic, output checksum and generator checksum. The two COL rows are in one deterministic JSONL gzip range shard. An explicit empty upstream-only gzip shard is retained so a later ITIS-only addition cannot be confused with an omitted partition.

## Delivery boundary

GitHub Pages uses the descriptor and hash inventory only (`web-light`); it does not publish row-level sidecar shards. Android and iOS `native-full` builds must include the descriptor and both listed gzip files byte-for-byte. This sidecar does not change runtime, version, or client code until the parent release integration updates the shared manifest and mobile inventories.

Source: Integrated Taxonomic Information System, DOI [`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0. Catalogue of Life: `COL26.8`, ChecklistBank dataset `316115`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY 4.0.
