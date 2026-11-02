import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { gunzipSync, gzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { pageAuditError } from './wikipedia-col-page-audit-result.mjs'

// A withdrawal never adds links or promotes identities. It rechecks every
// published URL/item pair and removes only pairs rejected by recorded evidence.
const option = name => { const at = process.argv.indexOf(name); assert.ok(at >= 0 && process.argv[at + 1], `${name} required`); return process.argv[at + 1] }
const source = resolve(option('--source')), output = resolve(option('--out'))
const root = resolve('.git/evo-wikipedia-col26-8')
for (const path of [source, output]) {
  const child = relative(root, path)
  assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep), 'Snapshot outside local workspace')
}
assert.ok(!existsSync(output), 'Choose a new empty output')
const expected = Number(option('--expected-removals'))
assert.ok(Number.isInteger(expected) && expected > 0)
const audit = new DatabaseSync(resolve(option('--audit-db')), { readOnly: true })
audit.exec('PRAGMA busy_timeout=15000; BEGIN')
const keyed = audit.prepare('SELECT status,actual_item FROM jobs WHERE url=? AND item=?')
const unkeyed = audit.prepare('SELECT status,actual_item FROM unkeyed_pages WHERE url=?')
const fallback = audit.prepare("SELECT status,actual_item FROM jobs WHERE url=? AND status IN ('matched','snapshot-matched','identity-conflict','no-item') LIMIT 1")
const sourceBytes = readFileSync(join(source, 'manifest.json'))
const manifest = JSON.parse(sourceBytes)
assert.equal(manifest.contentMode, 'links-only')
const rejected = [], outputs = []
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
function check(id, value) {
  if (!value?.url) return false
  const item = /^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(value.item ?? '')?.[1]
  const primary = item ? keyed.get(value.url, value.item) : null
  const secondary = primary ? null : unkeyed.get(value.url) ?? fallback.get(value.url)
  const error = pageAuditError(item, primary, secondary)
  if (!error) return false
  rejected.push({ nodeId: id, url: value.url, item: value.item ?? null, reason: error, audit: primary ?? secondary ?? null })
  return true
}
const category = status => ({ 'abstract-pending': 'matchedAwaitingAbstract', candidate: 'candidatesAwaitingAbstract', unresolved: 'unresolved' })[status]
try {
  for (const [prefix, descriptor] of Object.entries(manifest.shards)) {
    const bytes = readFileSync(join(source, descriptor.path))
    assert.equal(hash(bytes), descriptor.sha256)
    const shard = JSON.parse(gunzipSync(bytes))
    let changed = false
    for (const [id, entry] of Object.entries(shard.entries)) {
      const oldStatus = entry.status
      const badPrimary = check(id, entry)
      if (entry.options) {
        const retained = entry.options.filter(value => !check(id, value))
        if (retained.length !== entry.options.length) { entry.options = retained; changed = true }
      }
      if (badPrimary) {
        for (const key of ['url', 'item', 'title', 'abstracts']) delete entry[key]
        entry.status = entry.options?.length ? 'candidate' : 'unresolved'
        changed = true
      } else if (entry.status === 'candidate' && !entry.options?.length) {
        entry.status = 'unresolved'
      }
      if (entry.status !== oldStatus) {
        assert.ok(category(oldStatus) && category(entry.status), 'Unexpected withdrawal status transition')
        manifest.stats[category(oldStatus)]--
        manifest.stats[category(entry.status)]++
        changed = true
      }
    }
    if (changed) {
      const raw = Buffer.from(JSON.stringify(shard)), compressed = gzipSync(raw, { level: 9, mtime: 0 })
      const sha256 = hash(compressed)
      const next = { ...descriptor, path: `id-${prefix}-${sha256.slice(0, 16)}.json.gz`, sha256, bytes: compressed.length, sourceSha256: hash(raw), sourceBytes: raw.length }
      manifest.shards[prefix] = next
      outputs.push({ descriptor: next, bytes: compressed })
    } else outputs.push({ descriptor, source: join(source, descriptor.path) })
  }
  assert.equal(rejected.length, expected, 'Audit changed; review the exact withdrawal count before proceeding')
  manifest.generatedAt = new Date().toISOString()
  manifest.withdrawal = { mode: 'rejected-pairs-only', sourceManifestSha256: hash(sourceBytes), livePageAuditComplete: false, removedLinks: rejected }
  mkdirSync(output, { recursive: true })
  for (const item of outputs) {
    const path = join(output, item.descriptor.path)
    if (item.bytes) writeFileSync(path, item.bytes)
    else copyFileSync(item.source, path)
  }
  writeFileSync(join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
  console.log(JSON.stringify({ status: 'withdrawn', removed: rejected.length, output, stats: manifest.stats }))
} finally { audit.exec('ROLLBACK'); audit.close() }
