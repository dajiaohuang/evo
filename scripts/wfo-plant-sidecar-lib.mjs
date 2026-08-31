export function parseTsvLine(line) {
  const values = []
  let value = ''
  let quoted = false
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    if (quoted) {
      if (character === '"' && line[index + 1] === '"') {
        value += '"'
        index += 1
      } else if (character === '"') quoted = false
      else value += character
    } else if (character === '\t') {
      values.push(value)
      value = ''
    } else if (character === '"' && value.length === 0) quoted = true
    else value += character
  }
  values.push(value)
  return values
}

export function normalizeExact(value) {
  return String(value ?? '')
    .normalize('NFC')
    .replaceAll('_', ' ')
    .replace(/\s+/gu, ' ')
    .trim()
}

export function splitColScientificName(scientificName, authorship) {
  const normalizedName = normalizeExact(scientificName)
  const normalizedAuthorship = normalizeExact(authorship)
  if (!normalizedAuthorship) return { name: normalizedName, authorship: '', safe: true }
  const suffix = ` ${normalizedAuthorship}`
  if (!normalizedName.endsWith(suffix)) {
    return { name: null, authorship: normalizedAuthorship, safe: false, reason: 'authorship-is-not-an-exact-trailing-suffix' }
  }
  const name = normalizedName.slice(0, -suffix.length).trim()
  if (!name) return { name: null, authorship: normalizedAuthorship, safe: false, reason: 'empty-name-after-exact-authorship-removal' }
  return { name, authorship: normalizedAuthorship, safe: true }
}

export function exactNameKey({ scientificName, authorship, rank = 'species' }) {
  return [normalizeExact(rank).toLowerCase(), normalizeExact(scientificName), normalizeExact(authorship)].join('\u0000')
}

export function matchExactWfoRecord(colRecord, candidates, acceptedByTaxonId) {
  const split = splitColScientificName(colRecord.scientificName, colRecord.authorship)
  if (!split.safe) return { status: 'withheld', reason: split.reason }
  const key = exactNameKey({ scientificName: split.name, authorship: split.authorship })
  const eligible = (candidates.get(key) ?? [])
    .filter((candidate) => acceptedByTaxonId.has(candidate.targetTaxonId))
  const targetIds = [...new Set(eligible.map((candidate) => candidate.targetTaxonId))].sort()
  if (targetIds.length === 0) return { status: 'unmatched', mappingBasis: 'no-exact-wfo-name-and-authorship-record' }
  if (targetIds.length > 1) {
    return {
      status: 'ambiguous',
      mappingBasis: 'exact-name-and-authorship-resolve-to-multiple-wfo-accepted-taxa',
      candidateWfoIds: [...new Set(targetIds.map((targetId) => acceptedByTaxonId.get(targetId).wfoId))].sort(),
    }
  }
  const target = acceptedByTaxonId.get(targetIds[0])
  const direct = eligible.some((candidate) => candidate.kind === 'accepted' && candidate.nameId === target.nameId)
  return {
    status: direct ? 'accepted' : 'redirect',
    mappingBasis: direct ? 'exact-wfo-accepted-name-and-authorship' : 'exact-wfo-synonym-name-and-authorship-to-explicit-accepted-target',
    target,
  }
}
