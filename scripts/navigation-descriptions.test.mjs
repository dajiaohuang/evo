import assert from 'node:assert/strict'
import test from 'node:test'
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

  assert.equal(entityById.size, nodes.length, 'the generated registry must represent every canonical node exactly once')
  for (const node of nodes) {
    const entity = entityById.get(node.id)
    assert.ok(entity, `${node.id} is missing from the generated entity registry`)
    const sourceLinkedClaims = claims.filter((claim) => claim.subjectId === `taxon:${node.id}` && claim.referenceLinks.length > 0)
    assert.ok(sourceLinkedClaims.length > 0, `${node.id} needs a directly linked source-backed claim`)
    assert.match(entity.definition.en, /navigation (?:entry|envelope)/i, `${node.id} needs an English navigation description`)
    assert.match(entity.definition.en, /not a phylogeny/i, `${node.id} must distinguish navigation from phylogeny`)
    assert.match(entity.definition.zh, /导航/, `${node.id} needs a Chinese navigation description`)
    assert.match(entity.definition.zh, /不表示系统发育/, `${node.id} must distinguish navigation from phylogeny in Chinese`)
    assert.ok(entity.definition.en.length <= 420, `${node.id} English description must stay concise`)
    assert.ok(entity.definition.zh.length <= 220, `${node.id} Chinese description must stay concise`)
  }
})
