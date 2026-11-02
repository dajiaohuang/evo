import gzip
import json
import sys
from pathlib import Path

ids = set(sys.argv[1:])
ledger = json.loads(Path('data/sources/systema-dipterorum-archive-1101-import-ledger.json').read_bytes())
base = Path(ledger['outputs']['descriptor']['path']).parent.parent
for file in ledger['outputs']['files']:
    if file.get('role') != 'col-partition':
        continue
    with gzip.open(base / file['path'], 'rt', encoding='utf-8') as handle:
        for row in json.load(handle):
            if row['colId'] in ids:
                print(json.dumps({key: row.get(key) for key in ('colId', 'colScientificName', 'colAuthorship', 'status', 'matchedName', 'mappingBasis')}, ensure_ascii=True))
