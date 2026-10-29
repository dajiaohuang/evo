import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { join, resolve } from 'node:path'
import { createGunzip } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { normalizeName } from './wikipedia-col-normalized-names.mjs'

const locale = process.argv[2]
assert.match(locale ?? '', /^[a-z0-9-]+$/)
const root = resolve('.git/evo-wikipedia-col26-8')
const projects = JSON.parse(readFileSync(join(root, 'sources/wikipedia-projects.json'), 'utf8')).projects
assert.ok(projects.some(project => project.locale === locale))
const source = join(root, `sources/${locale}wiki-titles-ns0.gz`)
const receipt = JSON.parse(readFileSync(source + '.receipt.json', 'utf8'))
assert.equal(receipt.locale, locale)
const hash = createHash('sha256')
for await (const chunk of createReadStream(source)) hash.update(chunk)
assert.equal(hash.digest('hex'), receipt.sha256)
const db = new DatabaseSync(join(root, 'inventory.sqlite'))
db.exec(`PRAGMA busy_timeout=15000;
  CREATE TABLE IF NOT EXISTS normalized_title_matches (locale TEXT NOT NULL, name TEXT NOT NULL, title TEXT NOT NULL, PRIMARY KEY(locale,name,title));
  CREATE INDEX IF NOT EXISTS normalized_title_matches_name ON normalized_title_matches(name);`)
const meta = db.prepare('SELECT value FROM meta WHERE key=?')
const scope = meta.get('uncovered_normalized_scope')?.value
assert.ok(scope && scope === meta.get('uncovered_source_sha256')?.value)
const sourceKey = `normalized_titles_${locale}_source`
const scopeKey = `normalized_titles_${locale}_scope`
const completeKey = `normalized_titles_${locale}_complete`
const lineKey = `normalized_titles_${locale}_lines`
const savedSource = meta.get(sourceKey)?.value, savedScope = meta.get(scopeKey)?.value
if (savedSource && savedSource !== receipt.sha256) throw new Error('Normalized title scan source changed')
if (savedScope && savedScope !== scope) throw new Error('Normalized title scan scope changed')
const save = db.prepare('INSERT OR REPLACE INTO meta(key,value) VALUES(?,?)')
save.run(sourceKey, receipt.sha256)
save.run(scopeKey, scope)
if (meta.get(completeKey)?.value === 'true') {
  console.log(JSON.stringify({ status: 'already-complete', locale }))
  db.close()
  process.exit(0)
}
const keys = new Set()
for (const row of db.prepare('SELECT DISTINCT normalized FROM uncovered_normalized').iterate()) keys.add(row.normalized)
const find = db.prepare('SELECT name FROM uncovered_normalized WHERE normalized=?')
const add = db.prepare('INSERT OR IGNORE INTO normalized_title_matches(locale,name,title) VALUES(?,?,?)')
const checkpoint = Number(meta.get(lineKey)?.value ?? 0)
let scanned = 0, added = 0
const input = createReadStream(source).pipe(createGunzip())
db.exec('BEGIN IMMEDIATE')
try {
  for await (const line of createInterface({ input, crlfDelay: Infinity })) {
    scanned++
    if (scanned <= checkpoint || (scanned === 1 && line === 'page_title')) continue
    const name = line.replaceAll('_', ' '), normalized = normalizeName(name)
    if (normalized.length >= 3 && keys.has(normalized)) {
      for (const row of find.all(normalized)) if (row.name !== name) added += add.run(locale, row.name, line).changes
    }
    if (scanned % 50000 === 0) { save.run(lineKey, String(scanned)); db.exec('COMMIT'); db.exec('BEGIN IMMEDIATE') }
    if (scanned % 1000000 === 0) console.log(JSON.stringify({ locale, scanned, added }))
  }
  save.run(lineKey, String(scanned))
  save.run(completeKey, 'true')
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
console.log(JSON.stringify({ status: 'complete', locale, scanned, added, sourceSha256: receipt.sha256, scope }))
db.close()
