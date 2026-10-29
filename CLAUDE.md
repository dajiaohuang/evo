# Evo repository guidance

Read [AGENTS.md](AGENTS.md) and [current project scope](docs/project-scope.md) first. Prefix shell commands with `rtk`.

- The production application is hosted on Vercel under `/evo/`. GitHub Pages publishes only the introduction built from `pages/`.
- Current interactions center on the paleomap and species tree. Wikipedia supplies original-article links only. Original node prose, stories and guided reading are paused publicly.
- Use [local Turso authoring](docs/local-turso-authoring.md) for current scientific drafts. Existing `content/` and `data/` retain source bindings and build/history inputs; do not hand-edit generated projections.
- Preserve scientific IDs, uncertainty, coordinate/model distinctions, source versions and checksum contracts. Missing mappings are not biological absence.
- Keep source imports, queries and reconstruction work separate from website publication. Do not upload databases, credentials, local workspaces, caches or archives into application artifacts.
- Preserve unrelated changes. Stage exact requested files, inspect the staged diff and run checks appropriate to the change.

Commands: `rtk npm run typecheck`, `rtk npm test`, `rtk npm run verify:pages`. Full application checks and native checks have separate scopes; see [contributing](CONTRIBUTING.md).
