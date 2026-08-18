# Data licenses and provenance

The MIT license in `LICENSE` applies to software only. It does not relicense third-party scientific data, publications, names, institutional pages or media.

| Material | Location | Source / status | Reuse terms |
| --- | --- | --- | --- |
| Fossil occurrence records | `data/fossils/` | Paleobiology Database Data Service 1.2; bounded API-prefix snapshot assembled 2026-08-18 | PBDB collection records identify their Creative Commons status as CC0. Preserve PBDB occurrence, collection and reference identifiers and cite PBDB. Consult the upstream collection page if a record-specific right matters. |
| Geological boundaries and colors | `data/time-scale.json` | International Chronostratigraphic Chart 2026/06 | ICS publishes its current chart under CC BY 4.0. Attribute ICS and cite the exact version. Numerical ages remain revision-prone. |
| Atlas ontology, profiles, events, stories, claim ledger and indexes | `data/navigation/`, `data/taxa/`, `data/events.json`, `data/stories.json`, `data/evidence/`, `data/indexes/` | Original Evo Atlas compilation, with cited scientific sources | CC BY 4.0 for original compilation content. Underlying facts, quotations and source works retain their own status. |
| Paleogeographic geometry | not bundled | The legacy, provenance-unknown GeoJSON snapshots were removed in dataset `2026.08-m2` | No geometry is distributed. A future snapshot must record source dataset/version/URL, license, attribution, processing script/commit, reconstruction age/model and geometry checksum before release. |
| External museum media | `data/media.json` | Links only; no museum image bytes are bundled | Rights remain with the named institutions. Follow each source page's terms before reuse. |

Scientific references are metadata and links, not redistributed article text. See `THIRD_PARTY_NOTICES.md`, `MEDIA_ATTRIBUTION.json`, `data/sources/pbdb-occurrence-bundle.json` and `data/manifest.json` for the exact snapshot and limitations.
