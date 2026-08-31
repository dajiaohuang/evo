# Katablepharidota ITIS/COL authority boundary

This release-pinned sidecar is an exact-root boundary audit for the Protists
and Chromists package (`COL26.8`, release `2026-08-20`). It does not claim a
global Katablepharidota checklist, a final classification authority, a
phylogeny, species-concept equivalence, a biological dossier or scientific
review.

## Explicit boundary

The complete COL26.8 hierarchy has no usage node whose scientific name is
exactly `Katablepharidota`. The pinned ITIS SQLite export dated `2026-08-26`
also has no exact `Katablepharidota` name, and no exact-name audit candidate
`Katablepharidophyta`, `Katablepharidophyceae`, `Katablepharidida` or
`Katablepharidales` in this export. Such spellings, if introduced by a future
authority release, remain candidates for review only; this package never
infers that they are taxonomic equivalents.

Consequently this sidecar has zero COL rows, zero ITIS-only rows and one
explicit empty upstream shard. No package-wide name search, fuzzy match,
neighboring taxon or taxonomic substitution is used to manufacture coverage.
The generator also audits existing Protists and Chromists sidecars for
duplicate COL usage IDs and ITIS TSNs across scopes; this release records no
cross-scope overlap.

## Reproducibility and delivery

`scripts/build-itis-katablepharidota-sidecar.mjs` verifies the pinned ITIS
database checksum, COL hierarchy manifest, Protists and Chromists ownership
projection, exact-root absence, exact-name candidates, cross-scope overlap
audit and output checksums. Its ledger records the empty result and generator
checksum. The empty gzip member is deterministic and retained so native-full
manifests have a stable, explicit address even though there are no
authoritative rows.

Pages needs only the descriptor summary. Android and iOS native-full builds
retain the descriptor and the listed empty shard byte-for-byte; there are no
non-empty rows to include.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
