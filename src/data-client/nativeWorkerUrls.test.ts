import { afterEach, expect, it, vi } from 'vitest'

afterEach(() => {
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
  vi.resetModules()
})

it.each([
  ['http://localhost/', './data', 'http://localhost/data/releases/test/record.json.gz'],
  ['capacitor://localhost/', './data', 'capacitor://localhost/data/releases/test/record.json.gz'],
  ['https://example.org/evo/', '/evo/data', 'https://example.org/evo/data/releases/test/record.json.gz'],
])('resolves the data root at %s before handing the request to an assets worker', async (baseURI, dataRoot, expected) => {
  vi.resetModules()
  vi.stubEnv('VITE_DATA_ROOT', dataRoot)
  vi.spyOn(document, 'baseURI', 'get').mockReturnValue(baseURI)
  const messages: Array<{ id: number; url: string }> = []
  vi.stubGlobal('Worker', class {
    onmessage?: (event: { data: { id: number; data: string[] } }) => void
    postMessage(message: { id: number; url: string }) {
      messages.push(message)
      queueMicrotask(() => this.onmessage?.({ data: { id: message.id, data: ['loaded'] } }))
    }
  })
  const { loadRuntimeFile } = await import('./staticDataClient')
  await expect(loadRuntimeFile({ url: 'releases/test/record.json.gz' })).resolves.toEqual(['loaded'])
  expect(messages).toHaveLength(1)
  expect(messages[0].url).toBe(expected)
  expect(messages[0].url).not.toContain('/assets/data/')
})
