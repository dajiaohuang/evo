import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream, createWriteStream, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'
import { once } from 'node:events'
import { createInterface } from 'node:readline'
import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import { brotliDecompressSync, constants, createBrotliCompress, createBrotliDecompress, gunzipSync } from 'node:zlib'
import { readJson, rootDir } from './data-lib.mjs'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const RELEASE_ALIAS = 'COL26.8'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const REGISTRY_MANIFEST_PATH = `${REGISTRY_ROOT}/manifest.json`
const PROFILE_PATH = 'data/knowledge/catalogue-profiles.json'
const DOSSIER_BASE_PATH = 'data/knowledge/catalogue-dossiers.json'
const DOSSIER_INDEX_PATH = 'data/knowledge/catalogue-dossier-shards.json'
const OUTPUT_ROOT = 'data/knowledge/species-evidence-queue'
const OUTPUT_MANIFEST_PATH = `${OUTPUT_ROOT}/manifest.json`
const OUTPUT_PREFIXES = [...'0123456789abcdef']
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const FACET_STATUSES = ['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed']
const SOURCE_LEDGERS = [
  ['brazilFloraDescriptions', 'brazil-flora-descriptions-import-ledger.json'],
  ['fdacDescriptions', 'fdac-descriptions-import-ledger.json'],
  ['floraChinaDescriptions', 'flora-china-descriptions-import-ledger.json'],
  ['nicaraguaDescriptions', 'flora-nicaragua-descriptions-import-ledger.json'],
  ['panamaDescriptions', 'flora-panama-descriptions-import-ledger.json'],
  ['fnaDescriptions', 'fna-descriptions-import-ledger.json'],
  ['foaDescriptions', 'foa-descriptions-import-ledger.json'],
  ['mesoDescriptions', 'meso-descriptions-import-ledger.json'],
  ['mossChinaDescriptions', 'moss-china-descriptions-import-ledger.json'],
  ['mossDescriptions', 'moss-descriptions-import-ledger.json'],
  ['pakistanDescriptions', 'pakistan-descriptions-import-ledger.json'],
  ['plaziDescriptions', 'plazi-descriptions-import-ledger.json'],
  ['sanbiDescriptions', 'sanbi-descriptions-import-ledger.json'],
  ['turkeyDescriptions', 'turkey-descriptions-import-ledger.json'],
]

const checkMode = process.argv.includes('--check')
if (process.argv.slice(2).some(argument => argument !== '--check')) {
  throw new Error('Usage: node scripts/build-species-evidence-queue.mjs [--check]')
}

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const nonEmptyText = value => typeof value === 'string' && value.trim().length > 0
const queueRoot = resolve(rootDir, OUTPUT_ROOT)
const rootPrefix = `${resolve(rootDir)}${sep}`
const registryRoot = resolve(rootDir, REGISTRY_ROOT)
const registryPrefix = `${registryRoot}${sep}`
const outputFiles = [...OUTPUT_PREFIXES.map(prefix => `${prefix}.jsonl.br`), 'manifest.json']

function readBytes(relativePath) {
  const path = resolve(rootDir, relativePath)
  assert.ok(path.startsWith(rootPrefix), `Input path escapes repository root: ${relativePath}`)
  return readFileSync(path)
}

function safePath(relativePath, allowedRoot, allowedPrefix, label) {
  assert.equal(typeof relativePath, 'string', `${label} path must be text`)
  assert.ok(!resolve(relativePath).startsWith(sep), `${label} path must be relative: ${relativePath}`)
  const path = resolve(allowedRoot, relativePath)
  assert.ok(path.startsWith(allowedPrefix), `${label} path escapes its input root: ${relativePath}`)
  return path
}

function parseJsonLines(bytes, label) {
  const text = bytes.toString('utf8')
  return text.split(/\r?\n/).filter(Boolean).map((line, index) => {
    try {
      return JSON.parse(line)
    } catch (error) {
      throw new Error(`Invalid JSON at ${label}:${index + 1}: ${error.message}`)
    }
  })
}

