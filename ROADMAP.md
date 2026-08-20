# Evo Atlas roadmap

The product goal is not to claim whole-life completeness. It is to make every published object clear about what is known, why, what remains uncertain, how it was reviewed and how it can be reproduced or corrected.

## Delivered — integrated static-max engineering baseline

The repository now contains the engineering scope described across the v0.12–v0.17 plan:

- Minimal digest-bound review packets and freshness checks, with no Review Center, accounts, review database or embedded AI service.
- A seven-item primary navigation: Atlas, Catalog, Stories, Explorer, Research, Data and About.
- Bilingual static publication for taxa, events, geological intervals, formations, fossil localities, traits, references, media, stories, methods and retained dataset releases.
- Full ICS 2026/06 eon/era/period/epoch/age navigation, with source identifiers, boundary uncertainty and documented source-projection notes.
- Explorer time windows and playback; modern/reconstructed coordinates; point, cluster and density maps; sample-centroid latitude trajectories; tree/range/radial/calibration views; clade collapse; lineage trace; trait/event overlays; Newick/Nexus export; and a seven-stage evidence trace.
- Research query builder, query history/diff, retained-release checksum comparison, CSV/JSON/GeoJSON import, local read-only DuckDB-Wasm SQL, joins, grouping, aggregation, Parquet export, IndexedDB notes/favorites and reproducible ZIP exports.
- Published claim-linked stories, evidence-blocked drafts, era/taxon/theme discovery, course collections, glossary, quiz, local Story Builder, JSON exchange, teacher links and iframe embeds.
- Twenty-four structurally complete packages with reference subsets, research examples and an explicit package-specific phylogeny availability record.
- Unit, schema, accessibility, keyboard, offline/version, cross-browser and visual-regression contracts plus an honest machine-readable v1 readiness report.

## Scientific work that automation must not claim as complete

The current v1 report intentionally remains below release readiness:

- 1/24 packages are at least `source-linked`; the remaining package scaffolds need scientific enrichment.
- 0/24 packages have a current completed maintainer review. Perissodactyla is `in-review`, not reviewed.
- 10/189 entities have direct claim-level scientific traceability; the remainder require claims or an explicit `unavailable` disposition.

These are content and maintainer-decision gates, not software defects. Automated checks may verify structure and freshness but may not promote scientific maturity or fabricate review decisions.

## Next maintainer actions

1. Upload the generated Perissodactyla packet and require explicit reading of every `FILE_MANIFEST.json` entry.
2. Resolve or record every finding, regenerate the packet, and only then let the maintainer set `reviewed` or `reviewed-with-caveats` against the exact digest.
3. Deepen Tetrapod Transition, Angiospermae and Dinosauria as the first cross-domain package templates.
4. Continue the published package waves until source-link, claim-traceability and maintainer-review v1 gates are satisfied.

## Deliberately excluded

- A backend, login, account or cloud annotation system.
- A Review Center, review task database, multi-reviewer assignment or AI-report archive.
- An embedded ChatGPT API or repository-managed user API key.
- Paleogeographic geometry without complete model, license, processing and checksum provenance.
- Biological richness, absence, migration or calibrated-divergence claims inferred from raw occurrence displays.
- Any maintainer-reviewed badge created by automation or without an exact current content digest.
