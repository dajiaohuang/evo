# ITIS Micrognathozoa sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-micrognathozoa-sidecar.json` pins an exact nomenclatural crosswalk between the sole strict accepted COL26.8 Micrognathozoa species descending from root `54` and the official ITIS `itisSqlite082626` SQLite export.

The valid ITIS phylum root is TSN `808373`. Its one valid species, *Limnognathia maerski*, exactly matches the sole COL member. There are no redirects, ambiguities, unmatched COL names, synonym links, or ITIS-only current species. The explicit zero-record upstream-only shard remains part of the complete, checksummed native delivery contract.

Matching removes only the exact supplied COL authorship suffix and applies NFC, whitespace and one parenthesized-subgenus representation normalization. It never uses fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching. This CC0 sidecar is neither a global checklist nor a final classification, phylogeny, species-concept equivalence assertion, biological dossier or scientific review.

GitHub Pages may publish the descriptor and hashes only (`web-light`). Android and iOS must package the descriptor and both listed JSONL gzip files byte-for-byte (`native-full`). This scope sidecar does not alter a release manifest by itself.
