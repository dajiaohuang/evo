import { describe, expect, it } from 'vitest'
import { itisEvidenceGroupC } from './itisEvidenceGroupC'

describe('ITIS evidence group C scope boundaries', () => {
  it('declares the exact roots and package collections from the descriptors', () => {
    expect([...itisEvidenceGroupC['mollusca-brachiopoda']!.roots]).toEqual(['M2L', 'B8V3K', 'KZ'])
    expect(itisEvidenceGroupC['mollusca-brachiopoda']!.collectionId).toBe('itis-mollusca-brachiopoda-tsn-crosswalk')
    expect([...itisEvidenceGroupC['porifera-cnidaria']!.roots]).toEqual(['B8TXQ', 'CN2'])
    expect(itisEvidenceGroupC.echinodermata!.roots.has('CHN')).toBe(true)
    expect(itisEvidenceGroupC.carnivora!.roots.has('VS')).toBe(true)
    expect(itisEvidenceGroupC['other-mammals']!.roots.has('6224G')).toBe(true)
  })

  it('does not introduce exclusions or broaden any package boundary', () => {
    for (const config of Object.values(itisEvidenceGroupC)) expect(config?.excludedRoots.size).toBe(0)
  })
})
