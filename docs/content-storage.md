# Content storage and authoring

Before writing reader prose or its derived cards and bubbles, use the
[node production standard](node-presentation-standard.md) and its
[drafting template](templates/node-presentation.md). These define presentation
requirements; the existing storage and compiler contracts below still apply.

## Canonical inputs

`content/` is the authoring source for the migrated catalogue pages, dossiers,
curated taxon profiles, evidence claims, ranges, navigation prose, events,
stories and research inputs. `data/references.json` is the shared reference
catalogue. Existing reference IDs remain stable; newly imported citations have
reference IDs, while taxon authoring identity is its recorded tree path.

The classification directory is `content/taxa/`. Its backbone is the pinned
Catalogue of Life **COL26.8 / 2026-08-20**, dataset 316115. Only ancestors of
materialized content and documented storage anchors are materialized. This is
not a claim that every COL species has an authored page.

Directory segments use the recorded scientific name without the authorship
suffix. Whitespace becomes `_`; Windows forbidden characters are escaped.
Do not shorten a scientific name, mint an internal taxon ID, or resolve a
homonym by its name alone. Source identifiers, classification versions and
source URLs remain provenance metadata.

Fossil concepts missing from COL can use the recorded PBDB ancestry beneath a
lineage-compatible COL anchor. These paths are explicitly supplementary;
PBDB and COL concepts are not declared equivalent. Navigation concepts and
unresolved placements live under `content/topics/atlas/`.

## Files in a content directory

| File | Edit here |
| --- | --- |
| `index.yaml` | Name, rank, classification authority, release and provenance |
| `evidence.md` | Structured evidence records, reference usages, locators, source excerpts and evidence prose |
| `page.zh.md` | Chinese reader prose and section titles |
| `page.en.md` | English reader prose and section titles |

Reader text is inside `<!-- evo:text /records/... -->` blocks. Edit the text
inside the existing markers. Section titles inside marked `##` headings are
also authored text. Keep marker paths unique and paired. The evidence front
matter records machine-readable relationships and pointers to those blocks.
The compiler refuses missing fields, duplicate markers and unsupported files.

An empty locale has `status: not-authored`; migration does not invent prose or
translations. Research contexts under a taxon keep the recorded scientific
sample name and scope separately from that taxon's general reader page.

## References and evidence usages

A reference describes a citable work or dataset version. Ordered authors,
title, publication metadata, identifiers and version belong to the global
table. Missing author lists and unparsed archive citations stay unresolved.
No DOI, year, author or license is inferred from a missing field.

Evidence retains reference bindings, record URLs, exact locators, archive
hashes, original excerpts, scope and rights assessments. The shared catalogue
retains imported metadata variants so the original JSON projections can be
reconstructed without dropping source fields. Those variants are a lossless
import ledger; curated top-level metadata is the bibliography display source.

## Independent entities

Fossil occurrences, specimens, collections, sites, geological time scales,
map frames, plate models, terrain, media, original source snapshots and query
ledgers remain in their existing structured stores. Shared events, stories
and phylogenetic hypotheses have independent content directories and link to
taxa; they are not duplicated beneath each related species.

## Current content exports

Run `rtk npm run content:build` after an authored edit. Registry, runtime,
manifest and species-queue builders also compile the content first.

`content/projection-map.yaml` is the schema 2 export registry. It binds
canonical records to current delivery files and stable scientific identifiers;
it is not a second taxonomy. The compiler requires tree-path links, exports
all authored fields, and does not retain original-import equality gates or
old field allowlists.
`data/registry/content-projection-files.json` lists the generated input paths.
Edit the canonical Markdown instead of those generated JSON and Brotli files.
A build replaces edits made directly to exports. Changed nodes rebuild only
their dependent exports; changes to references or compiler contracts rebuild
all exports. The local cache lives under `.git/evo-content/`; output drift
invalidates it. `content:check` never overwrites an out-of-date export.

`data/registry/content-source-manifest.json` and its hash shards record every
canonical Markdown/YAML source. Package provenance includes
the corresponding canonical files. Runtime delivery keeps its compressed
JSON format; the full Markdown corpus is not bundled into the application.

Historical import receipts retain placement and source provenance. They do
not participate in the current build or enable an older runtime format.
Maps use manifest schema 9 and age-selected geometry layers; period snapshot
loaders and older map manifests are unsupported. Scientific source snapshots,
record identifiers and model versions remain provenance.
