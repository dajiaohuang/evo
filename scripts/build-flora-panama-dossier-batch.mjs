import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, gunzipSync, constants as zlibConstants } from 'node:zlib'
import { readCatalogueDossiers } from './catalogue-dossier-store.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const INPUT = 'data/sources/flora-panama-dossiers-batch-2026-09-27.json'
const MANIFEST = 'data/knowledge/flora-panama-dossiers-batch-2026-09-27.batch-manifest.json'
const RAW = 'data/knowledge/raw-dossiers/flora-panama-dossiers-batch-2026-09-27.jsonl.br'
const LEGACY_RAW = 'data/knowledge/raw-dossiers/flora-panama-dossiers-batch-2026-09-27.jsonl'
const SHARD = 'data/knowledge/catalogue-dossiers-flora-panama-batch-2026-09-27.jsonl.br'
const SOURCE = 'data/sources/flora-panama-descriptions.jsonl.br'
const LEDGER = 'data/sources/flora-panama-descriptions-import-ledger.json'
const SOURCE_SHA256 = '9a0eab290c6b2d092bd9027c5132d8497328cfd76f755e21a982907b519baa87'
const ARCHIVE_SHA256 = 'b5b7d67e6038be4aee9ff3e9ffcfb9764b314bb025fa87aa887bfe96951b9859'
const REGISTRY_ROOT = 'data/catalogue-of-life/releases/2026-08-20/registry'
const FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const TYPES = ['general', 'habit', 'distribution']
const EXPECTED_IDS = 1644
const EXPECTED_EXISTING = 25
const MORPHOLOGY_EXCLUDED = { colId: '64BMF', rowNumber: 4323 }
const EXPECTED_GENERAL_ROWS = 1838
const EXPECTED_MORPHOLOGY_CLAIMS = 1837

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'))
const registryRowsCache = new Map()
const registryJsonl = path => {
  if (!registryRowsCache.has(path)) registryRowsCache.set(path, gunzipSync(readFileSync(join(ROOT, REGISTRY_ROOT, path))).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse))
  return registryRowsCache.get(path)
}

function sourceRows() {
  const compressed = readFileSync(join(ROOT, SOURCE))
  assert.equal(sha256(compressed), SOURCE_SHA256, 'Pinned Flora of Panama source pack changed')
  const ledger = readJson(LEDGER)
  assert.equal(ledger.archiveSha256, ARCHIVE_SHA256)
  assert.equal(ledger.outputSha256, SOURCE_SHA256)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(sha256(decoded), ledger.decodedSha256, 'Flora of Panama decoded digest mismatch')
  const rows = decoded.toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
  assert.equal(rows.length, ledger.species)
  return { rows, compressed, decoded, ledger }
}

function eligibleDescription(description) {
  if (!description.sourceExcerpt || !description.license?.includes('creativecommons.org/licenses/by/4.0')) return false
  if (description.citationMissingInSource !== false || description.missingSourceIds?.length || !description.citations?.length) return false
  if (!description.sourceIds?.length || description.sourceIds.some((id, index) => id !== description.citations[index]?.identifier || description.referenceRowNumbers?.[index] !== description.citations[index]?.rowNumber)) return false
  if (description.sourceIds.length !== description.citations.length || new Set(description.sourceIds).size !== description.sourceIds.length) return false
  return true
}

function candidateRows(rows) {
  const candidates = rows.filter(row => TYPES.every(type => row.descriptions.some(description => description.type === type && eligibleDescription(description))))
    .sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
  for (const row of candidates) {
    assert.ok(row.colId && row.wfoId && row.scientificName)
    assert.equal(new Set(row.descriptions.filter(description => TYPES.includes(description.type) && eligibleDescription(description)).map(description => `${description.type}:${description.rowNumber}`)).size,
      row.descriptions.filter(description => TYPES.includes(description.type) && eligibleDescription(description)).length)
  }
  return candidates
}

function registry() {
  const bytes = readFileSync(join(ROOT, REGISTRY_ROOT, 'manifest.json'))
  const manifest = JSON.parse(bytes.toString('utf8'))
  assert.equal(manifest.releaseAlias, 'COL26.8')
  assert.equal(manifest.checklistBankDatasetKey, 316115)
  return { value: manifest, bytes, digest: sha256(bytes) }
}

