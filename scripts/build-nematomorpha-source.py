"""Project the historical 2010 freshwater Nematomorpha checklist into COL."""
import argparse,csv,gzip,hashlib,json,tarfile,unicodedata
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; REG=ROOT/'data/catalogue-of-life/releases/2026-08-20/registry'; OUT=ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'; ARCHIVE=ROOT/'data/sources/archives/checklistbank-1119-nematomorpha-2010-12.tar.gz'; META=ROOT/'data/sources/archives/checklistbank-1119-nematomorpha-2010-12.metadata.json'; SHA='cd3de3c03e103e58eaeb02fbf2d7df1b1f75e4ecaa6510f2e8a50bba9523e3b3'; BYTES=9736; ROOT_ID='5B'; SOURCE='1119'; LIMIT=2*1024*1024
def digest(b):return hashlib.sha256(b).hexdigest()
def dump(x,pretty=False):return (json.dumps(x,ensure_ascii=False,indent=2 if pretty else None,separators=None if pretty else (',',':'))+'\n').encode()
def norm(x):return ' '.join(unicodedata.normalize('NFC',x or '').split())
def name(r):return ' '.join(x for x in [r.get('Genus'),r.get('SubGenusName') and '('+r['SubGenusName']+')',r.get('SpeciesEpithet')] if x)
def read_archive(path):
 with tarfile.open(fileobj=gzip.GzipFile(fileobj=path.open('rb')),mode='r:') as t:
  members={n:{'bytes':t.getmember(n).size,'sha256':digest(t.extractfile(n).read())} for n in t.getnames()}
  raw=t.extractfile('AcceptedSpecies.tsv').read(); rows=list(csv.DictReader(raw.decode('utf-8-sig').splitlines(),delimiter='\t'))
 return [dict(r,_ordinal=i+2,scientificName=name(r)) for i,r in enumerate(rows)],members
def read_col():
 b=(REG/'manifest.json').read_bytes(); fs=json.loads(b.decode())['hierarchy']['nodes']['files']; parents={}; cand=[]
 for f in fs:
  with gzip.open(REG/f['path'],'rt',encoding='utf8') as s:
   for l in s:
    r=json.loads(l);parents[r['id']]=r.get('parentId');
    if r.get('rank')=='species' and r.get('status')=='accepted' and str(r.get('sourceDatasetId'))==SOURCE:cand.append(r)
 def inside(i):
  seen=set()
  while i and i not in seen:
   if i==ROOT_ID:return True
   seen.add(i);i=parents.get(i)
  return False
 rows={r['id']:r for r in cand if inside(r.get('parentId'))}; inputs=[]
 for f in fs:
  z=(REG/f['path']).read_bytes();inputs.append({'path':'data/catalogue-of-life/releases/2026-08-20/registry/'+f['path'],'records':f['records'],'bytes':len(z),'sha256':digest(z)})
 return rows,digest(b),inputs
