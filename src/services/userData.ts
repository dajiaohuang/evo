import registryData from '../../data/registry/entities/entities.json'

type Row = Record<string, unknown>

export interface UserDataPreview {
  format: 'csv' | 'json' | 'geojson'
  recordCount: number
  fields: string[]
  matchedEntityIds: string[]
  unmatchedNames: string[]
  issues: string[]
  records: Row[]
}

const registry = registryData as Array<{ id: string; names: { scientific: string; en: string; zh: string }; synonyms: string[] }>
const entityByName = new Map(registry.flatMap((entity) => [entity.id, entity.names.scientific, entity.names.en, entity.names.zh, ...entity.synonyms]
  .filter(Boolean)
  .map((name) => [name.trim().toLocaleLowerCase(), entity.id] as const)))

function parseCsv(text: string): Row[] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let quoted = false
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index]
    if (quoted && character === '"' && text[index + 1] === '"') { cell += '"'; index += 1; continue }
    if (character === '"') { quoted = !quoted; continue }
    if (!quoted && character === ',') { row.push(cell); cell = ''; continue }
    if (!quoted && (character === '\n' || character === '\r')) {
      if (character === '\r' && text[index + 1] === '\n') index += 1
      row.push(cell)
      if (row.some((value) => value.length)) rows.push(row)
      row = []
      cell = ''
      continue
    }
    cell += character
  }
  row.push(cell)
  if (row.some((value) => value.length)) rows.push(row)
  if (quoted) throw new Error('CSV contains an unterminated quoted field.')
  const [headers, ...body] = rows
  if (!headers?.length) return []
  const normalizedHeaders = headers.map((header, index) => header.trim() || `column_${index + 1}`)
  if (new Set(normalizedHeaders).size !== normalizedHeaders.length) throw new Error('CSV column names must be unique.')
  return body.map((values) => Object.fromEntries(normalizedHeaders.map((header, index) => [header, values[index] ?? ''])))
}

function rowsFromJson(value: unknown): { format: UserDataPreview['format']; rows: Row[] } {
  if (Array.isArray(value)) return { format: 'json', rows: value as Row[] }
  if (!value || typeof value !== 'object') throw new Error('JSON must contain an array of records or a GeoJSON FeatureCollection.')
  const object = value as Record<string, unknown>
  if (object.type === 'FeatureCollection' && Array.isArray(object.features)) {
    const rows = object.features.map((feature, index) => {
      if (!feature || typeof feature !== 'object') return { feature_index: index }
      const item = feature as { properties?: unknown; geometry?: { type?: unknown; coordinates?: unknown } }
      return {
        ...(item.properties && typeof item.properties === 'object' ? item.properties as Row : {}),
        geometry_type: item.geometry?.type ?? null,
        coordinates: item.geometry?.coordinates ?? null,
      }
    })
    return { format: 'geojson', rows }
  }
  if (Array.isArray(object.records)) return { format: 'json', rows: object.records as Row[] }
  throw new Error('JSON object must expose a records array or GeoJSON features array.')
}

function candidateName(row: Row): string {
  for (const field of ['entityId', 'entity_id', 'taxon', 'accepted_name', 'acceptedName', 'scientificName', 'tna', 'name']) {
    if (typeof row[field] === 'string' && row[field].trim()) return row[field].trim()
  }
  return ''
}

export function parseUserDatasetText(text: string, filename: string): UserDataPreview {
  if (text.length > 20_000_000) throw new Error('Local imports are limited to 20 MB of text.')
  const csv = filename.toLocaleLowerCase().endsWith('.csv')
  const parsed = csv ? { format: 'csv' as const, rows: parseCsv(text) } : rowsFromJson(JSON.parse(text))
  if (parsed.rows.length > 25_000) throw new Error('Local imports are limited to 25,000 records.')
  const issues: string[] = []
  const records = parsed.rows.filter((row, index) => {
    const valid = Boolean(row) && typeof row === 'object' && !Array.isArray(row)
    if (!valid) issues.push(`Row ${index + 1} is not an object and was omitted.`)
    return valid
  })
  const fields = [...new Set(records.flatMap((row) => Object.keys(row)))].sort()
  const matched = new Set<string>()
  const unmatched = new Set<string>()
  for (const row of records) {
    const name = candidateName(row)
    if (!name) continue
    const entityId = entityByName.get(name.toLocaleLowerCase())
    if (entityId) matched.add(entityId)
    else unmatched.add(name)
  }
  if (!records.length) issues.push('No data records were found.')
  if (!fields.length) issues.push('No fields were found.')
  return {
    format: parsed.format,
    recordCount: records.length,
    fields,
    matchedEntityIds: [...matched].sort(),
    unmatchedNames: [...unmatched].sort().slice(0, 50),
    issues,
    records,
  }
}

export async function parseUserDataset(file: File): Promise<UserDataPreview> {
  return parseUserDatasetText(await file.text(), file.name)
}
