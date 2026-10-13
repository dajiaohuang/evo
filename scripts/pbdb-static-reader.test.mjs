import { expect, it } from 'vitest'
import {
  buildPbdbTaxonomyIndex,
  groupPbdbReaderPages,
  pbdbReaderHref,
  pbdbReaderPath,
  renderPbdbReaderBody,
} from './pbdb-static-reader.mjs'

function record(id, scientificName, parentSourceIdentifier = null, text = 'A *bounded* account with `txn:2`.') {
  return {
    pbdbTaxonId: id,
    identity: {
      kind: 'taxon', scientificName, rank: 'species', conceptsMerged: false,
      classification: {
        authority: 'Paleobiology Database',
        sourceUrl: `https://paleobiodb.org/data1.2/taxa/single.json?id=${id.slice(4)}`,
        ...(parentSourceIdentifier ? { parentSourceIdentifier } : {}),
      },
    },
    profile: {
      scientificName,
      sections: [{ id: 'scope', title: { en: 'Recorded scope', zh: '记录范围' }, text: { en: text, zh: '有范围限定的 `txn:2` 记录。' }, sourceIds: ['source-1'], locator: 'section 2' }],
      sources: [{
        id: 'source-1', referenceId: 'ref-example',
        usage: {
          title: 'Recorded PBDB account',
          url: 'https://paleobiodb.org/data1.2/taxa/single.json?id=2',
          scope: { en: 'Only this recorded source account.', zh: '仅此已记录的来源账号。' },
          locator: 'response record 2', version: 'snapshot 2026-10-02', license: 'CC0-1.0',
          rightsHolder: 'Paleobiology Database',
        },
        readingTargets: [{ name: 'Related taxon', pbdbTaxonId: 'txn:2' }],
      }],
    },
  }
}

const referenceMap = new Map([['ref-example', {
  title: 'A fixed citation', authors: ['A. Author', 'B. Author'], publishedYear: 2024, doi: '10.1234/example',
} ]])

it('uses exact txn IDs for flat bilingual routes and typed full-app links', () => {
  expect(pbdbReaderPath('txn:249478')).toBe('pbdb/txn~3A249478/')
  expect(pbdbReaderPath('txn:249478', 'zh')).toBe('zh/pbdb/txn~3A249478/')
  expect(pbdbReaderPath('occ:249478')).toBeNull()
  expect(pbdbReaderHref('txn:2', { supportedIds: new Set(['txn:2']) })).toBe('/evo/pbdb/txn~3A2/')
  expect(pbdbReaderHref('txn:2', { staticEdition: false, supportedIds: new Set(['txn:2']) })).toBe('/evo/#/pbdb?id=txn%3A2')
  expect(pbdbReaderHref('txn:unpublished', { supportedIds: new Set(['txn:2']) })).toBeNull()
})

it('renders bilingual sections, shared inline markup, source citations, scope, locators and rights', () => {
  const account = record('txn:1', 'Test taxon')
  const supportedIds = new Set(['txn:1', 'txn:2'])
  const english = renderPbdbReaderBody(account, { language: 'en', references: referenceMap, supportedIds }).body
  const chinese = renderPbdbReaderBody(account, { language: 'zh', references: referenceMap, supportedIds }).body

  expect(english).toContain('<h2>Recorded scope</h2>')
  expect(english).toContain('<em>bounded</em>')
  expect(english).toContain('<code>txn:2</code>')
  expect(english).toContain('response record 2')
  expect(english).toContain('snapshot 2026-10-02')
  expect(english).toContain('CC0-1.0')
  expect(english).toContain('Paleobiology Database')
  expect(english).toContain('A. Author; B. Author · 2024 · DOI 10.1234/example')
  expect(english).toContain('href="/evo/pbdb/txn~3A2/"')
  expect(chinese).toContain('<h2>记录范围</h2>')
  expect(chinese).toContain('有范围限定的 <code>txn:2</code> 记录。')
})

