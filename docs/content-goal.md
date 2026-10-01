# Current content goal

Complete source-bounded bilingual reader-facing content, group introductions
and reading paths for all primates and archosaurs in this repository, following
`docs/content-production-plan.md` and `docs/content-storage.md`.

Author taxon content in recorded COL26.8 classification paths under `content/taxa/`:
`page.zh.md`, `page.en.md`, `evidence.md` and `index.yaml`. Use recorded scientific
names with whitespace replaced by underscores, retain external identifiers as
provenance, and do not mint internal taxon IDs. Preserve documented PBDB
supplements and unresolved navigation concepts separately. Keep shared topics
under `content/topics/`, references in `data/references.json`, and original
archives, fossils, maps and media in their independent structured stores.
Legacy JSON/Brotli files are generated compatibility projections.

For Primates, retain the 530 accepted species in pinned COL26.8 as the fixed
species-level denominator. Address the 16 remaining source or classification gaps
before declaring the first reading-page standard met. The active task began with
19; P3-119 and P3-120 close the previously documented *Tamarinus imperator* and
*Cercopithecus wolfi* and *Piliocolobus langi* gaps. Earlier
plan entries still report 14 after P3-118 and need a taxon-by-taxon reconciliation.
For Archosauria, establish
a complete fixed denominator from local catalogues and the plan's scope,
including birds, crocodile-line taxa, dinosaurs and pterosaurs where included.
Count fossil genera, group guides and shared topics separately.

Produce small, independently deliverable batches. Rebuild the content
projections, registry and manifest after a batch; rebuild the species evidence
queue when its inputs change. Commit and push each finished batch directly to
`main`, preserving concurrent and unrelated work. Do not accumulate multiple
finished batches before pushing. Do not force-push or change branch protections.

Skip manual tests, type checks, content/data/incremental validators and manually
started CI, as authorized by the user on 2026-10-01. Record generation failures
and unresolved scientific boundaries explicitly. Treat source availability,
authored prose, reader-visible delivery and expert review as separate states.
Do not invent facts, translate unsupported claims into certainty, fabricate
review maturity or count source-insufficient templates as complete.

Completion requires the agreed reader content to exist for the scoped targets,
its navigation and projections to be generated, finished batches to reach remote
`main`, and remaining source-insufficient items to be reported separately.
Migration or successful generation alone does not complete this goal.
