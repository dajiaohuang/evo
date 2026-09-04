import csv,gzip,hashlib,json,subprocess,tempfile,unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];SRC=ROOT/'data/sources/archives';ARCH=SRC/'checklistbank-1119-nematomorpha-2010-12.tar.gz';META=SRC/'checklistbank-1119-nematomorpha-2010-12.metadata.json';SCRIPT=ROOT/'scripts/build-nematomorpha-source.py'
class NematomorphaTest(unittest.TestCase):
 def test_replay_raw_and_canonical(self):
  canon=ROOT/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'; before={p.name:p.read_bytes() for p in [*canon.glob('worms-nematomorpha-*'),ROOT/'data/sources/worms-nematomorpha-archive-1119-import-ledger.json']}
  with tempfile.TemporaryDirectory() as t:
   outs=[]
   for x in 'ab':
    o=Path(t)/x;subprocess.run(['python','-B',str(SCRIPT),'--archive',str(ARCH),'--metadata',str(META),'--output-root',str(o)],cwd=ROOT,check=True,capture_output=True,text=True);outs.append(o)
   def hashes(o):return sorted((p.relative_to(o),hashlib.sha256(p.read_bytes()).hexdigest()) for p in o.rglob('*') if p.is_file())
   self.assertEqual(hashes(outs[0]),hashes(outs[1]))
   for p in outs[0].rglob('*'):
    if p.is_file(): q=ROOT/p.relative_to(outs[0]);self.assertTrue(q.exists());self.assertEqual(p.read_bytes(),q.read_bytes())
   pack=outs[0]/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals';d=json.loads((pack/'worms-nematomorpha-sidecar.json').read_text(encoding='utf8'));self.assertEqual(d['counts'],{'total':356,'accepted':356,'redirect':0,'ambiguous':0,'unmatched':0,'withheld':0,'upstreamOnly':0,'records':356});self.assertEqual(d['deliveryProfiles']['web-light']['mode'],'summary-only');self.assertEqual(d['deliveryProfiles']['native-full']['records'],356)
   rows=sum([json.load(gzip.open(pack/f'worms-nematomorpha-{i:03d}.json.gz','rt',encoding='utf8')) for i in range(len(d['files']))],[])
   import tarfile
   with tarfile.open(fileobj=gzip.open(ARCH,'rb'),mode='r:') as tar: src=list(csv.DictReader(tar.extractfile('AcceptedSpecies.tsv').read().decode('utf-8-sig').splitlines(),delimiter='\t'))
   expected={i+2:(r['AcceptedTaxonID'], ' '.join(x for x in [r['Genus'],r['SubGenusName'] and '('+r['SubGenusName']+')',r['SpeciesEpithet']] if x),r['AuthorString']) for i,r in enumerate(src)}
   for r in rows:
    loc=next(x['row'] for x in r['sourceRows'] if x['member']=='AcceptedSpecies.tsv');self.assertEqual((r['acceptedName']['id'],r['acceptedName']['scientificName'],r['acceptedName']['authorship']),expected[loc]);self.assertEqual(r['acceptedName']['raw']['AcceptedTaxonID'],expected[loc][0])
if __name__=='__main__':unittest.main()
