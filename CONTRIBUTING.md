# Contributing to Evo Atlas

Evo Atlas accepts code, data, scientific review, translation and documentation contributions. The project is static-first: a contribution must remain usable on GitHub Pages without a private API, database, account system or runtime secret.

## Choose the right path

- **Evidence correction:** open the Scientific evidence correction issue form. Include the entity or claim ID, dataset version, page URL, proposed correction and a source that directly supports it.
- **Source, license or rights concern:** use the Data source or rights issue form. Do not attach material you are not allowed to redistribute.
- **Scientific package work:** follow `DATA_PACKAGE_AUTHORING.md` and use the package-review pull request template.
- **Code or accessibility work:** open a focused pull request with a short reproduction, implementation note and relevant tests.
- **Translation work:** preserve scientific names and identifiers; do not translate uncertainty away.

## Local checks

Use Node.js 22 and install the three Playwright engines:

```bash
npm ci
npx playwright install chromium firefox webkit
npm run verify
```

`verify` is the release contract. Generated registry projections must be produced by `npm run data:registry:build`; do not hand-edit files listed in `data/registry/generated-files.json`.

## Scientific integrity

Automated validation is never scientific review. Do not mark a package `expert-reviewed` unless a qualified, identified human reviewer has recorded the reviewed scope, dataset version, decision, expertise and conflict-of-interest statement. ORCID is recommended for expert-reviewed content and required by the published-featured gate.

Prefer a small, well-sourced vertical slice over broad generated coverage. Do not add AI-written scientific summaries unless every visible scientific statement maps to an appropriate claim and reference.

## Pull requests

Keep changes reviewable and explain any change to interpretation, provenance, maturity, licensing or public URLs. Update the dataset version when canonical scientific data changes and update the app version for a public application release. Never overwrite another contributor's unrelated work.
