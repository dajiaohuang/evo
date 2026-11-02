import { test } from 'node:test'
import assert from 'node:assert/strict'
import { publicationConflictAllowed } from './wikipedia-col-publication-conflicts.mjs'

test('a previously conflicting URL requires proof for the actual published identity', () => {
  const url = 'https://en.wikipedia.org/wiki/Zabrina_(beetle)', item = 'https://www.wikidata.org/entity/Q1956869', conflicts = new Set([url])
  assert.equal(publicationConflictAllowed({url,item},conflicts,()=>({status:'matched',actual_item:'Q1956869'})),true)
  assert.equal(publicationConflictAllowed({url,item},conflicts,()=>({status:'identity-conflict',actual_item:'Q1956869'})),false)
  assert.equal(publicationConflictAllowed({url,item},conflicts,()=>({status:'matched',actual_item:'Q21367375'})),false)
  assert.equal(publicationConflictAllowed({url,item:'Wikipedia:unkeyed'},conflicts,()=>({status:'matched',actual_item:'Q1956869'})),false)
  assert.equal(publicationConflictAllowed({url:'https://en.wikipedia.org/wiki/Other'},conflicts,()=>null),true)
})
