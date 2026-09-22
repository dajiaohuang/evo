import gzip
import hashlib
import importlib.util
import json
from pathlib import Path
import sqlite3
import tempfile
import unittest
import zipfile

spec = importlib.util.spec_from_file_location('col_diff', Path(__file__).with_name('compare-col-releases.py'))
diff = importlib.util.module_from_spec(spec)
spec.loader.exec_module(diff)


def row(identifier, name='Abies alba', source='10', rank='species', status='accepted', target='', parent=''):
    return (identifier, source, rank, name, 'Author', status, target, parent)


def archive(path, rows):
    data = ('\t'.join('dwc:' + field for field in diff.DWCA_FIELDS) + '\n'
            + ''.join('\t'.join(value) + '\n' for value in rows)).encode('utf-8')
    with zipfile.ZipFile(path, 'w') as output:
        output.writestr('Taxon.tsv', data)
        output.writestr('dataset/10.xml', '<dataset><title>Fixture</title></dataset>')
    return hashlib.sha256(path.read_bytes()).hexdigest()


class ReleaseComparison(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)

    def database(self, before, after):
        db = sqlite3.connect(':memory:')
        self.addCleanup(db.close)
        for table, rows in [('old', before), ('new', after)]:
            path = self.root / f'{table}.zip'
            expected = archive(path, rows)
            diff.load_archive(db, table, path, expected)
        diff.match_records(db)
        return db

    def test_id_churn_does_not_create_additions_losses_or_synonym_reassignment(self):
        db = self.database([row('a'), row('s', 'Pinus alba', status='synonym', target='a')],
                           [row('b'), row('s', 'Pinus alba', status='synonym', target='b')])
        records = list(diff.changed_records(db))
        self.assertEqual([record['changes'] for record in records],
                         [['idReplacedOrUnstable'], ['synonymTargetIdReplaced']])

    def test_distinguishes_source_record_rename_status_and_target_changes(self):
        db = self.database([row('a'), row('b', 'Abies beta'), row('c', 'Old name'),
                            row('s', 'Synonym', status='synonym', target='a')],
                           [row('a', 'Abies renamed'), row('b', 'Abies beta'),
                            row('c', 'Old name', status='synonym', target='b'),
                            row('s', 'Synonym', status='synonym', target='b')])
        changes = {r['before']['id']: r['changes'] for r in diff.changed_records(db)}
        self.assertEqual(changes['a'], ['nameOrAuthorshipChanged'])
        self.assertEqual(changes['c'], ['noLongerAccepted', 'synonymized'])
        self.assertEqual(changes['s'], ['synonymRepointed'])

    def test_source_reuse_missing_source_and_ambiguous_names_are_not_forced(self):
        db = self.database([row('reuse'), row('unknown', source=''), row('x'), row('y')],
                           [row('reuse', source='20'), row('unknown', source=''), row('z')])
        self.assertEqual(db.execute('SELECT COUNT(*) FROM matches').fetchone()[0], 0)
        records = list(diff.changed_records(db))
        self.assertEqual(sum('noLongerAccepted' in r['changes'] for r in records), 4)
        self.assertEqual(sum('addedAccepted' in r['changes'] for r in records), 3)

    def test_fallback_uniqueness_is_global_and_exact(self):
        db = self.database([row('same'), row('old'), row('case', 'Abies Béta')],
                           [row('same'), row('new'), row('case-new', 'Abies Beta')])
        self.assertEqual(list(db.execute('SELECT old_id,new_id FROM matches')), [('same', 'same')])

    def test_same_target_id_with_changed_source_is_unresolved(self):
        db = self.database([row('a'), row('s', 'Synonym', status='synonym', target='a')],
                           [row('a', source='20'), row('s', 'Synonym', status='synonym', target='a')])
        synonym = next(r for r in diff.changed_records(db) if r['before'] and r['before']['id'] == 's')
        self.assertEqual(synonym['changes'], ['synonymTargetUnresolved'])

    def test_rank_and_provisional_status_do_not_inflate_accepted_species(self):
        db = self.database([row('a'), row('p', status='provisionally accepted')],
                           [row('a', rank='subspecies'), row('p')])
        changes = {r['before']['id']: r['changes'] for r in diff.changed_records(db)}
        self.assertEqual(changes, {'a': ['noLongerAccepted'], 'p': ['addedAccepted']})

    def test_complete_report_is_reproducible_and_reconciles_counts(self):
        before = [row('a'), row('lost', 'Lost species')]
        after = [row('b'), row('new', 'New species'), row('extra', 'Extra species')]
        inputs = []
        for name, date, rows in [('old', '2026-08-20', before), ('new', '2026-09-11', after)]:
            path = self.root / f'{name}.zip'
            sha = archive(path, rows)
            inputs.append((path, {'releaseAlias': name, 'releaseDate': date, 'releaseFlavor': 'base',
                                 'origin': 'release', 'archive': {'computedSha256': sha}, 'nameUsageCount': len(rows)}))
        outputs = []
        for name in ('one', 'two'):
            result = diff.compare(inputs[0][0], inputs[1][0], inputs[0][1], inputs[1][1], self.root / name)
            outputs.append(result)
            records = []
            for descriptor in result['files']:
                packed = (self.root / name / descriptor['path']).read_bytes()
                self.assertEqual(hashlib.sha256(packed).hexdigest(), descriptor['sha256'])
                raw = gzip.decompress(packed)
                self.assertEqual(hashlib.sha256(raw).hexdigest(), descriptor['sourceSha256'])
                records.extend(json.loads(line) for line in raw.splitlines())
            self.assertEqual(len(records), 4)
            self.assertEqual(result['counts']['acceptedNetChange'], 1)
        self.assertEqual(outputs[0], outputs[1])
        with self.assertRaisesRegex(ValueError, 'never overwritten'):
            diff.compare(inputs[0][0], inputs[1][0], inputs[0][1], inputs[1][1], self.root / 'one')

    def test_rejects_mismatched_archive_and_duplicate_identifiers(self):
        path = self.root / 'input.zip'
        sha = archive(path, [row('duplicate'), row('duplicate')])
        with sqlite3.connect(':memory:') as db:
            with self.assertRaisesRegex(ValueError, 'SHA-256 mismatch'):
                diff.load_archive(db, 'old', path, '0' * 64)
            with self.assertRaises(sqlite3.IntegrityError):
                diff.load_archive(db, 'old', path, sha)


if __name__ == '__main__':
    unittest.main()
