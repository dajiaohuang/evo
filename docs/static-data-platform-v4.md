# GitHub Pages Data Platform v5 Candidate

Evo Atlas publishes one static application and one static scientific-data namespace at `/evo/data/`. Runtime use has no database, API server, external object store or required release asset.

## Canonical and runtime layers

`data/` is the version-controlled scientific layer. The 186 canonical entity concepts live in the navigation ontology, canonical range evidence has its own ledger, and shared references, claims, events, stories and the normalized PBDB snapshot remain single sources. Registry and package identity/taxonomy/range/review/locale files are generated projections; `npm run data:registry:check` regenerates them in a temporary directory and requires byte-for-byte equality. `atlas-core` is Core, Perissodactyla is a curated draft, and the other 22 scientific packages are generated scaffolds. None is currently represented as expert-reviewed or Gold.

Package schema v5 separates `entityKind`, `contentLevel` and `externalResolutionStatus`, and keeps platform maturity separate from scientific maturity. Automated schema validation is not scientific review. A package with no claims cannot advance beyond `generated-scaffold`; packages without identified human scientific review cannot be `expert-reviewed` or `gold-v2`; Gold additionally requires fit primary/review sources, locators, claim linkage and reviewer identity/scope/conflict metadata.

`public/data/` and `dist/data/` are generated and ignored. `scripts/build-runtime-data.mjs` produces one compact representation:

```text
data/current.json
data/releases/<datasetVersion>/core/*.json.gz
data/releases/<datasetVersion>/packages/<package>/manifest.json
data/releases/<datasetVersion>/packages/<package>/*.json.gz
data/releases/<datasetVersion>/package-search-index/<package>.json.gz
data/releases/<datasetVersion>/occurrences/<package>/<period>-<shard>.json.gz
data/releases/<datasetVersion>/maps/manifest.json
data/releases/<datasetVersion>/downloads/<package>-<version>.zip
```

The browser fetches these files through `src/data-client/staticDataClient.ts`. Package manifests are checksum-verified like payloads, and their `version` must equal the bootstrap `datasetVersion`. On a checksum mismatch the client removes the URL from browser caches and performs one network refetch before failing. Versioned URLs and memory-cache keys prevent release mixing.

## Occurrence assignment boundary

The current PBDB snapshot contains 13,600 bounded, non-random API-prefix rows. PBDB higher-classification fields were fetched for the unchanged occurrence identifiers. Exact registry PBDB IDs are applied first; version-controlled rules then use the PBDB-supplied phylum, class, order, family and genus fields. This assigns 12,034 rows to scientific ownership packages without name or period guessing. The remaining 1,566 rows stay fully published under `atlas-core` and are explicitly counted as unresolved in the occurrence manifest.

## Search and offline behavior

The precached Core search index contains navigation entities, package names, periods, events, stories and places. Entering an entity loads its package search index with profiles, claims and references. Package knowledge, occurrence shards, maps and downloads are not default precache entries.

The Data page can explicitly save one package or all published packages through the Cache API. Workbox runtime-cache names include the dataset version. Service-worker activation removes stale runtime and explicit-package cache generations, quota errors are purgeable, and clearing offline data still deletes every Evo runtime-data generation plus the in-memory cache.

Deployments fetch the published release inventory before building and retain the current plus two prior version directories. `current.json` moves the active pointer while `releases.json` and per-release file inventories keep retained snapshot URLs independently addressable.

## Release gates

```bash
npm run data:registry:validate
npm run data:registry:check
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
