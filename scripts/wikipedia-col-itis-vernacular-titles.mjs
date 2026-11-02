import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { createGunzip } from 'node:zlib'

const root = '.git/evo-wikipedia-col26-8/'
const expanded = process.argv.includes('--expanded')
const inventoryBytes = readFileSync(root + `itis-vernacular-inventory${expanded ? '-expanded' : ''}.json`)
const inventory = JSON.parse(inventoryBytes)
const projects = JSON.parse(readFileSync(root + 'sources/wikipedia-projects.json')).projects
const matches = []
for (const locale of [...new Set(inventory.values.map(v => v.locale))].sort()) {
  const source = `${root}sources/${locale}wiki-titles-ns0.gz`
  const receipt = JSON.parse(readFileSync(source + '.receipt.json'))
  const project = projects.find(p => p.locale === locale)
  assert.ok(project)
  assert.equal(receipt.url, `https://dumps.wikimedia.org/${project.dbname}/latest/${project.dbname}-latest-all-titles-in-ns0.gz`)
  const hash = createHash('sha256')
  for await (const part of createReadStream(source)) hash.update(part)
  assert.equal(hash.digest('hex'), receipt.sha256)
  const titles = new Map()
  for (const value of inventory.values.filter(v => v.locale === locale)) {
    if (!titles.has(value.title)) titles.set(value.title, [])
    titles.get(value.title).push(value)
  }
  let scanned = 0, found = 0
  for await (const line of createInterface({ input: createReadStream(source).pipe(createGunzip()), crlfDelay: Infinity })) {
    if (!scanned++ && line === 'page_title') continue
    for (const value of titles.get(line.replaceAll('_', ' ')) ?? []) {
      matches.push({ ...value, url: `https://${locale}.wikipedia.org/wiki/${encodeURIComponent(line)}`, titleSourceSha256: receipt.sha256 })
      found++
    }
  }
  console.log(JSON.stringify({ locale, scanned, matches: found }))
}
const out = root + `itis-vernacular-title-candidates${expanded ? '-expanded' : ''}.json`
writeFileSync(out, JSON.stringify({ inventorySha256: createHash('sha256').update(inventoryBytes).digest('hex'), descriptorSha256: inventory.descriptorSha256, matches }))
console.log(JSON.stringify({ status: 'complete', matches: matches.length, nodes: new Set(matches.map(v => v.node)).size, output: out }))
