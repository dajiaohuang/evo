import {test} from 'node:test'
import assert from 'node:assert/strict'
import {peerRedirectOptions} from './wikipedia-col-related-redirect-options.mjs'
test('redirect to another tree node carries explicit uncertainty',()=>{const row={target_item:'Q1',target_name:'Aus bus',target_url:'https://en.wikipedia.org/wiki/Aus_bus'},[o]=peerRedirectOptions([row],()=>true);assert.ok(o.parentNames[0].includes('another tree node in the same family; taxonomic identity unverified'));assert.equal(o.peerRedirectCandidate,true);assert.deepEqual(o.abstracts,[]);assert.deepEqual(peerRedirectOptions([row],()=>false),[])})
