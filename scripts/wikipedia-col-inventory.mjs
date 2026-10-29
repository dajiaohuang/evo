import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { join, resolve } from 'node:path'
import { createGunzip } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { canonicalName } from './wikipedia-col-identity.mjs'

const registry = resolve('data/catalogue-of-life/releases/2026-08-20/registry')
const manifestBytes = readFileSync(join(registry, 'manifest.json'))
const manifest = JSON.parse(manifestBytes)
assert.equal(manifest.releaseAlias, 'COL26.8')
const local = resolve('.git/evo-wikipedia-col26-8')
mkdirSync(local, { recursive: true })
const dbPath = join(local, 'inventory.sqlite')
const existed = existsSync(dbPath)
const db = new DatabaseSync(dbPath)
db.exec(`PRAGMA journal_mode=WAL; PRAGMA synchronous=NORMAL;
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS shards (path TEXT PRIMARY KEY, sha256 TEXT NOT NULL, count INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS nodes (id TEXT PRIMARY KEY, name TEXT NOT NULL, rank TEXT NOT NULL, parent_id TEXT, source_dataset_id TEXT);
CREATE TABLE IF NOT EXISTS names (name TEXT PRIMARY KEY, status TEXT NOT NULL DEFAULT 'pending', candidates_json TEXT, checked_at TEXT);
CREATE INDEX IF NOT EXISTS nodes_name ON nodes(name);`)
const fingerprint = createHash('sha256').update(manifestBytes).digest('hex')
const readMeta = db.prepare('SELECT value FROM meta WHERE key=?')
const oldFingerprint = readMeta.get('manifest_sha256')?.value
if (existed && !oldFingerprint && db.prepare('SELECT COUNT(*) AS n FROM nodes').get().n) throw new Error('Existing inventory has no source identity')
if (oldFingerprint && oldFingerprint !== fingerprint) throw new Error('Existing inventory is bound to a different registry manifest')
db.prepare('INSERT OR IGNORE INTO meta(key,value) VALUES(?,?)').run('manifest_sha256', fingerprint)
db.prepare('INSERT OR IGNORE INTO meta(key,value) VALUES(?,?)').run('release', manifest.releaseAlias)
const completed = db.prepare('SELECT sha256,count FROM shards WHERE path=?')
const insertNode = db.prepare('INSERT INTO nodes(id,name,rank,parent_id,source_dataset_id) VALUES(?,?,?,?,?)')
const insertName = db.prepare('INSERT OR IGNORE INTO names(name) VALUES(?)')
const insertShard = db.prepare('INSERT INTO shards(path,sha256,count) VALUES(?,?,?)')
for (const shard of manifest.hierarchy.nodes.files) {
  const prior = completed.get(shard.path)
  if (prior) { assert.equal(prior.sha256, shard.sha256); assert.equal(prior.count, shard.records); continue }
  const bytes = readFileSync(join(registry, shard.path))
  assert.equal(createHash('sha256').update(bytes).digest('hex'), shard.sha256, shard.path)
  let count = 0
  db.exec('BEGIN IMMEDIATE')
  try {
    const input = createReadStream(join(registry, shard.path)).pipe(createGunzip())
    for await (const line of createInterface({ input, crlfDelay: Infinity })) {
      if (!line) continue
      const row = JSON.parse(line)
      const name = canonicalName(row)
      assert.ok(row.id && name && row.rank)
      insertNode.run(row.id, name, row.rank, row.parentId ?? null, row.sourceDatasetId ?? null)
      insertName.run(name)
      count++
    }
    assert.equal(count, shard.records, shard.path)
    insertShard.run(shard.path, shard.sha256, count)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(`${shard.path}: ${count} nodes`)
}
const counts = { nodes: db.prepare('SELECT COUNT(*) AS n FROM nodes').get().n, names: db.prepare('SELECT COUNT(*) AS n FROM names').get().n,
  shards: db.prepare('SELECT COUNT(*) AS n FROM shards').get().n, sourceNodes: manifest.hierarchy.counts.nodes }
assert.equal(counts.nodes, counts.sourceNodes)
assert.equal(counts.shards, manifest.hierarchy.nodes.files.length)
db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)').run('inventory_complete', 'true')
db.close()
console.log(JSON.stringify({ status: 'complete', dbPath, manifestSha256: fingerprint, ...counts }))
