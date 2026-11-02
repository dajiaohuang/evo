import json
from pathlib import Path

for path in sorted(Path('data/sources').glob('worms-*import-ledger.json')):
    ledger = json.loads(path.read_bytes())
    source = ledger.get('source', {})
    if source.get('archivePath'):
        print(json.dumps({'ledger': path.name, 'archivePath': source.get('archivePath'), 'archiveSha256': source.get('archiveSha256'), 'membersType': type(source.get('members')).__name__}, ensure_ascii=True))
