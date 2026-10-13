import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve, sep } from 'node:path'
import { it } from 'vitest'

function test(name, fn) {
  it(name, () => {
    const cleanups = []
    try { fn({ after: callback => cleanups.push(callback) }) }
    finally { for (const cleanup of cleanups.reverse()) cleanup() }
  })
}
import { parse, stringify } from 'yaml'
import {
  canonicalToNodeContent,
  createContentReferenceCatalogue,
  pageRef,
  readNodeContent,
  readReferences,
  safeContentPath,
  writeNodeContent,
  writeReferences,
} from './node-content.mjs'

function fixtureRoot(t) {
  const root = mkdtempSync(join(tmpdir(), 'evo-flat-node-'))
  t.after(() => {
    const child = relative(resolve(tmpdir()), resolve(root))
    if (!child.startsWith('evo-flat-node-') || child.includes(sep)) throw new Error('Unsafe node fixture cleanup target')
    rmSync(root, { recursive: true, force: true })
  })
  return root
}

function makeResearchNode() {
  const reference = {
    id: 'ref-amphibio-v1',
    title: 'AmphiBIO species-level trait data',
    url: 'https://example.org/amphibio/v1',
    sourceRole: 'research-dataset',
    fitnessFor: ['species-trait-observation'],
    version: '1.0',
    sourceConcept: { kind: 'dataset-version', datasetId: 'AmphiBIO', version: '1.0' },
    metadataVariants: [{ title: 'AmphiBIO source row title', version: '1.0' }],
  }
  const bodyEn = 'The recorded scope remains attached to each study row.\n\n## Reproduction in controlled culture\nThis is a subsection within the recorded passage.\n\n```md\n## A heading inside code {#not-a-section}\n```\n\n<div>\n## A heading inside HTML {#not-a-section-either}\n</div>'
  const bodyZh = '每条研究记录都保留各自的样本范围。'
  const records = {
    'amphibio-source-reader': {
      sourceDatasetId: 'AmphiBIO',
      observations: [null, 0.125, 2.5],
      claimScope: { taxon: 'Rana example', population: 'north sample', count: 12 },
    },
    readerSections: [
      { id: 'scope-north', scope: { population: 'north sample', n: 12 }, title: 'North sample', body: bodyEn, titleZh: '北部样本', bodyZh, sourceIds: ['amphibio-row-17'] },
      { id: 'scope-south', scope: { population: 'south sample', n: 8 }, title: 'South sample', body: 'The south sample remains a separate observation.', titleZh: '南部样本', bodyZh: '南部样本作为另一条观察保留。', sourceIds: ['amphibio-row-18'] },
    ],
    readerSources: [
      {
        id: 'amphibio-row-17',
        referenceId: reference.id,
        metadataVariant: 0,
        fields: ['id', 'title', 'url', 'sourceRole', 'fitnessFor', 'version', 'sourceConcept', 'scope', 'locator', 'originalSourceText', 'originalLanguage', 'sourceRowNumber', 'rightsEvidenceUrl', 'licenseAssessment'],
        usage: {
          scope: { population: 'north sample', n: 12 },
          locator: 'Table 2, row 17',
          originalSourceText: 'Rana example; original archive row 17',
          originalLanguage: 'en',
          sourceRowNumber: 17,
          rightsEvidenceUrl: 'https://example.org/amphibio/license',
          licenseAssessment: { status: 'recorded', appliesTo: 'dataset row' },
        },
      },
      {
        id: 'amphibio-row-18',
        referenceId: reference.id,
        metadataVariant: 0,
        fields: ['id', 'title', 'url', 'sourceRole', 'fitnessFor', 'version', 'sourceConcept', 'scope', 'locator', 'originalSourceText', 'originalLanguage', 'sourceRowNumber', 'rightsEvidenceUrl', 'licenseAssessment'],
        usage: {
          scope: { population: 'south sample', n: 8 },
          locator: 'Table 2, row 18',
          originalSourceText: 'Rana example; original archive row 18',
          originalLanguage: 'en',
          sourceRowNumber: 18,
          rightsEvidenceUrl: 'https://example.org/amphibio/license',
          licenseAssessment: { status: 'recorded', appliesTo: 'dataset row' },
        },
      },
    ],
    claims: [
      {
        id: 'claim-north-observation',
        subject: { kind: 'taxon', sourceConcept: { authority: 'COL', id: 'col:example' } },
        claimKind: 'scientific',
        statement: 'The north sample has a recorded trait value.',
        confidence: 0.75,
        referenceLinks: [{ referenceId: reference.id, relation: 'supports', locator: { page: 17, table: 2, row: 17 }, excerpt: 'Rana example', range: [0.125, 2.5], note: null }],
      },
    ],
  }
  return {
    reference,
    bodyEn,
    bodyZh,
    records,
    canonical: {
      identity: {
        kind: 'research-context',
        displayName: 'Rana example observations',
        scientificName: 'Rana example',
        classification: { authority: 'recorded-source-concept', sourceId: 'col:example' },
      },
      relationships: [{ kind: 'about-taxon', sourceConcept: { kind: 'col', id: 'col:example' } }],
      records,
      pages: {
        en: [
          { key: 'scope-north', title: { record: 'readerSections', itemId: 'scope-north', field: 'title' }, body: { record: 'readerSections', itemId: 'scope-north', field: 'body' } },
          { key: 'scope-south', title: { record: 'readerSections', itemId: 'scope-south', field: 'title' }, body: { record: 'readerSections', itemId: 'scope-south', field: 'body' } },
        ],
        zh: [
          { key: 'scope-north', title: { record: 'readerSections', itemId: 'scope-north', field: 'titleZh' }, body: { record: 'readerSections', itemId: 'scope-north', field: 'bodyZh' } },
          { key: 'scope-south', title: { record: 'readerSections', itemId: 'scope-south', field: 'titleZh' }, body: { record: 'readerSections', itemId: 'scope-south', field: 'bodyZh' } },
        ],
      },
    },
  }
}

