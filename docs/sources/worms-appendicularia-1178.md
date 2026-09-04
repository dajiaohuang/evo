# WoRMS Appendicularia archive projection

This source-specific projection freezes ChecklistBank dataset 1178, *World List of Appendicularia* version 2026-09-01 (version DOI [10.48580/d3fn.v89](https://doi.org/10.48580/d3fn.v89), CC BY). The official archive is retained at `data/sources/archives/checklistbank-1178-appendicularia-2026-09-01.zip`, SHA-256 `5a4a49450d581faa30d0fa3d6beb54b4b561f920f075174124efbfd8bdfa8c1f` and 32,041 bytes; the preflight metadata snapshot is retained beside it.

The projection scopes accepted COL26.8 species descending from Appendicularia usage `622C5`. The wider Tunicata parent closure `7NF2Z` is audited only to make the boundary explicit; the sibling Thaliacea source (dataset 1185) and Ascidiacea source (dataset 1186) remain outside this projection. The measured COL scope is 68 accepted species. The archive contains 68 Species Taxon rows, all nonprovisional, and every row maps by exact scientific name plus authorship. There are no redirects, ambiguous matches, unmatched rows or source-only accepted rows. These counts describe this exact source/COL projection, not global species completeness or species-concept equivalence.

The committed archive preserves the original source members. The generated row shard selects the source Name and Taxon fields needed for the crosswalk, retains original `Name.status`, and records source-table row locators plus every available linked Reference and NameReference record. The importer does not invent a rights holder, citation field, or missing reference: absent values remain absent and missing reference IDs remain explicitly visible. References are metadata and links, not redistributed publications.

The source citation recorded in the official metadata is: Garic, R. (2026), *World List of Appendicularia* (Version 2026-09-01), https://doi.org/10.48580/d3fn. The source URL is https://www.marinespecies.org; the archive is retrieved through ChecklistBank's dataset endpoint.

Reproduce the projection from the repository root:

```text
python -B scripts/build-appendicularia-source.py
```

The importer accepts `--archive`, `--metadata` and `--output-root`. `--output-root` is used by the deterministic replay test to write the complete mirror into an isolated directory; source inputs remain pinned in the repository. The focused tests are:

```text
python -B scripts/test-appendicularia-source.py
npm exec vitest -- run scripts/build-appendicularia-source.test.mjs
```

The `web-light` profile publishes only descriptor/count/inventory metadata for this extension. The `native-full` profile includes the one complete 68-record gzip shard. The compressed shard is 21,044 bytes and its uncompressed JSON source projection is 495,089 bytes. This archive projection is an authority crosswalk, not a biological dossier, fossil evidence, phylogeny or expert review.
