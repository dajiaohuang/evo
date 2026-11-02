import {test} from 'node:test'
import assert from 'node:assert/strict'
import {unidentifiedPeerRedirectOptions} from './wikipedia-col-related-redirect-options.mjs'
test('peer redirect discloses both source identity and target differences',()=>{const row={target_item:'Q1',target_name:'Aus bus',target_url:'https://en.wikipedia.org/wiki/Aus_bus'},[o]=unidentifiedPeerRedirectOptions([row],()=>true);assert.equal(o.unidentifiedPeerRedirectCandidate,true);assert.ok(o.parentNames.some(x=>x.includes('another tree node in the same family; taxonomic identity unverified')));assert.ok(o.parentNames.some(x=>x.includes('Source item lacks a COL identifier; identity unverified')));assert.deepEqual(o.abstracts,[]);assert.deepEqual(unidentifiedPeerRedirectOptions([row],()=>false),[])})
