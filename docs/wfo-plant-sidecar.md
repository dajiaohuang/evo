# WFO Plant List 2026-06 exact sidecar

Evo Atlas pins the official World Flora Online Plant List `2026-06`, issued 2026-06-21, under CC0 1.0. The version DOI is `10.5281/zenodo.20782718`; the concept DOI is `10.5281/zenodo.7460141`.

The official 132,643,291-byte archive has MD5 `02f989b01b8eb142ec5934bd634b3876` and SHA-256 `75f1ad1f371978c9e46f3044152c07ed276fe57be9fb9a15b3621b19cf231987`. The archive itself is not committed. `data/sources/wfo-plant-list-2026-06.json` pins the archive and every expanded member hash. The canonical derived gzip is 18,043,579 bytes with SHA-256 `491d673f2549ddff260a560eda49d67a0169cb000a88d06b6670509b1779cca0`; its 260,967,760-byte JSON source has SHA-256 `980144add135db3fa709392552534e19e33bc45605a97f5bafeb4d239d1621af`.

## Exact outcome boundary

All 388,686 accepted COL26.8 plant species are retained:

| Partition | Total | accepted | redirect | ambiguous | unmatched | withheld |
|---|---:|---:|---:|---:|---:|---:|
| Angiospermae | 352,619 | 292,924 | 7,705 | 154 | 51,803 | 33 |
| Gymnosperms | 1,599 | 1,145 | 3 | 1 | 449 | 1 |
| Early Land Plants | 33,770 | 22,719 | 146 | 18 | 10,883 | 4 |
| Other Plants | 698 | 0 | 0 | 0 | 698 | 0 |
| Total | 388,686 | 316,788 | 7,854 | 173 | 63,833 | 38 |

An accepted link requires one exact WFO accepted species name and authorship. A redirect requires one exact WFO synonym name and authorship plus its explicit accepted target. Ambiguity, absence and unsafe authorship boundaries remain visible. No case folding, diacritic stripping, punctuation stripping, fuzzy, edit-distance, phonetic, token-reordered, genus-substitution or authority-only matching is allowed.

WFO contains 382,438 accepted species. Exact COL links cover 321,687 unique WFO accepted species; the remaining 60,751 are published as a separate `wfo-upstream-only` partition with null COL ownership. They are not assigned invented COL IDs or routed into an unrelated COL package.

## Delivery

`scripts/build-wfo-plant-projections.mjs` deterministically derives size-bounded NDJSON gzip shards from the canonical crosswalk. Angiospermae, Gymnosperms and Early Land Plants expose rich-package collection descriptors. Other Plants exposes its 698-row COL residual plus the separate upstream-only partition through one resource-pack extension. Runtime manifests, package ZIPs, browser package/full-atlas offline storage, Android and iOS all consume the same files and hashes.

The Pages `web-light` profile intentionally publishes the 32 rich-package WFO shards: 387,988 rows and 15,584,333 compressed bytes. A COL-ID lookup uses the descriptor's non-overlapping range bounds to fetch only the matching shard; these rows are not default precache entries. The Pages budget therefore measures them in a separate web-queryable nomenclature-row allowance, while the 650 MiB whole-artifact gate remains authoritative. The sidecar is nomenclatural linkage, not a claim of identical species concepts, phylogeny, ecology, fossils, media, translation, biological dossiers or expert review.
