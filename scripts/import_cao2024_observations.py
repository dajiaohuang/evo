#!/usr/bin/env python3
"""Import the five CAO2024 v2.4 observational point datasets.

The application does not depend on Python or pyGPlates at runtime. This
maintainer-only generator verifies the immutable Zenodo archive, preserves the
source GPML attribute lexemes, reconstructs supported point records with the
pinned CAO2024 rotation model, and writes deterministic gzip JSON shards.
"""

from __future__ import annotations

import argparse
import gzip
import hashlib
import io
import json
import math
import re
import sys
import zipfile
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any, BinaryIO, Iterable
from xml.etree import ElementTree


MODEL = "CAO2024"
MODEL_VERSION = "v2.4"
MAX_AGE_MA = 1800.0
ANCHOR_PLATE_ID = 0
COORDINATE_PRECISION = 6
ARCHIVE_URL = "https://zenodo.org/api/records/13628813/files/1.8Ga_model_GSF.zip/content"
ARCHIVE_SHA256 = "4ae9158a29c597b46f687f8c3f0f5a4a55df5ab69bde18e24257a17d358d8592"
ARCHIVE_MD5 = "4a032d3ab46e6023d14add8a54b6a541"
ARCHIVE_PREFIX = "1.8Ga_model_GSF/"

GPML = "{http://www.gplates.org/gplates}"
GML = "{http://www.opengis.net/gml}"

ROTATION_FILES = ("1000_0_rotfile.rot", "1800_1000_rotfile.rot")

ARCHIVE_FILES = {
    "1.8_Ga_reconstruction.gproj": (13615, "db561a01749dba1a57bdece88abfbffcc4b7583b7e6693b8dabf4160d90255b5", "auxiliary"),
    "1000-410_plate_boundaries.gpml": (15104418, "488e4b6330e2586fc363a1ad8dada659ac1409742846186fc275a213db306fb1", "integrated"),
    "1000_0_rotfile.rot": (625128, "e13c16ef5b2f8f116f598635e42a126b016b2c615358b499bcc3433f4a3c735c", "integrated"),
    "1800-1000_plate_boundaries.gpml": (4575384, "759a76605bc907197928214f4101403dd6221e7ba8d4ecacde57999bc3675dce", "integrated"),
    "1800_1000_rotfile.rot": (36539, "db2a57a8b7c7a08891c19840b6334ffb9c279b6a991a2c2eed099edb23445785", "integrated"),
    "250-0_plate_boundaries.gpml": (34391053, "4a9f97f6368860e5917f4e6fbf78d6d7c3caf77e1736e854250d067540bb60d4", "integrated"),
    "410-250_plate_boundaries.gpml": (7239518, "6516dbac4d7928e7ad71244b0bbabc65eb25e6e89dc79d4becb9a82a25a6fc91", "integrated"),
    "COBfile_1800_0.gpml": (14423254, "cfcea20c5244613e53ad4b9cdf6411d79ff535c25af335b4fa6eb9251377d4bd", "integrated"),
    "Paleomagnetic_poles.gpml": (494044, "449e19d291d141221d658741edd7876ae19ac0d47f116df205796536b6fa9caf", "integrated"),
    "README.txt": (358, "e730537d441b4265101ec8fd29e3e85866cea4515099088efa70f2e66d45ed91", "support"),
    "shapes_coasts.gpmlz": (1860295, "c660bc074aa84b366600d81d7ccf3a45658db81ab8cdd8f6bda26e094c0dc71f", "integrated"),
    "shapes_continents.gpmlz": (1243843, "6e30de73967f81a403f46370295dec5c0d7ed3ffd80c73d47df926461d949616", "integrated"),
    "static_polygons.gpmlz": (2248936, "9b30d231157f99f9a7942d073efcb85649b0a6e10e49332637df2386f1b1350f", "integrated"),
    "TopologyBuildingBlocks.gpml": (1135047, "7603af2502a8d261256f293be71487d28fe5a6b5a8fadd4bdc7845dc67b72297", "integrated"),
    "point_data/global_geochemistry_SIA-I_and-magnesian-type.gpmlz": (12065113, "edf420e7845e05651b9b1e377d7f1bfe22192ffe60d381c67e82fd9d53a551a1", "integrated"),
    "point_data/global_metamorphic_gradient_375_775_Orogen.gpml": (1200575, "77dfa8dfc77857311a06540f0c90b9f1be3481302a0a778ccfc1be1dd001f2f2", "integrated"),
    "point_data/global_metamorphic_gradient_larger_than_775_rift.gpml": (2251079, "f97364ac2b5090b38ca6d29f3b779d41406e5b1f9c17be787550739cb37df333", "integrated"),
    "point_data/global_metamorphic_gradient_smaller_than_375_SZ.gpml": (731877, "2aeaf78be8f6e26e6b0eb0c1ec184aa6bc12fea03c15610d1856cff8c702cf97", "integrated"),
}

