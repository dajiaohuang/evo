import { createHash } from 'node:crypto'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { rootDir } from './data-lib.mjs'

const dataRoot = join(rootDir, 'dist/data')
const pagesRoot = join(rootDir, 'dist')
const sourceTimeScale = JSON.parse(readFileSync(join(rootDir, 'data/time-scale.json'), 'utf8'))
const sourceManifest = JSON.parse(readFileSync(join(rootDir, 'data/manifest.json'), 'utf8'))
const sourceMedia = JSON.parse(readFileSync(join(rootDir, 'data/media.json'), 'utf8'))
const namedObjectSlug = (value) => `${String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${createHash('sha256').update(value, 'utf8').digest('hex').slice(0, 8)}`
const failures = []
const readJson = (relativePath) => JSON.parse(readFileSync(join(dataRoot, relativePath), 'utf8'))
const readGzipJson = (relativePath) => JSON.parse(gunzipSync(readFileSync(join(dataRoot, relativePath))).toString('utf8'))
const checksum = (relativePath) => createHash('sha256').update(readFileSync(join(dataRoot, relativePath))).digest('hex')
const checkFile = (file, label) => {
  if (!file?.url || !existsSync(join(dataRoot, file.url))) failures.push(`${label}: missing ${file?.url ?? 'URL'}`)
  else if (file.sha256 && checksum(file.url) !== file.sha256) failures.push(`${label}: checksum mismatch for ${file.url}`)
}
const checkItisSummaryOnlyCollection = (packageId, collections, expected) => {
  const collection = collections.find((candidate) => candidate.id === expected.id)
  if (!collection || collection.provider !== 'Integrated Taxonomic Information System'
    || collection.recordType !== 'release-pinned-exact-nomenclatural-crosswalk'
    || collection.source?.license !== 'CC0-1.0'
    || collection.counts?.total !== expected.total
    || collection.counts?.accepted !== expected.accepted
    || collection.counts?.synonymCurrentNameRedirect !== expected.redirects
    || collection.counts?.ambiguous !== expected.ambiguous
    || collection.counts?.unmatched !== expected.unmatched
    || collection.counts?.itisUpstreamOnly !== expected.upstreamOnly) {
    failures.push(`${packageId}: ${expected.id} ITIS nomenclature summary is incomplete`)
  } else if (collection.delivery?.profile !== 'web-light' || collection.delivery?.completeRows !== false
    || collection.delivery?.publishedFileCount !== 0 || collection.delivery?.canonicalFileCount !== expected.files
    || collection.files?.length !== 0 || collection.upstreamOnlyFiles?.length !== 0
    || collection.canonicalFileInventory?.length !== expected.files
    || collection.canonicalFileInventory.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
    failures.push(`${packageId}: Pages must publish the ${expected.id} ITIS summary without full row shards`)
  }
}

if (!existsSync(join(dataRoot, 'current.json'))) {
  console.error('Pages smoke failed: dist/data/current.json is missing.')
  process.exit(1)
}

