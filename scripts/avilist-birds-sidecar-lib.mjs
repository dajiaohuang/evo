import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { unzipSync } from 'fflate'

export const COL_RELEASE = 'COL26.8'
export const COL_RELEASE_DATE = '2026-08-20'
export const CHECKLISTBANK_DATASET_KEY = 316115
export const AVES_ROOT_ID = 'V2'
export const CROCODYLIA_ROOT_ID = '329'
export const EXPECTED_AVES_SPECIES = 11044
export const EXPECTED_CROCODYLIA_SPECIES = 27
export const EXPECTED_PACKAGE_SPECIES = EXPECTED_AVES_SPECIES + EXPECTED_CROCODYLIA_SPECIES
export const EXPECTED_AVILIST_SPECIES = 11131

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

function clean(value) {
  return value === null || value === undefined ? null : String(value).trim() || null
}

export function normalizeScientificName(value) {
  const normalized = String(value ?? '')
    .normalize('NFC')
    .replaceAll('_', ' ')
    .replace(/\s+/gu, ' ')
    .trim()
  return normalized.replace(/^(\S+) \([^()\s]+\) (\S+)$/u, '$1 $2')
}

export function colExactMatchName(record) {
  const scientificName = String(record.scientificName ?? '')
  const authorship = clean(record.authorship)
  const suffix = authorship ? ` ${authorship}` : ''
  const canonical = suffix && scientificName.endsWith(suffix)
    ? scientificName.slice(0, -suffix.length)
    : scientificName
  return normalizeScientificName(canonical)
}

function xmlDecode(value) {
  return String(value ?? '')
    .replace(/&#x([0-9a-f]+);/giu, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/gu, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&')
}

function parseSharedStrings(xml) {
  return [...xml.matchAll(/<si(?:\s[^>]*)?>([\s\S]*?)<\/si>/gu)].map((match) => (
    [...match[1].matchAll(/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/gu)]
      .map((text) => xmlDecode(text[1]))
      .join('')
  ))
}

function columnIndex(reference) {
  const letters = String(reference).match(/^[A-Z]+/u)?.[0]
  if (!letters) throw new Error(`XLSX cell lacks a column reference: ${reference}`)
  let result = 0
  for (const letter of letters) result = result * 26 + letter.charCodeAt(0) - 64
  return result - 1
}

function cellValue(attributes, body, sharedStrings) {
  const type = attributes.match(/\bt="([^"]+)"/u)?.[1] ?? null
  if (type === 'inlineStr') {
    return [...body.matchAll(/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/gu)]
      .map((match) => xmlDecode(match[1]))
      .join('')
  }
  const raw = body.match(/<v(?:\s[^>]*)?>([\s\S]*?)<\/v>/u)?.[1]
  if (raw === undefined) return null
  if (type === 's') {
    const value = sharedStrings[Number(raw)]
    if (value === undefined) throw new Error(`XLSX shared-string index is absent: ${raw}`)
    return value
  }
  return xmlDecode(raw)
}

