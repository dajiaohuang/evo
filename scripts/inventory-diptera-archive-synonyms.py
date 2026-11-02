import csv
import gzip
import hashlib
import io
import json
import re
import zipfile
from pathlib import Path

ROOT = Path('.git/evo-wikipedia-col26-8')
PUBLISHED = ROOT / 'published-data-reviewed-20261031'
OUT = ROOT / 'diptera-archive-synonym-inventory-20261031-v2.json'
ARCHIVE = Path('data/sources/archives/checklistbank-1101-systema-dipterorum-attempt-47.zip')
LEDGERS = [Path('data/sources/systema-dipterorum-archive-1101-import-ledger.json')]

def digest(value):
    return hashlib.sha256(value).hexdigest()

manifest_bytes = (PUBLISHED / 'manifest.json').read_bytes()
manifest = json.loads(manifest_bytes)
assert manifest['releaseAlias'] == 'COL26.8' and manifest['contentMode'] == 'links-only'
targets = set()
for descriptor in manifest['shards'].values():
    compressed = (PUBLISHED / descriptor['path']).read_bytes()
    assert digest(compressed) == descriptor['sha256']
    entries = json.loads(gzip.decompress(compressed))['entries']
    targets.update(node for node, entry in entries.items() if entry['status'] in ('unresolved', 'ambiguous'))

archive_bytes = ARCHIVE.read_bytes()
ledgers = [json.loads(path.read_bytes()) for path in LEDGERS]
for ledger in ledgers:
    assert ledger['source']['archiveSha256'] == digest(archive_bytes)
    assert ledger['source']['datasetId'] == '1101'

name_to_nodes = {}
projection_records = 0
for ledger in ledgers:
    base = Path(ledger['outputs']['descriptor']['path']).parent.parent
    for descriptor in ledger['outputs']['files']:
        if descriptor['role'] != 'col-partition':
            continue
        compressed = (base / descriptor['path']).read_bytes()
        assert digest(compressed) == descriptor['sha256']
        records = json.loads(gzip.decompress(compressed))
        assert len(records) == descriptor['records']
        for row in records:
            projection_records += 1
            if row['colId'] not in targets or row['status'] != 'accepted' or not row.get('matchedName'):
                continue
            name_id = row['matchedName']['nameId']
            name_to_nodes.setdefault(name_id, set()).add(row['colId'])

def rows(archive, member):
    raw = archive.read(member)
    assert digest(raw) == ledgers[0]['source']['members'][member]['sha256']
    return list(csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t'))

values = {}
with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
    taxa = {}
    for row in rows(archive, 'Taxon.tsv'):
        if None in row or row.get('provisional', '').strip().lower() in ('true', '1', 'yes'):
            continue
        nodes = name_to_nodes.get(row['nameID'], set())
        if len(nodes) == 1:
            taxa.setdefault(row['ID'], set()).update(nodes)
    names = {row['ID']: row for row in rows(archive, 'Name.tsv') if None not in row}
    for row in rows(archive, 'Synonym.tsv'):
        if None in row or row.get('needs_review', '').strip().lower() in ('true', '1', 'yes'):
            continue
        nodes = taxa.get(row['taxonID'], set())
        synonym = names.get(row['nameID'], {})
        name = synonym.get('scientificName', '').strip()
        if len(nodes) != 1 or synonym.get('rank', '').lower() != 'species' or not name or len(name) > 120 or re.search(r'[|;\[\]{}\r\n]', name):
            continue
        node = next(iter(nodes))
        values[(node, name, row['taxonID'])] = {'node': node, 'name': name, 'authorship': synonym.get('authorship', ''), 'sourceTaxonId': row['taxonID'], 'sourceNameId': row['nameID']}

result = {'snapshotSha256': digest(manifest_bytes), 'archiveSha256': digest(archive_bytes), 'ledgerSha256': {str(path): digest(path.read_bytes()) for path in LEDGERS}, 'sourceMapping': 'exact scientific name and authorship from verified COL crosswalk; source acceptance not inferred', 'projectionRecords': projection_records, 'unlinkedTargets': len(targets), 'values': list(values.values())}
with OUT.open('x', encoding='utf-8', newline='\n') as handle:
    json.dump(result, handle, ensure_ascii=False, separators=(',', ':'))
print(json.dumps({'status': 'inventoried', 'targets': len(targets), 'sourceMappedNames': len(name_to_nodes), 'synonyms': len(values), 'nodes': len({row['node'] for row in values.values()}), 'output': str(OUT)}))
