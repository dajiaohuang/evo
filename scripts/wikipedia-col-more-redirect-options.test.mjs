import {test} from 'node:test'
import assert from 'node:assert/strict'
import {moreRedirectOptions} from './wikipedia-col-related-redirect-options.mjs'
test('redirect candidates identify the direction and rank of the target',()=>{
 const base={target_item:'Q1',target_name:'Aus',target_rank:'genus',target_url:'https://en.wikipedia.org/wiki/Aus'};const [down]=moreRedirectOptions([{...base,relation:'descendant'}],()=>true),[up]=moreRedirectOptions([{...base,relation:'ancestor'}],()=>true);assert.ok(down.parentNames[0].includes('descendant taxon (genus)'));assert.ok(up.parentNames[0].includes('ancestor taxon (genus)'));assert.deepEqual(down.abstracts,[]);assert.deepEqual(moreRedirectOptions([{...base,relation:'ancestor'}],()=>false),[])
})
