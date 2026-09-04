"""Project the pinned WoRMS Monogenea ColDP archive onto COL26.8.

The projection is intentionally exact-name+authorship only.  It preserves
unmatched COL rows and source-only accepted concepts without calling either
group globally new or equivalent at the species-concept level.
"""

from __future__ import annotations

import argparse
import csv
import gzip
import hashlib
import io
import json
import pathlib
import zipfile
from collections import defaultdict

ROOT = pathlib.Path(__file__).resolve().parents[1]
COL_ROOT = ROOT / "data/catalogue-of-life/releases/2026-08-20"
COL_PACK = COL_ROOT / "resource-packs/other-animals"
DEFAULT_ARCHIVE = ROOT / "data/sources/archives/worms-monogenea-2026-09-01.zip"
ARCHIVE_URL = "https://api.checklistbank.org/dataset/1126/archive"
ARCHIVE_SHA256 = "f11c11f3ca7c8b5a858e36906f87e1aa81ea3438475e736b63efbda0e59f8699"
ARCHIVE_BYTES = 1235337
SOURCE_DATASET = "1126"
SOURCE_VERSION = "2026-09-01"
COL_EXPECTED = 5852
SOURCE_EXPECTED = 5878
PREFIX = "worms-monogenea"
DESCRIPTOR_NAME = f"{PREFIX}-sidecar.json"
LEDGER_RELATIVE = "data/sources/worms-monogenea-archive-2026-09-01-import-ledger.json"
SHARD_LIMIT = 2 * 1024 * 1024


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def encode(value: object, pretty: bool = False) -> bytes:
    return (
        json.dumps(
            value,
            ensure_ascii=False,
            indent=2 if pretty else None,
            separators=None if pretty else (",", ":"),
        )
        + "\n"
    ).encode("utf-8")


def clean(value: str | None) -> str:
    return " ".join((value or "").split())


def key(name: str | None, authorship: str | None) -> tuple[str, str]:
    return clean(name), clean(authorship)


def col_bare(row: dict[str, str]) -> str:
    name, author = row.get("scientificName", ""), row.get("authorship", "") or ""
    suffix = " " + author
    return name[: -len(suffix)] if author and name.endswith(suffix) else name


def read_tsv(archive: zipfile.ZipFile, member: str) -> list[dict[str, str]]:
    # ColDP TSV is unquoted; strict decoding prevents silent source mutation.
    return list(
        csv.DictReader(
            io.StringIO(archive.read(member).decode("utf-8-sig")), delimiter="\t"
        )
    )


def source_name(name: dict[str, str], taxon: dict[str, str], refs_by_id: dict[str, tuple[int, dict[str, str]]]) -> dict[str, object]:
    def direct_reference(reference_id: str | None) -> dict[str, object]:
        if not reference_id:
            return {"referenceId": None, "reference": None, "referenceMissing": False, "sourceRows": []}
        hit = refs_by_id.get(reference_id)
        if not hit:
            return {"referenceId": reference_id, "reference": None, "referenceMissing": True, "sourceRows": []}
        row, reference = hit
        return {"referenceId": reference_id, "reference": reference, "referenceMissing": False, "sourceRows": [{"member": "Reference.txt", "row": row}]}
    return {
        "id": taxon["ID"],
        "nameId": name["ID"],
        "scientificName": name["scientificName"],
        "authorship": name.get("authorship", ""),
        "rank": name.get("rank", ""),
        "status": "accepted",
        "url": name.get("link", ""),
        "referenceId": taxon.get("referenceID") or None,
        "nameReferenceId": name.get("referenceID") or None,
        "publishedInYear": name.get("publishedInYear") or None,
        "publishedInPage": name.get("publishedInPage") or None,
        "parentId": taxon.get("parentID") or None,
        "environment": taxon.get("environment") or None,
        "taxonReference": direct_reference(taxon.get("referenceID")),
        "nameReference": direct_reference(name.get("referenceID")),
    }


def write_gzip(path: pathlib.Path, payload: bytes) -> bytes:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("wb") as handle:
        with gzip.GzipFile(filename="", fileobj=handle, mode="wb", mtime=0) as stream:
            stream.write(payload)
    return path.read_bytes()


def chunks(records: list[dict[str, object]]) -> list[list[dict[str, object]]]:
    result, current, size = [], [], 3
    for record in records:
        encoded = encode(record)
        if current and size + len(encoded) > SHARD_LIMIT:
            result.append(current)
            current, size = [], 3
        current.append(record)
        size += len(encoded)
    if current:
        result.append(current)
    return result


