# GitHub Pages release checklist

1. Run `npm ci` with the repository lockfile.
2. If scientific data changed, run normalization/index generation, `npm run data:registry:build`, inspect the diff, run `npm run data:manifest`, then `npm run data:registry:check` and `npm run data:validate`.
3. Run `npx playwright install chromium` once on a new workstation.
4. Run `npm run verify`; this includes lint, unit/data checks, build, bundle budgets, browser routes and axe checks.
5. Confirm `dist/manifest.webmanifest`, `dist/sw.js` and the Workbox runtime exist; run `npm run size:check`, `npm run pages:budget` and `npm run pages:smoke`.
6. Serve `dist` under `/evo/` and probe `/evo/`, `/evo/manifest.webmanifest`, `/evo/sw.js`, `/evo/data/current.json` and at least one package manifest and occurrence shard.
7. Check keyboard navigation, the skip control, catalog section controls, browser back/forward, complete share URLs, mobile Explorer drawers and reduced-motion behavior.
8. Confirm offline shell/Core reload works after one connected visit, visited lazy data remains available, and “save all packages” runs only after an explicit user action.
9. Confirm `data/releases.json` leads with the current dataset, its retained byte total stays within budget and every listed release file index remains reachable; do not assume an unlisted prior version exists merely because retention allows at most two. Confirm service-worker activation removes an older `evo-runtime-data-*` cache.
10. Review `DATA_LICENSES.md`, `MEDIA_ATTRIBUTION.json`, the source manifest and any changed item-level rights notes.
11. Confirm no paleogeographic geometry is bundled unless every snapshot has the required provenance ledger fields and redistribution terms.
12. In GitHub branch protection for `main`, require a pull request, both CI jobs, an up-to-date branch, resolved conversations, and block force pushes.
13. Push through the protected pull-request flow; the read-only CI workflow must succeed before the separately privileged Pages deploy workflow runs.
