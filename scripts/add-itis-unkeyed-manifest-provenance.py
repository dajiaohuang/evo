from pathlib import Path

for name, old, new in [
    ('scripts/wikipedia-col-export.mjs', b'itisCrossSource:itisCrossSource ? {sourceSha256:itisCrossSource} : undefined, registryAmbiguousPeer:', b'itisCrossSource:itisCrossSource ? {sourceSha256:itisCrossSource} : undefined, itisCrossUnkeyed:itisCrossUnkeyed ? {sourceSha256:itisCrossUnkeyed} : undefined, registryAmbiguousPeer:'),
    ('scripts/wikipedia-col-export-chunks.mjs', b'itisCrossSource:results[0].itisCrossSource, registryAmbiguousPeer:', b'itisCrossSource:results[0].itisCrossSource, itisCrossUnkeyed:results[0].itisCrossUnkeyed, registryAmbiguousPeer:'),
]:
    path = Path(name)
    data = path.read_bytes()
    if data.count(old) != 1:
        raise SystemExit(f'Expected one insertion point in {name}')
    path.write_bytes(data.replace(old, new, 1))
