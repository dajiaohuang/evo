import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'

const expanded = process.argv.includes('--expanded')
const bytes = readFileSync(`.git/evo-wikipedia-col26-8/itis-vernacular-title-candidates${expanded ? '-expanded' : ''}.json`)
const input = JSON.parse(bytes)
const digest = createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS itis_vernacular_candidates(node_id TEXT NOT NULL, locale TEXT NOT NULL, title TEXT NOT NULL, itis_id TEXT NOT NULL, url TEXT NOT NULL, PRIMARY KEY(node_id,locale,title,itis_id));`)
const key = expanded ? 'itis_vernacular_expanded_sha256' : 'itis_vernacular_candidates_sha256'
const previous = db.prepare('SELECT value FROM meta WHERE key=?').get(key)?.value
assert.ok(!previous || previous === digest, 'Different candidate set already imported')
const target = db.prepare('SELECT 1 FROM label_wikidata_targets WHERE id=?')
const add = db.prepare('INSERT OR IGNORE INTO itis_vernacular_candidates VALUES(?,?,?,?,?)')
db.exec('BEGIN IMMEDIATE')
try {
  for (const row of input.matches) {
    assert.ok(target.get(row.node))
    assert.match(row.itisTaxonId, /^\d+$/)
    assert.match(row.locale, /^[a-z0-9-]+$/)
    assert.equal(row.url, `https://${row.locale}.wikipedia.org/wiki/${encodeURIComponent(row.title.replaceAll(' ', '_'))}`)
    add.run(row.node, row.locale, row.title, row.itisTaxonId, row.url)
  }
  db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)').run(key, digest)
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
console.log(JSON.stringify({ status: 'imported', sha256: digest, candidates: db.prepare('SELECT COUNT(*) n FROM itis_vernacular_candidates').get().n }))
db.close()
