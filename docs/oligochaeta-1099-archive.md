# WoRMS Oligochaeta archive projection (ChecklistBank 1099)

This source-specific projection freezes the official ChecklistBank dataset
1099, “World List of Marine Oligochaeta”, version `2026-09-01`, version DOI
`10.48580/d3bx.v85`, and base DOI `10.48580/d3bx`. The archive was retrieved
from `https://api.checklistbank.org/dataset/1099/archive`; its committed bytes
are **1,592,402**, with SHA-256
`41a1388a97e661d8c749cfc5c04ced11eacf415aca56fa07f0279a7f5bcf7cdc`. The
metadata response is committed beside it and is preserved byte-for-byte in
the source ledger fields (2,334 bytes; SHA-256
`221fd2e7df87c6106d4326f047d92e98c0bc88437927a73644ca85c539af49f2`).

The metadata declares `cc by` / CC BY 4.0 and the exact citation HTML:

> Martin, P., Reynolds, J., &amp; van Haaren, T. (2026). *World List of Marine
> Oligochaeta* (Version 2026-09-01). https://doi.org/10.48580/d3bx

The metadata names three editors (Patrick Martin, John Reynolds, and Ton van
Haaren) and four contributors (VLIZ, the Royal Belgian Institute of Natural
Sciences, WoRMS Editorial Board, and Eurofins Aquasense). The descriptor and
ledger retain the raw `citation`, `editor`, and `contributor` values; they do
not infer additional rights holders or scientific attributes.

## Scope and counts

The COL boundary is the exact accepted-species closure below root usage
`B8W74`, `Oligochaeta Grube, 1850`, for source dataset 1099. It contains 4,403
COL accepted species. The source archive has 4,576 species-ranked rows;
strict non-provisional filtering excludes 12 provisional rows, leaving 4,564
strict source species. Exact NFC plus Unicode-whitespace-normalized
scientific-name/authorship matching produces 4,350 accepted matches and 53
unmatched COL rows. There are no ambiguous, redirect, or withheld rows. The
strict source-only partition contains 214 rows.

The ZIP preserves all 12 original members with their recorded byte counts and
SHA-256 digests, including `Name.txt` (3,253,601 bytes), `Taxon.txt`
(2,141,249), `Reference.txt` (1,320,228), and `NameReference.txt`
(5,125,622). Every projected record retains real `Taxon.txt` and `Name.txt`
locators; reference-bearing records retain `NameReference.txt` and
`Reference.txt` locators and raw reference objects. The six COL shards contain
4,403 records; the one source-only shard contains 214. Their combined payload
totals are 11,319,745 uncompressed bytes and 978,053 gzip bytes. Each
uncompressed shard payload is below 2 MiB. Web delivery is summary-only;
native-full lists all seven shards and 4,617 records.

The projection uses only exact NFC/whitespace name plus authorship matching.
It does not perform fuzzy, case-folded, accent-folded, synonym, or
species-concept matching. “Unmatched” and “source-only” describe this
nomenclatural crosswalk boundary; they are not claims about biological
completeness, taxonomic concept equivalence, fossil evidence, or expert
review.

The importer is offline and reproducible from the committed archive and
metadata. Its focused test performs two isolated rebuilds, checks exact
descriptor/ledger/shard equality, validates every archive-member byte count
and digest, verifies the key scope/count totals, and replays every source
name, source ID, locator, and reference against the original ZIP.
