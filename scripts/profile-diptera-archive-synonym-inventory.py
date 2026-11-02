import json
import hashlib
import sqlite3
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
inventory = json.loads((root / 'diptera-archive-synonym-inventory-20261031-v2.json').read_text(encoding='utf-8'))
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
try:
    new = []
    for row in inventory['values']:
        existing = db.execute('SELECT 1 FROM synonym_names WHERE node_id=? AND name=? LIMIT 1', (row['node'], row['name'])).fetchone()
        if not existing:
            new.append(row)
    source_path = root / 'diptera-archive-synonym-inventory-20261031-v2.json'
    output = {'inventory': source_path.name, 'inventorySha256': hashlib.sha256(source_path.read_bytes()).hexdigest(), 'snapshotSha256': inventory['snapshotSha256'], 'values': new}
    path = root / 'diptera-archive-new-synonym-inventory-20261031-v2.json'
    with path.open('x', encoding='utf-8', newline='\n') as handle:
        json.dump(output, handle, ensure_ascii=False, separators=(',', ':'))
    print(json.dumps({'relations': len(inventory['values']), 'newRelations': len(new), 'newNodes': len({row['node'] for row in new}), 'newNames': len({row['name'] for row in new}), 'output': str(path)}))
finally:
    db.close()
