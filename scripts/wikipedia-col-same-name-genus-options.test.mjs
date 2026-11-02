import {test} from 'node:test'
import assert from 'node:assert/strict'
import {sameNameGenusOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('genus candidate discloses the identifier of its child subgenus',()=>{
 const row={item:'https://www.wikidata.org/entity/Q1',parent_name:'Aus',pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Aus'}])};const [o]=sameNameGenusOptions([row],()=>true);assert.equal(o.sameNameGenusCandidate,true);assert.ok(o.parentNames[0].includes('COL identifier points to child subgenus, identity unverified'));assert.deepEqual(o.abstracts,[]);assert.deepEqual(sameNameGenusOptions([row],()=>false),[])
})
