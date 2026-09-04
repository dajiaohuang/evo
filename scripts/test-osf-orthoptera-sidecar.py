import gzip, hashlib, importlib.util, json, unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NOM = ROOT / 'data/packages/arthropoda/crustaceans-insects/nomenclature'

spec = importlib.util.spec_from_file_location('osf_builder', ROOT / 'scripts/build-osf-orthoptera-sidecar.py')
builder = importlib.util.module_from_spec(spec); spec.loader.exec_module(builder)

def digest(path): return hashlib.sha256(path.read_bytes()).hexdigest()

def name(identifier, label, row): return {'ID': identifier, 'scientificName': label, 'authorship': '', 'rank': 'species', '__member': 'Name.tsv', '__row': row}
def taxon(identifier, name_id, row): return {'ID': identifier, 'nameID': name_id, 'link': '', '__member': 'Taxon.tsv', '__row': row}
def synonym(identifier, name_id, target_id, row): return {'ID': identifier, 'nameID': name_id, 'taxonID': target_id, '__member': 'Synonym.tsv', '__row': row}
def col(): return {'id': 'col-1', 'scientificName': 'Example species', 'authorship': ''}

class MatchRecordFixtures(unittest.TestCase):
    def target(self, identifier='otu-1', name_id='name-accepted', row=20):
        accepted = name(name_id, 'Accepted species', row + 1); return taxon(identifier, name_id, row), accepted

    def test_direct(self):
        target, accepted = self.target(); rec, implicated = builder.match_record(col(), [(target, accepted)], [], {accepted['ID']: accepted}, {target['ID']})
        self.assertEqual(rec['status'], 'accepted'); self.assertEqual(rec['acceptedName']['id'], 'otu-1'); self.assertEqual(implicated, {'otu-1'})

    def test_redirect_same_target_multiple_relations_keeps_all_evidence(self):
        target, accepted = self.target(); first, second = name('name-syn-1', 'Example species', 2), name('name-syn-2', 'Example species', 3)
        relations = [(synonym('syn-1', first['ID'], target['ID'], 4), first, target), (synonym('syn-2', second['ID'], target['ID'], 5), second, target)]
        rec, implicated = builder.match_record(col(), [], relations, {accepted['ID']: accepted}, {target['ID']})
        self.assertEqual(rec['status'], 'redirect'); self.assertIsNone(rec['matchedName']); self.assertEqual(rec['acceptedName']['id'], target['ID']); self.assertEqual(implicated, {target['ID']})
        self.assertEqual({(item['member'], item['row']) for item in rec['sourceRows']}, {('Synonym.tsv', 4), ('Synonym.tsv', 5), ('Name.tsv', 2), ('Name.tsv', 3), ('Taxon.tsv', 20), ('Name.tsv', 21)})

    def test_ambiguous_multiple_targets(self):
        first, first_name = self.target('otu-1', 'name-1', 20); second, second_name = self.target('otu-2', 'name-2', 30); synonym_name = name('name-syn', 'Example species', 2)
        relations = [(synonym('syn-1', synonym_name['ID'], first['ID'], 4), synonym_name, first), (synonym('syn-2', synonym_name['ID'], second['ID'], 5), synonym_name, second)]
        rec, implicated = builder.match_record(col(), [], relations, {first_name['ID']: first_name, second_name['ID']: second_name}, {'otu-1', 'otu-2'})
        self.assertEqual(rec['status'], 'ambiguous'); self.assertIsNone(rec['acceptedName']); self.assertEqual(implicated, {'otu-1', 'otu-2'})

    def test_direct_and_synonym_conflict_is_ambiguous(self):
        direct, direct_name = self.target('otu-direct', 'name-direct', 20); redirected, redirected_name = self.target('otu-redirect', 'name-redirect', 30); synonym_name = name('name-syn', 'Example species', 2)
        relation = (synonym('syn-1', synonym_name['ID'], redirected['ID'], 4), synonym_name, redirected)
        rec, implicated = builder.match_record(col(), [(direct, direct_name)], [relation], {direct_name['ID']: direct_name, redirected_name['ID']: redirected_name}, {'otu-direct', 'otu-redirect'})
        self.assertEqual(rec['status'], 'ambiguous'); self.assertEqual(implicated, {'otu-direct', 'otu-redirect'})

    def test_invalid_relation_withholds_valid_targets(self):
        target, accepted = self.target(); synonym_name = name('name-syn', 'Example species', 2); relation = (synonym('syn-1', synonym_name['ID'], target['ID'], 4), synonym_name, target)
        rec, implicated = builder.match_record(col(), [], [relation], {accepted['ID']: accepted}, set())
        self.assertEqual(rec['status'], 'withheld'); self.assertIsNone(rec['acceptedName']); self.assertEqual(implicated, set()); self.assertTrue(rec['sourceRows'])

    def test_unmatched(self):
        rec, implicated = builder.match_record(col(), [], [], {}, set())
        self.assertEqual(rec['status'], 'unmatched'); self.assertEqual(implicated, set()); self.assertEqual(rec['sourceRows'], [])

