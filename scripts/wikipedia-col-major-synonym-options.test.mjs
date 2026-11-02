import {test} from 'node:test'
import assert from 'node:assert/strict'
import {majorSynonymOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('source catalog synonym candidates identify uncertain matches and never carry abstracts',()=>{
 const row={node_id:'a',item:'Q1',source_name:'Accepted',synonym_name:'Old',target_cols:JSON.stringify(['b','unknown']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Old'}])}
 const [o]=majorSynonymOptions([row],()=>true,id=>id==='b')
 assert.match(o.parentNames[0],/Source catalog synonym candidate, taxonomic identity unverified: Accepted ← Old/)
 assert.ok(o.parentNames.some(x=>x.includes('Target article identifies another tree node')))
 assert.ok(o.parentNames.some(x=>x.includes('Target external identifier unresolved')))
 assert.deepEqual(o.abstracts,[]);assert.equal(o.majorSynonymCandidate,true)
 assert.deepEqual(majorSynonymOptions([row],()=>false,()=>false),[])
})
test('uses another page when the preferred URL conflicts with the candidate identity',()=>{
 const row={node_id:'a',item:'Q1',source_name:'Accepted',synonym_name:'Old',target_cols:'[]',pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Old'},{url:'https://fr.wikipedia.org/wiki/Old'}])}
 const [option]=majorSynonymOptions([row],(url,item)=>item==='Q1'&&!url.includes('//en.'),()=>false)
 assert.equal(option.url,'https://fr.wikipedia.org/wiki/Old')
})
test('marks uncertain hybrid identity when the source synonym contains a hybrid marker',()=>{
 const row={node_id:'a',item:'Q1',source_name:'Achillea × jaborneggii',synonym_name:'Achillea × travignolensis',target_cols:'[]',pages:JSON.stringify([{url:'https://ceb.wikipedia.org/wiki/Achillea_travignolensis'}])}
 const [option]=majorSynonymOptions([row],()=>true,()=>false)
 assert.ok(option.parentNames.some(label=>label.includes('Hybrid identity unverified')))
})
