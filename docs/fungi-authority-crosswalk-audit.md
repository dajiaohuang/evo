# COL26.8 Fungi authority crosswalk audit

This audit freezes the nomenclatural-source boundary for all 157,044 strict accepted species in the COL26.8 Fungi resource pack. It does not claim that fungal taxonomy, nomenclature, or described fungal diversity is complete.

## Result

| COL26.8 source dataset | Pinned source | COL accepted species | Result |
| --- | --- | ---: | --- |
| `2073` | Species Fungorum Plus, Apr 2024, issued 2024-04-28 | 155,841 | 155,841 accepted Index Fungorum IDs |
| `1148` | Unicellular spore-forming protozoan parasites (Microsporidia), Nov 2015, issued 2015-11-22 | 1,203 | 1,203 accepted Index Fungorum IDs |
| **Total** |  | **157,044** | **157,044 accepted; 0 redirect, 0 ambiguous, 0 unmatched, 0 withheld** |

The two pinned source snapshots contain 201 additional accepted species that are not members of the COL26.8 accepted Fungi pack. They are retained only as `upstreamOnlyRecords` in the canonical audit snapshot. They are not added to the package and must not be described as COL26.8 species.

## Official source and rights evidence

ChecklistBank dataset metadata declares both source datasets as Creative Commons Attribution 4.0:

- Species Fungorum Plus dataset `2073`: version `Apr 2024`, DOI `10.48580/d4hj`, version DOI `10.48580/d4hj.v14`; citation: Kirk, P. M. (2024), *Species Fungorum Plus* (Apr 2024), Royal Botanic Gardens, Kew.
- Microsporidia dataset `1148`: version `Nov 2015`, DOI `10.48580/d3dm`, version DOI `10.48580/d3dm.v6`; citation: Kirk, P. (2015), *Unicellular spore-forming protozoan parasites* (Nov 2015).

The official dataset `2073` DwCA export retrieved on 2026-08-31 is 7,032,137 bytes with SHA-256 `5a8875093c84660d6ffd488c3cd25431c0291b07f524a935e5beaffc40c07387`. Its `dataset-2073.tsv` member is 79,201,640 bytes with SHA-256 `2c7211638579e7125ec595ed5f178770dafa55f838e243e1f9d122a600ec32db` and contains 328,830 source usages. Dataset `1148` has no working DwCA export at the pinned endpoint, so all 1,844 source usages were read from its official paginated ChecklistBank API in two complete pages. Every request URL, HTTP response date, byte count, and SHA-256 is retained in `data/sources/fungi-species-fungorum-import-ledger.json`.

The old Index Fungorum partnership page describes a non-commercial-use boundary for that live compilation. This package does not treat the live site as a bulk-download licence and does not copy its pages. Redistribution is limited to minimal identifiers derived from the two release-pinned ChecklistBank datasets that explicitly declare CC BY 4.0. Live bibliography, nomenclatural details, hosts, substrates, localities, descriptions, classifications, media, and the complete live Index Fungorum database are excluded.

## Matching method

The primary join requires all of the following:

1. the COL species is strict `rank=species AND status=accepted`;
2. its `sourceDatasetId` is exactly `2073` or `1148`;
3. the combined upstream scientific-name and authorship label is byte-for-byte identical to the COL26.8 label; and
4. that label occurs exactly once inside the declared source dataset.

This uniquely resolved 156,984 species. Sixty records had either no byte-identical label or more than one byte-identical candidate. For only those 60 records, the importer requested the exact COL26.8 usage `/source` record, required `sourceEntity=name usage`, verified the declared source dataset, and then required that stable source ID to exist in the pinned source snapshot. All 60 resolved to accepted records.

No case folding, authorship normalization, edit distance, fuzzy matching, cross-dataset name matching, or guessed identifier is used. The 60 exact source responses retain individual SHA-256 digests and an aggregate request-ledger digest.

## Artifacts and client boundary

- Canonical crosswalk: `data/sources/fungi-species-fungorum-crosswalk-col26.8.json.gz` — 4,429,748 bytes, SHA-256 `5e6ecd007451ac1bf0aab2f07dd6ef9d05530439476b8867e2962c1f73f82607`.
- Import ledger: `data/sources/fungi-species-fungorum-import-ledger.json`.
- Package-local payload: six deterministic `index-fungorum-*.jsonl.gz` shards containing all 157,044 COL mappings; 1,623,111 compressed bytes total.
- Integration descriptor: `data/catalogue-of-life/releases/2026-08-20/resource-packs/fungi/index-fungorum-extension.json`.

The original five `species-*.jsonl.gz` shards are unchanged byte-for-byte. The extension descriptor is intentionally not yet attached to the public Fungi manifest in this data-only commit. A later client-delivery release must attach the descriptor and copy the six payload files unchanged into Web runtime data, browser-offline data, the downloadable ZIP, Android assets, and iOS assets. The same release must update runtime smoke coverage and verify matching bytes and SHA-256 values across every client.

The six payloads are sorted by COL ID with non-overlapping inclusive `minColId` / `maxColId` ranges. A single-species detail query must select the sole matching range and load only that one compressed payload. Downloading or parsing all 157,044 authority records for one detail page is explicitly outside the integration contract. The full canonical crosswalk remains available for audit and rebuild work, not interactive detail lookup.

## Limitations

- An identifier link is nomenclatural provenance, not an expert review by Evo Atlas.
- Accepted status is pinned to the stated source snapshots and can change upstream.
- The crosswalk does not provide ecology, morphology, fossils, distributions, phylogeny, genomes, media, or biological dossiers.
- `upstream-only` describes the pinned authority snapshots, not membership in COL26.8.
