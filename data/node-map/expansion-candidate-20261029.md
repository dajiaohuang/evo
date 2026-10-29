# PBDB expansion candidate

Candidate revision `pbdb-local-12d5ec7132cf34a1ee09`; tree revision `PBDB-snapshot-b4be01fe078ee649`. These are local-only candidate artifacts under `.git/platform-v2/local/node-map-expansion/`:

- `candidate-v4/manifest.json` and its shared members and frame shards; `candidate-pbdb-local-12d5ec7132cf34a1ee09.sqlite`.
- `input-v3.json` freezes the 36 source hashes, every retained occurrence and source membership, and the conflicting and incomplete-field ledger. `taxa/state.json` records the exact-ID and recursive parent requests and raw-response SHA-256 values.
- `repeat-v4/` and `build-v4-b.sqlite` are the independent repeat. Both SQLite files have SHA-256 `507f896fbac416de8ff0f2d2efa5fb55145909b421ea8763ce69467846c69fe8`.
- `parts-v4/parts-index.json` is an optional part index. SHA-verify and concatenate each frame's parts, then merge the SHA-verified shared membership file before invoking the existing query contract. The deployed client does not implement this part index; the original frame URLs remain compatible.

The 114,025 input rows include 306 missing occurrence/taxon identities; 125 IDs with conflicting nonempty fields are excluded; 2,787 duplicate rows with a field absent from one source are explicitly recorded while retaining the first, baseline-first row. The result has 110,369 occurrence records and 23,237 directly identified PBDB taxa. The snapshot is still a bounded sample. The 495,067 historical IDs lacking retained details are a separate retrieval queue, not included by merely appearing in that queue.

The candidate holds 110,311 occurrences with at least one ready position. Across all 247 frames, there are 424,924 ready positions, 263 missing rotation circuits and 18 missing plate/partition positions. There are 23,231 directly identified taxa with at least one ready position, including 18,606 absent from the baseline ready set; nine baseline taxa are absent due to conflicts. Source endpoints without a returned taxon remain unverified: 12 self-only identified taxa and 50 ancestry chains ending outside the frozen inventory are in the ledger. A recorded source parent is not a phylogenetic inference.

Candidate verification: `rtk proxy py -3.13 scripts/node-map-expansion-verify.py .git/platform-v2/local/node-map-expansion/candidate-v4 .git/platform-v2/local/node-map-expansion/repeat-v4 .git/platform-v2/local/node-map-expansion/candidate-pbdb-local-12d5ec7132cf34a1ee09.sqlite`. It checks both output builds, SQL integrity, foreign keys, source hashes, ancestry membership, source memberships, per-frame age windows, positions, model identity and exact coastline age/SHA. `rtk proxy py -3.13 scripts/node-map-expansion-test.py` checks missing rotation and missing plate handling.

The largest existing-contract frame is 9,936,335 bytes. The optional parts have a 4,182,788-byte maximum and were reconstructed and compared with every original frame. Integrating the optional parts requires a client change, and promotion of any candidate remains the coordinator's responsibility. No COL identity is inferred from a scientific name.

The resumable exact-occurrence downloader writes only `occurrences/` in the private expansion directory. Its atomically replaced `state.json` records requested IDs, raw response hashes, returned and missing IDs, and cursor. Resume with `rtk proxy py -3.13 -u scripts/node-map-expansion-occurrences.py`; completed downloads require separate identity closure, reconstruction and candidate validation before they can be presented as map data.
