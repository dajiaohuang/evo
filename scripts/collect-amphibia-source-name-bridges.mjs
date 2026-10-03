import fs from 'node:fs'
const corpus = 'data/sources/snapshots/amphibia-primary-corpus-2026-10-02'
const taxa = JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json'))
const byId = new Map(taxa.map(t => [t.colId, t])), byName = new Map(taxa.map(t => [t.scientificName, t]))
const selected = [
  ['PMC12070909', JSON.parse(fs.readFileSync(`${corpus}/PMC12070909/sierra-madre-amphibian-rows.json`)).records.map(r => r.nameAsRecorded)],
  ['PMC10688756', JSON.parse(fs.readFileSync(`${corpus}/PMC10688756/atlantic-life-history-rows.json`)).records.map(r => r.normalizedName)],
  ['PMC12189923', JSON.parse(fs.readFileSync(`${corpus}/PMC12189923/tangjiahe-habitat-rows.json`)).records.map(r => r.nameAsRecorded)],
  ['PMC13024529', JSON.parse(fs.readFileSync(`${corpus}/PMC13024529/pastaza-amphibian-count-rows.json`)).records.filter(r => !r.nameAsRecorded.endsWith(' sp.')).map(r => r.nameAsRecorded)]
]
for (const [pmc, names] of selected) {
  const file = `${corpus}/${pmc}/col26.8-name-bridges.json`
  const output = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : { datasetKey: 316115, version: 'COL26.8', pmcid: pmc, evidenceScope: 'Catalogue nomenclatural usage-to-accepted links; not specimen identity or biological equivalence certification.', records: [] }
  for (const name of names.filter(n => !byName.has(n))) {
    if (output.records.some(r => r.sourceName === name)) continue
    const url = `https://api.checklistbank.org/dataset/316115/nameusage/search?taxonID=PH&rank=species&q=${encodeURIComponent(name)}&limit=100`
    const response = await fetch(url)
    if (!response.ok) throw Error(`Catalogue query ${name}: HTTP ${response.status}`)
    const raw = await response.json()
    const matches = (raw.result ?? []).filter(r => r.usage?.name?.scientificName === name && r.usage.name.rank === 'species' && r.classification?.some(c => c.id === 'PH'))
    const links = matches.map(r => ({ usageId: r.usage.id, usageStatus: r.usage.status, name: r.usage.name.scientificName, authorship: r.usage.name.authorship ?? null, acceptedId: r.usage.status === 'accepted' ? r.usage.id : r.usage.accepted?.id, acceptedName: r.usage.status === 'accepted' ? r.usage.name.scientificName : r.usage.accepted?.name?.scientificName }))
    const pinnedLinks = links.filter(r => r.acceptedId && r.acceptedName && byId.has(r.acceptedId) && byId.get(r.acceptedId).scientificName === r.acceptedName)
    const targets = [...new Set(pinnedLinks.map(r => r.acceptedId))]
    const bridge = targets.length === 1 ? { colId: targets[0], acceptedName: byId.get(targets[0]).scientificName } : null
    output.records.push({ sourceName: name, fetchedAt: new Date().toISOString(), queryUrl: url, queryTotalAsReported: raw.total, rawQueryResult: raw, exactUsageLinks: links, pinnedAcceptedBridge: bridge, status: bridge ? 'returned-exact-usage-has-pinned-accepted-link' : 'unresolved-no-unambiguous-pinned-link-in-returned-usages', searchCompletenessCertified: false, biologicalConceptEquivalenceCertified: false })
    fs.writeFileSync(file, JSON.stringify(output, null, 2) + '\n')
  }
  console.log(JSON.stringify({ pmcid: pmc, namesQueried: output.records.length, pinnedAcceptedLinks: output.records.filter(r => r.pinnedAcceptedBridge).length, unresolved: output.records.filter(r => !r.pinnedAcceptedBridge).map(r => r.sourceName), biologicalConceptEquivalenceCertified: false, testsRun: false }))
}
