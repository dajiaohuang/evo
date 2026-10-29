import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { spawn } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { backup, DatabaseSync } from 'node:sqlite'

const index = process.argv.indexOf('--out')
assert.ok(index >= 0 && process.argv[index + 1], '--out is required')
const root = resolve('.git/evo-wikipedia-col26-8')
const out = resolve(process.argv[index + 1])
const child = relative(root, out)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep))
assert.ok(!existsSync(out), 'Choose a new empty export path')
mkdirSync(out, { recursive: true })
const snapshot = join(out, 'inventory.sqlite')
const source = new DatabaseSync(join(root, 'inventory.sqlite'), { readOnly: true })
await backup(source, snapshot, { rate: 10000 })
source.close()
console.log('Frozen local database snapshot created')
const parts = 16
const results = []
for (let part = 0; part < parts; part++) {
  let directory, result
  for (let attempt = 0; attempt < 3; attempt++) {
    directory = join(out, `part-${part}-attempt-${attempt}`)
    result = await new Promise((resolveResult, reject) => {
      const childProcess = spawn(process.execPath, ['scripts/wikipedia-col-export.mjs', '--out', directory, '--db', snapshot, '--part', String(part), '--parts', String(parts)], { stdio: ['ignore', 'pipe', 'pipe'] })
      let log = ''
      const collect = chunk => { log = (log + chunk.toString()).slice(-8000) }
      childProcess.stdout.on('data', collect)
      childProcess.stderr.on('data', collect)
      childProcess.on('error', reject)
      childProcess.on('close', (code, signal) => resolveResult({ code, signal, log }))
    })
    if (result.code === 0) break
    console.warn(`Export part ${part} attempt ${attempt + 1} failed (${result.code}); preserving it and retrying`)
  }
  if (result.code !== 0) throw new Error(`Export part ${part} failed after three attempts (${result.code}, ${result.signal}): ${result.log}`)
  const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json')))
  assert.equal(manifest.part, part)
  assert.equal(manifest.parts, parts)
  results.push(manifest)
  for (const file of Object.values(manifest.shards)) copyFileSync(join(directory, file.path), join(out, file.path))
  console.log(`Exported part ${part + 1}/${parts}`)
}
const stats = Object.fromEntries(Object.keys(results[0].stats).map(key => [key, results.reduce((sum, result) => sum + result.stats[key], 0)]))
const shards = Object.assign({}, ...results.map(result => result.shards))
const sourceManifest = readFileSync(resolve('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json'))
assert.equal(Object.keys(shards).length, 256)
assert.equal(stats.totalNodes, JSON.parse(sourceManifest).hierarchy.counts.nodes)
assert.equal(stats.queriedNodes + stats.pendingNodes, stats.totalNodes)
const registryManifestSha256 = createHash('sha256').update(sourceManifest).digest('hex')
for (const result of results) assert.equal(result.registryManifestSha256, registryManifestSha256)
for (const result of results) assert.deepEqual(result.titleIndexSources, results[0].titleIndexSources)
for (const result of results) assert.deepEqual(result.normalizedTitleSources, results[0].normalizedTitleSources)
writeFileSync(join(out, 'manifest.json'), JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8', contentMode: 'links-only', generatedAt: new Date().toISOString(), registryManifestSha256,
  titleIndexSources: results[0].titleIndexSources, normalizedTitleSources: results[0].normalizedTitleSources, status: stats.pendingNodes ? 'partial' : 'queried', stats, shards }, null, 2) + '\n')
console.log(JSON.stringify({ status: 'exported', out, stats }))
