# PBDB frozen occurrence expansion candidate

This is a local candidate, not a publication or a whole-PBDB/whole-life completeness claim. The immutable revision is `pbdb-local-5b04d12440d1c76588ae`; the recorded PBDB parent-tree revision is `PBDB-snapshot-a75dd1f388e51165`. The existing v4 candidate and the active public manifest were not replaced.

All paths below are under `.git/platform-v2/local/node-map-expansion/`:

- `candidate-v5/manifest.json` is the existing-client contract, with its immutable frame URLs and shared members file; `candidate-pbdb-local-5b04d12440d1c76588ae.sqlite` is its database. `repeat-v5/` and `build-v5-b.sqlite` are the independently rebuilt comparison.
- `parts-v5/parts-index.json` describes bounded frame parts. SHA-verify all parts for the selected frame and concatenate their records before the existing query. It retains the original shared-members descriptor for compatibility.
- `member-parts-v5/index.json` is the optional bounded membership index: SHA-256 the UTF-8 node ID, select the bucket named by the first two lowercase hex digits, fetch and verify all bucket parts, then concatenate arrays for that ID. These two optional indexes require client implementation; the current client consumes the original manifest and shared-members file.
- `input-v5.json` freezes selected occurrences, biological-field conflicts, incomplete fields, source memberships, response SHA values, reader version, and the download-state hash. `occurrences/state.json` and `taxa-v5/state.json` retain the exact request URLs, page files, response hashes, retrieval timestamps, and unreturned IDs. Raw responses are alongside these state files.

The historical queue contained 495,067 IDs: all were requested; 495,052 returned, 15 did not, zero terminal batch errors remain, and zero IDs remain unrequested. Of returned rows, 494,138 were new to the accepted v4 input, 751 were duplicates, 148 conflicted with prior records, and 15 lacked valid occurrence/taxon identity. Across both input phases there are 273 conflicted IDs, all excluded; 3,686 one-sided missing-field differences are explicitly recorded. The candidate contains 604,359 identified occurrences, all with valid age, modern coordinates and reference IDs; 603,810 have at least one successful position.

Taxon and recorded-parent closure requested 104,875 identifiers, returned 104,830 exact IDs, left 45 unreturned and no queued identifiers. The candidate ledger includes 32 self-only identified taxa and 209 chains that end outside the frozen identity inventory. Parent assertions represent PBDB's recorded hierarchy, not phylogenetic ancestry. There is no inferred COL bridge. An occurrence or taxon not returned is not a zero-evidence finding.

The 247 coast-matched frames have 2,273,386 ready positions, 2,801 missing-circuit failures and 57 missing-plate/partition failures. There are 112,107 directly identified taxa; 112,049 have at least one ready position. Compared with baseline `snapshot-v8.sqlite`, 107,427 directly identified taxa become newly drawable and 12 baseline drawable taxa are absent after conflict exclusion. Compared with the accepted v4 candidate, 88,825 are newly drawable and seven v4 drawable taxa are absent. Occurrence ages and observed distributions are not origin, extinction or ancestral-event estimates.

Independent rebuilds passed byte comparison of the manifest, shared members and all 247 frame files; the SQLite files both have SHA-256 `8ee5afb642139032fb424674f46f37f44d012745c6f1a44c592cf1c71df5f848`. The readback checked SQLite integrity and foreign keys, file-source hashes, every stored raw occurrence field and source membership, parent memberships, age overlap, coordinates, reconstruction model, coast age and SHA. `scripts/node-map-expansion-test.py scripts/node-map-expansion-build-download.py` checks missing rotations and absent plate IDs fail closed.

The largest original frame is 48,541,830 bytes; `parts-v5` has 342 frame parts, at most 4,182,954 bytes each, with index SHA-256 `a7a28e38ba921e949a8bb16873b541be2875468bd4c236e619255649c6663190`. The original members file is 50,084,447 bytes; the optional membership index has 256 parts, at most 2,013,153 bytes each, and index SHA-256 `826306c8c4c127d8a2707f8e08a9abc34df9947fe03442702286c1e0feb5276a`. Each part was hash-checked and reconstructed to the original data. Neither split representation is activated in the public client.

To repeat readback against the completed artifacts:

```powershell
rtk proxy py -3.13 scripts/node-map-expansion-verify-download.py .git/platform-v2/local/node-map-expansion/candidate-v5 .git/platform-v2/local/node-map-expansion/repeat-v5 .git/platform-v2/local/node-map-expansion/candidate-pbdb-local-5b04d12440d1c76588ae.sqlite
```

The coordinator can review the conflicts and unresolved identifiers, implement on-demand part loading while preserving age/coastline SHA checks, and decide separately whether to promote the candidate. No deployment was performed.

## Local client integration

The client now supports `frame.parts`, `frame.recordCount`, `frame.truncated`, and `memberBuckets` in the manifest. Membership uses the selected node's SHA-256 prefix bucket; frames load sequential verified parts for the selected coastline age. Switching nodes reuses the loaded frame records. Empty frames and the original `truncated` flag are preserved. The hook keys results by both frame and selected node so a previous node's membership cannot be reused accidentally.

`scripts/node-map-stage-split.mjs` assembles the two indexes into a private client-ready directory, verifying copied part hashes and index revision/coastline bindings. The generated directory is `.git/platform-v2/local/node-map-expansion/client-v5`. It does not replace `public/node-map/manifest.json` or deploy. Repeat with:

```powershell
rtk proxy node scripts/node-map-stage-split.mjs .git/platform-v2/local/node-map-expansion/candidate-v5 .git/platform-v2/local/node-map-expansion/parts-v5 .git/platform-v2/local/node-map-expansion/member-parts-v5 .git/platform-v2/local/node-map-expansion/client-v5
rtk npx vitest run src/data-client/nodeMapClient.integration.test.ts src/data-client/nodeMapClient.test.ts src/services/nodeMap.test.ts
```

The optional private-fixture integration test compares the largest real frame's records and both direct/descendant query results with the original unsplit dataset. It verifies the full membership file and original frame URL are not downloaded by the new client. Unit tests cover selected-node bucket isolation, record-cache reuse, corrupt bytes with retry, stale tree identity, and empty truncated frames. This is local data/client validation, not a hosted or browser acceptance claim. Frame splitting bounds individual transfers, but still downloads all records for the selected age; it is not node-specific record filtering.
