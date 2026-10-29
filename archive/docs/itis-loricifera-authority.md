# ITIS Loricifera authority sidecar

`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-loricifera-sidecar.json` freezes a strict, reproducible nomenclatural crosswalk for the complete COL26.8 Loricifera partition.

COL root `B8VF6` (`Loricifera Kristensen, 1983`) has 46 strict accepted species, all owned by the `other-animals` residual package. The official ITIS SQLite export `itisSqlite082626` (2026-08-26; CC0; root TSN `202425`) has 22 current Loricifera species and no accepted-species synonym links beneath that root.

| Outcome | COL species |
| --- | ---: |
| Exact current ITIS name | 22 |
| Official synonym redirect | 0 |
| Ambiguous exact evidence | 0 |
| Unmatched | 24 |

The web-light profile ships the descriptor and checksums only. The native-full profile ships all 46 COL outcome rows plus the explicit, empty ITIS-only partition, so Android and iOS can work without a network request. `scripts/build-itis-loricifera-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>` checks the pinned source/database hashes, walks the exact COL and ITIS roots, writes deterministic gzip bytes, and refreshes the descriptor and import ledger.

This is a name/identifier crosswalk. It is not a final classification, phylogeny, species-concept equivalence claim, biological dossier, fossil record, or scientific review.