function parseRows(xml, sharedStrings) {
  return [...xml.matchAll(/<row([^>]*)>([\s\S]*?)<\/row>/gu)].map((rowMatch) => {
    const rowNumber = Number(rowMatch[1].match(/\br="([0-9]+)"/u)?.[1] ?? 0)
    const values = []
    for (const cellMatch of rowMatch[2].matchAll(/<c([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/gu)) {
      const reference = cellMatch[1].match(/\br="([A-Z]+[0-9]+)"/u)?.[1]
      values[columnIndex(reference)] = cellValue(cellMatch[1], cellMatch[2] ?? '', sharedStrings)
    }
    return { rowNumber, values }
  })
}

const REQUIRED_HEADERS = [
  'Sequence', 'Taxon_rank', 'Order', 'Family', 'Scientific_name', 'Authority',
  'English_name_AviList', 'AvibaseID', 'Protonym',
]

export function readAviListWorkbook(path, sourceLedger) {
  const workbookBytes = readFileSync(path)
  const expected = sourceLedger.acquisition.response
  if (workbookBytes.byteLength !== expected.bytes || sha256(workbookBytes) !== expected.sha256) {
    throw new Error('AviList workbook bytes do not match the pinned official v2025b source')
  }
  const archive = unzipSync(new Uint8Array(workbookBytes))
  const sharedPath = 'xl/sharedStrings.xml'
  const worksheetPath = sourceLedger.workbookAudit.worksheetPath
  if (!archive[sharedPath] || !archive[worksheetPath]) throw new Error('Pinned AviList workbook members are absent')
  const decoder = new TextDecoder('utf-8')
  const sharedStrings = parseSharedStrings(decoder.decode(archive[sharedPath]))
  const rows = parseRows(decoder.decode(archive[worksheetPath]), sharedStrings)
  if (rows.length !== sourceLedger.workbookAudit.rowCountIncludingHeader) {
    throw new Error(`AviList worksheet row count changed: ${rows.length}`)
  }
  const headers = rows[0].values
  const indexes = Object.fromEntries(headers.map((header, index) => [header, index]))
  for (const header of REQUIRED_HEADERS) {
    if (indexes[header] === undefined) throw new Error(`AviList workbook header is absent: ${header}`)
  }
  const records = rows.slice(1)
    .filter(({ values }) => values[indexes.Taxon_rank] === 'species')
    .map(({ rowNumber, values }) => ({
      sourceRow: rowNumber,
      sequence: Number(values[indexes.Sequence]),
      order: clean(values[indexes.Order]),
      family: clean(values[indexes.Family]),
      scientificName: normalizeScientificName(values[indexes.Scientific_name]),
      authority: clean(values[indexes.Authority]),
      englishName: clean(values[indexes.English_name_AviList]),
      avibaseId: clean(values[indexes.AvibaseID]),
      protonym: normalizeScientificName(values[indexes.Protonym]),
    }))
  if (records.length !== EXPECTED_AVILIST_SPECIES
    || new Set(records.map((record) => record.avibaseId)).size !== EXPECTED_AVILIST_SPECIES
    || records.some((record) => !record.scientificName || !/^avibase-[A-F0-9]{8}$/u.test(record.avibaseId ?? ''))) {
    const invalid = records.find((record) => !record.scientificName || !/^avibase-[A-F0-9]{8}$/u.test(record.avibaseId ?? ''))
    throw new Error(`AviList species rows do not match the pinned v2025b contract: records=${records.length}, ids=${new Set(records.map((record) => record.avibaseId)).size}, invalid=${JSON.stringify(invalid ?? null)}`)
  }
  return { workbookBytes, records }
}

function appendIndex(index, key, record) {
  if (!key) return
  if (!index.has(key)) index.set(key, [])
  index.get(key).push(record)
}

export function createAviListIndex(records) {
  const currentNames = new Map()
  const protonyms = new Map()
  for (const record of records) {
    appendIndex(currentNames, record.scientificName, record)
    appendIndex(protonyms, record.protonym, record)
  }
  for (const values of [...currentNames.values(), ...protonyms.values()]) {
    values.sort((left, right) => compareStableIds(left.avibaseId, right.avibaseId))
  }
  return { currentNames, protonyms }
}

function candidateRecord(record) {
  return {
    avibaseId: record.avibaseId,
    officialScientificName: record.scientificName,
    officialAuthority: record.authority,
    officialEnglishName: record.englishName,
    officialOrder: record.order,
    officialFamily: record.family,
    officialProtonym: record.protonym,
    sourceRow: record.sourceRow,
    sequence: record.sequence,
  }
}

function colRecord(record, exactMatchName) {
  return {
    colId: String(record.id),
    colScientificName: String(record.scientificName),
    colAuthorship: clean(record.authorship),
    colSourceDatasetId: record.sourceDatasetId == null ? null : String(record.sourceDatasetId),
    exactMatchName,
  }
}

function publicationYear(value) {
  const years = [...String(value ?? '').matchAll(/(?:^|[^0-9])((?:17|18|19|20)[0-9]{2})(?=[^0-9]|$)/gu)]
  return years.at(-1)?.[1] ?? null
}

export function matchColBirdSpecies(record, index) {
  const exactMatchName = colExactMatchName(record)
  const base = colRecord(record, exactMatchName)
  const currentCandidates = index.currentNames.get(exactMatchName) ?? []
  if (currentCandidates.length === 1) {
    return {
      ...base,
      status: 'accepted',
      mappingBasis: 'exact-current-scientific-name',
      ...candidateRecord(currentCandidates[0]),
    }
  }
  if (currentCandidates.length > 1) {
    return {
      ...base,
      status: 'ambiguous',
      mappingBasis: 'duplicate-exact-current-scientific-name',
      candidates: currentCandidates.map(candidateRecord),
    }
  }
  const protonymCandidates = index.protonyms.get(exactMatchName) ?? []
  if (protonymCandidates.length === 1) {
    const colPublicationYear = publicationYear(record.authorship)
    const officialPublicationYear = publicationYear(protonymCandidates[0].authority)
    if (!colPublicationYear || colPublicationYear !== officialPublicationYear) {
      return {
        ...base,
        status: 'ambiguous',
        mappingBasis: 'exact-official-protonym-authorship-year-conflict',
        colPublicationYear,
        candidates: [candidateRecord(protonymCandidates[0])],
      }
    }
    return {
      ...base,
      status: 'official-current-name-redirect',
      mappingBasis: 'exact-official-protonym-and-publication-year',
      matchedOfficialProtonym: protonymCandidates[0].protonym,
      matchedPublicationYear: colPublicationYear,
      ...candidateRecord(protonymCandidates[0]),
    }
  }
  if (protonymCandidates.length > 1) {
    return {
      ...base,
      status: 'ambiguous',
      mappingBasis: 'duplicate-exact-official-protonym',
      candidates: protonymCandidates.map(candidateRecord),
    }
  }
  return {
    ...base,
    status: 'unmatched',
    mappingBasis: 'no-permitted-exact-avilist-evidence',
  }
}

export function nonApplicableCrocodyliaRecord(record) {
  return {
    ...colRecord(record, colExactMatchName(record)),
    status: 'non-applicable',
    scope: 'Crocodylia',
    reason: 'AviList is an avian checklist; this package-local Crocodylia record is outside the upstream scope and is not an AviList unmatched record.',
  }
}
