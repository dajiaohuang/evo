import csv, gzip, hashlib, importlib.util, io, json, tempfile, unittest, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('gastrotricha', Path(__file__).with_name('build-worms-gastrotricha-source.py'))
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)


class GastrotrichaProjectionTests(unittest.TestCase):
    def test_real_offline_rebuild_is_deterministic_and_preserves_scope_counts(self):
        canonical_ledger = ROOT / 'data/sources/worms-gastrotricha-archive-1122-import-ledger.json'
        ledger_before = canonical_ledger.read_bytes()
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            mod.project(mod.ARCHIVE, Path(one)); mod.project(mod.ARCHIVE, Path(two))
            roots = [Path(one) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals',
                     Path(two) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals']
            names = sorted(p.name for p in roots[0].glob('worms-gastrotricha*.json.gz')) + ['worms-gastrotricha-sidecar.json']
            for name in names:
                a = (roots[0] / name).read_bytes(); b = (roots[1] / name).read_bytes()
                self.assertEqual(a, b, name)
                canonical = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals' / name
                self.assertEqual(a, canonical.read_bytes(), f'canonical {name}')
            descriptor = json.loads((roots[0] / 'worms-gastrotricha-sidecar.json').read_text(encoding='utf8'))
            ledgers = [Path(one) / 'data/sources/worms-gastrotricha-archive-1122-import-ledger.json', Path(two) / 'data/sources/worms-gastrotricha-archive-1122-import-ledger.json']
            self.assertEqual(ledgers[0].read_bytes(), ledgers[1].read_bytes())
            canonical_ledger = ROOT / 'data/sources/worms-gastrotricha-archive-1122-import-ledger.json'
            self.assertEqual(ledgers[0].read_bytes(), canonical_ledger.read_bytes())
            self.assertEqual(canonical_ledger.read_bytes(), ledger_before)
            rows = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['files']), [])
            source_only = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['upstreamOnlyFiles']), [])
            self.assertEqual(len(rows), descriptor['counts']['total'])
            self.assertEqual(len(source_only), descriptor['counts']['upstreamOnly'])
            self.assertEqual(descriptor['source']['archiveSha256'], mod.ARCHIVE_SHA)
            self.assertEqual(descriptor['source']['archiveBytes'], mod.ARCHIVE_BYTES)
            self.assertEqual(descriptor['rowEncoding'], 'json')
            self.assertTrue(all(p['mediaType'] == 'application/json' for p in descriptor['files'] + descriptor['upstreamOnlyFiles']))
            self.assertTrue(all(p['sourceBytes'] <= mod.SHARD_LIMIT for p in descriptor['files'] + descriptor['upstreamOnlyFiles']))
            self.assertEqual(sum(p['records'] for p in descriptor['files']), descriptor['counts']['total'])
            self.assertEqual(sum(p['records'] for p in descriptor['upstreamOnlyFiles']), descriptor['counts']['upstreamOnly'])
            for p in descriptor['files'] + descriptor['upstreamOnlyFiles']:
                self.assertEqual(p['sha256'], hashlib.sha256((roots[0] / p['path'].split('/')[-1]).read_bytes()).hexdigest())
            self.assertTrue(all(row['status'] != 'redirect' for row in rows))
            self.assertTrue(all(row['status'] == 'upstream-only' for row in source_only))
            self.assertTrue(any(row['references'] for row in rows if row['status'] == 'accepted'))
            self.assertTrue(all(row['sourceRows'] for row in rows if row['status'] == 'accepted'))
            source, _, _, _, _, provisional = mod.read_archive(mod.ARCHIVE)
            self.assertEqual(descriptor['scope']['sourceAcceptedSpecies'], len(source))
            self.assertEqual(descriptor['scope']['excludedSourceProvisional'], provisional)
            projected = {r['acceptedName']['aphiaId']: r for r in rows + source_only if r['acceptedName']}
            with zipfile.ZipFile(mod.ARCHIVE) as archive:
                name_rows = list(csv.DictReader(io.TextIOWrapper(archive.open('Name.txt'), encoding='utf-8-sig'), delimiter='\t'))
                names_raw = {r['ID']: r for r in name_rows}
                name_row_numbers = {r['ID']: i for i, r in enumerate(name_rows, 2)}
                taxon_rows = {r['ID']: i for i, r in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('Taxon.txt'), encoding='utf-8-sig'), delimiter='\t'), 2)}
                reference_rows = list(csv.DictReader(io.TextIOWrapper(archive.open('Reference.txt'), encoding='utf-8-sig'), delimiter='\t'))
                references_raw = {r['ID']: r for r in reference_rows}
                reference_row_numbers = {r['ID']: i for i, r in enumerate(reference_rows, 2)}
                name_reference_ids = {}
                for r in csv.DictReader(io.TextIOWrapper(archive.open('NameReference.txt'), encoding='utf-8-sig'), delimiter='\t'):
                    name_reference_ids.setdefault(r['nameID'], set()).add(r['referenceID'])
                for tid, (taxon, name, _, _) in source.items():
                    self.assertIn(tid, projected)
                    self.assertEqual(projected[tid]['acceptedName']['scientificName'], name['scientificName'])
                    self.assertEqual(projected[tid]['acceptedName']['authorship'], name['authorship'])
                    self.assertEqual(projected[tid]['acceptedName']['id'], taxon['ID'])
                    self.assertEqual(names_raw[name['ID']]['scientificName'], name['scientificName'])
                    out = projected[tid]
                    self.assertIn({'member': 'Taxon.txt', 'row': taxon_rows[taxon['ID']]}, out['sourceRows'])
                    self.assertIn({'member': 'Name.txt', 'row': name_row_numbers[name['ID']]}, out['sourceRows'])
                    expected_ids = name_reference_ids.get(name['ID'], set()) | {name.get('referenceID'), taxon.get('referenceID')}
                    expected_ids = {rid.strip() for rid in expected_ids if rid and rid.strip()}
                    self.assertEqual({ref['referenceID'] for ref in out['references']}, expected_ids)
                    for ref in out['references']:
                        if not ref['missing']:
                            self.assertEqual(ref['reference'], references_raw[ref['referenceID']])
                            self.assertEqual(ref['sourceRows'], [{'member': 'Reference.txt', 'row': reference_row_numbers[ref['referenceID']]}])


if __name__ == '__main__':
    unittest.main()
