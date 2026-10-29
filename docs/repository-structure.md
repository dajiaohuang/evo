# Repository structure and publication

[Current product scope](project-scope.md) defines the application and delivery policy. The reorganization classifies every Git-indexed path by its top-level area; [audit evidence](repository-audit.json) records the observed counts and limits.

## Active engineering

| Area | Responsibility |
| --- | --- |
| `src/` | React application, map/tree state, source-bound data readers and platform adapters |
| `pages/`, `config/` | Independent bilingual introduction and the current production/application URLs |
| `scripts/` | Current application/data builds, verification and retained reproducible import tools |
| `database/`, `backend/` | Local Turso authoring and optional source-query service; historical migration tools are explicitly labelled |
| `tests/`, root tool configurations | Current unit, browser, type and build checks |
| `android/`, `ios/` | Preserved native projects with independent validation and release boundaries |

## Scientific and historical inputs

`content/` and `data/` retain recorded identities, source content, frozen models and generator/validation dependencies. They are not automatically public website payloads. Their large file counts are not a reason to delete scientific provenance. Generated `public/data/`, `public/nodes/`, local node-map snapshots and `dist*` are build/local artifacts, not files to stage indiscriminately.

`docs/` holds current product, authoring, methods and delivery guidance. `docs/sources/` and `docs/amphibia-content/` retain source ledgers still referenced by importers and recorded provenance. These are not public reading collections.

`archive/manifest.json` records individually verified moves of former designs, migration reports, audits, old reading-site tools/tests and the abandoned Wikipedia summary implementation/snapshot. `originalSha256` identifies the pre-move bytes; `sha256` verifies the archive after any Markdown link adjustment. JSON evidence retains its original bytes. Historical tooling is retained for inspection, not advertised as an executable current workflow.

## What uploads where

| Channel | Inputs | Exclusions |
| --- | --- | --- |
| Git main | Intended source/doc changes, frozen dependencies and tracked archive | Credentials, databases, local workspaces, caches, generated outputs and unrelated edits |
| GitHub Pages | Exactly the 11 allowlisted introduction files in `dist-pages/` | Full application, source corpus, scientific shards, old readers and repository archive |
| Vercel source | `.vercelignore` allowlist: package/config/descriptor and artifact/scope scripts | Entire source and authoring corpus, local databases and archive |
| Vercel runtime | Verified base + overlay, filtered by `publication-scope.mjs` | Retired node/topic readers, old summary snapshot and map files outside the current map manifest |
| Wikipedia data branch | Current links-only manifest and addressed shards | Article summaries and authoring material |

The runtime scope filter acts only on `dist/` or `site/evo/`. It validates target containment and never accepts a source directory as its deletion root. Map files referenced by the current manifest, including membership/frame parts, remain required. Legacy native deep links are accepted while current application URLs point to Vercel.

This task changes current Git files and site delivery only. Old GitHub Release resources and old Vercel deployments remain retained by the user's explicit choice. A Git move does not erase old history, and a local build does not prove hosted delivery.
