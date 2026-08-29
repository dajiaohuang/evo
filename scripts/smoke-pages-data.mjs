import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { rootDir } from './data-lib.mjs'

const dataRoot = join(rootDir, 'dist/data')
const pagesRoot = join(rootDir, 'dist')
const sourceTimeScale = JSON.parse(readFileSync(join(rootDir, 'data/time-scale.json'), 'utf8'))
const sourceManifest = JSON.parse(readFileSync(join(rootDir, 'data/manifest.json'), 'utf8'))
const namedObjectSlug = (value) => `${String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${createHash('sha256').update(value, 'utf8').digest('hex').slice(0, 8)}`
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
  if (!['not-reviewed', 'in-review', 'reviewed-with-caveats', 'reviewed'].includes(manifest.reviewStatus)) failures.push(`package ${packageEntry.id}: invalid maintainer review status`)
  if (!['not-reviewed', 'in-review', 'reviewed-with-caveats', 'reviewed', 'stale'].includes(manifest.effectiveReviewStatus)) failures.push(`package ${packageEntry.id}: invalid effective review status`)
  if (['reviewed-with-caveats', 'reviewed'].includes(manifest.reviewStatus) && manifest.effectiveReviewStatus === 'stale') failures.push(`package ${packageEntry.id}: completed maintainer review is stale`)
  if (typeof manifest.chatgptAssisted !== 'boolean') failures.push(`package ${packageEntry.id}: ChatGPT assistance disclosure is missing`)
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
  if (staticManifest.schemaVersion !== 3) failures.push('static knowledge-page manifest schema is stale')
  if (staticManifest.datasetVersion !== current.datasetVersion) failures.push('static knowledge pages use a stale dataset version')
  const pages = staticManifest.pages ?? {}
  if (pages.taxa < 2 || pages.events < 2 || pages.stories < 2 || pages.intervals !== sourceTimeScale.units.length * 2 || pages.formations !== sourceManifest.records.formationNames * 2 || pages.localities !== sourceManifest.records.fossilCollections * 2 || pages.traits !== sourceManifest.records.traitTerms * 2 || pages.references < 2 || pages.media !== sourceManifest.records.mediaAssets * 2 || pages.collectionIndexes !== 20) failures.push('bilingual static knowledge-page coverage is incomplete')
}
for (const relativePath of ['sitemap.xml', 'robots.txt', 'feed.xml', '404.html', 'taxa/index.html', 'taxa/perissodactyla/index.html', 'zh/taxa/perissodactyla/index.html', 'events/index.html', 'events/perissodactyl-radiation/index.html', 'events/dapingian-cryptospores/index.html', 'stories/index.html', 'stories/rise-and-fall-perissodactyls/index.html', 'stories/early-land-plant-evidence-trail/index.html', 'intervals/index.html', 'intervals/cretaceous/index.html', 'intervals/upper-cretaceous/index.html', 'intervals/maastrichtian/index.html', 'zh/intervals/maastrichtian/index.html', 'formations/index.html', `formations/${namedObjectSlug('Lincoln Creek')}/index.html`, 'localities/index.html', 'localities/col-4869/index.html', 'traits/index.html', `traits/${namedObjectSlug('Mesaxonic foot')}/index.html`, 'references/index.html', 'references/ics-2026-06/index.html', 'media/index.html', 'media/amnh-perissodactyl-overview/index.html', 'datasets/index.html', 'methods/index.html', `datasets/${current.datasetVersion}/index.html`]) {
  if (!existsSync(join(pagesRoot, relativePath))) failures.push(`static page artifact is missing: ${relativePath}`)
}
const flagshipStaticPath = join(pagesRoot, 'taxa/perissodactyla/index.html')
if (existsSync(flagshipStaticPath)) {
  const html = readFileSync(flagshipStaticPath, 'utf8')
  for (const marker of ['rel="canonical"', 'application/ld+json', 'Maintainer review in progress', 'External expert review not performed', 'Report an evidence issue', '/evo/#/explore?profile=perissodactyla']) {
    if (!html.includes(marker)) failures.push(`flagship static page is missing ${marker}`)
  }
}
const scaffoldStaticPath = join(pagesRoot, 'taxa/dinosauria/index.html')
if (existsSync(scaffoldStaticPath) && !readFileSync(scaffoldStaticPath, 'utf8').includes('name="robots" content="noindex,follow"')) failures.push('generated scaffold static pages must be noindex')

