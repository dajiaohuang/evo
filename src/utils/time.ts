import type { GeoInterval } from '../types'
import { PHANEROZOIC_TOTAL_MA } from '../constants'

export function ageToX(age: number, width: number, paddingX = 8): number {
  return paddingX + (1 - age / PHANEROZOIC_TOTAL_MA) * (width - paddingX * 2)
}

export function xToAge(x: number, width: number, paddingX = 8): number {
  const ratio = (x - paddingX) / (width - paddingX * 2)
  return (1 - Math.max(0, Math.min(1, ratio))) * PHANEROZOIC_TOTAL_MA
}

export function resolvePeriod(intervals: GeoInterval[], age: number): GeoInterval | null {
  return intervals.find(
    (i) => i.itp === 'period' && age >= i.lag && age < i.eag
  ) ?? null
}

export function resolveEra(period: GeoInterval | null, intervals: GeoInterval[]): GeoInterval | null {
  if (!period?.pid) return null
  return intervals.find((i) => i.oid === period.pid) ?? null
}

export function formatAge(age: number): string {
  if (age >= 1) return `${age.toFixed(1)} Ma`
  return `${(age * 1000).toFixed(0)} ka`
}

export function getAgeRangeLabel(eag: number, lag: number): string {
  if (lag === 0) return `${eag.toFixed(1)} Ma – Present`
  return `${eag.toFixed(1)} – ${lag.toFixed(1)} Ma`
}
