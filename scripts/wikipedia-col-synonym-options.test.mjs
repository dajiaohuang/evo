import { test } from 'node:test'
import assert from 'node:assert/strict'
import { synonymWikidataOptions, exactWikidataOptions } from './wikipedia-col-synonym-options.mjs'

test('synonym candidates keep their provenance and exclude conflicting links', () => {
  const en='https://en.wikipedia.org/wiki/Example', zh='https://zh.wikipedia.org/wiki/Example'
  const rows=[{ name:'Old name', candidates_json:JSON.stringify([{ item:'https://www.wikidata.org/entity/Q1', parentNames:['Parent'], ranks:['rank'], articles:[en,zh] }]) }]
  const options=synonymWikidataOptions(rows,url=>url!==zh)
  assert.deepEqual(options,[{ item:'https://www.wikidata.org/entity/Q1', parentNames:['异名 / Synonym: Old name','Parent'], ranks:['rank'], url:en, abstracts:[] }])
  assert.equal(synonymWikidataOptions(rows,()=>false).length,0)
  assert.equal(synonymWikidataOptions(rows,()=>true,'标签候选 / Label')[0].parentNames[0], '标签候选 / Label: Old name')
})

test('COL identity excludes conflicting candidates and retains exact candidates', () => {
  const url = 'https://en.wikipedia.org/wiki/Example'
  const rows = [{name:'Old name', candidates_json:JSON.stringify([
    {item:'https://www.wikidata.org/entity/Q1', colIds:['A'], parentNames:[], ranks:[], articles:[url]},
    {item:'https://www.wikidata.org/entity/Q2', colIds:['B'], parentNames:[], ranks:[], articles:[url]},
    {item:'https://www.wikidata.org/entity/Q3', colIds:[], parentNames:[], ranks:[], articles:[url]}])}]
  assert.deepEqual(synonymWikidataOptions(rows,()=>true,'Synonym','A').map(x=>x.item), ['https://www.wikidata.org/entity/Q1','https://www.wikidata.org/entity/Q3'])
  assert.deepEqual(exactWikidataOptions(rows,()=>true,'A'), [{item:'https://www.wikidata.org/entity/Q1',url}])
  const options=synonymWikidataOptions(rows,()=>true,'Synonym','A',id=>id==='A')
  assert.equal(options.length,3)
  assert.match(options[1].parentNames[1],/External identifier unresolved/)
  assert.equal(synonymWikidataOptions(rows,()=>true,'Synonym','A',()=>true).length,2)
})

test('selects a valid alternate page for the same Wikidata identity', () => {
  const zh='https://zh.wikipedia.org/wiki/Example', en='https://en.wikipedia.org/wiki/Example'
  const item='https://www.wikidata.org/entity/Q1'
  const rows=[{name:'Example',candidates_json:JSON.stringify([{item,colIds:['A'],parentNames:[],ranks:[],articles:[zh,en]}])}]
  const usable=(url,identity)=>identity===item && url!==zh
  assert.equal(synonymWikidataOptions(rows,usable,'Synonym','A')[0].url,en)
  assert.equal(exactWikidataOptions(rows,usable,'A')[0].url,en)
})
