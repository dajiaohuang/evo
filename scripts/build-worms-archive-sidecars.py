"""Project pinned WoRMS names into exact COL scopes; never infer concept equality."""
import argparse
import csv
import gzip
import hashlib
import io
import json
import re
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE_SHA = '8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6'
ARCHIVE_BYTES = 342751141
ARCHIVE_URL = 'https://api.checklistbank.org/dataset/2011/archive'
SPECS = {
    'mollusca': ('molluscs-brachiopods', 'M2L', '51', 'Mollusca', 154718),
    'porifera': ('sponges-cnidarians', 'B8TXQ', '558', 'Porifera', 9899),
    'cnidaria': ('sponges-cnidarians', 'CN2', '1267', 'Cnidaria', 20622),
    'annelida': ('other-animals', 'NN', '882', 'Annelida', 18982),
    'nematoda': ('other-animals', 'NM', '799', 'Nematoda', 19604),
    'crustacea': ('crustaceans-insects', 'KZX8B', '1066', 'Crustacea', 80890),
}
LEGACY_SPECS = {key: spec for key, spec in SPECS.items() if key not in {'annelida', 'nematoda', 'crustacea'}}
RESOURCE_PACK_SCOPES = {'annelida', 'nematoda'}
ARTHROPODA_SCOPES = {'crustacea'}
LIMIT = 2 * 1024 * 1024


def digest(data):
    return hashlib.sha256(data).hexdigest()


def stream_digest(stream):
    h, size = hashlib.sha256(), 0
    while block := stream.read(1024 * 1024):
        h.update(block)
        size += len(block)
    return {'bytes': size, 'sha256': h.hexdigest()}


def encode(value, pretty=False):
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode()


def aphia(value):
    return value.rsplit(':', 1)[-1] if value else ''


def root_for(tid, parents, roots):
    seen = set()
    while tid and tid not in seen:
        if tid in roots:
            return tid
        seen.add(tid)
        tid = parents.get(tid)
    return None


def name_key(name, authorship):
    # Emitted source objects retain the original field text.
    return (' '.join((name or '').split()), ' '.join((authorship or '').split()))


def col_bare(row):
    name, author = row['scientificName'], row.get('authorship') or ''
    return name[:-len(author)-1] if author and name.endswith(' ' + author) else name


def source_name(row):
    tid = aphia(row['taxonID'])
    return {'id': row['taxonID'], 'scientificName': row['scientificName'],
            'authorship': row.get('scientificNameAuthorship') or '',
            'status': row['taxonomicStatus'],
            'url': row.get('references') or f'https://www.marinespecies.org/aphia.php?p=taxdetails&id={tid}'}


def match_record(col, hits, accepted):
    targets, invalid = set(), False
    for row in hits:
        tid = aphia(row['taxonID'])
        target = tid if row['taxonomicStatus'] == 'accepted' else aphia(row.get('acceptedNameUsageID'))
        if target in accepted:
            targets.add(target)
        else:
            invalid = True
    if invalid:
        status = 'withheld'
    elif len(targets) > 1:
        status = 'ambiguous'
    elif targets:
        status = 'accepted' if any(r['taxonomicStatus'] == 'accepted' for r in hits) else 'redirect'
    else:
        status = 'unmatched'
    target_rows = [accepted[tid] for tid in sorted(targets)]
    locators = sorted({r['_ordinal'] for r in hits + target_rows})
    return {
        'colId': col['id'], 'colScientificName': col['scientificName'],
        'colAuthorship': col.get('authorship') or '', 'status': status,
        'matchedName': source_name(hits[0]) if len(hits) == 1 and status not in ('ambiguous', 'withheld') else None,
        'acceptedName': source_name(target_rows[0]) if status in ('accepted', 'redirect') else None,
        'candidates': [source_name(r) for r in target_rows] if status in ('ambiguous', 'withheld') else [],
        'mappingBasis': 'Exact name+authorship or explicit archive acceptedNameUsageID; invalid targets withheld.',
        'sourceRows': [{'member': 'taxon.txt', 'row': n} for n in locators],
    }, targets


