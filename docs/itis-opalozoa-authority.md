# Opalozoa ITIS/COL authority boundary

This release-pinned sidecar is an exact-root boundary audit for the Protists
and Chromists package (`COL26.8`, release `2026-08-20`). It does not assert a
global Opalozoa checklist, a final classification authority, a phylogeny,
species-concept equivalence, a biological dossier or scientific review.

## Explicit boundary

The complete COL26.8 hierarchy has no usage node whose scientific name is
exactly `Opalozoa`. The pinned ITIS SQLite export dated 2026-08-26 likewise
has no exact `Opalozoa` name. It contains `Opalinata` (TSN `43846`, class,
valid), a nearby historical/related name rather than an exact root for this
request. It is recorded as audit evidence and deliberately not substituted.
Consequently this sidecar has zero COL rows, zero ITIS-only rows and one
explicit empty upstream shard; no package-wide name search or neighboring
taxon is used to manufacture coverage. The overlap audit records no rows or
TSNs overlapping the other protist/chromist sidecar scopes inspected for this
release.

## Reproducibility and delivery

`scripts/build-itis-opalozoa-sidecar.mjs` verifies the pinned ITIS database
checksum, COL hierarchy manifest, Protists and Chromists ownership projection,
exact-root absence, nearby-root evidence and output checksums. Its ledger
records the empty result, overlap audit and generator checksum. The empty gzip
member is deterministic and retained so native-full manifests have a stable,
explicit address even though there are no non-empty authoritative rows.

Pages needs only the descriptor summary. Android and iOS native-full builds
retain the descriptor and the listed empty shard byte-for-byte; there are no
non-empty rows to include.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
