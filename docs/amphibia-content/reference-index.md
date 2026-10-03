# Amphibia reference and discovery index

This phase stores references, citation metadata, discovery indexes and source
locators. Detailed prose is deferred. Original full text, PDFs, figures,
attachments and sequence data are not required for this phase. Previously
captured materials remain preserved locally.

## Project locations

- `data/references.json`: established shared references used by authored
  evidence and reader sections. Existing curated entries remain unchanged by
  the discovery exporter.
- `data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json`:
  citation candidate shards and query-binding shards, with SHA-256 hashes.
  Candidate reference envelopes follow `data/schemas/reference.schema.json`;
  original source IDs and conflicting metadata variants remain available.
- `docs/amphibia-content/full-roster-literature-collection.json`: literal
  queries for the pinned COL26.8 accepted-species roster and independent PBDB
  fossil concepts.
- `docs/amphibia-content/expanded-literature-collection.json`: additional
  archived ITIS synonym and higher-taxon literal queries. Source locators and
  original taxonomic concepts are retained.
- `docs/amphibia-content/bibliography-literature-collection.json`: discovery
  of bibliography leads retained by the archived ITIS source. A zero-hit
  query does not establish that the original work is unavailable.

## Evidence and interpretation

Canonical `content/taxa/.../evidence.md` records connect their collection
placeholder to exact query-binding shard locations. `page.en.md` and
`page.zh.md` contain the bilingual placeholder body alongside retained prose.

A literal name search may return homonyms, incidental mentions, laboratory
reagents or publications unrelated to the taxon. Its query binding is a
discovery lead, not a verified biological citation or certified taxonomic
equivalence. Candidates are retained in the source index rather than promoted
to the shared authored-reference table without review. Untitled records keep
their original metadata and IDs; no citation title is invented.

The exported index omits abstracts and original full texts. Each retained
metadata variant points to its original raw search response, JSON position,
source URL and hash. Raw capture publication exclusions are recorded in
`publication-exclusions.json`.

Collection counts describe this recorded index snapshot and named source
scope. They do not certify coverage of all publications in existence. Any
reported-hit-count or cursor discrepancy remains explicit in the query
ledger and reconciliation receipts. Biological synthesis and full article
reading are separate unfinished activities.
