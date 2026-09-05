"""Build deterministic COL26.8 crosswalks for MDD 9802 and IOC 2036.

The committed archives are the evidence boundary.  Only unique normalized
scientific-name equality is used; authorship is preserved as source data and
never used as a fuzzy fallback.
"""
import argparse
import csv
import collections
import gzip
import hashlib
import io
import json
import unicodedata
import zipfile
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVES = ROOT / 'data/sources/archives'
SHARD_LIMIT = 2 * 1024 * 1024
SOURCES = {
    'mdd': {
        'datasetId': '9802', 'archiveName': 'checklistbank-9802-mdd.zip',
        'metadataName': 'checklistbank-9802-mdd.metadata.json',
        'root': '6224G', 'taxon': 'Mammalia', 'prefix': 'mdd-mammalia',
        'id': 'mdd-mammalia-archive-crosswalk',
        'provider': 'The Mammal Diversity Database via ChecklistBank',
        'ledgerName': 'mdd-9802-import-ledger.json',
    },
    'ioc': {
        'datasetId': '2036', 'archiveName': 'checklistbank-2036-ioc.zip',
        'metadataName': 'checklistbank-2036-ioc.metadata.json',
        'root': 'V2', 'taxon': 'Aves', 'prefix': 'ioc-aves',
        'id': 'ioc-aves-archive-crosswalk',
        'packageId': 'crocodylomorphs-birds',
        'outputPath': 'data/packages/archosauria/crocodylomorphs-birds/nomenclature',
        'filePathPrefix': 'nomenclature',
        'provider': 'IOC World Bird List via ChecklistBank',
        'ledgerName': 'ioc-2036-import-ledger.json',
    },
}

MDD_PACKAGE_CONFIGS = {
    'other-mammals': {
        'outputPath': 'data/packages/mammalia/other-mammals/nomenclature',
        'prefix': 'mdd-mammalia-other-mammals',
        'id': 'mdd-mammalia-other-mammals-archive-crosswalk',
    },
    'primates': {
        'outputPath': 'data/packages/mammalia/primates/nomenclature',
        'prefix': 'mdd-mammalia-primates',
        'id': 'mdd-mammalia-primates-archive-crosswalk',
    },
    'cetartiodactyla': {
        'outputPath': 'data/packages/mammalia/cetartiodactyla/nomenclature',
        'prefix': 'mdd-mammalia-cetartiodactyla',
        'id': 'mdd-mammalia-cetartiodactyla-archive-crosswalk',
    },
    'carnivora': {
        'outputPath': 'data/packages/mammalia/carnivora/nomenclature',
        'prefix': 'mdd-mammalia-carnivora',
        'id': 'mdd-mammalia-carnivora-archive-crosswalk',
    },
    'perissodactyla': {
        'outputPath': 'data/packages/mammalia/perissodactyla/nomenclature',
        'prefix': 'mdd-mammalia-perissodactyla',
        'id': 'mdd-mammalia-perissodactyla-archive-crosswalk',
    },
}

MDD_SPECIAL_ORDER_PACKAGES = {
    'Primates': 'primates',
    'Carnivora': 'carnivora',
    'Perissodactyla': 'perissodactyla',
    'Artiodactyla': 'cetartiodactyla',
}

# This is an explicit allowlist, not a fallback for an unknown source order.
MDD_OTHER_MAMMALS_ORDERS = frozenset({
    'Rodentia', 'Chiroptera', 'Eulipotyphla', 'Diprotodontia',
    'Didelphimorphia', 'Lagomorpha', 'Dasyuromorphia', 'Afrosoricida',
    'Peramelemorphia', 'Cingulata', 'Scandentia', 'Macroscelidea',
    'Pilosa', 'Pholidota', 'Paucituberculata', 'Hyracoidea', 'Sirenia',
    'Monotremata', 'Proboscidea', 'Dermoptera', 'Microbiotheria',
    'Notoryctemorphia', 'Tubulidentata',
})


def sha(data):
    return hashlib.sha256(data).hexdigest()


def script_sha():
    return sha(Path(__file__).read_bytes().replace(b'\r\n', b'\n'))


def json_bytes(value, pretty=False):
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode('utf-8')


def norm(value):
    return ' '.join(unicodedata.normalize('NFC', str(value or '')).split())


