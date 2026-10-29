#!/usr/bin/env python3
"""Exercise downloaded-row freezing using a synthetic isolated source tree."""
import gzip,hashlib,importlib.util,json,tempfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('freeze',root/'scripts/node-map-expansion-freeze-download.py')
m=importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
with tempfile.TemporaryDirectory(prefix='node-map-test-') as tmp:
    m.ROOT=Path(tmp); m.BASE=m.ROOT/'.git/platform-v2/local/node-map-expansion'; m.BASE.mkdir(parents=True)
    def write(rel,obj):
        p=m.ROOT/rel; p.parent.mkdir(parents=True,exist_ok=True); p.write_bytes(m.enc(obj)); return p
    idx=gzip.compress(m.enc([{'pbdbTaxonId':'txn:1','identity':{'classification':{'parentSourceIdentifier':'txn:3'}}}]),mtime=0); p=m.ROOT/'public/data/index.gz'; p.parent.mkdir(parents=True); p.write_bytes(idx)
    write('public/data/current.json',{'pbdbReader':{'manifest':{'url':'reader.json'}}})
    write('public/data/reader.json',{'index':{'url':'index.gz','sha256':hashlib.sha256(idx).hexdigest()}})
    write('data/node-map/pbdb-exact-20261029-v2/manifest.json',{'batches':[]})
    write('data/node-map/pbdb-parent-closure-20261029/manifest.json',{'levels':[]})
    write('.git/platform-v2/local/node-map-expansion/taxa/state.json',{'batches':[]})
    write('.git/platform-v2/local/node-map-expansion/input-v3.json',{'records':{'occ:1':{'row':{'oid':'occ:1','tid':'txn:1','eag':10,'lag':5},'source':'baseline','sources':['baseline']}},'conflicts':[],'ledger':[],'sources':{'baseline':'a'*64},'counts':{}})
    rows=[{'oid':'occ:1','tid':'txn:1','eag':11,'lag':5,'rid':'ref:1'},{'oid':'occ:2','tid':'txn:2','eag':12,'lag':6,'rid':'ref:2'},{'oid':'occ:3','tna':'not entered'},{'oid':'occ:5','tid':'txn:1'}]
    page=write('.git/platform-v2/local/node-map-expansion/occurrences/page.json',{'records':rows})
    ids=['occ:1','occ:2','occ:3','occ:4','occ:5']
    state={'cursor':5,'queue':ids,'sourceSha256':{},'unreturned':['occ:4'],'batches':[{'start':0,'requested':ids,'returned':['occ:1','occ:2','occ:3','occ:5'],'file':'page.json','sha256':hashlib.sha256(page.read_bytes()).hexdigest()}]}
    write('.git/platform-v2/local/node-map-expansion/occurrences/state.json',state)
    m.main(); out=json.loads((m.BASE/'input-v5.json').read_bytes())
    assert list(out['records'])==['occ:2','occ:5'] and out['records']['occ:2']['row']['referenceId']=='ref:2'
    assert out['missingTaxa']==['txn:2','txn:3'] and out['conflictIds']==1
    assert out['download']['requested']==5 and out['download']['unreturned']==1
    assert {e['reason'] for e in out['ledger']} >= {'download lacks valid occurrence or taxon ID','exact occurrence request returned no row'}
print('freeze fixture passed: conflict, missing identity, missing row, exact source IDs and reference alias')
