import gzip, hashlib, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NOM = ROOT / 'data/packages/arthropoda/crustaceans-insects/nomenclature'

def digest(path): return hashlib.sha256(path.read_bytes()).hexdigest()

def main():
    descriptor = json.loads((NOM / 'osf-orthoptera-sidecar.json').read_text(encoding='utf-8'))
    ledger = json.loads((ROOT / 'data/sources/osf-orthoptera-archive-crosswalk-import-ledger.json').read_text(encoding='utf-8'))
    assert descriptor['scope']['colRootUsageId'] == 'CJBKK'
    assert descriptor['scope']['osfOtuRootId'] == '805980'
    assert descriptor['scope']['osfTaxonNameRootId'] == '913531'
    assert descriptor['counts'] == {'total': 30859, 'accepted': 30813, 'redirect': 21, 'ambiguous': 5, 'unmatched': 20, 'withheld': 0, 'upstreamOnly': 53}
    rows = []
    for file in descriptor['files']:
        path = ROOT / file['path']; assert digest(path) == file['sha256']
        source = gzip.decompress(path.read_bytes()); assert len(source) == file['sourceBytes'] and hashlib.sha256(source).hexdigest() == file['sourceSha256']
        part = json.loads(source); assert len(part) == file['records']; rows.extend(part)
    assert len(rows) == descriptor['counts']['total'] and len({x['colId'] for x in rows}) == len(rows)
    assert [x['colId'] for x in rows] == sorted(x['colId'] for x in rows)
    assert all(x['status'] in {'accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld'} for x in rows)
    assert all(x['colId'] is not None for x in rows)
    assert all(x['sourceRows'] for x in rows if x['status'] != 'unmatched')
    upstream_file = descriptor['upstreamOnlyFiles'][0]; upstream_path = ROOT / upstream_file['path']; upstream = json.loads(gzip.decompress(upstream_path.read_bytes()))
    assert len(upstream) == 53 and all(x['status'] == 'upstream-only' and x['colId'] is None and x['sourceRows'] for x in upstream)
    assert ledger['totals'] == descriptor['counts']
    print(json.dumps({'rows': len(rows), 'upstreamOnly': len(upstream), 'files': len(descriptor['files'])}))

if __name__ == '__main__': main()