def col_bare(row):
    name = row.get('scientificName') or ''
    authorship = row.get('authorship') or ''
    suffix = ' ' + authorship
    return name[:-len(suffix)] if authorship and name.endswith(suffix) else name


def read_col():
    manifest_path = REGISTRY / 'manifest.json'
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)
    parents, rows = {}, []
    input_files = []
    for item in manifest['hierarchy']['nodes']['files']:
        path = REGISTRY / item['path']
        raw = path.read_bytes()
        input_files.append({'path': f'data/catalogue-of-life/releases/2026-08-20/registry/{item["path"]}',
                            'bytes': len(raw), 'sha256': sha(raw)})
        with gzip.open(io.BytesIO(raw), 'rt', encoding='utf-8') as stream:
            for line in stream:
                row = json.loads(line)
                parents[row['id']] = row.get('parentId')
                rows.append(row)
    result = {}
    for row in rows:
        if row.get('rank') != 'species' or row.get('status') != 'accepted':
            continue
        result[row['id']] = row
    return result, parents, sha(manifest_bytes), input_files


def under_root(row, parents, root):
    current, seen = row.get('parentId'), set()
    while current and current not in seen and current != root:
        seen.add(current)
        current = parents.get(current)
    return current == root


def read_tsv(archive, member):
    return [(row, index) for index, row in enumerate(
        csv.DictReader(io.TextIOWrapper(archive.open(member), encoding='utf-8-sig'), delimiter='\t'), 2)]


def source_member_audit(archive):
    return {member: {'bytes': len(archive.read(member)), 'sha256': sha(archive.read(member))}
            for member in archive.namelist()}


def bool_or_none(value):
    if value in ('true', '1', 'yes'):
        return True
    if value in ('false', '0', 'no'):
        return False
    return None


