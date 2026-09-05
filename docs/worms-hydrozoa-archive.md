# World Hydrozoa Database authority archive

This package-local, source-linked Hydrozoa projection is integrated into the
canonical `sponges-cnidarians` package in RC138. It covers the frozen authority
scope described below; it is not a claim that the source itself is globally
complete or that exact names prove species-concept equivalence.

## Frozen authority input

- Provider: World Hydrozoa Database via ChecklistBank, dataset `1112`.
- API metadata endpoint: `https://api.checklistbank.org/dataset/1112`.
- API release: `2026-09-01`, version DOI `10.48580/d3cd.v84`, base DOI
  `10.48580/d3cd`, issued `2026-09-01`, license `cc by`.
- Exact successful archive: `https://api.checklistbank.org/dataset/1112/archive?attempt=84`.
- Archive attempt: `84`.
- Archive size and SHA-256: `1,819,351` bytes;
  `741fdd2f4252d5b45676d1dc6f3f6d9296f022a1ce12019904c999fc8f520902`.
- API metadata size and SHA-256: `3,535` bytes;
  `b372620c9216bdb0efdce3d72e46aac96325dc36d43348e8938791f974b16e9b`.

The complete archive ZIP and complete API response are committed under
`data/sources/archives/`. The archive contains all twelve upstream members;
the ledger records every member's byte length and SHA-256.

## Metadata boundary

The archive's own `metadata.yml` is retained byte-for-byte and is reported
separately from the current API response. Its fields are DOI `10.14284/357`,
version `2026-09-01`, issued `2026-09-01`, license `CC-BY`, and website
`https://www.marinespecies.org/hydrozoa`. The API reports DOI
`10.48580/d3cd` and license `cc by`; version and issued agree. The descriptor
therefore records a metadata mismatch instead of silently replacing either
source's values.

## Scope and matching

The projection includes only COL26.8 accepted species from source dataset
`1112` below the Hydrozoa class root `B8V3X`. The closure contains `4,005`
COL species. The archive has `4,006` species-rank taxa; the strict source
accepted subset is `4,004` rows after excluding two provisional taxa.

Linking is deliberately conservative: NFC normalization and Unicode
whitespace normalization are allowed, then the scientific name and authorship
must match exactly and uniquely. No fuzzy, case-folded, accent-folded,
synonym, redirect, or species-concept matching is performed. Unlinked source
rows are emitted as `source-only` with `colId: null`; that status is local to
this closure and does not assert a new species.

The resulting counts are:

- COL rows: `4,005` (`3,997` exact accepted, `8` unmatched, no redirect or
  ambiguous rows).
- Source-only rows: `7`.
- Complete native record count: `4,012`.

Each record keeps source row locators, referenced bibliography rows, the
source name/taxon fields, and distribution rows available in the frozen
archive. This is nomenclatural/source evidence, not a biological dossier,
distribution-completeness statement, fossil evidence, or expert review.

## Delivery and deterministic replay

Native-full delivery consists of ten COL-partition gzip JSON shards and one
source-only shard. Each decompressed JSON array is at most `2 MiB`. Gzip
timestamps are zeroed and the OS byte is fixed, so replay is byte deterministic.
The web-light profile is summary-only and intentionally carries no full
Hydrozoa rows. Android and iOS receive the complete native-full set and expose
the matching collection through the Hydrozoa COL root `B8V3X`.

Run the independent replay check from the repository root:

```text
python scripts/worms-hydrozoa-source.test.py
```

The test replays the builder twice, checks exact archive URL/attempt/API
version/version DOI, validates the embedded DOI and empty/version boundary,
verifies all archive member hashes, checks shard limits and `colId: null`
source-only rows, and compares replay bytes with the committed outputs.
