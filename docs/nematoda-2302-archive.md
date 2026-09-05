# ChecklistBank dataset 2302 (Nemys Nematoda) archive projection

This worker freezes the official ChecklistBank dataset `2302` archive retrieved
from `https://api.checklistbank.org/dataset/2302/archive`. The pinned archive is
4,107,143 bytes (`11805c4e72c96130b626e12618ff70f938c2c825bfbb0aff22297c4bc925dd88`)
and contains 12 members. The API metadata snapshot is retained byte-for-byte
and records ChecklistBank DOI `10.48580/d4rf`, version DOI
`10.48580/d4rf.v78`, and raw license `cc by`. The archive's separately hashed
`metadata.yml` records the Nemys source DOI `10.14284/366` and raw license
`CC-BY`. The descriptor preserves these two metadata layers and their distinct
citations; neither raw license string establishes a specific license version.

The release-scoped COL26.8 Nematoda root contains 19,604 accepted species. The
archive has 20,810 non-provisional Species rows whose explicit phylum is
Nematoda. This explicit-phylum set is the retained source scope. A separate
parent-closure audit finds 19,647 of those rows beneath source Aphia 799; the
remaining 1,163 accepted rows are retained because their archive rows explicitly
declare phylum Nematoda, but they are not Aphia-799 closure members. Matching
uses only NFC and whitespace normalization, removing only the exact trailing COL
authorship suffix. It is case-sensitive and does not use fuzzy matching, synonym
inference or species-concept equivalence.

The generated projection currently records 19,554 accepted exact matches, one
ambiguous key, 49 unmatched COL rows and 1,256 source-only rows. The latter are
kept in a separate source-only shard and do not receive COL ownership. Of the
source-only rows, 1,163 are outside the Aphia-799 closure and 93 are inside it;
all remain explicit-phylum records rather than being presented as a closure
inventory. The COL-only boundary is also explicit: 49 unmatched COL rows have
no source candidate and therefore have empty `sourceRows`, while all 49 unmatched
COL rows have no linked references. Those rows remain in the COL partition and
are not relabeled as source-only. Source-only rows retain source locators and
any available references, which may be empty when the archive has no reference
linkage. Missing order or family fields do not invalidate the 18 additional
unique exact scientific-name and authorship matches; these higher-classification
gaps remain visible in the original source rows addressed by their locators.
Ancillary archive members are not redistributed as row data, but their
bytes and SHA-256 digests are recorded in the descriptor and ledger.

The Web profile is summary-only and the native profile is complete. Each gzip
shard's uncompressed JSON payload is below 2 MiB. Re-run the offline importer
from the repository root:

```text
python -B scripts/build-worms-nematoda2302-source.py
```

The importer verifies the archive and metadata identity, reads the COL registry
offline, emits deterministic gzip bytes and writes the source ledger. It does
not update shared resource-pack manifests. Run
`node scripts/integrate-worms-small-phyla-archives.mjs` and then the normal
registry and data-manifest generators to refresh the integrated inventory.
