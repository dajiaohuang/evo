import fs from 'node:fs'
import path from 'node:path'
const ledger=JSON.parse(fs.readFileSync('docs/amphibia-content/collection-placeholder-coverage.json'))
const root=path.resolve('content/taxa')+path.sep
for(const failure of ledger.failures){
 const dir=path.resolve(failure.path)
 if(!dir.startsWith(root))throw Error('Outside taxon workspace')
 for(const filename of fs.readdirSync(dir).filter(n=>/^page\.(en|zh)\.md\.(collection-placeholder\.tmp|content-tmp)$/.test(n))){
  const stage=path.join(dir,filename),target=stage.replace(/\.(collection-placeholder\.tmp|content-tmp)$/,'')
  const text=fs.readFileSync(stage,'utf8')
  if(!text.includes('amphibia-collection-placeholder'))throw Error(`Unexpected staged content: ${stage}`)
  for(let attempt=0;;attempt++){try{fs.renameSync(stage,target);break}catch(error){if(error.code!=='EPERM'||attempt>=2)throw error;await new Promise(resolve=>setTimeout(resolve,500))}}
  console.log(JSON.stringify({recovered:target}))
 }
}
