# ITIS Mammalia authority delivery

This document records the release-scoped ITIS nomenclatural crosswalk delivered for five non-empty Mammalia packages. It is a name/identifier crosswalk, not a species-concept equivalence, phylogeny, final classification, fossil record, biological dossier or scientific-review record.

## Fixed inputs and hash semantics

- COL input: `COL26.8`, release date `2026-08-20`, with the checked-in ownership projection at [`data/registry/package-species-coverage.json`](../data/registry/package-species-coverage.json).
- ITIS input: the official CC0 monthly SQLite export `itisSqlite082626/ITIS.sqlite`, with maximum `taxonomic_units.update_date` and `synonym_links.update_date` values of `2026-08-26`.
- The ITIS request, database audit, exact queries and source checksums are recorded in [`data/sources/itis-2026-08-26.json`](../data/sources/itis-2026-08-26.json). The generated output ledger is [`data/sources/itis-mammal-authority-import-ledger.json`](../data/sources/itis-mammal-authority-import-ledger.json).

The historical ITIS source contract contains the ownership SHA-256 `0a392968ee13b69a606797e7ca3cc5d6823a60e348ec3e77718b132127e1e369`. That value identifies the ownership bytes recorded when the original ITIS source contract was prepared; it is not the input used for this migration. The actual `generatedFrom.colOwnershipSha256`, repeated in each Mammalia descriptor's `sources.col.ownershipSha256`, is `168e7cb70124ca4400e1b86c5fe76e7c1ff551bddd7be50f0149f077f40db1cf`, the SHA-256 of the checked-in projection bytes actually used to generate these sidecars. The ledger states this distinction explicitly so the historical hash is not mistaken for the provenance of the delivered rows.

The five descriptors have these SHA-256 values (the runtime/mobile `descriptorSha256` values):

| Package | Descriptor SHA-256 |
| --- | --- |
| `perissodactyla` | `bcba89f8518ae97d49f4221409e690bb474239e470fd1d3bbb9d920dac257dc8` |
| `cetartiodactyla` | `d44e276f5cfdd38f8ba133891aebc4b07f2e8dae280611511b2dcfefea8310d1` |
| `primates` | `96dee66ffd47cbf98d61724ad7ea5c271bd247e8996bf59b8413cc50ef99e58f` |
| `carnivora` | `7993503e39609270b14efe5f472d565cdba381c703d0f790513c3e88e60b68bc` |
| `other-mammals` | `d41b97b77603ca44d5a153be9489174a1c0c4236591d007e9ceea6b137aa9228` |

The combined canonical crosswalk is 3,765,545 decoded bytes, 266,595 gzip bytes, and SHA-256 `078d0d25e8a950054090e322abb8b20b5ec26e29a6787a30519314cdc162a115`.

## Exact result boundary

Matching is limited to Unicode NFC, underscore-to-space representation, whitespace normalization, removal of an exact separate COL authorship suffix, and removal of one parenthesized subgenus token in the documented species representation. No edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, genus-substitution or higher-rank matching is used.

The ITIS current-species and species-synonym-link columns are snapshot-wide values repeated in each package descriptor; they are not package-owned record counts.

| Package | COL records | Accepted | Synonym redirect | Ambiguous | Unmatched | ITIS current species | ITIS species synonym links | ITIS upstream-only |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `perissodactyla` | 19 | 19 | 0 | 0 | 0 | 6,464 | 5,180 | 0 |
| `cetartiodactyla` | 503 | 502 | 0 | 1 | 0 | 6,464 | 5,180 | 0 |
| `primates` | 530 | 530 | 0 | 0 | 0 | 6,464 | 5,180 | 0 |
| `carnivora` | 310 | 310 | 0 | 0 | 0 | 6,464 | 5,180 | 0 |
| `other-mammals` | 5,099 | 5,099 | 0 | 0 | 0 | 6,464 | 5,180 | 3 |
| **Total** | **6,461** | **6,460** | **0** | **1** | **0** | n/a | n/a | **3** |

The one ambiguous COL record is `Camelus ferus` (`5WWKW`). The exact evidence reaches more than one valid ITIS species resolution, so it remains ambiguous rather than being forced to a TSN. The three upstream-only rows are current ITIS Mammalia species without a COL-owned row in these five partitions; they remain separate records and do not impersonate COL ownership.

`mammal-origins` is a zero-assignment fossil/navigation boundary. It has no ITIS descriptor, no ITIS collection in its runtime package manifest, and is not part of this delivery. The five non-empty packages therefore contain 6,461 COL records, while the native row payload contains 6,464 records after the three upstream-only rows are included.

## Platform delivery

Each of the five packages publishes one range-sharded ITIS collection by collection ID:

- `itis-perissodactyla-tsn-crosswalk`: 1 COL shard, 19 rows;
- `itis-cetartiodactyla-tsn-crosswalk`: 1 COL shard, 503 rows;
- `itis-primates-tsn-crosswalk`: 1 COL shard, 530 rows;
- `itis-carnivora-tsn-crosswalk`: 1 COL shard, 310 rows;
- `itis-other-mammals-tsn-crosswalk`: 4 COL shards plus 1 upstream-only shard, 5,099 plus 3 rows.

The native Android/iOS profile consequently contains exactly 9 canonical row shards and 6,464 rows, including exactly 3 upstream-only rows. The finalizer and platform tests resolve collections by ID and files by URL/path key, then compare every published file with the release inventory and canonical inventory for records, bytes and SHA-256 and verify the actual bundled asset bytes.

The GitHub Pages `web-light` profile retains the descriptors and canonical inventories as a verified summary but publishes no row-level ITIS files. The native `native-full` profile publishes every listed COL and upstream-only shard. These profiles do not change the source result or its provenance.

## MDD boundary

No Mammal Diversity Database (MDD) rows, synonym rows, descriptions, notes or MDD-derived crosswalk are included. The MDD v2.5 redistribution review remains documented in [`docs/mdd-v2.5-redistribution-audit.md`](mdd-v2.5-redistribution-audit.md): the release is downloadable, but an explicit data-reuse/redistribution licence was not established. The ITIS sidecar is therefore an independently licensed, date-pinned nomenclatural reference and must not be described as an MDD replacement or equivalent.
