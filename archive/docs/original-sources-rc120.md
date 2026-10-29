# Kinorhyncha, Nematomorpha and Ctenophora source evidence

These frozen projections add original-source nomenclatural traceability to
existing COL26.8 records. They are not biological dossiers, independent
scientific corroboration, fossil evidence or claims of global novelty.

| Source | Snapshot | COL records | Exact accepted matches | Unmatched | Source-only | Row files |
|---|---|---:|---:|---:|---:|---:|
| World Kinorhyncha Database 1153 | 2026-09-01 | 362 | 362 | 0 | 0 | 1 |
| World checklist of freshwater Nematomorpha species 1119 | Dec 2010 | 356 | 356 | 0 | 0 | 1 |
| Phylum Ctenophora: list of all valid species names 1180 | 2026-09-01 | 197 | 197 | 0 | 4 | 2 |

Together the four files contain 919 rows and occupy 198,537 compressed bytes.
The largest uncompressed shard is 1,339,874 bytes. Full-data builds retain all
rows, including the four Ctenophora source-only records. Pages publishes the
same summaries and canonical hashes without these row payloads. The pinned
archives and their complete source tables remain separate build-time evidence,
not part of the resident species tree.

The exact COL boundaries are Kinorhyncha `B8VF5`, Nematomorpha `5B` and
Ctenophora `B8V3L`. Matching uses NFC and whitespace-normalized scientific
name plus authorship only; it does not use fuzzy, case-folded, synonym or
species-concept matching. A source-only row means no exact match in the frozen
COL source boundary, not that the taxon is globally new.

The Kinorhyncha and Ctenophora ColDP archives retain their original `Name`,
`Taxon`, `Reference` and `NameReference` tables and row locators. The older
Nematomorpha archive is a gzip-compressed tar export whose `References.tsv` and
`NameReferences.tsv` contain headers but no data rows; the projection therefore
does not claim row-level bibliography that the source did not supply.

Official source records:

- [World Kinorhyncha Database](https://www.checklistbank.org/dataset/1153/about), DOI `10.48580/d3ds.v86`.
- [World checklist of freshwater Nematomorpha species](https://www.checklistbank.org/dataset/1119/about), DOI `10.48580/d3cm.v8`.
- [Phylum Ctenophora list](https://www.checklistbank.org/dataset/1180/about), DOI `10.48580/d3fq.v88`.

The pinned metadata declares CC BY. Derived projections separately retain the
COL26.8 attribution and identifiers. Referenced publications, linked web pages
and remote media are not copied into the repository.

Rebuild the canonical outputs offline with:

```text
python -B scripts/build-worms-kinorhyncha-source.py
python -B scripts/build-nematomorpha-source.py
python -B scripts/build-worms-ctenophora-source.py
node scripts/integrate-worms-small-phyla-archives.mjs
```

The isolated replay tests compare the frozen archives, source tables, ledgers,
descriptors and generated shards with committed bytes. Existing Pages and
native inventory tests verify summary-only preview delivery and complete
Android/iOS row delivery. These checks are reproducibility and packaging
evidence, not expert taxonomic review. No compatibility layer or new content
validation framework is introduced.
