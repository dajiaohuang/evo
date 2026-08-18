import { strToU8, zipSync } from 'fflate'
import manifest from '../../data/manifest.json'
import references from '../../data/references.json'
import type { FossilOccurrence } from '../types'
import { FOSSIL_PERIODS, getAllFossils, getFossilsByInterval } from './localFossils'

export interface LabQuery {
  periods: string[]
  taxon: string
  country: string
  olderMa: number | null
  youngerMa: number | null
  limit: number
}

export interface LabStats {
  totalMatched: number
  returned: number
  uniqueTaxa: number
  countries: number
  paleoCoordinateCoverage: number
}

export interface LabResult {
  query: LabQuery
  records: FossilOccurrence[]
  stats: LabStats
  countsByPeriod: Array<{ period: string; count: number }>
  topTaxa: Array<{ taxon: string; count: number }>
}

function intersectsAge(record: FossilOccurrence, olderMa: number | null, youngerMa: number | null): boolean {
  const older = olderMa ?? Infinity
  const younger = youngerMa ?? 0
  return record.eag >= younger && record.lag <= older
}

export function filterFossils(records: FossilOccurrence[], query: LabQuery): FossilOccurrence[] {
  const taxon = query.taxon.trim().toLocaleLowerCase()
  const country = query.country.trim().toLocaleUpperCase()
  return records.filter((record) => {
    if (taxon && !`${record.tna} ${record.idn}`.toLocaleLowerCase().includes(taxon)) return false
    if (country && (record.cc2 ?? '').toLocaleUpperCase() !== country) return false
    return intersectsAge(record, query.olderMa, query.youngerMa)
  })
}

function topCounts(values: string[], limit: number): Array<{ taxon: string; count: number }> {
  const counts = new Map<string, number>()
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1)
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([taxon, count]) => ({ taxon, count }))
}

export async function runLabQuery(query: LabQuery): Promise<LabResult> {
  const selectedPeriods = query.periods.length ? query.periods : [...FOSSIL_PERIODS]
  const chunks = selectedPeriods.length === FOSSIL_PERIODS.length
    ? await getAllFossils()
    : (await Promise.all(selectedPeriods.map(getFossilsByInterval))).flat()
  const matched = filterFossils(chunks, query)
  const records = matched
    .sort((a, b) => b.eag - a.eag || a.tna.localeCompare(b.tna))
    .slice(0, Math.max(1, Math.min(query.limit, 5000)))

  const countsByPeriod = await Promise.all(selectedPeriods.map(async (period) => {
    const periodRecords = await getFossilsByInterval(period)
    return { period, count: filterFossils(periodRecords, query).length }
  }))

  const paleoCoordinates = matched.filter((record) => (
    Number.isFinite(record.paleolat) && Number.isFinite(record.paleolng)
  )).length

  return {
    query,
    records,
    stats: {
      totalMatched: matched.length,
      returned: records.length,
      uniqueTaxa: new Set(matched.map((record) => record.tna)).size,
      countries: new Set(matched.map((record) => record.cc2).filter(Boolean)).size,
      paleoCoordinateCoverage: matched.length ? paleoCoordinates / matched.length : 0,
    },
    countsByPeriod,
    topTaxa: topCounts(matched.map((record) => record.tna), 12),
  }
}

function csvCell(value: unknown): string {
  const text = String(value ?? '')
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}

export function fossilsToCsv(records: FossilOccurrence[]): string {
  const headers = ['occurrence_id', 'accepted_name', 'identified_name', 'taxon_id', 'early_age_ma', 'late_age_ma', 'country', 'modern_lng', 'modern_lat', 'paleo_lng', 'paleo_lat', 'collection_id']
  const rows = records.map((record) => [
    record.oid, record.tna, record.idn, record.tid, record.eag, record.lag, record.cc2,
    record.lng, record.lat, record.paleolng, record.paleolat, record.cid,
  ].map(csvCell).join(','))
  return [headers.join(','), ...rows].join('\n')
}

export function fossilsToGeoJson(records: FossilOccurrence[]) {
  return {
    type: 'FeatureCollection',
    features: records.flatMap((record) => {
      const lng = record.paleolng ?? Number(record.lng)
      const lat = record.paleolat ?? Number(record.lat)
      if (!Number.isFinite(lng) || !Number.isFinite(lat)) return []
      return [{
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [lng, lat] },
        properties: {
          occurrenceId: record.oid,
          acceptedName: record.tna,
          identifiedName: record.idn,
          earlyAgeMa: record.eag,
          lateAgeMa: record.lag,
          country: record.cc2 ?? null,
          coordinateMode: record.paleolng != null ? 'paleo' : 'modern',
        },
      }]
    }),
  }
}

function makeBibtex(): string {
  const pbdb = references.find((reference) => reference.id === 'pbdb-api-2016')
  const ics = references.find((reference) => reference.id === 'ics-2026-06')
  return [
    `@article{peters2016pbdb,\n  title={${pbdb?.title}},\n  author={${pbdb?.authors}},\n  year={${pbdb?.year}},\n  doi={${pbdb?.doi}}\n}`,
    `@misc{ics2026chart,\n  title={${ics?.title}},\n  author={${ics?.authors}},\n  year={${ics?.year}},\n  url={${ics?.url}}\n}`,
  ].join('\n\n')
}

export function createQueryPackage(result: LabResult): Uint8Array {
  const readme = [
    'Evo Atlas query export',
    `Dataset version: ${manifest.datasetVersion}`,
    `Generated: ${new Date().toISOString()}`,
    `Matched records: ${result.stats.totalMatched}`,
    `Returned records: ${result.stats.returned}`,
    '',
    'This bundle contains a bounded, sampled fossil-occurrence result. Absence from the result is not evidence of biological absence.',
  ].join('\n')

  return zipSync({
    'query.json': strToU8(JSON.stringify(result.query, null, 2)),
    'results.csv': strToU8(fossilsToCsv(result.records)),
    'results.json': strToU8(JSON.stringify(result.records, null, 2)),
    'results.geojson': strToU8(JSON.stringify(fossilsToGeoJson(result.records), null, 2)),
    'README.txt': strToU8(readme),
    'citations.bib': strToU8(makeBibtex()),
    'dataset-manifest.json': strToU8(JSON.stringify(manifest, null, 2)),
  }, { level: 6 })
}

export function downloadQueryPackage(result: LabResult): void {
  const bytes = createQueryPackage(result)
  const blob = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/zip' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `evo-query-${new Date().toISOString().slice(0, 10)}.zip`
  anchor.click()
  URL.revokeObjectURL(url)
}
