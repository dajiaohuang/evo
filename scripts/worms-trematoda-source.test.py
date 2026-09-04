import gzip, hashlib, importlib.util, json, tempfile, unittest, zipfile
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
            names = sorted(p.name for p in roots[0].glob('worms-trematoda*.json.gz')) + ['worms-trematoda-sidecar.json']
            for name in names:
                a = (roots[0] / name).read_bytes(); b = (roots[1] / name).read_bytes()
                self.assertEqual(a, b, name)
            descriptor = json.loads((roots[0] / 'worms-trematoda-sidecar.json').read_text(encoding='utf8'))
            rows = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['files']), [])
            source_only = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['upstreamOnlyFiles']), [])
            self.assertEqual(len(rows), 12007)
            self.assertEqual(len(source_only), 99)
            self.assertEqual(descriptor['counts'], {'total': 12007, 'accepted': 11965, 'redirect': 0,
                                                    'ambiguous': 0, 'unmatched': 42, 'withheld': 0,
                                                    'upstreamOnly': 99, 'records': 12106})
            self.assertEqual(descriptor['source']['title'], 'World List of Trematoda')
            self.assertEqual(descriptor['source']['doi'], '10.48580/d3cx')
            self.assertEqual(descriptor['source']['versionDoi'], '10.48580/d3cx.v86')
            self.assertEqual(descriptor['source']['citation'], descriptor['source']['metadataRecord']['citation'])
            self.assertEqual(descriptor['source']['editor'], descriptor['source']['metadataRecord']['editor'])
            self.assertEqual(descriptor['source']['contributor'], descriptor['source']['metadataRecord']['contributor'])
            self.assertEqual(descriptor['source']['rights'], descriptor['source']['metadataRecord']['license'])
            with zipfile.ZipFile(mod.ARCHIVE) as archive:
                self.assertEqual(set(descriptor['source']['members']), set(archive.namelist()))
                for member, evidence in descriptor['source']['members'].items():
                    raw = archive.read(member)
                    self.assertEqual(evidence, {'bytes': len(raw), 'sha256': hashlib.sha256(raw).hexdigest()})
            self.assertEqual(descriptor['source']['archiveSha256'], mod.ARCHIVE_SHA)
            self.assertEqual(descriptor['source']['archiveBytes'], mod.ARCHIVE_BYTES)
            self.assertTrue(all(p['sourceBytes'] <= mod.SHARD_LIMIT for p in descriptor['files'] + descriptor['upstreamOnlyFiles']))
            self.assertEqual(sum(p['records'] for p in descriptor['files']), 12007)
            self.assertEqual(sum(p['records'] for p in descriptor['upstreamOnlyFiles']), 99)
            for p in descriptor['files'] + descriptor['upstreamOnlyFiles']:
                self.assertEqual(p['sha256'], hashlib.sha256((roots[0] / p['path'].split('/')[-1]).read_bytes()).hexdigest())
            self.assertTrue(all(row['status'] != 'redirect' for row in rows))
            self.assertTrue(all(row['status'] == 'upstream-only' for row in source_only))
            self.assertEqual(descriptor['scope']['excludedSourceProvisional'], 19)
            self.assertTrue(any(row['references'] for row in rows if row['status'] == 'accepted'))
            self.assertTrue(all(row['sourceRows'] for row in rows if row['status'] == 'accepted'))
            self.assertTrue(all({'Name.txt', 'Taxon.txt'} <= {locator['member'] for locator in row['sourceRows']}
                                for row in rows if row['status'] == 'accepted'))
            self.assertTrue(all('sourceRows' in ref for row in rows for ref in row['references']))


if __name__ == '__main__':
    unittest.main()
