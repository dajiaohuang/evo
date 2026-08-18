# Evo Atlas data methods

Evo Atlas is a static, versioned evidence explorer. The browser never needs a private API key or application database: all runtime data is shipped as immutable JSON or generated JavaScript chunks.

## Fossil occurrences

The 13,600 occurrence rows are bounded, non-random API-prefix samples derived from the Paleobiology Database, ordered by PBDB occurrence identifier and stratified by geological period. Upstream totals and record-level selection probabilities were not retained, so the bundle is neither exhaustive nor statistically representative. Each row retains available accepted and identified taxon names, age range, collection/reference identifiers, modern locality, optional paired reconstructed paleocoordinate, model label, coordinate precision, stratigraphic fields and country code. Period files are loaded on demand.

Observed counts are not treated as true richness. Rock availability, collecting intensity, geography, taxonomic practice and temporal resolution all affect the displayed patterns. Missing records are never interpreted as biological absence.

## Geological time

`data/time-scale.json` spans 4,567 Ma and records the exact display version `ICS-2026-06`. Boundary ages may change in later International Chronostratigraphic Chart revisions, so the version is part of every exported query manifest.

## Paleogeography

The 12 GeoJSON files are period-level visual snapshots. They are not a continuous plate-rotation model. Occurrence markers use either paired reconstructed coordinates or paired modern collection coordinates in an explicitly selected mode. Missing reconstructed coordinates never fall back to modern coordinates (or vice versa), and exports create separate GeoJSON files.

## Tree representations

`data/navigation/atlas-ontology.json` is a browsing hierarchy and does not assert a phylogenetic hypothesis. The scoped Perissodactyla hypothesis is stored separately; its cladogram branch lengths have no time meaning. The first-appearance view positions hypothesis nodes using curated fossil-record first appearances and is explicitly a proxy rather than a divergence-time estimate. Fossil-range bars show rounded first-to-last appearance intervals and remain sampling-dependent.

For the flagship perissodactyl catalog, a separate evidence ledger stores selected published divergence estimates, method labels and reported uncertainty. Estimates from unlike studies are not silently merged into a synthetic clock. The radial tree is a navigation view only.

## Local workspace and media

Recent Data Lab query definitions are stored in browser IndexedDB, capped to 20 entries and never uploaded. The service worker precaches only the app shell and runtime-caches large immutable scientific chunks when requested. Museum media records link to institutional source pages instead of copying images without verified reuse terms; each entry carries a license reminder.

## Reproducibility and validation

After an intentional occurrence change, run `npm run data:normalize:fossils`, `npm run data:indexes`, `npm run data:manifest`, then `npm run data:validate`. The manifest stores record counts and SHA-256 checksums for every data/schema file. Validation uses JSON Schema and checks interval hierarchy/continuity, duplicate identifiers, claim/reference coverage, story links, ontology and hypothesis graphs, calibration compatibility, descendant-index correctness, coordinate pairing, scientific regression assertions, GeoJSON structure and manifest integrity. `npm run verify` adds unit, build, size, browser-route and accessibility gates.
