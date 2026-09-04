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
   for p in outs[0].rglob('*'):
    if p.is_file():
     canonical_path=ROOT/p.relative_to(outs[0]); self.assertTrue(canonical_path.exists()); self.assertEqual(p.read_bytes(),canonical_path.read_bytes())
   rows=sum([json.load(gzip.open(pack/f'worms-nemertea-{i:03d}.json.gz','rt',encoding='utf8')) for i in range(len(d['files']))],[]); rows += json.load(gzip.open(pack/'worms-nemertea-source-only-000.json.gz','rt',encoding='utf8'))
   with zipfile.ZipFile(ARCH) as z:
    names=list(csv.DictReader(z.read('Name.txt').decode('utf-8-sig').splitlines(),delimiter='\t')); taxa=list(csv.DictReader(z.read('Taxon.txt').decode('utf-8-sig').splitlines(),delimiter='\t')); refs_list=list(csv.DictReader(z.read('Reference.txt').decode('utf-8-sig').splitlines(),delimiter='\t')); refs={r['ID']:r for r in refs_list}; name_refs=list(csv.DictReader(z.read('NameReference.txt').decode('utf-8-sig').splitlines(),delimiter='\t'))
   expected={i+2:(r['ID'],r['scientificName'],r.get('authorship')) for i,r in enumerate(names)}; taxa_by_id={r['ID']:r for r in taxa}; source_ids=set()
   for r in rows:
    if not r.get('acceptedName'): continue
    nl=next(x for x in r['sourceRows'] if x['member']=='Name.txt'); tl=next(x for x in r['sourceRows'] if x['member']=='Taxon.txt'); name=expected[nl['row']]; nrow=names[nl['row']-2]; tax=taxa_by_id[r['acceptedName']['taxonId']]; source_ids.add(r['acceptedName']['taxonId'])
    self.assertEqual((r['acceptedName']['nameId'],r['acceptedName']['scientificName'],r['acceptedName']['authorship']),name); self.assertEqual(r['acceptedName']['taxonId'],tax['ID']); self.assertEqual(tax['nameID'],r['acceptedName']['nameId']); self.assertEqual(tl['row'],next(i+2 for i,x in enumerate(taxa) if x['ID']==tax['ID']))
    expected_refs={x for x in [nrow.get('referenceID'),tax.get('referenceID')] if x}; expected_refs.update(x['referenceID'] for x in name_refs if x['nameID']==nrow['ID']); self.assertEqual({x['referenceID'] for x in r.get('references',[])},expected_refs)
    for q in r.get('references',[]):
     self.assertIn(q['referenceID'],refs); self.assertEqual(q.get('reference',{}),refs[q['referenceID']])
     self.assertEqual(q['sourceRows'],[{'member':'Reference.txt','row':next(i+2 for i,x in enumerate(refs_list) if x['ID']==q['referenceID'])}])
    for loc in r['sourceRows']:
     if loc['member']=='NameReference.txt':
      raw_nr=name_refs[loc['row']-2]; self.assertEqual(raw_nr['nameID'],r['acceptedName']['nameId']); self.assertIn(raw_nr['referenceID'],expected_refs)
     if loc['member']=='Reference.txt': self.assertIn(loc['row'], {x['sourceRows'][0]['row'] for x in r['references']})
   self.assertEqual(len(source_ids),1373); self.assertEqual(before,{p.name:p.read_bytes() for p in [*canon.glob('worms-nemertea-*'),ROOT/'data/sources/worms-nemertea-archive-1085-import-ledger.json']})
if __name__=='__main__':unittest.main()
