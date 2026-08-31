import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sidecarPath = join(root, 'data', 'packages', 'vertebrata', 'amphibia', 'nomenclature', 'itis-tsn-sidecar.json')
const ledgerPath = join(root, 'data', 'sources', 'itis-amphibia-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('ITIS Amphibia exact sidecar', () => {
  const bytes = readFileSync(sidecarPath)
  const sidecar = JSON.parse(bytes.toString('utf8'))
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const groups = sidecar.records
  const crosswalk = ['accepted', 'synonymCurrentNameRedirect', 'ambiguous', 'unmatched'].flatMap((key) => groups[key])

  it('pins every strict COL26.8 Amphibia species exactly once', () => {
    expect(sidecar.packageId).toBe('amphibia')
    expect(sidecar.sources.col.rootUsageId).toBe('PH')
    expect(sidecar.counts.total).toBe(8923)
    expect(new Set(crosswalk.map((record) => record.colUsageId)).size).toBe(8923)
    expect(crosswalk).toHaveLength(8923)
  })

  it('preserves only exact evidence and explicit non-matches', () => {
    expect(sidecar.exactMatching.prohibited).toContain('No fuzzy')
    expect(crosswalk.every((record) => record.exactMatchName === colExactMatchName({ scientificName: record.colScientificName, authorship: record.colAuthorship }))).toBe(true)
    expect(groups.accepted.every((record) => normalizeScientificName(record.currentName.scientificName) === record.exactMatchName)).toBe(true)
    expect(groups.synonymCurrentNameRedirect.every((record) => record.matchedSynonyms.length > 0 && record.matchedSynonyms.every((synonym) => normalizeScientificName(synonym.scientificName) === record.exactMatchName))).toBe(true)
    expect(groups.ambiguous.every((record) => record.candidates.length > 1)).toBe(true)
    expect(groups.unmatched.every((record) => !('currentName' in record))).toBe(true)
  })

  it('provides one deterministic same-byte shard locator for every COL usage ID', () => {
    expect(sidecar.locators.key).toBe('colUsageId')
    expect(Object.keys(sidecar.locators.entries)).toHaveLength(8923)
    for (const record of crosswalk) {
      const locator = sidecar.locators.entries[record.colUsageId]
      expect(locator.shard).toBe('itis-tsn-sidecar.json')
      expect(groups[locator.recordGroup][locator.recordIndex].colUsageId).toBe(record.colUsageId)
    }
  })

  it('keeps ITIS-only current species in a separate null-COL partition', () => {
    expect(groups.itisUpstreamOnly).toHaveLength(sidecar.counts.itisUpstreamOnly)
    expect(groups.itisUpstreamOnly.every((record) => record.colUsageId === null && record.currentName.usage === 'valid')).toBe(true)
    const evidencedTsns = new Set([...groups.accepted, ...groups.synonymCurrentNameRedirect].map((record) => record.currentName.tsn))
    for (const record of groups.ambiguous) for (const candidate of record.candidates) evidencedTsns.add(candidate.currentName.tsn)
    expect(groups.itisUpstreamOnly.every((record) => !evidencedTsns.has(record.currentName.tsn))).toBe(true)
    expect(groups.itisUpstreamOnly.length + evidencedTsns.size).toBe(sidecar.counts.itisCurrentSpecies)
  })

  it('checks every persisted byte and the future delivery boundary', () => {
    expect(ledger.output.bytes).toBe(bytes.length)
    expect(ledger.output.sha256).toBe(sha256(bytes))
    expect(ledger.scopeAudit.colStrictAcceptedSpecies).toBe(8923)
    expect(ledger.scopeAudit.itisRoot.tsn).toBe('173420')
    expect(ledger.deliveryContract.runtimeChange).toContain('no formal runtime')
  })
})
