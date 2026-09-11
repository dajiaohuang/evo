#!/usr/bin/env python3
"""Focused tests for the HydroShare preview encoder."""

from __future__ import annotations

import importlib.util
import tempfile
import unittest
from pathlib import Path

import numpy as np
from scipy.io import netcdf_file


MODULE_PATH = Path(__file__).with_name("import-hydroshare-paleophysiography.py")
SPEC = importlib.util.spec_from_file_location("hydroshare_import", MODULE_PATH)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


def synthetic_netcdf() -> bytes:
    descriptor, path = tempfile.mkstemp(suffix=".nc")
    try:
        import os
        os.close(descriptor)
        with netcdf_file(path, mode="w") as dataset:
            dataset.createDimension("latitude", MODULE.HEIGHT)
            dataset.createDimension("longitude", MODULE.WIDTH)
            latitude = dataset.createVariable("latitude", "f8", ("latitude",))
            longitude = dataset.createVariable("longitude", "f8", ("longitude",))
            elevation = dataset.createVariable("z", "f8", ("latitude", "longitude"))
            latitude[:] = -90 + np.arange(MODULE.HEIGHT) * 0.5
            longitude[:] = -180 + np.arange(MODULE.WIDTH) * 0.5
            elevation[:] = np.add.outer(latitude[:], longitude[:])
            dataset.title = "synthetic"
            dataset.creator_name = "Tristan Salles"
            dataset.creator_email = "tristan.salles@sydney.edu.au"
            dataset.license = "CC BY-NC-SA"
        return Path(path).read_bytes()
    finally:
        Path(path).unlink(missing_ok=True)


class HydroSharePreviewTest(unittest.TestCase):
    def test_parse_preserves_grid_and_records_float_cast_error(self) -> None:
        values, metadata = MODULE.parse_frame(synthetic_netcdf(), 0)
        self.assertEqual(values.shape, (MODULE.HEIGHT, MODULE.WIDTH))
        self.assertEqual(values.dtype, np.dtype("<f4"))
        self.assertEqual(metadata["creator"], "Tristan Salles")
        self.assertGreaterEqual(metadata["castMaximumAbsoluteError"], 0)

    def test_gzip_is_reproducible(self) -> None:
        payload = b"evo-hydroshare-preview"
        self.assertEqual(MODULE.gzip_bytes(payload), MODULE.gzip_bytes(payload))


if __name__ == "__main__":
    unittest.main()
