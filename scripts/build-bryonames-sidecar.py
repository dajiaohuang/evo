#!/usr/bin/env python3
"""Build the exact COL26.8 -> Bryonames identifier projection offline."""

from __future__ import annotations

import csv
import gzip
import hashlib
import json
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PACKAGE_ROOT = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-plants"
SPECIES_PATH = PACKAGE_ROOT / "species-000.jsonl.gz"
RETAINED_ROOT = ROOT / "retained-evo-data" if (ROOT / "retained-evo-data").exists() else ROOT.parent / "evo/retained-evo-data"
RETAINED_BATCH = RETAINED_ROOT / "bryonames-20260908"
ARCHIVE_PATH = RETAINED_BATCH / "dataset-170394.zip"
RELATIONS_PATH = RETAINED_BATCH / "bryonames-col26.8-source-relations-2026-09-08.jsonl"
OUTPUT_PATH = PACKAGE_ROOT / "bryonames-000.jsonl.gz"
PACKAGE_MANIFEST_PATH = PACKAGE_ROOT / "manifest.json"
COLLECTION_MANIFEST_PATH = PACKAGE_ROOT.parent / "manifest.json"
DATASET_KEY = "170394"
COL_DATASET_KEY = 316115
EXPECTED = 698
SOURCE_ARCHIVE_URL = "https://api.checklistbank.org/dataset/170394/archive"
RELATION_TEMPLATE = "https://api.checklistbank.org/dataset/316115/nameusage/{col_id}/source"


def sha(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def json_bytes(value: object) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2, sort_keys=False) + "\n").encode("utf-8")


def load_species() -> list[dict]:
    rows = [json.loads(line) for line in gzip.open(SPECIES_PATH, "rt", encoding="utf-8") if line.strip()]
    selected = [row for row in rows if row.get("rank") == "species" and row.get("status") == "accepted" and row.get("sourceDatasetId") == DATASET_KEY]
    if len(selected) != EXPECTED or len({row["id"] for row in selected}) != EXPECTED:
        raise SystemExit(f"Expected {EXPECTED} accepted Bryonames species, found {len(selected)}")
    return sorted(selected, key=lambda row: row["id"])


def load_relations(species: list[dict]) -> tuple[list[dict], bytes]:
    raw = RELATIONS_PATH.read_bytes()
    relations = [json.loads(line) for line in raw.decode("utf-8").splitlines() if line.strip()]
    by_col = {row["col"]["id"]: row for row in relations}
    if len(relations) != EXPECTED or len(by_col) != EXPECTED or set(by_col) != {row["id"] for row in species}:
        raise SystemExit("Bryonames source relation evidence does not cover the exact COL slice")
    for row in relations:
        response = row.get("response") or {}
        if row.get("requestUrl") != RELATION_TEMPLATE.format(col_id=row["col"]["id"]):
            raise SystemExit(f"Unexpected relation URL for {row['col']['id']}")
        if response.get("datasetKey") != COL_DATASET_KEY or response.get("sourceDatasetKey") != int(DATASET_KEY) or not str(response.get("sourceId", "")):
            raise SystemExit(f"Invalid source relation for {row['col']['id']}")
        if sha(row["responseText"].encode("utf-8")) != row.get("responseSha256"):
            raise SystemExit(f"Source relation response digest mismatch for {row['col']['id']}")
    return [by_col[row["id"]] for row in species], raw


def archive_rows() -> tuple[dict[str, dict], dict[str, dict]]:
    with zipfile.ZipFile(ARCHIVE_PATH) as archive:
        names = archive.namelist()
        name_member = next(name for name in names if name.endswith("/NameUsage.tsv"))
        reference_member = next(name for name in names if name.endswith("/Reference.tsv"))
        name_bytes = archive.read(name_member)
        reference_bytes = archive.read(reference_member)
    names_by_id = {
        row["ID"]: row
        for row in csv.DictReader(name_bytes.decode("utf-8-sig").splitlines(), delimiter="\t")
    }
    references_by_id = {
        row["ID"]: row
        for row in csv.DictReader(reference_bytes.decode("utf-8-sig").splitlines(), delimiter="\t")
    }
    if not names_by_id or not references_by_id:
        raise SystemExit("Bryonames archive members are empty")
    return names_by_id, references_by_id