function sourceTextParts(row, label) {
  const parts = row.descriptions ?? [row]
  assert.ok(Array.isArray(parts), `Description parts must be an array: ${label}`)
  return parts.filter(part => nonEmptyText(part?.text))
}

function countClaims(dossier) {
  return FACETS.reduce((count, facet) => count + (dossier.facets[facet].claims?.length ?? 0), 0)
}

function dossierRightsStatus(dossier) {
  const claimSourceIds = new Set(FACETS.flatMap(facet => dossier.facets[facet].claims ?? []).flatMap(claim => claim.sourceIds))
  if (claimSourceIds.size === 0) return 'no-biological-claim-sources'
  const sources = new Map(dossier.sources.map(source => [source.id, source]))
  for (const sourceId of claimSourceIds) assert.ok(sources.has(sourceId), `Missing claim source ${dossier.colId}/${sourceId}`)
  return [...claimSourceIds].every(sourceId => sources.get(sourceId).licenseAssessment === 'item-level-verified')
    ? 'item-level-verified'
    : 'claim-source-rights-unresolved'
}

function buildRow(node, sourceEntry, profile, dossier) {
  const facetStatuses = Object.fromEntries(FACETS.map(facet => [facet, dossier?.facets?.[facet]?.status ?? 'not-assessed']))
  const sourceOriginalCollections = [...(sourceEntry?.collections ?? [])].sort()
  const profileSourceIds = [...new Set(profile?.sources?.map(source => source.id) ?? [])].sort()
  const dossierSourceIds = [...new Set(dossier?.sources?.map(source => source.id) ?? [])].sort()
  const identitySourceIds = [...new Set(dossier?.identity?.sourceIds ?? [])].sort()
  const reviewStatus = dossier?.expertReview?.status ?? 'no-dossier'
  return {
    colId: node.id,
    scientificName: node.scientificName,
    authorship: node.authorship ?? null,
    parentId: node.parentId ?? null,
    sourceDatasetId: node.sourceDatasetId ?? null,
    sourceOriginal: {
      status: sourceOriginalCollections.length ? 'associated' : 'not-associated',
      collections: sourceOriginalCollections,
      textRecordCount: sourceEntry?.textRecordCount ?? 0,
    },
    introductorySummary: {
      status: profile ? 'source-linked' : 'absent',
      sourceIds: profileSourceIds,
    },
    dossier: {
      status: dossier?.completeness?.status ?? 'missing',
      identityStatus: !dossier ? 'not-assessed' : identitySourceIds.length ? 'source-linked' : 'method-and-scope-recorded',
      identitySourceIds,
      sourceIds: dossierSourceIds,
      claimCount: dossier ? countClaims(dossier) : 0,
      rightsStatus: dossier ? dossierRightsStatus(dossier) : 'not-assessed',
      systematicSearchRecorded: Boolean(dossier?.systematicSearch),
      facetStatuses,
      expertReviewStatus: reviewStatus,
    },
  }
}

function emptyCounts() {
  return {
    acceptedSpecies: 0,
    sourceOriginalAssociatedSpecies: 0,
    introductorySummarySpecies: 0,
    dossierSpecies: 0,
    completeDossierSpecies: 0,
    externallyReviewedSpecies: 0,
    speciesWithAnyEvidenceStage: 0,
    speciesWithoutAnyEvidenceStage: 0,
    speciesWithoutDossier: 0,
    sourceOriginalCollectionSpecies: Object.fromEntries(SOURCE_LEDGERS.map(([collection]) => [collection, 0])),
    profileRanks: {},
    dossierStatuses: { missing: 0, incomplete: 0, complete: 0 },
    expertReviewStatuses: { 'no-dossier': 0, 'not-reviewed': 0, 'maintainer-reviewed': 0, 'externally-reviewed': 0 },
    claimSourceRightsStatuses: {
      'not-assessed': 0,
      'no-biological-claim-sources': 0,
      'item-level-verified': 0,
      'claim-source-rights-unresolved': 0,
    },
    facetStatuses: Object.fromEntries(FACETS.map(facet => [facet, Object.fromEntries(FACET_STATUSES.map(status => [status, 0]))])),
  }
}