const current = readJson('current.json')
if (current.deliveryProfile !== 'web-light') failures.push('Pages current manifest must use the web-light delivery profile')
const currentReleaseFiles = readJson(`${current.releaseBase}release-files.json`)
const currentReleaseUrls = new Set(currentReleaseFiles.files.map((file) => file.url))
if (current.downloads?.available !== false || current.downloads?.template) failures.push('Pages-light current manifest must disable package ZIP downloads')
if (currentReleaseFiles.files.some((file) => file.url.includes('/downloads/'))) failures.push('Pages-light release inventory unexpectedly contains duplicate package ZIPs')
if (!existsSync(join(dataRoot, 'releases.json'))) failures.push('release retention index is missing')
else {
  const history = readJson('releases.json')
  if (history.retentionLimit !== 1 || history.releases?.length !== 1 || history.releases[0]?.datasetVersion !== current.datasetVersion) failures.push('release index must contain only the current dataset')
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
let researchExampleCount = 0
let researchClaimLinkCount = 0
let researchExampleAvailableCount = 0
let packagePhylogenyCount = 0
let wfoRichRecords = 0
let wfoRichShards = 0
let wfoRichBytes = 0
let mammalItisCanonicalFiles = 0
let mammalItisRecords = 0
let mammalItisUpstreamOnly = 0
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
  if (manifest.files.phylogeny) packagePhylogenyCount += 1
  for (const [name, file] of Object.entries(manifest.files)) {
    releaseUrl(file, `package ${packageEntry.id}/${name}`)
    checkFile(file, `package ${packageEntry.id}/${name}`)
    try { readGzipJson(file.url) } catch (error) { failures.push(`package ${packageEntry.id}/${name}: cannot parse gzip JSON (${error.message})`) }
    if (!currentReleaseUrls.has(file.url)) failures.push(`package ${packageEntry.id}/${name}: missing from current release inventory`)
  }
  const researchFile = manifest.files.researchExamples
  if (!researchFile) failures.push(`package ${packageEntry.id}: research examples are missing`)
  else {
    const researchExamples = readGzipJson(researchFile.url)
    const claimLinkCount = researchExamples.examples?.reduce((sum, example) => sum + example.claimIds.length, 0) ?? 0
    researchExampleCount += researchExamples.examples?.length ?? 0
    researchClaimLinkCount += claimLinkCount
    researchExampleAvailableCount += researchExamples.examples?.filter((example) => example.evidenceStatus === 'available-with-limitations').length ?? 0
    if (researchExamples.schemaVersion !== 1 || researchExamples.packageId !== packageEntry.id) failures.push(`package ${packageEntry.id}: research examples have mismatched identity`)
    if (manifest.researchExampleCount !== researchExamples.examples?.length || manifest.researchClaimLinkCount !== claimLinkCount) failures.push(`package ${packageEntry.id}: research example counts disagree`)
    for (const example of researchExamples.examples ?? []) {
      if (!example.title?.en || !example.title?.zh || !example.limitations?.length) failures.push(`package ${packageEntry.id}/${example.id}: bilingual title or limitations are missing`)
      if (!/^#\/(explore|compare)\?/.test(example.route)) failures.push(`package ${packageEntry.id}/${example.id}: research route is not usable`)
    }
  }
  for (const shard of manifest.occurrences) {
    releaseUrl(shard, `package ${packageEntry.id} occurrence`)
    checkFile(shard, `package ${packageEntry.id} occurrence`)
  }
  const nomenclatureCollections = manifest.nomenclatureCollections ?? []
  for (const collection of nomenclatureCollections.filter((item) => item.recordType === 'release-pinned-authority-archive-crosswalk')) {
    if (collection.delivery?.profile !== 'web-light' || collection.delivery?.completeRows !== false
      || collection.files?.length !== 0 || collection.upstreamOnlyFiles?.length !== 0
      || collection.delivery?.publishedFileCount !== 0
      || collection.canonicalFileInventory?.length !== collection.delivery?.canonicalFileCount) {
      failures.push(`${packageEntry.id}: archive authority must remain summary-only on Pages`)
    }
  }
  let wormsCollection = null
  if (packageEntry.id === 'echinoderms') {
    wormsCollection = nomenclatureCollections.find((collection) => collection.id === 'worms-aphiaid-crosswalk')
    if (nomenclatureCollections.length !== 2 || !wormsCollection || wormsCollection.provider !== 'WoRMS'
      || wormsCollection.recordType !== 'external-name-identifier-crosswalk'
      || wormsCollection.snapshotBoundary !== 'date-pinned-continuously-updated-service'
      || wormsCollection.source?.license !== 'CC-BY-4.0'
      || wormsCollection.counts?.total !== 11891 || wormsCollection.counts?.accepted !== 11843
      || wormsCollection.counts?.acceptedNameRedirect !== 2 || wormsCollection.counts?.ambiguous !== 37
      || wormsCollection.counts?.unmatched !== 0 || wormsCollection.counts?.withheld !== 9) {
      failures.push('echinoderms: WoRMS nomenclature collection descriptor is incomplete')
    } else if (wormsCollection.delivery?.profile !== 'web-light' || wormsCollection.delivery?.completeRows !== false
      || wormsCollection.delivery?.publishedFileCount !== 0 || wormsCollection.delivery?.canonicalFileCount !== 1
      || wormsCollection.file || wormsCollection.canonicalFileInventory?.length !== 1
      || wormsCollection.canonicalFileInventory.some((file) => file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
      failures.push('echinoderms: Pages must publish the WoRMS summary without the row-level sidecar')
    }
    checkItisSummaryOnlyCollection('echinoderms', nomenclatureCollections, {
      id: 'itis-echinodermata-tsn-crosswalk', total: 11891, accepted: 3692, redirects: 51, ambiguous: 9, unmatched: 8139, upstreamOnly: 278, files: 3,
    })
  } else if (packageEntry.id === 'molluscs-brachiopods') {
    if (nomenclatureCollections.length !== 2) failures.push('molluscs-brachiopods: expected ITIS and WoRMS nomenclature collections')
    checkItisSummaryOnlyCollection('molluscs-brachiopods', nomenclatureCollections, {
      id: 'itis-mollusca-brachiopoda-tsn-crosswalk', total: 159801, accepted: 7219, redirects: 256, ambiguous: 16, unmatched: 152310, upstreamOnly: 4289, files: 60,
    })
  } else if (packageEntry.id === 'sponges-cnidarians') {
    if (nomenclatureCollections.length !== 3) failures.push('sponges-cnidarians: expected ITIS and two WoRMS nomenclature collections')
    checkItisSummaryOnlyCollection('sponges-cnidarians', nomenclatureCollections, {
      id: 'itis-porifera-cnidaria-tsn-crosswalk', total: 30521, accepted: 4242, redirects: 50, ambiguous: 3, unmatched: 26226, upstreamOnly: 2218, files: 6,
    })
  } else if (packageEntry.id === 'crustaceans-insects') {
    if (nomenclatureCollections.length !== 6) failures.push('crustaceans-insects: expected four ITIS, one WoRMS and one OSF nomenclature collections')
    checkItisSummaryOnlyCollection('crustaceans-insects', nomenclatureCollections, {
      id: 'itis-crustacea-tsn-crosswalk', total: 80890, accepted: 26395, redirects: 115, ambiguous: 38, unmatched: 54342, upstreamOnly: 5991, files: 41,
    })
    checkItisSummaryOnlyCollection('crustaceans-insects', nomenclatureCollections, {
      id: 'itis-insecta-tsn-crosswalk', total: 941223, accepted: 176406, redirects: 2887, ambiguous: 692, unmatched: 761238, upstreamOnly: 27357, files: 100,
    })
    checkItisSummaryOnlyCollection('crustaceans-insects', nomenclatureCollections, {
      id: 'itis-myriapoda-tsn-crosswalk', total: 17351, accepted: 5904, redirects: 58, ambiguous: 17, unmatched: 11372, upstreamOnly: 544, files: 4,
    })
    checkItisSummaryOnlyCollection('crustaceans-insects', nomenclatureCollections, {
      id: 'itis-collembola-protura-tsn-crosswalk', total: 9668, accepted: 2075, redirects: 25, ambiguous: 4, unmatched: 7564, upstreamOnly: 411, files: 3,
    })
    const wormsCrustacea = nomenclatureCollections.find((collection) => collection.id === 'worms-crustacea-archive-crosswalk')
    if (!wormsCrustacea || wormsCrustacea.provider !== 'World Register of Marine Species via ChecklistBank'
      || wormsCrustacea.source?.license !== 'CC-BY-4.0' || wormsCrustacea.counts?.total !== 80890
      || wormsCrustacea.counts?.upstreamOnly !== 8675 || wormsCrustacea.delivery?.profile !== 'web-light'
      || wormsCrustacea.delivery.completeRows !== false || wormsCrustacea.files?.length !== 0
      || wormsCrustacea.upstreamOnlyFiles?.length !== 0 || wormsCrustacea.delivery.canonicalFileCount !== 33
      || wormsCrustacea.canonicalFileInventory?.length !== 33) {
      failures.push('crustaceans-insects: WoRMS Crustacea must preserve its complete inventory while omitting row shards on Pages')
    }
  } else if (packageEntry.id === 'trilobites-chelicerates') {
    if (nomenclatureCollections.length !== 1) failures.push('trilobites-chelicerates: expected one ITIS nomenclature collection')
    checkItisSummaryOnlyCollection('trilobites-chelicerates', nomenclatureCollections, {
      id: 'itis-chelicerata-tsn-crosswalk', total: 99511, accepted: 74948, redirects: 146, ambiguous: 141, unmatched: 24276, upstreamOnly: 5714, files: 17,
    })
  } else if (packageEntry.id === 'turtles-lepidosaurs') {
    const itis = nomenclatureCollections.find((collection) => collection.id === 'itis-reptilia-tsn-crosswalk')
    if (nomenclatureCollections.length !== 1) failures.push('turtles-lepidosaurs: expected one ITIS nomenclature collection')
    checkItisSummaryOnlyCollection('turtles-lepidosaurs', nomenclatureCollections, {
      id: 'itis-reptilia-tsn-crosswalk', total: 12622, accepted: 9805, redirects: 70, ambiguous: 3, unmatched: 2744, upstreamOnly: 655, files: 10,
    })
    if (!itis?.evidenceBoundary?.en.includes('Aves are deliberately excluded')) failures.push('turtles-lepidosaurs: ITIS boundary must explicitly exclude Aves')
  } else if (['angiospermae', 'gymnosperms', 'early-land-plants'].includes(packageEntry.id)) {
    const wfo = nomenclatureCollections.find((collection) => collection.id === 'wfo-plant-list-crosswalk')
    if (nomenclatureCollections.length !== 1 || !wfo || wfo.provider !== 'World Flora Online Plant List'
      || wfo.recordType !== 'release-pinned-exact-plant-name-crosswalk' || wfo.source?.license !== 'CC0-1.0') {
      failures.push(`${packageEntry.id}: WFO nomenclature collection descriptor is incomplete`)
    } else {
      let records = 0
      const statuses = { accepted: 0, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0 }
      for (const file of wfo.files) {
        releaseUrl(file, `${packageEntry.id} WFO nomenclature shard`)
        checkFile(file, `${packageEntry.id} WFO nomenclature shard`)
        if (!currentReleaseUrls.has(file.url)) failures.push(`${packageEntry.id}: WFO shard is absent from the current release inventory`)
        const compressed = readFileSync(join(dataRoot, file.url))
        const source = gunzipSync(compressed)
        if (compressed.byteLength !== file.bytes || statSync(join(dataRoot, file.url)).size !== file.bytes) {
          failures.push(`${packageEntry.id}: WFO shard byte count disagrees with its descriptor`)
        }
        const rows = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
        if (rows.length !== file.records || createHash('sha256').update(source).digest('hex') !== file.sourceSha256) {
          failures.push(`${packageEntry.id}: WFO shard count or source SHA-256 mismatch`)
        }
        for (const row of rows) {
          if (!row.colId || row.packageId !== packageEntry.id || !(row.status in statuses)) failures.push(`${packageEntry.id}: invalid WFO COL partition record`)
          else statuses[row.status] += 1
        }
        records += rows.length
        wfoRichShards += 1
        wfoRichBytes += compressed.byteLength
      }
      if (records !== wfo.counts.total || Object.entries(statuses).some(([key, count]) => count !== wfo.counts[key])) {
        failures.push(`${packageEntry.id}: WFO status counts disagree with its descriptor`)
      }
      wfoRichRecords += records
    }
  } else if (packageEntry.id === 'amphibia') {
    const itis = nomenclatureCollections.find((collection) => collection.id === 'itis-2026-08-26-tsn-crosswalk')
    if (nomenclatureCollections.length !== 1 || !itis || itis.provider !== 'Integrated Taxonomic Information System'
      || itis.recordType !== 'release-pinned-exact-nomenclatural-crosswalk'
      || itis.source?.license !== 'CC0-1.0'
      || itis.counts?.total !== 8923 || itis.counts?.accepted !== 8909
      || itis.counts?.ambiguous !== 14 || itis.counts?.unmatched !== 0
      || itis.counts?.itisUpstreamOnly !== 8) {
      failures.push('amphibia: ITIS nomenclature summary is incomplete')
    } else if (itis.delivery?.profile !== 'web-light' || itis.delivery?.completeRows !== false
      || itis.delivery?.publishedFileCount !== 0 || itis.delivery?.canonicalFileCount !== 8
      || itis.files?.length !== 0 || itis.upstreamOnlyFiles?.length !== 0
      || itis.canonicalFileInventory?.length !== 8
      || itis.canonicalFileInventory.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
      failures.push('amphibia: Pages must publish the ITIS summary without full row shards')
    }
  } else if (['perissodactyla', 'cetartiodactyla', 'primates', 'carnivora', 'other-mammals'].includes(packageEntry.id)) {
    const expected = {
      perissodactyla: { id: 'itis-perissodactyla-tsn-crosswalk', total: 19, accepted: 19, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, files: 1 },
      cetartiodactyla: { id: 'itis-cetartiodactyla-tsn-crosswalk', total: 503, accepted: 502, redirects: 0, ambiguous: 1, unmatched: 0, upstreamOnly: 0, files: 1 },
      primates: { id: 'itis-primates-tsn-crosswalk', total: 530, accepted: 530, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, files: 1 },
      carnivora: { id: 'itis-carnivora-tsn-crosswalk', total: 310, accepted: 310, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, files: 1 },
      'other-mammals': { id: 'itis-other-mammals-tsn-crosswalk', total: 5099, accepted: 5099, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 3, files: 5 },
    }[packageEntry.id]
    if (nomenclatureCollections.length !== 1) failures.push(`${packageEntry.id}: expected one ITIS nomenclature collection`)
    checkItisSummaryOnlyCollection(packageEntry.id, nomenclatureCollections, expected)
    const collection = nomenclatureCollections.find((candidate) => candidate.id === expected.id)
    if (collection) {
      mammalItisCanonicalFiles += collection.canonicalFileInventory?.length ?? 0
      mammalItisRecords += collection.counts?.total ?? 0
      mammalItisUpstreamOnly += collection.counts?.itisUpstreamOnly ?? 0
    }
  } else if (['actinopterygii', 'chondrichthyes', 'early-fishes', 'tetrapod-transition'].includes(packageEntry.id)) {
    const expectedFishCollections = {
      actinopterygii: { id: 'itis-actinopterygii-tsn-crosswalk', total: 35928, accepted: 24266, redirects: 356, ambiguous: 14, unmatched: 11292, upstreamOnly: 3732, files: 24 },
      chondrichthyes: { id: 'itis-chondrichthyes-tsn-crosswalk', total: 1359, accepted: 769, redirects: 18, ambiguous: 1, unmatched: 571, upstreamOnly: 183, files: 2 },
      'early-fishes': { id: 'itis-agnatha-myxini-tsn-crosswalk', total: 141, accepted: 92, redirects: 3, ambiguous: 0, unmatched: 46, upstreamOnly: 17, files: 2 },
      'tetrapod-transition': { id: 'itis-sarcopterygii-tsn-crosswalk', total: 8, accepted: 8, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, files: 1 },
    }
    if (nomenclatureCollections.length !== 1) failures.push(`${packageEntry.id}: expected one ITIS nomenclature collection`)
    checkItisSummaryOnlyCollection(packageEntry.id, nomenclatureCollections, expectedFishCollections[packageEntry.id])
  } else if (packageEntry.id === 'crocodylomorphs-birds') {
    const avilist = nomenclatureCollections.find((collection) => collection.id === 'avilist-v2025b-avibase-concepts')
    const itis = nomenclatureCollections.find((collection) => collection.id === 'itis-crocodylia-tsn-crosswalk')
    if (nomenclatureCollections.length !== 2 || !avilist || avilist.provider !== 'AviList Core Team'
      || avilist.recordType !== 'release-pinned-exact-avian-authority-crosswalk'
      || avilist.source?.license !== 'CC-BY-4.0'
      || avilist.counts?.packageAcceptedSpecies !== 11071
      || avilist.counts?.colAcceptedAves !== 11044
      || avilist.counts?.colAcceptedCrocodylia !== 27
      || avilist.counts?.upstreamOnly !== 609) {
      failures.push('crocodylomorphs-birds: AviList nomenclature summary is incomplete')
    } else if (avilist.delivery?.profile !== 'web-light' || avilist.delivery?.completeRows !== false
      || avilist.delivery?.publishedFileCount !== 0 || avilist.delivery?.canonicalFileCount !== 4
      || avilist.files?.length !== 0 || avilist.upstreamOnlyFiles?.length !== 0
      || avilist.canonicalFileInventory?.length !== 4
      || avilist.canonicalFileInventory.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
      failures.push('crocodylomorphs-birds: Pages must publish the AviList summary without full row shards')
    }
    checkItisSummaryOnlyCollection('crocodylomorphs-birds', nomenclatureCollections, {
      id: 'itis-crocodylia-tsn-crosswalk', total: 27, accepted: 26, redirects: 1, ambiguous: 0, unmatched: 0, upstreamOnly: 0, files: 1,
    })
    if (!itis?.evidenceBoundary?.en.includes('Aves are deliberately excluded')) failures.push('crocodylomorphs-birds: ITIS boundary must explicitly exclude Aves')
  } else if (nomenclatureCollections.length) {
    failures.push(`package ${packageEntry.id}: unexpected nomenclature collection`)
  }
}
if (researchExampleCount !== 312 || researchExampleAvailableCount !== 312 || researchClaimLinkCount !== 513) failures.push(`research scene totals are ${researchExampleCount} examples, ${researchExampleAvailableCount} available-with-limitations and ${researchClaimLinkCount} claim links; expected 312/312/513`)
if (packagePhylogenyCount !== 2) failures.push(`package phylogeny runtime count is ${packagePhylogenyCount}; expected 2 available and 22 unmapped`)
if (wfoRichRecords !== 387988) failures.push(`WFO rich-package collections contain ${wfoRichRecords} records; expected 387,988`)
if (wfoRichShards !== 32 || wfoRichBytes !== 15584333) failures.push(`WFO rich-package collections contain ${wfoRichShards} shards and ${wfoRichBytes} compressed bytes; expected 32/15,584,333`)
if (mammalItisCanonicalFiles !== 9 || mammalItisRecords !== 6461 || mammalItisUpstreamOnly !== 3) {
  failures.push(`Mammalia ITIS Pages summaries contain ${mammalItisRecords} COL records, ${mammalItisCanonicalFiles} canonical row shards, and ${mammalItisUpstreamOnly} upstream-only records; expected 6,461/9/3`)
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
for (const relativePath of ['sitemap.xml', 'robots.txt', 'feed.xml', '404.html', 'taxa/index.html', 'taxa/perissodactyla/index.html', 'zh/taxa/perissodactyla/index.html', 'events/index.html', 'events/perissodactyl-radiation/index.html', 'events/dapingian-cryptospores/index.html', 'stories/index.html', 'stories/rise-and-fall-perissodactyls/index.html', 'stories/early-land-plant-evidence-trail/index.html', 'intervals/index.html', 'intervals/cretaceous/index.html', 'intervals/upper-cretaceous/index.html', 'intervals/maastrichtian/index.html', 'zh/intervals/maastrichtian/index.html', 'formations/index.html', `formations/${namedObjectSlug('Lincoln Creek')}/index.html`, 'localities/index.html', 'localities/col-4869/index.html', 'traits/index.html', `traits/${namedObjectSlug('High-positioned orbits')}/index.html`, 'references/index.html', 'references/ics-2026-06/index.html', 'media/index.html', 'media/amnh-perissodactyl-overview/index.html', 'datasets/index.html', 'methods/index.html', `datasets/${current.datasetVersion}/index.html`]) {
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
if (existsSync(scaffoldStaticPath) && readFileSync(scaffoldStaticPath, 'utf8').includes('name="robots" content="noindex,follow"')) failures.push('structured Dinosauria static pages must be indexable')

const reconstruction = sourceMedia.find((asset) => asset.id === 'asteroxylon-interpretive-reconstruction')
for (const [language, relativePath] of [['en', 'media/asteroxylon-interpretive-reconstruction/index.html'], ['zh', 'zh/media/asteroxylon-interpretive-reconstruction/index.html']]) {
  const target = join(pagesRoot, relativePath)
  if (!existsSync(target)) failures.push(`interpretive reconstruction static page is missing: ${relativePath}`)
  else {
    const html = readFileSync(target, 'utf8')
    const markers = language === 'zh'
      ? [reconstruction?.altTextZh, reconstruction?.interpretiveNoticeZh, reconstruction?.uncertaintyZh]
      : [reconstruction?.altText, reconstruction?.interpretiveNotice, reconstruction?.uncertainty]
    for (const marker of markers) if (!marker || !html.includes(marker)) failures.push(`${relativePath} is missing its paired interpretive notice or uncertainty`)
  }
}

const localizedStaticChecks = [
  { path: 'zh/events/tiaojishan-ginkgoxylon/index.html', markers: ['天义山组银杏样化石木材', '一件经解剖诊断'] },
  { path: 'zh/stories/gymnosperm-evidence-boundaries/index.html', markers: ['裸子植物深时研究的六条证据边界', '一件侏罗纪木材标本'] },
  { path: 'zh/events/crato-cratolirion/index.html', markers: ['Cratolirion 单子叶植物整株化石', '约 115 Ma 克拉图组'] },
  { path: 'zh/stories/angiosperm-evidence-boundaries/index.html', markers: ['被子植物历史的七条证据边界', '一套数据，三组时钟区间'] },
  { path: 'zh/events/elpistostege-digit-bearing-fin/index.html', markers: ['Elpistostege 具指样内骨骼的鳍', '加拿大魁北克 Miguasha 的 Escuminac 组'] },
  { path: 'zh/stories/tetrapods-onto-land/index.html', markers: ['鳍—肢转型的七条证据边界', '八个趾不等于陆地行走'] },
  { path: 'zh/stories/rise-and-fall-perissodactyls/index.html', markers: ['从始新世的优势类群', '始新世的迅速登场'] },
  { path: 'zh/events/dapingian-cryptospores/index.html', markers: ['大坪期隐孢子组合', '阿根廷西北部 Zanjón 组'] },
  { path: 'zh/stories/early-land-plant-evidence-trail/index.html', markers: ['早期陆生植物证据如何改变形态', '冠群模型时间区间'] },
  { path: `zh/formations/${namedObjectSlug('Lincoln Creek')}/index.html`, markers: ['此静态摘要没有可用的参考文献记录。'] },
  { path: 'zh/intervals/aquitanian/index.html', markers: ['eag 与 lag 是下列版本化边界记录的显示投影', '23.03 Ma'] },
  { path: `zh/traits/${namedObjectSlug('High-positioned orbits')}/index.html`, markers: ['高位眼眶'] },
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
if (maps.schemaVersion >= 7) {
  const expectedObservationIds = [
    'paleomagnetic-poles',
    'geochemistry',
    'metamorphic-gradient-orogen',
    'metamorphic-gradient-rift',
    'metamorphic-gradient-subduction-zone',
  ]
  const observations = maps.observations
  if (observations?.ageFilter !== 'inclusive-source-range'
    || observations?.coordinatePolicy !== 'reconstructed-at-record-age-no-raw-fallback'
    || observations?.totalRecords !== 44175
    || observations?.reconstructedRecords !== 41320
    || observations?.rawOnlyRecords !== 2855) {
    failures.push('CAO2024 observation runtime policy or aggregate counts are incomplete')
  }
  let observationRecords = 0
  for (const datasetId of expectedObservationIds) {
    const dataset = observations?.datasets?.[datasetId]
    if (!dataset || dataset.id !== datasetId || !dataset.files?.length) {
      failures.push(`CAO2024 observation dataset is missing: ${datasetId}`)
      continue
    }
    let datasetRecords = 0
    for (const file of dataset.files) {
      const label = `${datasetId} observation shard ${file.bucket}`
      releaseUrl(file, label)
      checkFile(file, label)
      if (!file.url?.endsWith('.json.gz')) failures.push(`${label}: canonical shard is not gzip JSON`)
      else if (existsSync(join(dataRoot, file.url))) {
        try {
          const payload = readGzipJson(file.url)
          if (payload.datasetId !== datasetId || payload.bucket !== file.bucket || payload.records?.length !== file.records) failures.push(`${label}: payload identity or record count is invalid`)
        } catch (error) { failures.push(`${label}: cannot parse gzip JSON (${error.message})`) }
      }
      datasetRecords += file.records ?? 0
    }
    if (datasetRecords !== dataset.records) failures.push(`${datasetId}: runtime shard count does not equal dataset count`)
    observationRecords += datasetRecords
  }
  if (observationRecords !== 44175 || current.maps.observationDatasetCount !== 5 || current.maps.observationRecordCount !== 44175) {
    failures.push('current map summary does not expose all CAO2024 observation records')
  }
}
if (maps.schemaVersion >= 8) {
  const collection = maps.paleotopography
  if (collection?.id !== 'scotese-wright-2018-paleodem-v2'
    || collection?.source?.doi !== '10.5281/zenodo.5460860'
    || collection?.source?.license !== 'CC-BY-4.0'
    || collection?.archive?.redistributed !== false
    || collection?.frames?.length !== 109
    || collection?.delivery?.profile !== 'web-preview'
    || collection?.delivery?.resolutionDegrees !== 0.3
    || collection?.delivery?.gridBytes !== 24847071
    || collection?.totals?.webPreviewGridGzipBytes !== 24847071
    || collection?.visualization?.preGeneratedTiles !== 0) {
    failures.push('palaeotopography Web preview source, license, delivery profile or complete-series boundary is invalid')
  } else {
    const expectedAges = Array.from({ length: 109 }, (_, index) => index * 5)
    if (collection.frames.some((frame, index) => frame.archiveNominalAgeMa !== expectedAges[index])) {
      failures.push('palaeotopography Web preview ages are not the complete ordered 0–540 Ma series')
    }
    let gridBytes = 0
    for (const frame of collection.frames) {
      const label = `palaeotopography ${frame.archiveNominalAgeMa} Ma Web preview grid`
      releaseUrl(frame.grid, label)
      checkFile(frame.grid, label)
      if (frame.grid?.width !== 1201 || frame.grid?.height !== 601 || frame.grid?.cellCount !== 721801
        || frame.grid?.resolutionDegrees !== 0.3
        || frame.grid?.derivation !== 'exact-decimation-every-third-source-row-and-column'
        || frame.sourceFullGrid?.width !== 3601 || frame.sourceFullGrid?.height !== 1801
        || frame.sourceFullGrid?.resolutionDegrees !== 0.1
        || !frame.memberSha256 || !frame.internalDescription) {
        failures.push(`${label}: preview/full-source metadata is invalid`)
        continue
      }
      const decoded = gunzipSync(readFileSync(join(dataRoot, frame.grid.url)))
      if (decoded.byteLength !== frame.grid.sourceBytes
        || createHash('sha256').update(decoded).digest('hex') !== frame.grid.sourceSha256) {
        failures.push(`${label}: decoded checksum mismatch`)
      }
      gridBytes += frame.grid.bytes
    }
    if (gridBytes !== collection.delivery.gridBytes
      || current.maps.paleotopographyFrameCount !== 109
      || current.maps.paleotopographyGridCount !== 109
      || current.maps.paleotopographyGridBytes !== 24847071
      || current.maps.paleotopographyDeliveryProfile !== 'web-preview'
      || current.maps.paleotopographyTileCount !== 0) {
      failures.push('current map summary does not expose the complete lightweight palaeotopography series')
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
const catalogueSources = readJson(catalogue.sourceChecklists.url)
const catalogueSourceIds = new Set(catalogueSources.map((source) => String(source.datasetId)))
const expectedResourcePackIds = ['archaea', 'bacteria', 'fungi', 'other-animals', 'other-plants', 'protists-chromists', 'viruses']
const expectedLpsnExtensions = {
  archaea: {
    counts: { eligible: 790, resolved: 790, withheld: 0 },
    withheldByReason: {},
  },
  bacteria: {
    counts: { acceptedSpecies: 26397, eligible: 21570, resolved: 21570, withheld: 4827 },
    withheldByReason: { sourceDatasetNotLpsn: 4827, missingSourceDatasetId: 0, sourceRecordNotLpsn: 0 },
  },
}
if (catalogue.resourcePacks?.packageCount !== 7
  || catalogue.resourcePacks.acceptedSpeciesCount !== 363160
  || current.catalogue.nomenclaturalResourcePacks !== 7
  || current.catalogue.nomenclaturalResourcePackSpecies !== 363160
  || JSON.stringify(Object.keys(catalogue.resourcePacks.manifests).sort()) !== JSON.stringify(expectedResourcePackIds)) {
  failures.push('Catalogue nomenclatural resource-pack inventory is incomplete')
} else {
  let resourcePackRecords = 0
  let lpsnIdentifierRecords = 0
  let indexFungorumIdentifierRecords = 0
  let wfoSupplementRecords = 0
  for (const packageId of expectedResourcePackIds) {
    const manifestFile = catalogue.resourcePacks.manifests[packageId]
    releaseUrl(manifestFile, `Catalogue resource pack ${packageId}`)
    checkFile(manifestFile, `Catalogue resource pack ${packageId}`)
    const manifest = readJson(manifestFile.url)
    if (manifest.packageId !== packageId || manifest.version !== current.datasetVersion || manifest.packageType !== 'static-nomenclatural-resource-pack') {
      failures.push(`${packageId}: invalid catalogue resource-pack identity`)
      continue
    }
    let packageRecords = 0
    for (const file of manifest.files) {
      releaseUrl(file, `${packageId} nomenclatural shard`)
      checkFile(file, `${packageId} nomenclatural shard`)
      if (file.bytes > 8 * 1024 * 1024) failures.push(`${packageId}: nomenclatural shard exceeds 8 MiB`)
      const records = gunzipSync(readFileSync(join(dataRoot, file.url))).toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
      if (records.length !== file.records) failures.push(`${packageId}: nomenclatural shard count mismatch`)
      for (const record of records) {
        if (record.rank !== 'species' || record.status !== 'accepted' || !record.id || !record.parentId || !record.scientificName) {
          failures.push(`${packageId}: nomenclatural shard contains a non-accepted or incomplete species record`)
          break
        }
        if (record.sourceDatasetId !== null && !catalogueSourceIds.has(String(record.sourceDatasetId))) {
          failures.push(`${packageId}: sourceDatasetId ${record.sourceDatasetId} is absent from the shared sources ledger`)
          break
        }
      }
      packageRecords += records.length
    }
    if (packageRecords !== manifest.acceptedSpeciesCount || packageRecords !== manifestFile.acceptedSpeciesCount) {
      failures.push(`${packageId}: nomenclatural resource-pack total mismatch`)
    }
    const extensions = manifest.extensions ?? []
    const expectedLpsn = expectedLpsnExtensions[packageId]
    const extensionFileCount = extensions.reduce((sum, extension) => sum + (extension.files?.length ?? 0), 0)
    if ((manifestFile.extensionCount ?? 0) !== extensions.length || (manifestFile.extensionFileCount ?? 0) !== extensionFileCount) {
      failures.push(`${packageId}: resource-pack extension collection descriptor mismatch`)
    }
    let lpsnExtension = null
    if (expectedLpsn) {
      lpsnExtension = extensions.find((candidate) => candidate.id === 'lpsn-identifiers')
      if ((packageId === 'bacteria' ? extensions.length !== 2 : extensions.length !== 1) || !lpsnExtension || lpsnExtension.recordType !== 'external-name-identifier-crosswalk' || lpsnExtension.provider !== 'LPSN') {
        failures.push(`${packageId}: pinned LPSN identifier extension identity is incomplete`)
      } else {
        for (const [key, expected] of Object.entries(expectedLpsn.counts)) {
          if (lpsnExtension.counts?.[key] !== expected) failures.push(`${packageId}: LPSN ${key} count is ${lpsnExtension.counts?.[key]}; expected ${expected}`)
        }
        if (lpsnExtension.counts.resolved + lpsnExtension.counts.withheld !== manifest.acceptedSpeciesCount
          || lpsnExtension.counts.resolved > lpsnExtension.counts.eligible
          || lpsnExtension.counts.eligible > manifest.acceptedSpeciesCount) {
          failures.push(`${packageId}: LPSN resolved/withheld eligibility boundary is invalid`)
        }
        const withheldByReason = lpsnExtension.withheldByReason ?? {}
        for (const [reason, expected] of Object.entries(expectedLpsn.withheldByReason)) {
          if (withheldByReason[reason] !== expected) failures.push(`${packageId}: LPSN ${reason} count is ${withheldByReason[reason]}; expected ${expected}`)
        }
        if (Object.values(withheldByReason).reduce((sum, count) => sum + count, 0) !== lpsnExtension.counts.withheld) {
          failures.push(`${packageId}: LPSN withheld-reason counts do not equal the withheld boundary`)
        }

        let extensionRecords = 0
        let extensionCompressedBytes = 0
        let extensionSourceBytes = 0
        const seenColIds = new Set()
        const seenLpsnIds = new Set()
        for (const file of lpsnExtension.files) {
          const label = `${packageId} LPSN identifier shard`
          releaseUrl(file, label)
          checkFile(file, label)
          const compressed = readFileSync(join(dataRoot, file.url))
          const source = gunzipSync(compressed)
          if (compressed.byteLength !== file.bytes || source.byteLength !== file.sourceBytes
            || createHash('sha256').update(source).digest('hex') !== file.sourceSha256) {
            failures.push(`${packageId}: LPSN identifier shard bytes or source SHA-256 mismatch`)
          }
          if (!currentReleaseUrls.has(file.url)) failures.push(`${packageId}: LPSN identifier shard is absent from the current release inventory`)
          const records = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
          if (records.length !== file.records) failures.push(`${packageId}: LPSN identifier shard count mismatch`)
          for (const record of records) {
            if (!record.colId || seenColIds.has(record.colId) || !/^\d+$/.test(record.lpsnId ?? '') || seenLpsnIds.has(record.lpsnId)
              || record.lpsnUrl !== `https://lpsn.dsmz.de/taxon/${record.lpsnId}` || record.mappingBasis !== 'checklistbank-source-record' || record.status !== 'resolved') {
              failures.push(`${packageId}: LPSN identifier shard contains an invalid or duplicate mapping`)
              break
            }
            seenColIds.add(record.colId)
            seenLpsnIds.add(record.lpsnId)
          }
          extensionRecords += records.length
          extensionCompressedBytes += compressed.byteLength
          extensionSourceBytes += source.byteLength
        }
        if (extensionRecords !== lpsnExtension.counts.resolved
          || extensionCompressedBytes !== lpsnExtension.totalCompressedBytes
          || extensionSourceBytes !== lpsnExtension.totalSourceBytes) {
          failures.push(`${packageId}: LPSN identifier files do not match extension totals`)
        }
        lpsnIdentifierRecords += extensionRecords
      }
      if (packageId === 'bacteria') {
        const itis = extensions.find((candidate) => candidate.id === 'itis-bacteria-tsn-crosswalk')
        if (!itis || itis.provider !== 'Integrated Taxonomic Information System'
          || itis.recordType !== 'release-pinned-exact-nomenclatural-crosswalk'
          || itis.source?.license !== 'CC0-1.0' || itis.source?.exportDate !== '2026-08-26' || itis.source?.rootTsn !== '50'
          || itis.counts?.eligible !== 4827 || itis.counts?.nonApplicable !== 21570 || itis.counts?.records !== 14175
          || itis.counts?.accepted !== 4824 || itis.counts?.redirects !== 0 || itis.counts?.ambiguous !== 2 || itis.counts?.unmatched !== 1 || itis.counts?.upstreamOnly !== 9348 || itis.counts?.withheld !== 0
          || itis.delivery?.profile !== 'web-light' || itis.delivery?.completeRows !== false || itis.files?.length !== 0
          || itis.delivery?.publishedFileCount !== 0 || itis.delivery?.canonicalFileCount !== 8 || itis.canonicalFileInventory?.length !== 8
          || !itis.scope?.includes('sourceDatasetId is not 2015') || !itis.evidenceBoundary?.en.includes('never substitutes for LPSN')
          || itis.canonicalFileInventory?.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
          failures.push('bacteria: Pages must publish the independent ITIS CC0 summary and hashes without row shards or changing LPSN semantics')
        }
        if (manifestFile.extensionFileCount !== 1 || manifestFile.canonicalExtensionFileCount !== 9) {
          failures.push('bacteria: Pages must retain one LPSN row shard and omit all eight ITIS authority row shards')
        }
      }
    } else if (packageId === 'fungi') {
      const authority = extensions.find((candidate) => candidate.id === 'index-fungorum-identifiers')
      const itis = extensions.find((candidate) => candidate.id === 'itis-fungi-tsn-crosswalk')
      if (extensions.length !== 2 || !authority || authority.provider !== 'Species Fungorum / Index Fungorum'
        || authority.recordType !== 'external-name-identifier-crosswalk'
        || authority.integration?.lookup?.strategy !== 'lexicographic-colId-range-v1'
        || authority.counts?.acceptedSpecies !== 157044 || authority.counts?.accepted !== 157044
        || authority.counts?.eligible !== 157044 || authority.counts?.upstreamOnly !== 201
        || ['redirect', 'ambiguous', 'unmatched', 'withheld'].some((status) => authority.counts?.[status] !== 0)
        || authority.sourceComposition?.['2073'] !== 155841 || authority.sourceComposition?.['1148'] !== 1203
        || authority.source?.canonicalCrosswalkSha256 !== '5e6ecd007451ac1bf0aab2f07dd6ef9d05530439476b8867e2962c1f73f82607'
        || authority.source?.canonicalCrosswalkSourceSha256 !== '903be85cc09b6375962ee915e27e93a7b6edc3299bcfeaa414dcdec410f8b748'
        || !itis || itis.provider !== 'Integrated Taxonomic Information System' || itis.source?.rootTsn !== '555705'
        || itis.counts?.records !== 158805 || itis.counts?.accepted !== 928 || itis.counts?.redirects !== 45
        || itis.counts?.ambiguous !== 1 || itis.counts?.unmatched !== 156070 || itis.counts?.upstreamOnly !== 1761
        || itis.delivery?.profile !== 'web-light' || itis.delivery?.completeRows !== false || itis.files?.length !== 0
        || itis.delivery?.publishedFileCount !== 0 || itis.delivery?.canonicalFileCount !== 57 || itis.canonicalFileInventory?.length !== 57
        || !itis.evidenceBoundary?.en.includes('never substitutes for Index Fungorum')) {
        failures.push('fungi: pinned Species Fungorum / Index Fungorum extension identity or audit boundary is incomplete')
      } else {
        let records = 0
        let compressedBytes = 0
        let sourceBytes = 0
        let previousMax = null
        const seenColIds = new Set()
        const seenAuthorityIds = new Set()
        for (const file of authority.files) {
          releaseUrl(file, 'fungi authority identifier shard')
          checkFile(file, 'fungi authority identifier shard')
          const compressed = readFileSync(join(dataRoot, file.url))
          const source = gunzipSync(compressed)
          const rows = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
          if (!file.minColId || !file.maxColId || file.minColId > file.maxColId
            || (previousMax !== null && previousMax >= file.minColId)
            || rows.length !== file.records || rows[0]?.colId !== file.minColId || rows.at(-1)?.colId !== file.maxColId
            || createHash('sha256').update(source).digest('hex') !== file.sourceSha256) {
            failures.push('fungi: authority shard range, count, bytes, or source SHA-256 mismatch')
          }
          for (const [index, record] of rows.entries()) {
            if (!record.colId || seenColIds.has(record.colId) || !/^(2073|1148)$/.test(record.sourceDatasetId ?? '')
              || !/^\d+$/.test(record.indexFungorumId ?? '') || seenAuthorityIds.has(record.indexFungorumId)
              || record.indexFungorumUrl !== `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${record.indexFungorumId}`
              || record.status !== 'accepted'
              || !['exact-source-dataset-and-verbatim-label', 'checklistbank-source-record'].includes(record.mappingBasis)
              || (index > 0 && rows[index - 1].colId >= record.colId)) {
              failures.push('fungi: authority shard contains an invalid, duplicate, or unordered mapping')
              break
            }
            seenColIds.add(record.colId)
            seenAuthorityIds.add(record.indexFungorumId)
          }
          previousMax = file.maxColId
          records += rows.length
          compressedBytes += compressed.byteLength
          sourceBytes += source.byteLength
        }
        if (records !== authority.counts.accepted || compressedBytes !== authority.totalCompressedBytes
          || sourceBytes !== authority.totalSourceBytes || seenColIds.size !== manifest.acceptedSpeciesCount) {
          failures.push('fungi: authority files do not cover the complete COL Fungi pack exactly once')
        }
        indexFungorumIdentifierRecords += records
        if (manifestFile.extensionFileCount !== 6 || manifestFile.canonicalExtensionFileCount !== 63) failures.push('fungi: Pages must retain Index Fungorum rows but omit all ITIS Fungi rows')
      }
    } else if (packageId === 'other-animals') {
      const expected = {
        'itis-platyhelminthes-tsn-crosswalk': { eligible: 27007, records: 28252, accepted: 7393, redirects: 239, ambiguous: 23, unmatched: 19352, upstreamOnly: 1245, nonApplicable: 72154, files: 15 },
        'itis-rotifera-tsn-crosswalk': { eligible: 2467, records: 2662, accepted: 701, redirects: 4, ambiguous: 0, unmatched: 1762, upstreamOnly: 195, nonApplicable: 96694, files: 3 },
        'itis-bryozoa-tsn-crosswalk': { eligible: 20367, records: 20754, accepted: 655, redirects: 15, ambiguous: 0, unmatched: 19697, upstreamOnly: 387, nonApplicable: 78794, files: 3 },
        'itis-nemertea-tsn-crosswalk': { eligible: 1364, records: 1416, accepted: 142, redirects: 1, ambiguous: 0, unmatched: 1221, upstreamOnly: 52, nonApplicable: 97797, files: 2 },
        'itis-tunicata-cephalochordata-tsn-crosswalk': { eligible: 3176, records: 3242, accepted: 366, redirects: 8, ambiguous: 0, unmatched: 2802, upstreamOnly: 66, nonApplicable: 95985, files: 2 },
        'itis-acanthocephala-tsn-crosswalk': { eligible: 1325, records: 1330, accepted: 1320, redirects: 0, ambiguous: 5, unmatched: 0, upstreamOnly: 5, nonApplicable: 97836, files: 3 },
        'itis-entoprocta-tsn-crosswalk': { eligible: 170, records: 171, accepted: 170, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 1, nonApplicable: 98991, files: 2 },
        'itis-tardigrada-tsn-crosswalk': { eligible: 1454, records: 1461, accepted: 1454, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 7, nonApplicable: 97707, files: 3 },
        'itis-chaetognatha-tsn-crosswalk': { eligible: 132, records: 156, accepted: 92, redirects: 0, ambiguous: 0, unmatched: 40, upstreamOnly: 24, nonApplicable: 99029, files: 2 },
        'itis-ctenophora-tsn-crosswalk': { eligible: 197, records: 204, accepted: 58, redirects: 0, ambiguous: 0, unmatched: 139, upstreamOnly: 7, nonApplicable: 98964, files: 2 },
        'itis-kinorhyncha-tsn-crosswalk': { eligible: 362, records: 420, accepted: 91, redirects: 1, ambiguous: 0, unmatched: 270, upstreamOnly: 58, nonApplicable: 98799, files: 2 },
        'itis-gastrotricha-tsn-crosswalk': { eligible: 903, records: 997, accepted: 574, redirects: 8, ambiguous: 1, unmatched: 320, upstreamOnly: 94, nonApplicable: 98258, files: 2 },
        'itis-priapulida-tsn-crosswalk': { eligible: 23, records: 23, accepted: 19, redirects: 0, ambiguous: 0, unmatched: 4, upstreamOnly: 0, nonApplicable: 99138, files: 1 },
        'itis-onychophora-tsn-crosswalk': { eligible: 235, records: 235, accepted: 235, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 98926, files: 1 },
        'itis-hemichordata-tsn-crosswalk': { eligible: 132, records: 139, accepted: 132, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 7, nonApplicable: 99029, files: 2 },
        'itis-sipuncula-tsn-crosswalk': { eligible: 146, records: 205, accepted: 146, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 59, nonApplicable: 99015, files: 2 },
        'itis-nematomorpha-tsn-crosswalk': { eligible: 356, records: 404, accepted: 187, redirects: 6, ambiguous: 0, unmatched: 163, upstreamOnly: 48, nonApplicable: 98805, files: 2 },
        'itis-phoronida-tsn-crosswalk': { eligible: 19, records: 19, accepted: 11, redirects: 8, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99142, files: 1 },
        'itis-gnathostomulida-tsn-crosswalk': { eligible: 100, records: 104, accepted: 90, redirects: 0, ambiguous: 0, unmatched: 10, upstreamOnly: 4, nonApplicable: 99061, files: 2 },
        'itis-loricifera-tsn-crosswalk': { eligible: 46, records: 46, accepted: 22, redirects: 0, ambiguous: 0, unmatched: 24, upstreamOnly: 0, nonApplicable: 99115, files: 1 },
        'itis-micrognathozoa-tsn-crosswalk': { eligible: 1, records: 1, accepted: 1, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99160, files: 1 },
        'itis-cycliophora-tsn-crosswalk': { eligible: 2, records: 2, accepted: 2, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99159, files: 1 },
        'itis-placozoa-tsn-crosswalk': { eligible: 4, records: 4, accepted: 4, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99157, files: 1 },
        'itis-xenacoelomorpha-tsn-crosswalk': { eligible: 441, records: 499, accepted: 370, redirects: 6, ambiguous: 1, unmatched: 64, upstreamOnly: 58, nonApplicable: 98720, files: 2 },
        'itis-orthonectida-tsn-crosswalk': { eligible: 24, records: 27, accepted: 22, redirects: 0, ambiguous: 0, unmatched: 2, upstreamOnly: 3, nonApplicable: 99137, files: 2 },
        'itis-dicyemida-tsn-crosswalk': { eligible: 122, records: 128, accepted: 86, redirects: 0, ambiguous: 0, unmatched: 36, upstreamOnly: 6, nonApplicable: 99039, files: 2 },
        'itis-nematoda-tsn-crosswalk': { eligible: 19604, records: 20849, accepted: 1899, redirects: 36, ambiguous: 1, unmatched: 17668, upstreamOnly: 1245, nonApplicable: 79557, files: 4 },
        'itis-annelida-tsn-crosswalk': { eligible: 18982, records: 24074, accepted: 4301, redirects: 122, ambiguous: 1, unmatched: 14558, upstreamOnly: 5092, nonApplicable: 80179, files: 4 },
      }
      if (extensions.length !== 36 || manifestFile.extensionFileCount !== 0 || manifestFile.canonicalExtensionFileCount !== 169) {
        failures.push('other-animals: Pages must publish 28 ITIS and five WoRMS authority summaries and no row shards')
      }
      const annelidaArchive = extensions.find((candidate) => candidate.id === 'worms-annelida-archive-crosswalk')
      if (!annelidaArchive || annelidaArchive.source?.license !== 'CC-BY-4.0'
        || annelidaArchive.counts?.total !== 18982 || annelidaArchive.counts?.upstreamOnly !== 1090
        || annelidaArchive.delivery?.profile !== 'web-light' || annelidaArchive.delivery.completeRows !== false
        || annelidaArchive.files?.length !== 0 || annelidaArchive.upstreamOnlyFiles?.length !== 0
        || annelidaArchive.delivery.publishedFileCount !== 0 || annelidaArchive.delivery.canonicalFileCount !== 9
        || annelidaArchive.canonicalFileInventory?.length !== 9
        || annelidaArchive.canonicalFileInventory.some((file) => !file.path || file.sha256?.length !== 64 || existsSync(join(dataRoot, current.releaseBase, 'catalogue/resource-packs', file.path)))) {
        failures.push('other-animals: WoRMS Annelida must preserve its complete inventory while omitting row shards on Pages')
      }
      const nematodaArchive = extensions.find((candidate) => candidate.id === 'worms-nematoda-archive-crosswalk')
      if (!nematodaArchive || nematodaArchive.source?.license !== 'CC-BY-4.0'
        || nematodaArchive.counts?.total !== 19604 || nematodaArchive.counts?.upstreamOnly !== 2104
        || nematodaArchive.delivery?.profile !== 'web-light' || nematodaArchive.delivery.completeRows !== false
        || nematodaArchive.files?.length !== 0 || nematodaArchive.upstreamOnlyFiles?.length !== 0
        || nematodaArchive.delivery.canonicalFileCount !== 9 || nematodaArchive.canonicalFileInventory?.length !== 9) {
        failures.push('other-animals: WoRMS Nematoda must preserve its complete inventory while omitting row shards on Pages')
      }
      for (const [id, counts] of Object.entries(expected)) {
        const authority = extensions.find((candidate) => candidate.id === id)
        if (!authority || authority.provider !== 'Integrated Taxonomic Information System'
          || authority.source?.license !== 'CC0-1.0' || authority.source?.exportDate !== '2026-08-26'
          || authority.delivery?.profile !== 'web-light' || authority.delivery?.completeRows !== false
          || authority.files?.length !== 0 || authority.delivery?.publishedFileCount !== 0
          || authority.delivery?.canonicalFileCount !== counts.files
          || authority.canonicalFileInventory?.length !== counts.files
          || authority.counts?.withheld !== 0
          || Object.entries(counts).some(([key, value]) => key !== 'files' && authority.counts?.[key] !== value)
          || authority.canonicalFileInventory?.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
          failures.push(`other-animals: ${id} summary, counts, delivery boundary, or canonical hashes are incomplete`)
        }
      }
    } else if (packageId === 'protists-chromists') {
      const foraminifera = extensions.find((candidate) => candidate.id === 'foraminifera-wfd-identifiers')
      const expectedItis = {
        'itis-ciliophora-tsn-crosswalk': { eligible: 8507, records: 8665, accepted: 246, redirects: 6, ambiguous: 0, unmatched: 8255, upstreamOnly: 158, nonApplicable: 53011, files: 4 },
        'itis-apicomplexa-tsn-crosswalk': { eligible: 21, records: 21, accepted: 21, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61497, files: 1 },
        'itis-dinoflagellata-tsn-crosswalk': { eligible: 259, records: 1110, accepted: 60, redirects: 2, ambiguous: 0, unmatched: 197, upstreamOnly: 851, nonApplicable: 61259, files: 2 },
        'itis-euglenozoa-tsn-crosswalk': { eligible: 0, records: 276, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 276, nonApplicable: 61518, files: 1 },
        'itis-cercozoa-tsn-crosswalk': { eligible: 52, records: 52, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 52, upstreamOnly: 0, nonApplicable: 61466, files: 1 },
        'itis-haptophyta-tsn-crosswalk': { eligible: 0, records: 90, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 90, nonApplicable: 61518, files: 1 },
        'itis-ochrophyta-tsn-crosswalk': { eligible: 1101, records: 3399, accepted: 1101, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 2298, nonApplicable: 60417, files: 2 },
        'itis-amoebozoa-tsn-crosswalk': { eligible: 1337, records: 1337, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 1337, upstreamOnly: 0, nonApplicable: 60181, files: 1 },
        'itis-rhodophyta-tsn-crosswalk': { eligible: 0, records: 1616, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 1616, nonApplicable: 61518, files: 1 },
        'itis-oomycota-tsn-crosswalk': { eligible: 1494, records: 1536, accepted: 53, redirects: 1, ambiguous: 0, unmatched: 1440, upstreamOnly: 42, nonApplicable: 60024, files: 2 },
        'itis-cryptophyta-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-choanoflagellatea-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-bigyra-tsn-crosswalk': { eligible: 53, records: 53, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 53, upstreamOnly: 0, nonApplicable: 61465, files: 1 },
        'itis-perkinsozoa-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-labyrinthulomycetes-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-opalozoa-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-radiolaria-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-metamonada-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-chlorophyta-tsn-crosswalk': { eligible: 0, records: 1416, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 1416, nonApplicable: 61518, files: 1 },
        'itis-glaucophyta-tsn-crosswalk': { eligible: 0, records: 4, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 4, nonApplicable: 61518, files: 1 },
        'itis-picozoa-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-telonemia-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-centrohelida-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-katablepharidota-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
        'itis-hemimastigophora-tsn-crosswalk': { eligible: 0, records: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, files: 0 },
      }
      const radiozoa = extensions.find((candidate) => candidate.id === 'worms-radiozoa-archive-crosswalk')
      const trichomycetes = extensions.find((candidate) => candidate.id === 'trichomycetes-archive-crosswalk')
      const originalSources = [
        ['cilcat-1113-archive-crosswalk', 8505, 8505, 27, 2, 'CC-BY-4.0'],
        ['eumycetozoa-archive-crosswalk', 1337, 1337, 0, 1, 'CC-BY-4.0'],
        ['gymnodinium-archive-crosswalk', 259, 259, 0, 2, 'CC0-1.0'],
      ]
      for (const [id, total, accepted, upstreamOnly, fileCount, license] of originalSources) {
        const source = extensions.find((candidate) => candidate.id === id)
        if (!source || source.source?.license !== license
          || source.counts?.total !== total || source.counts?.accepted !== accepted || source.counts?.upstreamOnly !== upstreamOnly
          || source.delivery?.profile !== 'web-light' || source.delivery?.completeRows !== false
          || source.files?.length !== 0 || source.upstreamOnlyFiles?.length !== 0
          || source.delivery?.publishedFileCount !== 0 || source.delivery?.canonicalFileCount !== fileCount
          || source.canonicalFileInventory?.length !== fileCount
          || source.canonicalFileInventory.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
          failures.push(`${id}: light delivery must retain source summary and canonical hashes without row shards`)
        }
      }
      const canonicalItisFiles = Object.values(expectedItis).reduce((sum, counts) => sum + counts.files, 0)
      if (extensions.length !== Object.keys(expectedItis).length + 6 || !foraminifera || !radiozoa || !trichomycetes
        || foraminifera.provider !== 'World Foraminifera Database (WoRMS) through ChecklistBank'
        || foraminifera.source?.license !== 'CC-BY-4.0'
        || foraminifera.source?.sourceDatasetKey !== 1157
        || foraminifera.counts?.eligible !== 47975 || foraminifera.counts?.resolved !== 47975
        || foraminifera.counts?.accepted !== 47975 || foraminifera.counts?.withheld !== 0
        || foraminifera.counts?.upstreamOnly !== null
        || foraminifera.delivery?.profile !== 'web-light' || foraminifera.delivery?.completeRows !== false
        || foraminifera.files?.length !== 0 || foraminifera.delivery?.publishedFileCount !== 0
        || foraminifera.delivery?.canonicalFileCount !== 5
        || foraminifera.canonicalFileInventory?.length !== 5
        || radiozoa.provider !== 'World Register of Marine Species via ChecklistBank'
        || radiozoa.source?.license !== 'CC-BY-4.0' || radiozoa.counts?.total !== 444 || radiozoa.counts?.accepted !== 444
        || radiozoa.counts?.upstreamOnly !== 54 || radiozoa.delivery?.profile !== 'web-light'
        || radiozoa.delivery?.completeRows !== false || radiozoa.files?.length !== 0
        || radiozoa.upstreamOnlyFiles?.length !== 0 || radiozoa.delivery?.publishedFileCount !== 0
        || radiozoa.delivery?.canonicalFileCount !== 2 || radiozoa.canonicalFileInventory?.length !== 2
        || trichomycetes.source?.license !== 'CC-BY-4.0' || trichomycetes.counts?.total !== 96 || trichomycetes.counts?.accepted !== 96
        || trichomycetes.counts?.upstreamOnly !== 0 || trichomycetes.delivery?.profile !== 'web-light'
        || trichomycetes.delivery?.completeRows !== false || trichomycetes.files?.length !== 0
        || trichomycetes.upstreamOnlyFiles?.length !== 0 || trichomycetes.delivery?.publishedFileCount !== 0
        || trichomycetes.delivery?.canonicalFileCount !== 1 || trichomycetes.canonicalFileInventory?.length !== 1
        || manifestFile.extensionFileCount !== 0 || manifestFile.canonicalExtensionFileCount !== canonicalItisFiles + 13
          || [...foraminifera.canonicalFileInventory, ...radiozoa.canonicalFileInventory, ...trichomycetes.canonicalFileInventory].some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
        failures.push('protists-chromists: Pages must publish the complete Foraminifera, Radiozoa and Trichomycetes authority summaries and hashes without row shards')
      }
      for (const [id, counts] of Object.entries(expectedItis)) {
        const authority = extensions.find((candidate) => candidate.id === id)
        if (!authority || authority.provider !== 'Integrated Taxonomic Information System'
          || authority.source?.license !== 'CC0-1.0' || authority.source?.exportDate !== '2026-08-26'
          || authority.delivery?.profile !== 'web-light' || authority.delivery?.completeRows !== false
          || authority.files?.length !== 0 || authority.delivery?.publishedFileCount !== 0
          || authority.delivery?.canonicalFileCount !== counts.files
          || authority.canonicalFileInventory?.length !== counts.files
          || authority.counts?.withheld !== 0
          || Object.entries(counts).some(([key, value]) => key !== 'files' && authority.counts?.[key] !== value)
          || authority.canonicalFileInventory?.some((file) => !file.path || file.sha256?.length !== 64 || file.sourceSha256?.length !== 64)) {
          failures.push(`protists-chromists: ${id} summary, counts, delivery boundary, or canonical hashes are incomplete`)
        }
      }
    } else if (packageId === 'viruses') {
      const ictvExtension = extensions.find((candidate) => candidate.id === 'ictv-virus-metadata')
      if (extensions.length !== 1 || !ictvExtension
        || ictvExtension.recordType !== 'official-taxonomy-and-virus-metadata-crosswalk'
        || ictvExtension.provider !== 'ICTV') {
        failures.push('viruses: pinned ICTV MSL/VMR extension identity is incomplete')
      } else {
        const expectedCounts = {
          acceptedSpecies: 17552, eligible: 17552, accepted: 17552, redirect: 0, ambiguous: 0,
          unmatched: 0, withheld: 0, officialSpecies: 17554, upstreamOnly: 2,
          vmrIsolates: 19285, exemplarIsolates: 17554, additionalIsolates: 1731,
        }
        for (const [key, expected] of Object.entries(expectedCounts)) {
          if (ictvExtension.counts?.[key] !== expected) failures.push(`viruses: ICTV ${key} count is ${ictvExtension.counts?.[key]}; expected ${expected}`)
        }
        if (JSON.stringify(ictvExtension.upstreamOnlySpecies) !== JSON.stringify(['Boscovirus hypoboscidae', 'Simiispumavirus macfas'])) {
          failures.push('viruses: current ICTV-only species boundary is incomplete')
        }
        let extensionRecords = 0
        let extensionCompressedBytes = 0
        let extensionSourceBytes = 0
        let mappedRecords = 0
        let upstreamOnlyRecords = 0
        let isolateRecords = 0
        const seenColIds = new Set()
        const seenIctvIds = new Set()
        const seenIsolateIds = new Set()
        for (const file of ictvExtension.files) {
          const label = 'viruses ICTV MSL/VMR shard'
          releaseUrl(file, label)
          checkFile(file, label)
          const compressed = readFileSync(join(dataRoot, file.url))
          const source = gunzipSync(compressed)
          if (compressed.byteLength !== file.bytes || source.byteLength !== file.sourceBytes
            || createHash('sha256').update(source).digest('hex') !== file.sourceSha256) {
            failures.push('viruses: ICTV MSL/VMR shard bytes or source SHA-256 mismatch')
          }
          if (!currentReleaseUrls.has(file.url)) failures.push('viruses: ICTV MSL/VMR shard is absent from the current release inventory')
          const records = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
          if (records.length !== file.records) failures.push('viruses: ICTV MSL/VMR shard count mismatch')
          for (const record of records) {
            if (!/^ICTV\d+$/.test(record.ictvTaxonId ?? '') || seenIctvIds.has(record.ictvTaxonId)
              || record.ictvTaxonUrl !== `https://ictv.global/id/${record.ictvTaxonId}` || !record.isolates?.length) {
              failures.push('viruses: ICTV MSL/VMR shard contains an invalid or duplicate taxon')
              break
            }
            seenIctvIds.add(record.ictvTaxonId)
            if (record.mappingStatus === 'accepted') {
              if (!record.colId || seenColIds.has(record.colId) || record.mappingBasis !== 'exact-unique-current-species-name-and-ictv-id') {
                failures.push('viruses: ICTV MSL/VMR shard contains an invalid exact COL mapping')
                break
              }
              seenColIds.add(record.colId)
              mappedRecords += 1
            } else if (record.mappingStatus === 'upstream-only' && record.colId === null && record.mappingBasis === 'no-col26.8-accepted-species-record') {
              upstreamOnlyRecords += 1
            } else {
              failures.push('viruses: ICTV MSL/VMR shard contains an unknown mapping partition')
              break
            }
            if (record.isolates.filter((isolate) => isolate.role === 'exemplar').length !== 1) {
              failures.push(`viruses: ${record.ictvTaxonId} does not have exactly one exemplar isolate`)
              break
            }
            for (const isolate of record.isolates) {
              if (!/^VMR\d+$/.test(isolate.isolateId ?? '') || seenIsolateIds.has(isolate.isolateId)
                || isolate.isolateUrl !== `https://ictv.global/id/${isolate.isolateId}`) {
                failures.push('viruses: ICTV MSL/VMR shard contains an invalid or duplicate isolate')
                break
              }
              seenIsolateIds.add(isolate.isolateId)
              isolateRecords += 1
            }
          }
          extensionRecords += records.length
          extensionCompressedBytes += compressed.byteLength
          extensionSourceBytes += source.byteLength
        }
        if (extensionRecords !== ictvExtension.counts.officialSpecies
          || mappedRecords !== ictvExtension.counts.accepted
          || upstreamOnlyRecords !== ictvExtension.counts.upstreamOnly
          || isolateRecords !== ictvExtension.counts.vmrIsolates
          || extensionCompressedBytes !== ictvExtension.totalCompressedBytes
          || extensionSourceBytes !== ictvExtension.totalSourceBytes) {
          failures.push('viruses: ICTV MSL/VMR files do not match extension totals')
        }
      }
    } else if (packageId === 'other-plants') {
      const wfo = extensions.find((candidate) => candidate.id === 'wfo-plant-list-crosswalk')
      if (extensions.length !== 1 || !wfo || wfo.provider !== 'World Flora Online Plant List'
        || wfo.source?.license !== 'CC0-1.0' || wfo.counts?.packageColRecords !== 698
        || wfo.counts?.upstreamOnly !== 60751 || wfo.counts?.records !== 61449) {
        failures.push('other-plants: WFO extension identity or partition counts are incomplete')
      } else {
        const partitions = new Map(wfo.partitions.map((partition) => [partition.id, partition]))
        if (partitions.get('other-plants-col')?.colOwnership !== 'other-plants'
          || partitions.get('wfo-upstream-only')?.colOwnership !== null) failures.push('other-plants: WFO ownership boundaries are invalid')
        let records = 0
        let upstreamOnly = 0
        for (const file of wfo.files) {
          releaseUrl(file, 'other-plants WFO shard')
          checkFile(file, 'other-plants WFO shard')
          const source = gunzipSync(readFileSync(join(dataRoot, file.url)))
          const rows = source.toString('utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
          if (rows.length !== file.records || createHash('sha256').update(source).digest('hex') !== file.sourceSha256) failures.push('other-plants: WFO shard count or source SHA-256 mismatch')
          for (const row of rows) {
            if (row.status === 'upstream-only') {
              upstreamOnly += 1
              if ('colId' in row || 'packageId' in row) failures.push('other-plants: upstream-only WFO record impersonates COL ownership')
            }
          }
          records += rows.length
        }
        if (records !== wfo.counts.records || upstreamOnly !== wfo.counts.upstreamOnly) failures.push('other-plants: WFO files do not match extension totals')
        wfoSupplementRecords += records
      }
    } else if (extensions.length) {
      failures.push(`${packageId}: unexpected resource-pack extension`)
    }
    if (manifest.download) failures.push(`${packageId}: Pages-light resource-pack manifest unexpectedly publishes a ZIP`)
    resourcePackRecords += packageRecords
  }
  if (resourcePackRecords !== 363160) failures.push('Catalogue nomenclatural resource-pack records do not total 363,160')
  const expectedLpsnIdentifierRecords = Object.values(expectedLpsnExtensions).reduce((sum, extension) => sum + extension.counts.resolved, 0)
  if (lpsnIdentifierRecords !== expectedLpsnIdentifierRecords) failures.push(`LPSN identifier extensions contain ${lpsnIdentifierRecords} records; expected ${expectedLpsnIdentifierRecords}`)
  if (indexFungorumIdentifierRecords !== 157044) failures.push(`Fungi authority extension contains ${indexFungorumIdentifierRecords} records; expected 157,044`)
  if (wfoSupplementRecords !== 61449) failures.push(`WFO Other Plants extension contains ${wfoSupplementRecords} records; expected 61,449`)
}

if (failures.length) {
  console.error(`Pages smoke failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Pages smoke passed: ${packageRegistry.packages.length} packages and ${occurrenceCount.toLocaleString()} occurrence records are statically reachable.`)
}
