import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { afterAll, describe, expect, test } from 'vitest'
import {
  colExactMatchName,
  compareStableIds,
  createAviListIndex,
  locateColIdRangeFile,
  matchColBirdSpecies,
  normalizeScientificName,
} from './avilist-birds-sidecar-lib.mjs'
import { buildAviListBirdProjections } from './build-avilist-birds-projections.mjs'

const REPOSITORY_ROOT = resolve(import.meta.dirname, '..')
const SOURCE_LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-v2025b.json')
const CROSSWALK_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-v2025b-crosswalk-col26.8.json.gz')
const IMPORT_LEDGER_PATH = join(REPOSITORY_ROOT, 'data', 'sources', 'avilist-birds-import-ledger.json')
const DESCRIPTOR_PATH = join(REPOSITORY_ROOT, 'data', 'packages', 'archosauria', 'crocodylomorphs-birds', 'nomenclature', 'avilist-extension.json')
const temporaryRoots = []

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

function gzipJson(path) {
  return JSON.parse(gunzipSync(readFileSync(path)).toString('utf8'))
}

function fixtureAviList(overrides = {}) {
  return {
    sourceRow: 2,
    sequence: 1,
    order: 'Passeriformes',
    family: 'Exampleidae',
    scientificName: 'Nova avis',
    authority: '(Author, AB, 1901)',
    englishName: 'New Bird',
    avibaseId: 'avibase-00000001',
    protonym: 'Vetus avis',
    ...overrides,
  }
}

function fixtureCol(overrides = {}) {
  return {
    id: 'COL-1',
    scientificName: 'Nova avis (Author, 1901)',
    authorship: '(Author, 1901)',
    sourceDatasetId: '2144',
    ...overrides,
  }
}

afterAll(() => {
  for (const path of temporaryRoots) rmSync(path, { recursive: true, force: true })
})

describe('AviList exact bird-authority matching', () => {
  test('uses representation-only normalization without case or diacritic folding', () => {
    expect(normalizeScientificName('  Genus_(Subgenus)\tspecies  ')).toBe('Genus species')
    expect(normalizeScientificName('Éxample avis')).toBe('Éxample avis')
    expect(normalizeScientificName('Éxample avis')).not.toBe(normalizeScientificName('Example avis'))
    expect(colExactMatchName(fixtureCol())).toBe('Nova avis')
    expect(colExactMatchName(fixtureCol({ scientificName: 'Nova avis', authorship: '(Other, 1902)' }))).toBe('Nova avis')
  })

  test('separates accepted, corroborated protonym redirect, ambiguity and unmatched', () => {
    const direct = fixtureAviList()
    const second = fixtureAviList({
      sourceRow: 3,
      sequence: 2,
      scientificName: 'Altera avis',
      avibaseId: 'avibase-00000002',
      protonym: 'Vetus avis',
    })
    expect(matchColBirdSpecies(fixtureCol(), createAviListIndex([direct]))).toMatchObject({
      status: 'accepted',
      mappingBasis: 'exact-current-scientific-name',
      avibaseId: direct.avibaseId,
    })
    expect(matchColBirdSpecies(fixtureCol({
      scientificName: 'Vetus avis (Author, 1901)',
    }), createAviListIndex([direct]))).toMatchObject({
      status: 'official-current-name-redirect',
      mappingBasis: 'exact-official-protonym-and-publication-year',
      matchedPublicationYear: '1901',
      avibaseId: direct.avibaseId,
    })
    expect(matchColBirdSpecies(fixtureCol({
      scientificName: 'Vetus avis (Homonym, 1902)',
      authorship: '(Homonym, 1902)',
    }), createAviListIndex([direct]))).toMatchObject({
      status: 'ambiguous',
      mappingBasis: 'exact-official-protonym-authorship-year-conflict',
      colPublicationYear: '1902',
    })
    expect(matchColBirdSpecies(fixtureCol({ scientificName: 'Vetus avis (Author, 1901)' }), createAviListIndex([direct, second]))).toMatchObject({
      status: 'ambiguous',
      mappingBasis: 'duplicate-exact-official-protonym',
    })
    expect(matchColBirdSpecies(fixtureCol({ scientificName: 'Absent avis (Author, 1901)' }), createAviListIndex([direct]))).toMatchObject({
      status: 'unmatched',
      mappingBasis: 'no-permitted-exact-avilist-evidence',
    })
  })
})

