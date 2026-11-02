import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { withoutSubgenus } from './wikipedia-col-subgenus-name.mjs'
const root = resolve('.git/evo-wikipedia-col26-8')
const snapshot = resolve(process.argv[2] ?? '')
const child = relative(root, snapshot)
assert.ok(child && !isAbsolute(child) && child !== '..' && !child.startsWith('..' + sep))
const bytes = readFileSync(join(snapshot, 'manifest.json'))
const manifest = JSON.parse(bytes)
assert.equal(manifest.releaseAlias, 'COL26.8')
assert.equal(manifest.contentMode, 'links-only')
assert.equal(manifest.stats.pendingNodes, 0)
const digest = createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(join(root, 'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS subgenus_names(name TEXT NOT NULL, node_id TEXT NOT NULL, original_name TEXT NOT NULL, PRIMARY KEY(name,node_id,original_name));
 CREATE INDEX IF NOT EXISTS subgenus_names_node ON subgenus_names(node_id);`)
const previous = db.prepare("SELECT value FROM meta WHERE key='subgenus_inventory_source_sha256'").get()?.value
assert.ok(!previous || previous === digest, 'Subgenus inventory already bound to another snapshot')
if (!previous) {
  const node = db.prepare('SELECT name FROM nodes WHERE id=?')
  const synonyms = db.prepare('SELECT DISTINCT name FROM synonym_names WHERE node_id=?')
  const add = db.prepare('INSERT OR IGNORE INTO subgenus_names VALUES(?,?,?)')
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const file of Object.values(manifest.shards)) {
      const compressed = readFileSync(join(snapshot, file.path))
      assert.equal(createHash('sha256').update(compressed).digest('hex'), file.sha256)
      for (const [id, entry] of Object.entries(JSON.parse(gunzipSync(compressed)).entries)) {
        if (!['unresolved', 'ambiguous'].includes(entry.status)) continue
        const name = node.get(id)?.name
        assert.ok(name)
        for (const original of [name, ...synonyms.all(id).map(x => x.name)]) {
          const abbreviated = withoutSubgenus(original)
          if (abbreviated !== original) add.run(abbreviated, id, original)
        }
      }
    }
    db.prepare("INSERT INTO meta(key,value) VALUES('subgenus_inventory_source_sha256',?)").run(digest)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
}
console.log(JSON.stringify({status:'complete', sourceSha256:digest, counts:db.prepare('SELECT COUNT(*) rows,COUNT(DISTINCT name) names,COUNT(DISTINCT node_id) nodes FROM subgenus_names').get()}))
db.close()
