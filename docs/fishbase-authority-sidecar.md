# Fish authority sidecar audit

This audit pins the COL26.8 fish boundary and the only reproducible identifier
crosswalk currently safe to prepare for Evo Atlas. It is data provenance, not a
claim that the four groups or FishBase contain all known fish diversity.

## Exact COL26.8 boundary

The complete registry hierarchy was walked from the exact accepted nodes below,
using `rank=species`, `status=accepted`, and `sourceDatasetId=1010`:

| requested group | exact COL node | COL package owner | accepted species |
| --- | --- | --- | ---: |
| Actinopterygii | `8VR36` | `actinopterygii` | 35,928 |
| Chondrichthyes | `8X6G5` | `chondrichthyes` | 1,359 |
| Myxini | `6225G` | `early-fishes` | 92 |
| Petromyzontida request | `3SP` Petromyzontiformes | `early-fishes` | 49 |

The four roots are disjoint in the pinned hierarchy, for a total of 37,428
species. COL26.8 has no node named `Petromyzontida`; `3SP` is the exact
species-bearing Petromyzontiformes order below its `Petromyzonti` class. The
broader `KTXJW` Agnatha node contains 141 species and is deliberately not used
for the requested Petromyzontida scope.

## Source and rights decision

The COL source dataset is FishBase (dataset key `1010`, version `2026-08-01`,
DOI [`10.48580/d37v`](https://doi.org/10.48580/d37v), alias “WoRMS FishBase”).
The pinned COL name-usage source endpoint is:

`https://api.checklistbank.org/dataset/316115/nameusage/{colId}/source`

It returned a source identifier for all 37,428 COL species. The crosswalk keeps
only that identifier, its stable Aphia URL, the COL usage fields and the exact
response digest. It does not copy source descriptions, references,
distributions, media or other FishBase fields.

The COL API metadata reports `cc by`, but the official FishBase COLDP archive
retrieved from `https://api.checklistbank.org/dataset/1010/archive` on
2026-08-31 identifies its own `metadata.yml` license as `CC-BY-NC`. The local
archive retrieval was 12,289,252 bytes, SHA-256
`695ddbe8b1af1b55e7acff716cd010c443a3fa1f3e925f00a98ed76b006a8878`; it is
not committed or redistributed. This rights conflict is why the sidecar is
limited to release source identifiers returned by the CC BY COL endpoint and
does not assert an upstream-only FishBase inventory.

Eschmeyer's Catalog of Fishes is the nomenclatural authority used by FishBase
and the official CAS site describes it as a continuously updated searchable
database. The audit found no official bulk export with verified redistribution
terms, so no Catalog of Fishes content is copied. The public CAS page currently
reports 37,730 valid fish species, which is a broader continuously updated
service count and must not be substituted for the pinned 37,428 COL boundary.

## Reproducible artifacts

- `data/sources/fishbase-authority-crosswalk-col26.8.json.gz` is the canonical
  deterministic snapshot. It contains 37,428 direct records and no fabricated
  redirects, ambiguous matches, unmatched rows or withheld rows. Its SHA-256
  is `90a0c76e57ce8af757fdb995b7876fc1c176e09be9e49737e94c66ae8ad81304`.
- `data/catalogue-of-life/releases/2026-08-20/resource-packs/fish/fishbase-extension.json`
  describes the standalone sidecar and its rights boundary.
- The standalone supplement is registered under `fishBaseIdentifiers` in
  `data/catalogue-of-life/releases/2026-08-20/resource-packs/manifest.json`.
  It is intentionally not counted as an eighth base resource pack: its 37,428
  fish usages are already routed to the existing vertebrate package boundaries,
  while frontend/native publication remains a separate follow-up integration.
- `scripts/fetch-fishbase-authority-crosswalk.mjs` walks the four roots and
  fetches every source record. It writes output only after every request has
  passed the dataset and identifier checks; retries do not turn failures into
  partial data.
- `scripts/build-fishbase-authority-sidecar.mjs` creates five deterministic
  JSONL gzip shards with globally non-overlapping inclusive `colId` ranges. A
  lookup selects at most one shard.

The generated shard total is 37,428 records / 2,969,333 compressed bytes / 
24,015,782 uncompressed JSONL bytes. Web-light integration may retain the
descriptor and counts only; Android and iOS native-full integration must copy
all five shard bytes identically. Upstream-only remains explicitly
`not-enumerated` because the non-redistributable archive is not bundled.

## Validation

Run:

```text
node --check scripts/fetch-fishbase-authority-crosswalk.mjs
node --check scripts/build-fishbase-authority-sidecar.mjs
npx vitest run scripts/fishbase-authority-sidecar.test.mjs --config vitest.config.ts
```

The focused suite verifies source pinning, four-root counts, one-to-one COL ↔
Aphia IDs, deterministic regeneration and strict shard range separation.
