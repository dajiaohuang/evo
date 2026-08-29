# Dataset changelog

## 2026.08-static-v5-rc4 — 2026-08-29

- Replaced the withdrawn provenance-unknown map series with 12 checksum-addressed CAO2024 v2.4 coastline snapshots, reconstructed at ICS 2026/06 period midpoints under CC BY 4.0 and linked to a reproducible GPlates import ledger.
- Kept land-model geometry, PBDB reconstructed coordinates and modern collection coordinates as three explicitly separate evidence layers; no cross-model spatial alignment is implied.
- Added lazy, checksum-verified map delivery and visible model/age/attribution/uncertainty context in the Explorer.
- Replaced the promotional home screen with a dashboard-first entry, four geological preset scenes, a first-visit tutorial choice and folded detailed tools on desktop and mobile.
- Corrected high-confidence package defects found in the first full audit: the Cerling DOI, overlapping package roots, Lissamphibia/Lepidosauria labels, Mosasauridae placement, Graptolithina extant range and Ptychopariida historical-grade semantics.

## 2026.08-static-v5-rc3 — 2026-08-20

- Added a validated query ledger to every package. Perissodactyla records complete pinned PBDB pagination and profile subqueries; all legacy package partitions explicitly retain their bounded, non-random coverage status.
- Replaced ambiguous scientific-stage labels with the public ladder `generated-scaffold → structured → source-linked → curated-draft → published`.
- Added explicit automated-only review decisions, reviewed dataset versions and per-reviewer decisions without claiming human scientific review.
- Added content-origin labels to every visible Perissodactyla profile field and a release gate for the flagship story’s step-to-claim-to-reference chain.
- Added bilingual static knowledge pages, canonical and social metadata, structured data, sitemap/feed output and public evidence-correction context.

## 2026.08-static-v5-rc2 — 2026-08-20

- Split direct entity links from broad higher-classification placement and made zero-sample package coverage explicit.
- Added evidence levels for canonical ranges, source/generated separation, typed field claims and source-metadata review gates.
- Added complete paginated Perissodactyla occurrence queries with checksums and concept-review query gating.
- Added relationship kinds, separate automated and human PBDB decisions, Myriapoda coverage and an explicit non-whole-life scope statement.
- Made release-history retention checksum-first, failure-blocking, atomic and byte-budgeted.

## 2026.08-static-v5-rc1 — 2026-08-20

- Separated canonical `entityKind`, `contentLevel` and PBDB `externalResolutionStatus`; unresolved biological taxa remain taxa.
- Added lineage-aware PBDB concept diagnostics, corrected Meganeura, Tetrapodomorpha, Bryophyta and Graptolithina navigation semantics, and introduced a canonical range-evidence ledger.
- Replaced the PBDB-keyed occurrence index with a stable entity-ID index, disjoint match-method counts, frozen global/package regression gates and a public quality dashboard.
- Added field- and evidence-item claim links, mandatory supporting sources for scientific claims, source-role/fitness metadata and non-bypassable human-review requirements for Gold.
- Added generated-file drift checks, retained release inventories, stale-cache activation cleanup and full ICS boundary metadata in the Data page.

## 2026.08-static-v4-rc1 — 2026-08-19

- Moved every runtime payload and manifest under an immutable dataset-versioned release path; `current.json` remains the only mutable bootstrap.
- Added checksums for package, occurrence and map manifests, enforced package/dataset coherence in the client, and added one cache-evicting network retry after checksum failure.
- Versioned Workbox runtime caches by dataset and made “Clear offline data” remove both explicit package caches and runtime data caches.
- Replaced the forced `core | gold-v2` flag with separate platform maturity, scientific maturity, automated review and scientific review axes under candidate package schema v4.
- Migrated Perissodactyla to `curated-draft`, the other 22 scientific packages to `generated-scaffold`, and removed the misleading 23/23 Gold claim.

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
