# ID and path audit — 2026-10-14

This audit covers the current canonical node filesystem and the application
paths that connect search, reading windows and trees. Scientific concepts
remain distinct from storage keys and application navigation IDs; see
[content storage](content-storage.md) for the authoring contract.

## Findings and fixes

| Finding | Root cause | Fix |
| --- | --- | --- |
| Claim and reference search hits opened the map without their record | The package search producer emitted the retired `#/data` route. The UI treated unknown result kinds as trees; the route parser then fell back to home and discarded the query. | Remove these destinationless rows from the producer. Accept only current result kinds and registered routes in search. Claims and references remain available through their sourced reading content. |
| Thirteen legacy directory targets remained in node identity | Migration-time `existingCanonicalPath` metadata survived inside both source identities and copied source-index entries. The runtime reader did not consume it. | Match the exact historical migration entries to their recorded PBDB transaction IDs, then remove only the obsolete field, including null copies. The codec rejects reintroduction. |
| Two macaque narrative ranges contained question marks | The canonical English text already contained damaged separators, which propagated through projections and translation keys. The audit did not establish the original encoding operation that damaged them. | Verify the original study passages, repair the canonical ranges, regenerate the affected projection with the real producer, and update matching Chinese text. |

The path cleanup removed 54 fields: 26 obsolete path strings and 28 nulls.
All other identity fields, distinct source concepts, source snapshot paths,
record IDs and unresolved placement statements were preserved. The production
PBDB reader returned identical before/after projections for all 13 nodes.
These were obsolete maintenance paths, not broken scientific lookup IDs.

## Coverage and validation

- The single full node pass checked 139,452 node documents, 63,137 recorded
  path uses, node/section contracts and safe physical keys. It verified the
  source inventory's 256 shards covering 476,960 files.
- The pass found no structural failures or duplicate IDs in the 107,516
  source-identity occurrences it extracted. This does not certify every
  arbitrary nested evidence identifier or resolve scientific equivalence.
- Exact migration-map and source-ID checks confirmed all 13 old path targets.
  No name-only matching or taxon merging was performed.
- Focused search, route and node-codec tests passed; application TypeScript
  checking and lint on the changed code also passed. Chinese narrative
  coverage passed its existing eight tests.

The previously completed five-step data refresh passed registry generation,
manifest generation, registry verification, data validation and runtime data
generation. Later range/path repairs use guarded, scoped producer and checksum
deltas. The earlier ignored runtime output is a prior baseline. No new full
site build, preview, hosted test or deployment was performed for this audit.

## Operational limits

A Windows `copyFileSync` overwrite returned `UNKNOWN` during the range repair.
The target remained intact. ACL/attribute checks and a private large-file
reproduction did not reproduce the failure, so its operating-system cause
remains unconfirmed. Guarded stream writes completed and all final hashes
matched; this is a verified recovery, not proof of a file-size or permission
defect.

T3 child tasks repeatedly returned `workspace routing discovery timed out`.
That is an orchestration failure, not evidence that repository paths or source
IDs are wrong. Local read-only audits completed the ID/path investigation;
failed child rounds provide no scientific acceptance or integration evidence.
