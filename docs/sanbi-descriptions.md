# SANBI regional biological descriptions

This source adds attributed biological text, not another names-only authority
crosswalk. The current canonical projection contains 65,139 descriptions for
15,211 accepted COL26.8 species: 14,684 Angiospermae, 473 Early land plants and
54 Gymnosperms. These are source coverage counts, not global completion or
independent scientific review. Full-Web runtime generation and the catalogue
detail loader are implemented; deployment and real-browser acceptance remain
pending.

## Source and rights

SANBI's *e-Flora of South Africa*, version 1.36, issued 2022-06-06, is supplied
through the [World Flora Online archive](https://files.worldfloraonline.org/Files/South_Africa/dwca-flora_descriptions.zip).
Its embedded EML declares CC BY 4.0 and permission from copyright holders to
reuse published descriptive extracts. This specific archive's declaration is
the reuse basis; it is not a blanket license for other WFO archives or linked
publications. Preserve SANBI attribution and each record's publication citation.
The software MIT license does not apply to these source texts.

The original 10,338,944-byte ZIP has SHA-256
`2f9b6784d8bdd4b427f10bddec14f41eb42e3cac0e26c5225b7b17eff3064465`.
Original bytes are retained separately from the repository; the checked-in
projection and import ledger pin the derived bytes. No images or linked full
publications are copied.

## Selection and identity

The archive contains 106,112 description rows. Import selection keeps nonempty
Morphology, Diagnostic and Habitat text only. It joins the description's core
ID and source identifier to the reference extension's core ID and identifier,
preserving that exact citation, not any citation associated with the taxon.
Distribution rows are not included in this batch.

The existing pinned WFO-to-COL crosswalk must expose exactly one COL ID for the
WFO identifier, with an accepted matching record. Ambiguous, redirected-only
and unmatched outcomes are not filled by inference. A unique link does not
establish that SANBI's 2022 concept, WFO's 2026 concept and COL's 2026 concept
have identical circumscriptions. The text remains attributed to its original
regional source rather than presented as a globally universal description.

The corrected eligible export had 65,216 rows. Removing 77 exact duplicates
of COL ID, WFO ID, type, text, source identifier and citation leaves 65,139.
The first original description row number is retained for duplicate rows.
Grouping by species changes storage only: it does not synthesize statements,
translate text, resolve conflicting publications, or infer missing traits.

## Reproduction

With the retained, reviewed `import-candidate.jsonl` available:

```sh
node scripts/import-sanbi-descriptions.mjs /absolute/path/import-candidate.jsonl
```

The explicit offline importer checks the pinned candidate hash and existing
accepted links, writes `data/sources/sanbi-descriptions.jsonl.br`, and records
source and output hashes in `sanbi-descriptions-import-ledger.json`. Normal
builds must consume the committed projection without a live upstream request.
Build-time storage now uses Brotli quality 11, with the decoded 46,438,841-byte
stream verified identical to the previous gzip source (SHA-256
`8f7146b680b51676fe2cbd899212c0b1feabe99b47580b6f3f3f2daa1238fd7b`).
The earlier gzip-to-Brotli quality-5 migration saved 1,621,821 bytes; quality 11
saves a further 1,280,419 bytes. Published runtime shards still use gzip.
Runtime delivery and rendering
must be verified separately before reporting this as user-accessible coverage.

## RC156 locator and rights audit

The checked-in projection contains 30,951 Morphology and 27,186 Habitat text
records for 15,211 and 14,214 COL IDs, respectively. Every record has a
`sourceId`, its citation string, and the original description `rowNumber`. The
citation includes a page range for 28,826 Morphology rows and 25,490 Habitat
rows. The source row number identifies the imported Darwin Core record; where
the citation lacks pagination, it does not substitute for a locator in the
publication. Those rows need individual source resolution before use as
page-located dossier claims. The separate 7,002 Diagnostic records are not
automatically classified as morphology evidence.

The SANBI e-Flora EML declares CC BY 4.0, while individual bibliographic
citations use `[CC BY]`; the exact license version of every underlying work has
not been independently checked. Preserve the archive's attribution and the
record's own citation, and paraphrase rather than republish the original text
when a claim is linked without an independently checked item-level license.
This license finding applies to this SANBI archive only.

One record was promoted to a deliberately incomplete dossier as a provenance
trace: COL `3254C`, *Ctenium concinnum* Nees, maps to WFO `wfo-0000860837` by
the pinned WFO 2026-06 exact accepted-name and authorship match. Moeaha's 2015
Strelitzia 36 account identifies the species on pp. 182-183; the archived
Habitat and Morphology fields point to rows 80373 and 80653, both source ID
`15446.0`. The official SANBI account page independently displays the same
taxon and page citations. The dossier records only paraphrased morphology and
habitat claims as partial, leaves the other five facets unassessed, and does
not treat the page-range locator as proof of a globally exhaustive account.
See `data/knowledge/catalogue-dossiers.json` for the exact identity, source
versions, rights note, scope and claims.

## Runtime delivery

Full-Web data generation emits 256 SHA-256 COL-ID-prefix shards, keeping each
species' original descriptions together. The generated files total 11,872,071
compressed bytes, with a largest shard of 69,887 bytes. The catalogue manifest
routes lookups to one prefix shard; the existing windowed cache reuses it.
Every generated shard is recorded in `release-files.json`, so the explicit
complete-Atlas offline action includes it. Saving an individual rich package
is a different action and does not promise this catalogue-level collection.
The Pages-preview edition omits the full collection. Source text is never
compiled into Core or added to default precache.
