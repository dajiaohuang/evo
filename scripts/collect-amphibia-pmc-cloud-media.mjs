import fs from 'node:fs'
import crypto from 'node:crypto'
const pmc=process.argv[2],wanted=process.argv.slice(3)
if(!/^PMC\d+$/.test(pmc??'')||!wanted.length||wanted.some(s=>s.includes('/')||s.includes('\\')))throw Error('Supply archived PMCID and exact media basenames')
const dir=`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${pmc}`,reading=JSON.parse(fs.readFileSync(`${dir}/reading-sections.json`)),base='https://pmc-oa-opendata.s3.amazonaws.com/',receipt=`${dir}/pmc-cloud-media-retrieval-receipts.json`,rows=fs.existsSync(receipt)?JSON.parse(fs.readFileSync(receipt)):[]
async function request(url){const r=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(`HTTP${r.status} ${url}`);return r}
const versionUrl=`${base}?list-type=2&prefix=${pmc}.&delimiter=/`,versionXml=await(await request(versionUrl)).text();fs.writeFileSync(`${dir}/pmc-cloud-version-list.xml`,versionXml)
const prefixes=[...versionXml.matchAll(/<CommonPrefixes><Prefix>([^<]+)<\/Prefix><\/CommonPrefixes>/g)].map(m=>m[1]);if(!prefixes.length)throw Error('No current cloud article version; not evidence of biological absence')
for(const prefix of prefixes){
 if(!new RegExp(`^${pmc}\\.\\d+/$`).test(prefix))throw Error('Unexpected version prefix')
 const metaUrl=`${base}${prefix}${prefix.slice(0,-1)}.json`,metaBytes=Buffer.from(await(await request(metaUrl)).arrayBuffer()),m=JSON.parse(metaBytes)
 if(m.pmcid!==pmc||String(m.doi).toLowerCase()!==reading.articleIds.doi.toLowerCase())throw Error('Cloud metadata PMCID/DOI does not match archived article')
 const license=String(m.license_code).toLowerCase().replaceAll('_','-').replaceAll(' ','-');if(!['cc-by','cc-by-4.0','ccby','ccby4.0'].includes(license))throw Error(`Cloud license ${m.license_code} needs separate review before media retrieval`)
 fs.writeFileSync(`${dir}/cloud-${prefix.slice(0,-1)}-metadata.json`,metaBytes)
 for(const mediaUrl of m.media_urls??[]){const original=new URL(mediaUrl);if(original.protocol==='s3:'&&original.hostname!=='pmc-oa-opendata')throw Error('Unrecognized S3 bucket');const url=original.protocol==='s3:'?`${base.slice(0,-1)}${original.pathname}${original.search}`:mediaUrl,u=new URL(url),name=decodeURIComponent(u.pathname.split('/').at(-1));if(!wanted.includes(name))continue
  if(u.origin!==base.slice(0,-1)||!u.pathname.startsWith(`/${prefix}`))throw Error('Media URL outside discovered article version')
  const path=`${dir}/${name}`;if(fs.existsSync(path)){console.log(JSON.stringify({name,existing:true}));continue}
  const entry={file:name,url,metadataMediaUrl:mediaUrl,metadataUrl:metaUrl,pmcid:m.pmcid,doi:m.doi,version:m.version,licenseCode:m.license_code,isManuscript:m.is_manuscript,isRetracted:m.is_retracted,accessedAt:new Date().toISOString(),saved:false,independentlyRead:false}
  try{const r=await request(url),bytes=Buffer.from(await r.arrayBuffer()),md5=crypto.createHash('md5').update(bytes).digest('hex'),expected=u.searchParams.get('md5');Object.assign(entry,{status:r.status,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),md5,expectedMd5:expected,md5Matched:expected?md5===expected.toLowerCase():null,contentType:r.headers.get('content-type')});if(expected&&md5!==expected.toLowerCase())throw Error('Cloud URL MD5 mismatch');if(name.endsWith('.docx')&&bytes.subarray(0,4).toString('hex')!=='504b0304')throw Error('Not a valid office ZIP signature');fs.writeFileSync(path,bytes,{flag:'wx'});entry.saved=true;entry.note='NLM PMC Article Datasets cloud media; archived-source DOI and license matched; scientific contents not yet independently read'}catch(error){entry.error=String(error);entry.note='Retrieval failure is not biological absence evidence'}
  rows.push(entry);fs.writeFileSync(receipt,JSON.stringify(rows,null,2)+'\n');console.log(JSON.stringify({name,saved:entry.saved,bytes:entry.bytes,md5Matched:entry.md5Matched,error:entry.error}))
 }
}
const missing=wanted.filter(name=>!fs.existsSync(`${dir}/${name}`));console.log(JSON.stringify({pmc,versions:prefixes,missing,testsRun:false}))
