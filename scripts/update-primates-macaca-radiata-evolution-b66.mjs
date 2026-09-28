import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants } from 'node:zlib'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_PATH = 'data/sources/primates-macaca-radiata-evolution-b66-2026-09-28.json'
const UPDATE_PATH = 'data/knowledge/primates-macaca-radiata-evolution-b66-2026-09-28.update-manifest.json'
const RAW_PATH = 'data/knowledge/raw-dossiers/primates-macaca-radiata-core-2026-09-26.jsonl'
const SHARD_PATH = 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.jsonl.br'
const SHARD_MANIFEST_PATH = 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.batch-manifest.json'
const INDEX_PATH = 'data/knowledge/catalogue-dossier-shards.json'
const QUEUE_PATH = 'data/knowledge/species-evidence-queue/8.jsonl.br'
const QUEUE_MANIFEST_PATH = 'data/knowledge/species-evidence-queue/manifest.json'
const ROOT_MANIFEST_PATH = 'data/manifest.json'
const TARGET_ID = '3WWP2'
const PROFILE_ID = 'macaca_radiata'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const absolute = path => join(ROOT, path)
const readJson = path => JSON.parse(readFileSync(absolute(path), 'utf8'))
const writeJson = (path, value) => writeFileSync(absolute(path), `${JSON.stringify(value, null, 2)}\n`, 'utf8')

function findMatching(text, openAt, open, close) {
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = openAt; index < text.length; index++) {
    const char = text[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (char === '\\') escaped = true
      else if (char === '"') quoted = false
      continue
    }
    if (char === '"') quoted = true
    else if (char === open) depth++
    else if (char === close && --depth === 0) return index
  }
  throw new Error(`Missing matching ${close}`)
}

function appendArrayRecord(path, item, identity) {
  const absolutePath = absolute(path)
  let text = readFileSync(absolutePath, 'utf8')
  const parsed = JSON.parse(text)
  assert.ok(Array.isArray(parsed), `${path} must be an array`)
  assert.ok(!parsed.some(row => identity(row) === identity(item)), `Duplicate record in ${path}`)
  const close = text.lastIndexOf(']')
  assert.ok(close >= 0, `Missing array close in ${path}`)
  const lineStart = text.lastIndexOf('\n', close) + 1
  const closeIndent = text.slice(lineStart, close)
  const base = text.slice(0, lineStart).replace(/\r?\n$/, '')
  const newline = text.includes('\r\n') ? '\r\n' : '\n'
  const formatted = JSON.stringify(item, null, 2).split('\n').map(line => `${closeIndent}  ${line}`).join(newline)
  text = `${base}${parsed.length ? ',' : ''}${newline}${formatted}${newline}${closeIndent}${text.slice(close)}`
  JSON.parse(text)
  writeFileSync(absolutePath, text, 'utf8')
}

function appendArrayValue(path, value) {
  const absolutePath = absolute(path)
  let text = readFileSync(absolutePath, 'utf8')
  const parsed = JSON.parse(text)
  assert.ok(Array.isArray(parsed), `${path} must be an array`)
  if (parsed.includes(value)) return
  const close = text.lastIndexOf(']')
  assert.ok(close >= 0, `Missing array close in ${path}`)
  const lineStart = text.lastIndexOf('\n', close) + 1
  const closeIndent = text.slice(lineStart, close)
  const base = text.slice(0, lineStart).replace(/\r?\n$/, '')
  const newline = text.includes('\r\n') ? '\r\n' : '\n'
  const itemIndent = `${closeIndent}  `
  text = `${base}${parsed.length ? ',' : ''}${newline}${itemIndent}${JSON.stringify(value)}${newline}${closeIndent}${text.slice(close)}`
  JSON.parse(text)
  writeFileSync(absolutePath, text, 'utf8')
}

