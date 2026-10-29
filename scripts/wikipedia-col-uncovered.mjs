import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

const root = resolve('.git/evo-wikipedia-col26-8')
const snapshot = resolve(process.argv[2] ?? '')
const child = relative(root, snapshot)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep))
const bytes = readFileSync(join(snapshot, 'manifest.json'))
const manifest = JSON.parse(bytes)
assert.equal(manifest.releaseAlias, 'COL26.8')
assert.equal(manifest.stats.pendingNodes, 0)
const digest = createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(join(root, 'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
  CREATE TABLE IF NOT EXISTS uncovered_nodes (id TEXT PRIMARY KEY);
  CREATE TABLE IF NOT EXISTS uncovered_names (name TEXT PRIMARY KEY);`)
const previous = db.prepare("SELECT value FROM meta WHERE key='uncovered_source_sha256'").get()?.value
if (previous && previous !== digest) throw new Error('Existing uncovered inventory is bound to a different snapshot')
if (!previous) {
  const insert = db.prepare('INSERT OR IGNORE INTO uncovered_nodes(id) VALUES(?)')
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const file of Object.values(manifest.shards)) {
      const compressed = readFileSync(join(snapshot, file.path))
      assert.equal(createHash('sha256').update(compressed).digest('hex'), file.sha256)
      const entries = JSON.parse(gunzipSync(compressed)).entries
      for (const [id, entry] of Object.entries(entries)) if (entry.status === 'unresolved' || entry.status === 'ambiguous') insert.run(id)
    }
    db.exec('INSERT OR IGNORE INTO uncovered_names(name) SELECT n.name FROM uncovered_nodes u JOIN nodes n ON n.id=u.id')
    db.exec('INSERT OR IGNORE INTO uncovered_names(name) SELECT s.name FROM uncovered_nodes u JOIN synonym_names s ON s.node_id=u.id')
    db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('uncovered_source_sha256',?)").run(digest)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
}
console.log(JSON.stringify({ status: 'complete', snapshotSha256: digest, nodes: db.prepare('SELECT COUNT(*) n FROM uncovered_nodes').get().n, names: db.prepare('SELECT COUNT(*) n FROM uncovered_names').get().n }))
db.close()
