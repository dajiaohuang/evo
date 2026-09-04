# WoRMS Nematoda archive coverage

RC109 adds an independent WoRMS nomenclatural projection to the mixed Other Animals resource pack. It complements the COL26.8 baseline and does not replace or merge any other authority collection.

The input is the official WoRMS archive acquired through ChecklistBank dataset `2011`: version `2026-09-01`, attempt `148`, version DOI [10.48580/d4fd.v148](https://doi.org/10.48580/d4fd.v148). The archive is 342,751,141 bytes with SHA-256 `8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6`. Its mutable download URL is not claimed to be immutable; acquisition metadata and the archive/member hashes identify the retrieved input.

The COL scope is the 19,604 strictly accepted species below Nematoda usage `NM` in the pinned COL26.8 release dated `2026-08-20`. The WoRMS scope is rooted at Aphia `799`. Parent closures are evaluated independently; matching names do not establish equivalent species concepts or identical higher classifications.

The archive closure contains 36,982 Species-rank rows, including 21,635 source-accepted rows. Exact representation matching against the scoped COL rows produced 19,525 accepted matches, one explicit redirect, four ambiguous results, 72 unmatched results and two withheld results. The projection contains eight COL-outcome shards totaling 1,054,380 compressed bytes and 15,791,714 source bytes, plus one separate upstream-only shard containing 2,104 records, totaling 70,837 compressed bytes and 1,103,855 source bytes. Combined output is 1,125,217 compressed bytes and 16,895,569 source bytes.

The source-only records are accepted WoRMS concepts not implicated by an exact COL candidate. They retain null COL ownership and are not counted as new global species. No cross-authority concept reconciliation has been performed, so they must not be added to the COL total or interpreted as unique species relative to ITIS, WFO, or another authority. This projection is a bounded nomenclatural archive comparison, not a complete inventory of Nematoda diversity.

Comparison removes only the exact trailing COL authorship suffix and normalizes whitespace for matching while preserving source fields. It does not use fuzzy, case-folded, accent-folded, inferred, or species-concept matching. Invalid or mixed explicit accepted targets remain withheld.

The derived projection is CC BY 4.0. Attribute WoRMS Editorial Board, World Register of Marine Species, the pinned version DOI, and Catalogue of Life COL26.8, DOI [10.48580/dgywk](https://doi.org/10.48580/dgywk). Raw archive members other than the minimal derived identifier/status projection are not redistributed.

Canonical outputs are the descriptor `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-nematoda-sidecar.json`, its eight COL shards and one upstream-only shard, and the ledger `data/sources/worms-nematoda-archive-2011-import-ledger.json`.

To reproduce with the pinned offline inputs:

```text
python -B scripts/build-worms-archive-sidecars.py --scope nematoda --archive /source-cache/dataset-2011.zip --acquisition /source-cache/acquisition.json
node scripts/integrate-worms-nematoda-sidecar.mjs
npm run data:manifest
```

The importer verifies the pinned archive and acquisition metadata before reading the complete archive, checks all Species rows through parent closure, and emits deterministic gzip JSON shards. The integration step replaces only this source extension, preserves existing ITIS and WoRMS collections, and updates the resource-pack inventory. A later archive is a new source snapshot and must not silently reuse this ledger or identifier.
