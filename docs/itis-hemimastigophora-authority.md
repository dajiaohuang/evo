# ITIS Hemimastigophora exact-root boundary

This release-pinned boundary audit covers the `Hemimastigophora` name only in
the COL26.8 Protists and Chromists package (`COL26.8`, release date
`2026-08-20`). The combined package owner is the operational union of the
exact `Chromista` and `Protozoa` roots (`C`, `Z`); it does not assert a
particular kingdom or phylogenetic classification.

## Frozen result

The complete COL26.8 hierarchy contains no exact node named
`Hemimastigophora`. The official ITIS SQLite export `itisSqlite082626`
(`2026-08-26`) also contains no exact-name record. Accordingly this sidecar
claims no COL usage IDs, ITIS TSNs, accepted species, redirects, or ITIS-only
rows. It does not substitute a nearby hemimastigote, protist, chromist,
broader, narrower, or synonym taxon. The explicit empty gzip shard is retained
for native inventory parity and allows a future release to change the result
only after the generator's exact-root audit is reassessed.

This is a nomenclatural boundary audit, not a global Hemimastigophora
checklist, final classification authority, phylogeny, species-concept
equivalence claim, biological dossier, or scientific-review record.

## Reproduction and delivery

```text
node scripts/build-itis-hemimastigophora-sidecar.mjs \
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

GitHub Pages receives the descriptor summary only. Android and iOS
`native-full` inventories include the descriptor and the listed explicit
empty shard byte-for-byte, so both apps retain the same complete boundary
record even though no species rows are available.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
