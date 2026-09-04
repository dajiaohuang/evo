"""Focused deterministic replay tests for the three RC126 archive projections."""
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
spec = importlib.util.spec_from_file_location("small", Path(__file__).with_name("build-worms-small-original-sources.py"))
small = importlib.util.module_from_spec(spec)
spec.loader.exec_module(small)


class SmallOriginalSourceTests(unittest.TestCase):
    def test_two_offline_replays_are_identical_and_cover_each_archive(self):
        for key, spec_data in small.SPECS.items():
            with self.subTest(scope=key), tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
                result_one = small.project(key, Path(one))
                result_two = small.project(key, Path(two))
                self.assertEqual(result_one, result_two)
                out_rel = Path("data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals")
                root_one = Path(one) / out_rel
                root_two = Path(two) / out_rel
                names = sorted(path.name for path in root_one.glob(f"{spec_data['prefix']}-*.json.gz")) + [f"{spec_data['prefix']}-sidecar.json"]
                for name in names:
                    self.assertEqual((root_one / name).read_bytes(), (root_two / name).read_bytes(), name)
                ledger_rel = Path(f"data/sources/{spec_data['prefix']}-archive-{spec_data['dataset']}-import-ledger.json")
                self.assertEqual((Path(one) / ledger_rel).read_bytes(), (Path(two) / ledger_rel).read_bytes())

                canonical_root = ROOT / out_rel
                for name in names:
                    self.assertEqual((root_one / name).read_bytes(), (canonical_root / name).read_bytes(), f"canonical {name}")
                self.assertEqual((Path(one) / ledger_rel).read_bytes(), (ROOT / ledger_rel).read_bytes())

                descriptor = json.loads((root_one / f"{spec_data['prefix']}-sidecar.json").read_text(encoding="utf-8"))
                self.assertEqual(descriptor["counts"]["total"], spec_data["expected"])
                self.assertEqual(descriptor["counts"]["accepted"], spec_data["expected"])
                self.assertEqual(descriptor["counts"]["ambiguous"], 0)
                self.assertEqual(descriptor["counts"]["unmatched"], 0)
                expected_source_only = 1 if key == "loricifera" else 0
                self.assertEqual(descriptor["counts"]["sourceOnly"], expected_source_only)
                self.assertEqual(descriptor["source"]["archiveBytes"], spec_data["archiveBytes"])
                self.assertEqual(descriptor["source"]["archiveSha256"], spec_data["archiveSha256"])
                self.assertEqual(len(descriptor["source"]["members"]), 12)
                self.assertTrue(all(item["sourceBytes"] <= small.LIMIT for item in descriptor["files"] + descriptor["sourceOnlyFiles"]))

                rows = []
                for item in descriptor["files"]:
                    payload = root_one / item["path"].split("/")[-1]
                    self.assertEqual(item["sha256"], hashlib.sha256(payload.read_bytes()).hexdigest())
                    rows.extend(json.loads(gzip.decompress(payload.read_bytes())))
                source_only = []
                for item in descriptor["sourceOnlyFiles"]:
                    payload = root_one / item["path"].split("/")[-1]
                    self.assertEqual(item["sha256"], hashlib.sha256(payload.read_bytes()).hexdigest())
                    source_only.extend(json.loads(gzip.decompress(payload.read_bytes())))
                self.assertEqual(len(rows), spec_data["expected"])
                self.assertEqual(len(source_only), expected_source_only)
                self.assertTrue(all(row["status"] == "accepted" for row in rows))
                self.assertTrue(all(row["status"] == "source-only" for row in source_only))

                archive_path = ROOT / spec_data["archive"]
                with zipfile.ZipFile(archive_path) as archive:
                    for member, expected in descriptor["source"]["members"].items():
                        raw = archive.read(member)
                        self.assertEqual(len(raw), expected["bytes"], member)
                        self.assertEqual(hashlib.sha256(raw).hexdigest(), expected["sha256"], member)
                    names_by_id = {row["ID"]: row for row in csv.DictReader(io.TextIOWrapper(archive.open("Name.txt"), encoding="utf-8-sig"), delimiter="\t")}
                    name_rows = {row["ID"]: n for n, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open("Name.txt"), encoding="utf-8-sig"), delimiter="\t"), 2)}
                    taxon_rows = {row["ID"]: n for n, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open("Taxon.txt"), encoding="utf-8-sig"), delimiter="\t"), 2)}
                    name_ref_rows = {}
                    for n, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open("NameReference.txt"), encoding="utf-8-sig"), delimiter="\t"), 2):
                        name_ref_rows.setdefault(row["nameID"], []).append(n)
                    ref_rows = {row["ID"]: n for n, row in enumerate(csv.DictReader(io.TextIOWrapper(archive.open("Reference.txt"), encoding="utf-8-sig"), delimiter="\t"), 2)}
                    projected = {row["acceptedName"]["id"]: row["acceptedName"] for row in rows + source_only}
                    source, _, _, _ = small.read_source(archive_path)
                    self.assertEqual(set(projected), set(source))
                    for source_id, value in source.items():
                        out = projected[source_id]
                        self.assertEqual(out["name"], names_by_id[value["nameId"]])
                        self.assertIn({"member": "Taxon.txt", "row": taxon_rows[source_id]}, out["sourceRows"])
                        self.assertIn({"member": "Name.txt", "row": name_rows[value["nameId"]]}, out["sourceRows"])
                        for row_number in name_ref_rows.get(value["nameId"], []):
                            self.assertIn({"member": "NameReference.txt", "row": row_number}, out["sourceRows"])
                        for ref_row in out["referenceRows"]:
                            self.assertIn({"member": "Reference.txt", "row": ref_row["row"]}, out["sourceRows"])
                            self.assertEqual(ref_row["row"], ref_rows[ref_row["referenceID"]])


if __name__ == "__main__":
    unittest.main()
