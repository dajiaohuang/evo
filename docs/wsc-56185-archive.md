# World Spider Catalog archive projection (ChecklistBank 56185)

This worker freezes the actual archive returned by the official ChecklistBank
dataset-56185 archive endpoint
`https://api.checklistbank.org/dataset/56185/archive?attempt=80` (import
attempt 80) for *The World Spider Catalog*. The committed archive is
3,051,808 bytes with SHA-256
`56ec2edda2d4570ee24fd67e9ab392ef0dce80fb9cef4967ba74caf00e12a390`.
The API metadata response is retained as
`data/sources/archives/checklistbank-56185-wsc-2026-08-30.metadata.json`
(8,154 bytes; SHA-256
`f28d048bb820e058e5cae54b856bfbb4fb714fda3a6052564c745deb8fa12605`).

The current API response identifies the dataset as *The World Spider Catalog*,
version `2026-08-30`, version DOI `10.48580/d4btg.v80`, base DOI
`10.48580/d4btg`, issued 2026-08-30, and declares the raw license value
`cc by`; no normalized license version or license URL is inferred. The exact
citation, creator, contact and contributors are copied from that response.

## Archive metadata boundary

The archive's own `metadata.yaml` is also preserved byte-for-byte. It declares
DOI `10.24436/2`, has an empty `version` field, issued date 2026-08-30, and
license `cc by` (6,574 bytes; SHA-256
`64e29fb1e16fc7fb37c219b73a3eeb9c4098dd18c465f7bad583f4418ac5cfbd`). This
differs from the current API DOI/version metadata. The descriptor and ledger
record the status as `mismatch`, retain both sets of values, and use the
byte-pinned archive as the projection input; neither metadata record is
silently substituted for the other and the archive is not represented as
version-equivalent to the current API response.

The four archive members are retained with byte counts and SHA-256 digests:
`NameUsage.tsv` (71,621 rows), `Reference.tsv` (10,856 rows),
`Distribution.tsv` (66,733 rows), and `metadata.yaml`. The reference and
distribution rows remain source statements; no completeness is inferred from
the catalog's geographic descriptions.

## Scope and deterministic outcomes

The COL boundary is the exact accepted-species closure below root usage `RN`,
`Araneae`, restricted to source dataset 56185. It contains 53,353 COL26.8
accepted species. The archive contains 53,400 accepted species-ranked
`NameUsage` rows. Exact matching yields 53,338 accepted matches and 15
unmatched COL rows. There are no ambiguous, redirect or withheld rows. The
remaining 62 accepted source rows are a separate `upstream-only` partition
(the source-only records are not assigned a COL ID).

Matching applies only NFC and Unicode-whitespace normalization, with COL's
trailing authorship removed exactly. It does not perform fuzzy, case-folded,
accent-folded, synonym, redirect or species-concept matching. The 15 unmatched
rows remain unmatched; encoding differences and missing source names are not
repaired by inference. Every accepted source row is represented exactly once
across the matched and source-only partitions.

Each projected source record retains its WSC identifier, constructed name from
the source's generic/specific fields, authorship, name-status, reference ID,
page, link, source row locator and distribution rows. Where available, raw
`Reference.tsv` objects and their locators are retained. `source-only` rows are
not global new-species claims.

The 53,353 COL rows occupy 43 gzip JSON shards and the 62 upstream-only rows
occupy one separate shard. Their combined payload is 88,125,618 uncompressed
bytes and 8,012,727 compressed bytes; the largest uncompressed shard is
2,095,862 bytes, below the 2 MiB limit. Web delivery is summary-only; the
native-full profile lists all 44 shards and all 53,415 records.

This is a nomenclatural/source projection, not a biological dossier, fossil
dataset, distribution-completeness claim, phylogeny or expert review. The
source catalog's own exclusion of fossils is not expanded into a project-wide
fossil conclusion.

## Offline replay

The importer is `scripts/build-wsc-spiders-source.py`. It reads only the
committed archive, the retained API metadata and the existing COL registry; it
does not call ChecklistBank at build time:

```bash
rtk python -B scripts/build-wsc-spiders-source.py
```

The focused test performs two isolated deterministic rebuilds, checks exact
descriptor/ledger/shard equality, validates every archive-member digest and
row count, checks the metadata mismatch disclosure, and replays every source
ID and locator against the original ZIP:

```bash
rtk python -B scripts/wsc-spiders-source.test.py
```
