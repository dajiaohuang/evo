"""Compare byte-pinned COL DwCA releases without changing the active registry.

The disk-backed join bounds memory. Correspondences describe checklist records,
not biological concept identity; ambiguous keys and source changes stay unresolved.
"""
import argparse
from collections import Counter, defaultdict
from contextlib import closing
import gzip
import hashlib
from io import BytesIO
import json
from pathlib import Path
import sqlite3
import tempfile
import time
import zipfile


FIELDS = ('id', 'source', 'rank', 'name', 'authorship', 'status', 'target', 'parent')
DWCA_FIELDS = ('taxonID', 'datasetID', 'taxonRank', 'scientificName',
               'scientificNameAuthorship', 'taxonomicStatus', 'acceptedNameUsageID',
               'parentNameUsageID')
RESOLVING = {'synonym', 'ambiguous synonym', 'misapplied'}
LIMIT = 1024 * 1024


def digest_file(path):
    with Path(path).open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def encode(value):
    return (json.dumps(value, ensure_ascii=False, separators=(',', ':')) + '\n').encode('utf-8')


def load_archive(db, table, archive, expected_sha):
    actual_sha = digest_file(archive)
    if actual_sha != expected_sha:
        raise ValueError(f'{table} archive SHA-256 mismatch: {actual_sha}')
    db.execute(f'CREATE TABLE {table} (id TEXT PRIMARY KEY, source TEXT, rank TEXT, '
               'name TEXT, authorship TEXT, status TEXT, target TEXT, parent TEXT) WITHOUT ROWID')
    count, species_statuses = 0, Counter()
    taxon_hash = hashlib.sha256()
    with zipfile.ZipFile(archive) as source:
        member = source.getinfo('Taxon.tsv')
        with source.open(member) as stream:
            header = stream.readline()
            taxon_hash.update(header)
            names = [x.split(':')[-1] for x in header.decode('utf-8-sig').rstrip('\r\n').split('\t')]
            indexes = [names.index(field) for field in DWCA_FIELDS]
            pending = []
            for raw in stream:
                taxon_hash.update(raw)
                line = raw.decode('utf-8').rstrip('\r\n')
                if not line:
                    continue
                columns = line.split('\t')
                row = tuple(columns[index] for index in indexes)
                if not row[0] or not row[3]:
                    raise ValueError(f'{table}: missing identifier or scientific name at row {count + 2}')
                pending.append(row)
                count += 1
                if row[2] == 'species':
                    species_statuses[row[5]] += 1
                if len(pending) >= 10000:
                    db.executemany(f'INSERT INTO {table} VALUES (?,?,?,?,?,?,?,?)', pending)
                    pending.clear()
            db.executemany(f'INSERT INTO {table} VALUES (?,?,?,?,?,?,?,?)', pending)
        source_members = [{'path': item.filename, 'bytes': item.file_size,
                           'sha256': hashlib.sha256(source.read(item)).hexdigest()}
                          for item in sorted(source.infolist(), key=lambda item: item.filename)
                          if item.filename.startswith('dataset/') and item.filename.endswith('.xml')]
    db.commit()
    db.execute(f'CREATE INDEX {table}_signature ON {table}(source,rank,name,authorship,status)')
    return {'bytes': Path(archive).stat().st_size, 'sha256': actual_sha, 'nameUsages': count,
            'speciesStatuses': dict(sorted(species_statuses.items())),
            'taxonMember': {'path': member.filename, 'bytes': member.file_size,
                            'sha256': taxon_hash.hexdigest()}, 'sourceMembers': source_members}


def match_records(db):
    db.execute('CREATE TABLE matches (old_id TEXT PRIMARY KEY, new_id TEXT UNIQUE, basis TEXT) WITHOUT ROWID')
    # A reused ID from a different source is not assumed to identify the same record.
    db.execute("INSERT INTO matches SELECT o.id,n.id,'same-source-usage-id' FROM old o "
               "JOIN new n ON n.id=o.id AND n.source=o.source WHERE o.source<>''")
    for table in ('old', 'new'):
        db.execute(f'CREATE TABLE {table}_unique AS SELECT source,rank,name,authorship,status, '
                   f'MIN(id) AS id FROM {table} WHERE source<>\'\' '
                   'GROUP BY source,rank,name,authorship,status HAVING COUNT(*)=1')
        db.execute(f'CREATE INDEX {table}_unique_signature ON {table}_unique(source,rank,name,authorship,status)')
    db.execute("INSERT INTO matches SELECT o.id,n.id,'unique-exact-source-name-status' "
               'FROM old_unique o JOIN new_unique n USING(source,rank,name,authorship,status) '
               'WHERE NOT EXISTS(SELECT 1 FROM matches m WHERE m.old_id=o.id) '
               'AND NOT EXISTS(SELECT 1 FROM matches m WHERE m.new_id=n.id)')
    db.commit()


