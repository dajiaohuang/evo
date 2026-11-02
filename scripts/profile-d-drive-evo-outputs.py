import json
import os
from pathlib import Path

base = Path('D:/repo/evo/.git/evo-wikipedia-col26-8')
prefixes = ('links-reviewed-', 'ui-reviewed-build-', 'ui-overlay-publication-', 'higher-search-review-', 'publication-reviewed-', 'snapshot-reviewed-final-', 'export-')
rows = []
for root in sorted(base.iterdir()):
    if not root.is_dir() or not root.name.startswith(prefixes):
        continue
    total = count = skipped = 0
    pending = [root]
    while pending:
        folder = pending.pop()
        try:
            for entry in os.scandir(folder):
                stat = entry.stat(follow_symlinks=False)
                if getattr(stat, 'st_file_attributes', 0) & 0x400:
                    skipped += 1
                elif entry.is_dir(follow_symlinks=False):
                    pending.append(Path(entry.path))
                elif entry.is_file(follow_symlinks=False):
                    count += 1
                    total += stat.st_size
        except OSError:
            skipped += 1
    rows.append({'path': str(root), 'files': count, 'logicalBytes': total, 'skipped': skipped})
print(json.dumps({'scope': 'Named Evo output directories; reparse points are not followed', 'rows': rows}, ensure_ascii=True))
