import type { GeoInterval } from '../types'
import type { AppState } from './index'
import { PHANEROZOIC_TOTAL_MA } from '../constants'
import { fetchIntervals } from '../services/pbdb'

export interface TimelineSlice {
  allIntervals: GeoInterval[]
  currentAge: number
  currentPeriod: string | null
  currentEra: string | null
  intervalsLoading: boolean
  intervalsError: string | null
  setTime: (age: number) => void
  loadIntervals: () => Promise<void>
}

function resolvePeriod(intervals: GeoInterval[], age: number): GeoInterval | null {
  return intervals.find(
    (i) => i.itp === 'period' && age >= i.lag && age < i.eag
  ) ?? null
}

function resolveEra(period: GeoInterval | null, intervals: GeoInterval[]): GeoInterval | null {
  if (!period?.pid) return null
  return intervals.find((i) => i.oid === period.pid) ?? null
}

export const createTimelineSlice = (
  set: (partial: Partial<AppState>) => void,
  get: () => AppState
): TimelineSlice => ({
  allIntervals: [],
  currentAge: 66,
  currentPeriod: 'Cretaceous',
  currentEra: 'Mesozoic',
  intervalsLoading: false,
  intervalsError: null,

  setTime: (age: number) => {
    const clamped = Math.max(0, Math.min(PHANEROZOIC_TOTAL_MA, age))
    const { allIntervals } = get()
    const period = resolvePeriod(allIntervals, clamped)
    const era = resolveEra(period, allIntervals)
    set({
      currentAge: clamped,
      currentPeriod: period?.nam ?? null,
      currentEra: era?.nam ?? null,
    })
  },

  loadIntervals: async () => {
    const { allIntervals, currentAge } = get()
    if (allIntervals.length > 0) return
    set({ intervalsLoading: true, intervalsError: null })
    try {
      const intervals = await fetchIntervals()
      const period = resolvePeriod(intervals, currentAge)
      const era = resolveEra(period, intervals)
      set({
        allIntervals: intervals,
        currentPeriod: period?.nam ?? null,
        currentEra: era?.nam ?? null,
        intervalsLoading: false,
      })
    } catch (err) {
      set({
        intervalsLoading: false,
        intervalsError: err instanceof Error ? err.message : 'Unknown error',
      })
    }
  },
})