function ensureOutputDirectory() {
  if (checkMode) {
    assert.ok(existsSync(queueRoot), `Missing generated species evidence queue: ${OUTPUT_ROOT}`)
    return
  }
  if (!existsSync(queueRoot)) {
    mkdirSync(queueRoot, { recursive: true })
    return
  }
  const existing = readdirSync(queueRoot).sort()
  const unexpected = existing.filter(name => !outputFiles.includes(name))
  assert.deepEqual(unexpected, [], `Refusing to overwrite unrecognized files in ${OUTPUT_ROOT}`)
  const manifestPath = join(queueRoot, 'manifest.json')
  if (existsSync(manifestPath)) {
    const current = JSON.parse(readFileSync(manifestPath, 'utf8'))
    assert.equal(current.generatedBy, 'scripts/build-species-evidence-queue.mjs', `Refusing to overwrite ${OUTPUT_ROOT} without its own generator manifest`)
  } else {
    assert.deepEqual(existing, [], `Refusing to overwrite unmanifested files in ${OUTPUT_ROOT}`)
  }
}

function makeBuildWriter(prefix) {
  const path = join(queueRoot, `${prefix}.jsonl.br`)
  const compressedHash = createHash('sha256')
  let compressedBytes = 0
  let decodedBytes = 0
  let recordCount = 0
  const decodedHash = createHash('sha256')
  const output = createWriteStream(path, { flags: 'w' })
  const meter = new Transform({
    transform(chunk, _encoding, callback) {
      compressedHash.update(chunk)
      compressedBytes += chunk.length
      callback(null, chunk)
    },
  })
  const compressor = createBrotliCompress({ params: { [constants.BROTLI_PARAM_QUALITY]: 8 } })
  let pipelineError = null
  const finished = pipeline(compressor, meter, output).catch(error => { pipelineError = error })
  return {
    async write(line) {
      const bytes = Buffer.from(`${line}\n`)
      decodedHash.update(bytes)
      decodedBytes += bytes.length
      recordCount++
      if (!compressor.write(bytes)) {
        await new Promise((resolveDrain, reject) => {
          const onDrain = () => { cleanup(); resolveDrain() }
          const onError = error => { cleanup(); reject(error) }
          const cleanup = () => {
            compressor.off('drain', onDrain)
            compressor.off('error', onError)
          }
          compressor.once('drain', onDrain)
          compressor.once('error', onError)
        })
      }
    },
    async finish() {
      compressor.end()
      await finished
      if (pipelineError) throw pipelineError
      return {
        prefix,
        path: `${OUTPUT_ROOT}/${prefix}.jsonl.br`,
        recordCount,
        decodedBytes,
        decodedSha256: decodedHash.digest('hex'),
        compressedBytes,
        compressedSha256: compressedHash.digest('hex'),
        encoding: 'brotli-jsonl',
        brotliQuality: 8,
      }
    },
  }
}

