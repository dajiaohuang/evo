# Comprehensive engineering audit — 2026-09-22

This audit extends the discovery changes in PR #326 across data integrity, scientific boundaries, accessibility, recovery, resource use and backend isolation. Deployment, merging and release publication are deferred. Work continues on the draft branch; builds and synthetic tests below are engineering evidence.

## Findings and resulting behavior

| Area | Trigger and prior failure | Change | Regression evidence |
| --- | --- | --- | --- |
| Backend recovery | First capabilities request fails; its rejected promise persists forever | Evict failed capability requests so Retry can fetch again | `backendClient.test.ts`; reproduced failing before repair |
| Shared backend reads | First caller cancels a request still needed by another view | Each subscriber can cancel independently; stop transport after the last subscriber leaves | `backendClient.test.ts`; reproduced failing before repair |
| Release cache isolation | An old response arrives after memory reset | Generation checks reject late data; stale cleanup cannot delete the new request | Backend and runtime integrity tests |
| Cancelled reads | An already aborted caller receives a cached value | Check cancellation before serving cache hits | Backend regression, failed before repair |
| Runtime integrity | Cached compressed bytes bypass a subsequently specified decoded digest | Include both digests and parser mode in cache identities | `runtimeIntegrity.test.ts` |
| Worker resource use | Search cancellation only drops the result while its fetch keeps running | Abort the actual fetch; clearing indexes cancels all active work | `runtimeData.worker.test.ts` |
| Restricted browser storage | A Worker references missing Cache Storage | Read and verify from the network without requiring that optional API | Worker regression |
| Offline completion | HTTP success or a cache hit is counted as saved without hashing | Validate descriptor digests and byte sizes, repair corrupt cached content, reject corrupt network data | `offlinePackages.integrity.test.ts` |
| Offline failure recovery | One parallel download fails while siblings continue writing | Abort and join sibling transfers before reporting failure; startup pointers are written after verified content | Offline regression |
| Offline version isolation | A current pointer changes while downloading a pinned inventory | Validate inventory version, paths, duplicate entries, sizes and hashes; reject a changed bootstrap | Offline regression |
| Native sync boundaries | Descriptor paths normalize outside their intended location, disagree with URLs, or exceed advertised inventory | Validate canonical paths, matching URLs, safe integer counts and a 64 KiB line ceiling before callbacks | Native sync tests |
| Native resume | Invalid offset or changed resource is exposed as a successful resumed transfer | Validate offset, exact strong ETag, status and Content-Range; cancel rejected bodies | Native sync tests; body digest remains the consumer's responsibility |
| Native progress | Privacy settings reject marker removal | Reset remains usable when storage is unavailable | Native sync regression |
| Story input | A link, import or saved draft contains null/malformed steps | Validate each step, unique IDs, finite Earth-history ages, field lengths, view enum and import size; preserve existing saved data on failure | Story service/component/browser tests |
| Story evidence | Infinite or out-of-range bounds can look locally ready | Require finite ordered bounds, a nonempty taxon and a known claim; imported publication/review flags have no authority | Story service tests |
| Story export | A user title breaks out of an iframe attribute | Escape all exported attributes; preserve literal title text | Story regression parses the emitted markup |
| Story persistence | Quota/clipboard failures throw without a recovery message | Retain open edits and show bilingual export/copy recovery guidance | Story component tests |
| Story performance | Every keystroke reserializes and base64-encodes the entire draft | Encode only when sharing; bound links and preserve JSON export for large drafts | Unicode roundtrip and oversize tests |
| Story interaction | Deleting a middle step then adding creates duplicate IDs; drag-only sorting excludes keyboard users | Generate unused IDs, add labelled move buttons, increase form readability and touch targets | Component and three-engine browser coverage |
| Static page contrast | Linux WebKit's axe scan sees a white canvas behind transparent roots despite the dark screenshot | Specify root background explicitly; preserve print's white background and keep accessibility scans enabled | Reading edition browser suite |
| Backend resource exposure | A symlink under `data/` can cause the file inventory to expose an outside target | Refuse non-regular inventory entries at startup | Go symlink regression; CI runs Linux race checks |

## Audit coverage and boundaries

1. **Scientific and data contracts.** Run entity ownership, registry, package, claim, translation, provenance, review-freshness, manifest and source-budget checks. Review age filtering, sampling summaries, coordinate modes, map frame selection and export boundaries. This audit does not alter canonical scientific records, infer biological absence from catalogue differences, interpolate scientific geometry or fabricate expert reviews.
2. **User workflows.** Exercise bilingual discovery, no-JavaScript reading, search retry/focus/IME, story import/save/export/reorder, narrow layouts, offline cache repair and native stream validation. Axe is an automated accessibility check; it does not replace human screen-reader or physical-device testing.
3. **Performance and concurrency.** Keep bounded backend result caches and Worker indexes, share backend transfers safely, stop cancelled Worker fetches, avoid repeated story encoding and join failed offline downloads. Existing map and application budget regressions remain active. Descriptor hashing reads one file at a time per downloader (up to four concurrent files for full offline storage).
4. **Security and engineering.** Inspect external-data validation, exported markup, path containment, browser storage failure, dependency advisories and GitHub workflow permissions. Add an independent Go `vet` and `test -race` CI job alongside the Web, Windows type/data and native build checks. The backend is read-only; immutable snapshot directories must remain immutable while being served.

## Dependency disposition

`npm audit` on 2026-09-22 reports 3 moderate entries in one dependency chain: `@capacitor/cli → xcode → uuid`. No high or critical entry was reported. The advisory concerns `uuid.v3/v5/v6` with externally supplied buffers; installed `xcode/lib/pbxProject.js` calls `uuid.v4()` without a buffer. This limits the observed exposure; it is not a claim that the dependency is patched. Sources: [maintainer advisory](https://github.com/uuidjs/uuid/security/advisories/GHSA-w5hq-g745-h8pq), [reviewed advisory](https://github.com/advisories/GHSA-w5hq-g745-h8pq).

The automated suggested fix downgrades Capacitor CLI from 8.5.0 to 8.4.3. No downgrade, incompatible major override or dependency suppression was applied. Retain this item until upstream provides a compatible corrected dependency chain.

## Validation record

Focused regressions pass. The four backend failures were first demonstrated against the prior implementation. Full verification and exact draft-head CI results are recorded here after completion.

Local Go tests and `go vet ./...` pass. The Windows environment has CGO disabled and no GCC on PATH, so local `go test -race` is unavailable; the new Linux CI job provides that coverage.

## Outstanding external work

- Issue #167 remains open: the original full-resolution palaeophysiography source requires compatible licensing and complete source provenance. A lower-resolution preview is a separate artifact.
- No current human expert review is created by this work. Automated contracts and source-linked records are not scientific publication approval.
- Deployment, merge and native release publication remain deferred. Earlier PR #325 was already merged before that instruction; this audit does not publish another version.
- Physical Android/iOS acceptance and human assistive-technology testing are not claimed by emulator/browser/CI evidence.
