#!/usr/bin/env python3
"""Build the complete, independently addressable PaleoDEM v2 grid series.

This refresh-only importer keeps numpy and netCDF4 out of the application
dependency graph. It verifies the immutable Zenodo archive and every NetCDF
member before writing deterministic, lossless little-endian i16 gzip grids
plus their complete source ledger.
"""

from __future__ import annotations

import argparse
import gzip
import hashlib
import json
import re
import sys
import tempfile
import zipfile
from pathlib import Path


WIDTH = 3601
HEIGHT = 1801
CELL_COUNT = WIDTH * HEIGHT
DECODED_BYTES = CELL_COUNT * 2
PREVIEW_STRIDE = 5
PREVIEW_WIDTH = (WIDTH - 1) // PREVIEW_STRIDE + 1
PREVIEW_HEIGHT = (HEIGHT - 1) // PREVIEW_STRIDE + 1
PREVIEW_DECODED_BYTES = PREVIEW_WIDTH * PREVIEW_HEIGHT * 2
EXPECTED_ARCHIVE_BYTES = 207_273_848
EXPECTED_ARCHIVE_MD5 = "89eb50d8645707ab221b023078535bda"
EXPECTED_ARCHIVE_SHA256 = "ab360184d8260a815ef5ed6b8b4e0abdbf99ef5ee8aa87dfd070af323ceb42da"
AGE_PATTERN = re.compile(r"_(\d+)Ma\.nc$")
DESCRIPTION_AGE_PATTERN = re.compile(r"(?<!\d)(\d+(?:\.\d+)?)\s*Ma\b", re.IGNORECASE)


def digest(path: Path, algorithm: str = "sha256") -> str:
    checksum = hashlib.new(algorithm)
    with path.open("rb") as source:
        for block in iter(lambda: source.read(1024 * 1024), b""):
            checksum.update(block)
    return checksum.hexdigest()


def gzip_bytes(payload: bytes) -> bytes:
    with tempfile.SpooledTemporaryFile() as destination:
        with gzip.GzipFile(filename="", mode="wb", fileobj=destination, compresslevel=9, mtime=0) as compressed:
            compressed.write(payload)
        destination.seek(0)
        return destination.read()


