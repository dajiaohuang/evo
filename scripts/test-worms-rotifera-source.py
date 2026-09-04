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
            pack = outs[0] / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'
            descriptor = json.loads((pack / 'worms-rotifera-sidecar.json').read_text(encoding='utf8'))
            self.assertEqual(descriptor['counts'], {'total': 2467, 'accepted': 2467, 'redirect': 0, 'ambiguous': 0, 'unmatched': 0, 'withheld': 0, 'upstreamOnly': 0})
            rows = json.loads(gzip.open(pack / 'worms-rotifera-000.json.gz', 'rt', encoding='utf8').read())
            with zipfile.ZipFile(SOURCE_DIR / 'checklistbank-298081-rotifera-2026-09-05.zip') as archive:
                source = list(csv.DictReader(archive.read('NameUsage.tsv').decode('utf-8-sig').splitlines(), delimiter='\t'))
            expected = [(r['ID'], r['scientificName'], r['authorship']) for r in source if r['rank'] == 'species' and r['status'] == 'valid']
            actual = [(r['matchedName']['id'], r['matchedName']['scientificName'], r['matchedName']['authorship']) for r in rows]
            self.assertEqual(sorted(actual), sorted(expected))
            self.assertEqual({r['sourceRows'][0]['row'] for r in rows}, {i + 2 for i, r in enumerate(source) if r['rank'] == 'species' and r['status'] == 'valid'})
            self.assertEqual(before, {p.name: p.read_bytes() for p in [*canonical.glob('worms-rotifera-*'), ROOT / 'data/sources/rotifera-298081-import-ledger.json']})

if __name__ == '__main__': unittest.main()
