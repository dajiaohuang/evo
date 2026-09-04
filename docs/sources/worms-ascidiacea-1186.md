# WoRMS Ascidiacea archive projection

This source-specific projection freezes ChecklistBank dataset 1186, Ascidiacea World Database version 2026-09-01 (version DOI [10.48580/d3fx.v90](https://doi.org/10.48580/d3fx.v90), CC BY). The repository archive is `data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip`, SHA-256 `10f7ee92363e3fab5df9964a494b59e1d79a5214f38b9e796f73afd51558863a` and 692,018 bytes; metadata is frozen beside it.

The importer reads the archive's Name, Taxon, Synonym, Reference and NameReference members, and exact-matches normalized scientific name plus authorship against accepted COL species descending from class root `B8V3P` (Ascidiacea). The broader Tunicata parent closure `7NF2Z` is audited but not used as the package scope: it contains 78 Thaliacea rows (source 1185) and 68 Appendicularia rows (source 1178), which are explicitly excluded. The measured Ascidiacea COL scope is 3,000 rows; source Taxon species rows are 3,001, of which 3,000 are strict and one provisional. The generated result is 3,000 accepted rows with no unmatched or source-only rows. These counts describe this exact source/COL projection, not global species completeness or species-concept equivalence.

Reproduce with:

```text
python -B scripts/build-ascidiacea-source.py --archive data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip --metadata data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.metadata.json
```

`--output-root` selects a repository-mirror output root for every generated
file, including the ledger; inputs stay pinned to the repository. Pages ships
no row shards for this extension, while full-data delivery includes every row.
Direct Name/Taxon and NameReference citations are retained with original
Reference objects and table-row locators. Original `Name.status` remains
nomenclatural metadata; strict acceptance is derived from nonprovisional Taxon
membership, not that field. These are source evidence, not detailed species dossiers.
