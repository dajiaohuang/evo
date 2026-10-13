import { checkArtifactBudget } from './check-pages-budget.mjs'

// Both supported CLI names enforce the complete artifact contract.
if (!checkArtifactBudget()) process.exitCode = 1
