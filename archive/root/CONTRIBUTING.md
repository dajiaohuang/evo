# Contributing to Evo Atlas

Evo Atlas accepts code, data, scientific corrections, translation and documentation contributions. The project is static-first: a contribution must remain usable on GitHub Pages without a private API, database, account system or runtime secret.

## Choose the right path

- **Evidence correction:** open the Scientific evidence correction issue form. Include the entity or claim ID, dataset version, page URL, proposed correction and a source that directly supports it.
- **Source, license or rights concern:** use the Data source or rights issue form. Do not attach material you are not allowed to redistribute.
- **Scientific package work:** follow `DATA_PACKAGE_AUTHORING.md` and use the data-package pull request template.
- **Code or accessibility work:** open a focused pull request with a short reproduction, implementation note and relevant tests.
- **Translation work:** preserve scientific names and identifiers; do not translate uncertainty away.

## Local checks

Use Node.js 22 and install the three Playwright engines:

```bash
npm ci
npx playwright install chromium firefox webkit
npm run verify
```

`verify:web` checks the interactive client and scientific data. Routine CI runs one Linux job for backend tests, types, Web verification and the Chromium Pages reader flows. The Web suite retains short Firefox and Safari smoke tests. `verify:pages` remains available for a full three-browser reading-edition check. Android and iOS packaging checks run manually through their workflow dispatch controls when preparing a native release. Native tests cover the selected core bundle; full catalogue and offline SQL payloads are excluded from that edition. Passing browser checks alone does not certify native behavior. Generated registry projections must be produced by `npm run data:registry:build`; do not hand-edit files listed in `data/registry/generated-files.json`.

`npm test` covers runtime behavior and the core projection, integrity and build helpers used in releases. Run `npm run test:authoring` when changing source importers, crosswalk generators or their recorded datasets; it replays the separate scientific authoring checks. Full data validation remains in routine CI. Do not add tests for unavailable editions or duplicate an existing end-to-end flow for each browser or data partition.

## Scientific integrity

Node pages, cards, map bubbles and reading windows must follow the [node production standard](../../docs/node-presentation-standard.md). Use the [drafting template](../../docs/templates/node-presentation.md) for each node, then write the result into its existing canonical files according to [content storage](../../docs/content-storage.md). The standard defines shared content, type-specific reading sequences, source-backed map/tree actions and practical completion checks; it does not introduce a review-state system.

Keep scientific claims linked to their sources and retain sampling limits, competing interpretations and uncertainty. Validation checks content structure, identifiers, translations and links.

Prefer a small, well-sourced vertical slice over broad generated coverage. Do not add AI-written scientific summaries unless every visible scientific statement maps to an appropriate claim and reference.

## Pull requests

Keep changes reviewable and explain any change to interpretation, provenance, licensing or public URLs. Update the dataset version when canonical scientific data changes and update the app version for a public application release. Never overwrite another contributor's unrelated work.
