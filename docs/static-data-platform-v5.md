# GitHub Pages Data Platform v5 Candidate

Evo Atlas publishes one static application and one static scientific-data namespace at `/evo/data/`. Runtime use has no database, API server, external object store or required release asset.

## Canonical and runtime layers

`data/` is the version-controlled scientific layer. The 191 canonical curated entity concepts live in the navigation ontology, while the separate COL26.8 layer publishes 2,183,133 accepted species names and resolving name usages without claiming dossier maturity. Canonical range evidence has its own ledger, and shared references, claims, events, stories and normalized PBDB snapshots remain single sources. Registry and package identity/taxonomy/range/locale/query-ledger files are generated projections; each package's `review.json` is the sole manually maintained review record. Perissodactyla narratives and topology use separate `.source.json` inputs. `npm run data:registry:check` regenerates projections in a temporary directory and requires byte-for-byte equality. The curated inventory is an explicit educational subset rather than a whole-life content claim. `atlas-core` is structured, Perissodactyla is a curated draft, and the other scientific packages are generated scaffolds. No package currently claims external expert peer review.

Package schema v5 separates `entityKind`, `contentLevel` and `externalResolutionStatus`, and keeps platform maturity, content maturity and maintainer review separate. The content ladder is `generated-scaffold → structured → source-linked → curated-draft → published`. Stored review states are `not-reviewed`, `in-review`, `reviewed-with-caveats` and `reviewed`; effective `stale` is computed from the packet content digest. Automated schema validation and ChatGPT assistance are not external scientific peer review.

`public/data/` and `dist/data/` are generated and ignored. `scripts/build-runtime-data.mjs` produces one compact representation:

```text
data/current.json
data/releases/<datasetVersion>/core/*.json.gz
data/releases/<datasetVersion>/packages/<package>/manifest.json
data/releases/<datasetVersion>/packages/<package>/*.json.gz
data/releases/<datasetVersion>/package-search-index/<package>.json.gz
data/releases/<datasetVersion>/occurrences/<package>/<period>-<shard>.json.gz
data/releases/<datasetVersion>/maps/manifest.json
data/releases/<datasetVersion>/catalogue/manifest.json
data/releases/<datasetVersion>/catalogue/search/name-<prefix>.jsonl.gz
data/releases/<datasetVersion>/catalogue/targets/<hash-prefix>.jsonl.gz
data/releases/<datasetVersion>/catalogue/hierarchy/nodes/id-<hash-prefix>.jsonl.gz
data/releases/<datasetVersion>/catalogue/hierarchy/children/parent-<hash-prefix>.jsonl.gz
data/releases/<datasetVersion>/downloads/<package>-<version>.zip
```

The browser fetches these files through `src/data-client/staticDataClient.ts`. Package manifests are checksum-verified like payloads, and their `version` must equal the bootstrap `datasetVersion`. On a checksum mismatch the client removes the URL from browser caches and performs one network refetch before failing. Versioned URLs and memory-cache keys prevent release mixing.

## Occurrence assignment boundary

The cross-atlas PBDB snapshot contains 13,600 bounded, non-random API-prefix rows. PBDB higher-classification fields were fetched for the unchanged occurrence identifiers. Exact registry PBDB IDs are applied first; version-controlled rules then use the PBDB-supplied phylum, class, order, family and genus fields. The current source metadata records 12,064 mapped rows and 1,536 unresolved rows; the latter stay published under `atlas-core`. Perissodactyla also has a separate 13,210-row, fully paginated base-ID snapshot. Its query ledger and package payload keep that scope distinct from the cross-atlas shards, and “complete” applies to the recorded API query rather than to fossil-record completeness.

## Search and offline behavior

The precached Core search index contains navigation entities, package names, periods, events, stories and places. Entering an entity loads its package search index with profiles, claims and references. Catalogue of Life search starts at three characters and fetches only the routed prefix shard in the existing checksum-verifying worker. Resolving names then load the SHA-256-routed target shard so accepted and provisionally accepted targets remain distinguishable. Exact usage IDs and direct-child lists use separate SHA-256-routed hierarchy shards: all 2,183,133 accepted species and their 245,959 required higher ancestors are addressable, and every accepted-species parent edge is retained. Search results link to the pinned ChecklistBank dataset `316115`, not the moving Catalogue of Life portal. Package knowledge, occurrence shards, maps, Catalogue shards and downloads are not default precache entries.

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
