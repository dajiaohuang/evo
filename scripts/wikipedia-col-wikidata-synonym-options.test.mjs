import {strict as assert} from 'node:assert'
import {test} from 'node:test'
import {wikidataSynonymEdgeOptions} from './wikipedia-col-wikidata-synonym-options.mjs'
test('synonym candidate identifies other tree nodes and unverified scope',()=>{
 const row={node_id:'A',source_name:'Old name',source_rank:'species',target_item:'https://www.wikidata.org/entity/Q2',target_names:'["New name"]',target_ranks:'["http://www.wikidata.org/entity/Q7432"]',target_cols:'["B"]',pages:'[{"url":"https://en.wikipedia.org/wiki/New"}]'}
 const [option]=wikidataSynonymEdgeOptions([row],()=>true,id=>id==='B')
 assert.ok(option.parentNames.some(x=>x.includes('another tree node')))
 assert.ok(option.parentNames.some(x=>x.includes('taxonomic scope unverified')))
 assert.deepEqual(option.abstracts,[])
 assert.deepEqual(wikidataSynonymEdgeOptions([row],()=>false,()=>true),[])
 const contextual=wikidataSynonymEdgeOptions([{...row,source_match:'matched-name-parent-rank'}],()=>true,()=>false)[0]
 assert.ok(contextual.parentNames.some(x=>x.includes('Source identity based on name, parent and rank; unverified')))
 const nomenclatural=wikidataSynonymEdgeOptions([{...row,relationship_kind:'nomenclatural'}],()=>true,()=>false)[0]
 assert.ok(nomenclatural.parentNames.some(x=>x.includes('original or replacement name relationship')))
})
