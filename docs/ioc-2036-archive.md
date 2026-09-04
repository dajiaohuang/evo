# IOC World Bird List archive projection (ChecklistBank 2036)

This worker freezes the official ChecklistBank dataset **2036**, titled *IOC
World Bird List*, version **15.2**, issued **2026-08-30**. The archive was
retrieved from `https://api.checklistbank.org/dataset/2036/archive` and is
committed only as source evidence.

The archive is `4,461,917` bytes with SHA-256
`feb46c1bac68a8527f6c94fd8d5df93d201eb866bc86034ed4c0a3788d6575d2`. Its
embedded `metadata.yaml` agrees with the API metadata on title, version, issue
date, license (`CC-BY`) and scope (`Aves`). The ChecklistBank dataset DOI is
`10.48580/d4g8`, with version DOI `10.48580/d4g8.v168`. The archive metadata
also records the IOC release DOI
`https://doi.org/10.14344/IOC.ML.15.2`; these are retained as distinct
identifiers and are not asserted to be the same DOI.

The projection selects the strict COL26.8 accepted species descendants of Aves
(`V2`): **11,044** COL species. The pinned IOC archive contributes **11,250**
accepted species rows. Matching is deterministic and intentionally narrow:

- normalize scientific names with Unicode NFC and whitespace normalization;
- remove a COL trailing authorship string only when it is exactly present;
- accept a result only when exactly one IOC species has that normalized name.

No authorship fallback, fuzzy matching, synonym substitution, taxon
replacement or species-concept equivalence is inferred. The result is 10,624
unique exact matches and 420 unmatched COL rows. The remaining 626 IOC
accepted species are preserved in explicit `upstream-only` rows; they are not
claims of globally new species. IOC authorities, remarks, English and
additional vernacular names, distributions and source-row locators remain
attached where present.

GitHub Pages receives the descriptor summary only (`web-light`). Android and
iOS `native-full` inventories must include every listed deterministic gzip
JSONL shard. Each shard is at most 2 MiB uncompressed. Rebuild and replay with:

```text
python -B scripts/build-mdd-ioc-source.py --source ioc
python -B scripts/build-mdd-ioc-source.test.py
```

The descriptor and import ledger contain the archive, API metadata, internal
metadata consistency result, registry input, member digests, output digests
and exact counts. This is a frozen source traceability crosswalk, not a
complete biological dossier, fossil dataset, expert review or assertion that
COL and IOC species concepts are identical.
