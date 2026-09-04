import csv, gzip, hashlib, importlib.util, io, json, tempfile, unittest, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('polychaeta', Path(__file__).with_name('build-worms-polychaeta-source.py'))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class PolychaetaProjectionTests(unittest.TestCase):
    def test_two_offline_replays_are_byte_identical_and_cover_real_archive(self):
        ledger_path = ROOT / 'data/sources/worms-polychaeta-archive-1090-import-ledger.json'
        ledger_before = ledger_path.read_bytes()
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            mod.project(mod.ARCHIVE, Path(one))
            mod.project(mod.ARCHIVE, Path(two))
            roots = [Path(one) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals',
                     Path(two) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals']
            names = sorted(p.name for p in roots[0].glob('worms-polychaeta*.json.gz')) + ['worms-polychaeta-sidecar.json']
            for name in names:
                self.assertEqual((roots[0] / name).read_bytes(), (roots[1] / name).read_bytes(), name)
                self.assertEqual((roots[0] / name).read_bytes(),
                                 (ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals' / name).read_bytes(),
                                 f'canonical {name}')
            self.assertEqual((Path(one) / 'data/sources/worms-polychaeta-archive-1090-import-ledger.json').read_bytes(),
                             (Path(two) / 'data/sources/worms-polychaeta-archive-1090-import-ledger.json').read_bytes())
            self.assertEqual((Path(one) / 'data/sources/worms-polychaeta-archive-1090-import-ledger.json').read_bytes(), ledger_before)
            descriptor = json.loads((roots[0] / 'worms-polychaeta-sidecar.json').read_text(encoding='utf8'))
            self.assertEqual(descriptor['source']['archiveSha256'], mod.ARCHIVE_SHA)
            self.assertEqual(descriptor['source']['archiveBytes'], mod.ARCHIVE_BYTES)
            metadata = json.loads(mod.METADATA.read_text(encoding='utf8'))
            for field in ('title', 'version', 'versionDoi', 'citation', 'editor', 'contributor', 'license'):
                self.assertEqual(descriptor['source'][field], metadata[field], field)
            self.assertEqual(descriptor['scope'], {'colRootUsageIds': ['B8TXG'], 'scientificName': 'Polychaeta',
                                                   'eligibleColSpecies': 14430, 'sourceAcceptedSpecies': 14484,
                                                   'excludedSourceProvisional': 53})
            self.assertEqual(descriptor['counts'], {'total': 14430, 'accepted': 14305, 'redirect': 0,
                                                     'ambiguous': 0, 'unmatched': 125, 'withheld': 0,
                                                     'sourceOnly': 179, 'upstreamOnly': 179, 'records': 14609})
            rows = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes()))
                        for p in descriptor['files']), [])
            source_only = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes()))
                               for p in descriptor['sourceOnlyFiles']), [])
            self.assertEqual(len(rows), 14430)
            self.assertEqual(len(source_only), 179)
            self.assertTrue(all(r['status'] in ('accepted', 'unmatched') for r in rows))
            self.assertTrue(all(r['status'] == 'source-only' for r in source_only))
            self.assertTrue(all(p['sourceBytes'] <= mod.SHARD_LIMIT for p in descriptor['files'] + descriptor['sourceOnlyFiles']))
            for p in descriptor['files'] + descriptor['sourceOnlyFiles']:
                payload = (roots[0] / p['path'].split('/')[-1]).read_bytes()
                self.assertEqual(p['sha256'], hashlib.sha256(payload).hexdigest())
        with zipfile.ZipFile(mod.ARCHIVE) as archive:
            for member, expected in descriptor['source']['members'].items():
                raw = archive.read(member)
                self.assertEqual(len(raw), expected['bytes'], member)
                self.assertEqual(hashlib.sha256(raw).hexdigest(), expected['sha256'], member)
            names = {row['ID']: row for row in csv.DictReader(io.TextIOWrapper(archive.open('Name.txt'), encoding='utf-8-sig'), delimiter='\t')}
            name_rows = {row['ID']: i for i, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('Name.txt'), encoding='utf-8-sig'), delimiter='\t'), 2)}
            taxon_rows = {row['ID']: i for i, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('Taxon.txt'), encoding='utf-8-sig'), delimiter='\t'), 2)}
            refs = {row['ID']: row for row in csv.DictReader(io.TextIOWrapper(archive.open('Reference.txt'), encoding='utf-8-sig'), delimiter='\t')}
            ref_rows = {row['ID']: i for i, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('Reference.txt'), encoding='utf-8-sig'), delimiter='\t'), 2)}
            name_ref_rows, name_ref_ids = {}, {}
            for i, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('NameReference.txt'), encoding='utf-8-sig'), delimiter='\t'), 2):
                name_ref_rows.setdefault(row['nameID'], []).append(i)
                name_ref_ids.setdefault(row['nameID'], set()).add(row.get('referenceID', '').strip())
            source, _, _, _, _, _ = mod.read_archive(mod.ARCHIVE)
            projected = {r['acceptedName']['aphiaId']: r for r in rows + source_only if r['acceptedName']}
            self.assertEqual(set(projected), set(source))
            for tid, (taxon, name, taxon_row, name_row) in source.items():
                out = projected[tid]
                self.assertEqual(out['acceptedName']['scientificName'], name['scientificName'])
                self.assertEqual(out['acceptedName']['authorship'], name.get('authorship') or '')
                self.assertEqual(out['acceptedName']['id'], taxon['ID'])
                self.assertIn({'member': 'Taxon.txt', 'row': taxon_rows[taxon['ID']]}, out['sourceRows'])
                self.assertIn({'member': 'Name.txt', 'row': name_rows[name['ID']]}, out['sourceRows'])
                for row_number in name_ref_rows.get(name['ID'], []):
                    self.assertIn({'member': 'NameReference.txt', 'row': row_number}, out['sourceRows'])
                expected_ids = {name.get('referenceID'), taxon.get('referenceID')}
                expected_ids.update(name_ref_ids.get(name['ID'], set()))
                expected_ids = {rid.strip() for rid in expected_ids if rid and rid.strip()}
                self.assertEqual({ref['referenceID'] for ref in out['references']}, expected_ids)
                for ref in out['references']:
                    if not ref['missing']:
                        self.assertEqual(ref['reference'], refs[ref['referenceID']])
                        self.assertIn({'member': 'Reference.txt', 'row': ref_rows[ref['referenceID']]}, out['sourceRows'])


if __name__ == '__main__':
    unittest.main()
