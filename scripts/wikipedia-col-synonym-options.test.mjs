import { test } from 'node:test'
import assert from 'node:assert/strict'
import { synonymWikidataOptions } from './wikipedia-col-synonym-options.mjs'

test('synonym candidates keep their provenance and exclude conflicting links', () => {
  const en='https://en.wikipedia.org/wiki/Example', zh='https://zh.wikipedia.org/wiki/Example'
  const rows=[{ name:'Old name', candidates_json:JSON.stringify([{ item:'https://www.wikidata.org/entity/Q1', parentNames:['Parent'], ranks:['rank'], articles:[en,zh] }]) }]
  const options=synonymWikidataOptions(rows,url=>url!==zh)
  assert.deepEqual(options,[{ item:'https://www.wikidata.org/entity/Q1', parentNames:['异名 / Synonym: Old name','Parent'], ranks:['rank'], url:en, abstracts:[] }])
  assert.equal(synonymWikidataOptions(rows,()=>false).length,0)
})
