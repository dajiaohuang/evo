import csv, gzip, hashlib, json, subprocess, tempfile, unittest, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / 'data/sources/archives'
SCRIPT = ROOT / 'scripts/build-worms-rotifera-source.py'

class RotiferaSourceTest(unittest.TestCase):
    def test_rebuild_and_raw_rows(self):
        with tempfile.TemporaryDirectory() as t:
            canonical = ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
            before = {p.name: p.read_bytes() for p in [*canonical.glob('worms-rotifera-*'), ROOT / 'data/sources/rotifera-298081-import-ledger.json']}
            outs = []
            for suffix in ('a', 'b'):
                out = Path(t) / suffix
                subprocess.run(['python', '-B', str(SCRIPT), '--archive', str(SOURCE_DIR / 'checklistbank-298081-rotifera-2026-09-05.zip'), '--metadata', str(SOURCE_DIR / 'checklistbank-298081-rotifera-2026-09-05.metadata.json'), '--output-root', str(out)], cwd=ROOT, check=True, capture_output=True, text=True)
                outs.append(out)
            left = sorted((p.relative_to(outs[0]), hashlib.sha256(p.read_bytes()).hexdigest()) for p in outs[0].rglob('*') if p.is_file())
            right = sorted((p.relative_to(outs[1]), hashlib.sha256(p.read_bytes()).hexdigest()) for p in outs[1].rglob('*') if p.is_file())
            self.assertEqual(left, right)
            for relative, digest in left:
                self.assertEqual(digest, hashlib.sha256((ROOT / relative).read_bytes()).hexdigest(), str(relative))
            pack = outs[0] / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
            descriptor = json.loads((pack / 'worms-rotifera-sidecar.json').read_text(encoding='utf8'))
            self.assertEqual(descriptor['counts'], {'total': 2467, 'accepted': 2467, 'redirect': 0, 'ambiguous': 0, 'unmatched': 0, 'withheld': 0, 'upstreamOnly': 0, 'records': 2467})
            self.assertEqual(descriptor['scope']['sourceDatasetId'], 298081)
            self.assertEqual(descriptor['deliveryProfiles']['web-light'], {'mode': 'summary-only', 'records': 0, 'files': [], 'totalCompressedBytes': 0, 'totalSourceBytes': 0})
            native = descriptor['deliveryProfiles']['native-full']
            self.assertEqual(native['mode'], 'complete'); self.assertEqual(native['records'], 2467); self.assertEqual(native['files'], [f['path'] for f in descriptor['files']])
            self.assertEqual(native['totalCompressedBytes'], sum(f['bytes'] for f in descriptor['files']))
            self.assertEqual(native['totalSourceBytes'], sum(f['sourceBytes'] for f in descriptor['files']))
            for f in descriptor['files']:
                self.assertLessEqual(f['sourceBytes'], 2 * 1024 * 1024); self.assertEqual(f['encoding'], 'gzip'); self.assertEqual(f['role'], 'col-partition'); self.assertTrue(f['minColId'] <= f['maxColId'])
            rows = json.loads(gzip.open(pack / 'worms-rotifera-000.json.gz', 'rt', encoding='utf8').read())
            with zipfile.ZipFile(SOURCE_DIR / 'checklistbank-298081-rotifera-2026-09-05.zip') as archive:
                source = list(csv.DictReader(archive.read('NameUsage.tsv').decode('utf-8-sig').splitlines(), delimiter='\t'))
            expected = {i + 2: (r['ID'], r['scientificName'], r['authorship']) for i, r in enumerate(source) if r['rank'] == 'species' and r['status'] == 'valid'}
            for row in rows:
                locator = next(x['row'] for x in row['sourceRows'] if x['member'] == 'NameUsage.tsv')
                self.assertEqual((row['matchedName']['id'], row['matchedName']['scientificName'], row['matchedName']['authorship']), expected[locator])
            self.assertEqual(set(expected), {next(x['row'] for x in r['sourceRows'] if x['member'] == 'NameUsage.tsv') for r in rows})
            ledger = json.loads((outs[0] / 'data/sources/rotifera-298081-import-ledger.json').read_text(encoding='utf8'))
            self.assertEqual(ledger['generatedBy']['scriptSha256'], hashlib.sha256(SCRIPT.read_bytes()).hexdigest())
            self.assertEqual(ledger['outputs']['descriptor']['sha256'], hashlib.sha256((pack / 'worms-rotifera-sidecar.json').read_bytes()).hexdigest())
            self.assertEqual(before, {p.name: p.read_bytes() for p in [*canonical.glob('worms-rotifera-*'), ROOT / 'data/sources/rotifera-298081-import-ledger.json']})

if __name__ == '__main__': unittest.main()
