"""Project the pinned ChecklistBank Reptile Database archive into exact COL partitions."""
import argparse, csv, gzip, hashlib, io, json, unicodedata, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.metadata.json'
ARCHIVE_BYTES = 9581096
ARCHIVE_SHA = '23e91315dca13a9b46b0c2b487d2921e5ccf2c274de294327fc4caeefb6b21ba'
COL_SOURCE = '1008'
SHARD_LIMIT = 2 * 1024 * 1024
PARTITIONS = {
    'turtles-lepidosaurs': {
        'roots': ('45C', '477', 'RP'),
        'directory': ROOT / 'data/packages/reptilia/turtles-lepidosaurs/nomenclature',
        'prefix': 'reptiledb-turtles-lepidosaurs',
        'ledger': ROOT / 'data/sources/reptiledb-turtles-lepidosaurs-1008-import-ledger.json',
        'scope': 'Current non-Crocodylia Reptilia: Squamata, Testudines and Rhynchocephalia; Aves and fossils excluded.'
    },
    'crocodylia': {
        'roots': ('329',),
        'directory': ROOT / 'data/packages/archosauria/crocodylomorphs-birds/nomenclature',
        'prefix': 'reptiledb-crocodylia',
        'ledger': ROOT / 'data/sources/reptiledb-crocodylia-1008-import-ledger.json',
        'scope': 'Current Crocodylia only within the existing mixed crocodylomorphs-birds package; Aves and fossils excluded.'
    },
}

def digest(data):
    return hashlib.sha256(data).hexdigest()

def encode(value, pretty=False):
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode('utf-8')

def script_digest(path):
    return digest(path.read_bytes().replace(b'\r\n', b'\n'))

def norm(value):
    return ' '.join(unicodedata.normalize('NFC', value or '').split())

def col_bare(row):
    name, author = row.get('scientificName') or '', row.get('authorship') or ''
    suffix = ' ' + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name

def source_name(name, taxon):
    return {'id': name['id'], 'scientificName': name['scientific_name'],
            'authorship': name.get('authorship') or '', 'rank': name['rank'],
            'status': 'accepted', 'url': taxon.get('link') or name.get('link') or
                   'http://www.reptile-database.org'}

def read_metadata():
    metadata_bytes = METADATA.read_bytes()
    metadata = json.loads(metadata_bytes)
    for key, expected in {'key': 1008, 'doi': '10.48580/d37s', 'title': 'The Reptile Database',
                          'version': '2026-06', 'issued': '2026-06-24', 'license': 'cc by'}.items():
        if metadata.get(key) != expected:
            raise ValueError(f'unexpected API metadata {key}: {metadata.get(key)!r}')
    return metadata, metadata_bytes

