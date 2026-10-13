import { expect, it } from 'vitest'
import { catalogueReadingSections, orderReadingSections, paragraphParts, readerInlineParts, readingSectionTitle } from './nodeReading.mjs'
import { readerInlineHtml } from './readerInlineHtml.mjs'
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
    identity: { method: 'Test fixture', scope: 'Test sample' },
    lifeStatusScope: { wild: 'Wild samples.', domesticated: '', fossil: '' }, sources: [],
    facets: { morphology: { status: 'partially-supported', claims: [{ title: { en: 'Bones from one field site', zh: '一个野外地点的骨骼' }, text: 'A study finding.', textZh: '一项研究发现。', sourceIds: ['source'], locator: 'Table 2', placeTimeScope: 'One site in 2010.', lifeStatus: 'Wild samples.' }] } },
  }
  const sections = catalogueReadingSections(profile, dossier)
  expect(sections[0].sourceIds).toEqual(['account:source'])
  expect(sections[1].sourceIds).toEqual(['study:source'])
  expect(sections[1].text).toEqual({ en: 'A study finding.', zh: '一项研究发现。' })
  expect(sections[1].locator).toBe('Table 2')
  expect(sections[1].context).toEqual(['One site in 2010.', 'Wild samples.'])
  expect(readingSectionTitle(sections[1], 'zh')).toBe('一个野外地点的骨骼')
})

it('preserves decimals, identifiers and qualifications when formatting paragraphs', () => {
  expect(paragraphParts('TPL 6: 70 ± 3 ka. Not directly dated.\n\np = 0.002; one captive cohort.')).toEqual(['TPL 6: 70 ± 3 ka. Not directly dated.', 'p = 0.002; one captive cohort.'])
})

it('formats only paired scientific emphasis and literal code spans, preserving malformed or HTML text', () => {
  const source = '*Yutyrannus huali* uses `lacustrine - large`; <img src=x onerror=alert(1)> stays literal.'
  expect(readerInlineParts(source)).toEqual([
    { type: 'emphasis', text: 'Yutyrannus huali' },
    { type: 'text', text: ' uses ' },
    { type: 'code', text: 'lacustrine - large' },
    { type: 'text', text: '; <img src=x onerror=alert(1)> stays literal.' },
  ])
  expect(readerInlineParts('*unfinished and `unfinished')).toEqual([{ type: 'text', text: '*unfinished and `unfinished' }])
  expect(readerInlineParts('**literal markers**')).toEqual([{ type: 'text', text: '**literal markers**' }])
  expect(readerInlineHtml(source)).toBe('<em>Yutyrannus huali</em> uses <code>lacustrine - large</code>; &lt;img src=x onerror=alert(1)&gt; stays literal.')
})

it('uses an authored other-language heading when the passage itself falls back', () => {
  expect(readingSectionTitle({ id: 'sample', title: { en: 'Account for the recorded sample' }, text: { en: 'Source-language passage.' } }, 'zh'))
    .toBe('Account for the recorded sample')
})

it('keeps a passage with recorded claim links without borrowing another passage source', () => {
  const profile = { sections: [
    { topic: 'morphology', text: { en: 'The sampled skull preserves an observed structure.' }, claimIds: ['skull-observation'] },
    { topic: 'methods', text: { en: 'The dataset uses a separate sampling method.' }, sourceIds: ['dataset-method'] },
  ] } as unknown as CatalogueKnowledgeProfile
  const sections = catalogueReadingSections(profile, undefined)
  expect(sections[0]).toMatchObject({ text: { en: 'The sampled skull preserves an observed structure.' }, claimIds: ['skull-observation'], sourceIds: [] })
  expect(sections[1].sourceIds).toEqual(['account:dataset-method'])
})
