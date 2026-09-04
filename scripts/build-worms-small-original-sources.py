"""Project three small WoRMS ColDP archives into exact COL26.8 sidecars.

The importer is deliberately offline: its only source inputs are the committed
ChecklistBank archive, its metadata response, and the pinned COL registry.
Matching is exact NFC plus Unicode-whitespace-normalized name and authorship.
"""
from __future__ import annotations

import argparse
import csv
import gzip
import hashlib
import io
import json
import re
import unicodedata
import zipfile
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "data/catalogue-of-life/releases/2026-08-20/registry"
OUT = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
LIMIT = 2 * 1024 * 1024
ARCHIVE_BASE = "https://api.checklistbank.org/dataset/{dataset}/archive"

SPECS = {
    "chaetognatha": {
        "dataset": "1132", "root": "36", "taxon": "Chaetognatha",
        "prefix": "worms-chaetognatha", "expected": 132,
        "archive": "data/sources/archives/checklistbank-1132-chaetognatha-2026-09-01.zip",
        "metadata": "data/sources/archives/checklistbank-1132-chaetognatha-2026-09-01.metadata.json",
        "archiveBytes": 45909, "archiveSha256": "c14c95f99dceb1500c1c5b99a99a3ca0d4c88a0566738f7f7fa1e329e4de47a4",
    },
    "rhombozoa": {
        "dataset": "1150", "root": "B8VFC", "taxon": "Rhombozoa",
        "prefix": "worms-rhombozoa", "expected": 122,
        "archive": "data/sources/archives/checklistbank-1150-rhombozoa-2026-09-01.zip",
        "metadata": "data/sources/archives/checklistbank-1150-rhombozoa-2026-09-01.metadata.json",
        "archiveBytes": 23988, "archiveSha256": "c29902e32bdd8700988bc61a5d67096e011a3862b4176df215aada16f4a8690d",
    },
    "loricifera": {
        "dataset": "1182", "root": "B8VF6", "taxon": "Loricifera",
        "prefix": "worms-loricifera", "expected": 46,
        "archive": "data/sources/archives/checklistbank-1182-loricifera-2026-09-01.zip",
        "metadata": "data/sources/archives/checklistbank-1182-loricifera-2026-09-01.metadata.json",
        "archiveBytes": 14695, "archiveSha256": "e6618414a8a660def5aca98be29a78e9eb2909ccab96a9e5d54a0d28b5744c5b",
    },
}


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def script_digest(path: Path) -> str:
    return digest(path.read_bytes().replace(b"\r\n", b"\n"))


def encode(value: object, pretty: bool = False) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (",", ":")) + "\n").encode("utf-8")


def normalize(value: str | None) -> str:
    return " ".join(unicodedata.normalize("NFC", value or "").split())


def col_bare(row: dict[str, str]) -> str:
    name, author = row.get("scientificName") or "", row.get("authorship") or ""
    suffix = " " + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def source_key(name: str | None, author: str | None) -> tuple[str, str]:
    return normalize(name), normalize(author)


def source_record(taxon: dict[str, str], name: dict[str, str], name_refs,
                  references, taxon_row: int, name_row: int) -> dict[str, object]:
    ref_ids = []
    for ref_id in (name.get("referenceID"), taxon.get("referenceID")):
        if (ref_id or "").strip():
            ref_ids.append(ref_id.strip())
    ref_rows = name_refs.get(name["ID"], [])
    ref_ids.extend(r[1].get("referenceID", "").strip() for r in ref_rows
                   if r[1].get("referenceID", "").strip())
    ref_ids = list(dict.fromkeys(ref_ids))
    reference_rows = []
    reference_values = []
    reference_missing = []
    source_rows = [{"member": "Taxon.txt", "row": taxon_row},
                   {"member": "Name.txt", "row": name_row}]
    name_reference_values = []
    for row_number, row in ref_rows:
        source_rows.append({"member": "NameReference.txt", "row": row_number})
        name_reference_values.append({"row": row_number, **row})
    for ref_id in ref_ids:
        if ref_id not in references:
            reference_missing.append(ref_id)
            continue
        row_number, value = references[ref_id]
        source_rows.append({"member": "Reference.txt", "row": row_number})
        reference_rows.append({"member": "Reference.txt", "row": row_number,
                               "referenceID": ref_id})
        reference_values.append({"referenceID": ref_id, "row": row_number,
                                 "reference": value})
    return {
        "id": taxon["ID"], "nameId": name["ID"],
        "scientificName": name.get("scientificName"), "authorship": name.get("authorship"),
        "nameStatus": name.get("status"), "rank": name.get("rank"), "status": "accepted",
        "provisional": taxon.get("provisional"), "extinct": taxon.get("extinct"),
        "parentId": taxon.get("parentID"), "link": taxon.get("link") or name.get("link"),
        "name": name, "taxon": taxon, "nameReferences": name_reference_values,
        "referenceIds": ref_ids, "references": reference_values,
        "referenceRows": reference_rows, "referenceMissing": reference_missing,
        "sourceRows": source_rows,
    }


