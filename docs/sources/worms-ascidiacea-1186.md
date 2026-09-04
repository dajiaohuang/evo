# WoRMS Ascidiacea archive projection

This source-specific projection freezes ChecklistBank dataset 1186, Ascidiacea World Database version 2026-09-01 (version DOI [10.48580/d3fx.v90](https://doi.org/10.48580/d3fx.v90), CC BY). The repository archive is `data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip`, SHA-256 `10f7ee92363e3fab5df9964a494b59e1d79a5214f38b9e796f73afd51558863a` and 692,018 bytes; metadata is frozen beside it.

The importer reads the archive's Name, Taxon, Synonym, Reference and NameReference members, and exact-matches normalized scientific name plus authorship against accepted COL species descending from root `7NF2Z` (Tunicata). The measured COL scope is 3,146 rows; source Taxon species rows are 3,001, of which 3,000 are strict and one provisional. The generated result is 3,146 total rows: 3,000 accepted and 146 unmatched; no source-only rows were implicated by this frozen closure. These counts describe this exact source/COL projection, not global species completeness or species-concept equivalence.

Reproduce with:

```text
python -B scripts/build-ascidiacea-source.py --archive data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip --metadata data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.metadata.json
```