function acceptedClassification(registryManifest, row) {
  const route = row.scientificName.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/gu, ' ').trim().slice(0, 2)
  const matches = (registryManifest.search.routes[route] ?? []).flatMap(registryJsonl).filter(item => item.id === row.colId)
  assert.equal(matches.length, 1, `Expected one exact pinned COL26.8 usage ${row.colId}`)
  const usage = matches[0]
  assert.equal(usage.scientificName, row.scientificName, `Exact accepted name differs at stable COL ID ${row.colId}`)
  assert.equal(usage.status, 'accepted', `COL usage not accepted: ${row.colId}`)
  assert.equal(usage.rank, 'species', `COL usage not species: ${row.colId}`)

  const path = []
  let id = row.colId
  while (id) {
    const routeKey = sha256(Buffer.from(id, 'utf8')).slice(0, 2)
    let node
    for (const file of registryManifest.hierarchy.nodes.routes[routeKey] ?? []) {
      node = registryJsonl(file).find(item => item.id === id)
      if (node) break
    }
    assert.ok(node, `Missing accepted parent node ${id}`)
    assert.equal(typeof node.status, 'string', `Missing COL status on parent node ${id}`)
    path.unshift(node)
    id = node.parentId
  }
  return { usage, path: path.map(({ id: colId, scientificName, authorship, rank, status, sourceDatasetId }) => ({ id: colId, scientificName, authorship, rank, status, sourceDatasetId })) }
}

function dossierSourceId(colId, description) {
  return `flora_panama_${colId.toLowerCase()}_${description.type}_${description.rowNumber}`
}

function sourceForRow(dossier, row, description, ledger, checkedAt) {
  const sourceId = dossierSourceId(row.colId, description)
  const rowCitation = description.citations.map(citation => ({
    identifier: citation.identifier,
    citation: citation.citation,
    referenceRowNumber: citation.rowNumber,
    title: citation.title,
    creator: citation.creator,
    date: citation.date,
    source: citation.source,
    language: citation.language,
    license: citation.license,
    licenseAssessment: citation.license ? 'citation-record-declares-license-not-independently-verified' : 'not-verified',
    rightsHolder: citation.rightsHolder,
  }))
  return {
    id: sourceId,
    title: `${row.scientificName}, Flora of Panama (${description.type} field)`,
    url: 'https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip',
    stableId: `WFO-MBG-Flora-of-Panama:COL:${row.colId}:row:${description.rowNumber}`,
    version: ledger.sourceVersion,
    publishedAt: 'undated',
    accessedAt: checkedAt,
    locator: `Imported DwC-A description row ${description.rowNumber}; field ${description.type}; reference rows ${description.referenceRowNumbers.join(', ')}.`,
    originalSourceText: description.text,
    originalLanguage: description.language,
    sourceField: description.type,
    sourceRowNumber: description.rowNumber,
    archiveSourceId: description.sourceId,
    archiveSourceIds: description.sourceIds,
    referenceRowNumbers: description.referenceRowNumbers,
    sourceCitations: rowCitation,
    sourcePackLicense: 'CC BY 4.0',
    sourcePackLicenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourcePackLicenseAssessment: 'aggregate-declaration-only',
    citedWorkLicenseAssessment: 'not-verified-where-citation-license-is-blank',
    rightsHolder: description.rightsHolder,
    license: 'The normalized Flora of Panama archive row declares CC BY 4.0. This is recorded separately from the underlying publications named by its citations; their citation-level license metadata is blank and reuse rights are not verified here.',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseEvidenceUrl: 'https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip',
    licenseEvidenceLocator: `The source pack ledger records CC BY 4.0 at archive level and the imported description row ${description.rowNumber} contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.`,
    licenseAppliesTo: `The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row ${description.rowNumber}; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.`,
    attribution: `Missouri Botanical Garden, Flora of Panama, ${ledger.sourceVersion}, row ${description.rowNumber}; CC BY 4.0. Citation metadata: ${rowCitation.map(item => item.citation).join(' | ')}.`,
    licenseAssessment: 'aggregate-declaration-only',
    scope: 'A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.',
    archiveSha256: ledger.archiveSha256,
    sourcePackSha256: ledger.outputSha256,
  }
}

function colIdentitySource(colId, checkedAt) {
  return {
    id: 'col',
    title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115',
    url: `https://www.checklistbank.org/dataset/316115/taxon/${colId}`,
    stableId: `col:${colId}@COL26.8`,
    version: 'COL26.8 released 2026-08-20; ChecklistBank dataset 316115',
    publishedAt: '2026-08-20',
    accessedAt: checkedAt,
    locator: `Accepted species usage ${colId}; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.`,
    license: 'CC BY 4.0 nomenclatural metadata; no checklist prose reused.',
    licenseAssessment: 'identity-only',
    rightsHolder: 'Catalogue of Life Foundation',
    licenseVersion: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    licenseAppliesTo: 'Pinned nomenclatural and taxonomic checklist metadata only.',
    attribution: `Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ${colId}. https://doi.org/10.48580/dgywk.`,
    scope: 'Pinned COL26.8 nomenclatural identity and accepted classification only.',
  }
}

