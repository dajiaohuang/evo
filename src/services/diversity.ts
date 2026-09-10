import type { FossilOccurrence } from '../types'
import { hasSpatialPosition } from '../utils/spatial'

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
  medianAgeUncertaintyMa: number | null
}

function finiteWidth(record: FossilOccurrence): number | null {
  if (!Number.isFinite(record.eag) || !Number.isFinite(record.lag) || record.lag < 0) return null
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
    ? null
    : ageWidths.length % 2
      ? ageWidths[midpoint]
      : (ageWidths[midpoint - 1] + ageWidths[midpoint]) / 2

  const ratio = (count: number) => records.length ? count / records.length : 0
  return {
    totalOccurrences: records.length,
    observedTaxa: new Set(records.map((record) => record.tid || record.tna || record.idn).filter(Boolean)).size,
    collections: new Set(records.map((record) => record.cid).filter(Boolean)).size,
    countries: new Set(records.map((record) => record.cc2).filter(Boolean)).size,
    paleoCoordinateCoverage: ratio(records.filter((record) => hasSpatialPosition(record, 'paleo')).length),
    countryCoverage: ratio(records.filter((record) => Boolean(record.cc2)).length),
    narrowAgeCoverage: ratio(records.filter((record) => {
      const width = finiteWidth(record)
      return width !== null && width <= 10
    }).length),
    medianAgeUncertaintyMa,
  }
}

export function buildDiversityBins(records: FossilOccurrence[], binCount = 10): DiversityBin[] {
  if (!records.length || !Number.isInteger(binCount) || binCount < 1) return []
  let oldest = -Infinity
  let youngest = Infinity
  for (const record of records) {
    if (finiteWidth(record) === null) continue
    oldest = Math.max(oldest, record.eag)
    youngest = Math.min(youngest, record.lag)
  }
  if (!Number.isFinite(oldest)) return []
  const span = oldest - youngest
  const count = span === 0 ? 1 : binCount
  const binWidth = span / count
  const bins = Array.from({ length: count }, (_, index) => ({
    olderMa: oldest - index * binWidth,
    youngerMa: index === count - 1 ? youngest : oldest - (index + 1) * binWidth,
    occurrences: 0,
    observedTaxa: 0,
  }))
  const taxa = Array.from({ length: count }, () => new Set<string>())
  for (const record of records) {
    if (finiteWidth(record) === null) continue
    const midpoint = record.lag + (record.eag - record.lag) / 2
    const index = span === 0 ? 0 : Math.min(count - 1, Math.max(0, Math.floor((oldest - midpoint) / binWidth)))
    bins[index].occurrences += 1
    const taxon = record.tid || record.tna || record.idn
    if (taxon) taxa[index].add(taxon)
  }
  return bins.map((bin, index) => ({ ...bin, observedTaxa: taxa[index].size }))
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
