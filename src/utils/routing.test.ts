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
