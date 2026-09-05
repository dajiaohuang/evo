import gzip
import hashlib
import json
import subprocess
import sys
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.zip'
META = ROOT / 'data/sources/archives/checklistbank-1008-reptiledb-2026-06.metadata.json'
SPECS = {
    'turtles-lepidosaurs': ROOT / 'data/packages/reptilia/turtles-lepidosaurs/nomenclature',
    'crocodylia': ROOT / 'data/packages/archosauria/crocodylomorphs-birds/nomenclature',
}

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

class ReptileDatabaseProjectionTests(unittest.TestCase):
    def test_pinned_archive_metadata_and_member_hashes(self):
        self.assertEqual(ARCHIVE.stat().st_size, 9581096)
        self.assertEqual(sha(ARCHIVE), '23e91315dca13a9b46b0c2b487d2921e5ccf2c274de294327fc4caeefb6b21ba')
        metadata = json.loads(META.read_bytes())
        self.assertEqual(metadata['key'], 1008)
        self.assertEqual(metadata['doi'], '10.48580/d37s')
        self.assertIsNone(metadata.get('versionDoi'))
        self.assertEqual(metadata['version'], '2026-06')
        self.assertEqual(metadata['license'], 'cc by')
        self.assertEqual(metadata['apiEndpoint'], 'https://api.checklistbank.org/dataset/1008')
        self.assertEqual(metadata['apiResponseBytes'], 1704)
        self.assertEqual(metadata['apiResponseSha256'], '47ca412c6122a5f9399fa65e9f13800da3215c7d2ec9383f40b26adcb382dc16')
        with zipfile.ZipFile(ARCHIVE) as archive:
            internal = archive.read('metadata.yaml').decode('utf-8')
            for line in ('key: 1008', 'doi: 10.48580/d37s', 'versionDoi: 10.48580/d37s.v31',
                         'title: The Reptile Database', 'issued: 2026-06-24', 'version: 2026-06', 'license: cc by'):
                self.assertIn(line, internal)
            self.assertEqual(set(archive.namelist()), {'Distribution.tsv', 'Name.tsv', 'Reference.tsv',
                                                        'Synonym.tsv', 'Taxon.tsv', 'VernacularName.tsv', 'metadata.yaml'})

    def test_exact_partition_counts_and_delivery_budget(self):
        expected = {
            'turtles-lepidosaurs': (12622, 12622, 1, 12623, 16),
            'crocodylia': (27, 27, 0, 27, 1),
        }
        ids = set()
        for partition, directory in SPECS.items():
            descriptor = json.loads((directory / f'reptiledb-{partition}-extension.json').read_bytes())
            total, accepted, upstream, records, file_count = expected[partition]
            self.assertEqual(descriptor['counts'], {'total': total, 'accepted': accepted, 'ambiguous': 0,
                                                     'unmatched': 0, 'withheld': 0, 'upstreamOnly': upstream,
                                                     'records': records})
            self.assertEqual(len(descriptor['files']), file_count)
            self.assertIsNone(descriptor['source']['versionDoi'])
            self.assertEqual(descriptor['source']['embeddedArchiveMetadata'], {
                'member': 'metadata.yaml', 'key': '1008', 'doi': '10.48580/d37s',
                'versionDoi': '10.48580/d37s.v31', 'title': 'The Reptile Database',
                'issued': '2026-06-24', 'version': '2026-06', 'license': 'cc by'})
            self.assertEqual(descriptor['source']['apiResponseSha256'], '47ca412c6122a5f9399fa65e9f13800da3215c7d2ec9383f40b26adcb382dc16')
            self.assertEqual(descriptor['source']['license'], 'cc by')
            self.assertNotIn('licenseUrl', descriptor['source'])
            self.assertEqual(descriptor['matching']['prohibited'],
                             'No fuzzy, case-folded, accent-folded, synonym, rank or species-concept matching.')
            self.assertEqual(descriptor['deliveryProfiles']['web-light']['records'], 0)
            self.assertEqual(descriptor['deliveryProfiles']['native-full']['records'], records)
            rows = []
            for item in descriptor['files'] + descriptor['upstreamOnlyFiles']:
                path = directory / item['path'].split('/', 1)[-1]
                compressed = path.read_bytes()
                self.assertEqual(len(compressed), item['bytes'])
                self.assertEqual(sha(path), item['sha256'])
                source = gzip.decompress(compressed)
                self.assertEqual(len(source), item['sourceBytes'])
                self.assertLessEqual(len(source), 2 * 1024 * 1024)
                self.assertEqual(item['mediaType'], 'application/x-ndjson')
                part = [json.loads(line) for line in source.splitlines() if line]
                self.assertEqual(len(part), item['records'])
                rows.extend(part)
            self.assertEqual(len(rows), records)
            for row in rows:
                if row['colId'] is not None:
                    ids.add(row['colId'])
                    self.assertEqual(row['status'], 'accepted')
        self.assertEqual(len(ids), 12649)

    def test_replay_is_byte_identical(self):
        before = {p.relative_to(ROOT).as_posix(): sha(p) for d in SPECS.values() for p in d.glob('reptiledb-*.json*')}
        for partition in SPECS:
            subprocess.run([sys.executable, str(Path(__file__).with_name('build-reptiledb-source.py')), partition],
                           check=True, cwd=ROOT, capture_output=True, text=True)
        after = {p.relative_to(ROOT).as_posix(): sha(p) for d in SPECS.values() for p in d.glob('reptiledb-*.json*')}
        self.assertEqual(before, after)

if __name__ == '__main__':
    unittest.main()
