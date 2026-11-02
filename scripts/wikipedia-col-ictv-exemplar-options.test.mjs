import {test} from 'node:test'
import assert from 'node:assert/strict'
import {ictvExemplarOptions,ictvExemplarNameOptions,ictvNormalizedOptions} from './wikipedia-col-ictv-exemplar-options.mjs'
test('exemplar links explain their scope and exclude known conflicts',()=>{
 const base={page_status:'available',entity_status:'queried',item:'Q1',canonical_title:'A virus',url:'https://en.wikipedia.org/wiki/A_virus',rank_ids:'[]'}
 const rows=[{...base,col_ids:'["OTHER"]'},{...base,item:'Q2',col_ids:'["OLD"]',rank_ids:'["Q34740"]'},{...base,item:'Q2',url:'https://fr.wikipedia.org/wiki/A_virus',col_ids:'["OLD"]',rank_ids:'["Q34740"]'},{...base,item:'Q3',col_ids:'[]',page_status:'disambiguation'}]
 const options=ictvExemplarOptions(rows,()=>true,'NODE',id=>id==='OTHER')
 assert.equal(options.length,1);assert.equal(options[0].item,'https://www.wikidata.org/entity/Q2')
 assert.ok(options[0].parentNames.some(s=>s.includes('ICTV 代表病毒')))
 assert.ok(options[0].parentNames.some(s=>s.includes('属级条目')))
 assert.ok(options[0].parentNames.some(s=>s.includes('外部编号未对应')))
})
test('normalized title candidates require an accepted taxon or virus type and show shared articles',()=>{
 const base={page_status:'available',entity_status:'queried',item:'Q1',canonical_title:'Virus',url:'https://en.wikipedia.org/wiki/Virus',rank_ids:'[]',col_ids:'[]'}
 const rows=[{...base,type_ids:'["Q5"]'},{...base,item:'Q2',type_ids:'["Q16521"]'}]
 const options=ictvNormalizedOptions(rows,()=>true,'NODE',()=>false,item=>item.endsWith('/Q2'))
 assert.equal(options.length,1);assert.ok(options[0].parentNames.some(s=>s.includes('名称归一化匹配')));assert.ok(options[0].parentNames.some(s=>s.includes('多个节点')))
})
test('exemplar names remain labeled candidates and reject conflicting identifiers',()=>{
 const rows=[{name:'A virus',candidates_json:JSON.stringify([{item:'Q1',colIds:['OTHER'],ranks:[],articles:['https://en.wikipedia.org/wiki/A']},{item:'Q2',colIds:['OLD'],ranks:['http://www.wikidata.org/entity/Q34740'],articles:['https://en.wikipedia.org/wiki/B']}])}]
 const options=ictvExemplarNameOptions(rows,()=>true,'NODE',id=>id==='OTHER',item=>item==='Q2')
 assert.equal(options.length,1);assert.equal(options[0].item,'Q2');assert.ok(options[0].parentNames.some(x=>x.includes('ICTV 代表病毒名称匹配')));assert.ok(options[0].parentNames.some(x=>x.includes('属级条目')));assert.ok(options[0].parentNames.some(x=>x.includes('外部编号未对应')));assert.ok(options[0].parentNames.some(x=>x.includes('多个节点')))
})
test('checks URL and item together before choosing a virus article',()=>{
 const en='https://en.wikipedia.org/wiki/Virus',fr='https://fr.wikipedia.org/wiki/Virus',item='https://www.wikidata.org/entity/Q1'
 const base={page_status:'available',entity_status:'queried',item:'Q1',canonical_title:'Virus',rank_ids:'[]',col_ids:'[]'}
 const usable=(url,id)=>id===item&&url===fr
 assert.equal(ictvExemplarOptions([{...base,url:en},{...base,url:fr}],usable,'NODE')[0].url,fr)
 const rows=[{name:'Virus',candidates_json:JSON.stringify([{item,colIds:[],ranks:[],articles:[en,fr]}])}]
 assert.equal(ictvExemplarNameOptions(rows,usable,'NODE')[0].url,fr)
})
