import {strict as assert} from 'node:assert'
import {test} from 'node:test'
import {relatedRedirectOptions} from './wikipedia-col-related-redirect-options.mjs'

test('related redirect options describe the target scope and respect URL checks',()=>{
 const rows=[{target_item:'Q1',target_name:'Example genus',target_url:'https://en.wikipedia.org/wiki/Example',relation:'parent-genus'},
  {target_item:'Q2',target_name:'Example species',target_url:'https://en.wikipedia.org/wiki/Example_species',relation:'child-species'}]
 const options=relatedRedirectOptions(rows,url=>!url.endsWith('Example'))
 assert.equal(options.length,1)
 assert.match(options[0].parentNames[0],/redirects to child species/)
 assert.equal(options[0].relatedRedirectCandidate,true)
 assert.deepEqual(options[0].abstracts,[])
})
