"""Verify every generated source locator against the frozen ColDP archive."""
import csv,gzip,io,json,zipfile
from pathlib import Path
R=Path(__file__).resolve().parents[1]; A=R/'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip'; D=R/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals';
with zipfile.ZipFile(A) as z:
 def rows(n): return {r['ID']:r for r in csv.DictReader(io.TextIOWrapper(z.open(n),encoding='utf-8-sig'),delimiter='\t')}
 names,taxa,refs=rows('Name.txt'),rows('Taxon.txt'),rows('Reference.txt')
d=json.loads((D/'worms-cestoda-sidecar.json').read_text(encoding='utf-8')); allrows=[]
for f in d['files']:
 allrows += json.loads(gzip.open(D/Path(f['path']).name,'rt',encoding='utf-8').read())
assert len(allrows)==3015
for row in allrows:
 if row['status'] != 'accepted': continue
 n=row['acceptedName']; assert n['nameID'] in names and n['id'].rsplit(':',1)[-1] == n['taxonID'].rsplit(':',1)[-1]
 assert n['scientificName']==names[n['nameID']]['scientificName'] and n['authorship']==(names[n['nameID']].get('authorship') or '')
 assert any(x['member']=='Name.txt' for x in row['sourceRows']) and any(x['member']=='Taxon.txt' for x in row['sourceRows'])
 for x in row['references']:
  if not x.get('missing'): assert x['referenceID'] in refs
print('raw archive rows verified',len(allrows))
