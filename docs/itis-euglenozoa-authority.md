# ITIS Euglenozoa request-boundary audit

The requested `Euglenozoa` authority sidecar cannot safely be represented as a
COL26.8 crosswalk. The fixed COL26.8 `protists-chromists` package contains
61,518 strict accepted species below its operational `Chromista` (`C`) and
`Protozoa` (`Z`) browse roots, but its complete hierarchy has no exact
`Euglenozoa` or `Euglenophycota` node. ITIS monthly SQLite export
`itisSqlite082626` likewise has no `Euglenozoa` entry.

The only directly verifiable nearby ITIS root is valid phylum `Euglenophycota`
(TSN `9601`). Its complete descendant query contains 276 current species and
no species-level synonym links. The sidecar therefore deliberately contains no
COL rows, no inferred COL match and no package-wide name match. It retains the
276 valid ITIS records as an explicit null-COL ownership partition.

This boundary avoids conflating a missing COL classification node with a broad
or potentially non-equivalent group. It is not a global Euglenozoa checklist,
COL crosswalk, final classification authority, phylogeny, biological dossier or
species-concept equivalence claim.

`scripts/build-itis-euglenozoa-sidecar.mjs` checks the official ITIS SQLite
SHA-256, COL resource-pack manifest, every strict packaged species row and the
entire COL hierarchy. It fails if an exact `Euglenozoa`/`Euglenophycota` root
appears, or if ITIS gains an `Euglenozoa` entry, so a future broader sidecar
requires an explicit fresh scope decision. The ledger pins all inputs, query
counts, output checksums and the generator checksum. GitHub Pages receives only
the descriptor/hash summary; Android and iOS receive the complete immutable
gzip shard.

Sources: ITIS, DOI [`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK),
CC0 1.0; Catalogue of Life `COL26.8`, DOI
[`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY 4.0.
