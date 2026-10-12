import { expect, it } from 'vitest'
import { catalogueReadingSections, orderReadingSections, paragraphParts } from './nodeReading.mjs'
import type { CatalogueKnowledgeProfile, CatalogueSpeciesDossier } from '../data-client/types'

it('puts body before life and relationships without losing a finding or its sources', () => {
  const sections = [
    { id: 'habitat', topic: 'ecology', text: { en: 'One forest population only.' }, sourceIds: ['forest'] },
    { id: 'bones', topic: 'morphology', text: { en: 'Two preserved bones.' }, sourceIds: ['specimen'] },
    { id: 'tree', topic: 'evolution', text: { en: 'One sampled mitochondrial lineage.' }, sourceIds: ['model'] },
    { id: 'methods', topic: 'methods', text: { en: 'The exact sampling method.' }, sourceIds: ['model'] },
  ]
  const ordered = orderReadingSections(sections)
  expect(ordered.map(section => section.id)).toEqual(['bones', 'habitat', 'tree', 'methods'])
  for (const original of sections) expect(ordered.find(section => section.id === original.id)).toMatchObject(original)
})

it('keeps identically named source keys from an introduction and study separate', () => {
  const profile = { sections: [{ topic: 'morphology', text: { en: 'A body description.', zh: '身体描述。' }, sourceIds: ['source'] }] } as CatalogueKnowledgeProfile
  const dossier: CatalogueSpeciesDossier = {
    checkedAt: '2026-10-12', identity: { method: 'Test fixture', scope: 'Test sample' },
    lifeStatusScope: { wild: 'Wild samples.', domesticated: '', fossil: '' }, sources: [], completeness: { status: 'incomplete' },
    facets: { morphology: { status: 'partially-supported', claims: [{ text: 'A study finding.', textZh: '未核验文字。', translationStatus: 'untranslated', sourceIds: ['source'], locator: 'Table 2', placeTimeScope: 'One site in 2010.', lifeStatus: 'Wild samples.' }] } },
  }
  const sections = catalogueReadingSections(profile, dossier)
  expect(sections[0].sourceIds).toEqual(['account:source'])
  expect(sections[1].sourceIds).toEqual(['study:source'])
  expect(sections[1].text).toEqual({ en: 'A study finding.' })
  expect(sections[1].locator).toBe('Table 2')
  expect(sections[1].context).toEqual(['One site in 2010.', 'Wild samples.'])
})

it('preserves decimals, identifiers and qualifications when formatting paragraphs', () => {
  expect(paragraphParts('TPL 6: 70 ± 3 ka. Not directly dated.\n\np = 0.002; one captive cohort.')).toEqual(['TPL 6: 70 ± 3 ka. Not directly dated.', 'p = 0.002; one captive cohort.'])
})
