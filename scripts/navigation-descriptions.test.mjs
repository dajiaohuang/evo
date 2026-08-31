import { expect, test } from 'vitest'
import { readJson } from './data-lib.mjs'

function flattenTree(node, output = []) {
  output.push(node)
  for (const child of node.children ?? []) flattenTree(child, output)
  return output
}

test('every canonical navigation node has a concise bilingual bounded navigation description', () => {
  const nodes = flattenTree(readJson('data/navigation/atlas-ontology.json'))
  const entities = readJson('data/registry/entities/entities.json')
  const claims = readJson('data/evidence/claims.json')
  const entityById = new Map(entities.map((entity) => [entity.id, entity]))

  expect(entityById.size, 'the generated registry must represent every canonical node exactly once').toBe(nodes.length)
  for (const node of nodes) {
    const entity = entityById.get(node.id)
    expect(entity, `${node.id} is missing from the generated entity registry`).toBeDefined()
    const sourceLinkedClaims = claims.filter((claim) => claim.subjectId === `taxon:${node.id}` && claim.referenceLinks.length > 0)
    expect(sourceLinkedClaims.length, `${node.id} needs a directly linked source-backed claim`).toBeGreaterThan(0)
    expect(entity.definition.en, `${node.id} needs an English navigation description`).toMatch(/navigation (?:entry|envelope)/i)
    expect(entity.definition.en, `${node.id} must distinguish navigation from phylogeny`).toMatch(/not a phylogeny/i)
    expect(entity.definition.zh, `${node.id} needs a Chinese navigation description`).toMatch(/导航/)
    expect(entity.definition.zh, `${node.id} must distinguish navigation from phylogeny in Chinese`).toMatch(/不表示系统发育/)
    expect(entity.definition.en.length, `${node.id} English description must stay concise`).toBeLessThanOrEqual(420)
    expect(entity.definition.zh.length, `${node.id} Chinese description must stay concise`).toBeLessThanOrEqual(220)
  }
})
