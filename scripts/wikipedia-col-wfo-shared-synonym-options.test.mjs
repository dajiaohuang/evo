import {test} from 'node:test'
import assert from 'node:assert/strict'
import {wfoSharedSynonymOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('WFO shared identifier candidates disclose name differences and identity uncertainty',()=>{
 const row={node_id:'a',item:'https://www.wikidata.org/entity/Q1',source_name:'COL name',shared_name:'WFO name',target_names:JSON.stringify(['target name']),target_cols:JSON.stringify(['b']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/Target'}])}
 const [option]=wfoSharedSynonymOptions([row],()=>true,id=>id==='b');assert.equal(option.wfoSharedSynonymCandidate,true);assert.ok(option.parentNames.some(x=>x.includes('target name and identity require review')&&x.includes('COL name ← WFO name → target name')));assert.ok(option.parentNames.some(x=>x.includes('Target article identifies another tree node')));assert.deepEqual(option.abstracts,[]);assert.deepEqual(wfoSharedSynonymOptions([row],()=>false,()=>true),[])
})
