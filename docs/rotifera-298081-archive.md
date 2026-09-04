# Rotifer World Catalogue archive projection

This package contains an offline, release-pinned projection of ChecklistBank
dataset 298081, Rotifer World Catalogue (version 1.0, DOI
10.48580/dg8gp). The frozen archive is
`checklistbank-298081-rotifera-2026-09-05.zip`, retrieved from the
official ChecklistBank archive endpoint and pinned by its SHA-256 digest in the
descriptor and import ledger. The archive's `NameUsage.tsv` is decoded as
strict UTF-8 and retained as source evidence; its source rows are not a
replacement for the full archive.

The scope is the 2,467 strict accepted COL26.8 species under COL Rotifera root
`5Y`. A source row is accepted only when its rank is `species`, status is
`valid`, and its normalized scientific name plus authorship exactly matches a
COL row. Synonym, invalid, subspecies, form, variety and bare-name rows are not
promoted. No synonym-chain or fuzzy matching is performed. This archive's
2,467 valid species all match the scoped COL rows; therefore this projection
has no source-only partition. That result is a crosswalk count, not a claim of
global completeness or newly discovered species.
