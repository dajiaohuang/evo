# Mammal Diversity Database archive projection (ChecklistBank 9802)

This worker freezes the official ChecklistBank dataset **9802**, titled *The
Mammal Diversity Database* (MDD), version **2.1**, issued **2025-04-06**. The
archive was retrieved from
`https://api.checklistbank.org/dataset/9802/archive` and is committed only as
source evidence; it is not silently replaced by a later download.

The archive is `3,189,955` bytes with SHA-256
`da2c04ec869539b949b4af8a8484ccc4901c0848f06822b0257c92d56d835ed2`. Its
embedded `metadata.yaml` agrees with the API metadata on title, version, issue
date, license (`CC-BY`) and scope (`Mammalia`). The ChecklistBank dataset DOI
is `10.48580/dfp2`; the archive has no separate DOI field.

The projection selects the strict COL26.8 accepted species descendants of
Mammalia (`6224G`): **6,461** COL species. The pinned MDD archive contributes
**6,801** accepted species rows (`rank=species` and blank source status).
Matching is deterministic and intentionally narrow:

- normalize scientific names with Unicode NFC and whitespace normalization;
- remove a COL trailing authorship string only when it is exactly present;
- accept a result only when exactly one MDD species has that normalized name.

No authorship fallback, fuzzy matching, synonym substitution, taxon
replacement or species-concept equivalence is inferred. The result is 5,026
unique exact matches and 1,435 unmatched COL rows. The remaining 1,775 MDD
accepted species are preserved in explicit `upstream-only` rows; they are not
claims of globally new species. MDD remarks, links, taxonomy, vernacular
names, distributions, type material and name-reference locators remain
attached to their source rows where present.

GitHub Pages receives the descriptor summary only (`web-light`). Android and
iOS `native-full` inventories must include every listed deterministic gzip
JSONL shard. Each shard is at most 2 MiB uncompressed. Rebuild and replay with:

```text
python -B scripts/build-mdd-ioc-source.py --source mdd
python -B scripts/build-mdd-ioc-source.test.py
```

The descriptor and import ledger contain the archive, API metadata, registry
input, member digests, output digests and exact counts. This is a frozen source
traceability crosswalk, not a complete biological dossier, fossil dataset,
expert review or assertion that COL and MDD species concepts are identical.
