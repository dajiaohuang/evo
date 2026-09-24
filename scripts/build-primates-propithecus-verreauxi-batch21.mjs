import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = resolve(root, 'data/sources/primates-propithecus-verreauxi-batch21-2026-09-24.json')
const rawPath = resolve(root, 'data/knowledge/raw-dossiers/primates-propithecus-verreauxi-batch21-2026-09-24.jsonl')
const shardPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-propithecus-verreauxi-batch21-2026-09-24.jsonl.br')
const manifestPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-propithecus-verreauxi-batch21-2026-09-24.batch-manifest.json')
const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const jsonl = path => gunzipSync(readFileSync(resolve(registryRoot, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const relative = path => path.slice(root.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))

const sourceBytes = readFileSync(sourcePath)
const source = JSON.parse(sourceBytes)
const dossier = source.records[0]
const registryBytes = readFileSync(resolve(registryRoot, 'manifest.json'))
const registry = JSON.parse(registryBytes)
assert.equal(source.schemaVersion, 1)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.batchId, 'primates-propithecus-verreauxi-batch21-2026-09-24')
assert.equal(source.duplicateAudit.baseHead, '8db03f8d1270d8465ddf4a9f33460f0d4ad94e71')
assert.equal(source.duplicateAudit.openPullRequests.length, 0)
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.equal(sha(registryBytes), source.registry.manifestSha256)
for (const [key, value] of Object.entries({
  colId: '77XPX', scientificName: 'Propithecus verreauxi Grandidier, 1867',
  authorship: 'Grandidier, 1867', rank: 'species', sourceDatasetId: '2144',
})) assert.equal(dossier[key], value)
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')

const route = normalize(dossier.scientificName).slice(0, 2)
const usages = (registry.search.routes[route] ?? []).flatMap(jsonl).filter(item => item.id === dossier.colId)
assert.equal(usages.length, 1, 'Expected one exact accepted COL26.8 name-search usage')
for (const [key, value] of Object.entries({
  scientificName: dossier.scientificName, authorship: dossier.authorship,
  rank: 'species', status: 'accepted', parentId: '6WXL', sourceDatasetId: dossier.sourceDatasetId,
})) assert.equal(String(usages[0][key]), String(value), `Pinned COL ${key} mismatch`)

const targetPrefix = sha(Buffer.from(dossier.colId, 'utf8')).slice(0, 2)
const targets = (registry.acceptedTargets.routes[targetPrefix] ?? []).flatMap(jsonl).filter(item => item.id === dossier.colId)
assert.equal(targets.length, 1, 'Expected one exact acceptedTargets usage')
assert.equal(targets[0].scientificName, dossier.scientificName)

const hierarchy = []
for (let id = dossier.colId; id;) {
  const key = sha(Buffer.from(id, 'utf8')).slice(0, 2)
  const matches = (registry.hierarchy.nodes.routes[key] ?? []).flatMap(jsonl).filter(item => item.id === id)
  assert.equal(matches.length, 1, `Expected one hierarchy node ${id}`)
  assert.equal(matches[0].status, 'accepted', `Unaccepted hierarchy node ${id}`)
  hierarchy.unshift(matches[0])
  id = matches[0].parentId
}
dossier.classificationPath = hierarchy.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.equal(dossier.classificationPath.at(-1).id, dossier.colId)
assert.ok(dossier.classificationPath.some(node => node.id === '6WXL' && node.rank === 'genus' && node.scientificName.startsWith('Propithecus ')))
assert.ok(dossier.classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))

