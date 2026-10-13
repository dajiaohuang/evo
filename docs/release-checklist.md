# Web, standalone static export and native release checklist

1. Run `npm ci` with the repository lockfile.
2. If scientific data changed, run normalization/index generation, `npm run data:registry:build`, inspect the diff, run `npm run data:manifest`, then `npm run data:registry:check` and `npm run data:validate`.
3. Run `npx playwright install chromium` once on a new workstation.
4. Run `npm run verify:web` for interactive client, unit/data, build, budget, route and accessibility checks. Separately run `npm run verify:pages` for script-free static reading in Chromium, Firefox and mobile WebKit (install all three browsers).
5. Confirm the deployment artifact `dist/` passes `npm run pages:budget`, including task dependency closures, application/static partitions, runtime resources and service-worker guards. For the supported standalone static export, confirm `dist-pages/` passes `npm run pages:check`, including its separate 64 MiB budget.
6. Trigger `.github/workflows/deploy.yml` on main after successful CI for that exact revision; it runs `npm run build` and uploads `dist/`. Probe deployed `/evo/`, `/evo/zh/`, deep document links and `/evo/release.json`; the source commit must match the intended release. Standalone `dist-pages/` export and preview commands remain supported separately.
7. Check keyboard navigation, the skip control, catalog section controls, browser back/forward, complete share URLs, mobile Explorer drawers and reduced-motion behavior.
8. Run `npm run mobile:sync` and `npm run test:e2e:native`. Verify full native inventory and offline SQL/Parquet with external network requests blocked. Keep third-party runtime hashes and notices intact.
9. Require Native Android's APK build, packaged-byte checks and browser tests, plus Native iOS's hosted simulator tests and unsigned device archive. Run Android `:app:connectedDebugAndroidTest` on an available device/emulator. Browser checks alone do not certify native behavior. Debug APKs and unsigned archives are engineering artifacts; store signing and submission remain separate.
10. Review `DATA_LICENSES.md`, `MEDIA_ATTRIBUTION.json`, the source manifest and any changed item-level rights notes.
11. Confirm no paleogeographic geometry is bundled unless every snapshot has the required provenance ledger fields and redistribution terms.
12. Respect current branch protection; require applicable CI and native jobs to pass. Do not change signing credentials or branch protection as part of routine release work.
13. Push through the protected pull-request flow; the read-only CI workflow must succeed before the separately privileged Pages deploy workflow runs.
