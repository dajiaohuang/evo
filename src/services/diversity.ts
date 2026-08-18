import type { FossilOccurrence } from '../types'

export interface DiversityBin {
  olderMa: number
  youngerMa: number
  occurrences: number
  observedTaxa: number
}

export interface SamplingQuality {
  totalOccurrences: number
  observedTaxa: number
  collections: number
  countries: number
  paleoCoordinateCoverage: number
  countryCoverage: number
  narrowAgeCoverage: number
  medianAgeUncertaintyMa: number
}

function finiteWidth(record: FossilOccurrence): number | null {
  const width = record.eag - record.lag
  return Number.isFinite(width) && width >= 0 ? width : null
}

export function summarizeSampling(records: FossilOccurrence[]): SamplingQuality {
  const ageWidths = records.flatMap((record) => {
    const width = finiteWidth(record)
    return width === null ? [] : [width]
  }).sort((a, b) => a - b)
  const midpoint = Math.floor(ageWidths.length / 2)
  const medianAgeUncertaintyMa = ageWidths.length === 0
    ? 0
    : ageWidths.length % 2
      ? ageWidths[midpoint]
      : (ageWidths[midpoint - 1] + ageWidths[midpoint]) / 2

  const ratio = (count: number) => records.length ? count / records.length : 0
  return {
    totalOccurrences: records.length,
    observedTaxa: new Set(records.map((record) => record.tid || record.tna || record.idn).filter(Boolean)).size,
    collections: new Set(records.map((record) => record.cid).filter(Boolean)).size,
    countries: new Set(records.map((record) => record.cc2).filter(Boolean)).size,
    paleoCoordinateCoverage: ratio(records.filter((record) => Number.isFinite(record.paleolat) && Number.isFinite(record.paleolng)).length),
    countryCoverage: ratio(records.filter((record) => Boolean(record.cc2)).length),
    narrowAgeCoverage: ratio(records.filter((record) => {
      const width = finiteWidth(record)
      return width !== null && width <= 10
    }).length),
    medianAgeUncertaintyMa,
  }
}

export function buildDiversityBins(records: FossilOccurrence[], binCount = 10): DiversityBin[] {
  if (!records.length || binCount < 1) return []
  const oldest = Math.max(...records.map((record) => record.eag))
  const youngest = Math.min(...records.map((record) => record.lag))
  const span = Math.max(oldest - youngest, 1)
  const binWidth = span / binCount

  return Array.from({ length: binCount }, (_, index) => {
    const olderMa = oldest - index * binWidth
    const youngerMa = index === binCount - 1 ? youngest : oldest - (index + 1) * binWidth
    const sampled = records.filter((record) => {
      const midpoint = (record.eag + record.lag) / 2
      return midpoint <= olderMa && (index === binCount - 1 ? midpoint >= youngerMa : midpoint > youngerMa)
    })
    return {
      olderMa,
      youngerMa,
      occurrences: sampled.length,
      observedTaxa: new Set(sampled.map((record) => record.tid || record.tna || record.idn).filter(Boolean)).size,
    }
  })
}

export function topObservedTaxa(records: FossilOccurrence[], limit = 8): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>()
  for (const record of records) {
    const name = record.tna || record.idn || 'Unresolved identification'
    counts.set(name, (counts.get(name) ?? 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }))
}
