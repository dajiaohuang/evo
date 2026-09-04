"""Project the complete ChecklistBank ITIS archive into deterministic raw table shards.

This worker deliberately keeps the archive's table boundaries and field text.  It
does not infer accepted names, collapse synonyms, or substitute species concepts.
"""

from __future__ import annotations

import argparse
import csv
import gzip
import hashlib
import io
import json
import re
import zipfile
from pathlib import Path
from typing import Iterable


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_ARCHIVE = ROOT / "data/sources/archives/checklistbank-2144-itis-2026-08-26.zip"
DEFAULT_METADATA = ROOT / "data/sources/archives/checklistbank-2144-itis-2026-08-26.metadata.json"
DEFAULT_OUTPUT = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
DEFAULT_DESCRIPTOR = DEFAULT_OUTPUT / "itis-global-original-rc130.json"
DEFAULT_LEDGER = ROOT / "data/sources/itis-global-original-rc130-import-ledger.json"

ARCHIVE_URL = "https://api.checklistbank.org/dataset/2144/archive"
METADATA_URL = "https://api.checklistbank.org/dataset/2144"
ARCHIVE_BYTES = 37_788_923
ARCHIVE_SHA256 = "d844f03071ea8ddf144d11098543b4066cb5f80d23263beb8f088d144a99b906"
METADATA_BYTES = 5_330
METADATA_SHA256 = "549705717476709f6a86b521ebbe1b8e05abc963773b2d037c155b5d7681c9fd"
SOURCE_LIMIT_BYTES = 1_750 * 1024

MEMBERS = (
    "Distribution.tsv",
    "Name.tsv",
    "Reference.tsv",
    "Synonym.tsv",
    "Taxon.tsv",
    "VernacularName.tsv",
)
KEY_FIELDS = {
    "Distribution.tsv": ("taxonID", "area", "gazetteer", "status", "referenceID"),
    "Name.tsv": ("ID",),
    "Reference.tsv": ("ID",),
    "Synonym.tsv": ("ID",),
    "Taxon.tsv": ("ID",),
    "VernacularName.tsv": ("taxonID", "name", "transliteration", "language", "country", "area", "sex", "referenceID"),
}


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def file_identity(path: Path) -> dict[str, int | str]:
    hasher = hashlib.sha256()
    size = 0
    with path.open("rb") as stream:
        while block := stream.read(1024 * 1024):
            hasher.update(block)
            size += len(block)
    return {"bytes": size, "sha256": hasher.hexdigest()}


def json_bytes(value: object, pretty: bool = False) -> bytes:
    kwargs = {"ensure_ascii": False, "sort_keys": False}
    if pretty:
        kwargs["indent"] = 2
    else:
        kwargs["separators"] = (",", ":")
    return (json.dumps(value, **kwargs) + "\n").encode("utf-8")


def deterministic_gzip(data: bytes) -> bytes:
    compressed = bytearray(gzip.compress(data, compresslevel=9, mtime=0))
    # Python/zlib may encode its platform in the gzip OS byte.  Pin it.
    compressed[9] = 255
    return bytes(compressed)


