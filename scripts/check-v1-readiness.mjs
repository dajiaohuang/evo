import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { completedReviewStatuses, evaluatePackageReview } from './check-review-freshness.mjs'
import { readJson, rootDir } from './data-lib.mjs'

const registry = readJson('data/registry/package-registry.json')
const entities = readJson('data/registry/entities/entities.json')
const claims = readJson('data/evidence/claims.json')
const references = readJson('data/references.json')
const media = readJson('data/media.json')
const dataManifest = readJson('data/manifest.json')
const stories = readJson('data/stories.json')
const timeScale = readJson('data/time-scale.json')
const requiredPackageFiles = [
  'package.json', 'entities.json', 'taxonomy.json', 'ranges.json', 'query-ledger.json',
  'evidence/claim-ids.json', 'references.json', 'provenance.json', 'media.json', 'stories.json',
  'research-examples.json', 'phylogeny/status.json', 'locales/zh.json', 'review.json',
]
const maturityOrder = ['generated-scaffold', 'structured', 'source-linked', 'curated-draft', 'published']

function sourceText(relativePath) {
  return readFileSync(join(rootDir, relativePath), 'utf8')
}

function gate(id, label, passed, metric, detail) {
  return { id, label, passed, metric, detail }
}

const structurallyComplete = registry.packages.filter((entry) => requiredPackageFiles.every((relativePath) => existsSync(join(rootDir, entry.canonicalPath, relativePath))))
const sourceLinked = registry.packages.filter((entry) => maturityOrder.indexOf(entry.scientificMaturity) >= maturityOrder.indexOf('source-linked'))
const reviews = registry.packages.map((entry) => evaluatePackageReview(entry.id))
const completedReviews = reviews.filter((review) => completedReviewStatuses.has(review.reviewStatus) && review.freshness === 'current')
const dossierEntities = entities.filter((entity) => ['dossier', 'full-profile'].includes(entity.contentLevel))
const claimedEntityIds = new Set(claims.flatMap((claim) => claim.subjectId.startsWith('taxon:') ? [claim.subjectId.slice('taxon:'.length)] : []))
const claimCoveredEntities = entities.filter((entity) => claimedEntityIds.has(entity.id))
const referencesComplete = references.filter((reference) => reference.url && reference.sourceRole && reference.fitnessFor?.length)
const licensedMedia = media.filter((asset) => asset.license && asset.rightsStatus && asset.sourceUrl && asset.creator)
const publishedStories = stories.filter((story) => story.evidenceStatus === 'available-with-limitations')
const publishedStoriesWithClaims = publishedStories.filter((story) => story.steps.every((step) => step.claimLinks?.length))
const queryLedgers = registry.packages.map((entry) => readJson(`${entry.canonicalPath}/query-ledger.json`))
const reproducibleSnapshots = queryLedgers.filter((ledger) => ledger.responseChecksums?.length && ledger.rowsAccepted >= 0 && ledger.selectionMethod)
const packageOpenBlockers = reviews.flatMap((review) => review.openIssues.filter((issue) => /release blocker|\bblocker\b/i.test(issue)).map((issue) => `${review.packageId}: ${issue}`))

const distManifestPath = join(rootDir, 'dist/static-pages-manifest.json')
const staticManifest = existsSync(distManifestPath) ? JSON.parse(readFileSync(distManifestPath, 'utf8')) : null
const staticExpected = {
  taxa: entities.length * 2,
  events: readJson('data/events.json').length * 2,
  stories: publishedStories.length * 2,
  intervals: timeScale.units.length * 2,
  formations: dataManifest.records.formationNames * 2,
  localities: dataManifest.records.fossilCollections * 2,
  traits: dataManifest.records.traitTerms * 2,
  references: references.length * 2,
  media: media.length * 2,
}
const staticComplete = staticManifest && Object.entries(staticExpected).every(([kind, count]) => staticManifest.pages?.[kind] === count)

const explorerSource = sourceText('src/components/explorer/ExplorerWorkspace.tsx') + sourceText('src/components/tree/EvoTree.tsx')
const labSource = sourceText('src/components/workbench/WorkbenchPages.tsx') + sourceText('src/components/workbench/LocalResearchWorkspace.tsx') + sourceText('src/services/localSql.ts')
const storySource = sourceText('src/components/catalog/StoryStudio.tsx')
const crossBrowserSource = sourceText('playwright.config.ts') + sourceText('tests/e2e/cross-browser.spec.ts')
const qualitySource = sourceText('tests/e2e/atlas.spec.ts') + sourceText('tests/e2e/visual-contracts.spec.ts')

