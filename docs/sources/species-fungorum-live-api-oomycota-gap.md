# Species Fungorum live API: Oomycota source gap

Audited 2026-09-04 against the official [Index Fungorum SOAP service](https://www.indexfungorum.org/ixfwebservice/fungus.asmx?op=NameByKey) linked by the [Species Fungorum data page](https://www.speciesfungorum.org/Data.asp).

## Evidence

The frozen Species Fungorum Plus Apr 2024 DWCA (`dataset-2073.zip`, SHA-256 `5a8875093c84660d6ffd488c3cd25431c0291b07f524a935e5beaffc40c07387`) and its original archive contain no `Oomycota` phylum/root closure. The processed export has 328,830 rows and the original archive has `Name.tsv`, `Reference.tsv`, `Synonym.tsv`, and `Taxon.tsv`; exact Oomycota phylum-row counts are zero in both.

The source metadata identifies dataset `2073`, version `Apr 2024`, version DOI `10.48580/d4hj.v14`. The [processed export](https://api.checklistbank.org/dataset/2073/export.zip?format=DWCA) is 7,032,137 bytes; its `dataset-2073.tsv` member is 79,201,640 bytes with SHA-256 `2c7211638579e7125ec595ed5f178770dafa55f838e243e1f9d122a600ec32db`. The [original archive](https://api.checklistbank.org/dataset/2073/archive) is 24,378,317 bytes with SHA-256 `e7c08fe21b4eee254a622ba8b8b2336fb4578e4761c8482e2415299af55ebee1`. These endpoints are not claimed immutable; the hashes identify the retrieved bytes.

In the original archive, IDs `122113` and `528772` have no `Name.tsv` or `Taxon.tsv` record. ID `122113` occurs only as a `Synonym.tsv` target for name IDs `143625`, `144112`, `495539`, and `499102`; those orphan links cannot establish an accepted taxon or ancestor closure. The current dataset-2073 name-usage API returned HTTP 404 for both IDs. The missing source records are not evidence that the corresponding species do not exist.

The official live `NameByKey` endpoint does return Oomycota records for source IDs referenced by COL links:

- `https://www.indexfungorum.org/ixfwebservice/fungus.asmx/NameByKey?NameKey=122113` → *Albugo candida*, Oomycota, `Current Use=X`, updated 2025-08-27.
- `https://www.indexfungorum.org/ixfwebservice/fungus.asmx/NameByKey?NameKey=528772` → *Rozellopsis septigena*, Oomycota, `Current Use=X`, updated 2025-11-14.

Raw XML responses and SHA-256 digests are retained outside Git in `.repostew/`:

- `if-namebykey-122113.xml`: 4,063 bytes, `502ab4b74818cdc4a52c2aea9f39630a7cfc9c8fa7c9e9210874829e80bf59f2`
- `if-namebykey-528772.xml`: 3,497 bytes, `f94cef230474947470f9d1bf6f41fe488fac7f1c71bbbe69d42a6c397a04c9e3`

These two later live records demonstrate an accessible alternative, not equivalence to the Apr 2024 source release or completeness of its Oomycota coverage. The upstream `Current Use=X` field is retained as reported; it is not interpreted here as current accepted or extant status.

## Rights boundary

Species Fungorum’s data page documents SOAP APIs and custom datasets. [Kew’s science-data terms](https://www.kew.org/science/collections-and-resources/data-and-digital/terms-of-use) say dataset-specific metadata controls licensing; they permit software use and require attribution, but do not establish that arbitrary live Index Fungorum API responses are CC BY or redistributable as a bundled archive. The CC BY 4.0 label on ChecklistBank dataset 2073 must not be automatically applied to live API responses.

## Implementation decision

The 2026-09-09 acquisition resolves the former gap without copying a bulk live database. The COL hierarchy children index yields exactly 1,673 strict accepted species descending from root `5K`; every COL usage has a ChecklistBank source link to dataset `2073`, and every linked Index Fungorum `NameByKey` response returned a record with `Current Use=X`. The deterministic identifier/name/status projection is stored in `data/sources/oomycota-species-fungorum-crosswalk-col26.8.json.gz` and the native-full shard `protists-chromists/species-fungorum-oomycota-000.jsonl.gz`; each row retains both request URLs, response dates, byte counts, and SHA-256 hashes. The snapshot records observed Index Fungorum phylum values (1,650 `Oomycota`, 23 `Hyphochytriomycota`) rather than silently dropping the latter because COL root eligibility is the declared scope.

Species Fungorum’s data page documents the API, while Kew’s terms permit software applications to use site data, require CC-BY attribution where applicable, require extracted reuse to state that Kew cannot warrant quality or accuracy, and prohibit endorsement claims. The descriptor carries those notices and deliberately excludes raw XML, bulk database content, bibliography, hosts, substrates, localities, media, and other page fields. Web-light receives only the descriptor and counts; native Android/iOS receive the complete shard. The older ITIS projection remains a separate 1,494-row authority view and is not overwritten.
