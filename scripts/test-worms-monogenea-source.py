"""Focused offline regression for the Monogenea source projection."""

import hashlib
import csv
import io
import json
import subprocess
import tempfile
import unittest
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / "data/sources/archives/worms-monogenea-2026-09-01.zip"
SCRIPT = ROOT / "scripts/build-worms-monogenea-source.py"


class MonogeneaProjectionTests(unittest.TestCase):
    def run_build(self, output_root: Path) -> None:
        subprocess.run(
            ["python", "-B", str(SCRIPT), "--archive", str(ARCHIVE), "--output-root", str(output_root)],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )

    def test_real_archive_scope_and_rebuild_are_deterministic(self):
        with tempfile.TemporaryDirectory() as first, tempfile.TemporaryDirectory() as second:
            first_root, second_root = Path(first), Path(second)
            self.run_build(first_root)
            self.run_build(second_root)
            relative = Path("data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals")
            first_files = sorted((first_root / relative).glob("worms-monogenea*"))
            second_files = sorted((second_root / relative).glob("worms-monogenea*"))
            self.assertEqual([p.name for p in first_files], [p.name for p in second_files])
            self.assertTrue(all(p.read_bytes() == q.read_bytes() for p, q in zip(first_files, second_files)))
            descriptor = json.loads((first_root / relative / "worms-monogenea-sidecar.json").read_text(encoding="utf-8"))
            self.assertEqual(descriptor["scope"]["colStrictAcceptedSpecies"], 5852)
            self.assertEqual(descriptor["scope"]["sourceStrictAcceptedSpecies"], 5878)
            self.assertEqual(descriptor["source"]["provisionalAcceptedSpecies"], 0)
            self.assertEqual(descriptor["counts"], {"total": 5852, "accepted": 5844, "redirect": 0, "ambiguous": 0, "unmatched": 8, "withheld": 0, "upstreamOnly": 34, "records": 5886})
            self.assertEqual(descriptor["source"]["title"], "World List of Monogenea")
            self.assertIsNone(descriptor["source"]["doi"])
            self.assertEqual(descriptor["source"]["versionDoi"], "10.48580/d3cv.v86")
            self.assertEqual(descriptor["source"]["citation"], descriptor["source"]["metadataRecord"]["citation"])
            self.assertEqual(descriptor["source"]["editor"], descriptor["source"]["metadataRecord"]["editor"])
            self.assertEqual(descriptor["source"]["contributor"], descriptor["source"]["metadataRecord"]["organisations"])
            self.assertEqual(descriptor["source"]["metadataLicense"], "CC-BY")
            self.assertEqual(descriptor["source"]["rights"], descriptor["source"]["metadataRecord"]["license"])
            with zipfile.ZipFile(ARCHIVE) as archive:
                self.assertEqual(set(descriptor["source"]["members"]), set(archive.namelist()))
                for member, evidence in descriptor["source"]["members"].items():
                    raw = archive.read(member)
                    self.assertEqual(evidence, {"bytes": len(raw), "sha256": hashlib.sha256(raw).hexdigest()})
            self.assertEqual(sum(x["records"] for x in descriptor["files"]), 5852)
            self.assertEqual(sum(x["records"] for x in descriptor["upstreamOnlyFiles"]), 34)
            self.assertEqual(descriptor["source"]["archiveSha256"], hashlib.sha256(ARCHIVE.read_bytes()).hexdigest())
            rows = []
            for path in first_files:
                if path.name.endswith(".json.gz") and "upstream-only" not in path.name:
                    import gzip
                    rows.extend(json.loads(gzip.open(path, "rt", encoding="utf-8").read()))
            accepted = [row for row in rows if row["status"] == "accepted"]
            self.assertEqual(len(accepted), 5844)
            with zipfile.ZipFile(ARCHIVE) as archive:
                names = list(csv.DictReader(io.StringIO(archive.read("Name.txt").decode("utf-8-sig")), delimiter="\t"))
                taxa = list(csv.DictReader(io.StringIO(archive.read("Taxon.txt").decode("utf-8-sig")), delimiter="\t"))
                refs = {row["ID"]: row for row in csv.DictReader(io.StringIO(archive.read("Reference.txt").decode("utf-8-sig")), delimiter="\t")}
                name_refs = list(csv.DictReader(io.StringIO(archive.read("NameReference.txt").decode("utf-8-sig")), delimiter="\t"))
            names_by_row = {index: row for index, row in enumerate(names, 2)}
            taxa_by_row = {index: row for index, row in enumerate(taxa, 2)}
            refs_by_name = {}
            for index, row in enumerate(name_refs, 2):
                refs_by_name.setdefault(row["nameID"], []).append((index, row))
            for row in accepted:
                locators = {item["member"]: item["row"] for item in row["sourceRows"]}
                source_name = names_by_row[locators["Name.txt"]]
                source_taxon = taxa_by_row[locators["Taxon.txt"]]
                self.assertEqual(row["sourceNameId"], source_name["ID"])
                self.assertEqual(row["sourceAcceptedTaxonId"], source_taxon["ID"])
                self.assertEqual(row["matchedName"]["scientificName"], source_name["scientificName"])
                self.assertEqual(row["matchedName"]["authorship"], source_name["authorship"])
                self.assertEqual(row["matchedName"]["taxonReference"]["referenceId"], source_taxon["referenceID"] or None)
                self.assertEqual(row["matchedName"]["nameReference"]["referenceId"], source_name["referenceID"] or None)
                for direct_key, reference_id in (("taxonReference", source_taxon["referenceID"]), ("nameReference", source_name["referenceID"])):
                    if reference_id:
                        self.assertEqual(row["matchedName"][direct_key]["reference"], refs[reference_id])
                expected_refs = refs_by_name.get(source_name["ID"], [])
                self.assertEqual([item["referenceId"] for item in row["matchedName"]["nameReferences"]], [item[1]["referenceID"] for item in expected_refs])
                self.assertTrue(row["sourceRows"])
            self.assertEqual(len({row["sourceAcceptedTaxonId"] for row in accepted}), 5844)
            self.assertEqual(len({row["sourceAcceptedTaxonId"] for row in accepted}), 5844)
            self.assertTrue(all({"Name.txt", "Taxon.txt"} <= {locator["member"] for locator in row["sourceRows"]} for row in accepted))
            self.assertTrue(all("references" in row for row in rows))
            self.assertTrue(all("sourceRows" in reference for row in rows for reference in row["references"]))
            canonical = ROOT / relative
            for path in first_files:
                self.assertEqual(path.read_bytes(), (canonical / path.name).read_bytes())
            ledger = Path(first) / "data/sources/worms-monogenea-archive-2026-09-01-import-ledger.json"
            canonical_ledger = ROOT / "data/sources/worms-monogenea-archive-2026-09-01-import-ledger.json"
            self.assertEqual(ledger.read_bytes(), canonical_ledger.read_bytes())
            second_ledger = Path(second) / "data/sources/worms-monogenea-archive-2026-09-01-import-ledger.json"
            self.assertEqual(ledger.read_bytes(), second_ledger.read_bytes())
            ledger_json = json.loads(ledger.read_text(encoding="utf-8"))
            self.assertIn("generatedBy", ledger_json)
            self.assertEqual(len(ledger_json["colInputs"]), 4)
            self.assertEqual(len(ledger_json["source"]["members"]), 12)


if __name__ == "__main__":
    unittest.main()
