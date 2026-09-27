import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants as zlibConstants, gunzipSync } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT_PATH = 'data/sources/araneae-caerostris-darwini-genomics-batch1-2026-09-28.json'
const INDEX_PATH = 'data/knowledge/catalogue-dossier-shards.json'
const QUEUE_MANIFEST_PATH = 'data/knowledge/species-evidence-queue/manifest.json'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const PREVIEW_PATH = 'data/pages-preview.json'
const RAW_PATH = 'data/knowledge/raw-dossiers/araneae-caerostris-darwini-batch-2026-09-28.jsonl'
const SHARD_PATH = 'data/knowledge/catalogue-dossiers-araneae-caerostris-darwini-batch-2026-09-28.jsonl.br'
const MANIFEST_PATH = 'data/knowledge/catalogue-dossiers-araneae-caerostris-darwini-batch-2026-09-28.batch-manifest.json'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim()
const inputBytes = readFileSync(join(ROOT, INPUT_PATH))
const input = JSON.parse(inputBytes.toString('utf8'))
const target = input.target
const sourceRef = input.sourceRef

assert.equal(input.releaseAlias, 'COL26.8')
assert.equal(input.batchId, 'araneae-caerostris-darwini-genomics-batch-2026-09-28')
assert.deepEqual(target, {
  colId: '68T95',
  scientificName: 'Caerostris darwini Kuntner & Agnarsson, 2010',
  authorship: 'Kuntner & Agnarsson, 2010',
  rank: 'species',
  sourceDatasetId: '56185',
})
assert.equal(input.claim.facet, 'evolution')
assert.equal(sourceRef.stableId, 'doi:10.1371/journal.pone.0268660')
assert.equal(sourceRef.licenseAssessment, 'item-level-verified')
assert.equal(sourceRef.licenseVersion, 'CC BY 4.0')

const registryManifestBytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
assert.equal(sha256(registryManifestBytes), input.audit.registryManifestSha256, 'Pinned COL26.8 registry changed; re-audit before updating')
const registry = JSON.parse(registryManifestBytes.toString('utf8'))
assert.equal(registry.releaseAlias, 'COL26.8')
assert.equal(registry.releaseDate, '2026-08-20')
assert.equal(registry.checklistBankDatasetKey, 316115)
const registryCache = new Map()

function registryRows(path) {
  if (!registryCache.has(path)) {
    const decoded = gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8')
    registryCache.set(path, decoded.split(/\r?\n/u).filter(Boolean).map(JSON.parse))
  }
  return registryCache.get(path)
}

const searchRoute = normalize(target.scientificName).slice(0, 2)
const usages = (registry.search.routes[searchRoute] ?? []).flatMap(registryRows).filter(row => row.id === target.colId)
assert.equal(usages.length, 1, 'Expected one exact accepted COL26.8 usage')
const usage = usages[0]
assert.equal(usage.scientificName, target.scientificName)
assert.equal(usage.authorship, target.authorship)
assert.equal(usage.rank, 'species')
assert.equal(usage.status, 'accepted')
assert.equal(String(usage.sourceDatasetId), target.sourceDatasetId)

const classificationPath = []
let parentId = usage.id
while (parentId) {
  const route = sha256(Buffer.from(parentId, 'utf8')).slice(0, 2)
  const nodes = (registry.hierarchy.nodes.routes[route] ?? []).flatMap(registryRows)
  const node = nodes.find(row => row.id === parentId)
  assert.ok(node, `Missing pinned accepted hierarchy node ${parentId}`)
  assert.equal(node.status, 'accepted', `Unaccepted hierarchy node ${parentId}`)
  classificationPath.unshift({
    id: node.id,
    scientificName: node.scientificName,
    authorship: node.authorship ?? null,
    rank: node.rank,
    status: node.status,
    sourceDatasetId: node.sourceDatasetId == null ? null : String(node.sourceDatasetId),
  })
  parentId = node.parentId
}
assert.deepEqual(classificationPath.map(node => node.id), input.audit.classificationPathIds)
assert.equal(classificationPath.at(-1).id, target.colId)
assert.ok(classificationPath.some(node => node.rank === 'order' && node.scientificName === 'Araneae'))
assert.ok(classificationPath.some(node => node.rank === 'family' && node.scientificName.startsWith('Araneidae')))
assert.ok(classificationPath.some(node => node.rank === 'genus' && node.scientificName.startsWith('Caerostris')))

