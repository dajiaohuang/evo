import { sourceRepositoryBytes } from './platform-validation-lib.mjs'

const bytes = sourceRepositoryBytes()
// The 2026-10-01 tree-path migration measured 1887.81 MiB: canonical Markdown
// adds 616.64 MiB while compatibility JSON/Brotli projections stay available.
// Include both authoring and generated source ledgers; reserve 62.19 MiB.
// App and Pages runtime budgets remain separate.
const limitMiB = 1950
const limit = limitMiB * 1024 * 1024
if (bytes > limit) {
  console.error(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB; budget is ${limitMiB} MiB.`)
  process.exitCode = 1
} else {
  console.log(`Source repository data/code footprint is ${(bytes / 1024 / 1024).toFixed(2)} MiB of the ${limitMiB} MiB budget.`)
}
