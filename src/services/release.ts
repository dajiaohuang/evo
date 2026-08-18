import manifest from '../../data/manifest.json'

export interface ReleaseMetadata {
  appVersion: string
  datasetVersion: string
  deploymentCommitSha: string
  builtAt: string | null
  workflowRunId: string | null
}

export const localReleaseMetadata: ReleaseMetadata = {
  appVersion: manifest.appVersion,
  datasetVersion: manifest.datasetVersion,
  deploymentCommitSha: 'unreleased',
  builtAt: null,
  workflowRunId: null,
}

function isReleaseMetadata(value: unknown): value is ReleaseMetadata {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<ReleaseMetadata>
  return candidate.appVersion === manifest.appVersion
    && candidate.datasetVersion === manifest.datasetVersion
    && typeof candidate.deploymentCommitSha === 'string'
    && /^[0-9a-f]{40}$/i.test(candidate.deploymentCommitSha)
    && typeof candidate.builtAt === 'string'
    && (candidate.workflowRunId === null || typeof candidate.workflowRunId === 'string')
}

export async function loadReleaseMetadata(): Promise<ReleaseMetadata> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}release.json`, { cache: 'no-store' })
    if (!response.ok) return localReleaseMetadata
    const value: unknown = await response.json()
    return isReleaseMetadata(value) ? value : localReleaseMetadata
  } catch {
    return localReleaseMetadata
  }
}
