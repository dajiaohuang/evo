// Only an explicitly identified full Web artifact is outside Pages deployment.
// Missing/unknown editions retain the existing conservative Pages limit.
export function pagesDeploymentBudgetFailure(edition, totalBytes) {
  if (edition === 'full-web' || totalBytes <= 650 * 1024 * 1024) return null
  return `Pages artifact is ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; hard limit is 650 MiB`
}

// Full Web data has no deployment quota; retain one version and report its size.
// Preview editions keep the actual Pages delivery limit.
export function releaseRetentionByteLimit(edition) {
  return edition === 'full-web' ? null : 650 * 1024 * 1024
}