const indexBytesBefore = readFileSync(join(ROOT, INDEX_PATH))
assert.equal(sha256(indexBytesBefore), input.audit.dossierIndexSha256, 'Dossier index changed since the duplicate audit; re-audit before updating')
const index = JSON.parse(indexBytesBefore.toString('utf8'))
const current = readCatalogueDossiers()
assert.equal(current.records.length, input.audit.dossierIndexRecordCount)
assert.equal(index.recordCount, input.audit.dossierIndexRecordCount)
assert.equal(current.records.some(row => row.colId === target.colId), false, 'COL usage already has a dossier')
assert.equal(current.records.some(row => normalize(row.scientificName) === normalize(target.scientificName)), false, 'Accepted scientific name already has a dossier')
assert.equal(current.records.some(row => row.sources?.some(source => source.stableId === sourceRef.stableId)), false, 'DOI already occurs in a dossier')
for (const path of [RAW_PATH, SHARD_PATH, MANIFEST_PATH]) assert.equal(existsSync(join(ROOT, path)), false, `Output already exists outside the dossier index: ${path}`)

const queueManifestBytes = readFileSync(join(ROOT, QUEUE_MANIFEST_PATH))
assert.equal(sha256(queueManifestBytes), input.audit.queueManifestSha256, 'Species evidence queue changed since the identity/coverage audit')
const queueManifest = JSON.parse(queueManifestBytes.toString('utf8'))
const queueShard = queueManifest.shards.find(shard => shard.path === input.audit.queueShardPath)
assert.ok(queueShard, 'Audited species-evidence shard is missing')
const queueShardBytes = readFileSync(join(ROOT, input.audit.queueShardPath))
assert.equal(sha256(queueShardBytes), queueShard.compressedSha256)
const queueDecoded = brotliDecompressSync(queueShardBytes)
assert.equal(sha256(queueDecoded), input.audit.queueShardDecodedSha256)
const queueLines = queueDecoded.toString('utf8').split(/\r?\n/u).filter(Boolean)
const queueMatches = queueLines.filter(line => JSON.parse(line).colId === target.colId)
assert.equal(queueMatches.length, 1, 'Expected one COL usage in the audited queue shard')
const queueLine = queueMatches[0]
assert.equal(sha256(Buffer.from(queueLine, 'utf8')), input.audit.queueRowSha256)
const queueRow = JSON.parse(queueLine)
assert.equal(queueRow.dossier.status, 'missing')
assert.equal(queueRow.dossier.claimCount, 0)
assert.equal(queueRow.dossier.expertReviewStatus, 'no-dossier')

const previewBytes = readFileSync(join(ROOT, PREVIEW_PATH))
assert.equal(sha256(previewBytes), input.audit.pagesPreviewManifestSha256, 'Shared App/Pages core scope changed since the audit')
const preview = JSON.parse(previewBytes.toString('utf8'))
assert.equal(preview.taxonIds.includes('caerostris_darwini'), false)