function appendObjectEntry(path, key, value) {
  const absolutePath = absolute(path)
  let text = readFileSync(absolutePath, 'utf8')
  const parsed = JSON.parse(text)
  assert.ok(!Object.hasOwn(parsed, key), `Duplicate translation key ${key} in ${path}`)
  const close = text.lastIndexOf('}')
  assert.ok(close >= 0, `Missing object close in ${path}`)
  const lineStart = text.lastIndexOf('\n', close) + 1
  const closeIndent = text.slice(lineStart, close)
  const base = text.slice(0, lineStart).replace(/\r?\n$/, '')
  const newline = text.includes('\r\n') ? '\r\n' : '\n'
  const entryIndent = `${closeIndent}  `
  text = `${base},${newline}${entryIndent}${JSON.stringify(key)}: ${JSON.stringify(value)}${newline}${closeIndent}${text.slice(close)}`
  JSON.parse(text)
  writeFileSync(absolutePath, text, 'utf8')
}

function patchProfileRecord(path, expectedRecordHash, profileUpdate) {
  let text = readFileSync(absolute(path), 'utf8')
  const rows = JSON.parse(text)
  assert.ok(Array.isArray(rows), `${path} must contain an array`)
  const row = rows.find(item => item.id === PROFILE_ID)
  assert.ok(row, `Missing selected core profile ${PROFILE_ID} in ${path}`)
  assert.equal(sha256(Buffer.from(JSON.stringify(row), 'utf8')), expectedRecordHash, `Selected profile changed in ${path}; re-audit before applying`)

  const updates = {
    overview: profileUpdate.overview,
    evidenceSummary: profileUpdate.evidenceSummary,
    geography: [...row.geography, profileUpdate.geographyAppend],
    referenceIds: [...row.referenceIds, profileUpdate.referenceId],
  }
  assert.ok(!row.geography.includes(profileUpdate.geographyAppend))
  assert.ok(!row.referenceIds.includes(profileUpdate.referenceId))

  for (const [key, value] of Object.entries(updates)) {
    const marker = `"id": ${JSON.stringify(PROFILE_ID)}`
    const idAt = text.indexOf(marker)
    assert.ok(idAt >= 0, `Cannot locate ${PROFILE_ID} in ${path}`)
    const recordStart = text.lastIndexOf('\n  {', idAt) + 1
    const openRecord = text.indexOf('{', recordStart)
    const closeRecord = findMatching(text, openRecord, '{', '}')
    const propertyAt = text.indexOf(`${JSON.stringify(key)}:`, idAt)
    assert.ok(propertyAt > idAt && propertyAt < closeRecord, `Cannot locate ${key} for ${PROFILE_ID} in ${path}`)
    const colon = text.indexOf(':', propertyAt) + 1
    let valueStart = colon
    while (/\s/.test(text[valueStart] ?? '')) valueStart++

    if (typeof value === 'string') {
      assert.equal(typeof row[key], 'string')
      let valueEnd = valueStart + 1
      let escaped = false
      for (; valueEnd < text.length; valueEnd++) {
        const char = text[valueEnd]
        if (escaped) escaped = false
        else if (char === '\\') escaped = true
        else if (char === '"') break
      }
      assert.equal(text[valueStart], '"')
      text = `${text.slice(0, valueStart)}${JSON.stringify(value)}${text.slice(valueEnd + 1)}`
    } else {
      assert.ok(Array.isArray(value))
      const openArray = text.indexOf('[', valueStart)
      assert.ok(openArray >= valueStart && openArray < closeRecord)
      const closeArray = findMatching(text, openArray, '[', ']')
      const lineStart = text.lastIndexOf('\n', propertyAt) + 1
      const indent = text.slice(lineStart, propertyAt)
      const newline = text.includes('\r\n') ? '\r\n' : '\n'
      const rendered = value.length
        ? `[${newline}${value.map(item => `${indent}  ${JSON.stringify(item)}`).join(`,${newline}`)}${newline}${indent}]`
        : '[]'
      text = `${text.slice(0, openArray)}${rendered}${text.slice(closeArray + 1)}`
    }
  }
  JSON.parse(text)
  writeFileSync(absolute(path), text, 'utf8')
}

