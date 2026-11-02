import json
from pathlib import Path

for path in sorted(Path('data/sources').glob('itis-*-import-ledger.json')):
    ledger = json.loads(path.read_bytes())
    source = ledger.get('source', {})
    output = ledger.get('outputs', {})
    print(json.dumps({'ledger': path.name, 'datasetId': source.get('datasetId'), 'archiveSha256': source.get('archiveSha256'), 'outputKeys': list(output), 'descriptor': output.get('descriptor'), 'fileCount': len(output.get('files', []))}, ensure_ascii=True))
