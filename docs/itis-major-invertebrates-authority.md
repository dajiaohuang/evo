# ITIS authority sidecars for major invertebrates

Release `2026.08-static-v5-rc70` adds five release-pinned, exact ITIS `2026-08-26` authority scopes. They are nomenclatural crosswalks, not biological dossiers, phylogenies, fossil records, final classifications, or evidence that Catalogue of Life (COL) and ITIS use identical species concepts.

The inputs are the official ITIS monthly SQLite export `itisSqlite082626` (CC0 1.0; DOI `10.5066/F7KH0KBK`) and the immutable COL26.8 release dated 2026-08-20 (CC BY 4.0; DOI `10.48580/dgywk`). Every descriptor and import ledger pins its input hashes, exact SQL/matching policy, output bytes, and SHA-256 values.

## Scope and outcomes

| Scope | COL root / ITIS root | COL outcomes | Exact accepted | Official redirect | Ambiguous | Unmatched | ITIS-only | Native files |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Nematoda | `NM` / TSN `59490` | 19,604 | 1,899 | 36 | 1 | 17,668 | 1,245 | 4 |
| Annelida | `NN` / TSN `64357` | 18,982 | 4,301 | 122 | 1 | 14,558 | 5,092 | 4 |
| Mollusca + Brachiopoda | `M2L` + `B8V3K` / TSNs `69458` + `156755` | 159,794 | 7,212 | 256 | 16 | 152,310 | 4,289 | 60 |
| Porifera + Cnidaria | `B8TXQ` + `CN2` / TSNs `46861` + `48738` | 30,521 | 4,242 | 50 | 3 | 26,226 | 2,218 | 6 |
| Echinodermata | `CHN` / TSN `156857` | 11,891 | 3,692 | 51 | 9 | 8,139 | 278 | 3 |
| **Total** | — | **240,792** | **21,346** | **515** | **30** | **218,901** | **13,122** | **77** |

Each COL row inside a declared scope has exactly one explicit outcome. An accepted result is one exact valid ITIS current species; a redirect follows an official ITIS invalid-name synonym link to one valid current species. Multiple exact current targets remain ambiguous, and missing exact evidence remains unmatched. Matching is representation-only: it does not use fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, authority-only, higher-rank, broader-root, or neighboring-taxon inference.

The Mollusca + Brachiopoda package keeps its seven `Graptolithina` accepted species outside this ITIS scope. The Porifera + Cnidaria and Echinodermata packages have no additional accepted-species roots. Nematoda and Annelida are separate scopes within the 99,161-species `other-animals` residual pack; their non-applicable remainders overlap and must not be summed.

## Delivery contract

Every collection has a `web-light` and `native-full` contract:

- GitHub Pages publishes the source, root/scope boundary, matching rule, outcome counts, limitations, and canonical file inventory with byte and SHA-256 values. It publishes no authority row shard.
- Android and iOS build `24` copy all 77 non-empty JSONL gzip shards byte-for-byte from the immutable release inventory. A native COL-ID lookup selects at most one ordered inclusive range shard and never reads an ITIS-only shard for that lookup.
- Echinoderms exposes two independent authority collections: the CC BY 4.0 WoRMS AphiaID crosswalk and the CC0 ITIS TSN crosswalk. They are never merged, used to overwrite one another, or treated as concept equivalence. WoRMS now follows the same Pages-summary/native-full delivery split.

`native-full` includes the 240,792 COL outcomes and 13,122 null-COL ITIS-only current species, for 253,914 records. Empty placeholder shards are not copied as pretend content. The mobile finalizer and Android/iOS tests verify each declared collection's counts, release-inventory byte size and SHA-256, and physical bundled asset.

## Canonical locations

- Nematoda and Annelida: `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`.
- Mollusca + Brachiopoda: `data/packages/invertebrata/molluscs-brachiopods/nomenclature/`.
- Porifera + Cnidaria: `data/packages/invertebrata/sponges-cnidarians/nomenclature/`.
- Echinodermata: `data/packages/invertebrata/echinoderms/nomenclature/`.
- Source-specific import ledgers: `data/sources/itis-*-sidecar-import-ledger.json`.

These scope and delivery facts do not confer a complete taxonomic checklist, expert review, species concept equivalence, ecology, distribution, media, fossil evidence, or phylogeny.
