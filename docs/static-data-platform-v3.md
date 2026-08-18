# GitHub Pages Data Platform v3

Evo Atlas publishes one static application and one static scientific-data namespace at `/evo/data/`. Runtime use has no database, API server, external object store or required release asset.

## Canonical and runtime layers

`data/` is the version-controlled canonical layer. The 179 navigation entities live in `data/registry/`; 24 ownership packages live in `data/packages/`; shared references, claims, events, stories and the normalized PBDB snapshot remain single canonical sources. All 23 scientific ownership packages satisfy the Gold v2 dossier baseline; `atlas-core` remains a Core navigation package.

Gold v2 denotes consistent traceability, bilingual coverage, uncertainty/limitation disclosure, explicit availability states, validation and review-state recording. It does not imply equal narrative volume or human scientific peer review. Perissodactyla additionally carries the current flagship profiles, field-to-claim links, topology hypothesis and calibration ledger; unavailable extensions in other packages remain explicit rather than inferred.

`public/data/` and `dist/data/` are generated and ignored. `scripts/build-runtime-data.mjs` produces one compact representation:

```text
data/current.json
data/core/*.json.gz
data/packages/<package>/manifest.json
data/packages/<package>/*.json.gz
data/package-search-index/<package>.json.gz
data/occurrences/<package>/<period>-<shard>.json.gz
data/maps/manifest.json
data/downloads/<package>-<version>.zip
```

The browser fetches these files through `src/data-client/staticDataClient.ts`. A Worker verifies SHA-256, handles both raw gzip bytes and hosts that transparently decode `.gz`, decompresses with `fflate`, parses JSON and returns structured data. Data is cached in memory and by Workbox only after access.

## Occurrence assignment boundary

The current PBDB snapshot contains 13,600 bounded, non-random API-prefix rows. PBDB higher-classification fields were fetched for the unchanged occurrence identifiers. Exact registry PBDB IDs are applied first; version-controlled rules then use the PBDB-supplied phylum, class, order, family and genus fields. This assigns 12,034 rows to scientific ownership packages without name or period guessing. The remaining 1,566 rows stay fully published under `atlas-core` and are explicitly counted as unresolved in the occurrence manifest.

## Search and offline behavior

The precached Core search index contains navigation entities, package names, periods, events, stories and places. Entering an entity loads its package search index with profiles, claims and references. Package knowledge, occurrence shards, maps and downloads are not default precache entries.

The Data page can explicitly save one package or all published packages through the Cache API. Clearing offline data deletes only this explicit package cache.

## Release gates

```bash
npm run data:registry:validate
npm run data:packages:validate
npm run data:claims:validate
npm run data:translations:validate
npm run data:provenance:validate
npm run data:review:validate
npm run data:build
npm run source:budget
npm run build
npm run pages:budget
npm run pages:smoke
```

The hard Pages gate is 650 MiB total, 8 MiB per data shard, 5 MiB Core data, 5 MiB package knowledge data, 10 MiB precache, 500 KiB initial JavaScript and seven minutes for the site build. The source data/code target is 700 MiB. The current build report is written to `dist/data/build-metrics.json` after Vite finishes.
