# ITIS Orthonectida authority sidecar

This release-pinned sidecar covers the strict accepted Orthonectida partition in Catalogue of Life `COL26.8` (issued 2026-08-20, root `CVJLH`) and links it to the official ITIS monthly SQLite export `itisSqlite082626` (2026-08-26, root TSN `57409`, DOI `10.5066/F7KH0KBK`, CC0 1.0).

| Partition | COL accepted | Exact accepted | Official redirect | Ambiguous | Unmatched | ITIS current | ITIS-only |
|---|---:|---:|---:|---:|---:|---:|---:|
| Orthonectida | 24 | 22 | 0 | 0 | 2 | 25 | 3 |

The two unmatched COL names (`Intoshia major` and `Rhopalura gigas`) remain explicit outcomes because the pinned ITIS export has no exact valid name or official species-synonym evidence for them. The three ITIS-only current species remain in a separate null-COL-ownership shard; they are not silently presented as COL members.

Matching is representation-only: remove the exact trailing COL authorship field, normalize Unicode to NFC, replace underscores with spaces, collapse whitespace, and remove one parenthesized subgenus token in the exact species representation. Case, diacritics, punctuation, genus and epithet remain significant. No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or higher-taxon matching is used.

The descriptor and deterministic JSONL-gzip shards are under `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`; the import ledger is `data/sources/itis-orthonectida-sidecar-import-ledger.json`. GitHub Pages may publish the descriptor and hashes only. Android and iOS native-full inventories must include the descriptor and both listed shards byte-for-byte.

The sidecar is a nomenclatural crosswalk, not a global orthonectid checklist, final classification authority, phylogeny, species-concept equivalence assertion, biological dossier, fossil record or scientific-review record. The generator is reproducible with the pinned ITIS database and a verified COL registry:

```text
node scripts/build-itis-orthonectida-sidecar.mjs \
  --itis-sqlite <verified>/itisSqlite082626/ITIS.sqlite
```