const index = readJson(indexPath)
assert.equal(index.recordCount, source.duplicateAudit.checkedIndexRecords)
const existingIds = new Set(), existingNames = new Set()
let indexedCount = 0
const shardRelativePath = relative(shardPath)
assert.ok(!index.shards.some(item => item.path === shardRelativePath), 'New batch shard already appears in the global index')
for (const item of index.shards) {
  const compressed = readFileSync(resolve(root, item.path))
  assert.equal(sha(compressed), item.compressedSha256, `Compressed checksum mismatch: ${item.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), item.decodedSha256, `Decoded checksum mismatch: ${item.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, item.recordCount, `Record count mismatch: ${item.path}`)
  indexedCount += rows.length
  for (const row of rows) {
    const name = normalize(row.scientificName)
    assert.ok(!existingIds.has(row.colId), `Duplicate indexed COL ID ${row.colId}`)
    assert.ok(!existingNames.has(name), `Duplicate indexed scientific name ${row.scientificName}`)
    existingIds.add(row.colId)
    existingNames.add(name)
  }
}
assert.equal(indexedCount, index.recordCount)
assert.ok(!existingIds.has(dossier.colId), `COL ID already indexed: ${dossier.colId}`)
assert.ok(!existingNames.has(normalize(dossier.scientificName)), `Scientific name already indexed: ${dossier.scientificName}`)

const sourceIds = new Set(dossier.sources.map(item => item.id))
assert.equal(sourceIds.size, dossier.sources.length, 'Source IDs must be unique')
assert.deepEqual(Object.keys(dossier.facets).sort(), ['conservation', 'distribution', 'ecology', 'evolution', 'fossil', 'lifeHistory', 'morphology'].sort(), 'Dossier must use exactly the seven supported facets')
for (const assessment of Object.values(dossier.facets)) {
  if (assessment.status === 'not-assessed') assert.ok(assessment.gaps?.length, 'Not-assessed facets need explicit gaps')
  for (const claim of assessment.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
    assert.equal(claim.translationStatus, 'untranslated')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
    for (const id of claim.sourceIds) {
      const record = dossier.sources.find(item => item.id === id)
      assert.equal(record.licenseAssessment, 'item-level-verified', `Claim source license is not item-level verified: ${id}`)
      for (const field of ['stableId', 'publishedAt', 'accessedAt', 'rightsHolder', 'licenseVersion', 'licenseUrl', 'rightsEvidenceUrl', 'rightsEvidenceLocator', 'licenseAppliesTo', 'attribution']) {
        assert.ok(record[field], `Claim source ${id} missing ${field}`)
      }
    }
  }
}
assert.equal(dossier.sources.find(item => item.id === 'malalaharivony2021').licenseVersion, 'CC BY 4.0')
assert.equal(dossier.sources.find(item => item.id === 'veilleux2016').licenseVersion, 'CC BY 4.0')
assert.ok(dossier.facets.lifeHistory.claims.some(claim => claim.text.includes('12 wild infants') && claim.text.includes('2018 cohort') && claim.text.includes('before a full six-month window')))
assert.ok(dossier.facets.ecology.claims.some(claim => claim.text.includes('low rainfall') && claim.text.includes('does not define the species')))
assert.ok(dossier.facets.ecology.claims.some(claim => claim.text.includes('genotype is a proxy') && claim.text.includes('not a retinal anatomical measurement')))

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'Brotli round-trip must exactly reproduce raw JSONL')
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressedBytes)

const manifest = {
  schemaVersion: 1,
  batchId: source.batchId,
  releaseAlias: source.releaseAlias,
  input: { path: relative(sourcePath), sha256: sha(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, indexedRecordCount: indexedCount, colId: dossier.colId, scientificName: dossier.scientificName, matchedColIds: [], matchedNames: [], openPullRequests: [] },
  raw: { path: relative(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha(rawBytes) },
  shard: { path: relative(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: rawBytes.length, decodedSha256: sha(rawBytes), compressedBytes: compressedBytes.length, compressedSha256: sha(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha(registryBytes) },
  generator: 'scripts/build-primates-propithecus-verreauxi-batch21.mjs',
}
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

index.shards.push({ path: shardRelativePath, recordCount: 1, decodedSha256: sha(rawBytes), compressedSha256: sha(compressedBytes) })
index.recordCount = indexedCount + 1
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ recordCount: 1, colId: dossier.colId, scientificName: dossier.scientificName, indexedBefore: indexedCount, indexedAfter: index.recordCount, rawSha256: sha(rawBytes), compressedSha256: sha(compressedBytes), roundTrip: 'exact-byte-match' })}\n`)
