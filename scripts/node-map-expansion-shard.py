#!/usr/bin/env python3
"""Emit optional bounded parts; current client must concatenate parts before query."""
import hashlib,json,sys
from pathlib import Path
def enc(x): return (json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':'))+'\n').encode()
def sha(x): return hashlib.sha256(x).hexdigest()
src,dst=map(Path,sys.argv[1:3]); m=json.loads((src/'manifest.json').read_bytes()); limit=4*1024*1024
dst.mkdir(parents=True,exist_ok=True); frames=[]
member=(src/m['members']['url']).read_bytes(); assert sha(member)==m['members']['sha256']
memberpath=dst/m['members']['url']; memberpath.parent.mkdir(parents=True,exist_ok=True)
if memberpath.exists() and memberpath.read_bytes()!=member: raise ValueError('immutable members differ')
memberpath.write_bytes(member)
for frame in m['frames']:
    shard=json.loads((src/frame['url']).read_bytes()); records=shard.pop('records'); parts=[]; block=[]; size=0
    def write_part():
        if not block: return
        payload=enc({**shard,'records':block}); assert len(payload)<=limit
        name='frames/'+m['revision']+'/ma-'+format(frame['ageMa'],'08.3f')+'-'+str(len(parts)).zfill(3)+'.json'
        path=dst/name; path.parent.mkdir(parents=True,exist_ok=True)
        if path.exists() and path.read_bytes()!=payload: raise ValueError('immutable part differs')
        path.write_bytes(payload); parts.append({'url':name,'sha256':sha(payload),'bytes':len(payload),'records':len(block)})
    for row in records:
        n=len(enc(row))+1
        if block and size+n>limit-2048: write_part(); block=[]; size=0
        block.append(row); size+=n
    write_part()
    merged=[]
    for part in parts:
        raw=(dst/part['url']).read_bytes(); assert sha(raw)==part['sha256']; merged.extend(json.loads(raw)['records'])
    assert merged==records
    frames.append({**frame,'parts':parts,'recordCount':len(records)})
index={'schemaVersion':1,'revision':m['revision'],'treeRevision':m['treeRevision'],'members':m['members'],'maxPartBytes':limit,'frames':frames,'compatibility':'Optional index; verify each part and concatenate records with shared members before invoking current query contract. Current deployed client reads the original frame URL.'}
data=enc(index); p=dst/'parts-index.json'
if p.exists() and p.read_bytes()!=data: raise ValueError('immutable index differs')
p.write_bytes(data)
print(json.dumps({'frames':len(frames),'parts':sum(len(f['parts']) for f in frames),'maxPartBytes':max((p['bytes'] for f in frames for p in f['parts']),default=0),'indexSha256':sha(data)}))
