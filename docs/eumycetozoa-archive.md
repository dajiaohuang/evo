# Eumycetozoa original-source projection

This extension traces 1,337 COL26.8 accepted-species records attributed to source
1053 to the frozen May 2024 Eumycetozoa database. It is the contributor source
used by COL, not independent corroboration, a full biological dossier or expert
review. The strict COL accepted-species baseline is unchanged.

## Frozen source and identity boundary

- [ChecklistBank source 1053](https://api.checklistbank.org/dataset/1053),
  version DOI [10.48580/d39c.v28](https://doi.org/10.48580/d39c.v28).
- [Original archive](https://api.checklistbank.org/dataset/1053/archive), retrieved
  2026-09-04, CC BY 4.0. The committed file is a ZIP, not tar/gzip:
  `data/sources/archives/checklistbank-1053-eumycetozoa-2024-05.zip`.
- 131,700 bytes; SHA-256
  `2d8a55a43d7273bfabaa19c16942c9258b7ca00c17319fead95c562af40f24b1`.

The archive contains 1,345 accepted source rows, 3,926 name-reference links and
2,932 bibliography records. Comparison permits only whitespace normalization of
scientific names and authorship. It does not repair punctuation, substitute a
similar name, infer missing authors or promote a name-only match.

Exactly 1,330 COL targets match unique source names and authors. Each retains its
original `Accepted name` status, source ID, URL, classification, one associated
reference, and 1-based table row locators including the header. Reference fields,
including empty fields, are preserved verbatim; a bibliographic association does
not imply that the referenced publication itself was read or independently checked.

Seven targets remain unmatched, with null source IDs and no invented references:
`39SDP`, `4ZT26`, `6PVT4`, `992NH`, `CDHD7`, `CDHRG`, and `CQ9TK`.
The last record's null COL authorship remains null. Fifteen accepted source rows
remain unlinked and are listed in the import ledger, not published as additional
species. Unlinked does not mean absent from COL as a whole: identities can differ
between releases and other sources may contain the same taxa.

## Rebuild and delivery

From the repository root, with Python and installed project dependencies:

```sh
python scripts/build-eumycetozoa-sidecar.py
npx vitest run scripts/eumycetozoa-archive.test.mjs
```

The importer reads only the committed archive and canonical COL partitions. Its
optional `--output-root` redirects generated files, not its inputs. The descriptor,
gzip and ledger are deterministic; tests execute two real offline rebuilds and
compare all three outputs byte for byte, then separately inspect original ZIP
tables for every matched name and reference locator.

The source descriptor declares summary-only `web-light` and complete `native-full`
delivery. Integration must retain the complete shard in both Android and iOS;
the light profile must not acquire full catalogue rows. The source ledger records
actual input, member, descriptor and output digests. It is provenance, not a new
content-validation or scientific-review system.
