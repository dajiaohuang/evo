import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs'
import { dirname, relative, resolve, sep } from 'node:path'

// Explicit, reviewable document migration. Scientific source files and live
// authoring state are not candidates. Run without --apply to inspect the plan.
const root = resolve('.')
const keep = new Set([
  'project-scope.md', 'repository-structure.md', 'vercel-deployment.md',
  'local-turso-authoring.md', 'node-presentation-standard.md',
  'reader-content-design.md', 'content-storage.md', 'frontend-architecture.md',
  'node-map-query.md', 'wikipedia-col.md', 'wikipedia-tree.md',
  'data-methods.md', 'map-projections.md', 'mobile-apps.md',
  'release-checklist.md', 'species-dossier-standard.md',
])
const paths = readdirSync('docs', { withFileTypes: true })
  .filter(entry => entry.isFile() && !keep.has(entry.name))
  .map(entry => `docs/${entry.name}`)
  .concat(['archive/WEB_EXPLORATION_REFACTOR.md', 'scripts/build-pages.mjs', 'scripts/check-static-pages.mjs'])
  .concat(readdirSync('tests/pages').map(name => `tests/pages/${name}`))
// Keep source ledgers at their recorded locations: importers and hashed
// scientific provenance still refer to docs/amphibia-content and docs/sources.
const moves = paths.filter(path => existsSync(path)).map(from => ({
  from,
  to: `archive/${from}`,
  sha256: createHash('sha256').update(readFileSync(from)).digest('hex'),
}))
if (!process.argv.includes('--apply')) {
  console.log(JSON.stringify({ files: moves.length, moves }, null, 2))
  process.exit(0)
}
if (existsSync('archive/manifest.json')) throw new Error('Archive migration already recorded')
for (const { from, to } of moves) {
  for (const path of [from, to]) {
    const child = relative(root, resolve(path))
    if (!child || child.startsWith(`..${sep}`) || resolve(path) === root) throw new Error('Path outside repository')
  }
  if (existsSync(to)) throw new Error(`Archive destination already exists: ${to}`)
}
for (const { from, to, sha256 } of moves) {
  mkdirSync(dirname(to), { recursive: true })
  renameSync(from, to)
  if (createHash('sha256').update(readFileSync(to)).digest('hex') !== sha256) throw new Error(`Archive bytes changed: ${to}`)
}
writeFileSync('archive/manifest.json', JSON.stringify({
  schemaVersion: 1, archivedAt: new Date().toISOString(),
  reason: 'Historical design, source reports and migration receipts; current scope is docs/project-scope.md',
  files: moves,
}, null, 2) + '\n')
console.log(`Archived ${moves.length} files with unchanged bytes and SHA-256 readback.`)
