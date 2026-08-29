# Evo Atlas data methods

Evo Atlas is a static, versioned evidence explorer. The browser never needs a private API key or application database: runtime data is published as immutable JSON manifests and checksum-addressed `.json.gz` files under `/evo/data/`.

## Fossil occurrences

The 13,600 occurrence rows are bounded, non-random API-prefix samples derived from the Paleobiology Database, ordered by PBDB occurrence identifier and stratified by geological period. Upstream totals and record-level selection probabilities were not retained, so the bundle is neither exhaustive nor statistically representative. Each row retains available accepted and identified taxon names, PBDB higher classification, age range, collection/reference identifiers, modern locality, optional paired reconstructed paleocoordinate, model label, coordinate precision, stratigraphic fields and country code. Runtime records are partitioned by package × period and loaded on demand. Exact registry PBDB IDs are applied first; explicit rules then use PBDB-supplied higher classification. This maps 12,064 rows, while 1,536 rows that cannot be linked safely remain in explicit unresolved `atlas-core` shards.

Observed counts are not treated as true richness. Rock availability, collecting intensity, geography, taxonomic practice and temporal resolution all affect the displayed patterns. Missing records are never interpreted as biological absence.

## Geological time

`data/time-scale.json` spans 4,567 Ma and records the exact display version `ICS-2026-06`. Boundary ages may change in later International Chronostratigraphic Chart revisions, so the version is part of every exported query manifest.

## Paleogeography

The map contains 12 build-time, three-layer snapshots from the CAO2024 global plate model (Cao et al. 2024, v2.4, DOI `10.5281/zenodo.13628813`, CC BY 4.0), reconstructed through GPlates Web Service at the midpoint of each ICS 2026/06 geological period. Each snapshot combines reconstructed coastlines, resolved topological plate polygons and typed plate-boundary lines. Boundary features retain the service's classification and, where supplied, its `Left` or `Right` subduction-polarity attribute. The undocumented `length` response attribute is deliberately omitted because the service documentation does not establish a unit.

The import records model, anchor plate, retrieval URL/date, processing-script commit, raw-response checksum and normalized-geometry checksum for each of the three layers. These are modelled representative-age geometries, not direct observations, a continuous movie, or an ancient elevation surface. Plate polygons and boundary lines do not provide paleoelevation, bathymetry or terrain relief, and the interface does not infer any of them. Reconstruction uncertainty and model dependence increase into deep time.

The CAO2024 layers are not assumed to share a reconstruction model with PBDB paleocoordinates. Occurrence markers use either paired reconstructed coordinates or paired modern collection coordinates in an explicitly selected mode. Missing reconstructed coordinates never fall back to modern coordinates (or vice versa), and exports create separate point GeoJSON files.

## Tree representations

`data/navigation/atlas-ontology.json` is a browsing hierarchy and does not assert a phylogenetic hypothesis. Non-taxonomic parent edges are annotated in the compact navigation source; the generated entity registry and PBDB ledger materialize a relationship kind for every edge, using `taxonomic-parent` as the documented default. The scoped Perissodactyla hypothesis source is stored separately from its generated range-injected projection; its cladogram branch lengths have no time meaning. The first-appearance view positions hypothesis nodes using curated fossil-record first appearances and is explicitly a proxy rather than a divergence-time estimate. Fossil-range bars display their evidence level and remain provisional unless explicitly expert-reviewed.

For the flagship perissodactyl catalog, a separate evidence ledger stores selected published divergence estimates, method labels and reported uncertainty. Estimates from unlike studies are not silently merged into a synthetic clock. The radial tree is a navigation view only.

## Local workspace and media

Recent Data Lab query definitions are stored in browser IndexedDB, capped to 20 entries and never uploaded. The service worker precaches the app shell and compressed Core registry; package, occurrence and map data is cached only when requested. Saving all packages is an explicit Data-page action. Museum media records link to institutional source pages instead of copying images without verified reuse terms; each entry carries a license reminder.

## Reproducibility and validation

After an intentional occurrence change, run `npm run data:normalize:fossils`, `npm run data:indexes`, `npm run data:manifest`, then `npm run data:validate`. The manifest stores record counts and SHA-256 checksums for every canonical data/schema file; JSON text is normalized from CRLF to LF before hashing so identical snapshots verify on Windows and Linux. Validation uses JSON Schema and checks interval hierarchy/continuity, registry/package coverage, duplicate identifiers, claim/reference coverage, editorial/scientific separation, story links, ontology and hypothesis graphs, calibration mapping status, descendant-index correctness, coordinate pairing, scientific regression assertions, provenance, review scope, translations, map-layer availability and manifest integrity. `npm run verify` adds runtime generation, source/Pages budgets, static reachability, unit, browser-route and accessibility gates.
