import {test} from 'node:test'
import assert from 'node:assert/strict'
import {sameNameParentOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('parent genus links do not claim a subgenus article exists',()=>{
 const row={item:'https://www.wikidata.org/entity/Q1',parent_name:'Aus',pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Aus'}])};const [option]=sameNameParentOptions([row],()=>true);assert.equal(option.sameNameParentCandidate,true);assert.ok(option.parentNames[0].includes('Same-name parent genus; subgenus article unconfirmed: Aus'));assert.deepEqual(option.abstracts,[]);assert.deepEqual(sameNameParentOptions([row],()=>false),[])
})
