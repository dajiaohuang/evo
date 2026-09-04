# ITIS global source layer (RC130)

This release retains the complete ChecklistBank dataset `2144` archive as a
neutral global source collection. It is not owned by `other-animals`, and it is
not a classification, species-concept equivalence, biological dossier, fossil
record, or expert-review claim.

The archive's own `metadata.yaml` identifies the source as ITIS attempt 118,
with the source version label `2026-07-28` and version DOI
`10.48580/d4ky.v118`. The adjacent JSON metadata is a retrieval record and is
checked against those archive-internal fields before projection; the archive
bytes are never rewritten.

The source layer is routed through:

- `data/catalogue-of-life/releases/2026-08-20/global-sources/manifest.json`
- `data/catalogue-of-life/releases/2026-08-20/global-sources/itis/itis-global-original-rc130.json`

All six tabular members remain row-complete and are projected into 674
deterministic gzip JSONL shards. The descriptor retains archive-member and
shard hashes, source row locators, and the exact field text. The global source
manifest defaults to descriptor-only loading. A future native runtime may opt
into `native-full` and stream individual shards; this collection is deliberately
not attached to the current package registry or default native package budget.
GitHub Pages uses the `web-light` summary profile with no row-level shards.

To reproduce and verify the projection:

```text
python scripts/build-itis-global-original-rc130.py
python scripts/test-itis-global-original-rc130.py
```

The generator validates the pinned archive and adjacent metadata bytes, reads
the archive's `metadata.yaml`, checks attempt 118 / version DOI v118 / source
version label 2026-07-28, and emits deterministic output. The test reopens the
archive, verifies the embedded metadata identity, checks every shard hash and
source hash, and confirms all 2,610,877 projected records across 674 shards.

