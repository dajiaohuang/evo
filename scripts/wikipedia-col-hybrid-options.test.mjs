import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hybridOptions } from './wikipedia-col-hybrid-options.mjs'
test('retain checked hybrid titles but exclude conflicts and disambiguation',()=>{
 const row={locale:'en',title:'Plant_x_example',original_name:'Plant × example',status:'available',col_ids:'[]'}
 assert.equal(hybridOptions([row],()=>true,'A')[0].url,'https://en.wikipedia.org/wiki/Plant_x_example')
 assert.equal(hybridOptions([{...row,col_ids:'["B"]'}],()=>true,'A').length,0)
 assert.equal(hybridOptions([{...row,status:'disambiguation'}],()=>true,'A').length,0)
 assert.equal(hybridOptions([row],()=>false,'A').length,0)
})
