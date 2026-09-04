"""Build the pinned Rotifer World Catalogue source projection for COL Rotifera."""
import argparse, csv, gzip, hashlib, json, unicodedata, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE_SHA = '14a05b8cf2f309e90d71dde72de87a82503915fe220f95abbc9b6e251a97ba81'
ARCHIVE_BYTES = 105464
ARCHIVE_URL = 'https://api.checklistbank.org/dataset/298081/archive'
METADATA_SHA = '351079ab9b22f8a49327154cfbb3542268b539a886eeb682107c8b950976e201'
COL_ROOT = '5Y'
LIMIT = 2 * 1024 * 1024

def sha(data): return hashlib.sha256(data).hexdigest()
def norm(value): return ' '.join(unicodedata.normalize('NFC', value or '').replace('_', ' ').split())
def bare(row):
    name, author = row.get('scientificName', ''), row.get('authorship', '') or ''
    return name[:-len(author)-1] if author and name.endswith(' ' + author) else name
def key(name, author): return norm(name), norm(author)
def enc(value, pretty=False):
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode('utf-8')
def root_for(tid, parents):
    seen = set()
    while tid and tid not in seen:
        if tid == COL_ROOT: return True
        seen.add(tid); tid = parents.get(tid)
    return False

def read_source(path):
    with zipfile.ZipFile(path) as z:
        raw = z.read('NameUsage.tsv')
    rows = list(csv.DictReader(raw.decode('utf-8-sig').splitlines(), delimiter='\t'))
    species = [dict(r, _ordinal=i + 2) for i, r in enumerate(rows)
               if r.get('rank') == 'species' and r.get('status') == 'valid']
    return species, {'NameUsage.tsv': {'bytes': len(raw), 'sha256': sha(raw), 'rows': len(rows)}}

def read_col():
    reg = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
    manifest = (reg / 'manifest.json').read_bytes()
    files = json.loads(manifest.decode('utf-8'))['hierarchy']['nodes']['files']
    parents, rows = {}, {}
    for f in files:
        with gzip.open(reg / f['path'], 'rt', encoding='utf-8') as stream:
            for line in stream:
                r = json.loads(line); parents[r['id']] = r.get('parentId')
    for f in files:
        with gzip.open(reg / f['path'], 'rt', encoding='utf-8') as stream:
            for line in stream:
                r = json.loads(line)
                if r.get('rank') == 'species' and r.get('status') == 'accepted' and root_for(r.get('parentId'), parents):
                    rows[r['id']] = r
    return rows, sha(manifest)

def source_obj(r):
    return {'id': r['ID'], 'scientificName': r['scientificName'], 'authorship': r.get('authorship') or '',
            'status': r.get('status'), 'rank': r.get('rank'), 'sourceRow': r['_ordinal'],
            'link': r.get('link') or '', 'publishedInYear': r.get('publishedInYear') or ''}

