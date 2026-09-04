import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { writeResourcePacks } from './build-package-species-coverage.mjs'

const roots = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

describe('baseline resource-pack writer', () => {
  it('preserves independent authority descriptors, files and upstream-only files in a pinned release', () => {
    const root = mkdtempSync(join(tmpdir(), 'evo-resource-pack-baseline-'))
    roots.push(root)
    const registryRoot = join(root, 'registry')
    const resourcePacksRoot = join(root, 'resource-packs')
    mkdirSync(registryRoot, { recursive: true })
    mkdirSync(join(resourcePacksRoot, 'bacteria'), { recursive: true })
    mkdirSync(join(resourcePacksRoot, 'archaea'), { recursive: true })
    for (const packageId of ['viruses', 'fungi', 'protists-chromists', 'other-plants', 'other-animals']) {
      mkdirSync(join(resourcePacksRoot, packageId), { recursive: true })
    }
    writeFileSync(join(registryRoot, 'sources.json'), JSON.stringify([{ datasetId: '1014' }]))
    const sourceManifest = {
      releaseAlias: 'COL26.8',
      releaseDate: '2026-08-20',
      checklistBankDatasetKey: 316115,
      sourceChecklists: { path: 'sources.json', count: 1 },
    }
    const authority = {
      id: 'independent-authority',
      files: [{ path: 'bacteria/authority-000.jsonl.gz', records: 1, bytes: 9, sourceBytes: 11 }],
      upstreamOnlyFiles: [{ path: 'bacteria/authority-upstream-000.jsonl.gz', records: 1, bytes: 8, sourceBytes: 12 }],
    }
    const packageUpstreamOnlyFiles = [{ path: 'bacteria/package-upstream-only.jsonl.gz', records: 1 }]
    writeFileSync(join(resourcePacksRoot, 'bacteria', 'manifest.json'), JSON.stringify({ extensions: [authority], upstreamOnlyFiles: packageUpstreamOnlyFiles, independentSourceNote: 'retain this source annotation' }))
    writeFileSync(join(resourcePacksRoot, 'archaea', 'manifest.json'), JSON.stringify({ extensions: [
      { id: 'source-before', files: [] }, { id: 'lpsn-identifiers', obsoleteOwnedField: true }, { id: 'source-after', files: [] },
    ] }))
    writeFileSync(join(resourcePacksRoot, 'bacteria', 'authority-extension.json'), 'descriptor')
    writeFileSync(join(resourcePacksRoot, 'bacteria', 'authority-000.jsonl.gz'), 'authority')
    writeFileSync(join(resourcePacksRoot, 'bacteria', 'authority-upstream-000.jsonl.gz'), 'upstream')
    writeFileSync(join(resourcePacksRoot, 'bacteria', 'species-999.jsonl.gz'), 'stale baseline')
    writeFileSync(join(resourcePacksRoot, 'collection-owned-file'), 'keep')
    writeFileSync(join(resourcePacksRoot, 'manifest.json'), JSON.stringify({ authoritativeSupplements: { owner: 'independent-authority' }, packs: [] }))

    const resourcePackRecords = Object.fromEntries([
      'viruses', 'archaea', 'bacteria', 'fungi', 'protists-chromists', 'other-plants', 'other-animals',
    ].map((packageId) => [packageId, []]))
    const packageCounts = Object.fromEntries(Object.keys(resourcePackRecords).map((packageId) => [packageId, 0]))
    const options = {
      resourcePacksRoot,
      registryRoot,
      sourceManifest,
      resourcePackRecords,
      packageCounts,
      archaeaLpsnCrosswalk: { snapshot: { records: [], source: { sourceDatasetKey: 2015 } }, bytes: Buffer.from('{}') },
    }
    writeResourcePacks(options)

    const nextBacteriaManifest = JSON.parse(readFileSync(join(resourcePacksRoot, 'bacteria', 'manifest.json'), 'utf8'))
    expect(nextBacteriaManifest.extensions).toEqual([authority])
    expect(nextBacteriaManifest.upstreamOnlyFiles).toEqual(packageUpstreamOnlyFiles)
    expect(nextBacteriaManifest.independentSourceNote).toBe('retain this source annotation')
    expect(existsSync(join(resourcePacksRoot, 'bacteria', 'authority-extension.json'))).toBe(true)
    expect(readFileSync(join(resourcePacksRoot, 'bacteria', 'authority-000.jsonl.gz'), 'utf8')).toBe('authority')
    expect(readFileSync(join(resourcePacksRoot, 'bacteria', 'authority-upstream-000.jsonl.gz'), 'utf8')).toBe('upstream')
    expect(existsSync(join(resourcePacksRoot, 'bacteria', 'species-999.jsonl.gz'))).toBe(false)
    expect(readFileSync(join(resourcePacksRoot, 'collection-owned-file'), 'utf8')).toBe('keep')
    const collectionPath = join(resourcePacksRoot, 'manifest.json')
    const firstCollection = readFileSync(collectionPath, 'utf8')
    const collection = JSON.parse(firstCollection)
    expect(collection.authoritativeSupplements).toEqual({ owner: 'independent-authority' })
    expect(collection.packs.find((pack) => pack.packageId === 'bacteria')).toMatchObject({
      extensionCount: 1, extensionFileCount: 2, extensionCompressedBytes: 17, extensionSourceBytes: 23,
    })
    const archaea = JSON.parse(readFileSync(join(resourcePacksRoot, 'archaea', 'manifest.json'), 'utf8'))
    expect(archaea.extensions.map((extension) => extension.id)).toEqual(['source-before', 'lpsn-identifiers', 'source-after'])
    expect(archaea.extensions[1]).not.toHaveProperty('obsoleteOwnedField')
    writeResourcePacks(options)
    expect(readFileSync(collectionPath, 'utf8')).toBe(firstCollection)
  })
})
