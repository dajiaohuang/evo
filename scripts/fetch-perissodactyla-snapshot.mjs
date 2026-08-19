import { createHash } from 'node:crypto'
import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const outputPath = join(rootDir, 'data/sources/perissodactyla-occurrence-snapshot-v2.json')
if (existsSync(outputPath) && !process.argv.includes('--replace')) throw new Error(`Refusing to overwrite ${outputPath}; pass --replace after reviewing upstream changes.`)

const profiles = readJson('data/packages/mammalia/perissodactyla/profiles.json')
const entities = new Map(readJson('data/registry/entities/entities.json').map((entity) => [entity.id, entity]))
const resolutions = new Map(readJson('data/sources/pbdb-taxon-resolution.json').resolutions.map((entry) => [entry.entityId, entry]))
const endpoint = 'https://paleobiodb.org/data1.2/occs/list.json'
const pageSize = 5000
const queryResults = []
const recordsById = new Map()

function normalize(record) {
  return {
    oid: record.oid ?? '', tna: record.tna ?? '', idn: [record.idg, record.ids].filter(Boolean).join(' '), tid: record.tid ?? '', rnk: record.rnk ?? 0,
    lng: String(record.lng ?? ''), lat: String(record.lat ?? ''), eag: record.eag, lag: record.lag,
    ...(Number.isFinite(record.pln) && Number.isFinite(record.pla) ? { paleolng: record.pln, paleolat: record.pla } : {}),
    ...(record.pm1 ? { paleoModelId: `pbdb:${record.pm1}` } : {}), ...(record.gpl ? { plateId: String(record.gpl) } : {}),
    ...(record.prc ? { coordinatePrecision: record.prc } : {}), ...(record.gsc ? { geographicScale: record.gsc } : {}),
    ...(record.rid ? { referenceId: record.rid } : {}), ...(record.aut ? { referenceAuthor: record.aut } : {}),
    ...(record.pby && Number.isFinite(Number(record.pby)) ? { referenceYear: Number(record.pby) } : {}),
    ...(record.sfm ? { formation: record.sfm } : {}), ...(record.smb ? { member: record.smb } : {}),
    ...([record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).length ? { lithology: [record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).join('; ') } : {}),
    ...(record.env ? { paleoenvironment: record.env } : {}), ...(record.tpm ? { specimenBasis: record.tpm } : {}),
    cid: record.cid ?? '', oei: record.oei ?? '', ...(record.cc2 ? { cc2: record.cc2 } : {}), ...(record.stp ? { stp: record.stp } : {}),
    classification: Object.fromEntries([['phylum', record.phl], ['class', record.cll], ['order', record.odl], ['family', record.fml], ['genus', record.gnl]].filter(([, value]) => value)),
    packageId: 'perissodactyla', packageAssignmentStatus: 'mapped', packageAssignmentBasis: 'complete-profile-base-id-query',
  }
}

for (const profile of profiles) {
  const baseId = profile.pbdbTaxonId.replace('txn:', '')
  const records = []
  let offset = 0
  let paginationComplete = false
  while (!paginationComplete) {
    const parameters = new URLSearchParams({ base_id: baseId, limit: String(pageSize), offset: String(offset), show: 'full,class', order: 'id' })
    const response = await fetch(`${endpoint}?${parameters}`, { headers: { 'user-agent': 'EvoAtlasDataPipeline/2026.08 (complete Perissodactyla profile snapshot)' } })
    if (!response.ok) throw new Error(`${profile.id}: PBDB returned ${response.status} ${response.statusText}`)
    const page = (await response.json()).records ?? []
    records.push(...page)
    offset += page.length
    paginationComplete = page.length < pageSize
  }
  const normalized = records.map(normalize)
  for (const record of normalized) {
    const existing = recordsById.get(record.oid)
    if (existing) {
      if (!existing.matchedProfileIds.includes(profile.id)) existing.matchedProfileIds.push(profile.id)
    } else recordsById.set(record.oid, { ...record, matchedProfileIds: [profile.id] })
  }
  const occurrenceIds = normalized.map((record) => record.oid).sort()
  const resolution = resolutions.get(profile.treeNodeId)
  const queryEligible = resolution?.resolutionStatus === 'resolved' && (resolution.conceptReviewStatus !== 'needs-concept-review' || resolution.humanCuratorDecision === 'accept-external-mapping')
  queryResults.push({
    profileId: profile.id, entityId: profile.treeNodeId, taxonConcept: profile.scientificName, externalTaxonId: profile.pbdbTaxonId,
    descendantClosure: entities.get(profile.treeNodeId)?.compositionScope.descendantEntityIds ?? [],
    queryParameters: { base_id: baseId, show: 'full,class', order: 'id', pageSize },
    upstreamTotal: normalized.length, rowsFetched: normalized.length, paginationComplete,
    selectionMethod: 'complete-pagination', randomSeed: null, inclusionProbability: 1,
    zeroInterpretation: normalized.length ? 'complete-query-observed' : 'complete-query-zero',
    conceptReviewStatus: resolution?.conceptReviewStatus ?? 'unresolved', queryEligible,
    occurrenceIdSha256: createHash('sha256').update(occurrenceIds.join('\n')).digest('hex'),
  })
  console.log(`${profile.id}: ${normalized.length.toLocaleString()} rows`)
}

const records = [...recordsById.values()].sort((left, right) => left.oid.localeCompare(right.oid, undefined, { numeric: true }))
const output = {
  schemaVersion: 2,
  snapshotId: 'perissodactyla-occurrence-snapshot-v2',
  source: { endpoint, apiVersion: '1.2', fetchedAt: new Date().toISOString(), sourceReferenceId: 'pbdb-api-2016' },
  method: 'Complete pagination by pinned accepted PBDB base_id for each flagship profile; records are deduplicated by occurrence ID.',
  normalizerVersion: 'perissodactyla-v2',
  queryResults,
  uniqueRecordCount: records.length,
  recordsSha256: createHash('sha256').update(JSON.stringify(records)).digest('hex'),
  records,
}
writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
console.log(`Wrote ${records.length.toLocaleString()} unique Perissodactyla occurrence rows to ${outputPath}.`)