def read_archive(path):
    members = {}
    with zipfile.ZipFile(path) as archive:
        for member in archive.namelist():
            raw = archive.read(member)
            members[member] = {'bytes': len(raw), 'sha256': digest(raw)}
        yaml = archive.read('metadata.yaml').decode('utf-8')
        required = {'key': '1008', 'doi': '10.48580/d37s', 'versionDoi': '10.48580/d37s.v31',
                    'title': 'The Reptile Database', 'issued': '2026-06-24', 'version': '2026-06',
                    'license': 'cc by'}
        for key, value in required.items():
            if not any(line.startswith(f'{key}:') and line.split(':', 1)[1].strip().strip('"') == value
                       for line in yaml.splitlines()):
                raise ValueError(f'archive metadata.yaml does not contain pinned {key}')
        archive_metadata = dict(required)
        def rows(member):
            return list(csv.DictReader(io.TextIOWrapper(archive.open(member), encoding='utf-8-sig'), delimiter='\t'))
        names = {r['id']: (r, i) for i, r in enumerate(rows('Name.tsv'), 2)}
        references = {r['id']: (r, i) for i, r in enumerate(rows('Reference.tsv'), 2)}
        taxa = []
        for i, row in enumerate(rows('Taxon.tsv'), 2):
            name = names.get(row.get('name_id'))
            if name and name[0].get('rank', '').lower() == 'species' and not row.get('provisional'):
                taxa.append((row, name[0], i, name[1]))
        all_rows = rows('Taxon.tsv')
        all_parents = {row['id']: row.get('parent_id') for row in all_rows}
        names_by_id = {r[0]['id']: r[0] for r in names.values()}
        reptilia_id = next((row['id'] for row in all_rows
                            if names_by_id.get(row.get('name_id'), {}).get('scientific_name') == 'Reptilia'
                            and names_by_id.get(row.get('name_id'), {}).get('rank') == 'class'), None)
        crocodylia_ids = {row['id'] for row in all_rows
                          if names_by_id.get(row.get('name_id'), {}).get('scientific_name') == 'Crocodylia'}
        if not reptilia_id:
            raise ValueError('archive Reptilia root not found')
        if not crocodylia_ids:
            raise ValueError('archive Crocodylia root not found')
        scoped = {'turtles-lepidosaurs': {}, 'crocodylia': {}}
        for row, name, taxon_row, name_row in taxa:
            current, seen = row.get('parent_id'), set()
            is_croc = False
            while current and current not in seen and current != reptilia_id:
                if current in crocodylia_ids:
                    is_croc = True
                seen.add(current); current = all_parents.get(current)
            if current == reptilia_id:
                scoped['crocodylia' if is_croc else 'turtles-lepidosaurs'][name['id']] = (row, name, taxon_row, name_row)
    return scoped, references, members, len(all_rows), archive_metadata

def read_col():
    manifest_bytes = (REGISTRY / 'manifest.json').read_bytes()
    paths = [REGISTRY / f['path'] for f in json.loads(manifest_bytes)['hierarchy']['nodes']['files']]
    rows = []
    for path in paths:
        with gzip.open(path, 'rt', encoding='utf-8') as stream:
            rows.extend(json.loads(line) for line in stream if line.strip())
    parents = {row['id']: row.get('parentId') for row in rows}
    result = {key: {} for key in PARTITIONS}
    for row in rows:
        if row.get('rank') != 'species' or row.get('status') != 'accepted' or str(row.get('sourceDatasetId')) != COL_SOURCE:
            continue
        # RP is an ancestor used by the COL residual Reptilia partition and
        # also contains Crocodylia; assign the disjoint crocodilian root first.
        for key in ('crocodylia', 'turtles-lepidosaurs'):
            spec = PARTITIONS[key]
            current, seen = row.get('parentId'), set()
            while current and current not in seen and current not in spec['roots']:
                seen.add(current); current = parents.get(current)
            if current in spec['roots']:
                result[key][row['id']] = row
                break
    return result, digest(manifest_bytes)

def refs_for(taxon, references):
    result = []
    for ref_id in dict.fromkeys(x.strip() for x in (taxon.get('reference_id') or '').split(',') if x.strip()):
        item = {'referenceId': ref_id, 'sourceRows': []}
        if ref_id in references:
            item['sourceRows'] = [{'member': 'Reference.tsv', 'row': references[ref_id][1]}]
        else:
            item['missing'] = True
        result.append(item)
    return result

def write_shards(directory, prefix, rows, role):
    directory.mkdir(parents=True, exist_ok=True)
    for old in directory.glob(f'{prefix}-*.json.gz'):
        old.unlink()
    if not rows:
        return []
    parts, current, used = [], [], 2
    for row in rows:
        size = len(encode(row))
        if current and used + size > SHARD_LIMIT:
            parts.append(current); current, used = [row], 2 + size
        else:
            current.append(row); used += size
    if current or not parts:
        parts.append(current)
    files = []
    for index, part in enumerate(parts):
        name = f'{prefix}-{index:03d}.json.gz'
        source = b''.join(encode(row) for row in part)
        compressed = bytearray(gzip.compress(source, compresslevel=9, mtime=0)); compressed[9] = 255
        (directory / name).write_bytes(compressed)
        item = {'path': f'nomenclature/{name}', 'records': len(part), 'bytes': len(compressed),
                'sha256': digest(compressed), 'sourceBytes': len(source), 'sourceSha256': digest(source),
                'encoding': 'gzip', 'mediaType': 'application/x-ndjson', 'role': role}
        if role == 'col-partition':
            item.update(minColId=part[0]['colId'], maxColId=part[-1]['colId'])
        files.append(item)
    return files

