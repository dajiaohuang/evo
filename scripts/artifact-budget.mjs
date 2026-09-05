// Only an explicitly identified full Web artifact is outside Pages deployment.
// Missing/unknown editions retain the existing conservative Pages limit.
export function pagesDeploymentBudgetFailure(edition, totalBytes) {
  if (edition === 'full-web' || totalBytes <= 650 * 1024 * 1024) return null
  return `Pages artifact is ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; hard limit is 650 MiB`
}
