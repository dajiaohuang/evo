import collections
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


MDD_EXPECTED = {
    'other-mammals': {'total': 5099, 'accepted': 3912, 'unmatched': 1187,
                      'upstreamOnly': 1664, 'records': 6763, 'source': 5576},
    'primates': {'total': 530, 'accepted': 484, 'unmatched': 46,
                 'upstreamOnly': 33, 'records': 563, 'source': 517},
    'cetartiodactyla': {'total': 503, 'accepted': 325, 'unmatched': 178,
                        'upstreamOnly': 46, 'records': 549, 'source': 371},
    'carnivora': {'total': 310, 'accepted': 289, 'unmatched': 21,
                  'upstreamOnly': 30, 'records': 340, 'source': 319},
    'perissodactyla': {'total': 19, 'accepted': 16, 'unmatched': 3,
                       'upstreamOnly': 2, 'records': 21, 'source': 18},
}

SOURCE_ONLY_ORDERS = {
    'Primates': 33, 'Carnivora': 30, 'Perissodactyla': 2, 'Artiodactyla': 46,
    'Rodentia': 1056, 'Chiroptera': 384, 'Didelphimorphia': 76,
    'Lagomorpha': 50, 'Eulipotyphla': 47, 'Dasyuromorphia': 20,
    'Peramelemorphia': 10, 'Diprotodontia': 10, 'Cingulata': 4,
    'Pholidota': 2, 'Monotremata': 1, 'Microbiotheria': 1,
    'Macroscelidea': 1, 'Afrosoricida': 1, 'Pilosa': 1,
}


def load_rows(root, descriptor):
    rows = []
    for item in descriptor['files'] + descriptor['upstreamOnlyFiles']:
        relative = item['path'].split('/')[-1]
        compressed = (root / relative).read_bytes()
        payload = gzip.decompress(compressed)
        assert hashlib.sha256(compressed).hexdigest() == item['sha256']
        assert len(payload) == item['sourceBytes']
        rows.extend(json.loads(payload))
    return rows


