"""Focused offline checks for the frozen Nematoda 2302 projection."""
import gzip
import hashlib
import json
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / 'data/sources/archives/checklistbank-2302-nematoda-2026-09-01.zip'
METADATA = ROOT / 'data/sources/archives/checklistbank-2302-nematoda-2026-09-01.metadata.json'
OUT = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
PREFIX = 'worms-nematoda2302'


class Nematoda2302ProjectionTest(unittest.TestCase):
    def test_pinned_archive_metadata_and_all_members(self):
        raw = ARCHIVE.read_bytes()
        self.assertEqual(len(raw), 4107143)
        self.assertEqual(hashlib.sha256(raw).hexdigest(),
                         '11805c4e72c96130b626e12618ff70f938c2c825bfbb0aff22297c4bc925dd88')
        with zipfile.ZipFile(ARCHIVE) as archive:
            self.assertEqual(len(archive.namelist()), 12)
            self.assertEqual(len(set(archive.namelist())), 12)
            for member in archive.namelist():
                self.assertGreater(len(archive.read(member)), 0)
        metadata = json.loads(METADATA.read_text(encoding='utf-8'))
        self.assertEqual(metadata['key'], 2302)
        self.assertEqual(metadata['version'], '2026-09-01')
        self.assertEqual(metadata['versionDoi'], '10.48580/d4rf.v78')
        self.assertEqual(metadata['title'], 'Nemys: World Database of Nematodes')
        self.assertIn('editor', metadata)
        self.assertIn('contributor', metadata)

    def test_counts_roles_and_payload_bounds(self):
        descriptor = json.loads((OUT / f'{PREFIX}-sidecar.json').read_text(encoding='utf-8'))
        self.assertEqual(descriptor['scope']['eligibleColSpecies'], 19604)
        self.assertEqual(descriptor['scope']['sourceAcceptedSpecies'], 20810)
        self.assertEqual(descriptor['counts'], {
            'total': 19604, 'accepted': 19536, 'ambiguous': 1,
            'unmatched': 67, 'sourceOnly': 1274, 'upstreamOnly': 1274,
            'records': 20878,
        })
        self.assertTrue(descriptor['deliveryProfiles']['web-light']['mode'] == 'summary-only')
        self.assertTrue(descriptor['deliveryProfiles']['native-full']['mode'] == 'complete')
        for item in descriptor['files'] + descriptor['sourceOnlyFiles']:
            raw = gzip.decompress((OUT / Path(item['path']).name).read_bytes())
            self.assertLess(len(raw), 2 * 1024 * 1024)
            self.assertEqual(hashlib.sha256(raw).hexdigest(), item['sourceSha256'])
            compressed = gzip.compress(raw, compresslevel=9, mtime=0)
            compressed = compressed[:9] + bytes([255]) + compressed[10:]
            self.assertEqual(hashlib.sha256(compressed).hexdigest(), item['sha256'])

    def test_status_partitions_and_reference_evidence(self):
        rows = []
        for path in sorted(OUT.glob(f'{PREFIX}-0??.json.gz')):
            rows.extend(json.loads(gzip.decompress(path.read_bytes())))
        self.assertEqual(len(rows), 19604)
        self.assertEqual({row['status'] for row in rows}, {'accepted', 'ambiguous', 'unmatched'})
        self.assertTrue(all('sourceRows' in row and 'references' in row for row in rows))
        source_only = json.loads(gzip.decompress((OUT / f'{PREFIX}-source-only-000.json.gz').read_bytes()))
        self.assertEqual(len(source_only), 1274)
        self.assertTrue(all(row['status'] == 'source-only' for row in source_only))


if __name__ == '__main__':
    unittest.main()
