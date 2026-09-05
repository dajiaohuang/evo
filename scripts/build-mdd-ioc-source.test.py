import gzip
import hashlib
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location('mdd_ioc', Path(__file__).with_name('build-mdd-ioc-source.py'))
MOD = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MOD)


class MddIocProjectionTests(unittest.TestCase):
    def test_two_replays_are_byte_identical_and_match_canonical_outputs(self):
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            for output in (Path(one), Path(two)):
                col, parents, registry_sha, registry_inputs = MOD.read_col()
                for key in ('mdd', 'ioc'):
                    MOD.build_one(MOD.SOURCES[key], col, parents, registry_sha, registry_inputs, output)
            for prefix in ('mdd-mammalia', 'ioc-aves'):
                config = MOD.SOURCES['mdd' if prefix.startswith('mdd-') else 'ioc']
                canonical = ROOT / config['outputPath']
                roots = [Path(one) / config['outputPath'], Path(two) / config['outputPath']]
                names = sorted(path.name for path in roots[0].glob(f'{prefix}*.json*'))
                self.assertEqual(names, sorted(path.name for path in roots[1].glob(f'{prefix}*.json*')))
                for name in names:
                    self.assertEqual((roots[0] / name).read_bytes(), (roots[1] / name).read_bytes(), name)
                    self.assertEqual((roots[0] / name).read_bytes(), (canonical / name).read_bytes(), f'canonical {name}')
                descriptor = json.loads((roots[0] / f'{prefix}-sidecar.json').read_text(encoding='utf-8'))
                expected = {
                    'mdd-mammalia': {'total': 6461, 'accepted': 5026, 'ambiguous': 0, 'unmatched': 1435,
                                     'upstreamOnly': 1775, 'records': 8236, 'source': 6801},
                    'ioc-aves': {'total': 11044, 'accepted': 10624, 'ambiguous': 0, 'unmatched': 420,
                                 'upstreamOnly': 626, 'records': 11670, 'source': 11250},
                }[prefix]
                self.assertEqual(descriptor['packageId'], config['packageId'])
                self.assertEqual(descriptor['source']['license'], 'cc by')
                self.assertEqual(descriptor['source']['archiveLicense'], 'CC-BY')
                self.assertNotIn('licenseUrl', descriptor['source'])
                self.assertEqual(descriptor['counts']['total'], expected['total'])
                self.assertEqual(descriptor['counts']['accepted'], expected['accepted'])
                self.assertEqual(descriptor['counts']['ambiguous'], expected['ambiguous'])
                self.assertEqual(descriptor['counts']['unmatched'], expected['unmatched'])
                self.assertEqual(descriptor['counts']['upstreamOnly'], expected['upstreamOnly'])
                self.assertEqual(descriptor['counts']['records'], expected['records'])
                self.assertEqual(descriptor['scope']['sourceStrictAcceptedSpecies'], expected['source'])
                self.assertEqual(descriptor['deliveryProfiles']['web-light']['files'], [])
                self.assertEqual(descriptor['deliveryProfiles']['web-light']['records'], 0)
                payload_files = descriptor['files'] + descriptor['upstreamOnlyFiles']
                self.assertEqual(sum(item['records'] for item in descriptor['files']), expected['total'])
                self.assertEqual(sum(item['records'] for item in descriptor['upstreamOnlyFiles']), expected['upstreamOnly'])
                self.assertTrue(all(item['sourceBytes'] <= MOD.SHARD_LIMIT for item in payload_files))
                rows = []
                for item in payload_files:
                    payload = gzip.decompress((roots[0] / item['path'].split('/')[-1]).read_bytes())
                    self.assertEqual(hashlib.sha256((roots[0] / item['path'].split('/')[-1]).read_bytes()).hexdigest(), item['sha256'])
                    self.assertEqual(len(payload), item['sourceBytes'])
                    rows.extend(json.loads(payload))
                self.assertEqual(len(rows), expected['records'])
                self.assertTrue(all(row['status'] in ('accepted', 'unmatched', 'ambiguous', 'upstream-only') for row in rows))
                self.assertTrue(all('authorship is removed exactly but is not matched' in row['mappingBasis'] for row in rows))
                self.assertTrue(all('sourceStatus' in row['matchedName'] for row in rows if row['matchedName']))
                self.assertEqual(sum(row['status'] == 'upstream-only' for row in rows), expected['upstreamOnly'])
                self.assertTrue(all(row['colId'] is None for row in rows if row['status'] == 'upstream-only'))
                self.assertEqual(len({row['colId'] for row in rows if row['colId'] is not None}), expected['total'])


if __name__ == '__main__':
    unittest.main()
