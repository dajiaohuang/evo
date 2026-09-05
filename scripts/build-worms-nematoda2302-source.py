"""Project the pinned ChecklistBank/Nemys dataset 2302 into an exact COL crosswalk.

The archive is read locally and is part of the source evidence.  Matching is
deliberately limited to NFC-normalized, whitespace-normalized scientific name
and authorship; no synonym, fuzzy, case or species-concept inference is made.
The retained source scope is the explicit ``Taxon.phylum=Nematoda`` set.  The
Aphia 799 parent closure is recorded as a separate audit subset and is not used
to discard otherwise explicit Nematoda source rows.
"""
import argparse
import csv
import gzip
import hashlib
import io
import json
import unicodedata
import zipfile
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-2302-nematoda-2026-09-01.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-2302-nematoda-2026-09-01.metadata.json'
ARCHIVE_SHA = '11805c4e72c96130b626e12618ff70f938c2c825bfbb0aff22297c4bc925dd88'
ARCHIVE_BYTES = 4107143
COL_ROOT = 'NM'
COL_EXPECTED = 19604
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
PREFIX = 'worms-nematoda2302'
SHARD_LIMIT = 2 * 1024 * 1024


def digest(data):
    return hashlib.sha256(data).hexdigest()


def script_digest(path):
    return digest(path.read_bytes().replace(b'\r\n', b'\n'))


def dump(value, pretty=False):
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + '\n').encode('utf-8')


def norm(value):
    return ' '.join(unicodedata.normalize('NFC', value or '').split())


def parse_embedded_metadata(raw):
    fields = {}
    wanted = {'doi', 'title', 'issued', 'version', 'license', 'website', 'citation'}
    for line in raw.decode('utf-8').splitlines():
        if line.startswith((' ', '\t')) or ':' not in line:
            continue
        key, value = line.split(':', 1)
        if key not in wanted:
            continue
        value = value.strip()
        fields[key] = None if value == 'null' else value[1:-1] if len(value) >= 2 and value[0] == value[-1] == "'" else value
    return {**fields, 'bytes': len(raw), 'sha256': digest(raw)}


def col_bare(row):
    name, author = row.get('scientificName') or '', row.get('authorship') or ''
    suffix = ' ' + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def source_name(taxon, name):
    source_id = taxon['ID'].rsplit(':', 1)[-1]
    return {
        'id': name['ID'],
        'taxonId': taxon['ID'],
        'aphiaId': source_id,
        'scientificName': name.get('scientificName') or '',
        'authorship': name.get('authorship') or '',
        'rank': name.get('rank') or '',
        'status': name.get('status') or '',
        'provisional': taxon.get('provisional') or '0',
        'url': name.get('link') or taxon.get('link') or
               f'https://nemys.ugent.be/aphia.php?p=taxdetails&id={source_id}',
    }


def read_rows(archive, member):
    return list(csv.DictReader(io.TextIOWrapper(archive.open(member),
                                                 encoding='utf-8-sig', newline=''),
                               delimiter='\t'))


def source_references(taxon, name, name_refs, references):
    ids = []
    for value in (name.get('referenceID'), taxon.get('referenceID'),
                  taxon.get('accordingToID')):
        if (value or '').strip():
            ids.append(value.strip())
    for ref, _ in name_refs.get(name['ID'], []):
        if (ref.get('referenceID') or '').strip():
            ids.append(ref['referenceID'].strip())
    result = []
    for reference_id in dict.fromkeys(ids):
        item = {'referenceID': reference_id, 'missing': reference_id not in references}
        if reference_id in references:
            reference, row = references[reference_id]
            item['reference'] = reference
            item['sourceRows'] = [{'member': 'Reference.txt', 'row': row}]
        result.append(item)
    return result


def source_locators(taxon, name, taxon_row, name_row, name_refs, references):
    locators = [('Taxon.txt', taxon_row), ('Name.txt', name_row)]
    for ref, ref_row in name_refs.get(name['ID'], []):
        locators.append(('NameReference.txt', ref_row))
        if (ref.get('referenceID') or '').strip() in references:
            locators.append(('Reference.txt', references[ref['referenceID'].strip()][1]))
    for reference_id in (name.get('referenceID'), taxon.get('referenceID'),
                         taxon.get('accordingToID')):
        if (reference_id or '').strip() in references:
            locators.append(('Reference.txt', references[reference_id.strip()][1]))
    return [{'member': member, 'row': row} for member, row in sorted(set(locators))]


