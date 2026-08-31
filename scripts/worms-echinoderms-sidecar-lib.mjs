function clean(value) {
  return value === null || value === undefined ? null : String(value).trim() || null
}

export function normalizeScientificName(value) {
  return String(value ?? '')
    .normalize('NFC')
    .replaceAll('_', ' ')
    .replace(/\s+/gu, ' ')
    .trim()
}

export function colExactMatchName(record) {
  const scientificName = normalizeScientificName(record.scientificName)
  const authorship = clean(record.authorship)
  const suffix = authorship ? ` ${authorship}` : ''
  if (suffix && !scientificName.endsWith(suffix)) {
    return {
      matchable: false,
      exactMatchName: scientificName,
      reason: 'unsafe-col-authorship-boundary',
    }
  }
  return {
    matchable: true,
    exactMatchName: normalizeScientificName(
      suffix ? scientificName.slice(0, -suffix.length) : scientificName,
    ),
    reason: null,
  }
}

function aphiaUrl(aphiaId) {
  return `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${aphiaId}`
}

function baseRecord(colRecord, match, requestBatch) {
  return {
    colUsageId: String(colRecord.id),
    colScientificName: String(colRecord.scientificName),
    colAuthorship: clean(colRecord.authorship),
    colSourceDatasetId: String(colRecord.sourceDatasetId),
    exactMatchName: match.exactMatchName,
    requestBatch,
  }
}

function candidateRecord(record) {
  const aphiaId = String(record.AphiaID)
  const validAphiaId = String(record.valid_AphiaID)
  return {
    aphiaId,
    aphiaUrl: aphiaUrl(aphiaId),
    scientificName: String(record.scientificname),
    authority: clean(record.authority),
    status: String(record.status),
    validAphiaId,
    validName: String(record.valid_name),
    validUrl: aphiaUrl(validAphiaId),
    unacceptReason: clean(record.unacceptreason),
    modified: clean(record.modified),
  }
}

function exactEchinodermCandidates(records, exactMatchName) {
  return (Array.isArray(records) ? records : []).filter((record) => (
    record
    && record.match_type === 'exact'
    && normalizeScientificName(record.scientificname) === exactMatchName
    && record.rank === 'Species'
    && record.phylum === 'Echinodermata'
  ))
}

function isCompleteCandidate(record) {
  return Number.isInteger(Number(record.AphiaID))
    && Number.isInteger(Number(record.valid_AphiaID))
    && Boolean(clean(record.scientificname))
    && Boolean(clean(record.valid_name))
    && Boolean(clean(record.status))
}

export function matchColSpecies(colRecord, responseRecords, requestBatch) {
  const match = colExactMatchName(colRecord)
  const base = baseRecord(colRecord, match, requestBatch)
  if (!match.matchable) {
    return {
      status: 'withheld',
      record: { ...base, requestBatch: null, withheldReason: match.reason },
    }
  }

  const candidates = exactEchinodermCandidates(responseRecords, match.exactMatchName)
  if (candidates.some((record) => !isCompleteCandidate(record))) {
    return {
      status: 'withheld',
      record: { ...base, withheldReason: 'incomplete-worms-exact-record' },
    }
  }
  if (candidates.length === 0) return { status: 'unmatched', record: base }

  const targets = new Map()
  for (const candidate of candidates) {
    const validAphiaId = String(candidate.valid_AphiaID)
    if (!targets.has(validAphiaId)) targets.set(validAphiaId, [])
    targets.get(validAphiaId).push(candidate)
  }
  const orderedTargets = [...targets.entries()].sort((left, right) => (
    Number(left[0]) - Number(right[0])
  ))
  if (orderedTargets.length > 1) {
    return {
      status: 'ambiguous',
      record: {
        ...base,
        candidates: orderedTargets.map(([validAphiaId, evidence]) => ({
          validAphiaId,
          validName: String(evidence[0].valid_name),
          validUrl: aphiaUrl(validAphiaId),
          evidence: evidence.map(candidateRecord).sort((left, right) => Number(left.aphiaId) - Number(right.aphiaId)),
        })),
      },
    }
  }

  const [[validAphiaId, evidence]] = orderedTargets
  const orderedEvidence = evidence
    .map(candidateRecord)
    .sort((left, right) => Number(left.aphiaId) - Number(right.aphiaId))
  const direct = evidence.find((candidate) => (
    candidate.status === 'accepted'
    && String(candidate.AphiaID) === validAphiaId
    && normalizeScientificName(candidate.scientificname) === normalizeScientificName(candidate.valid_name)
  ))
  if (direct) {
    return {
      status: 'accepted',
      record: { ...base, aphiaRecord: candidateRecord(direct) },
    }
  }
  return {
    status: 'accepted-name-redirect',
    record: {
      ...base,
      matchedNames: orderedEvidence,
      acceptedName: {
        aphiaId: validAphiaId,
        scientificName: String(evidence[0].valid_name),
        aphiaUrl: aphiaUrl(validAphiaId),
      },
    },
  }
}

export function sortCrosswalkRecords(records) {
  return [...records].sort((left, right) => (
    left.exactMatchName.localeCompare(right.exactMatchName)
    || left.colUsageId.localeCompare(right.colUsageId)
  ))
}
