#!/usr/bin/env python3
"""Audit lossless storage strategies for the complete pinned PaleoDEM archive.

This is a refresh-time utility, not an application dependency. It reads every
NetCDF frame from the immutable source archive, verifies the shared 0.1 degree
grid and integer-metre values, then compares independently compressed frames
with bounded temporal-delta groups. No reconstructed values are changed.
"""

from __future__ import annotations

import argparse
import gzip
import hashlib
import json
import re
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path


WIDTH = 3601
HEIGHT = 1801
AGE_PATTERN = re.compile(r"_(\d+)Ma\.nc$")


def compressed_size(payload: bytes) -> int:
    return len(gzip.compress(payload, compresslevel=9, mtime=0))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", required=True, type=Path)
    parser.add_argument("--dependency-root", required=True, type=Path)
    parser.add_argument("--checkpoint-interval", type=int, default=12)
    arguments = parser.parse_args()

    if arguments.checkpoint_interval < 1:
        raise ValueError("checkpoint interval must be positive")
    sys.path.insert(0, str(arguments.dependency_root.resolve()))
    import numpy as np  # pylint: disable=import-outside-toplevel
    from netCDF4 import Dataset  # pylint: disable=import-outside-toplevel

    archive_sha = hashlib.sha256(arguments.archive.read_bytes()).hexdigest()
    with zipfile.ZipFile(arguments.archive) as source:
        members = []
        for info in source.infolist():
            if info.filename.startswith("__MACOSX/") or Path(info.filename).name.startswith("._"):
                continue
            match = AGE_PATTERN.search(info.filename)
            if match:
                members.append((int(match.group(1)), info))
        members.sort(key=lambda item: item[0])
        if len(members) != 109 or len({age for age, _ in members}) != len(members):
            raise ValueError("expected 109 uniquely aged NetCDF frames")

        frames = []
        previous = None
        independent_total = 0
        bounded_delta_total = 0
        with tempfile.TemporaryDirectory(prefix="evo-paleodem-audit-") as temporary:
            frame_path = Path(temporary) / "frame.nc"
            for index, (age, info) in enumerate(members):
                with source.open(info) as compressed, frame_path.open("wb") as extracted:
                    shutil.copyfileobj(compressed, extracted)
                with Dataset(frame_path) as dataset:
                    latitude = np.asarray(dataset.variables["latitude"][:], dtype=np.float64)
                    longitude = np.asarray(dataset.variables["longitude"][:], dtype=np.float64)
                    elevation = np.ma.asarray(dataset.variables["z"][:])
                    description = str(dataset.getncattr("description"))
                    if latitude.shape != (HEIGHT,) or longitude.shape != (WIDTH,) or elevation.shape != (HEIGHT, WIDTH):
                        raise ValueError(f"{info.filename}: unexpected dimensions")
                    if not np.allclose(latitude, 90 - np.arange(HEIGHT) * 0.1, atol=1e-8):
                        raise ValueError(f"{info.filename}: unexpected latitude coordinates")
                    if not np.allclose(longitude, -180 + np.arange(WIDTH) * 0.1, atol=1e-8):
                        raise ValueError(f"{info.filename}: unexpected longitude coordinates")
                    values = np.asarray(elevation)
                    if np.ma.count_masked(elevation) or not np.isfinite(values).all():
                        raise ValueError(f"{info.filename}: masked or non-finite elevation")
                    if not np.array_equal(values, np.rint(values)):
                        raise ValueError(f"{info.filename}: non-integer metre elevation")
                    if float(values.min()) < np.iinfo(np.int16).min or float(values.max()) > np.iinfo(np.int16).max:
                        raise ValueError(f"{info.filename}: elevation outside signed 16-bit range")
                    packed = np.asarray(values, dtype="<i2")

                independent_bytes = compressed_size(packed.tobytes(order="C"))
                checkpoint = index % arguments.checkpoint_interval == 0
                if checkpoint:
                    stored = packed
                    encoding = "absolute-i16"
                    stored_bytes = compressed_size(stored.tobytes(order="C"))
                else:
                    difference = packed.astype(np.int32) - previous.astype(np.int32)
                    if difference.min() < np.iinfo(np.int16).min or difference.max() > np.iinfo(np.int16).max:
                        raise ValueError(f"{info.filename}: temporal delta outside signed 16-bit range")
                    stored = difference.astype("<i2")
                    encoding = "delta-i16-from-previous"
                    stored_bytes = compressed_size(stored.tobytes(order="C"))
                independent_total += independent_bytes
                bounded_delta_total += stored_bytes
                frames.append({
                    "ageMa": age,
                    "member": info.filename,
                    "memberBytes": info.file_size,
                    "description": description,
                    "minimumMetres": int(packed.min()),
                    "maximumMetres": int(packed.max()),
                    "independentGzipBytes": independent_bytes,
                    "boundedEncoding": encoding,
                    "boundedGzipBytes": stored_bytes,
                })
                previous = packed

    print(json.dumps({
        "archive": str(arguments.archive),
        "archiveBytes": arguments.archive.stat().st_size,
        "archiveSha256": archive_sha,
        "frameCount": len(frames),
        "checkpointInterval": arguments.checkpoint_interval,
        "maximumDeltaChain": arguments.checkpoint_interval - 1,
        "decodedBytesPerFrame": WIDTH * HEIGHT * 2,
        "independentGzipBytes": independent_total,
        "boundedDeltaGzipBytes": bounded_delta_total,
        "savingsBytes": independent_total - bounded_delta_total,
        "frames": frames,
    }, indent=2))


if __name__ == "__main__":
    main()
