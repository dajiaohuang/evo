import json
import gzip
from pathlib import Path

ledger = json.loads(Path('data/sources/systema-dipterorum-archive-1101-import-ledger.json').read_bytes())
for key, value in ledger.get('outputs', {}).items():
    if isinstance(value, list):
        print(json.dumps({'key': key, 'count': len(value), 'sample': value[:1]}))
    else:
        print(json.dumps({'key': key, 'value': value}))

base = Path(ledger['outputs']['descriptor']['path']).parent.parent
sample = base / ledger['outputs']['files'][0]['path']
with gzip.open(sample, 'rt', encoding='utf-8') as handle:
    value = json.loads(next(handle))
    row = value[0] if isinstance(value, list) else value
    print(json.dumps({'type': type(value).__name__, 'rowKeys': list(row) if isinstance(row, dict) else []}, ensure_ascii=True))
    from collections import Counter
    print(json.dumps({'statusCounts': Counter(record.get('status') for record in value), 'samples': [{key: record.get(key) for key in ('colId', 'status', 'matchedName', 'acceptedName', 'mappingBasis')} for record in value[:2]]}, ensure_ascii=True))
