import timeScaleData from '../../data/time-scale.json'
import periodMetadataData from '../../data/period-map-metadata.json'
import type { ChronostratigraphicBoundary, GeoInterval, PeriodInfo } from '../types'

interface TimeScaleData {
  schemaVersion: number
  version: string
  officialVersion: string
  source: { referenceId: string; publisher: string; url: string; accessedAt: string; machineReadableUrl?: string; license?: string }
  boundaryPolicy: string
  earthAgeMa: number
  boundaries: ChronostratigraphicBoundary[]
  units: GeoInterval[]
}

interface PeriodMapMetadata {
  name: string
  keyContinentalConfig: string
  mapLayerStatus: 'available' | 'withheld-pending-provenance'
  description: string
  descriptionZh: string
}

export const timeScale = timeScaleData as TimeScaleData
export const timeScaleUnits = timeScale.units

const unitsById = new Map(timeScaleUnits.map((unit) => [unit.oid, unit]))
const boundaryByValue = new Map(timeScale.boundaries.map((boundary) => [boundary.valueMa, boundary]))
const metadataByName = new Map(
  (periodMetadataData as PeriodMapMetadata[]).map((record) => [record.name, record]),
)

function ancestorName(unit: GeoInterval, type: GeoInterval['itp']): string {
  let cursor = unit.pid ? unitsById.get(unit.pid) : undefined
  while (cursor) {
    if (cursor.itp === type) return cursor.nam
    cursor = cursor.pid ? unitsById.get(cursor.pid) : undefined
  }
  return ''
}

function ancestorNameZh(unit: GeoInterval, type: GeoInterval['itp']): string {
  let cursor = unit.pid ? unitsById.get(unit.pid) : undefined
  while (cursor) {
    if (cursor.itp === type) return cursor.namZh ?? cursor.nam
    cursor = cursor.pid ? unitsById.get(cursor.pid) : undefined
  }
  return ''
}

export const periods: PeriodInfo[] = timeScaleUnits
  .filter((unit) => unit.itp === 'period')
  .map((unit) => {
    const metadata = metadataByName.get(unit.nam)
    if (!metadata) throw new Error(`Missing map metadata for geological period ${unit.nam}`)
    const olderBoundary = boundaryByValue.get(unit.eag)
    const youngerBoundary = boundaryByValue.get(unit.lag)
    if (!olderBoundary || !youngerBoundary) throw new Error(`Missing boundary evidence for geological period ${unit.nam}`)
    return {
      name: unit.nam,
      nameZh: unit.namZh ?? unit.nam,
      abr: unit.abr ?? unit.nam.slice(0, 2),
      era: ancestorName(unit, 'era'),
      eraZh: ancestorNameZh(unit, 'era'),
      eon: ancestorName(unit, 'eon'),
      eonZh: ancestorNameZh(unit, 'eon'),
      lag: unit.lag,
      eag: unit.eag,
      olderBoundary,
      youngerBoundary,
      officialVersion: timeScale.officialVersion,
      color: unit.col,
      keyContinentalConfig: metadata.keyContinentalConfig,
      mapLayerStatus: metadata.mapLayerStatus,
      description: metadata.description,
      descriptionZh: metadata.descriptionZh,
    }
  })
  .sort((a, b) => a.lag - b.lag)

export function containsAge(unit: Pick<GeoInterval, 'lag' | 'eag'>, age: number): boolean {
  return age >= unit.lag && (age < unit.eag || (age === timeScale.earthAgeMa && unit.eag === timeScale.earthAgeMa))
}

export function resolveTimeUnit(age: number, type: GeoInterval['itp']): GeoInterval | null {
  return timeScaleUnits.find((unit) => unit.itp === type && containsAge(unit, age)) ?? null
}

export function resolvePeriodInfo(age: number): PeriodInfo | null {
  return periods.find((period) => containsAge(period, age)) ?? null
}
