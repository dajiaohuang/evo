# ITIS Acanthocephala authority sidecar

This release-pinned sidecar joins the strict accepted-species rows below the COL26.8 `Acanthocephala` root (`622BD`) to the official ITIS SQLite export dated 2026-08-26 (root TSN `64238`). The package audit found 1,325 COL species and all 1,325 are owned by the mixed `other-animals` remainder route; the other 97,836 package species are explicitly non-applicable and are not forced into this crosswalk.

The import uses representation-only normalization and exact current-name or official species-synonym evidence. It produced 1,320 direct accepted matches, 5 exact ambiguities, no redirects, and no unmatched COL rows. ITIS contains 1,330 valid Acanthocephala species; five current species are retained in a separate ITIS-only shard with no COL usage ID. No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, or taxon-substituted matching is used.

The descriptor and two deterministic COL-ID range shards plus one ITIS-only shard are under `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`. GitHub Pages consumes only the descriptor summary; Android and iOS native-full inventories must contain every listed shard byte-for-byte. The generator is `scripts/build-itis-acanthocephala-sidecar.mjs`; rerun it only with the verified ITIS SQLite whose SHA-256 is recorded in the source ledger.