def is_accepted(row):
    return row is not None and row['rank'] == 'species' and row['status'] == 'accepted'


def changes_for(old, new, basis, mapped_target=None, new_target_matched=False):
    flags = []
    accepted_before, accepted_after = is_accepted(old), is_accepted(new)
    if accepted_after and not accepted_before:
        flags.append('addedAccepted')
    if accepted_before and not accepted_after:
        flags.append('noLongerAccepted')
        if new and new['rank'] == 'species' and new['status'] in RESOLVING and new['target']:
            flags.append('synonymized')
    if old and new:
        if old['id'] != new['id']:
            flags.append('idReplacedOrUnstable')
        if accepted_before and accepted_after:
            if (old['name'], old['authorship']) != (new['name'], new['authorship']):
                flags.append('nameOrAuthorshipChanged')
            if old['parent'] != new['parent']:
                flags.append('parentRecordChanged')
        if old['rank'] == new['rank'] == 'species' and old['status'] in RESOLVING and new['status'] in RESOLVING:
            if mapped_target == new['target']:
                if old['target'] != new['target']:
                    flags.append('synonymTargetIdReplaced')
            elif mapped_target is not None and new_target_matched:
                flags.append('synonymRepointed')
            else:
                # Even an unchanged target ID is uncertain if its source has changed.
                flags.append('synonymTargetUnresolved')
            if old['status'] != new['status']:
                flags.append('resolvingStatusChanged')
    if not flags:
        return None
    return {'changes': flags, 'correspondence': basis, 'before': old, 'after': new}


def changed_records(db):
    fields = ','.join(f'{alias}.{field}' for alias in ('o', 'n') for field in FIELDS)
    query = (f'SELECT {fields},m.basis,target.new_id,newtarget.old_id FROM matches m '
             'JOIN old o ON o.id=m.old_id JOIN new n ON n.id=m.new_id '
             'LEFT JOIN matches target ON target.old_id=o.target '
             'LEFT JOIN matches newtarget ON newtarget.new_id=n.target '
             "WHERE o.rank='species' OR n.rank='species' ORDER BY m.old_id")
    for row in db.execute(query):
        record = changes_for(dict(zip(FIELDS, row[:8])), dict(zip(FIELDS, row[8:16])),
                             row[16], row[17], row[18] is not None)
        if record:
            yield record
    for table, other, side in [('old', 'old_id', 'before'), ('new', 'new_id', 'after')]:
        for row in db.execute(f'SELECT * FROM {table} t WHERE rank=\'species\' AND status=\'accepted\' '
                              f'AND NOT EXISTS(SELECT 1 FROM matches m WHERE m.{other}=t.id) ORDER BY id'):
            value = dict(zip(FIELDS, row))
            yield changes_for(value if side == 'before' else None,
                              value if side == 'after' else None, 'unresolved-correspondence')


def write_changes(records, output):
    files, buffer, counts, examples = [], bytearray(), Counter(), defaultdict(list)
    record_count = 0

    def flush():
        nonlocal buffer, record_count
        if not buffer:
            return
        raw = bytes(buffer)
        stream = BytesIO()
        # GzipFile keeps a fixed OS byte across Python 3.11+ and Windows/Linux.
        with gzip.GzipFile(filename='', mode='wb', fileobj=stream, compresslevel=9, mtime=0) as compressor:
            compressor.write(raw)
        packed = stream.getvalue()
        name = f'changes-{len(files):04d}.jsonl.gz'
        (output / name).write_bytes(packed)
        files.append({'path': name, 'records': record_count, 'bytes': len(packed),
                      'sourceBytes': len(raw), 'sha256': hashlib.sha256(packed).hexdigest(),
                      'sourceSha256': hashlib.sha256(raw).hexdigest()})
        buffer, record_count = bytearray(), 0

    for record in records:
        raw = encode(record)
        if buffer and len(buffer) + len(raw) > LIMIT:
            flush()
        buffer.extend(raw)
        record_count += 1
        for category in record['changes']:
            counts[category] += 1
            if len(examples[category]) < 5:
                examples[category].append(record)
    flush()
    return files, dict(sorted(counts.items())), dict(sorted(examples.items()))


