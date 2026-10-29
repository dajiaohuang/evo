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

function splitFixture() {
  const buckets: Record<string, Array<{ url: string; sha256: string }>> = {}
  const files = new Map<string, string>()
  for (let i = 0; i < 256; i++) {
    const bucket = i.toString(16).padStart(2, '0')
    const members = Object.fromEntries(['txn:1', 'txn:2'].filter(id => digest(id).startsWith(bucket)).map(id => [id, [id]]))
    const text = JSON.stringify({ revision: 'v1', treeRevision: 'tree', members })
    const url = `members/${bucket}.json`
    files.set(url, text)
    buckets[bucket] = [{ url, sha256: digest(text) }]
  }
  const parts = ['txn:1', 'txn:2'].map((nodeId, i) => {
    const text = JSON.stringify({ revision: 'v1', treeRevision: 'tree', coverage: 'bounded-sample', truncated: false,
      records: [{ id: `occ:${i}`, nodeId, sourceId: 'source', kind: 'fossil-occurrence', age: null, reconstruction: null }] })
    const url = `parts/${i}.json`
    files.set(url, text)
    return { url, sha256: digest(text), records: 1 }
  })
  const value = { ...manifest, memberBuckets: buckets, frames: [{ ...manifest.frames[0], parts, recordCount: 2, truncated: false }] }
  mockFetch.mockImplementation(async (url: string) => {
    if (url.endsWith('/manifest.json')) return new Response(JSON.stringify(value))
    const key = url.split('node-map/')[1]
    if (!files.has(key)) throw new Error(`Unexpected download: ${key}`)
    return new Response(files.get(key))
  })
  return { value, files }
}

it('loads only the selected member bucket and reuses frame records when switching nodes', async () => {
  splitFixture()
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  const first = await client.loadNodeMapFrame(loaded, loaded.frames[0], 'txn:1')
  const second = await client.loadNodeMapFrame(loaded, loaded.frames[0], 'txn:2')
  expect(first.members).toEqual({ 'txn:1': ['txn:1'] })
  expect(second.members).toEqual({ 'txn:2': ['txn:2'] })
  expect(first.records).toBe(second.records)
  expect(first.records).toHaveLength(2)
  expect(mockFetch.mock.calls.filter(([url]) => String(url).includes('/parts/'))).toHaveLength(2)
  expect(mockFetch.mock.calls.filter(([url]) => String(url).includes('/members/'))).toHaveLength(2)
})

it('rejects corrupt split content and reloads it on retry', async () => {
  const { files } = splitFixture()
  const original = files.get('parts/1.json')!
  files.set('parts/1.json', 'corrupt')
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  await expect(client.loadNodeMapFrame(loaded, loaded.frames[0], 'txn:1')).rejects.toThrow('checksum')
  files.set('parts/1.json', original)
  await expect(client.loadNodeMapFrame(loaded, loaded.frames[0], 'txn:1')).resolves.toMatchObject({ records: [{ id: 'occ:0' }, { id: 'occ:1' }] })
})

it('rejects a validly hashed part from a different tree', async () => {
  const { value, files } = splitFixture()
  const text = JSON.stringify({ ...JSON.parse(files.get('parts/1.json')!), treeRevision: 'wrong' })
  files.set('parts/1.json', text)
  value.frames[0].parts[1].sha256 = digest(text)
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  await expect(client.loadNodeMapFrame(loaded, loaded.frames[0], 'txn:1')).rejects.toThrow('part mismatch')
})

it('preserves bounded-sample truncation on an empty frame without downloading records', async () => {
  const { value } = splitFixture()
  value.frames[0].parts = []
  value.frames[0].recordCount = 0
  value.frames[0].truncated = true
  const client = await import('./nodeMapClient')
  const loaded = await client.loadNodeMapManifest()
  await expect(client.loadNodeMapFrame(loaded, loaded.frames[0], 'txn:1')).resolves.toMatchObject({ records: [], truncated: true })
  expect(mockFetch.mock.calls.some(([url]) => String(url).includes('/parts/'))).toBe(false)
})
