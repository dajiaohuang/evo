#!/usr/bin/env python3
"""Read-only audit of completed exact-occurrence batches and checkpoint."""
import hashlib,json
from pathlib import Path
base=Path('.git/platform-v2/local/node-map-expansion/occurrences')
s=json.loads((base/'state.json').read_bytes()); pos=0; returned=0; unexpected=0
for b in s['batches']:
    assert b['start']==pos and b['requested']==s['queue'][pos:pos+len(b['requested'])]
    raw=(base/b['file']).read_bytes(); assert hashlib.sha256(raw).hexdigest()==b['sha256']
    rows=json.loads(raw)['records']; seen=[r['oid'] for r in rows if r.get('oid') in b['requested']]
    assert len(seen)==len(set(seen)) and sorted(seen)==b['returned']
    assert sorted(r.get('oid') for r in rows if r.get('oid') not in b['requested'])==sorted(b['unexpected'])
    pos+=len(b['requested']); returned+=len(seen); unexpected+=len(b['unexpected'])
assert pos==s['cursor']
print(json.dumps({'attempted':pos,'returned':returned,'unreturned':len(s['unreturned']),'unexpected':unexpected,'remaining':len(s['queue'])-pos,'batches':len(s['batches'])}))
