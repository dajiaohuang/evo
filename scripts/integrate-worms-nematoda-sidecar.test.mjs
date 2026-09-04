import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import { afterEach, describe, expect, it } from 'vitest'
import { integrateWormsNematoda } from './integrate-worms-nematoda-sidecar.mjs'

const fixtures = []
afterEach(async () => { await Promise.all(fixtures.splice(0).map((path) => rm(path, { recursive: true, force: true }))) })

describe('Nematoda resource-pack integration', () => {
  it('preserves unrelated extensions and collection summary across repeated integration', async () => {
    const root = await mkdtemp(join(tmpdir(), 'worms-nematoda-'))
    fixtures.push(root)
    const pack = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
    await mkdir(pack, { recursive: true })
    const descriptor = {
      schemaVersion: 1, id: 'worms-nematoda-archive-crosswalk', recordType: 'release-pinned-authority-archive-crosswalk',
      provider: 'World Register of Marine Species via ChecklistBank', packageId: 'other-animals', source: { license: 'CC-BY-4.0' },
      counts: { total: 1, accepted: 1, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: 1 },
      files: [{ path: 'worms-nematoda-sidecar-0000.json.gz', records: 1, bytes: 3, sourceBytes: 3, sha256: 'a'.repeat(64), sourceSha256: 'a'.repeat(64) }],
      upstreamOnlyFiles: [{ path: 'worms-nematoda-upstream-only-0000.json.gz', records: 1, bytes: 5, sourceBytes: 5, sha256: 'b'.repeat(64), sourceSha256: 'b'.repeat(64) }],
    }
    const sourceOnly = { path: 'other-upstream.json.gz', bytes: 17, sourceBytes: 19 }
    const unrelated = { id: 'unrelated-authority', files: [{ path: 'other.json.gz', bytes: 11, sourceBytes: 13 }, sourceOnly], upstreamOnlyFiles: [sourceOnly] }
    await writeFile(join(pack, 'worms-nematoda-sidecar.json'), `${JSON.stringify(descriptor)}\n`)
    await writeFile(join(pack, 'manifest.json'), `${JSON.stringify({ packageId: 'other-animals', extensions: [unrelated] })}\n`)
    const collectionPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/manifest.json')
    await mkdir(join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs'), { recursive: true })
    await writeFile(collectionPath, `${JSON.stringify({ packs: [{ packageId: 'other-animals', extensionCount: 1, extensionFileCount: 2 }] })}\n`)

    const first = integrateWormsNematoda({ rootDir: root })
    const firstManifestBytes = await readFile(join(pack, 'manifest.json'))
    const firstCollectionBytes = await readFile(collectionPath)
    const firstManifest = JSON.parse(firstManifestBytes)
    const firstCollection = JSON.parse(firstCollectionBytes)
    expect(firstManifest.extensions.map(({ id }) => id)).toEqual(['unrelated-authority', 'worms-nematoda-archive-crosswalk'])
    expect(firstManifest.extensions[0]).toEqual(unrelated)
    expect(firstCollection.packs[0]).toMatchObject({
      extensionCount: 2, extensionFileCount: 4, extensionCompressedBytes: 36, extensionSourceBytes: 40,
      manifestBytes: firstManifestBytes.length,
      manifestSha256: createHash('sha256').update(firstManifestBytes).digest('hex'),
    })
    const second = integrateWormsNematoda({ rootDir: root })
    expect(second).toEqual(first)
    expect(await readFile(join(pack, 'manifest.json'))).toEqual(firstManifestBytes)
    expect(await readFile(collectionPath)).toEqual(firstCollectionBytes)
  })
})
