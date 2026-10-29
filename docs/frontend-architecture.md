# Current frontend architecture

The [project scope](project-scope.md) and `config/site.json` define current delivery.

## Public application

React, TypeScript and Vite produce a hash-routed application under `/evo/` on Vercel. The full-screen paleomap and species-tree views are its primary entry points. Time, map camera, projection and selected material remain distinct state. Node-map requests require reliable source classification and exact model/frame provenance; see [node-map query](node-map-query.md).

Wikipedia windows show original-article links and matching status, not summaries or mirrored articles. Current node, story and guided-reading prose is paused publicly. Source and method information and applicable research tools remain within the dashboard rather than becoming duplicate sites. Older routes may show a retirement notice; they are not evidence that the former reader is available.

The application still has frozen scientific build inputs and release-pinned static runtime manifests. A closed screen is not proof that its data has no build or source dependency. Large scientific inputs do not belong in the Vite module graph or PWA precache. Hashes identify stored bytes; model results, observations and classification hypotheses retain separate meanings.

## GitHub Pages

`pages/` contains bilingual introduction copy, template, style and a narrowly scoped legacy-worker update helper. `scripts/build-pages.mjs` uses Node built-ins only and outputs `dist-pages/`. It never imports application code or scientific generators. The checker enforces an exact file allowlist and 256 KiB budget. The deployment workflow uploads only that directory. Unknown old reading URLs return the introduction's 404 with the Vercel entry.

## Native and local authoring

Android and iOS retain Capacitor projects and their explicit platform adapters. Their release status and offline-data scope require separate native verification. Web work does not automatically produce or certify native installations.

Current scientific drafts are saved through the local embedded Turso service; see [local authoring](local-turso-authoring.md). File-based source content and the earlier database platform remain preserved migration/build inputs. There is no automatic publication of local drafts, and historical database publication proposals must not be described as deployed services.

## Deployment

Vercel source upload contains only its allowlisted deployment configuration and verified-artifact unpacker. The pinned base and overlay are both required until a verified replacement artifact exists. GitHub Pages and the Wikipedia data branch are independent publication channels. See [deployment](vercel-deployment.md) and [repository structure](repository-structure.md).
