import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = resolve(root, 'data/sources/primates-alouatta-palliata-batch18-2026-09-24.json')
const rawPath = resolve(root, 'data/knowledge/raw-dossiers/primates-alouatta-palliata-batch18-2026-09-24.jsonl')
const shardPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-alouatta-palliata-batch18-2026-09-24.jsonl.br')
const manifestPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-alouatta-palliata-batch18-2026-09-24.batch-manifest.json')
const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const jsonl = path => gunzipSync(readFileSync(resolve(registryRoot, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const relative = path => path.slice(root.length + 1).replaceAll('\\', '/')

const sourceBytes = readFileSync(sourcePath)
const source = JSON.parse(sourceBytes)
const registryBytes = readFileSync(resolve(registryRoot, 'manifest.json'))
const registry = JSON.parse(registryBytes)
const dossier = source.record
assert.equal(source.schemaVersion, 1)
assert.equal(source.releaseAlias, 'COL26.8')
assert.equal(source.batchId, 'primates-alouatta-palliata-batch18-2026-09-24')
assert.equal(source.duplicateAudit.baseHead, 'e9e65ea39f6be739016ecc388b495cb796426831')
assert.equal(source.duplicateAudit.checkedIndexRecords, 6929)
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
assert.equal(sha(registryBytes), '8bee38bd7b937bb0040d5d2aeade08c02ab2b0044314ffe2641ba482a8a7a151')
assert.equal(dossier.colId, 'C5QJ')
assert.equal(dossier.scientificName, 'Alouatta palliata (Gray, 1849)')
assert.equal(dossier.rank, 'species')
assert.equal(dossier.sourceDatasetId, '2144')
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')

const searchRoute = normalize(dossier.scientificName).slice(0, 2)
const usages = (registry.search.routes[searchRoute] ?? []).flatMap(jsonl).filter(row => row.id === dossier.colId)
assert.equal(usages.length, 1, 'Expected one exact accepted COL26.8 usage')
const usage = usages[0]
for (const [key, expected] of Object.entries({ scientificName: dossier.scientificName, authorship: dossier.authorship, rank: 'species', status: 'accepted', sourceDatasetId: dossier.sourceDatasetId })) assert.equal(String(usage[key]), String(expected), `Pinned COL ${key} mismatch`)

const hierarchy = []
for (let id = dossier.colId; id;) {
  const route = sha(Buffer.from(id, 'utf8')).slice(0, 2)
  const matches = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(jsonl).filter(node => node.id === id)
  assert.equal(matches.length, 1, `Expected one hierarchy node ${id}`)
  assert.equal(matches[0].status, 'accepted', `Unaccepted hierarchy node ${id}`)
  hierarchy.unshift(matches[0])
  id = matches[0].parentId
}
const classificationPath = hierarchy.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.equal(classificationPath.at(-1).id, dossier.colId)
assert.ok(classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))
dossier.classificationPath = classificationPath

const index = JSON.parse(readFileSync(indexPath, 'utf8'))
const existingIds = new Set(), existingNames = new Set()
let indexedCount = 0
for (const shard of index.shards) {
  const compressed = readFileSync(resolve(root, shard.path))
  assert.equal(sha(compressed), shard.compressedSha256, `Compressed hash mismatch: ${shard.path}`)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), shard.decodedSha256, `Decoded hash mismatch: ${shard.path}`)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, shard.recordCount)
  indexedCount += rows.length
  for (const row of rows) { existingIds.add(row.colId); existingNames.add(normalize(row.scientificName)) }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, source.duplicateAudit.checkedIndexRecords)
assert.ok(!existingIds.has(dossier.colId), `COL ID already indexed: ${dossier.colId}`)
assert.ok(!existingNames.has(normalize(dossier.scientificName)), 'Scientific name already indexed')

