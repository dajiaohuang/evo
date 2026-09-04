import gzip, hashlib, importlib.util, json, tempfile, unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('trematoda', Path(__file__).with_name('build-worms-trematoda-source.py'))
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)


class TrematodaProjectionTests(unittest.TestCase):
    def test_real_offline_rebuild_is_deterministic_and_preserves_scope_counts(self):
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            mod.project(mod.ARCHIVE, Path(one)); mod.project(mod.ARCHIVE, Path(two))
            roots = [Path(one) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals',
                     Path(two) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals']
            names = ['worms-trematoda-000.json.gz', 'worms-trematoda-source-only-000.json.gz', 'worms-trematoda-sidecar.json']
            for name in names:
                a = (roots[0] / name).read_bytes(); b = (roots[1] / name).read_bytes()
                self.assertEqual(a, b, name)
            rows = json.loads(gzip.decompress((roots[0] / names[0]).read_bytes()))
            source_only = json.loads(gzip.decompress((roots[0] / names[1]).read_bytes()))
            descriptor = json.loads((roots[0] / names[2]).read_text(encoding='utf8'))
            self.assertEqual(len(rows), 12007)
            self.assertEqual(len(source_only), 99)
            self.assertEqual(descriptor['counts'], {'total': 12007, 'accepted': 11965, 'redirect': 0,
                                                    'ambiguous': 0, 'unmatched': 42, 'withheld': 0,
                                                    'upstreamOnly': 99, 'records': 12106})
            self.assertEqual(descriptor['source']['archiveSha256'], mod.ARCHIVE_SHA)
            self.assertEqual(descriptor['source']['archiveBytes'], mod.ARCHIVE_BYTES)
            self.assertEqual(descriptor['files'][0]['sha256'], hashlib.sha256((roots[0] / names[0]).read_bytes()).hexdigest())
            self.assertEqual(descriptor['files'][0]['records'], 12007)
            self.assertEqual(descriptor['upstreamOnlyFiles'][0]['records'], 99)
            self.assertTrue(all(row['status'] != 'redirect' for row in rows))
            self.assertTrue(all(row['status'] == 'upstream-only' for row in source_only))
            self.assertEqual(descriptor['scope']['excludedSourceProvisional'], 19)
            self.assertTrue(any(row['references'] for row in rows if row['status'] == 'accepted'))
            self.assertTrue(all(row['sourceRows'] for row in rows if row['status'] == 'accepted'))


if __name__ == '__main__':
    unittest.main()
