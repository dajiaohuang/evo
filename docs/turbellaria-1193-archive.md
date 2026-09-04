# WoRMS Turbellaria 1193 archive projection

This projection freezes ChecklistBank dataset `1193`, *World List of
turbellarian worms: Acoelomorpha, Catenulida, Rhabditophora*, version
`2026-09-01`, DOI `10.48580/d3g6.v88`, licensed CC BY 4.0. The committed ZIP
archive is 2,320,899 bytes with SHA-256
`ef2402cab1d39b2569c18e415a6c9c3acdc7e197c7ab6e92158488b6863fe8ce`.

The source projection joins `Taxon.nameID` to `Name.ID`, retains only
`Name.rank=Species`, and excludes 37 provisional rows, leaving 6,523 accepted
source rows. Its COL26.8 scope is the union of the exact source-1193 roots
`Acoelomorpha` (`7NF2L`), `Catenulida` (`7NF2P`) and `Rhabditophora` (`7NF2W`);
this is an auditable source boundary, not a claim that these roots form a
single modern monophyletic group.

The COL closure contains 6,469 accepted species. Exact normalized
scientific-name plus authorship matching yields 6,454 accepted mappings and 15
unmatched COL outcomes. The 69 accepted source rows not implicated by exact
matches are retained in an independent upstream-only projection relative only
to this COL source scope, not as globally new species. No fuzzy, synonym,
taxon-substitution or species-concept matching is used.

Names, authorship, source IDs, original fields, reference records and member
row locators are preserved, including empty fields and missing references.
This is frozen nomenclatural/source provenance, not species-concept equivalence,
a biological dossier, fossil evidence or expert review.