function distributionClaim(description, sourceId) {
  const citations = description.citations.map(citation => `${citation.identifier}: ${citation.citation} (reference row ${citation.rowNumber})`).join('; ')
  return {
    text: description.text,
    translationStatus: 'untranslated',
    originalLanguage: description.language,
    sourceIds: [sourceId],
    locator: `Flora of Panama distribution field; imported row ${description.rowNumber}; sourceIds ${description.sourceIds.join(', ')}; reference rows ${description.referenceRowNumbers.join(', ')}; citations: ${citations}.`,
    placeTimeScope: `Historical regional statement within the Flora of Panama source version retrieved ${'2026-09-08'}; geographic specificity is limited to the localities literally present in the excerpt. It is not a current range or global inventory.`,
    lifeStatus: 'The source does not classify the locality record as native, introduced, cultivated, escaped, or wild; those statuses are not inferred.',
  }
}

function morphologyClaim(description, sourceId) {
  const citations = description.citations.map(citation => `${citation.identifier}: ${citation.citation} (reference row ${citation.rowNumber})`).join('; ')
  return {
    text: description.text,
    translationStatus: 'untranslated',
    originalLanguage: description.language,
    sourceIds: [sourceId],
    locator: `Flora of Panama general field; imported row ${description.rowNumber}; sourceIds ${description.sourceIds.join(', ')}; reference rows ${description.referenceRowNumbers.join(', ')}; citations: ${citations}.`,
    placeTimeScope: `Morphological description in the Flora of Panama source version retrieved 2026-09-08; no population sampling frame or observation date is specified in this text. The source is a historical regional flora record, not a current or global account.`,
    lifeStatus: 'The text does not identify the described plant material as wild, cultivated, domesticated, or escaped; no life status is inferred.',
    semanticReview: 'Paragraph-level semantic screening by two AI agents classified this passage as direct morphological content in the Flora of Panama batch audit dated 2026-09-27; this is not human domain-expert review or external expert review.',
  }
}