describe('pinned AviList v2025b canonical crosswalk', () => {
  test('records the official release, download checksum, DOI and CC BY licence', () => {
    const source = JSON.parse(readFileSync(SOURCE_LEDGER_PATH, 'utf8'))
    expect(source.release).toMatchObject({
      version: 'v2025b',
      published: '2026-06-11',
      versionDoi: '10.2173/avilist.v2025b',
    })
    expect(source.acquisition).toMatchObject({
      url: 'https://www.avilist.org/wp-content/uploads/2026/06/AviList-v2025b-10Jun2026-extended.xlsx',
      committed: false,
      response: {
        bytes: 8954422,
        sha256: '2e1fd3374e23af732b04115b033dd9d97fc53ba275c312d02ef5d12cfb85c988',
        etag: '"6a2aec3d-88a236"',
      },
    })
    expect(source.license.spdx).toBe('CC-BY-4.0')
    expect(source.workbookAudit).toMatchObject({ speciesCount: 11131, subspeciesCount: 19879 })
    expect(source.matchingContract.forbidden).toContain('No fuzzy')
  })

  test('partitions 11,044 Aves outcomes and 27 non-applicable Crocodylia honestly', () => {
    const compressed = readFileSync(CROSSWALK_PATH)
    const sourceBytes = gunzipSync(compressed)
    const snapshot = JSON.parse(sourceBytes.toString('utf8'))
    const ledger = JSON.parse(readFileSync(IMPORT_LEDGER_PATH, 'utf8'))
    const descriptor = JSON.parse(readFileSync(DESCRIPTOR_PATH, 'utf8'))
    expect(snapshot.counts).toEqual({
      packageAcceptedSpecies: 11071,
      colAcceptedAves: 11044,
      colAcceptedCrocodylia: 27,
      avilistAcceptedSpecies: 11131,
      accepted: 10444,
      officialCurrentNameRedirect: 78,
      ambiguous: 1,
      unmatched: 521,
      nonApplicable: 27,
      uniqueMatchedAviListSpecies: 10522,
      manyToOneColLinks: 0,
      upstreamOnly: 609,
    })
    expect(snapshot.colSourceComposition).toEqual({
      aves: [{
        datasetId: '2144',
        title: 'The Integrated Taxonomic Information System',
        shortName: 'ITIS',
        version: '2026-07-28',
        publicationDate: '2026-07-28',
        doi: '10.48580/d4ky',
        licenseLabel: 'Public Domain (CC0 1.0)',
        licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/legalcode',
        acceptedSpecies: 11044,
      }],
      crocodyliaNonApplicable: [{
        datasetId: '1008',
        title: 'The Reptile Database',
        shortName: 'ReptileDB',
        version: '2026-06',
        publicationDate: '2026-06-24',
        doi: '10.48580/d37s',
        licenseLabel: 'Creative Commons Attribution (CC BY) 4.0',
        licenseUrl: 'http://creativecommons.org/licenses/by/4.0/legalcode',
        acceptedSpecies: 27,
      }],
    })
    expect(snapshot.colRecords).toHaveLength(11044)
    expect(snapshot.nonApplicableRecords).toHaveLength(27)
    expect(snapshot.upstreamOnlyRecords).toHaveLength(609)
    expect(new Set([...snapshot.colRecords, ...snapshot.nonApplicableRecords].map((record) => record.colId)).size).toBe(11071)
    expect(new Set(snapshot.upstreamOnlyRecords.map((record) => record.avibaseId)).size).toBe(609)
    expect(snapshot.nonApplicableRecords.every((record) => record.status === 'non-applicable'
      && record.scope === 'Crocodylia' && !('avibaseId' in record))).toBe(true)
    expect(snapshot.upstreamOnlyRecords.every((record) => record.status === 'upstream-only'
      && !('colId' in record))).toBe(true)

    const ambiguous = snapshot.colRecords.filter((record) => record.status === 'ambiguous')
    expect(ambiguous).toHaveLength(1)
    expect(ambiguous[0]).toMatchObject({
      colId: '4KH9K',
      exactMatchName: 'Ploceus superciliosus',
      colPublicationYear: '1873',
      mappingBasis: 'exact-official-protonym-authorship-year-conflict',
      candidates: [{
        avibaseId: 'avibase-2C504059',
        officialScientificName: 'Plocepasser superciliosus',
        officialAuthority: '(Cretzschmar, PJ, 1827)',
      }],
    })
    const packageRecords = [...snapshot.colRecords, ...snapshot.nonApplicableRecords]
      .sort((left, right) => compareStableIds(left.colId, right.colId))
    const recordLedgerBytes = Buffer.from(`${packageRecords.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
    expect(sha256(recordLedgerBytes)).toBe(snapshot.integrity.packageRecordLedgerSha256)
    expect(sha256(compressed)).toBe(ledger.output.sha256)
    expect(sha256(sourceBytes)).toBe(ledger.output.sourceSha256)
    expect(sha256(readFileSync(join(REPOSITORY_ROOT, ledger.generatedBy.scriptPath)))).toBe(ledger.generatedBy.scriptSha256)
    expect(descriptor.counts).toEqual(snapshot.counts)
    expect(sha256(readFileSync(join(REPOSITORY_ROOT, descriptor.generatedBy.scriptPath)))).toBe(descriptor.generatedBy.scriptSha256)
    expect(descriptor.futureIntegration.androidAndIos).toContain('identical bytes')
  }, 30_000)

  test('rebuilds deterministic bounded shards and locates every package COL ID in one file', () => {
    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-avilist-birds-'))
    temporaryRoots.push(temporaryRoot)
    const descriptorPath = join(temporaryRoot, 'avilist-extension.json')
    const first = buildAviListBirdProjections({
      crosswalkPath: CROSSWALK_PATH,
      nomenclatureRoot: temporaryRoot,
      descriptorPath,
    })
    const firstHashes = [...first.files, ...first.upstreamOnlyFiles]
      .map((file) => sha256(readFileSync(join(temporaryRoot, basename(file.path)))))
    const second = buildAviListBirdProjections({
      crosswalkPath: CROSSWALK_PATH,
      nomenclatureRoot: temporaryRoot,
      descriptorPath,
    })
    const secondHashes = [...second.files, ...second.upstreamOnlyFiles]
      .map((file) => sha256(readFileSync(join(temporaryRoot, basename(file.path)))))
    expect(secondHashes).toEqual(firstHashes)
    expect(second.files).toEqual(first.files)
    expect(second.upstreamOnlyFiles).toEqual(first.upstreamOnlyFiles)
    expect(second.files).toHaveLength(3)
    expect(second.upstreamOnlyFiles).toHaveLength(1)
    expect([...second.files, ...second.upstreamOnlyFiles].every((file) => file.sourceBytes <= 2 * 1024 * 1024)).toBe(true)
    expect(second.files.reduce((sum, file) => sum + file.records, 0)).toBe(11071)
    expect(second.upstreamOnlyFiles.reduce((sum, file) => sum + file.records, 0)).toBe(609)

    for (let index = 0; index < second.files.length; index += 1) {
      const file = second.files[index]
      expect(compareStableIds(file.minColId, file.maxColId)).toBeLessThanOrEqual(0)
      if (index) expect(compareStableIds(second.files[index - 1].maxColId, file.minColId)).toBeLessThan(0)
    }
    const recordsByPath = new Map(second.files.map((file) => [
      file.path,
      gzipJson(join(temporaryRoot, basename(file.path))),
    ]))
    const idsByPath = new Map([...recordsByPath].map(([path, records]) => [path, new Set(records.map((record) => record.colId))]))
    const records = second.files.flatMap((file) => recordsByPath.get(file.path))
    expect(records).toHaveLength(11071)
    expect(new Set(records.map((record) => record.colId)).size).toBe(11071)
    expect(records.every((record, index) => index === 0 || compareStableIds(records[index - 1].colId, record.colId) < 0)).toBe(true)
    for (const record of records) {
      const selected = locateColIdRangeFile(second.files, record.colId)
      expect(selected).not.toBeNull()
      expect(idsByPath.get(selected.path).has(record.colId)).toBe(true)
    }
    expect(locateColIdRangeFile(second.files, '')).toBeNull()
    expect(gzipJson(join(temporaryRoot, basename(second.upstreamOnlyFiles[0].path)))).toHaveLength(609)
    expect(second.lookup.requestPolicy).toContain('sole package file')
    expect(second.futureIntegration.releaseBoundary).toContain('does not edit runtime manifests')
  }, 30_000)
})
