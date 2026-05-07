# Evo — Paleontological Evolution Visualization

Interactive web application for exploring the history of life on Earth through three synchronized views: a paleogeographic map, a phylogenetic tree of life, and a draggable geological timeline.

## Features

- **Paleogeographic Map** — Continental reconstructions for 12 Phanerozoic periods with fossil occurrence markers rendered at their paleo-rotated coordinates
- **Tree of Life** — Phylogenetic tree covering plants, invertebrates, and vertebrates with temporal filtering (nodes outside the current geological time go translucent)
- **Geological Timeline** — Draggable SVG timeline spanning the entire Phanerozoic (0–538.8 Ma) with era/period bands
- **Fossil Data** — 13,600+ fossil occurrence records from the Paleobiology Database, pre-fetched and bundled locally
- **Interactive Linking** — Click a tree node to highlight its fossils on the map; click a fossil marker to view its collection details

## Architecture

| View | Technology |
|------|-----------|
| Paleogeographic map | Leaflet + react-leaflet with 25,000-vertex GeoJSON continent overlays |
| Phylogenetic tree | D3.js (d3-hierarchy) with zoom/pan and temporal filtering |
| Geological timeline | Custom SVG component with pointer-based drag interaction |
| State management | Zustand store with 4 slices (timeline, map, tree, fossil) |

## Getting Started

```bash
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm test         # Run 34 unit tests
```

## Data Sources

- **Paleobiology Database** (paleobiodb.org) — Fossil occurrence data, geological intervals
- **Paleogeographic reconstructions** — Hand-crafted continental outlines based on published paleogeographic atlases
- **Phylogenetic data** — Curated cladogram of major plant, invertebrate, and vertebrate groups

## License

MIT
