import json
import sqlite3
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8')
inventory = json.loads((root / 'reptiledb-archive-synonym-inventory-20261031.json').read_text(encoding='utf-8'))
db = sqlite3.connect(f'file:{(root / "inventory.sqlite").as_posix()}?mode=ro', uri=True)
try:
    for row in inventory['values']:
        existing = db.execute('SELECT COUNT(*) FROM synonym_names WHERE node_id=? AND name=?', (row['node'], row['name'])).fetchone()[0]
        matches = db.execute('SELECT COUNT(*) FROM synonym_title_matches WHERE name=?', (row['name'],)).fetchone()[0]
        print(json.dumps({**row, 'existingNodeSynonyms': existing, 'existingTitleMatches': matches}, ensure_ascii=False))
finally:
    db.close()
