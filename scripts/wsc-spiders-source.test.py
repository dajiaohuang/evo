import csv
import gzip
import hashlib
import importlib.util
import io
import json
import tempfile
import unittest
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location(
    "wsc_spiders", Path(__file__).with_name("build-wsc-spiders-source.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class WscSpidersProjectionTests(unittest.TestCase):
    def test_two_offline_replays_are_byte_identical_and_cover_pinned_archive(self):
        canonical_root = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
        ledger_path = ROOT / "data/sources/wsc-spiders-archive-56185-import-ledger.json"
        ledger_before = ledger_path.read_bytes()
        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            mod.project(mod.ARCHIVE, Path(one))
            mod.project(mod.ARCHIVE, Path(two))
            roots = [Path(one) / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals",
                     Path(two) / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"]
            names = sorted(p.name for p in roots[0].glob("wsc-spiders*.json.gz")) + ["wsc-spiders-sidecar.json"]
            for name in names:
                first = (roots[0] / name).read_bytes()
                self.assertEqual(first, (roots[1] / name).read_bytes(), name)
                self.assertEqual(first, (canonical_root / name).read_bytes(), f"canonical {name}")
            temp_ledgers = [Path(one) / "data/sources/wsc-spiders-archive-56185-import-ledger.json",
                            Path(two) / "data/sources/wsc-spiders-archive-56185-import-ledger.json"]
            self.assertEqual(temp_ledgers[0].read_bytes(), temp_ledgers[1].read_bytes())
            self.assertEqual(temp_ledgers[0].read_bytes(), ledger_before)

            descriptor = json.loads((roots[0] / "wsc-spiders-sidecar.json").read_text(encoding="utf-8"))
            self.assertEqual(descriptor["scope"]["colRootUsageIds"], ["RN"])
            self.assertEqual(descriptor["scope"]["eligibleColSpecies"], 53353)
            self.assertEqual(descriptor["scope"]["sourceAcceptedSpecies"], 53400)
            self.assertEqual(descriptor["counts"], {
                "total": 53353, "accepted": 53338, "redirect": 0,
                "ambiguous": 0, "unmatched": 15, "withheld": 0,
                "sourceOnly": 62, "sourceOnlyRecords": 62, "records": 53415,
            })
            source = descriptor["source"]
            self.assertEqual(source["archiveBytes"], mod.ARCHIVE_BYTES)
            self.assertEqual(source["archiveSha256"], mod.ARCHIVE_SHA)
            self.assertEqual(source["archiveUrl"], "https://api.checklistbank.org/dataset/56185/archive?attempt=80")
            self.assertEqual(source["archiveAttempt"], 80)
            self.assertEqual(source["doi"], "10.48580/d4btg")
            self.assertEqual(source["version"], "2026-08-30")
            self.assertEqual(source["versionDoi"], "10.48580/d4btg.v80")
            self.assertEqual(source["embeddedMetadata"]["doi"], "10.24436/2")
            self.assertEqual(source["embeddedMetadata"]["version"], "")
            self.assertEqual(source["embeddedMetadata"]["license"], "cc by")
            self.assertEqual(source["metadataConsistency"]["status"], "mismatch")
            self.assertEqual(source["license"], "cc by")
            ledger = json.loads(ledger_path.read_text(encoding="utf-8"))
            self.assertEqual(ledger["source"], source)

            rows = sum((json.loads(gzip.decompress((roots[0] / item["path"].split("/")[-1]).read_bytes()))
                        for item in descriptor["files"]), [])
            source_only = sum((json.loads(gzip.decompress((roots[0] / item["path"].split("/")[-1]).read_bytes()))
                               for item in descriptor["sourceOnlyFiles"]), [])
            self.assertEqual(len(rows), 53353)
            self.assertEqual(len(source_only), 62)
            self.assertEqual(sum(item["records"] for item in descriptor["files"]), 53353)
            self.assertEqual(sum(item["records"] for item in descriptor["sourceOnlyFiles"]), 62)
            self.assertTrue(all(item["sourceBytes"] <= mod.SHARD_LIMIT
                                for item in descriptor["files"] + descriptor["sourceOnlyFiles"]))
            self.assertEqual({row["status"] for row in source_only}, {"source-only"})
            self.assertEqual(sum(row["status"] == "accepted" for row in rows), 53338)
            self.assertEqual(sum(row["status"] == "unmatched" for row in rows), 15)
            self.assertEqual(sum(row["status"] == "ambiguous" for row in rows), 0)
            self.assertTrue(all(row["status"] != "accepted" or row["acceptedName"] for row in rows))

            accepted, references, distributions, members, count, _, _ = mod.read_archive(mod.ARCHIVE)
            self.assertEqual(count, 53400)
            projected = {row["acceptedName"]["id"]: row for row in rows + source_only
                         if row["acceptedName"]}
            self.assertEqual(set(projected), set(accepted))
            self.assertEqual(len(projected), 53400)
            self.assertTrue(any(row["references"] for row in rows if row["status"] == "accepted"))
            self.assertTrue(any(row["acceptedName"]["distribution"] for row in rows if row["status"] == "accepted"))
            self.assertTrue(all(row["sourceRows"] for row in source_only))

            with zipfile.ZipFile(mod.ARCHIVE) as archive:
                self.assertEqual(set(archive.namelist()), {"Reference.tsv", "NameUsage.tsv", "Distribution.tsv", "metadata.yaml"})
                for member, expected in source["members"].items():
                    raw = archive.read(member)
                    self.assertEqual(len(raw), expected["bytes"], member)
                    self.assertEqual(hashlib.sha256(raw).hexdigest(), expected["sha256"], member)
                self.assertEqual(len(archive.read("NameUsage.tsv").splitlines()) - 1, 71621)
                self.assertEqual(len(archive.read("Reference.tsv").splitlines()) - 1, 10856)
                self.assertEqual(len(archive.read("Distribution.tsv").splitlines()) - 1, 66733)
                name_rows = list(csv.DictReader(io.TextIOWrapper(
                    archive.open("NameUsage.tsv"), encoding="utf-8-sig"), delimiter="\t"))
                name_row_numbers = {row["col:ID"]: index
                                    for index, row in enumerate(name_rows, 2)}
                for sid, (source_row, _) in accepted.items():
                    out = projected[sid]
                    self.assertEqual(out["acceptedName"]["scientificName"], mod.source_scientific_name(source_row))
                    self.assertEqual(out["acceptedName"]["authorship"], source_row["col:authorship"])
                    self.assertEqual(out["acceptedName"]["url"], source_row["col:link"])
                    self.assertIn({"member": "NameUsage.tsv", "row": name_row_numbers[sid]}, out["sourceRows"])

    def test_archive_is_fixed_and_metadata_mismatch_is_explicit(self):
        raw = mod.ARCHIVE.read_bytes()
        self.assertEqual(len(raw), 3051808)
        self.assertEqual(hashlib.sha256(raw).hexdigest(), mod.ARCHIVE_SHA)
        with zipfile.ZipFile(mod.ARCHIVE) as archive:
            embedded = archive.read("metadata.yaml").decode("utf-8")
        self.assertIn("doi: 10.24436/2", embedded)
        self.assertIn("version: ", embedded)
        api = json.loads(mod.METADATA.read_text(encoding="utf-8"))
        self.assertEqual(api["attempt"], 80)
        self.assertEqual(api["version"], "2026-08-30")
        self.assertEqual(api["versionDoi"], "10.48580/d4btg.v80")
        self.assertEqual(api["license"], "cc by")


if __name__ == "__main__":
    unittest.main()
