import { createHash } from 'node:crypto'
import { readFileSync, readdirSync } from 'node:fs'
import { basename, join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { unzipSync } from 'fflate'

export const CHECKLISTBANK_DATASET_KEY = 316115
export const CATALOGUE_RELEASE = 'COL26.8'
export const CATALOGUE_RELEASE_DATE = '2026-08-20'
export const EXPECTED_ACCEPTED_SPECIES = 157044
export const SOURCE_DATASETS = new Map([
  ['2073', {
    title: 'Species Fungorum Plus',
    version: 'Apr 2024',
    issued: '2024-04-28',
    doi: '10.48580/d4hj',
    versionDoi: '10.48580/d4hj.v14',
    authority: 'Index Fungorum',
  }],
  ['1148', {
    title: 'Unicellular spore-forming protozoan parasites',
    shortName: 'Microsporidia',
    version: 'Nov 2015',
    issued: '2015-11-22',
    doi: '10.48580/d3dm',
    versionDoi: '10.48580/d3dm.v6',
    authority: 'Index Fungorum / Species Fungorum',
  }],
])

export const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

export function compareStableIds(left, right) {
  return left < right ? -1 : left > right ? 1 : 0
}

export function locateColIdRangeFile(files, colId) {
  const matches = files.filter((file) => compareStableIds(file.minColId, colId) <= 0
    && compareStableIds(colId, file.maxColId) <= 0)
  if (matches.length > 1) throw new Error(`Overlapping colId shard ranges for ${colId}`)
  return matches[0] ?? null
}

export function readFungiSpecies(packageRoot) {
  const files = readdirSync(packageRoot)
    .filter((name) => /^species-\d{3}\.jsonl\.gz$/.test(name))
    .sort()
  const records = files.flatMap((name) => gunzipSync(readFileSync(join(packageRoot, name)))
    .toString('utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line)))
  if (records.length !== EXPECTED_ACCEPTED_SPECIES
    || records.some((record) => record.rank !== 'species' || record.status !== 'accepted')
    || records.some((record) => !SOURCE_DATASETS.has(String(record.sourceDatasetId)))) {
    throw new Error(`Expected ${EXPECTED_ACCEPTED_SPECIES} accepted Fungi species backed only by source datasets 2073 and 1148`)
  }
  return { files, records }
}

function tsvRows(bytes) {
  const lines = bytes.toString('utf8').replace(/^\uFEFF/, '').split(/\r?\n/)
  const fields = lines.shift().split('\t')
  return lines.filter(Boolean).map((line, index) => {
    const values = line.split('\t')
    if (values.length !== fields.length) throw new Error(`Unexpected TSV field count on row ${index + 2}: ${values.length} != ${fields.length}`)
    return Object.fromEntries(fields.map((field, fieldIndex) => [field, values[fieldIndex]]))
  })
}

function sourceRecord({ id, scientificName, authorship, rank, status, acceptedId = null, link = null }) {
  return {
    id: String(id),
    scientificName,
    authorship: authorship || '',
    label: authorship ? `${scientificName} ${authorship}` : scientificName,
    rank,
    status,
    acceptedId: acceptedId ? String(acceptedId) : null,
    link,
  }
}

export function readSpeciesFungorumArchive(archiveBytes) {
  const members = unzipSync(new Uint8Array(archiveBytes))
  const dataMemberName = Object.keys(members).find((name) => /^dataset-2073\.tsv$/.test(basename(name)))
  const metadataMemberName = Object.keys(members).find((name) => /^metadata\.yaml$/.test(basename(name)))
  if (!dataMemberName || !metadataMemberName || Object.keys(members).length !== 2) {
    throw new Error(`Unexpected Species Fungorum archive members: ${Object.keys(members).join(', ')}`)
  }
  const dataBytes = Buffer.from(members[dataMemberName])
  const metadataBytes = Buffer.from(members[metadataMemberName])
  const rows = tsvRows(dataBytes)
  const records = rows.map((row) => sourceRecord({
    id: row['dwc:taxonID'],
    scientificName: row['dwc:scientificName'],
    authorship: row['dwc:scientificNameAuthorship'],
    rank: row['dwc:taxonRank'],
    status: row['dwc:taxonomicStatus'],
    acceptedId: row['dwc:acceptedNameUsageID'],
    link: /^\d+$/.test(row['dwc:taxonID'])
      ? `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${row['dwc:taxonID']}`
      : null,
  }))
  return {
    records,
    archive: { bytes: archiveBytes.byteLength, sha256: sha256(archiveBytes) },
    dataMember: { path: dataMemberName, bytes: dataBytes.byteLength, sha256: sha256(dataBytes) },
    metadataMember: { path: metadataMemberName, bytes: metadataBytes.byteLength, sha256: sha256(metadataBytes) },
  }
}

export function readMicrosporidiaPages(pageResponses) {
  const records = []
  let expectedTotal = null
  let expectedOffset = 0
  for (const response of pageResponses) {
    const page = JSON.parse(response.bytes.toString('utf8'))
    if (!Array.isArray(page.result) || page.offset !== expectedOffset || !Number.isInteger(page.total)) {
      throw new Error(`Unexpected Microsporidia page at offset ${expectedOffset}`)
    }
    expectedTotal ??= page.total
    if (page.total !== expectedTotal) throw new Error('Microsporidia total changed between pages')
    records.push(...page.result.map((usage) => sourceRecord({
      id: usage.id,
      scientificName: usage.name?.scientificName,
      authorship: usage.name?.authorship,
      rank: usage.name?.rank,
      status: usage.status,
      acceptedId: usage.accepted?.id ?? usage.acceptedId ?? null,
      link: /^\d+$/.test(String(usage.id))
        ? `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${usage.id}`
        : usage.link ?? null,
    })))
    expectedOffset += page.result.length
  }
  if (records.length !== expectedTotal) throw new Error(`Microsporidia pages contain ${records.length}/${expectedTotal} usages`)
  return { records, total: expectedTotal }
}

function exactLabelIndex(records) {
  const index = new Map()
  for (const record of records) {
    const values = index.get(record.label) ?? []
    values.push(record)
    index.set(record.label, values)
  }
  return index
}

function authorityUrl(id) {
  return /^\d+$/.test(String(id))
    ? `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${id}`
    : null
}

export function matchFungiAuthority({ colRecords, sourceRecordsByDataset, sourceLinksByColId = new Map() }) {
  const indexes = new Map([...sourceRecordsByDataset].map(([datasetId, records]) => [datasetId, exactLabelIndex(records)]))
  const recordsById = new Map([...sourceRecordsByDataset].map(([datasetId, records]) => [
    datasetId,
    new Map(records.map((record) => [record.id, record])),
  ]))
  const consumed = new Map([...sourceRecordsByDataset].map(([datasetId]) => [datasetId, new Set()]))
  const records = []
  for (const col of colRecords) {
    const sourceDatasetId = String(col.sourceDatasetId)
    const candidates = indexes.get(sourceDatasetId)?.get(col.scientificName) ?? []
    const directLink = sourceLinksByColId.get(col.id)
    let output
    let mappingBasis = 'exact-source-dataset-and-verbatim-label'
    if (directLink) {
      if (String(directLink.sourceDatasetKey) !== sourceDatasetId
        || directLink.datasetKey !== CHECKLISTBANK_DATASET_KEY
        || directLink.sourceEntity !== 'name usage'
        || !directLink.sourceId) {
        throw new Error(`Invalid ChecklistBank source link for ${col.id}`)
      }
      const candidate = recordsById.get(sourceDatasetId)?.get(String(directLink.sourceId))
      if (!candidate) {
        output = {
          outcome: 'withheld',
          reason: 'checklistbank-source-id-absent-from-pinned-source-snapshot',
          observedAuthorityId: String(directLink.sourceId),
        }
      } else {
        consumed.get(sourceDatasetId).add(candidate.id)
        mappingBasis = 'checklistbank-source-record'
        if (candidate.status === 'accepted') {
          output = {
            outcome: 'accepted',
            authorityId: candidate.id,
            authorityUrl: authorityUrl(candidate.id),
          }
        } else if (candidate.acceptedId) {
          output = {
            outcome: 'redirect',
            authorityId: candidate.id,
            authorityUrl: authorityUrl(candidate.id),
            acceptedAuthorityId: candidate.acceptedId,
            acceptedAuthorityUrl: authorityUrl(candidate.acceptedId),
          }
        } else {
          output = {
            outcome: 'withheld',
            reason: 'source-record-is-not-accepted-and-has-no-accepted-target',
            observedAuthorityId: candidate.id,
            observedSourceStatus: candidate.status,
          }
        }
      }
    } else if (candidates.length === 0) {
      output = { outcome: 'unmatched', reason: 'no-exact-source-label' }
    } else if (candidates.length > 1) {
      output = {
        outcome: 'ambiguous',
        reason: 'multiple-exact-source-labels',
        candidateAuthorityIds: candidates.map((candidate) => candidate.id).sort(),
      }
    } else {
      const candidate = candidates[0]
      consumed.get(sourceDatasetId).add(candidate.id)
      if (candidate.status === 'accepted') {
        output = {
          outcome: 'accepted',
          authorityId: candidate.id,
          authorityUrl: authorityUrl(candidate.id),
        }
      } else if (candidate.acceptedId) {
        output = {
          outcome: 'redirect',
          authorityId: candidate.id,
          authorityUrl: authorityUrl(candidate.id),
          acceptedAuthorityId: candidate.acceptedId,
          acceptedAuthorityUrl: authorityUrl(candidate.acceptedId),
        }
      } else {
        output = {
          outcome: 'withheld',
          reason: 'source-record-is-not-accepted-and-has-no-accepted-target',
          observedAuthorityId: candidate.id,
          observedSourceStatus: candidate.status,
        }
      }
    }
    records.push({
      colId: col.id,
      sourceDatasetId,
      scientificName: col.scientificName,
      mappingBasis,
      ...output,
    })
  }
  const upstreamOnlyRecords = []
  for (const [sourceDatasetId, sourceRecords] of sourceRecordsByDataset) {
    const consumedIds = consumed.get(sourceDatasetId)
    for (const record of sourceRecords) {
      if (record.rank !== 'species' || record.status !== 'accepted' || consumedIds.has(record.id)) continue
      upstreamOnlyRecords.push({
        sourceDatasetId,
        authorityId: record.id,
        authorityUrl: authorityUrl(record.id),
        scientificName: record.label,
        sourceStatus: record.status,
      })
    }
  }
  upstreamOnlyRecords.sort((left, right) => compareStableIds(left.sourceDatasetId, right.sourceDatasetId)
    || compareStableIds(left.authorityId, right.authorityId))
  const outcomeCounts = Object.fromEntries(['accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld']
    .map((outcome) => [outcome, records.filter((record) => record.outcome === outcome).length]))
  return {
    records,
    upstreamOnlyRecords,
    counts: {
      acceptedSpecies: colRecords.length,
      eligible: colRecords.length,
      ...outcomeCounts,
      upstreamOnly: upstreamOnlyRecords.length,
    },
  }
}
