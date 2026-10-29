#!/usr/bin/env python3
"""Build a bounded PBDB node-map snapshot in an isolated SQLite database.

Pass --model-root to reconstruct with the pinned CAO2024 files and pyGPlates.
Without it, positions are explicitly unavailable, never modern-coordinate fallbacks.
"""
import argparse, gzip, hashlib, json, math, sqlite3, sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import reconstruct_cao2024_offline as cao

MODEL = 'CAO2024-v2.4-e13c16ef-db2a57a8-9b30d231'
FRAME = 'CAO2024-anchor-0'
def sha(b): return hashlib.sha256(b).hexdigest()
def read(path): return json.loads(path.read_bytes())
def encode(v): return (json.dumps(v, ensure_ascii=False, sort_keys=True, separators=(',', ':'))+'\n').encode()
def validnum(value, lo, hi):
    try:
        n = float(value)
        return n if math.isfinite(n) and lo <= n <= hi else None
    except (ValueError, TypeError): return None

def reconstruct(pyg, rotation, age, plate, lat, lon):
    """Return no coordinates when the model lacks the requested circuit."""
    try:
        transform=rotation.get_rotation(age,plate,anchor_plate_id=0,use_identity_for_missing_plate_ids=False)
        if transform is None: return None, 'failed', 'missing rotation circuit at frame age'
        point=transform*pyg.PointOnSphere(lat,lon)
        la,lo=point.to_lat_lon()
        if not (-90 <= la <= 90 and -180 <= lo <= 180): return None, 'failed', 'invalid reconstructed coordinates'
        return {'modelRevision':MODEL,'referenceFrame':FRAME,'anchorPlateId':0,'ageMa':age,'longitude':round(lo,6),'latitude':round(la,6)}, 'ready', None
    except Exception as e: return None, 'failed', str(e)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--model-root', type=Path)
    ap.add_argument('--pygplates-path', type=Path)
    ap.add_argument('--output', type=Path, required=True)
    ap.add_argument('--db', type=Path, required=True)
    args = ap.parse_args()
    current = read(ROOT/'public/data/current.json')
    reader_manifest = read(ROOT/'public/data'/current['pbdbReader']['manifest']['url'])
    idx_file = ROOT/'public/data'/reader_manifest['index']['url']
    idx_bytes = idx_file.read_bytes()
    if sha(idx_bytes) != reader_manifest['index']['sha256']: raise ValueError('PBDB index hash mismatch')
    index = json.loads(gzip.decompress(idx_bytes))
    byid = {x['pbdbTaxonId']: x for x in index}
    identity_sources = {x['pbdbTaxonId']:'reader' for x in index}
    if len(byid) != len(index): raise ValueError('duplicate PBDB identity')
    extra_dir = ROOT/'data/node-map/pbdb-exact-20261029-v2'
    extra_manifest_bytes = (extra_dir/'manifest.json').read_bytes()
    extra_manifest = json.loads(extra_manifest_bytes)
    if any('error' in b for b in extra_manifest['batches']): raise ValueError('PBDB batch failure')
    extra_ids = set()
    for batch in extra_manifest['batches']:
        raw=(extra_dir/batch['file']).read_bytes()
        if sha(raw)!=batch['sha256']: raise ValueError('PBDB batch hash mismatch')
        exact=set(batch['returned'])
        if batch['duplicates']: raise ValueError('duplicate exact PBDB ID')
        for row in json.loads(raw)['records']:
            tid=row.get('oid')
            if tid not in exact: continue
            if tid in byid or tid in extra_ids: raise ValueError('duplicate identity '+tid)
            extra_ids.add(tid)
            identity_sources[tid]='exact'
            byid[tid]={'pbdbTaxonId':tid,'identity':{'scientificName':row.get('nam'), 'classification':{'parentSourceIdentifier':row.get('par')}}}
    parent_dir=ROOT/'data/node-map/pbdb-parent-closure-20261029'
    parent_bytes=(parent_dir/'manifest.json').read_bytes(); parent_manifest=json.loads(parent_bytes)
    if parent_manifest['remaining']: raise ValueError('parent closure stopped before completing its frontier')
    parent_ids=set()
    for level in parent_manifest['levels']:
        for batch in level['batches']:
            if 'error' in batch or batch['duplicates']: raise ValueError('PBDB parent batch failure')
            raw=(parent_dir/batch['file']).read_bytes()
            if sha(raw)!=batch['sha256']: raise ValueError('PBDB parent batch hash mismatch')
            exact=set(batch['returned'])
            for row in json.loads(raw)['records']:
                tid=row.get('oid')
                if tid not in exact: continue
                if tid in byid: raise ValueError('duplicate parent identity '+tid)
                parent_ids.add(tid)
                identity_sources[tid]='parents'
                byid[tid]={'pbdbTaxonId':tid,'identity':{'scientificName':row.get('nam'),'classification':{'parentSourceIdentifier':row.get('par')}}}
    audit_dir=ROOT/'data/node-map/pbdb-occurrence-audit-20261029'
    audit_bytes=(audit_dir/'manifest.json').read_bytes(); audit=json.loads(audit_bytes)
    audited={}
    for batch in audit['batches']:
        if 'error' in batch or batch['duplicates'] or batch['unexpected']: raise ValueError('occurrence audit batch failure')
        raw=(audit_dir/batch['file']).read_bytes()
        if sha(raw)!=batch['sha256']: raise ValueError('occurrence audit batch hash mismatch')
        for row in json.loads(raw)['records']:
            if row.get('oid') in batch['returned']: audited[row['oid']]=row
    expansion=ROOT/'.git/platform-v2/local/node-map-expansion'
    input_bytes=(expansion/'input-v3.json').read_bytes(); inputs=json.loads(input_bytes)
    state_bytes=(expansion/'taxa/state.json').read_bytes(); state=json.loads(state_bytes)
    if state['frontier'] or state.get('lastError'): raise ValueError('taxon frontier incomplete')
    for batch in state['batches']:
        raw=(expansion/'taxa'/batch['file']).read_bytes()
        if sha(raw)!=batch['sha256']: raise ValueError('taxon response hash mismatch')
        exact=set(batch['returned'])
        for row in json.loads(raw)['records']:
            tid=row.get('oid')
            if tid not in exact or tid in byid: continue
            identity_sources[tid]='expansion'
            byid[tid]={'pbdbTaxonId':tid,'identity':{'scientificName':row.get('nam'),'classification':{'parentSourceIdentifier':row.get('par')}}}
    tree_hash = sha(encode({'reader':sha(idx_bytes),'additional':sha(extra_manifest_bytes),'parents':sha(parent_bytes),'expansion':sha(state_bytes)}))
    tree = 'PBDB-snapshot-' + tree_hash[:16]
    inventory = inputs['sources']
    for name,digest in inventory.items():
        if sha((ROOT/name).read_bytes())!=digest: raise ValueError('input source changed '+name)
    source_hash = sha(encode(inventory))
    revision_inputs = {'fossils': source_hash, 'tree': tree_hash,
                       'coastProvenance':sha((ROOT/'data/paleogeography/provenance.json').read_bytes()),'occurrenceAudit':sha(audit_bytes),
                       'generator': sha(Path(__file__).read_bytes()),'input':sha(input_bytes),'taxa':sha(state_bytes),'schema':sha((ROOT/'database/node-map-expansion-schema.sql').read_bytes()),
                       'reconstruction': MODEL if args.model_root else 'unavailable'}
    rev = 'pbdb-local-' + sha(encode(revision_inputs))[:20]
    rows={oid:item['row'] for oid,item in inputs['records'].items()}
    ledger=inputs['ledger']+inputs['conflicts']
    ancestry, names, parents = {}, {}, {}
    names_by_tid={r['tid']:r.get('tna') for r in rows.values()}
    for tid in sorted({r['tid'] for r in rows.values()}):
        chain, seen, node = [], set(), tid
        while node and node in byid:
            if node in seen: raise ValueError('cycle in PBDB parent chain '+node)
            seen.add(node); chain.append(node)
            ident = byid[node]['identity']; names[node] = ident.get('scientificName') or node
            parent = ident.get('classification',{}).get('parentSourceIdentifier')
            parents[node] = parent if parent in byid else None
            node = parent
        if not chain:
            chain = [tid]; names[tid] = names_by_tid.get(tid) or tid
            ledger.append({'id':tid,'reason':'taxon absent from PBDB reader index; self identity only'})
        elif node:
            ledger.append({'id':tid,'reason':'parent chain ends outside frozen PBDB identity inventory','parentId':node})
        ancestry[tid] = chain
    members = defaultdict(set)
    for tid, chain in ancestry.items():
        for j,descendant in enumerate(chain):
            for ancestor in chain[j:]: members[ancestor].add(descendant)
    for node in names: members[node].add(node)
    provenance = read(ROOT/'data/paleogeography/provenance.json')
    frames = provenance['series']['layers']['coastlines']['frames']
    pyg = partitioner = rotation = None
    if args.model_root:
        for name in (*cao.ROTATION_FILES, 'static_polygons.gpmlz'):
            if sha((args.model_root/name).read_bytes()) != cao.PINNED_SOURCE_FILES[name]: raise ValueError('model hash mismatch '+name)
        pyg = cao.load_pygplates(args.pygplates_path)
        if str(pyg.Version.get_imported_version()) != '1.0.0': raise ValueError('pyGPlates 1.0.0 required')
        rotation = pyg.RotationModel([str(args.model_root/name) for name in cao.ROTATION_FILES], default_anchor_plate_id=0)
        partitioner = pyg.PlatePartitioner(str(args.model_root/'static_polygons.gpmlz'), rotation)
    args.db.parent.mkdir(parents=True,exist_ok=True)
    if args.db.exists(): raise FileExistsError('choose a new database path; existing snapshots are immutable')
    db=sqlite3.connect(args.db); db.execute('PRAGMA foreign_keys=ON')
    db.executescript((ROOT/'database/node-map-schema.sql').read_text(encoding='utf-8'))
    db.executescript((ROOT/'database/node-map-expansion-schema.sql').read_text(encoding='utf-8'))
    source = 'pbdb-fossils-'+source_hash[:16]; map_source = 'pbdb-reader-'+sha(idx_bytes)[:16]; extra_source='pbdb-exact-'+sha(extra_manifest_bytes)[:16]; parent_source='pbdb-parents-'+sha(parent_bytes)[:16]; audit_source='pbdb-occ-audit-'+sha(audit_bytes)[:16]
    expansion_source='pbdb-expansion-taxa-'+sha(state_bytes)[:16]
    source_by_kind={'reader':map_source,'exact':extra_source,'parents':parent_source,'expansion':expansion_source}
    evidence={'treeRevision':tree,'nodes':{n:{'parentId':parents.get(n),'sourceId':source_by_kind.get(identity_sources.get(n),source)} for n in sorted(names)}}
    evidence_path=args.output/('tree-evidence-'+tree_hash[:16]+'.json')
    evidence_path.parent.mkdir(parents=True,exist_ok=True)
    evidence_data=encode(evidence)
    if evidence_path.exists() and evidence_path.read_bytes()!=evidence_data: raise ValueError('tree evidence differs')
    evidence_path.write_bytes(evidence_data)
    source_rows=[(source,'frozen input inventory',source_hash),(map_source,str(idx_file.relative_to(ROOT)).replace('\\','/'),sha(idx_bytes)),(extra_source,'data/node-map/pbdb-exact-20261029-v2/manifest.json',sha(extra_manifest_bytes)),(parent_source,'data/node-map/pbdb-parent-closure-20261029/manifest.json',sha(parent_bytes)),(audit_source,'data/node-map/pbdb-occurrence-audit-20261029/manifest.json',sha(audit_bytes)),(expansion_source,'taxa/state.json',sha(state_bytes)),('model', 'https://zenodo.org/records/13628813',sha(encode({k:cao.PINNED_SOURCE_FILES[k] for k in (*cao.ROTATION_FILES,'static_polygons.gpmlz')}))),('coasts','data/paleogeography/provenance.json',sha((ROOT/'data/paleogeography/provenance.json').read_bytes()))]
    source_rows += [('file-'+digest[:24],name,digest) for name,digest in inventory.items()]
    for sid, loc, digest in source_rows:
        db.execute('INSERT INTO map_evidence_source VALUES (?,?,?,?)',(sid,loc,rev,digest))
    db.execute('INSERT INTO map_tree_release VALUES (?,?,?)',(tree,current['datasetVersion'],tree_hash))
    db.executemany('INSERT INTO map_node VALUES (?,?)',[(tree,n) for n in sorted(names)])
    edges={(node,node,0) for node in names}
    for tid,chain in ancestry.items():
        for j,descendant in enumerate(chain):
            edges.update((ancestor,descendant,i-j) for i,ancestor in enumerate(chain) if i>=j)
    db.executemany('INSERT INTO map_node_ancestor VALUES (?,?,?,?)',[(tree,*e) for e in sorted(edges)])
    db.execute('INSERT INTO map_dataset_release VALUES (?,?,?,?,?)',(rev,tree,'bounded-sample',1,source))
    db.execute('INSERT INTO map_reconstruction_model VALUES (?,?,?,?,?,?)',(MODEL,'model',FRAME,0,1800,0))
    prepared=[]; positions={}; stats=Counter()
    for oid,row in sorted(rows.items()):
        old=validnum(row.get('eag'),0,1800); young=validnum(row.get('lag'),0,1800)
        if old is None or young is None or old<young: old=young=None; stats['unknownAge']+=1
        lon=validnum(row.get('lng'),-180,180); lat=validnum(row.get('lat'),-90,90)
        if lon is None or lat is None: lon=lat=None; stats['missingModernCoordinates']+=1
        plate=None
        if partitioner and lon is not None:
            try:
                part=partitioner.partition_point(pyg.PointOnSphere(lat,lon))
                if part: plate=part.get_feature().get_reconstruction_plate_id(None)
            except Exception as e: ledger.append({'id':oid,'reason':'plate partition failed','detail':str(e)})
        prepared.append((oid,row,old,young,lon,lat,plate))
        row_source='file-'+inventory[inputs['records'][oid]['source']][:24]
        db.execute('INSERT INTO map_occurrence VALUES (?,?,?,?,?,?,?,?,?,?,?)',(rev,tree,oid,row['tid'],row_source,source_by_kind.get(identity_sources.get(row['tid']),row_source),old,young,lon,lat,None))
        year=row.get('referenceYear')
        if not isinstance(year,int): year=None
        detail={k:row.get(k) for k in ('idn','tna','rnk','classification','referenceId','referenceAuthor','referenceYear','formation','member','specimenBasis')}
        db.execute('INSERT INTO map_occurrence_evidence_detail VALUES (?,?,?,?,?,?,?,?,?)',(rev,oid,row.get('idn'),row.get('tna'),row.get('referenceId'),row.get('referenceAuthor'),year,row.get('cid'),encode(detail).decode().strip()))
        for name in sorted(set(inputs['records'][oid]['sources'])):
            db.execute('INSERT INTO map_occurrence_source_membership VALUES (?,?,?)',(rev,oid,'file-'+inventory[name][:24]))
    out=args.output; frame_dir=out/'frames'/rev; frame_dir.mkdir(parents=True,exist_ok=True)
    member_data=encode({'revision':rev,'treeRevision':tree,'members':{k:sorted(v) for k,v in sorted(members.items())}})
    member_path=frame_dir/'members.json'
    if member_path.exists() and member_path.read_bytes()!=member_data: raise ValueError('immutable membership differs')
    member_path.write_bytes(member_data)
    member_descriptor={'url':'frames/'+rev+'/members.json','sha256':sha(member_data)}
    frame_manifest=[]
    for frame_index,f in enumerate(sorted(frames,key=lambda x:x['ageMa'])):
        age=f['ageMa']; frame_id=MODEL+':'+str(age)
        db.execute('INSERT INTO map_reconstruction_frame VALUES (?,?,?,?,?,?)',(frame_id,MODEL,FRAME,0,age,'coasts'))
        records=[]
        for oid,row,old,young,lon,lat,plate in prepared:
            window_young=max(0,age-5); window_old=age+5
            if old is not None and (young > window_old or old < window_young): continue
            row_source='file-'+inventory[inputs['records'][oid]['source']][:24]
            rec={'id':oid,'nodeId':row['tid'],'age':None if old is None else {'olderMa':old,'youngerMa':young},'sourceId':row_source,'kind':'fossil-occurrence','reconstruction':None}
            if row.get('referenceId'): rec['referenceId']=row['referenceId']
            rec['sourceUrl']='https://paleobiodb.org/data1.2/occs/single.json?id='+oid.split(':',1)[1]
            status='missing-plate'; reason='model unavailable' if not partitioner else 'modern coordinates or containing static polygon unavailable'
            if plate is not None:
                rec['reconstruction'],status,reason=reconstruct(pyg,rotation,age,plate,lat,lon)
            pos=rec['reconstruction']; stats['position_'+status]+=1
            if status != 'ready': ledger.append({'id':oid,'ageMa':age,'reason':reason,'status':status})
            db.execute('INSERT INTO map_occurrence_position VALUES (?,?,?,?,?,?,?,?,?)',(rev,oid,frame_id,'model',status,plate,pos['longitude'] if pos else None,pos['latitude'] if pos else None,reason))
            records.append(rec)
        dataset={'revision':rev,'treeRevision':tree,'records':records,'coverage':'bounded-sample','truncated':True}
        data=encode(dataset); name=f"ma-{age:08.3f}.json"; path=frame_dir/name
        if path.exists() and path.read_bytes()!=data: raise ValueError('immutable frame differs: '+str(path))
        path.write_bytes(data)
        frame_manifest.append({'ageMa':age,'url':'frames/'+rev+'/'+name,'sha256':sha(data),'coastlineSha256':f['geometrySha256'],'datasetWindow':{'olderMa':age+5,'youngerMa':max(0,age-5)}})
        if (frame_index+1)%25==0: print(json.dumps({'framesBuilt':frame_index+1,'framesTotal':len(frames),'ageMa':age}),flush=True)
    db.commit()
    if db.execute('PRAGMA integrity_check').fetchone()[0]!='ok' or db.execute('PRAGMA foreign_key_check').fetchall(): raise ValueError('database verification failed')
    if db.execute('SELECT count(*) FROM map_occurrence').fetchone()[0] != len(rows): raise ValueError('readback count mismatch')
    db.close()
    node_records=defaultdict(list)
    for oid,row,old,young,lon,lat,plate in prepared:
        for n in ancestry[row['tid']]: node_records[n].append((old,young))
    nodes=[]
    for n,ages in sorted(node_records.items()):
        known=[x for x in ages if x[0] is not None]
        nodes.append({'id':n,'name':names[n],'parentId':parents.get(n),'recordCount':len(ages),'olderMa':max((x[0] for x in known),default=None),'youngerMa':min((x[1] for x in known),default=None)})
    manifest={'schemaVersion':1,'revision':rev,'treeRevision':tree,'model':'CAO2024','modelVersion':'v2.4','modelRevision':MODEL,'referenceFrame':FRAME,'anchorPlateId':0,'coverage':'bounded-sample','truncated':True,'frameSelection':'age-overlaps-window','frameWindowHalfWidthMa':5,'members':member_descriptor,'sources':{sid:{'authority':'Paleobiology Database','locator':loc,'sha256':digest} for sid,loc,digest in source_rows},'nodes':nodes,'frames':frame_manifest,'stats':{'inputRecords':len(rows),'sourceFiles':inventory,'ledgerEntries':len(ledger),**dict(stats)}}
    (out/'ledger.json').write_bytes(encode({'entries':ledger,'stats':dict(stats),'sourceInventory':inventory}))
    temporary=out/'manifest.json.tmp'; temporary.write_bytes(encode(manifest)); temporary.replace(out/'manifest.json')
    print(json.dumps({'treeRevision':tree,'records':len(rows),'nodes':len(nodes),'frames':len(frames),'stats':stats,'ledgerEntries':len(ledger)},ensure_ascii=False))
if __name__=='__main__': main()
