import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, readFileSync, writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { createGunzip } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'
import { execFileSync } from 'node:child_process'

// Candidate discovery only: identical scientific name and rank do not prove
// two taxonomic concepts are identical. Never treat these as confirmed links.
const root = 'data/catalogue-of-life/releases/2026-08-20/global-sources/'
const globalBytes = readFileSync(root + 'manifest.json')
const global = JSON.parse(globalBytes)
const source = global.sources.find(x => x.id === 'itis-global-original-rc130')
// The current descriptor was changed in 5db126dde734, while the global
// manifest still pins the original descriptor from 53d0600b57ac.
const descriptorBytes = execFileSync('rtk', ['proxy', 'git', 'show', `53d0600b57ac5ea25e68693375dc73103dd03547:${source.descriptorPath}`], { maxBuffer: 20 * 1024 * 1024 })
assert.equal(createHash('sha256').update(descriptorBytes).digest('hex'), source.descriptorSha256)
const descriptor = JSON.parse(descriptorBytes)
assert.equal(descriptor.datasetKey, 2144)
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const target = new Map()
const expanded = process.argv.includes('--expanded')
function addTarget(name, rank, id) {
  const key = JSON.stringify([name, rank.toLowerCase()])
  if (!target.has(key)) target.set(key, new Set())
  target.get(key).add(id)
}
for (const row of db.prepare('SELECT n.id,n.name,n.rank FROM label_wikidata_targets t JOIN nodes n ON n.id=t.id').iterate()) {
  addTarget(row.name, row.rank, row.id)
}
if (expanded) for (const row of db.prepare('SELECT n.id,s.name,n.rank FROM label_wikidata_targets t JOIN nodes n ON n.id=t.id JOIN synonym_names s ON s.node_id=n.id').iterate()) addTarget(row.name, row.rank, row.id)
db.close()
async function* rows(member) {
  for (const file of descriptor.projection.files.filter(f => f.member === member)) {
    const hash = createHash('sha256')
    for await (const part of createReadStream(file.path)) hash.update(part)
    assert.equal(hash.digest('hex'), file.sha256, file.path)
    let n = 0
    for await (const line of createInterface({ input: createReadStream(file.path).pipe(createGunzip()), crlfDelay: Infinity })) {
      if (!line) continue
      const row = JSON.parse(line)
      assert.equal(row.sourceMember, member)
      n++
      yield row.fields
    }
    assert.equal(n, file.records, file.path)
  }
}
const names = new Map()
for await (const row of rows('Name.tsv')) {
  const nodes = target.get(JSON.stringify([row.scientificName, row.rank.toLowerCase()]))
  if (nodes?.size === 1) names.set(row.ID, [...nodes][0])
}
const taxa = new Map()
function addTaxon(taxon, id) {
  if (!id) return
  if (!taxa.has(taxon)) taxa.set(taxon, new Set())
  taxa.get(taxon).add(id)
}
for await (const row of rows('Taxon.tsv')) {
  addTaxon(row.ID, names.get(row.nameID))
}
if (expanded) for await (const row of rows('Synonym.tsv')) addTaxon(row.taxonID, names.get(row.nameID))
const languages = { English: 'en', French: 'fr', Spanish: 'es', Portuguese: 'pt', German: 'de', Italian: 'it', Dutch: 'nl' }
const values = new Map()
for await (const row of rows('VernacularName.tsv')) {
  const nodes = taxa.get(row.taxonID), locale = languages[row.language]
  if (nodes?.size !== 1 || !locale || !row.name || row.name === 'NULL') continue
  const node = [...nodes][0]
  const title = row.name[0].toLocaleUpperCase(locale) + row.name.slice(1)
  const key = JSON.stringify([node, locale, title, row.taxonID])
  values.set(key, { node, locale, title, itisTaxonId: row.taxonID })
}
const out = `.git/evo-wikipedia-col26-8/itis-vernacular-inventory${expanded ? '-expanded' : ''}.json`
writeFileSync(out, JSON.stringify({ descriptorSha256: source.descriptorSha256, description: 'Candidate names; scientific-name and rank correspondence does not prove identity.', values: [...values.values()] }))
console.log(JSON.stringify({ status: 'complete', targets: target.size, matchedScientificNames: names.size, matchedTaxa: taxa.size, vernacularNames: values.size, output: out }))
