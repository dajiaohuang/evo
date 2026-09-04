import csv,gzip,io,json,zipfile
from pathlib import Path
R=Path(__file__).resolve().parents[1]; A=R/'data/sources/archives/checklistbank-1153-kinorhyncha-2026-09-01.zip'; D=R/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
with zipfile.ZipFile(A) as z:
 def read(n): return {r['ID']:(r,i) for i,r in enumerate(csv.DictReader(io.TextIOWrapper(z.open(n),encoding='utf8'),delimiter='\t'),2)}
 names,taxa=read('Name.txt'),read('Taxon.txt')
d=json.loads((D/'worms-kinorhyncha-sidecar.json').read_text(encoding='utf8')); allrows=[]
for f in d['files']+d['upstreamOnlyFiles']: allrows+=json.loads(gzip.open(D/Path(f['path']).name,'rt',encoding='utf8').read())
assert len(allrows)==362
for row in allrows:
 n=row['acceptedName']; assert n['nameID'] in names and n['taxonID'] in taxa; name,nr=names[n['nameID']]; tax,tr=taxa[n['taxonID']]; assert tax['nameID']==n['nameID'] and n['scientificName']==name['scientificName'] and n['authorship']==(name.get('authorship') or ''); assert {'member':'Name.txt','row':nr} in row['sourceRows'] and {'member':'Taxon.txt','row':tr} in row['sourceRows']
print('raw archive rows verified',len(allrows))
