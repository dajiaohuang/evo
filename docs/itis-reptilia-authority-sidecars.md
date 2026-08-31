# ITIS Reptilia authority sidecars

Release `2026.08-static-v5-rc72` pins a nomenclatural crosswalk from the official ITIS monthly SQLite export dated 2026-08-26 to the strict accepted-species rows in the COL26.8 release dated 2026-08-20. It is an identifier and name-status sidecar, not a claim that ITIS and COL use identical species concepts, a final classification authority, a phylogeny, a fossil record, a biological dossier or expert review.

## Exact scope

The COL26.8 ownership projection contains 12,622 species in `turtles-lepidosaurs`. It follows the `Squamata` (`45C`), `Testudines` (`477`) and `Reptilia` (`RP`) routes after the more-specific Crocodylia route is applied. The existing `crocodylomorphs-birds` package contains 27 Crocodylia species under `329` and 11,044 Aves species under `V2`; this import includes only the 27 Crocodylia records and explicitly excludes all Aves. Thus the canonical Reptilia partition is 12,649 COL species: 12,622 non-Crocodylia reptiles plus 27 Crocodylia.

ITIS root TSN `173747` is the valid class `Reptilia`. The 27 Crocodylia records are classified beneath valid ITIS root TSN `551734`. The pinned export has 10,550 valid Reptilia species and 4,243 species-rank synonym links to those current species. The exact crosswalk yields 9,831 accepted-name matches, 71 exact official synonym redirects, 3 ambiguous exact resolutions and 2,744 unmatched rows. The 655 current ITIS species with no evidenced COL match are retained in the turtle-side package's upstream-only shard; no COL ownership ID is invented for them.

## Source, rights and reproducibility

ITIS publishes the complete database under [CC0](https://www.itis.gov/about_itis.html) and provides [download and validation instructions](https://www.itis.gov/downloads/index.html). The source ledger is [`data/sources/itis-2026-08-26.json`](../data/sources/itis-2026-08-26.json), which records the official download metadata, the database member and checksums. The extracted database is not committed. The database SHA-256 is `ea7304536cfd7b1e2636d383911ca7931fc83d9ab1194ca2a3c020ea2daf1719`.

The canonical deterministic gzip is [`data/sources/itis-reptilia-authority-crosswalk-col26.8.json.gz`](../data/sources/itis-reptilia-authority-crosswalk-col26.8.json.gz). Its compressed size is 518,779 bytes and its SHA-256 is `29c3e6a58c64fe1bd4764c19f507ecde4f5b5c58f21d75c1ddac9baa60fd042e`. The complete import ledger is [`data/sources/itis-reptilia-authority-import-ledger.json`](../data/sources/itis-reptilia-authority-import-ledger.json).

With the verified extracted ITIS database available locally, regenerate the canonical snapshot and package projections with:

```bash
node scripts/build-itis-reptilia-sidecars.mjs --itis-sqlite /absolute/path/to/itisSqlite082626/ITIS.sqlite
npm run test -- scripts/itis-reptilia-authority-sidecar.test.mjs
```

The generator verifies the ITIS database checksum, COL registry manifest checksum, COL package-ownership checksum, fixed roots, row counts and export update dates before writing data. Matching applies only representation-preserving normalization and exact valid-name or official species-synonym evidence. It does not use fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered or higher-taxon matching.

## Delivery boundary

Each package has a small descriptor plus non-overlapping inclusive `colUsageId`-range JSONL gzip shards and one independent upstream-only shard:

- [`turtles-lepidosaurs` nomenclature](../data/packages/reptilia/turtles-lepidosaurs/nomenclature/itis-tsn-sidecar.json) contains all 12,622 non-Crocodylia records and the 655 ITIS-only rows.
- [`crocodylomorphs-birds` nomenclature](../data/packages/archosauria/crocodylomorphs-birds/nomenclature/itis-tsn-sidecar.json) contains only its 27 Crocodylia records; its upstream-only partition is empty because every current Crocodylia species is represented by the selected COL rows.

Pages `web-light` publishes the two descriptors and the canonical inventory only: it omits all 11 row-level authority shards. Android and iOS build `26` use `native-full` and must include each descriptor and every listed shard byte-for-byte. The existing four-file AviList collection remains a separate collection in `crocodylomorphs-birds`; it is neither merged with nor counted as Reptilia ITIS. A detail lookup selects one inclusive `colUsageId` range and must not parse the complete canonical crosswalk or more than one row shard.