function makeCheckWriter(prefix, indexedShard) {
  const path = join(queueRoot, `${prefix}.jsonl.br`)
  assert.ok(existsSync(path), `Missing queue shard: ${path}`)
  const input = createReadStream(path)
  const decoded = input.pipe(createBrotliDecompress())
  const reader = createInterface({ input: decoded, crlfDelay: Infinity })
  const iterator = reader[Symbol.asyncIterator]()
  const decodedHash = createHash('sha256')
  let decodedBytes = 0
  let recordCount = 0
  return {
    async write(expectedLine) {
      const next = await iterator.next()
      assert.equal(next.done, false, `Queue shard ${prefix} ended before its projected records`)
      assert.equal(next.value, expectedLine, `Queue record differs at shard ${prefix}, row ${recordCount + 1}`)
      const bytes = Buffer.from(`${next.value}\n`)
      decodedHash.update(bytes)
      decodedBytes += bytes.length
      recordCount++
    },
    async finish() {
      const next = await iterator.next()
      assert.equal(next.done, true, `Queue shard ${prefix} has extra rows`)
      reader.close()
      const pathBytes = statSync(path).size
      const compressedHash = await hashFile(path)
      const result = {
        prefix,
        path: `${OUTPUT_ROOT}/${prefix}.jsonl.br`,
        recordCount,
        decodedBytes,
        decodedSha256: decodedHash.digest('hex'),
        compressedBytes: pathBytes,
        compressedSha256: compressedHash,
        encoding: 'brotli-jsonl',
        brotliQuality: 8,
      }
      assert.deepEqual(result, indexedShard, `Queue shard metadata changed: ${prefix}`)
      return result
    },
  }
}

async function hashFile(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

const registryManifestBytes = readBytes(REGISTRY_MANIFEST_PATH)
const registryManifest = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registryManifest.releaseAlias, RELEASE_ALIAS)
const acceptedSpeciesExpected = registryManifest.hierarchy?.counts?.acceptedSpeciesNodes
assert.ok(Number.isSafeInteger(acceptedSpeciesExpected) && acceptedSpeciesExpected > 0, 'Pinned registry has no accepted-species count')
assert.equal(registryManifest.counts?.acceptedSpecies, acceptedSpeciesExpected, 'Registry hierarchy and usage totals disagree')
const nodeFiles = registryManifest.hierarchy?.nodes?.files
assert.ok(Array.isArray(nodeFiles) && nodeFiles.length > 0, 'Pinned registry has no hierarchy node shards')

const profileBytes = readBytes(PROFILE_PATH)
const profiles = JSON.parse(profileBytes.toString('utf8'))
assert.equal(profiles.releaseAlias, RELEASE_ALIAS)
const profileMap = new Map()
for (const profile of profiles.records) {
  assert.ok(!profileMap.has(profile.colId), `Duplicate source-linked introductory summary: ${profile.colId}`)
  profileMap.set(profile.colId, profile)
}

const dossierIndexBytes = readBytes(DOSSIER_INDEX_PATH)
const dossierIndex = JSON.parse(dossierIndexBytes.toString('utf8'))
const dossierBaseBytes = readBytes(DOSSIER_BASE_PATH)
const dossiers = readCatalogueDossiers()
assert.equal(dossiers.releaseAlias, RELEASE_ALIAS)
assert.equal(dossiers.records.length, dossierIndex.recordCount, 'Loaded dossier record count differs from shard index')
const dossierMap = new Map(dossiers.records.map(dossier => [dossier.colId, dossier]))
assert.equal(dossierMap.size, dossiers.records.length, 'Duplicate dossier COL IDs')

