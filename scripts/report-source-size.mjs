import { sourceRepositoryBytes } from './platform-validation-lib.mjs'

console.log(`Source repository data/code footprint: ${(sourceRepositoryBytes() / 1024 / 1024).toFixed(2)} MiB. Deployment budgets are checked separately.`)
