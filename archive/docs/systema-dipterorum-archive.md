# ChecklistBank dataset 1101 (Systema Dipterorum) archive projection

## Delivery footprint

RC145 measured 854.97 MiB for complete mobile resources and 1007.71 MiB for
the source data/code footprint. Repository budgets are 860 MiB and 1020 MiB,
respectively; these are project limits, not operating-system limits. All 93
projection shards are retained. The original ZIP is provenance input, not an
interactive runtime asset. The independent Pages budget remains 650 MiB and
this collection is summary-only there.

This worker freezes the official ChecklistBank dataset `1101` archive at
attempt `47`, retrieved from
`https://api.checklistbank.org/dataset/1101/archive?attempt=47`. The pinned ZIP
is 22,335,590 bytes with SHA-256
`f6d65c7a7a30be55f2cb07cf8dab80c81d03489c3cae855bf096687bcfb40f51`. The
byte-preserved API metadata snapshot is 2,736 bytes with SHA-256
`0f95b9cda01dabe1131ab7a4a05da95383b620df4772d9cf52a3e90c132c1ddd`.

The API layer reports version `7.2`, issued `2026-06-06`, DOI `10.48580/d3bz`,
and raw license `cc by`. The archive's embedded `metadata.yaml` is retained as
a separate layer (2,246 bytes; SHA-256
`c77684211ba1d30da83bfb2b92f5107ebc2bc3bbd60d24be5592ebd99c3b418b`) and
reports version `Jun 2026`, issued `2026-06-16`, the same DOI, and raw license
`cc by`. These version and issued values are not substituted for one another;
neither raw license string supplies a license version or license URL.

The ZIP contains ten raw members: `Name.tsv` (337,608 rows), `Taxon.tsv`
(196,105), `Synonym.tsv` (139,908), `NameRelation.tsv` (13,718),
`TypeMaterial.tsv` (61,827), `References.tsv` (29,799), and empty data tables
`Distribution.tsv`, `SpeciesInteraction.tsv`, and `VernacularName.tsv`; the
tenth member is `metadata.yaml`. The API `size` value `337608` is retained as
source metadata and is not interpreted as bytes or accepted-species count.

The source selection is exactly 180,792 `Taxon.tsv` rows whose linked
`Name.tsv` row has rank `species`. Every selected source `Name.status` is the
raw empty string and every selected `Taxon.provisional` is empty; these rows
are therefore called selected source species, not source accepted or extant
species. The raw `Taxon.extinct` field is `"1"` for 4,984 selected rows and
empty for 175,808; empty is not relabeled as living. All selected rows retain
their source IDs, raw status/extinction/provisional values and source locators.

The selected source graph has root Taxon ID `1381750` (Name ID `1551900`,
`Diptera`). Of 196,105 Taxon rows, 196,098 are reachable from that root. Seven
species rows reference missing parent IDs; they are preserved with their raw
`parentID` and locator as explicit source-scope exceptions, without fabricated
parents or a claim that the archive is a complete parent closure. Every emitted
orphan source name carries `sourceScope: "orphan-exception"`, the raw parent ID
and `sourceScopeReason`; ordinary reachable rows rely on the descriptor's root
audit and do not repeat that provenance marker.

The independent COL26.8 registry boundary is the accepted species set from
source dataset `1101` beneath COL root `D2P` (`Diptera`): 157,490 rows. The
projection records 157,279 unique exact name-plus-authorship matches, 113
ambiguous keys and 98 unmatched COL rows; redirect and withheld counts are
zero. It retains 23,513 selected source species as source-only rows, each once,
with null COL identity. Matching is NFC and Unicode-whitespace normalization
only, removes only the exact trailing COL authorship suffix, requires both
authorship fields to be non-empty, and does not use fuzzy, case-folded,
synonym, OBO-status, redirect or species-concept inference. Crosswalk
`accepted` is only the projection's unique exact-match result.

The generated descriptor and ledger preserve API metadata, embedded metadata,
all member digests, the source graph audit and the COL root boundary. Empty
ancillary tables do not generate records, so no distribution, interaction,
vernacular, ecological or range fact is asserted. Gzip shards are deterministic
and each uncompressed payload is below 2 MiB. Re-run the offline projection
from the repository root:

```text
python -B scripts/build-systema-dipterorum-source.py
```

The importer verifies the pinned archive and API attempt, reads the COL
registry offline, removes only stale shard files with its own exact prefixes,
and emits the source ledger and nomenclature sidecar. It does not update shared
resource-pack manifests, runtime code or release revisions.