const sourceOriginalById = new Map()
const sourceOriginalInputDigests = []
const collectionRowCounts = Object.fromEntries(SOURCE_LEDGERS.map(([collection]) => [collection, 0]))
const collectionSpeciesIds = new Map(SOURCE_LEDGERS.map(([collection]) => [collection, new Set()]))
const sourceRoot = resolve(rootDir, 'data/sources')
const sourcePrefix = `${sourceRoot}${sep}`
for (const [collection, ledgerName] of SOURCE_LEDGERS) {
  const ledgerPath = `data/sources/${ledgerName}`
  const ledgerBytes = readBytes(ledgerPath)
  const ledger = JSON.parse(ledgerBytes.toString('utf8'))
  assert.ok(ledger.output.startsWith('data/sources/'), `${collection} output must remain under data/sources`)
  const outputPath = safePath(ledger.output.slice('data/sources/'.length), sourceRoot, sourcePrefix, `${collection} output`)
  const outputBytes = readFileSync(outputPath)
  assert.equal(outputBytes.length, ledger.outputBytes, `${collection} source-original byte count differs from ledger`)
  assert.equal(sha256(outputBytes), ledger.outputSha256, `${collection} source-original SHA-256 differs from ledger`)
  const decoded = ledger.output.endsWith('.br') ? brotliDecompressSync(outputBytes)
    : ledger.output.endsWith('.gz') ? gunzipSync(outputBytes)
      : outputBytes
  const rows = parseJsonLines(decoded, ledger.output)
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index]
    if (!sourceTextParts(row, `${collection}:${index + 1}`).length) continue
    assert.ok(typeof row.colId === 'string' && row.colId.length > 0, `Non-empty source original has no COL ID: ${collection}:${index + 1}`)
    let entry = sourceOriginalById.get(row.colId)
    if (!entry) {
      entry = { collections: new Set(), textRecordCount: 0 }
      sourceOriginalById.set(row.colId, entry)
    }
    entry.collections.add(collection)
    entry.textRecordCount++
    collectionSpeciesIds.get(collection).add(row.colId)
    collectionRowCounts[collection]++
  }
  sourceOriginalInputDigests.push({
    collection,
    ledgerPath,
    ledgerSha256: sha256(ledgerBytes),
    outputPath: ledger.output,
    outputSha256: sha256(outputBytes),
    outputBytes: outputBytes.length,
    textRecordCount: collectionRowCounts[collection],
    distinctSpeciesIds: collectionSpeciesIds.get(collection).size,
  })
}

ensureOutputDirectory()
const oldIndex = checkMode ? JSON.parse(readFileSync(join(queueRoot, 'manifest.json'), 'utf8')) : null
if (checkMode) {
  assert.equal(oldIndex.generatedBy, 'scripts/build-species-evidence-queue.mjs')
  assert.equal(oldIndex.schemaVersion, 1)
}

const indexedShardByPrefix = new Map((oldIndex?.shards ?? []).map(shard => [shard.prefix, shard]))
if (checkMode) assert.deepEqual([...indexedShardByPrefix.keys()].sort(), OUTPUT_PREFIXES, 'Queue manifest shard partition set differs')
const writers = new Map(OUTPUT_PREFIXES.map(prefix => [prefix, checkMode
  ? makeCheckWriter(prefix, indexedShardByPrefix.get(prefix))
  : makeBuildWriter(prefix)]))

