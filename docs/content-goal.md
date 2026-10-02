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
species-level denominator. Address the 15 remaining source or classification gaps
before declaring the first reading-page standard met. The active task began with
19; P3-119 through P3-121 and P4-17 close four documented gaps, including the
regional introduction for *Cacajao novaesi*. The plan currently records 10 open
items, five fewer than the active goal count; reconcile the difference by taxon ID
without shrinking the user's target.
For Archosauria, use the dated, source-specific working denominator now recorded
locally: 11,071 extant COL26.8 accepted species (11,044 Aves and 27 Crocodylia)
plus 4,664 accepted extinct PBDB species from the 2026-09-30 Archosauria query.
The PBDB roster is partitioned by disjoint taxon OIDs into non-avian Dinosauria
(1,794), fossil Aves (1,743), Pterosauria (276), Crocodylomorpha (672), and
other Archosauria (179). These are catalogue-defined work lists, not a claim of
global completeness; keep COL and PBDB concepts separate and do not deduplicate
them by matching names. The PBDB manifest records the query, checksums,
overlapping subclade counts, excluded ichno/form preservation modes, and scope
limits. Count fossil genera, group guides and shared topics separately.

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
