import gzip
import importlib.util
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).with_name("reconstruct_cao2024_offline.py")
SPEC = importlib.util.spec_from_file_location("reconstruct_cao2024_offline", MODULE_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader
SPEC.loader.exec_module(MODULE)


class OfflineCao2024Test(unittest.TestCase):
    def test_layer_specific_grid_matches_runtime_contract(self):
        expected_counts = {
            "coastlines": 247,
            "platePolygons": 493,
            "plateBoundaries": 493,
            "continentalPolygons": 130,
            "continentOceanBoundaries": 130,
            "staticPolygons": 72,
        }
        self.assertEqual(
            {layer: len(MODULE.layer_age_grid(layer)) for layer in MODULE.LAYER_ORDER},
            expected_counts,
        )
        self.assertEqual(sum(expected_counts.values()), 1565)
        for layer in MODULE.LAYER_ORDER:
            grid = MODULE.layer_age_grid(layer)
            self.assertEqual(grid[0], 0)
            self.assertIn(540, grid)
            self.assertEqual(grid[-1], 1800)
            self.assertTrue(set(MODULE.PERIOD_MIDPOINT_AGES).issubset(grid))

    def test_cadence_schema_uses_cadence_ma(self):
        for layer in MODULE.LAYER_ORDER:
            for band in MODULE.layer_cadence_bands(layer):
                self.assertIn("cadenceMa", band)
                self.assertNotIn("stepMa", band)

    def test_cob_name_policy_uses_independent_token(self):
        self.assertTrue(MODULE.explicit_alternative_cob_name("alternative aCOB 7"))
        self.assertTrue(MODULE.explicit_alternative_cob_name("candidate COB-east"))
        self.assertFalse(MODULE.explicit_alternative_cob_name("Jacobson terrane"))

    def test_deterministic_gzip_and_frame_name(self):
        payload = b'{"type":"FeatureCollection","features":[]}\n'
        first = MODULE.deterministic_gzip(payload)
        self.assertEqual(first, MODULE.deterministic_gzip(payload))
        self.assertEqual(gzip.decompress(first), payload)
        self.assertEqual(MODULE.age_filename(104.55), "ma-0104.550.json.gz")


if __name__ == "__main__":
    unittest.main()
