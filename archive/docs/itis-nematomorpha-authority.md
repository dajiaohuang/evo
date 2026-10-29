# ITIS Nematomorpha authority sidecar

This release-pinned sidecar provides the complete strict accepted-species
partition for the COL26.8 `Nematomorpha` root (`5B`) in the mixed
`other-animals` resource pack.

## Pinned inputs

- Catalogue of Life: COL26.8, released 2026-08-20; 356 strict accepted species
  below `Nematomorpha`.
- ITIS: official SQLite export `itisSqlite082626`, dated 2026-08-26, with the
  valid `Nematomorpha` phylum root TSN `64183`.
- License: ITIS-produced nomenclatural fields are CC0 1.0. The download,
  database and registry checksums are recorded in the import ledger.

## Matching and delivery

The generator removes only the exact COL authorship suffix, applies Unicode
NFC/whitespace normalization and the established parenthesized-subgenus
representation rule. It then matches exact names against valid ITIS species
and official species-synonym links. No fuzzy, edit-distance, phonetic,
diacritic-stripping or taxon-substitution matching is used.

The 356 COL rows contain 187 exact accepted matches, six official
synonym-current-name redirects and 163 explicit unmatched rows. ITIS has 238
current species in the pinned `Nematomorpha` subtree; 48 have no strict COL
name or synonym evidence and remain in a separate explicit ITIS-only shard.
The deterministic JSONL gzip shards are included in Android and iOS
native-full builds. GitHub Pages retains only the descriptor and checksums as
its lightweight summary.

The sidecar is a nomenclatural identifier crosswalk. It is not a final
classification authority, species-concept equivalence claim, phylogeny,
biological dossier, fossil record or scientific-review record.

Regenerate with:

```bash
node scripts/build-itis-nematomorpha-sidecar.mjs --itis-sqlite <verified-ITIS.sqlite>
```