const identitySource = {
  id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist 2144',
  url: `https://www.checklistbank.org/dataset/316115/taxon/${dossier.colId}`, stableId: `col:${dossier.colId}@COL26.8`,
  version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115', publishedAt: '2026-08-20', accessedAt: dossier.checkedAt,
  locator: `Accepted species usage ${dossier.colId}; verbatim name, authorship, species rank, accepted status, sourceDatasetId 2144 and complete accepted parent path.`,
  license: 'CC BY 4.0 nomenclatural metadata; cited for identity only', licenseAssessment: 'identity-only',
  rightsHolder: 'Catalogue of Life Foundation', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  licenseAppliesTo: 'Pinned checklist nomenclatural and taxonomic metadata only.',
  attribution: `Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, usage ${dossier.colId}. https://doi.org/10.48580/dgywk`,
  scope: 'Accepted nomenclatural identity and classification only; no biological dossier claims are taken from this record.'
}
const biologicalSource = {
  id: 'peerj2017', title: dossier.evidence.title, url: dossier.evidence.url, stableId: `doi:${dossier.evidence.doi}`,
  version: dossier.evidence.version, publishedAt: dossier.evidence.publishedAt, accessedAt: dossier.evidence.accessedAt,
  locator: dossier.evidence.locator, license: dossier.evidence.license, licenseAssessment: 'item-level-verified',
  rightsHolder: dossier.evidence.rightsHolder, licenseVersion: 'CC BY 4.0', licenseUrl: dossier.evidence.licenseUrl,
  rightsEvidenceUrl: dossier.evidence.rightsEvidenceUrl, rightsEvidenceLocator: dossier.evidence.rightsEvidenceLocator,
  licenseAppliesTo: dossier.evidence.licenseAppliesTo, attribution: dossier.evidence.attribution, scope: dossier.evidence.scope
}
dossier.sources = [identitySource, biologicalSource]
assert.ok(dossier.facets.lifeHistory.claims.every(claim => claim.sourceIds.includes('peerj2017')))
assert.ok(dossier.facets.ecology.claims.every(claim => claim.sourceIds.includes('peerj2017')))
assert.equal(biologicalSource.licenseAssessment, 'item-level-verified')
assert.equal(biologicalSource.licenseVersion, 'CC BY 4.0')
assert.equal(biologicalSource.licenseUrl, 'https://creativecommons.org/licenses/by/4.0/')
assert.ok(biologicalSource.rightsEvidenceUrl && biologicalSource.rightsEvidenceLocator.toLowerCase().includes('article front matter'))

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'JSONL must use LF line endings')
const compressed = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
const decoded = brotliDecompressSync(compressed)
assert.deepEqual(decoded, rawBytes, 'Brotli round-trip must exactly reproduce raw JSONL')
assert.deepEqual(JSON.parse(decoded.toString('utf8')), dossier)
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressed)
const manifest = {
  schemaVersion: 1, batchId: source.batchId, releaseAlias: source.releaseAlias,
  input: { path: relative(sourcePath), sha256: sha(sourceBytes) },
  duplicateCheck: { baseHead: source.duplicateAudit.baseHead, openPullRequests: source.duplicateAudit.openPullRequests, indexedRecordCount: indexedCount, colId: dossier.colId, scientificName: dossier.scientificName, matchedColIds: [], matchedNames: [] },
  raw: { path: relative(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha(rawBytes) },
  shard: { path: relative(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: decoded.length, decodedSha256: sha(decoded), compressedBytes: compressed.length, compressedSha256: sha(compressed), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: 'data/catalogue-of-life/releases/2026-08-20/registry/manifest.json', releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha(registryBytes) },
  generator: 'scripts/build-primates-alouatta-palliata-batch18.mjs'
}
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ recordCount: 1, colId: dossier.colId, name: dossier.scientificName, indexedCount, rawSha256: manifest.raw.sha256, compressedSha256: manifest.shard.compressedSha256, byteRoundTrip: decoded.equals(rawBytes) })}\n`)