def read_archive(path):
    with zipfile.ZipFile(path) as archive:
        members = {}
        for member in archive.namelist():
            raw = archive.read(member)
            members[member] = {'bytes': len(raw), 'sha256': digest(raw)}
        names = {row['ID']: (row, ordinal)
                 for ordinal, row in enumerate(read_rows(archive, 'Name.txt'), 2)}
        refs = {row['ID']: (row, ordinal)
                for ordinal, row in enumerate(read_rows(archive, 'Reference.txt'), 2)}
        name_refs = defaultdict(list)
        for ordinal, row in enumerate(read_rows(archive, 'NameReference.txt'), 2):
            name_refs[row['nameID']].append((row, ordinal))
        accepted = {}
        parents = {}
        species_rows = 0
        provisional = 0
        for ordinal, taxon in enumerate(read_rows(archive, 'Taxon.txt'), 2):
            parents[taxon['ID']] = taxon.get('parentID')
            name_entry = names.get(taxon.get('nameID'))
            name = name_entry[0] if name_entry else None
            if not name or name.get('rank') != 'Species' or taxon.get('phylum') != 'Nematoda':
                continue
            species_rows += 1
            if taxon.get('provisional') == '1':
                provisional += 1
                continue
            accepted[taxon['ID']] = (taxon, name, ordinal, name_entry[1])
        rooted = set()
        for taxon_id in accepted:
            current, seen = taxon_id, set()
            while current and current not in seen:
                if current == 'urn:lsid:marinespecies.org:taxname:799':
                    rooted.add(taxon_id)
                    break
                seen.add(current)
                current = parents.get(current)
        rooted_source = {taxon_id: accepted[taxon_id] for taxon_id in rooted}
        matchable = accepted
        return accepted, rooted_source, matchable, refs, dict(name_refs), members, species_rows, provisional


def read_col():
    manifest_bytes = (REGISTRY / 'manifest.json').read_bytes()
    manifest = json.loads(manifest_bytes)
    parents, rows = {}, {}
    files = manifest['hierarchy']['nodes']['files']
    for file in files:
        with gzip.open(REGISTRY / file['path'], 'rt', encoding='utf-8') as stream:
            for line in stream:
                row = json.loads(line)
                parents[row['id']] = row.get('parentId')
    for file in files:
        with gzip.open(REGISTRY / file['path'], 'rt', encoding='utf-8') as stream:
            for line in stream:
                row = json.loads(line)
                if row.get('rank') != 'species' or row.get('status') != 'accepted':
                    continue
                current, seen = row.get('parentId'), set()
                while current and current not in seen and current != COL_ROOT:
                    seen.add(current)
                    current = parents.get(current)
                if current == COL_ROOT:
                    rows[row['id']] = row
    if len(rows) != COL_EXPECTED:
        raise ValueError(f'COL Nematoda scope changed: {len(rows)} != {COL_EXPECTED}')
    inputs = []
    for file in manifest['hierarchy']['nodes']['files']:
        path = REGISTRY / file['path']
        inputs.append({'path': f'data/catalogue-of-life/releases/2026-08-20/registry/{file["path"]}',
                       'bytes': path.stat().st_size, 'sha256': digest(path.read_bytes())})
    return rows, digest(manifest_bytes), inputs


def write_shards(destination, prefix, rows, role):
    if not rows:
        return []
    parts, current, used = [], [], 2
    for row in rows:
        size = len(dump(row))
        if current and used + size > SHARD_LIMIT:
            parts.append(current)
            current, used = [], 2
        current.append(row)
        used += size + 1
    if current:
        parts.append(current)
    files = []
    for index, part in enumerate(parts):
        name = f'{prefix}-{index:03d}.json.gz'
        payload = dump(part)
        if len(payload) >= SHARD_LIMIT:
            raise ValueError(f'shard {name} is not below 2 MiB uncompressed')
        compressed = gzip.compress(payload, compresslevel=9, mtime=0)
        compressed = compressed[:9] + bytes([255]) + compressed[10:]
        (destination / name).write_bytes(compressed)
        item = {'path': f'other-animals/{name}', 'records': len(part),
                'bytes': len(compressed), 'sha256': digest(compressed),
                'sourceBytes': len(payload), 'sourceSha256': digest(payload),
                'encoding': 'gzip', 'mediaType': 'application/json', 'role': role}
        if role == 'col-partition':
            item.update(minColId=part[0]['colId'], maxColId=part[-1]['colId'])
        files.append(item)
    return files


