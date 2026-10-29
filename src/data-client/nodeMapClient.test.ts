import { webcrypto, createHash } from 'node:crypto'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'

const digest = (text: string) => createHash('sha256').update(text).digest('hex')
const memberText = JSON.stringify({ revision: 'v1', treeRevision: 'tree', members: { 'txn:1': ['txn:1'] } })
const frameText = JSON.stringify({ revision: 'v1', treeRevision: 'tree', coverage: 'bounded-sample', truncated: true, records: [] })
const manifest = { schemaVersion: 1, revision: 'v1', treeRevision: 'tree', modelRevision: 'model', referenceFrame: 'mantle', anchorPlateId: 0,
  coverage: 'bounded-sample', nodes: [{ id: 'txn:1', name: 'Taxon', recordCount: 0 }],
  members: { url: 'frames/v1/members.json', sha256: digest(memberText) },
  frames: [10, 20].map(ageMa => ({ ageMa, url: `frames/v1/${ageMa}.json`, sha256: digest(frameText), coastlineSha256: 'a'.repeat(64) })) }
const mockFetch = vi.fn()
beforeEach(() => {
  vi.resetModules()
  mockFetch.mockReset()
  vi.stubGlobal('crypto', webcrypto)
  vi.stubGlobal('fetch', mockFetch)
  mockFetch.mockImplementation(async (url: string) => new Response(url.endsWith('/manifest.json')
    ? JSON.stringify(manifest) : url.endsWith('/members.json') ? memberText : frameText))
})
afterEach(() => { vi.unstubAllGlobals() })

it('verifies and shares membership once across multiple age frames', async () => {
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  const [first, second] = await Promise.all(loaded.frames.map(frame => client.loadNodeMapFrame(loaded, frame)))
  expect(first.members).toEqual({ 'txn:1': ['txn:1'] })
  expect(second.members).toBe(first.members)
  expect(mockFetch.mock.calls.filter(([url]) => String(url).endsWith('/members.json'))).toHaveLength(1)
})
it('rejects corrupted bytes and allows a clean retry', async () => {
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  mockFetch.mockImplementationOnce(async () => new Response('corrupted'))
  await expect(client.loadNodeMapFrame(loaded, loaded.frames[0])).rejects.toThrow('checksum mismatch')
  await expect(client.loadNodeMapFrame(loaded, loaded.frames[0])).resolves.toMatchObject({ revision: 'v1' })
})
it('rejects paths outside the node-map asset root', async () => {
  const client = await import('./nodeMapClient')
  mockFetch.mockResolvedValueOnce(new Response(JSON.stringify({ ...manifest, members: { ...manifest.members, url: '../secret.json' } })))
  await expect(client.loadNodeMapManifest()).rejects.toThrow('Invalid node map membership')
})
it('rejects a checksum-valid file with a stale revision', async () => {
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  const old = JSON.stringify({ ...JSON.parse(frameText), treeRevision: 'old' })
  mockFetch.mockImplementationOnce(async () => new Response(old))
  await expect(client.loadNodeMapFrame(loaded, { ...loaded.frames[0], sha256: digest(old) })).rejects.toThrow('version mismatch')
})
