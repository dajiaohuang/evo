# WoRMS Gastrotricha archive projection (1122)

This source-specific projection freezes the ChecklistBank archive for the
World Gastrotricha Database, version 2026-09-01 (version DOI
`10.48580/d3cq.v86`). The archive is the official dataset-1122 `/archive`
download, 138,207 bytes, SHA-256
`3828913cfe33e8a5184ad6ab86f9d824a897fa7f6ad85967365c292e33079653`.
The metadata records the source license as CC BY (`cc by`); the descriptor
retains the normalized CC-BY-4.0 link and WoRMS/VLIZ provenance.

The COL boundary is the exact accepted-species closure below root usage
`B8V3M` (Gastrotricha) for source dataset 1122. It contains 903 COL species.
The archive parser found 904 species-ranked Taxon rows, of which one was
provisional and excluded; 903 accepted source rows were projected. Exact NFC
and whitespace-normalized scientific-name plus authorship matching produced
900 accepted, 3 unmatched, and 3 source-only rows. No fuzzy, synonym,
case-folded, or concept matching is used. Source-only is relative only to
this COL source-1122 boundary and is not a claim of globally new species.

The committed shards preserve the original Name, Taxon, NameReference and
Reference fields and row locators. The COL partition has 903 records and the
independent upstream-only partition has 3 records; the largest uncompressed
shard is 2,038,000 bytes (below the approximately 2 MiB bound). Web delivery
is summary-only; native-full carries all 906 projected records.

The importer is offline and reproducible with the committed archive and
metadata. Its focused test performs two temporary output-root rebuilds,
compares every canonical shard, descriptor and ledger byte-for-byte, and
checks projected IDs, authorship, raw archive rows, reference objects and
locators. This is a nomenclatural/source crosswalk, not a species-concept
equivalence, biological dossier, fossil assessment, or expert review.
