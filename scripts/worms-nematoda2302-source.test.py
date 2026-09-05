"""Focused offline checks for the frozen Nematoda 2302 projection."""
import gzip
import csv
import io
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
        descriptor = json.loads((OUT / f'{PREFIX}-sidecar.json').read_text(encoding='utf-8'))
        self.assertEqual(descriptor['source']['license'], 'cc by')
        self.assertEqual(descriptor['source']['doi'], '10.48580/d4rf')
        self.assertEqual(descriptor['source']['embeddedMetadata']['doi'], '10.14284/366')
        self.assertEqual(descriptor['source']['embeddedMetadata']['license'], 'CC-BY')
        self.assertEqual(descriptor['source']['metadataConsistency']['status'], 'mismatch')
        with zipfile.ZipFile(ARCHIVE) as archive:
            embedded = archive.read('metadata.yml')
        self.assertEqual(descriptor['source']['embeddedMetadata']['sha256'], hashlib.sha256(embedded).hexdigest())
        self.assertEqual(descriptor['source']['embeddedMetadata']['bytes'], len(embedded))

    def test_counts_roles_and_payload_bounds(self):
        descriptor = json.loads((OUT / f'{PREFIX}-sidecar.json').read_text(encoding='utf-8'))
        self.assertEqual(descriptor['scope']['eligibleColSpecies'], 19604)
        self.assertEqual(descriptor['scope']['sourceAcceptedSpecies'], 20810)
        self.assertEqual(descriptor['scope']['sourceRootAphiaId'], '799')
        self.assertEqual(descriptor['scope']['sourceRootAphiaIdRole'],
                         'audit-only parent-closure subset; explicit-phylum rows outside this closure are retained')
        self.assertEqual(descriptor['scope']['sourceScope'], {
            'criterion': 'Accepted Species rows with explicit Taxon.phylum=Nematoda; parent closure is not required for retention.',
            'acceptedSpecies': 20810,
            'sourceOnlySpecies': 1256,
            'sourceOnlyOutsideAphiaClosure': 1163,
            'sourceOnlyWithinAphiaClosure': 93,
        })
        self.assertEqual(descriptor['scope']['aphiaClosureScope'], {
            'criterion': 'Accepted Species rows whose Taxon parent chain reaches Aphia 799; this is an audit subset of the explicit-phylum scope.',
            'rootAphiaId': '799',
            'acceptedSpecies': 19647,
            'matchableSpecies': 19647,
            'sourceOnlySpecies': 93,
            'outsideClosureRetainedByPhylumScope': 1163,
        })
        self.assertEqual(descriptor['counts'], {
            'total': 19604, 'accepted': 19554, 'ambiguous': 1,
            'unmatched': 49, 'sourceOnly': 1256, 'upstreamOnly': 1256,
            'records': 20860,
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
        self.assertEqual(sum(row['status'] == 'unmatched' and not row['sourceRows'] for row in rows), 49)
        self.assertEqual(sum(row['status'] == 'unmatched' and not row['references'] for row in rows), 49)
        source_only = json.loads(gzip.decompress((OUT / f'{PREFIX}-source-only-000.json.gz').read_bytes()))
        self.assertEqual(len(source_only), 1256)
        self.assertTrue(all(row['status'] == 'source-only' for row in source_only))

    def test_missing_higher_classification_does_not_discard_exact_names(self):
        with zipfile.ZipFile(ARCHIVE) as archive:
            taxa = csv.DictReader(io.TextIOWrapper(archive.open('Taxon.txt'), encoding='utf-8-sig'), delimiter='\t')
            incomplete = {row['ID'] for row in taxa if row.get('phylum') == 'Nematoda'
                          and (not row.get('order') or not row.get('family'))}
        rows = []
        for path in sorted(OUT.glob(f'{PREFIX}-0??.json.gz')):
            rows.extend(json.loads(gzip.decompress(path.read_bytes())))
        matched = [row for row in rows if (row.get('acceptedName') or {}).get('taxonId') in incomplete]
        self.assertEqual(len(matched), 18)
        self.assertTrue(all(row['status'] == 'accepted' and row['sourceRows'] for row in matched))


if __name__ == '__main__':
    unittest.main()
