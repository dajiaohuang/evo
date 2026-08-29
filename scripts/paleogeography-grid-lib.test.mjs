import { describe, expect, it } from 'vitest'
import {
  MAX_PALEOGEOGRAPHY_AGE_MA,
  PALEOGEOGRAPHY_LAYER_IDS,
  PERIOD_MIDPOINT_AGES_MA,
  nearestFrameAge,
  paleogeographyCadenceBands,
  paleogeographyAgeGrid,
  selectPaleogeographyFrameAge,
} from './paleogeography-grid-lib.mjs'

describe('CAO2024 paleogeography age grids', () => {
  it.each(PALEOGEOGRAPHY_LAYER_IDS)('keeps the complete supported boundary for %s', (layerId) => {
    const frames = paleogeographyAgeGrid(layerId)
    expect(frames[0]).toBe(0)
    expect(frames).toContain(540)
    expect(frames.at(-1)).toBe(MAX_PALEOGEOGRAPHY_AGE_MA)
    expect(frames).toEqual([...new Set(frames)].sort((left, right) => left - right))
    expect(selectPaleogeographyFrameAge(0, layerId)).toBe(0)
    expect(selectPaleogeographyFrameAge(540, layerId)).toBe(540)
    expect(selectPaleogeographyFrameAge(1800, layerId)).toBe(1800)
  })

  it('uses 5/10 Myr cadence for modelled coastlines', () => {
    const frames = paleogeographyAgeGrid('coastlines')
    expect(frames).toEqual(expect.arrayContaining([0, 5, 535, 540, 550, 560, 1790, 1800]))
    expect(frames).not.toContain(545)
  })

  it.each(['platePolygons', 'plateBoundaries'])('uses topology-state-aware 1/5/10 Myr cadence for %s', (layerId) => {
    const frames = paleogeographyAgeGrid(layerId)
    expect(frames).toEqual(expect.arrayContaining([0, 1, 249, 250, 255, 995, 1000, 1010, 1790, 1800]))
    expect(frames).not.toContain(1005)
  })

  it.each(['continentalPolygons', 'continentOceanBoundaries'])('uses 10/20 Myr cadence for %s', (layerId) => {
    const frames = paleogeographyAgeGrid(layerId)
    expect(frames).toEqual(expect.arrayContaining([0, 10, 530, 540, 560, 580, 1780, 1800]))
    expect(frames).not.toContain(550)
  })

  it('uses 20/40 Myr cadence for static polygons', () => {
    const frames = paleogeographyAgeGrid('staticPolygons')
    expect(frames).toEqual(expect.arrayContaining([0, 20, 520, 540, 580, 620, 1780, 1800]))
    expect(frames).not.toContain(560)
  })

  it.each(PALEOGEOGRAPHY_LAYER_IDS)('retains every geological-period midpoint in %s', (layerId) => {
    expect(paleogeographyAgeGrid(layerId)).toEqual(expect.arrayContaining(PERIOD_MIDPOINT_AGES_MA))
  })

  it('publishes the exact cadence bands used by the runtime ledger', () => {
    expect(paleogeographyCadenceBands('coastlines')).toEqual([
      { youngestMa: 0, oldestMa: 540, cadenceMa: 5 },
      { youngestMa: 540, oldestMa: 1800, cadenceMa: 10 },
    ])
    expect(paleogeographyCadenceBands('staticPolygons').map((band) => band.cadenceMa)).toEqual([20, 40])
  })

  it('selects the younger frame when distances tie', () => {
    expect(nearestFrameAge(2.5, [0, 5, 10])).toBe(0)
    expect(nearestFrameAge(1790, [1780, 1800])).toBe(1780)
  })

  it('selects the nearest layer frame inside the supported range', () => {
    expect(selectPaleogeographyFrameAge(6, 'coastlines')).toBe(5)
    expect(selectPaleogeographyFrameAge(550, 'staticPolygons')).toBe(540)
  })

  it('reports ages outside 0–1800 Ma as unavailable instead of clamping', () => {
    expect(selectPaleogeographyFrameAge(-0.1, 'coastlines')).toBeNull()
    expect(selectPaleogeographyFrameAge(1800.1, 'coastlines')).toBeNull()
    expect(selectPaleogeographyFrameAge(Number.NaN, 'coastlines')).toBeNull()
  })

  it('rejects unknown layer identifiers', () => {
    expect(() => paleogeographyAgeGrid('paleoelevation')).toThrow('Unknown paleogeography layer')
  })
})
