# Mammal Diversity Database archive projection (ChecklistBank 9802)

This worker freezes the official ChecklistBank dataset **9802**, titled *The
Mammal Diversity Database* (MDD), version **2.1**, issued **2025-04-06**. The
archive was retrieved from
`https://api.checklistbank.org/dataset/9802/archive` and is committed only as
source evidence; it is not silently replaced by a later download.

The archive is `3,189,955` bytes with SHA-256
`da2c04ec869539b949b4af8a8484ccc4901c0848f06822b0257c92d56d835ed2`. Its
embedded `metadata.yaml` agrees with the API metadata on title, version, issue
date, license (`CC-BY` in the archive and `cc by` in the API metadata) and scope
(`Mammalia`). No license version or Creative Commons license URL is inferred.
The ChecklistBank dataset DOI
is `10.48580/dfp2`; the archive has no separate DOI field.

The projection selects the strict COL26.8 accepted species descendants of
Mammalia (`6224G`): **6,461** COL species. The pinned MDD archive contributes
**6,801** species rows (`rank=species` and blank source status); blank source
status is the archive selection boundary, not a literal `accepted` label or an
assertion that the species is extant. The COL rows are partitioned by the
existing ownership routes into `other-mammals` (5,099), `primates` (530),
`cetartiodactyla` (503), `carnivora` (310) and `perissodactyla` (19).
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

The source contains explicit extinction data: 112 of the 6,801 selected rows
have `col:extinct=true` (including remarks such as “the species is probably
extinct”). Eighty of those rows are among the exact COL matches. Crosswalk
`accepted` therefore means a unique name match, never `extant`.

The 1,775 upstream-only rows retain null COL IDs and are routed separately by
an explicit source taxonomy order allowlist: Primates 33, Carnivora 30,
Perissodactyla 2 and Artiodactyla 46 go to their corresponding package;
the remaining 1,664 rows from 23 enumerated mammal orders go to
`other-mammals`. This is source-taxonomy routing only, not COL ownership or a
claim of taxon equivalence.

GitHub Pages receives the descriptor summary only (`web-light`). Android and
iOS `native-full` inventories must include every listed deterministic gzip JSON
shard. Each shard is at most 2 MiB uncompressed. Rebuild and replay with:

```text
python -B scripts/build-mdd-ioc-source.py --source mdd
python -B scripts/build-mdd-ioc-source.test.py
```

The descriptor and import ledger contain the archive, API metadata, registry
input, member digests, output digests and exact counts. This is a frozen source
traceability crosswalk, not a complete biological dossier, fossil dataset,
expert review or assertion that COL and MDD species concepts are identical.
