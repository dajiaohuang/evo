# ITIS Xenacoelomorpha authority sidecar

This auditable sidecar fixes the ITIS monthly SQLite export dated 2026-08-26 (CC0-1.0; DOI `10.5066/F7KH0KBK`) and its valid Phylum `Xenacoelomorpha` root TSN `914162`. The exact scope includes the valid ITIS descendants Acoela and Xenoturbellida. It deliberately does not use the older invalid ITIS Acoela order TSN `53966`.

COL26.8 scope is the exact accepted `Xenacoelomorpha` Phylum root usage ID `7NF2K`; only strict accepted species descending from that root are eligible. The deterministic output records every eligible COL species as accepted, an official-ITIS-synonym redirect, ambiguous, or unmatched. It uses representation-only normalization and never fuzzy matching. Current ITIS species without an evidenced COL record are retained separately with null COL ownership.

GitHub Pages publishes the descriptor, source, scope, counts and checksums only. Android and iOS must bundle the descriptor and every referenced gzip JSONL row shard unchanged.
