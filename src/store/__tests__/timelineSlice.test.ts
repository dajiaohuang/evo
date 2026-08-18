import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createTimelineSlice, type TimelineSlice } from '../timelineSlice'
import type { AppState } from '../index'
import { clearCache } from '../../services/pbdb'

function setup() {
  const state: Partial<AppState> = {
    allIntervals: [],
    currentAge: 66,
    currentPeriod: null,
    currentEra: null,
    currentEon: null,
    intervalsLoading: false,
    intervalsError: null,
  }

  const set = (partial: Partial<AppState> | ((s: AppState) => Partial<AppState>)): void => {
    if (typeof partial === 'function') {
      Object.assign(state, partial(state as AppState))
    } else {
      Object.assign(state, partial)
    }
  }

  const get = (): AppState => state as AppState

  return { state, set, get }
}

describe('createTimelineSlice', () => {
  let slice: TimelineSlice
  let set: ReturnType<typeof setup>['set']
  let get: ReturnType<typeof setup>['get']

  beforeEach(() => {
    vi.restoreAllMocks()
    clearCache()
    const s = setup()
    slice = createTimelineSlice(s.set as (p: Partial<AppState>) => void, s.get)
    set = s.set
    get = s.get
  })

  it('returns initial state', () => {
    expect(slice.currentAge).toBe(66)
    expect(slice.allIntervals).toEqual([])
    expect(slice.intervalsLoading).toBe(false)
  })

  it('setTime clamps age within valid range', () => {
    slice.setTime(-10)
    expect(get().currentAge).toBe(0)

    slice.setTime(600)
    expect(get().currentAge).toBe(600)

    slice.setTime(5000)
    expect(get().currentAge).toBe(4567)
  })

  it('setTime resolves period from intervals', () => {
    set({
      allIntervals: [
        { oid: 'p1', nam: 'Cretaceous', itp: 'period', lag: 66, eag: 145, col: '#0f0', pid: 'era1' },
        { oid: 'era1', nam: 'Mesozoic', itp: 'era', lag: 66, eag: 251.9, col: '#00f', pid: null },
        { oid: 'eon1', nam: 'Phanerozoic', itp: 'eon', lag: 0, eag: 538.8, col: '#0ff', pid: null },
      ],
    })
    slice.setTime(100)
    expect(get().currentAge).toBe(100)
    expect(get().currentPeriod).toBe('Cretaceous')
    expect(get().currentEra).toBe('Mesozoic')
    expect(get().currentEon).toBe('Phanerozoic')
  })

  it('loadIntervals uses the bundled static timescale', async () => {
    await slice.loadIntervals()

    expect(get().allIntervals.length).toBeGreaterThan(12)
    expect(get().allIntervals.some((interval) => interval.nam === 'Cretaceous')).toBe(true)
    expect(get().intervalsLoading).toBe(false)
    expect(get().intervalsError).toBeNull()
  })

  it('resolves Precambrian eons without inventing a fossil period', async () => {
    await slice.loadIntervals()
    slice.setTime(3500)
    expect(get().currentEon).toBe('Archean')
    expect(get().currentEra).toBe('Paleoarchean')
    expect(get().currentPeriod).toBeNull()
  })

  it('loadIntervals skips if already loaded', async () => {
    set({ allIntervals: [{ oid: '1', nam: 'Test', itp: 'period', lag: 10, eag: 0, col: '#000', pid: null }] })
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    await slice.loadIntervals()
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})
