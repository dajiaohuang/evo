import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'

const root = '.git/evo-wikipedia-col26-8/'
const bytes = readFileSync(root + 'itis-vernacular-title-checks.json')
const checks = JSON.parse(bytes)
const candidates = readFileSync(root + 'itis-vernacular-title-candidates-expanded.json')
assert.equal(createHash('sha256').update(candidates).digest('hex'), checks.sourceSha256)
const digest = createHash('sha256').update(bytes).digest('hex')
const db = new DatabaseSync(root + 'inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS itis_vernacular_title_checks(locale TEXT NOT NULL, title TEXT NOT NULL, status TEXT NOT NULL, item TEXT, PRIMARY KEY(locale,title));`)
assert.equal(db.prepare("SELECT value FROM meta WHERE key='itis_vernacular_expanded_sha256'").get()?.value, checks.sourceSha256)
const previous = db.prepare("SELECT value FROM meta WHERE key='itis_vernacular_checks_sha256'").get()?.value
assert.ok(!previous || previous === digest)
const insert = db.prepare('INSERT OR REPLACE INTO itis_vernacular_title_checks(locale,title,status,item) VALUES(?,?,?,?)')
db.exec('BEGIN IMMEDIATE')
try {
  for (const check of checks.results) {
    assert.ok(['available', 'unavailable', 'disambiguation'].includes(check.status))
    assert.ok(check.item === null || /^Q\d+$/.test(check.item))
    insert.run(check.locale, check.requested, check.status, check.item)
  }
  assert.equal(db.prepare('SELECT COUNT(*) n FROM (SELECT DISTINCT locale,title FROM itis_vernacular_candidates EXCEPT SELECT locale,title FROM itis_vernacular_title_checks)').get().n, 0)
  db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('itis_vernacular_checks_sha256',?)").run(digest)
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
console.log(JSON.stringify({ status: 'imported', sha256: digest, counts: db.prepare('SELECT status,COUNT(*) n FROM itis_vernacular_title_checks GROUP BY status').all() }))
db.close()
