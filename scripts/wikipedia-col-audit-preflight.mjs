import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { dirname, join, resolve } from 'node:path'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'
import { checkNcbiAuthorCoverage } from './wikipedia-col-ncbi-author-preflight.mjs'

const arg = process.argv.indexOf('--audit-db')
assert.ok(arg >= 0 && process.argv[arg + 1], '--audit-db is required')
const auditPath = resolve(process.argv[arg + 1])
const audit = new DatabaseSync(auditPath, { readOnly: true })
const inventory = new DatabaseSync(resolve('.git/evo-wikipedia-col26-8/inventory.sqlite'), { readOnly: true })
try {
  const proof = readFileSync(join(dirname(auditPath), 'page-audit-exclusions.json'))
  console.log(JSON.stringify({ ...checkPageAudit(audit, inventory, proof), ncbiAuthorCoverage: checkNcbiAuthorCoverage(inventory) }))
} finally {
  audit.close()
  inventory.close()
}
