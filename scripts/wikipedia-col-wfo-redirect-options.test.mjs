import {test} from 'node:test'
import assert from 'node:assert/strict'
import {wfoRedirectOptions} from './wikipedia-col-wfo-redirect-options.mjs'
test('WFO synonym links require the accepted name, species rank and matching destination item',()=>{
 const row={accepted_name:'Accepted species',candidates_json:JSON.stringify([{item:'https://www.wikidata.org/entity/Q1',names:['Accepted species'],ranks:['http://www.wikidata.org/entity/Q7432'],colIds:['OTHER'],articles:['https://en.wikipedia.org/wiki/Wrong','https://fr.wikipedia.org/wiki/Right']},{item:'https://www.wikidata.org/entity/Q2',names:['Other'],ranks:[],colIds:[],articles:['https://en.wikipedia.org/wiki/Other']},{item:'https://www.wikidata.org/entity/Q3',names:['Accepted species'],ranks:['http://www.wikidata.org/entity/Q34740'],colIds:[],articles:['https://en.wikipedia.org/wiki/Genus']}])}
 const pages={'https://en.wikipedia.org/wiki/Wrong':{status:'available',item:'Q4'},'https://fr.wikipedia.org/wiki/Right':{status:'available',item:'Q1'}}
 const out=wfoRedirectOptions([row],url=>pages[url],()=>true,'NODE',id=>id==='OTHER')
 assert.equal(out.length,1);assert.equal(out[0].url,'https://fr.wikipedia.org/wiki/Right');assert.ok(out[0].parentNames.some(x=>x.includes('WFO 将此名称列为异名')));assert.ok(out[0].parentNames.some(x=>x.includes('编号对应另一节点')))
})
