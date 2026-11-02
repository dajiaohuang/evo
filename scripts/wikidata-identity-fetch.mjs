// Respect Wikidata backoff without discarding a partially fetched batch.
export async function fetchWikidata(url) {
  for (let attempt = 0; attempt < 6; attempt++) {
    let response
    try {
      response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxon identity checks)' }, signal: AbortSignal.timeout(30000) })
    } catch (error) {
      if (attempt === 5) throw error
      await new Promise(resolve => setTimeout(resolve, 10000 * (attempt + 1)))
      continue
    }
    if (response.status === 429 || response.status === 503) {
      const retry = response.headers.get('retry-after')
      const seconds = retry && /^\d+$/.test(retry) ? Number(retry) : retry && Number.isFinite(Date.parse(retry)) ? Math.max(1, Math.ceil((Date.parse(retry) - Date.now()) / 1000)) : 120
      if (attempt === 5) throw new Error(`Wikidata HTTP ${response.status}; retry after ${seconds}s`)
      console.log(JSON.stringify({ status: 'wikidata-backoff', http: response.status, seconds }))
      await new Promise(resolve => setTimeout(resolve, Math.max(1, seconds) * 1000))
      continue
    }
    if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}`)
    const data = await response.json()
    if (data.error?.code === 'maxlag') {
      const seconds = Number(response.headers.get('retry-after')) || 60
      if (attempt === 5) throw new Error(`Wikidata maxlag; retry after ${seconds}s`)
      console.log(JSON.stringify({ status: 'wikidata-backoff', code: 'maxlag', seconds }))
      await new Promise(resolve => setTimeout(resolve, seconds * 1000))
      continue
    }
    if (data.error) throw new Error(`Wikidata API ${JSON.stringify(data.error)}`)
    return data
  }
}
