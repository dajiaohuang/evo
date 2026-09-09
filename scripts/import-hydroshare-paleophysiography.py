#!/usr/bin/env python3
"""Build a small, deterministic HydroShare goSPL research preview.

The published HydroShare resource contains 0.05-degree float64 NetCDF grids
that are too large for the Evo source and native budgets.  This importer asks
the public THREDDS NCSS service for every source frame with ``horizStride=10``
and stores the selected source cells as little-endian float32 gzip payloads.
The result is a separately licensed, non-commercial research artifact; it is
not the lossless source series and is not used by the default Evo runtime.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import re
import time
import urllib.parse
import urllib.request
from gzip import GzipFile
from pathlib import Path

import numpy as np
from scipy.io import netcdf_file


RESOURCE_ID = "b3f1e3581d174bf58b00ba5672604710"
RESOURCE_URL = f"https://www.hydroshare.org/resource/{RESOURCE_ID}/"
CATALOG_URL = (
    "https://thredds.hydroshare.org/thredds/catalog/hydroshare/resources/"
    f"{RESOURCE_ID}/data/contents/catalog.html"
)
NCSS_BASE = (
    "https://thredds.hydroshare.org/thredds/ncss/grid/hydroshare/resources/"
    f"{RESOURCE_ID}/data/contents"
)
LICENSE = "CC-BY-NC-SA-4.0"
LICENSE_URL = "https://creativecommons.org/licenses/by-nc-sa/4.0/"
WIDTH = 721
HEIGHT = 361
STRIDE = 10
SOURCE_WIDTH = 7201
SOURCE_HEIGHT = 3601


def sha256_bytes(payload: bytes) -> str:
    return hashlib.sha256(payload).hexdigest()


def gzip_bytes(payload: bytes) -> bytes:
    output = io.BytesIO()
    with GzipFile(fileobj=output, filename="", mode="wb", compresslevel=9, mtime=0) as stream:
        stream.write(payload)
    return output.getvalue()


def fetch(url: str, attempts: int = 3) -> bytes:
    error: Exception | None = None
    for attempt in range(1, attempts + 1):
        try:
            request = urllib.request.Request(
                url,
                headers={
                    "Accept": "application/x-netcdf, application/octet-stream, */*",
                    "User-Agent": "EvoAtlasHydroSharePreview/1.0",
                },
            )
            with urllib.request.urlopen(request, timeout=120) as response:
                if response.status != 200:
                    raise RuntimeError(f"HTTP {response.status} for {url}")
                return response.read()
        except Exception as caught:  # pragma: no cover - retry branch is network dependent
            error = caught
            if attempt < attempts:
                time.sleep(attempt)
    raise RuntimeError(f"request failed after {attempts} attempts: {url}") from error


def discover_ages() -> list[int]:
    catalog = fetch(CATALOG_URL).decode("utf-8")
    ages = sorted({int(match.group(1)) for match in re.finditer(r"z(\d+)Ma\.nc", catalog)})
    if ages != sorted(ages) or len(ages) != 108 or ages[0] != 0 or ages[-1] != 541:
        raise ValueError(f"unexpected HydroShare catalog age inventory: {ages}")
    return ages


def ncss_url(age: int) -> str:
    filename = f"z{age}Ma.nc"
    query = urllib.parse.urlencode({"var": "z", "horizStride": STRIDE, "accept": "netcdf"})
    return f"{NCSS_BASE}/{filename}?{query}"


def parse_frame(payload: bytes, age: int) -> tuple[np.ndarray, dict[str, object]]:
    with netcdf_file(io.BytesIO(payload), mode="r", mmap=False) as dataset:
        if set(dataset.dimensions) != {"latitude", "longitude"}:
            raise ValueError(f"z{age}Ma.nc: unexpected dimensions {dataset.dimensions}")
        latitude = np.asarray(dataset.variables["latitude"].data, dtype=np.float64)
        longitude = np.asarray(dataset.variables["longitude"].data, dtype=np.float64)
        values = np.asarray(dataset.variables["z"].data, dtype=np.float64)
        if latitude.shape != (HEIGHT,) or longitude.shape != (WIDTH,) or values.shape != (HEIGHT, WIDTH):
            raise ValueError(f"z{age}Ma.nc: expected {HEIGHT}x{WIDTH} latitude/longitude/z arrays")
        if not np.allclose(latitude, -90 + np.arange(HEIGHT) * 0.5, atol=1e-10):
            raise ValueError(f"z{age}Ma.nc: latitude coordinates are not the exact 0.5-degree grid")
        if not np.allclose(longitude, -180 + np.arange(WIDTH) * 0.5, atol=1e-10):
            raise ValueError(f"z{age}Ma.nc: longitude coordinates are not the exact 0.5-degree grid")
        if not np.isfinite(values).all():
            raise ValueError(f"z{age}Ma.nc: z contains non-finite values")
        # float32 is the compact wire representation; quantify the cast rather
        # than silently presenting it as lossless source precision.
        packed_values = values.astype("<f4")
        cast_error = float(np.max(np.abs(values - packed_values.astype(np.float64))))
        attrs = {
            "title": getattr(dataset, "_attributes", {}).get("title", b"").decode("utf-8", "replace"),
            "summary": getattr(dataset, "_attributes", {}).get("summary", b"").decode("utf-8", "replace"),
            "creator": getattr(dataset, "_attributes", {}).get("creator_name", b"").decode("utf-8", "replace"),
            "creatorEmail": getattr(dataset, "_attributes", {}).get("creator_email", b"").decode("utf-8", "replace"),
            "sourceLicense": getattr(dataset, "_attributes", {}).get("license", b"").decode("utf-8", "replace"),
            "minimum": float(values.min()),
            "maximum": float(values.max()),
            "castMaximumAbsoluteError": cast_error,
            "nanCells": int(np.isnan(values).sum()),
        }
    return packed_values, attrs


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output-root", required=True, type=Path)
    parser.add_argument("--retrieved-at", required=True)
    parser.add_argument("--ages", help="comma-separated ages; defaults to the 108-entry catalog")
    parser.add_argument("--release-asset", help="public URL for the separately hosted preview ZIP")
    args = parser.parse_args()
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", args.retrieved_at):
        raise ValueError("--retrieved-at must be YYYY-MM-DD")
    ages = [int(value) for value in args.ages.split(",")] if args.ages else discover_ages()
    if len(set(ages)) != len(ages) or any(age < 0 or age > 541 for age in ages):
        raise ValueError("ages must be unique values in the 0-541 Ma source range")

    args.output_root.mkdir(parents=True, exist_ok=True)
    frames: list[dict[str, object]] = []
    for index, age in enumerate(sorted(ages), start=1):
        source_url = ncss_url(age)
        source_bytes = fetch(source_url)
        values, metadata = parse_frame(source_bytes, age)
        decoded = values.tobytes(order="C")
        compressed = gzip_bytes(decoded)
        name = f"ma-{age:04d}.preview-05deg.f32.gz"
        (args.output_root / name).write_bytes(compressed)
        frames.append(
            {
                "id": f"hydroshare-{age:04d}ma",
                "ageMa": age,
                "sourceFile": f"z{age}Ma.nc",
                "sourceUrl": source_url,
                "sourceBytes": len(source_bytes),
                "sourceSha256": sha256_bytes(source_bytes),
                "previewFile": name,
                "previewBytes": len(compressed),
                "previewSha256": sha256_bytes(compressed),
                "previewDecodedBytes": len(decoded),
                "previewDecodedSha256": sha256_bytes(decoded),
                "width": WIDTH,
                "height": HEIGHT,
                "cellCount": WIDTH * HEIGHT,
                "resolutionDegrees": 0.5,
                "encoding": "gzip-float32-little-endian-row-major",
                "derivation": "exact every-tenth source row and column in source south-to-north order; float64-to-float32 cast",
                "metadata": metadata,
            }
        )
        print(f"[{index:03d}/{len(ages):03d}] {age:>3} Ma source={len(source_bytes):>9} preview={len(compressed):>8}")

    manifest = {
        "schemaVersion": 1,
        "id": "hydroshare-paleo-physiography-v1",
        "title": "Paleo-Physiography Elevation-only Dataset — exact 0.5-degree research preview",
        "source": {
            "resourceId": RESOURCE_ID,
            "resourceUrl": RESOURCE_URL,
            "catalogUrl": CATALOG_URL,
            "authors": ["Tristan Salles", "Laurent Husson", "Morgane Lorcery", "B. Halder Boggiani"],
            "creatorEmail": "tristan.salles@sydney.edu.au",
            "publishedYear": 2022,
            "license": LICENSE,
            "licenseUrl": LICENSE_URL,
            "sourceGrid": {
                "width": SOURCE_WIDTH,
                "height": SOURCE_HEIGHT,
                "resolutionDegrees": 0.05,
                "variable": "z",
                "unit": "m",
                "valueType": "float64",
            },
            "retrievedAt": args.retrieved_at,
        },
        "preview": {
            "width": WIDTH,
            "height": HEIGHT,
            "resolutionDegrees": 0.5,
            "stride": STRIDE,
            "encoding": "gzip-float32-little-endian-row-major",
            "selection": "NCSS horizStride=10 selects every tenth source row and column; no spatial averaging or temporal interpolation.",
            "redistribution": "The preview is a derivative of the source and is distributed under CC BY-NC-SA 4.0 for non-commercial use only.",
        },
        "delivery": {
            "profile": "external-research-preview",
            "defaultRuntime": False,
            "releaseAsset": args.release_asset,
        },
        "frames": frames,
        "scientificLimitations": [
            "This is a goSPL landscape-evolution model output, not a direct observation or a unique ancient terrain measurement.",
            "The source is 0.05 degrees; this artifact retains every tenth source cell at 0.5 degrees and casts float64 values to float32.",
            "The source ages are irregular (0-541 Ma) and are not substituted for Evo's 0-540 Ma five-million-year PALEOMAP contract.",
            "The resource contains derived forcing from Scotese & Wright (2018) and Valdes et al. (2021); those works keep their own rights and citations.",
            "This artifact is not included in the default Evo runtime or native app bundles until maintainers approve an opt-in integration and its non-commercial licence boundary.",
        ],
    }
    (args.output_root / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