def read_source(path: Path):
    with zipfile.ZipFile(path) as archive:
        members = {info.filename: {"bytes": info.file_size,
                                   "sha256": digest(archive.read(info.filename))}
                   for info in archive.infolist()}

        def rows(member: str):
            with io.TextIOWrapper(archive.open(member), encoding="utf-8-sig",
                                  newline="") as stream:
                yield from csv.DictReader(stream, delimiter="\t")

        names = list(rows("Name.txt"))
        taxa = list(rows("Taxon.txt"))
        name_refs = list(rows("NameReference.txt"))
        references = list(rows("Reference.txt"))
    names_by_id = {row["ID"]: (row, ordinal)
                   for ordinal, row in enumerate(names, 2)}
    refs_by_name = defaultdict(list)
    for ordinal, row in enumerate(name_refs, 2):
        refs_by_name[row["nameID"]].append((ordinal, row))
    refs_by_id = {row["ID"]: (ordinal, row)
                  for ordinal, row in enumerate(references, 2)}
    accepted, by_key = {}, defaultdict(list)
    species_rank_taxa = 0
    provisional_species = 0
    for ordinal, taxon in enumerate(taxa, 2):
        name_info = names_by_id.get(taxon.get("nameID"))
        if not name_info or (name_info[0].get("rank") or "").lower() != "species":
            continue
        species_rank_taxa += 1
        name, name_ordinal = name_info
        if taxon.get("provisional") == "1":
            provisional_species += 1
            continue
        record = source_record(taxon, name, refs_by_name, refs_by_id,
                               ordinal, name_ordinal)
        accepted[taxon["ID"]] = record
        by_key[source_key(name.get("scientificName"), name.get("authorship"))].append(record)
    return accepted, by_key, {"Name.txt": {"rows": len(names)},
                              "Taxon.txt": {"rows": len(taxa)},
                              "NameReference.txt": {"rows": len(name_refs)},
                              "Reference.txt": {"rows": len(references)},
                              "speciesRankTaxa": species_rank_taxa,
                              "provisionalSpecies": provisional_species}, members


_COL_CACHE = None


def read_col(spec: dict):
    global _COL_CACHE
    if _COL_CACHE is None:
        _COL_CACHE = _read_col_registry()
    parents, all_rows, col_input = _COL_CACHE
    result = []
    for row in all_rows.values():
        if row.get("rank") != "species" or row.get("status") != "accepted":
            continue
        current, seen = row.get("id"), set()
        while current and current not in seen and current != spec["root"]:
            seen.add(current)
            current = parents.get(current)
        if current == spec["root"]:
            result.append({**row, "colId": row["id"],
                           "colScientificName": row.get("scientificName"),
                           "colAuthorship": row.get("authorship")})
    if len(result) != spec["expected"]:
        raise ValueError(f"expected {spec['expected']} COL rows, got {len(result)}")
    return sorted(result, key=lambda row: row["colId"]), col_input