test('keeps source usage annotations and confines PBDB references to occurrence evidence', t => {
  const root = fixtureRoot(t)
  const fixture = makeResearchNode()
  const binding = fixture.canonical.records.readerSources[0]
  const originalFields = [...binding.fields]
  binding.usage.readerFieldCautions = { en: 'One recorded population.', zh: '仅指所记种群。' }
  binding.usage.readingTargets = ['scope-north']
  const occurrence = { occurrenceId: 'occ:1589230', referenceId: 'ref:80948', bibliography: 'Recorded PBDB citation' }
  fixture.canonical.records['pbdb-fossil-reader'] = { occurrenceEvidence: [occurrence] }
  writeReferences([fixture.reference], root)
  writeNodeContent('annotated-source', canonicalToNodeContent(fixture.canonical), root)
  const read = readNodeContent('annotated-source', root)
  assert.deepEqual(read.records.readerSources[0].readerFieldCautions, binding.usage.readerFieldCautions)
  assert.deepEqual(read.records.readerSources[0].readingTargets, ['scope-north'])
  assert.deepEqual(parse(readFileSync(join(root, 'content/nodes/annotated-source/evidence.yaml'), 'utf8')).records.readerSources[0].fields, originalFields)
  assert.deepEqual(read.records['pbdb-fossil-reader'].occurrenceEvidence[0], occurrence)
  fixture.canonical.records.claims[0].referenceLinks[0].referenceId = occurrence.referenceId
  assert.throws(() => writeNodeContent('bad-global-reference', canonicalToNodeContent(fixture.canonical), root), /Unknown reference id/)
  fixture.canonical.records.claims[0].referenceLinks[0].referenceId = fixture.reference.id
  binding.usage.id = 'another-source'
  assert.throws(() => writeNodeContent('bad-source-shape', canonicalToNodeContent(fixture.canonical), root), /usage cannot replace id/)
})

