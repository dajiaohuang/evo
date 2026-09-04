import { createHash } from 'node:crypto'
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'
import { buildWfoPlantProjections } from './build-wfo-plant-projections.mjs'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const crosswalkPath = join(repositoryRoot, 'data', 'sources', 'wfo-plant-crosswalk-col26.8.json.gz')
const packageIds = ['angiospermae', 'gymnosperms', 'early-land-plants']
const roots = []
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex')

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

describe('WFO projection rebuild preservation', () => {
  it('preserves unrelated extensions, payload bytes and collection supplements across idempotent rebuilds', () => {
    const root = mkdtempSync(join(tmpdir(), 'evo-wfo-rebuild-'))
    roots.push(root)
    const packageRoot = join(root, 'packages', 'plantae')
    const resourcePacksRoot = join(root, 'resource-packs')
    for (const packageId of packageIds) mkdirSync(join(packageRoot, packageId, 'nomenclature'), { recursive: true })
    mkdirSync(join(resourcePacksRoot, 'other-plants'), { recursive: true })

    const independentFiles = {
      descriptor: Buffer.from('independent descriptor'),
      payload: Buffer.from('independent payload'),
      upstream: Buffer.from('independent upstream payload'),
    }
    writeFileSync(join(resourcePacksRoot, 'other-plants', 'authority.json'), independentFiles.descriptor)
    writeFileSync(join(resourcePacksRoot, 'other-plants', 'authority.jsonl.gz'), independentFiles.payload)
    writeFileSync(join(resourcePacksRoot, 'other-plants', 'authority-upstream.jsonl.gz'), independentFiles.upstream)
    const independent = {
      id: 'independent-authority',
      recordType: 'release-pinned-independent-authority',
      files: [{ path: 'other-plants/authority.jsonl.gz', bytes: independentFiles.payload.byteLength, sha256: digest(independentFiles.payload) }],
      upstreamOnlyFiles: [{ path: 'other-plants/authority-upstream.jsonl.gz', bytes: independentFiles.upstream.byteLength, sha256: digest(independentFiles.upstream) }],
    }
    const secondIndependent = { id: 'second-independent-authority', files: independent.files }
    writeFileSync(join(resourcePacksRoot, 'other-plants', 'manifest.json'), `${JSON.stringify({ extensions: [independent, secondIndependent] })}\n`)
    const packs = Object.fromEntries([...packageIds, 'other-plants'].map((packageId) => [packageId, { packageId }]))
    writeFileSync(join(resourcePacksRoot, 'manifest.json'), `${JSON.stringify({ packs: Object.values(packs), authoritativeSupplements: { preexisting: { retained: true } } })}\n`)

    buildWfoPlantProjections({ crosswalkPath, resourcePacksRoot, packageRoot })
    const firstOtherManifest = readFileSync(join(resourcePacksRoot, 'other-plants', 'manifest.json'))
    const firstOther = JSON.parse(firstOtherManifest)
    const firstCollection = JSON.parse(readFileSync(join(resourcePacksRoot, 'manifest.json'), 'utf8'))
    expect(firstOther.extensions.slice(0, 2)).toEqual([independent, secondIndependent])
    expect(firstCollection.authoritativeSupplements.preexisting).toEqual({ retained: true })
    expect(firstCollection.authoritativeSupplements.wfoPlantList).toBeDefined()
    expect(readFileSync(join(resourcePacksRoot, 'other-plants', 'authority.json'))).toEqual(independentFiles.descriptor)
    expect(readFileSync(join(resourcePacksRoot, 'other-plants', 'authority.jsonl.gz'))).toEqual(independentFiles.payload)
    expect(readFileSync(join(resourcePacksRoot, 'other-plants', 'authority-upstream.jsonl.gz'))).toEqual(independentFiles.upstream)

    buildWfoPlantProjections({ crosswalkPath, resourcePacksRoot, packageRoot })
    expect(readFileSync(join(resourcePacksRoot, 'other-plants', 'manifest.json'))).toEqual(firstOtherManifest)
    expect(readFileSync(join(resourcePacksRoot, 'manifest.json'), 'utf8')).toEqual(JSON.stringify(firstCollection, null, 2) + '\n')
  }, 30_000)
})
