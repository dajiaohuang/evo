import {test} from 'node:test'
import assert from 'node:assert/strict'
import {wormsRedirectOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('WoRMS synonym candidates identify the accepted name and other tree node',()=>{
 const row={node_id:'a',item:'https://www.wikidata.org/entity/Q1',source_name:'Old name',accepted_name:'New name',target_cols:JSON.stringify(['b']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/New_name'}])}
 const [option]=wormsRedirectOptions([row],()=>true,id=>id==='b')
 assert.equal(option.wormsRedirectCandidate,true);assert.ok(option.parentNames.some(x=>x.includes('WoRMS synonym points to accepted name')&&x.includes('Old name → New name')));assert.ok(option.parentNames.some(x=>x.includes('Target article identifies another tree node')));assert.deepEqual(option.abstracts,[])
 assert.deepEqual(wormsRedirectOptions([row],()=>false,()=>true),[])
})