test('round-trips bilingual research sections, distinct scopes and complete source bindings', t => {
  const root = fixtureRoot(t)
  const fixture = makeResearchNode()
  writeReferences([fixture.reference], root)
  const flat = canonicalToNodeContent(fixture.canonical)
  writeNodeContent('physical-rana-example', flat, root)

  const stored = readNodeContent('physical-rana-example', root)
  assert.equal(stored.records.readerSections.length, 2)
  assert.deepEqual(stored.records.readerSections.map(section => section.scope), [
    { population: 'north sample', n: 12 },
    { population: 'south sample', n: 8 },
  ])
  assert.equal(stored.records.readerSections[0].title, 'North sample')
  assert.equal(stored.records.readerSections[0].titleZh, '北部样本')
  assert.equal(stored.pages.en[0].body, fixture.bodyEn)
  assert.equal(stored.pages.zh[0].body, fixture.bodyZh)
  assert.equal(stored.records.readerSources[0].id, 'amphibio-row-17')
  assert.equal(readReferences(root).references[0].id, fixture.reference.id)
  assert.equal(stored.records.readerSources[0].title, 'AmphiBIO source row title')
  assert.equal(stored.records.readerSources[0].version, '1.0')
  assert.equal(stored.records.readerSources[0].locator, 'Table 2, row 17')
  assert.equal(stored.records.readerSources[0].originalSourceText, 'Rana example; original archive row 17')
  assert.equal(stored.records.readerSources[1].originalSourceText, 'Rana example; original archive row 18')
  assert.deepEqual(stored.records.readerSources[0].licenseAssessment, { status: 'recorded', appliesTo: 'dataset row' })
  assert.deepEqual(stored.records.claims[0].referenceLinks[0], fixture.records.claims[0].referenceLinks[0])
  assert.deepEqual(stored.records['amphibio-source-reader'].observations, [null, 0.125, 2.5])
  assert.deepEqual(stored.relationships, fixture.canonical.relationships)

  const nodeYaml = readFileSync(join(root, 'content', 'nodes', 'physical-rana-example', 'node.yaml'), 'utf8')
  const evidenceYaml = readFileSync(join(root, 'content', 'nodes', 'physical-rana-example', 'evidence.yaml'), 'utf8')
  assert.equal(parse(evidenceYaml).records.readerSources[0].referenceId, fixture.reference.id)
  assert.deepEqual(Object.keys(stored.records.readerSources[0]), fixture.records.readerSources[0].fields)
  assert.equal(nodeYaml.includes('North sample'), false)
  assert.equal(evidenceYaml.includes('North sample'), false)

  writeNodeContent('physical-rana-example', {
    pages: { en: [{ key: 'scope-north', title: 'North sample, edited', body: fixture.bodyEn }, { key: 'scope-south', title: 'South sample', body: 'The south sample remains a separate observation.' }] },
  }, root)
  const edited = readNodeContent('physical-rana-example', root)
  assert.equal(edited.records.readerSources[0].originalSourceText, 'Rana example; original archive row 17')
  assert.deepEqual(edited.records.readerSections.map(section => section.sourceIds), [['amphibio-row-17'], ['amphibio-row-18']])
  assert.deepEqual(edited.pages.zh.map(section => section.key), ['scope-north', 'scope-south'])
})

