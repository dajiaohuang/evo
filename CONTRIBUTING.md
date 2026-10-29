# Contributing to Evo Atlas

Follow the [current project scope](docs/project-scope.md). The interactive application is on Vercel. GitHub Pages is an introduction, not a second application or reading collection.

## Choose a contribution

- Application changes: preserve map/time/tree state, keyboard and touch access, explicit loading and unknown states.
- Wikipedia links: retain exact identity evidence, candidates, source versions and manifest integrity. Do not request or publish summaries.
- Fossil maps: retain recorded IDs, age intervals, classification source and exact reconstruction model/frame. Never substitute modern coordinates for missing reconstructed positions.
- Scientific drafts: use [local Turso authoring](docs/local-turso-authoring.md), the [node standard](docs/node-presentation-standard.md) and [template](docs/templates/node-presentation.md). Draft acceptance does not publish prose.
- Source or rights corrections: provide the affected identifier, source version, page or record, correction and supporting source. Do not attach material without redistribution rights.

## Checks

Use Node.js 22, `rtk npm ci`, then the checks matching the change:

~~~powershell
rtk npm run typecheck
rtk npm test
rtk npm run verify:pages
~~~

`verify:pages` checks the independent introduction and its real browser flows. `verify:web` checks the full interactive client and existing frozen data; it does not publish Turso drafts. `test:authoring` retains importer replay checks. Native workflows are manual and need native validation; passing Web checks is not native acceptance.

Historical reader tests and reports live in `archive/` and are excluded from routine checks and site output. Existing data and content files still used by generators remain dependencies; do not delete them based only on a retired navigation entry. Preserve original source bytes and hashes. Never overwrite another contributor's work.

## Publication

Follow [upload boundaries](docs/project-scope.md) and [Vercel deployment](docs/vercel-deployment.md). Only `dist-pages/` enters Pages. Vercel source upload is constrained by `.vercelignore`; runtime archives must be verified and bound to the actual source revision. Do not publish local databases, credentials, logs, research workspaces or the repository archive.

This reorganization does not remove old GitHub Releases or Vercel deployments. Remote cleanup beyond current Git files and website delivery needs separate authorization.
