"""Project the pinned WoRMS Trematoda ColDP archive into a COL-scoped sidecar."""
import argparse, csv, hashlib, io, json, unicodedata, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1128-trematoda-2026-09-01.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-1128-trematoda-2026-09-01.metadata.json'
ARCHIVE_SHA = '04440a3f5709ee38f2423d6556b1faea25c62a5421d935ff309ea7a40fc42d78'
ARCHIVE_BYTES = 4128567
COL_SOURCE = '1128'
COL_ROOT = 'JW'
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'


def digest(data):
    return hashlib.sha256(data).hexdigest()


def dump(obj, pretty=False):
    return (json.dumps(obj, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode('utf-8')


def norm(value):
    return ' '.join(unicodedata.normalize('NFC', value or '').split())


def col_bare(row):
    name, author = row.get('scientificName') or '', row.get('authorship') or ''
    suffix = ' ' + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def source_name(name, taxon):
    tid = taxon['ID'].rsplit(':', 1)[-1]
    return {'id': taxon['ID'], 'aphiaId': tid, 'scientificName': name['scientificName'],
            'authorship': name.get('authorship') or '', 'rank': name['rank'],
            'status': taxon.get('provisional') == '1' and 'provisional' or 'accepted',
            'url': name.get('link') or taxon.get('link') or
                   f'https://www.marinespecies.org/aphia.php?p=taxdetails&id={tid}'}


def read_archive(path):
    members = {}
    with zipfile.ZipFile(path) as archive:
        for name in archive.namelist():
            raw = archive.read(name)
            members[name] = {'bytes': len(raw), 'sha256': digest(raw)}
        def rows(member):
            return list(csv.DictReader(io.TextIOWrapper(archive.open(member), encoding='utf-8-sig'), delimiter='\t'))
        names = {r['ID']: (r, i) for i, r in enumerate(rows('Name.txt'), 2)}
        references = {r['ID']: (r, i) for i, r in enumerate(rows('Reference.txt'), 2)}
        name_refs = {}
        for i, row in enumerate(rows('NameReference.txt'), 2):
            name_refs.setdefault(row['nameID'], []).append((row, i))
        accepted = {}
        for i, taxon in enumerate(rows('Taxon.txt'), 2):
            name = names.get(taxon['nameID'])
            if not name or name[0].get('rank', '').lower() != 'species' or taxon.get('provisional') == '1':
                continue
            accepted[taxon['ID'].rsplit(':', 1)[-1]] = (taxon, name[0], i, name[1])
        synonyms = rows('Synonym.txt')
    return accepted, references, name_refs, members, len(synonyms)


def read_col():
    manifest = (REGISTRY / 'manifest.json').read_bytes()
    files = json.loads(manifest)['hierarchy']['nodes']['files']
    parents, all_rows, rows = {}, {}, {}
    import gzip
    for f in files:
        with gzip.open(REGISTRY / f['path'], 'rt', encoding='utf-8') as stream:
            for line in stream:
                row = json.loads(line)
                parents[row['id']] = row.get('parentId')
                all_rows[row['id']] = row
    for row in all_rows.values():
        if row.get('rank') != 'species' or row.get('status') != 'accepted' or row.get('sourceDatasetId') != COL_SOURCE:
            continue
        seen, current = set(), row.get('parentId')
        while current and current not in seen and current != COL_ROOT:
            seen.add(current); current = parents.get(current)
        if current == COL_ROOT:
            rows[row['id']] = row
    return rows, digest(manifest), [{'path': f['path'], 'bytes': f['bytes'], 'sha256': f['sha256']} for f in files]


def row_locators(taxon, name, refs, references, taxon_row, name_row):
    loc = [{'member': 'Taxon.txt', 'row': taxon_row}, {'member': 'Name.txt', 'row': name_row}]
    for ref, ref_row in refs.get(name['ID'], []):
        loc.append({'member': 'NameReference.txt', 'row': ref_row})
        if ref.get('referenceID') in references:
            loc.append({'member': 'Reference.txt', 'row': references[ref['referenceID']][1]})
    if taxon.get('referenceID') in references:
        loc.append({'member': 'Reference.txt', 'row': references[taxon['referenceID']][1]})
    return loc


def project(archive, output_root=None):
    raw = archive.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != ARCHIVE_SHA:
        raise ValueError('archive does not match pinned bytes')
    source, references, name_refs, members, synonym_count = read_archive(archive)
    metadata_bytes = METADATA.read_bytes()
    metadata = json.loads(metadata_bytes)
    col, col_sha, col_inputs = read_col()
    by_key = {}
    for tid, (taxon, name, taxon_row, name_row) in source.items():
        by_key.setdefault((norm(name['scientificName']), norm(name.get('authorship'))), []).append((tid, taxon, name, taxon_row, name_row))
    records, used = [], set()
    counts = {'accepted': 0, 'redirect': 0, 'ambiguous': 0, 'unmatched': 0, 'withheld': 0}
    for cid, row in sorted(col.items()):
        hits = by_key.get((norm(col_bare(row)), norm(row.get('authorship'))), [])
        status = 'accepted' if len(hits) == 1 else 'ambiguous' if len(hits) > 1 else 'unmatched'
        counts[status] += 1
        matched = None
        loc = []
        if len(hits) == 1:
            tid, taxon, name, taxon_row, name_row = hits[0]; used.add(tid)
            matched = source_name(name, taxon)
            loc = row_locators(taxon, name, name_refs, references, taxon_row, name_row)
        candidates = [source_name(x[2], x[1]) for x in hits] if len(hits) > 1 else []
        records.append({'colId': cid, 'colScientificName': row['scientificName'], 'colAuthorship': row.get('authorship') or '',
                        'status': status, 'matchedName': matched, 'acceptedName': matched,
                        'candidates': candidates, 'mappingBasis': 'Exact source scientific name plus authorship; no fuzzy fallback.',
                        'sourceRows': loc})
    upstream = []
    for tid, (taxon, name, taxon_row, name_row) in sorted(source.items()):
        if tid in used:
            continue
        upstream.append({'colId': None, 'colScientificName': None, 'colAuthorship': None, 'status': 'upstream-only',
                         'matchedName': None, 'acceptedName': source_name(name, taxon), 'candidates': [],
                         'mappingBasis': 'Accepted source concept not linked by exact COL name+authorship; not a global new species claim.',
                         'sourceRows': row_locators(taxon, name, name_refs, references, taxon_row, name_row)})
    output_base = Path(output_root) if output_root else ROOT
    destination = output_base / OUT.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    all_rows = records + upstream
    import gzip
    def write_shard(name, rows):
        payload = dump(rows)
        compressed = gzip.compress(payload, compresslevel=9, mtime=0)
        compressed = compressed[:9] + bytes([255]) + compressed[10:]
        (destination / name).write_bytes(compressed)
        item = {'path': f'other-animals/{name}', 'records': len(rows), 'bytes': len(compressed),
                'sha256': digest(compressed), 'sourceBytes': len(payload), 'sourceSha256': digest(payload),
                'encoding': 'gzip', 'mediaType': 'application/json', 'role': 'col-partition'}
        if rows:
            item.update(minColId=rows[0].get('colId'), maxColId=rows[-1].get('colId'))
        return item
    col_file = write_shard('worms-trematoda-000.json.gz', records)
    source_file = write_shard('worms-trematoda-source-only-000.json.gz', upstream)
    descriptor = {'schemaVersion': 1, 'recordType': 'release-pinned-authority-archive-crosswalk',
                  'id': 'worms-trematoda-archive-crosswalk', 'packageId': 'other-animals',
                  'provider': 'World Register of Marine Species via ChecklistBank', 'rowEncoding': 'json',
                  'colIdField': 'colId', 'totalCountField': 'total',
                  'source': {'datasetId': '1128', 'title': metadata['title'], 'version': metadata['version'],
                             'versionDoi': metadata['versionDoi'], 'metadataBytes': len(metadata_bytes),
                             'metadataSha256': digest(metadata_bytes), 'license': 'CC-BY-4.0',
                             'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/',
                             'rightsHolder': 'WoRMS Editorial Board', 'archiveUrl': 'https://api.checklistbank.org/dataset/1128/archive',
                             'archiveBytes': len(raw), 'archiveSha256': digest(raw), 'members': members},
                  'scope': {'colRootUsageId': COL_ROOT, 'wormsRootId': '19948', 'scientificName': 'Trematoda',
                            'eligibleColSpecies': len(col), 'sourceAcceptedSpecies': len(source),
                            'excludedSourceProvisional': 19},
                  'matching': {'normalization': 'NFC and whitespace normalization only; COL trailing authorship is removed exactly.',
                               'prohibited': 'No fuzzy, case-folded, accent-folded, synonym or species-concept matching.'},
                  'counts': {'total': len(records), **counts, 'sourceOnly': len(upstream), 'records': len(all_rows)},
                  'files': [col_file], 'upstreamOnlyFiles': [{**source_file, 'role': 'upstream-only'}],
                  'evidenceBoundary': {'en': 'Frozen WoRMS nomenclatural/source projection for the exact COL26.8 source-1128 Trematoda scope; not species-concept equivalence, a biological dossier, fossil evidence or expert review.',
                                       'zh': '精确 COL26.8 source-1128 Trematoda 范围的 WoRMS 冻结命名/来源投影；不是物种概念等同性、生物档案、化石证据或专家审查。'},
                  'limitations': ['Source-only rows are relative only to COL source dataset 1128.', 'Name.status is nomenclatural metadata and is not used as taxonomic acceptance.', 'Synonym.taxonID targets do not remove accepted Taxon rows.']}
    descriptor_path = destination / 'worms-trematoda-sidecar.json'; descriptor_path.write_bytes(dump(descriptor, True))
    ledger = {'schemaVersion': 1, 'importType': 'COL26.8-to-WoRMS-1128-archive-projection',
              'source': descriptor['source'], 'registryManifestSha256': col_sha, 'registryInputs': col_inputs,
              'scopeAudit': {'colRootUsageId': COL_ROOT, 'colSpecies': len(col), 'sourceAcceptedSpecies': len(source),
                             'sourceProvisionalExcluded': 19, 'sourceOnly': len(upstream), 'synonymRowsRetained': synonym_count,
                             'memberDigests': members}}
    ledger_path = output_base / 'data/sources/worms-trematoda-archive-1128-import-ledger.json'
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(dump(ledger, True))
    print(json.dumps({'counts': descriptor['counts'], 'sourceArchive': {'bytes': len(raw), 'sha256': digest(raw)},
                      'shards': [{'bytes': x['bytes'], 'sha256': x['sha256']} for x in [col_file, source_file]]}))


def main():
    parser = argparse.ArgumentParser(); parser.add_argument('--archive', type=Path, default=ARCHIVE); parser.add_argument('--output-root', type=Path)
    args = parser.parse_args(); project(args.archive, args.output_root)


if __name__ == '__main__':
    main()
