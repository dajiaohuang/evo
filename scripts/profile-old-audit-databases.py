import json
import os
import re
from pathlib import Path

root = Path('.git/evo-wikipedia-col26-8/c-scratch')
rows = []
references = {}
for folder in (Path('scripts'), Path('.git/evo-wikipedia-col26-8')):
    for script in folder.glob('*.mjs'):
        try:
            text = script.read_text(encoding='utf-8')
        except (OSError, UnicodeError):
            continue
        for name in set(re.findall(r'snapshot-[a-z0-9-]+', text)):
            references.setdefault(name, []).append(str(script))
for path in sorted(root.glob('snapshot-*/inventory.sqlite')):
    stat = os.stat(path, follow_symlinks=False)
    rows.append({'path': str(path), 'bytes': stat.st_size, 'links': stat.st_nlink, 'modifiedNs': stat.st_mtime_ns, 'reparse': path.is_symlink(), 'scriptReferences': references.get(path.parent.name, [])})
print(json.dumps({'count': len(rows), 'logicalBytes': sum(row['bytes'] for row in rows), 'multiLinkFiles': sum(row['links'] != 1 for row in rows), 'reparseFiles': sum(row['reparse'] for row in rows), 'referencedFiles': sum(bool(row['scriptReferences']) for row in rows), 'rows': rows}, ensure_ascii=True))