def chunks(rows):
    current, used = [], 3
    for row in rows:
        size = len(encode(row))
        if current and used + size > LIMIT:
            yield current
            current, used = [], 3
        current.append(row)
        used += size
    if current:
        yield current


def output_directory(key, package):
    if key in RESOURCE_PACK_SCOPES:
        return ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
    if key in ARTHROPODA_SCOPES:
        return ROOT / f'data/packages/arthropoda/{package}/nomenclature'
    return ROOT / f'data/packages/invertebrata/{package}/nomenclature'


def ledger_relative_path(scope):
    return (f'data/sources/worms-{scope}-archive-2011-import-ledger.json'
            if scope in RESOURCE_PACK_SCOPES | ARTHROPODA_SCOPES
            else 'data/sources/worms-archive-2011-import-ledger.json')


def write_shards(directory, prefix, records, source_only):
    files, upstream, retained = [], [], set()
    for is_upstream, rows in ((False, records), (True, source_only)):
        for index, part in enumerate(chunks(rows)):
            suffix = '-upstream-only' if is_upstream else ''
            name = f'{prefix}{suffix}-{index:03d}.json.gz'
            raw = encode(part)
            compressed = bytearray(gzip.compress(raw, compresslevel=9, mtime=0))
            compressed[9] = 255
            (directory / name).write_bytes(compressed)
            retained.add(name)
            item = {'path': f'nomenclature/{name}', 'records': len(part),
                    'bytes': len(compressed), 'sha256': digest(compressed),
                    'sourceBytes': len(raw), 'sourceSha256': digest(raw)}
            if not is_upstream:
                item.update(minColId=part[0]['colId'], maxColId=part[-1]['colId'])
            (upstream if is_upstream else files).append(item)
    # Only this generator's obsolete numbered files, never sibling sources.
    pattern = re.compile(re.escape(prefix) + r'(?:-upstream-only)?-\d{3}\.json\.gz')
    for path in directory.iterdir():
        if path.is_file() and pattern.fullmatch(path.name) and path.name not in retained:
            path.unlink()
    return files, upstream


def read_archive(path, specs=SPECS):
    parents, scoped, anomalies = {}, {k: {} for k in specs}, []
    roots = {spec[2]: key for key, spec in specs.items()}
    with zipfile.ZipFile(path) as archive:
        meta, eml = archive.read('meta.xml'), archive.read('eml.xml')
        fields = ET.fromstring(meta).findall('{*}core/{*}field')
        defaults = {f.attrib['term'].rsplit('/', 1)[-1]: f.attrib.get('default') for f in fields}
        if defaults.get('license') != 'https://creativecommons.org/licenses/by/4.0/' or defaults.get('rightsHolder') != 'WoRMS Editorial Board':
            raise ValueError('unexpected archive rights metadata')
        if ET.fromstring(eml).attrib.get('packageId') != 'WoRMS_export_2026-09-01':
            raise ValueError('unexpected archive EML version')
        with archive.open('taxon.txt') as stream:
            member = stream_digest(stream)
        for pass_number in (1, 2):
            count = 0
            with io.TextIOWrapper(archive.open('taxon.txt'), encoding='utf-8', newline='') as stream:
                for ordinal, row in enumerate(csv.DictReader(stream, delimiter='\t'), 2):
                    count += 1
                    tid = aphia(row['taxonID'])
                    if pass_number == 1:
                        if tid in parents:
                            raise ValueError(f'duplicate Aphia taxon ID {tid}')
                        parents[tid] = aphia(row.get('parentNameUsageID'))
                        continue
                    if row['taxonRank'] != 'Species':
                        continue
                    root = root_for(tid, parents, roots)
                    if root:
                        row['_ordinal'] = ordinal
                        scoped[roots[root]][tid] = row
                    if row['taxonomicStatus'] == 'accepted' and row.get('phylum') in {s[3] for s in specs.values()} and not root:
                        anomalies.append({'id': tid, 'scientificName': row['scientificName'],
                                          'phylum': row['phylum'], 'parentNameUsageID': aphia(row.get('parentNameUsageID'))})
        member.update(rows=count, rowConvention='one-based logical TSV record ordinal including header; first data record is 2')
        metadata = {'taxon.txt': member, 'meta.xml': {'bytes': len(meta), 'sha256': digest(meta)},
                    'eml.xml': {'bytes': len(eml), 'sha256': digest(eml)}}
    return scoped, metadata, anomalies


