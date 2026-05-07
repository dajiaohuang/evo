import { describe, it, expect } from 'vitest'
import { computeClusters } from './clustering'
import type { FossilOccurrence } from '../types'

function makeOcc(oid: string, lng: number, lat: number): FossilOccurrence {
  return {
    oid, lng: String(lng), lat: String(lat),
    tna: 'Test', idn: '', tid: '', rnk: 0,
    eag: 100, lag: 90, cid: 'c1', oei: 'Test',
    paleolng: lng, paleolat: lat,
  }
}

describe('computeClusters', () => {
  it('returns individual markers when zoom is high', () => {
    const occs = [makeOcc('1', 10, 20), makeOcc('2', 12, 22)]
    const result = computeClusters(occs, 6)
    expect(result.length).toBe(2)
    expect(result[0].type).toBe('individual')
  })

  it('returns individual markers for few occurrences', () => {
    const occs = [makeOcc('1', 10, 20)]
    const result = computeClusters(occs, 2)
    expect(result.length).toBe(1)
    expect(result[0].type).toBe('individual')
  })

  it('clusters nearby occurrences at low zoom', () => {
    const occs = Array.from({ length: 25 }, (_, i) =>
      makeOcc(String(i), 10 + Math.random() * 0.1, 20 + Math.random() * 0.1)
    )
    const result = computeClusters(occs, 2)
    const clusters = result.filter((r) => r.type === 'cluster')
    expect(clusters.length).toBeGreaterThanOrEqual(1)
    if (clusters.length > 0) {
      const c = clusters[0]
      expect(c.type).toBe('cluster')
      if (c.type === 'cluster') {
        expect(c.count).toBeGreaterThanOrEqual(1)
      }
    }
  })

  it('separates far-apart occurrences into different clusters', () => {
    const occs = [
      makeOcc('1', 10, 20),
      makeOcc('2', 80, 60),
    ]
    const result = computeClusters(occs, 2)
    const clustered = result.filter((r) => r.type === 'cluster')
    expect(clustered.length).toBe(0)
  })

  it('handles empty input', () => {
    const result = computeClusters([], 2)
    expect(result.length).toBe(0)
  })

  it('handles occurrences without paleocoordinates', () => {
    const occ = makeOcc('1', 10, 20)
    occ.paleolng = undefined
    occ.paleolat = undefined
    const result = computeClusters([occ], 2)
    expect(result.length).toBe(1)
    expect(result[0].type).toBe('individual')
  })

  it('clusters at low zoom with default config', () => {
    const occs = Array.from({ length: 50 }, (_, i) =>
      makeOcc(String(i), 10 + Math.random() * 0.5, 20 + Math.random() * 0.5)
    )
    const result = computeClusters(occs, 1)
    const totalItems = result.reduce((sum, r) => sum + (r.type === 'cluster' ? r.count : 1), 0)
    expect(totalItems).toBe(50)
  })
})
