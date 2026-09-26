import { sourceRepositoryBytes } from './platform-validation-lib.mjs'

const bytes = sourceRepositoryBytes()
// This source-only allowance includes the pinned archives and lossless projections.
// It is separate from the App and Pages deployment budgets, which remain unchanged.
const limitMiB = 1130.1
const limit = limitMiB * 1024 * 1024
if (bytes > limit) {
  console.error(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB; budget is ${limitMiB} MiB.`)
  process.exitCode = 1
} else {
  console.log(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB of the ${limitMiB} MiB budget.`)
}
