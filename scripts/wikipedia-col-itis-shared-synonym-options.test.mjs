import {test} from 'node:test'
import assert from 'node:assert/strict'
import {itisSharedSynonymOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('shared synonym candidates disclose both accepted names and ambiguity',()=>{
 const row={node_id:'a',item:'https://www.wikidata.org/entity/Q1',source_name:'COL name',shared_name:'Shared name',accepted_name:'ITIS name',target_cols:JSON.stringify(['b']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/ITIS_name'}])}
 const [option]=itisSharedSynonymOptions([row],()=>true,id=>id==='b')
 assert.equal(option.itisSharedSynonymCandidate,true);assert.ok(option.parentNames.some(x=>x.includes('identity require review')&&x.includes('COL name ← Shared name → ITIS name')));assert.ok(option.parentNames.some(x=>x.includes('Target article identifies another tree node')));assert.deepEqual(option.abstracts,[]);assert.deepEqual(itisSharedSynonymOptions([row],()=>false,()=>true),[])
})
