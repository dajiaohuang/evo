# Amphibia reference and discovery index

The recorded index preserves citation metadata, literal name queries and source
locators. A search result is a discovery lead: it may concern a homonym, an
incidental mention or a different taxonomic concept. It becomes support for a
scientific statement only when its actual material and scope match that statement.

## Files and provenance

- `content/references.yaml` is the canonical shared bibliography.
  `data/references.json` is its generated application view.
- `content/nodes/<physical-key>/evidence.yaml` holds authored evidence and
  source bindings. Recorded query and index provenance belongs to
  `node.yaml` under `identity.sourceIndexes`; reader prose belongs to the
  locale Markdown files.
- `data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json`
  describes citation and query-binding shards, including SHA-256 hashes.
- The archived `full-roster-literature-collection.json`,
  `expanded-literature-collection.json` and
  `bibliography-literature-collection.json` in this directory preserve the
  literal COL26.8, PBDB and historical ITIS query contexts separately.

Original source IDs and conflicting citation variants are retained. The index
omits abstracts and original full texts; each retained metadata variant points
to the raw search response, JSON position, source URL and hash. Untitled entries
keep their original metadata and IDs without an invented citation title. Source
publication exclusions remain in `publication-exclusions.json`.

## Interpretation

Name matching does not establish COL/PBDB/ITIS concept equivalence. A zero-hit
query does not prove that a publication is unavailable. Counts describe the
named snapshot and query scope; they do not measure all literature in existence.
Reported totals and cursor discrepancies remain in the original query records.
Preserved full texts, figures, attachments and sequence data keep their original
source identity and rights information separately from discovery metadata.
