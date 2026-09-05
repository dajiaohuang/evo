import gzip
import hashlib
import importlib.util
import json
import tempfile
import unittest
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location(
    "systema_dipterorum", Path(__file__).with_name("build-systema-dipterorum-source.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def package_root(output_root):
    return Path(output_root) / "data/packages/arthropoda/crustaceans-insects/nomenclature"


def read_rows(directory, descriptor):
    rows = []
    for item in descriptor["files"] + descriptor["upstreamOnlyFiles"]:
        path = directory / item["path"].split("/", 1)[-1]
        rows.extend(json.loads(gzip.decompress(path.read_bytes())))
    return rows


def source_objects(rows):
    for row in rows:
        if row.get("matchedName"):
            yield row["matchedName"]
        yield from row.get("candidates", [])


class SystemaDipterorumProjectionTests(unittest.TestCase):
    def test_replay_scope_provenance_and_prefix_cleanup(self):
        archive_data = mod.read_archive(mod.ARCHIVE)
        expected = {taxon["ID"]: (taxon, taxon_row, name, name_row)
                    for taxon, taxon_row, name, name_row in archive_data["selected"]}
        expected_ids = set(expected)
        orphan_ids = set(archive_data["orphanTaxa"])
        self.assertEqual(len(expected_ids), 180792)
        self.assertEqual(len(orphan_ids), 7)

        with tempfile.TemporaryDirectory() as one, tempfile.TemporaryDirectory() as two:
            for output_root in (Path(one), Path(two)):
                directory = package_root(output_root)
                directory.mkdir(parents=True)
                (directory / "systema-dipterorum-999.json.gz").write_bytes(b"stale")
                (directory / "systema-dipterorum-source-only-999.json.gz").write_bytes(b"stale")
                neighbor = directory / "systema-dipterorum-neighbor.json.gz"
                neighbor.write_bytes(b"neighbor")
                mod.project(mod.ARCHIVE, output_root)
                self.assertFalse((directory / "systema-dipterorum-999.json.gz").exists())
                self.assertFalse((directory / "systema-dipterorum-source-only-999.json.gz").exists())
                self.assertEqual(neighbor.read_bytes(), b"neighbor")

            first = package_root(one)
            second = package_root(two)
            first_files = {p.relative_to(first).as_posix(): sha(p)
                           for p in first.iterdir() if p.is_file() and p.name != "systema-dipterorum-neighbor.json.gz"}
            second_files = {p.relative_to(second).as_posix(): sha(p)
                            for p in second.iterdir() if p.is_file() and p.name != "systema-dipterorum-neighbor.json.gz"}
            self.assertEqual(first_files, second_files)

            descriptor = json.loads((first / "systema-dipterorum-sidecar.json").read_text(encoding="utf-8"))
            self.assertEqual(descriptor["scope"]["sourceSelectedSpecies"], 180792)
            self.assertEqual(descriptor["scope"]["sourceTaxonRoot"]["orphanTaxa"], 7)
            self.assertEqual(descriptor["counts"], {
                "total": 157490, "accepted": 157279, "redirect": 0,
                "ambiguous": 113, "unmatched": 98, "withheld": 0,
                "upstreamOnly": 23513,
            })
            rows = read_rows(first, descriptor)
            self.assertEqual(len(rows), 181003)
            self.assertEqual(sum(item["records"] for item in descriptor["files"]), 157490)
            self.assertEqual(sum(item["records"] for item in descriptor["upstreamOnlyFiles"]), 23513)

            objects = list(source_objects(rows))
            represented_ids = {obj["id"] for obj in objects}
            self.assertEqual(represented_ids, expected_ids)
            source_only = [row for row in rows if row["status"] == "source-only"]
            source_only_ids = [row["matchedName"]["id"] for row in source_only]
            self.assertEqual(len(source_only_ids), len(set(source_only_ids)))
            self.assertEqual(set(source_only_ids), expected_ids - {
                row["matchedName"]["id"] for row in rows if row["status"] == "accepted"})
            ambiguous_ids = [candidate["id"] for row in rows if row["status"] == "ambiguous"
                             for candidate in row["candidates"]]
            self.assertEqual(len(ambiguous_ids), 226)
            self.assertEqual(set(ambiguous_ids), set(source_only_ids) & set(ambiguous_ids))

            expected_locators = {
                taxon_id: [{"member": "Taxon.tsv", "row": taxon_row},
                           {"member": "Name.tsv", "row": name_row}]
                for taxon_id, (_, taxon_row, _, name_row) in expected.items()}
            by_id = defaultdict(list)
            for obj in objects:
                by_id[obj["id"]].append(obj)
                self.assertEqual(obj["status"], "")
                self.assertEqual(obj["sourceStatusRaw"], "")
                self.assertEqual(obj["sourceRows"], expected_locators[obj["id"]])
            self.assertEqual(set(by_id), expected_ids)
            for taxon_id, objects_for_id in by_id.items():
                if taxon_id in orphan_ids:
                    taxon = expected[taxon_id][0]
                    self.assertTrue(all(obj["parentId"] == taxon["parentID"]
                                        and obj["sourceScope"] == "orphan-exception"
                                        and obj["sourceScopeReason"] ==
                                        "Taxon.tsv parentID is absent from Taxon.tsv"
                                        for obj in objects_for_id))
                else:
                    self.assertTrue(all("sourceScope" not in obj for obj in objects_for_id))

            self.assertEqual(len(orphan_ids), 7)
            self.assertEqual({item["taxonId"] for item in descriptor["scope"]["sourceTaxonRoot"]["orphanRecords"]},
                             orphan_ids)


if __name__ == "__main__":
    unittest.main()
