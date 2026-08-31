# ITIS authority sidecars for Other Animals

Release `2026.08-static-v5-rc67` pins five disjoint animal scopes to the official Integrated Taxonomic Information System monthly SQLite export dated 2026-08-26 (`itisSqlite082626`, DOI `10.5066/F7KH0KBK`, CC0 1.0). They are nomenclatural crosswalks, not biological dossiers, phylogenies, final classification decisions, fossils, or claims that COL and ITIS use identical species concepts.

| Scope | COL accepted | Exact accepted | Official redirect | Ambiguous | Unmatched | ITIS-only | Files |
|---|---:|---:|---:|---:|---:|---:|---:|
| Platyhelminthes | 27,007 | 7,393 | 239 | 23 | 19,352 | 1,245 | 15 |
| Rotifera | 2,467 | 701 | 4 | 0 | 1,762 | 195 | 3 |
| Bryozoa | 20,367 | 655 | 15 | 0 | 19,697 | 387 | 3 |
| Nemertea | 1,364 | 142 | 1 | 0 | 1,221 | 52 | 2 |
| Tunicata + Cephalochordata | 3,176 | 366 | 8 | 0 | 2,802 | 66 | 2 |
| **Total** | **54,381** | **9,257** | **267** | **23** | **44,834** | **1,945** | **25** |

Every strict accepted COL26.8 species descending from the declared roots receives exactly one status. Matching removes only an exact trailing COL authorship field, normalizes Unicode representation and whitespace, and permits one representation-only parenthesized subgenus form. Case, diacritics, punctuation, genus, and species epithet remain significant. An accepted result requires one valid current ITIS species; a redirect requires an official invalid ITIS species name with one valid current target. Multiple exact targets remain ambiguous and absent exact evidence remains unmatched. There is no fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, or taxon-substituted matching.

`other-animals` is a deterministic residual package containing many unrelated animal phyla. Each sidecar's `nonApplicable` count is the remainder of the same 99,161-species package outside that sidecar's declared scope. Those five counts overlap and must never be added. ITIS current species without a demonstrable COL26.8 member remain separate upstream-only rows with null COL ownership.

The canonical descriptors and shards live under `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`; import ledgers under `data/sources/` pin the ITIS archive/database hash, SQL method, COL registry and ownership hashes, generator hash, output bytes, and SHA-256 values.

GitHub Pages uses `web-light`: it publishes the five complete summaries and the canonical 25-file inventory but zero authority rows. Android and iOS build `21` use `native-full` and contain every file byte-for-byte. A native lookup selects the sole inclusive lexicographic COL-ID range and never loads an upstream-only shard. This split keeps Pages deployable while preserving complete app data.
