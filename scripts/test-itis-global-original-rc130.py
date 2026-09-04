"""Offline structural and replay checks for the RC130 ITIS raw projection."""

from __future__ import annotations

import gzip
import hashlib
import json
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DESCRIPTOR = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-global-original-rc130.json"
ARCHIVE = ROOT / "data/sources/archives/checklistbank-2144-itis-2026-08-26.zip"
METADATA = ROOT / "data/sources/archives/checklistbank-2144-itis-2026-08-26.metadata.json"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        while block := stream.read(1024 * 1024):
            digest.update(block)
    return digest.hexdigest()


def main() -> None:
    descriptor = json.loads(DESCRIPTOR.read_bytes())
    metadata = json.loads(METADATA.read_bytes())
    assert descriptor["datasetKey"] == metadata["key"] == 2144
    assert descriptor["source"]["versionDoi"] == metadata["versionDoi"] == "10.48580/d4ky.v120"
    assert descriptor["source"]["doi"] == metadata["doi"] == "10.48580/d4ky"
    assert descriptor["source"]["editors"] == metadata["editor"]
    assert descriptor["source"]["contributors"] == metadata["contributor"]
    assert descriptor["deliveryProfiles"]["web-light"]["files"] == []
    assert len(descriptor["deliveryProfiles"]["native-full"]["files"]) == len(descriptor["projection"]["files"]) == 674
    assert sha256(ARCHIVE) == descriptor["source"]["archiveSha256"]
    assert ARCHIVE.stat().st_size == descriptor["source"]["archiveBytes"]
    assert sha256(METADATA) == descriptor["source"]["metadataSha256"]
    assert METADATA.stat().st_size == descriptor["source"]["metadataBytes"]

    with zipfile.ZipFile(ARCHIVE) as archive:
        archive_members = {item["member"]: item for item in descriptor["source"]["archiveMembers"]}
        assert set(archive.namelist()) == set(archive_members)
        for member, identity in archive_members.items():
            info = archive.getinfo(member)
            assert info.file_size == identity["bytes"]
            digest = hashlib.sha256()
            with archive.open(member) as stream:
                while block := stream.read(1024 * 1024):
                    digest.update(block)
            assert digest.hexdigest() == identity["sha256"]

    total_records = 0
    total_compressed = 0
    total_source = 0
    for member in descriptor["source"]["members"]:
        expected_fields = set(member["fields"])
        seen: set[str] = set()
        rows = 0
        for file in member["files"]:
            path = ROOT / Path(file["path"])
            compressed = path.read_bytes()
            source = gzip.decompress(compressed)
            assert sha256(path) == file["sha256"]
            assert len(compressed) == file["bytes"]
            assert hashlib.sha256(source).hexdigest() == file["sourceSha256"]
            assert len(source) == file["sourceBytes"]
            for line in source.splitlines():
                record = json.loads(line)
                assert record["sourceMember"] == member["member"]
                assert set(record["fields"]) == expected_fields
                locator = record["locator"]
                assert locator["datasetKey"] == 2144
                assert locator["member"] == member["member"]
                assert locator["row"] >= 2
                key = locator["key"]
                assert key not in seen
                seen.add(key)
                rows += 1
            total_compressed += len(compressed)
            total_source += len(source)
        assert rows == member["rows"]
        total_records += rows

    assert total_records == descriptor["projection"]["records"] == 2_610_877
    assert total_compressed == descriptor["projection"]["totalCompressedBytes"]
    assert total_source == descriptor["projection"]["totalSourceBytes"]
    print(json.dumps({"status": "ok", "records": total_records, "shards": len(descriptor["projection"]["files"]), "compressedBytes": total_compressed, "sourceBytes": total_source}))


if __name__ == "__main__":
    main()