test('derives catalogue section headings from keyed pages without persisting or replacing authored titles', t => {
  const root = fixtureRoot(t)
  const reference = {
    id: 'ref-catalogue-account', title: 'Catalogue account source', url: 'https://example.org/catalogue-account',
    sourceRole: 'taxonomic-database', fitnessFor: ['taxonomy'], version: 'release-7',
  }
  writeReferences([reference], root)
  const flat = canonicalToNodeContent({
    identity: { kind: 'taxon', scientificName: 'Example mammal' },
    records: {
      'catalogue-profile': {
        sections: [
          { topic: 'overview', text: { en: pageRef('en', 'intro', 'body'), zh: pageRef('zh', 'intro', 'body') }, sourceIds: ['catalogue-source'] },
          { topic: 'morphology', title: { en: 'Authored body account' }, text: { en: pageRef('en', 'body', 'body'), zh: pageRef('zh', 'body', 'body') }, sourceIds: ['catalogue-source'] },
          { topic: 'research', title: { en: pageRef('en', 'explicit', 'title') }, text: { en: pageRef('en', 'body', 'body') } },
          { topic: 'availability', text: { en: pageRef('en', 'body', 'body') } },
        ],
        sources: [{
          id: 'catalogue-source', referenceId: reference.id,
          fields: ['id', 'title', 'url', 'version', 'scope', 'locator', 'license', 'rightsHolder', 'attribution'],
          usage: { scope: 'Pinned checklist release.', locator: 'Account section 3', license: 'CC BY 4.0', rightsHolder: 'Catalogue project', attribution: 'Catalogue project, release 7' },
        }],
      },
      'catalogue-dossier': {
        facets: {
          morphology: { claims: [
            { text: pageRef('en', 'body', 'body'), textZh: pageRef('zh', 'body', 'body'), sourceIds: ['catalogue-source'], locator: 'Specimen account' },
            { title: { en: 'Authored study title' }, text: pageRef('en', 'body', 'body'), textZh: pageRef('zh', 'body', 'body') },
            { text: pageRef('en', 'explicit', 'body') },
          ] },
        },
      },
    },
    pages: {
      en: [
        { key: 'intro', title: 'Mammal account', body: 'Recorded overview.' },
        { key: 'body', title: 'Body evidence', body: 'Recorded body evidence.' },
        { key: 'explicit', title: 'Explicit passage title', body: 'A separate passage.' },
      ],
      zh: [
        { key: 'intro', title: '哺乳动物记录', body: '记录概述。' },
        { key: 'body', title: '身体证据', body: '记录的身体证据。' },
      ],
    },
  })
  writeNodeContent('catalogue-title-fixture', flat, root)
  const evidencePath = join(root, 'content', 'nodes', 'catalogue-title-fixture', 'evidence.yaml')
  const persistedBeforeRead = parse(readFileSync(evidencePath, 'utf8'))
  const read = readNodeContent('catalogue-title-fixture', root)
  const sections = read.records['catalogue-profile'].sections
  assert.deepEqual(sections.map(section => section.title), [
    { en: 'Mammal account', zh: '哺乳动物记录' },
    { en: 'Authored body account', zh: '身体证据' },
    { en: 'Explicit passage title' },
    { en: 'Body evidence' },
  ])
  assert.deepEqual(sections.map(section => section.topic), ['overview', 'morphology', 'research', 'availability'])
  assert.deepEqual(sections[0].sourceIds, ['catalogue-source'])
  assert.deepEqual(read.records['catalogue-profile'].sources[0], {
    id: 'catalogue-source', title: { en: 'Catalogue account source', zh: 'Catalogue account source' },
    url: 'https://example.org/catalogue-account', version: 'release-7', scope: 'Pinned checklist release.',
    locator: 'Account section 3', license: 'CC BY 4.0', rightsHolder: 'Catalogue project', attribution: 'Catalogue project, release 7',
  })
  assert.deepEqual(parse(readFileSync(evidencePath, 'utf8')), persistedBeforeRead)
  assert.equal(Object.hasOwn(persistedBeforeRead.records['catalogue-profile'].sections[0], 'title'), false)
  const claims = read.records['catalogue-dossier'].facets.morphology.claims
  assert.deepEqual(claims.map(claim => claim.title), [
    { en: 'Body evidence', zh: '身体证据' },
    { en: 'Authored study title', zh: '身体证据' },
    { en: 'Explicit passage title' },
  ])
  assert.equal(claims[0].locator, 'Specimen account')
  assert.deepEqual(claims[0].sourceIds, ['catalogue-source'])
  assert.equal(Object.hasOwn(persistedBeforeRead.records['catalogue-dossier'].facets.morphology.claims[0], 'title'), false)
})

test('converts primary reference usages without creating metadata variants', t => {
  const root = fixtureRoot(t)
  const reference = { id: 'ref-primary-study', title: 'Primary study', doi: '10.1000/example' }
  writeReferences([reference], root)
  const catalogue = createContentReferenceCatalogue(readReferences(root))
  const converted = canonicalToNodeContent({
    identity: { kind: 'research-context', displayName: 'Primary study context' },
    records: {
      readerSections: [{ id: 'sample-a', scope: { sample: 'A' }, sourceIds: ['source-a'] }],
      readerSources: { referenceUsages: [{ referenceId: reference.id, sourceKey: 'source-a', scope: { sample: 'A' }, locator: 'Table 1' }] },
    },
  }, { referenceCatalogue: catalogue })
  writeNodeContent('primary-study-context', converted, root)

  const read = readNodeContent('primary-study-context', root)
  const binding = parse(readFileSync(join(root, 'content', 'nodes', 'primary-study-context', 'evidence.yaml'), 'utf8')).records.readerSources[0]
  assert.equal(binding.referenceId, reference.id)
  assert.equal(Object.hasOwn(binding, 'metadataVariant'), false)
  assert.deepEqual(read.records.readerSources[0].scope, { sample: 'A' })
  assert.equal(read.records.readerSources[0].locator, 'Table 1')
  assert.equal(read.records.readerSources[0].referenceId, reference.id)
  assert.deepEqual(read.records.readerSources[0].title, { en: 'Primary study', zh: 'Primary study' })
  assert.equal(read.records.readerSources[0].url, 'https://doi.org/10.1000/example')
  assert.deepEqual(readReferences(root).references[0], reference)
})

