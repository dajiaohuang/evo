import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { packageDefinitions, researchPresetDefinitions, researchSceneDefinitions } from './package-definitions.mjs'
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
  it('publishes at least three explicitly mapped, claim-linked scenes per package and every declared deepening scene', () => {
    expect(Object.keys(researchPresetDefinitions).sort()).toEqual(packageDefinitions
      .filter((definition) => definition.id !== 'perissodactyla')
      .map((definition) => definition.id)
      .sort())

    let publishedSceneCount = 0
    for (const definition of packageDefinitions) {
      const research = readPackage(definition, 'research-examples.json')
      expect(research.packageId).toBe(definition.id)
      expect(research.examples.length).toBeGreaterThanOrEqual(3)
      publishedSceneCount += research.examples.length
      const example = research.examples[0]

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

      expect(research.examples.slice(1).map((scene) => scene.id)).toEqual(researchSceneDefinitions[definition.id].scenes.map((scene) => scene.id))

      for (const scene of research.examples) {
        expect(scene.evidenceStatus).toBe('available-with-limitations')
        expect(scene.title.en.length).toBeGreaterThan(10)
        expect(scene.title.zh.length).toBeGreaterThan(4)
        expect(scene.limitations.length).toBeGreaterThan(0)
        for (const claimId of scene.claimIds) {
          const claim = claimsById.get(claimId)
          expect(claim, `${definition.id}/${scene.id}/${claimId}`).toBeDefined()
          expect(claim.referenceLinks.length, `${definition.id}/${scene.id}/${claimId}`).toBeGreaterThan(0)
          expect(claim.referenceLinks.every(hasLocator), `${definition.id}/${scene.id}/${claimId}`).toBe(true)
        }
      }
    }
    expect(publishedSceneCount).toBe(238)
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
