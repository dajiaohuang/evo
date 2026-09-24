import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gunzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const baseInputPath = resolve(root, 'data/sources/primates-trachypithecus-francoisi-batch20-2026-09-24.json')
const revisionInputPath = resolve(root, 'data/sources/primates-trachypithecus-francoisi-scope-audit-2026-09-24.json')
const rawPath = resolve(root, 'data/knowledge/raw-dossiers/primates-trachypithecus-francoisi-batch20-2026-09-24.jsonl')
const shardPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-trachypithecus-francoisi-batch20-2026-09-24.jsonl.br')
const batchManifestPath = resolve(root, 'data/knowledge/catalogue-dossiers-primates-trachypithecus-francoisi-batch20-2026-09-24.batch-manifest.json')
const indexPath = resolve(root, 'data/knowledge/catalogue-dossier-shards.json')
const registryRoot = resolve(root, 'data/catalogue-of-life/releases/2026-08-20/registry')
const registryManifestPath = resolve(registryRoot, 'manifest.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const relative = path => path.slice(root.length + 1).replaceAll('\\', '/')
const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const readJsonl = path => gunzipSync(readFileSync(resolve(registryRoot, path))).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const readHierarchyNode = (registry, id) => {
  const prefix = sha(Buffer.from(id, 'utf8')).slice(0, 2)
  const matches = (registry.hierarchy.nodes.routes[prefix] ?? []).flatMap(readJsonl).filter(node => node.id === id)
  assert.equal(matches.length, 1, 'Expected one hierarchy node for ' + id)
  return matches[0]
}

const baseBytes = readFileSync(baseInputPath)
const base = JSON.parse(baseBytes)
const revisionBytes = readFileSync(revisionInputPath)
const revision = JSON.parse(revisionBytes)
const registryBytes = readFileSync(registryManifestPath)
const registry = JSON.parse(registryBytes)
const rawBefore = readFileSync(rawPath)
const currentCompressed = readFileSync(shardPath)
const currentRows = brotliDecompressSync(currentCompressed).toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const dossier = currentRows.find(row => row.colId === revision.target.colId)

assert.equal(base.schemaVersion, 1)
assert.equal(base.releaseAlias, revision.target.releaseAlias)
assert.equal(base.batchId, revision.target.baseBatchId)
assert.equal(revision.schemaVersion, 1)
assert.equal(revision.target.releaseDate, '2026-08-20')
assert.equal(revision.decision.previousDistributionStatus, 'conflicted')
assert.equal(revision.decision.newDistributionStatus, 'partially-supported')
assert.equal(currentRows.length, 1)
assert.ok(dossier, 'Expected the target dossier in its current indexed shard')
assert.equal(registry.releaseAlias, revision.target.releaseAlias)
assert.equal(registry.releaseDate, revision.target.releaseDate)
assert.equal(registry.checklistBankDatasetKey, revision.target.checklistBankDatasetKey)
assert.equal(sha(registryBytes), base.registry.manifestSha256)
assert.equal(dossier.colId, revision.target.colId)
assert.equal(dossier.scientificName, revision.target.scientificName)
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
assert.equal(dossier.facets.distribution.status, revision.decision.previousDistributionStatus)

const searchRows = gunzipSync(readFileSync(resolve(root, revision.classificationEvidence.searchShardPath)))
  .toString('utf8').split('\n').filter(Boolean).map(JSON.parse)
const expectedTaxa = revision.classificationEvidence.acceptedRelatedTaxa
assert.equal(expectedTaxa.length, 4)
for (const expected of expectedTaxa) {
  const matches = searchRows.filter(row => row.id === expected.id)
  assert.equal(matches.length, 1, 'Expected one pinned name-search row for ' + expected.id)
  assert.equal(matches[0].scientificName, expected.scientificName)
  assert.equal(matches[0].rank, 'species')
  assert.equal(matches[0].status, 'accepted')
  const node = readHierarchyNode(registry, expected.id)
  assert.equal(node.scientificName, expected.scientificName)
  assert.equal(node.rank, 'species')
  assert.equal(node.status, 'accepted')
  assert.equal(node.parentId, revision.target.parentGenusId)
}
const targetPrefix = sha(Buffer.from(revision.target.colId, 'utf8')).slice(0, 2)
const targetProjection = (registry.acceptedTargets.routes[targetPrefix] ?? []).flatMap(readJsonl).filter(row => row.id === revision.target.colId)
assert.equal(targetProjection.length, 0, 'Target remains outside the smaller acceptedTargets projection')

const pathNodes = []
for (let id = revision.target.colId; id;) {
  const node = readHierarchyNode(registry, id)
  assert.equal(node.status, 'accepted', 'Unaccepted node in target hierarchy at ' + id)
  pathNodes.unshift(node)
  id = node.parentId
}
dossier.classificationPath = pathNodes.map(({ id, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id, scientificName, authorship, rank, status, sourceDatasetId }))
assert.ok(dossier.classificationPath.some(node => node.id === revision.target.parentGenusId && node.rank === 'genus'))
assert.ok(dossier.classificationPath.some(node => node.id === '3W7' && node.rank === 'order' && node.scientificName === 'Primates Linnaeus, 1758'))

dossier.identity.method = 'Exact accepted COL26.8 usage 57SDB was verified in the pinned name-search shard and accepted hierarchy; the scientific name, authorship, species rank, sourceDatasetId, accepted status, genus parent, and path through Primates match. The same frozen genus records list T. laotum, T. ebenus, and T. hatinhensis as separate accepted species. Registry identity establishes taxonomic scope only, not geographic occurrence.'
dossier.identity.scope = 'Fixed accepted COL26.8 species usage 57SDB from release 2026-08-20. Biological claims remain bounded to their cited samples, places, dates, and life-status scopes; they do not establish complete current range or species-wide trait values.'

const colSource = dossier.sources.find(item => item.id === 'col')
const caoSource = dossier.sources.find(item => item.id === 'cao2026')
assert.ok(colSource && caoSource, 'Expected existing COL and Cao source records')
colSource.license = 'CC BY 4.0 nomenclatural metadata from the pinned COL26.8 release; no biological claims are taken from the checklist.'
colSource.licenseAssessment = 'item-level-verified'
colSource.licenseUrl = registry.license.url
colSource.rightsEvidenceUrl = 'https://doi.org/10.48580/dgywk'
colSource.rightsEvidenceLocator = 'Pinned COL26.8 registry manifest > license: raw cc by; label CC BY 4.0; SPDX CC-BY-4.0; license URL ' + registry.license.url + '.'
colSource.licenseAppliesTo = 'The COL26.8 release dataset and the nomenclatural metadata retained from it; no source-checklist prose or biological trait content is reproduced.'
colSource.attribution = registry.citation
caoSource.locator = revision.sourceUpdates.cao2026Locator
caoSource.scope = revision.sourceUpdates.cao2026Scope
for (const reference of revision.referenceOnlySources) {
  assert.ok(!dossier.sources.some(item => item.id === reference.id), 'Reference source already present: ' + reference.id)
  dossier.sources.push(reference)
}

dossier.facets.distribution = revision.distribution
dossier.completeness.reasons = revision.completenessReasons
assert.equal(dossier.facets.distribution.status, revision.decision.newDistributionStatus)
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
const sourceIds = new Set(dossier.sources.map(item => item.id))
assert.equal(sourceIds.size, dossier.sources.length)
for (const facet of Object.values(dossier.facets)) {
  if (facet.status === 'not-assessed') assert.ok(facet.gaps && facet.gaps.length)
  for (const claim of facet.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus)
    assert.equal(claim.translationStatus, 'untranslated')
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
    for (const id of claim.sourceIds) {
      const source = dossier.sources.find(item => item.id === id)
      assert.equal(source.licenseAssessment, 'item-level-verified', 'Claim source rights are not verified: ' + id)
      assert.ok(source.rightsEvidenceUrl && source.rightsEvidenceLocator)
      assert.ok(source.stableId && source.publishedAt && source.accessedAt)
      assert.ok(source.rightsHolder && source.licenseVersion && source.licenseUrl && source.licenseAppliesTo && source.attribution)
    }
  }
}
assert.ok(dossier.sources.some(item => item.id === 'duckworth2010-scope' && item.licenseAssessment === 'unknown'))
assert.ok(!Object.values(dossier.facets).some(facet => (facet.claims ?? []).some(claim => claim.sourceIds.includes('duckworth2010-scope'))))
assert.ok(dossier.facets.ecology.claims.some(claim => claim.text.includes('140.4') && claim.text.includes('150.6') && claim.text.includes('unresolved')))
assert.ok(dossier.facets.distribution.claims.some(claim => claim.text.includes('did not verify either presence or absence')))

