# Picozoa ITIS/COL authority boundary

This release-pinned sidecar records the exact boundary audit for Picozoa in
the Protists and Chromists package (`COL26.8`, release `2026-08-20`). It is a
nomenclatural data boundary, not a global species checklist, a final
classification authority, a phylogeny, a species-concept equivalence claim,
or a biological dossier.

## Result

Neither the complete COL26.8 hierarchy nor the ITIS SQLite export dated
2026-08-26 contains an exact root named `Picozoa`. The audit also checks the
nearby names `Picomonas`, `Picomonadida`, `Picomonadaceae` and `Picobio`; no
matching authority record is present in this frozen release. No neighboring
taxon or package-wide name search is substituted. The truthful result is zero
COL rows, zero ITIS-only rows and one explicit empty native-full shard.

The descriptor inventories all currently materialized protist/chromist
sidecars and records empty COL-usage/ITIS-TSN overlap sets for this scope.
This is a statement about the pinned snapshots; a future release may add an
exact root and should be regenerated through the same audit.

## Reproducibility and delivery

`scripts/build-itis-picozoa-sidecar.mjs` verifies the pinned ITIS database
checksum and update dates, the COL hierarchy manifest, package ownership,
exact-root absence, named-neighbor absence and output checksums. Its ledger
records the input hashes, current sidecar inventory, overlap audit and
generator checksum. The JSONL gzip uses deterministic compression.

GitHub Pages carries descriptor metadata only. Android and iOS native-full
inventories retain the descriptor and the explicit empty shard, so no
authoritative Picozoa row is silently omitted.

Sources: Integrated Taxonomic Information System, DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK), CC0 1.0; Catalogue of
Life `COL26.8`, DOI [`10.48580/dgywk`](https://doi.org/10.48580/dgywk), CC BY
4.0.
