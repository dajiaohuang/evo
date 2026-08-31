# Chlorophyta ITIS authority sidecar

This release-pinned sidecar retains all 1,416 current accepted species below
the exact ITIS **Division** Chlorophyta (TSN `5414`) from the official monthly
SQLite export `itisSqlite082626` (2026-08-26). It is an ITIS nomenclatural
inventory, not a global green-algae checklist, a final classification
authority, a phylogeny, a species-concept equivalence assertion, a biological
dossier, or a scientific-review record.

## Exact boundary and resource-pack ownership

COL26.8 has no exact hierarchy usage node named `Chlorophyta`. No broader
plant descendant closure, individual-name search, or nearby `Viridiplantae`
record is substituted for that missing root. The separate ITIS
**Infrakingdom** Chlorophyta (TSN `846493`) is broader than the selected ITIS
division and is deliberately not used.

The rows belong to the **Protists and Chromists** resource pack, whose fixed
COL owner roots are Chromista (`C`) and Protozoa (`Z`), because this sidecar
describes an exact algal division with no materialized COL plant partition.
It does not repeat, copy, query, or rematch the WFO Plant List 2026-06
crosswalk: that pre-existing resource is a separate plant-wide COL crosswalk,
not a Chlorophyta-root authority.

The generation audit compares the selected ITIS descendant set with the exact
scopes already represented or in this RC69 batch: Apicomplexa, Bigyra,
Cercozoa, Ciliophora, Dinophyceae, Euglenophycota, Haptophyta, Ochrophyta,
the selected Oomycota orders, Radiolaria, and Rhodophyta. Every comparison has
zero overlapping TSNs. There are no Chlorophyta COL usage IDs, so the COL-ID
overlap set is also empty.

## Reproducibility and delivery

`scripts/build-itis-chlorophyta-sidecar.mjs` verifies the pinned ITIS SQLite
checksum, source update dates, full COL hierarchy absence, fixed package
ownership, WFO boundary ledger, and the audited scope disjointness before it
writes deterministically ordered gzip bytes. The import ledger records the
input, generator, descriptor and shard checksums.

GitHub Pages publishes only the small descriptor and hash inventory. Android
and iOS native-full inventories include the descriptor plus the complete
ITIS-only JSONL gzip member byte-for-byte.

Source: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0. Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0. The WFO boundary ledger is cited only to prevent crosswalk duplication;
no WFO row is included in this sidecar.