def archive_inventory() -> dict:
    inventory = {}
    with zipfile.ZipFile(ARCHIVE_PATH) as archive:
        for info in archive.infolist():
            if info.is_dir():
                continue
            data = archive.read(info.filename)
            inventory[info.filename] = {"bytes": len(data), "sha256": sha(data)}
    return inventory


def build_records(species: list[dict], relations: list[dict], names_by_id: dict[str, dict], references_by_id: dict[str, dict]) -> list[dict]:
    records = []
    seen_source = set()
    for species_row, relation in zip(species, relations):
        source_id = str(relation["response"]["sourceId"])
        source = names_by_id.get(source_id)
        if not source or source.get("rank") != "species" or source.get("status") != "accepted":
            raise SystemExit(f"COL {species_row['id']} source {source_id} is not an accepted species row")
        if source_id in seen_source:
            raise SystemExit(f"Duplicate Bryonames source ID: {source_id}")
        seen_source.add(source_id)
        reference = references_by_id.get(source.get("referenceID", "")) if source.get("referenceID") else None
        records.append({
            "colId": species_row["id"],
            "sourceDatasetId": DATASET_KEY,
            "colScientificName": species_row["scientificName"],
            "colAuthorship": species_row.get("authorship"),
            "sourceId": source_id,
            "sourceUrl": source.get("link"),
            "scientificName": source["scientificName"],
            "authorship": source.get("authorship"),
            "rank": source["rank"],
            "status": source["status"],
            "nameStatus": source.get("nameStatus"),
            "nameReferenceId": source.get("nameReferenceID") or None,
            "referenceId": source.get("referenceID") or None,
            "referenceCitation": reference.get("citation") if reference else None,
            "mappingBasis": "checklistbank-source-record",
            "sourceResponseSha256": relation["responseSha256"],
        })
    return records


def deterministic_gzip(source: bytes) -> bytes:
    return gzip.compress(source, compresslevel=9, mtime=0)


