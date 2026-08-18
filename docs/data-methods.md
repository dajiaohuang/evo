# Evo Atlas data methods

Evo Atlas is a static, versioned evidence explorer. The browser never needs a private API key or application database: all runtime data is shipped as immutable JSON or generated JavaScript chunks.

## Fossil occurrences

The 13,600 occurrence rows are bounded samples derived from the Paleobiology Database. Each row retains the accepted and identified taxon names, age range, collection identifier, modern locality, optional reconstructed paleocoordinate and country code. Period files are loaded on demand. The sample is suitable for interface demonstrations and bounded comparisons; it is not an exhaustive PBDB export.

Observed counts are not treated as true richness. Rock availability, collecting intensity, geography, taxonomic practice and temporal resolution all affect the displayed patterns. Missing records are never interpreted as biological absence.

## Geological time

`data/time-scale.json` spans 4,567 Ma and records the exact display version `ICS-2026-06`. Boundary ages may change in later International Chronostratigraphic Chart revisions, so the version is part of every exported query manifest.

## Paleogeography

The 12 GeoJSON files are period-level visual snapshots. They are not a continuous plate-rotation model. Occurrence markers can use reconstructed coordinates where present or modern collection coordinates; the two coordinate models are always labeled.

## Tree representations

The cladogram is a compact educational synthesis. Branch length has no time meaning. The first-appearance view positions nodes using curated fossil-record first appearances and is explicitly a proxy rather than a divergence-time estimate. Fossil-range bars show rounded first-to-last appearance intervals and remain sampling-dependent.

For the flagship perissodactyl catalog, a separate evidence ledger stores selected published divergence estimates, method labels and reported uncertainty. Estimates from unlike studies are not silently merged into a synthetic clock. The radial tree is a navigation view only.

## Local workspace and media

Recent Data Lab query definitions are stored in browser IndexedDB, capped to 20 entries and never uploaded. Service-worker caches store immutable app/data assets separately. Museum media records link to institutional source pages instead of copying images without verified reuse terms; each entry carries a license reminder.

## Reproducibility and validation

Run `npm run data:manifest` after an intentional data update, then `npm run data:validate`. The manifest stores record counts and SHA-256 checksums for every source file. Validation checks interval continuity, identifiers, references, story links, tree ranges, occurrence fields, GeoJSON structure and manifest counts. `npm run verify` performs the full release gate.
