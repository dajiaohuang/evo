# Rhodophyta ITIS authority sidecar

This release-pinned sidecar retains the complete current-species inventory
below the accepted ITIS division Rhodophyta (TSN `660046`) from the official
monthly SQLite export `itisSqlite082626` (2026-08-26). It is a nomenclatural
inventory, not a global rhodophyte checklist, a final classification authority,
a phylogeny, a biological dossier, or evidence that ITIS and Catalogue of Life
use identical species concepts.

## Explicit boundary

The complete COL26.8 hierarchy has no exact usage node named `Rhodophyta`.
Although the operational Protists and Chromists resource pack covers the exact
COL kingdom roots Chromista (`C`) and Protozoa (`Z`), it would be unsound to
infer a Rhodophyta subset from individual-name overlap or from a different
classification. This release therefore contains zero COL rows, zero forced
matches, and one complete ITIS-only current-species shard. When a later pinned
COL release supplies an exact, auditable Rhodophyta root, the generator fails
closed so the boundary must be reassessed rather than silently widened.

The ITIS root uses the accepted-status convention for this division (not the
`valid` convention used by some ITIS animal records). Recursive selection only
follows accepted descendants and only accepts accepted species. Species-level
synonym links are counted for provenance, but cannot create a COL match without
a strict COL partition.

## Reproducibility and delivery

`scripts/build-itis-rhodophyta-sidecar.mjs` verifies the pinned ITIS SQLite
checksum, fixed COL registry manifest and package-ownership projection. Its
ledger pins inputs, SQL-derived root statistics, the explicit absence of a COL
Rhodophyta node, generator checksum and output checksums. The gzip member is
deterministic and ordered by ITIS TSN.

GitHub Pages publishes only the descriptor and hash inventory. Android and iOS
native-full inventories include the descriptor and the complete ITIS-only gzip
member byte-for-byte.

Source: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0. Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
