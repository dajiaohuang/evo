#!/usr/bin/env python3
"""Prepare a small isolated real-source build fixture without changing frozen inputs."""
import hashlib,json
from pathlib import Path
root=Path(__file__).resolve().parents[1]; base=root/'.git/platform-v2/local/node-map-expansion'; out=base/'smoke-download'
original=json.loads((base/'input-v3.json').read_bytes()); state=json.loads((base/'occurrences/state.json').read_bytes()); b=state['batches'][0]
raw=(base/'occurrences'/b['file']).read_bytes(); assert hashlib.sha256(raw).hexdigest()==b['sha256']
batch=json.loads(raw)['records']; records=dict(list(original['records'].items())[:20]); source=(base/'occurrences'/b['file']).relative_to(root).as_posix()
for row in batch[:20]:
    if row.get('tid','').startswith('txn:') and row['oid'] not in records:
        row=dict(row); row['referenceId']=row.get('rid'); records[row['oid']]={'row':row,'source':source,'sources':[source]}
original['records']=records; original['sources'][source]=b['sha256']; original['ledger']=[]; original['conflicts']=[]
def write(path,obj):
    data=(json.dumps(obj,sort_keys=True,separators=(',',':'),ensure_ascii=False)+'\n').encode(); path.parent.mkdir(parents=True,exist_ok=True)
    if path.exists() and path.read_bytes()!=data: raise ValueError('fixture changed')
    path.write_bytes(data)
write(out/'input.json',original); write(out/'taxa/state.json',{'batches':[],'frontier':[]})
print('fixture records',len(records))