const sourceBytes = readFileSync(absolute(SOURCE_PATH))
const source = JSON.parse(sourceBytes.toString('utf8'))
assert.equal(source.schemaVersion, 1)
assert.equal(source.batchId, 'primates-macaca-radiata-evolution-b66-2026-09-28')
assert.equal(source.releaseAlias, 'COL26.8')
assert.deepEqual(source.target, {
  colId: TARGET_ID,
  scientificName: 'Macaca radiata (É. Geoffroy Saint-Hilaire, 1812)',
  rank: 'species',
  sourceDatasetId: '2144',
  previewPackageId: 'primates',
  previewTaxonId: PROFILE_ID,
})
assert.equal(source.sourceRef.stableId, source.audit.stableId)
assert.equal(source.sourceRef.licenseAssessment, 'item-level-verified')
assert.equal(source.sourceRef.licenseVersion, 'CC BY 4.0')
assert.deepEqual(source.claim.sourceIds, [source.sourceRef.id])
assert.equal(source.claim.translationStatus, 'translated')
assert.equal(source.evidenceClaim.claimType, 'evolution')
assert.equal(source.evidenceClaim.subjectId, `taxon:${PROFILE_ID}`)

if (existsSync(absolute(UPDATE_PATH))) {
  const applied = readJson(UPDATE_PATH)
  assert.equal(applied.batchId, source.batchId)
  assert.equal(applied.input.sha256, sha256(sourceBytes))
  assert.equal(sha256(readFileSync(absolute(RAW_PATH))), applied.output.rawSha256)
  assert.equal(sha256(readFileSync(absolute(SHARD_PATH))), applied.output.compressedSha256)
  console.log(JSON.stringify({ batchId: source.batchId, status: 'already-applied', targetColId: TARGET_ID }, null, 2))
  process.exit(0)
}

assert.equal(sha256(readFileSync(absolute(join('data/catalogue-of-life/releases/2026-08-20/registry/manifest.json')))), source.audit.registryManifestSha256)
assert.equal(sha256(readFileSync(absolute('data/pages-preview.json'))), source.audit.pagesPreviewManifestSha256)

const rawBefore = readFileSync(absolute(RAW_PATH))
const shardBefore = readFileSync(absolute(SHARD_PATH))
assert.equal(sha256(rawBefore), source.audit.previousRawSha256)
assert.equal(sha256(shardBefore), source.audit.previousCompressedSha256)
const rawLines = rawBefore.toString('utf8').trimEnd().split('\n')
assert.equal(rawLines.length, 1, 'Only the selected one-record dossier shard is updated')
const dossier = JSON.parse(rawLines[0])
assert.equal(sha256(Buffer.from(JSON.stringify(dossier), 'utf8')), source.audit.previousTargetRecordSha256)
assert.equal(dossier.colId, TARGET_ID)
assert.equal(String(dossier.sourceDatasetId), source.target.sourceDatasetId)
assert.equal(dossier.facets.evolution.status, 'not-assessed')
assert.deepEqual(dossier.facets.evolution.claims ?? [], [])
assert.ok(!dossier.sources.some(item => item.stableId === source.sourceRef.stableId))
assert.deepEqual(brotliDecompressSync(shardBefore), rawBefore, 'Selected dossier shard must match its raw one-record source')

const dossierNext = structuredClone(dossier)
dossierNext.checkedAt = source.checkedAt
dossierNext.sources.push(structuredClone(source.sourceRef))
dossierNext.lifeStatusScope.wild = source.wildScope
dossierNext.facets.evolution = {
  status: 'partially-supported',
  claims: [structuredClone(source.claim)],
  gaps: [source.evolutionGap],
}
dossierNext.completeness.status = 'incomplete'
if (!dossierNext.completeness.reasons.includes(source.completenessReasonAppend)) {
  dossierNext.completeness.reasons.push(source.completenessReasonAppend)
}
assert.equal(dossierNext.expertReview.status, 'not-reviewed')

