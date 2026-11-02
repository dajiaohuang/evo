import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createReadStream,readFileSync,writeFileSync } from 'node:fs'
import { createInterface } from 'node:readline'
import { createGunzip } from 'node:zlib'
const root='.git/evo-wikipedia-col26-8/'
const inventoryBytes=readFileSync(root+'itis-vernacular-inventory-expanded.json')
const inventory=JSON.parse(inventoryBytes)
const exact=JSON.parse(readFileSync(root+'itis-vernacular-title-candidates-expanded.json'))
const projects=JSON.parse(readFileSync(root+'sources/wikipedia-projects.json')).projects
const already=new Set(exact.matches.map(v=>JSON.stringify([v.node,v.locale,v.title,v.itisTaxonId])))
const matches=[]
for(const locale of [...new Set(inventory.values.map(v=>v.locale))].sort()){
 const project=projects.find(p=>p.locale===locale);assert.ok(project)
 const source=`${root}sources/${locale}wiki-titles-ns0.gz`,receipt=JSON.parse(readFileSync(source+'.receipt.json'))
 assert.equal(receipt.url,`https://dumps.wikimedia.org/${project.dbname}/latest/${project.dbname}-latest-all-titles-in-ns0.gz`)
 const hash=createHash('sha256');for await(const part of createReadStream(source))hash.update(part);assert.equal(hash.digest('hex'),receipt.sha256)
 const names=new Map()
 for(const row of inventory.values.filter(v=>v.locale===locale)){
  const key=row.title.normalize('NFKC').toLocaleLowerCase(locale);if(!names.has(key))names.set(key,[]);names.get(key).push(row)
 }
 let scanned=0,found=0
 for await(const line of createInterface({input:createReadStream(source).pipe(createGunzip()),crlfDelay:Infinity})){
  if(!scanned++&&line==='page_title')continue
  const title=line.replaceAll('_',' '),key=title.normalize('NFKC').toLocaleLowerCase(locale)
  for(const row of names.get(key)??[]){
   if(already.has(JSON.stringify([row.node,locale,title,row.itisTaxonId])))continue
   matches.push({...row,title,url:`https://${locale}.wikipedia.org/wiki/${encodeURIComponent(line)}`,titleSourceSha256:receipt.sha256});found++
  }
 }
 console.log(JSON.stringify({locale,scanned,matches:found}))
}
const out=root+'itis-vernacular-casefold-candidates.json'
writeFileSync(out,JSON.stringify({inventorySha256:createHash('sha256').update(inventoryBytes).digest('hex'),descriptorSha256:inventory.descriptorSha256,matches}))
console.log(JSON.stringify({status:'complete',matches:matches.length,nodes:new Set(matches.map(x=>x.node)).size,output:out}))
