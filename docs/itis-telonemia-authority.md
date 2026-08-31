# Telonemia ITIS/COL authority boundary

This release records an exact-root boundary audit for Telonemia against the
complete pinned Catalogue of Life `COL26.8` hierarchy (2026-08-20) and the
official ITIS SQLite export `itisSqlite082626` (2026-08-26). Neither authority
contains an exact `Telonemia` root in these snapshots, so this sidecar makes no
species-range or crosswalk claim.

## Boundary decision

The complete COL hierarchy contains no node named `Telonemia`, `Telonema`,
`Telonemida`, or `Telonemidae`. The ITIS export likewise contains no exact
`Telonemia` root and no matching near-root names. The declared Protists and
Chromists package roots remain the exact package roots `Chromista` (`C`) and
`Protozoa` (`Z`); package-wide rows are not treated as Telonemia rows.

The native-full profile therefore includes one deterministic empty JSONL gzip
shard plus its descriptor. GitHub Pages publishes only the descriptor summary.
This explicit empty result is intentional: no fuzzy name matching, package-wide
substitution, taxon substitution, or inference from another algal/protist
scope is used. The descriptor also records the inspected protist/chromist
scopes and empty COL usage-ID/ITIS-TSN overlap sets.

## Reproduction and licensing

Run `node scripts/build-itis-telonemia-sidecar.mjs --itis-sqlite
<verified-path>/ITIS.sqlite`. The generator pins the ITIS database checksum,
source ledger, COL registry manifest, package ownership projection, exact-root
queries, nearby-name audit, and deterministic gzip checksum.

ITIS is CC0 1.0, source DOI
[`10.5066/F7KH0KBK`](https://doi.org/10.5066/F7KH0KBK). Catalogue of Life
`COL26.8` is CC BY 4.0, source DOI
[`10.48580/dgywk`](https://doi.org/10.48580/dgywk). This sidecar is an
auditable nomenclatural boundary record, not a global Telonemia checklist,
classification authority, phylogeny, species-concept equivalence assertion,
biological dossier, or scientific-review record.
