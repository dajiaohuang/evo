import { sourceRepositoryBytes } from './platform-validation-lib.mjs'

const bytes = sourceRepositoryBytes()
// RC145 retains the pinned Diptera archive and all projections (1007.71 MiB measured).
const limitMiB = 1020
const limit = limitMiB * 1024 * 1024
if (bytes > limit) {
  console.error(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB; budget is ${limitMiB} MiB.`)
  process.exitCode = 1
} else {
  console.log(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB of the ${limitMiB} MiB budget.`)
}
