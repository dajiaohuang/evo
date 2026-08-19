# Dataset changelog

## 2026.08-static-v3 — 2026-08-19

- Rebuilt the geological-time table against the official ICS 2026/06 chart, retaining boundary uncertainty, approximation status, definition type and source locator instead of presenting every boundary as an unqualified float.
- Reconciled all 179 navigation entities against the pinned PBDB 2026-07-19 full taxon snapshot: 127 exact accepted-name/rank matches now publish verified IDs and 52 unresolved concepts explicitly withhold external IDs.
- Rebuilt descendant linkage with accepted IDs plus retained PBDB classification names. The explicit coverage report links 11,673 of 13,600 bounded occurrence rows (85.83%); zero-result UI states remain labeled as sample observations rather than biological absence.
- Corrected the Hipparionini range and separated North American range, Old World dispersal and regional last-appearance windows; revised Teleoceras to contested locality/species-dependent ecology and separated Coelodonta fossil-range and genomic evidence.
- Made event confidence and references derive from claim IDs, split early Homo dispersal from later Homo sapiens/archaic admixture, and converted story steps to claim-level evidence links. Four stories publish with limitations; six evidence-incomplete stories are withheld from runtime packages and search.
- Added explicit media creator, rights, caption, alternative-text, subject-scope and review fields; removed the unused contradictory vertebrate cladogram; and added semantic validation for source fitness, parent/child ranges, story coverage, external-ID resolution and orphan data.
- Added a complete 179-entity bilingual registry with stable IDs, entity types, definitions, composition scopes, evidence status, explicit availability, review scope and package ownership.
- Froze Static Package schema v3 after the Cetartiodactyla, Dinosauria and Angiospermae pilots, then brought all 23 scientific ownership packages to the Gold v2 dossier baseline. Perissodactyla retains the richer flagship profile, claim-link, topology and calibration extensions.
- Migrated Perissodactyla profiles, topology and calibrations into `data/packages/mammalia/perissodactyla/` while retaining shared claims, references, events and stories as single canonical sources.
- Added canonical-to-runtime generation for Core data, package knowledge, two-level search indexes, package × period occurrence shards, per-package ZIP downloads and map manifests.
- Replaced Vite JSON occurrence chunks with checksum-verified static fetches and Worker decompression/parsing.
- Added explicit offline package controls and limited the default PWA precache to the shell and Core data.
- Added registry, package, claims, translation, provenance, review, source-size, Pages-size and static-reachability release gates.
- Retained all 13,600 existing occurrence rows and enriched the unchanged identifiers with PBDB higher classification. Exact registry IDs plus explicit classification rules assign 12,064 rows to scientific packages; 1,536 unresolved rows remain clearly labeled in `atlas-core` rather than being assigned speculatively.

## 2026.08-m2 — 2026-08-19

- Removed all 12 provenance-unknown paleogeographic GeoJSON snapshots from the repository and build; the continental layer is withheld until source and redistribution provenance is complete.
- Split application version `0.8.0`, dataset version `2026.08-m2`, schema version and commit provenance into distinct manifest fields.
- Separated three curation choices into `editorial-decisions.json` and upgraded scientific claims with kind, evidence relation and confidence rationale.
- Marked two rhinoceros divergence estimates as unmapped instead of attaching them to broader topology nodes.
- Kept exact and descendant taxon query results in independent caches and exposed index fallback semantics.

## 2026.08-m1 — 2026-08-18

- Added a versioned 4,567 Ma time scale derived from ICS 2026/06 display boundaries.
- Retained 13,600 bounded, non-random PBDB API-prefix rows across 12 period chunks and enriched them without changing row membership or order.
- Added 10 curated taxon profiles, 18 evolution events and 10 guided stories.
- Added a reference registry and explicit evidence/uncertainty fields.
- Separated the atlas navigation ontology from a scoped Perissodactyla topology hypothesis and added first/last-appearance interpretation guardrails.
- Added a 17-node perissodactyl subtree linked to all ten flagship profiles.
- Added three study-specific divergence estimates with reported uncertainty kept separate from fossil ranges.
- Added ten museum media/source records and a 20-place bilingual search index.
- Added claim-level evidence, domain references, schema validation, scientific regression assertions, descendant indexes and per-file SHA-256 checksums.
- Added an offline PWA shell with lazy runtime data caching and a browser-local IndexedDB query workspace.

This changelog describes the bundled atlas snapshot, not upstream database release history.
