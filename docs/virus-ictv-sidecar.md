# ICTV MSL41.v1 and Virus Metadata Resource sidecar

This data line enriches the pinned COL26.8 Viruses nomenclatural resource pack without changing its original 17,552 accepted-species shard.

## Authority and fixed inputs

- Current official taxonomy: ICTV Master Species List `MSL41.v1`, released 2026-03-20, DOI `10.5281/zenodo.19154110`.
- Current corrected metadata: `VMR_MSL41.v1.20260729`, released 2026-07-29, DOI `10.5281/zenodo.21694279`.
- Catalogue input: ChecklistBank dataset `316115`, release `COL26.8`, source sector `1014` (ICTV MSL).
- Access date: 2026-08-31.
- Reuse: ICTV pages and workbooks are CC BY 4.0.

The VMR release notice says the earlier 2026-07-21 workbook contained errors and should be discarded. The corrected workbook itself and the live Zenodo record use DOI `10.5281/zenodo.21694279`; the older DOI still present in the news prose returned HTTP 410 during the audit. The complete URL, byte, SHA-256, Zenodo MD5, ETag and Last-Modified ledger is [`data/sources/ictv-msl41-vmr-2026-07-29.json`](../data/sources/ictv-msl41-vmr-2026-07-29.json).

## Exact matching result

| Partition | Count | Meaning |
| --- | ---: | --- |
| accepted | 17,552 | One case-sensitive COL name equals one current MSL species name, with one unique ICTV ID shared by MSL and VMR. |
| redirect | 0 | Historical names and abolished/renamed rows are not substituted. |
| ambiguous | 0 | No duplicate exact current species name or conflicting ICTV ID. |
| unmatched | 0 | Every eligible COL virus species has an exact current MSL row. |
| withheld | 0 | Every COL virus row belongs to source sector `1014` and both workbook identities were proved. |
| ICTV-only | 2 | `Boscovirus hypoboscidae` and `Simiispumavirus macfas` occur in current ICTV but have no COL26.8 accepted-species row. They ship with null COL IDs. |

Current ICTV therefore contains 17,554 species, not 17,552. The sidecar retains all 17,554 and all 19,285 VMR rows: 17,554 exemplar isolates and 1,731 additional isolates. It does not invent COL IDs for the two release-lag records.

No Unicode folding, punctuation cleanup, case folding, fuzzy matching, synonym inference or historical redirect participates in the accepted partition.

## Reproducibility

Download the two exact official workbooks using the filenames and hashes in the ledger, then run:

```bash
python scripts/fetch-ictv-virus-crosswalk.py \
  --msl /path/to/ICTV_Master_Species_List_2025_MSL41.v1.xlsx \
  --vmr /path/to/VMR_MSL41.v1.20260729.xlsx
node scripts/build-virus-ictv-sidecar.mjs
npm run data:manifest
npm run data:validate
```

The Python importer uses only the standard library and rejects source files that differ by filename, byte count, SHA-256 or Zenodo MD5. The Node builder validates every COL ID, ICTV ID, VMR isolate ID, partition count and official-file ledger before emitting deterministic gzip NDJSON.

The raw XLSX files are not committed. Their official immutable records remain available from ICTV and Zenodo, while the compact canonical crosswalk preserves every published MSL species field and VMR isolate row needed to regenerate the runtime sidecar within the 700 MiB repository-source budget.

## Delivery and interpretation boundary

`ictv-000.jsonl.gz` is an ordinary resource-pack extension. The existing manifest pipeline copies it into the Web runtime, Viruses ZIP, browser offline plan, complete release inventory and Android/iOS bundled data with the same SHA-256.

MSL and VMR are taxonomy and exemplar-virus metadata. They do not establish that viruses are cellular life, revalidate every GenBank accession, or create curated Evo Atlas fossil, morphology, ecology, distribution, phylogeny, media or expert-review dossiers.
