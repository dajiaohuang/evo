import {strict as assert} from 'node:assert'
import {test} from 'node:test'
import {wormsSidecarOptions} from './wikipedia-col-worms-sidecar-options.mjs'
test('WoRMS candidates retain uncertainty and identify conflicting current IDs',()=>{
 const row={node_id:'A',source_name:'Old species',item:'https://www.wikidata.org/entity/Q2',target_names:'["New species"]',target_ranks:'["http://www.wikidata.org/entity/Q7432"]',target_cols:'["B"]',pages:'[{"url":"https://en.wikipedia.org/wiki/New"}]'}
 const [option]=wormsSidecarOptions([row],()=>true,id=>id==='B')
 assert.ok(option.parentNames.some(x=>x.includes('taxonomic identity unverified')));assert.ok(option.parentNames.some(x=>x.includes('another tree node')));assert.deepEqual(option.abstracts,[])
 assert.deepEqual(wormsSidecarOptions([row],()=>false,()=>true),[])
})
