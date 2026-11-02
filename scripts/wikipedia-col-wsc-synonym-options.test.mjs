import {test} from 'node:test'
import assert from 'node:assert/strict'
import {wscSynonymOptions} from './wikipedia-col-worms-sidecar-options.mjs'

test('WSC synonym links retain source and identity warnings without abstracts',()=>{
 const row={node_id:'a',item:'Q1',source_name:'Accepted name',synonym_name:'Old name',target_cols:JSON.stringify(['b','unknown']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Old_name'}])}
 const [option]=wscSynonymOptions([row],()=>true,id=>id==='b')
 assert.match(option.parentNames[0],/World Spider Catalog synonym candidate, taxonomic identity unverified: Accepted name ← Old name/)
 assert.ok(option.parentNames.some(x=>x.includes('Target article identifies another tree node')))
 assert.ok(option.parentNames.some(x=>x.includes('Target external identifier unresolved')))
 assert.deepEqual(option.abstracts,[])
 assert.equal(option.wscSynonymCandidate,true)
 assert.deepEqual(wscSynonymOptions([row],()=>false,()=>false),[])
})
