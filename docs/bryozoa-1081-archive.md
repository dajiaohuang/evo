# WoRMS Bryozoa 1081 archive projection

This projection is a frozen, exact-name crosswalk from the COL26.8 Bryozoa
scope (`622CG`) to ChecklistBank dataset `1081`, *World List of Bryozoa*.
The source archive is the official ChecklistBank archive retrieved for version
`2026-09-01`, with version DOI `10.48580/d3bb.v89`, and is distributed under
CC BY (`https://creativecommons.org/licenses/by/4.0/`). The exact archive and
metadata bytes are retained at `data/sources/archives/`.

The source metadata citation is retained verbatim in the sidecar and ledger,
along with the two editors, two contributors, and all other metadata fields
present in the official metadata response. Every archive member has a recorded
uncompressed byte count and SHA-256 digest. Accepted source rows preserve the
raw `Name.txt` and `Taxon.txt` records, `NameReference.txt` rows, and resolved
`Reference.txt` rows plus their physical row locators.

Matching uses NFC normalization followed by whitespace normalization, then
compares scientific name and authorship exactly. A source synonym is used only
for an explicit redirect to one strict accepted species in the same archive;
there is no fuzzy, case-folded, accent-folded, inferred, or concept-equivalent
matching.

The COL scope contains 20,367 accepted species rows. The pinned archive has
20,533 strict accepted species-ranked taxa (36 provisional species-ranked taxa
are excluded). The generated residual projection contains 20,325 exact
accepted matches, 6 explicit redirects, 36 unmatched COL rows, and 202
source-only rows. These are residual crosswalk statistics, not a claim that
either source is complete or that the two datasets express identical species
concepts. The web-light profile carries summary metadata only; native-full
loads all shards.

Regenerate deterministically with:

```bash
python scripts/build-worms-bryozoa-source.py
```

The focused replay test runs the builder twice and compares every generated
byte, then checks the scope counts, archive metadata, member hashes, NFC
matches, source locators, and delivery records.
