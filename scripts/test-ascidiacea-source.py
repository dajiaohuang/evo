"""Focused raw-archive assertions for the generated Ascidiacea projection."""
import csv, gzip, io, json, zipfile
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip'
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
def member(z, name):
    with z.open(name) as stream:
        return {row['ID']: dict(row, _row=i) for i, row in enumerate(csv.DictReader(io.TextIOWrapper(stream, encoding='utf-8'), delimiter='\t'), 2)}
with zipfile.ZipFile(ARCHIVE) as z:
    names, taxa, refs = member(z, 'Name.txt'), member(z, 'Taxon.txt'), member(z, 'Reference.txt')
    name_refs = {}
    with z.open('NameReference.txt') as stream:
        for row in csv.DictReader(io.TextIOWrapper(stream, encoding='utf-8'), delimiter='\t'):
            name_refs.setdefault(row['nameID'], set()).add(row['referenceID'])
descriptor = json.loads((OUT / 'worms-ascidiacea-sidecar.json').read_text(encoding='utf-8'))
rows = []
for item in descriptor['files']:
    rows.extend(json.loads(gzip.open(OUT / Path(item['path']).name, 'rt', encoding='utf-8').read()))
assert len(rows) == 3000
for row in rows:
    source = row['acceptedName']; name = names[source['id']]; taxon = taxa[source['taxonID']]
    assert source['scientificName'] == name['scientificName']
    assert source['authorship'] == (name.get('authorship') or '')
    assert taxon['nameID'] == source['id']
    assert {'member':'Name.txt', 'row':name['_row']} in source['sourceRows']
    assert {'member':'Taxon.txt', 'row':taxon['_row']} in source['sourceRows']
    expected_refs = name_refs.get(name['ID'], set()) | {name.get('referenceID'), taxon.get('referenceID')}
    expected_refs = {rid for rid in expected_refs if rid}
    assert set(source['referenceIds']) == expected_refs
    assert {ref['ID'] for ref in source['references']} == expected_refs.intersection(refs)
    for ref in source['references']:
        assert ref == refs[ref['ID']]
    for locator in source['referenceRows']:
        assert locator['member'] == 'Reference.txt' and locator['referenceID'] in refs
        assert locator['row'] == refs[locator['referenceID']]['_row']
    assert taxon['ID'] == source['taxonID']
print('raw archive rows verified', len(rows))
