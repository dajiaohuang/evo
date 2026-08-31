# Release-pinned ITIS mammal TSN sidecars

The six mammal packages include a conservative crosswalk from the 6,461 accepted species assigned by the pinned COL26.8 ownership projection to the official Integrated Taxonomic Information System monthly SQLite export dated 2026-08-26.

This is a nomenclatural identifier sidecar. It is not an MDD equivalent, a phylogeny, an independent species-concept reconciliation or a final classification authority.

## Fixed source and licence

ITIS states that its [complete database is available under CC0](https://www.itis.gov/about_itis.html) and provides [CC0 citation guidance](https://www.itis.gov/citation.html). The official [database download page](https://www.itis.gov/downloads/index.html) publishes full monthly dumps and an `MD5SUMS` validation file.

The imported export is identified by the archive directory `itisSqlite082626` and by maximum `taxonomic_units.update_date` and `synonym_links.update_date` values of `2026-08-26`. The official SQLite ZIP MD5 is `3ab23c8d82c73afeda4d368a6173e8cb`; locally computed SHA-256 values are recorded for both the 224,511,428-byte ZIP and its 925,421,568-byte database member. The raw ZIP and database are not committed.

[`data/sources/itis-2026-08-26.json`](../data/sources/itis-2026-08-26.json) records the complete official request ledger, response metadata, checksums, licence, database audit, exact SQL and COL input checksums. [`data/sources/itis-mammal-sidecar-import-ledger.json`](../data/sources/itis-mammal-sidecar-import-ledger.json) records every generated output and checksum.

## Exact matching boundary

The generator removes an authorship suffix only when it exactly equals the separate COL authorship field. It then applies Unicode NFC, converts underscores to spaces, collapses whitespace and folds the standard `Genus (Subgenus) species` representation to `Genus species`. Case, diacritics, punctuation, genus and specific epithet are otherwise preserved.

The normalized name must exactly equal either a valid ITIS Mammalia species name or an official species-rank invalid name connected through `synonym_links` to a valid Mammalia species. No edit distance, phonetic match, case folding, diacritic removal, token reordering, genus substitution or higher-rank inference is allowed.

Four outcomes remain distinct:

- `accepted`: exact evidence resolves uniquely and directly to a current valid ITIS species name;
- `synonymCurrentNameRedirect`: exact official invalid-name evidence resolves uniquely to one current valid species;
- `ambiguous`: exact official evidence resolves to more than one current valid species TSN;
- `unmatched`: no permitted exact evidence resolves to a current valid species.

The fixed result is:

| Package | COL species | Accepted | Redirect | Ambiguous | Unmatched |
| --- | ---: | ---: | ---: | ---: | ---: |
| `mammal-origins` | 0 | 0 | 0 | 0 | 0 |
| `perissodactyla` | 19 | 19 | 0 | 0 | 0 |
| `cetartiodactyla` | 503 | 502 | 0 | 1 | 0 |
| `primates` | 530 | 530 | 0 | 0 | 0 |
| `carnivora` | 310 | 310 | 0 | 0 | 0 |
| `other-mammals` | 5,099 | 5,099 | 0 | 0 | 0 |
| **Total** | **6,461** | **6,460** | **0** | **1** | **0** |

The one ambiguous record is COL `Camelus ferus` (`5WWKW`). ITIS has a valid `Camelus ferus` TSN and also an exact invalid `Camelus ferus` TSN connected to `Camelus dromedarius`; the generator does not choose between those official exact resolutions.

## Reproduction

Download `itisSqlite.zip` and `MD5SUMS` from the official ITIS download page, verify the ZIP against the pinned official MD5 and SHA-256, and extract `itisSqlite082626/ITIS.sqlite` outside the repository. Then run:

```bash
node scripts/build-itis-mammal-sidecar.mjs --itis-sqlite /absolute/path/to/itisSqlite082626/ITIS.sqlite
```

The generator verifies the extracted database SHA-256, both pinned COL input checksums, the ITIS query counts and export dates before writing the six package-local sidecars and import ledger. It does not fetch from ITIS, copy the raw database or modify runtime, mobile, UI, release or manifest files.
