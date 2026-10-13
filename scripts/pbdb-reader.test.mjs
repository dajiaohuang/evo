import { afterEach, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { createHash } from 'node:crypto'
import { readNodeContent } from './node-content.mjs'
import { deterministicGzip } from './archive-determinism.mjs'
import { buildPbdbReaderDelivery, projectPbdbReaderNode } from './pbdb-reader.mjs'
import { pbdbClassificationId } from '../src/utils/pbdbIdentity.mjs'
import { clearRuntimeMemoryCache, loadPbdbReader } from '../src/data-client/staticDataClient.ts'

afterEach(() => { clearRuntimeMemoryCache(); vi.unstubAllGlobals() })

it('opens an actual name-only snapshot identity without inventing navigation or borrowing its name', () => {
  const content = readNodeContent('PBDB%3Atxn%3A391882')
  const snapshot = JSON.parse(readFileSync(content.identity.sourceIdentity.snapshot, 'utf8'))
  const readTaxonomy = (path, id) => path === content.identity.sourceIdentity.snapshot
    ? snapshot.records.find(row => row.oid === id) : null
  const [record] = projectPbdbReaderNode(content, { readTaxonomy })
  expect(record).toMatchObject({ pbdbTaxonId: 'txn:391882', identity: {
    scientificName: 'Hylerpeton longidentatum', conceptsMerged: false,
    placementStatus: 'unresolved-navigation-topic',
    classification: { sourceSnapshot: content.identity.sourceIdentity.snapshot },
  } })
  expect(record.profile).toBeUndefined()
  expect(pbdbClassificationId(record.identity.classification)).toBe('txn:391882')
  expect(projectPbdbReaderNode(content, { readTaxonomy: () => ({ oid: 'txn:1', nam: 'Hylerpeton longidentatum' }) })).toEqual([])
})

it('projects the actual txn:249478 canonical account into an exact-ID compressed delivery shard', () => {
  const content = readNodeContent('PBDB%3A249478')
  const records = projectPbdbReaderNode(content)
  expect(records).toHaveLength(1)
  expect(records[0]).toMatchObject({ pbdbTaxonId: 'txn:249478', identity: { scientificName: 'Colognathus obscurus' } })
  expect(records[0].profile).not.toHaveProperty('colId')
  expect(records[0].profile.sections[0].title.en).toBe('Which fossil records this name represents')
  expect(records[0].profile.sources).toEqual(content.records['catalogue-profile'].sources)
  const bytes = new Map()
  const manifest = buildPbdbReaderDelivery(records, { datasetVersion: 'fixture', writeGzipJson: (url, value) => {
    const compressed = deterministicGzip(Buffer.from(JSON.stringify(value)))
    bytes.set(url, compressed)
    return { url, bytes: compressed.length, sha256: createHash('sha256').update(compressed).digest('hex') }
  } })
  const index = JSON.parse(gunzipSync(bytes.get(manifest.index.url)))
  expect(index).toHaveLength(1)
  expect(index[0]).not.toHaveProperty('profile')
  const prefix = createHash('sha256').update('txn:249478').digest('hex').slice(0, 2)
  expect(JSON.parse(gunzipSync(bytes.get(manifest.routes[prefix][0])))).toEqual(records)
})

it('rejects other namespaces and wrong source URLs without using a name or storage key', () => {
  for (const id of ['occ:249478', 'col:249478', 'ref:249478', 'txn:unpublished']) {
    expect(pbdbClassificationId({ authority: 'Paleobiology Database', sourceUrl: `https://paleobiodb.org/data1.2/taxa/single.json?id=${id}` })).toBeNull()
  }
  expect(pbdbClassificationId({ authority: 'Catalogue of Life', sourceUrl: 'https://paleobiodb.org/data1.2/taxa/single.json?id=249478' })).toBeNull()
  expect(pbdbClassificationId({ authority: 'Paleobiology Database', sourceUrl: 'https://paleobiodb.org/data1.2/occs/single.json?id=249478' })).toBeNull()
  expect(projectPbdbReaderNode({ identity: { scientificName: 'Colognathus obscurus' }, records: {} })).toEqual([])
  expect(projectPbdbReaderNode(readNodeContent('scope-PBDB-170318fd9c-db5f31e02f3dcfbc'))).toEqual([])
})

it('keeps two recorded source identities in one physical node independently scoped', () => {
  const sourceIdentities = ['txn:404756', 'txn:364433'].map(id => ({ identity: `PBDB:${id}`, taxonomy: { recordId: id, path: 'snapshot.json', url: `https://paleobiodb.org/data1.2/taxa/single.json?id=${id}` } }))
  const records = projectPbdbReaderNode({ identity: { sourceIdentities, placementStatus: 'unresolved-multiple-source-concepts' }, records: {} }, { readTaxonomy: (_path, id) => ({ oid: id, nam: 'Panochthus frenzelianus', rnk: 'species' }) })
  expect(records.map(record => record.pbdbTaxonId)).toEqual(['txn:404756', 'txn:364433'])
  expect(records.every(record => record.identity.conceptsMerged === false && record.profile === undefined)).toBe(true)
  expect(records[0].scopedIdentities[0].context).toBe('PBDB:txn:404756')
})

it('preserves snapshot-authority clade prose and separately bound atlas reader material', () => {
  const clade = projectPbdbReaderNode(readNodeContent('PBDB%3A38673'))
  expect(clade[0]).toMatchObject({ pbdbTaxonId: 'txn:38673', identity: { scientificName: 'Brachiosauridae' } })
  expect(clade[0].profile.sections.length).toBeGreaterThan(0)
  const content = readNodeContent('PBDB%3A249478')
  content.records['atlas-profile'] = { readerSections: [{ id: 'material', title: { en: 'Recorded material', zh: '已记录材料' }, text: { en: 'Existing bounded account.', zh: '已有范围明确的正文。' }, sourceIds: ['atlas-source'] }], readerSources: [{ id: 'atlas-source', title: 'A fixed study', url: 'https://example.org/study', license: 'Recorded item rights' }] }
  const record = projectPbdbReaderNode(content)[0]
  expect(record.atlasProfile.readerSections).toEqual(content.records['atlas-profile'].readerSections)
  expect(record.atlasProfile.readerSources).toEqual(content.records['atlas-profile'].readerSources)
})

it('retains duplicate source scopes as separate accounts and withholds conflicting placements', () => {
  const first = projectPbdbReaderNode(readNodeContent('scope-PBDB-045d1aa7f5-6e5c8f48450f47b1'))[0]
  const second = projectPbdbReaderNode(readNodeContent('scope-PBDB-045d1aa7f5-ee0547585737a50b'))[0]
  expect(first.pbdbTaxonId).toBe('txn:178262')
  expect(second.pbdbTaxonId).toBe('txn:178262')
  const values = new Map()
  const manifest = buildPbdbReaderDelivery([first, second], { datasetVersion: 'fixture', writeGzipJson: (url, value) => { values.set(url, value); return { url, bytes: 1 } } })
  expect(manifest.records).toBe(1)
  const record = values.get(manifest.files[0].url)[0]
  expect(record.contexts).toHaveLength(2)
  expect(record).not.toHaveProperty('profile')
  expect(record.identity.classification).not.toHaveProperty('placement')
  expect(record.contexts.map(context => context.profile)).toEqual(expect.arrayContaining([first.profile, second.profile]))
  expect(values.get(manifest.index.url)[0]).not.toHaveProperty('contexts')
})

it('loads the integrated exact source bindings through the public loader using generated gzip descriptors', async () => {
  const snapshot = JSON.parse(readFileSync('data/sources/snapshots/pbdb-amniota-accepted-fossil-species-2026-10-02.json', 'utf8'))
  const readTaxonomy = (_path, id) => snapshot.records.find(row => row.oid === id)
  const records = ['PBDB%3A249478', 'PBDB%3A252525', 'PBDB%3A38673', 'PBDB%3A52933']
    .flatMap(key => projectPbdbReaderNode(readNodeContent(key), { readTaxonomy }))
  const pter = records.find(record => record.pbdbTaxonId === 'txn:52933')
  const targets = pter.profile.sources.flatMap(source => source.readingTargets ?? [])
  expect(new Set(targets.map(target => target.pbdbTaxonId)).size).toBe(6)
  const volgadraco = targets.find(target => target.pbdbTaxonId === 'txn:140493')
  expect(volgadraco.canonicalPath.startsWith('content/nodes/')).toBe(true)
  records.push(...projectPbdbReaderNode(readNodeContent(volgadraco.canonicalPath.slice('content/nodes/'.length))))
  const payloads = new Map()
  const writeGzipJson = (path, value) => {
    const url = `releases/reader-fixture/${path}`
    const source = Buffer.from(JSON.stringify(value))
    const bytes = deterministicGzip(source)
    payloads.set(url, bytes)
    return { url, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex'), encoding: 'gzip', mediaType: 'application/json' }
  }
  const manifest = buildPbdbReaderDelivery(records, { datasetVersion: 'reader-fixture', writeGzipJson })
  const manifestFile = writeGzipJson('pbdb/manifest.json.gz', manifest)
  const current = { schemaVersion: 5, datasetVersion: 'reader-fixture', releaseBase: 'releases/reader-fixture/', pbdbReader: { manifest: manifestFile, records: manifest.records } }
  vi.stubGlobal('Worker', undefined)
  vi.stubGlobal('fetch', vi.fn(async url => {
    if (String(url).endsWith('current.json')) return new Response(JSON.stringify(current))
    const key = [...payloads.keys()].find(key => String(url).endsWith(key))
    if (!key) throw new Error(`Unexpected fixture URL ${url}`)
    return new Response(payloads.get(key))
  }))
  await expect(loadPbdbReader('txn:249478')).resolves.toMatchObject({ identity: { scientificName: 'Colognathus obscurus' } })
  const secondary = await loadPbdbReader('txn:246754')
  expect(secondary).toMatchObject({ pbdbTaxonId: 'txn:246754', identity: { scientificName: 'Todralestes variabilis', conceptsMerged: false } })
  expect(secondary).not.toHaveProperty('profile')
  expect((await loadPbdbReader('txn:38673')).profile.sections).toHaveLength(3)
  expect((await loadPbdbReader('txn:52933')).profile.sources.flatMap(source => source.readingTargets ?? [])).toEqual(targets)
  expect((await loadPbdbReader('txn:140493')).identity.scientificName).toBe('Volgadraco bogolubovi')
})
