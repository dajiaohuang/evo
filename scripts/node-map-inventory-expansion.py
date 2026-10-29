#!/usr/bin/env python3
"""Inventory existing PBDB targeted snapshots without asserting identity or absence."""
import gzip, hashlib, json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '.git/platform-v2/local/node-map-expansion/inventory-20261029.json'

def digest(data):
    return hashlib.sha256(data).hexdigest()

def main():
    paths = sorted((ROOT / 'data/sources').glob('pbdb-targeted-*-occurrences-v1.json.gz'))
    ids, detail, duplicates, conflicts = set(), {}, 0, set()
    queries, files, results = [], [], Counter()
    for path in paths:
        raw = path.read_bytes()
        source = json.loads(gzip.decompress(raw))
        files.append({'path': path.relative_to(ROOT).as_posix(), 'sha256': digest(raw),
                      'snapshotId': source['snapshotId'], 'detailCount': len(source['records']),
                      'declaredUniqueOccurrenceCount': source['uniqueOccurrenceCount']})
        for q in source['queryResults']:
            qids = q['occurrenceIds']
            ids.update(qids)
            status = 'complete' if q.get('paginationComplete') and len(qids) == q.get('upstreamReportedTotal') else 'incomplete-or-count-mismatch'
            results[status] += 1
            queries.append({'snapshotId': source['snapshotId'], 'entityId': q['entityId'],
                            'pbdbId': q.get('externalTaxonId'), 'status': status,
                            'reported': q.get('upstreamReportedTotal'), 'ids': len(qids),
                            'pages': q.get('pagesFetched'), 'rawResponseSha256': q.get('rawResponseSha256')})
        for row in source['records']:
            oid = row['oid']
            # Package annotations vary legitimately: compare biological fields only.
            comparable = {k: v for k, v in row.items() if k not in ('packageId','packageAssignmentStatus','packageAssignmentBasis','matchedEntityIds')}
            if oid in detail:
                duplicates += 1
                if detail[oid] != comparable: conflicts.add(oid)
            else: detail[oid] = comparable
    baseline = {}
    for path in sorted((ROOT / 'data/fossils').glob('*.json')):
        for row in json.loads(path.read_bytes()): baseline[row.get('oid')] = row
    resolution_path = ROOT / 'data/sources/pbdb-taxon-resolution.json'
    resolution = json.loads(resolution_path.read_bytes())
    report = {'scope': 'local targeted PBDB source snapshots; no cross-source identities asserted',
              'files': files, 'queries': queries, 'queryStatusCounts': dict(results),
              'queryIdUnion': len(ids), 'detailIdUnion': len(detail),
              'detailOutsideBaseline': len(set(detail) - set(baseline)),
              'queryIdsWithoutRetainedDetail': len(ids - set(detail)),
              'duplicateDetailRows': duplicates, 'conflictingDetailIds': sorted(conflicts),
              'resolutionRegistry': {'path': resolution_path.relative_to(ROOT).as_posix(),
                                     'sha256': digest(resolution_path.read_bytes()),
                                     'declaredSummary': resolution['summary'],
                                     'identityReview': 'pending; name/rank matching alone is insufficient'},
              'limitations': ['Historical query hashes are supplied by local snapshots; raw pages are not in these files.',
                              'Query completion is historical and does not establish current PBDB snapshot completeness.',
                              'Detail counts do not imply map-ready reconstruction or accepted COL identity.']}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    encoded = (json.dumps(report, ensure_ascii=False, sort_keys=True, separators=(',', ':')) + '\n').encode()
    if OUT.exists() and OUT.read_bytes() != encoded: raise ValueError('immutable inventory differs')
    OUT.write_bytes(encoded)
    print(json.dumps({k:v for k,v in report.items() if k not in ('files','queries','conflictingDetailIds')}, ensure_ascii=False))
    print('conflictingDetailIds:', len(conflicts), 'inventorySha256:', digest(encoded), 'path:', OUT)

if __name__ == '__main__': main()
