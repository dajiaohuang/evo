# ITIS Kinorhyncha TSN sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-kinorhyncha-sidecar.json` is a small, deterministic descriptor for a release-pinned exact-name crosswalk between the strict COL26.8 Kinorhyncha partition and the official ITIS monthly SQLite export `itisSqlite082626`. Its row payloads are deterministic JSONL gzip shards beside the descriptor.

The scope is all 362 COL26.8 records with `rank=species`, `status=accepted`, and exact ancestor usage ID `B8VF5` (`Kinorhyncha Reinhard, 1885`). ITIS is queried below valid phylum TSN `59467` (`Kinorhyncha`). It records 91 exact current-name links, one official synonym redirect, no ambiguities, and 270 explicit unmatched COL records. Fifty-eight current ITIS species without exact COL evidence remain in a distinct null-COL partition.

Matching removes an authorship suffix only when it exactly equals the separate COL authorship field, then applies only Unicode NFC, whitespace and standard subgenus representation normalization. It accepts a unique current ITIS species name or a unique official ITIS `synonym_links` redirect. It never uses fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching. `colUsageId` ranges are Unicode code-unit ordered, inclusive and non-overlapping; a species detail lookup selects at most one row shard.

The sidecar is CC0 nomenclatural identifier/status data, not a global kinorhynch checklist, final classification authority, species-concept equivalence assertion, biological dossier, phylogeny or review decision. The delivery contract is deliberately split: GitHub Pages may publish only the descriptor and canonical checksums (`web-light`), while Android and iOS must carry the descriptor and every row shard byte-for-byte (`native-full`).

To reproduce, obtain the official ITIS archive, verify its pinned ZIP/database checksums in `data/sources/itis-2026-08-26.json`, extract it outside the repository, then run:

```bash
node scripts/build-itis-kinorhyncha-sidecar.mjs --itis-sqlite /absolute/path/to/itisSqlite082626/ITIS.sqlite
```
