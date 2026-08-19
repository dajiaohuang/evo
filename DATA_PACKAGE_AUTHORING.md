# Data package authoring

Packages are static projections over shared canonical concepts, claims, references, ranges, occurrences and review records. Read `docs/static-data-platform-v5.md` before changing a package.

## 1. Define scope

Add or update the package definition in `scripts/package-definitions.mjs`. Keep roots non-overlapping and update `data/registry/package-inventory-baseline.json` only after reviewing the ownership change. New entities belong in the canonical navigation ontology, not directly in generated package files.

## 2. Resolve identity and range

Pin external taxon concepts in `data/sources/pbdb-taxon-resolution.json`. Unresolved or incompatible concepts must withhold external IDs. Add canonical range evidence with status, basis, confidence, review status, reference locators and claim IDs; do not infer absent values.

## 3. Write claims before narrative

Scientific statements need typed claims and at least one supporting reference relation. Source metadata must declare its role and fitness. Concrete page, table, figure or quote locators are required before `source-complete`.

## 4. Record query coverage

Every package publishes `query-ledger.json` with provider, endpoint version, parameters, retrieval date, upstream total when retained, page and row accounting, checksums and `complete | bounded | unknown` coverage. “Complete” refers only to the pinned upstream query at that time, never to the fossil record.

## 5. Generate projections

```bash
npm run data:registry:build
npm run data:manifest
npm run data:registry:check
npm run data:packages:validate
```

Files listed in `data/registry/generated-files.json` are generated. Change their canonical inputs or generator rather than editing projections by hand.

## 6. Review and publish

Follow `SCIENTIFIC_REVIEW.md`. Automated validation may publish a generated scaffold or curator draft but may not create an expert-reviewed badge. Run `npm run verify`; inspect the generated static knowledge page, direct Explorer state, offline package and evidence-correction link.
