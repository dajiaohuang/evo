#!/usr/bin/env python3
"""Resume exact occurrence detail retrieval from the frozen historical ID union."""
import gzip,hashlib,json,os,time,urllib.parse,urllib.request
from datetime import datetime,timezone
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.git/platform-v2/local/node-map-expansion/occurrences'
def encode(x): return (json.dumps(x,sort_keys=True,separators=(',',':'))+'\n').encode()
def sha(x): return hashlib.sha256(x).hexdigest()
def save(s):
    tmp=OUT/'state.json.tmp'; tmp.write_bytes(encode(s)); os.replace(tmp,OUT/'state.json')
def main():
    OUT.mkdir(parents=True,exist_ok=True); statepath=OUT/'state.json'
    if statepath.exists(): state=json.loads(statepath.read_bytes())
    else:
        ids=set(); details=set(); sources={}
        for p in sorted((ROOT/'data/sources').glob('pbdb-targeted-*-occurrences-v1.json.gz')):
            raw=p.read_bytes(); sources[p.relative_to(ROOT).as_posix()]=sha(raw); x=json.loads(gzip.decompress(raw))
            for q in x['queryResults']: ids.update(q['occurrenceIds'])
            details.update(row['oid'] for row in x['records'])
        queue=sorted(ids-details); state={'schemaVersion':1,'sourceSha256':sources,'queue':queue,'cursor':0,'batches':[],'unreturned':[]}
        save(state)
    for name,digest in state['sourceSha256'].items():
        if sha((ROOT/name).read_bytes())!=digest: raise ValueError('source changed: '+name)
    while state['cursor']<len(state['queue']):
        start=state['cursor']; requested=state['queue'][start:start+300]
        url='https://paleobiodb.org/data1.2/occs/list.json?'+urllib.parse.urlencode({'id':','.join(requested),'show':'coords,ident,ref','limit':'all'})
        name=f'batch-{start:07}.json'; path=OUT/name; error=None
        if path.exists():
            # Recover a response written immediately before interruption of the checkpoint.
            raw=path.read_bytes(); obj=json.loads(raw); assert isinstance(obj.get('records'),list)
        else:
            for attempt in range(4):
                try:
                    with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'EvoAtlas-node-map/1.0 research import'}),timeout=45) as response: raw=response.read()
                    obj=json.loads(raw); assert isinstance(obj.get('records'),list); break
                except Exception as exc: error=str(exc); time.sleep(2**attempt)
            else:
                state['lastError']={'url':url,'message':error,'at':datetime.now(timezone.utc).isoformat()}; save(state); raise RuntimeError(error)
        seen=set(); unexpected=[]
        for row in obj['records']:
            oid=row.get('oid')
            if oid not in requested: unexpected.append(oid)
            elif oid in seen: raise ValueError('duplicate '+str(oid))
            else: seen.add(oid)
        if path.exists() and path.read_bytes()!=raw: raise ValueError('immutable response differs')
        path.write_bytes(raw)
        state['batches'].append({'start':start,'file':name,'url':url,'requested':requested,'returned':sorted(seen),'unexpected':unexpected,'sha256':sha(raw),'retrievedAt':datetime.now(timezone.utc).isoformat()})
        state['unreturned'].extend(sorted(set(requested)-seen)); state['cursor']+=len(requested); state.pop('lastError',None); save(state)
        if len(state['batches'])%10==0: print(json.dumps({'attempted':state['cursor'],'remaining':len(state['queue'])-state['cursor'],'unreturned':len(state['unreturned'])}),flush=True)
        time.sleep(.5)
if __name__=='__main__': main()