function makeDossier(row, classification, ledger, checkedAt, prior) {
  const profile = prior ? structuredClone(prior) : {
    colId: row.colId,
    scientificName: classification.usage.scientificName,
    authorship: classification.usage.authorship,
    rank: classification.usage.rank,
    sourceDatasetId: classification.usage.sourceDatasetId,
    checkedAt,
    classificationPath: classification.path,
    identity: {
      method: 'Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.',
      scope: `COL26.8 accepted species usage ${row.colId}; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.`,
      sourceIds: ['col'],
    },
    lifeStatusScope: {
      wild: 'The Panama flora records regional descriptions/localities but does not establish whether source plants were wild, naturalized, cultivated, or escaped; no status is inferred.',
      domesticated: 'Domestication and cultivation history have not been assessed.',
      fossil: 'Fossil occurrence and geological age have not been assessed.',
    },
    sources: [],
    systematicSearch: {
      scope: 'Exact accepted COL26.8 identity check and bounded review of Flora of Panama general, habit, and distribution source rows; not a systematic seven-facet literature review.',
      method: 'Verified pinned COL26.8 usage and accepted parent chain; matched retained COL ID/WFO ID; preserved every selected description row, original field label, source ID list, reference row, and citation; recorded the archive row and source-pack CC BY declarations separately from blank license metadata on cited publications.',
      queryOrPath: `COL26.8 ChecklistBank dataset 316115 usage ${row.colId}; source pack ${SOURCE}; source rows are frozen in ${INPUT}.`,
      inclusionCriteria: 'At least one non-empty general, habit, and distribution description; every selected field row has sourceExcerpt=true, non-empty citations, citationMissingInSource=false, missingSourceIds=[], aligned sourceIds/citation identifiers/reference row numbers, and an archive row declaring CC BY 4.0. That archive license declaration is not extended to underlying cited publications with blank license fields.',
      exclusionCriteria: 'No cross-name matching, no inferred traits, no unverified translation, no current/global range inference, no species-wide life status, and no assumption that a source field alone covers a complete scientific facet.',
      date: checkedAt,
      searcher: 'Evo batch generator; general paragraphs classified by two AI agents, not human experts.',
    },
    facets: Object.fromEntries(FACETS.map(facet => [facet, { status: 'not-assessed', claims: [], gaps: ['This facet has not been assessed from the limited Flora of Panama source slice.'] }])),
    completeness: { status: 'incomplete', reasons: [] },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null },
  }
  profile.checkedAt = checkedAt
  profile.classificationPath = classification.path
  profile.sources ??= []
  profile.identity ??= { method: '', scope: '', sourceIds: [] }
  profile.identity.sourceIds = [...new Set([...(profile.identity.sourceIds ?? []), 'col'])]
  if (!profile.sources.some(source => source.id === 'col')) profile.sources.push(colIdentitySource(row.colId, checkedAt))

  const descriptions = row.descriptions.filter(description => TYPES.includes(description.type) && eligibleDescription(description))
  const byType = Object.fromEntries(TYPES.map(type => [type, descriptions.filter(description => description.type === type)]))
  for (const description of descriptions) {
    const source = sourceForRow(profile, row, description, ledger, checkedAt)
    if (!profile.sources.some(item => item.id === source.id)) profile.sources.push(source)
  }

  // The distribution field is a literal regional statement. General paragraphs
  // use the stored AI-agent semantic decisions; habit remains a source field.
  const distributionClaims = byType.distribution.map(description => distributionClaim(description, dossierSourceId(row.colId, description)))
  const morphologyClaims = byType.general.filter(description => row.colId !== MORPHOLOGY_EXCLUDED.colId || description.rowNumber !== MORPHOLOGY_EXCLUDED.rowNumber)
    .map(description => morphologyClaim(description, dossierSourceId(row.colId, description)))
  const priorDistribution = profile.facets.distribution ?? { status: 'not-assessed', claims: [], gaps: [] }
  const claims = [...(priorDistribution.claims ?? [])]
  const claimKeys = new Set(claims.map(claim => `${claim.locator}|${claim.text}`))
  for (const claim of distributionClaims) if (!claimKeys.has(`${claim.locator}|${claim.text}`)) claims.push(claim)
  profile.facets.distribution = {
    ...priorDistribution,
    status: priorDistribution.status === 'not-assessed' || !priorDistribution.status ? 'partially-supported' : priorDistribution.status,
    claims,
    gaps: [...new Set([...(priorDistribution.gaps ?? []), 'This historical Panama flora statement does not establish the current/global distribution, native versus introduced status, temporal change, or survey completeness.'])],
  }
  profile.facets.morphology ??= { status: 'not-assessed', claims: [], gaps: [] }
  const priorMorphologyClaims = profile.facets.morphology.claims ?? []
  const morphologyClaimKeys = new Set(priorMorphologyClaims.map(claim => `${claim.locator}|${claim.text}`))
  profile.facets.morphology.claims = [...priorMorphologyClaims, ...morphologyClaims.filter(claim => !morphologyClaimKeys.has(`${claim.locator}|${claim.text}`))]
  if (morphologyClaims.length) profile.facets.morphology.status = profile.facets.morphology.status === 'not-assessed' || !profile.facets.morphology.status ? 'partially-supported' : profile.facets.morphology.status
  profile.facets.morphology.gaps = [...new Set([...(profile.facets.morphology.gaps ?? []), `Two AI agents performed paragraph-level semantic screening and classified ${EXPECTED_MORPHOLOGY_CLAIMS} of ${EXPECTED_GENERAL_ROWS} eligible general rows as morphology; COL ${MORPHOLOGY_EXCLUDED.colId} row ${MORPHOLOGY_EXCLUDED.rowNumber} is retained as a locality-only voucher list with no morphology claim. This is not human domain-expert or external expert review. Broader morphological variation, life stages, populations, and the complete COL concept remain unassessed.`])]
  profile.facets.lifeHistory ??= { status: 'not-assessed', claims: [], gaps: [] }
  profile.facets.lifeHistory.gaps = [...new Set([...(profile.facets.lifeHistory.gaps ?? []), 'The source habit field is preserved as the flora’s original plant life-form value; it is not evidence of a life-history or reproductive cycle.'])]
  for (const facet of FACETS) {
    if (!profile.facets[facet]) profile.facets[facet] = { status: 'not-assessed', claims: [], gaps: [] }
    profile.facets[facet].claims ??= []
    profile.facets[facet].gaps ??= ['This facet has not been assessed from the limited Flora of Panama source slice.']
  }
  profile.completeness = {
    status: 'incomplete',
    reasons: [...new Set([...(profile.completeness?.reasons ?? []),
      'This source slice supports a bounded historical Panama distribution statement only.',
      'Two AI agents screened paragraphs and mapped eligible general excerpts to partial morphology; this is not human domain-expert review. The single locality-only voucher list remains unclaimed. Habit is retained as the source plant life-form field and does not support lifeHistory.',
      'Morphology beyond any prior independently sourced claims, lifeHistory, ecology, evolution, fossil, and conservation remain incomplete or not assessed.',
      'No independent external expert review has been completed.'])],
  }
  profile.expertReview ??= { status: 'not-reviewed', reviewers: [], reviewDigest: null }
  assert.deepEqual(Object.keys(profile.facets).sort(), [...FACETS].sort())
  assert.equal(profile.facets.lifeHistory.status === 'supported', false)
  return profile
}

