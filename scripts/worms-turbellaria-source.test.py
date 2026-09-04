import csv, gzip, hashlib, importlib.util, io, json, tempfile, unittest, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('turbellaria', Path(__file__).with_name('build-worms-turbellaria-source.py'))
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)


class TurbellariaProjectionTests(unittest.TestCase):
    def test_real_offline_rebuild_is_deterministic_and_preserves_scope_counts(self):
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            mod.project(mod.ARCHIVE, Path(one)); mod.project(mod.ARCHIVE, Path(two))
            roots = [Path(one) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals',
                     Path(two) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals']
            names = sorted(p.name for p in roots[0].glob('worms-turbellaria*.json.gz')) + ['worms-turbellaria-sidecar.json']
            for name in names:
                a = (roots[0] / name).read_bytes(); b = (roots[1] / name).read_bytes()
                self.assertEqual(a, b, name)
            descriptor = json.loads((roots[0] / 'worms-turbellaria-sidecar.json').read_text(encoding='utf8'))
            ledgers = [Path(one) / 'data/sources/worms-turbellaria-archive-1193-import-ledger.json', Path(two) / 'data/sources/worms-turbellaria-archive-1193-import-ledger.json']
            self.assertEqual(ledgers[0].read_bytes(), ledgers[1].read_bytes())
            rows = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['files']), [])
            source_only = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['upstreamOnlyFiles']), [])
            self.assertEqual(len(rows), 6469)
            self.assertEqual(len(source_only), 69)
            self.assertEqual(descriptor['counts'], {'total': 6469, 'accepted': 6454, 'redirect': 0,
                                                    'ambiguous': 0, 'unmatched': 15, 'withheld': 0,
                                                    'upstreamOnly': 69, 'records': 6538})
            self.assertEqual(descriptor['source']['archiveSha256'], mod.ARCHIVE_SHA)
            self.assertEqual(descriptor['source']['archiveBytes'], mod.ARCHIVE_BYTES)
            self.assertTrue(all(p['sourceBytes'] <= mod.SHARD_LIMIT for p in descriptor['files'] + descriptor['upstreamOnlyFiles']))
            self.assertEqual(sum(p['records'] for p in descriptor['files']), 6469)
            self.assertEqual(sum(p['records'] for p in descriptor['upstreamOnlyFiles']), 69)
            for p in descriptor['files'] + descriptor['upstreamOnlyFiles']:
                self.assertEqual(p['sha256'], hashlib.sha256((roots[0] / p['path'].split('/')[-1]).read_bytes()).hexdigest())
            self.assertTrue(all(row['status'] != 'redirect' for row in rows))
            self.assertTrue(all(row['status'] == 'upstream-only' for row in source_only))
            self.assertEqual(descriptor['scope']['excludedSourceProvisional'], 37)
            self.assertTrue(any(row['references'] for row in rows if row['status'] == 'accepted'))
            self.assertTrue(all(row['sourceRows'] for row in rows if row['status'] == 'accepted'))
            source, _, _, _, _, provisional = mod.read_archive(mod.ARCHIVE)
            self.assertEqual(len(source), 6523)
            self.assertEqual(provisional, 37)
            projected = {r['acceptedName']['aphiaId']: r for r in rows + source_only if r['acceptedName']}
            with zipfile.ZipFile(mod.ARCHIVE) as archive:
                names_raw = {r['ID']: r for r in csv.DictReader(io.TextIOWrapper(archive.open('Name.txt'), encoding='utf-8-sig'), delimiter='\t')}
                for tid, (taxon, name, _, _) in source.items():
                    self.assertIn(tid, projected)
                    self.assertEqual(projected[tid]['acceptedName']['scientificName'], name['scientificName'])
                    self.assertEqual(projected[tid]['acceptedName']['authorship'], name['authorship'])
                    self.assertEqual(projected[tid]['acceptedName']['id'], taxon['ID'])
                    self.assertEqual(names_raw[name['ID']]['scientificName'], name['scientificName'])


if __name__ == '__main__':
    unittest.main()
