"""Import reviewed MBG Flora candidates into lossless Brotli source data."""
import argparse
import hashlib
import importlib.util
import json
from pathlib import Path

from source_brotli import compress_source

_spec = importlib.util.spec_from_file_location(
    "flora_plain_text", Path(__file__).with_name("import-meso-descriptions.py"))
_converter = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_converter)

ROOT = Path(__file__).resolve().parent.parent
CONFIG = {
    "nicaragua": {
        "title": "Flora de Nicaragua",
        "provider": "Missouri Botanical Garden",
        "source_url": "https://files.worldfloraonline.org/files/MBG/Flora_Of_Nicaragua/Flora_Of_Nicaragua.zip",
        "archive_sha256": "dc809ec562fb3c2b3558c9fa53dee7478721eb32367f0e32b7324b8992058088",
        "candidate_sha256": "6b8cc4dc0afc697d80aa112442f452104bb282676a84f5b97ce1bcbebe834a62",
        "output": "data/sources/flora-nicaragua-descriptions.jsonl.br",
        "ledger": "data/sources/flora-nicaragua-descriptions-import-ledger.json",
    },
    "panama": {
        "title": "Flora of Panama",
        "provider": "Missouri Botanical Garden",
        "source_url": "https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip",
        "archive_sha256": "b5b7d67e6038be4aee9ff3e9ffcfb9764b314bb025fa87aa887bfe96951b9859",
        "candidate_sha256": "4ab60e84007f306cf2d2e1256b4c9e5433d3d77f0780bbc10531844f74814b53",
        "output": "data/sources/flora-panama-descriptions.jsonl.br",
        "ledger": "data/sources/flora-panama-descriptions-import-ledger.json",
    },
}


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source", choices=sorted(CONFIG))
    parser.add_argument("candidate", type=Path)
    args = parser.parse_args()
    config = CONFIG[args.source]
    candidate = args.candidate.read_bytes()
    if sha256(candidate) != config["candidate_sha256"]:
        raise ValueError(f"Changed reviewed {args.source} candidate")

    by_col = {}
    descriptions = 0
    types = {}
    for row in map(json.loads, candidate.decode("utf-8").splitlines()):
        record = by_col.setdefault(row["colId"], {
            "colId": row["colId"], "wfoId": row["wfoId"],
            "scientificName": row["scientificName"], "descriptions": []})
        for source_description in row["descriptions"]:
            text = _converter.plain_text(source_description["sourceText"])
            description = {
                "type": source_description["type"],
                "text": text,
                "language": "en" if source_description["language"].lower() == "english" else source_description["language"],
                "languageNote": f"Archive metadata declares {source_description['language']}; no translation was authored.",
                "rowNumber": source_description["rowNumber"],
                "sourceId": source_description["sourceId"],
                "sourceIds": source_description["sourceIds"],
                "citations": [
                    {"identifier": ref["identifier"], "citation": _converter.plain_text(ref["citation"]),
                     "rowNumber": ref["rowNumber"], "title": ref["title"], "creator": ref["creator"],
                     "date": ref["date"], "source": ref["source"], "language": ref["language"],
                     "license": ref["license"], "rightsHolder": ref["rightsHolder"]}
                    for ref in source_description["references"]
                ],
                "referenceRowNumbers": source_description["referenceRowNumbers"],
                "citationMissingInSource": source_description["citationMissingInSource"],
                "missingSourceIds": source_description["missingSourceIds"],
                "citationScope": source_description["citationScope"],
                "datasetCitation": source_description["datasetCitation"],
                "rightsHolder": source_description["rightsHolder"],
                "rights": source_description["rights"],
                "license": source_description["license"],
                "sourceExcerpt": True,
            }
            record["descriptions"].append(description)
            descriptions += 1
            types[description["type"]] = types.get(description["type"], 0) + 1

    records = [by_col[key] for key in sorted(by_col)]
    decoded = b"".join((json.dumps(record, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8") for record in records)
    compressed = compress_source(decoded)
    output = ROOT / config["output"]
    output.write_bytes(compressed)
    ledger = {
        "provider": config["provider"], "title": config["title"],
        "retrievedAt": "2026-09-08", "sourceVersion": "WFO MBG DwC-A archive retrieved 2026-09-08",
        "sourceUrl": config["source_url"], "license": "CC BY 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
        "archiveSha256": config["archive_sha256"], "inputSha256": config["candidate_sha256"],
        "output": config["output"], "outputBytes": len(compressed),
        "outputSha256": sha256(compressed), "decodedBytes": len(decoded),
        "decodedSha256": sha256(decoded), "species": len(records),
        "descriptions": descriptions, "types": types,
        "limitations": [
            "Regional historical source, not a current or global inventory or complete species dossier.",
            "Only exact, unique accepted WFO/COL crosswalk identities are materialized; ambiguous, synonym, and unmatched archive rows remain retained outside the runtime.",
            "Original source HTML is normalized to plain text for display; source row numbers, references, and the retained archive preserve provenance.",
            "Archive-declared language is preserved as metadata; no translation or inferred trait was authored.",
            "The archive's linked Tropicos pages, images, and PDFs are not redistributed by this source pack.",
        ],
    }
    (ROOT / config["ledger"]).write_text(json.dumps(ledger, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(ledger, ensure_ascii=False))


if __name__ == "__main__":
    main()
