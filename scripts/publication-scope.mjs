import assert from 'node:assert/strict'
import { existsSync, lstatSync, readdirSync, readFileSync, rmSync, unlinkSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'

// Apply only to disposable site outputs. Source archives and authoring state
// are never accepted deletion roots.
export function enforcePublicationScope(directory) {
  const root = resolve(directory)
  assert.ok([resolve('dist'), resolve('site/evo')].includes(root), 'Unexpected publication output root')
  const removed = []
  const target = path => {
    const result = resolve(root, path)
    assert.ok(result.startsWith(root + sep) && relative(root, result) !== '..', 'Publication path escapes root')
    if (existsSync(result)) assert.ok(!lstatSync(result).isSymbolicLink(), 'No symlink publication target')
    return result
  }
  // These are retired public projections, not scientific source inputs.
  for (const path of ['archive', 'content', 'database', 'docs', 'stories', 'read', 'taxa', 'pbdb',
    'zh/stories', 'zh/read', 'zh/taxa', 'zh/pbdb', 'wikipedia/abstracts.json']) {
    const file = target(path)
    if (existsSync(file)) { rmSync(file, { recursive: true, force: true }); removed.push(path) }
  }
  // A pinned current map manifest is the complete file dependency list. Do not
  // ship older snapshots merely because Vite copied the whole public folder.
  const mapRoot = target('node-map')
  const manifestPath = join(mapRoot, 'manifest.json')
  if (existsSync(manifestPath)) {
    const keep = new Set(['manifest.json', 'ledger.json'])
    function references(value) {
      if (!value || typeof value !== 'object') return
      if (typeof value.url === 'string') {
        assert.ok(!value.url.includes('\\') && !value.url.includes(':') && !value.url.startsWith('/') && !value.url.split('/').includes('..'), 'Unsafe map dependency')
        keep.add(value.url)
      }
      for (const child of Object.values(value)) references(child)
    }
    references(JSON.parse(readFileSync(manifestPath)))
    function prune(directory) {
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        assert.ok(!entry.isSymbolicLink(), 'No map symlink')
        const path = join(directory, entry.name)
        if (entry.isDirectory()) prune(path)
        else if (!keep.has(relative(mapRoot, path).replaceAll('\\', '/'))) {
          unlinkSync(path); removed.push(relative(root, path).replaceAll('\\', '/'))
        }
      }
    }
    prune(mapRoot)
    for (const path of keep) if (path !== 'ledger.json') assert.ok(existsSync(join(mapRoot, path)), `Missing current map dependency: ${path}`)
  }
  return { removedFilesOrTrees: removed.length, removed }
}
