import csv, gzip, hashlib, importlib.util, io, json, tempfile, unittest, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('oligochaeta', Path(__file__).with_name('build-worms-oligochaeta-source.py'))
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)


class OligochaetaProjectionTests(unittest.TestCase):
    def test_real_offline_rebuild_is_deterministic_and_preserves_scope_counts(self):
        canonical_ledger = ROOT / 'data/sources/worms-oligochaeta-archive-1099-import-ledger.json'
        ledger_before = canonical_ledger.read_bytes()
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            mod.project(mod.ARCHIVE, Path(one)); mod.project(mod.ARCHIVE, Path(two))
            roots = [Path(one) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals',
                     Path(two) / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals']
            names = sorted(p.name for p in roots[0].glob('worms-oligochaeta*.json.gz')) + ['worms-oligochaeta-sidecar.json']
            for name in names:
                a = (roots[0] / name).read_bytes(); b = (roots[1] / name).read_bytes()
                self.assertEqual(a, b, name)
                canonical = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals' / name
                self.assertEqual(a, canonical.read_bytes(), f'canonical {name}')
            descriptor = json.loads((roots[0] / 'worms-oligochaeta-sidecar.json').read_text(encoding='utf8'))
            ledgers = [Path(one) / 'data/sources/worms-oligochaeta-archive-1099-import-ledger.json', Path(two) / 'data/sources/worms-oligochaeta-archive-1099-import-ledger.json']
            self.assertEqual(ledgers[0].read_bytes(), ledgers[1].read_bytes())
            canonical_ledger = ROOT / 'data/sources/worms-oligochaeta-archive-1099-import-ledger.json'
            self.assertEqual(ledgers[0].read_bytes(), canonical_ledger.read_bytes())
            self.assertEqual(canonical_ledger.read_bytes(), ledger_before)
            rows = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['files']), [])
            source_only = sum((json.loads(gzip.decompress((roots[0] / p['path'].split('/')[-1]).read_bytes())) for p in descriptor['upstreamOnlyFiles']), [])
            self.assertEqual(len(rows), descriptor['counts']['total'])
            self.assertEqual(len(source_only), descriptor['counts']['upstreamOnly'])
            self.assertEqual(descriptor['source']['archiveSha256'], mod.ARCHIVE_SHA)
            self.assertEqual(descriptor['source']['archiveBytes'], mod.ARCHIVE_BYTES)
            self.assertEqual(descriptor['source']['versionDoi'], '10.48580/d3bx.v85')
            metadata = json.loads(mod.METADATA.read_text(encoding='utf8'))
            for field in ('doi', 'issued', 'citation', 'editor', 'contributor'):
                self.assertEqual(descriptor['source'][field], metadata[field], field)
            self.assertEqual(descriptor['scope']['colRootUsageIds'], ['B8W74'])
            self.assertEqual(descriptor['scope']['eligibleColSpecies'], 4403)
            self.assertEqual(descriptor['scope']['sourceAcceptedSpecies'], 4564)
            self.assertEqual(descriptor['scope']['excludedSourceProvisional'], 12)
            self.assertEqual(descriptor['counts'], {'total': 4403, 'accepted': 4350, 'redirect': 0,
                                                     'ambiguous': 0, 'unmatched': 53, 'withheld': 0,
                                                     'upstreamOnly': 214, 'records': 4617})
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
                for member, expected in descriptor['source']['members'].items():
                    raw = archive.read(member)
                    self.assertEqual(len(raw), expected['bytes'], member)
                    self.assertEqual(hashlib.sha256(raw).hexdigest(), expected['sha256'], member)
                expected_member_rows = {'TypeMaterial.txt': 902, 'Name.txt': 13175,
                                        'NameRelation.txt': 9740, 'Taxon.txt': 5515,
                                        'Synonym.txt': 3505, 'SpeciesEstimate.txt': 0,
                                        'Reference.txt': 3066, 'NameReference.txt': 28749,
                                        'Distribution.txt': 3508, 'Media.txt': 54,
                                        'VernacularName.txt': 86}
                for member, expected_rows in expected_member_rows.items():
                    self.assertEqual(len(archive.read(member).splitlines()) - 1, expected_rows, member)
                name_rows = list(csv.DictReader(io.TextIOWrapper(archive.open('Name.txt'), encoding='utf-8-sig'), delimiter='\t'))
                names_raw = {r['ID']: r for r in name_rows}
                name_row_numbers = {r['ID']: i for i, r in enumerate(name_rows, 2)}
                taxon_rows = {r['ID']: i for i, r in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('Taxon.txt'), encoding='utf-8-sig'), delimiter='\t'), 2)}
                reference_rows = list(csv.DictReader(io.TextIOWrapper(archive.open('Reference.txt'), encoding='utf-8-sig'), delimiter='\t'))
                references_raw = {r['ID']: r for r in reference_rows}
                reference_row_numbers = {r['ID']: i for i, r in enumerate(reference_rows, 2)}
                name_reference_ids = {}
                name_reference_rows = {}
                for row_number, r in enumerate(csv.DictReader(io.TextIOWrapper(archive.open('NameReference.txt'), encoding='utf-8-sig'), delimiter='\t'), 2):
                    name_reference_ids.setdefault(r['nameID'], set()).add(r['referenceID'])
                    name_reference_rows.setdefault(r['nameID'], []).append(row_number)
                for tid, (taxon, name, _, _) in source.items():
                    self.assertIn(tid, projected)
                    self.assertEqual(projected[tid]['acceptedName']['scientificName'], name['scientificName'])
                    self.assertEqual(projected[tid]['acceptedName']['authorship'], name['authorship'])
                    self.assertEqual(projected[tid]['acceptedName']['id'], taxon['ID'])
                    self.assertEqual(projected[tid]['acceptedName']['url'], name.get('link') or taxon.get('link') or f'https://www.marinespecies.org/aphia.php?p=taxdetails&id={tid}')
                    self.assertEqual(names_raw[name['ID']]['scientificName'], name['scientificName'])
                    out = projected[tid]
                    self.assertIn({'member': 'Taxon.txt', 'row': taxon_rows[taxon['ID']]}, out['sourceRows'])
                    self.assertIn({'member': 'Name.txt', 'row': name_row_numbers[name['ID']]}, out['sourceRows'])
                    for row_number in name_reference_rows.get(name['ID'], []):
                        self.assertIn({'member': 'NameReference.txt', 'row': row_number}, out['sourceRows'])
                    for reference_id in {name.get('referenceID'), taxon.get('referenceID')} - {None, ''}:
                        if reference_id in references_raw:
                            self.assertIn({'member': 'Reference.txt', 'row': reference_row_numbers[reference_id]}, out['sourceRows'])
                    expected_ids = name_reference_ids.get(name['ID'], set()) | {name.get('referenceID'), taxon.get('referenceID')}
                    expected_ids = {rid.strip() for rid in expected_ids if rid and rid.strip()}
                    self.assertEqual({ref['referenceID'] for ref in out['references']}, expected_ids)
                    for ref in out['references']:
                        if not ref['missing']:
                            self.assertEqual(ref['reference'], references_raw[ref['referenceID']])
                            self.assertEqual(ref['sourceRows'], [{'member': 'Reference.txt', 'row': reference_row_numbers[ref['referenceID']]}])


if __name__ == '__main__':
    unittest.main()
