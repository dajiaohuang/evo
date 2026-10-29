import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const root = resolve('.git/evo-wikipedia-col26-8')
const inventory = JSON.parse(readFileSync(join(root, 'sources/wikipedia-projects.json'), 'utf8'))
const db = new DatabaseSync(join(root, 'inventory.sqlite'), { readOnly: true })
const meta = db.prepare('SELECT value FROM meta WHERE key=?')
const scope = meta.get('uncovered_source_sha256')?.value
const unavailable = db.prepare("SELECT COUNT(*) n FROM project_title_scans WHERE state='unavailable'").get().n
let verified = 0
for (const project of inventory.projects) {
  const { locale, dbname } = project
  const file = join(root, `sources/${locale}wiki-titles-ns0.gz`)
  const receipt = JSON.parse(readFileSync(file + '.receipt.json', 'utf8'))
  assert.equal(receipt.locale, locale)
  assert.equal(receipt.url, `https://dumps.wikimedia.org/${dbname}/latest/${dbname}-latest-all-titles-in-ns0.gz`)
  assert.equal(meta.get(locale === 'en' ? 'en_titles_sha256' : `alternate_titles_${locale}_sha256`)?.value, receipt.sha256)
  const usedScope = meta.get(`alternate_titles_${locale}_scope_sha256`)?.value
  if (usedScope) assert.equal(usedScope, scope)
  if (process.argv.includes('--normalized')) {
    assert.equal(meta.get(`normalized_titles_${locale}_complete`)?.value, 'true')
    assert.equal(meta.get(`normalized_titles_${locale}_source`)?.value, receipt.sha256)
    assert.equal(meta.get(`normalized_titles_${locale}_scope`)?.value, scope)
  }
  const hash = createHash('sha256')
  let bytes = 0
  for await (const chunk of createReadStream(file)) { hash.update(chunk); bytes += chunk.length }
  assert.equal(bytes, receipt.bytes)
  assert.equal(hash.digest('hex'), receipt.sha256)
  if (++verified % 50 === 0) console.log(JSON.stringify({ verified, total: inventory.projects.length }))
}
assert.equal(unavailable, 0)
console.log(JSON.stringify({ status: 'passed', projects: inventory.projects.length, verified, unavailable, normalized: process.argv.includes('--normalized'), inventorySha256: inventory.sourceSha256, scope }))
db.close()
