# Evo Atlas — Deep-Time Evolution & Evidence Explorer

Evo Atlas is a static-first web atlas for exploring 4.567 billion years of Earth and life history through linked geological time, fossil occurrence coordinates, phylogenetic hypotheses and curated evidence. The production target is GitHub Pages: runtime use requires no server, database or private API key.

## What is implemented

- **Deep-time portal** — Hadean to present navigation, period entry points and ten guided evolutionary stories.
- **Synchronized Explorer** — Geological timeline, occurrence-coordinate map, tree of life, evidence inspector and dataset-checked shareable URL state. Continental geometry is withheld until provenance is complete.
- **Separated tree semantics** — Atlas-wide navigation ontology, a scoped Perissodactyla topology hypothesis, first-appearance proxy, fossil ranges and radial navigation, plus a compatible published calibration ledger.
- **Multi-scale occurrence map** — Projected-pixel cluster, density and point modes with reconstructed and modern coordinates kept separate. The continental layer is visibly unavailable while provenance is incomplete.
- **Sampling-aware diversity view** — Observed taxon names, collection coverage, age precision and spatial metadata without treating record counts as true richness.
- **Evidence catalog** — Bilingual taxon and event directories with source links, confidence and uncertainty kept separate.
- **Compare workbench** — Taxa, time windows, countries and competing representation assumptions.
- **Browser data lab** — Bounded local queries with table/chart/map views and reproducible ZIP exports containing CSV, JSON, GeoJSON, query definition, citations and the dataset manifest.
- **Local research workspace** — Recent query definitions are retained in browser IndexedDB and never sent to an application server.
- **Offline PWA** — Installable, precached app shell; large immutable scientific chunks are cached only when opened.
- **Static release pipeline** — Cross-file data validation, per-file SHA-256 checksums, tests, lint and GitHub Pages deployment gates.

## Architecture

| Area | Implementation |
| --- | --- |
| Application | React 19, TypeScript, Vite 8, hash routing |
| Map | Leaflet / react-leaflet with local occurrence chunks; no continental geometry is currently distributed |
| Tree and charts | D3 plus lightweight SVG/CSS visualizations |
| State | Zustand slices for geological time, map, tree and fossil evidence |
| Data | Versioned JSON snapshots under `data/`, dynamically split by Vite |
| Offline | `vite-plugin-pwa` and Workbox precaching |
| Hosting | GitHub Pages under the `/evo/` base path |

The main routes are `#/home`, `#/explore`, `#/taxa`, `#/events`, `#/stories`, `#/compare`, `#/lab`, `#/data` and `#/methods`. Explorer URLs encode dataset version, age/window, primary view, selected taxon/occurrence, map center/zoom, marker and coordinate modes, tree mode and story/event context. A link targeting another dataset snapshot requires explicit confirmation before it is rewritten. Reconstruction model labels remain occurrence-level evidence and are not exposed as a no-op global selector. Global search covers scientific/English/Chinese taxon names, navigation nodes, geological periods, events, stories and a curated place index.

## Local development

```bash
npm ci
npx playwright install chromium
npm run dev
```

The default development URL is `http://localhost:5173/evo/`.

Release checks:

```bash
npm run verify
```

This runs ESLint, Vitest, schema and cross-file data validation, TypeScript, the production PWA build, bundle budgets, Playwright route tests and axe accessibility checks.

## Data workflow

```bash
npm run data:manifest
npm run data:validate
```

`data:manifest` intentionally rewrites record counts and SHA-256 checksums after a reviewed data change. Run it before the final validation when the snapshot changes. The taxon-period descendant index and fossil normalization steps are reproducible commands. Optional staging helpers are available for PBDB occurrence retrieval/enrichment and splitting a source GeoJSON FeatureCollection; no geometry may be promoted from staging until the provenance fields required by `DATA_LICENSES.md` are complete. Staging fetches refuse to overwrite an existing target unless `--replace` is supplied.

```bash
npm run data:fetch:fossils -- --period Cretaceous --limit 1000
npm run data:normalize:fossils
npm run data:indexes
npm run data:split:geojson -- --input staging/world.geojson
```

See [data methods](docs/data-methods.md), the [dataset changelog](data/CHANGELOG.md) and the [release checklist](docs/release-checklist.md).

## Evidence boundaries

The 13,600 fossil rows are bounded, non-random PBDB API-prefix samples with unknown selection probability and no retained upstream totals; they are neither exhaustive nor statistically representative. Paleogeographic outlines are period-level visual summaries, not a continuous plate reconstruction. The atlas-wide hierarchy is a navigation ontology, while the separate Perissodactyla topology hypothesis remains non-exhaustive. First/last appearances are sampling-dependent and are not molecular-clock divergence estimates. The interface repeats these limits at the point of interpretation.

## License

Software is [MIT licensed](LICENSE). Original explanatory/curated content is generally [CC BY 4.0](CONTENT_LICENSE.md), while scientific data and third-party materials retain separate terms documented in [DATA_LICENSES.md](DATA_LICENSES.md) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
