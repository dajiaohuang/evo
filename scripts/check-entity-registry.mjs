import { mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative } from 'node:path'
import { spawnSync } from 'node:child_process'
import { rootDir } from './data-lib.mjs'

const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-registry-check-'))

function filesBelow(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

try {
  const result = spawnSync(process.execPath, ['scripts/build-entity-registry.mjs', '--out', temporaryRoot, '--quiet'], {
    cwd: rootDir,
    encoding: 'utf8',
  })
  if (result.error) throw result.error
  if (result.status !== 0) {
    process.stderr.write(result.stderr)
    process.exit(result.status ?? 1)
  }

  const failures = []
  for (const generatedPath of filesBelow(temporaryRoot)) {
    const relativePath = relative(temporaryRoot, generatedPath).replaceAll('\\', '/')
    const canonicalPath = join(rootDir, relativePath)
    try {
      if (!readFileSync(generatedPath).equals(readFileSync(canonicalPath))) failures.push(`${relativePath}: differs from generator output`)
    } catch {
      failures.push(`${relativePath}: generated projection is missing`)
    }
  }
  if (failures.length) {
    console.error(`Registry drift check failed with ${failures.length} stale generated file(s):`)
    for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`)
    console.error('Run npm run data:registry:build and commit the generated projection changes.')
    process.exitCode = 1
  } else {
    console.log('Registry drift check passed: generated projections match canonical inputs byte-for-byte.')
  }
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true })
}
