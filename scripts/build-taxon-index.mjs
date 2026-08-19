import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { flattenTree, readJson, rootDir } from './data-lib.mjs'
import { descendantTaxonScope, occurrenceMatchesTaxonScope } from './taxon-linkage.mjs'

const ontology = readJson('data/navigation/atlas-ontology.json')
const timeScale = readJson('data/time-scale.json')
const periodNames = timeScale.units.filter((unit) => unit.itp === 'period').map((unit) => unit.nam)
const recordsByPeriod = new Map(
  periodNames.map((period) => [period, readJson(`data/fossils/${period.toLowerCase()}.json`)]),
)

const nodes = {}
const matchedOccurrenceIds = new Set()
for (const node of flattenTree(ontology)) {
  if (!node.taxonId) continue
  const scope = descendantTaxonScope(node)
  const ids = [...scope.ids]
  const names = [...scope.names]
  const periods = []
  let matchedTotal = 0
  for (const [period, records] of recordsByPeriod) {
    const matched = records.filter((record) => occurrenceMatchesTaxonScope(record, scope))
    const count = matched.length
    if (count) periods.push(period)
    matchedTotal += count
    for (const record of matched) matchedOccurrenceIds.add(record.oid)
  }
  nodes[node.taxonId] = {
    descendantTaxonIds: ids,
    descendantScientificNames: names,
    matchingMethods: ['accepted-pbdb-id', 'pbdb-higher-classification-name'],
    periods,
    matchedTotal,
  }
}

const sourceTotal = [...recordsByPeriod.values()].reduce((sum, records) => sum + records.length, 0)
const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const profileTotals = Object.fromEntries(profiles.map((profile) => [profile.id, nodes[profile.pbdbTaxonId]?.matchedTotal ?? 0]))
const coverage = {
  schemaVersion: 1,
  generatedFrom: [
    'data/navigation/atlas-ontology.json',
    'data/sources/pbdb-taxon-resolution.json',
    'data/fossils/*.json',
  ],
  scope: 'Bundled bounded occurrence sample only; this is linkage coverage, not biological coverage or sampling completeness.',
  sourceTotal,
  linkedOccurrenceTotal: matchedOccurrenceIds.size,
  linkedOccurrenceRate: Number((matchedOccurrenceIds.size / sourceTotal).toFixed(6)),
  unmatchedOccurrenceTotal: sourceTotal - matchedOccurrenceIds.size,
  indexedOntologyNodes: Object.keys(nodes).length,
  profileTotals,
  zeroMatchProfiles: Object.entries(profileTotals).filter(([, count]) => count === 0).map(([id]) => id),
}

const output = {
  schemaVersion: 2,
  generatedFrom: 'data/navigation/atlas-ontology.json and bundled occurrence chunks',
  sourceTotal,
  samplingMethod: 'bounded non-random PBDB API prefix sample; matching uses verified represented PBDB IDs plus the stored PBDB higher-classification names',
  nodes,
}

const outputPath = join(rootDir, 'data/indexes/taxon-period-index.json')
mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`)
writeFileSync(join(rootDir, 'data/indexes/taxon-linkage-coverage.json'), `${JSON.stringify(coverage, null, 2)}\n`)
console.log(`Built taxon-period index for ${Object.keys(nodes).length} PBDB-linked nodes.`)
console.log(`Linked ${matchedOccurrenceIds.size.toLocaleString()} of ${sourceTotal.toLocaleString()} bundled occurrences; ${coverage.zeroMatchProfiles.length} flagship profiles have zero matches.`)
