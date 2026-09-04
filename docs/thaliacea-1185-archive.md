# WoRMS Thaliacea archive projection (1185)

This source-specific projection freezes ChecklistBank dataset 1185, "World
List of Thaliacea", version 2026-09-01, version DOI `10.48580/d3fw.v87`.
The committed official `/archive` bytes are 59,152 with SHA-256
`75b42f6c9ec693068ccaf2c28bdc34ec28a786692b633f6226c311d3d348835a`.
The source metadata records the licence as `cc by`, the archive locator as
`https://api.checklistbank.org/dataset/1185/archive`, and the source landing
URL as `https://www.marinespecies.org`.

The COL boundary is the exact accepted-species closure below root usage
`L2QHG` (Thaliacea) for source dataset 1185. It contains 78 COL species and
the archive contains 78 species-ranked, non-provisional accepted source rows.
Exact NFC and whitespace-normalized scientific-name plus authorship matching
produced 78 accepted records, with no redirects, ambiguous, unmatched,
withheld, or upstream-only records. No fuzzy, case-folded, accent-folded,
synonym, or species-concept matching is used.

The committed ZIP preserves every original archive member, including the 371
Name rows, 126 Taxon rows, 774 NameReference rows, and 175 Reference rows.
The projection shard contains 78 records (265,714 uncompressed bytes;
24,440 gzip bytes). Each record retains the source accepted name, complete
reference objects and source locators for Taxon.txt, Name.txt,
NameReference.txt, and Reference.txt. Web delivery is summary-only;
native-full is expected to carry the one COL shard; there is no upstream-only
file because the source and COL scope counts agree. The profile therefore
carries 78 projected records and 24,440 compressed bytes.

The importer is offline and reproducible with the committed archive and
metadata. Its focused test performs two temporary output-root rebuilds,
compares every canonical shard, descriptor and ledger byte-for-byte, and
replays every projected source name, authorship, source ID, raw reference,
and row locator against the original archive. This is a nomenclatural/source
crosswalk, not a species-concept equivalence, biological dossier, fossil
assessment, or expert review. No `rightsHolder` is asserted because the
source metadata does not provide one.
