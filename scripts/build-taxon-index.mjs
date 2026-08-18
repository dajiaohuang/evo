import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const timeScale = readJson('data/time-scale.json')
const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
const recordsByPeriod = new Map(
  periodNames.map((period) => [period, readJson(`data/fossils/${period.toLowerCase()}.json`)]),
)

function descendantTaxonIds(node, output = new Set()) {
  if (node.taxonId) output.add(node.taxonId)
  for (const child of node.children ?? []) descendantTaxonIds(child, output)
  return output
}

const nodes = {}
for (const node of flattenTree(ontology)) {
  if (!node.taxonId) continue
  const ids = [...descendantTaxonIds(node)]
  const idSet = new Set(ids)
  const periods = []
  let matchedTotal = 0
  for (const [period, records] of recordsByPeriod) {
    const count = records.filter((record) => idSet.has(record.tid)).length
    if (count) periods.push(period)
    matchedTotal += count
  }
  nodes[node.taxonId] = { descendantTaxonIds: ids, periods, matchedTotal }
}

const output = {
  schemaVersion: 1,
  generatedFrom: 'data/navigation/atlas-ontology.json and bundled occurrence chunks',
  sourceTotal: [...recordsByPeriod.values()].reduce((sum, records) => sum + records.length, 0),
  samplingMethod: 'bounded non-random PBDB API prefix sample; descendant scope covers only taxon IDs represented in the bundled navigation ontology',
  nodes,
}

const outputPath = join(rootDir, 'data/indexes/taxon-period-index.json')
mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Built taxon-period index for ${Object.keys(nodes).length} PBDB-linked nodes.`)
