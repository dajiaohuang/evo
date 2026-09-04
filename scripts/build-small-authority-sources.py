"""Build exact COL26.8 crosswalks for The Scorpion Files and ChiloBase.

The importer is intentionally source-pinned and offline after acquisition.  It
keeps the two authority layers independent, preserves source-only rows, and
uses only exact NFC plus Unicode-whitespace matching.
"""
from __future__ import annotations

import argparse
import csv
import gzip
import hashlib
import io
import json
import re
import tarfile
import unicodedata
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "data/catalogue-of-life/releases/2026-08-20/registry"
PACK = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
LIMIT = 2 * 1024 * 1024
RETRIEVED_AT = "2026-09-05T04:47:19+08:00"

SPECS = {
    "scorpions": {
        "dataset": "1164", "title": "The Scorpion Files", "rootName": "Scorpiones",
        "rootRank": "order", "packageId": "trilobites-chelicerates",
        "prefix": "scorpion-files", "archive": "data/sources/archives/checklistbank-1164-scorpion-files.zip",
        "metadata": "data/sources/archives/checklistbank-1164-scorpion-files.metadata.json",
        "archiveBytes": 168659, "archiveSha256": "bf13d82d5809d39c6526df683b48293aeadf72ebda514ede6eafe011d3fa814f",
        "metadataSha256": "9702bdc4522de80cd536a50e96de8eefa330b9c6aaf2e55f162c953b25f08877",
        "archiveVersion": "Jul 2026", "archiveIssued": "2026-07-07", "expectedCol": None,
    },
    "chilobase": {
        "dataset": "1042", "title": "A World Catalogue of Centipedes (Chilopoda) for the Web", "rootName": "Chilopoda",
        "rootRank": "class", "packageId": "crustaceans-insects",
        "prefix": "chilobase", "archive": "data/sources/archives/checklistbank-1042-chilobase.zip",
        "metadata": "data/sources/archives/checklistbank-1042-chilobase.metadata.json",
        "archiveBytes": 349771, "archiveSha256": "4274d8399386d90ca280f3cf89f5dddb0f598c4e085de2dc9926a9614335b088",
        "metadataSha256": "5b5b4d5e528e4f473dd459eb7d3f26a614a7c7f389d2c97e51a566e449fad9fa",
        "archiveVersion": "1.01, May 2006", "archiveIssued": "2006-10-10", "expectedCol": None,
    },
}


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def script_digest(path: Path) -> str:
    return digest(path.read_bytes().replace(b"\r\n", b"\n"))


def encode(value: object, pretty: bool = False) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (",", ":"), sort_keys=False) + "\n").encode("utf-8")


def normalize(value: str | None) -> str:
    return " ".join(unicodedata.normalize("NFC", value or "").split())


def key(name: str | None, author: str | None) -> tuple[str, str]:
    return normalize(name), normalize(author)


def col_bare(row: dict[str, str]) -> str:
    name, author = row.get("scientificName") or "", row.get("authorship") or ""
    suffix = " " + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def archive_members(path: Path) -> dict[str, bytes]:
    if path.read_bytes()[:2] == b"PK":
        with zipfile.ZipFile(path) as archive:
            return {info.filename: archive.read(info.filename) for info in archive.infolist()}
    with tarfile.open(path, "r:*") as archive:
        return {info.name: archive.extractfile(info).read() for info in archive.getmembers()
                if info.isfile()}


def read_tsv(payload: bytes, *, quotechar='"') -> list[dict[str, str]]:
    stream = io.TextIOWrapper(io.BytesIO(payload), encoding="utf-8-sig", newline="")
    return list(csv.DictReader(stream, delimiter="\t", quotechar=quotechar))