DATASETS = (
    ("paleomagnetic-poles", "Paleomagnetic_poles.gpml"),
    ("geochemistry", "point_data/global_geochemistry_SIA-I_and-magnesian-type.gpmlz"),
    ("metamorphic-gradient-orogen", "point_data/global_metamorphic_gradient_375_775_Orogen.gpml"),
    ("metamorphic-gradient-rift", "point_data/global_metamorphic_gradient_larger_than_775_rift.gpml"),
    ("metamorphic-gradient-subduction-zone", "point_data/global_metamorphic_gradient_smaller_than_375_SZ.gpml"),
)

OUTPUT_PATHS = {
    "paleomagnetic-poles": "paleomagnetic-poles.json.gz",
    "metamorphic-gradient-orogen": "metamorphic-gradient/orogen.json.gz",
    "metamorphic-gradient-rift": "metamorphic-gradient/rift.json.gz",
    "metamorphic-gradient-subduction-zone": "metamorphic-gradient/subduction-zone.json.gz",
}


def digest_bytes(payload: bytes, algorithm: str = "sha256") -> str:
    return hashlib.new(algorithm, payload).hexdigest()


def compact_json(value: Any) -> bytes:
    return (json.dumps(value, ensure_ascii=False, separators=(",", ":"), sort_keys=False) + "\n").encode("utf-8")


def deterministic_gzip(payload: bytes) -> bytes:
    buffer = io.BytesIO()
    with gzip.GzipFile(filename="", mode="wb", fileobj=buffer, compresslevel=9, mtime=0) as stream:
        stream.write(payload)
    return buffer.getvalue()


