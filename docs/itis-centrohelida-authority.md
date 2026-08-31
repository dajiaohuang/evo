# Centrohelida ITIS/COL authority boundary

This release-pinned sidecar is an exact-root boundary audit for the Protists
and Chromists package (`COL26.8`, release `2026-08-20`). It does not assert a
global Centrohelida checklist, a final classification authority, a phylogeny,
species-concept equivalence, a biological dossier or scientific review.

## Explicit boundary

The complete COL26.8 hierarchy has no usage node named exactly `Centrohelida`,
so this release has no strict COL Centrohelida partition. The pinned ITIS
SQLite export dated 2026-08-26 likewise has no *accepted* exact root. It has
one exact-name `valid` order, Centrohelida (TSN `46126`), in the historical
`Protozoa` → `Mycetozoa` → `Acanthophractida` → `Heliozoa` placement.

That legacy order has five `valid` species descendants and no `accepted`
species descendants. The sidecar preserves the exact lineage and all five
legacy species records as audit evidence, but does not promote them to an
accepted-current authority partition or an ITIS-only list. No nearby taxon,
broader Protozoa search or package-wide matching is used. The result is zero
COL rows, zero ITIS-only rows and one explicit empty native-full shard. Its
descriptor inventories every observed existing or in-flight Protists and
Chromists ITIS sidecar; the empty COL-ID and accepted-current TSN sets are
disjoint from every one of them.

## Reproducibility and delivery

Run the generator with the verified ITIS database:

```text
node scripts/build-itis-centrohelida-sidecar.mjs \
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

The generator verifies the pinned database hash, complete COL hierarchy,
Protists-and-Chromists ownership projection, exact root/lineage/species audit,
observed-sidecar inventory and deterministic output checksums. Pages needs only
the descriptor summary. Android and iOS native-full builds retain the
descriptor and explicit empty shard byte-for-byte; no accepted-current
authoritative rows are omitted.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
