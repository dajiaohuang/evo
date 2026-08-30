import { createHash } from 'node:crypto'

export const TARGETED_PBDB_PAGE_SIZE = 5000
export const TARGETED_PACKAGE_RECORD_LIMIT = 5000

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

export function numericOccurrenceId(value) {
  const match = String(value ?? '').match(/(\d+)$/)
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

export function normalizePbdbOccurrence(record, packageId) {
  return {
    oid: record.oid ?? '',
    tna: record.tna ?? '',
    idn: [record.idg, record.ids].filter(Boolean).join(' '),
    tid: record.tid ?? '',
    rnk: record.rnk ?? 0,
    lng: String(record.lng ?? ''),
    lat: String(record.lat ?? ''),
    eag: record.eag,
    lag: record.lag,
    ...(Number.isFinite(record.pln) && Number.isFinite(record.pla) ? { paleolng: record.pln, paleolat: record.pla } : {}),
    ...(record.pm1 ? { paleoModelId: `pbdb:${record.pm1}` } : {}),
    ...(record.gpl ? { plateId: String(record.gpl) } : {}),
    ...(record.prc ? { coordinatePrecision: record.prc } : {}),
    ...(record.gsc ? { geographicScale: record.gsc } : {}),
    ...(record.rid ? { referenceId: record.rid } : {}),
    ...(record.aut ? { referenceAuthor: record.aut } : {}),
    ...(record.pby && Number.isFinite(Number(record.pby)) ? { referenceYear: Number(record.pby) } : {}),
    ...(record.sfm ? { formation: record.sfm } : {}),
    ...(record.smb ? { member: record.smb } : {}),
    ...([record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).length
      ? { lithology: [record.lt1, record.la1, record.lt2, record.la2].filter(Boolean).join('; ') }
      : {}),
    ...(record.env ? { paleoenvironment: record.env } : {}),
    ...(record.tpm ? { specimenBasis: record.tpm } : {}),
    cid: record.cid ?? '',
    oei: record.oei ?? '',
    ...(record.cc2 ? { cc2: record.cc2 } : {}),
    ...(record.stp ? { stp: record.stp } : {}),
    classification: Object.fromEntries([
      ['phylum', record.phl],
      ['class', record.cll],
      ['order', record.odl],
      ['family', record.fml],
      ['genus', record.gnl],
    ].filter(([, value]) => value)),
    packageId,
    packageAssignmentStatus: 'mapped',
    packageAssignmentBasis: 'targeted-complete-base-id-query',
  }
}

export function queryEligibility(resolution) {
  if (!resolution) return { eligible: false, reason: 'missing-resolution-ledger-entry' }
  if (resolution.resolutionStatus !== 'resolved' || !resolution.pbdbId || !resolution.acceptedName) {
    return { eligible: false, reason: resolution.resolutionReason ?? 'unresolved' }
  }
  if (resolution.parentRelationshipKind === 'taxonomic-parent' && !resolution.lineageCompatibility?.startsWith('compatible-')) {
    return { eligible: false, reason: resolution.lineageCompatibility === 'incompatible' ? 'needs-concept-review' : 'lineage-not-verified' }
  }
  if (resolution.conceptReviewStatus === 'needs-concept-review' || resolution.automatedRecommendation === 'needs-concept-review') {
    return { eligible: false, reason: 'needs-concept-review' }
  }
  if (resolution.automatedRecommendation !== 'accept-external-mapping') {
    return { eligible: false, reason: resolution.automatedRecommendation ?? 'withhold-external-mapping' }
  }
  return { eligible: true, reason: 'resolution-ledger-accepted-mapping' }
}

export function checksumRows(rows) {
  const hash = createHash('sha256')
  for (const row of rows) hash.update(`${JSON.stringify(row)}\n`)
  return hash.digest('hex')
}

export function checksumOccurrenceIds(ids) {
  return sha256(ids.join('\n'))
}
