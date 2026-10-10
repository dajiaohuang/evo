import { describe, it, expect } from 'vitest'
import { ContentReferenceCatalogue } from './content-references.mjs'

describe('existing reference import', () => {
  it('accepts a recorded archive citation with no URL without inventing an identifier', () => {
    const citation = { id: 'recorded-citation', title: 'Recorded citation', authors: [], type: 'bibliographic-record', importedCitationMetadata: [{ citation: 'An unparsed source citation' }] }
    const catalogue = new ContentReferenceCatalogue([citation])
    expect(catalogue.records[0].id).toBe(citation.id)
    expect(catalogue.byKey.size).toBe(0)
  })

  it('reuses the pinned COL release reference when a taxon usage has no publication date', () => {
    const original = new ContentReferenceCatalogue([])
    const source = { id: 'col', title: 'Macaca radiata', url: 'https://www.checklistbank.org/dataset/316115/taxon/3WWP2' }
    const binding = original.bind(source)
    const reloaded = new ContentReferenceCatalogue(original.records)
    expect(reloaded.bind(source).referenceId).toBe(binding.referenceId)
    expect(reloaded.records).toHaveLength(1)
    expect(reloaded.records[0].publishedAt).toBe('2026-08-20')
  })
})
