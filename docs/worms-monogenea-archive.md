# WoRMS Monogenea archive projection

This source-specific projection freezes the WoRMS Monogenea ColDP archive
from ChecklistBank dataset 1126, version 2026-09-01 (`10.48580/d3cv.v86`).
The pinned archive is ZIP bytes, 1,235,337 bytes, SHA-256
`f11c11f3ca7c8b5a858e36906f87e1aa81ea3438475e736b63efbda0e59f8699`.

The COL26.8 baseline contributes 5,852 strict accepted species whose
`sourceDatasetId` is 1126. The source archive contains 5,878 strict accepted
species, determined by joining `Taxon.nameID` to `Name.ID` and requiring
`Name.rank=Species`; a non-empty `Taxon.species` field alone is not sufficient.
Exact scientific-name plus authorship matching yields 5,835 accepted matches,
17 unmatched COL rows, and 43 source-only accepted concepts (5,895 total
native rows). Source-only rows
retain null COL ownership and are not claims of globally new species.

Source fields, original names/authorship, source IDs, source links, reference
IDs and Name.txt/Taxon.txt row locators are retained. Synonym relationships
are not used to discard accepted taxa. No fuzzy matching, species-concept
equivalence, biological dossier, fossil evidence or expert-review claim is
made. The source snapshot (2026-09-01) and COL26.8 (2026-08-20) are distinct
releases.