def compare(old_archive, new_archive, old_provenance, new_provenance, output, scratch=None):
    output = Path(output)
    if output.exists() and any(output.iterdir()):
        raise ValueError('Output must be empty; existing comparison artifacts are never overwritten')
    for provenance in (old_provenance, new_provenance):
        if provenance.get('releaseFlavor') != 'base' or provenance.get('origin') != 'release':
            raise ValueError('Both inputs must identify immutable Base releases')
    if old_provenance['releaseDate'] >= new_provenance['releaseDate']:
        raise ValueError('The comparison requires two different releases in chronological order')
    output.mkdir(parents=True, exist_ok=True)
    started = time.monotonic()
    with tempfile.TemporaryDirectory(prefix='evo-col-diff-', dir=scratch) as directory:
        with closing(sqlite3.connect(str(Path(directory) / 'comparison.sqlite'))) as db:
            # This disposable database can be rebuilt entirely from pinned archives.
            db.execute('PRAGMA journal_mode=OFF')
            db.execute('PRAGMA synchronous=OFF')
            db.execute('PRAGMA temp_store=FILE')
            db.execute('PRAGMA cache_size=-65536')
            inputs = []
            for table, archive, provenance in [('old', old_archive, old_provenance), ('new', new_archive, new_provenance)]:
                print(f'Reading {provenance["releaseAlias"]}...', flush=True)
                audit = load_archive(db, table, archive, provenance['archive']['computedSha256'])
                if audit['nameUsages'] != provenance['nameUsageCount']:
                    raise ValueError(f'{table}: name usage count differs from pinned metadata')
                if 'acceptedSpeciesCount' in provenance and audit['speciesStatuses'].get('accepted', 0) != provenance['acceptedSpeciesCount']:
                    raise ValueError(f'{table}: strict accepted count differs from pinned provenance')
                inputs.append({'provenance': provenance, 'audit': audit})
            print('Joining source-scoped records and resolving identifier changes...', flush=True)
            match_records(db)
            files, summary, examples = write_changes(changed_records(db), output)
            matched = dict(db.execute('SELECT basis,COUNT(*) FROM matches GROUP BY basis'))
            source_changes = db.execute('SELECT COUNT(*) FROM old o JOIN new n USING(id) WHERE o.source<>n.source').fetchone()[0]
            old_accepted = inputs[0]['audit']['speciesStatuses'].get('accepted', 0)
            new_accepted = inputs[1]['audit']['speciesStatuses'].get('accepted', 0)
            if new_accepted - old_accepted != summary.get('addedAccepted', 0) - summary.get('noLongerAccepted', 0):
                raise ValueError('Accepted-species accounting does not reconcile')
            result = {'schemaVersion': 1, 'comparisonStatus': 'complete-record-comparison',
                      'fromRelease': old_provenance['releaseAlias'], 'toRelease': new_provenance['releaseAlias'],
                      'inputs': inputs, 'counts': {'acceptedBefore': old_accepted, 'acceptedAfter': new_accepted,
                                                 'acceptedNetChange': new_accepted - old_accepted,
                                                 'matchedRecords': matched, 'sharedIdsWithDifferentSources': source_changes},
                      'summary': summary, 'files': files, 'examples': examples,
                      'interpretation': [
                          'This is a comparison of versioned nomenclatural records, not biological species-concept equivalence or evolutionary change.',
                          'Same IDs are joined only within the same nonempty source dataset. Remaining records require a globally unique, exact source/rank/name/authorship/status key in each release; no fuzzy matching is used.',
                          'Unresolved correspondence contributes unmatched additions or losses; these are not claims of newly discovered species or extinction.',
                          'Name/authorship changes are reported verbatim; recombination is not asserted without an explicit nomenclatural relation.',
                          'Synonym targets are compared through the record correspondence, so target ID churn alone is not a synonym reassignment. Missing correspondence is reported separately.',
                          'The active application registry, package ownership, sources, authority sidecars and dossier maturity remain pinned to their existing release.',
                          'Change categories may overlap. Parent-record differences are raw identifier changes, not a phylogenetic inference.',
                      ]}
            (output / 'manifest.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({'summary': summary, 'files': len(files), 'seconds': round(time.monotonic()-started, 2)}), flush=True)
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--from-archive', required=True, type=Path)
    parser.add_argument('--to-archive', required=True, type=Path)
    parser.add_argument('--from-provenance', required=True, type=Path)
    parser.add_argument('--to-provenance', required=True, type=Path)
    parser.add_argument('--out', required=True, type=Path)
    parser.add_argument('--scratch', type=Path)
    args = parser.parse_args()
    compare(args.from_archive, args.to_archive,
            json.loads(args.from_provenance.read_text(encoding='utf-8')),
            json.loads(args.to_provenance.read_text(encoding='utf-8')), args.out, args.scratch)
