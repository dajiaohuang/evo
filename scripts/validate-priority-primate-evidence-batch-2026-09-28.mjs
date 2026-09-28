import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { brotliDecompressSync } from 'node:zlib'
import Ajv2020 from 'ajv/dist/2020.js'

const readJson = path => JSON.parse(readFileSync(path, 'utf8'))
const input = readJson('data/sources/priority-primate-evidence-batch-2026-09-28.json')
const updateManifest = readJson('data/knowledge/priority-primate-evidence-batch-2026-09-28.update-manifest.json')
const references = readJson('data/references.json')
const claims = readJson('data/evidence/claims.json')
const profiles = readJson('data/packages/mammalia/primates/profiles.json')
const claimIds = readJson('data/packages/mammalia/primates/evidence/claim-ids.json')
const fieldLinks = readJson('data/packages/mammalia/primates/evidence/field-claim-links.json')
const overrides = readJson('data/packages/mammalia/primates/evidence/field-claim-overrides.source.json').profiles
const queueManifest = readJson('data/knowledge/species-evidence-queue/manifest.json')
const dataManifest = readJson('data/manifest.json')
const selector = readJson('data/pages-preview.json')

const ajv = new Ajv2020({ allErrors: true, strict: true })
const validateReference = ajv.compile(readJson('data/schemas/reference.schema.json'))
const validateClaim = ajv.compile(readJson('data/schemas/claim.schema.json'))
const validateProfile = ajv.compile(readJson('data/schemas/profile.schema.json'))
const byId = (records, id) => records.filter(record => record.id === id)
const schemaCheck = (validate, record, label) => {
  assert.ok(validate(record), `${label}: ${ajv.errorsText(validate.errors)}`)
}

assert.equal(input.batchId, updateManifest.batchId)
assert.equal(updateManifest.queueProjection.acceptedSpeciesCount, queueManifest.counts.acceptedSpecies)
assert.equal(queueManifest.counts.acceptedSpecies, 2183133)
assert.equal(queueManifest.notIncludedInRuntime, true)
assert.equal(updateManifest.runtime.fullSpeciesEvidenceQueueIncluded, false)
assert.deepEqual(updateManifest.sharedSelector.selectedTaxonIds, input.runtimeSelection.selectedTaxonIds)
assert.equal(updateManifest.sharedSelector.changed, false)
for (const id of input.runtimeSelection.selectedTaxonIds) assert.ok(selector.taxonIds.includes(id), `${id} missing from shared App/Pages selector`)
assert.ok(dataManifest.checksums, 'Root data manifest must expose checksums')
assert.ok(dataManifest.checksums['data/evidence/claims.json'])
assert.ok(dataManifest.checksums['data/packages/mammalia/primates/profiles.json'])
assert.ok(dataManifest.checksums['data/sources/priority-primate-evidence-batch-2026-09-28.json'])

const queueShardByTaxon = { '6MB3T': '6', '3WWNQ': '3' }
const queueRowsByShard = new Map()
for (const prefix of new Set(Object.values(queueShardByTaxon))) {
  const path = `data/knowledge/species-evidence-queue/${prefix}.jsonl.br`
  const rows = brotliDecompressSync(readFileSync(path)).toString('utf8').trimEnd().split(/\r?\n/u).map(line => JSON.parse(line))
  queueRowsByShard.set(prefix, rows)
}

const validated = []
for (const target of input.targets) {
  const referenceId = target.appProfile.referenceId
  const [reference] = byId(references, referenceId)
  const [packageReference] = byId(readJson('data/packages/mammalia/primates/references.json'), referenceId)
  const [claim] = byId(claims, target.claimId)
  const [profile] = byId(profiles, target.appProfile.profileId)
  const [fieldLinkRecord] = fieldLinks.filter(record => record.profileId === target.appProfile.profileId)
  const [dossierShard] = updateManifest.targets.filter(record => record.colIds.includes(target.colId))

  assert.ok(reference && packageReference, `${target.colId}: source reference missing from global/package inventory`)
  assert.deepEqual(packageReference, reference, `${target.colId}: package reference differs from canonical record`)
  schemaCheck(validateReference, reference, `reference ${referenceId}`)
  assert.ok(claim, `${target.colId}: claim missing`)
  schemaCheck(validateClaim, claim, `claim ${target.claimId}`)
  assert.equal(claim.subjectId, `taxon:${target.appProfile.profileId}`)
  assert.equal(claim.claimType, target.claimType ?? target.facet)
  assert.ok(claim.referenceLinks.some(link => link.referenceId === referenceId && link.relation === 'supports' && link.quoteLocator === target.claim.locator))

  assert.ok(profile && fieldLinkRecord && dossierShard, `${target.colId}: runtime profile, field link, or dossier shard mapping missing`)
  schemaCheck(validateProfile, profile, `profile ${profile.id}`)
  assert.ok(profile.referenceIds.includes(referenceId), `${target.colId}: runtime profile does not expose the new source`)
  assert.equal(target.appProfile.field === 'ecology.diet' ? profile.ecology.diet : profile.evidenceSummary, target.appProfile.value)
  assert.ok(claimIds.includes(target.claimId), `${target.colId}: generated package claim ID missing`)

  const fieldLink = fieldLinkRecord.fields[target.appProfile.field]
  assert.equal(fieldLink.claimId, target.claimId)
  assert.equal(fieldLink.claimType, claim.claimType)
  assert.equal(fieldLink.relation, 'supports')
  assert.equal(fieldLink.contentOrigin, 'editorial-synthesis')
  assert.ok(fieldLink.sourceLocators.some(locator => locator.referenceId === referenceId && locator.locator === target.claim.locator))
  assert.equal(overrides[target.appProfile.profileId][target.appProfile.field].claimId, target.claimId)

  const rawDossiers = readFileSync(dossierShard.rawPath, 'utf8').trimEnd().split(/\r?\n/u).map(line => JSON.parse(line))
  const matchingDossiers = rawDossiers.filter(dossier => dossier.colId === target.colId)
  assert.equal(matchingDossiers.length, 1, `${target.colId}: expected exactly one raw dossier row in its changed shard`)
  const dossier = matchingDossiers[0]
  assert.ok(dossier.sources.some(source => source.id === target.source.id && source.licenseAssessment === 'item-level-verified'))
  assert.ok(dossier.facets[target.facet].claims.some(item => item.sourceIds.includes(target.source.id) && item.locator === target.claim.locator))
  assert.equal(dossier.facets[target.facet].status, 'partially-supported')

  const prefix = queueShardByTaxon[target.colId]
  const queueMatches = queueRowsByShard.get(prefix).filter(row => row.colId === target.colId)
  assert.equal(queueMatches.length, 1, `${target.colId}: expected exactly one row in affected queue shard ${prefix}`)
  const queueDossier = queueMatches[0].dossier
  assert.ok(queueDossier.sourceIds.includes(target.source.id))
  assert.equal(queueDossier.facetStatuses[target.facet], 'partially-supported')

  validated.push({ colId: target.colId, referenceId, claimId: target.claimId, facet: target.facet, queueShard: prefix })
}

console.log(JSON.stringify({ batchId: input.batchId, validatedTargets: validated, schemas: ['reference', 'claim', 'profile'], fullQueueRevalidated: false, fullSpeciesQueueExcludedFromRuntime: queueManifest.notIncludedInRuntime }, null, 2))
