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
  CREATE TABLE IF NOT EXISTS synonym_wikidata_targets (id TEXT PRIMARY KEY);
  CREATE TABLE IF NOT EXISTS synonym_wikidata_lookup (name TEXT PRIMARY KEY, status TEXT NOT NULL DEFAULT 'pending', candidates_json TEXT, checked_at TEXT);
  CREATE INDEX IF NOT EXISTS synonym_wikidata_lookup_status ON synonym_wikidata_lookup(status);`)
const previous = db.prepare("SELECT value FROM meta WHERE key='synonym_wikidata_source_sha256'").get()?.value
if (previous && previous !== digest) throw new Error('Existing synonym Wikidata inventory uses another snapshot')
if (!previous) {
  const insert = db.prepare('INSERT OR IGNORE INTO synonym_wikidata_targets(id) VALUES(?)')
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const file of Object.values(manifest.shards)) {
      const compressed = readFileSync(join(snapshot, file.path))
      assert.equal(createHash('sha256').update(compressed).digest('hex'), file.sha256)
      for (const [id, entry] of Object.entries(JSON.parse(gunzipSync(compressed)).entries)) {
        if (entry.status === 'unresolved' || entry.status === 'ambiguous') insert.run(id)
      }
    }
    db.exec(`INSERT OR IGNORE INTO synonym_wikidata_lookup(name)
      SELECT DISTINCT s.name FROM synonym_wikidata_targets u JOIN synonym_names s ON s.node_id=u.id`)
    db.exec(`UPDATE synonym_wikidata_lookup SET status='queried',
      candidates_json=(SELECT candidates_json FROM names WHERE names.name=synonym_wikidata_lookup.name),
      checked_at=(SELECT checked_at FROM names WHERE names.name=synonym_wikidata_lookup.name)
      WHERE EXISTS (SELECT 1 FROM names WHERE names.name=synonym_wikidata_lookup.name AND names.status='queried')`)
    db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('synonym_wikidata_source_sha256',?)").run(digest)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
}
console.log(JSON.stringify({ status: 'complete', snapshotSha256: digest, targets: db.prepare('SELECT COUNT(*) n FROM synonym_wikidata_targets').get().n,
  counts: db.prepare('SELECT status,COUNT(*) n FROM synonym_wikidata_lookup GROUP BY status').all() }))
db.close()