def load_col() -> tuple[list[dict[str, str]], list[dict[str, object]]]:
    manifest = json.loads((COL_PACK / "manifest.json").read_text(encoding="utf-8"))
    records = []
    inputs = []
    for item in manifest["files"]:
        path = COL_ROOT / "resource-packs" / item["path"]
        raw = path.read_bytes()
        inputs.append({"path": path.relative_to(ROOT).as_posix(), "bytes": len(raw), "sha256": digest(raw)})
        with gzip.open(path, "rt", encoding="utf-8") as stream:
            for line in stream:
                if line.strip():
                    row = json.loads(line)
                    if (
                        row.get("rank") == "species"
                        and row.get("status") == "accepted"
                        and str(row.get("sourceDatasetId")) == SOURCE_DATASET
                    ):
                        records.append(row)
    registry = json.loads((COL_ROOT / "registry/manifest.json").read_text(encoding="utf-8"))
    parents, names = {}, {}
    for item in registry["hierarchy"]["nodes"]["files"]:
        with gzip.open(COL_ROOT / "registry" / item["path"], "rt", encoding="utf-8") as stream:
            for line in stream:
                if line.strip():
                    row = json.loads(line)
                    parents[row["id"]] = row.get("parentId")
                    names[row["id"]] = row.get("scientificName")
    for row in records:
        seen = set()
        current = row["id"]
        while current and current not in seen and current != "B8V3Y":
            seen.add(current)
            current = parents.get(current)
        if current != "B8V3Y":
            raise ValueError(f"COL source1126 row is outside Monogenea root: {row['id']}")
    if len(records) != COL_EXPECTED or len({row["id"] for row in records}) != COL_EXPECTED:
        raise ValueError("pinned COL Monogenea source scope changed")
    return sorted(records, key=lambda row: row["id"]), inputs


