"""Verify every generated source locator against the frozen ColDP archive."""
import csv,gzip,importlib.util,io,json,zipfile
from pathlib import Path
R=Path(__file__).resolve().parents[1]; A=R/'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip'; D=R/'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals';
spec=importlib.util.spec_from_file_location('cestoda',R/'scripts/build-worms-cestoda-source.py'); mod=importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
assert mod.norm('  Alpha\u0301  beta,Author  &Co  ')=='Alphá beta, Author & Co'
assert mod.bare({'scientificName':'Alpha beta Author, 1900','authorship':'Author, 1900'})=='Alpha beta'
assert mod.bare({'scientificName':'Alpha betaAuthor, 1900','authorship':'Author, 1900'})=='Alpha betaAuthor, 1900'
with zipfile.ZipFile(A) as z:
 def rows(n): return {r['ID']:(r,i) for i,r in enumerate(csv.DictReader(io.TextIOWrapper(z.open(n),encoding='utf-8-sig'),delimiter='\t'),2)}
 names,taxa,refs=rows('Name.txt'),rows('Taxon.txt'),rows('Reference.txt')
 with z.open('NameReference.txt') as stream:
  nrefs=[(r,i) for i,r in enumerate(csv.DictReader(io.TextIOWrapper(stream,encoding='utf-8-sig'),delimiter='\t'),2)]
d=json.loads((D/'worms-cestoda-sidecar.json').read_text(encoding='utf-8')); assert d['counts']=={'total':3015,'records':3049,'accepted':3013,'redirect':0,'ambiguous':0,'unmatched':2,'withheld':0,'upstreamOnly':34}
assert d['source']['license']=='cc by' and 'licenseUrl' not in d['source']
assert d['source']['embeddedMetadata']['doi'] is None and d['source']['embeddedMetadata']['license']=='CC-BY'
assert d['source']['metadataConsistency']['status']=='mismatch'; allrows=[]
for f in d['files'] + d['upstreamOnlyFiles']:
 allrows += json.loads(gzip.open(D/Path(f['path']).name,'rt',encoding='utf-8').read())
assert len(allrows)==3049
concepts=set()
for row in allrows:
 if not row.get('acceptedName'): continue
 n=row['acceptedName']; assert n['nameID'] in names and n['taxonID'] in taxa; concepts.add(n['taxonID'])
 name,name_row=names[n['nameID']]; taxon,taxon_row=taxa[n['taxonID']]
 assert n['scientificName']==name['scientificName'] and n['authorship']==(name.get('authorship') or '') and taxon['nameID']==n['nameID']
 loc={(x['member'],x['row']) for x in row['sourceRows']}; assert ('Name.txt',name_row) in loc and ('Taxon.txt',taxon_row) in loc
 expected={x for x in (name.get('referenceID'),taxon.get('referenceID')) if x}; expected.update(x['referenceID'] for x,i in nrefs if x['nameID']==n['nameID'] and x.get('referenceID'))
 assert {x['referenceID'] for x in row['references']}==expected
 for x in row['references']:
  assert not x.get('missing'); ref,ref_row=refs[x['referenceID']]; assert x['reference']==ref and {'member':'Reference.txt','row':ref_row} in x['sourceRows'] and ('Reference.txt',ref_row) in loc
 for x,i in nrefs:
  if x['nameID']==n['nameID']: assert ('NameReference.txt',i) in loc
assert len(concepts)==3047
print('raw archive rows verified',len(allrows),'source concepts',len(concepts))