const index = readJson(indexPath)
const shardRelativePath = relative(shardPath)
const ownEntries = index.shards.filter(item => item.path === shardRelativePath)
assert.equal(ownEntries.length, 1, 'Expected exactly one target shard entry')
const ids = new Set()
const names = new Set()
let indexedCount = 0
for (const entry of index.shards) {
  const compressed = entry.path === shardRelativePath ? currentCompressed : readFileSync(resolve(root, entry.path))
  assert.equal(sha(compressed), entry.compressedSha256, 'Compressed checksum mismatch: ' + entry.path)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha(decoded), entry.decodedSha256, 'Decoded checksum mismatch: ' + entry.path)
  const rows = decoded.toString('utf8').trimEnd().split('\n').map(JSON.parse)
  assert.equal(rows.length, entry.recordCount, 'Indexed row count mismatch: ' + entry.path)
  indexedCount += rows.length
  for (const row of rows) {
    const name = normalize(row.scientificName)
    assert.ok(!ids.has(row.colId), 'Duplicate indexed COL ID ' + row.colId)
    assert.ok(!names.has(name), 'Duplicate indexed name ' + row.scientificName)
    ids.add(row.colId)
    names.add(name)
  }
}
assert.equal(indexedCount, index.recordCount)
assert.equal(indexedCount, 6934)
assert.equal(ownEntries[0].recordCount, currentRows.length)
assert.ok(base.duplicateAudit.checkedIndexRecords <= indexedCount - currentRows.length, 'Current indexed records must include the original source batch audit baseline')
assert.equal(ids.has(dossier.colId), true)
assert.equal(names.has(normalize(dossier.scientificName)), true)

