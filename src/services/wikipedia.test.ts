import { afterEach, expect, it, vi } from 'vitest'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })
it('uses confirmed homonym mappings and a Chinese sitelink when available', async () => {
  const fetcher = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ entries: { Pan: { status: 'matched', title: 'Pan (genus)', zhTitle: '黑猩猩属' } } }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ query: { pages: [{ ns: 0, title: '黑猩猩属', extract: '摘要', fullurl: 'https://zh.wikipedia.org/wiki/黑猩猩属' }] } }) })
  vi.stubGlobal('fetch', fetcher)
  const { wikipediaSummary } = await import('./wikipedia')
  const result = await wikipediaSummary('Pan', 'zh', new AbortController().signal)
  expect(result.status).toBe('ready')
  expect(fetcher.mock.calls[1][0]).toContain('https://zh.wikipedia.org/w/api.php?')
})
it('keeps missing names and non-taxon research routes out of article previews', async () => {
  const fetcher = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ entries: {
    missing: { status: 'missing' }, research: { status: 'not-applicable' },
  } }) })
  vi.stubGlobal('fetch', fetcher)
  const { wikipediaSummary } = await import('./wikipedia')
  expect(await wikipediaSummary('missing', 'en', new AbortController().signal)).toEqual({ status: 'missing' })
  expect(await wikipediaSummary('research', 'en', new AbortController().signal)).toEqual({ status: 'not-applicable' })
  expect(fetcher).toHaveBeenCalledTimes(1)
})
it('rejects a foreign article URL', async () => {
  vi.stubGlobal('fetch', vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ entries: {} }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ query: { pages: [{ ns: 0, title: 'x', extract: 'x', fullurl: 'https://example.com/wiki/x' }] } }) }))
  const { wikipediaSummary } = await import('./wikipedia')
  await expect(wikipediaSummary('x', 'en', new AbortController().signal)).rejects.toThrow('Invalid Wikipedia URL')
})
