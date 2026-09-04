# WoRMS Trematoda 1128 archive projection

This projection freezes ChecklistBank dataset `1128`, *World List of
Trematoda*, version `2026-09-01` (DOI `10.48580/d3cx.v86`), provided by the
World Register of Marine Species and licensed CC BY 4.0. The committed archive
is `data/sources/archives/checklistbank-1128-trematoda-2026-09-01.zip`,
4,128,567 bytes, SHA-256
`04440a3f5709ee38f2423d6556b1faea25c62a5421d935ff309ea7a40fc42d78`.

The importer joins `Taxon.nameID` to `Name.ID` and keeps only `Name.rank` equal
to `Species`; 19 provisional Taxon rows are excluded, leaving 12,064 accepted
source rows. Synonym `taxonID` targets do not remove accepted Taxon rows, and
`Name.status` remains in the original archive as nomenclatural metadata and is
not used as a taxonomic acceptance flag.

The exact COL26.8 source-1128 Trematoda closure contains 12,007 accepted COL
species. NFC followed by Unicode-whitespace normalization, with the COL
trailing authorship removed only after normalization, produces 11,965 accepted
mappings and 42 unmatched COL outcomes. The 99 accepted source rows not
implicated by those exact matches are retained in the source-only projection;
they are relative to this COL source scope and are not claims of globally new
species. No fuzzy, synonym, taxon-substitution or species-concept matching is
used.

The projection preserves the metadata title, DOI, version, citation, editors,
contributors and CC-BY rights; all archive members retain byte lengths and
SHA-256 digests. Original names, authorship, selected taxonomic fields,
bibliography metadata and Name.txt/Taxon.txt/NameReference.txt/Reference.txt
row locators are retained for every linked source row. Complete original fields,
including empty fields, remain in the committed archive. It is frozen source
provenance and nomenclatural linkage, not species-concept equivalence, a
biological dossier, fossil evidence or expert review.

Rebuild from the repository root:

```text
python scripts/build-worms-trematoda-source.py
python scripts/worms-trematoda-source.test.py
```