def main():
    ap = argparse.ArgumentParser(); ap.add_argument('--archive', type=Path, required=True); ap.add_argument('--metadata', type=Path, required=True); ap.add_argument('--output-root', type=Path, required=True); args = ap.parse_args()
    archive = args.archive.read_bytes()
    if len(archive) != ARCHIVE_BYTES or sha(archive) != ARCHIVE_SHA: raise ValueError('archive does not match pinned bytes')
    metadata = args.metadata.read_bytes()
    if sha(metadata) != METADATA_SHA: raise ValueError('metadata does not match pinned bytes')
    source, members = read_source(args.archive); col, col_manifest_sha = read_col()
    bykey = {}
    for r in source: bykey.setdefault(key(r['scientificName'], r.get('authorship')), []).append(r)
    records, used = [], set(); counts = {x: 0 for x in ('accepted','redirect','ambiguous','unmatched','withheld')}
    for cid, c in sorted(col.items()):
        hits = bykey.get(key(bare(c), c.get('authorship')), [])
        status = 'accepted' if len(hits) == 1 else ('ambiguous' if len(hits) > 1 else 'unmatched')
        counts[status] += 1; hit = hits[0] if len(hits) == 1 else None
        if hit: used.add(hit['ID'])
        records.append({'colId': cid, 'colScientificName': c['scientificName'], 'colAuthorship': c.get('authorship') or '', 'status': status,
                        'matchedName': source_obj(hit) if hit else None, 'acceptedName': source_obj(hit) if hit else None,
                        'candidates': [source_obj(x) for x in hits] if len(hits) > 1 else [],
                        'mappingBasis': 'Exact normalized source scientific name plus authorship; no synonym or fuzzy matching.',
                        'sourceRows': [{'member': 'NameUsage.tsv', 'row': x['_ordinal']} for x in hits]})
    upstream = [{'colId': None, 'colScientificName': None, 'colAuthorship': None, 'status': 'upstream-only', 'matchedName': None,
                 'acceptedName': source_obj(r), 'candidates': [], 'mappingBasis': 'Valid source species not implicated by an exact COL Rotifera row; not global novelty.',
                 'sourceRows': [{'member': 'NameUsage.tsv', 'row': r['_ordinal']}]} for r in source if r['ID'] not in used]
    out = args.output_root; out.mkdir(parents=True, exist_ok=True)
    def write(name, rows):
        raw = enc(rows); data = gzip.compress(raw, compresslevel=9, mtime=0); data = data[:9] + bytes([255]) + data[10:]
        (out / name).write_bytes(data); return {'path': 'other-animals/' + name, 'records': len(rows), 'bytes': len(data), 'sha256': sha(data), 'sourceBytes': len(raw), 'sourceSha256': sha(raw)}
    files = [write('worms-rotifera-000.json.gz', records)]; upstream_files = [write('worms-rotifera-upstream-only-000.json.gz', upstream)] if upstream else []
    ledger = {'schemaVersion': 1, 'importType': 'COL26.8-to-Rotifer-World-Catalogue-archive-crosswalk', 'source': {'provider': 'Rotifer World Catalogue via ChecklistBank', 'datasetId': 298081, 'version': '1.0', 'versionDoi': '10.48580/dg8gp', 'license': 'CC-BY-4.0', 'archiveUrl': ARCHIVE_URL, 'archiveBytes': len(archive), 'archiveSha256': sha(archive), 'retrievedAt': '2026-09-04T16:42:42.756135Z', 'members': members}, 'metadataSha256': sha(metadata), 'registryManifestSha256': col_manifest_sha, 'scope': {'colRootUsageId': COL_ROOT, 'eligibleColSpecies': len(col), 'validSourceSpecies': len(source), 'sourceStatusRule': "rank == species and status == valid"}}
    ledger_path = ROOT / 'data/sources/rotifera-298081-import-ledger.json'; ledger_path.parent.mkdir(parents=True, exist_ok=True); ledger_bytes = enc(ledger, True); ledger_path.write_bytes(ledger_bytes)
    desc = {'schemaVersion': 1, 'recordType': 'release-pinned-authority-archive-crosswalk', 'id': 'rotifera-298081-archive-crosswalk', 'packageId': 'other-animals', 'provider': 'Rotifer World Catalogue via ChecklistBank', 'rowEncoding': 'json', 'encoding': 'gzip', 'mediaType': 'application/json', 'colIdField': 'colId', 'totalCountField': 'total', 'source': {'datasetId': 298081, 'version': '1.0', 'versionDoi': '10.48580/dg8gp', 'license': 'CC-BY-4.0', 'archiveUrl': ARCHIVE_URL, 'archiveBytes': len(archive), 'archiveSha256': sha(archive), 'metadataSha256': sha(metadata), 'sourceLedgerPath': 'data/sources/rotifera-298081-import-ledger.json', 'sourceLedgerSha256': sha(ledger_bytes), 'members': members}, 'scope': {'colRootUsageId': COL_ROOT, 'colStrictAcceptedSpecies': len(col), 'validSourceSpecies': len(source)}, 'matching': {'prohibited': 'No synonym, fuzzy, case-folded, diacritic-stripped or species-concept matching.'}, 'counts': {'total': len(records), **counts, 'upstreamOnly': len(upstream)}, 'files': files, 'upstreamOnlyFiles': upstream_files, 'evidenceBoundary': {'en': 'A frozen exact nomenclatural crosswalk, not a global checklist or species-concept equivalence claim.'}, 'limitations': ['Invalid, synonym and bare-name source rows are retained only in the frozen input evidence and are not promoted to accepted species.', 'Source-only rows are not claims of global novelty.']}
    (out / 'worms-rotifera-sidecar.json').write_bytes(enc(desc, True)); print(json.dumps(desc['counts']))

if __name__ == '__main__': main()
