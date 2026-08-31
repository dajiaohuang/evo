# ITIS Crustacea authority sidecar

This data-only import freezes the official ITIS SQLite export dated **2026-08-26** (`itisSqlite082626`) against the COL26.8 Crustacea partition. It is a nomenclatural crosswalk, not a claim that ITIS and COL use identical species concepts, and not a biological dossier or final classification authority.

## Scope audit

- COL root: `KZX8B` — `Crustacea` (subphylum); strict predicate `rank=species AND status=accepted`.
- COL records in that exact root: **80,890**.
- The enclosing `crustaceans-insects` package owns **1,049,133** accepted species across Crustacea, Insecta, Hexapoda, Myriapoda and Arthropoda routes. This sidecar owns only the 80,890 Crustacea records; the other roots are deliberately excluded.
- ITIS root: TSN **83677**, valid `Crustacea` / `Subphylum`.
- ITIS current valid species below that root: **32,493**; species-rank synonym links targeting those species: **7,762**.

The crosswalk result is **26,395 exact accepted**, **115 exact synonym-to-current redirects**, **38 ambiguous**, and **54,342 unmatched** COL records. No fuzzy, case-folded, diacritic-stripped, phonetic, token-reordered or higher-taxon matching is used. The **5,991** current ITIS species not evidenced by any COL accepted or synonym match are retained in an explicit ITIS-only upstream shard with no COL ownership ID.

## Delivery

`data/sources/itis-crustacea-authority-crosswalk-col26.8.json.gz` is the canonical compressed crosswalk. The package descriptor at `data/packages/arthropoda/crustaceans-insects/nomenclature/itis-tsn-sidecar.json` records all hashes, query scope, limitations and delivery rules. Row-level records are deterministic JSONL gzip shards addressed by non-overlapping `colUsageId` ranges; a single species lookup needs exactly one range shard. The upstream-only rows are in `itis-upstream-only-000.jsonl.gz`.

Pages may retain the small descriptor and omit row-level shards to stay within the static-host budget. Android and iOS complete-data builds must carry the descriptor and every listed shard byte-for-byte. The original ITIS ZIP and SQLite file are not committed; the source ledger records the official archive/database checksums and the exact SQL contract used to regenerate this import.

Regeneration:

```text
node scripts/build-itis-crustacea-sidecars.mjs --itis-sqlite <verified ITIS.sqlite>
```

The command refuses an unverified database, changed root/count/update-date boundary or changed COL registry input. The import is CC0-derived ITIS nomenclatural data under the source ledger's stated boundary.
