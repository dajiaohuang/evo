#!/usr/bin/env python3
"""Freeze completed exact-occurrence responses into the next candidate input."""
import gzip,hashlib,json,os,re,sys
from collections import Counter
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
BASE=ROOT/'.git/platform-v2/local/node-map-expansion'
def sha(x): return hashlib.sha256(x).hexdigest()
def enc(x): return (json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':'))+'\n').encode()
def load(path): return json.loads(path.read_bytes())
def main():
    original=load(BASE/'input-v3.json'); state=load(BASE/'occurrences/state.json')
    if state['cursor']!=len(state['queue']) or state.get('lastError'): raise ValueError('download queue is not complete')
    for name,digest in state['sourceSha256'].items():
        if sha((ROOT/name).read_bytes())!=digest: raise ValueError('historical queue source changed: '+name)
    current=load(ROOT/'public/data/current.json'); reader_descriptor=current['pbdbReader']['manifest']
    rm_bytes=(ROOT/'public/data'/reader_descriptor['url']).read_bytes()
    if reader_descriptor.get('sha256') and sha(rm_bytes)!=reader_descriptor['sha256']: raise ValueError('PBDB reader manifest hash mismatch')
    rm=json.loads(rm_bytes)
    idx=(ROOT/'public/data'/rm['index']['url']).read_bytes(); assert sha(idx)==rm['index']['sha256']
    reader=json.loads(gzip.decompress(idx)); known={x['pbdbTaxonId'] for x in reader}
    parents={x['pbdbTaxonId']:x.get('identity',{}).get('classification',{}).get('parentSourceIdentifier') for x in reader}
    def add_batch(folder,b):
        raw=(folder/b['file']).read_bytes(); assert sha(raw)==b['sha256']
        exact=set(b['returned']); records=json.loads(raw)['records']
        actual=[row.get('oid') for row in records if row.get('oid') in exact]
        if len(actual)!=len(set(actual)) or set(actual)!=exact: raise ValueError('taxon return manifest mismatch')
        known.update(exact)
        for row in records:
            if row.get('oid') in exact and row['oid'] not in parents: parents[row['oid']]=row.get('par')
    for name in ('pbdb-exact-20261029-v2','pbdb-parent-closure-20261029'):
        folder=ROOT/'data/node-map'/name; m=load(folder/'manifest.json')
        batches=m.get('batches',[])+[b for level in m.get('levels',[]) for b in level['batches']]
        for b in batches:
            add_batch(folder,b)
    taxa=load(BASE/'taxa/state.json')
    for b in taxa['batches']:
        add_batch(BASE/'taxa',b)
    rows=original['records']; conflicts=original['conflicts']; ledger=original['ledger']; sources=original['sources']; counts=Counter(); cursor=0; unreturned=[]
    excluded={c['id'] for c in conflicts}; fields=('tid','tna','idn','rnk','eag','lag','lng','lat','cid','oei','cc2','classification','coordinatePrecision','referenceId','referenceAuthor','referenceYear','formation','member','lithology','paleoenvironment','specimenBasis')
    def value(row,k):
        v=row.get(k)
        if k in ('eag','lag','lng','lat') and v not in (None,''):
            try: return float(v)
            except (TypeError,ValueError): pass
        return None if v is None or v=='' else v
    for batch in state['batches']:
        requested=batch['requested']; assert batch['start']==cursor and requested==state['queue'][cursor:cursor+len(requested)]
        p=BASE/'occurrences'/batch['file']; raw=p.read_bytes(); assert sha(raw)==batch['sha256']
        name=p.relative_to(ROOT).as_posix(); sources[name]=sha(raw); fetched=load(p)['records']; exact=set(requested); seen=set()
        for row in fetched:
            oid=row.get('oid')
            if oid not in exact: counts['unexpected']+=1; continue
            if oid in seen: raise ValueError('duplicate occurrence response '+oid)
            seen.add(oid); counts['downloadReturned']+=1
            # Preserve original API fields, only alias the documented reference ID.
            row=dict(row); row['referenceId']=row.get('rid'); tid=row.get('tid')
            if not isinstance(oid,str) or not re.fullmatch(r'occ:\d+',oid) or not isinstance(tid,str) or not re.fullmatch(r'txn:\d+',tid):
                ledger.append({'id':oid,'source':name,'reason':'download lacks valid occurrence or taxon ID'}); counts['invalidIdentity']+=1; continue
            if oid in excluded:
                ledger.append({'id':oid,'source':name,'reason':'excluded by earlier conflict'}); counts['previouslyExcluded']+=1; continue
            if oid in rows:
                previous=rows[oid]; diff={k:[value(previous['row'],k),value(row,k)] for k in fields if value(previous['row'],k)!=value(row,k)}
                disagreement={k:v for k,v in diff.items() if v[0] is not None and v[1] is not None}
                absent={k:v for k,v in diff.items() if v[0] is None or v[1] is None}
                if disagreement:
                    conflicts.append({'id':oid,'sources':[previous['source'],name],'fields':disagreement}); excluded.add(oid); counts['conflicts']+=1
                else: counts['duplicates']+=1
                if absent: ledger.append({'id':oid,'sources':[previous['source'],name],'reason':'one source omits a field','fields':absent}); counts['incomplete']+=1
                previous['sources'].append(name)
            else: rows[oid]={'row':row,'source':name,'sources':[name]}; counts['new']+=1
        assert sorted(seen)==batch['returned']
        unexpected=[row.get('oid') for row in fetched if row.get('oid') not in exact]
        assert unexpected==batch.get('unexpected',[])
        unreturned.extend(sorted(exact-seen))
        cursor+=len(requested)
    assert cursor==len(state['queue']); assert unreturned==state['unreturned']; assert counts['downloadReturned']+len(unreturned)==cursor
    ledger.extend({'id':oid,'reason':'exact occurrence request returned no row'} for oid in state['unreturned'])
    for oid in excluded: rows.pop(oid,None)
    missing=set(); visited=set()
    for item in rows.values():
        node=item['row']['tid']; chain=set()
        while node and node not in visited:
            if node in chain: raise ValueError('cycle in cached parent chain '+node)
            chain.add(node)
            if node not in known:
                if isinstance(node,str) and re.fullmatch(r'txn:\d+',node): missing.add(node)
                else: ledger.append({'id':item['row']['tid'],'parentId':node,'reason':'invalid cached parent identifier'})
                break
            node=parents.get(node)
        visited.update(chain)
    missing=sorted(missing)
    out={**original,'sources':sources,'records':rows,'conflicts':conflicts,'ledger':ledger,'retained':len(rows),'conflictIds':len(excluded),'missingTaxa':missing,'knownTaxa':sorted(known),'knownParents':parents,'readerPin':{'manifestSha256':sha(rm_bytes),'indexSha256':sha(idx),'datasetVersion':current.get('datasetVersion')},'download':{'stateSha256':sha((BASE/'occurrences/state.json').read_bytes()),'requested':cursor,'returned':counts['downloadReturned'],'unreturned':len(state['unreturned']),'counts':dict(counts)}}
    path=BASE/'input-v5.json'; data=enc(out)
    if path.exists() and path.read_bytes()!=data: raise ValueError('immutable input differs')
    if not path.exists():
        tmp=BASE/('input-v5-'+sha(data)[:20]+'.tmp')
        if tmp.exists() and tmp.read_bytes()!=data: raise ValueError('temporary freeze differs')
        if not tmp.exists(): tmp.write_bytes(data)
        os.replace(tmp,path)
    print(json.dumps({'inputSha256':sha(data),'retained':len(rows),'missingTaxa':len(missing),'conflictIds':len(excluded),'download':out['download']}))
if __name__=='__main__': main()
