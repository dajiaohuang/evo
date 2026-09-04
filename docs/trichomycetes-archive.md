# Trichomycetes source archive

This package extension is a frozen, exact name-and-authorship provenance projection of 96 strict accepted COL26.8 species assigned to ChecklistBank source dataset 1033. The selected source branch is `Protozoa / Choanozoa / Ichthyosporea`; the archive's 287 Fungi rows and two other Protozoa rows are deliberately excluded, rather than treated as upstream-only records.

The official ChecklistBank archive was retrieved on 2026-09-04 from [dataset 1033](https://api.checklistbank.org/dataset/1033/archive), version October 2017 (DOI `10.48580/d38n.v9`). Its pinned SHA-256 is `ad2f2a5e8b9feab455f73ac390be34908687f79fea4c858ade29e52a8acfc33e` and compressed size is 38,716 bytes. Although the HTTP response advertises `application/zip`, the bytes are a gzip-compressed tar archive. The CC BY 4.0 source is the University of Kansas Trichomycetes database associated with Lichtwardt.

Each row preserves the source accepted taxon ID, source name/authorship/status/URL, classification fields, linked `NameReferences` identifiers and the corresponding bibliography fields. Empty source title fields remain empty. This is source traceability, not independent scientific corroboration or species-concept equivalence; COL and this projection derive from the same source archive. Web delivery is summary-only; the complete shard is native-only.

Each of the 96 records has one nomenclatural reference; 66 of those references have an empty title. Member names and one-based TSV row locators (including the header) identify the accepted name, reference link and bibliography row. These references are not biological, ecological or occurrence dossiers. The archive's historical classification is preserved as source metadata, not asserted as a modern monophyletic grouping.

Reproduce from the committed archive without network access:

```sh
python scripts/build-trichomycetes-sidecar.py
node scripts/integrate-trichomycetes-sidecar.mjs
npm run data:registry:build
npm run data:manifest
```

The import ledger records the actual COL input shard hashes and generated descriptor/payload hashes. `--output-root <directory>` writes a separate projection for byte-for-byte replay testing. It does not change the canonical input directory.
