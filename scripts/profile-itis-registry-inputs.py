import gzip
import json
from pathlib import Path

base = Path('data/catalogue-of-life/releases/2026-08-20/registry')
manifest = json.loads((base / 'manifest.json').read_bytes())
files = manifest['hierarchy']['nodes']['files']
with gzip.open(base / files[0]['path'], 'rt', encoding='utf-8') as handle:
    row = next(value for line in handle if (value := json.loads(line)).get('rank') == 'species' and value.get('authorship'))
print(json.dumps({'shards': len(files), 'sample': row, 'descriptor': files[0]}, ensure_ascii=True))
descriptor = Path('data/catalogue-of-life/releases/2026-08-20/global-sources/itis/itis-global-original-rc130.json')
if descriptor.exists():
    source = json.loads(descriptor.read_bytes())['source']
    print(json.dumps({'archiveSha256': source.get('archiveSha256'), 'members': [entry.get('member') for entry in source.get('members', [])]}))
