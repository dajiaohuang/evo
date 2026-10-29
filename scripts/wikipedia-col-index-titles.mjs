import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { resolve } from 'node:path'
import { createGunzip } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

const root = resolve('.git/evo-wikipedia-col26-8')
const source = resolve(root, 'sources/enwiki-titles-ns0.gz')
const receipt = JSON.parse(readFileSync(source + '.receipt.json', 'utf8'))
assert.equal(receipt.locale, 'en')
const hash = createHash('sha256')
for await (const chunk of createReadStream(source)) hash.update(chunk)
assert.equal(hash.digest('hex'), receipt.sha256, 'Title dump hash mismatch')
const db = new DatabaseSync(resolve(root, 'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=10000;
CREATE TABLE IF NOT EXISTS exact_english_titles (name TEXT PRIMARY KEY, title TEXT NOT NULL, source_sha256 TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS exact_english_title_value ON exact_english_titles(title);`)
const previous = db.prepare("SELECT value FROM meta WHERE key='en_titles_sha256'").get()?.value
if (previous && previous !== receipt.sha256) throw new Error('Existing title index is bound to a different dump')
db.prepare('INSERT OR IGNORE INTO meta(key,value) VALUES(?,?)').run('en_titles_sha256', receipt.sha256)
const find = db.prepare('SELECT name FROM names WHERE name=?')
const insert = db.prepare('INSERT OR IGNORE INTO exact_english_titles(name,title,source_sha256) VALUES(?,?,?)')
let scanned = 0, found = 0, pending = 0
db.exec('BEGIN IMMEDIATE')
try {
  const input = createReadStream(source).pipe(createGunzip())
  for await (const line of createInterface({ input, crlfDelay: Infinity })) {
    if (!scanned++ && line === 'page_title') continue
    const name = line.replaceAll('_', ' ')
    if (find.get(name)) { insert.run(name, line, receipt.sha256); found++ }
    if (++pending === 10000) { db.exec('COMMIT'); db.exec('BEGIN IMMEDIATE'); pending = 0 }
    if (scanned % 1000000 === 0) console.log(JSON.stringify({ titlesScanned: scanned, exactTitleCandidates: found }))
  }
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('en_titles_complete','true')").run()
const unique = db.prepare('SELECT COUNT(*) AS n FROM exact_english_titles').get().n
db.close()
console.log(JSON.stringify({ status: 'complete', titlesScanned: scanned, uniqueExactTitleCandidates: unique, dumpSha256: receipt.sha256, dumpLastModified: receipt.lastModified }))
