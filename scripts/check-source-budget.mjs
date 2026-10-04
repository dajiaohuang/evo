import { sourceRepositoryBytes } from './platform-validation-lib.mjs'

const bytes = sourceRepositoryBytes()
// The full Amphibia reference/index/placeholder publication scope measured
// 4812.18 MiB on 2026-10-04, including 1,281,384 citation candidate groups,
// source metadata, canonical readers and generated compatibility projections.
// Original papers and local intermediate captures are preserved outside this
// publication checkout. Reserve 187.82 MiB above the measured source footprint.
// App and Pages runtime budgets remain separate.
const limitMiB = 5000
const limit = limitMiB * 1024 * 1024
if (bytes > limit) {
  console.error(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB; budget is ${limitMiB} MiB.`)
  process.exitCode = 1
} else {
  console.log(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB of the ${limitMiB} MiB budget.`)
}
