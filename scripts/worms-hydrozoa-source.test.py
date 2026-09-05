"""Deterministic replay and provenance checks for the Hydrozoa worker."""

import gzip
import hashlib
import importlib.util
import json
import tempfile
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "scripts/build-worms-hydrozoa-source.py"
PACKAGE = ROOT / "data/packages/invertebrata/sponges-cnidarians/nomenclature"
LEDGER = ROOT / "data/sources/worms-hydrozoa-archive-1112-import-ledger.json"
ARCHIVE = ROOT / "data/sources/archives/checklistbank-1112-hydrozoa-2026-09-01.zip"
METADATA = ROOT / "data/sources/archives/checklistbank-1112-hydrozoa-2026-09-01.metadata.json"
ARCHIVE_URL = "https://api.checklistbank.org/dataset/1112/archive?attempt=84"
ARCHIVE_SHA256 = "741fdd2f4252d5b45676d1dc6f3f6d9296f022a1ce12019904c999fc8f520902"
SHARD_LIMIT = 2 * 1024 * 1024


def sha256(raw):
    return hashlib.sha256(raw).hexdigest()


def load_builder():
    spec = importlib.util.spec_from_file_location("hydrozoa_builder", SCRIPT)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def generated_files(root):
    package = root / "data/packages/invertebrata/sponges-cnidarians/nomenclature"
    return sorted(package.glob("worms-hydrozoa*.json.gz"))


def assert_replay_matches(temp_root):
    generated_package = temp_root / "data/packages/invertebrata/sponges-cnidarians/nomenclature"
    generated_ledger = temp_root / "data/sources/worms-hydrozoa-archive-1112-import-ledger.json"
    expected = sorted(path.relative_to(PACKAGE) for path in PACKAGE.glob("worms-hydrozoa*.json.gz"))
    actual = sorted(path.relative_to(generated_package) for path in generated_files(temp_root))
    assert actual == expected
    for relative in expected:
        assert (generated_package / relative).read_bytes() == (PACKAGE / relative).read_bytes()
    assert (generated_package / "worms-hydrozoa-sidecar.json").read_bytes() == (
        PACKAGE / "worms-hydrozoa-sidecar.json"
    ).read_bytes()
    assert generated_ledger.read_bytes() == LEDGER.read_bytes()


def main():
    builder = load_builder()
    assert ARCHIVE.stat().st_size == builder.ARCHIVE_BYTES
    archive_bytes = ARCHIVE.read_bytes()
    assert sha256(archive_bytes) == ARCHIVE_SHA256

    api_metadata = json.loads(METADATA.read_text(encoding="utf-8"))
    assert api_metadata["attempt"] == 84
    assert api_metadata["version"] == "2026-09-01"
    assert api_metadata["versionDoi"] == "10.48580/d3cd.v84"
    metadata_bytes = METADATA.read_bytes()

    descriptor = json.loads((PACKAGE / "worms-hydrozoa-sidecar.json").read_text(encoding="utf-8"))
    source = descriptor["source"]
    assert source["metadataBytes"] == len(metadata_bytes) == 3535
    assert source["metadataSha256"] == sha256(metadata_bytes) == (
        "b372620c9216bdb0efdce3d72e46aac96325dc36d43348e8938791f974b16e9b"
    )
    assert source["archiveUrl"] == ARCHIVE_URL
    assert source["archiveAttempt"] == 84
    assert source["version"] == "2026-09-01"
    assert source["versionDoi"] == "10.48580/d3cd.v84"
    assert source["doi"] == "10.48580/d3cd"
    assert source["license"] == "cc by"
    embedded = source["embeddedMetadata"]
    assert embedded["doi"] == "10.14284/357"
    assert embedded["version"] == "2026-09-01"
    assert embedded["issued"] == "2026-09-01"
    assert embedded["license"] == "CC-BY"
    assert source["metadataConsistency"]["status"] == "mismatch"
    assert source["metadataConsistency"]["apiResponse"]["versionDoi"] == "10.48580/d3cd.v84"
    assert source["metadataConsistency"]["archiveEmbedded"]["doi"] == "10.14284/357"
    assert descriptor["scope"] == {
        "colRootUsageIds": ["B8V3X"],
        "scientificName": "Hydrozoa",
        "eligibleColSpecies": 4005,
        "sourceSpeciesRankTaxa": 4006,
        "sourceAcceptedSpecies": 4004,
        "excludedSourceProvisional": 2,
    }
    assert descriptor["matching"]["normalization"].startswith("NFC and Unicode-whitespace")
    assert "exact authorship" in descriptor["matching"]["normalization"]
    assert descriptor["deliveryProfiles"]["web-light"]["mode"] == "summary-only"
    assert descriptor["deliveryProfiles"]["native-full"]["mode"] == "complete"

    ledger = json.loads(LEDGER.read_text(encoding="utf-8"))
    assert ledger["source"] == source
    assert ledger["outputs"]["descriptor"]["sha256"] == sha256(
        (PACKAGE / "worms-hydrozoa-sidecar.json").read_bytes()
    )

    record_count = 0
    source_only_count = 0
    for shard in generated_files(ROOT):
        compressed = shard.read_bytes()
        assert compressed[0:2] == b"\x1f\x8b"
        assert compressed[9] == 255
        payload = gzip.decompress(compressed)
        assert len(payload) <= SHARD_LIMIT
        rows = json.loads(payload)
        assert len(rows) == next(item["records"] for item in descriptor["files"] + descriptor["sourceOnlyFiles"]
                                 if item["path"].endswith(shard.name))
        record_count += len(rows)
        if "source-only" in shard.name:
            source_only_count += len(rows)
            assert all(row["colId"] is None and row["status"] == "source-only" for row in rows)
        else:
            assert all(row["colId"] is not None for row in rows)
    assert record_count == 4012
    assert source_only_count == 7
    assert descriptor["counts"] == {
        "total": 4005,
        "accepted": 3997,
        "redirect": 0,
        "ambiguous": 0,
        "unmatched": 8,
        "withheld": 0,
        "sourceOnly": 7,
        "upstreamOnly": 7,
        "sourceOnlyRecords": 7,
        "records": 4012,
    }

    with zipfile.ZipFile(ARCHIVE) as archive:
        for member, expected in source["members"].items():
            raw = archive.read(member)
            assert len(raw) == expected["bytes"]
            assert sha256(raw) == expected["sha256"]

    with tempfile.TemporaryDirectory(prefix="hydrozoa-replay-") as first, tempfile.TemporaryDirectory(
        prefix="hydrozoa-replay-"
    ) as second:
        first_root, second_root = Path(first), Path(second)
        builder.project(builder.ARCHIVE, first_root)
        builder.project(builder.ARCHIVE, second_root)
        assert_replay_matches(first_root)
        assert_replay_matches(second_root)

    print("Hydrozoa deterministic replay 2/2: PASS")


if __name__ == "__main__":
    main()