test('binds raw archive source rows and retains their imported metadata variant', t => {
  const root = fixtureRoot(t)
  const catalogue = createContentReferenceCatalogue([])
  const flat = canonicalToNodeContent({
    identity: { kind: 'research-context', displayName: 'Archived sample context' },
    records: {
      readerSections: [{ id: 'sample-a', scope: { sample: 'A' }, sourceIds: ['archive-row-7'] }],
      readerSources: [{
        id: 'archive-row-7',
        title: 'Archived source row',
        url: 'https://example.org/archive.zip',
        version: 'archive snapshot 4',
        sourceRole: 'research-dataset',
        fitnessFor: ['population-trait-observation'],
        sourceConcept: { kind: 'archive-record', id: 'archive-7' },
        scope: { sample: 'A' },
        locator: 'row 7',
        originalSourceText: 'verbatim archived row seven',
        rightsEvidenceUrl: 'https://example.org/rights',
      }],
    },
  }, { referenceCatalogue: catalogue })
  writeNodeContent('archived-sample-context', flat, root)

  const read = readNodeContent('archived-sample-context', root)
  assert.equal(Object.hasOwn(parse(readFileSync(join(root, 'content', 'nodes', 'archived-sample-context', 'evidence.yaml'), 'utf8')).records.readerSources[0], 'metadataVariant'), true)
  assert.equal(read.records.readerSources[0].sourceConcept.id, 'archive-7')
  assert.equal(read.records.readerSources[0].originalSourceText, 'verbatim archived row seven')
  assert.equal(read.records.readerSources[0].rightsEvidenceUrl, 'https://example.org/rights')
})

test('rejects a source ID registered only in another scope', t => {
  const root = fixtureRoot(t)
  const reference = { id: 'ref-scope-check', title: 'Study', url: 'https://example.org/study' }
  writeReferences([reference], root)
  const flat = canonicalToNodeContent({
    identity: { kind: 'research-context', displayName: 'Scoped source check' },
    records: {
      readerSections: [{ id: 'sample-b', scope: { sample: 'B' }, sourceIds: ['source-a'] }],
      readerSources: { referenceUsages: [{ referenceId: reference.id, sourceKey: 'source-a', scope: { sample: 'A' }, locator: 'Table 1' }] },
    },
  }, { references: readReferences(root) })
  assert.throws(() => writeNodeContent('scoped-source-check', flat, root), /same scope/)
})

test('retains descriptive source scopes for passages in the same record', t => {
  const root = fixtureRoot(t)
  const reference = { id: 'ref-descriptive-scope', title: 'Selected fossil material', url: 'https://example.org/material' }
  writeReferences([reference], root)
  const converted = canonicalToNodeContent({
    identity: { kind: 'taxon', scientificName: 'Example species' },
    records: { 'atlas-profile': {
      readerSections: [{ id: 'skull', text: { en: 'The preserved skull.', zh: '保存的头骨。' }, sourceIds: ['selected-skull'] }],
      readerSources: { referenceUsages: [{ referenceId: reference.id, sourceKey: 'selected-skull', scope: { en: 'Selected skull observations only.', zh: '仅选定头骨的观察。' }, locator: 'Figure 2' }] },
    } },
  }, { references: readReferences(root) })
  writeNodeContent('descriptive-source-scope', converted, root)
  assert.deepEqual(readNodeContent('descriptive-source-scope', root).records['atlas-profile'].readerSources[0].scope,
    { en: 'Selected skull observations only.', zh: '仅选定头骨的观察。' })
})

test('does not borrow a source ID from a different record on the same node', t => {
  const root = fixtureRoot(t)
  const reference = { id: 'ref-context', title: 'Study', url: 'https://example.org/context' }
  writeReferences([reference], root)
  const converted = canonicalToNodeContent({
    identity: { kind: 'taxon', scientificName: 'Example species' },
    records: {
      event: { readerSections: [{ id: 'observed', sourceIds: ['source-a'] }] },
      'atlas-profile': { readerSources: { referenceUsages: [{ referenceId: reference.id, sourceKey: 'source-a', scope: { en: 'Profile only.', zh: '仅物种资料。' }, locator: 'Table 1' }] } },
    },
  }, { references: readReferences(root) })
  assert.throws(() => writeNodeContent('distinct-record-contexts', converted, root), /same scope/)
  const direct = canonicalToNodeContent({
    identity: { kind: 'taxon', scientificName: 'Example species' },
    records: {
      'atlas-profile': { referenceIds: [reference.id], readerSections: [{ id: 'observed', sourceIds: [reference.id] }] },
    },
  })
  writeNodeContent('declared-reference-context', direct, root)
  assert.deepEqual(readNodeContent('declared-reference-context', root).records['atlas-profile'].readerSections[0].sourceIds, [reference.id])
  direct.evidence.records['atlas-profile'].readerSections[0].scope = 'A scope that this bibliography does not assert.'
  assert.throws(() => writeNodeContent('undeclared-reference-scope', direct, root), /same scope/)
})

