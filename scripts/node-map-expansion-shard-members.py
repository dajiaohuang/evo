#!/usr/bin/env python3
"""Bounded shared-members parts, addressed by SHA-256 prefix of node ID."""
import hashlib,json,sys
from collections import defaultdict
from pathlib import Path
def enc(x): return (json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':'))+'\n').encode()
def sha(x): return hashlib.sha256(x).hexdigest()
src,dst=map(Path,sys.argv[1:3]); limit=4*1024*1024; manifest=json.loads((src/'manifest.json').read_bytes())
raw=(src/manifest['members']['url']).read_bytes(); assert sha(raw)==manifest['members']['sha256']
data=json.loads(raw); assert data['revision']==manifest['revision'] and data['treeRevision']==manifest['treeRevision']
buckets=defaultdict(list)
for key,value in data['members'].items(): buckets[sha(key.encode())[:2]].append((key,value))
dst.mkdir(parents=True,exist_ok=True); index={}; maximum=0
for bucket,entries in sorted(buckets.items()):
    entries.sort(); parts=[]; block={}; size=0
    def flush():
        global maximum
        if not block: return
        payload=enc({'revision':data['revision'],'treeRevision':data['treeRevision'],'members':block}); assert len(payload)<=limit
        filename=f'{bucket}-{len(parts):04}.json'; path=dst/filename
        if path.exists() and path.read_bytes()!=payload: raise ValueError('immutable member part differs')
        path.write_bytes(payload); parts.append({'url':filename,'sha256':sha(payload),'bytes':len(payload)}); maximum=max(maximum,len(payload))
    for key,values in entries:
        # A very large single ancestor is split between parts; readers concatenate its arrays.
        piece=[]; piece_size=0
        for value in values:
            n=len(enc(value))+1
            if piece and piece_size+n>limit-8192:
                if block: flush(); block={}; size=0
                block[key]=piece; flush(); block={}; piece=[]; piece_size=0
            piece.append(value); piece_size+=n
        entry_size=len(enc(key))+piece_size+8
        if block and size+entry_size>limit-8192: flush(); block={}; size=0
        block[key]=piece; size+=entry_size
    flush(); index[bucket]=parts
    verified=defaultdict(list)
    for part in parts:
        content=(dst/part['url']).read_bytes(); assert sha(content)==part['sha256']
        for key,values in json.loads(content)['members'].items(): verified[key].extend(values)
    assert dict(verified)==dict(entries)
result={'schemaVersion':1,'revision':data['revision'],'treeRevision':data['treeRevision'],'routing':'lowercase first two hex characters of SHA-256 over UTF-8 node ID; fetch all parts in that bucket and concatenate arrays for the requested node','maxPartBytes':limit,'buckets':index,'originalMembersSha256':sha(raw)}
payload=enc(result); path=dst/'index.json'
if path.exists() and path.read_bytes()!=payload: raise ValueError('immutable member index differs')
path.write_bytes(payload)
print(json.dumps({'buckets':len(index),'parts':sum(len(x) for x in index.values()),'maxPartBytes':maximum,'indexBytes':len(payload),'indexSha256':sha(payload)}))
