# CilCat 1113 frozen source projection

This source package freezes ChecklistBank dataset 1113, *The World Ciliate
Catalog* v4.0 (January 2012), DOI `10.48580/d3cf.v11`, licensed CC BY 4.0.
The retained archive is `data/sources/archives/checklistbank-1113-cilcat-2012-01-16.tar.gz`
(296,399 bytes, SHA-256
`cd0e0bad24a8b790cb404575f05b80eb26a6f913e5b770c011bcb6316fff15ed`).  It is
the gzip-compressed tar returned by the ChecklistBank archive endpoint, despite
the historical `.zip` filename/content type.

Reproduce the projection with:

```text
python -B scripts/build-cilcat-sidecar.py --output-root <output-root>
```

The archive contains 8,613 accepted-species-status rows: 8,532 accepted and
81 provisionally accepted.  Against the 8,505 COL species owned by source
dataset 1113, strict full name+authorship matching produces 8,477 accepted and
28 unresolved (no name-only fallback); 27 additional accepted archive rows are
retained as `upstream-only`.  Thus the two partitions contain 8,532 records.
The projection preserves source row locators, `TaxAccRef`-derived
`NameReferences.tsv` links, and explicit `referenceMissing` markers for the 34
links to absent ReferenceID 95 rows. Empty source fields remain empty.

This is frozen source provenance, not independent scientific corroboration,
species-concept equivalence, a biological dossier, fossil/extant evidence, or
expert review.  The source-only partition is only relative to the COL 1113
scope and is not a claim of globally new species or completeness.
