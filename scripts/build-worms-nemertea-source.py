"""Project the pinned WoRMS Nemertea archive into the COL26.8 Nemertea scope."""
import argparse, csv, gzip, hashlib, io, json, unicodedata, zipfile
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1085-nemertea-2026-09-01.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-1085-nemertea-2026-09-01.metadata.json'
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
ARCHIVE_SHA = '739531754268619a6bea16de394eb782d218d87a402291c1adc9a5ce098a06d0'; ARCHIVE_BYTES = 440016
COL_ROOT = '5C'; COL_SOURCE = '1085'; SHARD_LIMIT = 2 * 1024 * 1024
def sha(b): return hashlib.sha256(b).hexdigest()
def dump(x, pretty=False): return (json.dumps(x, ensure_ascii=False, indent=2 if pretty else None, separators=None if pretty else (',', ':'))+'\n').encode()
def norm(v): return ' '.join(unicodedata.normalize('NFC', v or '').split())
def bare(r):
    n,a=r.get('scientificName') or '',r.get('authorship') or ''; s=' '+a
    return n[:-len(s)] if a and n.endswith(s) else n
def roots(tid, parents):
    seen=set()
    while tid and tid not in seen:
        if tid==COL_ROOT:return True
        seen.add(tid);tid=parents.get(tid)
    return False
def read_archive(path):
    with zipfile.ZipFile(path) as z:
        members={n:{'bytes':len(z.read(n)),'sha256':sha(z.read(n))} for n in z.namelist()}
        def rows(n): return list(csv.DictReader(io.TextIOWrapper(z.open(n),encoding='utf-8-sig',newline=''),delimiter='\t'))
        names={r['ID']:(r,i) for i,r in enumerate(rows('Name.txt'),2)}; refs={r['ID']:(r,i) for i,r in enumerate(rows('Reference.txt'),2)}
        nrefs={}
        for i,r in enumerate(rows('NameReference.txt'),2): nrefs.setdefault(r['nameID'],[]).append((r,i))
        taxa=rows('Taxon.txt'); parents={r['ID']:r.get('parentID') for r in taxa}; accepted={}
        for i,t in enumerate(taxa,2):
            n=names.get(t.get('nameID')); 
            if n and n[0].get('rank','').lower()=='species' and t.get('provisional')!='1' and t.get('phylum')=='Nemertea': accepted[t['ID']]=(t,n[0],i,n[1])
        provisional=sum(1 for t in taxa if (names.get(t.get('nameID')) or ({},))[0].get('rank','').lower()=='species' and t.get('provisional')=='1' and t.get('phylum')=='Nemertea')
    return accepted,refs,nrefs,members,provisional
def read_col():
    manifest=(REGISTRY/'manifest.json').read_bytes(); fs=json.loads(manifest.decode())['hierarchy']['nodes']['files']; parents={}; candidates=[]
    for f in fs:
        with gzip.open(REGISTRY/f['path'],'rt',encoding='utf8') as s:
            for line in s:
                r=json.loads(line); parents[r['id']]=r.get('parentId')
                if r.get('rank')=='species' and r.get('status')=='accepted' and str(r.get('sourceDatasetId'))==COL_SOURCE: candidates.append(r)
    out={r['id']:r for r in candidates if roots(r.get('parentId'),parents)}
    inputs=[]
    for f in fs:
        b=(REGISTRY/f['path']).read_bytes(); inputs.append({'path':f['path'],'records':f['records'],'bytes':len(b),'sha256':sha(b)})
    return out,sha(manifest),inputs
def source_obj(n,t): return {'id':t['ID'],'nameId':n['ID'],'taxonId':t['ID'],'scientificName':n.get('scientificName'),'authorship':n.get('authorship'),'rank':n.get('rank'),'status':'accepted','link':n.get('link') or t.get('link') or ''}
def refs_for(n,t,nrefs,refs):
    out=[]; ids=[n.get('referenceID'),t.get('referenceID')]+[x[0].get('referenceID') for x in nrefs.get(n['ID'],[])]
    for rid in dict.fromkeys(x for x in ids if x):
        q={'referenceID':rid,'missing':rid not in refs}
        if rid in refs:q['reference']=refs[rid][0];q['sourceRows']=[{'member':'Reference.txt','row':refs[rid][1]}]
        out.append(q)
    return out