class MddIocProjectionTests(unittest.TestCase):
    def assert_replayed_files(self, first, second, canonical, descriptor, prefix):
        names = sorted(path.name for path in first.glob(f'{prefix}*.json*'))
        self.assertEqual(names, sorted(path.name for path in second.glob(f'{prefix}*.json*')))
        self.assertEqual(names, sorted(path.name for path in canonical.glob(f'{prefix}*.json*')))
        for name in names:
            self.assertEqual((first / name).read_bytes(), (second / name).read_bytes(), name)
            self.assertEqual((first / name).read_bytes(), (canonical / name).read_bytes(), f'canonical {name}')
        self.assertIn(f'{prefix}-sidecar.json', names)

    def test_two_replays_are_byte_identical_and_match_canonical_outputs(self):
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            outputs = []
            for output in (Path(one), Path(two)):
                col, parents, registry_sha, registry_inputs = MOD.read_col()
                mdd, mdd_ledger = MOD.build_mdd_packages(
                    MOD.SOURCES['mdd'], col, parents, registry_sha, registry_inputs, output)
                ioc = MOD.build_ioc_one(
                    MOD.SOURCES['ioc'], col, parents, registry_sha, registry_inputs, output)
                outputs.append((output, mdd, mdd_ledger, ioc))

            first_root, first_mdd, first_ledger, first_ioc = outputs[0]
            second_root, second_mdd, second_ledger, second_ioc = outputs[1]
            self.assertEqual(first_ledger, second_ledger)
            self.assertEqual(first_ledger['scopeAudit']['counts'], {
                'total': 6461, 'accepted': 5026, 'redirect': 0, 'ambiguous': 0,
                'unmatched': 1435, 'withheld': 0, 'upstreamOnly': 1775, 'records': 8236,
            })
            self.assertEqual(first_ledger['scopeAudit']['sourceSelectedSpecies'], 6801)
            self.assertNotIn('sourceStrictAcceptedSpecies', first_ledger['scopeAudit'])
            self.assertEqual(set(first_mdd), set(MDD_EXPECTED))
            self.assertEqual(first_ledger['scopeAudit']['packageCounts'], {
                package: {
                    'total': expected['total'], 'accepted': expected['accepted'],
                    'redirect': 0, 'ambiguous': 0, 'unmatched': expected['unmatched'],
                    'withheld': 0, 'upstreamOnly': expected['upstreamOnly'],
                    'records': expected['records'],
                }
                for package, expected in MDD_EXPECTED.items()
            })
            self.assertEqual(first_ledger['scopeAudit']['sourceOnlyRoutingCountsByOrder'],
                             dict(sorted(SOURCE_ONLY_ORDERS.items())))
            self.assertEqual(len(first_ledger['registryInputs']),
                             len({item['path'] for item in first_ledger['registryInputs']}))

            all_col_ids = []
            all_source_ids = []
            all_source_orders = collections.Counter()
            for package, expected in MDD_EXPECTED.items():
                descriptor = first_mdd[package]
                repeat_descriptor = second_mdd[package]
                config = MOD.MDD_PACKAGE_CONFIGS[package]
                first_dir = first_root / config['outputPath']
                second_dir = second_root / config['outputPath']
                canonical_dir = ROOT / config['outputPath']
                self.assert_replayed_files(first_dir, second_dir, canonical_dir, descriptor, config['prefix'])
                self.assertEqual(descriptor['packageId'], package)
                self.assertEqual(descriptor['source']['license'], 'cc by')
                self.assertEqual(descriptor['source']['archiveLicense'], 'CC-BY')
                self.assertNotIn('licenseUrl', descriptor['source'])
                self.assertEqual(descriptor['counts']['total'], expected['total'])
                self.assertEqual(descriptor['counts']['accepted'], expected['accepted'])
                self.assertEqual(descriptor['counts']['unmatched'], expected['unmatched'])
                self.assertEqual(descriptor['counts']['ambiguous'], 0)
                self.assertEqual(descriptor['counts']['upstreamOnly'], expected['upstreamOnly'])
                self.assertEqual(descriptor['counts']['records'], expected['records'])
                self.assertEqual(descriptor['scope']['sourceSelectedSpecies'], expected['source'])
                self.assertEqual(descriptor['scope']['sourceGlobalSelectedSpecies'], 6801)
                self.assertNotIn('sourceStrictAcceptedSpecies', descriptor['scope'])
                self.assertNotIn('sourceGlobalStrictAcceptedSpecies', descriptor['scope'])
                self.assertEqual(descriptor['scope']['sourcePackageRoutedSpecies'], expected['source'])
                self.assertEqual(descriptor['scope']['colStrictAcceptedSpecies'], expected['total'])
                self.assertTrue(all(item['path'].startswith('nomenclature/')
                                    for item in descriptor['files'] + descriptor['upstreamOnlyFiles']))
                rows = load_rows(first_dir, descriptor)
                self.assertEqual(len(rows), expected['records'])
                self.assertEqual(sum(row['status'] == 'upstream-only' for row in rows), expected['upstreamOnly'])
                self.assertEqual(len({row['colId'] for row in rows if row['colId'] is not None}), expected['total'])
                for row in rows:
                    if row['colId'] is not None:
                        all_col_ids.append(row['colId'])
                    if row.get('matchedName'):
                        all_source_ids.append(row['matchedName']['id'])
                        self.assertEqual(row['matchedName']['status'], '')
                        self.assertIsNone(row['matchedName']['sourceStatus'])
                        if row.get('acceptedName'):
                            self.assertEqual(row['acceptedName']['status'], '')
                    if row['status'] == 'upstream-only':
                        self.assertIsNone(row['colId'])
                        self.assertIn('sourceRouting', row)
                        self.assertEqual(row['sourceRouting']['packageId'], package)
                        self.assertIn(row['sourceRouting']['order'],
                                      set(MOD.MDD_SPECIAL_ORDER_PACKAGES) | set(MOD.MDD_OTHER_MAMMALS_ORDERS))
                        all_source_orders[row['sourceRouting']['order']] += 1
            self.assertEqual(len(all_col_ids), 6461)
            self.assertEqual(len(set(all_col_ids)), 6461)
            self.assertEqual(len(all_source_ids), 6801)
            self.assertEqual(len(set(all_source_ids)), 6801)
            self.assertEqual(dict(sorted(all_source_orders.items())), dict(sorted(SOURCE_ONLY_ORDERS.items())))
            self.assertEqual(first_ledger, json.loads((ROOT / 'data/sources/mdd-9802-import-ledger.json').read_text(encoding='utf-8')))

            ioc_first_dir = first_root / MOD.SOURCES['ioc']['outputPath']
            ioc_second_dir = second_root / MOD.SOURCES['ioc']['outputPath']
            ioc_canonical_dir = ROOT / MOD.SOURCES['ioc']['outputPath']
            self.assert_replayed_files(ioc_first_dir, ioc_second_dir, ioc_canonical_dir, first_ioc, 'ioc-aves')
            self.assertEqual(first_ioc['packageId'], 'crocodylomorphs-birds')
            self.assertEqual(first_ioc['scope']['colRootUsageId'], 'V2')
            self.assertEqual(first_ioc['source']['license'], 'cc by')
            self.assertEqual(first_ioc['source']['archiveLicense'], 'CC-BY')
            self.assertNotIn('licenseUrl', first_ioc['source'])
            self.assertEqual(first_ioc['counts'], {
                'total': 11044, 'accepted': 10624, 'redirect': 0, 'ambiguous': 0,
                'unmatched': 420, 'withheld': 0, 'upstreamOnly': 626, 'records': 11670,
            })
            self.assertEqual(first_ioc['scope']['sourceStrictAcceptedSpecies'], 11250)


if __name__ == '__main__':
    unittest.main()