const dossier = {
  colId: target.colId,
  scientificName: target.scientificName,
  rank: target.rank,
  sourceDatasetId: target.sourceDatasetId,
  checkedAt: input.checkedAt,
  identity: {
    method: 'Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.',
    scope: 'Nominal species as represented by COL26.8 usage 68T95. The biological claim is comparative genome and transcriptome evidence from the source study sample; it does not establish a complete species account.',
    sourceIds: ['col'],
  },
  classificationPath,
  lifeStatusScope: {
    wild: 'The genomic and transcriptomic materials came from wild-caught adult Caerostris darwini from Andasibe-Mantadia National Park, Madagascar; sample-level findings are not population frequency estimates.',
    domesticated: 'Domestication and captive populations have not been assessed; no captive or domesticated specimens support the claim.',
    fossil: 'Fossil occurrence and geological age have not been assessed.',
  },
  sources: [
    {
      id: 'col',
      title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 56185',
      url: 'https://www.checklistbank.org/dataset/316115/taxon/68T95',
      version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
      stableId: 'col:68T95@COL26.8',
      publishedAt: '2026-08-20',
      accessedAt: input.checkedAt,
      locator: 'Accepted species usage 68T95; exact name Caerostris darwini Kuntner & Agnarsson, 2010; species rank; sourceDatasetId 56185; accepted parent chain includes Araneae, Araneidae, and Caerostris.',
      license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
      licenseAssessment: 'identity-only',
      scope: 'Pinned COL26.8 accepted-name identity and classification only.',
      rightsHolder: 'Catalogue of Life Foundation',
      licenseVersion: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
      attribution: 'Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 68T95. https://doi.org/10.48580/dgywk',
    },
    {
      id: sourceRef.id,
      title: sourceRef.title,
      url: sourceRef.url,
      stableId: sourceRef.stableId,
      version: sourceRef.version,
      publishedAt: sourceRef.publishedAt,
      accessedAt: sourceRef.accessedAt,
      locator: sourceRef.locator,
      license: sourceRef.license,
      licenseAssessment: sourceRef.licenseAssessment,
      scope: sourceRef.scope,
      rightsHolder: sourceRef.rightsHolder,
      licenseVersion: sourceRef.licenseVersion,
      licenseUrl: sourceRef.licenseUrl,
      licenseEvidenceUrl: sourceRef.licenseEvidenceUrl,
      licenseEvidenceLocator: sourceRef.licenseEvidenceLocator,
      licenseAppliesTo: sourceRef.licenseAppliesTo,
      attribution: sourceRef.attribution,
    },
  ],
  facets: {
    morphology: { status: 'not-assessed' },
    lifeHistory: { status: 'not-assessed' },
    ecology: { status: 'not-assessed' },
    evolution: {
      status: 'partially-supported',
      claims: [{
        text: input.claim.text,
        sourceIds: input.claim.sourceIds,
        locator: input.claim.locator,
        placeTimeScope: input.claim.placeTimeScope,
        lifeStatus: input.claim.lifeStatus,
        translationStatus: input.claim.translationStatus,
        originalLanguage: input.claim.originalLanguage,
      }],
      gaps: input.claim.gaps,
    },
    distribution: { status: 'not-assessed' },
    fossil: { status: 'not-assessed' },
    conservation: { status: 'not-assessed' },
  },
  completeness: {
    status: 'incomplete',
    reasons: [
      'Only one source-bounded genomic/evolutionary facet is represented; morphology, life history, ecology, distribution, fossils, and conservation remain not assessed.',
      'The cited study is a limited comparative molecular analysis, not a systematic review or complete account of the species.',
      'A reproducible systematic search and independent expert review have not been completed.',
    ],
  },
  expertReview: { status: 'not-reviewed', reviewers: [] },
}

