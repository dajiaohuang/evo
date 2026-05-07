import { describe, it, expect, beforeEach } from 'vitest'
import { createMapSlice, type MapSlice } from '../mapSlice'
import type { AppState } from '../index'
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../constants'

function setup() {
  const state: Partial<AppState> = {
    viewState: { center: DEFAULT_MAP_CENTER, zoom: DEFAULT_MAP_ZOOM },
    highlightedTaxonId: null,
    selectedOccurrenceId: null,
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

describe('createMapSlice', () => {
  let slice: MapSlice
  let get: ReturnType<typeof setup>['get']

  beforeEach(() => {
    const s = setup()
    slice = createMapSlice(s.set as (p: Partial<AppState>) => void, s.get)
    get = s.get
  })

  it('initializes with default view state', () => {
    expect(get().viewState.center).toEqual(DEFAULT_MAP_CENTER)
    expect(get().viewState.zoom).toBe(DEFAULT_MAP_ZOOM)
  })

  it('setViewState partially updates view state', () => {
    slice.setViewState({ zoom: 4 })
    expect(get().viewState.zoom).toBe(4)
    expect(get().viewState.center).toEqual(DEFAULT_MAP_CENTER)
  })

  it('highlightTaxon sets and clears', () => {
    slice.highlightTaxon('txn:123')
    expect(get().highlightedTaxonId).toBe('txn:123')
    slice.highlightTaxon(null)
    expect(get().highlightedTaxonId).toBeNull()
  })

  it('selectOccurrence sets and clears', () => {
    slice.selectOccurrence('occ:456')
    expect(get().selectedOccurrenceId).toBe('occ:456')
    slice.selectOccurrence(null)
    expect(get().selectedOccurrenceId).toBeNull()
  })
})
