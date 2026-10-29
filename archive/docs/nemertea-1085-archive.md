# World Nemertea Database archive projection

This frozen projection uses ChecklistBank dataset 1085, World Nemertea
Database, version 2026-09-01 (10.48580/d3bg.v89). The committed archive and
metadata are pinned by SHA-256 in the descriptor and ledger. The source scope
is species rows with `phylum=Nemertea`; COL ownership is independently bounded
to source dataset 1085 under COL root `5C`.

Only source `rank=Species` rows with `provisional=0` are accepted for exact
scientific-name plus authorship matching. Synonym rows are retained in the
archive evidence but are not followed. The projection contains 1,361 exact
accepted matches, 3 unmatched COL species, and 12 accepted source concepts
without a COL owner. Source-only rows are not claims of global novelty or
species-concept equivalence.
