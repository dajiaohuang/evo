import test from 'node:test'
import assert from 'node:assert/strict'
import { classifyPage, classifyCachedPage } from './wikipedia-live-page-result.mjs'
test('classifies redirects and keyed identity', () => {
  const query = { normalized:[{from:'a_b',to:'A b'}], redirects:[{from:'A b',to:'C'}], pages:[{title:'C',pageprops:{wikibase_item:'Q42'}}] }
  assert.deepEqual(classifyPage(query,'a_b','https://www.wikidata.org/entity/Q42'),{status:'matched',title:'C',item:'Q42'})
  assert.equal(classifyPage(query,'a_b','https://www.wikidata.org/entity/Q43').status,'identity-conflict')
})
test('does not treat invalid or disambiguation pages as available', () => {
  for (const [page,status] of [[{title:'x',invalid:true},'missing'],[{title:'x',missing:true},'missing'],[{title:'x',pageprops:{disambiguation:''}},'disambiguation'],[{title:'x'},'no-item']]) assert.equal(classifyPage({pages:[page]},'x','https://www.wikidata.org/entity/Q1').status,status)
  assert.equal(classifyPage({pages:[]},'x',null).status,'missing')
  assert.equal(classifyPage({pages:[{title:'x'}]},'x',null).status,'available')
})
test('does not classify redirect loops as available', () => {
  assert.equal(classifyPage({redirects:[{from:'a',to:'b'},{from:'b',to:'a'}],pages:[{title:'a'}]},'a',null).status,'redirect-loop')
})

test('reclassifies a reused page against each record identity', () => {
  const page = { status:'available', target_title:'Human', actual_item:'Q42' }
  assert.equal(classifyCachedPage(page, 'https://www.wikidata.org/entity/Q42').status, 'matched')
  assert.equal(classifyCachedPage(page, 'https://www.wikidata.org/entity/Q43').status, 'identity-conflict')
  assert.equal(classifyCachedPage({ ...page, status:'identity-conflict' }, null).status, 'available')
  assert.equal(classifyCachedPage({ ...page, status:'disambiguation' }, null).status, 'disambiguation')
  assert.equal(classifyCachedPage({ ...page, status:'unknown' }, null), null)
})