def archive_source(config):
    archive_path = ARCHIVES / config['archiveName']
    metadata_path = ARCHIVES / config['metadataName']
    archive_bytes = archive_path.read_bytes()
    metadata_bytes = metadata_path.read_bytes()
    api = json.loads(metadata_bytes)
    with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
        internal_raw = archive.read('metadata.yaml')
        internal = yaml.safe_load(internal_raw)
        if internal.get('title') != api.get('title'):
            raise ValueError(f"{config['prefix']}: archive/API title mismatch")
        if str(internal.get('version')) != str(api.get('version')):
            raise ValueError(f"{config['prefix']}: archive/API version mismatch")
        if str(internal.get('issued')) != str(api.get('issued')):
            raise ValueError(f"{config['prefix']}: archive/API issued mismatch")
        if norm(internal.get('license')).lower().replace('-', '') != norm(api.get('license')).lower().replace(' ', '').replace('-', ''):
            raise ValueError(f"{config['prefix']}: archive/API license mismatch")
        if internal.get('taxonomicScope') != api.get('taxonomicScope'):
            raise ValueError(f"{config['prefix']}: archive/API taxonomic scope mismatch")
        rows = read_tsv(archive, 'NameUsage.tsv')
        vernacular = read_tsv(archive, 'VernacularName.tsv')
        distribution = read_tsv(archive, 'Distribution.tsv')
        refs = read_tsv(archive, 'Reference.tsv') if 'Reference.tsv' in archive.namelist() else []
        type_material = read_tsv(archive, 'TypeMaterial.tsv') if 'TypeMaterial.tsv' in archive.namelist() else []
        members = source_member_audit(archive)
    accepted = []
    for row, row_number in rows:
        if row.get('col:rank') != 'species':
            continue
        if config['prefix'] == 'mdd-mammalia' and row.get('col:status'):
            continue
        if config['prefix'] == 'ioc-aves' and row.get('col:status') != 'accepted':
            continue
        accepted.append((row, row_number))
    by_taxon = {}
    for row, row_number in vernacular + distribution + type_material:
        key = row.get('col:taxonID') or row.get('col:nameID')
        if key:
            by_taxon.setdefault(key, {}).setdefault('rows', []).append((row, row_number))
    reference_by_id = {row.get('col:ID'): (row, row_number) for row, row_number in refs}
    source = []
    for row, row_number in accepted:
        taxon_id = row.get('col:ID')
        if config['prefix'] == 'mdd-mammalia':
            authorship = row.get('col:combinationAuthorship') or row.get('col:basionymAuthorship') or ''
            year = row.get('col:combinationAuthorshipYear') or row.get('col:basionymAuthorshipYear') or ''
            if year:
                authorship = f'{authorship}, {year}' if authorship else year
            vernacular_rows = by_taxon.get(taxon_id, {}).get('rows', [])
            ancillary = {'vernacular': [x for x, _ in vernacular_rows if 'col:language' in x],
                         'distribution': [x for x, _ in vernacular_rows if 'col:gazetteer' in x],
                         'typeMaterial': [x for x, _ in vernacular_rows if 'col:nameID' in x]}
            reference_id = row.get('col:nameReferenceID') or ''
            reference = reference_by_id.get(reference_id)
            if reference:
                ancillary['references'] = [reference[0]]
            else:
                ancillary['references'] = []
            source_name = {'id': taxon_id, 'scientificName': row.get('col:scientificName') or '',
                           'authorship': authorship, 'rank': 'species', 'status': 'accepted',
                           'sourceStatus': row.get('col:status') or None,
                           'nameStatus': row.get('col:nameStatus') or None,
                           'extinct': bool_or_none(row.get('col:extinct') or ''),
                           'link': row.get('col:link') or None, 'remarks': row.get('col:remarks') or None,
                           'taxonomy': {key[4:]: value for key, value in row.items()
                                        if key.startswith('col:') and key[4:] in
                                        ('class', 'subclass', 'order', 'suborder', 'superfamily',
                                         'family', 'subfamily', 'tribe', 'genus', 'subgenus')},
                           'sourceRows': [{'member': 'NameUsage.tsv', 'row': row_number}],
                           'sourceReferenceId': reference_id or None, 'ancillary': ancillary}
            if reference:
                source_name['sourceRows'].append({'member': 'Reference.tsv', 'row': reference[1]})
        else:
            ancillary_rows = by_taxon.get(taxon_id, {}).get('rows', [])
            source_name = {'id': taxon_id, 'scientificName': row.get('col:scientificName') or '',
                           'authorship': row.get('col:authorship') or '', 'rank': 'species',
                           'status': 'accepted', 'sourceStatus': row.get('col:status') or None,
                           'code': row.get('col:code') or None,
                           'extinct': bool_or_none(row.get('col:extinct') or ''),
                           'remarks': row.get('col:remarks') or None,
                           'sourceRows': [{'member': 'NameUsage.tsv', 'row': row_number}],
                           'ancillary': {'vernacular': [x for x, _ in ancillary_rows if 'col:language' in x],
                                         'distribution': [x for x, _ in ancillary_rows if 'col:area' in x]}}
        source_name['url'] = source_name.get('link') or (
            'https://mammaldiversity.org/' if config['prefix'] == 'mdd-mammalia'
            else 'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/')
        source.append((source_name, row_number))
    return {
        'path': archive_path, 'metadataPath': metadata_path, 'archiveBytes': archive_bytes,
        'metadataBytes': metadata_bytes, 'metadata': api, 'internalMetadata': internal,
        'members': members, 'accepted': source,
    }


def write_shards(prefix, rows, destination, role, file_path_prefix):
    parts, current, size = [], [], 2
    for row in rows:
        encoded = json_bytes(row)
        if current and size + len(encoded) > SHARD_LIMIT:
            parts.append(current)
            current, size = [row], 2 + len(encoded)
        else:
            current.append(row)
            size += len(encoded)
    if current:
        parts.append(current)
    files = []
    for index, part in enumerate(parts):
        name = f'{prefix}-{index:03d}.json.gz'
        payload = b'[' + b','.join(json_bytes(row).rstrip(b'\n') for row in part) + b']\n'
        compressed = gzip.compress(payload, compresslevel=9, mtime=0)
        compressed = compressed[:9] + bytes([255]) + compressed[10:]
        (destination / name).write_bytes(compressed)
        item = {'path': f'{file_path_prefix}/{name}', 'records': len(part), 'bytes': len(compressed),
                'sha256': sha(compressed), 'sourceBytes': len(payload), 'sourceSha256': sha(payload),
                'encoding': 'gzip', 'mediaType': 'application/json', 'role': role}
        if role == 'col-partition':
            item.update(minColId=part[0]['colId'], maxColId=part[-1]['colId'])
        files.append(item)
    return files


