# ITIS Phoronida TSN sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-phoronida-sidecar.json` is a release-pinned, exact-only nomenclatural crosswalk for every strict accepted COL26.8 species below the exact Phoronida root (`5P`). The upstream ITIS root is valid Phoronida, TSN `155456`, in the official monthly SQLite export `itisSqlite082626` dated 2026-08-26.

The import contains all 19 COL26.8 accepted Phoronida species. Exact representation-only normalization preserves case, diacritics and punctuation, removes only a supplied trailing COL authorship field, normalizes Unicode to NFC, collapses whitespace and removes one parenthesized subgenus token. The crosswalk produces 11 direct current-name matches and 8 official synonym-to-current-name redirects. It has zero ambiguous, unmatched or ITIS-only rows. No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, genus-substituted or higher-rank matching is used.

The 19 rows are sorted by Unicode code-unit `colUsageId` and stored in one deterministic JSONL gzip shard. Its inclusive range is `4GRZF`–`65364`; a detail lookup must select that single range. The empty ITIS-only partition is retained as a deterministic zero-row gzip file so the complete output contract remains explicit.

The source database and ZIP are not committed. `data/sources/itis-phoronida-sidecar-import-ledger.json` records the official archive checksum, database member, SQL scope audit, source/output hashes and generator checksum. To reproduce the sidecar, download the official ZIP, verify the pinned archive SHA-256 in `data/sources/itis-2026-08-26.json`, extract `ITIS.sqlite`, then run:

```bash
node scripts/build-itis-phoronida-sidecar.mjs --itis-sqlite /absolute/path/to/itisSqlite082626/ITIS.sqlite
node scripts/integrate-itis-phoronida-sidecar.mjs
```

The resource-pack manifest exposes the complete summary and canonical hashes to GitHub Pages through `web-light` but publishes no row shard there. The `native-full` profile lists both row files; Android and iOS must bundle those exact bytes. This sidecar is a nomenclatural linkage only, not a global phoronid checklist, final classification authority, species-concept equivalence assertion, biological dossier, phylogeny, fossil record or scientific-review record.
