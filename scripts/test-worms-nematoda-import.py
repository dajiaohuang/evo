import hashlib
import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DESCRIPTOR = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-nematoda-sidecar.json'
LEDGER = ROOT / 'data/sources/worms-nematoda-archive-2011-import-ledger.json'


class NematodaImportOutputTests(unittest.TestCase):
    def test_pinned_scope_and_actual_partition(self):
        descriptor = json.loads(DESCRIPTOR.read_bytes())
        ledger = json.loads(LEDGER.read_bytes())
        self.assertEqual(descriptor['id'], 'worms-nematoda-archive-crosswalk')
        self.assertEqual(descriptor['packageId'], 'other-animals')
        self.assertEqual(descriptor['scope'], {
            'colRootUsageId': 'NM', 'wormsRootId': '799', 'scientificName': 'Nematoda',
            'eligibleColSpecies': 19604, 'packageStrictAcceptedSpecies': 99161,
            'excludedPackageRemainder': 79557,
        })
        self.assertEqual(descriptor['counts'], {
            'total': 19604, 'accepted': 19525, 'redirect': 1, 'ambiguous': 4,
            'unmatched': 72, 'withheld': 2, 'upstreamOnly': 2104,
        })
        self.assertEqual(len(descriptor['files']), 8)
        self.assertEqual(len(descriptor['upstreamOnlyFiles']), 1)
        self.assertEqual(sum(item['bytes'] for item in descriptor['files'] + descriptor['upstreamOnlyFiles']), 1125217)
        self.assertEqual(sum(item['sourceBytes'] for item in descriptor['files'] + descriptor['upstreamOnlyFiles']), 16895569)
        self.assertEqual(ledger['source']['archiveSha256'], '8419d301b08e1f119557ead2222d7efd8f01a3f3ca3b6c9ff1edd062bfa312c6')
        self.assertEqual(ledger['scopeAudit']['scopes']['nematoda'], {'speciesRows': 36982, 'acceptedSpecies': 21635})

    def test_shard_bytes_and_hashes_match_descriptor(self):
        for item in json.loads(DESCRIPTOR.read_bytes())['files'] + json.loads(DESCRIPTOR.read_bytes())['upstreamOnlyFiles']:
            path = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs' / item['path']
            content = path.read_bytes()
            self.assertEqual(len(content), item['bytes'], path)
            self.assertEqual(hashlib.sha256(content).hexdigest(), item['sha256'], path)


if __name__ == '__main__':
    unittest.main()
