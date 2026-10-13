import { afterEach, expect, it, vi } from 'vitest'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve, sep } from 'node:path'
import { checkArtifactBudget } from './check-pages-budget.mjs'
import { pagesDeploymentBudgetFailure, releaseRetentionByteLimit } from './artifact-budget.mjs'

it('keeps the Pages deployment limit at exactly 650 MiB', () => {
  expect(pagesDeploymentBudgetFailure('github-pages-preview', 650 * 1024 * 1024)).toBeNull()
  expect(pagesDeploymentBudgetFailure('github-pages-preview', 650 * 1024 * 1024 + 1)).toContain('hard limit is 650 MiB')
})

const fixtures = new Set()
afterEach(() => {
  for (const dist of fixtures) {
    const child = relative(resolve(tmpdir()), resolve(dist))
    if (!child.startsWith('evo-budget-') || child.includes(sep)) throw new Error('Unsafe budget fixture cleanup target')
    rmSync(dist, { recursive: true, force: true })
  }
  fixtures.clear()
})

function artifactFixture() {
  const dist = mkdtempSync(join(tmpdir(), 'evo-budget-'))
  fixtures.add(dist)
  const put = (path, content) => {
    const target = join(dist, path)
    mkdirSync(join(target, '..'), { recursive: true })
    writeFileSync(target, typeof content === 'object' && !Buffer.isBuffer(content) ? JSON.stringify(content) : content)
  }
  const manifest = {
    'index.html': { file: 'assets/index-test.js', isEntry: true, imports: ['shared'] },
    shared: { file: 'assets/shared.js' },
    'src/components/explorer/ExplorerWorkspace.tsx': { file: 'assets/explorer.js' },
    'src/components/search/GlobalSearch.tsx': { file: 'assets/search.js' },
    'src/components/map/PaleoMap.tsx': { file: 'assets/map.js' },
    'src/components/catalog/CatalogPages.tsx': { file: 'assets/catalog.js' },
    'src/components/workbench/WorkbenchPages.tsx': { file: 'assets/workbench.js' },
    'vendor~duckdb-browser': { file: 'assets/sql.js' },
  }
  for (const chunk of Object.values(manifest)) put(chunk.file, chunk.file)
  put('.vite/manifest.json', manifest)
  put('data/current.json', { edition: 'full-web', releaseBase: 'releases/test' })
  put('data/build-metrics.json', { buildDurationMs: 1 })
  put('data/releases/test/core/test.json', '{"fixture":true}')
  put('sw.js', "importScripts('cache-lifecycle.js')")
  put('cache-lifecycle.js', "// evo-runtime-data-\naddEventListener('activate', () => {})")
  return { dist, put, manifest }
}

function quietly(check) {
  const log = vi.spyOn(console, 'log').mockImplementation(() => {})
  const error = vi.spyOn(console, 'error').mockImplementation(() => {})
  try { return check(error) } finally { log.mockRestore(); error.mockRestore() }
}

it('runs the consolidated scanner and writes all four task dependency metrics', () => {
  const { dist } = artifactFixture()
  quietly(() => expect(checkArtifactBudget(dist)).toBe(true))
  const metrics = JSON.parse(readFileSync(join(dist, 'data/bundle-task-metrics.json')))
  expect(Object.keys(metrics.tasks)).toEqual(['startup', 'map', 'evidence', 'sql'])
  expect(metrics.tasks.startup.files).toContain('assets/shared.js')
})

it('retains the lazy fossil JavaScript precache guard', () => {
  const { dist, put } = artifactFixture()
  put('sw.js', "importScripts('cache-lifecycle.js'); // assets/permian-test.js")
  quietly((error) => {
    expect(checkArtifactBudget(dist)).toBe(false)
    expect(error.mock.calls.flat().join('\n')).toContain('precaches lazy fossil chunks: permian')
  })
})

it('rejects oversized transitive startup assets even when the entry is small', () => {
  const { dist, put } = artifactFixture()
  put('assets/shared.js', Buffer.alloc(876 * 1024))
  quietly(() => expect(() => checkArtifactBudget(dist)).toThrow('startup application assets exceed'))
})

it('retains initial-entry, shard, core and cache-lifecycle guards', () => {
  const { dist, put } = artifactFixture()
  put('assets/index-test.js', Buffer.alloc(501 * 1024))
  put('data/releases/test/core/test.json', Buffer.alloc(6 * 1024 * 1024))
  put('data/releases/test/occurrences/test.json.gz', Buffer.alloc(8 * 1024 * 1024 + 1))
  put('cache-lifecycle.js', '// missing activation cleanup')
  quietly((error) => {
    expect(checkArtifactBudget(dist)).toBe(false)
    const failures = error.mock.calls.flat().join('\n')
    for (const message of ['initial JS limit', '8 MiB shard limit', 'Core runtime data', 'stale versioned runtime caches']) expect(failures).toContain(message)
  })
})

it('does not apply a Pages deployment total to explicitly full Web data', () => {
  expect(pagesDeploymentBudgetFailure('full-web', 651 * 1024 * 1024)).toBeNull()
})

it('reports full Web data size and bounds preview editions at 650 MiB', () => {
  expect(releaseRetentionByteLimit('full-web')).toBeNull()
  for (const edition of ['pages-preview', 'github-pages-preview', 'native-core']) {
    expect(releaseRetentionByteLimit(edition)).toBe(650 * 1024 * 1024)
  }
})
