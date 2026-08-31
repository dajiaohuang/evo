# ITIS Amoebozoa boundary sidecar

This release-pinned sidecar covers the strict accepted-species Amoebozoa
partition in Catalogue of Life `COL26.8` (release date `2026-08-20`). The
exact COL root is usage ID `622B2`, and the frozen partition contains 1,337
species.

## Explicit ITIS boundary

The official ITIS SQLite export `itisSqlite082626` (2026-08-26) has no exact
`Amoebozoa` root. It does contain narrower or differently scoped names such as
`Amoebida`, but none is a safe substitute for the COL phylum root. The sidecar
therefore keeps all 1,337 COL rows explicitly `unmatched`, with no inferred
ITIS identifier and no ITIS-only rows. The generator fails closed if a future
ITIS export gains an exact `Amoebozoa` name, requiring a fresh scope audit.

This is an exact release-boundary audit, not a global amoebozoan checklist, a
final classification authority, a phylogeny, a species-concept equivalence
claim, a biological dossier or a scientific-review record.

## Reproduction and delivery

Run the generator with the verified ITIS database and the pinned
Protists-and-Chromists resource pack:

```text
node scripts/build-itis-amoebozoa-sidecar.mjs \
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

The generator audits the complete COL hierarchy, exact package ownership,
ITIS release/database hashes and the absence of an exact ITIS root. JSONL gzip
is deterministic and ordered by COL usage ID. GitHub Pages receives only the
descriptor summary; Android and iOS `native-full` inventories include every
listed authority shard byte-for-byte, including the explicit empty ITIS-only
partition.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.

