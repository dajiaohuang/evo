# Evo Atlas — Deep-Time Evolution & Evidence Explorer

Evo Atlas is a static-first web atlas for exploring 4.567 billion years of Earth and life history through linked geological time, fossil occurrence coordinates, phylogenetic hypotheses and curated evidence. The production target is GitHub Pages: runtime use requires no server, database or private API key.

## What is implemented

- **Deep-time portal** — Hadean to present navigation, period entry points, 4 published guided stories and 6 evidence-blocked canonical drafts.
- **Dashboard-first entry** — The site opens directly into the synchronized atlas with four preset scenes and an explicit tutorial choice; navigation, evidence and research tools remain folded until requested.
- **Versioned accepted-species registry** — The complete accepted-species baseline of Catalogue of Life Base Release COL26.8 (2,183,133 names) plus 2,065,436 resolving synonym, ambiguous-synonym and misapplied-name usages is published as lazy, checksum-addressed search and target shards. A separate exact-ID hierarchy covers every accepted species, 245,959 required higher taxa and all 2,429,088 direct parent-child edges without adding provisionally accepted taxa to the accepted-species count. This nomenclatural layer is explicitly separate from Atlas dossier maturity.
- **Synchronized Explorer** — Geological timeline, checksum-verified six-layer CAO2024 0–1,800 Ma frame series (coastlines, topological plates, typed boundaries, continental crust, continent–ocean boundaries and static reconstruction partitions), occurrence-coordinate map, tree of life, evidence inspector and dataset-checked shareable URL state. Each layer selects its nearest published frame without interpolation; the three heavier technical layers remain independently lazy.
- **Five-rank geological time** — ICS 2026/06 eons, eras, periods, epochs and ages with hierarchy, uncertainty, stable source identifiers and documented projection notes.
- **Separated tree semantics** — Atlas-wide navigation ontology, scoped Perissodactyla topology, first-appearance proxy, fossil ranges, radial navigation and calibration-evidence views, with clade collapse, lineage trace, trait/event overlays and Newick/Nexus export.
- **Multi-scale occurrence map** — Projected-pixel cluster, density and point modes with reconstructed and modern coordinates kept separate, plus explicitly sample-derived centroid/latitude trajectories over checksum-verified CAO2024 frames. Coastlines use 5/10 Myr sampling across the 540 Ma boundary; the much smaller topology layers use 1 Myr frames through 250 Ma, 5 Myr through 1,000 Ma and 10 Myr thereafter, plus representative anchors for otherwise skipped short-lived topology states. Heavier semantic layers use disclosed 10/20 or 20/40 Myr cadences, with all geological-period midpoints retained. Plate-boundary classifications and supplied subduction polarity are retained; continental-crust extent, continent–ocean transitions and rigid static partitions are kept distinct from coastlines and dynamic topological plates. No layer encodes paleoelevation, bathymetry or terrain relief.
- **Sampling-aware diversity view** — Observed taxon names, collection coverage, age precision and spatial metadata without treating record counts as true richness.
- **Evidence catalog** — Bilingual taxon and event directories with source links, confidence and uncertainty kept separate.
- **Compare workbench** — Taxa, time windows, countries and competing representation assumptions.
- **Browser data lab** — Bounded local queries with table/chart/map views; taxa/time/place/formation filters; query history/diff; retained-release checksum comparison; and reproducible ZIP exports containing CSV, JSON, GeoJSON, SVG, query definition, citations, methods and checksums.
- **Local research workspace** — CSV/JSON/GeoJSON import, delayed read-only DuckDB-Wasm SQL with joins/grouping/aggregation, Parquet export and IndexedDB notes/favorites. User data never goes to an application server.
- **Stories and education** — Claim-linked published stories, era/taxon/theme discovery, course collections, glossary and quiz, plus a local JSON Story Builder with teacher links and iframe embeds. Evidence-incomplete drafts remain blocked.
- **Offline PWA** — Installable, precached app shell; large immutable scientific chunks are cached only when opened.
- **Static release pipeline** — Cross-file data validation, per-file SHA-256 checksums, tests, lint and GitHub Pages deployment gates.
- **Pages Data Platform v5 candidate** — 191 bilingual curated registry entities assigned to 24 registry-driven static packages, plus the separate COL26.8 accepted-name registry. Curated content remains an explicit educational subset; Perissodactyla is a curated draft and the other scientific packages remain explicitly labelled scaffolds or core structure.
- **Complete static Catalog publication** — 4,000+ build-time bilingual HTML pages for taxa, events, geological intervals, formations, fossil localities, traits, references, media, stories, methods and retained dataset releases, with canonical URLs, Open Graph metadata, JSON-LD, `hreflang`, sitemap, feed, print styles and direct Explorer/Lab links.
- **Minimal review workflow** — Uploadable ZIP/Markdown packets enumerate every required file and SHA-256; digest freshness derives `stale` without a backend. Scientific maturity, maintainer review, ChatGPT assistance and external expert review remain separate disclosures.
- **Explicit scientific maturity** — Generated scaffold, structured, source linked, curated draft and published are separate from automated engineering validation and maintainer review.
- **Explicit offline packages** — Core data is precached; package and occurrence data is cached on access or when the user explicitly saves a package from the Data page.

## Architecture

