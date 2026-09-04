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
  const statementsZh = readJson('data/evidence/claim-statements.zh.json')
  const entityById = new Map(entities.map((entity) => [entity.id, entity]))

  expect(entityById.size, 'the generated registry must represent every canonical node exactly once').toBe(nodes.length)
  for (const node of nodes) {
    const entity = entityById.get(node.id)
    expect(entity, `${node.id} is missing from the generated entity registry`).toBeDefined()
    const sourceLinkedClaims = claims.filter((claim) => claim.subjectId === `taxon:${node.id}` && claim.referenceLinks.length > 0)
    expect(sourceLinkedClaims.length, `${node.id} needs a directly linked source-backed claim`).toBeGreaterThan(0)
    const summaryClaim = sourceLinkedClaims.find((claim) => entity.definition.en.startsWith(claim.statement))
    expect(summaryClaim, `${node.id} must lead with a complete subject-matched claim, not navigation boilerplate`).toBeDefined()
    expect(entity.definition.zh.startsWith(statementsZh[summaryClaim.statement]), `${node.id} must use the matching full Chinese statement`).toBe(true)
    expect(summaryClaim.referenceLinks.some((link) => link.relation === 'supports' && (link.pages || link.figure || link.table || link.quoteLocator))).toBe(true)
    for (const link of summaryClaim.referenceLinks) expect(entity.referenceIds).toContain(link.referenceId)
    expect(entity.definition.en, `${node.id} needs an English navigation description`).toMatch(/navigation (?:entry|envelope)/i)
    expect(entity.definition.en, `${node.id} must distinguish navigation from phylogeny`).toMatch(/not a phylogeny/i)
    expect(entity.definition.zh, `${node.id} needs a Chinese navigation description`).toMatch(/导航/)
    expect(entity.definition.zh, `${node.id} must distinguish navigation from phylogeny in Chinese`).toMatch(/不表示系统发育/)
    expect(entity.definition.en.length, `${node.id} English description must stay concise`).toBeLessThanOrEqual(500)
    expect(entity.definition.zh.length, `${node.id} Chinese description must stay concise`).toBeLessThanOrEqual(220)
  }

  expect(entityById.get('tiktaalik').definition.en).toMatch(/^Tiktaalik roseae is a Frasnian/)
  expect(entityById.get('life').definition.en).toMatch(/^The Life navigation envelope begins/)
})
