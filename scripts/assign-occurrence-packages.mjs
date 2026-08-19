import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'
import { assignOccurrencePackage } from './occurrence-package-map.mjs'

const entities = readJson('data/registry/entities/entities.json')
const periods = readJson('data/period-map-metadata.json')
const exactPackageByTaxonId = new Map(entities.flatMap((entity) => entity.externalIds.pbdb ? [[entity.externalIds.pbdb, entity.packageId]] : []))
const counts = new Map()
let mappedRecords = 0
let unresolvedRecords = 0

for (const period of periods) {
  const relativePath = `data/fossils/${period.name.toLowerCase()}.json`
  const records = readJson(relativePath).map((record) => ({
    ...record,
    ...assignOccurrencePackage(record, exactPackageByTaxonId),
  }))
  for (const record of records) {
    counts.set(record.packageId, (counts.get(record.packageId) ?? 0) + 1)
    if (record.packageAssignmentStatus === 'mapped') mappedRecords += 1
    else unresolvedRecords += 1
  }
  writeFileSync(join(rootDir, relativePath), `${JSON.stringify(records)}\n`, 'utf8')
}

const sourcePath = 'data/sources/pbdb-occurrence-bundle.json'
const source = readJson(sourcePath)
source.packageAssignment = {
  ...source.packageAssignment,
  mappedRecords,
  unresolvedRecords,
}
writeFileSync(join(rootDir, sourcePath), `${JSON.stringify(source, null, 2)}\n`, 'utf8')

for (const [packageId, count] of [...counts].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))) {
  console.log(`${packageId}: ${count.toLocaleString()} records`)
}