| Area | Implementation |
| --- | --- |
| Application | React 19, TypeScript, Vite 8, hash routing |
| Map | Leaflet / react-leaflet with six checksum-verified CAO2024 layer families plus local occurrence chunks; continental crust, COB and static technical partitions are optional and lazy; no paleoelevation layer |
| Tree and charts | D3 plus lightweight SVG/CSS visualizations |
| State | Zustand slices for geological time, map, tree and fossil evidence |
| Data | Canonical versioned JSON under `data/`; generated `.json.gz` runtime packages under `/evo/data/` |
| Data loading | Static `fetch`, SHA-256 verification and Worker-based decompression/parsing; occurrence data is not compiled into JavaScript |
| Offline | `vite-plugin-pwa`; app/Core precache plus demand-driven package caches |
| Hosting | GitHub Pages under the `/evo/` base path |

The main routes are `#/home`, `#/catalog`, `#/registry`, `#/stories`, `#/explore`, `#/research`, `#/about`, `#/taxa`, `#/events`, `#/compare`, `#/lab`, `#/data` and `#/methods`. `#/home` is the focused dashboard; `#/explore` remains the full-panel deep link. Explorer URLs encode dataset version, age/window, primary view, selected taxon/occurrence, map center/zoom, marker and coordinate modes, tree mode and story/event context. A link targeting another dataset snapshot requires explicit confirmation before it is rewritten. Reconstruction model labels remain occurrence-level evidence and are not exposed as a no-op global selector. Global search covers the curated atlas plus demand-loaded Catalogue of Life scientific names; COL results open a release-scoped internal hierarchy page with an explicit upstream ChecklistBank verification link and never masquerade as an Atlas dossier.

## Local development

```bash
npm ci
npx playwright install chromium firefox webkit
npm run dev
```

The default development URL is `http://localhost:5173/evo/`.

Release checks:

```bash
npm run verify
```

`predev` generates ignored runtime data under `public/data/`. `verify` runs ESLint, Vitest, all registry/package/claim/translation/provenance/review gates, review-digest freshness, TypeScript, the production PWA build, source and Pages budgets, static-data smoke tests, Playwright route tests and axe accessibility checks.

Generate a complete ChatGPT-uploadable maintainer-review packet with `npm run review:packet -- --package perissodactyla`; validate every stored review digest with `npm run review:check`. See [the minimal review workflow](docs/review-workflow.md).

## Data workflow

```bash
npm run data:manifest
npm run data:validate
npm run data:build
npm run pages:budget
npm run pages:smoke
```

Rebuild the pinned COL26.8 projection from the official immutable DwCA without committing the 487.89 MiB upstream archive:

```bash
npm run data:col:build -- --archive /path/to/2026-08-20_dwca.zip --out data/catalogue-of-life/releases/2026-08-20/registry
```

`data:manifest` intentionally rewrites record counts and SHA-256 checksums after a reviewed canonical change. `data:build` creates the publishable static projection at `dist/data/`; it does not write runtime copies into canonical `data/`. The taxon-period descendant index, fossil normalization and `data:assign:fossils` package-assignment steps are reproducible commands. Optional staging helpers are available for PBDB occurrence retrieval/enrichment and splitting a source GeoJSON FeatureCollection; no geometry may be promoted from staging until the provenance fields required by `DATA_LICENSES.md` are complete. Staging fetches refuse to overwrite an existing target unless `--replace` is supplied.

The public bootstrap is `/evo/data/current.json`. It links checksum-addressed manifests and immutable files under `/evo/data/releases/<datasetVersion>/`; `/evo/data/releases.json` retains published snapshots, clients reject package/version mismatches, and checksum failures are evicted then refetched once. See [Static Data Platform v5](docs/static-data-platform-v5.md) for formats, caching rules and budgets.

```bash
npm run data:fetch:fossils -- --period Cretaceous --limit 1000
npm run data:normalize:fossils
npm run data:indexes
npm run data:split:geojson -- --input staging/world.geojson
```

See [data methods](docs/data-methods.md), the [dataset changelog](data/CHANGELOG.md), the [release checklist](docs/release-checklist.md), the [scientific review protocol](SCIENTIFIC_REVIEW.md) and the [package authoring guide](DATA_PACKAGE_AUTHORING.md).

## Evidence boundaries

The accepted-species registry is complete only against the pinned COL26.8 Base snapshot and inherits Catalogue of Life's reported roughly 80% coverage; 82,483 provisionally accepted species are disclosed but excluded from the accepted baseline. CoL usage IDs are snapshot locators, not sufficient cross-release concept identity. The atlas also exposes two occurrence scopes: a 13,600-row bounded, non-random period-stratified PBDB bundle for cross-clade views, and a separate 13,210-row complete pinned Perissodactyla base-ID snapshot. “Complete” means every page returned by that exact PBDB query was retained; it does not mean the fossil record is complete. The bounded bundle has unknown selection probability and no retained upstream totals, so its counts are neither exhaustive nor statistically representative. The six CAO2024 layer families are modelled nearest-frame reconstructions with disclosed, layer-specific temporal sampling, not direct observations, interpolated movies or ancient elevation maps, and are not assumed to share a reconstruction model with PBDB paleocoordinates. Denser frames improve navigation continuity, not the model's underlying geological resolution. The atlas-wide hierarchy is a navigation ontology, while the separate Perissodactyla topology hypothesis remains non-exhaustive. First/last appearances are sampling-dependent and are not molecular-clock divergence estimates. The interface repeats these limits at the point of interpretation.

## License

Software is [MIT licensed](LICENSE). Original explanatory/curated content is generally [CC BY 4.0](CONTENT_LICENSE.md), while scientific data and third-party materials retain separate terms documented in [DATA_LICENSES.md](DATA_LICENSES.md) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
