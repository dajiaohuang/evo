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
input_path=Path(sys.argv[4]) if len(sys.argv)>4 else root/'.git/platform-v2/local/node-map-expansion/input-v5.json'
inputs=json.loads(input_path.read_bytes())
assert len(inputs['records'])==db.execute('SELECT count(*) FROM map_occurrence').fetchone()[0]
for oid,node,source_json in db.execute('SELECT o.occurrence_id,o.node_id,e.source_fields_json FROM map_occurrence o JOIN map_occurrence_evidence_detail e USING(dataset_release_id,occurrence_id)'):
    row=inputs['records'][oid]['row']; assert node==row['tid'] and json.loads(source_json)==row
def source_id(name):
    encoded=(json.dumps([name,inputs['sources'][name]],ensure_ascii=False,sort_keys=True,separators=(',',':'))+'\n').encode()
    return 'file-'+hashlib.sha256(encoded).hexdigest()[:24]
source_ids={name:source_id(name) for name in inputs['sources']}
membership_count=0
for oid,sid in db.execute('SELECT occurrence_id,source_id FROM map_occurrence_source_membership'):
    assert sid in {source_ids[name] for name in inputs['records'][oid]['sources']}; membership_count+=1
assert membership_count==sum(len(set(x['sources'])) for x in inputs['records'].values())
assert not ({c['id'] for c in inputs['conflicts']} & set(inputs['records']))
del inputs
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
v4=sqlite3.connect(root/'.git/platform-v2/local/node-map-expansion/candidate-pbdb-local-12d5ec7132cf34a1ee09.sqlite')
v4_nodes={x[0] for x in v4.execute("SELECT DISTINCT o.node_id FROM map_occurrence o JOIN map_occurrence_position p ON p.occurrence_id=o.occurrence_id WHERE p.status='ready'")}
counts={'records':db.execute('SELECT count(*) FROM map_occurrence').fetchone()[0], 'validAge':db.execute('SELECT count(*) FROM map_occurrence WHERE older_ma IS NOT NULL').fetchone()[0], 'validModernCoordinates':db.execute('SELECT count(*) FROM map_occurrence WHERE modern_longitude IS NOT NULL').fetchone()[0], 'positions':dict(db.execute('SELECT status,count(*) FROM map_occurrence_position GROUP BY status')), 'candidateDirectPlottableNodes':len(candidate_nodes),'baselineDirectPlottableNodes':len(base_nodes),'newDirectPlottableNodes':len(candidate_nodes-base_nodes),'removedDirectPlottableNodes':len(base_nodes-candidate_nodes),'v4DirectPlottableNodes':len(v4_nodes),'newDirectPlottableNodesVersusV4':len(candidate_nodes-v4_nodes),'removedDirectPlottableNodesVersusV4':len(v4_nodes-candidate_nodes),'maxFrameBytes':maximum,'frames':len(m['frames'])}
print(json.dumps(counts,sort_keys=True))
