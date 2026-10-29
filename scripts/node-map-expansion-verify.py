#!/usr/bin/env python3
"""Verify a candidate, its independent repeat, lineage, geometry and source hashes."""
import hashlib,json,sqlite3,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
out,repeat,dbpath=map(Path,sys.argv[1:4]); m=json.loads((out/'manifest.json').read_bytes())
assert (out/'manifest.json').read_bytes()==(repeat/'manifest.json').read_bytes()
db=sqlite3.connect(dbpath); assert db.execute('PRAGMA integrity_check').fetchone()==('ok',); assert not db.execute('PRAGMA foreign_key_check').fetchall()
for loc,digest in db.execute("SELECT locator,sha256 FROM map_evidence_source WHERE id LIKE 'file-%'"):
    assert hashlib.sha256((root/loc).read_bytes()).hexdigest()==digest
members=json.loads((out/m['members']['url']).read_bytes()); assert hashlib.sha256((out/m['members']['url']).read_bytes()).hexdigest()==m['members']['sha256']
assert (out/m['members']['url']).read_bytes()==(repeat/m['members']['url']).read_bytes()
edges={}
for a,d in db.execute('SELECT ancestor_id,descendant_id FROM map_node_ancestor'): edges.setdefault(a,set()).add(d)
assert {a:set(v) for a,v in members['members'].items()}==edges
assert all(a in v for a,v in edges.items())
assert db.execute('SELECT count(*) FROM map_occurrence_evidence_detail').fetchone()[0]==db.execute('SELECT count(*) FROM map_occurrence').fetchone()[0]
assert not db.execute('SELECT o.occurrence_id FROM map_occurrence o LEFT JOIN map_occurrence_source_membership s USING(dataset_release_id,occurrence_id) WHERE s.occurrence_id IS NULL LIMIT 1').fetchall()
coasts=json.loads((root/'data/paleogeography/provenance.json').read_bytes())['series']['layers']['coastlines']['frames']
assert {f['ageMa']:f['coastlineSha256'] for f in m['frames']}=={f['ageMa']:f['geometrySha256'] for f in coasts}
maximum=0
for f in m['frames']:
    path=out/f['url']; raw=path.read_bytes(); maximum=max(maximum,len(raw)); assert hashlib.sha256(raw).hexdigest()==f['sha256']; assert raw==(repeat/f['url']).read_bytes()
    shard=json.loads(raw); assert shard['revision']==m['revision'] and shard['treeRevision']==m['treeRevision'] and 'members' not in shard
    expected={x[0] for x in db.execute('SELECT occurrence_id FROM map_occurrence WHERE older_ma IS NULL OR (younger_ma<=? AND older_ma>=?)',(f['ageMa']+5,max(0,f['ageMa']-5)))}
    assert expected=={x['id'] for x in shard['records']}
    positions={oid:(status,lon,lat) for oid,status,lon,lat in db.execute('SELECT occurrence_id,status,longitude,latitude FROM map_occurrence_position WHERE frame_id=?',(m['modelRevision']+':'+str(f['ageMa']),))}
    assert len(positions)==len(expected)
    for rec in shard['records']:
        pos=rec['reconstruction']; status,lon,lat=positions[rec['id']]
        assert (pos is None and status!='ready') or (pos is not None and status=='ready' and pos['longitude']==lon and pos['latitude']==lat and pos['ageMa']==f['ageMa'] and pos['modelRevision']==m['modelRevision'] and pos['referenceFrame']==m['referenceFrame'] and pos['anchorPlateId']==0)
base=sqlite3.connect(root/'.git/platform-v2/local/node-map/snapshot-v8.sqlite')
base_nodes={x[0] for x in base.execute("SELECT DISTINCT o.node_id FROM map_occurrence o JOIN map_occurrence_position p ON p.occurrence_id=o.occurrence_id WHERE p.status='ready'")}
candidate_nodes={x[0] for x in db.execute("SELECT DISTINCT o.node_id FROM map_occurrence o JOIN map_occurrence_position p ON p.occurrence_id=o.occurrence_id WHERE p.status='ready'")}
counts={'records':db.execute('SELECT count(*) FROM map_occurrence').fetchone()[0], 'validAge':db.execute('SELECT count(*) FROM map_occurrence WHERE older_ma IS NOT NULL').fetchone()[0], 'validModernCoordinates':db.execute('SELECT count(*) FROM map_occurrence WHERE modern_longitude IS NOT NULL').fetchone()[0], 'positions':dict(db.execute('SELECT status,count(*) FROM map_occurrence_position GROUP BY status')), 'candidateDirectPlottableNodes':len(candidate_nodes),'baselineDirectPlottableNodes':len(base_nodes),'newDirectPlottableNodes':len(candidate_nodes-base_nodes),'removedDirectPlottableNodes':len(base_nodes-candidate_nodes),'maxFrameBytes':maximum,'frames':len(m['frames'])}
print(json.dumps(counts,sort_keys=True))