const localizedStaticChecks = [
  { path: 'zh/events/tiaojishan-ginkgoxylon/index.html', markers: ['天义山组银杏样化石木材', '一件经解剖诊断'] },
  { path: 'zh/stories/gymnosperm-evidence-boundaries/index.html', markers: ['裸子植物深时研究的六条证据边界', '一件侏罗纪木材标本'] },
  { path: 'zh/stories/rise-and-fall-perissodactyls/index.html', markers: ['从始新世的优势类群', '始新世的迅速登场'] },
  { path: 'zh/events/dapingian-cryptospores/index.html', markers: ['大坪期隐孢子组合', '阿根廷西北部 Zanjón 组'] },
  { path: 'zh/stories/early-land-plant-evidence-trail/index.html', markers: ['早期陆生植物证据如何改变形态', '冠群模型时间区间'] },
  { path: `zh/formations/${namedObjectSlug('Lincoln Creek')}/index.html`, markers: ['此静态摘要没有可用的参考文献记录。'] },
  { path: 'zh/intervals/aquitanian/index.html', markers: ['eag 与 lag 是下列版本化边界记录的显示投影', '23.03 Ma'] },
  { path: `zh/traits/${namedObjectSlug('Mesaxonic foot')}/index.html`, markers: ['中轴型足'] },
  { path: 'zh/media/amnh-perissodactyl-overview/index.html', markers: ['未核实可复用内容许可', '仅提供外部链接'] },
  { path: `zh/datasets/${current.datasetVersion}/index.html`, markers: ['本版本是以植物、部分无脊椎动物类群和脊椎动物为中心的教育性导航子集'] },
]
for (const check of localizedStaticChecks) {
  const target = join(pagesRoot, check.path)
  if (!existsSync(target)) {
    failures.push(`localized static page artifact is missing: ${check.path}`)
    continue
  }
  const html = readFileSync(target, 'utf8')
  for (const marker of check.markers) if (!html.includes(marker)) failures.push(`${check.path} is missing localized marker: ${marker}`)
}

releaseUrl(current.maps.manifest, 'map manifest')
checkFile(current.maps.manifest, 'map manifest')
const maps = readJson(current.maps.manifest.url)
const mapLayerIds = ['coastlines', 'platePolygons', 'plateBoundaries', 'continentalPolygons', 'continentOceanBoundaries', 'staticPolygons']
if (maps.schemaVersion >= 6) {
  if (!Number.isFinite(maps.ageRangeMa?.youngest) || !Number.isFinite(maps.ageRangeMa?.oldest) || maps.ageRangeMa.youngest >= maps.ageRangeMa.oldest) {
    failures.push('layer-first map manifest has an invalid supported age range')
  }
  if (maps.selectionPolicy?.method !== 'nearest' || maps.selectionPolicy?.tieBreak !== 'younger' || maps.selectionPolicy?.outsideRange !== 'unavailable') {
    failures.push('layer-first map manifest has an invalid frame-selection policy')
  }
  for (const layerId of mapLayerIds) {
    const layer = maps.layers?.[layerId]
    if (!layer?.role || !layer.cadenceBands?.length || !layer.frames?.length) {
      failures.push(`layer-first map manifest has no published frames for ${layerId}`)
      continue
    }
    let previousAgeMa = Number.NEGATIVE_INFINITY
    for (const frame of layer.frames) {
      const label = `${layerId} ${frame.ageMa} Ma map frame`
      if (!Number.isFinite(frame.ageMa) || frame.ageMa <= previousAgeMa) failures.push(`${label}: frame ages are not unique and sorted`)
      previousAgeMa = frame.ageMa
      if (!Number.isInteger(frame.featureCount) || frame.featureCount < 0) failures.push(`${label}: feature count is invalid`)
      releaseUrl(frame, label)
      checkFile(frame, label)
      if (frame.url && existsSync(join(dataRoot, frame.url)) && !frame.url.endsWith('.json.gz')) failures.push(`${label}: canonical frame is not gzip JSON`)
      else if (frame.url && existsSync(join(dataRoot, frame.url))) {
        try { readGzipJson(frame.url) } catch (error) { failures.push(`${label}: cannot parse gzip JSON (${error.message})`) }
      }
    }
  }
}
for (const snapshot of maps.snapshots) {
  if (snapshot.status !== 'available') continue
  for (const layerId of mapLayerIds) {
    const layer = snapshot.layers?.[layerId]
    if (!layer?.url || !layer?.sha256) {
      failures.push(`${snapshot.period}: available map has no checksum-addressed ${layerId} layer`)
      continue
    }
    releaseUrl(layer, `${snapshot.period} ${layerId} map layer`)
    checkFile(layer, `${snapshot.period} ${layerId} map layer`)
  }
}

