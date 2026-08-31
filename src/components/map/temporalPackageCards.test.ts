import { describe, expect, it } from 'vitest'
import { findTemporalPackageCards } from './temporalPackageCards'

const range = {
  id: 'range:taxon', entityId: 'taxon', taxonomicConcept: 'A bounded taxon concept', geographicScope: 'Known localities only',
  olderMa: 120, youngerMa: 80, status: 'available' as const, confidence: 'high' as const, claimIds: ['claim:range'],
}

const example = {
  id: 'scene', type: 'explorer-preset' as const, title: { en: 'Scene', zh: '场景' }, description: { en: 'Description', zh: '说明' },
  route: '#/explore?taxon=taxon', entityIds: ['taxon'], claimIds: ['claim:range'], evidenceStatus: 'available-with-limitations' as const, limitations: ['A limitation'],
}

describe('findTemporalPackageCards', () => {
  it('surfaces only a scene whose linked published range contains the selected age', () => {
    expect(findTemporalPackageCards([{ id: 'pack', title: 'Pack', titleZh: '包', examples: [example], ranges: [range] }], 100)).toMatchObject([
      { packageId: 'pack', example: { id: 'scene' }, range: { id: 'range:taxon' } },
    ])
    expect(findTemporalPackageCards([{ id: 'pack', title: 'Pack', titleZh: '包', examples: [example], ranges: [range] }], 70)).toEqual([])
  })

  it('does not use an interval without a claim link or a withheld interval', () => {
    expect(findTemporalPackageCards([{ id: 'pack', title: 'Pack', titleZh: '包', examples: [example], ranges: [{ ...range, claimIds: ['claim:other'] }] }], 100)).toEqual([])
    expect(findTemporalPackageCards([{ id: 'pack', title: 'Pack', titleZh: '包', examples: [example], ranges: [{ ...range, status: 'withheld-pending-provenance' }] }], 100)).toEqual([])
  })
})
