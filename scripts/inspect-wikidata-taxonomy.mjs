const ids = process.argv.slice(2)
if (!ids.length || ids.some(id => !/^Q\d+$/.test(id))) throw new Error('Provide Wikidata entity IDs')
const url = new URL('https://www.wikidata.org/w/api.php')
for (const [key, value] of Object.entries({ action: 'wbgetentities', format: 'json', props: 'claims|sitelinks', ids: ids.join('|') })) url.searchParams.set(key, value)
const response = await fetch(url, { headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; taxonomy link verification)' }, signal: AbortSignal.timeout(30000) })
if (!response.ok) throw new Error(`Wikidata HTTP ${response.status}`)
const data = await response.json()
for (const id of ids) {
  const entity = data.entities?.[id]
  if (!entity || entity.missing !== undefined) { console.log(JSON.stringify({ id, missing: true })); continue }
  const values = property => (entity.claims?.[property] ?? []).map(claim => claim.mainsnak?.datavalue?.value?.id ?? claim.mainsnak?.datavalue?.value).filter(Boolean)
  console.log(JSON.stringify({ id, name: values('P225'), rank: values('P105'), parent: values('P171'), synonyms: values('P1420'), basionym: values('P566'), catalogueIds: values('P10585'), enTitle: entity.sitelinks?.enwiki?.title ?? null }))
}
