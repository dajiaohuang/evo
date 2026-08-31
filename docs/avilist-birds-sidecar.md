# Release-pinned AviList v2025b bird authority sidecar

This data-only extension crosswalks the strict accepted species below the pinned COL26.8 Aves root to the official AviList v2025b global avian checklist. It keeps every package record and every AviList-only species visible without changing the current runtime, package ZIPs, offline inventory, mobile projects or release version.

It is a nomenclatural and taxonomic-concept sidecar. It is not a phylogeny, complete biological history, fossil or distribution dataset, expert-review dossier, or assertion that COL and AviList use identical species concepts.

## Correct package scope

`crocodylomorphs-birds` contains 11,071 strict accepted COL26.8 species because it owns two independent browse roots:

| Pinned root | Scope | Accepted species | AviList treatment |
| --- | --- | ---: | --- |
| `V2` | Aves | 11,044 | Every record receives an exact, redirect, ambiguous or unmatched outcome. |
| `329` | Crocodylia | 27 | Explicit package-local `non-applicable`; never counted as AviList unmatched. |
| **Package** |  | **11,071** | Every COL ID has an explicit package outcome. |

The package total must not be described as 11,071 Aves.

## Fixed official source and licence

AviList v2025b was published on 11 June 2026 and is cited as:

> AviList Core Team. 2026. AviList: The Global Avian Checklist, v2025b. https://doi.org/10.2173/avilist.v2025b

The official [v2025b release page](https://www.avilist.org/checklist/v2025b/) supplies the extended XLSX and licenses AviList under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The official [metadata](https://www.avilist.org/wp-content/uploads/2025/06/AviList_v2025_metadata_11Jun.pdf) defines `AvibaseID` as a stable taxonomic-concept identifier independent of nomenclature.

The exact imported workbook is:

- URL: `https://www.avilist.org/wp-content/uploads/2026/06/AviList-v2025b-10Jun2026-extended.xlsx`
- retrieved: `2026-08-31T03:11:47Z`
- bytes: `8,954,422`
- SHA-256: `2e1fd3374e23af732b04115b033dd9d97fc53ba275c312d02ef5d12cfb85c988`
- ETag: `"6a2aec3d-88a236"`
- Last-Modified: `2026-06-11T17:11:25Z`

[`data/sources/avilist-v2025b.json`](../data/sources/avilist-v2025b.json) is the controlling acquisition, licence, workbook and matching ledger. The raw workbook is not committed. The derived canonical gzip retains only source-row locators, taxonomic sequence, order, family, official scientific name and authority, AviList English name, AvibaseID and protonym. It excludes decision-summary prose, ranges, IUCN categories, BirdLife/Cornell identifiers and links, type-locality text and bibliographic content.

## Exact matching boundary

COL names have only representation-level normalization: exact removal of the separate trailing authorship field, Unicode NFC, underscore-to-space conversion, whitespace collapse and the explicit `Genus (Subgenus) species` to `Genus species` representation. Case, diacritics, punctuation and all other tokens remain significant.

The permitted outcomes are:

- `accepted`: the COL Aves name equals exactly one AviList current `Scientific_name`;
- `official-current-name-redirect`: with no current-name match, the COL name equals exactly one AviList `Protonym` and the four-digit publication year in COL authorship equals the year in the same AviList row's `Authority`;
- `ambiguous`: permitted exact evidence has multiple targets or an exact protonym cannot exclude homonymy because its authorship year conflicts or is missing;
- `unmatched`: no permitted exact evidence resolves the COL Aves record;
- `non-applicable`: a package-local Crocodylia record outside AviList scope.

No fuzzy, edit-distance, phonetic, case-folded, diacritic-stripped, token-reordered, gender-ending, genus-substitution, common-name or higher-rank matching is allowed. Decision summaries are not parsed into redirects.

The pinned result is:

| Outcome | Records |
| --- | ---: |
| Exact current-name accepted | 10,444 |
| Official protonym + exact year redirect | 78 |
| Ambiguous | 1 |
| Unmatched Aves | 521 |
| Non-applicable Crocodylia | 27 |
| Unique matched AviList concepts | 10,522 |
| AviList upstream-only species | 609 |

The ambiguous record is COL `4KH9K`, `Ploceus superciliosus (Shelley, 1873)`. AviList uses `Ploceus superciliosus` as the protonym of `Plocepasser superciliosus (Cretzschmar, 1827)`. The conflicting authorship years expose homonymy, so the generator does not redirect or attach that AvibaseID.

## Canonical and locator contract

[`data/sources/avilist-v2025b-crosswalk-col26.8.json.gz`](../data/sources/avilist-v2025b-crosswalk-col26.8.json.gz) is the complete deterministic audit snapshot. [`data/sources/avilist-birds-import-ledger.json`](../data/sources/avilist-birds-import-ledger.json) records its input/output checksums and counts.

The package-local projection uses deterministic gzip JSON-array shards sorted by raw Unicode code-unit `colId`. Every file declares inclusive `minColId` and `maxColId` bounds, so a detail request selects at most one shard. AviList upstream-only rows are separate AvibaseID-sorted shards and do not receive fabricated COL IDs.

Rebuild the canonical snapshot from a separately downloaded verified workbook:

```bash
node scripts/build-avilist-birds-crosswalk.mjs --avilist-xlsx /absolute/path/AviList-v2025b-10Jun2026-extended.xlsx
node scripts/build-avilist-birds-projections.mjs
```

The first command verifies the official workbook checksum and both pinned COL inputs before writing. Neither command performs network access.

## Future delivery contract

This commit intentionally stops before runtime integration. A later versioned release must:

1. register the descriptor and every checksum in the `crocodylomorphs-birds` runtime collection;
2. include the same gzip bytes in the normal package ZIP and browser package/full-atlas offline plans;
3. include those identical bytes in the full Android and iOS release inventories;
4. retain all 609 upstream-only rows and all 27 non-applicable Crocodylia records;
5. keep unmatched and ambiguous outcomes visible and avoid claims of full match, species-concept equivalence, phylogeny or complete history.

No reduced mobile subset is permitted.
