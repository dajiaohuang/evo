# ITIS Labyrinthulomycetes zero-root audit

This release-pinned sidecar audits the named `Labyrinthulomycetes` scope against
Catalogue of Life `COL26.8` (2026-08-20) and the ITIS SQLite export
`itisSqlite082626` (2026-08-26). Both snapshots lack an exact root with that
name, so the sidecar deliberately contains zero crosswalk rows and zero
ITIS-only rows. This is a missing-root result, not a claim that the lineage has
no species.

## Why the nearby name is not narrowed in

COL does contain accepted class `Labyrinthulea` (`DJ`), but it is directly below
Bigyra (`622CB`) and is therefore already inside the existing Bigyra authority
partition. ITIS also contains a `Labyrinthulea` class (TSN `46076`), but places
it below `Mycetozoa` (TSN `46067`). Those non-identical neighbouring lineages
are recorded as boundary evidence, not substituted taxonomic roots. Reusing the
COL class would duplicate Bigyra; neither nearby candidate intersects the
Ochrophyta or narrowed Oomycota partitions.

The sidecar is an exact nomenclatural boundary audit only. It is not a global
checklist, final classification authority, phylogeny, biological dossier,
species-concept equivalence assertion or scientific-review record.

## Reproduction and delivery

Run with the verified ITIS SQLite file and the pinned COL registry:

```text
node scripts/build-itis-labyrinthulomycetes-sidecar.mjs \
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

The generator fails closed if an exact root appears, the nearby boundary moves,
or the package ownership changes. GitHub Pages receives only the descriptor
summary. Android and iOS `native-full` inventories include the descriptor plus
both explicit empty checksum-addressed shards.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