def package_owners(col_rows, parents):
    coverage = json.loads((ROOT / 'data/registry/package-species-coverage.json').read_text(encoding='utf-8'))
    target = set(MDD_PACKAGE_CONFIGS)
    by_ancestor = {}
    for route in coverage['routes']:
        for ancestor_id in route['ancestorIds']:
            by_ancestor.setdefault(ancestor_id, []).append((route['priority'], route['packageId']))
    owners = {}
    for col_id, row in col_rows.items():
        if not under_root(row, parents, SOURCES['mdd']['root']):
            continue
        current, seen, candidates = col_id, set(), []
        while current and current not in seen:
            seen.add(current)
            candidates.extend(by_ancestor.get(current, []))
            current = parents.get(current)
        selected = sorted(candidates)
        if not selected or selected[0][1] not in target:
            raise ValueError(f'MDD COL species {col_id} has no unique target package owner: {selected[:4]}')
        owners[col_id] = selected[0][1]
    return owners


def mdd_source_package(record):
    order = (record.get('taxonomy') or {}).get('order')
    if order in MDD_SPECIAL_ORDER_PACKAGES:
        return MDD_SPECIAL_ORDER_PACKAGES[order]
    if order in MDD_OTHER_MAMMALS_ORDERS:
        return 'other-mammals'
    raise ValueError(f'MDD source species {record["id"]} has unknown order; no routing fallback is permitted')


def descriptor_source(config, archive):
    source = archive['metadata']
    internal = archive['internalMetadata']
    return {
        'datasetId': config['datasetId'], 'title': source['title'], 'alias': source.get('alias'),
        'version': source['version'], 'issued': source['issued'], 'doi': source.get('doi'),
        'versionDoi': source.get('versionDoi'), 'archiveMetadataDoi': internal.get('doi'),
        'citation': source.get('citation'), 'editor': source.get('editor'),
        'contributor': source.get('contributor'), 'license': source.get('license'),
        'archiveLicense': internal.get('license'),
        'archiveUrl': f"https://api.checklistbank.org/dataset/{config['datasetId']}/archive",
        'archivePath': f"data/sources/archives/{config['archiveName']}",
        'metadataPath': f"data/sources/archives/{config['metadataName']}",
        'archiveBytes': len(archive['archiveBytes']), 'archiveSha256': sha(archive['archiveBytes']),
        'metadataBytes': len(archive['metadataBytes']), 'metadataSha256': sha(archive['metadataBytes']),
        'internalMetadata': archive['members']['metadata.yaml'],
        'members': archive['members'],
        'metadataConsistency': {'title': True, 'version': True, 'issued': True, 'license': True,
                                'taxonomicScope': True,
                                'doiNote': 'ChecklistBank dataset DOI and archive metadata DOI are retained as distinct identifiers; they are not asserted equal.'},
    }


