import manifest from '../../data/manifest.json'
import packageRegistryData from '../../data/registry/package-registry.json'

export type ScientificMaturity = 'generated-scaffold' | 'structured' | 'source-linked' | 'curated-draft' | 'published'
export type ReviewStatus = 'not-reviewed' | 'in-review' | 'reviewed-with-caveats' | 'reviewed'
export type EffectiveReviewStatus = ReviewStatus | 'stale'

export interface PublicationStatus {
  packageId: string
  title: string
  titleZh: string
  scientificMaturity: ScientificMaturity
  reviewStatus: ReviewStatus
  automatedReviewStatus: 'pending' | 'passed' | 'failed'
}

interface RegistryPackage extends Omit<PublicationStatus, 'packageId'> {
  id: string
}

const packages = packageRegistryData.packages as RegistryPackage[]
const packageById = new Map(packages.map((entry) => [entry.id, entry]))
const entityToPackage = packageRegistryData.entityToPackage as Record<string, string>

export const publicationPackages = packages

export function getPackagePublication(packageId: string | null | undefined): PublicationStatus | null {
  if (!packageId) return null
  const entry = packageById.get(packageId)
  return entry ? { ...entry, packageId: entry.id } : null
}

export function getEntityPublication(entityId: string | null | undefined): PublicationStatus | null {
  if (!entityId) return null
  return getPackagePublication(entityToPackage[entityId])
}

export function scientificMaturityLabel(maturity: ScientificMaturity): string {
  return ({
    'generated-scaffold': 'Generated scaffold',
    structured: 'Structured',
    'source-linked': 'Source linked',
    'curated-draft': 'Curated draft',
    published: 'Published',
  })[maturity]
}

export function reviewStatusLabel(status: EffectiveReviewStatus): string {
  return ({
    'not-reviewed': 'Maintainer review not performed',
    'in-review': 'Maintainer review in progress',
    'reviewed-with-caveats': 'Maintainer reviewed with caveats',
    reviewed: 'Maintainer reviewed',
    stale: 'Review stale after content change',
  })[status]
}

interface EvidenceIssueContext {
  entityId?: string | null
  claimId?: string | null
  pageUrl?: string
  explorerState?: string | null
}

export function buildEvidenceIssueUrl(context: EvidenceIssueContext = {}): string {
  const pageUrl = context.pageUrl ?? (typeof window === 'undefined' ? '' : window.location.href)
  const explorerState = context.explorerState ?? (typeof window === 'undefined' ? '' : window.location.hash)
  const subject = context.claimId ?? context.entityId ?? 'atlas evidence'
  const body = [
    '## Evidence issue',
    '',
    'Describe the scientific, source, translation, or interpretation problem here.',
    '',
    '## Reproducible context',
    '',
    `- Entity ID: ${context.entityId ?? 'not specified'}`,
    `- Claim ID: ${context.claimId ?? 'not specified'}`,
    `- Dataset version: ${manifest.datasetVersion}`,
    `- App version: ${manifest.appVersion}`,
    `- Page URL: ${pageUrl || 'not available'}`,
    `- Explorer state: ${explorerState || 'not applicable'}`,
    '',
    '## Suggested correction and supporting source',
    '',
  ].join('\n')
  const query = new URLSearchParams({
    title: `[Evidence] ${subject}`,
    body,
    labels: 'scientific-review,evidence',
  })
  return `https://github.com/dajiaohuang/evo/issues/new?${query}`
}

export const registryEntityCount = manifest.records.registryEntities