releaseUrl(current.catalogue.manifest, 'Catalogue of Life manifest')
checkFile(current.catalogue.manifest, 'Catalogue of Life manifest')
const catalogue = readJson(current.catalogue.manifest.url)
if (catalogue.releaseAlias !== 'COL26.8' || catalogue.checklistBankDatasetKey !== 316115) failures.push('Catalogue of Life runtime is not pinned to COL26.8 / 316115')
if (catalogue.counts.acceptedSpecies !== 2183133 || current.catalogue.acceptedSpecies !== 2183133) failures.push('Catalogue of Life accepted-species count is stale')
if (catalogue.search.files.length < 400 || catalogue.search.largestShardBytes > 8 * 1024 * 1024) failures.push('Catalogue of Life search sharding is incomplete or oversized')
for (const file of catalogue.search.files) {
  releaseUrl(file, `Catalogue of Life ${file.prefix}`)
  checkFile(file, `Catalogue of Life ${file.prefix}`)
}
if (catalogue.acceptedTargets.records !== catalogue.acceptedTargets.uniqueReferencedIds || catalogue.acceptedTargets.unresolvedIds !== 0) failures.push('Catalogue of Life resolving-name targets are incomplete')
for (const file of catalogue.acceptedTargets.files) {
  releaseUrl(file, `Catalogue of Life accepted target ${file.prefix}`)
  checkFile(file, `Catalogue of Life accepted target ${file.prefix}`)
}
if (catalogue.hierarchy.counts.acceptedSpeciesEdges !== catalogue.counts.acceptedSpecies) failures.push('Catalogue of Life hierarchy does not cover every accepted species parent edge')
if (catalogue.hierarchy.counts.directChildEdges < catalogue.hierarchy.counts.acceptedSpeciesEdges
  || catalogue.hierarchy.counts.acceptedSpeciesNodes !== catalogue.counts.acceptedSpecies
  || catalogue.hierarchy.counts.nodes !== catalogue.hierarchy.counts.acceptedSpeciesNodes + catalogue.hierarchy.counts.higherTaxonNodes) failures.push('Catalogue of Life exact-ID hierarchy is incomplete')
for (const file of [...catalogue.hierarchy.nodes.files, ...catalogue.hierarchy.children.files]) {
  releaseUrl(file, `Catalogue of Life hierarchy ${file.prefix}`)
  checkFile(file, `Catalogue of Life hierarchy ${file.prefix}`)
}
const hierarchyNodeFilesByUrl = new Map(catalogue.hierarchy.nodes.files.map((file) => [file.url, file]))
const homoNodeFiles = (catalogue.hierarchy.nodes.routes['64'] ?? []).map((url) => hierarchyNodeFilesByUrl.get(url)).filter(Boolean)
const homoNode = homoNodeFiles.flatMap((file) => gunzipSync(readFileSync(join(dataRoot, file.url))).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))).find((record) => record.id === '6MB3T')
if (!homoNode || homoNode.parentId !== '636X2' || homoNode.rank !== 'species') failures.push('Catalogue of Life exact-ID hierarchy cannot restore Homo sapiens from a deep link')
releaseUrl(catalogue.sourceChecklists, 'Catalogue of Life source checklists')
checkFile(catalogue.sourceChecklists, 'Catalogue of Life source checklists')

if (failures.length) {
  console.error(`Pages smoke failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Pages smoke passed: ${packageRegistry.packages.length} packages and ${occurrenceCount.toLocaleString()} occurrence records are statically reachable.`)
}
