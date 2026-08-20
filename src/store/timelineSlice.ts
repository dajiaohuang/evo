import type { GeoInterval } from '../types'
import type { AppState } from './index'
import { EARTH_HISTORY_TOTAL_MA } from '../constants'
import { containsAge, timeScaleUnits } from '../services/geology'

export interface TimelineSlice {
  allIntervals: GeoInterval[]
  currentAge: number
  currentPeriod: string | null
  currentEpoch: string | null
  currentAgeUnit: string | null
  currentEra: string | null
  currentEon: string | null
  intervalsLoading: boolean
  intervalsError: string | null
  setTime: (age: number) => void
  loadIntervals: () => Promise<void>
}

function resolvePeriod(intervals: GeoInterval[], age: number): GeoInterval | null {
  return intervals.find(
    (i) => i.itp === 'period' && containsAge(i, age)
  ) ?? null
}

function resolveUnit(intervals: GeoInterval[], age: number, type: GeoInterval['itp']): GeoInterval | null {
  return intervals.find((interval) => (
    interval.itp === type && containsAge(interval, age)
  )) ?? null
}

function buildLocalIntervals(): GeoInterval[] {
  return timeScaleUnits
}

export const createTimelineSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): TimelineSlice => ({
  allIntervals: [],
  currentAge: 66,
  currentPeriod: 'Cretaceous',
  currentEpoch: 'Upper Cretaceous',
  currentAgeUnit: 'Maastrichtian',
  currentEra: 'Mesozoic',
  currentEon: 'Phanerozoic',
  intervalsLoading: false,
  intervalsError: null,

  setTime: (age: number) => {
    const clamped = Math.max(0, Math.min(EARTH_HISTORY_TOTAL_MA, age))
    const { allIntervals } = get()
    const period = resolvePeriod(allIntervals, clamped)
    const epoch = resolveUnit(allIntervals, clamped, 'epoch')
    const ageUnit = resolveUnit(allIntervals, clamped, 'age')
    const era = resolveUnit(allIntervals, clamped, 'era')
    const eon = resolveUnit(allIntervals, clamped, 'eon')
    set({
      currentAge: clamped,
      currentPeriod: period?.nam ?? null,
      currentEpoch: epoch?.nam ?? null,
      currentAgeUnit: ageUnit?.nam ?? null,
      currentEra: era?.nam ?? null,
      currentEon: eon?.nam ?? null,
    })
  },

  loadIntervals: async () => {
    const { allIntervals, currentAge } = get()
    if (allIntervals.length > 0) return
    set({ intervalsLoading: true, intervalsError: null })
    const intervals = buildLocalIntervals()
    const period = resolvePeriod(intervals, currentAge)
    const epoch = resolveUnit(intervals, currentAge, 'epoch')
    const ageUnit = resolveUnit(intervals, currentAge, 'age')
    const era = resolveUnit(intervals, currentAge, 'era')
    const eon = resolveUnit(intervals, currentAge, 'eon')
    set({
      allIntervals: intervals,
      currentPeriod: period?.nam ?? null,
      currentEpoch: epoch?.nam ?? null,
      currentAgeUnit: ageUnit?.nam ?? null,
      currentEra: era?.nam ?? null,
      currentEon: eon?.nam ?? null,
      intervalsLoading: false,
    })
  },
})