def locs(n,t,nrefs,refs,tn,nn):
    out=[{'member':'Taxon.txt','row':tn},{'member':'Name.txt','row':nn}]
    for r,i in nrefs.get(n['ID'],[]):
        out.append({'member':'NameReference.txt','row':i})
        if r.get('referenceID') in refs:out.append({'member':'Reference.txt','row':refs[r['referenceID']][1]})
    for rid in (n.get('referenceID'),t.get('referenceID')):
        if rid in refs:out.append({'member':'Reference.txt','row':refs[rid][1]})
    return out
def main():
    p=argparse.ArgumentParser();p.add_argument('--archive',type=Path,default=ARCHIVE);p.add_argument('--metadata',type=Path,default=METADATA);p.add_argument('--output-root',type=Path,default=ROOT);a=p.parse_args()
    raw=a.archive.read_bytes(); metadata=a.metadata.read_bytes(); metadata_obj=json.loads(metadata.decode('utf-8'))
    if len(raw)!=ARCHIVE_BYTES or sha(raw)!=ARCHIVE_SHA:raise ValueError('archive pin mismatch')
    accepted,refs,nrefs,members,provisional=read_archive(a.archive); col,colsha,colinputs=read_col(); by={}
    for tid,(t,n,tn,nn) in accepted.items():by.setdefault((norm(n.get('scientificName')),norm(n.get('authorship'))),[]).append((tid,t,n,tn,nn))
    recs=[];used=set(); counts={x:0 for x in ('accepted','redirect','ambiguous','unmatched','withheld')}
    for cid,c in sorted(col.items()):
        hits=by.get((norm(bare(c)),norm(c.get('authorship'))),[]); status='accepted' if len(hits)==1 else 'ambiguous' if len(hits)>1 else 'unmatched';counts[status]+=1; obj=None; loc=[]; rr=[]
        if len(hits)==1:
            tid,t,n,tn,nn=hits[0];used.add(tid);obj=source_obj(n,t);loc=locs(n,t,nrefs,refs,tn,nn);rr=refs_for(n,t,nrefs,refs)
        recs.append({'colId':cid,'colScientificName':c['scientificName'],'colAuthorship':c.get('authorship'),'status':status,'matchedName':obj,'acceptedName':obj,'candidates':[],'mappingBasis':'Exact source scientific name plus authorship; no synonym or fuzzy fallback.','sourceRows':loc,'references':rr})
    upstream=[]
    for tid,(t,n,tn,nn) in sorted(accepted.items()):
        if tid in used:continue
        upstream.append({'colId':None,'colScientificName':None,'colAuthorship':None,'status':'upstream-only','matchedName':None,'acceptedName':source_obj(n,t),'candidates':[],'mappingBasis':'Accepted source concept not linked by exact COL name+authorship; not a global new species claim.','sourceRows':locs(n,t,nrefs,refs,tn,nn),'references':refs_for(n,t,nrefs,refs)})
    base=a.output_root; out=base/OUT.relative_to(ROOT);out.mkdir(parents=True,exist_ok=True)
    def write(prefix,rows,role):
        parts=[];cur=[];usedb=2
        for r in rows:
            z=len(dump(r))
            if cur and usedb+z>SHARD_LIMIT:parts.append(cur);cur=[];usedb=2
            cur.append(r);usedb+=z
        if cur or not parts:parts.append(cur)
        result=[]
        for i,part in enumerate(parts):
            name=f'{prefix}-{i:03d}.json.gz';payload=dump(part);data=gzip.compress(payload,9,mtime=0);data=data[:9]+bytes([255])+data[10:];(out/name).write_bytes(data)
            q={'path':'other-animals/'+name,'records':len(part),'bytes':len(data),'sha256':sha(data),'sourceBytes':len(payload),'sourceSha256':sha(payload),'encoding':'gzip','mediaType':'application/json','role':role}
            if part and role=='col-partition':q.update(minColId=part[0]['colId'],maxColId=part[-1]['colId'])
            result.append(q)
        return result
    files=write('worms-nemertea',recs,'col-partition');upfiles=write('worms-nemertea-source-only',upstream,'upstream-only') if upstream else []
    desc={'schemaVersion':1,'recordType':'release-pinned-authority-archive-crosswalk','id':'worms-nemertea-archive-crosswalk','packageId':'other-animals','provider':'World Register of Marine Species via ChecklistBank','rowEncoding':'json','colIdField':'colId','totalCountField':'total','source':{'datasetId':1085,'title':metadata_obj['title'],'version':metadata_obj['version'],'versionDoi':metadata_obj['versionDoi'],'license':'CC-BY-4.0','archiveUrl':'https://api.checklistbank.org/dataset/1085/archive','archivePath':'data/sources/archives/checklistbank-1085-nemertea-2026-09-01.zip','metadataPath':'data/sources/archives/checklistbank-1085-nemertea-2026-09-01.metadata.json','archiveBytes':len(raw),'archiveSha256':sha(raw),'metadataBytes':len(metadata),'metadataSha256':sha(metadata),'members':members},'scope':{'colRootUsageId':COL_ROOT,'sourceDatasetId':1085,'eligibleColSpecies':len(col),'sourceAcceptedSpecies':len(accepted),'excludedSourceProvisional':provisional},'matching':{'normalization':'NFC and whitespace normalization only; COL trailing authorship is removed exactly.','prohibited':'No fuzzy, synonym, case-folded, accent-folded or species-concept matching.'},'counts':{'total':len(recs),**counts,'upstreamOnly':len(upstream),'records':len(recs)+len(upstream)},'files':files,'upstreamOnlyFiles':upfiles,'totalCompressedBytes':sum(x['bytes'] for x in files+upfiles),'totalSourceBytes':sum(x['sourceBytes'] for x in files+upfiles),'deliveryProfiles':{'web-light':{'mode':'summary-only','records':0,'files':[],'totalCompressedBytes':0,'totalSourceBytes':0},'native-full':{'mode':'complete','records':len(recs)+len(upstream),'files':[x['path'] for x in files+upfiles],'totalCompressedBytes':sum(x['bytes'] for x in files+upfiles),'totalSourceBytes':sum(x['sourceBytes'] for x in files+upfiles)}},'evidenceBoundary':{'en':'Frozen WoRMS nomenclatural/source projection for exact COL26.8 source-1085 Nemertea scope; not species-concept equivalence or global novelty claim.','zh':'精确 COL26.8 source-1085 Nemertea 范围的 WoRMS 冻结命名/来源投影；不是物种概念等同性或全球新增物种声明。'},'limitations':['Synonym and provisional source rows are retained in the pinned archive evidence but are not promoted as accepted species.','Source-only rows are not global novelty claims.']}
    db=dump(desc,True);(out/'worms-nemertea-sidecar.json').write_bytes(db)
    ledger={'schemaVersion':1,'importType':'COL26.8-to-WoRMS-1085-archive-projection','source':desc['source'],'registryManifestSha256':colsha,'registryInputs':[dict(x,path='data/catalogue-of-life/releases/2026-08-20/registry/'+x['path']) for x in colinputs],'generatedBy':{'script':'scripts/build-worms-nemertea-source.py','scriptSha256':sha(Path(__file__).read_bytes().replace(b'\r\n',b'\n'))},'outputs':{'descriptor':{'path':'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-nemertea-sidecar.json','bytes':len(db),'sha256':sha(db)},'files':files,'upstreamOnlyFiles':upfiles},'scopeAudit':{'colRootUsageId':COL_ROOT,'sourceDatasetId':1085,'colSpecies':len(col),'sourceAcceptedSpecies':len(accepted),'sourceProvisionalExcluded':provisional}}
    lp=base/'data/sources/worms-nemertea-archive-1085-import-ledger.json';lp.parent.mkdir(parents=True,exist_ok=True);lp.write_bytes(dump(ledger,True));print(json.dumps(desc['counts']))
if __name__=='__main__':main()
