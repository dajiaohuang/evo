# Radiolaria ITIS/COL authority boundary

This release-pinned sidecar is an exact-root boundary audit for the Protists
and Chromists package (`COL26.8`, release `2026-08-20`). It does not assert a
global Radiolaria checklist, a final classification authority, a phylogeny,
species-concept equivalence, a biological dossier or scientific review.

## Explicit boundary

The complete COL26.8 hierarchy has no usage node whose scientific name is
exactly `Radiolaria`, so this release has no defensible strict COL Radiolaria
partition. The pinned ITIS SQLite export dated 2026-08-26 has no *accepted*
exact Radiolaria root. It retains one exact-name legacy `valid` order,
Radiolaria (TSN `46088`), in the historical `Protozoa` → `Mycetozoa` →
`Labyrinthulea` → `Piroplasmia` placement. That order has one valid family
descendant and zero accepted species descendants, so it is not promoted into a
modern authority root.

ITIS also has accepted `Rhizaria` (TSN `969913`, infrakingdom). It is recorded
as a nearby modern classification candidate only: using it as a Radiolaria
replacement would broaden the declared scope and overlap unrelated named
partitions such as Cercozoa, Foraminifera, Bigyra, Ochrophyta and Oomycota.
No near lineage, package-wide search or taxon substitution is used. The result
is therefore zero COL rows, zero ITIS-only rows and one explicit empty upstream
shard. The recorded partition audit covers every current/in-flight named
Protists and Chromists sidecar, including Perkinsozoa and Labyrinthulomycetes:
with no Radiolaria COL IDs or accepted ITIS current-species TSNs, both overlap
counts are zero.

## Reproducibility and delivery

`scripts/build-itis-radiolaria-sidecar.mjs` verifies the pinned ITIS database
checksum, complete COL hierarchy, Protists and Chromists ownership projection,
the exact-name legacy lineage, the absence of an accepted exact root and the
deterministic output checksums. Its ledger keeps the legacy lineage and the
nearby accepted Rhizaria record as boundary evidence.

Pages needs only the descriptor summary. Android and iOS native-full builds
retain the descriptor and listed empty shard byte-for-byte; there are no
non-empty authoritative rows to include.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
