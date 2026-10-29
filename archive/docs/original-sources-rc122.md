# RC122 Oligochaeta and Polychaeta original sources

RC122 adds release-pinned source projections for two annelid authority datasets
distributed through ChecklistBank. It does not change the 2,183,133-species
COL26.8 baseline and does not assert that a same-name row is the same biological
species concept.

| Dataset | Version | COL rows | Exact accepted-name matches | Unmatched | Source-only | Row files |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| World List of Marine Oligochaeta (1099) | 2026-09-01, `10.48580/d3bx.v85` | 4,403 | 4,350 | 53 | 214 | 7 |
| World Polychaeta Database (1090) | 2026-09-01, `10.48580/d3bm.v87` | 14,430 | 14,305 | 125 | 179 | 19 |

The committed source archives total 9,604,765 bytes. Their SHA-256 digests,
the byte length and digest of every archive member, provider citations,
editors, contributors and row locators are retained in the adjacent metadata,
sidecar and import-ledger files. Both source metadata records use the controlled
licence value `cc by`; the 1099 projection additionally records the normalized
CC BY 4.0 licence URL. The 1090 projection retains the source value verbatim.

Matching uses stable source identifiers where present and otherwise exact
scientific-name keys after Unicode NFC and whitespace normalization. An exact
trailing COL authorship may be removed before comparison. Case folding, accent
folding, fuzzy matching, synonym inference and species-concept equivalence are
prohibited. The 393 source-only rows are relative to these two COL source
boundaries, not claims of newly discovered or globally absent species.

Full-data builds expose 19,226 rows in 26 deterministic gzip files, totalling
5,512,535 compressed bytes and 49,071,718 uncompressed bytes. Each file remains
below the current 2 MiB uncompressed shard boundary. GitHub Pages keeps the
same summaries, citations and canonical hashes but omits row payloads. Android
and iOS stage all 26 files. No old-format compatibility route is retained.

To reproduce each projection from its frozen source archive, run:

```text
python scripts/worms-oligochaeta-source.test.py
python scripts/worms-polychaeta-source.test.py
```

Each test performs an isolated rebuild and compares counts, file bytes and
digests with the committed projection. The tests verify provenance and
determinism; they are not independent taxonomic review.
