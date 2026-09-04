# WoRMS Polychaeta archive projection (ChecklistBank 1090)

This source-specific projection freezes the official ChecklistBank dataset
1090, **World Polychaeta Database**, version `2026-09-01`, version DOI
`10.48580/d3bm.v87`, and base DOI `10.48580/d3bm`. The archive is retrieved
from `https://api.checklistbank.org/dataset/1090/archive`; the committed bytes
are **8,012,363**, SHA-256
`7fa6faf140590eed2e79a828180c74b6bb4c184e80aa1b66634dae1c10734d27`. The
metadata response is retained beside it (1,838 bytes; SHA-256
`6c0952463a1bea38a4d427d5c507470ed0b249e7153cf6309ac9854235426b82`).

The metadata declares `cc by` / CC BY 4.0 and its exact citation is:

> Read, G., &amp; Fauchald, K. (2026). *World Polychaeta Database* (Version
> 2026-09-01). https://doi.org/10.48580/d3bm

The descriptor and ledger preserve the metadata's title, version, version DOI,
base DOI, issued date, citation, two editors (Geoffrey Read and Kristian
Fauchald), two contributors (Earth Sciences New Zealand and the Vlaams
Instituut voor de Zee), and license. No rights-holder field is invented; only
fields present in the official response are copied.

## Scope and deterministic outcomes

The COL boundary is the exact accepted-species closure below root usage
`B8TXG`, `Polychaeta Grube, 1850`, for source dataset 1090. It contains 14,430
COL accepted species. The source archive contains 14,537 species-ranked taxon
rows; strict non-provisional filtering excludes 53 provisional rows, leaving
14,484 source species. Exact NFC plus Unicode-whitespace-normalized
scientific-name/authorship matching produces 14,305 accepted matches and 125
unmatched COL rows. There are no ambiguous, redirect, or withheld rows. The
strict source-only partition contains 179 rows.

The 12 ZIP members are preserved with per-member byte counts and SHA-256
digests in the descriptor and ledger. Every projected source record retains
the real `Taxon.txt` and `Name.txt` locators. When present, all
`NameReference.txt` rows and their `Reference.txt` rows are retained, together
with the raw reference objects; missing reference IDs remain explicitly
marked. The 14,430 COL rows occupy 18 independent gzip JSON shards and the 179
source-only rows occupy one separate shard. Their combined payload totals are
37,751,973 uncompressed bytes and 4,534,482 compressed bytes; each uncompressed
shard is below 2 MiB. Web delivery is summary-only; native-full lists all 19
shards and all 14,609 records.

Matching is limited to NFC and whitespace normalization, with the COL trailing
authorship removed exactly. It does not perform fuzzy, case-folded,
accent-folded, synonym, redirect, or species-concept matching. Accepted,
unmatched, and source-only are separate outcome partitions and are not claims
about biological completeness, taxonomic concept equivalence, fossil
evidence, or expert review.

## Offline replay

The importer is `scripts/build-worms-polychaeta-source.py`. It reads only the
committed archive, metadata, and existing registry manifest; it does not call
ChecklistBank at build time. Rebuild with:

```bash
python -B scripts/build-worms-polychaeta-source.py
```

The focused test performs two isolated deterministic rebuilds, checks exact
descriptor/ledger/shard equality, validates every archive-member byte count
and digest, confirms the scope and outcome counts, and replays every strict
source name, source ID, locator and reference against the original ZIP:

```bash
python -B scripts/worms-polychaeta-source.test.py
```