def read_col(specs=SPECS):
    manifest_bytes = (REGISTRY / 'manifest.json').read_bytes()
    paths = [REGISTRY / f['path'] for f in json.loads(manifest_bytes)['hierarchy']['nodes']['files']]
    parents, scoped = {}, {k: {} for k in specs}
    roots = {spec[1]: key for key, spec in specs.items()}
    for pass_number in (1, 2):
        for path in paths:
            with gzip.open(path, 'rt', encoding='utf-8') as stream:
                for line in stream:
                    row = json.loads(line)
                    if pass_number == 1:
                        if row.get('rank') != 'species':
                            parents[row['id']] = row.get('parentId')
                        continue
                    if row.get('rank') != 'species' or row.get('status') != 'accepted':
                        continue
                    root = root_for(row.get('parentId'), parents, roots)
                    if root:
                        target = scoped[roots[root]]
                        if row['id'] in target:
                            raise ValueError(f'duplicate COL ID {row["id"]}')
                        target[row['id']] = row
    for key, spec in specs.items():
        if len(scoped[key]) != spec[4]:
            raise ValueError(f'COL {key} scope changed')
    return scoped, digest(manifest_bytes)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--archive', type=Path, required=True)
    parser.add_argument('--acquisition', type=Path, required=True)
    parser.add_argument('--scope', choices=sorted(RESOURCE_PACK_SCOPES | ARTHROPODA_SCOPES),
                        help='Generate one additional scope separately; omission preserves the three RC105 scopes.')
    args = parser.parse_args()
    with args.archive.open('rb') as stream:
        archive_identity = stream_digest(stream)
    if archive_identity != {'bytes': ARCHIVE_BYTES, 'sha256': ARCHIVE_SHA}:
        raise ValueError('archive does not match pinned source bytes')
    acquisition = json.loads(args.acquisition.read_bytes())
    metadata_bytes = args.acquisition.with_name('metadata-after.json').read_bytes()
    metadata = json.loads(metadata_bytes)
    identity = ('key', 'attempt', 'version', 'versionDoi', 'lastImportState')
    if tuple(metadata.get(k) for k in identity) != (2011, 148, '2026-09-01', '10.48580/d4fd.v148', 'finished'):
        raise ValueError('unexpected ChecklistBank metadata identity')
    if acquisition.get('archiveUrl') != ARCHIVE_URL or acquisition.get('sha256') != ARCHIVE_SHA or not acquisition.get('metadataStable'):
        raise ValueError('acquisition evidence does not match pinned source')
    selected_specs = {args.scope: SPECS[args.scope]} if args.scope else LEGACY_SPECS
    scoped, members, anomalies = read_archive(args.archive, selected_specs)
    col, col_manifest_sha = read_col(selected_specs)
    coverage = json.loads((ROOT / 'data/registry/package-species-coverage.json').read_bytes())['packageCounts']
    source = {'provider': 'World Register of Marine Species via ChecklistBank', 'license': 'CC-BY-4.0',
              'licenseUrl': 'https://creativecommons.org/licenses/by/4.0/', 'rightsHolder': 'WoRMS Editorial Board',
              'archiveUrl': ARCHIVE_URL, 'archiveBytes': ARCHIVE_BYTES, 'archiveSha256': ARCHIVE_SHA,
              'attempt': 148, 'version': metadata['version'], 'versionDoi': metadata['versionDoi'],
              'retrievedAt': acquisition['retrievedAt'], 'immutableUrlClaimed': False, 'members': members}
    ledger_path = ledger_relative_path(args.scope) if args.scope else 'data/sources/worms-archive-2011-import-ledger.json'
    ledger = {'schemaVersion': 1, 'importType': 'COL26.8-to-WoRMS-2011-archive-authority-sidecars',
              'source': source, 'metadataSha256': digest(metadata_bytes),
              'registryManifestSha256': col_manifest_sha,
              'scopeAudit': {'method': 'All archive Species rows checked against parent closure, without a phylum prefilter.',
                             'acceptedSpeciesOutsideRootClosure': anomalies,
                             'scopes': {k: {'speciesRows': len(rows), 'acceptedSpecies': sum(r['taxonomicStatus'] == 'accepted' for r in rows.values())} for k, rows in scoped.items()}}}
    ledger_bytes = encode(ledger, pretty=True)
    (ROOT / ledger_path).write_bytes(ledger_bytes)
    for key, spec in selected_specs.items():
        package, col_root, worms_root, phylum, expected = spec
        accepted = {tid: r for tid, r in scoped[key].items() if r['taxonomicStatus'] == 'accepted'}
        by_name = {}
        for row in scoped[key].values():
            by_name.setdefault(name_key(row['scientificName'], row.get('scientificNameAuthorship')), []).append(row)
        records, implicated = [], set()
        counts = dict.fromkeys(('accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld'), 0)
        for cid, row in sorted(col[key].items()):
            result, targets = match_record(row, by_name.get(name_key(col_bare(row), row.get('authorship')), []), accepted)
            counts[result['status']] += 1
            records.append(result)
            implicated.update(targets)
        upstream = [{'colId': None, 'colScientificName': None, 'colAuthorship': None, 'status': 'upstream-only',
                     'matchedName': None, 'acceptedName': source_name(row), 'candidates': [],
                     'mappingBasis': 'Accepted source concept not implicated by any exact COL candidate; not a new COL species.',
                     'sourceRows': [{'member': 'taxon.txt', 'row': row['_ordinal']}]}
                    for tid, row in sorted(accepted.items()) if tid not in implicated]
        prefix = f'worms-{key}'
        directory = output_directory(key, package)
        directory.mkdir(parents=True, exist_ok=True)
        files, upstream_files = write_shards(directory, prefix, records, upstream)
        if key in RESOURCE_PACK_SCOPES:
            for item in files + upstream_files:
                item['path'] = item['path'].replace('nomenclature/', 'other-animals/')
        descriptor = {'schemaVersion': 1, 'recordType': 'release-pinned-authority-archive-crosswalk',
                      'id': f'{prefix}-archive-crosswalk', 'packageId': package, 'provider': source['provider'],
                      'rowEncoding': 'json', 'colIdField': 'colId', 'totalCountField': 'total',
                      'source': {**source, 'sourceLedgerPath': ledger_path, 'sourceLedgerSha256': digest(ledger_bytes)},
                      'scope': {'colRootUsageId': col_root, 'wormsRootId': worms_root, 'scientificName': phylum,
                                'eligibleColSpecies': expected, 'packageStrictAcceptedSpecies': coverage[package],
                                'excludedPackageRemainder': coverage[package] - expected},
                      'matching': {'normalization': 'Remove only exact trailing COL space+authorship suffix, then normalize whitespace for comparison; preserve source fields unchanged.',
                                   'redirect': 'Explicit acceptedNameUsageID to accepted Species target inside the same source root; invalid or mixed targets withheld.',
                                   'prohibited': 'No fuzzy, case-folded, accent-folded, inferred or species-concept matching.'},
                      'counts': {'total': len(records), **counts, 'upstreamOnly': len(upstream)},
                      'files': files, 'upstreamOnlyFiles': upstream_files,
                      'evidenceBoundary': {'en': 'A frozen exact nomenclatural crosswalk; not species-concept equivalence, a biological dossier, fossil evidence or expert review.',
                                           'zh': '冻结的严格命名交叉映射；不是物种概念等同性、生物档案、化石证据或专家审查。'},
                      'limitations': ['Source-only accepted concepts retain null COL ownership.',
                                      'Only name/status/identifier projections are redistributed, not raw archives or ancillary members.',
                                      'The parent-closure anomaly audit remains explicit; no completeness claim about all marine diversity.']}
        (directory / f'{prefix}-sidecar.json').write_bytes(encode(descriptor, pretty=True))
        print(json.dumps({'scope': key, 'counts': descriptor['counts'], 'files': len(files), 'sourceOnlyFiles': len(upstream_files)}))


if __name__ == '__main__':
    main()