def atomic_write(path: Path, payload: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(f".{path.name}.tmp")
    temporary.write_bytes(payload)
    temporary.replace(path)


def finite_number(value: str | None) -> float | None:
    try:
        number = float(value) if value is not None else None
    except ValueError:
        return None
    return number if number is not None and math.isfinite(number) else None


def rounded(value: float) -> float:
    result = round(float(value), COORDINATE_PRECISION)
    return 0.0 if result == 0 else result


def parse_position(container: ElementTree.Element | None) -> list[float] | None:
    position = container.find(".//" + GML + "pos") if container is not None else None
    if position is None or not position.text:
        return None
    parts = position.text.split()
    if len(parts) < 2:
        return None
    latitude, longitude = finite_number(parts[0]), finite_number(parts[1])
    if latitude is None or longitude is None:
        return None
    return [rounded(longitude), rounded(latitude)]


def open_gpml(path: Path) -> BinaryIO:
    return gzip.open(path, "rb") if path.suffix.lower() == ".gpmlz" else path.open("rb")


def verify_sources(archive_path: Path, model_root: Path) -> list[dict[str, Any]]:
    archive = archive_path.read_bytes()
    if digest_bytes(archive) != ARCHIVE_SHA256 or digest_bytes(archive, "md5") != ARCHIVE_MD5:
        raise ValueError(f"{archive_path}: archive checksum does not match CAO2024 v2.4")

    with zipfile.ZipFile(io.BytesIO(archive)) as bundle:
        members = {
            info.filename.removeprefix(ARCHIVE_PREFIX): info
            for info in bundle.infolist()
            if not info.is_dir()
        }
        if set(members) != set(ARCHIVE_FILES):
            missing = sorted(set(ARCHIVE_FILES) - set(members))
            extra = sorted(set(members) - set(ARCHIVE_FILES))
            raise ValueError(f"archive inventory mismatch; missing={missing}, extra={extra}")

        inventory = []
        for relative_path in sorted(ARCHIVE_FILES):
            expected_bytes, expected_sha256, status = ARCHIVE_FILES[relative_path]
            info = members[relative_path]
            archived = bundle.read(info)
            extracted_path = model_root / Path(relative_path)
            if info.file_size != expected_bytes or digest_bytes(archived) != expected_sha256:
                raise ValueError(f"{relative_path}: archived payload does not match CAO2024 v2.4")
            if not extracted_path.is_file() or extracted_path.read_bytes() != archived:
                raise ValueError(f"{relative_path}: extracted payload differs from the pinned archive")
            inventory.append({
                "path": relative_path,
                "status": status,
                "bytes": expected_bytes,
                "sha256": expected_sha256,
            })
    return inventory


def load_pygplates(path: Path) -> Any:
    sys.path.insert(0, str(path.resolve()))
    try:
        import pygplates  # type: ignore[import-not-found]
    except ImportError as error:
        raise RuntimeError(f"pyGPlates is unavailable under {path}") from error
    version = str(pygplates.Version.get_imported_version())
    if version != "1.0.0":
        raise RuntimeError(f"pyGPlates 1.0.0 is required; found {version}")
    return pygplates


def model_intersection(from_ma: float, to_ma: float) -> tuple[float, float] | None:
    youngest = max(0.0, min(from_ma, to_ma))
    oldest = min(MAX_AGE_MA, max(from_ma, to_ma))
    return (youngest, oldest) if youngest <= oldest else None


def reconstruct_position(
    pygplates: Any,
    rotation_model: Any,
    position: list[float],
    age_ma: float,
    plate_id: int,
) -> list[float] | None:
    rotation = rotation_model.get_rotation(
        age_ma,
        plate_id,
        anchor_plate_id=ANCHOR_PLATE_ID,
        use_identity_for_missing_plate_ids=False,
    )
    if rotation is None:
        return None
    longitude, latitude = position
    reconstructed = rotation * pygplates.PointOnSphere(latitude, longitude)
    reconstructed_latitude, reconstructed_longitude = reconstructed.to_lat_lon()
    return [rounded(reconstructed_longitude), rounded(reconstructed_latitude)]


def parse_records(
    pygplates: Any,
    rotation_model: Any,
    dataset_id: str,
    source_path: Path,
) -> Iterable[dict[str, Any]]:
    with open_gpml(source_path) as source:
        for _, member in ElementTree.iterparse(source, events=("end",)):
            if member.tag != GML + "featureMember":
                continue
            feature = next(iter(member), None)
            if feature is None:
                member.clear()
                continue

            source_feature_id = feature.findtext(GPML + "identity")
            source_revision_id = feature.findtext(GPML + "revision")
            if not source_feature_id or not source_revision_id:
                raise ValueError(f"{source_path}: feature is missing an identity or revision")

            plate_property = feature.find(GPML + "reconstructionPlateId")
            plate_text = plate_property.findtext(".//" + GPML + "value") if plate_property is not None else None
            if plate_text is None:
                raise ValueError(f"{source_feature_id}: missing reconstruction plate ID")
            plate_id = int(plate_text)

            time_lexemes = [
                node.text
                for node in feature.findall(".//" + GML + "timePosition")
                if node.text is not None
            ]
            if len(time_lexemes) != 2:
                raise ValueError(f"{source_feature_id}: expected two valid-time positions")
            raw_from_ma, raw_to_ma = finite_number(time_lexemes[0]), finite_number(time_lexemes[1])
            if raw_from_ma is None or raw_to_ma is None:
                raise ValueError(f"{source_feature_id}: non-finite valid-time bound")

            source_attributes: list[list[str]] = []
            attribute_values: dict[str, str] = {}
            for element in feature.findall(".//" + GPML + "KeyValueDictionaryElement"):
                key = element.findtext(GPML + "key")
                if not key:
                    continue
                value_node = element.find(GPML + "value")
                type_node = element.find(GPML + "valueType")
                raw_value = "" if value_node is None or value_node.text is None else value_node.text
                value_type = "" if type_node is None or type_node.text is None else type_node.text
                source_attributes.append([key, value_type, raw_value])
                attribute_values[key] = raw_value

            source_positions: dict[str, list[float]] = {}
            for property_name, key in (
                ("unclassifiedGeometry", "samplePosition"),
                ("polePosition", "polePosition"),
                ("averageSampleSitePosition", "averageSampleSitePosition"),
            ):
                position = parse_position(feature.find(GPML + property_name))
                if position is not None:
                    source_positions[key] = position
            if not source_positions:
                raise ValueError(f"{source_feature_id}: no point geometry")

            flags = []
            if raw_from_ma < raw_to_ma:
                flags.append("inverted-age-bounds")
            if raw_to_ma < 0:
                flags.append("negative-younger-bound")
            silica = finite_number(attribute_values.get("sio2"))
            if silica is not None and silica < 0:
                flags.append("negative-sio2")

            intersection = model_intersection(raw_from_ma, raw_to_ma)
            reconstructed_positions: dict[str, list[float]] | None = None
            if intersection is None:
                reconstruction_age_ma = None
                reconstruction_status = "raw-only-model-range"
                reconstruction_method = None
            else:
                reconstruction_age_ma = rounded((intersection[0] + intersection[1]) / 2)
                candidate_positions = {
                    key: reconstruct_position(
                        pygplates, rotation_model, position, reconstruction_age_ma, plate_id
                    )
                    for key, position in source_positions.items()
                }
                if any(position is None for position in candidate_positions.values()):
                    reconstruction_status = "raw-only-missing-plate-circuit"
                else:
                    reconstructed_positions = {
                        key: position
                        for key, position in candidate_positions.items()
                        if position is not None
                    }
                    reconstruction_status = "reconstructed"
                reconstruction_method = "model-intersection-midpoint"

            average_age_text = feature.findtext(GPML + "averageAge")
            pole_a95_text = feature.findtext(GPML + "poleA95")
            yield {
                "sourceFeatureId": source_feature_id,
                "sourceRevisionId": source_revision_id,
                "sourceFeatureType": feature.tag.rsplit("}", 1)[-1],
                "observationKind": dataset_id,
                "name": feature.findtext(GML + "name"),
                "plateId": plate_id,
                "age": {
                    "rawFromMa": raw_from_ma,
                    "rawToMa": raw_to_ma,
                    "rawFromLexeme": time_lexemes[0],
                    "rawToLexeme": time_lexemes[1],
                    "averageMa": finite_number(average_age_text),
                    "averageLexeme": average_age_text,
                    "modelIntersectionMa": list(intersection) if intersection is not None else None,
                    "reconstructionAgeMa": reconstruction_age_ma,
                    "reconstructionAgeMethod": reconstruction_method,
                },
                "sourcePositions": source_positions,
                "reconstructedPositions": reconstructed_positions,
                "reconstructionStatus": reconstruction_status,
                "poleA95": finite_number(pole_a95_text),
                "poleA95Lexeme": pole_a95_text,
                "sampleId": attribute_values.get("sample_id"),
                "referenceId": attribute_values.get("ref_id"),
                "sourceFlags": flags,
                "sourceAttributes": source_attributes,
            }
            member.clear()


def output_path(dataset_id: str, bucket: str) -> str:
    if dataset_id == "geochemistry":
        return f"geochemistry/part-{bucket}.json.gz"
    return OUTPUT_PATHS[dataset_id]


def build(args: argparse.Namespace) -> dict[str, Any]:
    archive_path = args.archive.resolve()
    model_root = args.model_root.resolve()
    output_dir = args.output_dir.resolve()
    inventory = verify_sources(archive_path, model_root)
    pygplates = load_pygplates(args.pygplates_path)
    rotation_model = pygplates.RotationModel(
        [str(model_root / filename) for filename in ROTATION_FILES],
        default_anchor_plate_id=ANCHOR_PLATE_ID,
    )

    shards: dict[tuple[str, str], list[dict[str, Any]]] = defaultdict(list)
    counts_by_dataset: dict[str, Counter[str]] = {}
    flags = Counter()
    for dataset_id, relative_path in DATASETS:
        counts = Counter()
        for record in parse_records(
            pygplates, rotation_model, dataset_id, model_root / Path(relative_path)
        ):
            bucket = (
                hashlib.sha256(record["sourceFeatureId"].encode("utf-8")).hexdigest()[0]
                if dataset_id == "geochemistry"
                else "all"
            )
            shards[(dataset_id, bucket)].append(record)
            counts["total"] += 1
            counts[record["reconstructionStatus"]] += 1
            counts["intersectsSupportedRange"] += record["age"]["modelIntersectionMa"] is not None
            flags.update(record["sourceFlags"])
        counts_by_dataset[dataset_id] = counts

    shard_manifest = []
    for (dataset_id, bucket), records in sorted(shards.items()):
        records.sort(key=lambda record: record["sourceFeatureId"])
        relative_output = output_path(dataset_id, bucket)
        payload = compact_json({
            "schemaVersion": 1,
            "model": MODEL,
            "modelVersion": MODEL_VERSION,
            "datasetId": dataset_id,
            "bucket": bucket,
            "records": records,
        })
        compressed = deterministic_gzip(payload)
        atomic_write(output_dir / Path(relative_output), compressed)
        shard_manifest.append({
            "datasetId": dataset_id,
            "bucket": bucket,
            "path": relative_output,
            "records": len(records),
            "jsonBytes": len(payload),
            "bytes": len(compressed),
            "sha256": digest_bytes(compressed),
        })

    total_counts = sum(counts_by_dataset.values(), Counter())
    manifest = {
        "schemaVersion": 1,
        "model": MODEL,
        "modelVersion": MODEL_VERSION,
        "maximumReconstructionAgeMa": MAX_AGE_MA,
        "anchorPlateId": ANCHOR_PLATE_ID,
        "coordinateOrder": "longitude-latitude",
        "coordinatePrecisionDecimals": COORDINATE_PRECISION,
        "retrievedAt": args.retrieved_at,
        "processing": {
            "script": "scripts/import_cao2024_observations.py",
            "scriptCommit": args.script_commit,
            "pygplatesVersion": str(pygplates.Version.get_imported_version()),
            "reconstructionAgeMethod": "midpoint of the explicit source age interval intersected with 0-1800 Ma",
            "missingPlateCircuitPolicy": "raw-only; identity fallback is disabled",
        },
        "sourceArchive": {
            "url": ARCHIVE_URL,
            "bytes": archive_path.stat().st_size,
            "sha256": ARCHIVE_SHA256,
            "md5": ARCHIVE_MD5,
            "files": inventory,
        },
        "counts": {
            "total": total_counts["total"],
            "intersectsSupportedRange": total_counts["intersectsSupportedRange"],
            "reconstructed": total_counts["reconstructed"],
            "rawOnlyModelRange": total_counts["raw-only-model-range"],
            "rawOnlyMissingPlateCircuit": total_counts["raw-only-missing-plate-circuit"],
            "sourceFlags": dict(sorted(flags.items())),
        },
        "datasets": {
            dataset_id: {
                "total": counts["total"],
                "intersectsSupportedRange": counts["intersectsSupportedRange"],
                "reconstructed": counts["reconstructed"],
                "rawOnlyModelRange": counts["raw-only-model-range"],
                "rawOnlyMissingPlateCircuit": counts["raw-only-missing-plate-circuit"],
            }
            for dataset_id, counts in counts_by_dataset.items()
        },
        "shards": shard_manifest,
        "scientificBoundary": (
            "These records are observational or constraint points, not model geometry, terrain, elevation, "
            "bathymetry or direct paleotopography. Source anomalies are retained and flagged without correction."
        ),
    }
    atomic_write(output_dir / "manifest.json", json.dumps(
        manifest, ensure_ascii=False, indent=2
    ).encode("utf-8") + b"\n")
    return manifest


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive", required=True, type=Path)
    parser.add_argument("--model-root", required=True, type=Path)
    parser.add_argument("--pygplates-path", required=True, type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    parser.add_argument("--retrieved-at", required=True)
    parser.add_argument("--script-commit", required=True)
    args = parser.parse_args()
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", args.retrieved_at):
        parser.error("--retrieved-at must use YYYY-MM-DD")
    if not re.fullmatch(r"[0-9a-f]{7,40}", args.script_commit):
        parser.error("--script-commit must be a lowercase hexadecimal commit")
    return args


def main() -> int:
    manifest = build(parse_args())
    counts = manifest["counts"]
    print(
        f"records={counts['total']} reconstructed={counts['reconstructed']} "
        f"raw-only-range={counts['rawOnlyModelRange']} "
        f"raw-only-missing-circuit={counts['rawOnlyMissingPlateCircuit']}"
    )
    print(f"shards={len(manifest['shards'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
