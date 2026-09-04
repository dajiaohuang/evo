"""Build the pinned ChecklistBank 1033 Ichthyosporea projection offline."""

import argparse
import csv
import gzip
import hashlib
import json
import tarfile
from io import StringIO
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACK = (
    ROOT
    / "data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists"
)
DEFAULT = (
    ROOT / "data/sources/archives/checklistbank-1033-trichomycetes-2017-10-27.tar.gz"
)
OUT = PACK / "trichomycetes-000.json.gz"
DESC = PACK / "trichomycetes-sidecar.json"
LEDGER = ROOT / "data/sources/trichomycetes-archive-import-ledger.json"
URL = "https://api.checklistbank.org/dataset/1033/archive"
SHA = "ad2f2a5e8b9feab455f73ac390be34908687f79fea4c858ade29e52a8acfc33e"
ARCHIVE_BYTES = 38716


def digest(x):
    return hashlib.sha256(x).hexdigest()


def clean(x):
    return " ".join((x or "").split())


def tsv(x):
    return list(csv.DictReader(StringIO(x.decode("utf-8-sig")), delimiter="\t"))


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
    if len(raw) != ARCHIVE_BYTES or digest(raw) != SHA:
        raise SystemExit("pinned archive bytes/hash mismatch")
    with tarfile.open(archive, "r:gz") as tf:
        members = {
            n: tf.extractfile(n).read()
            for n in (
                "AcceptedSpecies.tsv",
                "NameReferences.tsv",
                "References.tsv",
                "SourceDatabase.tsv",
            )
        }
    src = tsv(members["AcceptedSpecies.tsv"])
    names = tsv(members["NameReferences.tsv"])
    refs = tsv(members["References.tsv"])
    byref = {r["ReferenceID"]: (i, r) for i, r in enumerate(refs, 2)}
    refs_by = {}
    if len(byref) != len(refs):
        raise SystemExit("duplicate bibliography reference ID")
    for i, n in enumerate(names, 2):
        if n["ReferenceType"] != "NomRef" or n["ReferenceID"] not in byref:
            raise SystemExit("invalid/missing NameReferences reference")
        reference_row, reference = byref[n["ReferenceID"]]
        refs_by.setdefault(n["ID"], []).append(
            {
                "referenceId": n["ReferenceID"],
                "referenceType": "NomRef",
                "sourceRow": i,
                "sourceRows": [
                    {"member": "NameReferences.tsv", "row": i},
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
                "sha256": digest(input_bytes),
            }
        )
        with gzip.open(input_path, "rt", encoding="utf-8") as h:
            col += [json.loads(x) for x in h if x.strip()]
    targets = [
        x
        for x in col
        if x.get("rank") == "species"
        and x.get("status") == "accepted"
        and str(x.get("sourceDatasetId")) == "1033"
    ]
    proto = [r for r in src if r["Kingdom"] == "Protozoa"]
    ich = [r for r in proto if r["Class"] == "Ichthyosporea"]
    fungi = [r for r in src if r["Kingdom"] == "Fungi"]
    bykey = {
        (clean(r["Genus"] + " " + r["SpeciesEpithet"]), clean(r["AuthorString"])): r
        for r in ich
    }
    out = []
    if len(bykey) != len(ich) or len({r["AcceptedTaxonID"] for r in ich}) != len(ich):
        raise SystemExit("non-unique source name/authorship or accepted ID")
    if len(targets) != 96 or len({c["id"] for c in targets}) != 96:
        raise SystemExit("pinned COL source1033 scope changed")
    for c in targets:
        a = clean(c.get("authorship"))
        n = c["scientificName"]
        bare = n[: -len(a) - 1] if a and n.endswith(" " + a) else n
        r = bykey.get((clean(bare), a))
        if r is None:
            raise SystemExit("target not unique Ichthyosporea: " + c["id"])
        sid = r["AcceptedTaxonID"]
        sn = clean(r["Genus"] + " " + r["SpeciesEpithet"])
        matched = {
            "id": sid,
            "scientificName": sn,
            "authorship": r["AuthorString"],
            "status": r["Sp2000NameStatus"],
            "url": r["SpeciesURL"],
        }
        if r["Sp2000NameStatus"] != "accepted name" or not refs_by.get(sid):
            raise SystemExit(
                "source accepted status or nomenclatural references missing: " + sid
            )
        out.append(
            {
                "colId": c["id"],
                "colScientificName": c["scientificName"],
                "colAuthorship": a,
                "status": "accepted",
                "matchedName": matched,
                "acceptedName": matched,
                "candidates": [],
                "mappingBasis": "Exact source name+authorship match; source fields preserved.",
                "sourceRows": [
                    {"member": "AcceptedSpecies.tsv", "row": src.index(r) + 2}
                ],
                "sourceAcceptedTaxonId": sid,
                "sourceUrl": r["SpeciesURL"],
                "sourceClassification": {
                    k: r[k] for k in ("Kingdom", "Phylum", "Class", "Order")
                },
                "nameReferences": refs_by.get(sid, []),
            }
        )
    if len({x["sourceAcceptedTaxonId"] for x in out}) != len(out):
        raise SystemExit("multiple COL species map to one source accepted ID")
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
    mm = {k: {"bytes": len(v), "sha256": digest(v)} for k, v in members.items()}
    excluded = [r["AcceptedTaxonID"] for r in proto if r not in ich]
    d = {
        "schemaVersion": 1,
        "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "trichomycetes-archive-crosswalk",
        "packageId": "protists-chromists",
        "provider": "Trichomycetes – Fungi Associated with Arthropods via ChecklistBank",
        "rowEncoding": "json",
        "colIdField": "colId",
        "totalCountField": "total",
        "source": {
            "provider": "University of Kansas Trichomycetes database via Catalogue of Life ChecklistBank",
            "license": "CC-BY-4.0",
            "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
            "archiveUrl": URL,
            "archiveBytes": ARCHIVE_BYTES,
            "archiveSha256": SHA,
            "archiveEncoding": "gzip-compressed tar (HTTP Content-Type application/zip)",
            "version": "Oct 2017",
            "versionDoi": "10.48580/d38n.v9",
            "retrievedAt": "2026-09-04",
            "members": mm,
        },
        "scope": {
            "colSourceDatasetId": 1033,
            "sourceKingdom": "Protozoa",
            "sourcePhylum": "Choanozoa",
            "sourceClass": "Ichthyosporea",
            "eligibleColSpecies": len(targets),
            "projectedSpecies": len(out),
            "excludedSourceFungiRows": len(fungi),
            "excludedOtherProtozoaRows": len(excluded),
            "excludedOtherProtozoaIds": excluded,
            "matchingKey": "exact source scientific name + authorship",
        },
        "matching": {
            "normalization": "Strict UTF-8 quoted TSV; whitespace-only name+authorship comparison.",
            "prohibited": "No fuzzy or inferred matching.",
        },
        "counts": {
            "total": len(out),
            "accepted": len(out),
            "redirect": 0,
            "ambiguous": 0,
            "unmatched": 0,
            "withheld": 0,
            "upstreamOnly": 0,
            "records": len(out),
        },
        "files": [
            {
                "path": "protists-chromists/trichomycetes-000.json.gz",
                "records": len(out),
                "bytes": len(ob),
                "sha256": digest(ob),
                "sourceBytes": len(payload),
                "sourceSha256": digest(payload),
                "minColId": out[0]["colId"],
                "maxColId": out[-1]["colId"],
                "encoding": "gzip",
                "mediaType": "application/json",
                "role": "col-partition",
            }
        ],
        "upstreamOnlyFiles": [],
        "evidenceBoundary": {
            "en": "Frozen source provenance, not independent scientific corroboration, species-concept equivalence, biological dossier, fossil evidence or expert review.",
            "zh": "冻结的来源追溯，不是独立科学佐证、物种概念等同、生物档案、化石证据或专家审查。",
        },
        "limitations": [
            "Only the 96 COL strict accepted source-1033 Ichthyosporea rows are projected; excluded rows are not upstream-only."
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
                "files": ["protists-chromists/trichomycetes-000.json.gz"],
                "records": len(out),
                "totalCompressedBytes": len(ob),
                "totalSourceBytes": len(payload),
            },
        },
    }
    descriptor_bytes = (json.dumps(d, ensure_ascii=False, indent=2) + "\n").encode(
        "utf-8"
    )
    descriptor.write_bytes(descriptor_bytes)
    ledger = {
        "schemaVersion": 1,
        "importType": "COL26.8-to-ChecklistBank-1033-Ichthyosporea-source-archive",
        "source": d["source"],
        "inputs": inputs,
        "scopeAudit": {
            "method": "Exact name+authorship; source Kingdom Protozoa and Class Ichthyosporea",
            "archiveAcceptedSpeciesRows": len(src),
            "archiveProtozoaRows": len(proto),
            "archiveIchthyosporeaRows": len(ich),
            "colEligibleSpecies": len(targets),
            "matchedUniqueSourceAcceptedTaxonIds": len(
                {x["sourceAcceptedTaxonId"] for x in out}
            ),
            "excludedFungiRows": len(fungi),
            "excludedOtherProtozoaRows": len(excluded),
            "excludedOtherProtozoaIds": excluded,
        },
        "output": {
            "path": OUT.relative_to(ROOT).as_posix(),
            "bytes": len(ob),
            "sha256": digest(ob),
            "sourceBytes": len(payload),
            "sourceSha256": digest(payload),
        },
        "descriptor": {
            "path": DESC.relative_to(ROOT).as_posix(),
            "bytes": len(descriptor_bytes),
            "sha256": digest(descriptor_bytes),
        },
    }
    ledger_path.write_bytes(
        (json.dumps(ledger, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    )
    print(json.dumps({"records": len(out), "outputBytes": len(ob)}))


if __name__ == "__main__":
    main()