assert.deepEqual(Object.keys(dossier.facets).sort(), [...FACETS].sort())
assert.equal(dossier.completeness.status, 'incomplete')
assert.equal(dossier.expertReview.status, 'not-reviewed')
const sourceIds = new Set(dossier.sources.map(source => source.id))
assert.equal(sourceIds.size, dossier.sources.length)
for (const [facetName, facet] of Object.entries(dossier.facets)) {
  assert.ok(['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed'].includes(facet.status))
  for (const claim of facet.claims ?? []) {
    assert.ok(claim.text && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Incomplete claim scope: ${facetName}`)
    assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)))
    for (const id of claim.sourceIds) {
      const claimSource = dossier.sources.find(source => source.id === id)
      assert.equal(claimSource.licenseAssessment, 'item-level-verified')
      for (const key of ['stableId', 'rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) assert.ok(claimSource[key], `Claim source missing ${key}`)
      assert.match(claimSource.licenseUrl ?? '', /^https:\/\//u)
      assert.match(claimSource.accessedAt ?? '', /^\d{4}-\d{2}-\d{2}$/u)
    }
  }
}

const rawBytes = Buffer.from(`${JSON.stringify(dossier)}\n`, 'utf8')
const compressedBytes = brotliCompressSync(rawBytes, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
assert.ok(brotliDecompressSync(compressedBytes).equals(rawBytes), 'Dossier Brotli round trip must be byte-exact')
const newIndex = structuredClone(index)
newIndex.shards.push({ path: SHARD_PATH, recordCount: 1, decodedSha256: sha256(rawBytes), compressedSha256: sha256(compressedBytes) })
newIndex.recordCount += 1
const indexBytesAfter = Buffer.from(`${JSON.stringify(newIndex, null, 2)}\n`, 'utf8')
const manifest = {
  schemaVersion: 1,
  batchId: input.batchId,
  releaseAlias: input.releaseAlias,
  input: { path: INPUT_PATH, sha256: sha256(inputBytes) },
  duplicateAudit: input.audit.duplicateAudit,
  identity: {
    colId: target.colId,
    scientificName: target.scientificName,
    sourceDatasetId: target.sourceDatasetId,
    classificationPathIds: classificationPath.map(node => node.id),
    classificationPathRanks: classificationPath.map(node => node.rank),
    registryManifestSha256: sha256(registryManifestBytes),
  },
  source: {
    stableId: sourceRef.stableId,
    licenseAssessment: sourceRef.licenseAssessment,
    licenseVersion: sourceRef.licenseVersion,
    evidenceLocator: input.claim.locator,
  },
  coverage: {
    partialFacets: ['evolution'],
    notAssessedFacets: FACETS.filter(facet => facet !== 'evolution'),
    completeDossiersAdded: 0,
    externallyReviewedDossiersAdded: 0,
  },
  queueAudit: {
    queueManifestSha256Before: sha256(queueManifestBytes),
    shardPath: input.audit.queueShardPath,
    rowSha256Before: sha256(Buffer.from(queueLine, 'utf8')),
    statusBefore: queueRow.dossier.status,
  },
  appAndPagesPreviewManifestSha256: sha256(previewBytes),
  appAndPagesPreviewManifestChanged: false,
  baseDossierIndexSha256: sha256(indexBytesBefore),
  finalDossierIndexSha256: sha256(indexBytesAfter),
  raw: { path: RAW_PATH, encoding: 'utf-8-jsonl-lf', recordCount: 1, bytes: rawBytes.length, sha256: sha256(rawBytes) },
  shard: {
    path: SHARD_PATH,
    encoding: 'brotli-jsonl',
    recordCount: 1,
    decodedBytes: rawBytes.length,
    decodedSha256: sha256(rawBytes),
    compressedBytes: compressedBytes.length,
    compressedSha256: sha256(compressedBytes),
    brotliParameters: { mode: 'text', quality: 11 },
    roundTrip: 'exact-byte-match',
  },
  dossierCountBefore: current.records.length,
  dossierCountAfter: newIndex.recordCount,
  generator: 'scripts/build-araneae-caerostris-darwini-genomics-batch1.mjs',
  fullDossierCountAdded: 0,
  expertReviewedDossierCountAdded: 0,
}
const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

mkdirSync(dirname(join(ROOT, RAW_PATH)), { recursive: true })
writeFileSync(join(ROOT, RAW_PATH), rawBytes)
writeFileSync(join(ROOT, SHARD_PATH), compressedBytes)
writeFileSync(join(ROOT, INDEX_PATH), indexBytesAfter)
writeFileSync(join(ROOT, MANIFEST_PATH), manifestBytes)

console.log(JSON.stringify({
  batchId: input.batchId,
  colId: target.colId,
  scientificName: target.scientificName,
  classificationPathIds: classificationPath.map(node => node.id),
  partialFacets: ['evolution'],
  notAssessedFacets: FACETS.filter(facet => facet !== 'evolution'),
  dossierCountBefore: current.records.length,
  dossierCountAfter: newIndex.recordCount,
  sourceStableId: sourceRef.stableId,
  sourceRights: sourceRef.licenseAssessment,
  coreManifestChanged: false,
  exactBrotliRoundTrip: true,
  compressedDossierBytes: compressedBytes.length,
}, null, 2))
