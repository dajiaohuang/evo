# ITIS authority coverage for Protists and Chromists

This document records the release-pinned authority boundary shipped in dataset `2026.08-static-v5-rc69`. It combines the existing World Foraminifera Database identifier layer with 25 disjoint ITIS scope audits derived from the official `itisSqlite082626` export dated 2026-08-26.

The package owns all 61,518 strict accepted COL26.8 species assigned to the `Protists and Chromists` resource pack. The ITIS scopes do not claim to be a modern higher classification or a complete global inventory. They are exact-root, exact-name nomenclatural crosswalks. A missing or legacy-only root remains a zero-row audited boundary; neighboring names are never substituted.

## Delivery contract

- GitHub Pages uses `web-light`: it publishes each descriptor, exact root audit, method, counts, limitations, and the canonical file hashes, but no ITIS or WFD row shard.
- Android and iOS use `native-full`: they bundle all 5 WFD files and all 19 non-empty ITIS files byte-for-byte. Zero-row placeholder gzip files are omitted from the runtime inventory because their complete payload is the empty set.
- A COL-ID lookup selects at most one inclusive, lexicographically ordered COL partition. ITIS-only rows have null COL ownership and are never returned by a COL-ID range lookup.

The 25 ITIS scopes contain 19,501 native records: 12,756 COL rows and 6,745 current ITIS-only rows. COL outcomes are 1,470 exact accepted names, 8 redirects that follow an official ITIS synonym relationship, 4 explicit ambiguities, and 11,274 unmatched names. The 12,756 COL usage IDs are disjoint across all scopes.

| Scope | COL rows | Accepted | Redirect | Ambiguous | Unmatched | ITIS-only | Native files |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ciliophora | 8,507 | 246 | 6 | 0 | 8,255 | 158 | 4 |
| Apicomplexa | 21 | 21 | 0 | 0 | 0 | 0 | 1 |
| Dinoflagellata | 259 | 60 | 2 | 0 | 197 | 851 | 2 |
| Euglenozoa boundary / Euglenophycota inventory | 0 | 0 | 0 | 0 | 0 | 276 | 1 |
| Cercozoa | 52 | 0 | 0 | 0 | 52 | 0 | 1 |
| Haptophyta | 0 | 0 | 0 | 0 | 0 | 90 | 1 |
| Ochrophyta | 1,101 | 1,097 | 0 | 4 | 0 | 2,296 | 2 |
| Amoebozoa | 1,337 | 0 | 0 | 0 | 1,337 | 0 | 1 |
| Rhodophyta | 0 | 0 | 0 | 0 | 0 | 1,616 | 1 |
| Oomycota shared-order boundary | 1,426 | 46 | 0 | 0 | 1,380 | 38 | 2 |
| Bigyra | 53 | 0 | 0 | 0 | 53 | 0 | 1 |
| Chlorophyta | 0 | 0 | 0 | 0 | 0 | 1,416 | 1 |
| Glaucophyta | 0 | 0 | 0 | 0 | 0 | 4 | 1 |
| Cryptophyta | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Choanoflagellatea | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Perkinsozoa | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Labyrinthulomycetes | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Opalozoa | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Radiolaria | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Metamonada | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Picozoa | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Telonemia | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Centrohelida | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Katablepharidota | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hemimastigophora | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Total** | **12,756** | **1,470** | **8** | **4** | **11,274** | **6,745** | **19** |

Foraminifera remains a separate WFD/ChecklistBank authority layer: all 47,975 COL26.8 accepted species resolve to WFD identifiers in five COL-ID partitions. Its observed 179 WFD accepted records without a source-record relationship remain `not-asserted`, rather than being presented as a complete upstream-only inventory.

## Important boundaries

- `nonApplicable` is a per-scope remainder of the same 61,518-species mixed package and must not be summed across scopes.
- Chlorophyta and Glaucophyta have no exact COL26.8 root in this package. Their rows are current ITIS-only records and do not reuse or duplicate the WFO plant crosswalk.
- Labyrinthulomycetes does not substitute the nearby COL `Labyrinthulea`, which is already below Bigyra. Radiolaria does not substitute Rhizaria. Centrohelida's exact ITIS name is a legacy `valid` order with no accepted-current species descendants.
- Dinoflagellata can legitimately map an accepted COL name and an official ITIS synonym redirect to the same current TSN; this is not a duplicate species-row claim.
- Exact names and identifiers do not establish that COL and ITIS use identical species concepts. These records do not provide ecology, morphology, distribution, media, fossils, phylogeny, or expert review.

Every scope has a dedicated descriptor, deterministic generator, import ledger, focused test, and boundary note under `docs/itis-*-authority.md` or `docs/itis-*-sidecar.md`. The package manifest is the machine-readable source of truth for current counts and canonical hashes.
