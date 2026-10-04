import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/amphibia-literature-discovery-2026-10-02'
fs.mkdirSync(dir, { recursive: true })
const gaps = JSON.parse(fs.readFileSync('docs/amphibia-content/priority-source-gaps.json')).species
let cursor = 0, newlySearched = 0
async function worker() {
  while (cursor < gaps.length) {
    const gap = gaps[cursor++], file = `${dir}/${gap.colId}.json`
    if (fs.existsSync(file)) continue
    const query = `"${gap.scientificName}"`
    const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(query)}&format=json&pageSize=100&resultType=core`
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const raw = Buffer.from(await response.arrayBuffer()), data = JSON.parse(raw)
      fs.writeFileSync(file, JSON.stringify({ colId: gap.colId, scientificName: gap.scientificName, capturedAt: new Date().toISOString(), query, sourceUrl: url, responseSha256: crypto.createHash('sha256').update(raw).digest('hex'), hitCount: data.hitCount, nextCursorMark: data.nextCursorMark ?? null, pageSize: 100, completeResultPagination: data.hitCount <= 100, articleEvidenceRead: false, taxonConceptEquivalenceCertified: false, resultList: data.resultList }, null, 2) + '\n')
      newlySearched++
      if (newlySearched % 50 === 0) console.log(JSON.stringify({ newlySearched, lastSpecies: gap.scientificName }))
    } catch (error) {
      fs.appendFileSync(`${dir}/failed-requests.jsonl`, JSON.stringify({ colId: gap.colId, scientificName: gap.scientificName, sourceUrl: url, attemptedAt: new Date().toISOString(), error: error.message }) + '\n')
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker))
const ledger = gaps.filter(gap => fs.existsSync(`${dir}/${gap.colId}.json`)).map(gap => {
  const record = JSON.parse(fs.readFileSync(`${dir}/${gap.colId}.json`))
  return { colId: gap.colId, scientificName: gap.scientificName, hitCount: record.hitCount, completeResultPagination: record.completeResultPagination, sourceRecord: `${dir}/${gap.colId}.json`, fullTextCandidates: (record.resultList?.result ?? []).filter(result => result.pmcid).map(result => ({ pmcid: result.pmcid, doi: result.doi ?? null, title: result.title, publicationYear: result.pubYear, isOpenAccess: result.isOpenAccess, fullTextRead: false })) }
})
fs.writeFileSync('docs/amphibia-content/primary-literature-discovery.json', JSON.stringify({ scope: 'Current accepted species without a candidate in captured trait sources', note: 'Literal-name index searches are discovery leads only. Zero index hits do not establish absence of published research; returned mentions do not establish species-specific evidence or current concept equivalence. Original response result fields retained; result pagination status recorded separately.', searchedSpecies: ledger.length, unsearchedSpecies: gaps.length - ledger.length, species: ledger }, null, 2) + '\n')
console.log(JSON.stringify({ searchedSpecies: ledger.length, unsearchedSpecies: gaps.length - ledger.length, withIndexHits: ledger.filter(item => item.hitCount > 0).length, withFullTextCandidates: ledger.filter(item => item.fullTextCandidates.length).length, authoringComplete: false }))
