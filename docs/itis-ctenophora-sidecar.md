# ITIS Ctenophora authority sidecar

This release-scoped sidecar provides an exact nomenclatural crosswalk for all
197 strict accepted Ctenophora species in COL26.8. The scope is the COL phylum
root `B8V3L` (Ctenophora) inside the mixed `other-animals` resource pack.

## Pinned evidence

- Catalogue: COL26.8, released 2026-08-20; source dataset `1180` (WoRMS
  Ctenophora).
- Authority: ITIS monthly SQLite export `itisSqlite082626`, exported
  2026-08-26, root TSN `53856` (Ctenophora).
- Licence: ITIS export CC0-1.0.
- Database SHA-256: recorded in `data/sources/itis-2026-08-26.json` and the
  import ledger; the SQLite database itself is not committed.

The descriptor and import provenance are
`data/packages/other-animals/nomenclature/itis-ctenophora-sidecar.json` and
`data/sources/itis-ctenophora-sidecar-import-ledger.json`. Matching is exact
after the repository's representation-only scientific-name normalization. It
does not use fuzzy, phonetic, edit-distance, token-reordering or
taxon-substitution matching.

The generated result contains 58 exact accepted matches, 139 explicit
unmatched records, no ambiguous records and no synonym redirects. ITIS has 65
current species and 7 ITIS-only current species retained in a separate
null-COL shard.

## Mixed-package boundary and delivery

The `other-animals` pack contains 99,161 accepted species. Of these, 197 are
in-scope Ctenophora and 98,964 are explicitly non-applicable records outside
the declared Ctenophora root; they are not emitted as false matches.

The deterministic row shard and ITIS-only shard are the complete native data
payload. Android and iOS integrations must include the descriptor and every
listed shard byte-for-byte. GitHub Pages may publish only the descriptor and
canonical hashes; this data-only change does not alter the runtime or release
manifest.

Rebuild with:

```text
node scripts/build-itis-ctenophora-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>
```

The focused validator is:

```text
npx vitest run scripts/itis-ctenophora-sidecar.test.mjs
```
