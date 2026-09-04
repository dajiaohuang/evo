# RC131 original-authority evidence layer

This worker freezes two independent ChecklistBank archive projections into the
COL26.8 (`2026-08-20`) accepted-species partitions. They remain separate
authority layers: neither archive is merged into a new classification, and
neither is a compatibility layer for an older format.

| Layer | ChecklistBank dataset | Version / DOI | COL root | COL rows | Exact matches | Unmatched | Source accepted | Source-only |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| Scorpiones | The Scorpion Files | Jul 2026 / `10.48580/d3f6.v47` | `42N` | 2,940 | 2,872 | 68 | 2,939 | 67 |
| Chilopoda | A World Catalogue of Centipedes (Chilopoda) for the Web (ChiloBase) | 1.01, May 2006 / `10.48580/d38y.v9` | `93` | 3,141 | 2,269 | 872 | 3,141 | 872 |

`source-only` rows retain `colId: null` and are not presented as new COL
species. `unmatched` rows remain in the COL partition. Matching permits only
Unicode NFC and Unicode whitespace normalization, after removing an exact
trailing COL `scientificName + " " + authorship`; it does not use case folding,
diacritic folding, fuzzy matching, synonyms, taxonomic substitution or
species-concept inference.

## Licence and archive-member boundaries

The `license` / `licenseEvidence` fields in each descriptor and ledger are
derived only from the pinned ChecklistBank API metadata response (`license:
cc by`). This is the licence evidence for the delivered ChecklistBank
projection and is normalized to `CC-BY-4.0` with the Creative Commons URL.

Archive members provide independent identity and content evidence; they do not
silently become licence evidence. For Scorpion Files, `meta.yaml` also contains
`license: cc by`, so that value is retained as an archive-member observation.
For ChiloBase, `SourceDatabase.tsv` contains title, version and release-date
identity fields but no licence field. The ChiloBase descriptor and ledger
therefore explicitly state that no archive-member licence is inferred: its
licence statement is ChecklistBank API metadata only.

The Scorpion Files archive `issued=2026-07-07` differs from the ChecklistBank
API `issued=2026-07-06`. Both are retained as separate observations; the
projection does not rewrite them as one date. ChiloBase's archive
`ReleaseDate=2006-10-10` is likewise retained as archive-member evidence.

## Fixed inputs

The archives and metadata responses were retrieved at
`2026-09-05T04:47:19+08:00`. Their URLs, byte lengths, SHA-256 values and
archive-member summaries are pinned in both the descriptor and its import
ledger. ChiloBase is a gzip-compressed tar archive despite the endpoint's
`application/zip` HTTP content type; the observed bytes and format are
preserved without rewriting the archive.

- Scorpion Files archive: `https://api.checklistbank.org/dataset/1164/archive`,
  168,659 bytes, SHA-256
  `bf13d82d5809d39c6526df683b48293aeadf72ebda514ede6eafe011d3fa814f`.
- ChiloBase archive: `https://api.checklistbank.org/dataset/1042/archive`,
  349,771 bytes, SHA-256
  `4274d8399386d90ca280f3cf89f5dddb0f598c4e085de2dc9926a9614335b088`.

## Deterministic outputs and ledger direction

Each JSONL gzip shard has an uncompressed source payload no larger than 2 MiB,
uses `mtime=0`, a fixed gzip OS byte and stable JSON serialization. The
`native-full` inventory includes every COL and source-only shard; `web-light`
retains descriptor-level summary only.

The import ledger records the final descriptor's actual bytes and SHA-256 in
`outputs.descriptor`. The descriptor does not embed a hash of that ledger, so
replay is one-way and deterministic rather than circular. This follows the
repository's mature archive-source pattern: the ledger is the audit record for
the descriptor, not a self-referential descriptor dependency.

The two descriptors are:

- `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/scorpion-files-sidecar.json`
- `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/chilobase-sidecar.json`

The ledgers are:

- `data/sources/scorpion-files-archive-1164-import-ledger.json`
- `data/sources/chilobase-archive-1042-import-ledger.json`

Run the independent replay with:

```text
python scripts/test-small-authority-sources.py
```
