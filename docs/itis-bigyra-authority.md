# ITIS Bigyra exact-root sidecar

This release-pinned sidecar covers the strict accepted-species Bigyra partition
in Catalogue of Life `COL26.8` (release date `2026-08-20`). The exact COL root
is phylum usage ID `622CB`, and the frozen partition contains 53 species.

## Explicit species boundary

The official ITIS SQLite export `itisSqlite082626` (2026-08-26) contains the
exact accepted `Bigyra` division, TSN `969916`. Its complete accepted-descendant
species and species-synonym partitions are both empty. This is therefore not an
identifier match: all 53 COL rows remain explicitly `unmatched`, no ITIS-only
rows are asserted, and the generator fails closed if that selected ITIS partition
ever becomes non-empty. It never substitutes narrower, broader or nearby taxa.

This is an exact release-boundary audit, not a global bigyran checklist, a final
classification authority, a phylogeny, a species-concept equivalence claim, a
biological dossier or a scientific-review record.

## Reproduction and delivery

Run the generator with the verified ITIS database and the pinned
Protists-and-Chromists resource pack:

```text
node scripts/build-itis-bigyra-sidecar.mjs \
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

The generator audits the complete COL hierarchy, exact package ownership, the
ITIS release/database hashes, exact roots, and the empty selected ITIS species
partition. JSONL gzip is deterministic and ordered by COL usage ID. GitHub Pages
receives only the descriptor summary; Android and iOS `native-full` inventories
include every listed authority shard byte-for-byte, including the explicit empty
ITIS-only partition.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
