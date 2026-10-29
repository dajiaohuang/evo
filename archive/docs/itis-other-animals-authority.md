# ITIS authority sidecars for Other Animals

Release `2026.08-static-v5-rc68` pins 26 disjoint animal scopes to the official Integrated Taxonomic Information System monthly SQLite export dated 2026-08-26 (`itisSqlite082626`, DOI `10.5066/F7KH0KBK`, CC0 1.0). These are release-scoped nomenclatural crosswalks, not biological dossiers, phylogenies, fossil records, final classification decisions, or claims that COL and ITIS use identical species concepts.

| Scope | COL accepted | Exact accepted | Official redirect | Ambiguous | Unmatched | ITIS-only | Files |
|---|---:|---:|---:|---:|---:|---:|---:|
| Platyhelminthes | 27,007 | 7,393 | 239 | 23 | 19,352 | 1,245 | 15 |
| Rotifera | 2,467 | 701 | 4 | 0 | 1,762 | 195 | 3 |
| Bryozoa | 20,367 | 655 | 15 | 0 | 19,697 | 387 | 3 |
| Nemertea | 1,364 | 142 | 1 | 0 | 1,221 | 52 | 2 |
| Tunicata + Cephalochordata | 3,176 | 366 | 8 | 0 | 2,802 | 66 | 2 |
| Acanthocephala | 1,325 | 1,320 | 0 | 5 | 0 | 5 | 3 |
| Entoprocta | 170 | 170 | 0 | 0 | 0 | 1 | 2 |
| Tardigrada | 1,454 | 1,454 | 0 | 0 | 0 | 7 | 3 |
| Chaetognatha | 132 | 92 | 0 | 0 | 40 | 24 | 2 |
| Ctenophora | 197 | 58 | 0 | 0 | 139 | 7 | 2 |
| Kinorhyncha | 362 | 91 | 1 | 0 | 270 | 58 | 2 |
| Gastrotricha | 903 | 574 | 8 | 1 | 320 | 94 | 2 |
| Priapulida | 23 | 19 | 0 | 0 | 4 | 0 | 1 |
| Onychophora | 235 | 235 | 0 | 0 | 0 | 0 | 1 |
| Hemichordata | 132 | 132 | 0 | 0 | 0 | 7 | 2 |
| Sipuncula | 146 | 146 | 0 | 0 | 0 | 59 | 2 |
| Nematomorpha | 356 | 187 | 6 | 0 | 163 | 48 | 2 |
| Phoronida | 19 | 11 | 8 | 0 | 0 | 0 | 1 |
| Gnathostomulida | 100 | 90 | 0 | 0 | 10 | 4 | 2 |
| Loricifera | 46 | 22 | 0 | 0 | 24 | 0 | 1 |
| Micrognathozoa | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| Cycliophora | 2 | 2 | 0 | 0 | 0 | 0 | 1 |
| Placozoa | 4 | 4 | 0 | 0 | 0 | 0 | 1 |
| Xenacoelomorpha | 441 | 370 | 6 | 1 | 64 | 58 | 2 |
| Orthonectida | 24 | 22 | 0 | 0 | 2 | 3 | 2 |
| Dicyemida | 119 | 85 | 0 | 0 | 34 | 7 | 2 |
| **Total** | **60,572** | **14,342** | **296** | **30** | **45,904** | **2,327** | **62** |

Every strict accepted COL26.8 species inside a declared scope receives exactly one outcome. Matching removes only an exact trailing COL authorship field, normalizes Unicode representation and whitespace, and permits one representation-only parenthesized subgenus form where a generator declares it. Case, diacritics, punctuation, genus, and species epithet remain significant. An accepted result requires one valid current ITIS species; a redirect requires an official invalid ITIS species name with one valid current target. Multiple exact targets remain ambiguous and absent exact evidence remains unmatched. No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, or taxon-substituted matching is used.

`other-animals` is a deterministic residual package containing many unrelated animal phyla. Each sidecar's `nonApplicable` value is the remainder of the same 99,161-species package outside that sidecar's scope. Those values overlap and must never be added. ITIS current species without a demonstrable COL26.8 member remain separate upstream-only rows with null COL ownership.

Root boundaries are audited before import. The Xenacoelomorpha scope uses valid phylum TSN `914162` and includes Acoela plus Xenoturbellida without adding the obsolete Acoela root a second time. Dicyemida uses order TSN `57410` and excludes the three Heterocyemida species below the broader Rhombozoa root. Entoprocta uses valid TSN `156732`; invalid `Kamptozoa` TSN `914161` has multiple accepted targets and is audit evidence only. Each scope-specific document and ledger records further root and package-boundary details.

Canonical descriptors and shards live under `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`. Import ledgers under `data/sources/` pin the ITIS archive/database hash, exact SQL method, COL registry and ownership hashes, generator hash, output bytes, and SHA-256 values.

GitHub Pages uses `web-light`: it publishes all 26 source/method/scope summaries and the canonical 62-file non-empty inventory, but zero authority rows. Android and iOS build `22` use `native-full` and contain every one of the 62,899 records byte-for-byte; scopes with no ITIS-only records omit their zero-row placeholder gzip from runtime delivery. A native COL lookup selects the sole inclusive lexicographic COL-ID range and never loads an upstream-only shard. The split keeps Pages deployable while preserving complete app data.
