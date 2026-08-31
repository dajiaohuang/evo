#!/usr/bin/env python3
"""Extract one reviewed Scotese & Wright PaleoDEM NetCDF frame.

This refresh-only importer intentionally keeps netCDF4 out of the application
dependency graph. Install it in an isolated environment before running the
script, then review the printed source and output hashes against the pinned
source ledger.
"""

from __future__ import annotations

import argparse
import gzip
import hashlib
import json
from pathlib import Path

import numpy as np
from netCDF4 import Dataset


WIDTH = 3601
HEIGHT = 1801
EXPECTED_DESCRIPTION = "PALEOMAP:KT_Boundary, 66 Ma"


def digest(path: Path) -> str:
    checksum = hashlib.sha256()
    with path.open("rb") as source:
        for block in iter(lambda: source.read(1024 * 1024), b""):
            checksum.update(block)
    return checksum.hexdigest()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    arguments = parser.parse_args()

    with Dataset(arguments.input) as dataset:
        latitude = np.asarray(dataset.variables["latitude"][:], dtype=np.float64)
        longitude = np.asarray(dataset.variables["longitude"][:], dtype=np.float64)
        elevation = np.ma.asarray(dataset.variables["z"][:])
        description = str(dataset.getncattr("description"))

        if dataset.data_model != "NETCDF4_CLASSIC":
            raise ValueError(f"Expected NETCDF4_CLASSIC, received {dataset.data_model}")
        if latitude.shape != (HEIGHT,) or longitude.shape != (WIDTH,) or elevation.shape != (HEIGHT, WIDTH):
            raise ValueError("Unexpected PaleoDEM dimensions")
        if not np.allclose(latitude, 90 - np.arange(HEIGHT) * 0.1, atol=1e-8):
            raise ValueError("Latitude coordinates are not the expected north-to-south 0.1 degree grid")
        if not np.allclose(longitude, -180 + np.arange(WIDTH) * 0.1, atol=1e-8):
            raise ValueError("Longitude coordinates are not the expected west-to-east 0.1 degree grid")
        if description != EXPECTED_DESCRIPTION:
            raise ValueError(f"Unexpected internal source description: {description}")
        if np.ma.count_masked(elevation) or np.isnan(np.asarray(elevation)).any():
            raise ValueError("PaleoDEM frame contains masked or NaN cells")
        if not np.array_equal(np.asarray(elevation), np.rint(np.asarray(elevation))):
            raise ValueError("PaleoDEM frame contains non-integer metre values")
        if float(np.min(elevation)) < np.iinfo(np.int16).min or float(np.max(elevation)) > np.iinfo(np.int16).max:
            raise ValueError("PaleoDEM frame exceeds signed 16-bit metre storage")

        packed = np.asarray(elevation, dtype="<i2").tobytes(order="C")

    arguments.output.parent.mkdir(parents=True, exist_ok=True)
    with arguments.output.open("wb") as destination:
        with gzip.GzipFile(filename="", mode="wb", fileobj=destination, compresslevel=9, mtime=0) as compressed:
            compressed.write(packed)

    print(json.dumps({
        "source": str(arguments.input),
        "sourceBytes": arguments.input.stat().st_size,
        "sourceSha256": digest(arguments.input),
        "output": str(arguments.output),
        "outputBytes": arguments.output.stat().st_size,
        "outputSha256": digest(arguments.output),
        "decodedBytes": len(packed),
        "decodedSha256": hashlib.sha256(packed).hexdigest(),
        "width": WIDTH,
        "height": HEIGHT,
        "minimumMetres": int(np.min(elevation)),
        "maximumMetres": int(np.max(elevation)),
        "sourceDescription": description,
    }, indent=2))


if __name__ == "__main__":
    main()
