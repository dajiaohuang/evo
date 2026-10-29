export interface WikipediaEntry {
  status: 'matched' | 'missing' | 'ambiguous' | 'not-applicable'
  title?: string
  url?: string
  zhTitle?: string
  scope?: string
}
interface WikipediaMapping { entries: Record<string, WikipediaEntry> }
let mappingPromise: Promise<WikipediaMapping> | undefined

export function loadWikipediaMapping() {
  if (!mappingPromise) mappingPromise = fetch(`${import.meta.env.BASE_URL}wikipedia/mapping.json`)
    .then(async response => {
      if (!response.ok) throw new Error('Wikipedia mapping unavailable')
      return await response.json() as WikipediaMapping
    }).catch(error => { mappingPromise = undefined; throw error })
  return mappingPromise
}

export async function wikipediaSummary(name: string, language: string, signal: AbortSignal) {
  const mapping = await loadWikipediaMapping()
  const entry = mapping.entries[name]
  if (entry && entry.status !== 'matched') return { status: entry.status } as const
  const locale = language === 'zh' && entry?.zhTitle ? 'zh' : 'en'
  const title = locale === 'zh' ? entry!.zhTitle! : entry?.title ?? name
  const query = new URLSearchParams({ action: 'query', origin: '*', format: 'json', formatversion: '2', redirects: '1', titles: title,
    prop: 'extracts|info|pageprops', exintro: '1', explaintext: '1', inprop: 'url' })
  const response = await fetch(`https://${locale}.wikipedia.org/w/api.php?${query}`, { signal })
  if (response.status === 404) return { status: 'missing' } as const
  if (!response.ok) throw new Error('Wikipedia unavailable')
  const payload = await response.json()
  const data = payload.query?.pages?.[0]
  if (!data || data.missing) return { status: 'missing' } as const
  if (Object.hasOwn(data.pageprops ?? {}, 'disambiguation') || !data.extract || data.ns !== 0) return { status: 'ambiguous' } as const
  const url = new URL(data.fullurl)
  if (url.origin !== `https://${locale}.wikipedia.org` || !url.pathname.startsWith('/wiki/')) throw new Error('Invalid Wikipedia URL')
  return { status: 'ready', title: String(data.title), extract: String(data.extract), url: url.href, locale, scope: entry?.scope } as const
}