const rawBytes = Buffer.from(JSON.stringify(dossier) + '\n', 'utf8')
assert.ok(!rawBytes.includes(0x0d), 'JSONL must use LF line endings')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT, [constants.BROTLI_PARAM_QUALITY]: 11 } })
assert.deepEqual(brotliDecompressSync(compressedBytes), rawBytes, 'Brotli round-trip must exactly reproduce the generated JSONL')
mkdirSync(dirname(rawPath), { recursive: true })
writeFileSync(rawPath, rawBytes)
writeFileSync(shardPath, compressedBytes)

ownEntries[0].recordCount = 1
ownEntries[0].decodedSha256 = sha(rawBytes)
ownEntries[0].compressedSha256 = sha(compressedBytes)
assert.equal(index.recordCount, indexedCount, 'Facet reconciliation must not change dossier count')
writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n')

const batchManifest = {
  schemaVersion: 1,
  batchId: base.batchId,
  releaseAlias: base.releaseAlias,
  baseInput: { path: relative(baseInputPath), sha256: sha(baseBytes) },
  revisionInput: { path: relative(revisionInputPath), sha256: sha(revisionBytes), revisionId: revision.revisionId, reviewedAt: revision.reviewedAt },
  priorArtifacts: { rawSha256: sha(rawBefore), compressedSha256: sha(currentCompressed), indexedRecordCount: indexedCount, targetShardRecordCount: currentRows.length },
  duplicateCheck: { indexedRecordCount: indexedCount, colId: dossier.colId, scientificName: dossier.scientificName, matchedColIds: [], matchedNames: [], targetShardReplacedInPlace: true },
  raw: { path: relative(rawPath), encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha(rawBytes) },
  shard: { path: relative(shardPath), encoding: 'brotli-jsonl', recordCount: 1, decodedBytes: rawBytes.length, decodedSha256: sha(rawBytes), compressedBytes: compressedBytes.length, compressedSha256: sha(compressedBytes), brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
  registry: { path: relative(registryManifestPath), releaseDate: registry.releaseDate, checklistBankDatasetKey: registry.checklistBankDatasetKey, manifestSha256: sha(registryBytes) },
  scopeDecision: { previousDistributionStatus: revision.decision.previousDistributionStatus, newDistributionStatus: revision.decision.newDistributionStatus, dossierCountChanged: false },
  generator: 'scripts/revise-primates-trachypithecus-francoisi-scope-audit.mjs',
}
writeFileSync(batchManifestPath, JSON.stringify(batchManifest, null, 2) + '\n')
process.stdout.write(JSON.stringify({ colId: dossier.colId, distribution: dossier.facets.distribution.status, dossierStatus: dossier.completeness.status, expertReview: dossier.expertReview.status, indexRecordCount: index.recordCount, rawSha256: sha(rawBytes), compressedSha256: sha(compressedBytes), roundTrip: 'exact-byte-match' }) + '\n')
