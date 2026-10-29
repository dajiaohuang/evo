import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { join, resolve } from 'node:path'
import { createGunzip, gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { canonicalName } from './wikipedia-col-identity.mjs'

const registry = resolve('data/catalogue-of-life/releases/2026-08-20/registry')
const manifestBytes = readFileSync(join(registry, 'manifest.json'))
const manifest = JSON.parse(manifestBytes)
const root = resolve('.git/evo-wikipedia-col26-8')
const db = new DatabaseSync(join(root, 'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
  CREATE TABLE IF NOT EXISTS synonym_names (name TEXT NOT NULL, node_id TEXT NOT NULL, usage_id TEXT NOT NULL, PRIMARY KEY(name,node_id,usage_id));
  CREATE INDEX IF NOT EXISTS synonym_names_node ON synonym_names(node_id);
  CREATE TABLE IF NOT EXISTS synonym_shards (path TEXT PRIMARY KEY, sha256 TEXT NOT NULL, records INTEGER NOT NULL);
  CREATE TABLE IF NOT EXISTS synonym_title_matches (name TEXT PRIMARY KEY, title TEXT NOT NULL, source_sha256 TEXT NOT NULL);`)
assert.equal(db.prepare("SELECT value FROM meta WHERE key='manifest_sha256'").get()?.value, createHash('sha256').update(manifestBytes).digest('hex'))
const done = db.prepare('SELECT sha256,records FROM synonym_shards WHERE path=?')
const node = db.prepare('SELECT 1 FROM nodes WHERE id=?')
const insert = db.prepare('INSERT OR IGNORE INTO synonym_names(name,node_id,usage_id) VALUES(?,?,?)')
const mark = db.prepare('INSERT INTO synonym_shards(path,sha256,records) VALUES(?,?,?)')
let processed = 0, linked = 0
for (const shard of manifest.search.files) {
  const previous = done.get(shard.path)
  if (previous) { assert.equal(previous.sha256, shard.sha256); assert.equal(previous.records, shard.records); continue }
  const bytes = readFileSync(join(registry, shard.path))
  assert.equal(createHash('sha256').update(bytes).digest('hex'), shard.sha256)
  const rows = gunzipSync(bytes).toString('utf8').split('\n').filter(Boolean)
  assert.equal(rows.length, shard.records)
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const line of rows) {
      const row = JSON.parse(line)
      if (row.status !== 'synonym' || !row.acceptedId || !node.get(row.acceptedId)) continue
      const name = canonicalName(row)
      if (name) { insert.run(name, row.acceptedId, row.id); linked++ }
    }
    mark.run(shard.path, shard.sha256, shard.records)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  if (++processed % 100 === 0) console.log(JSON.stringify({ shards: processed, linked }))
}
assert.equal(db.prepare('SELECT COUNT(*) AS n FROM synonym_shards').get().n, manifest.search.files.length)
const source = join(root, 'sources/enwiki-titles-ns0.gz')
const receipt = JSON.parse(readFileSync(source + '.receipt.json', 'utf8'))
const hash = createHash('sha256')
for await (const chunk of createReadStream(source)) hash.update(chunk)
assert.equal(hash.digest('hex'), receipt.sha256)
const previous = db.prepare("SELECT value FROM meta WHERE key='synonym_titles_sha256'").get()?.value
if (previous && previous !== receipt.sha256) throw new Error('Synonym title index already uses another snapshot')
if (previous !== receipt.sha256) {
  const exists = db.prepare('SELECT 1 FROM synonym_names WHERE name=? LIMIT 1')
  const add = db.prepare('INSERT OR IGNORE INTO synonym_title_matches(name,title,source_sha256) VALUES(?,?,?)')
  let scanned = 0, found = 0
  const input = createReadStream(source).pipe(createGunzip())
  db.exec('BEGIN IMMEDIATE')
  try {
    for await (const line of createInterface({ input, crlfDelay: Infinity })) {
      if (!scanned++ && line === 'page_title') continue
      const name = line.replaceAll('_', ' ')
      if (exists.get(name)) { add.run(name, line, receipt.sha256); found++ }
      if (scanned % 10000 === 0) { db.exec('COMMIT'); db.exec('BEGIN IMMEDIATE') }
      if (scanned % 1000000 === 0) console.log(JSON.stringify({ titlesScanned: scanned, matches: found }))
    }
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('synonym_titles_sha256',?)").run(receipt.sha256)
}
console.log(JSON.stringify({ status: 'complete', shards: manifest.search.files.length,
  synonyms: db.prepare('SELECT COUNT(*) AS n FROM synonym_names').get().n,
  titles: db.prepare('SELECT COUNT(*) AS n FROM synonym_title_matches').get().n, sourceSha256: receipt.sha256 }))
db.close()
