import { describe, expect, it } from 'vitest'
import { deriveCatalogueNodeIntroduction } from './catalogueNodeIntroduction'

const node = { id: 'n1', scientificName: 'Acer rubrum L.', authorship: 'L.', rank: 'species', status: 'accepted' as const, parentId: 'p1', sourceDatasetId: 'd1' }

describe('deriveCatalogueNodeIntroduction', () => {
  it('describes classification, parent and source without duplicating authorship', () => {
    const result = deriveCatalogueNodeIntroduction({ node, parent: { id: 'p1', scientificName: 'Acer L.', rank: 'genus' }, source: { authority: 'ChecklistBank', sourceId: 'd1', title: 'Plants' }, releaseAlias: 'COL26.8' })
    expect(result.en).toContain('Acer rubrum is an accepted species')
    expect(result.en).toContain('under Acer')
    expect(result.en).toContain('ChecklistBank')
    expect(result.en).not.toContain('Acer rubrum L. is')
  })

  it('does not invent parent or source details', () => {
    const result = deriveCatalogueNodeIntroduction({ node: { ...node, parentId: null, sourceDatasetId: null, status: 'provisionally accepted' } })
    expect(result.zh).toContain('暂定接受')
    expect(result.en).toContain('root classification entry')
    expect(result.en).not.toContain('Source authority')
  })

  it('ignores a parent with a mismatched id', () => {
    const result = deriveCatalogueNodeIntroduction({ node, parent: { id: 'other', scientificName: 'Wrong', rank: 'genus' } })
    expect(result.en).toContain('root classification entry')
    expect(result.en).not.toContain('Wrong')
  })
})
