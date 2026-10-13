# Content storage and authoring

Before writing reader prose or its derived cards and bubbles, use the
[node production standard](node-presentation-standard.md) and its
[drafting template](templates/node-presentation.md). They define scientific
and product reading requirements; this document defines canonical storage.

## Canonical node files

All authored node content lives in one physical directory:
`content/nodes/<physical-key>/`. The key is one safe path segment used only
for storage. It is not a taxon, event, specimen, dataset, research-context, or
source identifier. Recorded identity and relationships belong in
`node.yaml` and the evidence records; existing runtime scientific IDs are
restored before the flat registry is installed. No runtime
reader resolves a legacy tree path or falls back to an older node format.

| File | Canonical contents |
| --- | --- |
| `node.yaml` | Schema version, recorded identity, typed relationships, and ordered short section keys for each locale |
| `evidence.yaml` | Structured runtime evidence records, including scope, samples, measurements, claims, ranges, source bindings, excerpts, locators, and rights evidence |
| `page.en.md` | Authored English page sections |
| `page.zh.md` | Authored Chinese page sections |

The node document has `schemaVersion: 1`, an `identity` object, a
`relationships` list, and `structure.sections.en/zh` lists. Identity keeps
recorded scientific names, ranks, classification IDs, and source identities.
Relationships are typed and recorded; they do not declare unrecorded
equivalence. Never copy the physical key into identity as a new ID.

Evidence uses `schemaVersion: 1` and a `records` mapping. Keep complete
structured payloads there, including original source IDs, exact source
versions, sample scope, reference bindings, excerpts, locators, and rights
assessments. Evidence is not split into artificial prose fragments. Omit
empty evidence and empty locale files for identity-only or partially authored
nodes.

Each locale page is ordinary Markdown. Use a keyed H2 for each authored
section, for example:

```md
## What the preserved material shows {#material}

The sourced observation and its scope belong here.
```

The H2 key matches an entry in `node.yaml` for that locale. Keys match
`^[a-z][a-z0-9._-]*$`, are unique per locale, and may be shared across
locales. Only keyed H2 headings start bound sections. An ordinary heading
inside a section remains part of its body, including a preserved H2 from an
authored account; use H3 or lower for new subsections. Prose and its title
are written once in the page; evidence fields point to a page section only
when a runtime record needs that authored field. Do not use `evo:text`
markers, Markdown field pointers, or duplicate page text in YAML.

The page codec adds two newlines after each section as framing. Those delimiters
are removed on read, preserving the authored body's own trailing newlines.
Canonical page files therefore allow blank lines at EOF in Git's whitespace
check; line-end spaces and indentation remain checked.

## One bibliography

`content/references.yaml` is the single canonical bibliography. It uses
`schemaVersion: 1` and a `references` list with stable recorded reference
IDs. Keep recorded bibliographic metadata, citation variants, source roles,
versions, identifiers, and rights information. Do not infer missing authors,
dates, DOIs, licences, or source versions.

Node evidence binds sources to this global table by recorded reference ID and
keeps node-specific scope, locator, excerpt, attribution, and rights evidence
with the record. Preserve the original source field set and order where a
projection must reconstruct an imported source row. Missing reference IDs fail
closed; do not create per-node bibliographies.

Raw `sources` and `readerSources` contain bindings, not hydrated bibliography
rows. Use this shape with the actual registered ID and source-specific scope:

```yaml
sources:
  - id: study
    referenceId: <registered-reference-id>
    fields: [id, title, url, scope, locator]
    usage:
      scope: {en: <recorded-study-scope>, zh: <corresponding-Chinese-scope>}
      locator: <actual-page-table-figure-or-record-locator>
```

`fields` lists the emitted source fields and includes `id`; `usage` is an object
of node-specific values. Bibliographic values come from the global reference.
Use `metadataVariant` only for a recorded, nonnegative variant index. Preserve
required provenance fields and reconcile missing reference metadata from the
source. Do not replace missing values with invented dates or licences.

Candidate record edits compare against raw YAML under `/records/`; resolved
strings from `readNodeContent` are not the stored page-pointer objects. Check
new bindings with a private codec write/readback before integration. A new
reader record also needs an explicit projection descriptor and validation by
its actual producer and reader; codec success alone does not publish a page.

Use section `sourceIds` for recorded passage-specific attribution. A record's
`referenceIds` identifies its whole-account bibliography; do not automatically
assign all those works to each paragraph. Keep scientific limits in the prose
where they affect a claim. Publication dates retain their recorded year, month,
or day precision. Preserve verbatim licence statements and recorded structured
rights fields without inventing missing owners, versions, or licence URLs.

`data/references.json` is a generated projection for current application,
validation, and runtime consumers. It is not an authoring source. Add or
correct entries in `content/references.yaml`; the projection builder emits
the JSON view from that table. Persisted source variants use
`metadataVariants`.

## Classification and independent content

The flat directory layout does not encode classification. Keep recorded
classification authority, release, IDs, and source URLs in node identity and
evidence. COL and PBDB concepts remain separately typed; supplementary PBDB
ancestry beneath a COL anchor does not make the concepts equivalent. Do not
mint missing scientific IDs or infer a homonym from its name alone.

Research-context nodes retain the recorded sample, study, dataset version, and
scope separately from a taxon's general identity. Events, stories, hypotheses,
specimens, collections, localities, time scales, map frames, media, source
snapshots, and query ledgers keep their own recorded identities and structured
stores. Do not duplicate shared event or story content beneath related taxa.

When one physical node contains several recorded study contexts, retain their
distinct identity objects under `identity.scopedIdentities`; their evidence
keeps each context's actual sample and scope.

Scientific source snapshots, imported source versions, exact source identifiers,
record locators, source hashes, excerpts, and rights assessments are
provenance. Preserve them. Review dates, freshness scores, migration receipts,
and obsolete authoring-path mappings do not belong in canonical node content.
Recorded archive and source-file locators remain scientific provenance.

## Projections

`content/projection-map.yaml` uses schema version 3 with
`canonicalLinks: flat-nodes` and
`canonicalReferenceTable: content/references.yaml`. Content links point
directly to `content/nodes/<physical-key>/`. The registry is a delivery map,
not a second taxonomy or a legacy-path alias table.

Registry, runtime, manifest, and species-queue outputs are generated from the
canonical node files and bibliography. Edit canonical Markdown/YAML rather
than generated JSON, compressed data, or source manifests. Runtime keeps its
existing compressed JSON delivery format; the full Markdown corpus is not
bundled into the application. The flat builder accepts only the current schema
and does not dual-read tree-path content.

Each export descriptor and its canonical dependencies determine projection-cache
reuse. Changing one descriptor rebuilds its affected export; shared codecs and
the bibliography invalidate all dependent exports. Successful checks cache their
verified result inside `.git` for subsequent build steps.

The public site opens the map workspace. Ordinary PBDB accounts use the exact
recorded `txn:` identity through `#/pbdb`, with a compressed identity index and
lazy content shards. Several material contexts for one recorded ID remain
separate accounts. A physical key or same-name COL entry never selects a PBDB
account. Related-reading controls use recorded source targets and the explicit
COL release or supported PBDB index.

The full-web publication generator reuses that runtime index for its links;
it does not reopen all canonical nodes. Standalone PBDB HTML exports are derived
from the same records and retain source contexts, passage bindings and rights.
They are exports, while CI and Pages deployment follow the map workspace build.
