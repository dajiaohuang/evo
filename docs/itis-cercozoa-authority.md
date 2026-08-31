# ITIS Cercozoa authority sidecar

This sidecar records the exact nomenclatural comparison between the strict
accepted-species Cercozoa partition in Catalogue of Life `COL26.8` (release
date `2026-08-20`) and the dated ITIS SQLite export `itis-2026-08-26`.

## Boundary

- The CoL root is the exact accepted usage ID `35`, `Cercozoa`, under the
  `Chromista` route. It contains 52 strict accepted species in this snapshot.
- The ITIS root is the exact accepted Division `Cercozoa`, TSN `969919`.
- The pinned ITIS hierarchy has no accepted species descendants and no species
  synonym links below that root. Consequently all 52 CoL names are explicitly
  represented as `unmatched`; no broader ITIS Fungi or Myxomycota lineage is
  substituted.
- This is an exact name crosswalk, not a claim of species-concept equivalence,
  a global Cercozoa checklist, or a final classification authority.

## Reproduction

The generator requires the verified ITIS SQLite member and the committed CoL
registry snapshot:

```text
node scripts/build-itis-cercozoa-sidecar.mjs \
  --itis-sqlite /path/to/itisSqlite082626/ITIS.sqlite
```

It uses only representation-preserving exact normalization already used by the
other ITIS sidecars. It does not use fuzzy, edit-distance, phonetic,
case-folded, diacritic-stripped, token-reordered, or taxon-substituted
matching. JSONL gzip output is deterministic and addressed by SHA-256.

## Delivery

GitHub Pages may omit the row shard and publish the descriptor summary. Android
and iOS native-full inventories must include the descriptor and the complete
`itis-cercozoa-sidecar-0000.jsonl.gz` and
`itis-cercozoa-upstream-only-0000.jsonl.gz` bytes.
