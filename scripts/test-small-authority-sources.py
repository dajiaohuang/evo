"""Deterministic replay and boundary tests for RC131 authority projections."""
from __future__ import annotations

import hashlib
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("builder", ROOT / "scripts/build-small-authority-sources.py")
builder = importlib.util.module_from_spec(spec)
assert spec.loader
spec.loader.exec_module(builder)

EXPECTED = {
    "scorpions": {"root": "42N", "total": 2940, "accepted": 2872, "unmatched": 68, "upstreamOnly": 67},
    "chilobase": {"root": "93", "total": 3141, "accepted": 2269, "unmatched": 872, "upstreamOnly": 872},
}


def snapshot(root: Path):
    return {str(path.relative_to(root)).replace("\\", "/"): hashlib.sha256(path.read_bytes()).hexdigest()
            for path in root.rglob("*") if path.is_file()}


class SmallAuthoritySourceTest(unittest.TestCase):
    def test_projection_counts_and_source_identity(self):
        for scope, expected in EXPECTED.items():
            with self.subTest(scope=scope), tempfile.TemporaryDirectory(prefix=f"evo-rc131-{scope}-") as tmp:
                result = builder.project(scope, Path(tmp))
                self.assertEqual(result["root"], expected["root"])
                self.assertEqual(result["counts"]["total"], expected["total"])
                self.assertEqual(result["counts"]["accepted"], expected["accepted"])
                self.assertEqual(result["counts"]["unmatched"], expected["unmatched"])
                self.assertEqual(result["counts"]["upstreamOnly"], expected["upstreamOnly"])
                descriptor = next(Path(tmp).rglob(f"{builder.SPECS[scope]['prefix']}-sidecar.json"))
                body = json.loads(descriptor.read_text(encoding="utf-8"))
                self.assertEqual(body["source"]["archiveBytes"], builder.SPECS[scope]["archiveBytes"])
                self.assertEqual(body["source"]["archiveSha256"], builder.SPECS[scope]["archiveSha256"])
                self.assertEqual(body["source"]["versionConsistency"].split(";")[0], "title/version/license match")
                for item in body["files"] + body["upstreamOnlyFiles"]:
                    self.assertLessEqual(item["sourceBytes"], 2 * 1024 * 1024)

    def test_projection_replay_is_byte_deterministic(self):
        with tempfile.TemporaryDirectory(prefix="evo-rc131-replay-a-") as first, tempfile.TemporaryDirectory(prefix="evo-rc131-replay-b-") as second:
            for scope in EXPECTED:
                builder.project(scope, Path(first))
                builder.project(scope, Path(second))
            self.assertEqual(snapshot(Path(first)), snapshot(Path(second)))


if __name__ == "__main__":
    unittest.main()
