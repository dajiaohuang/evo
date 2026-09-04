import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { describe, expect, it } from 'vitest'

const root = resolve(process.cwd())
const script = join(root, 'scripts', 'build-worms-bryozoa-source.py')
const archive = resolve(root, 'data/sources/archives/checklistbank-1081-bryozoa-2026-09-01.zip')
const metadata = resolve(root, 'data/sources/archives/checklistbank-1081-bryozoa-2026-09-01.metadata.json')

function filesUnder(directory) {
  const files = []
  const walk = (current) => {
    for (const name of readdirSync(current)) {
      const path = join(current, name)
      if (statSync(path).isDirectory()) walk(path)
      else files.push(relative(directory, path).replaceAll('\\', '/'))
    }
  }
  walk(directory)
  return files.sort()
}

function run(outputRoot) {
  const result = spawnSync('python', ['-B', script, '--archive', archive, '--metadata', metadata, '--output-root', outputRoot], {
    cwd: root, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024,
  })
  expect(result.status, result.stderr || result.stdout).toBe(0)
}

describe('WoRMS Bryozoa 1081 importer', () => {
  it('reads the frozen archive twice deterministically and preserves exact outcomes', () => {
    const first = mkdtempSync(join(tmpdir(), 'bryozoa-first-'))
    const second = mkdtempSync(join(tmpdir(), 'bryozoa-second-'))
    try {
      run(first); run(second)
      const firstFiles = filesUnder(first)
      expect(firstFiles).toEqual(filesUnder(second))
      for (const file of firstFiles) {
        expect(readFileSync(join(first, file))).toEqual(readFileSync(join(second, file)))
      }
      const descriptor = JSON.parse(readFileSync(join(first, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-bryozoa-sidecar.json'), 'utf8'))
      expect(descriptor.counts).toMatchObject({ total: 20367, accepted: 20311, redirect: 6, unmatched: 50, upstreamOnly: 216 })
      expect(descriptor.source.archiveSha256).toBe('93081ce57720a84ca271126c5d748a9d2663a1ffc1d900b3fb380f94c696c0fb')
      expect(descriptor.scope.colRootUsageId).toBe('622CG')
    } finally {
      rmSync(first, { recursive: true, force: true })
      rmSync(second, { recursive: true, force: true })
    }
  }, 120_000)
})