def project(path, partition):
    raw = path.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != ARCHIVE_SHA:
        raise ValueError('archive does not match pinned bytes')
    metadata, metadata_bytes = read_metadata()
    source_by_partition, references, members, taxon_rows, archive_metadata = read_archive(path)
    col, col_sha = read_col()
    spec = PARTITIONS[partition]
    source = source_by_partition[partition]
    records, used = [], set()
    counts = {'accepted': 0, 'ambiguous': 0, 'unmatched': 0}
    by_key = {}
    for sid, (taxon, name, taxon_row, name_row) in source.items():
        by_key.setdefault((norm(name['scientific_name']), norm(name.get('authorship'))), []).append((sid, taxon, name, taxon_row, name_row))
    for cid, row in sorted(col[partition].items()):
        hits = by_key.get((norm(col_bare(row)), norm(row.get('authorship'))), [])
        status = 'accepted' if len(hits) == 1 else 'ambiguous' if len(hits) > 1 else 'unmatched'
        counts[status] += 1
        matched = None; source_rows = []; references_out = []
        if len(hits) == 1:
            sid, taxon, name, taxon_row, name_row = hits[0]; used.add(sid)
            matched = source_name(name, taxon)
            source_rows = [{'member': 'Taxon.tsv', 'row': taxon_row}, {'member': 'Name.tsv', 'row': name_row}]
            references_out = refs_for(taxon, references)
        records.append({'colId': cid, 'colScientificName': row['scientificName'], 'colAuthorship': row.get('authorship') or '',
                        'status': status, 'matchedName': matched, 'acceptedName': matched, 'candidates': [],
                        'mappingBasis': 'Exact source scientific name plus authorship after NFC/whitespace normalization only; no fuzzy fallback.',
                        'sourceRows': source_rows, 'references': references_out})
    upstream = []
    for sid, (taxon, name, taxon_row, name_row) in sorted(source.items()):
        if sid in used:
            continue
        upstream.append({'colId': None, 'colScientificName': None, 'colAuthorship': None, 'status': 'upstream-only',
                         'matchedName': None, 'acceptedName': source_name(name, taxon), 'candidates': [],
                         'mappingBasis': 'Accepted Reptile Database species not linked by exact COL name+authorship within this partition; not a global new species claim.',
                         'sourceRows': [{'member': 'Taxon.tsv', 'row': taxon_row}, {'member': 'Name.tsv', 'row': name_row}],
                         'references': refs_for(taxon, references)})
    col_files = write_shards(spec['directory'], spec['prefix'], records, 'col-partition')
    source_files = write_shards(spec['directory'], spec['prefix'] + '-source-only', upstream, 'upstream-only')
    source_info = {'datasetId': '1008', 'title': metadata['title'], 'alias': metadata['alias'], 'version': metadata['version'],
                   'versionDoi': metadata.get('versionDoi'), 'doi': metadata['doi'], 'issued': metadata['issued'],
                   'citation': metadata['citation'], 'creator': metadata['creator'], 'license': metadata['license'],
                   'embeddedArchiveMetadata': {'member': 'metadata.yaml', **archive_metadata},
                   'apiEndpoint': metadata['apiEndpoint'], 'apiResponseBytes': metadata['apiResponseBytes'],
                   'apiResponseSha256': metadata['apiResponseSha256'],
                   'archiveUrl': 'https://api.checklistbank.org/dataset/1008/archive',
                   'archivePath': 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip',
                   'metadataPath': 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.metadata.json',
                   'metadataBytes': len(metadata_bytes), 'metadataSha256': digest(metadata_bytes), 'archiveBytes': len(raw),
                   'archiveSha256': digest(raw), 'members': members}
    all_files = col_files + source_files
    descriptor = {'schemaVersion': 1, 'recordType': 'release-pinned-authority-archive-crosswalk',
                  'id': f"{spec['prefix']}-extension", 'packageId': 'turtles-lepidosaurs' if partition == 'turtles-lepidosaurs' else 'crocodylomorphs-birds',
                  'provider': 'The Reptile Database via ChecklistBank', 'rowEncoding': 'jsonl', 'colIdField': 'colId',
                  'totalCountField': 'total', 'source': source_info,
                  'scope': {'colRootUsageIds': list(spec['roots']), 'scientificName': 'Reptilia', 'eligibleColSpecies': len(records),
                            'sourceAcceptedSpecies': len(source), 'scopeBoundary': spec['scope']},
                  'matching': {'normalization': 'NFC and whitespace normalization only; COL trailing authorship is removed exactly.',
                               'prohibited': 'No fuzzy, case-folded, accent-folded, synonym, rank or species-concept matching.'},
                  'counts': {'total': len(records), **counts, 'withheld': 0, 'upstreamOnly': len(upstream), 'records': len(records) + len(upstream)},
                  'files': col_files, 'upstreamOnlyFiles': source_files,
                  'evidenceBoundary': {'en': 'Frozen Reptile Database nomenclatural/source projection for the exact COL26.8 source-1008 partition; not species-concept equivalence, a biological dossier, fossil evidence, phylogeny or expert review.',
                                       'zh': '精确 COL26.8 source-1008 分区的 Reptile Database 冻结命名/来源投影；不表示物种概念等同性、生物档案、化石证据、系统发育或专家审查。'},
                  'limitations': ['Source-only rows are relative only to the declared COL26.8 partition.',
                                  'The Reptile Database archive describes living reptiles and excludes dinosaurs; this projection does not add extinct taxa.',
                                  'Source references are retained as identifiers and row locators; they do not constitute independent scientific review.'],
                  'deliveryProfiles': {'web-light': {'mode': 'summary-only', 'records': 0, 'files': [], 'totalCompressedBytes': 0, 'totalSourceBytes': 0},
                                       'native-full': {'mode': 'complete', 'records': len(records) + len(upstream), 'files': [f['path'] for f in all_files],
                                                       'totalCompressedBytes': sum(f['bytes'] for f in all_files), 'totalSourceBytes': sum(f['sourceBytes'] for f in all_files)}}}
    descriptor_path = spec['directory'] / f"{spec['prefix']}-extension.json"
    descriptor_bytes = encode(descriptor, True); descriptor_path.write_bytes(descriptor_bytes)
    ledger = {'schemaVersion': 1, 'importType': 'COL26.8-to-Reptile-Database-1008-archive-projection', 'source': source_info,
              'registryManifestSha256': col_sha, 'generatedBy': {'scriptPath': 'scripts/build-reptiledb-source.py', 'scriptSha256': script_digest(Path(__file__)), 'hashNormalization': 'LF'},
              'scopeAudit': {'colRootUsageIds': list(spec['roots']), 'colSpecies': len(records), 'sourceAcceptedSpecies': len(source),
                             'sourceRowsInArchive': taxon_rows, 'upstreamOnly': len(upstream), 'memberDigests': members},
              'outputs': {'descriptor': {'path': str(descriptor_path.relative_to(ROOT)).replace('\\', '/'), 'bytes': len(descriptor_bytes), 'sha256': digest(descriptor_bytes)},
                         'files': all_files}}
    spec['ledger'].write_bytes(encode(ledger, True))
    print(json.dumps({'partition': partition, 'counts': descriptor['counts'], 'sourceArchive': {'bytes': len(raw), 'sha256': digest(raw)},
                      'totalCompressedBytes': descriptor['deliveryProfiles']['native-full']['totalCompressedBytes'],
                      'totalSourceBytes': descriptor['deliveryProfiles']['native-full']['totalSourceBytes']}))

def main():
    parser = argparse.ArgumentParser(); parser.add_argument('partition', choices=sorted(PARTITIONS)); parser.add_argument('--archive', type=Path, default=ARCHIVE)
    args = parser.parse_args(); project(args.archive, args.partition)

if __name__ == '__main__':
    main()
