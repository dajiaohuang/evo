import hashlib
import json
import os
import re
import sqlite3
from pathlib import Path

base = Path('.git/evo-wikipedia-col26-8').resolve(strict=True)
scratch_link = base / 'c-scratch'
scratch = scratch_link.resolve(strict=True)
references = {}
for folder in (Path('scripts'), base):
    for script in folder.glob('*.mjs'):
        try:
            content = script.read_text(encoding='utf-8')
        except (OSError, UnicodeError):
            continue
        for name in set(re.findall(r'snapshot-[a-z0-9-]+', content)):
            references.setdefault(name, []).append(str(script.resolve()))
def metadata(path):
    uri = path.as_uri() + '?mode=ro&immutable=1'
    db = sqlite3.connect(uri, uri=True)
    try:
        return dict(db.execute("SELECT key,value FROM meta WHERE key IN ('manifest_sha256','inventory_complete','primary_related_source_sha256','page_audit_exclusions_sha256')"))
    finally:
        db.close()
current = metadata(base / 'inventory.sqlite')
rows = []
for path in sorted(scratch.glob('snapshot-*/inventory.sqlite')):
    absolute = path.absolute()
    if absolute.parent.parent != scratch:
        raise SystemExit(f'Unexpected path: {absolute}')
    stat = os.stat(absolute, follow_symlinks=False)
    parent_stat = os.stat(absolute.parent, follow_symlinks=False)
    reparse = bool((getattr(stat, 'st_file_attributes', 0) | getattr(parent_stat, 'st_file_attributes', 0)) & 0x400)
    try:
        meta = metadata(absolute) if not reparse else None
        error = None
    except sqlite3.Error as exc:
        meta, error = None, str(exc)
    manifest = absolute.parent / 'manifest.json'
    manifest_sha = hashlib.sha256(manifest.read_bytes()).hexdigest() if manifest.is_file() else None
    rows.append({'path': str(absolute), 'bytes': stat.st_size, 'hardLinks': stat.st_nlink, 'reparse': reparse, 'lastModifiedNs': stat.st_mtime_ns, 'metadata': meta, 'metadataError': error, 'snapshotManifestSha256': manifest_sha, 'scriptReferences': references.get(absolute.parent.name, [])})
out = base / 'old-audit-databases-cleanup-review-20261031.json'
proof = {'scope': 'Read-only inventory; resolved paths may be outside D drive and are not authorized for deletion', 'scratchLink': str(scratch_link), 'scratchResolved': str(scratch), 'currentDatabase': str(base / 'inventory.sqlite'), 'currentMetadata': current, 'records': rows}
with out.open('x', encoding='utf-8', newline='\n') as handle:
    json.dump(proof, handle, ensure_ascii=False, indent=2)
print(json.dumps({'reviewFile': str(out), 'files': len(rows), 'logicalBytes': sum(row['bytes'] for row in rows), 'reparseFiles': sum(row['reparse'] for row in rows), 'multipleHardLinks': sum(row['hardLinks'] != 1 for row in rows), 'referencedByScripts': sum(bool(row['scriptReferences']) for row in rows), 'metadataErrors': sum(bool(row['metadataError']) for row in rows), 'distinctSourceManifests': len({row['snapshotManifestSha256'] for row in rows})}))
