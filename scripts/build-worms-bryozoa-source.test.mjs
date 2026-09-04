import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { gunzipSync } from 'node:zlib'
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
      const ledger = JSON.parse(readFileSync(join(first, 'data/sources/worms-bryozoa-1081-import-ledger.json'), 'utf8'))
      expect(descriptor.counts).toMatchObject({ total: 20367, accepted: 20325, redirect: 6, unmatched: 36, upstreamOnly: 202 })
      expect(descriptor.source.archiveSha256).toBe('93081ce57720a84ca271126c5d748a9d2663a1ffc1d900b3fb380f94c696c0fb')
      expect(Object.keys(descriptor.source.members)).toEqual([
        'metadata.yml', 'TypeMaterial.txt', 'Name.txt', 'NameRelation.txt', 'Taxon.txt', 'Synonym.txt',
        'SpeciesEstimate.txt', 'Reference.txt', 'NameReference.txt', 'Distribution.txt', 'Media.txt', 'VernacularName.txt',
      ])
      expect(descriptor.source.metadata.citation).toContain('Bock, P.')
      expect(descriptor.source.metadata.editor).toHaveLength(2)
      expect(descriptor.source.metadata.contributor).toHaveLength(2)
      expect(descriptor.scope.colRootUsageId).toBe('622CG')
      expect(ledger.scope).toMatchObject({ eligibleColSpecies: 20367, sourceSpeciesRankTaxa: 20569, sourceStrictAcceptedSpecies: 20533, provisionalExcluded: 36 })
      expect(ledger.colInput.nodeShards).toHaveLength(256)
      const rows = descriptor.files.flatMap((file) => {
        const bytes = readFileSync(join(first, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals', file.path.split('/').pop()))
        const decoded = gunzipSync(bytes)
        expect(decoded.length).toBeLessThan(2 * 1024 * 1024)
        return JSON.parse(decoded.toString('utf8'))
      })
      const sourceOnlyRows = descriptor.upstreamOnlyFiles.flatMap((file) => JSON.parse(gunzipSync(readFileSync(join(first, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals', file.path.split('/').pop()))).toString('utf8')))
      expect(sourceOnlyRows).toHaveLength(202)
      expect(sourceOnlyRows.every((row) => row.colId === null && row.status === 'upstream-only' && row.acceptedName?.status === 'accepted')).toBe(true)
      const redirect = rows.find((row) => row.status === 'redirect')
      expect(redirect?.matchedName?.status).toBe('synonym')
      expect(redirect?.matchedName?.scientificName).toBeTruthy()
      expect(redirect?.matchedName?.sourceRows).toEqual(expect.arrayContaining([
        expect.objectContaining({ member: 'Synonym.txt' }), expect.objectContaining({ member: 'Name.txt' }),
      ]))
      expect(redirect?.acceptedName?.status).toBe('accepted')
      const referenced = rows.find((row) => row.acceptedName?.referenceRows?.length)
      expect(referenced?.acceptedName?.referenceRows?.[0]).toEqual(expect.objectContaining({ member: 'Reference.txt' }))
      const nfc = rows.find((row) => row.colId === '86DK3')
      expect(nfc?.status).toBe('accepted')
      expect(nfc?.acceptedName?.sourceRows).toEqual(expect.arrayContaining([
        expect.objectContaining({ member: 'Name.txt' }), expect.objectContaining({ member: 'Taxon.txt' }),
        expect.objectContaining({ member: 'NameReference.txt' }), expect.objectContaining({ member: 'Reference.txt' }),
      ]))
      expect(nfc?.acceptedName?.references).toEqual(expect.any(Array))
      expect(ledger.scopeAudit).toMatchObject({ colSpecies: 20367, sourceAcceptedSpecies: 20533, sourceOnly: 202, residualUnmatched: 36 })
    } finally {
      rmSync(first, { recursive: true, force: true })
      rmSync(second, { recursive: true, force: true })
    }
  }, 240_000)
})
