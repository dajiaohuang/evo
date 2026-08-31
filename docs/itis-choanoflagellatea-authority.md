# ITIS Choanoflagellatea zero-root audit

This release-pinned sidecar audits the named `Choanoflagellatea` (领鞭毛虫)
scope against Catalogue of Life `COL26.8` (2026-08-20) and the ITIS SQLite
export `itisSqlite082626` (2026-08-26).

Neither snapshot contains an exact `Choanoflagellatea` root. The COL registry
has no exact root candidate, and the ITIS export has no exact-name candidate.
ITIS does contain `Choanoflagellida` (TSN `43811`, order), but that nearby name
is recorded as evidence and is not substituted. With no defensible COL root,
the sidecar has zero COL rows, zero ITIS-only rows and two explicit empty
immutable shards. This is a zero mapping, not an assertion that the lineage
has no species.

The declared operational owner remains the full `protists-chromists` COL
package (`C`/`Z`, 61,518 strict accepted species), but its other species are
outside this sidecar. Pages needs only the descriptor summary; Android and iOS
`native-full` inventories include the descriptor and both empty shards.

Reproduce with the verified ITIS database:

```text
node scripts/build-itis-choanoflagellatea-sidecar.mjs \\
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
