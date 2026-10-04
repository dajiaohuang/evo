import fs from 'node:fs'
import crypto from 'node:crypto'
const dir='data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC7482940',receipt=`${dir}/abra-zamora-supplement-retrieval-receipts.json`
const rows=fs.existsSync(receipt)?JSON.parse(fs.readFileSync(receipt)):[]
for(let i=1;i<=6;i++){
 const suffix=`s00${i}`,file=`pone.0238306.${suffix}.${i<=3?'docx':'xlsx'}`,path=`${dir}/${file}`
 if(fs.existsSync(path)){console.log(JSON.stringify({file,existing:true}));continue}
 const url=`https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0238306.${suffix}&type=supplementary`,entry={file,url,accessedAt:new Date().toISOString(),sourceLocator:`article.xml supporting-information media xlink:href ${file}`,authenticatedZipFile:false,independentlyRead:false}
 try{
  const response=await fetch(url,{signal:AbortSignal.timeout(30000)}),bytes=Buffer.from(await response.arrayBuffer());Object.assign(entry,{status:response.status,finalUrl:response.url,contentType:response.headers.get('content-type'),bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')})
  const isZip=bytes[0]===0x50&&bytes[1]===0x4b&&bytes[2]===0x03&&bytes[3]===0x04
  if(response.ok&&isZip){fs.writeFileSync(path,bytes,{flag:'wx'});entry.authenticatedZipFile=true;entry.note='ZIP signature checked; workbook/document structure and biological contents not yet inspected'}else entry.note='No valid office ZIP file saved; failed response is not biological absence evidence'
 }catch(error){entry.error=String(error);entry.note='Retrieval failure is not evidence of biological absence'}
 rows.push(entry);fs.writeFileSync(receipt,JSON.stringify(rows,null,2)+'\n');console.log(JSON.stringify({file,status:entry.status??null,bytes:entry.bytes??null,saved:entry.authenticatedZipFile,error:entry.error??null}))
}
