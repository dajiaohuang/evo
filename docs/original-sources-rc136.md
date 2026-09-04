# RC136 Chaetognatha, Rhombozoa and Loricifera source archives

RC136 adds three frozen nomenclatural source projections to the `other-animals`
resource pack. They improve source traceability without changing the
2,183,133-species COL26.8 baseline or claiming species-concept equivalence,
expert review, biological dossiers, fossils or complete historical synonymy.

## Frozen inputs

| Scope | ChecklistBank dataset | Exact archive | Bytes | SHA-256 | API version DOI |
| --- | ---: | --- | ---: | --- | --- |
| Chaetognatha | 1132 | `archive?attempt=85` | 45,909 | `c14c95f99dceb1500c1c5b99a99a3ca0d4c88a0566738f7f7fa1e329e4de47a4` | `10.48580/d3d3.v85` |
| Rhombozoa | 1150 | `archive?attempt=86` | 23,988 | `c29902e32bdd8700988bc61a5d67096e011a3862b4176df215aada16f4a8690d` | `10.48580/d3dp.v86` |
| Loricifera | 1182 | `archive?attempt=88` | 14,695 | `e6618414a8a660def5aca98be29a78e9eb2909ccab96a9e5d54a0d28b5744c5b` | `10.48580/d3fs.v88` |

The current ChecklistBank API responses and each archive's embedded
`metadata.yml` are retained separately. All three API records supply a DOI and
the controlled licence value `cc by`; all three embedded records omit that DOI
and spell the licence `CC-BY`. Descriptors and ledgers record this mismatch
explicitly and pin the archive attempt, API bytes, archive bytes and every
archive-member digest.

## Scope and matching

The COL roots are `36` (Chaetognatha), `B8VFC` (Rhombozoa) and `B8VF6`
(Loricifera). Matching is limited to unique exact scientific name plus
authorship after Unicode NFC and whitespace normalization. Fuzzy, case-folded,
accent-folded, synonym and species-concept matching are prohibited.

| Scope | COL rows | Exact matches | Unmatched | Source-only | Full records | Native files |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Chaetognatha | 132 | 132 | 0 | 0 | 132 | 1 |
| Rhombozoa | 122 | 122 | 0 | 0 | 122 | 1 |
| Loricifera | 46 | 46 | 0 | 1 | 47 | 2 |

The Loricifera source-only row is preserved with `colId: null`; it is not
counted as a new globally unique species. Every output row keeps archive table
and row locators. Every uncompressed shard remains below 2 MiB.

Pages uses `web-light`, which exposes complete summaries and canonical hashes
without row payloads. Android and iOS use `native-full`, which contains all
301 records in four deterministic gzip files.

## Offline reproduction

From the repository root, rebuild and compare the committed outputs with:

```powershell
python -B scripts/build-worms-small-original-sources.py
python -B scripts/worms-small-original-sources.test.py
```

The focused test rebuilds each scope twice from the committed archive and API
metadata, verifies byte-identical descriptors, ledgers and shards, and checks
fixed URLs, attempts, metadata differences, counts, hashes and locators.
