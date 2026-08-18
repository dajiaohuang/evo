import { validatePlatform } from './platform-validation-lib.mjs'

const scope = process.argv[2] ?? 'all'
const failures = validatePlatform(scope)
if (failures.length) {
  console.error(`${scope} validation failed with ${failures.length} issue(s):`)
  for (const failure of failures.slice(0, 150)) console.error(`- ${failure}`)
  if (failures.length > 150) console.error(`- …and ${failures.length - 150} more`)
  process.exitCode = 1
} else {
  console.log(`${scope} validation passed.`)
}