test('keeps an identity-only ancestor to node.yaml without empty files', t => {
  const root = fixtureRoot(t)
  const identity = { kind: 'taxon', scientificName: 'Amphibia', sourceId: 'col:amphibia' }
  const flat = canonicalToNodeContent({ identity })
  writeNodeContent('amphibia-ancestor', flat, root)

  const directory = join(root, 'content', 'nodes', 'amphibia-ancestor')
  const read = readNodeContent('amphibia-ancestor', root)
  assert.deepEqual(read.records, {})
  assert.deepEqual(read.pages, { en: [], zh: [] })
  assert.deepEqual(read.identity, identity)
  assert.equal(Object.hasOwn(read, 'index'), false)
  assert.throws(() => canonicalToNodeContent({ index: { schemaVersion: 1, ...identity } }), /Unknown canonical node key: index/)
  assert.equal(readFileSync(join(directory, 'node.yaml'), 'utf8').includes('schemaVersion: 1'), true)
  assert.throws(() => readFileSync(join(directory, 'evidence.yaml'), 'utf8'))
  assert.throws(() => readFileSync(join(directory, 'page.en.md'), 'utf8'))
  assert.throws(() => readFileSync(join(directory, 'page.zh.md'), 'utf8'))
})

test('rejects unknown section refs, duplicate sections, unsupported versions and unsafe keys', t => {
  const root = fixtureRoot(t)
  const base = canonicalToNodeContent({
    identity: { kind: 'event', displayName: 'Test event' },
    records: { event: { title: pageRef('en', 'overview', 'title'), summary: pageRef('en', 'overview', 'body') } },
    pages: { en: [{ key: 'overview', title: 'Overview', body: 'Recorded body.' }] },
  })
  writeNodeContent('event-fixture', base, root)
  assert.throws(() => safeContentPath('../escape', root), /Invalid physical node directory key/)
  assert.throws(() => safeContentPath('one/two', root), /Invalid physical node directory key/)
  assert.throws(() => writeNodeContent('unreadable-fixture', {
    ...base,
    pages: { en: [{ key: 'overview', title: 'Overview', body: '## Broken subsection {#INVALID}\nRecorded body.' }] },
  }, root), /Unkeyed or malformed H2/)
  assert.throws(() => readFileSync(join(root, 'content', 'nodes', 'unreadable-fixture', 'node.yaml')))

  const evidencePath = join(root, 'content', 'nodes', 'event-fixture', 'evidence.yaml')
  const evidence = parse(readFileSync(evidencePath, 'utf8'))
  evidence.records.event.title.section = 'missing'
  writeFileSync(evidencePath, stringify(evidence), 'utf8')
  assert.throws(() => readNodeContent('event-fixture', root), /Unknown page section pointer/)

  const secondRoot = fixtureRoot(t)
  writeNodeContent('version-fixture', base, secondRoot)
  const nodePath = join(secondRoot, 'content', 'nodes', 'version-fixture', 'node.yaml')
  const node = parse(readFileSync(nodePath, 'utf8'))
  node.schemaVersion = 99
  writeFileSync(nodePath, stringify(node), 'utf8')
  assert.throws(() => readNodeContent('version-fixture', secondRoot), /Unsupported node schema version/)

  const duplicateRoot = fixtureRoot(t)
  writeNodeContent('duplicate-fixture', canonicalToNodeContent({
    identity: { kind: 'event', displayName: 'Duplicate fixture' },
    pages: { en: [{ key: 'first', title: 'First', body: 'One.' }, { key: 'second', title: 'Second', body: 'Two.' }] },
  }), duplicateRoot)
  const pagePath = join(duplicateRoot, 'content', 'nodes', 'duplicate-fixture', 'page.en.md')
  writeFileSync(pagePath, '## First {#first}\n\nOne.\n\n## Another first {#first}\n\nTwo.\n\n', 'utf8')
  assert.throws(() => readNodeContent('duplicate-fixture', duplicateRoot), /Duplicate section key/)
  writeFileSync(pagePath, '## Missing section key\n\nRecorded body.\n', 'utf8')
  assert.throws(() => readNodeContent('duplicate-fixture', duplicateRoot), /Unkeyed or malformed H2/)
})
