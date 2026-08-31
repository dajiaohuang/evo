# ITIS Echinodermata exact nomenclatural sidecar

This is a release-pinned identifier crosswalk, not a global echinoderm checklist, final classification authority, phylogeny, species-concept equivalence claim, biological dossier, or scientific review. It complements the existing Echinoderms rich package and deliberately keeps uncertain identity outcomes visible.

## Authority and fixed inputs

The [Integrated Taxonomic Information System (ITIS)](https://www.itis.gov/) complete database is available under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). The import uses only ITIS nomenclatural identifiers and status fields from the official monthly SQLite export, not linked third-party material.

| Input | Fixed identity |
| --- | --- |
| ITIS export | `itisSqlite082626`, export date 2026-08-26 |
| Official ZIP SHA-256 | `9df7e8d9f44a1b814922bfe2ba5e99ad83d29c5ffb87fa4fa679dd49b374f4fe` |
| Extracted SQLite SHA-256 | `ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719` |
| ITIS root | valid Phylum `Echinodermata`, TSN `156857` |
| Catalogue of Life input | COL26.8 (2026-08-20), CC BY 4.0, registry manifest SHA-256 pinned in the import ledger |

ITIS is suitable here only as an explicitly limited, CC0, dated nomenclatural source. Its update schedule and taxonomic scope differences from Catalogue of Life are preserved by retaining ambiguous and unmatched records rather than forcing a match.

## Exact scope and results

The sidecar covers the complete strict accepted COL26.8 `CHN` Echinodermata root and no other COL root.

| Partition | Records |
| --- | ---: |
| Strict accepted COL26.8 species | 11,891 |
| Direct current-name matches | 3,692 |
| Exact species-synonym redirects | 51 |
| Explicit ambiguous outcomes | 9 |
| Unmatched outcomes | 8,139 |
| ITIS-only current species, null COL ownership | 278 |

`itis-echinodermata-sidecar.json` is the small descriptor. It has two deterministic, non-overlapping `colUsageId`-range JSONL/gzip shards plus one ITIS-only shard; a future detail query can binary-search the descriptor and load at most one range shard. Pages-light may keep the descriptor and canonical hashes only. Android and iOS complete-data profiles must include every listed shard as the same checksum-addressed bytes.

## Rebuild

Download and verify the official ITIS monthly export using the checksums in [`data/sources/itis-2026-08-26.json`](../data/sources/itis-2026-08-26.json), then run:

```bash
node scripts/build-itis-echinodermata-sidecars.mjs --itis-sqlite /absolute/path/to/ITIS.sqlite
```

The generator verifies the pinned SQLite and COL registry checksums, exact root identity, maximum ITIS update dates, complete scope partition, fixed representation-only normalization, shard ordering, and deterministic gzip output. It does not use fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, authority-only, or higher-rank matching.
