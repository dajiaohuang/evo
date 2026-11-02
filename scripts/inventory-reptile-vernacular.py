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
OUT = ROOT / 'reptiledb-vernacular-inventory-20261031.json'
ARCHIVE = Path('data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip')
LEDGERS = [Path('data/sources/reptiledb-turtles-lepidosaurs-1008-import-ledger.json'), Path('data/sources/reptiledb-crocodylia-1008-import-ledger.json')]
LANGUAGES = {'English': 'en', 'German': 'de', 'Chinese': 'zh', 'Spanish': 'es', 'Portuguese': 'pt', 'French': 'fr', 'Dutch': 'nl', 'Italian': 'it', 'Russian': 'ru', 'Vietnamese': 'vi', 'Thai': 'th', 'Croatian': 'hr', 'Afrikaans': 'af', 'Hindi': 'hi', 'Tamil': 'ta'}

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
    assert ledger['source']['datasetId'] == '1008'

name_to_nodes = {}
projection_records = 0
for ledger in ledgers:
    base = Path(ledger['outputs']['descriptor']['path']).parent.parent
    for descriptor in ledger['outputs']['files']:
        if descriptor['role'] != 'col-partition':
            continue
        compressed = (base / descriptor['path']).read_bytes()
        assert digest(compressed) == descriptor['sha256']
        lines = gzip.decompress(compressed).splitlines()
        assert len(lines) == descriptor['records']
        for line in lines:
            row = json.loads(line)
            projection_records += 1
            if row['colId'] not in targets or row['status'] != 'accepted':
                continue
            name_id = row['acceptedName']['id']
            name_to_nodes.setdefault(name_id, set()).add(row['colId'])

def rows(archive, member):
    raw = archive.read(member)
    assert digest(raw) == ledgers[0]['source']['members'][member]['sha256']
    return list(csv.DictReader(io.StringIO(raw.decode('utf-8-sig'), newline=''), delimiter='\t'))

values = {}
with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
    taxa = {}
    for row in rows(archive, 'Taxon.tsv'):
        if None in row or row.get('needs_review', '').strip().lower() in ('true', '1', 'yes'):
            continue
        nodes = name_to_nodes.get(row['name_id'], set())
        if len(nodes) == 1:
            taxa.setdefault(row['id'], set()).update(nodes)
    for row in rows(archive, 'VernacularName.tsv'):
        if None in row or row.get('needs_review', '').strip().lower() in ('true', '1', 'yes'):
            continue
        nodes = taxa.get(row['taxon_id'], set())
        locale = LANGUAGES.get(row['language'].strip())
        name = row['name'].strip()
        if len(nodes) != 1 or not locale or not name or len(name) > 120 or re.search(r'[|;\[\]{}\r\n]', name):
            continue
        node = next(iter(nodes))
        values[(node, locale, name, row['taxon_id'])] = {'node': node, 'locale': locale, 'title': name, 'sourceTaxonId': row['taxon_id']}

result = {'snapshotSha256': digest(manifest_bytes), 'archiveSha256': digest(archive_bytes), 'ledgerSha256': {str(path): digest(path.read_bytes()) for path in LEDGERS}, 'sourceMapping': 'exact accepted scientific name and authorship from verified COL projection', 'projectionRecords': projection_records, 'unlinkedTargets': len(targets), 'values': list(values.values())}
with OUT.open('x', encoding='utf-8', newline='\n') as handle:
    json.dump(result, handle, ensure_ascii=False, separators=(',', ':'))
print(json.dumps({'status': 'inventoried', 'targets': len(targets), 'sourceMappedNames': len(name_to_nodes), 'vernacularNames': len(values), 'nodes': len({row['node'] for row in values.values()}), 'output': str(OUT)}))
