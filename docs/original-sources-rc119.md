# Cestoda, Nemertea and Gastrotricha source evidence

These exact nomenclatural projections add original-source traceability to
existing COL26.8 records, not detailed biological dossiers or independent
scientific corroboration.

| Source | COL records | Exact accepted matches | Unmatched | Source-only | Row files |
|---|---:|---:|---:|---:|---:|
| World List of Cestoda 1127 | 3,015 | 3,008 | 7 | 39 | 5 |
| World Nemertea Database 1085 | 1,364 | 1,361 | 3 | 12 | 3 |
| World Gastrotricha Database 1122 | 903 | 900 | 3 | 3 | 2 |

Together the files contain 5,336 rows and occupy 1,062,668 compressed bytes.
Every shard is at most 2 MiB uncompressed (largest: 2,096,832 bytes). Full-data
builds retain all records, including unmatched and source-only outcomes.
Pages publishes summaries only. Original archives and complete reference
tables remain separate build inputs, not part of the resident tree.

Source-specific evidence and official catalogues:

- [Cestoda scope](sources/worms-cestoda-1127.md), [official dataset](https://www.checklistbank.org/dataset/1127/about), DOI `10.48580/d3cw.v84`.
- [Nemertea scope](nemertea-1085-archive.md), [official dataset](https://www.checklistbank.org/dataset/1085/about), DOI `10.48580/d3bg.v89`.
- [Gastrotricha scope](gastrotricha-1122-archive.md), [official dataset](https://www.checklistbank.org/dataset/1122/about), DOI `10.48580/d3cq.v86`.

All three source snapshots are dated 2026-09-01. The COL boundaries use source
dataset ownership and roots `8Z`, `5C` and `B8V3M`, respectively. Original
nonprovisional Taxon species number 3,047, 1,373 and 903; one provisional species
is excluded from each projection but remains in its frozen archive. A source-only
row has no exact match within this COL boundary, not a globally new species claim.
Name status is nomenclatural metadata; Taxon membership supplies the imported
accepted concepts. No fuzzy or synonym fallback establishes scientific identity.

Reproduce the committed offline inputs with
`python -B scripts/build-worms-{cestoda,nemertea,gastrotricha}-source.py`, using
one concrete source name per invocation. Each importer accepts `--output-root`
as an isolated repository-mirror destination. Then run
`node scripts/integrate-worms-small-phyla-archives.mjs` to publish descriptors.
Source-script hashes normalize LF line endings for cross-platform provenance;
this does not introduce a runtime format compatibility path.

Focused replay tests compare rebuilt shards, descriptors and ledgers against
canonical bytes, then check original IDs, names, authorship, citation objects
and row locators. Existing native inventory tests cover every added row file;
these checks are not expert scientific review or device certification. Backend
and client infrastructure evolve independently of content revision labels.
