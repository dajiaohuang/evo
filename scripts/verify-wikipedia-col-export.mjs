import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
const out = resolve(process.argv[2])
const manifest = JSON.parse(readFileSync(join(out, 'manifest.json'), 'utf8'))
assert.equal(manifest.schemaVersion, 1)
assert.equal(manifest.releaseAlias, 'COL26.8')
assert.equal(Object.keys(manifest.shards).length, 256)
let total = 0, abstracts = 0
const count = {}
for (const [prefix, file] of Object.entries(manifest.shards)) {
  assert.equal(file.path, `id-${prefix}-${file.sha256.slice(0, 16)}.json.gz`)
  const bytes = readFileSync(join(out, file.path))
  assert.equal(bytes.length, file.bytes)
  assert.equal(createHash('sha256').update(bytes).digest('hex'), file.sha256)
  const raw = gunzipSync(bytes)
  assert.equal(raw.length, file.sourceBytes)
  assert.equal(createHash('sha256').update(raw).digest('hex'), file.sourceSha256)
  const data = JSON.parse(raw)
  assert.equal(data.releaseAlias, 'COL26.8')
  assert.equal(Object.keys(data.entries).length, file.entries)
  for (const [id, entry] of Object.entries(data.entries)) {
    assert.equal(createHash('sha256').update(id).digest('hex').slice(0, 2), prefix)
    assert.ok(['matched', 'abstract-pending', 'candidate', 'ambiguous', 'unresolved'].includes(entry.status))
    count[entry.status] = (count[entry.status] ?? 0) + 1
    for (const snapshot of [...(entry.abstracts ?? []), ...(entry.options ?? []).flatMap(option => option.abstracts ?? [])]) {
      const url = new URL(snapshot.url)
      assert.equal(url.protocol, 'https:')
      assert.match(url.hostname, /^[a-z0-9-]+\.wikipedia\.org$/)
      assert.ok(snapshot.extract && snapshot.revisionId && snapshot.revisionTimestamp && snapshot.licenseUrl && snapshot.attributionUrl)
      abstracts++
    }
    total++
  }
}
assert.equal(total, manifest.stats.queriedNodes)
assert.equal(total + manifest.stats.pendingNodes, manifest.stats.totalNodes)
assert.equal(count.matched ?? 0, manifest.stats.matchedWithAbstract)
assert.equal(count['abstract-pending'] ?? 0, manifest.stats.matchedAwaitingAbstract)
assert.equal(count.candidate ?? 0, manifest.stats.candidatesWithAbstract + manifest.stats.candidatesAwaitingAbstract)
console.log(JSON.stringify({ status: 'passed', totalNodes: manifest.stats.totalNodes, queriedNodes: total, pendingNodes: manifest.stats.pendingNodes, counts: count, abstracts }))