def project(archive_path, metadata_path, output_root=None):
    archive_raw = archive_path.read_bytes()
    if len(archive_raw) != ARCHIVE_BYTES or digest(archive_raw) != ARCHIVE_SHA:
        raise ValueError('archive does not match pinned source bytes')
    metadata_raw = metadata_path.read_bytes()
    metadata = json.loads(metadata_raw)
    if (metadata.get('key'), metadata.get('attempt'), metadata.get('version'),
            metadata.get('versionDoi')) != (2302, 78, '2026-09-01', '10.48580/d4rf.v78'):
        raise ValueError('unexpected ChecklistBank metadata identity')
    source, rooted_source, matchable, references, name_refs, members, species_rows, provisional = read_archive(archive_path)
    with zipfile.ZipFile(archive_path) as archive:
        embedded_metadata = parse_embedded_metadata(archive.read('metadata.yml'))
    col, registry_sha, registry_inputs = read_col()
    by_key = defaultdict(list)
    for taxon_id, (taxon, name, taxon_row, name_row) in source.items():
        by_key[(norm(name.get('scientificName')), norm(name.get('authorship')))].append(
            (taxon_id, taxon, name, taxon_row, name_row))
    records, implicated = [], set()
    counts = {key: 0 for key in ('accepted', 'ambiguous', 'unmatched')}
    for col_id, row in sorted(col.items()):
        hits = by_key.get((norm(col_bare(row)), norm(row.get('authorship'))), [])
        status = 'accepted' if len(hits) == 1 else 'ambiguous' if len(hits) > 1 else 'unmatched'
        counts[status] += 1
        matched, accepted_name, candidates, locators, refs = None, None, [], [], []
        if len(hits) == 1 and status == 'accepted':
            taxon_id, taxon, name, taxon_row, name_row = hits[0]
            implicated.add(taxon_id)
            matched = accepted_name = source_name(taxon, name)
            locators = source_locators(taxon, name, taxon_row, name_row, name_refs, references)
            refs = source_references(taxon, name, name_refs, references)
        elif hits:
            if status == 'ambiguous':
                candidates = [source_name(item[1], item[2]) for item in hits]
            for taxon_id, taxon, name, taxon_row, name_row in hits:
                locators.extend(source_locators(taxon, name, taxon_row, name_row, name_refs, references))
                refs.extend(source_references(taxon, name, name_refs, references))
            locators = sorted({(item['member'], item['row']): item for item in locators}.values(),
                              key=lambda item: (item['member'], item['row']))
            refs = list({item['referenceID']: item for item in refs}.values())
        records.append({'colId': col_id, 'colScientificName': row['scientificName'],
                        'colAuthorship': row.get('authorship') or '', 'status': status,
                        'matchedName': matched, 'acceptedName': accepted_name,
                        'candidates': candidates,
                        'mappingBasis': 'Exact NFC+whitespace-normalized source scientific name and authorship; no fuzzy or concept-equivalence fallback.',
                        'sourceRows': locators, 'references': refs})
    source_only = []
    source_only_ids = []
    for taxon_id, (taxon, name, taxon_row, name_row) in sorted(source.items()):
        if taxon_id in implicated:
            continue
        source_only_ids.append(taxon_id)
        source_only.append({'colId': None, 'colScientificName': None, 'colAuthorship': None,
                            'status': 'source-only', 'matchedName': None,
                            'acceptedName': source_name(taxon, name), 'candidates': [],
                            'mappingBasis': 'Accepted Nemys concept in the explicit Taxon.phylum=Nematoda scope, not linked by a unique exact COL name+authorship; not a new global species claim. Aphia 799 parent closure is reported separately and is not required for retention.',
                            'sourceRows': source_locators(taxon, name, taxon_row, name_row, name_refs, references),
                            'references': source_references(taxon, name, name_refs, references)})
    source_only_outside_aphia_closure = sum(taxon_id not in rooted_source for taxon_id in source_only_ids)
    source_only_within_aphia_closure = sum(taxon_id in rooted_source for taxon_id in source_only_ids)
    output_base = Path(output_root) if output_root else ROOT
    destination = output_base / OUT.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    col_files = write_shards(destination, PREFIX, records, 'col-partition')
    source_files = write_shards(destination, f'{PREFIX}-source-only', source_only, 'source-only')
    source_info = {
        'datasetId': '2302', 'title': metadata['title'], 'version': metadata['version'],
        'versionDoi': metadata['versionDoi'], 'doi': metadata['doi'],
        'issued': metadata['issued'], 'citation': metadata['citation'],
        'editor': metadata['editor'], 'contributor': metadata['contributor'],
        'license': metadata['license'], 'metadataBytes': len(metadata_raw),
        'metadataSha256': digest(metadata_raw), 'archiveUrl': 'https://api.checklistbank.org/dataset/2302/archive',
        'archivePath': 'data/sources/archives/checklistbank-2302-nematoda-2026-09-01.zip',
        'metadataPath': 'data/sources/archives/checklistbank-2302-nematoda-2026-09-01.metadata.json',
        'archiveBytes': len(archive_raw), 'archiveSha256': digest(archive_raw), 'members': members,
        'metadataRecord': metadata,
        'embeddedMetadata': embedded_metadata,
        'metadataConsistency': {
            'status': 'mismatch',
            'apiResponse': {'doi': metadata['doi'], 'versionDoi': metadata['versionDoi'],
                            'version': metadata['version'], 'issued': metadata['issued'],
                            'license': metadata['license']},
            'archiveEmbedded': {key: embedded_metadata[key]
                                for key in ('doi', 'version', 'issued', 'license')},
            'boundary': 'The byte-pinned archive drives the projection. The API identifies its ChecklistBank dataset and attempt; archive metadata.yml identifies the Nemys source DOI. Raw license strings remain separate evidence without an inferred license version.',
        },
    }
    for field in ('rights', 'rightsHolder'):
        if field in metadata:
            source_info[field] = metadata[field]
    all_files = col_files + source_files
    descriptor = {
        'schemaVersion': 1, 'recordType': 'release-pinned-authority-archive-crosswalk',
        'id': f'{PREFIX}-archive-crosswalk', 'packageId': 'other-animals',
        'provider': 'Nemys / World Register of Marine Species via ChecklistBank',
        'role': 'authority-crosswalk', 'rowEncoding': 'json', 'encoding': 'gzip',
        'mediaType': 'application/json', 'colIdField': 'colId', 'totalCountField': 'total',
        'source': source_info,
        'scope': {'colRootUsageId': COL_ROOT, 'sourceRootAphiaId': '799',
                  'sourceRootAphiaIdRole': 'audit-only parent-closure subset; explicit-phylum rows outside this closure are retained',
                  'scientificName': 'Nematoda',
                  'eligibleColSpecies': len(col), 'sourceSpeciesRows': species_rows,
                  'sourceAcceptedSpecies': len(source), 'matchableSourceSpecies': len(matchable),
                  'excludedSourceProvisional': provisional,
                  'excludedFromExactScope': len(source) - len(matchable),
                  'sourceScope': {
                      'criterion': 'Accepted Species rows with explicit Taxon.phylum=Nematoda; parent closure is not required for retention.',
                      'acceptedSpecies': len(source),
                      'sourceOnlySpecies': len(source_only),
                      'sourceOnlyOutsideAphiaClosure': source_only_outside_aphia_closure,
                      'sourceOnlyWithinAphiaClosure': source_only_within_aphia_closure,
                  },
                  'aphiaClosureScope': {
                      'criterion': 'Accepted Species rows whose Taxon parent chain reaches Aphia 799; this is an audit subset of the explicit-phylum scope.',
                      'rootAphiaId': '799',
                      'acceptedSpecies': len(rooted_source),
                      'matchableSpecies': len(rooted_source),
                      'sourceOnlySpecies': source_only_within_aphia_closure,
                      'outsideClosureRetainedByPhylumScope': len(source) - len(rooted_source),
                  }},
        'matching': {'normalization': 'NFC and whitespace normalization only; COL trailing authorship is removed exactly.',
                     'prohibited': 'No fuzzy, case-folded, accent-folded, synonym, inferred or species-concept matching.'},
        'counts': {'total': len(records), **counts, 'sourceOnly': len(source_only),
                   'upstreamOnly': len(source_only), 'records': len(records) + len(source_only)},
        'files': col_files, 'sourceOnlyFiles': source_files, 'upstreamOnlyFiles': source_files,
        'evidenceBoundary': {'en': 'Frozen Nemys nomenclatural archive projection for COL26.8 Nematoda; not species-concept equivalence, a biological dossier, fossil evidence or expert review.',
                             'zh': '面向 COL26.8 Nematoda 的冻结 Nemys 命名档案投影；不是物种概念等同性、生物档案、化石证据或专家审查。'},
        'limitations': ['Source-only concepts retain null COL ownership and are not a global new-species claim.',
                        f'{source_only_outside_aphia_closure} source-only concepts are outside the Aphia 799 parent closure but are retained because their archive Taxon row explicitly declares phylum Nematoda; they are not Aphia-799 closure members.',
                        'Ancillary source members are retained by archive hash but are not projected into row payloads.',
                        'Exact name matching does not establish equivalent species concepts or higher-classification identity.'],
        'totalCompressedBytes': sum(item['bytes'] for item in all_files),
        'totalSourceBytes': sum(item['sourceBytes'] for item in all_files),
        'deliveryProfiles': {
            'web-light': {'mode': 'summary-only', 'records': 0, 'files': [], 'totalCompressedBytes': 0, 'totalSourceBytes': 0},
            'native-full': {'mode': 'complete', 'records': len(records) + len(source_only),
                            'files': [item['path'] for item in all_files],
                            'totalCompressedBytes': sum(item['bytes'] for item in all_files),
                            'totalSourceBytes': sum(item['sourceBytes'] for item in all_files)},
        },
    }
    descriptor_path = destination / f'{PREFIX}-sidecar.json'
    descriptor_bytes = dump(descriptor, True)
    descriptor_path.write_bytes(descriptor_bytes)
    ledger = {
        'schemaVersion': 1, 'importType': 'COL26.8-to-Nemys-2302-archive-projection',
        'source': source_info, 'registryManifestSha256': registry_sha,
        'registryInputs': registry_inputs,
        'generatedBy': {'script': 'scripts/build-worms-nematoda2302-source.py',
                        'scriptSha256': script_digest(Path(__file__)), 'hashNormalization': 'LF'},
        'outputs': {'descriptor': {'path': f'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/{PREFIX}-sidecar.json',
                                   'bytes': len(descriptor_bytes), 'sha256': digest(descriptor_bytes)},
                    'files': col_files, 'sourceOnlyFiles': source_files, 'upstreamOnlyFiles': source_files},
        'scopeAudit': {'method': 'All archive Taxon species rows were checked by explicit Nematoda phylum field and parent closure. Retention and exact matching use the explicit-phylum scope; Aphia 799 closure is reported as a separate subset. Missing order or family fields do not invalidate a unique exact scientific-name and authorship match.',
                       'explicitPhylumScope': {
                           'criterion': 'Accepted Species rows with explicit Taxon.phylum=Nematoda.',
                           'speciesRows': species_rows,
                           'acceptedSpecies': len(source),
                           'sourceOnly': len(source_only),
                           'sourceOnlyOutsideAphiaClosure': source_only_outside_aphia_closure,
                           'sourceOnlyWithinAphiaClosure': source_only_within_aphia_closure,
                       },
                       'aphia799ClosureScope': {
                           'criterion': 'Accepted Species rows whose parent chain reaches Aphia 799; audit subset only.',
                           'rootAphiaId': '799',
                           'acceptedSpecies': len(rooted_source),
                           'matchableSpecies': len(rooted_source),
                           'sourceOnly': source_only_within_aphia_closure,
                           'outsideClosureRetainedByPhylumScope': len(source) - len(rooted_source),
                       },
                       'speciesRows': species_rows, 'sourceAcceptedSpecies': len(source),
                       'matchableSourceSpecies': len(matchable),
                       'sourceProvisionalExcluded': provisional, 'sourceOnly': len(source_only),
                       'memberDigests': members},
    }
    ledger_bytes = dump(ledger, True)
    ledger_path = output_base / 'data/sources/worms-nematoda2302-archive-2302-import-ledger.json'
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(ledger_bytes)
    print(json.dumps({'counts': descriptor['counts'], 'sourceArchive': {'bytes': len(archive_raw), 'sha256': digest(archive_raw)},
                      'shards': [{'path': item['path'], 'records': item['records'], 'bytes': item['bytes'],
                                  'sourceBytes': item['sourceBytes'], 'sha256': item['sha256']} for item in all_files]}))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--archive', type=Path, default=ARCHIVE)
    parser.add_argument('--metadata', type=Path, default=METADATA)
    parser.add_argument('--output-root', type=Path)
    args = parser.parse_args()
    project(args.archive, args.metadata, args.output_root)


if __name__ == '__main__':
    main()
