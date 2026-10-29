#!/usr/bin/env python3
"""Check that absent model data cannot become a present-day position."""
import importlib.util, sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('node_map_populate',root/'scripts/node-map-populate.py')
module=importlib.util.module_from_spec(spec); spec.loader.exec_module(module)
class MissingCircuit:
    def get_rotation(self, age, plate, **kw):
        assert kw=={'anchor_plate_id':0,'use_identity_for_missing_plate_ids':False}
        return None
assert module.reconstruct(None,MissingCircuit(),65,123,30,40)==(None,'failed','missing rotation circuit at frame age')
sys.path.insert(0,str(root/'.git/platform-v2/local/node-map/python'))
import pygplates
feature=pygplates.Feature()
assert feature.get_reconstruction_plate_id(None) is None
feature.set_reconstruction_plate_id(0)
assert feature.get_reconstruction_plate_id(None)==0
model=root/'.git/platform-v2/local/node-map/model'
rotation=pygplates.RotationModel([str(model/name) for name in ('1000_0_rotfile.rot','1800_1000_rotfile.rot')],default_anchor_plate_id=0)
assert rotation.get_rotation(65,999999999,anchor_plate_id=0,use_identity_for_missing_plate_ids=False) is None
assert module.reconstruct(pygplates,rotation,65,999999999,30,40)[0] is None
import sqlite3
db=sqlite3.connect(root/'.git/platform-v2/local/node-map/snapshot-v8.sqlite')
db.execute('ATTACH DATABASE ? AS previous',(str(root/'.git/platform-v2/local/node-map/snapshot-v7.sqlite'),))
changed=db.execute('''SELECT count(*) FROM map_occurrence_position n JOIN previous.map_occurrence_position o
    ON n.occurrence_id=o.occurrence_id AND n.frame_id=o.frame_id
    WHERE n.status<>o.status OR n.longitude IS NOT o.longitude OR n.latitude IS NOT o.latitude''').fetchone()[0]
print('positions differing from previous build:',changed)
print('missing rotation circuit and absent plate ID fail closed; explicit plate 0 retained')
