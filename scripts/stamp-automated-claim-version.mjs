import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DATASET_PACKAGE_VERSION } from './package-definitions.mjs'

const rootDir = join(fileURLToPath(new URL('..', import.meta.url)))
const claimsPath = join(rootDir, 'data', 'evidence', 'claims.json')
const claims = JSON.parse(readFileSync(claimsPath, 'utf8'))
const versionPattern = /\d{4}\.\d{2}(?:-\d{4}\.\d{2})*-static-v5-rc\d+/
let updated = 0

for (const claim of claims) {
  if (claim.reviewedBy !== 'Evo Atlas automated evidence decomposition') continue
  const current = claim.reviewedAgainstReferenceVersion
  if (typeof current !== 'string') continue
  const next = current.replace(versionPattern, DATASET_PACKAGE_VERSION)
  if (next === current) continue
  claim.reviewedAgainstReferenceVersion = next
  updated += 1
}

writeFileSync(claimsPath, `${JSON.stringify(claims, null, 2)}\n`, 'utf8')
console.log(`Stamped ${updated} automated claim inventories for ${DATASET_PACKAGE_VERSION}.`)
