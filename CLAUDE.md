# CLAUDE.md

Repository guidance for coding agents working on Evo Atlas.

## Commands

```bash
npm ci
npx playwright install chromium
npm run dev
npm run verify
```

`verify` is the release gate: ESLint, Vitest, schema/cross-file data validation, TypeScript, production PWA build, bundle budgets, Playwright routes and axe accessibility checks.

After an intentional fossil-data change, run:

```bash
npm run data:normalize:fossils
npm run data:assign:fossils
npm run data:indexes
npm run data:manifest
npm run data:validate
```

## Architecture and scientific boundaries

- React 19 + TypeScript + Vite 8, hosted as a hash-routed static app under `/evo/` on GitHub Pages.
- Zustand keeps time, map, navigation/tree and fossil evidence state. Use selectors rather than destructuring the whole store.
- `data/time-scale.json` is the single source for geological ages, colors and hierarchy; `data/period-map-metadata.json` contains only map/display metadata.
- `data/navigation/atlas-ontology.json` is a navigation hierarchy, not a phylogenetic hypothesis.
- `data/packages/mammalia/perissodactyla/phylogeny/hypothesis.json` is the scoped flagship topology. Its branch lengths do not encode time.
- Fossil FAD/LAD, topology and published divergence estimates are distinct evidence types and must never be substituted silently.
- Modern and reconstructed coordinates are separate paired representations. Use `src/utils/spatial.ts`; never fill a missing paleocoordinate with a modern locality.
- Bundled occurrence rows are bounded, non-random PBDB API-prefix samples. Never call them representative, exhaustive or unbiased richness estimates.
- Higher-taxon queries default to the ontology’s represented descendant closure and return explicit query metadata/status.
- Large scientific data is generated as static `.json.gz` shards and loaded through `src/data-client/`; do not compile occurrence shards into Vite modules or add package/occurrence/map/download data to the PWA precache.
- `data/navigation/atlas-ontology.json`, `data/ranges/range-evidence.json`, the evidence ledgers and flagship narrative/profile files are canonical. `data/registry/` plus package registry/taxonomy/range/review/locale files are generated projections guarded by `npm run data:registry:check`. `public/data/` and `dist/data/` are generated runtime projections and must not be committed.

## Important files

- `src/components/explorer/ExplorerWorkspace.tsx` — complete share-URL hydration and synchronization.
- `src/components/map/PaleoMap.tsx` — explicit coordinate and layer modes.
- `src/components/tree/EvoTree.tsx` — navigation and scoped phylogeny representations.
- `src/services/localFossils.ts` — local interval and descendant-inclusive queries.
- `src/data-client/staticDataClient.ts` and `src/workers/runtimeData.worker.ts` — static fetch, checksum, gzip and parse pipeline.
- `scripts/build-runtime-data.mjs` — canonical-to-Pages generator.
- `scripts/validate-data.mjs` — schemas, graph integrity, evidence and scientific regression checks.
- `data/manifest.json` — generated counts and SHA-256 checksums.
- `data/indexes/entity-occurrence-index.json` — stable entity-ID occurrence query index and explicit match-method status.
- `DATA_LICENSES.md` and `THIRD_PARTY_NOTICES.md` — controlling provenance boundaries.

Do not hand-edit generated manifest checksums or the taxon-period index. Preserve unrelated worktree changes.
