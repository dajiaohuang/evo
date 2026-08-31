# ITIS Bacteria authority collection

`itis-bacteria-tsn-crosswalk` is an independent, release-pinned CC0 ITIS
nomenclatural collection. It covers precisely the 4,827 accepted COL26.8
Bacteria records whose `sourceDatasetId` is not `2015`.

It is deliberately not an LPSN supplement in disguise. The separate
`lpsn-identifiers` extension retains its source-record eligibility rule
(`sourceDatasetId=2015`) and CC-BY-SA-4.0 provenance. No ITIS match asserts
that a non-LPSN COL record is present in LPSN, nor does it modify that LPSN
collection's counts or license boundary.

The generator fixes ITIS root TSN 50 (`Bacteria`) in the official
2026-08-26 SQLite release and uses representation-only exact-name matching.
It retains ambiguous and unmatched COL rows, has no redirect rows in this
snapshot, and exposes valid ITIS species without COL evidence as a separate
ITIS-only inventory. The collection is summary-and-hash-only for web/Pages;
Android and iOS native-full delivery contains every listed gzip shard.

This is a nomenclatural crosswalk, not a final classification, species-concept
equivalence statement, organism dossier, ecological/genomic claim, or expert
review. Rebuild with:

```text
node scripts/build-itis-bacteria-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>
```
