import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { rootDir } from './data-lib.mjs'

const dataRoot = join(rootDir, 'dist/data')
const failures = []
const readJson = (relativePath) => JSON.parse(readFileSync(join(dataRoot, relativePath), 'utf8'))
const readGzipJson = (relativePath) => JSON.parse(gunzipSync(readFileSync(join(dataRoot, relativePath))).toString('utf8'))
const checksum = (relativePath) => createHash('sha256').update(readFileSync(join(dataRoot, relativePath))).digest('hex')
const checkFile = (file, label) => {
  if (!file?.url || !existsSync(join(dataRoot, file.url))) failures.push(`${label}: missing ${file?.url ?? 'URL'}`)
  else if (file.sha256 && checksum(file.url) !== file.sha256) failures.push(`${label}: checksum mismatch for ${file.url}`)
}

if (!existsSync(join(dataRoot, 'current.json'))) {
  console.error('Pages smoke failed: dist/data/current.json is missing.')
  process.exit(1)
}

const current = readJson('current.json')
for (const [name, file] of Object.entries(current.core)) {
  checkFile(file, `core ${name}`)
  if (file.url?.endsWith('.json.gz')) {
    try { readGzipJson(file.url) } catch (error) { failures.push(`core ${name}: cannot parse gzip JSON (${error.message})`) }
  }
}

const packageRegistry = readGzipJson(current.packages.registry.url)
if (packageRegistry.packages.length !== current.packages.count) failures.push('package count mismatch')
for (const packageEntry of packageRegistry.packages) {
  const manifestPath = current.packages.manifestTemplate.replace('{packageId}', packageEntry.id)
  if (!existsSync(join(dataRoot, manifestPath))) {
    failures.push(`package ${packageEntry.id}: manifest missing`)
    continue
  }
  const manifest = readJson(manifestPath)
  for (const [name, file] of Object.entries(manifest.files)) {
    checkFile(file, `package ${packageEntry.id}/${name}`)
    try { readGzipJson(file.url) } catch (error) { failures.push(`package ${packageEntry.id}/${name}: cannot parse gzip JSON (${error.message})`) }
  }
  for (const shard of manifest.occurrences) checkFile(shard, `package ${packageEntry.id} occurrence`)
  const download = current.downloads.template.replace('{packageId}', packageEntry.id)
  if (!existsSync(join(dataRoot, download))) failures.push(`package ${packageEntry.id}: download missing`)
}

const occurrences = readJson(current.occurrences.manifest.url)
let occurrenceCount = 0
for (const shards of Object.values(occurrences.packages)) {
  for (const shard of shards) {
    checkFile(shard, `occurrence ${shard.packageId}/${shard.period}`)
    try {
      const records = readGzipJson(shard.url)
      occurrenceCount += records.length
      if (records.length !== shard.records) failures.push(`${shard.url}: record count mismatch`)
    } catch (error) {
      failures.push(`${shard.url}: cannot parse gzip JSON (${error.message})`)
    }
  }
}
if (occurrenceCount !== occurrences.totalRecords || occurrenceCount !== current.occurrences.totalRecords) failures.push(`occurrence total is ${occurrenceCount}; manifests disagree`)

const maps = readJson(current.maps.manifest.url)
for (const snapshot of maps.snapshots) if (snapshot.status === 'available' && snapshot.geometry === 'withheld-pending-provenance') failures.push(`${snapshot.period}: available map is withheld`)

if (failures.length) {
  console.error(`Pages smoke failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Pages smoke passed: ${packageRegistry.packages.length} packages and ${occurrenceCount.toLocaleString()} occurrence records are statically reachable.`)
}
