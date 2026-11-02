from pathlib import Path

path = Path('scripts/wikipedia-col-export-chunks.mjs')
source = path.read_bytes()
old = b'colIdentityPolicy:results[0].colIdentityPolicy, registryAmbiguousPeer:'
new = b'colIdentityPolicy:results[0].colIdentityPolicy, itisCrossSource:results[0].itisCrossSource, registryAmbiguousPeer:'
if source.count(old) != 1:
    raise SystemExit('Expected exactly one manifest insertion point')
path.write_bytes(source.replace(old, new, 1))
