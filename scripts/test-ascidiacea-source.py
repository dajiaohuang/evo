"""Focused raw-archive assertions for the generated Ascidiacea projection."""
import csv, gzip, io, json, zipfile
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1186-ascidiacea-2026-09-01.zip'
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
def member(z, name):
    with z.open(name) as stream:
        return {row['ID']: row for row in csv.DictReader(io.TextIOWrapper(stream, encoding='utf-8'), delimiter='\t')}
with zipfile.ZipFile(ARCHIVE) as z:
    names, taxa, refs = member(z, 'Name.txt'), member(z, 'Taxon.txt'), member(z, 'Reference.txt')
descriptor = json.loads((OUT / 'worms-ascidiacea-sidecar.json').read_text(encoding='utf-8'))
rows = []
for item in descriptor['files']:
    rows.extend(json.loads(gzip.open(OUT / Path(item['path']).name, 'rt', encoding='utf-8').read()))
assert len(rows) == 3000
for row in rows:
    source = row['acceptedName']; name = names[source['id']]; taxon = taxa[source['taxonID']]
    assert source['scientificName'] == name['scientificName']
    assert source['authorship'] == (name.get('authorship') or '')
    assert any(x['member'] == 'Name.txt' for x in source['sourceRows'])
    assert any(x['member'] == 'Taxon.txt' for x in source['sourceRows'])
    for locator in source['referenceRows']:
        assert locator['member'] == 'Reference.txt' and locator['referenceID'] in refs
    assert taxon['ID'] == source['taxonID']
print('raw archive rows verified', len(rows))
