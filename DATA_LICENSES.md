# Data licenses and provenance

The MIT license in `LICENSE` applies to software only. It does not relicense third-party scientific data, publications, names, institutional pages or media.

| Material | Location | Source / status | Reuse terms |
| --- | --- | --- | --- |
| Fossil occurrence records | `data/fossils/` | Paleobiology Database Data Service 1.2; bounded API-prefix membership assembled 2026-08-18 and higher classification refreshed 2026-08-19 | PBDB collection records identify their Creative Commons status as CC0. Preserve PBDB occurrence, collection and reference identifiers and cite PBDB. Consult the upstream collection page if a record-specific right matters. |
| Geological boundaries and colors | `data/time-scale.json` | International Chronostratigraphic Chart 2026/06 | ICS publishes its current chart under CC BY 4.0. Attribute ICS and cite the exact version. Numerical ages remain revision-prone. |
| Atlas registry, packages, ontology, profiles, events, stories, claim ledger and indexes | `data/registry/`, `data/packages/`, `data/navigation/`, `data/events.json`, `data/stories.json`, `data/evidence/`, `data/indexes/` | Original Evo Atlas compilation, with cited scientific sources | CC BY 4.0 for original compilation content. Underlying facts, quotations and source works retain their own status. |
| Paleogeographic geometry | not bundled | The legacy, provenance-unknown GeoJSON snapshots were removed in dataset `2026.08-m2` | Paleogeographic geometry is not included in the current `2026.08-static-v3` deployment. Legacy repository history may still contain the withdrawn provenance-unknown snapshots and must not be treated as licensed project data. A future snapshot must record source dataset/version/URL, license, attribution, processing script/commit, reconstruction age/model and geometry checksum before release. |
| External museum media | `data/media.json` | Links only; no museum image bytes are bundled | Rights remain with the named institutions. Follow each source page's terms before reuse. |

Scientific references are metadata and links, not redistributed article text. See `THIRD_PARTY_NOTICES.md`, `MEDIA_ATTRIBUTION.json`, `data/sources/pbdb-occurrence-bundle.json` and `data/manifest.json` for the exact snapshot and limitations.

Files generated under `dist/data/` or ignored `public/data/` are compact runtime projections of these canonical sources. They do not change the upstream or compilation licenses. Package ZIPs contain the same runtime representation and its manifest, not an independently relicensed dataset.