const counts = emptyCounts()
const sourceOriginalIds = new Set(sourceOriginalById.keys())
const seenNodeIds = new Set()
const profilesByRank = new Map()
let hierarchyNodeCount = 0
let acceptedSpeciesCount = 0
for (const file of nodeFiles) {
  assert.equal(file.encoding, 'gzip', `Unsupported hierarchy node encoding: ${file.path}`)
  const path = safePath(file.path, registryRoot, registryPrefix, 'COL hierarchy node')
  const compressed = readFileSync(path)
  assert.equal(compressed.length, file.bytes, `COL hierarchy shard byte count mismatch: ${file.path}`)
  assert.equal(sha256(compressed), file.sha256, `COL hierarchy shard checksum mismatch: ${file.path}`)
  const decoded = gunzipSync(compressed)
  assert.equal(decoded.length, file.sourceBytes, `COL hierarchy decoded byte count mismatch: ${file.path}`)
  assert.equal(sha256(decoded), file.sourceSha256, `COL hierarchy decoded checksum mismatch: ${file.path}`)
  const lines = decoded.toString('utf8').split(/\r?\n/).filter(Boolean)
  assert.equal(lines.length, file.records, `COL hierarchy row count mismatch: ${file.path}`)
  for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
    const node = JSON.parse(lines[lineNumber])
    hierarchyNodeCount++
    assert.ok(typeof node.id === 'string' && node.id.length > 0, `Missing COL usage ID in ${file.path}:${lineNumber + 1}`)
    assert.ok(!seenNodeIds.has(node.id), `Duplicate COL hierarchy usage ID: ${node.id}`)
    seenNodeIds.add(node.id)

    const sourceEntry = sourceOriginalById.get(node.id)
    if (sourceEntry) {
      assert.equal(node.rank, 'species', `Source-original link is not on a species usage: ${node.id}`)
      assert.equal(node.status, 'accepted', `Source-original link is not on an accepted species usage: ${node.id}`)
      sourceOriginalIds.delete(node.id)
    }
    const profile = profileMap.get(node.id)
    if (profile) {
      for (const field of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(profile[field], node[field], `Introductory summary ${field} mismatch: ${node.id}`)
      assert.equal(node.status, 'accepted', `Introductory summary is not on an accepted COL usage: ${node.id}`)
      profilesByRank.set(node.rank, (profilesByRank.get(node.rank) ?? 0) + 1)
      profileMap.delete(node.id)
    }
    const dossier = dossierMap.get(node.id)
    if (dossier) {
      for (const field of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(dossier[field], node[field], `Dossier ${field} mismatch: ${node.id}`)
      assert.equal(node.rank, 'species', `Dossier is not on a species usage: ${node.id}`)
      assert.equal(node.status, 'accepted', `Dossier is not on an accepted species usage: ${node.id}`)
      dossierMap.delete(node.id)
    }

    if (node.rank !== 'species') continue
    assert.equal(node.status, 'accepted', `COL hierarchy species is not accepted: ${node.id}`)
    acceptedSpeciesCount++
    const row = buildRow(node, sourceEntry, profile, dossier)
    const line = JSON.stringify(row)
    const prefix = createHash('sha256').update(node.id).digest('hex')[0]
    await writers.get(prefix).write(line)

    counts.acceptedSpecies++
    const hasSourceOriginal = Boolean(sourceEntry)
    const hasSummary = Boolean(profile)
    const hasDossier = Boolean(dossier)
    if (hasSourceOriginal) {
      counts.sourceOriginalAssociatedSpecies++
      for (const collection of row.sourceOriginal.collections) counts.sourceOriginalCollectionSpecies[collection]++
    }
    if (hasSummary) counts.introductorySummarySpecies++
    if (hasDossier) counts.dossierSpecies++
    else counts.speciesWithoutDossier++
    if (hasSourceOriginal || hasSummary || hasDossier) counts.speciesWithAnyEvidenceStage++
    else counts.speciesWithoutAnyEvidenceStage++
    counts.dossierStatuses[row.dossier.status]++
    counts.expertReviewStatuses[row.dossier.expertReviewStatus]++
    counts.claimSourceRightsStatuses[row.dossier.rightsStatus]++
    if (dossier?.completeness.status === 'complete') counts.completeDossierSpecies++
    if (dossier?.expertReview.status === 'externally-reviewed') counts.externallyReviewedSpecies++
    for (const facet of FACETS) counts.facetStatuses[facet][row.dossier.facetStatuses[facet]]++
  }
}

assert.equal(hierarchyNodeCount, registryManifest.hierarchy.counts.nodes, 'Visited hierarchy node count differs from pinned COL manifest')
assert.equal(acceptedSpeciesCount, acceptedSpeciesExpected, 'Queue does not contain the complete accepted-species universe')
assert.equal(counts.acceptedSpecies, acceptedSpeciesExpected)
assert.equal(dossierMap.size, 0, `Dossier IDs absent from pinned COL hierarchy: ${[...dossierMap.keys()].slice(0, 20).join(', ')}`)
assert.equal(profileMap.size, 0, `Summary IDs absent from pinned COL hierarchy: ${[...profileMap.keys()].slice(0, 20).join(', ')}`)
assert.equal(sourceOriginalIds.size, 0, `Source-original IDs absent from accepted COL26.8 species: ${[...sourceOriginalIds].slice(0, 20).join(', ')}`)
assert.equal(counts.dossierSpecies, dossierIndex.recordCount, 'Dossier queue count differs from the validated sparse dossier index')
assert.equal(counts.dossierStatuses.missing, acceptedSpeciesExpected - counts.dossierSpecies)
assert.equal(counts.dossierStatuses.missing, counts.speciesWithoutDossier)
for (const facet of FACETS) assert.equal(Object.values(counts.facetStatuses[facet]).reduce((sum, value) => sum + value, 0), acceptedSpeciesExpected, `Facet rows do not cover every accepted species: ${facet}`)
counts.sourceOriginalCollectionSpecies = Object.fromEntries(Object.entries(counts.sourceOriginalCollectionSpecies).sort(([a], [b]) => a.localeCompare(b)))
counts.profileRanks = Object.fromEntries([...profilesByRank.entries()].sort(([a], [b]) => a.localeCompare(b)))

const shards = []
for (const prefix of OUTPUT_PREFIXES) shards.push(await writers.get(prefix).finish())
const sourceDescriptionRows = sourceOriginalInputDigests.reduce((sum, item) => sum + item.textRecordCount, 0)
const sourceOriginalDistinctSpecies = counts.sourceOriginalAssociatedSpecies
const currentManifest = {
  schemaVersion: 1,
  generatedBy: 'scripts/build-species-evidence-queue.mjs',
  releaseAlias: RELEASE_ALIAS,
  identityBoundary: 'Accepted species are exactly rank=species and status=accepted in the pinned COL26.8 hierarchy; every queue row is keyed by the verbatim COL usage ID.',
  coverageBoundary: 'Source-original associations, introductory profiles, dossiers, facet states, and external review are separate per-species stages. Missing evidence is not a negative biological finding.',
  notIncludedInRuntime: true,
  inputs: {
    registryManifestPath: REGISTRY_MANIFEST_PATH,
    registryManifestSha256: sha256(registryManifestBytes),
    hierarchyNodeFiles: nodeFiles.length,
    hierarchyNodeCount: hierarchyNodeCount,
    profilePath: PROFILE_PATH,
    profileSha256: sha256(profileBytes),
    profileRecordCount: profiles.records.length,
    dossierBasePath: DOSSIER_BASE_PATH,
    dossierBaseSha256: sha256(dossierBaseBytes),
    dossierIndexPath: DOSSIER_INDEX_PATH,
    dossierIndexSha256: sha256(dossierIndexBytes),
    dossierShards: dossierIndex.shards.map(shard => ({ path: shard.path, recordCount: shard.recordCount, compressedSha256: shard.compressedSha256, decodedSha256: shard.decodedSha256 })),
    sourceOriginalCollections: sourceOriginalInputDigests,
  },
  counts: {
    ...counts,
    sourceOriginalTextRecords: sourceDescriptionRows,
    sourceOriginalDistinctSpecies,
  },
  shards,
}

if (checkMode) {
  assert.deepEqual(currentManifest, oldIndex, 'Species evidence queue manifest is stale; rebuild it and refresh data/manifest.json')
  console.log(`Species evidence queue verified: ${counts.acceptedSpecies.toLocaleString()} COL26.8 accepted species across ${shards.length} shards.`)
} else {
  const manifestPath = join(queueRoot, 'manifest.json')
  const temporaryManifestPath = `${manifestPath}.tmp`
  writeFileSync(temporaryManifestPath, `${JSON.stringify(currentManifest, null, 2)}\n`)
  renameSync(temporaryManifestPath, manifestPath)
  console.log(`Species evidence queue built: ${counts.acceptedSpecies.toLocaleString()} accepted species, ${counts.dossierSpecies.toLocaleString()} dossier rows, ${counts.speciesWithoutDossier.toLocaleString()} without dossiers.`)
}
