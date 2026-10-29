# RC128 small WoRMS original-source archives

RC128 freezes two official ChecklistBank archive acquisitions from the World
Register of Marine Species (WoRMS): dataset `1125` (*World List of
Gnathostomulida*) and dataset `1124` (*World List of Priapulida*). Both are
the `2026-09-01` release at archive attempt `87`; the exact replay URLs are
`https://api.checklistbank.org/dataset/1125/archive?attempt=87` and
`https://api.checklistbank.org/dataset/1124/archive?attempt=87`.

| Dataset | COL root | Accepted COL species | Archive bytes | SHA-256 | API version DOI | API DOI |
| --- | --- | ---: | ---: | --- | --- | --- |
| 1125 Gnathostomulida | `B8VF3` | 100 | 20,438 | `f09e0292a17bba924b5a61342dcd45974fbd2c5a1c71db3d77312b227284bf75` | `10.48580/d3ct.v87` | `10.48580/d3ct` |
| 1124 Priapulida | `B8VF9` | 23 | 17,809 | `e01eb9ac67b1cf8035caf2bd62ee7f741e7c258bba59fd9e911e47d32536dfeb` | `10.48580/d3cs.v87` | `10.48580/d3cs` |

The API metadata snapshots retain the title, attempt, version, version DOI,
concept DOI, issued date, editors, contributors, citation and raw `cc by`
licence. The archive's embedded `metadata.yml` is separate evidence: its DOI
field is `null`, while its title, `2026-09-01` version and `CC-BY` licence are
preserved. The descriptor and ledger use the ChecklistBank API metadata for
dataset identity and retain every archive member byte count and SHA-256, so
the two metadata sources are not conflated.

The importer reads only the committed archives, metadata snapshots and the
COL26.8 registry. It selects species-rank source rows, excludes provisional
rows, and matches only exact scientific name plus authorship after NFC and
Unicode-whitespace normalization. The exact trailing COL authorship suffix is
removed before comparison. No fuzzy, case-folded, diacritic-stripped,
synonym, redirect or species-concept inference is used. All 100 Gnathostomulida
and all 23 Priapulida rows have one exact match; neither source has an
upstream-only row. Any future refresh must select and record a new archive
attempt rather than silently following the mutable default archive URL.

The row shards are native-complete, deterministic gzip JSON projections with
inclusive COL ID ranges and source-row locators into `Taxon.txt`, `Name.txt`,
`NameReference.txt` and `Reference.txt`. GitHub Pages/web-light needs only the
descriptor and hashes (`summary-only`); Android and iOS native-full builds
include the descriptor and every listed shard. The import ledger points to
the final descriptor bytes and hash; the descriptor carries only the ledger
path, avoiding a descriptor/ledger hash cycle. This worker does not update
global manifests or application code.

Regenerate both projections offline from the repository root:

```text
python -B scripts/build-worms-small-original-sources.py
```

The original archive and its ancillary members are retained under
`data/sources/archives/` for audit and reproducibility. The derived minimal
identifier/evidence rows are attributed under CC BY 4.0, while the underlying
WoRMS/ChecklistBank metadata and any referenced publications, websites or
media retain their original terms. This is a nomenclatural crosswalk, not a
complete biological dossier, final classification, fossil record or expert
review.
