# Glaucophyta ITIS authority sidecar

This release-pinned sidecar retains the complete current-species inventory
below the accepted ITIS Glaucophyta division (TSN `846495`) from the official
monthly SQLite export `itisSqlite082626` (2026-08-26). It is a nomenclatural
inventory, not a global glaucophyte checklist, a final classification
authority, a phylogeny, a biological dossier, or evidence that ITIS and
Catalogue of Life use identical species concepts.

## Explicit boundary

The complete COL26.8 hierarchy has no exact usage node named `Glaucophyta`.
Although the operational Protists and Chromists resource pack covers the exact
COL kingdom roots Chromista (`C`) and Protozoa (`Z`), this release does not
infer a Glaucophyta subset from individual-name overlap or from another
classification. It therefore contains zero COL rows, zero forced matches, and
one complete ITIS-only current-species shard. A later pinned COL release with
an exact auditable Glaucophyta root must be reassessed explicitly.

The ITIS root is an accepted division. Recursive selection follows only
accepted descendants and accepts only accepted species. The four retained
species are `Gloeochaete wittrockiana` (TSN `822`), `Glaucocystis
nostochinearum` (TSN `6005`), `Glaucocystis duplex` (TSN `6006`), and
`Glaucocystis oocystiformis` (TSN `6007`). No species-level synonym links were
present in this pinned partition.

## Reproducibility and delivery

`scripts/build-itis-glaucophyta-sidecar.mjs` verifies the pinned ITIS SQLite
checksum, fixed COL registry manifest and package-ownership projection. Its
ledger pins inputs, the SQL-derived root statistics, the explicit absence of a
COL Glaucophyta node, generator checksum and output checksums. The gzip member
is deterministic and ordered by ITIS TSN.

GitHub Pages publishes only the descriptor and hash inventory. Android and iOS
native-full inventories include the descriptor and the complete ITIS-only gzip
member byte-for-byte.

Source: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0. Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
