import csv, gzip, io, json, tempfile, zipfile, importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1153-kinorhyncha-2026-09-01.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-1153-kinorhyncha-2026-09-01.metadata.json'
CANON = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
LEDGER = ROOT / 'data/sources/worms-kinorhyncha-archive-1153-import-ledger.json'
spec = importlib.util.spec_from_file_location('kino_builder', ROOT / 'scripts/build-worms-kinorhyncha-source.py')
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)

def table(z, member):
    return [(row, index) for index, row in enumerate(csv.DictReader(io.TextIOWrapper(z.open(member), encoding='utf-8-sig'), delimiter='\t'), 2)]

def records(root):
    descriptor = json.loads((root / 'worms-kinorhyncha-sidecar.json').read_text(encoding='utf-8'))
    result = []
    for entry in descriptor['files'] + descriptor['upstreamOnlyFiles']:
        result.extend(json.loads(gzip.open(root / Path(entry['path']).name, 'rt', encoding='utf-8').read()))
    return descriptor, result

def validate_raw(rows):
    with zipfile.ZipFile(ARCHIVE) as z:
        names = {row['ID']: (row, index) for row, index in table(z, 'Name.txt')}
        taxa = {row['ID']: (row, index) for row, index in table(z, 'Taxon.txt')}
        refs = {row['ID']: (row, index) for row, index in table(z, 'Reference.txt')}
        nrefs = {}
        for row, index in table(z, 'NameReference.txt'):
            nrefs.setdefault(row['nameID'], []).append((row, index))
    assert len(rows) == 362
    assert {r['status'] for r in rows} == {'accepted'}
    for row in rows:
        source = row['acceptedName']
        name, name_row = names[source['nameID']]
        taxon, taxon_row = taxa[source['taxonID']]
        assert taxon['nameID'] == name['ID']
        assert source['scientificName'] == name['scientificName']
        assert source['authorship'] == name.get('authorship')
        assert {'member': 'Name.txt', 'row': name_row} in row['sourceRows']
        assert {'member': 'Taxon.txt', 'row': taxon_row} in row['sourceRows']
        expected_ids = {x for x in (name.get('referenceID'), taxon.get('referenceID')) if x}
        expected_ids.update(x['referenceID'] for x, _ in nrefs.get(name['ID'], []) if x.get('referenceID'))
        assert {x['referenceID'] for x in row['references']} == expected_ids
        for reference in row['references']:
            raw, ref_row = refs[reference['referenceID']]
            assert reference['reference'] == raw
            assert {'member': 'Reference.txt', 'row': ref_row} in row['sourceRows']
        for link, link_row in nrefs.get(name['ID'], []):
            assert {'member': 'NameReference.txt', 'row': link_row} in row['sourceRows']

with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
    before = {p.name: p.read_bytes() for p in CANON.iterdir() if p.is_file()}
    builder.project(ARCHIVE, METADATA, Path(one))
    builder.project(ARCHIVE, METADATA, Path(two))
    first = Path(one) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
    second = Path(two) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
    d1, rows1 = records(first)
    d2, rows2 = records(second)
    assert sorted(p.name for p in first.iterdir()) == ['worms-kinorhyncha-000.json.gz', 'worms-kinorhyncha-sidecar.json']
    assert sorted(p.name for p in first.iterdir()) == sorted(p.name for p in second.iterdir())
    for p in first.iterdir():
        assert p.read_bytes() == (second / p.name).read_bytes()
        assert p.read_bytes() == (CANON / p.name).read_bytes()
    ledger1 = Path(one) / 'data/sources/worms-kinorhyncha-archive-1153-import-ledger.json'
    ledger2 = Path(two) / 'data/sources/worms-kinorhyncha-archive-1153-import-ledger.json'
    assert ledger1.read_bytes() == ledger2.read_bytes() == LEDGER.read_bytes()
    assert {p.name: p.read_bytes() for p in CANON.iterdir() if p.is_file()} == before
    assert d1['source']['datasetId'] == '1153'
    assert d1['counts'] == {'total': 362, 'records': 362, 'accepted': 362, 'redirect': 0, 'ambiguous': 0, 'unmatched': 0, 'withheld': 0, 'upstreamOnly': 0}
    assert d1['deliveryProfiles']['web-light']['records'] == 0
    assert d1['deliveryProfiles']['native-full']['records'] == 362
    validate_raw(rows1)
    assert rows1 == rows2
print('raw archive, references, replay and canonical preservation verified: 362')
