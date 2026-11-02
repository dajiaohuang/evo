import {test} from 'node:test'
import assert from 'node:assert/strict'
import {wfoFormatOptions} from './wikipedia-col-wfo-format-options.mjs'
test('name-format candidates require matching authors, genus, rank and page identity',()=>{
 const base={source_name:'Genus species',col_author:'A. Author',wfo_author:'A.Author',candidates_json:JSON.stringify([{item:'https://www.wikidata.org/entity/Q1',names:['Genus spe-cies'],ranks:['http://www.wikidata.org/entity/Q7432'],colIds:['OLD'],articles:['https://en.wikipedia.org/wiki/Name']},{item:'https://www.wikidata.org/entity/Q2',names:['Other species'],ranks:[],colIds:[],articles:['https://en.wikipedia.org/wiki/Other']}])}
 const page=url=>url.endsWith('/Name')?{status:'available',item:'Q1'}:{status:'available',item:'Q2'}
 const out=wfoFormatOptions([base],page,()=>true,'NODE',()=>false)
 assert.equal(out.length,1);assert.ok(out[0].parentNames.some(s=>s.includes('条目拼写不同')));assert.ok(out[0].parentNames.some(s=>s.includes('外部编号未对应')))
 assert.equal(wfoFormatOptions([{...base,wfo_author:'B. Author'}],page,()=>true,'NODE',()=>false).length,0)
 assert.equal(wfoFormatOptions([base],()=>({status:'available',item:'Q9'}),()=>true,'NODE',()=>false).length,0)
 assert.equal(wfoFormatOptions([base],page,()=>true,'NODE',id=>id==='OLD').length,0)
})
