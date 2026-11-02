import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { createGunzip } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

const root = '.git/evo-wikipedia-col26-8/'
const rankMode = process.argv.includes('--rank-subgenus')
const hybridMode = process.argv.includes('--hybrid')
assert.ok(!(rankMode&&hybridMode))
const namesTable = hybridMode ? 'hybrid_names' : rankMode ? 'subgenus_rank_names' : 'subgenus_names'
const matchTable = hybridMode ? 'hybrid_title_matches' : rankMode ? 'subgenus_rank_title_matches' : 'subgenus_title_matches'
const doneTable = hybridMode ? 'hybrid_title_done' : rankMode ? 'subgenus_rank_title_done' : 'subgenus_title_done'
const sourceKey = hybridMode ? 'hybrid_inventory_source_sha256' : rankMode ? 'subgenus_rank_source_sha256' : 'subgenus_inventory_source_sha256'
const projects = JSON.parse(readFileSync(root + 'sources/wikipedia-projects.json')).projects
const db = new DatabaseSync(root + 'inventory.sqlite')
db.exec(`PRAGMA busy_timeout=15000;
 CREATE TABLE IF NOT EXISTS ${matchTable}(locale TEXT NOT NULL, name TEXT NOT NULL, title TEXT NOT NULL, source_sha256 TEXT NOT NULL, PRIMARY KEY(locale,name,title));
 CREATE INDEX IF NOT EXISTS ${matchTable}_name ON ${matchTable}(name);
 CREATE TABLE IF NOT EXISTS ${doneTable}(locale TEXT PRIMARY KEY, source_sha256 TEXT NOT NULL, scanned INTEGER NOT NULL, matched INTEGER NOT NULL);`)
assert.ok(db.prepare('SELECT value FROM meta WHERE key=?').get(sourceKey)?.value)
const names = new Set(db.prepare(`SELECT DISTINCT name FROM ${namesTable}`).all().map(x => x.name))
const done = db.prepare(`SELECT source_sha256 FROM ${doneTable} WHERE locale=?`)
const add = db.prepare(`INSERT OR IGNORE INTO ${matchTable} VALUES(?,?,?,?)`)
const mark = db.prepare(`INSERT INTO ${doneTable} VALUES(?,?,?,?)`)
const priority = ['en','zh','de','fr','es','pt','nl','sv','ceb','war']
const order = [...projects].sort((a,b) => (priority.indexOf(a.locale) < 0 ? 999 : priority.indexOf(a.locale)) - (priority.indexOf(b.locale) < 0 ? 999 : priority.indexOf(b.locale)) || a.locale.localeCompare(b.locale))
let processed = 0
for (const project of order) {
  const { locale, dbname } = project
  assert.match(locale, /^[a-z0-9-]+$/)
  const source = `${root}sources/${locale}wiki-titles-ns0.gz`
  const receipt = JSON.parse(readFileSync(source + '.receipt.json'))
  assert.equal(receipt.locale, locale)
  assert.equal(receipt.url, `https://dumps.wikimedia.org/${dbname}/latest/${dbname}-latest-all-titles-in-ns0.gz`)
  const previous = done.get(locale)
  if (previous) { assert.equal(previous.source_sha256, receipt.sha256); continue }
  const hash = createHash('sha256')
  for await (const part of createReadStream(source)) hash.update(part)
  assert.equal(hash.digest('hex'), receipt.sha256)
  let scanned = 0
  const matches = []
  for await (const line of createInterface({ input: createReadStream(source).pipe(createGunzip()), crlfDelay: Infinity })) {
    if (!scanned++ && line === 'page_title') continue
    const name = line.replaceAll('_', ' ')
    if (names.has(name)) matches.push({name,title:line})
  }
  db.exec('BEGIN IMMEDIATE')
  try {
    for (const row of matches) add.run(locale,row.name,row.title,receipt.sha256)
    mark.run(locale,receipt.sha256,scanned,matches.length)
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({locale,scanned,matches:matches.length,completed:db.prepare(`SELECT COUNT(*) n FROM ${doneTable}`).get().n,total:projects.length}))
  processed++
}
console.log(JSON.stringify({status:'complete', processed, counts:db.prepare(`SELECT COUNT(*) matches,COUNT(DISTINCT name) names FROM ${matchTable}`).get()}))
db.close()
