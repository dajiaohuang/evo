import csv, gzip, hashlib, json, subprocess, tempfile, unittest, zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; SCRIPT=ROOT/'scripts/build-worms-nemertea-source.py'; SRC=ROOT/'data/sources/archives'
ARCH=SRC/'checklistbank-1085-nemertea-2026-09-01.zip'; META=SRC/'checklistbank-1085-nemertea-2026-09-01.metadata.json'
class NemerteaTest(unittest.TestCase):
 def test_two_rebuilds_and_raw_rows(self):
  canon=ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'; before={p.name:p.read_bytes() for p in [*canon.glob('worms-nemertea-*'),ROOT/'data/sources/worms-nemertea-archive-1085-import-ledger.json']}; outs=[]
  with tempfile.TemporaryDirectory() as t:
   for x in 'ab':
    o=Path(t)/x; subprocess.run(['python','-B',str(SCRIPT),'--archive',str(ARCH),'--metadata',str(META),'--output-root',str(o)],cwd=ROOT,check=True,capture_output=True,text=True);outs.append(o)
   files=lambda o:sorted((p.relative_to(o),hashlib.sha256(p.read_bytes()).hexdigest()) for p in o.rglob('*') if p.is_file())
   self.assertEqual(files(outs[0]),files(outs[1])); pack=outs[0]/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'; d=json.loads((pack/'worms-nemertea-sidecar.json').read_text(encoding='utf8')); self.assertEqual(d['counts'],{'total':1364,'accepted':1361,'redirect':0,'ambiguous':0,'unmatched':3,'withheld':0,'upstreamOnly':12,'records':1376}); self.assertEqual(d['deliveryProfiles']['web-light']['mode'],'summary-only'); self.assertEqual(d['deliveryProfiles']['native-full']['records'],1376)
   rows=sum([json.load(gzip.open(pack/f'worms-nemertea-{i:03d}.json.gz','rt',encoding='utf8')) for i in range(len(d['files']))],[])
   with zipfile.ZipFile(ARCH) as z: src=list(csv.DictReader(z.read('Name.txt').decode('utf-8-sig').splitlines(),delimiter='\t'))
   expected={i+2:(r['ID'],r['scientificName'],r.get('authorship')) for i,r in enumerate(src)}
   for r in rows:
    if r['status']!='accepted': continue
    loc=next(x['row'] for x in r['sourceRows'] if x['member']=='Name.txt'); self.assertEqual((r['matchedName']['id'],r['matchedName']['scientificName'],r['matchedName']['authorship']),expected[loc])
   self.assertEqual(before,{p.name:p.read_bytes() for p in [*canon.glob('worms-nemertea-*'),ROOT/'data/sources/worms-nemertea-archive-1085-import-ledger.json']})
if __name__=='__main__':unittest.main()
