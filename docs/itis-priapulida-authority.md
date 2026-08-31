# ITIS Priapulida authority sidecar

This release-pinned sidecar provides the complete strict accepted-species
partition for the COL26.8 `Priapulida` root (`B8VF9`) in the mixed
`other-animals` resource pack.

## Pinned inputs

- Catalogue of Life: COL26.8, released 2026-08-20; 23 strict accepted species
  below `Priapulida Théel, 1906`.
- ITIS: official SQLite export `itisSqlite082626`, dated 2026-08-26, with the
  valid `Priapula` phylum root TSN `563953`.
- License: ITIS-produced nomenclatural fields are CC0 1.0. The download,
  database and registry checksums are recorded in the import ledger.

## Matching and delivery

The generator removes only the exact COL authorship suffix, applies Unicode
NFC/whitespace normalization and the established parenthesized-subgenus
representation rule. It then matches exact names against valid ITIS species
and official species-synonym links. No fuzzy, edit-distance, phonetic,
diacritic-stripping or taxon-substitution matching is used.

The 23 COL rows contain 19 exact accepted matches and 4 explicit unmatched
rows. ITIS has 19 current species in the pinned `Priapula` subtree and no
additional current species outside the COL rows. The single deterministic
JSONL gzip shard and the empty upstream-only shard are included in Android and
iOS native-full builds. GitHub Pages may retain only the descriptor and
checksums as its lightweight summary.

The sidecar is a nomenclatural identifier crosswalk. It is not a final
classification authority, species-concept equivalence claim, phylogeny,
biological dossier, fossil record or scientific-review record.

Regenerate with:

```bash
node scripts/build-itis-priapulida-sidecar.mjs --itis-sqlite <verified-ITIS.sqlite>
```