def _read_col_registry():
    manifest_path = REGISTRY / "manifest.json"
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)
    paths = [REGISTRY / entry["path"]
             for entry in manifest["hierarchy"]["nodes"]["files"]]
    parents, all_rows = {}, {}
    inputs = []
    for path in paths:
        payload = path.read_bytes()
        inputs.append({"path": str(path.relative_to(ROOT)).replace("\\", "/"),
                       "bytes": len(payload), "sha256": digest(payload)})
        with gzip.open(path, "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                all_rows[row["id"]] = row
                parents[row["id"]] = row.get("parentId")
    return parents, all_rows, {
        "path": str(manifest_path.relative_to(ROOT)).replace("\\", "/"),
        "bytes": len(manifest_bytes), "sha256": digest(manifest_bytes),
        "nodeShards": inputs,
    }


def gzip_bytes(raw: bytes) -> bytes:
    packed = bytearray(gzip.compress(raw, compresslevel=9, mtime=0))
    packed[9] = 255
    return bytes(packed)


def write_shards(directory: Path, prefix: str, rows: list[dict[str, object]], role: str):
    if not rows:
        return []
    chunks, current, used = [], [], 0
    for row in rows:
        size = len(encode(row))
        if current and used + size > LIMIT:
            chunks.append(current)
            current, used = [], 0
        current.append(row)
        used += size
    if current:
        chunks.append(current)
    result = []
    for index, chunk in enumerate(chunks):
        name = f"{prefix}-{index:03d}.json.gz"
        raw = encode(chunk)
        packed = gzip_bytes(raw)
        (directory / name).write_bytes(packed)
        item = {"path": f"other-animals/{name}", "records": len(chunk),
                "bytes": len(packed), "sha256": digest(packed),
                "sourceBytes": len(raw), "sourceSha256": digest(raw),
                "encoding": "gzip", "mediaType": "application/json", "role": role}
        if role != "source-only":
            item.update(minColId=chunk[0]["colId"], maxColId=chunk[-1]["colId"])
        result.append(item)
    return result


def source_info(spec: dict, metadata: dict, archive: Path, metadata_path: Path,
                members: dict) -> dict:
    raw = archive.read_bytes()
    info = {"datasetId": spec["dataset"], "provider": "World Register of Marine Species via ChecklistBank",
            "archiveUrl": ARCHIVE_BASE.format(dataset=spec["dataset"]),
            "archivePath": str(archive.relative_to(ROOT)).replace("\\", "/"),
            "archiveBytes": len(raw), "archiveSha256": digest(raw),
            "metadataPath": str(metadata_path.relative_to(ROOT)).replace("\\", "/"),
            "metadataBytes": metadata_path.stat().st_size,
            "metadataSha256": digest(metadata_path.read_bytes()), "members": members}
    for field in ("title", "version", "versionDoi", "doi", "citation", "issued",
                  "editor", "contributor", "license", "rights", "rightsHolder"):
        if field in metadata and metadata[field] is not None:
            info[field] = metadata[field]
    info["metadata"] = metadata
    return info


def project(key: str, output_root: Path = ROOT) -> dict:
    spec = SPECS[key]
    archive = ROOT / spec["archive"]
    metadata_path = ROOT / spec["metadata"]
    raw = archive.read_bytes()
    identity = {"bytes": len(raw), "sha256": digest(raw)}
    if identity != {"bytes": spec["archiveBytes"], "sha256": spec["archiveSha256"]}:
        raise ValueError(f"{key} archive does not match pinned bytes: {identity}")
    metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
    if str(metadata.get("key")) != spec["dataset"] or metadata.get("version") != "2026-09-01":
        raise ValueError(f"unexpected {key} metadata identity")
    accepted, by_key, member_counts, members = read_source(archive)
    col_rows, col_input = read_col(spec)
    records, implicated = [], set()
    counts = {name: 0 for name in ("accepted", "ambiguous", "unmatched", "redirect", "withheld")}
    for col in col_rows:
        candidates = by_key.get(source_key(col_bare(col), col.get("colAuthorship")), [])
        status = "accepted" if len(candidates) == 1 else "ambiguous" if len(candidates) > 1 else "unmatched"
        matched = candidates[0] if len(candidates) == 1 else None
        if matched:
            implicated.add(matched["id"])
        counts[status] += 1
        records.append({"colId": col["colId"], "colScientificName": col.get("colScientificName"),
                        "colAuthorship": col.get("colAuthorship"), "status": status,
                        "matchedName": matched, "acceptedName": matched if status == "accepted" else None,
                        "candidates": candidates if status == "ambiguous" else [],
                        "mappingBasis": "Exact NFC+Unicode-whitespace scientificName plus authorship; no fuzzy fallback.",
                        "sourceRows": matched["sourceRows"] if matched else []})
    source_only = []
    for source_id, row in sorted(accepted.items()):
        if source_id in implicated:
            continue
        source_only.append({"colId": None, "colScientificName": None, "colAuthorship": None,
                            "status": "source-only", "matchedName": None, "acceptedName": row,
                            "candidates": [],
                            "mappingBasis": "Strict accepted source row not implicated by an exact COL match; null COL ownership.",
                            "sourceRows": row["sourceRows"]})
    destination = output_root / OUT.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    for old in destination.glob(f"{spec['prefix']}-*.json.gz"):
        old.unlink()
    outcome_files = {}
    for outcome in ("accepted", "ambiguous", "unmatched"):
        outcome_files[outcome] = write_shards(destination, f"{spec['prefix']}-{outcome}",
                                              [row for row in records if row["status"] == outcome], outcome)
    source_files = write_shards(destination, f"{spec['prefix']}-source-only", source_only, "source-only")
    col_files = [item for outcome in ("accepted", "ambiguous", "unmatched") for item in outcome_files[outcome]]
    source = source_info(spec, metadata, archive, metadata_path, members)
    descriptor = {"schemaVersion": 1, "recordType": "release-pinned-authority-original-archive-projection",
                  "id": f"{spec['prefix']}-archive-crosswalk", "packageId": "other-animals",
                  "provider": source["provider"], "role": "authority-crosswalk", "rowEncoding": "json",
                  "encoding": "gzip", "mediaType": "application/json", "colIdField": "colId",
                  "totalCountField": "total", "source": source,
                  "scope": {"colRootUsageId": spec["root"], "scientificName": spec["taxon"],
                            "eligibleColSpecies": len(col_rows), "sourceSpeciesRankTaxa": member_counts["speciesRankTaxa"],
                            "sourceStrictAcceptedSpecies": len(accepted),
                            "provisionalExcluded": member_counts["provisionalSpecies"]},
                  "matching": {"normalization": "NFC followed by Unicode whitespace normalization; exact trailing COL authorship is removed.",
                               "prohibited": "No fuzzy, case-folded, accent-folded, synonym, redirect or species-concept matching."},
                  "counts": {"total": len(records), **counts, "sourceOnly": len(source_only),
                             "upstreamOnly": len(source_only), "records": len(records) + len(source_only)},
                  "files": col_files, "outcomeFiles": outcome_files,
                  "sourceOnlyFiles": source_files, "upstreamOnlyFiles": source_files,
                  "totals": {"records": len(records), "sourceOnlyRecords": len(source_only),
                             "compressedBytes": sum(f["bytes"] for f in col_files),
                             "sourceCompressedBytes": sum(f["bytes"] for f in source_files),
                             "sourceBytes": sum(f["sourceBytes"] for f in col_files),
                             "sourceOnlySourceBytes": sum(f["sourceBytes"] for f in source_files)},
                  "deliveryProfiles": {"web-light": {"mode": "summary-only", "records": 0, "files": [],
                                                        "totalCompressedBytes": 0, "totalSourceBytes": 0},
                                       "native-full": {"mode": "complete", "records": len(records) + len(source_only),
                                                       "files": [f["path"] for f in col_files + source_files],
                                                       "totalCompressedBytes": sum(f["bytes"] for f in col_files + source_files),
                                                       "totalSourceBytes": sum(f["sourceBytes"] for f in col_files + source_files)}},
                  "evidenceBoundary": {"en": "Frozen original WoRMS archive projection; not species-concept equivalence, fossil evidence or expert review.",
                                       "zh": "冻结的WoRMS原始归档投影；不是物种概念等同性、化石证据或专家审查。"},
                  "limitations": ["Source-only rows retain null COL ownership.",
                                  "Only the exact pinned archive is replayed; no live endpoint is used.",
                                  "Archive completeness and nomenclatural status do not establish biological completeness."]}
    descriptor_path = destination / f"{spec['prefix']}-sidecar.json"
    descriptor_bytes = encode(descriptor, pretty=True)
    descriptor_path.write_bytes(descriptor_bytes)
    ledger = {"schemaVersion": 1, "importType": "COL26.8-to-WoRMS-original-archive-projection",
              "generatedBy": {"scriptPath": "scripts/build-worms-small-original-sources.py",
                              "scriptSha256": script_digest(Path(__file__)), "hashNormalization": "LF"},
              "source": source, "registry": col_input,
              "scopeAudit": {"colRootUsageId": spec["root"], "colSpecies": len(col_rows),
                              "sourceSpeciesRankTaxa": member_counts["speciesRankTaxa"],
                              "sourceAcceptedSpecies": len(accepted), "sourceOnly": len(source_only),
                              "provisionalExcluded": member_counts["provisionalSpecies"],
                              "memberDigests": members},
              "outputs": {"descriptor": {"path": str(descriptor_path.relative_to(output_root)).replace("\\", "/"),
                                           "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)},
                          "files": col_files, "outcomeFiles": outcome_files,
                          "sourceOnlyFiles": source_files, "upstreamOnlyFiles": source_files}}
    ledger_path = output_root / f"data/sources/{spec['prefix']}-archive-{spec['dataset']}-import-ledger.json"
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(encode(ledger, pretty=True))
    descriptor["source"]["sourceLedgerPath"] = str(ledger_path.relative_to(output_root)).replace("\\", "/")
    descriptor["source"]["sourceLedgerSha256"] = digest(ledger_path.read_bytes())
    descriptor_path.write_bytes(encode(descriptor, pretty=True))
    return {"key": key, "counts": descriptor["counts"], "source": {"bytes": len(raw), "sha256": digest(raw)},
            "shards": len(col_files) + len(source_files)}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--scope", choices=sorted(SPECS), action="append")
    parser.add_argument("--output-root", type=Path, default=ROOT)
    args = parser.parse_args()
    for key in args.scope or list(SPECS):
        print(json.dumps(project(key, args.output_root), ensure_ascii=False))


if __name__ == "__main__":
    main()
