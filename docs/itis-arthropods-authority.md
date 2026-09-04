# ITIS arthropod authority sidecars

Release `2026.08-static-v5-rc71` adds four release-pinned, exact ITIS `2026-08-26` nomenclatural crosswalks for the declared COL26.8 arthropod scopes. They are authority sidecars, not biological dossiers, phylogenies, fossil records, expert reviews, final classifications, or assertions that ITIS and Catalogue of Life (COL) use identical species concepts.

The inputs are the official ITIS monthly SQLite export `itisSqlite082626` (CC0 1.0; DOI `10.5066/F7KH0KBK`) and the immutable COL26.8 release dated 2026-08-20 (CC BY 4.0; DOI `10.48580/dgywk`). Descriptors and source ledgers pin input hashes, exact matching rules, file bytes and SHA-256 values.

## Scope and exact outcomes

| Scope | Package and exact COL root | ITIS root | COL outcomes | Accepted | Official redirect | Ambiguous | Unmatched | ITIS-only | Native files |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Insecta | `crustaceans-insects`, `H6` | TSN `99208` | 941,223 | 176,406 | 2,887 | 692 | 761,238 | 27,357 | 100 |
| Crustacea | `crustaceans-insects`, `KZX8B` | TSN `83677` | 80,890 | 26,395 | 115 | 38 | 54,342 | 5,991 | 41 |
| Chelicerata | `trilobites-chelicerates`, `KZWYC` | TSN `82697` | 99,511 | 74,948 | 146 | 141 | 24,276 | 5,714 | 17 |
| Myriapoda | `crustaceans-insects`, `L2G4H` + `93` | TSN `563885` | 17,351 | 5,904 | 58 | 17 | 11,372 | 544 | 3 |
| **Total** | — | — | **1,138,975** | **283,653** | **3,206** | **888** | **851,228** | **39,606** | **161** |

Every selected COL row has one explicit outcome. Accepted results resolve to exactly one valid ITIS current species; a redirect follows official ITIS species-synonym evidence to exactly one current species. Multiple exact current targets remain ambiguous, and absent exact evidence remains unmatched. Matching is representation-only: no fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, broader-root, or taxon-substitution inference is used.

The packages are mixed navigation packages, so their non-applicable remainders are not additive. Insecta, Crustacea and Myriapoda remain separate exact scopes in `crustaceans-insects`; the Myriapoda sidecar excludes the one `Euthycarcinoidea` COL record and covers 17,351 living COL rows from exact roots `L2G4H` and `93` (Myriapoda and Chilopoda). Chelicerata is the living branch of `trilobites-chelicerates`; all 4,615 Trilobita records remain explicitly non-applicable because ITIS has no current Trilobita authority branch.

## Delivery contract

- GitHub Pages uses `web-light`: it publishes the collection descriptors, sources, scope boundaries, methods, counts, limitations, and canonical byte/SHA-256 inventory, but no authority row shard.
- Android and iOS build `25` use `native-full`: they copy every one of the 161 non-empty JSONL gzip files byte-for-byte from the immutable inventory. This is 1,138,975 COL outcomes plus 39,606 null-COL ITIS-only current species, or 1,178,581 native authority records.
- A native COL-ID lookup selects at most one ordered, inclusive range shard. It does not route a COL lookup into an ITIS-only partition.

The mobile finalizer, Android instrumentation tests, and iOS application tests verify collection identity and counts, release-inventory bytes and SHA-256 values, and physical bundled assets. Pages smoke tests verify that the summary is present while every row shard remains absent.

## Canonical locations

- Insecta, Crustacea, and Myriapoda: `data/packages/arthropoda/crustaceans-insects/nomenclature/`.
- Chelicerata: `data/packages/arthropoda/trilobites-chelicerates/nomenclature/`.
- Import ledgers and canonical crosswalks: `data/sources/itis-{insecta,crustacea,chelicerata,myriapoda}-*`.

These crosswalks do not provide a complete checklist beyond their frozen scope, species-concept equivalence, ecology, distribution, media, fossil evidence, or phylogeny.
