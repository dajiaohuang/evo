import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { rootDir } from './data-lib.mjs'

const dataRoot = join(rootDir, 'dist/data')
const pagesRoot = join(rootDir, 'dist')
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
if (!existsSync(join(dataRoot, 'releases.json'))) failures.push('release retention index is missing')
else {
  const history = readJson('releases.json')
  if (history.retentionLimit < 2 || history.releases?.[0]?.datasetVersion !== current.datasetVersion) failures.push('release retention index does not lead with the current dataset')
  if (!Number.isFinite(history.retentionByteLimit) || history.retainedBytes > history.retentionByteLimit) failures.push('release retention byte budget is missing or exceeded')
  for (const release of history.releases ?? []) {
    if (!existsSync(join(dataRoot, release.filesIndex))) failures.push(`retained release ${release.datasetVersion}: files index is missing`)
    else {
      const index = readJson(release.filesIndex)
      const sample = index.files?.[0]
      if (!sample) failures.push(`retained release ${release.datasetVersion}: files index is empty`)
      else checkFile(sample, `retained release ${release.datasetVersion} sample`)
    }
  }
  if (history.releases?.length > 1) {
    const previous = history.releases[1]
    const previousIndex = readJson(previous.filesIndex)
    if (previousIndex.datasetVersion !== previous.datasetVersion) failures.push('previous release files index has a mismatched dataset version')
  }
}
const releaseUrl = (file, label) => {
  if (!file?.url?.startsWith(current.releaseBase)) failures.push(`${label}: URL is outside current release ${current.releaseBase}`)
}
for (const [name, file] of Object.entries(current.core)) {
  releaseUrl(file, `core ${name}`)
  checkFile(file, `core ${name}`)
  if (file.url?.endsWith('.json.gz')) {
    try { readGzipJson(file.url) } catch (error) { failures.push(`core ${name}: cannot parse gzip JSON (${error.message})`) }
  }
}

const packageRegistry = readGzipJson(current.packages.registry.url)
if (packageRegistry.packages.length !== current.packages.count) failures.push('package count mismatch')
for (const packageEntry of packageRegistry.packages) {
  const manifestFile = current.packages.manifests[packageEntry.id]
  releaseUrl(manifestFile, `package ${packageEntry.id} manifest`)
  checkFile(manifestFile, `package ${packageEntry.id} manifest`)
  if (!manifestFile?.url || !existsSync(join(dataRoot, manifestFile.url))) {
    failures.push(`package ${packageEntry.id}: manifest missing`)
    continue
  }
  const manifest = readJson(manifestFile.url)
  if (manifest.version !== current.datasetVersion) failures.push(`package ${packageEntry.id}: dataset version mismatch`)
  for (const [name, file] of Object.entries(manifest.files)) {
    releaseUrl(file, `package ${packageEntry.id}/${name}`)
    checkFile(file, `package ${packageEntry.id}/${name}`)
    try { readGzipJson(file.url) } catch (error) { failures.push(`package ${packageEntry.id}/${name}: cannot parse gzip JSON (${error.message})`) }
  }
  for (const shard of manifest.occurrences) {
    releaseUrl(shard, `package ${packageEntry.id} occurrence`)
    checkFile(shard, `package ${packageEntry.id} occurrence`)
  }
  const download = current.downloads.template.replace('{packageId}', packageEntry.id)
  if (!existsSync(join(dataRoot, download))) failures.push(`package ${packageEntry.id}: download missing`)
}

releaseUrl(current.occurrences.manifest, 'occurrence manifest')
checkFile(current.occurrences.manifest, 'occurrence manifest')
const occurrences = readJson(current.occurrences.manifest.url)
let occurrenceCount = 0
for (const shards of Object.values(occurrences.packages)) {
  for (const shard of shards) {
    releaseUrl(shard, `occurrence ${shard.packageId}/${shard.period}`)
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

const staticManifestPath = join(pagesRoot, 'static-pages-manifest.json')
if (!existsSync(staticManifestPath)) failures.push('static knowledge-page manifest is missing')
else {
  const staticManifest = JSON.parse(readFileSync(staticManifestPath, 'utf8'))
  if (staticManifest.datasetVersion !== current.datasetVersion) failures.push('static knowledge pages use a stale dataset version')
  if (staticManifest.pages?.taxa < 2 || staticManifest.pages?.events < 2 || staticManifest.pages?.stories < 2) failures.push('bilingual static knowledge-page coverage is incomplete')
}
for (const relativePath of ['sitemap.xml', 'robots.txt', 'feed.xml', '404.html', 'taxa/perissodactyla/index.html', 'zh/taxa/perissodactyla/index.html', 'events/perissodactyl-radiation/index.html', 'stories/rise-and-fall-perissodactyls/index.html', 'methods/index.html', `datasets/${current.datasetVersion}/index.html`]) {
  if (!existsSync(join(pagesRoot, relativePath))) failures.push(`static page artifact is missing: ${relativePath}`)
}
const flagshipStaticPath = join(pagesRoot, 'taxa/perissodactyla/index.html')
if (existsSync(flagshipStaticPath)) {
  const html = readFileSync(flagshipStaticPath, 'utf8')
  for (const marker of ['rel="canonical"', 'application/ld+json', 'No human scientific review', 'Report an evidence issue', '/evo/#/explore?profile=perissodactyla']) {
    if (!html.includes(marker)) failures.push(`flagship static page is missing ${marker}`)
  }
}
const scaffoldStaticPath = join(pagesRoot, 'taxa/dinosauria/index.html')
if (existsSync(scaffoldStaticPath) && !readFileSync(scaffoldStaticPath, 'utf8').includes('name="robots" content="noindex,follow"')) failures.push('generated scaffold static pages must be noindex')

releaseUrl(current.maps.manifest, 'map manifest')
checkFile(current.maps.manifest, 'map manifest')
const maps = readJson(current.maps.manifest.url)
for (const snapshot of maps.snapshots) if (snapshot.status === 'available' && snapshot.geometry === 'withheld-pending-provenance') failures.push(`${snapshot.period}: available map is withheld`)

if (failures.length) {
  console.error(`Pages smoke failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Pages smoke passed: ${packageRegistry.packages.length} packages and ${occurrenceCount.toLocaleString()} occurrence records are statically reachable.`)
}
