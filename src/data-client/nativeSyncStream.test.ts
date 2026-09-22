import { afterEach, expect, it, vi } from 'vitest'
import { openNativeSyncResource, parseNativeSyncLine, resetNativeSyncProgress, streamNativeSyncManifest } from './nativeSyncClient'

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

it.each(['data/../private', 'data/a/../../private', 'data/a?query=x', 'data/a#fragment', 'data/%2e%2e/x', 'data//x', 'data/./x', 'data/a\\b'])('rejects noncanonical resource paths: %s', path => {
  expect(() => parseNativeSyncLine(JSON.stringify({ ...file, path, url: `/v1/resources/${path}` }))).toThrow('valid current full-release descriptor')
})

it('rejects mismatched descriptor URLs and oversized stream lines', async () => {
  expect(() => parseNativeSyncLine(JSON.stringify({ ...file, url: '/v1/resources/data/other.json' }))).toThrow('descriptor')
  const cancel = vi.fn()
  const body = new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode('x'.repeat(65537))) }, cancel })
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, body })))
  await expect(streamNativeSyncManifest()).rejects.toThrow('64 KiB')
  expect(cancel).toHaveBeenCalledOnce()
})

it('rejects inventory overflow before invoking file consumers', async () => {
  const body = new ReadableStream({ start(controller) {
    controller.enqueue(new TextEncoder().encode([ { ...header, totalFiles: 0, totalBytes: 0 }, file ].map(value => JSON.stringify(value)).join('\n')))
    controller.close()
  } })
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, body })))
  const onFile = vi.fn()
  await expect(streamNativeSyncManifest({ onFile })).rejects.toThrow('exceeds its advertised inventory')
  expect(onFile).not.toHaveBeenCalled()
})

it('allows progress reset when browser storage is denied', () => {
  vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => { throw new Error('denied') })
  expect(() => resetNativeSyncProgress()).not.toThrow()
})

it('validates resume offsets, the exact ETag and the returned range before exposing a body', async () => {
  const descriptor = parseNativeSyncLine(JSON.stringify({ ...file, bytes: 10 })) as import('./nativeSyncClient').NativeSyncFileDescriptor
  const fetchMock = vi.fn(async () => new Response('12345', { status: 206, headers: { ETag: `"${file.sha256}"`, 'Content-Range': 'bytes 5-9/10' } }))
  vi.stubGlobal('fetch', fetchMock)
  for (const startByte of [NaN, -1, 2.5, 10]) await expect(openNativeSyncResource({ descriptor, startByte })).rejects.toThrow('offset')
  expect(fetchMock).not.toHaveBeenCalled()
  await expect(openNativeSyncResource({ descriptor, startByte: 5 })).resolves.toMatchObject({ status: 206 })
  fetchMock.mockResolvedValue(new Response('12345', { status: 200, headers: { ETag: `"${'b'.repeat(64)}"` } }))
  await expect(openNativeSyncResource({ descriptor, startByte: 5 })).rejects.toThrow('refresh the manifest')
})
