# ITIS Mollusca and Brachiopoda nomenclatural sidecar

`scripts/build-itis-mollusca-brachiopoda-sidecar.mjs` deterministically joins the
pinned COL26.8 accepted-species hierarchy to the official 2026-08-26 ITIS
SQLite export. It uses the declared Mollusca (`M2L` / TSN `69458`),
Brachiopoda (`B8V3K` / TSN `156755`) and Graptolithina (`KZ` / TSN `993363`)
roots. Matching is exact after the shared
representation-only normalisation; it never uses fuzzy name matching or taxon
substitution.

The seven represented Graptolithina accepted species resolve under the valid
ITIS Graptolithina subclass as exact Rhabdopleura name records. This is a
nomenclatural closure only and makes no molluscan or brachiopod affinity claim.

The descriptor and ledger list deterministic non-overlapping COL-ID JSONL gzip
shards and a separate ITIS-only current-species partition. A Web-light release
can publish the descriptor plus its canonical hash inventory; complete Android
and iOS releases must embed every listed byte-identical row shard. This sidecar
does not change runtime delivery or application versioning.
