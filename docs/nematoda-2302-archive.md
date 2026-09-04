# ChecklistBank dataset 2302 (Nemys Nematoda) archive projection

This worker freezes the official ChecklistBank dataset `2302` archive retrieved
from `https://api.checklistbank.org/dataset/2302/archive`. The pinned archive is
4,107,143 bytes (`11805c4e72c96130b626e12618ff70f938c2c825bb0aff22297c4bc925dd88`)
and contains 12 members. The metadata snapshot is retained byte-for-byte with
the archive evidence and preserves the API's title, version, version DOI,
citation, editor, contributors and licence.

The release-scoped COL26.8 Nematoda root contains 19,604 accepted species. The
archive has 20,810 non-provisional Species rows whose explicit phylum is
Nematoda; 19,647 of those also have a complete parent closure to source Aphia
799. Matching uses only NFC and whitespace normalization, removing only the
exact trailing COL authorship suffix. It is case-sensitive and does not use
fuzzy matching, synonym inference or species-concept equivalence.

The generated projection currently records 19,536 accepted exact matches, one
ambiguous key, 67 unmatched COL rows and 1,274 source-only rows. The latter are
kept in a separate source-only shard and do not receive COL ownership. Every
accepted, ambiguous and unmatched row retains Taxon/Name/NameReference
locators and the available Reference rows; source-only rows retain the same
evidence links. Ancillary archive members are not redistributed as row data,
but their bytes and SHA-256 digests are recorded in the descriptor and ledger.

The Web profile is summary-only and the native profile is complete. Each gzip
shard's uncompressed JSON payload is below 2 MiB. Re-run the offline importer
from the repository root:

```text
python -B scripts/build-worms-nematoda2302-source.py
```

The importer verifies the archive and metadata identity, reads the COL registry
offline, emits deterministic gzip bytes and writes the source ledger. It does
not update shared resource-pack manifests, release revisions, changelogs or
application code; integration is a later parent-owned step.
