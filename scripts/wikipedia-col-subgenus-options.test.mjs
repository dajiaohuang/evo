import { test } from 'node:test'
import assert from 'node:assert/strict'
import { subgenusOptions, subgenusExactOptions, subgenusRankOptions } from './wikipedia-col-subgenus-options.mjs'
test('abbreviated names remain marked candidates and exclude known conflicts', () => {
  const rows=[{locale:'en',title:'Sciurus_aberti',original_name:'Sciurus (Otosciurus) aberti'}]
  const options=subgenusOptions(rows,()=>true)
  assert.equal(options[0].url,'https://en.wikipedia.org/wiki/Sciurus_aberti')
  assert.match(options[0].parentNames[0],/Abbreviated subgenus/)
  assert.equal(subgenusOptions(rows,()=>false).length,0)
  const unknown={...rows[0],col_ids:'["OLD"]'}
  const marked=subgenusOptions([unknown],()=>true,'A',()=>false)
  assert.equal(marked.length,1);assert.match(marked[0].parentNames[1],/External identifier unresolved/)
  assert.equal(subgenusOptions([unknown],()=>true,'A',()=>true).length,0)
  assert.match(subgenusOptions(rows,()=>true,'A',()=>false,()=> 'unresolved')[0].parentNames[1],/External identifier unresolved/)
  assert.equal(subgenusOptions(rows,()=>true,'A',()=>false,()=> 'conflict').length,0)
})
test('subgenus title and same-name title remain distinct candidates',()=>{
 const rows=[{locale:'en',title:'Euxoa_(subgenus)',original_name:'Euxoa (Euxoa)',kind:'rank-title'},{locale:'en',title:'Foo',original_name:'Bar (Foo)',kind:'name-title'}]
 const options=subgenusRankOptions(rows,()=>true)
 assert.match(options[0].parentNames[0],/Subgenus title/)
 assert.match(options[1].parentNames[0],/Same-name title/)
 assert.equal(subgenusRankOptions(rows,()=>false).length,0)
 assert.equal(subgenusRankOptions([{...rows[0],page_status:'disambiguation'}],()=>true).length,0)
 assert.equal(subgenusRankOptions([{...rows[0],rank_ids:'["Q34740"]'}],()=>true,'A').length,0)
 assert.equal(subgenusRankOptions([{...rows[0],col_ids:'["B"]'}],()=>true,'A').length,0)
 assert.equal(subgenusRankOptions([{...rows[0],rank_ids:'["Q3238261"]',col_ids:'["A"]'}],()=>true,'A').length,1)
 assert.match(subgenusRankOptions([{...rows[0],rank_ids:'["Q3238261"]',col_ids:'["OLD"]'}],()=>true,'A',()=>false)[0].parentNames[1],/External identifier unresolved/)
})
test('exclude unavailable and conflicting titles while preserving unchecked candidates',()=>{
  const rows=[
    {locale:'en',title:'A',original_name:'A',page_status:'available',item:'Q1',col_ids:'["A"]'},
    {locale:'en',title:'B',original_name:'B',page_status:'available',item:'Q2',col_ids:'["B"]'},
    {locale:'en',title:'C',original_name:'C',page_status:'disambiguation'},
    {locale:'en',title:'D',original_name:'D'}]
  assert.deepEqual(subgenusOptions(rows,()=>true,'A').map(x=>x.item),['Wikipedia:en:A','Wikipedia:en:D'])
  assert.deepEqual(subgenusExactOptions(rows,()=>true,'A'),[{item:'https://www.wikidata.org/entity/Q1',url:'https://en.wikipedia.org/wiki/A'}])
})
