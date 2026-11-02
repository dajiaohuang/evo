import {test} from 'node:test'
import assert from 'node:assert/strict'
import {pageAuditAllows} from './wikipedia-col-page-audit-options.mjs'
test('page audit rejects disambiguation and missing URLs, and only the conflicting item of a shared URL',()=>{
 const badUrl=url=>url==='missing'||url==='disambiguation'
 const badItem=(url,item)=>url==='shared'&&item==='Qwrong'
 assert.equal(pageAuditAllows('missing','Q1',badUrl,badItem),false)
 assert.equal(pageAuditAllows('disambiguation',null,badUrl,badItem),false)
 assert.equal(pageAuditAllows('shared','Qwrong',badUrl,badItem),false)
 assert.equal(pageAuditAllows('shared','Qright',badUrl,badItem),true)
 assert.equal(pageAuditAllows('valid',null,badUrl,badItem),true)
})