const rawAfter = Buffer.from(`${JSON.stringify(dossierNext)}\n`, 'utf8')
const shardAfter = brotliCompressSync(rawAfter, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
  },
})
assert.deepEqual(brotliDecompressSync(shardAfter), rawAfter, 'Updated dossier bytes must round-trip exactly')

const index = readJson(INDEX_PATH)
const indexedShard = index.shards.find(item => item.path === SHARD_PATH)
assert.ok(indexedShard, 'Selected dossier shard is not registered')
indexedShard.decodedSha256 = sha256(rawAfter)
indexedShard.compressedSha256 = sha256(shardAfter)

const shardManifest = readJson(SHARD_MANIFEST_PATH)
assert.equal(shardManifest.path, SHARD_PATH)
shardManifest.rawSha256 = sha256(rawAfter)
shardManifest.decodedSha256 = sha256(rawAfter)
shardManifest.compressedSha256 = sha256(shardAfter)
shardManifest.decodedBytes = rawAfter.length
shardManifest.compressedBytes = shardAfter.length
shardManifest.checkedAt = source.checkedAt
shardManifest.updateMode = 'in-place-update-one-existing-record'
shardManifest.supplementalUpdates ??= []
shardManifest.supplementalUpdates.push({
  batchId: source.batchId,
  sourcePath: SOURCE_PATH,
  sourceSha256: sha256(sourceBytes),
  generator: 'scripts/update-primates-macaca-radiata-evolution-b66.mjs',
  baseHead: source.audit.baseHead,
  previousRawSha256: source.audit.previousRawSha256,
  previousCompressedSha256: source.audit.previousCompressedSha256,
  rawSha256: sha256(rawAfter),
  compressedSha256: sha256(shardAfter),
  stableId: source.sourceRef.stableId,
  facet: 'evolution',
  appAndPagesPreviewManifestChanged: false,
})

