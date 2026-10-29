# ITIS Apicomplexa authority sidecar

This sidecar prepares the release-pinned ITIS `2026-08-26` CC0 nomenclatural authority data for the part of Apicomplexa that `COL26.8` represents inside the `protists-chromists` resource pack.

## Scope and boundary

ITIS has one valid Apicomplexa phylum root: TSN `553099`. Its valid parent is Protozoa TSN `630577`. The fixed ITIS database yields 21 valid species under the selected root and six species-rank synonym links.

COL26.8 does not project an `Apicomplexa` parent record. Its complete, exact representation of this ITIS scope is the `Cryptosporidium` genus, usage ID `87FBN`, directly under `Miozoa` usage ID `57`. That genus contains 21 strict accepted species and every row belongs to the `protists-chromists` resource pack. The `Miozoa` parent also includes Dinophyceae, so treating it as Apicomplexa would manufacture a cross-root scope. The sidecar therefore contains only the 21 Cryptosporidium species and explicitly does not claim coverage for sibling Miozoa, the wider COL Protozoa browse root, or an unrepresented COL Apicomplexa parent.

## Method and result

`scripts/build-itis-apicomplexa-sidecar.mjs` verifies the official SQLite SHA-256, the ITIS root/rank/status and maximum update dates, the immutable COL registry and resource-pack hashes, and the exact COL hierarchy boundary. It applies the shared representation-only name normalization, never fuzzy matching.

All 21 scoped COL records exactly equal one current ITIS species: accepted `21`, synonym redirects `0`, ambiguous `0`, unmatched `0`. All 21 current ITIS Apicomplexa species are represented; the null-COL upstream-only partition is empty but retained as a deterministic empty gzip file so delivery is structurally stable.

## Delivery

The descriptor records hashes and counts for one 21-row COL-ID shard and the empty upstream-only shard. GitHub Pages may publish only that descriptor under `web-light`; it must not publish either row shard. Android and iOS `native-full` integration must copy the descriptor and both listed gzip files byte-for-byte. This sidecar does not modify the runtime or release manifest itself; integration owns those changes.

ITIS is CC0 1.0. The data are a frozen nomenclatural crosswalk, not a global apicomplexan checklist, a final classification, a phylogeny, a species-concept equivalence statement, or an ecological, medical, fossil, media, dossier, or scientific-review dataset.
