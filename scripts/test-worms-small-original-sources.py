"""Replay and provenance checks for the RC128 small WoRMS source projections."""
from __future__ import annotations

import gzip
import hashlib
import importlib.util
import json
import tempfile
import unittest
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "scripts/build-worms-small-original-sources.py"
SPEC = importlib.util.spec_from_file_location("rc128_importer", MODULE_PATH)
assert SPEC and SPEC.loader
IMPORTER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(IMPORTER)


EXPECTED = {
    "gnathostomulida": {
        "dataset": "1125", "title": "World List of Gnathostomulida",
        "doi": "10.48580/d3ct", "versionDoi": "10.48580/d3ct.v87",
        "archiveAttempt": 87,
        "archiveBytes": 20438,
        "archiveSha256": "f09e0292a17bba924b5a61342dcd45974fbd2c5a1c71db3d77312b227284bf75",
        "colSpecies": 100, "editor": "Sterrer",
    },
    "priapulida": {
        "dataset": "1124", "title": "World List of Priapulida",
        "doi": "10.48580/d3cs", "versionDoi": "10.48580/d3cs.v87",
        "archiveAttempt": 87,
        "archiveBytes": 17809,
        "archiveSha256": "e01eb9ac67b1cf8035caf2bd62ee7f741e7c258bba59fd9e911e47d32536dfeb",
        "colSpecies": 23, "editor": "Paulay",
    },
}


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


class SmallOriginalSourcesTest(unittest.TestCase):
    def test_pinned_source_metadata(self):
        for key, expected in EXPECTED.items():
            spec = IMPORTER.SPECS[key]
            archive = ROOT / spec["archive"]
            metadata = json.loads((ROOT / spec["metadata"]).read_text(encoding="utf-8"))
            self.assertEqual(archive.stat().st_size, expected["archiveBytes"])
            self.assertEqual(digest(archive), expected["archiveSha256"])
            self.assertEqual(str(metadata["key"]), expected["dataset"])
            self.assertEqual(metadata["attempt"], expected["archiveAttempt"])
            self.assertEqual(metadata["title"], expected["title"])
            self.assertEqual(metadata["doi"], expected["doi"])
            self.assertEqual(metadata["versionDoi"], expected["versionDoi"])
            self.assertEqual(metadata["version"], "2026-09-01")
            self.assertEqual(metadata["license"], "cc by")
            self.assertIn(expected["editor"], metadata["editor"][0]["family"])
            self.assertIn(expected["doi"], metadata["citation"])
            with zipfile.ZipFile(archive) as source_archive:
                embedded = source_archive.read("metadata.yml").decode("utf-8")
            self.assertIn("doi: null", embedded)
            self.assertIn(f"title: '{expected['title']}'", embedded)
            self.assertIn("license: CC-BY", embedded)
            self.assertIn("issued: '2026-09-01'", embedded)
            self.assertIn("version: '2026-09-01'", embedded)

    def test_projection_is_current_format_and_exact_scope(self):
        with tempfile.TemporaryDirectory(prefix="evo-rc128-replay-") as temp:
            output_root = Path(temp)
            for key, expected in EXPECTED.items():
                result = IMPORTER.project(key, output_root)
                self.assertEqual(result["counts"]["total"], expected["colSpecies"])
                self.assertEqual(result["counts"]["accepted"], expected["colSpecies"])
                self.assertEqual(result["counts"]["upstreamOnly"], 0)
                out = output_root / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
                descriptor = json.loads((out / f"worms-{key}-sidecar.json").read_text(encoding="utf-8"))
                self.assertEqual(descriptor["scope"]["eligibleColSpecies"], expected["colSpecies"])
                self.assertEqual(descriptor["source"]["datasetId"], expected["dataset"])
                self.assertEqual(descriptor["source"]["archiveAttempt"], expected["archiveAttempt"])
                self.assertEqual(
                    descriptor["source"]["archiveUrl"],
                    f"https://api.checklistbank.org/dataset/{expected['dataset']}/archive?attempt=87",
                )
                self.assertEqual(descriptor["source"]["versionDoi"], expected["versionDoi"])
                self.assertEqual(descriptor["source"]["license"], "cc by")
                self.assertEqual(descriptor["source"]["archiveMetadata"]["fields"]["license"], "CC-BY")
                self.assertIn("license", descriptor["source"]["metadataConsistency"]["differences"])
                self.assertNotIn("sourceLedgerSha256", descriptor["source"])
                self.assertEqual(descriptor["recordType"], "release-pinned-authority-original-archive-projection")
                self.assertEqual(len(descriptor["files"]), 1)
                self.assertEqual(descriptor["outcomeFiles"]["accepted"], descriptor["files"])
                self.assertEqual(descriptor["outcomeFiles"]["ambiguous"], [])
                self.assertEqual(descriptor["outcomeFiles"]["unmatched"], [])
                self.assertEqual(descriptor["sourceOnlyFiles"], [])
                self.assertEqual(descriptor["upstreamOnlyFiles"], [])
                payload = gzip.decompress((out / Path(descriptor["files"][0]["path"]).name).read_bytes()).decode("utf-8")
                rows = json.loads(payload)
                self.assertEqual(len(rows), expected["colSpecies"])
                self.assertTrue(all(row["status"] == "accepted" for row in rows))
                self.assertTrue(all(row["matchedName"]["id"] for row in rows))
                ledger_path = output_root / f"data/sources/worms-{key}-archive-{expected['dataset']}-import-ledger.json"
                ledger = json.loads(ledger_path.read_text(encoding="utf-8"))
                descriptor_bytes = (out / f"worms-{key}-sidecar.json").read_bytes()
                self.assertEqual(ledger["outputs"]["descriptor"]["bytes"], len(descriptor_bytes))
                self.assertEqual(ledger["outputs"]["descriptor"]["sha256"], hashlib.sha256(descriptor_bytes).hexdigest())
                self.assertNotIn("sourceLedgerPath", ledger["source"])

    def test_replay_bytes_are_deterministic(self):
        with tempfile.TemporaryDirectory(prefix="evo-rc128-replay-a-") as first, \
             tempfile.TemporaryDirectory(prefix="evo-rc128-replay-b-") as second:
            for key in EXPECTED:
                IMPORTER.project(key, Path(first))
                IMPORTER.project(key, Path(second))
            def snapshot(root: str):
                base = Path(root)
                return {str(path.relative_to(base)): digest(path)
                        for path in base.rglob("*") if path.is_file()}
            self.assertEqual(snapshot(first), snapshot(second))


if __name__ == "__main__":
    unittest.main()
