# ITIS Hemichordata sidecar

The `other-animals` resource pack now carries a release-pinned, exact ITIS
nomenclatural sidecar for its COL26.8 Hemichordata partition.

- COL root: `4R` / Hemichordata; 132 strict accepted species are owned by the
  `other-animals` pack. The COL hierarchy contains 139 Hemichordata species;
  seven Rhabdopleura species are outside this pack boundary and are retained
  only as ITIS-only evidence in the sidecar audit, not duplicated into this
  package.
- ITIS root: TSN `158616` / Hemichordata, from the official
  `itisSqlite082626` export dated 2026-08-26 (CC0 1.0, DOI
  `10.5066/F7KH0KBK`). The snapshot contains 139 current valid species and 41
  species-rank synonym links to valid Hemichordata species.
- Exact outcomes for the 132 package-owned COL names: 132 accepted current
  names, zero synonym redirects, zero ambiguous and zero unmatched. Seven
  current ITIS species remain a separate null-COL `upstreamOnly` partition.
- Matching removes only an exact trailing COL authorship field, normalizes
  Unicode to NFC/whitespace representation, and removes one explicit parenthesized
  subgenus token. Case, diacritics, punctuation and remaining name tokens are
  preserved. Fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped,
  token-reordered and taxon-substituted matching are prohibited.

The descriptor and both deterministic JSONL gzip files live under
`data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/`.
GitHub Pages may publish the descriptor and its canonical byte/SHA-256
inventory without row shards (`web-light`); Android and iOS `native-full`
inventories must carry the descriptor and both row-level files byte-for-byte.
This is a nomenclatural crosswalk, not a species-concept equivalence claim,
global checklist, phylogeny, biological dossier or expert-review record.