it('renders a real Brachiosauridae source-bounded range with its account and locators', () => {
  const brachiosauridae = record('txn:38673', 'Brachiosauridae')
  brachiosauridae.ranges = [{
    entityId: 'brachiosauridae',
    taxonomicConcept: 'Brachiosauridae — source-bounded sample window',
    geographicScope: 'Morrison and Tendaguru type-material comparison in Taylor',
    olderMa: 154.8,
    youngerMa: 145,
    status: 'available',
    uncertainty: { olderMa: null, youngerMa: null, note: 'This display is limited to the Late Jurassic type-material comparison for Brachiosaurus and Giraffatitan, not the complete family range; numerical stage conversions follow ICS v2026/06 where applicable.' },
    evidenceBasis: 'A re-evaluation of Brachiosaurus altithorax Riggs 1903 (Dinosauria, Sauropoda) and its generic separation from Giraffatitan brancai (Janensch 1914) directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.',
    confidence: 'medium',
    claimIds: ['claim:taxon:brachiosauridae:source-bounded-range-rc49'],
    referenceLocators: [
      { referenceId: 'taylor-2009-brachiosaurus-giraffatitan', locator: '787–806; Type-material review; comparative diagnosis; generic separation' },
      { referenceId: 'ics-2026-06', locator: 'International Chronostratigraphic Chart v2026/06; numerical stage boundaries' },
    ],
  }]
  const otherAccount = record('txn:38673', 'Brachiosauridae from another source')
  const page = groupPbdbReaderPages([brachiosauridae, otherAccount])[0]
  const english = renderPbdbReaderBody(page, { language: 'en' }).body
  const chinese = renderPbdbReaderBody(page, { language: 'zh' }).body

  expect(english).toContain('Brachiosauridae — source-bounded sample window')
  expect(english).toContain('Morrison and Tendaguru type-material comparison in Taylor · 154.8–145 Ma')
  expect(english).toContain('does not extrapolate it into a global taxon duration')
  expect(english).toContain('not the complete family range')
  expect(english).toContain('claim:taxon:brachiosauridae:source-bounded-range-rc49')
  expect(english).toContain('taylor-2009-brachiosaurus-giraffatitan')
  expect(english).toContain('787–806; Type-material review; comparative diagnosis; generic separation')
  expect(english).toContain('ics-2026-06')
  expect(english.match(/154\.8–145 Ma/g)).toHaveLength(1)
  expect(chinese).toContain('Morrison and Tendaguru type-material comparison in Taylor · 154.8–145 Ma')
  expect(chinese).toContain('not the complete family range')
  const firstAccount = english.slice(english.indexOf('<section class="pbdb-account">'), english.indexOf('<section class="pbdb-account">', english.indexOf('<section class="pbdb-account">') + 1))
  const secondAccount = english.slice(english.indexOf('<section class="pbdb-account">', english.indexOf('<section class="pbdb-account">') + 1))
  expect([firstAccount, secondAccount].filter(account => account.includes('154.8–145 Ma'))).toHaveLength(1)
})

it('links only published exact target IDs and preserves source details for unavailable targets', () => {
  const account = record('txn:1', 'Test taxon')
  account.profile.sources[0].readingTargets.push({ name: 'Unpublished taxon', pbdbTaxonId: 'txn:99' })
  const html = renderPbdbReaderBody(account, { supportedIds: new Set(['txn:1', 'txn:2']) }).body

  expect(html).toContain('href="/evo/pbdb/txn~3A2/"')
  expect(html).toContain('txn:99')
  expect(html).toContain('No reader page is published for this identifier')
  expect(html).toContain('https://paleobiodb.org/data1.2/taxa/single.json?id=2')
  expect(html).not.toContain('href="/evo/pbdb/txn~3A99/"')
  const fullAppHtml = renderPbdbReaderBody(account, {
    staticEdition: false, supportedIds: new Set(['txn:1', 'txn:2']),
  }).body
  expect(fullAppHtml).toContain('href="/evo/#/pbdb?id=txn%3A2"')
})

it('derives parent and member controls from recorded parent IDs and retains duplicate accounts separately', () => {
  const first = record('txn:1', 'First recorded name', 'txn:0', 'First account prose.')
  const second = record('txn:1', 'Second recorded name', 'txn:other', 'Second account prose.')
  const child = record('txn:2', 'Child taxon', 'txn:1')
  const pages = groupPbdbReaderPages([first, second, child])
  const taxonomy = buildPbdbTaxonomyIndex(pages)
  const parentHtml = renderPbdbReaderBody(taxonomy.get('txn:1').record, {
    supportedIds: new Set(pages.map(page => page.pbdbTaxonId)), taxonomyIndex: taxonomy,
  }).body

  expect(pages.find(page => page.pbdbTaxonId === 'txn:1').contexts).toHaveLength(2)
  expect(parentHtml).toContain('First account prose.')
  expect(parentHtml).toContain('Second account prose.')
  expect(parentHtml).toContain('Recorded direct classification members (1)')
  expect(parentHtml).toContain('Child taxon')
  expect(parentHtml).toContain('href="/evo/pbdb/txn~3A2/"')
  expect(parentHtml).toContain('They are not a phylogenetic tree and do not imply direct ancestry.')
  expect(parentHtml).not.toContain('href="/evo/pbdb/txn~3A0/"')
})
