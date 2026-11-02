import {test} from 'node:test'
import assert from 'node:assert/strict'
import {unidentifiedRedirectOptions} from './wikipedia-col-related-redirect-options.mjs'
test('redirect option discloses missing source COL identity',()=>{const row={target_item:'Q1',target_name:'Aus',target_rank:'genus',target_url:'https://en.wikipedia.org/wiki/Aus',relation:'ancestor'},[o]=unidentifiedRedirectOptions([row],()=>true);assert.equal(o.unidentifiedRedirectCandidate,true);assert.ok(o.parentNames.some(x=>x.includes('ancestor taxon (genus)')));assert.ok(o.parentNames.some(x=>x.includes('Source item lacks a COL identifier; identity unverified')));assert.deepEqual(o.abstracts,[]);assert.deepEqual(unidentifiedRedirectOptions([row],()=>false),[])})
