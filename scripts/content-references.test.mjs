import { describe, it, expect } from 'vitest'
import { ContentReferenceCatalogue, attachContentReferences } from './content-references.mjs'

describe('existing reference import', () => {
  it('resolves a primary-study usage without inventing an imported metadata variant', () => {
    const reference = { id: 'primary-study', title: 'Recorded study', url: 'https://example.org/study', version: 'v1', license: 'CC BY 4.0' }
    const scope = { en: 'The recorded specimens in Figure 2', zh: '图 2 中记录的标本' }
    const result = attachContentReferences({ referenceUsages: [{ referenceId: reference.id, sourceKey: 'section-source', scope, locator: 'Figure 2' }] }, new Map([[reference.id, reference]]))
    expect(result).toEqual([{ id: 'section-source', referenceId: reference.id, title: { en: reference.title, zh: reference.title }, url: reference.url, version: 'v1', license: 'CC BY 4.0', scope, locator: 'Figure 2' }])
    expect(reference).not.toHaveProperty('importedSourceMetadata')
  })

  it('rejects a reader usage whose reference is absent from the canonical table', () => {
    expect(() => attachContentReferences({ referenceUsages: [{ referenceId: 'absent', sourceKey: 'source' }] }, new Map())).toThrow('Unknown reader reference: absent')
  })
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

  it('preserves recorded bibliography uncertainty and keeps variant additions local until written', () => {
    const reference = { id: 'recorded-study', title: 'Recorded study', url: 'https://example.org/study', authors: ['Recorded author'], authorsComplete: false, authorsStatus: 'incomplete-verbatim', authorsVerbatim: 'Recorded author et al.', metadataVariants: [{ title: 'Original row', url: 'https://example.org/study' }] }
    const catalogue = new ContentReferenceCatalogue([reference])
    expect(catalogue.records[0]).toEqual(reference)
    const source = { id: 'source-row', title: 'Another recorded row', url: reference.url, readerFieldCautions: { en: 'The sampled row only.' } }
    const binding = catalogue.bind(source)
    expect(binding.referenceId).toBe(reference.id)
    expect(binding.metadataVariant).toBe(1)
    expect(reference.metadataVariants).toHaveLength(1)
    expect(attachContentReferences({ referenceBindings: [binding] }, catalogue.byId)).toEqual([source])
    expect(catalogue.records[0].authorsComplete).toBe(false)
    expect(() => new ContentReferenceCatalogue([{ ...reference, importedSourceMetadata: [] }])).toThrow('Legacy importedSourceMetadata')
  })
})
