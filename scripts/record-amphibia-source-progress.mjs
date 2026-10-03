import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/caeciliantraits-2025-2026-10-02'
const manifestPath = `${dir}/definitions.manifest.json`
const manifest = JSON.parse(fs.readFileSync(manifestPath))
const zip = fs.readFileSync(`${dir}/supplementaryFiles.zip`)
manifest.entries = manifest.entries.filter(x => x.file !== 'supplementaryFiles.zip')
manifest.entries.push({ file: 'supplementaryFiles.zip', url: 'https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11903681/supplementaryFiles', sha256: crypto.createHash('sha256').update(zip).digest('hex'), byteLength: zip.length, role: 'primary-article-supplementary-files', extractedDefinitionFile: 'trait-definitions.txt', extraction: 'Supplementary Table 1 PDF text extracted using pypdf; original ZIP retained' })
manifest.nonArticleCaptures = [{ file: 'article.html', role: 'publisher-access-challenge-response; not used as article evidence' }]
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
const base = 'docs/amphibia-content'
const read = name => JSON.parse(fs.readFileSync(`${base}/${name}.json`))
const species = read('species-coverage')
const fossil = read('fossil-coverage')
const optional = name => fs.existsSync(`${base}/${name}.json`) ? read(name) : []
const historical = optional('historical-trait-section-coverage')
const additional = optional('additional-trait-section-coverage')
const groups = optional('group-reader-coverage')
const fossilGroups = optional('fossil-group-reader-coverage')
const summary = { scope: { currentColSpecies: species.length, independentPbdbFossilConcepts: fossil.length }, sourceReaders: { amphibio: read('amphibio-source-coverage').length, caecilianTraits: read('caecilian-traits-coverage').length, tadpoleTraits: read('tadpole-traits-coverage').length, morphology: read('morphology-coverage').length }, currentSpeciesWithCandidateSourceLinks: species.filter(x => x.sourceReaderCandidates?.length).length, currentSpeciesWithDistributionLabels: species.filter(x => x.distributionReaderStatus === 'source-linked-geographic-labels').length, currentSpeciesWithReviewedResearchProse: species.filter(x => x.sourceCoverage === 'species-research-partial-with-bilingual-reader').length, fossilsWithExactOccurrences: fossil.filter(x => x.exactOccurrenceCount).length, completeBiologicalSpecies: 0, externalExpertReviews: 0, sourceConceptMappingsCertified: 0, contentPhaseComplete: false, testsRun: false, projectionsGenerated: false, submitted: false, nextWork: ['Resolve taxonomic concepts and measurement units using primary source evidence', 'Author species-specific evidence across remaining biological facets', 'Complete group introductions and reader navigation', 'After authoring, generate projections and registry, run final tests and commit'] }
summary.currentReadersWithHistoricalBiologicalSections = historical.length
summary.historicalBiologicalSections = historical.reduce((n, x) => n + x.biologicalSections, 0)
summary.currentReadersWithAdditionalDepositedSections = additional.length
summary.additionalDepositedBiologicalSections = additional.reduce((n, x) => n + x.biologicalSections, 0)
summary.currentReadersWithAnyDepositedBiologicalSections = new Set([...historical, ...additional].map(x => x.colId)).size
summary.groupReadersWithChildRoutes = groups.filter(x => x.childReadingLinks).length
summary.groupReadersWithHistoricalTraitCounts = groups.filter(x => x.historicalSourceRows).length
summary.fossilGroupReaders = fossilGroups.length
const primaryFossils = optional('primary-fossil-reader-coverage')
summary.fossilSpeciesWithReviewedResearchProse = new Set(primaryFossils.filter(x => x.sourceTaxonId).map(x => x.sourceTaxonId)).size
summary.fossilGroupsWithReviewedResearchProse = new Set(primaryFossils.filter(x => !x.sourceTaxonId).map(x => x.path)).size
summary.fossilResearchSections = primaryFossils.reduce((n, x) => n + x.authoredSections, 0)
const primaryDirectGroups = optional('primary-direct-group-reader-coverage')
summary.currentGroupsWithDirectReviewedResearchProse = new Set(primaryDirectGroups.map(x=>x.colId)).size
summary.directGroupResearchSections = primaryDirectGroups.reduce((n,x)=>n+x.authoredResearchSections,0)
summary.directGroupSelectedReadingRoutes = primaryDirectGroups.reduce((n,x)=>n+(x.selectedReadingRoutes??0),0)
summary.morphologyReadersWithVerifiedCountDefinitions = optional('morphology-count-section-coverage').length
summary.sourceReaders.amphitherm = optional('amphitherm-source-coverage').length
summary.groupReadersWithThermalStudyScope = optional('thermal-group-reader-coverage').length
const revisionFile = `${base}/source-revision-review.json`
summary.amphibioReadersRequiringLaterRevisionReview = fs.existsSync(revisionFile) ? JSON.parse(fs.readFileSync(revisionFile)).sourceReaders.length : 0
fs.writeFileSync(`${base}/progress.json`, JSON.stringify(summary, null, 2) + '\n')
console.log(JSON.stringify(summary))
