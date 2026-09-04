# WoRMS Cestoda archive projection

This projection freezes ChecklistBank dataset 1127, World List of Cestoda (2026-09-01), version DOI `10.48580/d3cw.v84`, under CC BY. The repository archive is `data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip`, 658,677 bytes, SHA-256 `f6deb567467713931bcca73f234f2d61f63d996f65bf3c0f271f188a352b1ee8`.

The importer selects accepted COL species with source dataset 1127 descending from class root `8Z`, then exact-matches Unicode-NFC scientific name plus authorship after collapsing/trimming Unicode whitespace and canonicalizing whitespace around commas and ampersands. The COL trailing authorship is removed only after that same normalization. The source contains 3,048 species Taxon rows, one provisional; 3,047 strict accepted source concepts. The COL scope contains 3,015 rows: 3,013 exact matches, 2 unmatched, and 34 source-only concepts. Source-only rows are relative to this frozen COL projection, not global new species claims.

The five newly replayed matches differ only in author-string whitespace around commas or ampersands (`Shinde,Mohekar`, `Malek,Golestaninasab`, `Freze& Sharpilo`, `Schmidt& Bush`). Species spelling, author tokens, punctuation and diacritics remain exact requirements.

Reproduce with:

```text
python -B scripts/build-worms-cestoda-source.py
```
