#!/usr/bin/env python3
"""Verify published node-map shards against SQLite and repeat build."""
import hashlib, json, sqlite3, sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
out=root/'public/node-map'
repeat=root/'.git/platform-v2/local/node-map/repeat-v8'
db=sqlite3.connect(sys.argv[1] if len(sys.argv)>1 else root/'.git/platform-v2/local/node-map/snapshot-v8.sqlite')
manifest=json.loads((out/'manifest.json').read_bytes())
assert (out/'manifest.json').read_bytes()==(repeat/'manifest.json').read_bytes()
assert db.execute('PRAGMA integrity_check').fetchone()[0]=='ok'
assert not db.execute('PRAGMA foreign_key_check').fetchall()
source_ids={row[0] for row in db.execute('SELECT id FROM map_evidence_source')}
evidence=json.loads((root/'data/node-map'/('tree-evidence-'+manifest['treeRevision'].split('-')[-1]+'.json')).read_bytes())
assert evidence['treeRevision']==manifest['treeRevision']
assert all(v['sourceId'] in source_ids for v in evidence['nodes'].values())
db_members={}
for a,d in db.execute('SELECT ancestor_id,descendant_id FROM map_node_ancestor'):
    db_members.setdefault(a,set()).add(d)
member_bytes=(out/manifest['members']['url']).read_bytes()
assert hashlib.sha256(member_bytes).hexdigest()==manifest['members']['sha256']
assert member_bytes==(repeat/manifest['members']['url']).read_bytes()
member_data=json.loads(member_bytes)
assert member_data['revision']==manifest['revision'] and member_data['treeRevision']==manifest['treeRevision']
assert {k:set(v) for k,v in member_data['members'].items()}==db_members
assert all(node in members for node,members in member_data['members'].items())
for f in manifest['frames']:
    data=(out/f['url']).read_bytes()
    assert hashlib.sha256(data).hexdigest()==f['sha256']
    assert data==(repeat/f['url']).read_bytes()
    shard=json.loads(data)
    assert shard['revision']==manifest['revision'] and shard['treeRevision']==manifest['treeRevision']
    assert 'members' not in shard
    expected=db.execute('SELECT occurrence_id FROM map_occurrence WHERE older_ma IS NULL OR (younger_ma <= ? AND older_ma >= ?)',(f['datasetWindow']['olderMa'],f['datasetWindow']['youngerMa'])).fetchall()
    assert {x[0] for x in expected}=={r['id'] for r in shard['records']}
    for r in shard['records']:
        p=r['reconstruction']
        if p: assert p['ageMa']==f['ageMa'] and p['modelRevision']==manifest['modelRevision'] and p['referenceFrame']==manifest['referenceFrame'] and p['anchorPlateId']==0
        status=db.execute('SELECT status,longitude,latitude FROM map_occurrence_position WHERE dataset_release_id=? AND occurrence_id=? AND frame_id=?',(manifest['revision'],r['id'],manifest['modelRevision']+':'+str(f['ageMa']))).fetchone()
        assert status and ((p is None and status[0]!='ready') or (p is not None and status==('ready',p['longitude'],p['latitude'])))
print('verified',len(manifest['frames']),'shards, repeat bytes, age eligibility, frame identity, SQLite integrity and foreign keys')
