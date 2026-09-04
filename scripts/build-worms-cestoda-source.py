"""Project frozen ChecklistBank Cestoda names into exact COL source scope."""
import argparse,csv,gzip,hashlib,io,json,unicodedata,zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
REGISTRY=ROOT/'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE_SHA='f6deb567467713931bcca73f234f2d61f63d996f65bf3c0f271f188a352b1ee8'; ARCHIVE_BYTES=658677
SOURCE='1127'; ROOT_ID='8Z'; LIMIT=2*1024*1024
def digest(b): return hashlib.sha256(b).hexdigest()
def dump(v,pretty=False): return (json.dumps(v,ensure_ascii=False,indent=2 if pretty else None,separators=None if pretty else (',',':'))+'\n').encode()
def norm(v): return ' '.join(unicodedata.normalize('NFC',v or '').split())
def bare(r):
 n,a=r.get('scientificName') or '',r.get('authorship') or ''; suffix=' '+a
 return n[:-len(suffix)] if a and n.endswith(suffix) else n
def rows(z,member): return list(csv.DictReader(io.TextIOWrapper(z.open(member),encoding='utf-8-sig'),delimiter='\t'))
def source_name(name,taxon):
 return {'id':taxon['ID'],'taxonID':taxon['ID'],'nameID':name['ID'],'scientificName':name['scientificName'],'authorship':name.get('authorship') or '', 'rank':name['rank'],'status':'accepted','url':name.get('link') or taxon.get('link') or ''}
def read_archive(path):
 with zipfile.ZipFile(path) as z:
  members={n:{'bytes':z.getinfo(n).file_size,'sha256':digest(z.read(n))} for n in z.namelist()}
  names={r['ID']:(r,i) for i,r in enumerate(rows(z,'Name.txt'),2)}; refs={r['ID']:(r,i) for i,r in enumerate(rows(z,'Reference.txt'),2)}
  nrefs={}
  for i,r in enumerate(rows(z,'NameReference.txt'),2): r['_row']=i; nrefs.setdefault(r['nameID'],[]).append(r)
  accepted={}; total=provisional=0
  for i,t in enumerate(rows(z,'Taxon.txt'),2):
   n=names.get(t.get('nameID')); 
   if not n or n[0].get('rank','').lower()!='species': continue
   total+=1
   if t.get('provisional')=='1': provisional+=1; continue
   t['_row']=i; n[0]['_row']=n[1]; accepted[t['ID'].rsplit(':',1)[-1]]=(t,n[0])
 return accepted,refs,nrefs,members,total,provisional
def source_refs(t,n,nrefs,refs):
 ids=[x for x in (n.get('referenceID'),t.get('referenceID')) if x]
 ids += [x.get('referenceID') for x in nrefs.get(n['ID'],[]) if x.get('referenceID')]
 out=[]
 for rid in dict.fromkeys(ids):
  item={'referenceID':rid,'missing':rid not in refs}
  if rid in refs: item.update(reference=refs[rid][0],sourceRows=[{'member':'Reference.txt','row':refs[rid][1]}])
  out.append(item)
 return out
def locators(t,n,nrefs,refs):
 out=[{'member':'Taxon.txt','row':t['_row']},{'member':'Name.txt','row':n['_row']}]
 for x in nrefs.get(n['ID'],[]):
  out.append({'member':'NameReference.txt','row':x['_row']})
  if x.get('referenceID') in refs: out.append({'member':'Reference.txt','row':refs[x['referenceID']][1]})
 for rid in (n.get('referenceID'),t.get('referenceID')):
  if rid in refs: out.append({'member':'Reference.txt','row':refs[rid][1]})
 return out
