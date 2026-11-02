import {test} from 'node:test'
import assert from 'node:assert/strict'
import {itisSynonymOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('ITIS synonym links disclose accepted names and conflicting node IDs',()=>{
 const row={node_id:'a',item:'https://www.wikidata.org/entity/Q1',source_name:'Old name',accepted_name:'New name',target_cols:JSON.stringify(['b']),pages:JSON.stringify([{url:'https://en.wikipedia.org/wiki/New_name'}])}
 const [option]=itisSynonymOptions([row],()=>true,id=>id==='b')
 assert.equal(option.itisSynonymCandidate,true);assert.ok(option.parentNames.some(x=>x.includes('ITIS synonym points to accepted name')&&x.includes('Old name → New name')));assert.ok(option.parentNames.some(x=>x.includes('Target article identifies another tree node')));assert.deepEqual(option.abstracts,[]);assert.deepEqual(itisSynonymOptions([row],()=>false,()=>true),[])
})
