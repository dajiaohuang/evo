import assert from 'node:assert/strict'
import { build } from 'vite'
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { resolve, join, relative, isAbsolute, sep } from 'node:path'

const root = process.cwd()
const workspaceIndex = process.argv.indexOf('--workspace')
const local = resolve(workspaceIndex < 0 ? '.git/platform-v2/local/wikipedia-20261029' : process.argv[workspaceIndex + 1])
const localRoot = resolve('.git/platform-v2/local')
const child = relative(localRoot, local)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Workspace must be inside local publication material')
const ui = join(local, 'ui')
const overlay = join(local, 'overlay')
assert.ok(!existsSync(overlay), 'Use a fresh overlay; never overwrite publication material')
mkdirSync(local, { recursive: true })
// Compile the changed UI once. Never regenerate or copy scientific public data.
await build({ configFile: 'vite.config.ts', publicDir: false, build: { outDir: ui, emptyOutDir: false } })
const evo = join(overlay, 'evo')
mkdirSync(evo, { recursive: true })
cpSync(ui, evo, { recursive: true })
cpSync('public/wikipedia', join(evo, 'wikipedia'), { recursive: true,
  filter: source => !source.endsWith('abstracts.json') })
const snapshotIndex = process.argv.indexOf('--catalogue-snapshot')
if (snapshotIndex >= 0) {
  const snapshot = resolve(process.argv[snapshotIndex + 1])
  const source = relative(resolve('.git/evo-wikipedia-col26-8'), snapshot)
  assert.ok(source && !isAbsolute(source) && source !== '..' && !source.startsWith('..' + sep), 'Catalogue snapshot must be in its local workspace')
  const descriptor = JSON.parse(readFileSync(join(snapshot, 'manifest.json'), 'utf8'))
  assert.equal(descriptor.releaseAlias, 'COL26.8')
  const destination = process.argv.includes('--external-catalogue') ? resolve('dist/wikipedia/col') : join(evo, 'wikipedia/col')
  mkdirSync(destination, { recursive: true })
  cpSync(snapshot, destination, { recursive: true })
}
cpSync('public/release.json', join(evo, 'release.json'))
cpSync('public/favicon.svg', join(evo, 'favicon.svg'))
const map = JSON.parse(readFileSync('public/wikipedia/mapping.json', 'utf8'))
const notice = (name, language) => {
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;')
  const entry = map.entries[name]
  const href = entry?.url ?? 'https://en.wikipedia.org/w/index.php?search=' + encodeURIComponent(name)
  return `<!doctype html><html lang="${language}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${escape(name)} — Wikipedia</title><link rel="stylesheet" href="/evo/static.css"></head><body><main class="page"><h1>${escape(name)}</h1><p>原节点页面暂时下线。Original node pages are temporarily offline.</p><a class="button" href="/evo/#/home?view=tree">打开物种树 / Open species tree</a> <a class="button secondary" href="${escape(href)}" target="_blank" rel="noopener noreferrer">Wikipedia ↗</a></main></body></html>`
}
let retiredStaticPages = 0
function walk(path) {
  if (!existsSync(path)) return
  for (const item of readdirSync(path, { withFileTypes: true })) {
    const file = join(path, item.name)
    if (item.isDirectory()) walk(file)
    else if (item.name === 'index.html' && relative(resolve('dist'), file).split(/[\\/]/).length >= 3) {
      const html = readFileSync(file, 'utf8')
      const name = html.match(/<h1[^>]*>(?:<em>)?([^<]+)/)?.[1] ?? 'Wikipedia'
      const target = join(evo, relative(resolve('dist'), file))
      mkdirSync(resolve(target, '..'), { recursive: true })
      writeFileSync(target, notice(name, file.includes(join('zh', 'taxa')) ? 'zh' : 'en'))
      retiredStaticPages++
    }
  }
}
for (const path of ['taxa', 'zh/taxa', 'pbdb', 'zh/pbdb']) walk(resolve('dist', path))
mkdirSync(join(evo, 'nodes'), { recursive: true })
writeFileSync(join(evo, 'nodes/index.html'), notice('节点页面暂时下线', 'zh'))
writeFileSync(join(evo, 'nodes/manifest.json'), JSON.stringify({ schemaVersion: 1, status: 'paused', replacement: 'wikipedia', originalContentPublished: false }, null, 2) + '\n')
// Apply only the overlay to the existing verified local artifact for testing.
cpSync(evo, resolve('dist'), { recursive: true })
execFileSync(process.execPath, ['scripts/retire-node-pages.mjs'], { stdio: 'inherit' })
writeFileSync(join(local, 'prepared.json'), JSON.stringify({ preparedAt: new Date().toISOString(), sourceCommit: JSON.parse(readFileSync('public/release.json')).deploymentCommitSha, uniqueNames: map.uniqueNames, counts: map.counts, retiredStaticPages, overlay }, null, 2))
console.log(JSON.stringify({ uiOnly: true, scientificDataRebuilt: false, retiredStaticPages, overlay }))