def read_col():
 mb=(REGISTRY/'manifest.json').read_bytes(); files=json.loads(mb)['hierarchy']['nodes']['files']; parents={}; candidates=[]
 for f in files:
  with gzip.open(REGISTRY/f['path'],'rt',encoding='utf-8') as s:
   for line in s:
    r=json.loads(line); parents[r['id']]=r.get('parentId')
    if r.get('rank')=='species' and r.get('status')=='accepted' and r.get('sourceDatasetId')==SOURCE: candidates.append(r)
 rows={}
 for r in candidates:
  x=r.get('parentId'); seen=set()
  while x and x not in seen and x!=ROOT_ID: seen.add(x); x=parents.get(x)
  if x==ROOT_ID: rows[r['id']]=r
 inputs=[]
 for f in files:
  p=REGISTRY/f['path']; b=p.read_bytes(); inputs.append({'path':'data/catalogue-of-life/releases/2026-08-20/registry/'+f['path'],'bytes':len(b),'sha256':digest(b)})
 if len(rows)!=3015: raise ValueError(f'COL source scope changed: {len(rows)}')
 return rows,digest(mb),inputs
def project(archive,metadata,output_root=None):
 raw=archive.read_bytes()
 if len(raw)!=ARCHIVE_BYTES or digest(raw)!=ARCHIVE_SHA: raise ValueError('archive pin mismatch')
 source,refs,nrefs,members,total,provisional=read_archive(archive); col,colsha,colinputs=read_col(); by={}
 for tid,(t,n) in source.items(): by.setdefault((norm(n['scientificName']),norm(n.get('authorship'))),[]).append((tid,t,n))
 records=[]; used=set(); counts={k:0 for k in ('accepted','redirect','ambiguous','unmatched','withheld')}
 for cid,c in sorted(col.items()):
  hits=by.get((norm(bare(c)),norm(c.get('authorship'))),[]); status='accepted' if len(hits)==1 else 'ambiguous' if len(hits)>1 else 'unmatched'; counts[status]+=1; matched=None; loc=[]; rrefs=[]
  if len(hits)==1:
   tid,t,n=hits[0]; used.add(tid); matched=source_name(n,t); loc=locators(t,n,nrefs,refs); rrefs=source_refs(t,n,nrefs,refs)
  records.append({'colId':cid,'colScientificName':c['scientificName'],'colAuthorship':c.get('authorship'),'status':status,'matchedName':matched,'acceptedName':matched,'candidates':[source_name(x[2],x[1]) for x in hits] if len(hits)>1 else [],'mappingBasis':'Exact NFC+whitespace scientific name and authorship; no synonym or fuzzy matching.','sourceRows':loc,'references':rrefs})
 upstream=[]
 for tid,(t,n) in sorted(source.items()):
  if tid not in used: upstream.append({'colId':None,'colScientificName':None,'colAuthorship':None,'status':'upstream-only','matchedName':None,'acceptedName':source_name(n,t),'candidates':[],'mappingBasis':'Strict source accepted concept not linked by exact COL name+authorship; not a global new species claim.','sourceRows':locators(t,n,nrefs,refs),'references':source_refs(t,n,nrefs,refs)})
 base=Path(output_root) if output_root else ROOT; dest=base/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'; dest.mkdir(parents=True,exist_ok=True)
 def shards(prefix,data,role):
  parts=[]; cur=[]; usedb=2
  for r in data:
   size=len(dump(r))+1
   if cur and usedb+size>LIMIT: parts.append(cur); cur=[]; usedb=2
   cur.append(r); usedb+=size
  if cur or not parts: parts.append(cur)
  out=[]
  for i,part in enumerate(parts):
   payload=dump(part); b=gzip.compress(payload,9,mtime=0); b=b[:9]+bytes([255])+b[10:]; name=f'{prefix}-{i:03d}.json.gz'; (dest/name).write_bytes(b); q={'path':'other-animals/'+name,'records':len(part),'bytes':len(b),'sha256':digest(b),'sourceBytes':len(payload),'sourceSha256':digest(payload),'encoding':'gzip','mediaType':'application/json','role':role};
   if part and role=='col-partition': q.update(minColId=part[0]['colId'],maxColId=part[-1]['colId'])
   out.append(q)
  return out
 cf=shards('worms-cestoda',records,'col-partition'); uf=shards('worms-cestoda-source-only',upstream,'upstream-only'); totalbytes=sum(x['bytes'] for x in cf+uf)
 descriptor={'schemaVersion':1,'recordType':'release-pinned-authority-archive-crosswalk','id':'worms-cestoda-archive-crosswalk','packageId':'other-animals','provider':'World Register of Marine Species via ChecklistBank','rowEncoding':'json','encoding':'gzip','mediaType':'application/json','role':'authority-crosswalk','colIdField':'colId','totalCountField':'total','source':{'datasetId':SOURCE,'title':'Cestoda World Database','version':'2026-09-01','versionDoi':'10.48580/d3fy.v90','metadataPath':'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.metadata.json','metadataBytes':metadata.stat().st_size,'metadataSha256':digest(metadata.read_bytes()),'license':'CC-BY-4.0','licenseUrl':'https://creativecommons.org/licenses/by/4.0/','archiveUrl':'https://api.checklistbank.org/dataset/1127/archive','archivePath':'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip','archiveBytes':len(raw),'archiveSha256':digest(raw),'members':members},'scope':{'colRootUsageId':ROOT_ID,'eligibleColSpecies':len(col),'sourceAcceptedSpecies':len(source),'sourceSpeciesRankTaxa':total,'excludedSourceProvisional':provisional},'matching':{'normalization':'NFC and whitespace normalization only; COL trailing authorship removed exactly.','prohibited':'No fuzzy, case-folded, accent-folded, synonym or species-concept matching.'},'counts':{'total':len(records),'records':len(records)+len(upstream),**counts,'upstreamOnly':len(upstream),'bytes':totalbytes},'files':cf,'upstreamOnlyFiles':uf,'deliveryProfiles':{'web-light':{'mode':'summary-only','records':0,'files':[],'totalCompressedBytes':0,'totalSourceBytes':0},'native-full':{'mode':'complete','records':len(records)+len(upstream),'files':[x['path'] for x in cf+uf],'totalCompressedBytes':totalbytes,'totalSourceBytes':sum(x['sourceBytes'] for x in cf+uf)}},'evidenceBoundary':{'en':'Frozen exact nomenclatural crosswalk, not species-concept equivalence, a biological dossier, fossil evidence or expert review.'}}
 dpath=dest/'worms-cestoda-sidecar.json'; db=dump(descriptor,True); dpath.write_bytes(db)
 ledger={'schemaVersion':1,'importType':'COL26.8-to-WoRMS-1127-archive-projection','source':descriptor['source'],'registryManifestSha256':colsha,'registryInputs':colinputs,'generatedBy':{'script':'scripts/build-worms-cestoda-source.py','scriptSha256':digest(Path(__file__).read_bytes())},'outputs':{'descriptor':{'path':'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-cestoda-sidecar.json','bytes':len(db),'sha256':digest(db)},'files':cf,'upstreamOnlyFiles':uf},'scopeAudit':{'colRootUsageId':ROOT_ID,'colSpecies':len(col),'sourceAcceptedSpecies':len(source),'sourceSpeciesRankTaxa':total,'sourceProvisionalExcluded':provisional,'upstreamOnly':len(upstream)}}
 ledgerpath=base/'data/sources/worms-cestoda-archive-1127-import-ledger.json'; ledgerpath.parent.mkdir(parents=True,exist_ok=True); ledgerpath.write_bytes(dump(ledger,True)); print(json.dumps(descriptor['counts']))
def main():
 p=argparse.ArgumentParser(); p.add_argument('--archive',type=Path,default=ROOT/'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip'); p.add_argument('--metadata',type=Path,default=ROOT/'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.metadata.json'); p.add_argument('--output-root',type=Path); a=p.parse_args(); project(a.archive,a.metadata,a.output_root)
if __name__=='__main__': main()
