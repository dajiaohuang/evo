"""Focused raw-archive assertions for the generated Appendicularia projection."""
import csv, gzip, importlib.util, io, json, zipfile
import hashlib
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('appendicularia_builder', ROOT / 'scripts/build-appendicularia-source.py')
builder = importlib.util.module_from_spec(spec); spec.loader.exec_module(builder)
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1178-appendicularia-2026-09-01.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-1178-appendicularia-2026-09-01.metadata.json'
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
def member(z, name):
    with z.open(name) as stream:
        return {row['ID']: dict(row, _row=i) for i, row in enumerate(csv.DictReader(io.TextIOWrapper(stream, encoding='utf-8'), delimiter='\t'), 2)}
metadata = json.loads(METADATA.read_text(encoding='utf-8'))
with zipfile.ZipFile(ARCHIVE) as z:
    names, taxa, refs = member(z, 'Name.txt'), member(z, 'Taxon.txt'), member(z, 'Reference.txt')
    archive_members = []
    for info in z.infolist():
        raw = z.read(info.filename)
        archive_members.append({'name': info.filename, 'bytes': len(raw), 'sha256': hashlib.sha256(raw).hexdigest()})
    name_refs = {}
    with z.open('NameReference.txt') as stream:
        for ordinal, row in enumerate(csv.DictReader(io.TextIOWrapper(stream, encoding='utf-8'), delimiter='\t'), 2):
            name_refs.setdefault(row['nameID'], []).append((ordinal, row))
descriptor = json.loads((OUT / 'worms-appendicularia-sidecar.json').read_text(encoding='utf-8'))
ledger = json.loads((ROOT / 'data/sources/worms-appendicularia-1178-import-ledger.json').read_text(encoding='utf-8'))
for projected in (descriptor['source'], ledger['sourceMetadata']):
    assert projected['title'] == metadata['title']
    assert projected['version'] == metadata['version']
    assert projected['versionDoi'] == metadata['versionDoi']
    assert projected['citation'] == metadata['citation']
assert descriptor['source']['archiveMembers'] == archive_members
assert ledger['sourceArchive']['members'] == archive_members
assert descriptor['provider'] == 'World Register of Marine Species via ChecklistBank'
assert descriptor['evidenceBoundary']['zh'] == '冻结的精确命名学交叉映射；不是物种概念等同性、生物学档案或专家审查。'
assert builder.key('A\u0301  beta', 'Garci\u0301a') == ('Á beta', 'García')
rows = []
for item in descriptor['files']:
    rows.extend(json.loads(gzip.open(OUT / Path(item['path']).name, 'rt', encoding='utf-8').read()))
assert len(rows) == 68
for row in rows:
    source = row['acceptedName']; name = names[source['id']]; taxon = taxa[source['taxonID']]
    assert source['scientificName'] == name['scientificName']
    assert source['authorship'] == (name.get('authorship') or '')
    assert taxon['nameID'] == source['id']
    assert {'member':'Name.txt', 'row':name['_row']} in source['sourceRows']
    assert {'member':'Taxon.txt', 'row':taxon['_row']} in source['sourceRows']
    expected_name_refs = name_refs.get(name['ID'], [])
    assert source['nameReferenceRows'] == [
        {'member': 'NameReference.txt', 'row': ordinal, 'nameID': name['ID'], 'referenceID': row.get('referenceID')}
        for ordinal, row in expected_name_refs
    ]
    expected_refs = {row.get('referenceID') for _, row in expected_name_refs} | {name.get('referenceID'), taxon.get('referenceID')}
    expected_refs = {rid for rid in expected_refs if rid}
    assert set(source['referenceIds']) == expected_refs
    assert {ref['ID'] for ref in source['references']} == expected_refs.intersection(refs)
    for ref in source['references']:
        assert ref == {key: value for key, value in refs[ref['ID']].items() if key != '_row'}
    for locator in source['referenceRows']:
        assert locator['member'] == 'Reference.txt' and locator['referenceID'] in refs
        assert locator['row'] == refs[locator['referenceID']]['_row']
    assert taxon['ID'] == source['taxonID']
print('raw archive rows verified', len(rows))