def load_source(path: pathlib.Path) -> tuple[dict, dict[str, list[dict]], dict[str, dict], dict[str, tuple[int, dict[str, str]]]]:
    raw = path.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != ARCHIVE_SHA256:
        raise ValueError("pinned Monogenea archive bytes/hash mismatch")
    with zipfile.ZipFile(path) as archive:
        member_hashes = {info.filename: {"bytes": info.file_size, "sha256": digest(archive.read(info.filename))} for info in archive.infolist()}
        names = read_tsv(archive, "Name.txt")
        for index, row in enumerate(names, 2):
            row["_nameRow"] = index
        taxa = read_tsv(archive, "Taxon.txt")
        references = read_tsv(archive, "Reference.txt")
        name_refs = read_tsv(archive, "NameReference.txt")
        metadata_bytes = archive.read("metadata.yml")
    names_by_id = {row["ID"]: row for row in names}
    refs_by_id = {row.get("ID"): (index + 2, row) for index, row in enumerate(references)}
    refs_for_name: dict[str, list[dict[str, object]]] = defaultdict(list)
    for index, row in enumerate(name_refs, 2):
        reference_id = row.get("referenceID") or row.get("ReferenceID") or ""
        item = {"referenceId": reference_id or None, "sourceRows": [{"member": "NameReference.txt", "row": index}]}
        if reference_id and reference_id in refs_by_id:
            ref_row, ref = refs_by_id[reference_id]
            item["sourceRows"].append({"member": "Reference.txt", "row": ref_row})
            item["reference"] = ref
            item["referenceMissing"] = False
        else:
            item["reference"] = None
            item["referenceMissing"] = True
        refs_for_name[row.get("nameID") or row.get("NameID", "")].append(item)
    taxon_rows: dict[str, list[dict]] = defaultdict(list)
    for index, row in enumerate(taxa, 2):
        name = names_by_id.get(row.get("nameID", ""))
        if not name or name.get("rank", "").lower() != "species" or not row.get("species"):
            continue
        row["_taxonRow"] = index
        taxon_rows[name["ID"]].append(row)
    accepted: dict[str, dict] = {}
    for name_id, rows_for_name in taxon_rows.items():
        if len(rows_for_name) != 1:
            raise ValueError(f"duplicate accepted source taxon for {name_id}")
        accepted[name_id] = {"name": names_by_id[name_id], "taxon": rows_for_name[0]}
    if len(accepted) != SOURCE_EXPECTED:
        raise ValueError(f"expected {SOURCE_EXPECTED} source species, got {len(accepted)}")
    source_meta = {
        "archiveUrl": ARCHIVE_URL,
        "archiveBytes": len(raw),
        "archiveSha256": digest(raw),
        "archiveEncoding": "ZIP (ColDP archive)",
        "archivePath": "data/sources/archives/worms-monogenea-2026-09-01.zip",
        "version": SOURCE_VERSION,
        "versionDoi": "10.48580/d3cv.v86",
        "metadataYamlSha256": digest(metadata_bytes),
        "members": member_hashes,
        "license": "CC-BY-4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
        "provider": "World Register of Marine Species via ChecklistBank",
        "retrievedAt": "2026-09-04",
    }
    return source_meta, accepted, refs_for_name, refs_by_id


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", type=pathlib.Path, default=DEFAULT_ARCHIVE)
    parser.add_argument("--output-root", type=pathlib.Path, default=ROOT)
    args = parser.parse_args()
    source, accepted, refs_for_name, refs_by_id = load_source(args.archive)
    col, col_inputs = load_col()
    by_key: dict[tuple[str, str], list[dict]] = defaultdict(list)
    for item in accepted.values():
        name, taxon = item["name"], item["taxon"]
        by_key[key(name.get("scientificName"), name.get("authorship"))].append(item)
    records, implicated, counts = [], set(), {k: 0 for k in ("accepted", "redirect", "ambiguous", "unmatched", "withheld")}
    for row in col:
        hits = by_key.get(key(col_bare(row), row.get("authorship")), [])
        if len(hits) == 1:
            item = hits[0]
            name, taxon = item["name"], item["taxon"]
            source_record = source_name(name, taxon, refs_by_id)
            source_record["nameReferences"] = refs_for_name.get(name["ID"], [])
            record = {
                "colId": row["id"], "colScientificName": row["scientificName"],
                "colAuthorship": row.get("authorship", ""), "status": "accepted",
                "matchedName": source_record, "acceptedName": source_record,
                "candidates": [],
                "mappingBasis": "Exact source scientificName+authorship match; source fields preserved.",
                "sourceRows": [{"member": "Name.txt", "row": name["_nameRow"]}, {"member": "Taxon.txt", "row": taxon["_taxonRow"]}],
                "sourceAcceptedTaxonId": taxon["ID"],
                "sourceNameId": name["ID"],
            }
            implicated.add(name["ID"])
            counts["accepted"] += 1
        elif len(hits) > 1:
            record = {"colId": row["id"], "colScientificName": row["scientificName"], "colAuthorship": row.get("authorship", ""), "status": "ambiguous", "matchedName": None, "acceptedName": None, "candidates": [source_name(x["name"], x["taxon"], refs_by_id) for x in hits], "mappingBasis": "Exact key has multiple source accepted rows; no winner selected.", "sourceRows": []}
            counts["ambiguous"] += 1
        else:
            record = {"colId": row["id"], "colScientificName": row["scientificName"], "colAuthorship": row.get("authorship", ""), "status": "unmatched", "matchedName": None, "acceptedName": None, "candidates": [], "mappingBasis": "No exact source scientificName+authorship key; no fuzzy matching.", "sourceRows": []}
            counts["unmatched"] += 1
        records.append(record)
    upstream = []
    for sid, item in sorted(accepted.items()):
        if sid in implicated:
            continue
        name, taxon = item["name"], item["taxon"]
        accepted_name = source_name(name, taxon, refs_by_id)
        accepted_name["nameReferences"] = refs_for_name.get(sid, [])
        upstream.append({"colId": None, "colScientificName": None, "colAuthorship": None, "status": "upstream-only", "matchedName": None, "acceptedName": accepted_name, "candidates": [], "mappingBasis": "Accepted source concept has no exact COL ownership; not a global-new-species claim.", "sourceRows": [{"member": "Name.txt", "row": name["_nameRow"]}, {"member": "Taxon.txt", "row": taxon["_taxonRow"]}], "sourceAcceptedTaxonId": taxon["ID"], "sourceNameId": name["ID"]})
    out_dir = args.output_root / COL_PACK.relative_to(ROOT)
    out_dir.mkdir(parents=True, exist_ok=True)
    files, upstream_files = [], []
    for is_upstream, values in ((False, records), (True, upstream)):
        for index, part in enumerate(chunks(values)):
            suffix = "-upstream-only" if is_upstream else ""
            path = out_dir / f"{PREFIX}{suffix}-{index:03d}.json.gz"
            raw = encode(part)
            compressed = write_gzip(path, raw)
            entry = {"path": f"other-animals/{path.name}", "records": len(part), "bytes": len(compressed), "sha256": digest(compressed), "sourceBytes": len(raw), "sourceSha256": digest(raw), "encoding": "gzip", "mediaType": "application/json", "role": "source-only" if is_upstream else "col-partition"}
            if not is_upstream:
                entry.update(minColId=part[0]["colId"], maxColId=part[-1]["colId"])
            (upstream_files if is_upstream else files).append(entry)
    descriptor = {"schemaVersion": 1, "recordType": "release-pinned-authority-archive-crosswalk", "id": f"{PREFIX}-archive-crosswalk", "packageId": "other-animals", "provider": source["provider"], "rowEncoding": "json", "colIdField": "colId", "totalCountField": "total", "source": source, "scope": {"colSourceDatasetId": SOURCE_DATASET, "colRelease": "COL26.8", "colStrictAcceptedSpecies": COL_EXPECTED, "sourceStrictAcceptedSpecies": SOURCE_EXPECTED, "colRootUsageId": "B8V3Y", "sourceRoot": "Monogenea", "packageOwnership": "other-animals residual route"}, "matching": {"normalization": "Exact scientificName+authorship after whitespace normalization only.", "prohibited": "No fuzzy, case-folded, accent-folded, inferred or species-concept matching."}, "counts": {"total": len(records), **counts, "upstreamOnly": len(upstream), "records": len(records) + len(upstream)}, "files": files, "upstreamOnlyFiles": upstream_files, "totalCompressedBytes": sum(x["bytes"] for x in files + upstream_files), "totalSourceBytes": sum(x["sourceBytes"] for x in files + upstream_files), "deliveryProfiles": {"web-light": {"records": 0, "files": [], "totalCompressedBytes": 0, "totalSourceBytes": 0}, "native-full": {"records": len(records) + len(upstream), "files": [x["path"] for x in files + upstream_files], "totalCompressedBytes": sum(x["bytes"] for x in files + upstream_files), "totalSourceBytes": sum(x["sourceBytes"] for x in files + upstream_files)}}, "evidenceBoundary": {"en": "Frozen WoRMS source traceability; not independent scientific corroboration, species-concept equivalence, biological dossier, fossil evidence or expert review.", "zh": "冻结的 WoRMS 来源追溯；不是独立科学佐证、物种概念等同、生物档案、化石证据或专家审查。"}, "limitations": ["Unmatched COL rows and source-only accepted concepts are retained explicitly; neither is called globally new.", "Source archive and COL26.8 are different snapshots (2026-09-01 vs 2026-08-20)."]}
    descriptor_path = out_dir / DESCRIPTOR_NAME
    descriptor_bytes = encode(descriptor, pretty=True)
    descriptor_path.write_bytes(descriptor_bytes)
    script_bytes = pathlib.Path(__file__).read_bytes()
    ledger = {"schemaVersion": 1, "importType": "COL26.8-to-WoRMS-Monogenea-archive-crosswalk", "generatedBy": {"script": pathlib.Path(__file__).relative_to(ROOT).as_posix(), "scriptSha256": digest(script_bytes)}, "source": source, "sourceMembers": {"archive.bin": {"bytes": source["archiveBytes"], "sha256": source["archiveSha256"]}}, "colInputs": col_inputs, "scopeAudit": {"colRootUsageId": "B8V3Y", "colRootScientificName": "Monogenea Van Beneden, 1858", "colStrictAcceptedSpecies": len(col), "sourceStrictAcceptedSpecies": len(accepted), "matched": counts["accepted"], "unmatched": counts["unmatched"], "ambiguous": counts["ambiguous"], "sourceOnly": len(upstream)}, "output": {"descriptorPath": descriptor_path.relative_to(args.output_root).as_posix(), "descriptorBytes": len(descriptor_bytes), "descriptorSha256": digest(descriptor_bytes), "files": files, "upstreamOnlyFiles": upstream_files}}
    ledger_path = args.output_root / LEDGER_RELATIVE
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(encode(ledger, pretty=True))
    print(json.dumps({"counts": descriptor["counts"], "files": files, "upstreamOnlyFiles": upstream_files}, ensure_ascii=False))


if __name__ == "__main__":
    main()
