# GitHub Pages Data Platform v5 Candidate

Evo Atlas publishes one static application and one static scientific-data namespace at `/evo/data/`. Runtime use has no database, API server, external object store or required release asset.

## Canonical and runtime layers

`data/` is the version-controlled scientific layer. The rc38 navigation ontology contains 392 curated entity concepts, while the separate COL26.8 layer publishes 2,183,133 accepted species names and resolving name usages without claiming dossier maturity. A compact release-scoped ownership projection assigns all accepted species to exactly one of 24 static packages or eight catalogue-only resource partitions by exact CoL ancestor usage IDs; it reuses the shared hierarchy rather than duplicating species records. Canonical range evidence has its own ledger, and shared references, claims, events, stories and normalized PBDB snapshots remain single sources. Registry and package identity/taxonomy/range/locale/query-ledger files are generated projections; each package's `review.json` is the sole manually maintained review record. Any package may provide a `profiles.source.json`; the registry build projects those sources both into package-local `profiles.json` files and the shared `data/registry/taxon-profiles.json` browser/static-page index, with generated field-to-claim link ledgers. Sixty-six named taxa now have field-linked rich profiles; each visible profile field resolves to a typed taxon claim and a primary-study locator. Rc38 adds twenty representative profiles across eight plant and invertebrate packages without converting their remaining COL naming routes into prose dossiers. Package-specific topology hypotheses remain separate `.source.json` inputs instead of being inferred from the navigation tree. `npm run data:registry:check` regenerates projections in a temporary directory and requires byte-for-byte equality. The curated inventory is an explicit educational subset rather than a whole-life content claim. No package remains `generated-scaffold`: twenty-three are `structured`, and Perissodactyla is the sole `curated-draft`; twenty-three packages are `not-reviewed`, while Perissodactyla stores `in-review` but evaluates to `stale` because its packet digest predates current content. None claims scientific `published` or external domain-expert review.

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

## Paleogeography boundary

The map release contains 1,889 checksum-addressed frames in six independently sampled CAO2024 v2.4 layer series across the model's documented 0–1,800 Ma range. Frame selection is nearest-age with a younger-frame tie break; the client does not interpolate or clamp requests outside the range. These geometries do not supply paleoelevation, bathymetry or terrain relief, and continental-crust polygons are not exposed-land surfaces. CAO geometry records contain model/layer/time provenance but no Evo Atlas entity, package, taxon or occurrence IDs. PBDB paleocoordinates may use a different reconstruction model, so a shared requested age or visual overlap is not a direct taxonomic join or spatial co-registration.

## Occurrence assignment boundary

The cross-atlas PBDB snapshot contains 13,600 bounded, non-random API-prefix rows. PBDB higher-classification fields were fetched for the unchanged occurrence identifiers. Exact registry PBDB IDs are applied first; version-controlled rules then use the PBDB-supplied phylum, class, order, family and genus fields. The current source metadata records 12,064 mapped rows and 1,536 unresolved rows; the latter stay published under `atlas-core`. Perissodactyla also has a separate 13,210-row, fully paginated base-ID snapshot. Its query ledger and package payload keep that scope distinct from the cross-atlas shards, and “complete” applies to the recorded API query rather than to fossil-record completeness.

## Search and offline behavior

The precached Core search index contains navigation entities, package names, periods, events, stories and places. Entering an entity loads its package search index with profiles, claims and references. Catalogue of Life search starts at three characters and fetches only the routed prefix shard in the existing checksum-verifying worker. Resolving names then load the SHA-256-routed target shard so accepted and provisionally accepted targets remain distinguishable. Exact usage IDs and direct-child lists use separate SHA-256-routed hierarchy shards: all 2,183,133 accepted species and their 245,959 required higher ancestors are addressable, and every accepted-species parent edge is retained. The 32-owner routing manifest is loaded only on Catalogue/Data views and resolves ownership from the already requested lineage. Search results open the release-scoped `#/registry?release=COL26.8&id={id}` view; that view exposes lineage, resource ownership, direct children, source-checklist attribution and a verification link to pinned ChecklistBank dataset `316115`, not the moving Catalogue of Life portal. Package knowledge, occurrence shards, maps, Catalogue shards and downloads are not default precache entries.

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
