# Species Fungorum live API: Oomycota source gap

Audited 2026-09-04 against the official Index Fungorum SOAP service linked by the Species Fungorum data page.

## Evidence

The frozen Species Fungorum Plus Apr 2024 DWCA (`dataset-2073.zip`, SHA-256 `5a8875093c84660d6ffd488c3cd25431c0291b07f524a935e5beaffc40c07387`) and its original archive contain no `Oomycota` phylum/root closure. The processed export has 328,830 rows and the original archive has `Name.tsv`, `Reference.tsv`, `Synonym.tsv`, and `Taxon.tsv`; exact Oomycota phylum-row counts are zero in both.

The official live `NameByKey` endpoint does return Oomycota records for source IDs referenced by COL links:

- `https://www.indexfungorum.org/ixfwebservice/fungus.asmx/NameByKey?NameKey=122113` → *Albugo candida*, Oomycota, `Current Use=X`, updated 2025-08-27.
- `https://www.indexfungorum.org/ixfwebservice/fungus.asmx/NameByKey?NameKey=528772` → *Rozellopsis septigena*, Oomycota, `Current Use=X`, updated 2025-11-14.

Raw XML responses and SHA-256 digests are retained outside Git in `.repostew/`:

- `if-namebykey-122113.xml`: 4,063 bytes, `502ab4b74818cdc4a52c2aea9f39630a7cfc9c8fa7c9e9210874829e80bf59f2`
- `if-namebykey-528772.xml`: 3,497 bytes, `f94cef230474947470f9d1bf6f41fe488fac7f1c71bbbe69d42a6c397a04c9e3`

## Rights boundary

Species Fungorum’s data page documents SOAP APIs and custom datasets. Kew’s science-data terms say dataset-specific metadata controls licensing; they permit software use and require attribution, but do not establish that arbitrary live Index Fungorum API responses are CC BY or redistributable as a bundled archive. The CC BY 4.0 label on ChecklistBank dataset 2073 must not be automatically applied to live API responses.

## Implementation decision

The live API is a viable evidence endpoint for resolving COL source IDs, but not yet a pinned redistributable source snapshot. A future batch must rate-limit requests, retain request/response hashes and retrieval timestamps, and obtain or document a dataset-specific redistribution licence before emitting public payloads. The current RC111 source worker therefore does not ship the 1,673-withheld projection.
