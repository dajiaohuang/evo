# Evo Atlas — Deep-Time Evolution & Evidence Explorer

Evo Atlas is a static-first web atlas for exploring 4.567 billion years of Earth and life history through linked geological time, fossil occurrences, paleogeography, phylogenetic hypotheses and curated evidence. The production target is GitHub Pages: runtime use requires no server, database or private API key.

## What is implemented

- **Deep-time portal** — Hadean to present navigation, period entry points and ten guided evolutionary stories.
- **Synchronized Explorer** — Geological timeline, period paleogeography, tree of life, evidence inspector and shareable URL state.
- **Four tree views** — Topology-only cladogram, first-appearance proxy, fossil ranges and radial navigation, plus a separate published calibration ledger that preserves their different time semantics.
- **Multi-scale occurrence map** — Cluster, density and point modes; reconstructed and modern coordinates; optional period land snapshot.
- **Sampling-aware diversity view** — Observed taxon names, collection coverage, age precision and spatial metadata without treating record counts as true richness.
- **Evidence catalog** — Bilingual taxon and event directories with source links, confidence and uncertainty kept separate.
- **Compare workbench** — Taxa, time windows, countries and competing representation assumptions.
- **Browser data lab** — Bounded local queries with table/chart/map views and reproducible ZIP exports containing CSV, JSON, GeoJSON, query definition, citations and the dataset manifest.
- **Local research workspace** — Recent query definitions are retained in browser IndexedDB and never sent to an application server.
- **Offline PWA** — Installable app shell and precached versioned data chunks after the first connected visit.
- **Static release pipeline** — Cross-file data validation, per-file SHA-256 checksums, tests, lint and GitHub Pages deployment gates.

## Architecture

| Area | Implementation |
| --- | --- |
| Application | React 19, TypeScript, Vite 8, hash routing |
| Map | Leaflet / react-leaflet with period GeoJSON and local occurrence chunks |
| Tree and charts | D3 plus lightweight SVG/CSS visualizations |
| State | Zustand slices for geological time, map, tree and fossil evidence |
| Data | Versioned JSON snapshots under `data/`, dynamically split by Vite |
| Offline | `vite-plugin-pwa` and Workbox precaching |
| Hosting | GitHub Pages under the `/evo/` base path |

The main routes are `#/home`, `#/explore`, `#/taxa`, `#/events`, `#/stories`, `#/compare`, `#/lab`, `#/data` and `#/methods`. Explorer age, view, selected taxon and story context are encoded in query parameters after the hash. Global search covers scientific/English/Chinese taxon names, tree nodes, geological periods, events, stories and a curated place index.

## Local development

```bash
npm ci
npm run dev
```

The default development URL is `http://localhost:5173/evo/`.

Release checks:

```bash
npm run verify
```

This runs ESLint, the Vitest suite, cross-file data validation, TypeScript and the production PWA build.

## Data workflow

```bash
npm run data:validate
npm run data:manifest
```

`data:manifest` intentionally rewrites record counts and SHA-256 checksums after a reviewed data change. Run it before validation when the snapshot changes. Optional staging helpers are available for PBDB occurrence retrieval and splitting a source GeoJSON FeatureCollection; both refuse to overwrite an existing target unless `--replace` is supplied.

```bash
npm run data:fetch:fossils -- --period Cretaceous --limit 1000
npm run data:split:geojson -- --input staging/world.geojson
```

See [data methods](docs/data-methods.md), the [dataset changelog](data/CHANGELOG.md) and the [release checklist](docs/release-checklist.md).

## Evidence boundaries

The 13,600 fossil rows are representative PBDB occurrence samples, not an exhaustive export. Paleogeographic outlines are period-level visual summaries, not a continuous plate reconstruction. Tree topology is a navigational teaching synthesis; first/last appearances are sampling-dependent and are not molecular-clock divergence estimates. The interface repeats these limits at the point of interpretation.

## License

MIT
