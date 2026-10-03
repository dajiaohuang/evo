import fs from 'node:fs'
const base = 'docs/amphibia-content'
const coverage = JSON.parse(fs.readFileSync(`${base}/species-coverage.json`))
const taxa = new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(x => [x.colId, x]))
const references = new Map(JSON.parse(fs.readFileSync(`${base}/primary-reference-leads.json`)).ledger.map(x => [x.colId, x]))
const gaps = coverage.filter(x => !x.sourceReaderCandidates?.length).map(x => {
  const taxon = taxa.get(x.colId), reference = references.get(x.colId)
  const year = /(?:^|\D)(1[7-9]\d{2}|20\d{2})(?:\D|$)/.exec(taxon.authorship ?? '')?.[1] ?? null
  return { colId: x.colId, scientificName: taxon.scientificName, authorship: taxon.authorship, order: taxon.classification.find(y => y.rank === 'order')?.scientificName ?? null, family: taxon.classification.find(y => y.rank === 'family')?.scientificName ?? null, sourceUrl: taxon.sourceUrl, path: x.path, nomenclaturalYearFromRecordedAuthorship: year === null ? null : Number(year), taxonomicBibliographyLead: reference?.originalReferenceRow ?? null, distributionStatus: x.distributionReaderStatus ?? 'no-source-distribution-row', nextWork: 'Locate species description and later biological research, verify actual taxon concepts, then author sourced bilingual biological prose', status: 'open-source-evidence-gap' }
})
const biologicalReaders = new Set(coverage.filter(entry => entry.sourceCoverage === 'species-research-partial-with-bilingual-reader').map(entry => entry.colId))
for (const gap of gaps) gap.partialPrimaryResearchReaderPresent = biologicalReaders.has(gap.colId)
gaps.sort((a, b) => Number(a.partialPrimaryResearchReaderPresent) - Number(b.partialPrimaryResearchReaderPresent) || Number(Boolean(b.taxonomicBibliographyLead)) - Number(Boolean(a.taxonomicBibliographyLead)) || (a.nomenclaturalYearFromRecordedAuthorship ?? 9999) - (b.nomenclaturalYearFromRecordedAuthorship ?? 9999) || a.scientificName.localeCompare(b.scientificName))
fs.writeFileSync(`${base}/priority-source-gaps.json`, JSON.stringify({ note: 'Priority worklist, not a list of taxa without any published biological information. No matching trait reader in the captured sources; nomenclatural year is a search lead and does not date species origins.', species: gaps }, null, 2) + '\n')
console.log(JSON.stringify({ noCapturedTraitCandidate: gaps.length, byOrder: gaps.reduce((a, x) => (a[x.order] = (a[x.order] ?? 0) + 1, a), {}), withTaxonomicBibliographyLead: gaps.filter(x => x.taxonomicBibliographyLead).length }))
