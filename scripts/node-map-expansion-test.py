#!/usr/bin/env python3
import importlib.util,sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
script=Path(sys.argv[1]) if len(sys.argv)>1 else root/'scripts/node-map-expansion-build.py'
spec=importlib.util.spec_from_file_location('expansion',script)
m=importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
class Missing:
    def get_rotation(self,age,plate,**kw):
        assert kw=={'anchor_plate_id':0,'use_identity_for_missing_plate_ids':False}; return None
assert m.reconstruct(None,Missing(),65,123,30,40)==(None,'failed','missing rotation circuit at frame age')
sys.path.insert(0,str(root/'.git/platform-v2/local/node-map/python'))
import pygplates
feature=pygplates.Feature(); assert feature.get_reconstruction_plate_id(None) is None
feature.set_reconstruction_plate_id(0); assert feature.get_reconstruction_plate_id(None)==0
print('missing rotation and plate ID fail closed; explicit plate 0 retained')
