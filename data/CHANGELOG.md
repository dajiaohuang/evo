# Dataset changelog

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