def description_age(description: str) -> int | float | None:
    matches = DESCRIPTION_AGE_PATTERN.findall(description)
    if not matches:
        return None
    values = {float(value) for value in matches}
    if len(values) != 1:
        raise ValueError(f"Internal description contains multiple ages: {description}")
    value = values.pop()
    return int(value) if value.is_integer() else value


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", required=True, type=Path)
    parser.add_argument("--dependency-root", required=True, type=Path)
    parser.add_argument("--output-root", required=True, type=Path)
    parser.add_argument("--retrieved-at", required=True)
    arguments = parser.parse_args()

    sys.path.insert(0, str(arguments.dependency_root.resolve()))
    import numpy as np  # pylint: disable=import-outside-toplevel
    from netCDF4 import Dataset  # pylint: disable=import-outside-toplevel

    if arguments.archive.stat().st_size != EXPECTED_ARCHIVE_BYTES:
        raise ValueError("PaleoDEM archive byte count differs from the Zenodo record")
    if digest(arguments.archive, "md5") != EXPECTED_ARCHIVE_MD5:
        raise ValueError("PaleoDEM archive MD5 differs from the Zenodo record")
    if digest(arguments.archive) != EXPECTED_ARCHIVE_SHA256:
        raise ValueError("PaleoDEM archive SHA-256 differs from the pinned local checksum")

    arguments.output_root.mkdir(parents=True, exist_ok=True)
    frames = []
    source_member_bytes = 0
    grid_bytes = 0
    preview_grid_bytes = 0
    with zipfile.ZipFile(arguments.archive) as source, tempfile.TemporaryDirectory(prefix="evo-paleodem-import-") as temporary:
        members = []
        for info in source.infolist():
            if info.filename.startswith("__MACOSX/") or Path(info.filename).name.startswith("._"):
                continue
            match = AGE_PATTERN.search(info.filename)
            if match:
                members.append((int(match.group(1)), info))
        members.sort(key=lambda item: item[0])
        expected_ages = list(range(0, 541, 5))
        if [age for age, _ in members] != expected_ages:
            raise ValueError("Expected exactly one PaleoDEM NetCDF member at every 5 Ma age from 0 through 540 Ma")

        frame_path = Path(temporary) / "frame.nc"
        for index, (age, info) in enumerate(members):
            member_checksum = hashlib.sha256()
            with source.open(info) as compressed, frame_path.open("wb") as extracted:
                while block := compressed.read(1024 * 1024):
                    extracted.write(block)
                    member_checksum.update(block)
            if frame_path.stat().st_size != info.file_size:
                raise ValueError(f"{info.filename}: extracted member byte count differs from ZIP directory")

            with Dataset(frame_path) as dataset:
                latitude = np.asarray(dataset.variables["latitude"][:], dtype=np.float64)
                longitude = np.asarray(dataset.variables["longitude"][:], dtype=np.float64)
                elevation = np.ma.asarray(dataset.variables["z"][:])
                internal_description = str(dataset.getncattr("description"))
                if dataset.data_model != "NETCDF4_CLASSIC":
                    raise ValueError(f"{info.filename}: expected NETCDF4_CLASSIC, received {dataset.data_model}")
                if latitude.shape != (HEIGHT,) or longitude.shape != (WIDTH,) or elevation.shape != (HEIGHT, WIDTH):
                    raise ValueError(f"{info.filename}: unexpected dimensions")
                if not np.allclose(latitude, 90 - np.arange(HEIGHT) * 0.1, atol=1e-8):
                    raise ValueError(f"{info.filename}: unexpected latitude coordinates")
                if not np.allclose(longitude, -180 + np.arange(WIDTH) * 0.1, atol=1e-8):
                    raise ValueError(f"{info.filename}: unexpected longitude coordinates")
                values = np.asarray(elevation)
                masked_cells = int(np.ma.count_masked(elevation))
                nan_cells = int(np.isnan(values).sum())
                if masked_cells or not np.isfinite(values).all():
                    raise ValueError(f"{info.filename}: masked or non-finite elevation")
                if not np.array_equal(values, np.rint(values)):
                    raise ValueError(f"{info.filename}: non-integer metre elevation")
                if float(values.min()) < np.iinfo(np.int16).min or float(values.max()) > np.iinfo(np.int16).max:
                    raise ValueError(f"{info.filename}: elevation outside signed 16-bit range")
                packed = np.asarray(values, dtype="<i2").tobytes(order="C")
                preview_packed = np.asarray(values[::PREVIEW_STRIDE, ::PREVIEW_STRIDE], dtype="<i2").tobytes(order="C")

            if len(packed) != DECODED_BYTES:
                raise ValueError(f"{info.filename}: packed grid has the wrong byte count")
            if len(preview_packed) != PREVIEW_DECODED_BYTES:
                raise ValueError(f"{info.filename}: preview grid has the wrong byte count")
            compressed_grid = gzip_bytes(packed)
            compressed_preview = gzip_bytes(preview_packed)
            grid_name = f"ma-{age:04d}.grid.i16.gz"
            grid_path = arguments.output_root / grid_name
            temporary_grid = grid_path.with_suffix(f"{grid_path.suffix}.tmp")
            temporary_grid.write_bytes(compressed_grid)
            temporary_grid.replace(grid_path)
            preview_name = f"ma-{age:04d}.preview-05deg.i16.gz"
            preview_path = arguments.output_root / preview_name
            temporary_preview = preview_path.with_suffix(f"{preview_path.suffix}.tmp")
            temporary_preview.write_bytes(compressed_preview)
            temporary_preview.replace(preview_path)

            youngest = 0 if age == 0 else age - 2.5
            oldest = 540 if age == 540 else age + 2.5
            internal_age = description_age(internal_description)
            frames.append({
                "id": f"archive-{age:04d}ma",
                "archiveNominalAgeMa": age,
                "memberPath": info.filename,
                "memberBytes": info.file_size,
                "memberCompressedBytes": info.compress_size,
                "memberSha256": member_checksum.hexdigest(),
                "format": "NETCDF4_CLASSIC",
                "internalDescription": internal_description,
                "internalDescriptionAgeMa": internal_age,
                "ageDisclosure": (
                    f"The archive filename supplies the nominal {age} Ma age. "
                    + (f"The NetCDF global description supplies {internal_age} Ma; both values are retained. " if internal_age is not None else "The NetCDF global description contains no parseable numerical Ma age and is retained verbatim. ")
                    + "The UI selects the nearest nominal archive frame without temporal interpolation."
                ),
                "displayAgeRangeMa": {"youngest": youngest, "oldest": oldest},
                "width": WIDTH,
                "height": HEIGHT,
                "cellCount": CELL_COUNT,
                "elevation": {
                    "variable": "z",
                    "unit": "m",
                    "minimum": int(values.min()),
                    "maximum": int(values.max()),
                    "maskedCells": masked_cells,
                    "nanCells": nan_cells,
                    "integerMetreCells": CELL_COUNT,
                },
                "grid": {
                    "path": f"data/paleotopography/scotese-wright-2018-v2/{grid_name}",
                    "encoding": "gzip-signed-int16-little-endian-row-major",
                    "bytes": len(compressed_grid),
                    "sha256": hashlib.sha256(compressed_grid).hexdigest(),
                    "decodedBytes": len(packed),
                    "decodedSha256": hashlib.sha256(packed).hexdigest(),
                },
                "webPreviewGrid": {
                    "path": f"data/paleotopography/scotese-wright-2018-v2/{preview_name}",
                    "derivation": "exact-decimation-every-fifth-source-row-and-column",
                    "sourceGridSha256": hashlib.sha256(packed).hexdigest(),
                    "stride": PREVIEW_STRIDE,
                    "resolutionDegrees": 0.5,
                    "width": PREVIEW_WIDTH,
                    "height": PREVIEW_HEIGHT,
                    "cellCount": PREVIEW_WIDTH * PREVIEW_HEIGHT,
                    "encoding": "gzip-signed-int16-little-endian-row-major",
                    "bytes": len(compressed_preview),
                    "sha256": hashlib.sha256(compressed_preview).hexdigest(),
                    "decodedBytes": len(preview_packed),
                    "decodedSha256": hashlib.sha256(preview_packed).hexdigest(),
                },
            })
            source_member_bytes += info.file_size
            grid_bytes += len(compressed_grid)
            preview_grid_bytes += len(compressed_preview)
            print(f"[{index + 1:03d}/109] {age:>3} Ma full={len(compressed_grid):>8} preview={len(compressed_preview):>7} bytes {internal_description}", file=sys.stderr)

    manifest = {
        "schemaVersion": 2,
        "id": "scotese-wright-2018-paleodem-v2",
        "title": "PALEOMAP Paleodigital Elevation Models for the Phanerozoic",
        "source": {
            "authors": ["Christopher R. Scotese", "Nicky M. Wright"],
            "publishedYear": 2018,
            "recordVersion": "v2",
            "doi": "10.5281/zenodo.5460860",
            "recordUrl": "https://zenodo.org/records/5460860",
            "earthByteResourceUrl": "https://www.earthbyte.org/paleodem-resource-scotese-and-wright-2018/",
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "licenseEvidenceUrl": "https://www.earthbyte.org/webdav/ftp/Data_Collections/Scotese_Wright_2018_PaleoDEM/License.txt",
            "retrievedAt": arguments.retrieved_at,
        },
        "archive": {
            "fileName": arguments.archive.name,
            "contentUrl": "https://zenodo.org/api/records/5460860/files/Scotese_Wright_2018_Maps_1-88_6minX6min_PaleoDEMS_nc.zip/content",
            "bytes": EXPECTED_ARCHIVE_BYTES,
            "officialMd5": EXPECTED_ARCHIVE_MD5,
            "sha256": EXPECTED_ARCHIVE_SHA256,
            "netcdfMemberCount": len(frames),
            "redistributed": False,
        },
        "grid": {
            "coordinateReferenceSystem": "geographic longitude/latitude",
            "width": WIDTH,
            "height": HEIGHT,
            "cellCount": CELL_COUNT,
            "decodedBytesPerFrame": DECODED_BYTES,
            "longitude": {"first": -180, "last": 180, "stepDegrees": 0.1, "order": "west-to-east"},
            "latitude": {"first": 90, "last": -90, "stepDegrees": -0.1, "order": "north-to-south"},
            "encoding": "gzip-signed-int16-little-endian-row-major",
            "transformation": "Every finite, exactly integral source z value is stored losslessly as signed 16-bit little-endian metres in unchanged north-to-south, west-to-east row order. No spatial or temporal interpolation is stored.",
            "webPreview": {
                "resolutionDegrees": 0.5,
                "stride": PREVIEW_STRIDE,
                "width": PREVIEW_WIDTH,
                "height": PREVIEW_HEIGHT,
                "cellCount": PREVIEW_WIDTH * PREVIEW_HEIGHT,
                "decodedBytesPerFrame": PREVIEW_DECODED_BYTES,
                "derivation": "Retain every fifth source row and column, including all four geographic edges. Values remain exact selected source integer metres; no averaging or interpolation is stored.",
            },
        },
        "selection": {
            "ageRangeMa": {"youngest": 0, "oldest": 540},
            "cadenceMa": 5,
            "method": "nearest-nominal-age",
            "tieBreak": "younger",
            "outsideRange": "unavailable",
            "temporalInterpolation": "none",
        },
        "visualization": {
            "renderer": "client-worker-canvas-grid-layer",
            "projection": "EPSG:3857",
            "tileSize": 256,
            "maximumNativeZoom": 4,
            "maximumZoomGroundSampling": "approximately 0.088 degrees per display pixel at the equator",
            "resampling": "bilinear display sampling from one selected 0.1 degree metre grid",
            "mercatorLatitudeLimitDegrees": 85.0511287798066,
            "preGeneratedTiles": 0,
        },
        "totals": {
            "frames": len(frames),
            "sourceMemberBytes": source_member_bytes,
            "independentGridGzipBytes": grid_bytes,
            "webPreviewGridGzipBytes": preview_grid_bytes,
            "decodedGridBytes": len(frames) * DECODED_BYTES,
            "webPreviewDecodedGridBytes": len(frames) * PREVIEW_DECODED_BYTES,
        },
        "frames": frames,
        "scientificLimitations": [
            "These are modelled PaleoDEM interpretations, not measured ancient elevation or bathymetry, ground truth or uncertainty surfaces.",
            "Each displayed surface is selected from an independent five-million-year nominal archive frame; no temporal interpolation or extrapolation is performed.",
            "Canvas colours and bilinear sampling are visualization choices; every canonical grid retains the original integer metre values and polar rows.",
            "Web Mercator display stops at approximately plus or minus 85.051 degrees although each source grid retains both polar rows.",
            "PALEOMAP terrain is independent of CAO2024 geometry and observations and PBDB paleocoordinates. Overlay does not imply spatial co-registration.",
        ],
    }
    manifest_path = arguments.output_root / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps({
        "manifest": str(manifest_path),
        "frames": len(frames),
        "sourceMemberBytes": source_member_bytes,
        "independentGridGzipBytes": grid_bytes,
        "webPreviewGridGzipBytes": preview_grid_bytes,
        "decodedGridBytes": len(frames) * DECODED_BYTES,
        "manifestSha256": digest(manifest_path),
    }, indent=2))


if __name__ == "__main__":
    main()