const gates = [
  gate('packages-structured', '24/24 package structures complete', structurallyComplete.length === 24 && registry.packages.length === 24, `${structurallyComplete.length}/${registry.packages.length}`, requiredPackageFiles.join(', ')),
  gate('packages-source-linked', '24/24 packages at least source-linked', sourceLinked.length === 24, `${sourceLinked.length}/${registry.packages.length}`, 'Scientific maturity is evidence-bearing content state, not structural validation.'),
  gate('reviews-current', '24/24 maintainer reviews current', completedReviews.length === 24, `${completedReviews.length}/${registry.packages.length}`, 'A review is counted only when reviewed/reviewed-with-caveats and bound to the current content digest.'),
  gate('entity-dossiers', 'All registry entities expose standard dossiers', dossierEntities.length === entities.length, `${dossierEntities.length}/${entities.length}`, 'Registry-only entries do not satisfy this gate.'),
  gate('claim-traceability', 'Every entity has claim-level scientific traceability', claimCoveredEntities.length === entities.length, `${claimCoveredEntities.length}/${entities.length}`, 'Reference presence alone does not substitute for a claim-to-source relation.'),
  gate('static-publication', 'All bilingual static Catalog pages generated', Boolean(staticComplete), staticManifest ? `${Object.values(staticExpected).reduce((sum, count) => sum + count, 0)} expected detail pages` : 'build required', JSON.stringify(staticExpected)),
  gate('rights-metadata', 'Reference metadata and media licenses complete', referencesComplete.length === references.length && licensedMedia.length === media.length, `${referencesComplete.length}/${references.length} references; ${licensedMedia.length}/${media.length} media`, 'References require source role and fitness; media require creator, source, license and rights status.'),
  gate('snapshot-reproducibility', 'All package occurrence snapshots are reproducible', reproducibleSnapshots.length === registry.packages.length, `${reproducibleSnapshots.length}/${registry.packages.length}`, 'Query ledgers retain sampling method, accepted rows and response checksums.'),
  gate('product-surfaces', 'Explorer, Compare, Lab and Stories roadmap surfaces implemented', /Newick/.test(explorerSource) && /currentAgeUnit/.test(explorerSource) && /DuckDB-Wasm/.test(labSource) && /Export Parquet/.test(labSource) && /Story Builder/.test(storySource), 'implemented', 'This source-level gate is supplemented by unit, Playwright and manual browser checks.'),
  gate('published-story-evidence', 'Every published story step links evidence claims', publishedStoriesWithClaims.length === publishedStories.length, `${publishedStoriesWithClaims.length}/${publishedStories.length}`, 'Evidence-incomplete drafts remain unpublished.'),
  gate('cross-browser-contract', 'Chromium, Firefox and WebKit smoke configured', /chromium/.test(crossBrowserSource) && /firefox-smoke/.test(crossBrowserSource) && /webkit-smoke/.test(crossBrowserSource), '3 browser projects', 'Passing status is established by npm run test:e2e, not by configuration alone.'),
  gate('accessibility-visual-offline', 'Accessibility, visual, keyboard, offline and version tests exist', /AxeBuilder/.test(qualitySource) && /keyboard/.test(qualitySource) && /toHaveScreenshot/.test(qualitySource) && /caches/.test(qualitySource) && /dataset version/i.test(qualitySource), 'contract present', 'Passing status is established by npm run verify.'),
  gate('release-blockers', 'Zero declared unresolved release blockers', packageOpenBlockers.length === 0, String(packageOpenBlockers.length), packageOpenBlockers.join('; ') || 'None declared in package review records.'),
]

const report = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  datasetVersion: registry.version,
  readyForV1: gates.every((entry) => entry.passed),
  passedGates: gates.filter((entry) => entry.passed).length,
  totalGates: gates.length,
  gates,
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(report, null, 2))
} else {
  console.log(`Evo Atlas v1 readiness: ${report.passedGates}/${report.totalGates} gates pass; ready=${report.readyForV1 ? 'yes' : 'no'}`)
  for (const entry of gates) console.log(`${entry.passed ? '✓' : '✗'} ${entry.label}: ${entry.metric}`)
  if (!report.readyForV1) console.log('This is an honest readiness report, not a v1 release declaration. Human review and scientific enrichment cannot be inferred from automated validation.')
}

if (process.argv.includes('--strict') && !report.readyForV1) process.exitCode = 1
