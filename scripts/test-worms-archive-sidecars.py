"""Focused importer fixtures; independent of downloaded archives."""
import importlib.util
import tempfile
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location('worms', Path(__file__).with_name('build-worms-archive-sidecars.py'))
worms = importlib.util.module_from_spec(spec)
spec.loader.exec_module(worms)


def source(tid, ordinal, status='accepted', target='', name='Alpha beta'):
    return {'taxonID': 'urn:lsid:marinespecies.org:taxname:' + tid,
            'scientificName': name, 'scientificNameAuthorship': 'Author, 1900',
            'taxonomicStatus': status, 'acceptedNameUsageID': target, '_ordinal': ordinal}


class MatchingTests(unittest.TestCase):
    col = {'id': 'COL1', 'scientificName': 'Alpha beta Author, 1900', 'authorship': 'Author, 1900'}

    def test_exact_suffix_and_no_fuzzy_normalization(self):
        self.assertEqual(worms.col_bare(self.col), 'Alpha beta')
        self.assertEqual(worms.col_bare({**self.col, 'scientificName': 'Alpha betaAuthor, 1900'}), 'Alpha betaAuthor, 1900')
        self.assertNotEqual(worms.name_key('Álpha beta', ''), worms.name_key('Alpha beta', ''))
        self.assertNotEqual(worms.name_key('Alpha_beta', ''), worms.name_key('Alpha beta', ''))

    def test_direct_has_no_duplicate_candidates(self):
        row = source('1', 2)
        record, targets = worms.match_record(self.col, [row], {'1': row})
        self.assertEqual(record['status'], 'accepted')
        self.assertEqual(record['candidates'], [])
        self.assertEqual(targets, {'1'})

    def test_redirect_retains_source_and_accepted_locators(self):
        old, current = source('2', 3, 'unaccepted', '1'), source('1', 2, name='Other name')
        record, _ = worms.match_record(self.col, [old], {'1': current})
        self.assertEqual(record['status'], 'redirect')
        self.assertNotEqual(record['matchedName']['id'], record['acceptedName']['id'])
        self.assertEqual(record['sourceRows'], [{'member': 'taxon.txt', 'row': 2}, {'member': 'taxon.txt', 'row': 3}])

    def test_ambiguity_never_selects_first_candidate(self):
        one, two = source('1', 2), source('2', 3)
        record, targets = worms.match_record(self.col, [one, two], {'1': one, '2': two})
        self.assertEqual(record['status'], 'ambiguous')
        self.assertIsNone(record['acceptedName'])
        self.assertIsNone(record['matchedName'])
        self.assertEqual(len(record['candidates']), 2)
        self.assertEqual(targets, {'1', '2'})

    def test_mixed_invalid_target_is_withheld_not_promoted(self):
        one, invalid = source('1', 2), source('2', 3, 'unaccepted', 'missing-or-other-rank')
        record, targets = worms.match_record(self.col, [one, invalid], {'1': one})
        self.assertEqual(record['status'], 'withheld')
        self.assertIsNone(record['acceptedName'])
        self.assertEqual(targets, {'1'})
        empty, _ = worms.match_record(self.col, [], {})
        self.assertEqual(empty['status'], 'unmatched')

    def test_root_closure_and_scoped_shard_cleanup(self):
        self.assertEqual(worms.root_for('species', {'species': 'genus', 'genus': '51'}, {'51'}), '51')
        self.assertIsNone(worms.root_for('a', {'a': 'b', 'b': 'a'}, {'51'}))
        with tempfile.TemporaryDirectory() as tmp:
            directory = Path(tmp)
            (directory / 'worms-test-999.json.gz').touch()
            (directory / 'other-999.json.gz').touch()
            files, upstream = worms.write_shards(directory, 'worms-test', [{'colId': 'X'}], [])
            self.assertEqual(upstream, [])
            self.assertFalse((directory / 'worms-test-999.json.gz').exists())
            self.assertTrue((directory / 'other-999.json.gz').exists())
            data = (directory / Path(files[0]['path']).name).read_bytes()
            self.assertEqual(data[9], 255)

    def test_default_scope_is_unchanged_and_radiozoa_is_opt_in(self):
        self.assertEqual(tuple(worms.LEGACY_SPECS), ('mollusca', 'porifera', 'cnidaria'))
        self.assertEqual(worms.SPECS['radiozoa'][1:], ('5X', '582421', 'Radiozoa', 444))
        self.assertEqual(worms.output_directory('radiozoa', 'protists-chromists').as_posix().split('/')[-2:], ['resource-packs', 'protists-chromists'])


if __name__ == '__main__':
    unittest.main()
