// Only an explicitly identified full Web artifact is outside Pages deployment.
// Missing/unknown editions retain the existing conservative Pages limit.
export function pagesDeploymentBudgetFailure(edition, totalBytes) {
  if (edition === 'full-web' || totalBytes <= 650 * 1024 * 1024) return null
  return `Pages artifact is ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; hard limit is 650 MiB`
}

// The complete Web release is 722.63 MiB with one retained version.
// Keep a bounded allowance for that edition without expanding preview storage.
export function releaseRetentionByteLimit(edition) {
  return (edition === 'full-web' ? 750 : 650) * 1024 * 1024
}
