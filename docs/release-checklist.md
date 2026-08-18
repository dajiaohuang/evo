# GitHub Pages release checklist

1. Run `npm ci` with the repository lockfile.
2. If scientific data changed, run normalization/index generation, inspect the diff, run `npm run data:manifest`, then `npm run data:validate`.
3. Run `npx playwright install chromium` once on a new workstation.
4. Run `npm run verify`; this includes lint, unit/data checks, build, bundle budgets, browser routes and axe checks.
5. Confirm `dist/manifest.webmanifest`, `dist/sw.js` and the Workbox runtime exist, and that `npm run size:check` reports no eagerly precached fossil chunks.
6. Serve `dist` under `/evo/` and probe `/evo/`, `/evo/manifest.webmanifest` and `/evo/sw.js`.
7. Check keyboard navigation, the skip control, catalog section controls, browser back/forward, complete share URLs, mobile Explorer drawers and reduced-motion behavior.
8. Confirm offline shell reload works after one connected visit and that visited lazy data remains available without promising an unvisited full offline corpus.
9. Review `DATA_LICENSES.md`, `MEDIA_ATTRIBUTION.json`, the source manifest and any changed item-level rights notes.
10. Push `main`; the read-only CI workflow must succeed before the separately privileged Pages deploy workflow runs.
