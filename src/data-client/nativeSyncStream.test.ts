import { afterEach, expect, it, vi } from 'vitest'
import { streamNativeSyncManifest } from './nativeSyncClient'

vi.mock('./backendClient', () => ({ backendUrl: (path: string) => `https://api.test${path}`, isBackendConfigured: () => true }))
vi.mock('../platform/frontendContract', () => ({ frontendContract: { native: true } }))
afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks() })
const header = { kind: 'manifest', schemaVersion: 1, apiVersion: 'v1', protocolVersion: 'v1', datasetVersion: 'test', releaseVersion: 'test', profile: 'full', complete: true, totalFiles: 2, totalBytes: 4, resourceBase: '/v1/resources/' }
const file = { kind: 'file', path: 'data/test.json', profile: 'full', bytes: 2, sha256: 'a'.repeat(64), mediaType: 'application/json', encoding: 'identity', releaseVersion: 'test', url: '/v1/resources/data/test.json' }

it('rejects duplicate paths even when their counts and byte totals match the header, then cancels the stream', async () => {
  const cancel = vi.fn()
  const body = new ReadableStream({ start(controller) {
    controller.enqueue(new TextEncoder().encode([header, file, file].map((value) => JSON.stringify(value)).join('\n') + '\n'))
  }, cancel })
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, body })))
  await expect(streamNativeSyncManifest()).rejects.toThrow('duplicate resource path')
  expect(cancel).toHaveBeenCalledTimes(1)
  expect(body.locked).toBe(false)
})

it('finishes verified manifest consumption when progress storage is unavailable', async () => {
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota') })
  const body = new ReadableStream({ start(controller) {
    controller.enqueue(new TextEncoder().encode(JSON.stringify({ ...header, totalFiles: 0, totalBytes: 0 })))
    controller.close()
  } })
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, body })))
  await expect(streamNativeSyncManifest()).resolves.toMatchObject({ status: 'ready', filesSeen: 0 })
  expect(body.locked).toBe(false)
})
