import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { join, resolve } from 'node:path'
import { createGunzip } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

const locale = process.argv[2]
assert.match(locale ?? '', /^[a-z0-9-]+$/)
const root = resolve('.git/evo-wikipedia-col26-8')
const source = join(root, `sources/${locale}wiki-titles-ns0.gz`)
const receipt = JSON.parse(readFileSync(source + '.receipt.json', 'utf8'))
assert.equal(receipt.locale, locale)
const projects = JSON.parse(readFileSync(join(root, 'sources/wikipedia-projects.json'), 'utf8')).projects
assert.ok(projects.some(project => project.locale === locale && receipt.url === `https://dumps.wikimedia.org/${project.dbname}/latest/${project.dbname}-latest-all-titles-in-ns0.gz`))
const hash = createHash('sha256')
for await (const chunk of createReadStream(source)) hash.update(chunk)
assert.equal(hash.digest('hex'), receipt.sha256)
const db = new DatabaseSync(join(root, 'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
  CREATE TABLE IF NOT EXISTS alternate_title_matches (locale TEXT NOT NULL, name TEXT NOT NULL, title TEXT NOT NULL, source_sha256 TEXT NOT NULL, PRIMARY KEY(locale,name));
  CREATE INDEX IF NOT EXISTS alternate_title_matches_name ON alternate_title_matches(name);`)
const key = `alternate_titles_${locale}_sha256`
const previous = db.prepare('SELECT value FROM meta WHERE key=?').get(key)?.value
if (previous && previous !== receipt.sha256) throw new Error('Existing title index uses another snapshot')
const sourceKey = `alternate_titles_${locale}_source_sha256`
const existingSource = db.prepare('SELECT value FROM meta WHERE key=?').get(sourceKey)?.value
if (existingSource && existingSource !== receipt.sha256) throw new Error('Partial title index uses another snapshot')
db.prepare('INSERT OR IGNORE INTO meta(key,value) VALUES(?,?)').run(sourceKey, receipt.sha256)
if (process.argv.includes('--uncovered-only')) {
  const scope = db.prepare("SELECT value FROM meta WHERE key='uncovered_source_sha256'").get()?.value
  assert.ok(scope, 'Build the uncovered inventory before indexing')
  const scopeKey = `alternate_titles_${locale}_scope_sha256`
  const previousScope = db.prepare('SELECT value FROM meta WHERE key=?').get(scopeKey)?.value
  if (previousScope && previousScope !== scope) throw new Error('Partial title index uses a different uncovered inventory')
  db.prepare('INSERT OR IGNORE INTO meta(key,value) VALUES(?,?)').run(scopeKey, scope)
}
if (previous === receipt.sha256) {
  console.log(JSON.stringify({ status: 'already-complete', locale }))
  db.close()
  process.exit(0)
}
const exists = process.argv.includes('--uncovered-only')
  ? db.prepare('SELECT 1 FROM uncovered_names WHERE name=? LIMIT 1')
  : db.prepare('SELECT 1 FROM names WHERE name=? UNION ALL SELECT 1 FROM synonym_names WHERE name=? LIMIT 1')
const add = db.prepare('INSERT OR IGNORE INTO alternate_title_matches(locale,name,title,source_sha256) VALUES(?,?,?,?)')
const progressKey = `alternate_titles_${locale}_lines`
const checkpoint = Number(db.prepare('SELECT value FROM meta WHERE key=?').get(progressKey)?.value ?? 0)
assert.ok(Number.isSafeInteger(checkpoint) && checkpoint >= 0)
const saveProgress = db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)')
let scanned = 0, matched = db.prepare('SELECT COUNT(*) AS n FROM alternate_title_matches WHERE locale=?').get(locale).n
const input = createReadStream(source).pipe(createGunzip())
db.exec('BEGIN IMMEDIATE')
try {
  for await (const line of createInterface({ input, crlfDelay: Infinity })) {
    scanned++
    if (scanned <= checkpoint || (scanned === 1 && line === 'page_title')) continue
    const name = line.replaceAll('_', ' ')
    if (process.argv.includes('--uncovered-only') ? exists.get(name) : exists.get(name, name)) matched += add.run(locale, name, line, receipt.sha256).changes
    if (scanned % 10000 === 0) { saveProgress.run(progressKey, String(scanned)); db.exec('COMMIT'); db.exec('BEGIN IMMEDIATE') }
    if (scanned % 1000000 === 0) console.log(JSON.stringify({ locale, titlesScanned: scanned, matched }))
  }
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)').run(key, receipt.sha256)
console.log(JSON.stringify({ status: 'complete', locale, scanned, matched, sha256: receipt.sha256 }))
db.close()
