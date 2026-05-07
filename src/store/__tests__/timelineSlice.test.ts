import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createTimelineSlice, type TimelineSlice } from '../timelineSlice'
import type { AppState } from '../index'
import { clearCache } from '../../services/pbdb'

function setup() {
  let state: Partial<AppState> = {
    allIntervals: [],
    currentAge: 66,
    currentPeriod: null,
    currentEra: null,
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
    expect(get().currentAge).toBe(538.8)
  })

  it('setTime resolves period from intervals', () => {
    set({
      allIntervals: [
        { oid: 'p1', nam: 'Cretaceous', itp: 'period', lag: 66, eag: 145, col: '#0f0', pid: 'era1' },
        { oid: 'era1', nam: 'Mesozoic', itp: 'era', lag: 66, eag: 251.9, col: '#00f', pid: null },
      ],
    })
    slice.setTime(100)
    expect(get().currentAge).toBe(100)
    expect(get().currentPeriod).toBe('Cretaceous')
    expect(get().currentEra).toBe('Mesozoic')
  })

  it('loadIntervals fetches from PBDB', async () => {
    const mockIntervals = [
      {
        oid: 'int:1', nam: 'Cretaceous', itp: 'period' as const,
        lag: '66', eag: '145', col: '#0f0', pid: 'int:2',
      },
      {
        oid: 'int:2', nam: 'Mesozoic', itp: 'era' as const,
        lag: '66', eag: '251.9', col: '#00f', pid: null,
      },
    ]

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ records: mockIntervals }),
    } as Response)

    await slice.loadIntervals()

    expect(get().allIntervals.length).toBe(2)
    expect(get().allIntervals[0].nam).toBe('Cretaceous')
    expect(get().intervalsLoading).toBe(false)
  })

  it('loadIntervals handles errors', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network error'))

    await slice.loadIntervals()

    expect(get().intervalsLoading).toBe(false)
    expect(get().intervalsError).toBe('Network error')
  })

  it('loadIntervals skips if already loaded', async () => {
    set({ allIntervals: [{ oid: '1', nam: 'Test', itp: 'period', lag: 10, eag: 0, col: '#000', pid: null }] })
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    await slice.loadIntervals()
    expect(fetchSpy).not.toHaveBeenCalled()
  })
})