def make_descriptor(config, package_id, prefix, output_path, file_path_prefix, records,
                    upstream, archive, output_root, scope_extra=None, limitations_extra=None):
    destination = output_root / output_path
    destination.mkdir(parents=True, exist_ok=True)
    col_files = write_shards(prefix, records, destination, 'col-partition', file_path_prefix)
    upstream_files = write_shards(f'{prefix}-source-only', upstream, destination, 'upstream-only', file_path_prefix)
    inventory = col_files + upstream_files
    source = archive['metadata']
    descriptor = {
        'schemaVersion': 1, 'recordType': 'release-pinned-authority-archive-crosswalk',
        'id': config.get('id', prefix + '-archive-crosswalk'), 'packageId': package_id,
        'provider': config['provider'], 'role': 'authority-crosswalk', 'rowEncoding': 'json',
        'encoding': 'gzip', 'mediaType': 'application/json', 'colIdField': 'colId',
        'totalCountField': 'total', 'source': descriptor_source(config, archive),
        'scope': {'colRootUsageId': config['root'], 'colRootScientificName': config['taxon'],
                  'colRelease': 'COL26.8', 'colStrictAcceptedSpecies': len(records),
                  'sourceDatasetId': config['datasetId'],
                  'sourceStrictAcceptedSpecies': len({row['matchedName']['id'] for row in records if row.get('matchedName')} | {row['matchedName']['id'] for row in upstream}),
                  **(scope_extra or {})},
        'matching': {'normalization': 'Unicode NFC and whitespace normalization on scientific names only; COL trailing authorship is removed exactly. Authorship is preserved as source data, not used as a matching key.',
                     'prohibited': 'No fuzzy, case-folded, accent-folded, authorship, synonym, taxon-substitution or species-concept matching.'},
        'counts': {'total': len(records), **{key: sum(row['status'] == key for row in records) for key in ('accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld')},
                   'upstreamOnly': len(upstream), 'records': len(records) + len(upstream)},
        'files': col_files, 'upstreamOnlyFiles': upstream_files,
        'totalCompressedBytes': sum(file['bytes'] for file in inventory),
        'totalSourceBytes': sum(file['sourceBytes'] for file in inventory),
        'deliveryProfiles': {'web-light': {'mode': 'summary-only', 'records': 0, 'files': [],
                                           'totalCompressedBytes': 0, 'totalSourceBytes': 0},
                             'native-full': {'mode': 'complete', 'records': len(records) + len(upstream),
                                             'files': [file['path'] for file in inventory],
                                             'totalCompressedBytes': sum(file['bytes'] for file in inventory),
                                             'totalSourceBytes': sum(file['sourceBytes'] for file in inventory)}},
        'evidenceBoundary': {'en': f'Frozen {source["title"]} archive projection for strict accepted COL26.8 {config["taxon"]} rows owned by {package_id}; not species-concept equivalence, a biological dossier, fossil evidence or expert review.',
                             'zh': f'冻结的 {source["title"]} 档案投影，范围为归属于 {package_id} 的严格 accepted COL26.8 {config["taxon"]} 行；不是物种概念等同性、生物档案、化石证据或专家审查。'},
        'limitations': ['Accepted crosswalk status does not imply that a source species is extant; explicit source extinct fields and remarks are preserved.',
                        'Source-only rows are relative only to this COL26.8 scope and are not global novelty claims.',
                        'Archive status and source fields are preserved; exact matching does not infer taxonomic equivalence.',
                        'GitHub Pages web-light carries the descriptor summary only; native-full carries every listed row shard.'],
    }
    descriptor['limitations'].extend(limitations_extra or [])
    descriptor_path = destination / f'{prefix}-sidecar.json'
    descriptor_bytes = json_bytes(descriptor, True)
    descriptor_path.write_bytes(descriptor_bytes)
    return descriptor, descriptor_bytes, inventory


def build_ioc_one(config, col_rows, parents, registry_sha, registry_inputs, output_root):
    archive = archive_source(config)
    by_name = {}
    for record, row_number in archive['accepted']:
        by_name.setdefault(norm(record['scientificName']), []).append((record, row_number))
    records, used = [], set()
    eligible = {key: row for key, row in col_rows.items() if under_root(row, parents, config['root'])}
    for col_id, row in sorted(eligible.items()):
        key = norm(col_bare(row))
        hits = by_name.get(key, [])
        status = 'accepted' if len(hits) == 1 else 'ambiguous' if len(hits) > 1 else 'unmatched'
        matched = hits[0][0] if len(hits) == 1 else None
        if matched:
            used.add(matched['id'])
        records.append({'colId': col_id, 'colScientificName': row['scientificName'],
                        'colAuthorship': row.get('authorship'), 'status': status,
                        'exactMatchName': key, 'matchedName': matched,
                        'acceptedName': matched if status == 'accepted' else None,
                        'candidates': [x[0] for x in hits] if len(hits) > 1 else [],
                        'mappingBasis': 'Unique exact normalized scientific name (NFC + whitespace); COL authorship is removed exactly but is not matched, and source authorship is preserved; no synonym fallback.',
                        'sourceRows': matched['sourceRows'] if matched else []})
    upstream = []
    for record, _ in sorted(archive['accepted'], key=lambda pair: pair[0]['id']):
        if record['id'] not in used:
            upstream.append({'colId': None, 'colScientificName': None, 'colAuthorship': None,
                             'status': 'upstream-only', 'exactMatchName': norm(record['scientificName']),
                             'matchedName': record, 'acceptedName': record, 'candidates': [],
                             'mappingBasis': 'Selected source species not uniquely matched to the exact COL26.8 scope; not a global novelty claim.',
                             'sourceRows': record['sourceRows']})
    descriptor, descriptor_bytes, inventory = make_descriptor(
        config, config['packageId'], config['prefix'], config['outputPath'],
        config['filePathPrefix'], records, upstream, archive, output_root,
        scope_extra={'packageOwnership': 'All COL26.8 accepted Aves below V2 are owned by crocodylomorphs-birds; this projection is not an other-animals resource-pack extension.'})
    ledger = {'schemaVersion': 1, 'importType': f"COL26.8-to-{config['datasetId']}-exact-scientific-name-crosswalk",
              'source': descriptor['source'], 'registryManifestSha256': registry_sha,
              'registryInputs': registry_inputs,
              'generatedBy': {'script': 'scripts/build-mdd-ioc-source.py', 'scriptSha256': script_sha(), 'hashNormalization': 'LF'},
              'scopeAudit': {'colRootUsageId': config['root'], 'colRootScientificName': config['taxon'],
                             'colStrictAcceptedSpecies': len(eligible), 'sourceStrictAcceptedSpecies': len(archive['accepted']),
                             'counts': descriptor['counts']},
              'outputs': {'descriptor': {'path': f'{config["outputPath"]}/{config["prefix"]}-sidecar.json',
                                         'bytes': len(descriptor_bytes), 'sha256': sha(descriptor_bytes)},
                          'files': descriptor['files'], 'upstreamOnlyFiles': descriptor['upstreamOnlyFiles']}}
    ledger_path = output_root / 'data/sources' / config['ledgerName']
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(json_bytes(ledger, True))
    return descriptor


