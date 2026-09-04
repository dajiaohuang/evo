"""Build an offline, deterministic source-1053 provenance projection."""

import argparse
import csv
import gzip
import hashlib
import json
import zipfile
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACK = (
    ROOT
    / "data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists"
)
DEFAULT = ROOT / "data/sources/archives/checklistbank-1053-eumycetozoa-2024-05.zip"
OUT = PACK / "eumycetozoa-000.json.gz"
DESC = PACK / "eumycetozoa-sidecar.json"
LEDGER = ROOT / "data/sources/eumycetozoa-archive-import-ledger.json"
URL = "https://api.checklistbank.org/dataset/1053/archive"
SHA = "2d8a55a43d7273bfabaa19c16942c9258b7ca00c17319fead95c562af40f24b1"
ARCHIVE_BYTES = 131700


def h(x):
    return hashlib.sha256(x).hexdigest()


def norm(x):
    return " ".join((x or "").split())


def tsv(x):
    return list(csv.DictReader(StringIO(x.decode("utf-8-sig")), delimiter="\t"))


def frozen_relations(dataset_key):
    directory = ROOT / "data/sources/authority-link-evidence"
    manifest_path = directory / "manifest.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    entries = {entry["file"]: entry for entry in manifest["entries"]}

    def response(col_id, kind, url):
        entry = entries[f"{col_id}-{kind}.json"]
        raw = (directory / entry["file"]).read_bytes()
        if (entry["url"] != url or len(raw) != entry["bytes"]
                or hashlib.sha256(raw).hexdigest() != entry["sha256"]):
            raise SystemExit("frozen source response identity mismatch: " + col_id)
        return json.loads(raw), entry

    result = {}
    for col_id, source_dataset, source_id in manifest["expectedRelations"]:
        if source_dataset != dataset_key:
            continue
        col_url = f"https://api.checklistbank.org/dataset/316115/nameusage/{col_id}"
        col, col_entry = response(col_id, "col", col_url)
        relation, relation_entry = response(col_id, "relation", col_url + "/source")
        source, source_entry = response(col_id, "source",
            f"https://api.checklistbank.org/dataset/{dataset_key}/nameusage/{source_id}")
        if (col["id"] != col_id or col["datasetKey"] != 316115
                or col["status"] != "accepted" or col["name"]["rank"] != "species"
                or relation["datasetKey"] != 316115
                or relation["id"] != col["verbatimSourceKey"]
                or relation["sourceDatasetKey"] != dataset_key
                or relation["sourceId"] != source_id
                or relation["sourceEntity"] != "name usage"
                or source["id"] != source_id or source["datasetKey"] != dataset_key
                or source["status"] != "accepted"):
            raise SystemExit("frozen COL/source relationship mismatch: " + col_id)
        result[col_id] = {
            "sourceId": source_id, "relation": relation,
            "colRecord": col, "responses": [col_entry, relation_entry, source_entry],
        }
    return result


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--archive", default=str(DEFAULT))
    p.add_argument("--output-root", type=Path, default=ROOT)
    args = p.parse_args()
    archive = Path(args.archive)
    raw = archive.read_bytes()
    output = args.output_root / OUT.relative_to(ROOT)
    descriptor = args.output_root / DESC.relative_to(ROOT)
    ledger_path = args.output_root / LEDGER.relative_to(ROOT)
    if len(raw) != ARCHIVE_BYTES or h(raw) != SHA:
        raise SystemExit("archive hash mismatch")
    with zipfile.ZipFile(archive) as tf:
        members = {
            n: tf.read(n)
            for n in (
                "AcceptedSpecies.tsv",
                "NameReferencesLinks.tsv",
                "References.tsv",
            )
        }
    src = tsv(members["AcceptedSpecies.tsv"])
    links = tsv(members["NameReferencesLinks.tsv"])
    refs = tsv(members["References.tsv"])
    byref = {r["ReferenceID"]: (i, r) for i, r in enumerate(refs, 2)}
    rb = {}
    if len(byref) != len(refs) or len({r["AcceptedTaxonID"] for r in src}) != len(src):
        raise SystemExit("duplicate source accepted or bibliography ID")
    if any(r["Sp2000NameStatus"] != "Accepted name" for r in src):
        raise SystemExit("pinned source accepted status changed")
    for i, x in enumerate(links, 2):
        if x["ReferenceID"] not in byref:
            raise SystemExit("missing reference " + x["ReferenceID"])
        reference_row, reference = byref[x["ReferenceID"]]
        rb.setdefault(x["ID"], []).append(
            {
                "referenceId": x["ReferenceID"],
                "referenceType": x["ReferenceType"],
                "sourceRow": i,
                "sourceRows": [
                    {"member": "NameReferencesLinks.tsv", "row": i},
                    {"member": "References.tsv", "row": reference_row},
                ],
                "reference": reference,
            }
        )
    m = json.loads((PACK / "manifest.json").read_text(encoding="utf-8"))
    col = []
    inputs = []
    for f in m["files"]:
        input_path = (
            ROOT
            / "data/catalogue-of-life/releases/2026-08-20/resource-packs"
            / f["path"]
        )
        input_bytes = input_path.read_bytes()
        inputs.append(
            {
                "path": input_path.relative_to(ROOT).as_posix(),
                "bytes": len(input_bytes),
                "sha256": h(input_bytes),
            }
        )
        with gzip.open(input_path, "rt", encoding="utf-8") as z:
            col += [json.loads(x) for x in z if x.strip()]
    targets = [
        x
        for x in col
        if x.get("rank") == "species"
        and x.get("status") == "accepted"
        and str(x.get("sourceDatasetId")) == "1053"
    ]
    bykey = {}
    for i, r in enumerate(src, 2):
        key = (norm(r["Genus"] + " " + r["SpeciesEpithet"]), norm(r["AuthorString"]))
        bykey.setdefault(key, []).append((r, i))
    relations = frozen_relations(1053)
    if len(targets) != 1337 or len({c["id"] for c in targets}) != len(targets):
        raise SystemExit("pinned COL source1053 scope changed")
    out = []
    for c in targets:
        a = norm(c.get("authorship"))
        n = c["scientificName"]
        bare = n[: -len(a) - 1] if a and n.endswith(" " + a) else n
        mm = bykey.get((norm(bare), a), [])
        relation_basis = None
        if len(mm) != 1 and c["id"] in relations:
            original_col = relations[c["id"]]["colRecord"]["name"]
            if norm(original_col["scientificName"]) != norm(bare) or norm(original_col.get("authorship")) != a:
                raise SystemExit("frozen relation COL label differs from the pinned species: " + c["id"])
            source_id = relations[c["id"]]["sourceId"]
            linked = [(r, i) for i, r in enumerate(src, 2) if r["AcceptedTaxonID"] == source_id]
            if len(linked) != 1:
                raise SystemExit("official relation has no unique frozen archive row: " + c["id"])
            mm = linked
            relation_basis = "ChecklistBank source-record relation; source name/authorship text is preserved."
        if len(mm) != 1:
            out.append(
                {
                    "colId": c["id"],
                    "colScientificName": c["scientificName"],
                    "colAuthorship": c.get("authorship"),
                    "status": "unmatched" if not mm else "ambiguous",
                    "matchedName": None,
                    "acceptedName": None,
                    "candidates": [
                        {
                            "id": r["AcceptedTaxonID"],
                            "scientificName": norm(
                                r["Genus"] + " " + r["SpeciesEpithet"]
                            ),
                            "authorship": r["AuthorString"],
                            "status": r["Sp2000NameStatus"],
                            "url": r["SpeciesURL"],
                        }
                        for r, _ in mm
                    ],
                    "mappingBasis": "No unique exact source name+authorship match.",
                    "sourceRows": [
                        {"member": "AcceptedSpecies.tsv", "row": i} for _, i in mm
                    ],
                    "nameReferences": [],
                    "sourceAcceptedTaxonId": None,
                }
            )
            continue
        r, ordinal = mm[0]
        sid = r["AcceptedTaxonID"]
        sn = norm(r["Genus"] + " " + r["SpeciesEpithet"])
        matched = {
            "id": sid,
            "scientificName": sn,
            "authorship": r["AuthorString"],
            "status": r["Sp2000NameStatus"],
            "url": r["SpeciesURL"],
        }
        out.append(
            {
                "colId": c["id"],
                "colScientificName": c["scientificName"],
                "colAuthorship": c.get("authorship"),
                "status": "accepted",
                "matchedName": matched,
                "acceptedName": matched,
                "candidates": [],
                "mappingBasis": relation_basis or "Exact source name+authorship match; source fields preserved.",
                "sourceRows": [{"member": "AcceptedSpecies.tsv", "row": ordinal}],
                "sourceAcceptedTaxonId": sid,
                "sourceUrl": r["SpeciesURL"],
                "sourceClassification": {
                    k: r[k] for k in ("Kingdom", "Phylum", "Class", "Order")
                },
                "nameReferences": rb.get(sid, []),
            }
        )
    for row in out:
        if row["mappingBasis"].startswith("ChecklistBank"):
            row["sourceRelation"] = relations[row["colId"]]
    matched_ids = [
        x["sourceAcceptedTaxonId"]
        for x in out
        if x["sourceAcceptedTaxonId"] is not None
    ]
    if len(matched_ids) != len(set(matched_ids)):
        raise SystemExit("multiple COL records map to one source accepted ID")
    out.sort(key=lambda x: x["colId"])
    payload = (
        json.dumps(out, ensure_ascii=False, separators=(",", ":")) + "\n"
    ).encode()
    output.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    with output.open("wb") as f:
        with gzip.GzipFile(filename="", fileobj=f, mode="wb", mtime=0) as z:
            z.write(payload)
    ob = output.read_bytes()
    file = {
        "path": "protists-chromists/eumycetozoa-000.json.gz",
        "records": len(out),
        "bytes": len(ob),
        "sha256": h(ob),
        "sourceBytes": len(payload),
        "sourceSha256": h(payload),
        "minColId": out[0]["colId"],
        "maxColId": out[-1]["colId"],
        "encoding": "gzip",
        "mediaType": "application/json",
        "role": "col-partition",
    }
    d = {
        "schemaVersion": 1,
        "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "eumycetozoa-archive-crosswalk",
        "packageId": "protists-chromists",
        "provider": "Eumycetozoa database via Catalogue of Life ChecklistBank",
        "rowEncoding": "json",
        "colIdField": "colId",
        "totalCountField": "total",
        "source": {
            "provider": "Eumycetozoa database",
            "license": "CC-BY-4.0",
            "archiveUrl": URL,
            "archiveBytes": ARCHIVE_BYTES,
            "archiveSha256": SHA,
            "version": "May 2024",
            "sourceLedgerPath": "data/sources/eumycetozoa-archive-import-ledger.json",
        },
        "scope": {
            "colSourceDatasetId": 1053,
            "eligibleColSpecies": len(targets),
            "projectedSpecies": len(out),
            "matchingKey": "exact source scientific name + authorship; seven unmatched keys linked by frozen official source-record relations",
        },
        "matching": {
            "normalization": "Strict UTF-8 TSV; whitespace-only name+authorship comparison.",
            "prohibited": "No fuzzy or inferred matching.",
        },
        "counts": {
            "total": len(out),
            "accepted": sum(x["status"] == "accepted" for x in out),
            "redirect": 0,
            "ambiguous": sum(x["status"] == "ambiguous" for x in out),
            "unmatched": sum(x["status"] == "unmatched" for x in out),
            "withheld": 0,
            "upstreamOnly": 0,
            "records": len(out),
        },
        "files": [file],
        "upstreamOnlyFiles": [],
        "evidenceBoundary": {
            "en": "Frozen source provenance for COL names; not an independent scientific validation or biological dossier.",
            "zh": "COL 名称的冻结来源追溯；不是独立科学验证或生物档案。",
        },
        "limitations": [
            "Only COL strict accepted species assigned source dataset 1053 are projected; no additional source-only rows are asserted.",
            "Reference links retain original type, identifiers, source row locators and empty fields.",
        ],
        "totalCompressedBytes": len(ob),
        "totalSourceBytes": len(payload),
        "deliveryProfiles": {
            "web-light": {
                "payload": "summary-only",
                "files": [],
                "records": 0,
                "totalCompressedBytes": 0,
                "totalSourceBytes": 0,
            },
            "native-full": {
                "payload": "complete",
                "files": [file["path"]],
                "records": len(out),
                "totalCompressedBytes": len(ob),
                "totalSourceBytes": len(payload),
            },
        },
    }
    d["source"].update(
        {
            "sourceDatasetId": 1053,
            "versionDoi": "10.48580/d39c.v28",
            "retrievedAt": "2026-09-04",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "archiveEncoding": "zip",
            "canonicalArchivePath": DEFAULT.relative_to(ROOT).as_posix(),
            "members": {
                name: {"bytes": len(value), "sha256": h(value)}
                for name, value in members.items()
            },
        }
    )
    excluded = [
        r["AcceptedTaxonID"]
        for r in src
        if r["AcceptedTaxonID"] not in set(matched_ids)
    ]
    d["scope"]["excludedUnlinkedAcceptedSourceRows"] = len(excluded)
    d["limitations"].append(
        "Seven COL targets are resolved by frozen ChecklistBank source-record relations despite source-text differences; eight accepted archive rows remain unlinked and are not projected. Unlinked does not mean globally novel or absent from other COL sources."
    )
    descriptor_bytes = (json.dumps(d, ensure_ascii=False, indent=2) + "\n").encode(
        "utf-8"
    )
    descriptor.write_bytes(descriptor_bytes)
    ledger = {
        "schemaVersion": 1,
        "importType": "COL26.8-to-ChecklistBank-1053-source-archive",
        "source": d["source"],
        "inputs": inputs,
        "scopeAudit": {
            "method": "1330 exact name+authorship matches and seven explicit ChecklistBank source-record relations, restricted to COL sourceDatasetId 1053",
            "officialRelationEvidence": relations,
            "archiveAcceptedSpeciesRows": len(src),
            "colEligibleSpecies": len(targets),
            "matchedUniqueSourceAcceptedTaxonIds": len(set(matched_ids)),
            "sourceReferenceLinks": len(links),
            "sourceReferences": len(refs),
            "excludedUnlinkedAcceptedSourceIds": excluded,
            "unmatchedColIds": [r["colId"] for r in out if r["status"] == "unmatched"],
        },
        "output": {
            "path": OUT.relative_to(ROOT).as_posix(),
            "bytes": len(ob),
            "sha256": h(ob),
            "sourceBytes": len(payload),
            "sourceSha256": h(payload),
        },
        "descriptor": {
            "path": DESC.relative_to(ROOT).as_posix(),
            "bytes": len(descriptor_bytes),
            "sha256": h(descriptor_bytes),
        },
    }
    ledger_path.write_bytes(
        (json.dumps(ledger, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    )
    print(
        json.dumps({"records": len(out), "bytes": len(ob), "sourceBytes": len(payload)})
    )


if __name__ == "__main__":
    main()
