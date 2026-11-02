from pathlib import Path

path = Path('scripts/wikipedia-col-export.mjs')
source = path.read_bytes()
old = b"colIdentityPolicy:'unresolved-ids-are-candidates', registryAmbiguousPeer:"
new = b"colIdentityPolicy:'unresolved-ids-are-candidates', itisCrossSource:itisCrossSource ? {sourceSha256:itisCrossSource} : undefined, registryAmbiguousPeer:"
if source.count(old) != 1:
    raise SystemExit('Expected exactly one manifest insertion point')
path.write_bytes(source.replace(old, new, 1))
