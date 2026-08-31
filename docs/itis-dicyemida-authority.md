# Dicyemida authority sidecar

The `itis-dicyemida-sidecar.json` descriptor records a release-pinned exact
nomenclatural crosswalk between the 122 strict accepted Dicyemida species in
COL26.8 (root `3Z`) and the 2026-08-26 ITIS SQLite export (CC0-1.0). The
crosswalk contains 86 exact current-name matches and 36 retained unmatched
COL names. ITIS contributes 92 valid current species; six have no COL26.8
usage ID and are retained in the separate upstream-only partition. No fuzzy,
phonetic, case-folded, diacritic-stripped, token-reordered or genus-substituted
matching is used.

## Root boundary

ITIS exposes `Dicyemida` as valid order TSN `57410`, nested under the broader
valid `Rhombozoa` phylum TSN `563954`. The broader root has 95 current species,
including three Heterocyemida species (`Conocyema deca`, `Microcyema vespa`
and `Conocyema polymorpha`) that are not descendants of Dicyemida. The sidecar
therefore selects TSN `57410` and records the three broader-root-only species
as an explicit exclusion, preventing duplicate coverage at the Rhombozoa
boundary.

`Kantharella antarctica` (TSN `696187`) is pinned as an exact current Dicyemida
witness. `Microcyema vespa`, `Conocyema deca` and `Conocyema polymorpha` remain
broader-Rhombozoa-only examples and are never substituted into Dicyemida.

The sidecar is a nomenclatural crosswalk, not a global checklist, final
classification, phylogeny, species-concept equivalence assertion, biological
dossier or scientific-review record. GitHub Pages receives only the compact
descriptor summary; Android and iOS must ship the descriptor and both listed
gzip shards byte-for-byte.

Regenerate with:

```bash
node scripts/build-itis-dicyemida-sidecar.mjs --itis-sqlite <verified ITIS.sqlite>
```

The generator reads the canonical COL registry in a complete checkout. The
optional `--col-species-json` argument is only for a separately audited,
registry-extracted species slice when working in a sparse checkout.
