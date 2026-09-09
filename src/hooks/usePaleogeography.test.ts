import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { RuntimeMapManifest } from '../data-client/types'
import { loadMapManifest, loadPaleogeographyLayerAtAge, resolvePaleogeographyFrame } from '../data-client/staticDataClient'
import { usePaleogeography } from './usePaleogeography'

vi.mock('../data-client/staticDataClient', () => ({
  loadMapManifest: vi.fn(), loadPaleogeographyLayerAtAge: vi.fn(), resolvePaleogeographyFrame: vi.fn(),
}))

const manifest = { ageRangeMa: { youngest: 0, oldest: 100 } } as RuntimeMapManifest
const collection = { type: 'FeatureCollection' as const, features: [] }
function selection(age: number) {
  const frameAge = Math.round(age / 10) * 10
  return { layerId: 'coastlines' as const, requestedAgeMa: age, selectedAgeMa: frameAge, deltaMa: Math.abs(frameAge - age),
    frame: { ageMa: frameAge, url: `${frameAge}.json`, sha256: String(frameAge), bytes: 1, featureCount: 0 } }
}

describe('paleogeography data clock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.mocked(loadMapManifest).mockResolvedValue(manifest)
    vi.mocked(resolvePaleogeographyFrame).mockImplementation((_manifest, age) => age > 100 ? null : selection(age))
    vi.mocked(loadPaleogeographyLayerAtAge).mockImplementation(async (age) => ({ manifest, selection: selection(age), collection }))
  })
  afterEach(() => { vi.useRealTimers(); vi.clearAllMocks() })

  it('advances during uninterrupted playback and does not reload within one frame', async () => {
    const { result, rerender } = renderHook(({ age }) => usePaleogeography(age, ['coastlines']), { initialProps: { age: 10 } })
    await act(async () => {})
    expect(loadPaleogeographyLayerAtAge).toHaveBeenCalledTimes(1)
    for (let age = 11; age <= 14; age++) {
      rerender({ age })
      await act(async () => { await vi.advanceTimersByTimeAsync(40) })
    }
    expect(loadPaleogeographyLayerAtAge).toHaveBeenCalledTimes(1)
    for (let age = 15; age <= 30; age++) {
      rerender({ age })
      await act(async () => { await vi.advanceTimersByTimeAsync(40) })
    }
    expect(result.current.selections.coastlines?.selectedAgeMa).toBe(30)
    expect(loadPaleogeographyLayerAtAge).toHaveBeenCalledTimes(3)
  })

  it('retains the displayed frame and ignores stale responses after a newer target', async () => {
    const { result, rerender } = renderHook(({ age }) => usePaleogeography(age, ['coastlines']), { initialProps: { age: 10 } })
    await act(async () => {})
    let finishOld!: (value: Awaited<ReturnType<typeof loadPaleogeographyLayerAtAge>>) => void
    vi.mocked(loadPaleogeographyLayerAtAge).mockImplementationOnce(() => new Promise((resolve) => { finishOld = resolve }))
    rerender({ age: 20 })
    await act(async () => { await vi.advanceTimersByTimeAsync(120) })
    expect(result.current.selections.coastlines?.selectedAgeMa).toBe(10)
    expect(result.current.loadingLayers.coastlines).toBe(true)
    rerender({ age: 30 })
    await act(async () => { await vi.advanceTimersByTimeAsync(120) })
    await act(async () => { finishOld({ manifest, selection: selection(20), collection }) })
    expect(result.current.selections.coastlines?.selectedAgeMa).toBe(30)
    rerender({ age: 200 })
    await act(async () => { await vi.advanceTimersByTimeAsync(120) })
    expect(result.current.available).toBe(false)
    expect(result.current.layers).toEqual({})
  })
})
