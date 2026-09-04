"""Verify every generated source locator against the frozen ColDP archive."""
import csv,gzip,io,json,zipfile
from pathlib import Path
R=Path(__file__).resolve().parents[1]; A=R/'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip'; D=R/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals';
with zipfile.ZipFile(A) as z:
 def rows(n): return {r['ID']:(r,i) for i,r in enumerate(csv.DictReader(io.TextIOWrapper(z.open(n),encoding='utf-8-sig'),delimiter='\t'),2)}
 names,taxa,refs=rows('Name.txt'),rows('Taxon.txt'),rows('Reference.txt')
d=json.loads((D/'worms-cestoda-sidecar.json').read_text(encoding='utf-8')); allrows=[]
for f in d['files'] + d['upstreamOnlyFiles']:
 allrows += json.loads(gzip.open(D/Path(f['path']).name,'rt',encoding='utf-8').read())
assert len(allrows)==3054
concepts=set()
for row in allrows:
 if not row.get('acceptedName'): continue
 n=row['acceptedName']; assert n['nameID'] in names and n['taxonID'] in taxa; concepts.add(n['taxonID'])
 name,name_row=names[n['nameID']]; taxon,taxon_row=taxa[n['taxonID']]
 assert n['scientificName']==name['scientificName'] and n['authorship']==(name.get('authorship') or '') and taxon['nameID']==n['nameID']
 assert {'member':'Name.txt','row':name_row} in row['sourceRows'] and {'member':'Taxon.txt','row':taxon_row} in row['sourceRows']
 for x in row['references']:
  if not x.get('missing'):
   ref,ref_row=refs[x['referenceID']]; assert x['reference']['ID']==ref['ID'] and {'member':'Reference.txt','row':ref_row} in x['sourceRows']
assert len(concepts)==3047
print('raw archive rows verified',len(allrows),'source concepts',len(concepts))
