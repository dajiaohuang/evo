# ITIS Amphibia TSN sidecar

`data/packages/vertebrata/amphibia/nomenclature/itis-tsn-sidecar.json` is a deterministic, release-pinned exact-name crosswalk between the strict COL26.8 Amphibia ownership slice and the official ITIS monthly SQLite export `itisSqlite082626`.

The scope is all 8,923 COL26.8 records with `rank=species`, `status=accepted`, and exact ancestor usage ID `PH`. ITIS is queried from valid class TSN `173420` (`Amphibia`) using the exact SQL retained in `scripts/build-itis-amphibia-sidecar.mjs`. The checked-in import ledger records the complete query result counts, source/output hashes, SQLite root audit and stable locator paths.

Matching only removes an exactly supplied COL authorship suffix and applies representation-only Unicode/whitespace/subgenus normalization. It accepts direct current-name equality or an official ITIS `synonym_links` redirect; it never applies fuzzy, case-folded, diacritic-stripped, token-reordered or taxon-substituted matching. Ambiguous and unmatched COL records remain explicit. Current ITIS Amphibia species with no exact COL evidence are retained in `records.itisUpstreamOnly` with `colUsageId: null`, rather than being assigned to COL.

This is a CC0 nomenclatural identifier/status sidecar, not a final classification authority, species-concept equivalence assertion, biological dossier, phylogeny or review decision. The future delivery contract is intentionally declarative only: a Web light client may lazily opt in; an approved package ZIP and Android/iOS full-data build must copy the same checksum-addressed bytes. This change does not alter the formal runtime or release manifests.
