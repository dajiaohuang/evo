import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

test('publication removes retired output and stale frames while preserving current source bytes', () => {
  const workspace = mkdtempSync(join(tmpdir(), 'evo-publication-scope-'))
  const write = (path, value) => { mkdirSync(join(workspace, path, '..'), { recursive: true }); writeFileSync(join(workspace, path), value) }
  write('dist/node-map/manifest.json', JSON.stringify({ members: { url: 'frames/current/members.json' }, frames: [
    { url: 'frames/current/frame.json' },
    { url: 'frames/current/logical-only.json', parts: [{ url: 'frames/current/part.json' }] },
    { url: 'frames/current/empty-window.json', parts: [], recordCount: 0 },
  ] }))
  for (const path of ['members', 'frame', 'part']) write(`dist/node-map/frames/current/${path}.json`, path)
  write('dist/node-map/frames/old/frame.json', 'old')
  write('dist/stories/article/index.html', 'retired')
  write('dist/wikipedia/abstracts.json', 'retired')
  write('dist/data/current.json', 'immutable scientific input')
  write('content/source.md', 'preserve scientific source')
  const moduleUrl = new URL('./publication-scope.mjs', import.meta.url).href
  const result = spawnSync(process.execPath, ['--input-type=module', '-e', `import {enforcePublicationScope} from ${JSON.stringify(moduleUrl)}; enforcePublicationScope('dist')`], { cwd: workspace, encoding: 'utf8' })
  assert.equal(result.status, 0, result.stderr)
  assert.equal(existsSync(join(workspace, 'dist/stories')), false)
  assert.equal(existsSync(join(workspace, 'dist/wikipedia/abstracts.json')), false)
  assert.equal(existsSync(join(workspace, 'dist/node-map/frames/old/frame.json')), false)
  for (const name of ['members', 'frame', 'part']) assert.equal(readFileSync(join(workspace, `dist/node-map/frames/current/${name}.json`), 'utf8'), name)
  assert.equal(readFileSync(join(workspace, 'dist/data/current.json'), 'utf8'), 'immutable scientific input')
  assert.equal(readFileSync(join(workspace, 'content/source.md'), 'utf8'), 'preserve scientific source')
  const rejected = spawnSync(process.execPath, ['--input-type=module', '-e', `import {enforcePublicationScope} from ${JSON.stringify(moduleUrl)}; enforcePublicationScope('content')`], { cwd: workspace, encoding: 'utf8' })
  assert.notEqual(rejected.status, 0)
})
