"""Build the pinned OSF Orthoptera exact crosswalk using Python stdlib only."""
import argparse, csv, gzip, hashlib, json, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REG = ROOT / 'data/catalogue-of-life/releases/2026-08-20/registry'
PKG = ROOT / 'data/packages/arthropoda/crustaceans-insects'
NOM = PKG / 'nomenclature'
DESCRIPTOR = NOM / 'osf-orthoptera-sidecar.json'
LEDGER = ROOT / 'data/sources/osf-orthoptera-archive-crosswalk-import-ledger.json'
COL_ROOT, OSF_ROOT, OSF_NAME_ROOT = 'CJBKK', '805980', '913531'
PACKAGE_ID = 'crustaceans-insects'
LIMIT = 2 * 1024 * 1024

def digest(data): return hashlib.sha256(data).hexdigest()
def dump(value): return (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode()
def array_bytes(rows): return (json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + '\n').encode()
def repo(path):
    try: return path.relative_to(ROOT).as_posix()
    except ValueError: return path.as_posix()
def name_key(name, author): return (name, author or '')

def read_tsv(zf, member):
    with zf.open(member) as stream:
        rows = []
        for row_number, row in enumerate(csv.DictReader((x.decode('utf-8') for x in stream), delimiter='\t'), 2):
            row['__row'], row['__member'] = row_number, member
            rows.append(row)
        return rows

def col_species():
    files = [REG / Path(item['path']) for item in json.loads((REG / 'manifest.json').read_text(encoding='utf-8'))['hierarchy']['nodes']['files']]
    parents, species = {}, []
    for path in files:
        with gzip.open(path, 'rt', encoding='utf-8') as stream:
            for line in stream:
                row = json.loads(line); parents[row['id']] = row.get('parentId')
                if row.get('rank') == 'species' and row.get('status') == 'accepted': species.append(row)
    def in_root(row):
        parent = row.get('parentId')
        while parent:
            if parent == COL_ROOT: return True
            parent = parents.get(parent)
        return False
    scoped = sorted((x for x in species if in_root(x)), key=lambda x: x['id'])
    if len(scoped) != 30859 or any(x.get('sourceDatasetId') != '1021' for x in scoped): raise SystemExit('COL Orthoptera root/source scope changed')
    return scoped

def rows_for(*rows): return [{'member': x['__member'], 'row': x['__row']} for x in rows if x]
def source_name(name, taxon, status='accepted'):
    return {'id': taxon['ID'], 'nameId': name['ID'], 'scientificName': name['scientificName'], 'authorship': name['authorship'] or '', 'status': status, 'url': taxon.get('link') or ''}
def strip_col(row):
    name, author = row['scientificName'], row.get('authorship') or ''
    return name[:-len(author)-1] if author and name.endswith(' ' + author) else name
def descriptor_file(path, rows, compressed, source):
    result = {'path': repo(path), 'records': len(rows), 'bytes': len(compressed), 'sha256': digest(compressed), 'sourceBytes': len(source), 'sourceSha256': digest(source)}
    if rows: result.update(minColId=rows[0].get('colId'), maxColId=rows[-1].get('colId'))
    return result
def chunks(rows):
    out, current, used = [], [], 2
    for row in rows:
        size = len(json.dumps(row, ensure_ascii=False, separators=(',', ':')).encode()) + 1
        if current and used + size > LIMIT: out.append(current); current, used = [], 2
        current.append(row); used += size
    if current: out.append(current)
    return out

def main():
    parser = argparse.ArgumentParser(); parser.add_argument('--archive', required=True); parser.add_argument('--acquisition', required=True); args = parser.parse_args()
    archive_path, acquisition_path = Path(args.archive).resolve(), Path(args.acquisition).resolve()
    global ACQ
    ACQ = acquisition_path
    acquisition_bytes = acquisition_path.read_bytes(); acquisition = json.loads(acquisition_bytes)
    archive_bytes = archive_path.read_bytes()
    if digest(archive_bytes) != '1a7fab3d43b19eb2ef21d56180bfb25de641aaee5f522b9603aac2f2e22a9575' or len(archive_bytes) != 6278172: raise SystemExit('archive does not match pinned OSF acquisition')
    if digest(archive_bytes) != acquisition['sha256'] or len(archive_bytes) != acquisition['bytes']: raise SystemExit('archive does not match acquisition evidence')
    metadata_path = acquisition_path.with_name('metadata-after.json'); metadata = json.loads(metadata_path.read_text(encoding='utf-8'))
    if metadata.get('key') != 1021 or metadata.get('attempt') != 56 or metadata.get('version') != 'Sep 2026' or metadata.get('versionDoi') != '10.48580/d388.v56' or metadata.get('license') != 'cc by' or metadata.get('lastImportState') != 'finished': raise SystemExit('OSF metadata identity/licence check failed')
    with zipfile.ZipFile(archive_path) as zf:
        members = {x: zf.read(x) for x in ('Name.tsv', 'Taxon.tsv', 'Synonym.tsv')}
        names, taxa, synonyms = read_tsv(zf, 'Name.tsv'), read_tsv(zf, 'Taxon.tsv'), read_tsv(zf, 'Synonym.tsv')
    by_name = {x['ID']: x for x in names}; by_taxon = {x['ID']: x for x in taxa}
    if by_name.get(OSF_NAME_ROOT, {}).get('scientificName') != 'Orthoptera' or by_name.get(OSF_NAME_ROOT, {}).get('rank') != 'order': raise SystemExit('OSF TaxonName root identity changed')
    osf_taxa = []
    for taxon in taxa:
        name = by_name.get(taxon.get('nameID'))
        if not name or name.get('rank') != 'species' or taxon.get('provisional'): continue
        parent = taxon['ID']
        while parent:
            if parent == OSF_ROOT: osf_taxa.append((taxon, name)); break
            parent = by_taxon.get(parent, {}).get('parentID')
    direct = {}
    for taxon, name in osf_taxa: direct.setdefault(name_key(name['scientificName'], name['authorship']), []).append((taxon, name))
    syns = {}
    for syn in synonyms:
        name = by_name.get(syn.get('nameID'))
        if name and name.get('rank') == 'species': syns.setdefault(name_key(name['scientificName'], name['authorship']), []).append((syn, name, by_taxon.get(syn.get('taxonID'))))
    col = col_species(); records, evidenced = [], set(); counts = {'accepted': 0, 'redirect': 0, 'ambiguous': 0, 'unmatched': 0, 'withheld': 0}
    for row in col:
        key = name_key(strip_col(row), row.get('authorship')); hits = direct.get(key, [])
        rec = {'colId': row['id'], 'colScientificName': row['scientificName'], 'colAuthorship': row.get('authorship') or '', 'matchedName': None, 'acceptedName': None, 'candidates': [], 'mappingBasis': None, 'sourceRows': []}
        if len(hits) == 1:
            taxon, name = hits[0]; value = source_name(name, taxon); rec.update(status='accepted', matchedName=value, acceptedName=value, mappingBasis='Exact scientific name and authorship match.', sourceRows=rows_for(taxon, name)); evidenced.add(taxon['ID']); counts['accepted'] += 1
        elif len(hits) > 1:
            rec.update(status='ambiguous', mappingBasis='Exact scientific name and authorship match has multiple OSF accepted concepts.', candidates=[source_name(n, t) for t, n in hits], sourceRows=sum((rows_for(t, n) for t, n in hits), [])); evidenced.update(t['ID'] for t, n in hits); counts['ambiguous'] += 1
        else:
            relations = syns.get(key, []); accepted_ids = {t['ID'] for t, n in osf_taxa}; qualifying = [(s, n, t) for s, n, t in relations if t and t['ID'] in accepted_ids and by_name.get(t.get('nameID'), {}).get('rank') == 'species']
            targets = {t['ID']: (s, n, t) for s, n, t in qualifying}
            invalid = [r for r in relations if not r[2] or r[2]['ID'] not in accepted_ids or by_name.get(r[2].get('nameID'), {}).get('rank') != 'species']
            if invalid:
                rec.update(status='withheld', mappingBasis='Explicit synonym evidence includes a missing, out-of-root or rank-changing target; no promotion is inferred.', candidates=[source_name(by_name[t['nameID']], t) for s, n, t in targets.values()], sourceRows=sum((rows_for(s, n, t, by_name.get(t.get('nameID')) if t else None) for s, n, t in relations), [])); evidenced.update(targets); counts['withheld'] += 1
            elif len(targets) == 1:
                s, n, t = next(iter(targets.values())); target_name = by_name[t['nameID']]; synonym_value = {'id': t['ID'], 'nameId': n['ID'], 'scientificName': n['scientificName'], 'authorship': n['authorship'] or '', 'status': 'synonym', 'url': ''}; value = source_name(target_name, t); rec.update(status='redirect', matchedName=synonym_value, acceptedName=value, mappingBasis='Explicit OSF Synonym.tsv relation to an accepted species target.', sourceRows=rows_for(s, n, t, target_name)); evidenced.add(t['ID']); counts['redirect'] += 1
            elif len(targets) > 1:
                rec.update(status='ambiguous', mappingBasis='Explicit OSF synonym evidence has multiple accepted species targets.', candidates=[source_name(by_name[t['nameID']], t) for s, n, t in targets.values()], sourceRows=sum((rows_for(s, n, t) for s, n, t in qualifying), [])); evidenced.update(targets); counts['ambiguous'] += 1
            else:
                rec.update(status='unmatched', mappingBasis='No exact accepted-name or qualifying OSF species synonym relation.', sourceRows=sum((rows_for(s, n, t) for s, n, t in relations), [])); counts['unmatched'] += 1
        records.append(rec)
    upstream = []
    for taxon, name in osf_taxa:
        if taxon['ID'] not in evidenced:
            value = source_name(name, taxon); upstream.append({'colId': None, 'colScientificName': None, 'colAuthorship': None, 'status': 'upstream-only', 'matchedName': value, 'acceptedName': value, 'candidates': [], 'mappingBasis': 'Accepted OSF species concept has no explicit COL crosswalk outcome.', 'sourceRows': rows_for(taxon, name)})
    upstream.sort(key=lambda x: x['matchedName']['id']); NOM.mkdir(parents=True, exist_ok=True)
    files = []
    for i, part in enumerate(chunks(records)):
        source = array_bytes(part); compressed = gzip.compress(source, compresslevel=9, mtime=0); path = NOM / f'osf-orthoptera-{i:03d}.json.gz'; path.write_bytes(compressed); files.append(descriptor_file(path, part, compressed, source))
    source = array_bytes(upstream); compressed = gzip.compress(source, compresslevel=9, mtime=0); upath = NOM / 'osf-orthoptera-upstream-only-000.json.gz'; upath.write_bytes(compressed); upstream_file = descriptor_file(upath, upstream, compressed, source); upstream_file.pop('minColId', None); upstream_file.pop('maxColId', None)
    package_count = json.loads((ROOT / 'data/registry/package-species-coverage.json').read_text(encoding='utf-8'))['packageCounts'][PACKAGE_ID]; manifest_path = REG / 'manifest.json'; manifest_bytes = manifest_path.read_bytes(); metadata_bytes = metadata_path.read_bytes()
    descriptor = {'schemaVersion': 1, 'id': 'osf-orthoptera-archive-crosswalk', 'recordType': 'release-pinned-authority-archive-crosswalk', 'packageId': PACKAGE_ID, 'provider': 'Orthoptera Species File via ChecklistBank', 'rowEncoding': 'json', 'colIdField': 'colId', 'totalCountField': 'total', 'source': {'version': acquisition['version'], 'versionDoi': acquisition['versionDoi'], 'license': 'CC-BY-4.0', 'archiveUrl': acquisition['archiveUrl'], 'archiveBytes': len(archive_bytes), 'archiveSha256': digest(archive_bytes), 'members': {k: {'bytes': len(v), 'sha256': digest(v)} for k, v in members.items()}, 'acquisitionPath': repo(ACQ), 'ledgerPath': 'data/sources/osf-orthoptera-archive-crosswalk-import-ledger.json'}, 'scope': {'colRootUsageId': COL_ROOT, 'colRootScientificName': 'Orthoptera Olivier, 1789', 'colStrictAcceptedSpecies': len(col), 'packageStrictAcceptedSpecies': package_count, 'packageOutOfScopeStrictAcceptedSpecies': package_count-len(col), 'osfOtuRootId': OSF_ROOT, 'osfTaxonNameRootId': OSF_NAME_ROOT, 'boundary': 'This mixed package sidecar covers only strict accepted COL species below CJBKK and accepted OSF species below OTU 805980; all other package species are excluded.'}, 'matching': {'normalization': 'Remove only the exact trailing COL authorship suffix when present; compare remaining scientific name and authorship exactly, preserving source text.', 'prohibited': 'No fuzzy, case-folded, accent-folded, subgenus-removed, token-reordered or concept-equivalence matching.'}, 'counts': {'total': len(records), **counts, 'upstreamOnly': len(upstream)}, 'files': files, 'upstreamOnlyFiles': [upstream_file], 'evidenceBoundary': {'en': 'A frozen exact nomenclatural crosswalk, not a species-concept equivalence assertion, complete Orthoptera checklist, classification authority or biological dossier.', 'zh': '冻结的严格命名交叉映射；不是物种概念等同性声明、完整直翅目名录、分类权威或生物档案。'}, 'limitations': ['OSF OTU IDs and TaxonName IDs are distinct and retained separately.', 'Archive attempt/version is recorded from acquisition evidence; the URL is not claimed immutable.', 'Unmatched and ambiguous COL rows and OSF-only accepted concepts remain explicit.']}
    descriptor['source']['acquisitionPath'] = 'external source-cache/osf-1021-2026-09-04/acquisition.json'
    descriptor['source']['metadataSha256'] = digest(metadata_bytes)
    descriptor_bytes = dump(descriptor); DESCRIPTOR.write_bytes(descriptor_bytes)
    ledger = {'schemaVersion': 1, 'importType': 'COL26.8-to-OSF-Sep-2026-exact-orthoptera-crosswalk', 'generatedFrom': {'acquisitionPath': repo(ACQ), 'acquisitionSha256': digest(acquisition_bytes), 'archivePath': 'external source-cache/dataset-1021.zip', 'archiveSha256': digest(archive_bytes), 'registryManifestPath': repo(manifest_path), 'registryManifestSha256': digest(manifest_bytes)}, 'sourceMembers': {k: {'rows': len(v), 'sha256': digest(members[k]), 'rowConvention': 'one-based physical TSV row including header'} for k, v in (('Name.tsv', names), ('Taxon.tsv', taxa), ('Synonym.tsv', synonyms))}, 'totals': descriptor['counts'], 'output': {'descriptor': {'path': repo(DESCRIPTOR), 'bytes': len(descriptor_bytes), 'sha256': digest(descriptor_bytes)}, 'files': files, 'upstreamOnly': upstream_file}, 'generatedBy': {'scriptPath': 'scripts/build-osf-orthoptera-sidecar.py', 'deterministic': True}}
    ledger['generatedFrom']['acquisitionPath'] = 'external source-cache/osf-1021-2026-09-04/acquisition.json'
    for member in ledger['sourceMembers'].values(): member['rowConvention'] = 'one-based logical TSV record ordinal including header'
    ledger['sourceMetadata'] = {'key': metadata['key'], 'attempt': metadata['attempt'], 'version': metadata['version'], 'versionDoi': metadata['versionDoi'], 'issued': metadata['issued'], 'sha256': digest(metadata_bytes)}
    LEDGER.write_bytes(dump(ledger)); print(json.dumps({'counts': descriptor['counts'], 'files': len(files)}, indent=2))

if __name__ == '__main__': main()