const queueBefore = readFileSync(absolute(QUEUE_PATH))
assert.equal(sha256(queueBefore), source.audit.queue.compressedSha256)
const queueLines = brotliDecompressSync(queueBefore).toString('utf8').split('\n')
const matchingQueueLines = []
for (let index = 0; index < queueLines.length; index++) {
  if (queueLines[index].includes(`"colId":"${TARGET_ID}"`)) matchingQueueLines.push(index)
}
assert.equal(matchingQueueLines.length, 1, 'Exactly one target row must occur in the changed queue partition')
const queueLineIndex = matchingQueueLines[0]
assert.equal(sha256(Buffer.from(queueLines[queueLineIndex], 'utf8')), source.audit.queue.rowSha256)
const queueRow = JSON.parse(queueLines[queueLineIndex])
assert.equal(queueRow.dossier.claimCount, source.audit.queue.claimCount)
assert.equal(queueRow.dossier.facetStatuses.evolution, source.audit.queue.evolutionStatus)
assert.ok(!queueRow.dossier.sourceIds.includes(source.sourceRef.id))
queueRow.dossier.sourceIds.push(source.sourceRef.id)
queueRow.dossier.claimCount++
queueRow.dossier.facetStatuses.evolution = 'partially-supported'
queueLines[queueLineIndex] = JSON.stringify(queueRow)
const queueAfter = Buffer.from(queueLines.join('\n'), 'utf8')
const queueCompressedAfter = brotliCompressSync(queueAfter, {
  params: {
    [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT,
    [zlibConstants.BROTLI_PARAM_QUALITY]: 8,
  },
})
assert.deepEqual(brotliDecompressSync(queueCompressedAfter), queueAfter, 'Updated queue partition must round-trip exactly')
const queueManifest = readJson(QUEUE_MANIFEST_PATH)
const queueManifestShard = queueManifest.shards.find(item => item.path === QUEUE_PATH)
assert.ok(queueManifestShard, 'Selected species queue partition is not registered')
queueManifestShard.decodedBytes = queueAfter.length
queueManifestShard.decodedSha256 = sha256(queueAfter)
queueManifestShard.compressedBytes = queueCompressedAfter.length
queueManifestShard.compressedSha256 = sha256(queueCompressedAfter)
const queueManifestDossierShard = queueManifest.inputs?.dossierShards?.find(item => item.path === SHARD_PATH)
assert.ok(queueManifestDossierShard, 'Selected dossier shard is not registered as a queue input')
assert.equal(queueManifestDossierShard.compressedSha256, source.audit.previousCompressedSha256)
assert.equal(queueManifestDossierShard.decodedSha256, source.audit.previousRawSha256)
queueManifestDossierShard.compressedSha256 = sha256(shardAfter)
queueManifestDossierShard.decodedSha256 = sha256(rawAfter)

appendArrayRecord('data/evidence/claims.json', source.evidenceClaim, item => item.id)
const reference = {
  id: source.profileUpdate.referenceId,
  title: source.sourceRef.title,
  authors: 'Dixit, Jyotsana; Zachariah, Arun; Sajesh, P. K.; Chandramohan, Bathrachalam; Shanmuganatham, Vinoth; Karanth, K. Praveen',
  publishedYear: 2018,
  type: 'paper',
  url: source.sourceRef.url,
  doi: '10.1371/journal.pntd.0006801',
  publisher: 'PLOS Neglected Tropical Diseases',
  pages: '12(12):e0006801',
  sourceRole: 'primary-study',
  fitnessFor: ['evolution', 'biogeography'],
  metadataAssignment: 'curator-reviewed',
  note: 'Primary source for a bounded Macaca radiata host mtDNA D-loop phylogeography result. The claim excludes the paper’s separate captive blood/tissue cohort and does not establish genome-wide structure or a human-translocation cause. Article text states CC BY 4.0.',
}
appendArrayRecord('data/references.json', reference, item => item.id)
appendArrayRecord('data/packages/mammalia/primates/references.json', reference, item => item.id)
appendArrayValue('data/packages/mammalia/primates/evidence/claim-ids.json', source.evidenceClaim.id)
appendObjectEntry('data/evidence/claim-statements.zh.json', source.evidenceClaim.id, source.claim.textZh)
appendObjectEntry('data/evidence/claim-rationales.zh.json', source.evidenceClaim.id, source.evidenceClaim.confidenceRationaleZh)
appendObjectEntry('data/packages/mammalia/primates/locales/zh.json', `claim.${source.evidenceClaim.id}.confidenceRationale`, source.evidenceClaim.confidenceRationaleZh)

for (const [path, expectedHash] of Object.entries(source.audit.profileRecords)) {
  patchProfileRecord(path, expectedHash, source.profileUpdate)
}

const queueManifestShardAfter = queueManifestShard
const updateManifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: SOURCE_PATH, sha256: sha256(sourceBytes) },
  audit: source.audit,
  target: source.target,
  source: {
    id: source.sourceRef.id,
    stableId: source.sourceRef.stableId,
    licenseAssessment: source.sourceRef.licenseAssessment,
    licenseVersion: source.sourceRef.licenseVersion,
    rightsHolder: source.sourceRef.rightsHolder,
  },
  previous: {
    rawSha256: source.audit.previousRawSha256,
    compressedSha256: source.audit.previousCompressedSha256,
    targetRecordSha256: source.audit.previousTargetRecordSha256,
    queueCompressedSha256: source.audit.queue.compressedSha256,
    queueTargetRowSha256: source.audit.queue.rowSha256,
  },
  output: {
    rawSha256: sha256(rawAfter),
    compressedSha256: sha256(shardAfter),
    recordCount: 1,
    roundTrip: 'exact-byte-match',
    queue: {
      path: QUEUE_PATH,
      decodedBytes: queueManifestShardAfter.decodedBytes,
      decodedSha256: queueManifestShardAfter.decodedSha256,
      compressedBytes: queueManifestShardAfter.compressedBytes,
      compressedSha256: queueManifestShardAfter.compressedSha256,
      targetRowSha256: sha256(Buffer.from(queueLines[queueLineIndex], 'utf8')),
    },
    queueInputDossierShard: {
      path: SHARD_PATH,
      recordCount: queueManifestDossierShard.recordCount,
      decodedSha256: queueManifestDossierShard.decodedSha256,
      compressedSha256: queueManifestDossierShard.compressedSha256,
    },
    sharedCoreFiles: [
      'data/packages/mammalia/primates/profiles.source.json',
      'data/packages/mammalia/primates/profiles.json',
      'data/registry/taxon-profiles.json',
      'data/evidence/claims.json',
    ],
  },
  updateMode: 'in-place-add-one-bounded-evolution-claim-and-update-shared-core-profile',
  appAndPagesPreviewManifestSha256: source.audit.pagesPreviewManifestSha256,
  appAndPagesPreviewManifestChanged: false,
}

