# ITIS Onychophora TSN sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-onychophora-sidecar.json` is the deterministic, release-pinned exact-name crosswalk between the strict COL26.8 Onychophora partition and the official ITIS monthly SQLite export `itisSqlite082626`.

The scope is all 235 accepted COL26.8 species below `BV844` (`Onychophora Grube, 1850`). ITIS is queried only below its valid phylum TSN `1217461`. All 235 rows resolve through one exact current-name link; there are no redirects, ambiguous outcomes, unmatched COL species, or ITIS-only valid current species.

Matching removes only an exact trailing COL authorship suffix and then applies Unicode NFC, whitespace, and standard parenthesized-subgenus representation normalization. It never uses fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching. The single immutable gzip shard is Unicode-code-unit ordered by `colUsageId` and checksum-addressed.

The CC0 sidecar is nomenclatural identifier/status data, not a global velvet-worm checklist, final classification authority, species-concept equivalence assertion, biological dossier, phylogeny, or scientific review. GitHub Pages may retain only the descriptor and canonical checksums (`web-light`); Android and iOS must carry the descriptor and all row payloads byte-for-byte (`native-full`).

To reproduce, verify the official ITIS archive against `data/sources/itis-2026-08-26.json`, extract it outside the repository, and run:

```bash
node scripts/build-itis-onychophora-sidecar.mjs --itis-sqlite /absolute/path/to/itisSqlite082626/ITIS.sqlite
```
