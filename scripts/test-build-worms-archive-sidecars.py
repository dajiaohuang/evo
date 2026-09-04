import unittest
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location('worms_importer', Path(__file__).with_name('build-worms-archive-sidecars.py'))
importer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(importer)


class ScopeRoutingTests(unittest.TestCase):
    def test_rc105_default_scope_set_is_unchanged(self):
        self.assertEqual(set(importer.LEGACY_SPECS), {'mollusca', 'porifera', 'cnidaria'})

    def test_new_scopes_are_explicit_and_pinned(self):
        self.assertEqual(importer.SPECS['nematoda'], ('other-animals', 'NM', '799', 'Nematoda', 19604))
        self.assertEqual(importer.SPECS['crustacea'], ('crustaceans-insects', 'KZX8B', '1066', 'Crustacea', 80890))

    def test_scope_output_and_ledger_routes(self):
        self.assertEqual(importer.output_directory('nematoda', 'other-animals'), importer.ROOT / 'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
        self.assertEqual(importer.output_directory('crustacea', 'crustaceans-insects'), importer.ROOT / 'data/packages/arthropoda/crustaceans-insects/nomenclature')
        self.assertEqual(importer.output_directory('mollusca', 'molluscs-brachiopods'), importer.ROOT / 'data/packages/invertebrata/molluscs-brachiopods/nomenclature')
        self.assertEqual(importer.ledger_relative_path('nematoda'), 'data/sources/worms-nematoda-archive-2011-import-ledger.json')
        self.assertEqual(importer.ledger_relative_path('crustacea'), 'data/sources/worms-crustacea-archive-2011-import-ledger.json')
        self.assertEqual(importer.ledger_relative_path('annelida'), 'data/sources/worms-annelida-archive-2011-import-ledger.json')
        self.assertEqual(importer.ledger_relative_path('mollusca'), 'data/sources/worms-archive-2011-import-ledger.json')


if __name__ == '__main__':
    unittest.main()