writeFileSync(absolute(RAW_PATH), rawAfter)
writeFileSync(absolute(SHARD_PATH), shardAfter)
writeJson(INDEX_PATH, index)
writeJson(SHARD_MANIFEST_PATH, shardManifest)
writeFileSync(absolute(QUEUE_PATH), queueCompressedAfter)
writeJson(QUEUE_MANIFEST_PATH, queueManifest)
writeJson(UPDATE_PATH, updateManifest)

const rootManifest = readJson(ROOT_MANIFEST_PATH)
assert.equal(rootManifest.records.evidenceClaims, source.audit.rootCounts.evidenceClaims)
assert.equal(rootManifest.records.references, source.audit.rootCounts.references)
assert.equal(rootManifest.records.speciesFacetEvolutionPartiallySupported, source.audit.rootCounts.speciesFacetEvolutionPartiallySupported)
assert.equal(rootManifest.records.speciesFacetEvolutionNotAssessed, source.audit.rootCounts.speciesFacetEvolutionNotAssessed)
rootManifest.records.evidenceClaims++
rootManifest.records.references++
rootManifest.records.speciesFacetEvolutionPartiallySupported++
rootManifest.records.speciesFacetEvolutionNotAssessed--

const checksumPaths = [
  'data/evidence/claim-rationales.zh.json',
  'data/evidence/claim-statements.zh.json',
  'data/evidence/claims.json',
  INDEX_PATH,
  SHARD_MANIFEST_PATH,
  UPDATE_PATH,
  'data/packages/mammalia/primates/evidence/claim-ids.json',
  'data/packages/mammalia/primates/locales/zh.json',
  'data/packages/mammalia/primates/profiles.json',
  'data/packages/mammalia/primates/profiles.source.json',
  'data/packages/mammalia/primates/references.json',
  'data/registry/taxon-profiles.json',
  'data/references.json',
  SOURCE_PATH,
]
for (const path of checksumPaths) {
  const checksum = sha256(readFileSync(absolute(path)))
  assert.ok(Object.hasOwn(rootManifest.checksums, path) || path === SOURCE_PATH || path === UPDATE_PATH, `Missing incremental checksum entry for ${path}`)
  rootManifest.checksums[path] = checksum
}
rootManifest.checksums = Object.fromEntries(Object.entries(rootManifest.checksums).sort(([left], [right]) => left < right ? -1 : left > right ? 1 : 0))
writeJson(ROOT_MANIFEST_PATH, rootManifest)

console.log(JSON.stringify({
  batchId: source.batchId,
  targetColId: TARGET_ID,
  targetName: source.target.scientificName,
  sourceId: source.sourceRef.id,
  facet: 'evolution',
  facetStatus: dossierNext.facets.evolution.status,
  dossierStatus: dossierNext.completeness.status,
  claimCount: queueRow.dossier.claimCount,
  coreProfileUpdated: true,
  rootCounts: {
    evidenceClaims: rootManifest.records.evidenceClaims,
    references: rootManifest.records.references,
    speciesFacetEvolutionPartiallySupported: rootManifest.records.speciesFacetEvolutionPartiallySupported,
    speciesFacetEvolutionNotAssessed: rootManifest.records.speciesFacetEvolutionNotAssessed,
  },
  appAndPagesPreviewManifestChanged: false,
}, null, 2))
