# ITIS Chelicerata exact nomenclatural sidecar

This is a release-pinned identifier crosswalk, not a global chelicerate checklist, final classification authority, phylogeny, species-concept equivalence claim, biological dossier, or scientific review. It deliberately does not replace the source-linked fossil and phylogenetic evidence in the mixed **Trilobites and Chelicerates** package.

## Authority and fixed inputs

The [Integrated Taxonomic Information System (ITIS)](https://www.itis.gov/) complete database is available under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). The import uses only ITIS nomenclatural identifiers and status fields from the official monthly SQLite export, not linked third-party material.

| Input | Fixed identity |
| --- | --- |
| ITIS export | `itisSqlite082626`, export date 2026-08-26 |
| Official ZIP SHA-256 | `9df7e8d9f44a1b814922bfe2ba5e99ad83d29c5ffb87fa4fa679dd49b374f4fe` |
| Extracted SQLite SHA-256 | `ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719` |
| ITIS root | valid Subphylum `Chelicerata`, TSN `82697` |
| Catalogue of Life input | COL26.8 (2026-08-20), CC BY 4.0, registry manifest SHA-256 `8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151` |

ITIS is suitable here only as an explicitly limited, CC0, dated nomenclatural source. Its known update schedule and taxonomic scope differences from Catalogue of Life are preserved by keeping ambiguous and unmatched records rather than forcing a match.

## Exact scope and results

The package contains two exact COL26.8 roots. The sidecar covers only the living Chelicerata root `KZWYC`; extinct Trilobita is intentionally non-applicable because the current ITIS database has no Trilobita authority branch.

| Partition | Strict accepted species |
| --- | ---: |
| Package total | 104,126 |
| Chelicerata (`KZWYC`), sidecar scope | 99,511 |
| Trilobita (`TRL`), explicitly non-applicable | 4,615 |

The current ITIS Chelicerata subtree contains 80,938 valid species and 10,036 official species-rank synonym links. Strict exact matching yields 74,948 direct accepted-name rows, 146 synonym-to-current-name redirects, 141 ambiguous rows, and 24,276 unmatched COL rows. The upstream-only partition retains 5,714 current ITIS species with no strict COL accepted-name or official synonym resolution.

`itis-chelicerata-sidecar.json` is the small Web-light descriptor. It has 16 deterministic, non-overlapping `colUsageId`-range JSONL/gzip shards plus one ITIS-only shard; a single detail query binary-searches the descriptor and loads at most one range shard. Pages may keep the descriptor only. Android and iOS complete-data profiles must include every listed shard as the same checksum-addressed bytes.

## Rebuild

Download and verify the official ITIS monthly export using the checksums in [`data/sources/itis-2026-08-26.json`](../data/sources/itis-2026-08-26.json), then run:

```bash
node scripts/build-itis-chelicerata-sidecar.mjs --itis-sqlite /absolute/path/to/ITIS.sqlite
```

The generator verifies the pinned SQLite and COL registry checksums, exact root identities, maximum ITIS update dates, complete scope partition, fixed representation-only normalization, shard ordering, and deterministic gzip output. It does not use fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, or taxon-substituted matching.
