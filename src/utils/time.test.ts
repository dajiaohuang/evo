import { describe, it, expect } from 'vitest'
import { ageToX, xToAge, resolvePeriod, formatAge, getAgeRangeLabel } from './time'
import { PHANEROZOIC_TOTAL_MA } from '../constants'

describe('ageToX', () => {
  it('maps age 0 to right side', () => {
    const x = ageToX(0, 1000, 0)
    expect(x).toBe(1000)
  })

  it('maps max age to left side', () => {
    const x = ageToX(PHANEROZOIC_TOTAL_MA, 1000, 0)
    expect(x).toBe(0)
  })

  it('maps middle age to middle', () => {
    const x = ageToX(PHANEROZOIC_TOTAL_MA / 2, 1000, 0)
    expect(x).toBeCloseTo(500, -1)
  })

  it('respects padding', () => {
    const x = ageToX(0, 1000, 50)
    expect(x).toBe(950)
  })
})

describe('xToAge', () => {
  it('maps right side to age 0', () => {
    const age = xToAge(1000, 1000, 0)
    expect(age).toBe(0)
  })

  it('maps left side to max age', () => {
    const age = xToAge(0, 1000, 0)
    expect(age).toBeCloseTo(PHANEROZOIC_TOTAL_MA, 0)
  })

  it('is inverse of ageToX', () => {
    const age = 280
    const x = ageToX(age, 2000, 8)
    const roundtripped = xToAge(x, 2000, 8)
    expect(roundtripped).toBeCloseTo(age, 1)
  })

  it('clamps out-of-range values', () => {
    const age = xToAge(-100, 1000, 0)
    expect(age).toBeCloseTo(PHANEROZOIC_TOTAL_MA, 0)
    const age2 = xToAge(2000, 1000, 0)
    expect(age2).toBe(0)
  })
})

describe('resolvePeriod', () => {
  const intervals = [
    { oid: '1', nam: 'Quaternary', itp: 'period' as const, lag: 0, eag: 2.58, col: '#fff', pid: 'era1' },
    { oid: '2', nam: 'Neogene', itp: 'period' as const, lag: 2.58, eag: 23, col: '#fff', pid: 'era1' },
    { oid: '3', nam: 'Paleogene', itp: 'period' as const, lag: 23, eag: 66, col: '#fff', pid: 'era1' },
    { oid: '4', nam: 'Cretaceous', itp: 'period' as const, lag: 66, eag: 143, col: '#fff', pid: 'era2' },
  ]

  it('finds period for an age (Quaternary, age 1)', () => {
    const p = resolvePeriod(intervals, 1)
    expect(p?.nam).toBe('Quaternary')
  })

  it('finds Paleogene for age 30', () => {
    const p = resolvePeriod(intervals, 30)
    expect(p?.nam).toBe('Paleogene')
  })

  it('finds Cretaceous for age 100', () => {
    const p = resolvePeriod(intervals, 100)
    expect(p?.nam).toBe('Cretaceous')
  })

  it('returns null for age outside all periods', () => {
    const p = resolvePeriod(intervals, 200)
    expect(p).toBeNull()
  })

  it('excludes non-period intervals', () => {
    const mixed = [
      ...intervals,
      { oid: '5', nam: 'Cenozoic', itp: 'era' as const, lag: 0, eag: 66, col: '#fff', pid: null },
    ]
    const p = resolvePeriod(mixed, 1)
    expect(p?.itp).toBe('period')
  })
})

describe('formatAge', () => {
  it('formats Ma values', () => {
    expect(formatAge(66)).toBe('66.0 Ma')
  })

  it('formats ka values', () => {
    expect(formatAge(0.5)).toBe('500 ka')
  })
})

describe('getAgeRangeLabel', () => {
  it('shows Present for extant taxa', () => {
    expect(getAgeRangeLabel(225, 0)).toBe('225.0 Ma – Present')
  })

  it('shows both ages for extinct taxa', () => {
    expect(getAgeRangeLabel(68, 66)).toBe('68.0 – 66.0 Ma')
  })
})