def main():
    result = unittest.TextTestRunner(verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(MatchRecordFixtures))
    if not result.wasSuccessful(): raise SystemExit(1)
    descriptor = json.loads((NOM / 'osf-orthoptera-sidecar.json').read_text(encoding='utf-8'))
    ledger = json.loads((ROOT / 'data/sources/osf-orthoptera-archive-crosswalk-import-ledger.json').read_text(encoding='utf-8'))
    assert descriptor['scope']['colRootUsageId'] == 'CJBKK'
    assert descriptor['scope']['osfOtuRootId'] == '805980'
    assert descriptor['scope']['osfTaxonNameRootId'] == '913531'
    assert descriptor['counts'] == {'total': 30859, 'accepted': 30642, 'redirect': 21, 'ambiguous': 7, 'unmatched': 20, 'withheld': 169, 'upstreamOnly': 53}
    rows = []
    for file in descriptor['files']:
        path = ROOT / file['path']; assert digest(path) == file['sha256']
        raw = path.read_bytes(); assert raw[9] == 255
        source = gzip.decompress(raw); assert len(source) == file['sourceBytes'] and hashlib.sha256(source).hexdigest() == file['sourceSha256']
        part = json.loads(source); assert len(part) == file['records']; rows.extend(part)
    assert len(rows) == descriptor['counts']['total'] and len({x['colId'] for x in rows}) == len(rows)
    assert [x['colId'] for x in rows] == sorted(x['colId'] for x in rows)
    assert all(x['status'] in {'accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld'} for x in rows)
    assert all(x['colId'] is not None for x in rows)
    assert all(x['sourceRows'] for x in rows if x['status'] != 'unmatched')
    redirects = [x for x in rows if x['status'] == 'redirect']
    assert redirects and all(x['acceptedName']['status'] == 'accepted' and (x['matchedName'] is None or (x['matchedName']['status'] == 'synonym' and x['matchedName']['nameId'] != x['acceptedName']['nameId'])) for x in redirects)
    assert all(len(x['candidates']) > 1 for x in rows if x['status'] == 'ambiguous')
    assert all(x['matchedName'] is None and x['acceptedName'] is None for x in rows if x['status'] in {'unmatched', 'withheld'})
    assert all(isinstance(locator['row'], int) and locator['row'] >= 2 for x in rows + ([*json.loads(gzip.decompress((ROOT / descriptor['upstreamOnlyFiles'][0]['path']).read_bytes()))]) for locator in x['sourceRows'])
    upstream_file = descriptor['upstreamOnlyFiles'][0]; upstream_path = ROOT / upstream_file['path']; upstream = json.loads(gzip.decompress(upstream_path.read_bytes()))
    assert len(upstream) == 53 and all(x['status'] == 'upstream-only' and x['colId'] is None and x['sourceRows'] for x in upstream)
    assert ledger['totals'] == descriptor['counts']
    print(json.dumps({'rows': len(rows), 'upstreamOnly': len(upstream), 'files': len(descriptor['files'])}))

if __name__ == '__main__': main()
