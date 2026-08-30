import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { packageDefinitions, researchPresetDefinitions } from './package-definitions.mjs'
import { rootDir } from './data-lib.mjs'

const claims = JSON.parse(readFileSync(join(rootDir, 'data/evidence/claims.json'), 'utf8'))
const claimsById = new Map(claims.map((claim) => [claim.id, claim]))
const perissodactylaClaimIds = [
  'claim:taxon:metamynodon',
  'claim:taxon:paraceratherium',
  'claim:taxon:metamynodon:taxonomy',
  'claim:taxon:metamynodon:fossil-range',
  'claim:taxon:metamynodon:morphology',
  'claim:taxon:metamynodon:biogeography',
  'claim:taxon:paraceratherium:taxonomy',
  'claim:taxon:paraceratherium:fossil-range',
  'claim:taxon:paraceratherium:morphology',
  'claim:taxon:paraceratherium:ecology',
  'claim:taxon:paraceratherium:biogeography',
]

function readPackage(definition, relativePath) {
  return JSON.parse(readFileSync(join(rootDir, `data/packages/${definition.path}/${relativePath}`), 'utf8'))
}

function hasLocator(link) {
  return Boolean(link.pages || link.figure || link.table || link.quoteLocator)
}

describe('source-bound package research presets', () => {
  it('publishes one explicitly mapped, claim-linked preset for every package', () => {
    expect(Object.keys(researchPresetDefinitions).sort()).toEqual(packageDefinitions
      .filter((definition) => definition.id !== 'perissodactyla')
      .map((definition) => definition.id)
      .sort())

    for (const definition of packageDefinitions) {
      const research = readPackage(definition, 'research-examples.json')
      expect(research.packageId).toBe(definition.id)
      expect(research.examples).toHaveLength(1)
      const example = research.examples[0]
      expect(example.evidenceStatus).toBe('available-with-limitations')
      expect(example.title.en.length).toBeGreaterThan(10)
      expect(example.title.zh.length).toBeGreaterThan(4)
      expect(example.limitations.length).toBeGreaterThan(0)

      if (definition.id === 'perissodactyla') {
        expect(example.id).toBe('perissodactyla-lineage-comparison')
        expect(example.entityIds).toEqual(['metamynodon', 'paraceratherium'])
        expect(example.claimIds).toEqual(perissodactylaClaimIds)
      } else {
        const expected = researchPresetDefinitions[definition.id]
        expect(example.description.en).toContain('evidence')
        expect(example.description.zh).toContain('证据')
        expect(example.entityIds).toEqual([expected.entityId])
        expect(example.claimIds).toEqual(expected.claimIds)
        expect(example.route).toContain(`taxon=${encodeURIComponent(expected.entityId)}`)
      }

      for (const claimId of example.claimIds) {
        const claim = claimsById.get(claimId)
        expect(claim, `${definition.id}/${claimId}`).toBeDefined()
        expect(claim.referenceLinks.length, `${definition.id}/${claimId}`).toBeGreaterThan(0)
        expect(claim.referenceLinks.every(hasLocator), `${definition.id}/${claimId}`).toBe(true)
      }
    }
  })

  it('does not promote navigation context into package phylogenies', () => {
    const statuses = Object.fromEntries(packageDefinitions.map((definition) => [
      definition.id,
      readPackage(definition, 'phylogeny/status.json').status,
    ]))
    expect(Object.entries(statuses).filter(([, status]) => status === 'available').map(([id]) => id).sort()).toEqual(['dinosauria', 'perissodactyla'])
    expect(Object.values(statuses).filter((status) => status === 'unmapped')).toHaveLength(22)
  })
})
