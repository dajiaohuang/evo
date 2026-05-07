# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install            # Install dependencies
npm run dev            # Start dev server (HMR)
npm run build          # Type-check + production build
npm test               # Run tests (vitest)
npm run test:watch     # Run tests in watch mode
npx tsc --noEmit       # Type-check only
```

## Architecture

Single-page React 18 + TypeScript app (Vite 5) for visualizing paleontological evolution. No backend — fossil data comes from the Paleobiology Database (PBDB) public API.

**Three synchronized views:**

| View | Tech | File |
|------|------|------|
| Paleogeographic map | Leaflet (react-leaflet) with GeoJSON continent overlays | `src/components/map/PaleoMap.tsx` |
| Phylogenetic tree | D3.js (d3-hierarchy) | `src/components/tree/EvoTree.tsx` |
| Geological timeline | Custom SVG with drag handle | `src/components/timeline/GeoTimeline.tsx` |

**Layout**: CSS Grid — map fills top area, tree in bottom-left, detail panel on right sidebar (340px), timeline across full bottom (100px).

**State flow**: Timeline is the driver. Dragging it updates `currentAge` in the Zustand store, which triggers: (1) continent GeoJSON swap on map, (2) fossil fetch from PBDB for that period, (3) tree node visibility recalculation (nodes outside their temporal range go translucent). Selecting a tree node highlights matching fossil markers on the map and loads taxonomy-specific occurrence data.

## Key files

- `src/store/` — Zustand store with 4 slices (timeline, map, tree, fossil). `store/index.ts` combines them via the slices pattern.
- `src/services/pbdb.ts` — All PBDB API calls. Uses `cache.ts` (LRU with TTL) and `rateLimiter.ts` (request queue, 200ms gap).
- `src/services/cache.ts` — Generic LRU cache with configurable TTL. Module-scoped singleton in pbdb.ts.
- `src/services/rateLimiter.ts` — Promise-based FIFO request queue ensuring minimum gap between API calls.
- `src/hooks/usePaleogeography.ts` — Dynamically imports the correct continent GeoJSON file based on current geological period. Caches loaded files.
- `data/periods.json` — Curated metadata for 12 Phanerozoic periods (names, ages in Ma, colors).
- `data/tree/vertebrate-cladogram.json` — Pre-built phylogenetic tree covering major vertebrate groups (jawless fish → dinosaurs → mammals). Each node has `taxonId` linking to PBDB.
- `data/paleogeography/*.geojson` — Continental outline polygons for each period with tectonic features (interior seas, island arcs, microcontinents). Each file is code-split by Vite.
- `src/utils/clustering.ts` — Grid-based viewport clustering for fossil markers.
- `src/utils/time.ts` — Age formatting, coordinate conversion helpers.

## State management (Zustand)

Single store, no immer. Slices return partial state objects. Access via `useAppStore((s) => s.field)` — always use selectors, never destructure the whole store.

Key state fields:
- `currentAge` (Ma, 0–538.8) and `currentPeriod` drive all views
- `selectedNodeId` / `highlightedTaxonId` link tree ↔ map
- `occurrencesByInterval` caches PBDB fossil records per period
- `occurrencesByTaxon` caches per-species fossil data

## PBDB API

Base URL: `https://paleobiodb.org/data1.2`

All requests go through `services/pbdb.ts` which wraps calls in:
1. LRU cache check (TTL: intervals=∞, taxonomy=1h, occurrences=30min)
2. Rate limiter queue (200ms minimum gap, max 50 queued)

Key endpoints:
- `intervals/list.json?scale=1` — Geological timescale (loaded once at startup)
- `occs/list.json?interval={name}&show=coords,paleomap,loc,time&limit=500` — Fossils by period
- `occs/list.json?taxon_id={id}&show=coords,paleomap,loc,time&limit=500` — Fossils by taxon
- `taxa/list.json?taxon_id={id}&show=attr,class` — Taxonomic details

Fossil coordinates: prefer `paleolng`/`paleolat` (paleo-rotated) over `lng`/`lat` (modern). PBDB returns these when `show=paleomap` is passed.

## Important constraints

- `verbatimModuleSyntax` is enabled — use `import type` for type-only imports.
- GeoJSON files are imported via dynamic `import()` in `usePaleogeography.ts`, not static imports. Vite code-splits them automatically.
- D3 renders imperatively into an SVG ref — React does not own the SVG children. Use `svg.innerHTML = ''` to clear before re-rendering.
- Leaflet CSS is auto-imported by react-leaflet. The map tile layer is intentionally omitted — the dark background + GeoJSON continents form the basemap.
- Tests use `vitest.config.ts` (separate from `vite.config.ts` to avoid type conflicts).
- When testing store slices or anything touching PBDB, call `clearCache()` from `services/pbdb.ts` in beforeEach to prevent module-level cache pollution between tests.
