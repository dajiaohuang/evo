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

  it('keeps the mixed Mollusca package title explicit about Graptolithina', () => {
    expect(itisEvidenceGroupC['mollusca-brachiopoda']!.title.en).toContain('Graptolithina')
    expect(itisEvidenceGroupC['mollusca-brachiopoda']!.packageId).toBe('molluscs-brachiopods')
  })
})
