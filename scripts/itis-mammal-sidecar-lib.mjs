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

function currentNameRecord(row) {
  return {
    tsn: String(row.tsn),
    scientificName: String(row.scientific_name),
    usage: String(row.name_usage),
    credibilityRating: clean(row.credibility_rtng),
    completenessRating: clean(row.completeness_rtng),
    currencyRating: clean(row.currency_rating),
    updateDate: clean(row.update_date),
  }
}

function synonymRecord(row) {
  return {
    tsn: String(row.synonym_tsn),
    scientificName: String(row.synonym_name),
    usage: String(row.synonym_usage),
    unacceptabilityReason: clean(row.unaccept_reason),
    updateDate: clean(row.synonym_update_date),
  }
}

function compareTsn(left, right) {
  return Number(left.tsn) - Number(right.tsn) || left.scientificName.localeCompare(right.scientificName)
}

export function createItisMammalNameIndex(currentRows, synonymRows) {
  const currentByTsn = new Map()
  const names = new Map()

  function resolution(name, targetTsn) {
    const key = normalizeScientificName(name)
    if (!names.has(key)) names.set(key, new Map())
    const targets = names.get(key)
    if (!targets.has(targetTsn)) {
      const current = currentByTsn.get(targetTsn)
      if (!current) throw new Error(`ITIS synonym target is absent from the current Mammalia species query: ${targetTsn}`)
      targets.set(targetTsn, { current, direct: [], synonyms: [] })
    }
    return targets.get(targetTsn)
  }

  for (const row of currentRows) {
    const current = currentNameRecord(row)
    if (current.usage !== 'valid') throw new Error(`Expected valid ITIS Mammalia species: ${current.tsn}/${current.usage}`)
    if (currentByTsn.has(current.tsn)) throw new Error(`Duplicate current ITIS TSN: ${current.tsn}`)
    currentByTsn.set(current.tsn, current)
  }
  for (const current of currentByTsn.values()) resolution(current.scientificName, current.tsn).direct.push(current)

  for (const row of synonymRows) {
    const targetTsn = String(row.tsn_accepted)
    const synonym = synonymRecord(row)
    resolution(synonym.scientificName, targetTsn).synonyms.push(synonym)
  }

  for (const targets of names.values()) {
    for (const candidate of targets.values()) {
      candidate.direct.sort(compareTsn)
      candidate.synonyms.sort(compareTsn)
    }
  }
  return names
}

function colRecord(record, exactMatchName) {
  return {
    colUsageId: String(record.id),
    colScientificName: String(record.scientificName),
    colAuthorship: clean(record.authorship),
    exactMatchName,
  }
}

function candidateRecord(candidate) {
  return {
    currentName: candidate.current,
    evidence: [
      ...candidate.direct.map((record) => ({ type: 'accepted-name', name: record })),
      ...candidate.synonyms.map((record) => ({ type: 'synonym', name: record })),
    ],
  }
}

export function matchColSpecies(record, itisNameIndex) {
  const exactMatchName = colExactMatchName(record)
  const base = colRecord(record, exactMatchName)
  const candidates = [...(itisNameIndex.get(exactMatchName)?.values() ?? [])]
    .sort((left, right) => compareTsn(left.current, right.current))

  if (candidates.length === 0) return { status: 'unmatched', record: base }
  if (candidates.length > 1) {
    return {
      status: 'ambiguous',
      record: { ...base, candidates: candidates.map(candidateRecord) },
    }
  }

  const [candidate] = candidates
  if (candidate.direct.length) {
    return {
      status: 'accepted',
      record: { ...base, currentName: candidate.current },
    }
  }
  return {
    status: 'synonym-current-name-redirect',
    record: {
      ...base,
      matchedSynonyms: candidate.synonyms,
      currentName: candidate.current,
    },
  }
}

export function sortCrosswalkRecords(records) {
  return [...records].sort((left, right) => (
    left.exactMatchName.localeCompare(right.exactMatchName)
    || left.colUsageId.localeCompare(right.colUsageId)
  ))
}