def obj(r):return {'id':r['AcceptedTaxonID'],'scientificName':r['scientificName'],'authorship':r.get('AuthorString'),'rank':'Species','status':'accepted','sourceRow':r['_ordinal'],'raw':r}
def main():
 p=argparse.ArgumentParser();p.add_argument('--archive',type=Path,default=ARCHIVE);p.add_argument('--metadata',type=Path,default=META);p.add_argument('--output-root',type=Path,default=ROOT);a=p.parse_args(); raw=a.archive.read_bytes(); meta=a.metadata.read_bytes(); md=json.loads(meta.decode())
 if len(raw)!=BYTES or digest(raw)!=SHA:raise ValueError('archive pin mismatch')
 source,members=read_archive(a.archive);col,colsha,inputs=read_col(); by={(norm(r['scientificName']),norm(r.get('AuthorString'))):r for r in source}; rec=[];used=set();counts={x:0 for x in ('accepted','redirect','ambiguous','unmatched','withheld')}
 for cid,c in sorted(col.items()):
  r=by.get((norm(c['scientificName'].removesuffix(' '+(c.get('authorship') or ''))),norm(c.get('authorship')))); st='accepted' if r else 'unmatched';counts[st]+=1
  if r:used.add(r['AcceptedTaxonID'])
  rec.append({'colId':cid,'colScientificName':c['scientificName'],'colAuthorship':c.get('authorship'),'status':st,'matchedName':obj(r) if r else None,'acceptedName':obj(r) if r else None,'candidates':[],'mappingBasis':'Exact normalized source scientific name plus authorship; no synonym or fuzzy matching.','sourceRows':[{'member':'AcceptedSpecies.tsv','row':r['_ordinal']}] if r else [] ,'references':[]})
 up=[{'colId':None,'colScientificName':None,'colAuthorship':None,'status':'upstream-only','matchedName':None,'acceptedName':obj(r),'candidates':[],'mappingBasis':'Accepted historical source concept not implicated by exact COL; not a global novelty claim.','sourceRows':[{'member':'AcceptedSpecies.tsv','row':r['_ordinal']}],'references':[]} for r in source if r['AcceptedTaxonID'] not in used]
 base=a.output_root;out=base/OUT.relative_to(ROOT);out.mkdir(parents=True,exist_ok=True)
 def write(prefix,rows,role):
  parts=[];cur=[];n=2
  for r in rows:
   z=len(dump(r));
   if cur and n+z>LIMIT:parts.append(cur);cur=[];n=2
   cur.append(r);n+=z
  if cur or not parts:parts.append(cur)
  fs=[]
  for i,q in enumerate(parts):
   fn=f'{prefix}-{i:03d}.json.gz';payload=dump(q);data=gzip.compress(payload,9,mtime=0);data=data[:9]+bytes([255])+data[10:];(out/fn).write_bytes(data);x={'path':'other-animals/'+fn,'records':len(q),'bytes':len(data),'sha256':digest(data),'sourceBytes':len(payload),'sourceSha256':digest(payload),'encoding':'gzip','mediaType':'application/json','role':role};
   if q and role=='col-partition':x.update(minColId=q[0]['colId'],maxColId=q[-1]['colId'])
   fs.append(x)
  return fs
 files=write('worms-nematomorpha',rec,'col-partition');ups=write('worms-nematomorpha-source-only',up,'upstream-only') if up else []
 desc={'schemaVersion':1,'recordType':'release-pinned-authority-archive-crosswalk','id':'worms-nematomorpha-archive-crosswalk','packageId':'other-animals','provider':'World checklist of freshwater Nematomorpha species via ChecklistBank','rowEncoding':'json','colIdField':'colId','totalCountField':'total','source':{'datasetId':1119,'title':md['title'],'version':md['version'],'versionDoi':md['versionDoi'],'license':'CC-BY-4.0','archiveUrl':'https://api.checklistbank.org/dataset/1119/archive','archivePath':'data/sources/archives/checklistbank-1119-nematomorpha-2010-12.tar.gz','metadataPath':'data/sources/archives/checklistbank-1119-nematomorpha-2010-12.metadata.json','archiveBytes':len(raw),'archiveSha256':digest(raw),'metadataBytes':len(meta),'metadataSha256':digest(meta),'members':members},'scope':{'colRootUsageId':ROOT_ID,'sourceDatasetId':1119,'eligibleColSpecies':len(col),'sourceAcceptedSpecies':len(source)},'matching':{'normalization':'NFC and whitespace normalization only; COL trailing authorship is removed exactly.','prohibited':'No fuzzy, synonym, case-folded, accent-folded or species-concept matching.'},'counts':{'total':len(rec),**counts,'upstreamOnly':len(up),'records':len(rec)+len(up)},'files':files,'upstreamOnlyFiles':ups,'totalCompressedBytes':sum(x['bytes'] for x in files+ups),'totalSourceBytes':sum(x['sourceBytes'] for x in files+ups),'deliveryProfiles':{'web-light':{'mode':'summary-only','records':0,'files':[],'totalCompressedBytes':0,'totalSourceBytes':0},'native-full':{'mode':'complete','records':len(rec)+len(up),'files':[x['path'] for x in files+ups],'totalCompressedBytes':sum(x['bytes'] for x in files+ups),'totalSourceBytes':sum(x['sourceBytes'] for x in files+ups)}},'evidenceBoundary':{'en':'Historical 2010 freshwater Nematomorpha checklist projection; not a complete current Nematomorpha checklist, global novelty claim or species-concept equivalence.','zh':'2010 年历史淡水 Nematomorpha 名录投影；不是当前完整 Nematomorpha 名录、全球新增物种声明或物种概念等同性。'},'limitations':['The source is historical (Dec 2010); no current completeness claim is made.','Synonyms and infraspecific rows remain only in the pinned archive evidence.']}
 db=dump(desc,True);(out/'worms-nematomorpha-sidecar.json').write_bytes(db);ledger={'schemaVersion':1,'importType':'COL26.8-to-checklistbank-1119-archive-projection','source':desc['source'],'registryManifestSha256':colsha,'registryInputs':inputs,'generatedBy':{'script':'scripts/build-nematomorpha-source.py','scriptSha256':digest(Path(__file__).read_bytes().replace(b'\r\n',b'\n')),'hashNormalization':'LF'},'outputs':{'descriptor':{'path':'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-nematomorpha-sidecar.json','bytes':len(db),'sha256':digest(db)},'files':files,'upstreamOnlyFiles':ups},'scopeAudit':{'colRootUsageId':ROOT_ID,'sourceDatasetId':1119,'colSpecies':len(col),'sourceAcceptedSpecies':len(source)}};lp=base/'data/sources/worms-nematomorpha-archive-1119-import-ledger.json';lp.parent.mkdir(parents=True,exist_ok=True);lp.write_bytes(dump(ledger,True));print(json.dumps(desc['counts']))
if __name__=='__main__':main()
