# ITIS Fungi authority collection

Release `2026.08-static-v5-rc76` / app `0.20.27` / Android and iOS build `30` delivers this independent collection under the split profile below.

`itis-fungi-tsn-crosswalk` is an independent, release-pinned CC0 ITIS collection for the exact ITIS Fungi kingdom root TSN `555705` and all 157,044 strict accepted COL26.8 Fungi species.

It is deliberately separate from the Species Fungorum / Index Fungorum identifier collection. An ITIS match neither changes Index Fungorum source linkage nor asserts that either source accepts the other's record.

The fixed `itisSqlite082626` export dated 2026-08-26 contains 2,714 accepted current Fungi species and 267 species synonym links. Exact comparison retains 928 current-name matches, 45 synonym-to-current redirects, one ambiguity and 156,070 unmatched COL outcomes, plus 1,761 ITIS-only current species. No fuzzy or taxon-substitution matching is allowed.

Pages publishes only the descriptor, counts and checksum-addressed canonical inventory. Android and iOS include all 57 native-full JSONL gzip shards. Rebuild with:

```bash
node scripts/build-itis-fungi-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>
```
