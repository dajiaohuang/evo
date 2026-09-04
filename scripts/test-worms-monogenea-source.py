"""Focused offline regression for the Monogenea source projection."""

import hashlib
import json
import subprocess
import tempfile
import unittest
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
            self.assertEqual(descriptor["counts"], {"total": 5852, "accepted": 5835, "redirect": 0, "ambiguous": 0, "unmatched": 17, "withheld": 0, "upstreamOnly": 43, "records": 5895})
            self.assertEqual(sum(x["records"] for x in descriptor["files"]), 5852)
            self.assertEqual(sum(x["records"] for x in descriptor["upstreamOnlyFiles"]), 43)
            self.assertEqual(descriptor["source"]["archiveSha256"], hashlib.sha256(ARCHIVE.read_bytes()).hexdigest())
            rows = []
            for path in first_files:
                if path.name.endswith(".json.gz") and "upstream-only" not in path.name:
                    import gzip
                    rows.extend(json.loads(gzip.open(path, "rt", encoding="utf-8").read()))
            accepted = [row for row in rows if row["status"] == "accepted"]
            self.assertEqual(len(accepted), 5835)
            self.assertTrue(all(row["sourceAcceptedTaxonId"] and row["sourceNameId"] for row in accepted))
            self.assertTrue(all("taxonReference" in row["matchedName"] and "nameReference" in row["matchedName"] for row in accepted))
            self.assertTrue(all(row["sourceRows"] for row in accepted))
            self.assertEqual(len({row["sourceAcceptedTaxonId"] for row in accepted}), 5835)
            self.assertTrue(all({locator["member"] for locator in row["sourceRows"]} == {"Name.txt", "Taxon.txt"} for row in accepted))
            canonical = ROOT / relative
            for path in first_files:
                self.assertEqual(path.read_bytes(), (canonical / path.name).read_bytes())
            ledger = Path(first) / "data/sources/worms-monogenea-archive-2026-09-01-import-ledger.json"
            canonical_ledger = ROOT / "data/sources/worms-monogenea-archive-2026-09-01-import-ledger.json"
            self.assertEqual(ledger.read_bytes(), canonical_ledger.read_bytes())
            ledger_json = json.loads(ledger.read_text(encoding="utf-8"))
            self.assertIn("generatedBy", ledger_json)
            self.assertEqual(len(ledger_json["colInputs"]), 4)
            self.assertEqual(len(ledger_json["source"]["members"]), 12)


if __name__ == "__main__":
    unittest.main()
