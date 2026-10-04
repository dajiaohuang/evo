import fs from 'node:fs'
const root = 'data/sources/snapshots/amphibia-primary-corpus-2026-10-02'
const queueFile = 'docs/amphibia-content/primary-section-reading-queue.json'
const queue = JSON.parse(fs.readFileSync(queueFile))
const scopes = new Map()
const fossilScopes = new Map()
const groupScopes = new Map()
for (const article of queue.articles) {
  const manifest = JSON.parse(fs.readFileSync(`${root}/${article.pmcid}/manifest.json`))
  const readScopes = manifest.readScopes ?? []
  const fossilReadScopes = manifest.fossilReadScopes ?? []
  const groupReadScopes = manifest.groupReadScopes ?? []
  article.articlePartiallyRead = readScopes.length > 0 || fossilReadScopes.length > 0 || groupReadScopes.length > 0
  article.fullArticleRead = false
  article.articleRead = article.articlePartiallyRead
  article.readScopes = readScopes
  article.fossilReadScopes = fossilReadScopes
  article.groupReadScopes = groupReadScopes
  article.articleLicenseReviewed = manifest.licenseVerified === true
  scopes.set(article.pmcid, readScopes)
  fossilScopes.set(article.pmcid, fossilReadScopes)
  groupScopes.set(article.pmcid, groupReadScopes)
}
for (const species of queue.species) for (const lead of species.articleSectionLeads) {
  lead.recordedSpeciesReadScopes = (scopes.get(lead.pmcid) ?? []).filter(scope => scope.colId === species.colId).map(scope => scope.readScope)
  lead.sectionEvidenceRead = false
  lead.sectionReviewNote = 'Article has the explicitly recorded read scopes, if listed. Reading every paragraph in this indexed section and assigning all claims is not certified by a scope label.'
}
const acceptedSpecies = new Set(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(species => species.colId))
const recordedSpecies = new Set([...scopes.values()].flatMap(readScopes => readScopes.map(scope => scope.colId)).filter(colId => acceptedSpecies.has(colId)))
const indexedSpecies = new Set(queue.species.filter(species => species.articleSectionLeads.some(lead => lead.recordedSpeciesReadScopes.length)).map(species => species.colId))
queue.recordedReadScopeSpeciesWithoutIndexedLead = [...recordedSpecies].filter(colId => !indexedSpecies.has(colId)).sort()
queue.progress = { partiallyReadArticles: queue.articles.filter(article => article.articlePartiallyRead).length, articlesWithVerifiedLicense: queue.articles.filter(article => article.articleLicenseReviewed).length, speciesWithRecordedReadScopes: recordedSpecies.size, speciesWithIndexedLeadReadScopes: indexedSpecies.size, recordedReadScopeSpeciesWithoutIndexedLead: queue.recordedReadScopeSpeciesWithoutIndexedLead.length, fullArticlesCertifiedRead: 0, fullBiologicalReadersCertifiedComplete: 0 }
queue.progress.fossilSpeciesWithRecordedReadScopes = new Set([...fossilScopes.values()].flatMap(x => x.map(s => s.sourceTaxonId)).filter(Boolean)).size
queue.progress.fossilGroupsWithRecordedReadScopes = new Set([...fossilScopes.values()].flatMap(x => x.filter(s => !s.sourceTaxonId).map(s => s.targetPath))).size
queue.progress.currentGroupsWithDirectRecordedReadScopes = new Set([...groupScopes.values()].flatMap(x=>x.map(s=>s.colId))).size
fs.writeFileSync(queueFile, JSON.stringify(queue, null, 2) + '\n')
const captureFile = 'docs/amphibia-content/primary-corpus-capture.json'
const capture = JSON.parse(fs.readFileSync(captureFile))
for (const article of capture.articles) {
  const status = queue.articles.find(item => item.pmcid === article.pmcid)
  article.articleRead = status?.articlePartiallyRead ?? false
  article.fullArticleRead = false
  article.readScopes = status?.readScopes ?? []
  article.fossilReadScopes = status?.fossilReadScopes ?? []
  article.groupReadScopes = status?.groupReadScopes ?? []
  article.licenseVerified = status?.articleLicenseReviewed ?? false
}
fs.writeFileSync(captureFile, JSON.stringify(capture, null, 2) + '\n')
console.log(JSON.stringify(queue.progress))
