#!/usr/bin/env python3
"""Freeze the candidate input; retain conflicting records without choosing one."""
import gzip, hashlib, json, re
from pathlib import Path
from collections import Counter
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.git/platform-v2/local/node-map-expansion'
def sha(b): return hashlib.sha256(b).hexdigest()
def encode(x): return (json.dumps(x,sort_keys=True,ensure_ascii=False,separators=(',',':'))+'\n').encode()
def main():
    cur=json.loads((ROOT/'public/data/current.json').read_bytes())
    rm=json.loads((ROOT/'public/data'/cur['pbdbReader']['manifest']['url']).read_bytes())
    index=ROOT/'public/data'/rm['index']['url']; raw=index.read_bytes()
    assert sha(raw)==rm['index']['sha256']
    known={r['pbdbTaxonId'] for r in json.loads(gzip.decompress(raw))}
    for dirname in ('pbdb-exact-20261029-v2','pbdb-parent-closure-20261029'):
        folder=ROOT/'data/node-map'/dirname; man=json.loads((folder/'manifest.json').read_bytes())
        batches=man.get('batches',[]) + [b for level in man.get('levels',[]) for b in level['batches']]
        for b in batches:
            data=(folder/b['file']).read_bytes(); assert sha(data)==b['sha256']; known.update(b['returned'])
    fields=('tid','tna','idn','rnk','eag','lag','lng','lat','cid','oei','cc2','classification',
            'coordinatePrecision','referenceId','referenceAuthor','referenceYear','formation','member',
            'lithology','paleoenvironment','specimenBasis')
    def value(row,k):
        v=row.get(k)
        if k in ('eag','lag','lng','lat') and v not in (None,''):
            try: return float(v)
            except (TypeError,ValueError): pass
        return None if v is None or v=='' else v
    rows={}; conflicts=[]; incomplete=[]; sources={}; occurrences=[]; counts=Counter()
    paths=sorted((ROOT/'data/fossils').glob('*.json'))+sorted((ROOT/'data/sources').glob('pbdb-targeted-*-occurrences-v1.json.gz'))
    for p in paths:
        raw=p.read_bytes(); name=p.relative_to(ROOT).as_posix(); sources[name]=sha(raw)
        data=json.loads(gzip.decompress(raw) if p.suffix=='.gz' else raw)
        batch=data['records'] if isinstance(data,dict) else data
        for row in batch:
            counts['input']+=1; oid=row.get('oid'); tid=row.get('tid')
            if not isinstance(oid,str) or not re.fullmatch(r'occ:\d+',oid) or not isinstance(tid,str) or not re.fullmatch(r'txn:\d+',tid):
                counts['invalidIdentity']+=1; occurrences.append({'id':oid,'source':name,'reason':'missing or invalid occurrence/taxon ID'}); continue
            if oid in rows:
                prior=rows[oid]; diffs={k:[value(prior['row'],k),value(row,k)] for k in fields if value(prior['row'],k)!=value(row,k)}
                disagreement={k:v for k,v in diffs.items() if v[0] is not None and v[1] is not None}
                missing={k:v for k,v in diffs.items() if v[0] is None or v[1] is None}
                if disagreement: conflicts.append({'id':oid,'sources':[prior['source'],name],'fields':disagreement}); counts['conflictRows']+=1
                else: counts['duplicateRows']+=1
                if missing: incomplete.append({'id':oid,'sources':[prior['source'],name],'reason':'one source omits a field','fields':missing}); counts['incompleteRows']+=1
                prior['sources'].append(name); continue
            rows[oid]={'row':row,'source':name,'sources':[name]}
    excluded={x['id'] for x in conflicts}
    kept={k:v for k,v in rows.items() if k not in excluded}
    missing=sorted({v['row']['tid'] for v in kept.values()}-known)
    result={'schemaVersion':1,'sources':sources,'counts':dict(counts),'uniqueIds':len(rows),'conflictIds':len(excluded),'retained':len(kept),'missingTaxa':missing,'ledger':occurrences+incomplete,'conflicts':conflicts,'records':kept}
    OUT.mkdir(parents=True,exist_ok=True); data=encode(result); path=OUT/'input-v3.json'
    if path.exists() and path.read_bytes()!=data: raise ValueError('input changed; preserve previous frozen input')
    path.write_bytes(data)
    print(json.dumps({'sha256':sha(data),'input':counts['input'],'uniqueIds':len(rows),'conflictIds':len(excluded),'retained':len(kept),'missingTaxa':len(missing),'counts':dict(counts)}))
if __name__=='__main__': main()