function readRawLines(path) {
  return brotliDecompressSync(readFileSync(join(ROOT, path))).toString('utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse)
}

function writeShard(records) {
  records.sort((a, b) => a.colId.localeCompare(b.colId, 'en'))
  const raw = Buffer.from(records.map(JSON.stringify).join('\n') + '\n', 'utf8')
  const compressed = brotliCompressSync(raw, { params: { [zlibConstants.BROTLI_PARAM_MODE]: zlibConstants.BROTLI_MODE_TEXT, [zlibConstants.BROTLI_PARAM_QUALITY]: 11 } })
  assert.ok(brotliDecompressSync(compressed).equals(raw))
  return { raw, compressed, decodedSha256: sha256(raw), compressedSha256: sha256(compressed) }
}

function prepareInput() {
  const { rows } = sourceRows()
  const candidates = candidateRows(rows)
  assert.equal(candidates.length, EXPECTED_IDS)
  const dossierStore = readCatalogueDossiers()
  const existingIds = new Set(dossierStore.records.map(record => record.colId))
  const updates = candidates.filter(row => existingIds.has(row.colId)).map(row => row.colId)
  assert.equal(updates.length, EXPECTED_EXISTING)
  const reg = registry()
  const index = readJson('data/knowledge/catalogue-dossier-shards.json')
  const changedShards = index.shards.filter(shard => {
    const ids = new Set(readRawLines(shard.path).map(record => record.colId))
    return updates.some(id => ids.has(id))
  }).map(shard => ({ path: shard.path, recordCount: shard.recordCount, decodedSha256: shard.decodedSha256, compressedSha256: shard.compressedSha256 }))
  const input = {
    schemaVersion: 1,
    batchId: 'flora-panama-dossiers-batch-2026-09-27',
    releaseAlias: 'COL26.8',
    checkedAt: '2026-09-27',
    source: { path: SOURCE, sha256: sha256(readFileSync(join(ROOT, SOURCE))), archiveSha256: ARCHIVE_SHA256, ledgerPath: LEDGER, ledgerSha256: sha256(readFileSync(join(ROOT, LEDGER))), expectedCandidateCount: candidates.length },
    baseAudit: {
      indexedRecordCount: dossierStore.records.length,
      indexedShardCount: index.shards.length,
      existingCandidateIds: updates,
      registryManifestSha256: reg.digest,
      changedShards,
      noOpenPullRequests: true,
      morphologyAudit: {
        auditId: 'flora-panama-general-paragraph-audit-2026-09-27',
        reviewers: ['panama_general_review_a', 'panama_general_review_b'],
        reviewType: 'AI-agent paragraph-level semantic screening; not human or external expert review',
        scope: 'All eligible general rows for the 1,644 frozen candidate COL IDs, sorted by COL ID and split into ranks 1-822 and 823-1644.',
        firstRange: { firstColId: candidates[0].colId, lastColId: candidates[821].colId, taxa: 822, generalRows: 915, morphologyRows: 914 },
        secondRange: { firstColId: candidates[822].colId, lastColId: candidates.at(-1).colId, taxa: 822, generalRows: 923, morphologyRows: 923 },
        totalGeneralRows: EXPECTED_GENERAL_ROWS,
        morphologyClaimRows: EXPECTED_MORPHOLOGY_CLAIMS,
        excludedRows: [{ ...MORPHOLOGY_EXCLUDED, disposition: 'locality-only specimen voucher list; no morphology claim', retainedAsSource: true }],
        externalExpertReview: false,
        paragraphDecisions: candidates.flatMap(row => row.descriptions.filter(description => description.type === 'general' && eligibleDescription(description)).map(description => ({
          colId: row.colId,
          rowNumber: description.rowNumber,
          disposition: row.colId === MORPHOLOGY_EXCLUDED.colId && description.rowNumber === MORPHOLOGY_EXCLUDED.rowNumber ? 'excluded-locality-only' : 'morphology',
        }))),
      },
    },
    candidates: candidates.map(row => ({
      colId: row.colId,
      wfoId: row.wfoId,
      scientificName: row.scientificName,
      sourceRows: row.descriptions.filter(description => TYPES.includes(description.type) && eligibleDescription(description)).map(description => ({
        type: description.type,
        rowNumber: description.rowNumber,
        sourceId: description.sourceId,
        sourceIds: description.sourceIds,
        referenceRowNumbers: description.referenceRowNumbers,
        citationIdentifiers: description.citations.map(citation => citation.identifier),
      })),
    })),
  }
  assert.equal(input.candidates.length, EXPECTED_IDS)
  assert.equal(input.baseAudit.morphologyAudit.totalGeneralRows, EXPECTED_GENERAL_ROWS)
  assert.equal(input.baseAudit.morphologyAudit.morphologyClaimRows, EXPECTED_MORPHOLOGY_CLAIMS)
  assert.equal(input.candidates.filter(candidate => input.baseAudit.existingCandidateIds.includes(candidate.colId)).length, EXPECTED_EXISTING)
  writeFileSync(join(ROOT, INPUT), JSON.stringify(input, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({ prepared: input.candidates.length, existing: updates.length, new: input.candidates.length - updates.length, changedShards }, null, 2))
}

function build() {
  const inputBytes = readFileSync(join(ROOT, INPUT))
  const input = JSON.parse(inputBytes.toString('utf8'))
  assert.equal(input.batchId, 'flora-panama-dossiers-batch-2026-09-27')
  assert.equal(input.releaseAlias, 'COL26.8')
  assert.equal(input.candidates.length, EXPECTED_IDS)
  const source = sourceRows()
  assert.equal(sha256(readFileSync(join(ROOT, SOURCE))), input.source.sha256)
  assert.equal(sha256(readFileSync(join(ROOT, LEDGER))), input.source.ledgerSha256)
  const reg = registry()
  assert.equal(reg.digest, input.baseAudit.registryManifestSha256)
  const rowsById = new Map(candidateRows(source.rows).map(row => [row.colId, row]))
  assert.equal(rowsById.size, input.candidates.length)
  const currentGeneralKeys = input.candidates.flatMap(candidate => candidate.sourceRows.filter(item => item.type === 'general').map(item => `${candidate.colId}:${item.rowNumber}`)).sort()
  const auditDecisions = input.baseAudit.morphologyAudit.paragraphDecisions
  assert.equal(auditDecisions.length, EXPECTED_GENERAL_ROWS)
  assert.deepEqual(auditDecisions.map(item => `${item.colId}:${item.rowNumber}`).sort(), currentGeneralKeys, 'Morphology audit rows differ from frozen general source rows')
  assert.equal(auditDecisions.filter(item => item.disposition === 'morphology').length, EXPECTED_MORPHOLOGY_CLAIMS)
  assert.deepEqual(auditDecisions.filter(item => item.disposition === 'excluded-locality-only').map(({ colId, rowNumber }) => ({ colId, rowNumber })), [MORPHOLOGY_EXCLUDED])
  const dossierStore = readCatalogueDossiers()
  const indexedById = new Map(dossierStore.records.map(record => [record.colId, record]))
  const existingTargetShard = readJson('data/knowledge/catalogue-dossier-shards.json').shards.find(shard => shard.path === SHARD)

  if (existingTargetShard) {
    const manifest = readJson(MANIFEST)
    assert.equal(manifest.input.sha256, sha256(inputBytes))
    assert.equal(manifest.newShard.compressedSha256, existingTargetShard.compressedSha256)
    assert.equal(manifest.newShard.decodedSha256, existingTargetShard.decodedSha256)
    assert.equal(manifest.updatedRecords.length, EXPECTED_EXISTING)
    const allProfiles = input.candidates.map(candidate => indexedById.get(candidate.colId))
    assert.ok(allProfiles.every(Boolean), 'The built dossier store is missing a frozen candidate')
    const rawResult = writeShard(allProfiles)
    const legacyPath = manifest.rawDossiers.path
    if (legacyPath !== RAW && existsSync(join(ROOT, legacyPath))) {
      const oldRaw = readFileSync(join(ROOT, legacyPath))
      assert.equal(sha256(oldRaw), manifest.rawDossiers.decodedSha256, 'Refusing to replace an unrecognized prior raw dossier asset')
      assert.equal(legacyPath, LEGACY_RAW)
      unlinkSync(join(ROOT, legacyPath))
    }
    writeFileSync(join(ROOT, RAW), rawResult.compressed)
    manifest.rawDossiers = { path: RAW, encoding: 'brotli-jsonl', recordCount: EXPECTED_IDS, decodedBytes: rawResult.raw.length, decodedSha256: rawResult.decodedSha256, compressedBytes: rawResult.compressed.length, compressedSha256: rawResult.compressedSha256, brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' }
    writeFileSync(join(ROOT, MANIFEST), JSON.stringify(manifest, null, 2) + '\n', 'utf8')
    console.log(JSON.stringify({ batchId: input.batchId, disposition: 'verified-idempotent-rebuild', records: EXPECTED_IDS, newRecords: EXPECTED_IDS - EXPECTED_EXISTING, updatedRecords: EXPECTED_EXISTING }))
    return
  }

  assert.equal(dossierStore.records.length, input.baseAudit.indexedRecordCount, 'Dossier store changed from frozen base audit')
  const currentIndex = readJson('data/knowledge/catalogue-dossier-shards.json')
  assert.equal(currentIndex.shards.length, input.baseAudit.indexedShardCount, 'Dossier shard count changed from frozen base audit')
  for (const expectedShard of input.baseAudit.changedShards) {
    const current = currentIndex.shards.find(shard => shard.path === expectedShard.path)
    assert.deepEqual(current, expectedShard, `Expected untouched base shard ${expectedShard.path}`)
  }
  const candidatesById = new Map(input.candidates.map(candidate => [candidate.colId, candidate]))
  const inputExisting = new Set(input.baseAudit.existingCandidateIds)
  const storeExisting = input.candidates.filter(candidate => indexedById.has(candidate.colId)).map(candidate => candidate.colId).sort()
  assert.deepEqual(storeExisting, [...inputExisting].sort(), 'Existing dossier cohort differs from frozen exact COL ID list')

  const newRecords = []
  const updatedRecords = []
  let generalRowCount = 0
  let morphologyClaimCount = 0
  let excludedGeneralRowCount = 0
  for (const candidate of input.candidates) {
    const row = rowsById.get(candidate.colId)
    assert.ok(row, `Pinned source pack missing COL ID ${candidate.colId}`)
    assert.equal(row.wfoId, candidate.wfoId)
    assert.equal(row.scientificName, candidate.scientificName)
    const expectedRows = candidate.sourceRows.map(item => JSON.stringify(item))
    const actualRows = row.descriptions.filter(description => TYPES.includes(description.type) && eligibleDescription(description)).map(description => JSON.stringify({
      type: description.type, rowNumber: description.rowNumber, sourceId: description.sourceId, sourceIds: description.sourceIds, referenceRowNumbers: description.referenceRowNumbers,
      citationIdentifiers: description.citations.map(citation => citation.identifier),
    }))
    assert.deepEqual(actualRows, expectedRows, `Source rows differ from frozen input for ${candidate.colId}`)
    const classification = acceptedClassification(reg.value, { ...candidate, sourceDatasetId: indexedById.get(candidate.colId)?.sourceDatasetId ?? undefined })
    const prior = indexedById.get(candidate.colId)
    if (prior) assert.equal(String(classification.usage.sourceDatasetId), String(prior.sourceDatasetId), `Existing dossier pinned identity differs for ${candidate.colId}`)
    const record = makeDossier(row, classification, source.ledger, input.checkedAt, prior)
    for (const description of row.descriptions.filter(item => item.type === 'general' && eligibleDescription(item))) {
      generalRowCount++
      if (row.colId === MORPHOLOGY_EXCLUDED.colId && description.rowNumber === MORPHOLOGY_EXCLUDED.rowNumber) excludedGeneralRowCount++
      else morphologyClaimCount++
    }
    if (prior) updatedRecords.push(record)
    else newRecords.push(record)
  }
  assert.equal(newRecords.length, EXPECTED_IDS - EXPECTED_EXISTING)
  assert.equal(updatedRecords.length, EXPECTED_EXISTING)
  assert.equal(generalRowCount, EXPECTED_GENERAL_ROWS)
  assert.equal(morphologyClaimCount, EXPECTED_MORPHOLOGY_CLAIMS)
  assert.equal(excludedGeneralRowCount, 1)

  const updatesById = new Map(updatedRecords.map(record => [record.colId, record]))
  const changedShardResults = []
  for (const shard of input.baseAudit.changedShards) {
    const records = readRawLines(shard.path)
    let updatedCount = 0
    const replaced = records.map(record => {
      const updated = updatesById.get(record.colId)
      if (!updated) return record
      updatedCount++
      return updated
    })
    assert.equal(updatedCount, records.filter(record => updatesById.has(record.colId)).length)
    if (updatedCount) changedShardResults.push({ path: shard.path, originalRecordCount: records.length, updatedRecordCount: updatedCount, result: writeShard(replaced) })
  }
  assert.equal(changedShardResults.reduce((sum, shard) => sum + shard.updatedRecordCount, 0), EXPECTED_EXISTING)

  const rawAll = writeShard([...newRecords, ...updatedRecords])
  mkdirSync(dirname(join(ROOT, RAW)), { recursive: true })
  writeFileSync(join(ROOT, RAW), rawAll.compressed)
  const newShard = writeShard(newRecords)
  writeFileSync(join(ROOT, SHARD), newShard.compressed)

  for (const changed of changedShardResults) {
    writeFileSync(join(ROOT, changed.path), changed.result.compressed)
    const item = currentIndex.shards.find(shard => shard.path === changed.path)
    item.decodedSha256 = changed.result.decodedSha256
    item.compressedSha256 = changed.result.compressedSha256
  }
  currentIndex.shards.push({ path: SHARD, recordCount: newRecords.length, decodedSha256: newShard.decodedSha256, compressedSha256: newShard.compressedSha256 })
  currentIndex.recordCount += newRecords.length
  writeFileSync(join(ROOT, 'data/knowledge/catalogue-dossier-shards.json'), JSON.stringify(currentIndex, null, 2) + '\n', 'utf8')

  const manifest = {
    schemaVersion: 1,
    batchId: input.batchId,
    releaseAlias: input.releaseAlias,
    input: { path: INPUT, sha256: sha256(inputBytes), candidateCount: input.candidates.length, existingCount: updatedRecords.length, newCount: newRecords.length },
    baseAudit: input.baseAudit,
    source: { sourcePackPath: SOURCE, sourcePackSha256: sha256(source.compressed), decodedSha256: sha256(source.decoded), ledgerPath: LEDGER, ledgerSha256: sha256(readFileSync(join(ROOT, LEDGER))), archiveSha256: source.ledger.archiveSha256, archiveVersion: source.ledger.sourceVersion },
    registry: { path: `${REGISTRY_ROOT}/manifest.json`, releaseDate: reg.value.releaseDate, checklistBankDatasetKey: reg.value.checklistBankDatasetKey, manifestSha256: reg.digest },
    updatedRecords: updatedRecords.map(record => ({ colId: record.colId, scientificName: record.scientificName })),
    newRecords: newRecords.map(record => ({ colId: record.colId, scientificName: record.scientificName })),
    updatedShards: changedShardResults.map(shard => ({ path: shard.path, recordCount: shard.originalRecordCount, updatedRecordCount: shard.updatedRecordCount, decodedSha256: shard.result.decodedSha256, compressedSha256: shard.result.compressedSha256 })),
    rawDossiers: { path: RAW, encoding: 'brotli-jsonl', recordCount: EXPECTED_IDS, decodedBytes: rawAll.raw.length, decodedSha256: rawAll.decodedSha256, compressedBytes: rawAll.compressed.length, compressedSha256: rawAll.compressedSha256, brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match', contains: 'new profiles and complete updated snapshots for pre-existing profiles' },
    newShard: { path: SHARD, encoding: 'brotli-jsonl', recordCount: newRecords.length, decodedBytes: newShard.raw.length, decodedSha256: newShard.decodedSha256, compressedBytes: newShard.compressed.length, compressedSha256: newShard.compressedSha256, brotliParameters: { mode: 'text', quality: 11 }, roundTrip: 'exact-byte-match' },
    indexedRecordCount: currentIndex.recordCount,
    morphologyAudit: input.baseAudit.morphologyAudit,
    coverageDisposition: { speciesWithExistingSourceRowsNotIncremented: EXPECTED_IDS, addedSpeciesDossiers: newRecords.length, updatedExistingDossiers: updatedRecords.length, generalSourceRows: generalRowCount, morphologyClaimRows: morphologyClaimCount, excludedLocalityOnlyRows: excludedGeneralRowCount, distributionClaimRows: input.candidates.reduce((sum, candidate) => sum + candidate.sourceRows.filter(sourceRow => sourceRow.type === 'distribution').length, 0), completeDossiersAdded: 0, externallyReviewedDossiersAdded: 0 },
    generator: 'scripts/build-flora-panama-dossier-batch.mjs',
  }
  writeFileSync(join(ROOT, MANIFEST), JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  const rebuilt = readCatalogueDossiers()
  assert.equal(rebuilt.records.length, currentIndex.recordCount)
  for (const candidate of input.candidates) assert.ok(rebuilt.records.some(record => record.colId === candidate.colId), `Built store missing ${candidate.colId}`)
  console.log(JSON.stringify({ batchId: input.batchId, disposition: 'applied', candidates: input.candidates.length, newRecords: newRecords.length, updatedRecords: updatedRecords.length, indexedRecordsAfter: rebuilt.records.length, changedShards: changedShardResults.map(shard => ({ path: shard.path, updatedRecordCount: shard.updatedRecordCount })) }, null, 2))
}

if (process.argv[2] === 'prepare') prepareInput()
else build()
