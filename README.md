# Evo Atlas — Deep-Time Evolution & Evidence Explorer

Evo Atlas is a static-first web atlas for exploring 4.567 billion years of Earth and life history through linked geological time, fossil occurrence coordinates, phylogenetic hypotheses and curated evidence. The production target is GitHub Pages: runtime use requires no server, database or private API key.

## What is implemented

- **Deep-time portal** — Hadean to present navigation, period entry points, 4 published guided stories and 6 evidence-blocked canonical drafts.
- **Synchronized Explorer** — Geological timeline, occurrence-coordinate map, tree of life, evidence inspector and dataset-checked shareable URL state. Continental geometry is withheld until provenance is complete.
- **Five-rank geological time** — ICS 2026/06 eons, eras, periods, epochs and ages with hierarchy, uncertainty, stable source identifiers and documented projection notes.
- **Separated tree semantics** — Atlas-wide navigation ontology, scoped Perissodactyla topology, first-appearance proxy, fossil ranges, radial navigation and calibration-evidence views, with clade collapse, lineage trace, trait/event overlays and Newick/Nexus export.
- **Multi-scale occurrence map** — Projected-pixel cluster, density and point modes with reconstructed and modern coordinates kept separate, plus explicitly sample-derived centroid/latitude trajectories. The continental layer is visibly unavailable while provenance is incomplete.
- **Sampling-aware diversity view** — Observed taxon names, collection coverage, age precision and spatial metadata without treating record counts as true richness.
- **Evidence catalog** — Bilingual taxon and event directories with source links, confidence and uncertainty kept separate.
- **Compare workbench** — Taxa, time windows, countries and competing representation assumptions.
- **Browser data lab** — Bounded local queries with table/chart/map views; taxa/time/place/formation filters; query history/diff; retained-release checksum comparison; and reproducible ZIP exports containing CSV, JSON, GeoJSON, SVG, query definition, citations, methods and checksums.
- **Local research workspace** — CSV/JSON/GeoJSON import, delayed read-only DuckDB-Wasm SQL with joins/grouping/aggregation, Parquet export and IndexedDB notes/favorites. User data never goes to an application server.
- **Stories and education** — Claim-linked published stories, era/taxon/theme discovery, course collections, glossary and quiz, plus a local JSON Story Builder with teacher links and iframe embeds. Evidence-incomplete drafts remain blocked.
- **Offline PWA** — Installable, precached app shell; large immutable scientific chunks are cached only when opened.
- **Static release pipeline** — Cross-file data validation, per-file SHA-256 checksums, tests, lint and GitHub Pages deployment gates.
- **Pages Data Platform v5 candidate** — 189 bilingual registry entities assigned to 24 registry-driven static packages. This is an explicit educational subset, not a whole-life completeness claim; Perissodactyla is a curated draft and the other scientific packages remain explicitly labelled scaffolds or core structure.
- **Complete static Catalog publication** — 4,000+ build-time bilingual HTML pages for taxa, events, geological intervals, formations, fossil localities, traits, references, media, stories, methods and retained dataset releases, with canonical URLs, Open Graph metadata, JSON-LD, `hreflang`, sitemap, feed, print styles and direct Explorer/Lab links.
- **Minimal review workflow** — Uploadable ZIP/Markdown packets enumerate every required file and SHA-256; digest freshness derives `stale` without a backend. Scientific maturity, maintainer review, ChatGPT assistance and external expert review remain separate disclosures.
- **Explicit scientific maturity** — Generated scaffold, structured, source linked, curated draft and published are separate from automated engineering validation and maintainer review.
- **Explicit offline packages** — Core data is precached; package and occurrence data is cached on access or when the user explicitly saves a package from the Data page.

## Architecture

| Area | Implementation |
| --- | --- |
| Application | React 19, TypeScript, Vite 8, hash routing |
| Map | Leaflet / react-leaflet with local occurrence chunks; no continental geometry is currently distributed |
| Tree and charts | D3 plus lightweight SVG/CSS visualizations |
| State | Zustand slices for geological time, map, tree and fossil evidence |
| Data | Canonical versioned JSON under `data/`; generated `.json.gz` runtime packages under `/evo/data/` |
| Data loading | Static `fetch`, SHA-256 verification and Worker-based decompression/parsing; occurrence data is not compiled into JavaScript |
| Offline | `vite-plugin-pwa`; app/Core precache plus demand-driven package caches |
| Hosting | GitHub Pages under the `/evo/` base path |

The main routes are `#/home`, `#/catalog`, `#/stories`, `#/explore`, `#/research`, `#/about`, `#/taxa`, `#/events`, `#/compare`, `#/lab`, `#/data` and `#/methods`. Explorer URLs encode dataset version, age/window, primary view, selected taxon/occurrence, map center/zoom, marker and coordinate modes, tree mode and story/event context. A link targeting another dataset snapshot requires explicit confirmation before it is rewritten. Reconstruction model labels remain occurrence-level evidence and are not exposed as a no-op global selector. Global search covers scientific/English/Chinese taxon names, navigation nodes, geological periods, events, stories and a curated place index.

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

The atlas exposes two occurrence scopes: a 13,600-row bounded, non-random period-stratified PBDB bundle for cross-clade views, and a separate 13,210-row complete pinned Perissodactyla base-ID snapshot. “Complete” means every page returned by that exact PBDB query was retained; it does not mean the fossil record is complete. The bounded bundle has unknown selection probability and no retained upstream totals, so its counts are neither exhaustive nor statistically representative. Paleogeographic outlines are withheld pending complete redistribution provenance. The atlas-wide hierarchy is a navigation ontology, while the separate Perissodactyla topology hypothesis remains non-exhaustive. First/last appearances are sampling-dependent and are not molecular-clock divergence estimates. The interface repeats these limits at the point of interpretation.

## License

Software is [MIT licensed](LICENSE). Original explanatory/curated content is generally [CC BY 4.0](CONTENT_LICENSE.md), while scientific data and third-party materials retain separate terms documented in [DATA_LICENSES.md](DATA_LICENSES.md) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
