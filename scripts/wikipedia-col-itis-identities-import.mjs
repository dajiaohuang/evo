import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const bytes = readFileSync(root + 'itis-vernacular-wikidata-checks.json')
const input = JSON.parse(bytes)
const digest = createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite')
db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS itis_wikidata_identities(item TEXT PRIMARY KEY, col_ids TEXT NOT NULL);')
assert.equal(db.prepare("SELECT value FROM meta WHERE key='itis_vernacular_checks_sha256'").get()?.value, input.titleChecksSha256)
const previous = db.prepare("SELECT value FROM meta WHERE key='itis_wikidata_identities_sha256'").get()?.value
assert.ok(!previous || previous === digest)
const add = db.prepare('INSERT OR REPLACE INTO itis_wikidata_identities VALUES(?,?)')
db.exec('BEGIN IMMEDIATE')
try {
  for (const value of input.results) {
    assert.match(value.item, /^Q\d+$/)
    assert.ok(Array.isArray(value.colIds) && value.colIds.every(id => typeof id === 'string'))
    add.run(value.item, JSON.stringify(value.colIds))
  }
  assert.equal(db.prepare("SELECT COUNT(*) n FROM itis_vernacular_title_checks v LEFT JOIN itis_wikidata_identities w ON w.item=v.item WHERE v.status='available' AND v.item IS NOT NULL AND w.item IS NULL").get().n, 0)
  db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('itis_wikidata_identities_sha256',?)").run(digest)
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
console.log(JSON.stringify({ status:'imported', sha256:digest, items:input.results.length }))
db.close()
