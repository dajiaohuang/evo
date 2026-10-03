import fs from 'node:fs'
import crypto from 'node:crypto'
const discovery = JSON.parse(fs.readFileSync('docs/amphibia-content/primary-literature-discovery.json'))
const papers = new Map()
for (const species of discovery.species) for (const paper of species.fullTextCandidates) {
  if (paper.isOpenAccess !== 'Y') continue
  if (!papers.has(paper.pmcid)) papers.set(paper.pmcid, { ...paper, speciesLeads: [] })
  papers.get(paper.pmcid).speciesLeads.push({ colId: species.colId, scientificName: species.scientificName })
}
const queue = [...papers.values()], root = 'data/sources/snapshots/amphibia-primary-corpus-2026-10-02'
fs.mkdirSync(root, { recursive: true })
let cursor = 0, captured = 0
async function worker() {
  while (cursor < queue.length) {
    const paper = queue[cursor++], dir = `${root}/${paper.pmcid}`
    if (fs.existsSync(`${dir}/article.xml`)) continue
    const sourceUrl = `https://www.ebi.ac.uk/europepmc/webservices/rest/${paper.pmcid}/fullTextXML`
    try {
      const response = await fetch(sourceUrl, { signal: AbortSignal.timeout(45000) })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const bytes = Buffer.from(await response.arrayBuffer())
      if (!bytes.toString('utf8').includes('<article')) throw new Error('Not article XML')
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(`${dir}/article.xml`, bytes)
      fs.writeFileSync(`${dir}/manifest.json`, JSON.stringify({ ...paper, sourceUrl, capturedAt: new Date().toISOString(), sha256: crypto.createHash('sha256').update(bytes).digest('hex'), byteLength: bytes.length, articleRead: false, licenseVerified: false, publishFullText: false, candidateNamesAreNotEvidenceOfConceptEquivalence: true }, null, 2) + '\n')
      captured++
      if (captured % 25 === 0) console.log(JSON.stringify({ newlyCaptured: captured, queued: queue.length }))
    } catch (error) {
      fs.appendFileSync(`${root}/failed-requests.jsonl`, JSON.stringify({ pmcid: paper.pmcid, sourceUrl, attemptedAt: new Date().toISOString(), error: error.message }) + '\n')
    }
  }
}
await Promise.all(Array.from({ length: 3 }, worker))
const ledger = queue.map(paper => ({ pmcid: paper.pmcid, doi: paper.doi, title: paper.title, speciesLeads: paper.speciesLeads, captured: fs.existsSync(`${root}/${paper.pmcid}/article.xml`), manifestFile: `${root}/${paper.pmcid}/manifest.json`, articleRead: false, licenseVerified: false }))
fs.writeFileSync('docs/amphibia-content/primary-corpus-capture.json', JSON.stringify({ note: 'Open-access-index candidates captured for local reading only. Article-level rights and actual species claims must be read before authorship or full-text publication.', queuedArticles: queue.length, capturedArticles: ledger.filter(p => p.captured).length, articles: ledger }, null, 2) + '\n')
console.log(JSON.stringify({ queuedArticles: queue.length, capturedArticles: ledger.filter(p => p.captured).length, testsRun: false }))