def build_mdd_packages(config, col_rows, parents, registry_sha, registry_inputs, output_root):
    archive = archive_source(config)
    owners = package_owners(col_rows, parents)
    by_name = {}
    for record, row_number in archive['accepted']:
        by_name.setdefault(norm(record['scientificName']), []).append((record, row_number))
    records_by_package = {package_id: [] for package_id in MDD_PACKAGE_CONFIGS}
    upstream_by_package = {package_id: [] for package_id in MDD_PACKAGE_CONFIGS}
    used_by_source = {}
    eligible = {key: row for key, row in col_rows.items() if under_root(row, parents, config['root'])}
    for col_id, row in sorted(eligible.items()):
        package_id = owners[col_id]
        key = norm(col_bare(row))
        hits = by_name.get(key, [])
        status = 'accepted' if len(hits) == 1 else 'ambiguous' if len(hits) > 1 else 'unmatched'
        matched = hits[0][0] if len(hits) == 1 else None
        if matched:
            used_by_source[matched['id']] = package_id
        records_by_package[package_id].append({'colId': col_id, 'colScientificName': row['scientificName'],
                                                'colAuthorship': row.get('authorship'), 'status': status,
                                                'exactMatchName': key, 'matchedName': matched,
                                                'acceptedName': matched if status == 'accepted' else None,
                                                'candidates': [x[0] for x in hits] if len(hits) > 1 else [],
                                                'mappingBasis': 'Unique exact normalized scientific name (NFC + whitespace); COL authorship is removed exactly but is not matched, and source authorship is preserved; no synonym fallback.',
                                                'sourceRows': matched['sourceRows'] if matched else []})
    for record, _ in sorted(archive['accepted'], key=lambda pair: pair[0]['id']):
        if record['id'] in used_by_source:
            continue
        package_id = mdd_source_package(record)
        order = (record.get('taxonomy') or {}).get('order')
        upstream_by_package[package_id].append({'colId': None, 'colScientificName': None, 'colAuthorship': None,
                                                'status': 'upstream-only', 'exactMatchName': norm(record['scientificName']),
                                                'matchedName': record, 'acceptedName': record, 'candidates': [],
                                                'mappingBasis': 'Selected source species not uniquely matched to the exact COL26.8 scope; not a global novelty claim.',
                                                'sourceRouting': {'basis': 'Explicit MDD taxonomy.order allowlist; not COL ownership or taxon equivalence.',
                                                                  'order': order, 'packageId': package_id},
                                                'sourceRows': record['sourceRows']})
    if sum(len(rows) for rows in records_by_package.values()) != len(eligible):
        raise ValueError('MDD package COL partitions do not cover the eligible scope exactly')
    if sum(len(rows) for rows in upstream_by_package.values()) != len(archive['accepted']) - len(used_by_source):
        raise ValueError('MDD source-only partitions do not cover the un-used source rows exactly')
    descriptors, package_outputs = {}, {}
    for package_id, package_config in MDD_PACKAGE_CONFIGS.items():
        source_rows = {row['matchedName']['id'] for row in records_by_package[package_id] if row.get('matchedName')}
        package_scope = {
            'packageOwnership': 'COL rows use the existing unique COL species ownership route.',
            'sourceGlobalStrictAcceptedSpecies': len(archive['accepted']),
            'sourcePackageRoutedSpecies': len(source_rows) + len(upstream_by_package[package_id]),
            'sourceOnlyRouting': 'Source-only rows retain null COL IDs and are routed only by the explicit MDD taxonomy.order allowlist; this is not COL ownership or taxon equivalence.',
        }
        descriptor, descriptor_bytes, inventory = make_descriptor(
            {**config, 'id': package_config['id']}, package_id, package_config['prefix'],
            package_config['outputPath'], 'nomenclature', records_by_package[package_id],
            upstream_by_package[package_id], archive, output_root, scope_extra=package_scope)
        descriptors[package_id] = descriptor
        package_outputs[package_id] = {'descriptor': {'path': f"{package_config['outputPath']}/{package_config['prefix']}-sidecar.json",
                                                       'bytes': len(descriptor_bytes), 'sha256': sha(descriptor_bytes)},
                                       'files': descriptor['files'], 'upstreamOnlyFiles': descriptor['upstreamOnlyFiles']}
    aggregate_counts = {key: sum(descriptor['counts'][key] for descriptor in descriptors.values())
                        for key in ('total', 'accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld', 'upstreamOnly', 'records')}
    source_routing_counts = collections.Counter()
    for rows in upstream_by_package.values():
        for row in rows:
            source_routing_counts[row['sourceRouting']['order']] += 1
    ledger = {'schemaVersion': 1, 'importType': 'COL26.8-to-9802-exact-scientific-name-crosswalk-by-col-owner',
              'source': descriptor_source(config, archive), 'registryManifestSha256': registry_sha,
              'registryInputs': registry_inputs,
              'generatedBy': {'script': 'scripts/build-mdd-ioc-source.py', 'scriptSha256': script_sha(), 'hashNormalization': 'LF'},
              'scopeAudit': {'colRootUsageId': config['root'], 'colRootScientificName': config['taxon'],
                             'colStrictAcceptedSpecies': len(eligible), 'sourceStrictAcceptedSpecies': len(archive['accepted']),
                             'counts': aggregate_counts,
                             'packageCounts': {package_id: descriptor['counts'] for package_id, descriptor in descriptors.items()},
                             'sourceOnlyRoutingCountsByOrder': dict(sorted(source_routing_counts.items())),
                             'sourceOnlyRoutingBasis': 'Explicit MDD taxonomy.order allowlist; source-only rows retain null COL IDs and this routing is not COL ownership or taxon equivalence.'},
              'outputs': {'packages': package_outputs}}
    ledger_path = output_root / 'data/sources' / config['ledgerName']
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(json_bytes(ledger, True))
    return descriptors, ledger


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', choices=['mdd', 'ioc', 'all'], default='all')
    parser.add_argument('--output-root', type=Path)
    args = parser.parse_args()
    output_root = args.output_root or ROOT
    col, parents, registry_sha, registry_inputs = read_col()
    if args.source in ('mdd', 'all'):
        descriptors, ledger = build_mdd_packages(SOURCES['mdd'], col, parents, registry_sha, registry_inputs, output_root)
        print(json.dumps({'id': 'mdd-mammalia', 'counts': ledger['scopeAudit']['counts'],
                          'packages': {package_id: descriptor['counts'] for package_id, descriptor in descriptors.items()}}, ensure_ascii=False))
    if args.source in ('ioc', 'all'):
        descriptor = build_ioc_one(SOURCES['ioc'], col, parents, registry_sha, registry_inputs, output_root)
        print(json.dumps({'id': descriptor['id'], 'counts': descriptor['counts'],
                          'source': {'bytes': descriptor['source']['archiveBytes'], 'sha256': descriptor['source']['archiveSha256']},
                          'files': descriptor['files'], 'upstreamOnlyFiles': descriptor['upstreamOnlyFiles']}, ensure_ascii=False))


if __name__ == '__main__':
    main()
