# Data package authoring

Packages are static projections over shared canonical concepts, claims, references, ranges and occurrences. Migrated prose and evidence are authored under `content/`; read `docs/content-storage.md` for the tree paths, Markdown fields and compatibility projection rules. Read `docs/static-data-platform-v5.md` for the generated package and runtime contracts.

## 1. Define scope

Add or update the package definition in `scripts/package-definitions.mjs`. Keep roots non-overlapping and update `data/registry/package-inventory-baseline.json` only after reviewing the ownership change. Author taxon concepts in their recorded classification paths and independent navigation concepts under `content/topics/atlas/`. Wire new records into `content/projection-map.yaml`; the navigation ontology and package files are generated projections.

## 2. Resolve identity and range

Pin external taxon concepts in `data/sources/pbdb-taxon-resolution.json`. Unresolved or incompatible concepts must withhold external IDs. Add canonical range evidence with status, basis, confidence, uncertainty, reference locators and claim IDs; do not infer absent values.

## 3. Write claims before narrative

Scientific statements need typed claims and at least one supporting reference relation. Source metadata must declare its role and fitness. Retain concrete page, table, figure or quote locators and the scope of each supporting source.

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

## 6. Validate and publish

Run `npm run verify`; inspect the generated reading page, direct Explorer state, offline package and evidence-correction link.
