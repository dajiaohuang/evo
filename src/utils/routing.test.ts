import { describe, expect, it } from 'vitest'
import { buildRouteHash, getFiniteRouteNumber, parseRouteHash } from './routing'

describe('route hash helpers', () => {
  it('defaults unknown and empty routes to home', () => {
    expect(parseRouteHash('').route).toBe('home')
    expect(parseRouteHash('#/missing').route).toBe('home')
  })

  it('parses explorer state', () => {
    const result = parseRouteHash('#/explore?age=66&view=map&taxon=mammalia')
    expect(result.route).toBe('explore')
    expect(result.params.get('age')).toBe('66')
    expect(result.params.get('taxon')).toBe('mammalia')
  })

  it('preserves a release-scoped Catalogue of Life deep link', () => {
    const result = parseRouteHash('#/registry?release=COL26.8&id=6MB3T')
    expect(result.route).toBe('registry')
    expect(result.params.get('release')).toBe('COL26.8')
    expect(result.params.get('id')).toBe('6MB3T')
    expect(buildRouteHash('registry', { release: 'COL26.8', id: '6MB3T' }))
      .toBe('#/registry?release=COL26.8&id=6MB3T')
  })

  it('builds a stable shareable hash', () => {
    expect(buildRouteHash('explore', { age: 66, view: 'tree', taxon: null }))
      .toBe('#/explore?age=66&view=tree')
  })

  it('does not turn a missing or blank numeric parameter into zero', () => {
    expect(getFiniteRouteNumber(new URLSearchParams(), 'age')).toBeNull()
    expect(getFiniteRouteNumber(new URLSearchParams('age='), 'age')).toBeNull()
    expect(getFiniteRouteNumber(new URLSearchParams('age=0'), 'age')).toBe(0)
    expect(getFiniteRouteNumber(new URLSearchParams('age=66.1'), 'age')).toBe(66.1)
  })
})
