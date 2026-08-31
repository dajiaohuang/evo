function clean(value) { return value === null || value === undefined ? null : String(value).trim() || null }

export function normalizeScientificName(value) {
  return String(value ?? '').normalize('NFC').replaceAll('_', ' ').replace(/\s+/gu, ' ').trim()
    .replace(/^(\S+) \([^()\s]+\) (\S+)$/u, '$1 $2')
}

export function colExactMatchName(record) {
  const scientificName = String(record.scientificName ?? '')
  const authorship = clean(record.authorship)
  const suffix = authorship ? ` ${authorship}` : ''
  return normalizeScientificName(suffix && scientificName.endsWith(suffix) ? scientificName.slice(0, -suffix.length) : scientificName)
}

function currentName(row) {
  return { tsn: String(row.tsn), scientificName: String(row.scientific_name), usage: String(row.name_usage), credibilityRating: clean(row.credibility_rtng), completenessRating: clean(row.completeness_rtng), currencyRating: clean(row.currency_rating), updateDate: clean(row.update_date) }
}
function synonymName(row) { return { tsn: String(row.synonym_tsn), scientificName: String(row.synonym_name), usage: String(row.synonym_usage), unacceptabilityReason: clean(row.unaccept_reason), updateDate: clean(row.synonym_update_date) } }
function compare(left, right) { return Number(left.tsn) - Number(right.tsn) || left.scientificName.localeCompare(right.scientificName) }

export function createItisNameIndex(currentRows, synonymRows) {
  const current = new Map(); const names = new Map()
  const resolution = (name, tsn) => {
    const key = normalizeScientificName(name); if (!names.has(key)) names.set(key, new Map())
    const targets = names.get(key)
    if (!targets.has(tsn)) { const row = current.get(tsn); if (!row) throw new Error(`ITIS synonym target is absent: ${tsn}`); targets.set(tsn, { current: row, direct: [], synonyms: [] }) }
    return targets.get(tsn)
  }
  for (const row of currentRows) { const record = currentName(row); if (record.usage !== 'accepted') throw new Error(`Expected accepted ITIS species: ${record.tsn}`); if (current.has(record.tsn)) throw new Error(`Duplicate ITIS TSN: ${record.tsn}`); current.set(record.tsn, record) }
  for (const row of current.values()) resolution(row.scientificName, row.tsn).direct.push(row)
  for (const row of synonymRows) resolution(row.synonym_name, String(row.tsn_accepted)).synonyms.push(synonymName(row))
  for (const targets of names.values()) for (const candidate of targets.values()) { candidate.direct.sort(compare); candidate.synonyms.sort(compare) }
  return names
}

export function matchColSpecies(record, names) {
  const exactMatchName = colExactMatchName(record)
  const base = { colUsageId: String(record.id), colScientificName: String(record.scientificName), colAuthorship: clean(record.authorship), exactMatchName }
  const candidates = [...(names.get(exactMatchName)?.values() ?? [])].sort((a, b) => compare(a.current, b.current))
  const evidence = (candidate) => ({ currentName: candidate.current, evidence: [...candidate.direct.map((name) => ({ type: 'accepted-name', name })), ...candidate.synonyms.map((name) => ({ type: 'synonym', name }))] })
  if (!candidates.length) return { status: 'unmatched', record: base }
  if (candidates.length > 1) return { status: 'ambiguous', record: { ...base, candidates: candidates.map(evidence) } }
  const [candidate] = candidates
  return candidate.direct.length ? { status: 'accepted', record: { ...base, currentName: candidate.current } } : { status: 'synonym-current-name-redirect', record: { ...base, matchedSynonyms: candidate.synonyms, currentName: candidate.current } }
}
