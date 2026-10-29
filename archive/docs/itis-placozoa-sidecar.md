# ITIS Placozoa sidecar

This release-pinned sidecar preserves the strict accepted Placozoa partition
from Catalogue of Life `COL26.8` (issued 2026-08-20) and its exact
nomenclatural crosswalk to the official ITIS SQLite export `itisSqlite082626`
(2026-08-26). The COL root is usage ID `B8V3N`; the ITIS root is TSN
`563955` (`Placozoa`, valid phylum).

The pinned COL hierarchy contains four strict accepted species under the
Placozoa root: `Trichoplax adhaerens`, `Polyplacotoma mediterranea`,
`Cladtertia collaboinventa`, and `Hoilungia hongkongensis`. All four resolve
to one current valid ITIS species by the representation-only exact matcher.
There are no synonym redirects, ambiguous rows, unmatched rows, or additional
current ITIS species in this scope. The sidecar therefore has one deterministic
COL-usage-ID shard and an explicit empty ITIS-only shard.

## Rebuild

The original ITIS archive is not committed. Rebuild from a verified SQLite
member whose SHA-256 equals the value pinned in
`data/sources/itis-2026-08-26.json`:

```bash
node scripts/build-itis-placozoa-sidecar.mjs \
  --itis-sqlite /absolute/path/to/itisSqlite082626/ITIS.sqlite
```

The generator pins the COL registry and ownership manifests, checks the ITIS
root and maximum update dates, uses the shared exact representation-only
normalization, sorts usage IDs by Unicode code unit, and writes deterministic
gzip bytes. It never uses fuzzy, edit-distance, phonetic, case-folded,
diacritic-stripped, token-reordered, genus-substituted, or higher-rank
matching.

## Delivery boundary

GitHub Pages may ship the descriptor and omit row-level shards for the
lightweight deployment. Android and iOS full-data inventories must include the
descriptor and both listed gzip shards, including the explicit empty shard, at
the recorded checksums. This is a nomenclatural crosswalk, not a global
Placozoa checklist, final classification authority, phylogeny, species-concept
equivalence assertion, biological dossier, fossil record, or scientific-review
record. ITIS is CC0 1.0; attribution and the pinned source checksums remain in
`DATA_LICENSES.md`, `THIRD_PARTY_NOTICES.md`, and the import ledger.
