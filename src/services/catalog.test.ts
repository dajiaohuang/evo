import { describe, expect, it } from 'vitest'
import { getEvolutionEvent, getEvolutionStory, getTaxonProfile, searchCatalog } from './catalog'

describe('catalog', () => {
  it('resolves stable catalog identifiers', () => {
    expect(getTaxonProfile('metamynodon')?.pbdbTaxonId).toBe('txn:43179')
    expect(getEvolutionEvent('k-pg-extinction')?.endAge).toBe(65.9)
    expect(getEvolutionStory('rise-and-fall-perissodactyls')?.steps.length).toBeGreaterThan(2)
  })

  it('searches scientific and Chinese names', () => {
    expect(searchCatalog('Paraceratherium')[0].id).toBe('paraceratherium')
    expect(searchCatalog('奇蹄')[0].kind).toBe('taxon')
  })

  it('searches events and offers featured stories for an empty query', () => {
    expect(searchCatalog('大灭绝').some((result) => result.kind === 'event')).toBe(true)
    expect(searchCatalog('').every((result) => result.kind === 'story')).toBe(true)
  })

  it('searches geological intervals and curated place index entries', () => {
    expect(searchCatalog('Jurassic').some((result) => result.kind === 'interval')).toBe(true)
    expect(searchCatalog('中国').some((result) => result.kind === 'place' && result.id === 'CN')).toBe(true)
  })
})