def read_col() -> tuple[dict[str, dict[str, str]], dict[str, str], dict[str, object]]:
    manifest_path = REGISTRY / "manifest.json"
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)
    parents: dict[str, str | None] = {}
    rows: dict[str, dict[str, str]] = {}
    shards = []
    for item in manifest["hierarchy"]["nodes"]["files"]:
        path = REGISTRY / item["path"]
        payload = path.read_bytes()
        shards.append({"path": str(path.relative_to(ROOT)).replace("\\", "/"),
                       "bytes": len(payload), "sha256": digest(payload)})
        with gzip.open(path, "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                rows[row["id"]] = row
                parents[row["id"]] = row.get("parentId")
    roots = {}
    for spec in SPECS.values():
        candidates = [r for r in rows.values() if r.get("rank") == spec["rootRank"]
                      and r.get("scientificName") == spec["rootName"]
                      and r.get("status") == "accepted"]
        if len(candidates) != 1:
            raise ValueError(f"expected one accepted COL root for {spec['rootName']}, got {len(candidates)}")
        roots[spec["rootName"]] = candidates[0]["id"]
        spec["rootId"] = candidates[0]["id"]
    return rows, parents, {"path": str(manifest_path.relative_to(ROOT)).replace("\\", "/"),
                           "bytes": len(manifest_bytes), "sha256": digest(manifest_bytes),
                           "nodeShards": shards, "roots": roots}


def descendants(rows, parents, root: str) -> list[dict[str, str]]:
    result = []
    for row in rows.values():
        if row.get("rank") != "species" or row.get("status") != "accepted":
            continue
        current, seen = row.get("parentId"), set()
        while current and current not in seen:
            if current == root:
                result.append(row)
                break
            seen.add(current)
            current = parents.get(current)
    return sorted(result, key=lambda r: r["id"])


def source_record(row: dict[str, str], member: str, ordinal: int, name: str, author: str) -> dict[str, object]:
    return {"id": row.get("col:id") or row.get("AcceptedTaxonID"), "scientificName": name,
            "authorship": author, "rank": "species", "status": "accepted",
            "sourceRow": {"member": member, "row": ordinal}, "source": row}


def read_source(spec: dict[str, object]):
    archive_path = ROOT / spec["archive"]
    metadata_path = ROOT / spec["metadata"]
    raw = archive_path.read_bytes()
    identity = {"bytes": len(raw), "sha256": digest(raw)}
    if identity != {"bytes": spec["archiveBytes"], "sha256": spec["archiveSha256"]}:
        raise ValueError(f"{spec['title']} archive identity mismatch: {identity}")
    metadata_raw = metadata_path.read_bytes()
    if digest(metadata_raw) != spec["metadataSha256"]:
        raise ValueError(f"{spec['title']} metadata response changed")
    metadata = json.loads(metadata_raw)
    if (str(metadata.get("key")) != spec["dataset"] or metadata.get("title") != spec["title"]
            or metadata.get("version") != spec["archiveVersion"] or metadata.get("license") != "cc by"
            or metadata.get("lastImportState") != "finished"):
        raise ValueError(f"{spec['title']} API metadata version identity mismatch")
    member_bytes = archive_members(archive_path)
    members = {name: {"bytes": len(payload), "sha256": digest(payload)}
               for name, payload in member_bytes.items()}
    accepted = {}
    by_key: dict[tuple[str, str], list[dict[str, object]]] = {}
    if spec["dataset"] == "1164":
            internal = read_tsv(member_bytes["name_usage.txt"])
            if "meta.yaml" not in members:
                raise ValueError("Scorpion Files archive lacks meta.yaml")
            meta_text = member_bytes["meta.yaml"].decode("utf-8")
            def field(name):
                match = re.search(rf"^{re.escape(name)}:\s*['\"]?([^'\"\r\n]+)", meta_text, re.MULTILINE)
                return match.group(1).strip() if match else None
            if (field("title") != spec["title"] or field("version") != spec["archiveVersion"]
                    or field("issued") != spec["archiveIssued"] or field("license") != "cc by"):
                raise ValueError("Scorpion Files archive metadata version identity mismatch")
            for ordinal, row in enumerate(internal, 2):
                if row.get("col:rank") != "species" or row.get("col:taxonomicStatus") != "accepted":
                    continue
                name, author = row.get("col:scientificName") or "", row.get("col:authorship") or ""
                record = source_record(row, "name_usage.txt", ordinal, name, author)
                accepted[record["id"]] = record
                by_key.setdefault(key(name, author), []).append(record)
            source_counts = {"member": "name_usage.txt", "speciesRankAccepted": len(accepted)}
    else:
            internal = read_tsv(member_bytes["AcceptedSpecies.tsv"])
            db = read_tsv(member_bytes["SourceDatabase.tsv"])
            if len(db) != 1 or db[0].get("DatabaseFullName") != spec["title"] or db[0].get("DatabaseVersion") != spec["archiveVersion"] or db[0].get("ReleaseDate") != spec["archiveIssued"]:
                raise ValueError("ChiloBase archive metadata version identity mismatch")
            for ordinal, row in enumerate(internal, 2):
                status = (row.get("Sp2000NameStatus") or "").strip().lower()
                if status and status != "accepted name":
                    continue
                genus, epithet = row.get("Genus") or "", row.get("SpeciesEpithet") or ""
                name = " ".join(part for part in (genus, epithet) if part)
                author = row.get("AuthorString") or ""
                record = source_record(row, "AcceptedSpecies.tsv", ordinal, name, author)
                accepted[record["id"]] = record
                by_key.setdefault(key(name, author), []).append(record)
            source_counts = {"member": "AcceptedSpecies.tsv", "speciesRankAccepted": len(accepted), "sourceDatabaseRows": len(db)}
    return accepted, by_key, metadata, members, source_counts, raw, metadata_raw


def gzip_bytes(raw: bytes) -> bytes:
    packed = bytearray(gzip.compress(raw, compresslevel=9, mtime=0))
    packed[9] = 255
    return bytes(packed)


def write_shards(directory: Path, prefix: str, rows: list[dict[str, object]], role: str):
    chunks, current, used = [], [], 0
    for row in rows:
        size = len(encode(row))
        if current and used + size > LIMIT:
            chunks.append(current)
            current, used = [], 0
        current.append(row)
        used += size
    if current:
        chunks.append(current)
    files = []
    for index, chunk in enumerate(chunks):
        name = f"{prefix}-{index:03d}.json.gz"
        source = encode(chunk)
        packed = gzip_bytes(source)
        (directory / name).write_bytes(packed)
        item = {"path": f"other-animals/{name}", "records": len(chunk), "bytes": len(packed),
                "sha256": digest(packed), "sourceBytes": len(source), "sourceSha256": digest(source),
                "encoding": "gzip", "mediaType": "application/json", "role": role}
        if role == "col-partition":
            item.update(minColId=chunk[0]["colId"], maxColId=chunk[-1]["colId"])
        files.append(item)
    return files


def project(which: str, output_root: Path = ROOT):
    spec = SPECS[which]
    rows, parents, col_input = read_col()
    col = descendants(rows, parents, spec["rootId"])
    accepted, by_key, metadata, members, source_counts, archive_raw, metadata_raw = read_source(spec)
    records, implicated = [], set()
    counts = {name: 0 for name in ("accepted", "ambiguous", "unmatched")}
    for col_row in col:
        candidates = by_key.get(key(col_bare(col_row), col_row.get("authorship")), [])
        status = "accepted" if len(candidates) == 1 else "ambiguous" if len(candidates) > 1 else "unmatched"
        matched = candidates[0] if status == "accepted" else None
        if matched:
            implicated.add(matched["id"])
        counts[status] += 1
        records.append({"colId": col_row["id"], "colScientificName": col_row.get("scientificName"),
                        "colAuthorship": col_row.get("authorship") or "", "status": status,
                        "matchedName": matched, "acceptedName": matched if matched else None,
                        "candidates": candidates if status == "ambiguous" else [],
                        "mappingBasis": "Exact NFC+Unicode-whitespace scientificName plus authorship; no fuzzy fallback.",
                        "sourceRows": [matched["sourceRow"]] if matched else []})
    source_only = []
    for source_id, row in sorted(accepted.items()):
        if source_id in implicated:
            continue
        source_only.append({"colId": None, "colScientificName": None, "colAuthorship": None,
                            "status": "upstream-only", "matchedName": None, "acceptedName": row,
                            "candidates": [], "mappingBasis": "Strict accepted source row not implicated by an exact COL match; null COL ownership.",
                            "sourceRows": [row["sourceRow"]]})
    destination = output_root / PACK.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    for old in destination.glob(f"{spec['prefix']}-*.json.gz"):
        old.unlink()
    files = write_shards(destination, spec["prefix"], records, "col-partition")
    upstream_files = write_shards(destination, f"{spec['prefix']}-upstream-only", source_only, "upstream-only")
    archive_member = "meta.yaml" if spec["dataset"] == "1164" else "SourceDatabase.tsv"
    archive_fields = {"title": spec["title"], "version": spec["archiveVersion"]}
    if spec["dataset"] == "1164":
        archive_fields.update(issued=spec["archiveIssued"], license="cc by")
    else:
        archive_fields["releaseDate"] = spec["archiveIssued"]
    source = {"datasetId": spec["dataset"], "provider": "ChecklistBank",
              "title": metadata["title"], "version": metadata["version"], "versionDoi": metadata["versionDoi"],
              "doi": metadata.get("doi"), "issued": metadata.get("issued"), "license": "CC-BY-4.0",
              "licenseUrl": "https://creativecommons.org/licenses/by/4.0/", "rights": metadata.get("rights"),
              "licenseEvidence": {"authority": "ChecklistBank API metadata", "metadataPath": spec["metadata"],
                                  "field": "license", "value": metadata["license"], "spdx": "CC-BY-4.0",
                                  "url": "https://creativecommons.org/licenses/by/4.0/"},
              "archiveUrl": f"https://api.checklistbank.org/dataset/{spec['dataset']}/archive",
              "metadataUrl": f"https://api.checklistbank.org/dataset/{spec['dataset']}",
              "retrievedAt": RETRIEVED_AT, "archivePath": spec["archive"], "archiveBytes": len(archive_raw),
              "archiveSha256": digest(archive_raw), "metadataPath": spec["metadata"], "metadataBytes": len(metadata_raw),
              "metadataSha256": digest(metadata_raw), "members": members,
              "archiveMemberEvidence": {"member": archive_member, "fields": archive_fields,
                                         "licenseMeaning": "Archive member metadata only; it is not the ChecklistBank API licence authority."
                                         if spec["dataset"] == "1164" else
                                         "SourceDatabase.tsv has no licence field; no archive-member licence is inferred."},
              "apiMetadataVersion": {"title": metadata["title"], "version": metadata["version"], "issued": metadata.get("issued"), "license": metadata.get("license")},
              "versionConsistency": "title/version match; archive-issued/release date is preserved separately from API issued metadata; licence is established only from ChecklistBank API metadata"}
    descriptor = {"schemaVersion": 1, "recordType": "release-pinned-authority-archive-crosswalk",
                  "id": f"{spec['prefix']}-archive-crosswalk", "packageId": spec["packageId"],
                  "provider": "ChecklistBank", "role": "authority-crosswalk", "rowEncoding": "json",
                  "encoding": "gzip", "mediaType": "application/json", "colIdField": "colId",
                  "totalCountField": "total", "source": source,
                  "scope": {"colRootUsageId": spec["rootId"], "scientificName": spec["rootName"],
                            "eligibleColSpecies": len(col), "sourceSpeciesRankAccepted": len(accepted)},
                  "matching": {"normalization": "NFC followed by Unicode whitespace normalization; exact trailing COL authorship is removed.",
                               "prohibited": "No fuzzy, case-folded, accent-folded, synonym, redirect or species-concept matching."},
                  "counts": {"total": len(records), **counts, "upstreamOnly": len(source_only), "records": len(records) + len(source_only)},
                  "files": files, "upstreamOnlyFiles": upstream_files,
                  "totals": {"records": len(records) + len(source_only), "compressedBytes": sum(x["bytes"] for x in files + upstream_files),
                             "sourceBytes": sum(x["sourceBytes"] for x in files + upstream_files)},
                  "deliveryProfiles": {"web-light": {"mode": "summary-only", "records": 0, "files": [], "totalCompressedBytes": 0, "totalSourceBytes": 0},
                                       "native-full": {"mode": "complete", "records": len(records) + len(source_only),
                                                       "files": [x["path"] for x in files + upstream_files],
                                                       "totalCompressedBytes": sum(x["bytes"] for x in files + upstream_files),
                                                       "totalSourceBytes": sum(x["sourceBytes"] for x in files + upstream_files)}},
                  "evidenceBoundary": {"en": "Frozen exact nomenclatural crosswalk from the named ChecklistBank authority; not species-concept equivalence, a biological dossier, fossil evidence or expert review.",
                                       "zh": "来自指定 ChecklistBank 权威源的冻结严格命名交叉映射；不是物种概念等同性、生物档案、化石证据或专家审查。"},
                  "limitations": ["Source-only accepted rows retain null COL ownership.", "Only the pinned archive is replayed; no live endpoint is used during projection.", "Archive completeness does not establish biological completeness."]}
    destination.mkdir(parents=True, exist_ok=True)
    descriptor_path = destination / f"{spec['prefix']}-sidecar.json"
    descriptor_bytes = encode(descriptor, pretty=True)
    descriptor_path.write_bytes(descriptor_bytes)
    ledger_path = output_root / f"data/sources/{spec['prefix']}-archive-{spec['dataset']}-import-ledger.json"
    ledger = {"schemaVersion": 1, "importType": "COL26.8-to-ChecklistBank-authority-archive-projection",
              "generatedBy": {"scriptPath": "scripts/build-small-authority-sources.py", "scriptSha256": script_digest(Path(__file__)), "hashNormalization": "LF"},
              "source": source, "registry": col_input,
              "scopeAudit": {"colRootUsageId": spec["rootId"], "colSpecies": len(col), **source_counts, "counts": descriptor["counts"]},
              "outputs": {"descriptor": {"path": str(descriptor_path.relative_to(output_root)).replace("\\", "/"), "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)},
                          "files": files, "upstreamOnlyFiles": upstream_files}}
    ledger_bytes = encode(ledger, pretty=True)
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(ledger_bytes)
    return {"scope": which, "root": spec["rootId"], "counts": descriptor["counts"], "files": len(files) + len(upstream_files),
            "compressedBytes": descriptor["totals"]["compressedBytes"], "sourceBytes": descriptor["totals"]["sourceBytes"]}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--scope", choices=sorted(SPECS), action="append")
    parser.add_argument("--output-root", type=Path, default=ROOT)
    args = parser.parse_args()
    for scope in args.scope or list(SPECS):
        print(json.dumps(project(scope, args.output_root), ensure_ascii=False))


if __name__ == "__main__":
    main()
