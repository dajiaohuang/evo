#!/usr/bin/env python3
"""Reconstruct the pinned CAO2024 v2.4 model without the GPlates web service.

This is a build-time maintainer tool. It deliberately has no runtime dependency
on Python or pyGPlates and writes only to an explicitly selected output folder.
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
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any, Iterable, Sequence


MODEL = "CAO2024"
MODEL_VERSION = "v2.4"
MAX_AGE_MA = 1800.0
COORDINATE_PRECISION = 4
SELECTION_POLICY = {
    "method": "nearest",
    "tieBreak": "younger",
    "outsideRange": "unavailable",
}

# SHA-256 values of the payloads in the immutable Zenodo v2.4 archive
# https://zenodo.org/records/13628813
PINNED_SOURCE_FILES = {
    "1000_0_rotfile.rot": "e13c16ef5b2f8f116f598635e42a126b016b2c615358b499bcc3433f4a3c735c",
    "1800_1000_rotfile.rot": "db2a57a8b7c7a08891c19840b6334ffb9c279b6a991a2c2eed099edb23445785",
    "250-0_plate_boundaries.gpml": "4a9f97f6368860e5917f4e6fbf78d6d7c3caf77e1736e854250d067540bb60d4",
    "410-250_plate_boundaries.gpml": "6516dbac4d7928e7ad71244b0bbabc65eb25e6e89dc79d4becb9a82a25a6fc91",
    "1000-410_plate_boundaries.gpml": "488e4b6330e2586fc363a1ad8dada659ac1409742846186fc275a213db306fb1",
    "1800-1000_plate_boundaries.gpml": "759a76605bc907197928214f4101403dd6221e7ba8d4ecacde57999bc3675dce",
    "TopologyBuildingBlocks.gpml": "7603af2502a8d261256f293be71487d28fe5a6b5a8fadd4bdc7845dc67b72297",
    "shapes_coasts.gpmlz": "c660bc074aa84b366600d81d7ccf3a45658db81ab8cdd8f6bda26e094c0dc71f",
    "shapes_continents.gpmlz": "6e30de73967f81a403f46370295dec5c0d7ed3ffd80c73d47df926461d949616",
    "COBfile_1800_0.gpml": "cfcea20c5244613e53ad4b9cdf6411d79ff535c25af335b4fa6eb9251377d4bd",
    "static_polygons.gpmlz": "9b30d231157f99f9a7942d073efcb85649b0a6e10e49332637df2386f1b1350f",
}

ROTATION_FILES = ("1000_0_rotfile.rot", "1800_1000_rotfile.rot")
TOPOLOGY_FILES = (
    "250-0_plate_boundaries.gpml",
    "410-250_plate_boundaries.gpml",
    "1000-410_plate_boundaries.gpml",
    "1800-1000_plate_boundaries.gpml",
    "TopologyBuildingBlocks.gpml",
)

LAYER_ORDER = (
    "coastlines",
    "platePolygons",
    "plateBoundaries",
    "continentalPolygons",
    "continentOceanBoundaries",
    "staticPolygons",
)

LAYER_FILES = {
    "coastlines": "shapes_coasts.gpmlz",
    "continentalPolygons": "shapes_continents.gpmlz",
    "continentOceanBoundaries": "COBfile_1800_0.gpml",
    "staticPolygons": "static_polygons.gpmlz",
}

LAYER_SUFFIXES = {
    "coastlines": "",
    "platePolygons": "-plates",
    "plateBoundaries": "-boundaries",
    "continentalPolygons": "-continents",
    "continentOceanBoundaries": "-cobs",
    "staticPolygons": "-static-polygons",
}

LAYER_CADENCE = {
    "coastlines": ((0.0, 540.0, 5.0), (540.0, 1800.0, 10.0)),
    "platePolygons": ((0.0, 250.0, 1.0), (250.0, 1000.0, 5.0), (1000.0, 1800.0, 10.0)),
    "plateBoundaries": ((0.0, 250.0, 1.0), (250.0, 1000.0, 5.0), (1000.0, 1800.0, 10.0)),
    "continentalPolygons": ((0.0, 540.0, 10.0), (540.0, 1800.0, 20.0)),
    "continentOceanBoundaries": ((0.0, 540.0, 10.0), (540.0, 1800.0, 20.0)),
    "staticPolygons": ((0.0, 540.0, 20.0), (540.0, 1800.0, 40.0)),
}

PERIOD_MIDPOINT_AGES = (
    512.825,
    464.975,
    431.36,
    389.24,
    328.88,
    275.401,
    226.651,
    172.25,
    104.55,
    44.52,
    12.81,
    1.29,
)

ALLOWED_GEOMETRY_TYPES = {
    "coastlines": {"Polygon", "MultiPolygon"},
    "platePolygons": {"Polygon", "MultiPolygon"},
    "plateBoundaries": {"LineString", "MultiLineString"},
    "continentalPolygons": {"Polygon", "MultiPolygon"},
    "continentOceanBoundaries": {"LineString", "MultiLineString"},
    "staticPolygons": {"Polygon", "MultiPolygon"},
}

ROLE_BY_LAYER = {
    "continentalPolygons": "continental-extent",
    "continentOceanBoundaries": "continent-ocean-boundary",
    "staticPolygons": "rigid-plate-partition",
}

SERIES_ROLE_BY_LAYER = {
    "coastlines": "modelled-coastline",
    "platePolygons": "dynamic-topological-plate-coverage",
    "plateBoundaries": "typed-topological-boundary",
    **ROLE_BY_LAYER,
}


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def compact_json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"), sort_keys=False)


def slug(value: str) -> str:
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


def rounded(value: float) -> float:
    result = round(float(value), COORDINATE_PRECISION)
    return 0.0 if result == 0 else result


def same_position(left: Sequence[float], right: Sequence[float]) -> bool:
    return left[0] == right[0] and left[1] == right[1]


def normalize_line(line: Iterable[Sequence[float]]) -> list[list[float]] | None:
    cleaned: list[list[float]] = []
    for position in line:
        if len(position) < 2 or not math.isfinite(position[0]) or not math.isfinite(position[1]):
            continue
        next_position = [rounded(position[0]), rounded(position[1])]
        if not cleaned or not same_position(cleaned[-1], next_position):
            cleaned.append(next_position)
    return cleaned if len(cleaned) > 1 else None


def normalize_ring(ring: Iterable[Sequence[float]]) -> list[list[float]] | None:
    cleaned = normalize_line(ring)
    if not cleaned:
        return None
    if same_position(cleaned[0], cleaned[-1]):
        cleaned.pop()
    if len({tuple(position) for position in cleaned}) < 3:
        return None
    cleaned.append(cleaned[0].copy())
    return cleaned


def normalize_geometry(geometry: dict[str, Any] | None, allowed_types: set[str]) -> dict[str, Any] | None:
    if not geometry or geometry.get("type") not in allowed_types:
        return None
    geometry_type = geometry["type"]
    coordinates = geometry.get("coordinates", [])
    if geometry_type == "LineString":
        normalized = normalize_line(coordinates)
    elif geometry_type == "MultiLineString":
        normalized = [line for source in coordinates if (line := normalize_line(source))]
    elif geometry_type == "Polygon":
        normalized = [ring for source in coordinates if (ring := normalize_ring(source))]
    else:
        normalized = []
        for polygon in coordinates:
            rings = [ring for source in polygon if (ring := normalize_ring(source))]
            if rings:
                normalized.append(rings)
    return {"type": geometry_type, "coordinates": normalized} if normalized else None


def has_dateline_jump(coordinates: Any) -> bool:
    if not isinstance(coordinates, list):
        return False
    if (
        len(coordinates) > 1
        and isinstance(coordinates[0], list)
        and coordinates[0]
        and isinstance(coordinates[0][0], (int, float))
    ):
        for index, position in enumerate(coordinates):
            if not index or abs(position[0] - coordinates[index - 1][0]) <= 180:
                continue
            previous = coordinates[index - 1]
            # Longitude is undefined at the poles, and +180/-180 are the same
            # meridian. DateLineWrapper legitimately emits both there.
            same_pole = abs(position[1]) == 90 and abs(previous[1]) == 90
            same_dateline = abs(position[0]) == 180 and abs(previous[0]) == 180
            if not same_pole and not same_dateline:
                return True
        return False
    return any(has_dateline_jump(child) for child in coordinates)


def explicit_alternative_cob_name(name: str) -> bool:
    return re.search(r"(?<![A-Za-z])a?COB(?![A-Za-z])", name, re.IGNORECASE) is not None


def polygon_outlines(geometry: dict[str, Any]) -> dict[str, Any] | None:
    if geometry.get("type") == "Polygon":
        lines = geometry.get("coordinates", [])
    elif geometry.get("type") == "MultiPolygon":
        lines = [ring for polygon in geometry.get("coordinates", []) for ring in polygon]
    else:
        return None
    if not lines:
        return None
    lines = [
        [*line, list(line[0])] if line and not same_position(line[0], line[-1]) else line
        for line in lines
    ]
    return {"type": "LineString", "coordinates": lines[0]} if len(lines) == 1 else {
        "type": "MultiLineString",
        "coordinates": lines,
    }


def lon_lat_list(spherical_geometry: Any) -> list[list[float]]:
    return [[longitude, latitude] for latitude, longitude in spherical_geometry.to_lat_lon_list()]


def wrapped_points(points: Iterable[Any]) -> list[list[float]]:
    return [[point.get_longitude(), point.get_latitude()] for point in points]


def wrapped_polygon_parts(
    dateline_wrapper: Any,
    spherical_polygon: Any,
    tessellate_degrees: float | None = None,
) -> list[list[list[list[float]]]]:
    parts = []
    wrapped = (
        dateline_wrapper.wrap(spherical_polygon)
        if tessellate_degrees is None
        else dateline_wrapper.wrap(spherical_polygon, tessellate_degrees)
    )
    for polygon in wrapped:
        rings = [wrapped_points(polygon.get_exterior_points())]
        rings.extend(
            wrapped_points(polygon.get_interior_points(index))
            for index in range(polygon.get_number_of_interior_rings())
        )
        parts.append(rings)
    return parts


def wrapped_polyline(
    dateline_wrapper: Any,
    spherical_polyline: Any,
    tessellate_degrees: float | None = None,
) -> dict[str, Any] | None:
    wrapped = (
        dateline_wrapper.wrap(spherical_polyline)
        if tessellate_degrees is None
        else dateline_wrapper.wrap(spherical_polyline, tessellate_degrees)
    )
    lines = [wrapped_points(polyline.get_points()) for polyline in wrapped]
    if not lines:
        return None
    return {"type": "LineString", "coordinates": lines[0]} if len(lines) == 1 else {
        "type": "MultiLineString",
        "coordinates": lines,
    }


def combined_polygon(reconstructed_geometries: Sequence[Any], dateline_wrapper: Any) -> dict[str, Any] | None:
    polygons = []
    for reconstructed in reconstructed_geometries:
        geometry = reconstructed.get_reconstructed_geometry()
        if type(geometry).__name__ != "PolygonOnSphere":
            continue
        polygons.extend(wrapped_polygon_parts(dateline_wrapper, geometry))
    if not polygons:
        return None
    return {"type": "Polygon", "coordinates": polygons[0]} if len(polygons) == 1 else {
        "type": "MultiPolygon",
        "coordinates": polygons,
    }


def feature_properties(feature: Any) -> dict[str, Any]:
    properties: dict[str, Any] = {}
    feature_type = str(feature.get_feature_type())
    name = feature.get_name()
    plate_id = feature.get_reconstruction_plate_id()
    feature_id = str(feature.get_feature_id())
    if feature_type:
        properties["GPGIM_TYPE"] = feature_type
    if name is not None:
        properties["NAME"] = str(name)
    if plate_id is not None:
        properties["PLATEID1"] = plate_id
    if feature_id:
        properties["FEATURE_ID"] = feature_id
    return properties


def normalized_properties(source: dict[str, Any], layer: str) -> dict[str, Any]:
    output: dict[str, Any] = {"layer": layer}
    for keys, target in (
        (("type", "GPGIM_TYPE"), "type"),
        (("name", "NAME"), "name"),
        (("pid", "PLATEID1", "reconstructionPlateId"), "pid"),
        (("polarity",), "polarity"),
        (("featureId", "FEATURE_ID"), "sourceFeatureId"),
        (("sourceFeatureType",), "sourceFeatureType"),
    ):
        value = next((source[key] for key in keys if key in source and source[key] is not None), None)
        if value is None:
            continue
        if target in {"name", "sourceFeatureId"}:
            value = str(value).strip()
            if not value:
                continue
        output[target] = value
    role = ROLE_BY_LAYER.get(layer)
    if role:
        output["role"] = role
    if layer == "staticPolygons":
        output["topologyBehavior"] = "rigid-shape-partition"
    return output


def explode_polygons(feature: dict[str, Any]) -> list[dict[str, Any]]:
    geometry = feature.get("geometry")
    if geometry and geometry.get("type") == "MultiPolygon":
        return [
            {"type": "Feature", "properties": feature["properties"], "geometry": {"type": "Polygon", "coordinates": polygon}}
            for polygon in geometry.get("coordinates", [])
        ]
    return [feature]


def normalize_collection(
    source_features: Iterable[dict[str, Any]],
    layer: str,
    snapshot_id: str,
    age_ma: float,
    period: str | None,
) -> tuple[dict[str, Any], dict[str, int]]:
    unique: dict[str, dict[str, Any]] = {}
    usable = 0
    source_count = 0
    dateline_jumps = 0
    for feature in source_features:
        source_count += 1
        geometry = normalize_geometry(feature.get("geometry"), ALLOWED_GEOMETRY_TYPES[layer])
        if not geometry:
            continue
        usable += 1
        if has_dateline_jump(geometry.get("coordinates")):
            dateline_jumps += 1
        properties = normalized_properties(feature.get("properties", {}), layer)
        key = compact_json({"properties": properties, "geometry": geometry})
        unique[key] = {"properties": properties, "geometry": geometry}

    normalized = [unique[key] for key in sorted(unique)]
    features = []
    for index, feature in enumerate(normalized, 1):
        metadata: dict[str, Any] = {
            "id": f"{slug(snapshot_id)}-{slug(layer)}-{index:04d}",
            "snapshotId": snapshot_id,
            "reconstructionAgeMa": age_ma,
            "model": MODEL,
        }
        if period:
            metadata["period"] = period
        features.append({
            "type": "Feature",
            "properties": {**metadata, **feature["properties"]},
            "geometry": feature["geometry"],
        })
    return {"type": "FeatureCollection", "features": features}, {
        "sourceFeatures": source_count,
        "invalidGeometryFeatures": source_count - usable,
        "duplicateFeaturesRemoved": usable - len(normalized),
        "datelineCrossingFeatures": dateline_jumps,
    }


def regular_layer_source_features(
    pygplates: Any,
    model_root: Path,
    rotation_model: Any,
    layer: str,
    age_ma: float,
    dateline_wrapper: Any,
) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    reconstructed: list[Any] = []
    pygplates.reconstruct(
        str(model_root / LAYER_FILES[layer]),
        rotation_model,
        reconstructed,
        age_ma,
        anchor_plate_id=0,
        group_with_feature=True,
    )
    source_features: list[dict[str, Any]] = []
    type_counts: dict[str, Counter[str]] = defaultdict(Counter)
    for feature, geometries in reconstructed:
        source_properties = feature_properties(feature)
        feature_type = source_properties.get("GPGIM_TYPE", "unknown")
        type_counts[feature_type]["source"] += 1
        geometry = combined_polygon(geometries, dateline_wrapper)
        if not geometry:
            type_counts[feature_type]["excludedInvalidGeometry"] += 1
            continue

        if layer == "continentOceanBoundaries":
            name = source_properties.get("NAME", "").strip()
            formal = feature_type in {"gpml:ClosedContinentalBoundary", "gpml:PassiveContinentalBoundary"}
            alternative = feature_type == "gpml:UnclassifiedFeature" and explicit_alternative_cob_name(name)
            if not formal and not alternative:
                type_counts[feature_type]["excludedByPolicy"] += 1
                continue
            geometry = polygon_outlines(geometry)
            if not geometry:
                type_counts[feature_type]["excludedInvalidGeometry"] += 1
                continue
            source_properties["type"] = "unclassified-alternative-cob" if alternative else feature_type
            source_properties["sourceFeatureType"] = feature_type
            type_counts[feature_type]["included"] += 1
        else:
            if layer == "continentalPolygons":
                source_properties["sourceFeatureType"] = feature_type
            type_counts[feature_type]["included"] += 1

        normalized_source = {"type": "Feature", "properties": source_properties, "geometry": geometry}
        if layer in {"coastlines", "staticPolygons"}:
            normalized_source["properties"] = {}
            source_features.extend(explode_polygons(normalized_source))
        else:
            source_features.append(normalized_source)

    return source_features, {
        "reconstructedFeatureGroups": len(reconstructed),
        "sourceFeatureTypeCounts": {
            feature_type: {
                "source": counts["source"],
                "included": counts["included"],
                "excludedByPolicy": counts["excludedByPolicy"],
                "excludedInvalidGeometry": counts["excludedInvalidGeometry"],
            }
            for feature_type, counts in sorted(type_counts.items())
        },
    }


def topology_source_features(
    pygplates: Any,
    model_root: Path,
    rotation_model: Any,
    age_ma: float,
    dateline_wrapper: Any,
) -> tuple[dict[str, list[dict[str, Any]]], dict[str, int]]:
    resolved_topologies: list[Any] = []
    resolved_sections: list[Any] = []
    pygplates.resolve_topologies(
        [str(model_root / filename) for filename in TOPOLOGY_FILES],
        rotation_model,
        resolved_topologies,
        age_ma,
        resolved_sections,
        anchor_plate_id=0,
    )

    polygons = []
    for topology in resolved_topologies:
        geometry = topology.get_resolved_boundary()
        properties = feature_properties(topology.get_feature())
        properties.pop("FEATURE_ID", None)
        # Match the GWS plate-polygon export's one-degree great-circle tessellation.
        polygon_parts = wrapped_polygon_parts(dateline_wrapper, geometry, 1.0)
        wrapped_geometry = {"type": "Polygon", "coordinates": polygon_parts[0]} if len(polygon_parts) == 1 else {
            "type": "MultiPolygon",
            "coordinates": polygon_parts,
        }
        polygons.append({
            "type": "Feature",
            "properties": properties,
            "geometry": wrapped_geometry,
        })

    boundaries = []
    for section in resolved_sections:
        for shared_segment in section.get_shared_sub_segments():
            feature = shared_segment.get_feature()
            properties = {
                "type": str(feature.get_feature_type()).removeprefix("gpml:"),
                "name": str(feature.get_name() or "").strip(),
                "pid": feature.get_reconstruction_plate_id(),
            }
            if str(feature.get_feature_type()) == "gpml:SubductionZone":
                polarity = feature.get_enumeration(pygplates.PropertyName.gpml_subduction_polarity)
                if polarity:
                    properties["polarity"] = str(polarity)
            boundaries.append({
                "type": "Feature",
                "properties": properties,
                "geometry": wrapped_polyline(dateline_wrapper, shared_segment.get_resolved_geometry()),
            })
    return {"platePolygons": polygons, "plateBoundaries": boundaries}, {
        "resolvedTopologies": len(resolved_topologies),
        "resolvedTopologicalSections": len(resolved_sections),
        "sharedBoundarySubSegments": len(boundaries),
    }


COMPARISON_METADATA = {"id", "snapshotId", "period", "reconstructionAgeMa", "model"}


def comparison_key(feature: dict[str, Any]) -> str:
    properties = {
        key: value
        for key, value in feature.get("properties", {}).items()
        if key not in COMPARISON_METADATA and value not in (None, "")
    }
    return compact_json({"properties": properties, "geometry": feature.get("geometry")})


def collection_comparison(generated: dict[str, Any], checked: dict[str, Any]) -> dict[str, Any]:
    generated_keys = Counter(comparison_key(feature) for feature in generated.get("features", []))
    checked_keys = Counter(comparison_key(feature) for feature in checked.get("features", []))
    common = generated_keys & checked_keys
    return {
        "generatedFeatures": sum(generated_keys.values()),
        "checkedFeatures": sum(checked_keys.values()),
        "featureCountDelta": sum(generated_keys.values()) - sum(checked_keys.values()),
        "exactScientificPayloadMatches": sum(common.values()),
        "generatedOnly": sum((generated_keys - checked_keys).values()),
        "checkedOnly": sum((checked_keys - generated_keys).values()),
        "generatedGeometryTypes": dict(sorted(Counter(
            feature.get("geometry", {}).get("type", "unknown") for feature in generated.get("features", [])
        ).items())),
        "checkedGeometryTypes": dict(sorted(Counter(
            feature.get("geometry", {}).get("type", "unknown") for feature in checked.get("features", [])
        ).items())),
    }


def verify_model(model_root: Path) -> dict[str, dict[str, Any]]:
    verified = {}
    for filename, expected_sha256 in PINNED_SOURCE_FILES.items():
        path = model_root / filename
        if not path.is_file():
            raise FileNotFoundError(f"CAO2024 v2.4 source is missing: {path}")
        actual_sha256 = sha256_file(path)
        if actual_sha256 != expected_sha256:
            raise ValueError(
                f"{filename}: SHA-256 {actual_sha256} does not match pinned CAO2024 v2.4 {expected_sha256}"
            )
        verified[filename] = {"bytes": path.stat().st_size, "sha256": actual_sha256}
    return verified


def load_pygplates(extra_path: Path | None) -> Any:
    if extra_path:
        sys.path.insert(0, str(extra_path.resolve()))
    try:
        import pygplates  # type: ignore[import-not-found]
    except ImportError as error:
        raise RuntimeError("pyGPlates is required; pass --pygplates-path or install pygplates") from error
    return pygplates


def parse_layers(value: str) -> list[str]:
    requested = LAYER_ORDER if value == "all" else tuple(part.strip() for part in value.split(",") if part.strip())
    unknown = sorted(set(requested) - set(LAYER_ORDER))
    if unknown:
        raise argparse.ArgumentTypeError(f"unknown layer(s): {', '.join(unknown)}")
    return [layer for layer in LAYER_ORDER if layer in requested]


def parse_age_spec(value: str) -> list[float] | str:
    if value == "layer-grid":
        return value
    ages: set[float] = set()
    for token in (part.strip() for part in value.split(",") if part.strip()):
        pieces = token.split(":")
        if len(pieces) == 1:
            ages.add(float(token))
            continue
        if len(pieces) != 3:
            raise argparse.ArgumentTypeError(f"invalid age token {token!r}; use AGE or YOUNGEST:OLDEST:STEP")
        youngest, oldest, step = map(float, pieces)
        if step <= 0 or oldest < youngest:
            raise argparse.ArgumentTypeError(f"invalid age range {token!r}")
        count = int(math.floor((oldest - youngest) / step + 1e-9))
        for index in range(count + 1):
            ages.add(round(youngest + index * step, 6))
        if abs((youngest + count * step) - oldest) > 1e-9:
            ages.add(round(oldest, 6))
    if not ages:
        raise argparse.ArgumentTypeError("at least one age is required")
    return sorted(ages)


def parse_cadence_bands(value: str) -> list[dict[str, float]]:
    bands = []
    for token in (part.strip() for part in value.split(",") if part.strip()):
        pieces = token.split(":")
        if len(pieces) != 3:
            raise argparse.ArgumentTypeError("cadence bands use YOUNGEST:OLDEST:STEP")
        youngest, oldest, step = map(float, pieces)
        if youngest < 0 or oldest > MAX_AGE_MA or oldest <= youngest or step <= 0:
            raise argparse.ArgumentTypeError(f"invalid cadence band {token!r}")
        bands.append({"youngestMa": youngest, "oldestMa": oldest, "cadenceMa": step})
    return bands


def layer_cadence_bands(layer: str) -> list[dict[str, float]]:
    return [
        {"youngestMa": youngest, "oldestMa": oldest, "cadenceMa": cadence}
        for youngest, oldest, cadence in LAYER_CADENCE[layer]
    ]


def layer_age_grid(layer: str) -> list[float]:
    ages = set(PERIOD_MIDPOINT_AGES)
    for youngest, oldest, cadence in LAYER_CADENCE[layer]:
        age = youngest
        while age <= oldest + 1e-9:
            ages.add(round(age, 6))
            age += cadence
        ages.add(oldest)
    return sorted(ages)


def age_filename(age_ma: float) -> str:
    return f"ma-{age_ma:08.3f}.json.gz"


def deterministic_gzip(payload: bytes) -> bytes:
    output = io.BytesIO()
    with gzip.GzipFile(filename="", mode="wb", fileobj=output, compresslevel=9, mtime=0) as archive:
        archive.write(payload)
    return output.getvalue()


def atomic_write(path: Path, payload: bytes) -> None:
    temporary = path.with_name(f".{path.name}.tmp")
    temporary.write_bytes(payload)
    temporary.replace(path)


def geometry_file_for_provenance(output_dir: Path, output_path: Path) -> str:
    if output_dir.name == "paleogeography" and output_dir.parent.name == "data":
        return (Path("data") / output_dir.name / output_path.relative_to(output_dir)).as_posix()
    return output_path.relative_to(output_dir).as_posix()


def load_provenance(path: Path) -> dict[str, Any]:
    if path.exists():
        provenance = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(provenance, dict):
            raise ValueError(f"{path}: provenance root must be an object")
    else:
        provenance = {}
    provenance["schemaVersion"] = 3
    provenance.setdefault("series", {})
    provenance["series"].setdefault("layers", {})
    return provenance


def update_series_range(series: dict[str, Any]) -> None:
    ages = [
        frame["ageMa"]
        for layer in series.get("layers", {}).values()
        for frame in layer.get("frames", [])
    ]
    if ages:
        series["ageRangeMa"] = {"youngest": min(ages), "oldest": max(ages)}


def update_period_snapshot_anchors(provenance: dict[str, Any]) -> None:
    series_layers = provenance.get("series", {}).get("layers", {})
    for snapshot in provenance.get("snapshots", []):
        age_ma = snapshot.get("reconstructionAgeMa")
        if not isinstance(age_ma, (int, float)):
            continue
        snapshot_layers = snapshot.setdefault("layers", {})
        for layer in LAYER_ORDER:
            frame = next(
                (
                    candidate
                    for candidate in series_layers.get(layer, {}).get("frames", [])
                    if abs(candidate["ageMa"] - age_ma) < 1e-9
                ),
                None,
            )
            if not frame:
                continue
            snapshot_layers.setdefault(layer, {}).update({
                "geometryFile": frame["geometryFile"],
                "geometryFeatures": frame["geometryFeatures"],
                "geometryBytes": frame["geometryBytes"],
                "geometrySha256": frame["geometrySha256"],
            })


def write_provenance(path: Path, provenance: dict[str, Any]) -> None:
    update_series_range(provenance["series"])
    update_period_snapshot_anchors(provenance)
    atomic_write(path, (json.dumps(provenance, ensure_ascii=False, indent=2) + "\n").encode("utf-8"))


def cadence_step_for_age(age_ma: float, bands: Sequence[dict[str, float]]) -> float | None:
    matches = [
        band["cadenceMa"]
        for band in bands
        if band["youngestMa"] - 1e-9 <= age_ma <= band["oldestMa"] + 1e-9
    ]
    return min(matches) if matches else None


def default_grid_ages(bands: Sequence[dict[str, float]]) -> set[float]:
    ages = set()
    for band in bands:
        youngest, oldest, step = band["youngestMa"], band["oldestMa"], band["cadenceMa"]
        count = int(math.floor((oldest - youngest) / step + 1e-9))
        ages.update(round(youngest + index * step, 6) for index in range(count + 1))
        ages.add(round(oldest, 6))
    return ages


def analyze_topology_intervals(
    pygplates: Any,
    model_root: Path,
    cadence_bands: Sequence[dict[str, float]],
) -> dict[str, Any]:
    sampling_ages = default_grid_ages(cadence_bands) | set(PERIOD_MIDPOINT_AGES)
    features_by_key: dict[str, dict[str, Any]] = {}
    scanned_records = 0
    for filename in TOPOLOGY_FILES:
        for feature in pygplates.FeatureCollection(str(model_root / filename)):
            scanned_records += 1
            begin, end = feature.get_valid_time()
            if not math.isfinite(begin) or not math.isfinite(end):
                continue
            older = min(MAX_AGE_MA, max(float(begin), float(end)))
            younger = max(0.0, min(float(begin), float(end)))
            if older < younger:
                continue
            feature_id = str(feature.get_feature_id())
            key = feature_id or compact_json({
                "type": str(feature.get_feature_type()),
                "name": feature.get_name(),
                "pid": feature.get_reconstruction_plate_id(),
                "older": older,
                "younger": younger,
            })
            record = features_by_key.setdefault(key, {
                "sourceFeatureId": feature_id or None,
                "type": str(feature.get_feature_type()),
                "name": str(feature.get_name() or "").strip(),
                "pid": feature.get_reconstruction_plate_id(),
                "validTime": {"youngerMa": younger, "olderMa": older},
                "lifetimeMyr": round(older - younger, 6),
                "topologicalGeometry": bool(feature.get_all_topological_geometries()),
                "sourceFiles": [],
            })
            if filename not in record["sourceFiles"]:
                record["sourceFiles"].append(filename)

    candidates = []
    for record in features_by_key.values():
        younger = record["validTime"]["youngerMa"]
        older = record["validTime"]["olderMa"]
        midpoint = (younger + older) / 2
        step = cadence_step_for_age(midpoint, cadence_bands)
        if step is None or record["lifetimeMyr"] >= step - 1e-9:
            continue
        if any(younger - 1e-9 <= age <= older + 1e-9 for age in sampling_ages):
            continue
        candidates.append({
            **record,
            "defaultStepMa": step,
            "suggestedRepresentativeAgeMa": round(midpoint, 6),
        })
    candidates.sort(key=lambda item: (
        item["suggestedRepresentativeAgeMa"], item["type"], item["sourceFeatureId"] or ""
    ))
    return {
        "schemaVersion": 1,
        "model": MODEL,
        "modelVersion": MODEL_VERSION,
        "sourceFiles": list(TOPOLOGY_FILES),
        "cadenceBands": list(cadence_bands),
        "alwaysIncludedPeriodMidpointAgesMa": list(PERIOD_MIDPOINT_AGES),
        "scannedFeatureRecords": scanned_records,
        "uniqueFeatures": len(features_by_key),
        "selectionRule": (
            "A candidate has a finite valid-time lifetime shorter than the cadence step at its interval midpoint, "
            "and neither the default cadence grid nor a current period midpoint falls inside its inclusive valid interval."
        ),
        "candidateCount": len(candidates),
        "candidates": candidates,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--model-root", required=True, type=Path, help="Extracted 1.8Ga_model_GSF directory from Zenodo v2.4")
    parser.add_argument("--pygplates-path", type=Path, help="Directory containing a local pygplates installation")
    age_group = parser.add_mutually_exclusive_group(required=True)
    age_group.add_argument("--age", type=float, help="One reconstruction age in Ma")
    age_group.add_argument("--ages", type=parse_age_spec, help="layer-grid, or comma-separated AGE / YOUNGEST:OLDEST:STEP entries")
    parser.add_argument("--snapshot-id", help="Stable identifier override; valid only for one age")
    parser.add_argument("--period", help="Optional period label for compatibility with the current period-midpoint files")
    parser.add_argument("--layers", default="all", type=parse_layers, help="all or a comma-separated subset of the six layer IDs")
    parser.add_argument("--output-dir", required=True, type=Path, help="Paleogeography root; frames go under series/<layer>/")
    parser.add_argument("--provenance", type=Path, help="Schema-3 provenance JSON; defaults to <output-dir>/provenance.json")
    parser.add_argument(
        "--cadence-bands",
        help="Override every selected layer's recorded bands as YOUNGEST:OLDEST:CADENCE",
    )
    parser.add_argument("--retrieved-at", required=True, help="Source retrieval date as YYYY-MM-DD")
    parser.add_argument("--script-commit", required=True, help="Committed worktree base used for this generation")
    parser.add_argument("--compare-dir", type=Path, help="Optional checked-in paleogeography directory")
    parser.add_argument("--compare-prefix", help="Filename prefix inside --compare-dir; defaults to the slug of --period")
    parser.add_argument("--report", type=Path, help="Optional JSON report for this invocation")
    parser.add_argument("--topology-interval-report", type=Path, help="Write short-lived topology transition candidates")
    parser.add_argument("--replace", action="store_true", help="Regenerate selected frames instead of checksum-verified resume")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", args.retrieved_at):
        raise ValueError("--retrieved-at must use YYYY-MM-DD")
    if not re.fullmatch(r"[0-9a-f]{7,40}", args.script_commit):
        raise ValueError("--script-commit must be a 7-40 character lowercase hexadecimal commit")
    uses_layer_grid = args.ages == "layer-grid"
    if uses_layer_grid:
        ages_by_layer = {layer: layer_age_grid(layer) for layer in args.layers}
        ages = sorted({age for layer_ages in ages_by_layer.values() for age in layer_ages})
    else:
        ages = args.ages if args.ages is not None else [args.age]
        ages_by_layer = {layer: list(ages) for layer in args.layers}
    if any(not math.isfinite(age) or not 0 <= age <= MAX_AGE_MA for age in ages):
        raise ValueError(f"every age must be between 0 and {MAX_AGE_MA:g} Ma")
    ages = sorted(set(ages))
    if len(ages) != 1 and (args.snapshot_id or args.period or args.compare_dir):
        raise ValueError("--snapshot-id, --period and --compare-dir are single-age options")
    cadence_bands_by_layer = {
        layer: parse_cadence_bands(args.cadence_bands) if args.cadence_bands else layer_cadence_bands(layer)
        for layer in args.layers
    }
    model_root = args.model_root.resolve()
    output_dir = args.output_dir.resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    provenance_path = (args.provenance or (output_dir / "provenance.json")).resolve()
    provenance_path.parent.mkdir(parents=True, exist_ok=True)

    source_files = verify_model(model_root)
    pygplates = load_pygplates(args.pygplates_path)
    rotation_model = pygplates.RotationModel(
        [str(model_root / filename) for filename in ROTATION_FILES],
        default_anchor_plate_id=0,
    )
    dateline_wrapper = pygplates.DateLineWrapper(0)

    if args.topology_interval_report:
        interval_report = analyze_topology_intervals(
            pygplates, model_root, cadence_bands_by_layer.get("plateBoundaries", layer_cadence_bands("plateBoundaries"))
        )
        representative_ages = sorted({
            candidate["suggestedRepresentativeAgeMa"]
            for candidate in interval_report["candidates"]
        })
        interval_report["publishedRepresentativeAgeCount"] = len(representative_ages)
        interval_report["publishedRepresentativeAgesMa"] = representative_ages
        if uses_layer_grid:
            for layer in ("platePolygons", "plateBoundaries"):
                if layer in ages_by_layer:
                    ages_by_layer[layer] = sorted(set(ages_by_layer[layer]) | set(representative_ages))
            ages = sorted({age for layer_ages in ages_by_layer.values() for age in layer_ages})
        interval_path = args.topology_interval_report.resolve()
        interval_path.parent.mkdir(parents=True, exist_ok=True)
        atomic_write(interval_path, (json.dumps(interval_report, ensure_ascii=False, indent=2) + "\n").encode("utf-8"))
        print(f"topology interval candidates: {interval_report['candidateCount']} ({interval_path})")

    provenance = load_provenance(provenance_path)
    series = provenance["series"]
    series["selectionPolicy"] = dict(SELECTION_POLICY)
    provenance["retrievedAt"] = args.retrieved_at
    provenance["offlineReconstruction"] = {
        "engine": "pyGPlates",
        "engineVersion": str(pygplates.Version.get_imported_version()),
        "modelArchive": "https://zenodo.org/records/13628813",
        "sourceFiles": source_files,
        "relationshipToService": (
            "Every local model payload is byte-identical to the immutable CAO2024 v2.4 Zenodo archive. "
            "Frames are independent local pyGPlates reconstructions, not cached GPlates Web Service responses."
        ),
    }
    script_path = Path(__file__).resolve()
    provenance["processing"] = {
        "script": "scripts/reconstruct_cao2024_offline.py",
        "scriptCommit": args.script_commit,
        "scriptCommitRole": "Generation worktree base; scriptSha256 identifies the exact reviewed generator content.",
        "scriptSha256": hashlib.sha256(script_path.read_bytes()).hexdigest(),
        "coordinatePrecisionDecimals": COORDINATE_PRECISION,
        "method": (
            "Verify all eleven CAO2024 v2.4 model payloads by SHA-256, reconstruct locally with pyGPlates "
            "using anchor plate 0, wrap at the antimeridian, retain strict COB semantics, remove deterministic "
            "duplicates and publish layer-specific nearest-frame series without interpolation."
        ),
    }
    for layer in args.layers:
        layer_series = series["layers"].setdefault(layer, {})
        layer_series["role"] = SERIES_ROLE_BY_LAYER[layer]
        layer_series["cadenceBands"] = cadence_bands_by_layer[layer]
        layer_series.setdefault("frames", [])

    report: dict[str, Any] = {
        "schemaVersion": 1,
        "model": MODEL,
        "modelVersion": MODEL_VERSION,
        "modelArchive": "https://zenodo.org/records/13628813",
        "pygplatesVersion": str(pygplates.Version.get_imported_version()),
        "agesMa": ages,
        "anchorPlateId": 0,
        "coordinatePrecisionDecimals": COORDINATE_PRECISION,
        "sourceFiles": source_files,
        "layers": {layer: {"frames": []} for layer in args.layers},
        "scientificBoundary": (
            "Frames are plate-model reconstructions interpolated at the requested age. Denser ages improve temporal "
            "navigation, not the observation resolution or certainty of the CAO2024 inputs. The files do not contain "
            "paleoelevation, bathymetry or terrain relief."
        ),
        "postprocessingBoundary": (
            "Coordinates are rounded, wrapped with pyGPlates DateLineWrapper and deterministic duplicates are removed. "
            "A non-zero remaining datelineCrossingFeatures count blocks publication."
        ),
        "reconstructionDetails": {},
    }

    selected = set(args.layers)
    for age_ma in ages:
        age_layers = {layer for layer in args.layers if age_ma in ages_by_layer[layer]}
        snapshot_id = args.snapshot_id or f"cao2024-{age_ma:.3f}ma"
        raw_layers: dict[str, list[dict[str, Any]]] = {}
        age_details: dict[str, Any] = {}
        if age_layers & {"platePolygons", "plateBoundaries"}:
            topology_layers, topology_details = topology_source_features(
                pygplates, model_root, rotation_model, age_ma, dateline_wrapper
            )
            age_details["topology"] = topology_details
            raw_layers.update({layer: features for layer, features in topology_layers.items() if layer in age_layers})
        for layer in LAYER_ORDER:
            if layer not in age_layers or layer not in LAYER_FILES:
                continue
            raw_layers[layer], age_details[layer] = regular_layer_source_features(
                pygplates, model_root, rotation_model, layer, age_ma, dateline_wrapper
            )
        report["reconstructionDetails"][f"{age_ma:.3f}"] = age_details

        for layer in (layer for layer in args.layers if layer in age_layers):
            collection, normalization = normalize_collection(
                raw_layers[layer], layer, snapshot_id, age_ma, args.period
            )
            if normalization["datelineCrossingFeatures"]:
                raise ValueError(
                    f"{age_ma:.3f} Ma/{layer}: {normalization['datelineCrossingFeatures']} antimeridian crossings remain"
                )
            layer_directory = output_dir / "series" / layer
            layer_directory.mkdir(parents=True, exist_ok=True)
            output_path = layer_directory / age_filename(age_ma)
            geometry_file = geometry_file_for_provenance(output_dir, output_path)
            frames = series["layers"][layer]["frames"]
            existing_frame = next((frame for frame in frames if abs(frame["ageMa"] - age_ma) < 1e-9), None)
            skipped = False
            if output_path.exists() and existing_frame and not args.replace:
                compressed = output_path.read_bytes()
                actual_sha256 = hashlib.sha256(compressed).hexdigest()
                if existing_frame["geometryFile"] != geometry_file or actual_sha256 != existing_frame["geometrySha256"]:
                    raise ValueError(f"{output_path}: existing gzip does not match its schema-3 frame record")
                checked_collection = json.loads(gzip.decompress(compressed).decode("utf-8"))
                if len(checked_collection.get("features", [])) != existing_frame["geometryFeatures"]:
                    raise ValueError(f"{output_path}: decompressed feature count does not match provenance")
                collection = checked_collection
                skipped = True
            elif output_path.exists() and not args.replace:
                raise FileExistsError(f"{output_path}: no checksum-addressed frame record exists; pass --replace after review")
            else:
                json_bytes = (compact_json(collection) + "\n").encode("utf-8")
                compressed = deterministic_gzip(json_bytes)
                atomic_write(output_path, compressed)
                frame_record = {
                    "ageMa": age_ma,
                    "geometryFile": geometry_file,
                    "geometryFeatures": len(collection["features"]),
                    "geometryBytes": len(compressed),
                    "geometrySha256": hashlib.sha256(compressed).hexdigest(),
                }
                frames[:] = [frame for frame in frames if abs(frame["ageMa"] - age_ma) >= 1e-9]
                frames.append(frame_record)
                frames.sort(key=lambda frame: frame["ageMa"])
                write_provenance(provenance_path, provenance)
                existing_frame = frame_record

            frame_report: dict[str, Any] = {
                **existing_frame,
                "status": "checksum-verified-skip" if skipped else "generated",
                "normalization": normalization,
            }
            if args.compare_dir:
                compare_prefix = args.compare_prefix or (slug(args.period) if args.period else None)
                if not compare_prefix:
                    raise ValueError("--compare-prefix is required when --compare-dir is used without --period")
                checked_path = args.compare_dir.resolve() / f"{compare_prefix}{LAYER_SUFFIXES[layer]}.json"
                if not checked_path.is_file():
                    raise FileNotFoundError(f"comparison layer is missing: {checked_path}")
                frame_report["comparison"] = collection_comparison(
                    collection, json.loads(checked_path.read_text(encoding="utf-8"))
                )
                frame_report["comparison"]["checkedFile"] = str(checked_path)
            report["layers"][layer]["frames"].append(frame_report)
            print(
                f"{age_ma:.3f} Ma/{layer}: {len(collection['features'])} features; "
                f"{normalization['datelineCrossingFeatures']} require antimeridian post-processing; "
                f"{frame_report['status']}"
            )

    write_provenance(provenance_path, provenance)
    required_anchors = {0.0, MAX_AGE_MA, *PERIOD_MIDPOINT_AGES}
    report["anchorCoverage"] = {
        layer: {
            "required": len(required_anchors),
            "missingAgesMa": sorted(required_anchors - {frame["ageMa"] for frame in series["layers"][layer]["frames"]}),
        }
        for layer in args.layers
    }
    if args.report:
        report_path = args.report.resolve()
        report_path.parent.mkdir(parents=True, exist_ok=True)
        atomic_write(report_path, (json.dumps(report, ensure_ascii=False, indent=2) + "\n").encode("utf-8"))
        print(f"report: {report_path}")
    print(f"provenance: {provenance_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