def main() -> None:
    species = load_species()
    relations, relation_bytes = load_relations(species)
    names, references = archive_rows()
    records = build_records(species, relations, names, references)
    source_bytes = ("\n".join(json.dumps(row, ensure_ascii=False, separators=(",", ":")) for row in records) + "\n").encode("utf-8")
    compressed = deterministic_gzip(source_bytes)
    OUTPUT_PATH.write_bytes(compressed)
    archive_bytes = ARCHIVE_PATH.read_bytes()
    files = [{
        "path": "other-plants/bryonames-000.jsonl.gz",
        "records": len(records),
        "bytes": len(compressed),
        "sourceBytes": len(source_bytes),
        "sha256": sha(compressed),
        "sourceSha256": sha(source_bytes),
        "encoding": "gzip",
        "mediaType": "application/x-ndjson",
        "minColId": records[0]["colId"],
        "maxColId": records[-1]["colId"],
    }]
    source = {
        "catalogueRelease": "COL26.8",
        "catalogueReleaseDate": "2026-08-20",
        "checklistBankDatasetKey": COL_DATASET_KEY,
        "sourceDatasetKey": int(DATASET_KEY),
        "sourceDatasetTitle": "Bryophyte Nomenclator",
        "sourceDatasetVersion": "30 Aug 2026",
        "sourceDatasetVersionDoi": "10.48580/d8zmp.v93",
        "sourceDatasetDoi": "10.48580/d8zmp",
        "license": "CC-BY-4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
        "informationUrl": "https://www.bryonames.org/",
        "archiveUrl": SOURCE_ARCHIVE_URL,
        "archivePath": "retained-evo-data/bryonames-20260908/dataset-170394.zip",
        "archiveBytes": len(archive_bytes),
        "archiveSha256": sha(archive_bytes),
        "archiveMembers": archive_inventory(),
        "relationEvidencePath": "retained-evo-data/bryonames-20260908/bryonames-col26.8-source-relations-2026-09-08.jsonl",
        "relationEvidenceBytes": len(relation_bytes),
        "relationEvidenceSha256": sha(relation_bytes),
        "rightsBoundary": "Only the CC BY source name-usage fields and the exact ChecklistBank relation identifiers are projected. Linked publications, images and other third-party material are not redistributed.",
    }
    extension = {
        "id": "bryonames-archive-crosswalk",
        "recordType": "external-name-identifier-crosswalk",
        "provider": "Bryophyte Nomenclator (Bryonames) through ChecklistBank",
        "source": source,
        "eligibility": "Every strict accepted COL26.8 other-plants species whose sourceDatasetId is Bryonames (170394).",
        "counts": {"eligible": EXPECTED, "resolved": EXPECTED, "acceptedSpecies": EXPECTED, "accepted": EXPECTED, "redirects": 0, "ambiguous": 0, "unmatched": 0, "withheld": 0, "upstreamOnly": None},
        "fields": list(records[0].keys()),
        "files": files,
        "canonicalFileInventory": files,
        "totalCompressedBytes": len(compressed),
        "totalSourceBytes": len(source_bytes),
        "deliveryProfiles": {
            "web-light": {"payload": "summary-only", "files": [], "records": 0, "totalCompressedBytes": 0, "totalSourceBytes": 0, "statement": "GitHub Pages carries the verified descriptor but no Bryonames row payload."},
            "native-full": {"payload": "complete", "files": [files[0]["path"]], "records": EXPECTED, "totalCompressedBytes": len(compressed), "totalSourceBytes": len(source_bytes), "releaseFilesSha256": sha(json_bytes(files))},
        },
        "limitations": [
            "The source archive is the 30 Aug 2026 ChecklistBank import; the COL26.8 sourceDatasetId is retained but this current source snapshot is not asserted to be the 14 Jul 2026 COL import attempt.",
            "This is an exact identifier/status projection, not species-concept equivalence, a complete Bryonames archive, biological evidence, ecology, media, fossil evidence, phylogeny or expert review.",
        ],
        "integration": {"clientParityRequirement": "Native Android and iOS must copy the native-full payload byte-for-byte; Web uses the web-light summary profile.", "lookup": {"strategy": "lexicographic-colId-range-v1", "ordering": "Unicode code-unit ascending without locale folding or normalization.", "requestPolicy": "Select the sole inclusive minColId/maxColId shard for a query and load at most that one shard."}},
    }
    package_manifest = json.loads(PACKAGE_MANIFEST_PATH.read_text(encoding="utf-8"))
    package_manifest["extensions"] = [candidate for candidate in package_manifest.get("extensions", []) if candidate.get("id") != extension["id"]] + [extension]
    PACKAGE_MANIFEST_PATH.write_bytes(json_bytes(package_manifest))
    collection = json.loads(COLLECTION_MANIFEST_PATH.read_text(encoding="utf-8"))
    pack = next(candidate for candidate in collection["packs"] if candidate["packageId"] == "other-plants")
    package_bytes = PACKAGE_MANIFEST_PATH.read_bytes()
    pack.update({"manifestBytes": len(package_bytes), "manifestSha256": sha(package_bytes), "extensionCount": len(package_manifest["extensions"]), "extensionFileCount": sum(len(item.get("files", [])) + len(item.get("upstreamOnlyFiles", [])) for item in package_manifest["extensions"]), "extensionCompressedBytes": sum(sum(file["bytes"] for file in item.get("files", []) + item.get("upstreamOnlyFiles", [])) for item in package_manifest["extensions"]), "extensionSourceBytes": sum(sum(file.get("sourceBytes", 0) for file in item.get("files", []) + item.get("upstreamOnlyFiles", [])) for item in package_manifest["extensions"])})
    collection["authoritativeSupplements"] = {**collection.get("authoritativeSupplements", {}), "bryonamesIdentifiers": {"catalogueRelease": "COL26.8", "acceptedSpecies": EXPECTED, "sourceDatasetKey": 170394, "resourcePack": "other-plants", "lookupStrategy": "lexicographic-colId-range-v1", "webProfile": "web-light", "nativeProfile": "native-full"}}
    COLLECTION_MANIFEST_PATH.write_bytes(json_bytes(collection))
    print(json.dumps({"records": len(records), "archiveSha256": source["archiveSha256"], "output": files[0], "relationEvidenceSha256": source["relationEvidenceSha256"]}, indent=2))


if __name__ == "__main__":
    main()
