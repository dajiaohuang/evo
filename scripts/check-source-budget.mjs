import { sourceRepositoryBytes } from './platform-validation-lib.mjs'

const bytes = sourceRepositoryBytes()
// The 2026-09-26 measured source footprint is 1130.1 MiB; reserve 19.9 MiB for
// incremental, audited scientific records. App and Pages budgets remain separate.
const limitMiB = 1150
const limit = limitMiB * 1024 * 1024
if (bytes > limit) {
  console.error(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB; budget is ${limitMiB} MiB.`)
  process.exitCode = 1
} else {
  console.log(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB of the ${limitMiB} MiB budget.`)
}