def member_slug(member: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", member.lower()).strip("-")


def row_key(member: str, row: dict[str, str]) -> str:
    return "|".join(row.get(field, "") for field in KEY_FIELDS[member])


def archive_member_identity(archive: zipfile.ZipFile, member: str) -> dict[str, int | str]:
    raw = archive.read(member)
    return {"bytes": len(raw), "sha256": digest(raw)}


def iter_tsv(archive: zipfile.ZipFile, member: str) -> Iterable[tuple[int, dict[str, str]]]:
    with archive.open(member, "r") as binary:
        stream = io.TextIOWrapper(binary, encoding="utf-8", newline="")
        reader = csv.DictReader(stream, delimiter="\t")
        if reader.fieldnames is None:
            raise ValueError(f"{member} has no header")
        for ordinal, row in enumerate(reader, 2):
            if None in row:
                raise ValueError(f"{member} row {ordinal} has more fields than its header")
            if any(value is None for value in row.values()):
                raise ValueError(f"{member} row {ordinal} has a missing field")
            yield ordinal, {key: value for key, value in row.items() if key is not None}


def emit_member(archive: zipfile.ZipFile, member: str, output: Path) -> dict[str, object]:
    prefix = f"itis-global-original-rc130-{member_slug(member)}-"
    retained: set[str] = set()
    files: list[dict[str, object]] = []
    current: list[bytes] = []
    current_bytes = 0
    seen: set[str] = set()
    row_count = 0

    def flush() -> None:
        nonlocal current, current_bytes
        if not current:
            return
        index = len(files)
        filename = f"{prefix}{index:04d}.jsonl.gz"
        source = b"".join(current)
        compressed = deterministic_gzip(source)
        (output / filename).write_bytes(compressed)
        first = json.loads(current[0])
        last = json.loads(current[-1])
        descriptor = {
            "path": f"data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/{filename}",
            "member": member,
            "records": len(current),
            "bytes": len(compressed),
            "sha256": digest(compressed),
            "sourceBytes": len(source),
            "sourceSha256": digest(source),
            "firstRow": first["locator"]["row"],
            "lastRow": last["locator"]["row"],
            "firstKey": first["locator"]["key"],
            "lastKey": last["locator"]["key"],
            "encoding": "gzip",
            "mediaType": "application/x-ndjson",
        }
        files.append(descriptor)
        retained.add(filename)
        current = []
        current_bytes = 0

    for ordinal, fields in iter_tsv(archive, member):
        key = row_key(member, fields)
        if key in seen:
            raise ValueError(f"duplicate {member} source key at row {ordinal}: {key}")
        seen.add(key)
        record = {
            "sourceMember": member,
            "fields": fields,
            "locator": {
                "datasetKey": 2144,
                "archive": "checklistbank-2144-itis-2026-08-26.zip",
                "member": member,
                "row": ordinal,
                "key": key,
            },
        }
        encoded = json_bytes(record)
        if len(encoded) > SOURCE_LIMIT_BYTES:
            raise ValueError(f"single {member} record exceeds source shard limit at row {ordinal}")
        if current and current_bytes + len(encoded) > SOURCE_LIMIT_BYTES:
            flush()
        current.append(encoded)
        current_bytes += len(encoded)
        row_count += 1
    flush()

    for path in output.iterdir():
        if path.is_file() and path.name.startswith(prefix) and path.name.endswith(".jsonl.gz") and path.name not in retained:
            path.unlink()
    identity = archive_member_identity(archive, member)
    return {
        "member": member,
        "rows": row_count,
        "bytes": identity["bytes"],
        "sha256": identity["sha256"],
        "fields": list(next(iter_tsv(archive, member))[1].keys()),
        "files": files,
    }


def relative_path(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", type=Path, default=DEFAULT_ARCHIVE)
    parser.add_argument("--metadata", type=Path, default=DEFAULT_METADATA)
    parser.add_argument("--output-root", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--descriptor", type=Path, default=DEFAULT_DESCRIPTOR)
    parser.add_argument("--ledger", type=Path, default=DEFAULT_LEDGER)
    args = parser.parse_args()

    archive_identity = file_identity(args.archive)
    metadata_identity = file_identity(args.metadata)
    if archive_identity != {"bytes": ARCHIVE_BYTES, "sha256": ARCHIVE_SHA256}:
        raise ValueError(f"unexpected pinned archive identity: {archive_identity}")
    if metadata_identity != {"bytes": METADATA_BYTES, "sha256": METADATA_SHA256}:
        raise ValueError(f"unexpected pinned metadata identity: {metadata_identity}")
    metadata = json.loads(args.metadata.read_bytes())
    expected = {
        "key": 2144,
        "version": "2026-08-26",
        "versionDoi": "10.48580/d4ky.v120",
        "doi": "10.48580/d4ky",
        "lastImportState": "finished",
    }
    for key, value in expected.items():
        if metadata.get(key) != value:
            raise ValueError(f"metadata {key} changed: {metadata.get(key)!r}")
    args.output_root.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(args.archive) as archive:
        if set(archive.namelist()) != set(MEMBERS) | {"metadata.yaml"}:
            raise ValueError(f"unexpected archive members: {archive.namelist()}")
        members = [emit_member(archive, member, args.output_root) for member in MEMBERS]
        archive_members = [
            {"member": member, **archive_member_identity(archive, member)}
            for member in archive.namelist()
        ]

    counts = {item["member"]: item["rows"] for item in members}
    projected = sum(int(item["rows"]) for item in members)
    files = [file for item in members for file in item["files"]]
    descriptor = {
        "schemaVersion": 1,
        "recordType": "release-pinned-global-original-taxonomic-archive",
        "id": "itis-global-original-rc130",
        "datasetKey": 2144,
        "scope": {
            "geographic": metadata["geographicScope"],
            "taxonomic": metadata["taxonomicScope"],
            "coverage": "All rows of every six tabular members in the pinned ChecklistBank ITIS archive; no rank, status, kingdom, extinct, synonym, or package filter.",
            "taxonTree": "Taxon.parentID, Taxon.nameID, Taxon.extinct and Taxon.referenceID are retained verbatim, so native-full consumers can stream or index the complete tree and choose extant species explicitly.",
            "coverageBoundary": "This is the full dataset-2144 archive projection. It is not a claim that ITIS is the final classification authority or that its species concepts equal another checklist.",
        },
        "source": {
            "provider": metadata["title"],
            "title": metadata["title"],
            "alias": metadata["alias"],
            "version": metadata["version"],
            "issued": metadata["issued"],
            "doi": metadata["doi"],
            "versionDoi": metadata["versionDoi"],
            "citation": metadata["citation"],
            "license": "CC0-1.0",
            "licenseLabel": "CC0 1.0 / public domain",
            "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
            "url": metadata["url"],
            "archiveUrl": ARCHIVE_URL,
            "metadataUrl": METADATA_URL,
            "archivePath": relative_path(args.archive),
            "archiveBytes": ARCHIVE_BYTES,
            "archiveSha256": ARCHIVE_SHA256,
            "metadataPath": relative_path(args.metadata),
            "metadataBytes": METADATA_BYTES,
            "metadataSha256": METADATA_SHA256,
            "editors": metadata["editor"],
            "contributors": metadata["contributor"],
            "archiveMembers": archive_members,
            "members": members,
        },
        "projection": {
            "format": "JSONL records; each record contains sourceMember, original tabular fields, and locator.",
            "matching": "No matching or normalization is performed; source IDs and field text remain exact.",
            "duplicatePolicy": "One record per source row; duplicate member keys fail generation. Distribution and VernacularName use their complete compound source key.",
            "sourceShardLimitBytes": SOURCE_LIMIT_BYTES,
            "ordering": "Pinned archive member order and source row order; shard boundaries are deterministic by UTF-8 encoded record size.",
            "records": projected,
            "totalCompressedBytes": sum(int(file["bytes"]) for file in files),
            "totalSourceBytes": sum(int(file["sourceBytes"]) for file in files),
            "files": files,
        },
        "deliveryProfiles": {
            "web-light": {
                "payload": "summary-and-hash-only",
                "files": [],
                "statement": "Pages retains this descriptor's source metadata, coverage counts, and hashes; it does not publish row shards.",
            },
            "native-full": {
                "payload": "complete",
                "files": [file["path"] for file in files],
                "records": projected,
                "totalCompressedBytes": sum(int(file["bytes"]) for file in files),
                "totalSourceBytes": sum(int(file["sourceBytes"]) for file in files),
                "statement": "Native clients may stream or selectively fetch table shards and reconstruct the complete pinned archive projection.",
            },
        },
        "limitations": [
            "This preserves ITIS nomenclatural and taxonomic source rows; no biological, fossil, ecological, or expert-review claim is added.",
            "Extant status is retained in Taxon.extinct and is not inferred from rank or name status.",
            "The official archive and metadata are retained with member-level byte hashes; the archive is not rewritten or treated as a generated checksum system.",
        ],
    }
    descriptor_bytes = json_bytes(descriptor, pretty=True)
    args.descriptor.write_bytes(descriptor_bytes)
    ledger = {
        "schemaVersion": 1,
        "importType": "checklistbank-2144-global-original-archive-projection",
        "generatedFrom": {
            "archivePath": relative_path(args.archive),
            "archiveBytes": ARCHIVE_BYTES,
            "archiveSha256": ARCHIVE_SHA256,
            "metadataPath": relative_path(args.metadata),
            "metadataBytes": METADATA_BYTES,
            "metadataSha256": METADATA_SHA256,
            "archiveUrl": ARCHIVE_URL,
            "metadataUrl": METADATA_URL,
        },
        "counts": counts,
        "projectedRecords": projected,
        "descriptor": {
            "path": relative_path(args.descriptor),
            "bytes": len(descriptor_bytes),
            "sha256": digest(descriptor_bytes),
        },
        "files": files,
        "deterministic": "Pinned archive and metadata bytes, exact UTF-8 field preservation, source row locators, fixed byte shard limit and deterministic gzip; no wall-clock fields or fuzzy matching.",
    }
    args.ledger.write_bytes(json_bytes(ledger, pretty=True))
    print(json.dumps({"counts": counts, "projectedRecords": projected, "shards": len(files), "descriptor": str(args.descriptor)}, indent=2))


if __name__ == "__main__":
    main()
