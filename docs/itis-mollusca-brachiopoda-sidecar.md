# ITIS Mollusca and Brachiopoda nomenclatural sidecar

`scripts/build-itis-mollusca-brachiopoda-sidecar.mjs` deterministically joins the
pinned COL26.8 accepted-species hierarchy to the official 2026-08-26 ITIS
SQLite export. It uses only the declared Mollusca (`M2L` / TSN `69458`) and
Brachiopoda (`B8V3K` / TSN `156755`) roots. Matching is exact after the shared
representation-only normalisation; it never uses fuzzy name matching or taxon
substitution.

The package also owns the COL Graptolithina root (`KZ`). It is a declared
fossil/archival teaching boundary and is explicitly non-applicable to this
Mollusca-and-Brachiopoda ITIS crosswalk. The import ledger records its exact COL
accepted-species total and ITIS audit totals, but creates no row-level mapping
for it. This avoids treating a name coincidence as a taxonomic assertion.

The descriptor and ledger list deterministic non-overlapping COL-ID JSONL gzip
shards and a separate ITIS-only current-species partition. A Web-light release
can publish the descriptor plus its canonical hash inventory; complete Android
and iOS releases must embed every listed byte-identical row shard. This sidecar
does not change runtime delivery or application versioning.
