"""Build an offline exact-name projection of ChecklistBank Ascidiacea."""
import argparse, csv, gzip, hashlib, json, re, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE_SHA = '10f7ee92363e3fab5df9964a494b59e1d79a5214f38b9e796f73afd51558863a'
ARCHIVE_BYTES = 692018
ROOT_ID = 'B8V3P'
PARENT_ROOT_ID = '7NF2Z'
LIMIT = 2 * 1024 * 1024

def sha(b): return hashlib.sha256(b).hexdigest()
def enc(v, pretty=False):
    return (json.dumps(v, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode()
def bare(r):
    n, a = r.get('scientificName',''), r.get('authorship') or ''
    return n[:-len(a)-1] if a and n.endswith(' ' + a) else n
def key(n, a): return (' '.join((n or '').split()), ' '.join((a or '').split()))
def source_name(n, names, taxon=None, refs=None, nr=None):
    out = {'id': n['ID'], 'scientificName': n.get('scientificName') or '',
           'authorship': n.get('authorship') or '', 'status': n.get('status') or ''}
    if taxon:
        out['taxonID'] = taxon['ID']
        out['url'] = taxon.get('link') or f"https://www.marinespecies.org/aphia.php?p=taxdetails&id={taxon['ID'].rsplit(':',1)[-1]}"
    else: out['url'] = n.get('link') or ''
    refs = refs or {}; nr = nr or {}
    ids = []
    for value in (n.get('referenceID'), taxon.get('referenceID') if taxon else None):
        if value and value not in ids: ids.append(value)
    for row in nr.get(n['ID'], []):
        if row.get('referenceID') and row['referenceID'] not in ids: ids.append(row['referenceID'])
    out['referenceIds'] = ids
    out['references'] = [refs[i] for i in ids if i in refs]
    out['referenceRows'] = [{'member': 'Reference.txt', 'row': refs[i]['_row'], 'referenceID': i} for i in ids if i in refs]
    out['referenceMissing'] = [i for i in ids if i not in refs]
    out['nameReferenceRows'] = [{'member': 'NameReference.txt', 'row': row['_row'], 'nameID': n['ID'], 'referenceID': row.get('referenceID')} for row in nr.get(n['ID'], [])]
    return out
def read_source(path):
    with zipfile.ZipFile(path) as z:
        names = {}
        for i,row in enumerate(csv.DictReader((x := __import__('io').TextIOWrapper(z.open('Name.txt'), encoding='utf-8')), delimiter='\t'), 2):
            row['_row'] = i; names[row['ID']] = row
        x.close()
        tax = {}
        for i,row in enumerate(csv.DictReader((x := __import__('io').TextIOWrapper(z.open('Taxon.txt'), encoding='utf-8')), delimiter='\t'), 2):
            row['_row'] = i; tax[row['ID']] = row
        x.close()
        refs = {}
        for i,row in enumerate(csv.DictReader((x := __import__('io').TextIOWrapper(z.open('Reference.txt'), encoding='utf-8')), delimiter='\t'), 2):
            row['_row'] = i; refs[row['ID']] = row
        x.close()
        nr = {}
        for i,row in enumerate(csv.DictReader((x := __import__('io').TextIOWrapper(z.open('NameReference.txt'), encoding='utf-8')), delimiter='\t'), 2):
            row['_row'] = i; nr.setdefault(row['nameID'], []).append(row)
        x.close()
        synonyms = []
        for i,row in enumerate(csv.DictReader((x := __import__('io').TextIOWrapper(z.open('Synonym.txt'), encoding='utf-8')), delimiter='\t'), 2):
            row['_row'] = i; synonyms.append(row)
        x.close()
    species = {t['ID']: t for t in tax.values() if names.get(t.get('nameID'),{}).get('rank') == 'Species'}
    strict = {tid:t for tid,t in species.items() if t.get('provisional') != '1'}
    byname = {}
    for tid,t in strict.items():
        n = names.get(t['nameID']);
        if n: byname.setdefault(key(n.get('scientificName'), n.get('authorship')), []).append((t,n))
    syn_by_name = {}
    for s in synonyms:
        n = names.get(s.get('nameID')); target = tax.get(s.get('taxonID'))
        if n and target and target['ID'] in strict:
            syn_by_name.setdefault(key(n.get('scientificName'), n.get('authorship')), []).append((s,n,target,names.get(target.get('nameID'))))
    return strict, byname, syn_by_name, names, refs, nr, len(species), len(species) - len(strict)
def read_col(registry=REGISTRY):
    mb = (registry/'manifest.json').read_bytes(); manifest=json.loads(mb)
    paths=[registry/f['path'] for f in manifest['hierarchy']['nodes']['files']]
    parents={}; candidates=[]; rows={}; excluded={}
    for p in paths:
        for line in gzip.open(p,'rt',encoding='utf-8'):
            r=json.loads(line); parents[r['id']]=r.get('parentId')
            if r.get('rank')=='species' and r.get('status')=='accepted' and str(r.get('sourceDatasetId') or '') in {'1186','1178','1185'}: candidates.append(r)
    for r in candidates:
        x=r.get('parentId'); seen=set()
        while x and x not in seen and x != ROOT_ID: seen.add(x); x=parents.get(x)
        if x == ROOT_ID: rows[r['id']]=r
    for r in candidates:
        if r['id'] in rows: continue
        x=r.get('parentId'); seen=set()
        while x and x not in seen and x != PARENT_ROOT_ID: seen.add(x); x=parents.get(x)
        if x == PARENT_ROOT_ID:
            k=str(r.get('sourceDatasetId') or 'null'); excluded[k]=excluded.get(k,0)+1
    shards=[]
    for p in paths:
        b=p.read_bytes(); shards.append({'path':str(p.relative_to(registry.parent.parent)).replace('\\','/'),'bytes':len(b),'sha256':sha(b)})
    return rows, sha(mb), shards, excluded
def record(col, candidates, syns, strict, names, refs, nr):
    targets={};
    for t,n in candidates:
        targets[t['ID']]=(t,n)
    for s,n,t,tn in syns: targets[t['ID']]=(t,tn)
    status='accepted' if candidates else ('redirect' if len(targets)==1 else 'ambiguous' if len(targets)>1 else 'unmatched')
    if len(targets)>1: status='ambiguous'
    def obj(t,n,extra=None):
        q=source_name(n,names,t,refs,nr); q['sourceRows']=[{'member':'Taxon.txt','row':t['_row']},{'member':'Name.txt','row':n['_row']}]
        if extra: q.update(extra)
        return q
    matched = obj(*candidates[0]) if len(candidates)==1 else None
    accepted = obj(*next(iter(targets.values()))) if status in ('accepted','redirect') and len(targets)==1 else None
    if status=='redirect' and syns: matched=obj(syns[0][2], syns[0][1], {'status':'synonym','sourceRows':[{'member':'Synonym.txt','row':syns[0][0]['_row']},{'member':'Name.txt','row':syns[0][1]['_row']}]})
    return {'colId':col['id'],'colScientificName':col.get('scientificName'),'colAuthorship':col.get('authorship') or '', 'status':status,'matchedName':matched,'acceptedName':accepted,'candidates':[obj(*v) for v in targets.values()] if status=='ambiguous' else [],'mappingBasis':'Exact scientific name+authorship; explicit Synonym target retained as redirect.','sourceRows':[]}
def chunks(rows):
    out=[]; cur=[]; used=3
    for r in rows:
        n=len(enc(r))
        if cur and used+n>LIMIT: out.append(cur); cur=[]; used=3
        cur.append(r); used+=n
    if cur: out.append(cur)
    return out
def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--archive',type=Path,required=True); ap.add_argument('--metadata',type=Path,required=True); ap.add_argument('--output-root',type=Path); ap.add_argument('--repo-root',type=Path,default=ROOT); ap.add_argument('--ledger-root',type=Path); a=ap.parse_args()
    repo_root=a.repo_root.resolve(); registry=repo_root/'data/catalogue-of-life/releases/2026-08-20/registry'
    raw=a.archive.read_bytes(); assert len(raw)==ARCHIVE_BYTES and sha(raw)==ARCHIVE_SHA
    metadata=json.loads(a.metadata.read_bytes()); assert metadata['versionDoi']=='10.48580/d3fx.v90'
    strict, byname, syns, names, refs, nr, species_total, provisional=read_source(a.archive); col, msh, node, excluded=read_col(registry)
    records=[]; implicated=set(); counts={x:0 for x in ('accepted','redirect','ambiguous','unmatched','withheld')}
    for cid,c in sorted(col.items()):
        candidates=byname.get(key(bare(c),c.get('authorship')),[]); ss=syns.get(key(bare(c),c.get('authorship')),[])
        r=record(c,candidates,ss,strict,names,refs,nr); counts[r['status']]+=1; records.append(r)
        for t,n in candidates: implicated.add(t['ID'])
        for s,n,t,tn in ss: implicated.add(t['ID'])
    upstream=[]
    for tid,(t) in sorted(strict.items()):
        if tid not in implicated:
            n=names[t['nameID']]; upstream.append({'colId':None,'colScientificName':None,'colAuthorship':None,'status':'upstream-only','matchedName':None,'acceptedName':source_name(n,names,t,refs,nr),'candidates':[],'mappingBasis':'Strict source accepted Species not implicated by COL root rows.','sourceRows':[{'member':'Taxon.txt','row':t['_row']},{'member':'Name.txt','row':n['_row']}]})
    out=a.output_root or repo_root/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'; out.mkdir(parents=True,exist_ok=True); prefix='worms-ascidiacea'; files=[]; upfiles=[]
    keep=set()
    for up,rows,arr in ((False,records,files),(True,upstream,upfiles)):
        for i,part in enumerate(chunks(rows)):
            name=f'{prefix}{"-upstream-only" if up else ""}-{i:03d}.json.gz'; b=gzip.compress(enc(part),compresslevel=9,mtime=0); b=bytearray(b); b[9]=255; (out/name).write_bytes(b); keep.add(name); q={'path':f'other-animals/{name}','records':len(part),'bytes':len(b),'sha256':sha(b),'sourceBytes':len(enc(part)),'sourceSha256':sha(enc(part))};
            q.update(role='authority-crosswalk', encoding='gzip', mediaType='application/json')
            if not up: q.update(minColId=part[0]['colId'],maxColId=part[-1]['colId'])
            arr.append(q)
    for p in out.glob(prefix+'-*.json.gz'):
        if p.name not in keep: p.unlink()
    byte_count=sum(x['bytes'] for x in files+upfiles)
    descriptor={'schemaVersion':1,'recordType':'release-pinned-authority-archive-crosswalk','id':'worms-ascidiacea-archive-crosswalk','packageId':'other-animals','provider':'Ascidiacea World Database via ChecklistBank','role':'authority-crosswalk','rowEncoding':'json','encoding':'gzip','mediaType':'application/json','colIdField':'colId','totalCountField':'total','source':{'archiveUrl':'https://api.checklistbank.org/dataset/1186/archive','archiveBytes':ARCHIVE_BYTES,'archiveSha256':ARCHIVE_SHA,'version':'2026-09-01','versionDoi':'10.48580/d3fx.v90','license':'CC-BY-4.0','sourceLedgerPath':'data/sources/worms-ascidiacea-1186-import-ledger.json','archivePath':'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip','metadataPath':'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.metadata.json'},'scope':{'colRootUsageId':ROOT_ID,'colParentClosureRootUsageId':PARENT_ROOT_ID,'eligibleColSpecies':len(col),'excludedParentClosureSpecies':excluded},'counts':{'total':len(records),'records':len(records),'bytes':byte_count,**counts,'upstreamOnly':len(upstream)},'files':files,'upstreamOnlyFiles':upfiles,'deliveryProfiles':{'web-light':{'mode':'summary-only','records':len(records),'files':[x['path'] for x in files],'bytes':sum(x['bytes'] for x in files)},'native-full':{'mode':'complete','records':len(records)+len(upstream),'files':[x['path'] for x in files+upfiles],'bytes':byte_count}},'matching':{'normalization':'Exact scientific name and authorship after whitespace normalization; source fields preserved.','prohibited':'No fuzzy or inferred matching.'},'evidenceBoundary':{'en':'Frozen exact nomenclatural crosswalk; not species-concept equivalence, biological dossier or expert review.'}}
    (out/f'{prefix}-sidecar.json').write_bytes(enc(descriptor,True))
    ledger={'schemaVersion':1,'importType':'COL26.8-to-Ascidiacea-1186-authority-crosswalk','sourceArchive':{'path':'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip','bytes':ARCHIVE_BYTES,'sha256':ARCHIVE_SHA},'sourceMetadata':{'path':'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.metadata.json','sha256':sha(a.metadata.read_bytes())},'colInput':{'registryManifestSha256':msh,'nodeShards':node},'scope':{'colRootUsageId':ROOT_ID,'colParentClosureRootUsageId':PARENT_ROOT_ID,'colSpecies':len(col),'sourceSpeciesRankTaxa':species_total,'provisionalExcluded':provisional,'excludedParentClosureSpecies':excluded,'counts':descriptor['counts']},'outputs':{'descriptorSha256':sha((out/f'{prefix}-sidecar.json').read_bytes()),'files':files,'upstreamOnlyFiles':upfiles}}
    ledger_root=(a.ledger_root or repo_root).resolve(); ledger_path=ledger_root/'data/sources/worms-ascidiacea-1186-import-ledger.json'; ledger_path.parent.mkdir(parents=True,exist_ok=True); ledger_path.write_bytes(enc(ledger,True)); print(json.dumps(descriptor['counts']))
if __name__=='__main__': main()
