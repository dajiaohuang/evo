# ITIS Ochrophyta authority sidecar

This release-pinned sidecar compares the exact strict accepted-species
Ochrophyta partition in Catalogue of Life `COL26.8` (2026-08-20) with the
official ITIS SQLite export `itisSqlite082626` (2026-08-26).

## Auditable boundary

- COL root: accepted phylum `Ochrophyta`, usage ID `5H`, below Chromista;
  1,101 strict accepted species.
- ITIS root: accepted Division `Ochrophyta`, TSN `969917`; 3,399 current
  species and 795 species-level synonym links.
- Exact representation-only matching yields 1,097 accepted names, no synonym
  redirects, four explicitly ambiguous exact names, and no unmatched COL rows.
  The 2,296 remaining ITIS current species are retained as null-COL rows.

No wider chromist lineage, inferred classification, or fuzzy name match is
used. The sidecar is a frozen nomenclatural crosswalk, not a global checklist,
phylogeny, biological dossier, species-concept equivalence claim, or final
classification authority.

GitHub Pages can publish the descriptor summary only. Android and iOS
native-full inventories must include the descriptor plus both checksum-addressed
JSONL gzip shards byte-for-byte.

Sources: ITIS, DOI [10.5066/F7KH0KBK](https://doi.org/10.5066/F7KH0KBK), CC0
1.0; Catalogue of Life `COL26.8`, DOI
[10.48580/dgywk](https://doi.org/10.48580/dgywk), CC BY 4.0.
