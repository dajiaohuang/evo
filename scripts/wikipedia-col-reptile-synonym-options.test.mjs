import {test} from 'node:test'
import assert from 'node:assert/strict'
import {reptileSynonymOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('reptile synonym candidate preserves source and identity cautions without abstracts',()=>{
 const row={node_id:'a',item:'Q1',source_name:'Accepted',synonym_name:'Old',target_cols:JSON.stringify(['b','unknown']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Old'}])}
 const [o]=reptileSynonymOptions([row],()=>true,id=>id==='b')
 assert.match(o.parentNames[0],/Reptile Database synonym candidate, taxonomic identity unverified: Accepted ← Old/)
 assert.ok(o.parentNames.some(x=>x.includes('Target article identifies another tree node')))
 assert.ok(o.parentNames.some(x=>x.includes('Target external identifier unresolved')))
 assert.deepEqual(o.abstracts,[]);assert.equal(o.reptileSynonymCandidate,true)
 assert.deepEqual(reptileSynonymOptions([row],()=>false,()=>false),[])
})
