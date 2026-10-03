import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC13061190',file=`${dir}/quimi-supplement-retrieval-receipts.json`,rows=fs.existsSync(file)?JSON.parse(fs.readFileSync(file)):[]
for(const [suffix,ext] of [['s001','pdf'],['s002','tif'],['s003','pdf']]){
 const name=`pone.0345097.${suffix}.${ext}`,path=`${dir}/${name}`
 if(fs.existsSync(path)){console.log(JSON.stringify({file:name,existing:true}));continue}
 const url=`https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0345097.${suffix}&type=supplementary`,entry={file:name,url,accessedAt:new Date().toISOString(),sourceLocator:`article.xml supporting-information media ${name}`,independentlyRead:false,saved:false}
 try{const response=await fetch(url,{signal:AbortSignal.timeout(30000)}),bytes=Buffer.from(await response.arrayBuffer());Object.assign(entry,{status:response.status,finalUrl:response.url,contentType:response.headers.get('content-type'),bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')});const signature=ext==='pdf'?bytes.subarray(0,5).toString()==='%PDF-':['49492a00','4d4d002a'].includes(bytes.subarray(0,4).toString('hex'));if(response.ok&&signature){fs.writeFileSync(path,bytes,{flag:'wx'});entry.saved=true;entry.note='File signature checked; contents not yet independently read'}else entry.note='No valid source file saved; failure is not biological absence evidence'}catch(error){entry.error=String(error);entry.note='Retrieval failure is not biological absence evidence'}
 rows.push(entry);fs.writeFileSync(file,JSON.stringify(rows,null,2)+'\n');console.log(JSON.stringify({file:name,status:entry.status??null,bytes:entry.bytes??null,saved:entry.saved,error:entry.error??null}))
}
