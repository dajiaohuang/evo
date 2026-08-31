import { createHash } from 'node:crypto'

export const CATALOGUE_RELEASE = 'COL26.8'
export const CATALOGUE_RELEASE_DATE = '2026-08-20'
export const CHECKLISTBANK_DATASET_KEY = 316115
export const SOURCE_DATASET_KEY = 1157
export const SOURCE_DATASET_VERSION = '2026-08-01'
export const SOURCE_DATASET_VERSION_DOI = '10.48580/d3dx.v88'
export const SOURCE_DATASET_DOI = '10.48580/d3dx'
export const ROOT_USAGE_ID = 'C'
export const EXPECTED_ACCEPTED_SPECIES = 47975

export const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

export function compareStableIds(left, right) {
  return String(left).localeCompare(String(right))
}

export function normalizeName(value) {
  return String(value ?? '').normalize('NFC').replaceAll('_', ' ').replace(/\s+/gu, ' ').trim()
}

export function sourceUrl(sourceId) {
  const match = String(sourceId ?? '').match(/:(\d+)$/)
  return match ? `https://www.marinespecies.org/foraminifera/aphia.php?p=taxdetails&id=${match[1]}` : null
}

export function sourceAphiaId(sourceId) {
  const match = String(sourceId ?? '').match(/:(\d+)$/)
  return match?.[1] ?? null
}

export function locateColIdRangeFile(files, colId) {
  const matches = files.filter((file) => compareStableIds(file.minColId, colId) <= 0
    && compareStableIds(colId, file.maxColId) <= 0)
  if (matches.length > 1) throw new Error(`Overlapping Foraminifera shard ranges for ${colId}`)
  return matches[0] ?? null
}

export function colLineageContainsRoot(record, nodes, rootId = ROOT_USAGE_ID) {
  let ancestorId = record.parentId
  const visited = new Set()
  while (ancestorId && ancestorId !== rootId) {
    if (visited.has(ancestorId)) throw new Error(`Cycle in COL lineage at ${ancestorId}`)
    visited.add(ancestorId)
    const ancestor = nodes.get(ancestorId)
    if (!ancestor) throw new Error(`Broken COL lineage for ${record.id} at ${ancestorId}`)
    ancestorId = ancestor.parentId
  }
  return ancestorId === rootId
}

export function sourceRecordProjection(record) {
  const name = record?.name ?? {}
  const accepted = record?.accepted ?? null
  return {
    sourceId: String(record.id),
    sourceAphiaId: sourceAphiaId(record.id),
    sourceUrl: sourceUrl(record.id),
    scientificName: String(name.scientificName ?? ''),
    authorship: name.authorship ?? null,
    rank: String(record.rank ?? name.rank ?? ''),
    status: String(record.status ?? ''),
    acceptedSourceId: accepted?.id ? String(accepted.id) : null,
    acceptedScientificName: accepted?.name?.scientificName ?? null,
    acceptedSourceUrl: accepted?.id ? sourceUrl(accepted.id) : null,
  }
}

export function canonicalJsonBytes(value) {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8')
}
