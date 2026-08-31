# ITIS Entoprocta authority sidecar

The `other-animals` resource pack contains a frozen exact nomenclatural crosswalk for the one accepted COL26.8 root `Entoprocta` (`BDTX4`). All 170 strict accepted COL species descending from that root occur once, use source dataset `2144`, and remain within the mixed 99,161-species `other-animals` package.

| Outcome | Count |
| --- | ---: |
| COL accepted species in scope | 170 |
| Exact valid ITIS current names | 170 |
| Official species-synonym redirects | 0 |
| Ambiguous exact results | 0 |
| Unmatched | 0 |
| ITIS current species under valid Entoprocta TSN `156732` | 171 |
| ITIS-only current species | 1 |

The historical name `Kamptozoa` is not an additive root. In the pinned ITIS `itisSqlite082626` export it is invalid TSN `914161` and has two accepted targets (`156732` and `563958`). The import therefore queries only valid `Entoprocta` TSN `156732`; the synonym observation is retained as an explicit boundary assertion in the descriptor and ledger.

Canonical deliverables are `itis-entoprocta-sidecar.json`, one COL-addressed shard (170 rows), and one ITIS-only shard (one row), under `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`. They pin exact gzip and source SHA-256 values. GitHub Pages uses only the descriptor summary and canonical inventory; Android and iOS must include the descriptor plus both row shards byte-for-byte.

This CC0 1.0 ITIS-derived projection is a strict nomenclatural crosswalk. It is not a global checklist, final classification, phylogeny, biological dossier, fossil record, or a claim that Catalogue of Life and ITIS share species concepts.
