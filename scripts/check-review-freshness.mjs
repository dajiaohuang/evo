import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readJson, rootDir } from './data-lib.mjs'

export const reviewStatuses = ['not-reviewed', 'in-review', 'reviewed-with-caveats', 'reviewed']
export const completedReviewStatuses = new Set(['reviewed-with-caveats', 'reviewed'])

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonicalize(value[key])]))
  }
  return value
}

function jsonBytes(value) {
  return Buffer.from(`${JSON.stringify(canonicalize(value), null, 2)}\n`, 'utf8')
}

function addJson(files, path, value) {
  files.set(path, jsonBytes(value))
}

function packageEntry(packageId) {
  const registry = readJson('data/registry/package-registry.json')
  const entry = registry.packages.find((candidate) => candidate.id === packageId)
  if (!entry) throw new Error(`Unknown package: ${packageId}`)
  return { registry, entry }
}

function filesBelow(directory) {
  if (!existsSync(directory) || !statSync(directory).isDirectory()) return []
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

function extractInterfaceCopy() {
  const sources = [
    'src/components/catalog/CatalogPages.tsx',
    'src/components/catalog/StoryStudio.tsx',
    'src/components/explorer/ExplorerWorkspace.tsx',
    'src/components/map/PaleoMap.tsx',
    'src/components/tree/EvoTree.tsx',
    'src/components/details/SpeciesDetail.tsx',
    'src/components/workbench/WorkbenchPages.tsx',
    'src/components/workbench/LocalResearchWorkspace.tsx',
    'src/components/workbench/DatasetVersionComparison.tsx',
  ]
  return Object.fromEntries(sources.map((source) => {
    const text = readFileSync(join(rootDir, source), 'utf8')
    const strings = []
    const matcher = /\bt\(\s*['"]([^'"\r\n]+)['"]/g
    for (const match of text.matchAll(matcher)) strings.push(match[1])
    return [source, [...new Set(strings)].sort()]
  }))
}

function markdownLimitations({ packageData, entities, profiles, queryLedger, provenance }) {
  const sections = [
    ['Package limits', packageData.limitations],
    ['Entity limits', entities.flatMap((entity) => entity.limitations.map((text) => `${entity.id}: ${text}`))],
    ['Profile evidence boundaries', profiles.map((profile) => `${profile.id}: ${profile.evidenceSummary}`)],
    ['Occurrence-query limits', queryLedger.limitations],
    ['Provenance notes', provenance.notes],
  ]
  return `${sections.map(([title, entries]) => `## ${title}\n\n${entries.length ? entries.map((entry) => `- ${entry}`).join('\n') : '- None recorded.'}`).join('\n\n')}\n`
}

export function buildPackageReviewMaterials(packageId) {
  const { entry } = packageEntry(packageId)
  const packageDirectory = join(rootDir, entry.canonicalPath)
  const packageData = JSON.parse(readFileSync(join(packageDirectory, 'package.json'), 'utf8'))
  const entityIndex = JSON.parse(readFileSync(join(packageDirectory, 'entities.json'), 'utf8'))
  const entityIds = new Set(entityIndex.entityIds)
  const entities = readJson('data/registry/entities/entities.json').filter((entity) => entityIds.has(entity.id))
  const claimIds = new Set(JSON.parse(readFileSync(join(packageDirectory, 'evidence/claim-ids.json'), 'utf8')))
  const claims = readJson('data/evidence/claims.json').filter((claim) => claimIds.has(claim.id))
  const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
  const rangeData = JSON.parse(readFileSync(join(packageDirectory, 'ranges.json'), 'utf8'))
  const queryLedger = JSON.parse(readFileSync(join(packageDirectory, 'query-ledger.json'), 'utf8'))
  const provenance = JSON.parse(readFileSync(join(packageDirectory, 'provenance.json'), 'utf8'))
  const profilesSourcePath = join(packageDirectory, 'profiles.source.json')
  const profilesPath = join(packageDirectory, 'profiles.json')
  const fieldClaimLinksPath = join(packageDirectory, 'evidence', 'field-claim-links.json')
  const profilesSource = existsSync(profilesSourcePath) ? JSON.parse(readFileSync(profilesSourcePath, 'utf8')) : []
  const profiles = existsSync(profilesPath) ? JSON.parse(readFileSync(profilesPath, 'utf8')) : []
  const fieldClaimLinks = existsSync(fieldClaimLinksPath) ? JSON.parse(readFileSync(fieldClaimLinksPath, 'utf8')) : []
  const storyIds = new Set(JSON.parse(readFileSync(join(packageDirectory, 'stories.json'), 'utf8')))
  const stories = readJson('data/stories.json').filter((story) => storyIds.has(story.id))
  const eventIds = new Set(JSON.parse(readFileSync(join(packageDirectory, 'events.json'), 'utf8')))
  const events = readJson('data/events.json').filter((event) => eventIds.has(event.id))
  const mediaIds = new Set(JSON.parse(readFileSync(join(packageDirectory, 'media.json'), 'utf8')))
  const media = readJson('data/media.json').filter((asset) => mediaIds.has(asset.id))
  const claimStatementsZh = readJson('data/evidence/claim-statements.zh.json')
  const claimRationalesZh = readJson('data/evidence/claim-rationales.zh.json')
  const referenceIds = new Set([
    ...entities.flatMap((entity) => entity.referenceIds),
    ...profiles.flatMap((profile) => profile.referenceIds ?? []),
    ...claims.flatMap((claim) => claim.referenceLinks.map((link) => link.referenceId)),
    ...rangeData.flatMap((range) => range.referenceLocators.map((locator) => locator.referenceId)),
    ...stories.flatMap((story) => story.steps.flatMap((step) => step.claimLinks.flatMap((link) => claimsById.get(link.claimId)?.referenceLinks.map((referenceLink) => referenceLink.referenceId) ?? []))),
  ])
  const references = readJson('data/references.json').filter((reference) => referenceIds.has(reference.id))
  const files = new Map()

  files.set('package.json', readFileSync(join(packageDirectory, 'package.json')))
  addJson(files, 'entities.json', entities)
  files.set('taxonomy.json', readFileSync(join(packageDirectory, 'taxonomy.json')))
  addJson(files, 'ranges.json', rangeData)
  addJson(files, 'profiles.source.json', profilesSource)
  addJson(files, 'profiles.json', profiles)
  addJson(files, 'evidence/field-claim-links.json', fieldClaimLinks)
  addJson(files, 'claims.json', claims)
  addJson(files, 'claim-statements.zh.json', Object.fromEntries(claims.filter((claim) => claimStatementsZh[claim.statement]).map((claim) => [claim.statement, claimStatementsZh[claim.statement]])))
  addJson(files, 'claim-rationales.zh.json', Object.fromEntries(claims.filter((claim) => claimRationalesZh[claim.id]).map((claim) => [claim.id, claimRationalesZh[claim.id]])))
  addJson(files, 'references.json', references)
  files.set('research-examples.json', readFileSync(join(packageDirectory, 'research-examples.json')))
  addJson(files, 'provenance.json', provenance)
  addJson(files, 'media.json', media)
  addJson(files, 'stories.json', stories)
  addJson(files, 'events.json', events)
  files.set('occurrence-query-ledger.json', readFileSync(join(packageDirectory, 'query-ledger.json')))
  files.set('frontend-text/package-locale.zh.json', readFileSync(join(packageDirectory, 'locales/zh.json')))
  addJson(files, 'frontend-text/catalog.json', {
    package: { id: packageData.id, title: packageData.title, titleZh: packageData.titleZh, conceptScope: packageData.conceptScope, limitations: packageData.limitations },
    entities: entities.map(({ id, names, definition, temporalRange, limitations, dataAvailability }) => ({ id, names, definition, temporalRange, limitations, dataAvailability })),
    profiles,
  })
  addJson(files, 'frontend-text/stories.json', stories.map(({ id, title, titleZh, dek, steps }) => ({ id, title, titleZh, dek, steps })))
  addJson(files, 'frontend-text/explorer.json', {
    entities: entities.map(({ id, names, definition, temporalRange, evidenceStatus }) => ({ id, names, definition, temporalRange, evidenceStatus })),
    claims: claims.map((claim) => ({ id: claim.id, subjectId: claim.subjectId, statement: claim.statement, statementZh: claimStatementsZh[claim.statement] ?? null, confidenceRationale: claim.confidenceRationale, confidenceRationaleZh: claimRationalesZh[claim.id] ?? null })),
  })
  addJson(files, 'frontend-text/interface-copy.json', extractInterfaceCopy())

  const phylogenyDirectory = join(packageDirectory, 'phylogeny')
  const phylogenyFiles = filesBelow(phylogenyDirectory)
  if (phylogenyFiles.length) {
    for (const path of phylogenyFiles) files.set(`phylogeny/${relative(phylogenyDirectory, path).replaceAll('\\', '/')}`, readFileSync(path))
  } else {
    files.set('phylogeny/STATUS.md', Buffer.from(`# Topology status\n\nNo package-specific topology is published for ${packageData.title}. The global navigation tree remains available, but it must not be interpreted as a reviewed phylogenetic hypothesis.\n`, 'utf8'))
  }

  files.set('known-limitations.md', Buffer.from(markdownLimitations({ packageData, entities, profiles, queryLedger, provenance }), 'utf8'))
  return { entry, packageData, files }
}

export function computePackageContentDigest(files) {
  const digest = createHash('sha256')
  for (const [path, originalBytes] of [...files.entries()].sort(([left], [right]) => left.localeCompare(right))) {
    let bytes = originalBytes
    if (path === 'package.json') {
      const packageData = JSON.parse(originalBytes.toString('utf8'))
      delete packageData.reviewStatus
      delete packageData.automatedReviewStatus
      bytes = jsonBytes(packageData)
    }
    digest.update(path)
    digest.update('\0')
    digest.update(sha256(bytes))
    digest.update('\n')
  }
  return `sha256:${digest.digest('hex')}`
}

export function evaluatePackageReview(packageId) {
  const { entry, files } = buildPackageReviewMaterials(packageId)
  const review = JSON.parse(readFileSync(join(rootDir, entry.canonicalPath, 'review.json'), 'utf8'))
  const currentContentDigest = computePackageContentDigest(files)
  const hasSnapshot = typeof review.contentDigest === 'string'
  const isFresh = hasSnapshot && review.contentDigest === currentContentDigest
  const effectiveReviewStatus = review.status === 'not-reviewed'
    ? 'not-reviewed'
    : isFresh
      ? review.status
      : 'stale'
  return {
    packageId,
    reviewStatus: review.status,
    effectiveReviewStatus,
    freshness: review.status === 'not-reviewed' ? 'not-applicable' : isFresh ? 'current' : 'stale',
    currentContentDigest,
    reviewedContentDigest: review.contentDigest,
    reviewedBy: review.reviewedBy,
    reviewedAt: review.reviewedAt,
    reviewedCommit: review.reviewedCommit,
    chatgptAssisted: review.chatgptAssisted,
    scope: review.scope,
    openIssues: review.openIssues,
  }
}

export function checkAllPackageReviews() {
  const registry = readJson('data/registry/package-registry.json')
  return registry.packages.map((entry) => evaluatePackageReview(entry.id))
}

function runCli() {
  const json = process.argv.includes('--json')
  const results = checkAllPackageReviews()
  if (json) console.log(JSON.stringify(results, null, 2))
  else {
    for (const result of results) {
      console.log(`${result.packageId.padEnd(29)} ${result.reviewStatus.padEnd(22)} effective=${result.effectiveReviewStatus.padEnd(22)} freshness=${result.freshness}`)
    }
  }
  const staleCompleted = results.filter((result) => completedReviewStatuses.has(result.reviewStatus) && result.freshness !== 'current')
  if (staleCompleted.length) {
    console.error(`Review freshness failed: ${staleCompleted.map((entry) => entry.packageId).join(', ')} claim completed review against changed content.`)
    process.exitCode = 1
  } else if (!json) {
    console.log(`Review freshness passed for ${results.length} packages; unreviewed packages remain publishable only with their current maturity and review status visible.`)
  }
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) runCli()
