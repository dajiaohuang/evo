import { describe, expect, it } from 'vitest'
import { findTemporalPackageCards } from './temporalPackageSceneMatcher'

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

  it('intersects the scene window with its claim-linked published range, including both boundaries', () => {
    const pack = { id: 'pack', title: 'Pack', titleZh: '包', examples: [{ ...example, route: '#/explore?taxon=taxon&age=100&older=110&younger=90' }], ranges: [range] }
    for (const age of [110, 100, 90]) {
      expect(findTemporalPackageCards([pack], age)).toMatchObject([{ olderMa: 110, youngerMa: 90 }])
    }
    for (const age of [120, 111, 89, 80]) expect(findTemporalPackageCards([pack], age)).toEqual([])
    const wider = { ...pack, examples: [{ ...example, route: '#/explore?age=100&older=130&younger=90' }] }
    expect(findTemporalPackageCards([wider], 120)).toMatchObject([{ olderMa: 120, youngerMa: 90 }])
    expect(findTemporalPackageCards([wider], 125)).toEqual([])
  })

  it('treats a lone age as a point window and preserves a present-day zero bound', () => {
    const pack = { id: 'pack', title: 'Pack', titleZh: '包', examples: [{ ...example, route: '#/explore?age=0' }], ranges: [{ ...range, youngerMa: 0 }] }
    expect(findTemporalPackageCards([pack], 0)).toMatchObject([{ olderMa: 0, youngerMa: 0 }])
    expect(findTemporalPackageCards([pack], 10)).toEqual([])
    pack.examples[0].route = '#/explore?age=0&older=0&younger=0'
    expect(findTemporalPackageCards([pack], 0)).toHaveLength(1)
    expect(findTemporalPackageCards([pack], 10)).toEqual([])
  })
})
