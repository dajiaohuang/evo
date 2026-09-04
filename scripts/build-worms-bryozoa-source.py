"""Project WoRMS/ColDP Bryozoa 1081 into the COL 622CG scope.

The archive is supplied explicitly so production and tests both identify the
same frozen bytes. Matching is exact scientific-name plus authorship; source
synonyms can produce redirects only when their explicit Taxon target is a
strict accepted species in this archive.
"""

from __future__ import annotations

import argparse
import csv
import gzip
import hashlib
import io
import json
import re
import zipfile
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "data/catalogue-of-life/releases/2026-08-20/registry"
COL_DESCRIPTOR = ROOT / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/itis-bryozoa-sidecar.json"
ARCHIVE_URL = "https://api.checklistbank.org/dataset/1081/archive"
ARCHIVE_SHA = "93081ce57720a84ca271126c5d748a9d2663a1ffc1d900b3fb380f94c696c0fb"
ARCHIVE_BYTES = 2_203_981
SOURCE_ID = "1081"
COL_ROOT = "622CG"
COL_EXPECTED = 20_367
SHARD_LIMIT = 2 * 1024 * 1024


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def normalize(value: str | None) -> str:
    return " ".join((value or "").split())


def encode(value: object, pretty: bool = False) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (",", ":")) + "\n").encode("utf-8")


def col_bare(row: dict[str, str]) -> str:
    full = row.get("colScientificName") or ""
    author = row.get("colAuthorship") or ""
    return full[:-len(author) - 1] if author and full.endswith(" " + author) else full


def source_key(name: str | None, author: str | None) -> tuple[str, str]:
    return normalize(name), normalize(author)


def source_record(taxon: dict[str, str], name: dict[str, str],
                  name_refs: dict[str, list[tuple[int, dict[str, str]]]],
                  references: dict[str, tuple[int, dict[str, str]]],
                  taxon_ordinal: int, name_ordinal: int,
                  relation_ordinal: int | None = None) -> dict[str, object]:
    refs = sorted({v for v in [name.get("referenceID"), taxon.get("referenceID")] if v})
    refs.extend(r["referenceID"] for _, r in name_refs.get(name["ID"], []) if r.get("referenceID"))
    ref_ids = sorted(set(refs))
    return {
        "id": taxon["ID"], "nameId": name["ID"],
        "scientificName": name.get("scientificName"),
        "authorship": name.get("authorship"), "nameStatus": name.get("status"), "rank": name.get("rank"),
        "status": "accepted", "provisional": taxon.get("provisional"),
        "extinct": taxon.get("extinct"), "parentId": taxon.get("parentID"),
        "referenceIds": ref_ids,
        "references": [references[rid][1] for rid in ref_ids if rid in references],
        "referenceRows": [{"member": "Reference.txt", "row": references[rid][0], "referenceID": rid}
                          for rid in ref_ids if rid in references],
        "referenceMissing": [rid for rid in ref_ids if rid not in references],
        "nameReferenceRows": [{"member": "NameReference.txt", "row": ordinal, **row}
                               for ordinal, row in name_refs.get(name["ID"], [])],
        "link": taxon.get("link") or name.get("link"),
        "sourceRows": [
            {"member": "Taxon.txt", "row": taxon_ordinal},
            {"member": "Name.txt", "row": name_ordinal},
            *([{"member": "NameReference.txt", "row": relation_ordinal}] if relation_ordinal else []),
        ],
    }


def read_source(path: Path):
    with zipfile.ZipFile(path) as archive:
        def rows(member: str):
            with io.TextIOWrapper(archive.open(member), encoding="utf-8-sig", newline="") as stream:
                yield from csv.DictReader(stream, delimiter="\t")

        names = list(rows("Name.txt"))
        taxa = list(rows("Taxon.txt"))
        synonyms = list(rows("Synonym.txt"))
        name_refs = list(rows("NameReference.txt"))
        references = list(rows("Reference.txt"))
    names_by_id = {row["ID"]: (row, ordinal) for ordinal, row in enumerate(names, 2)}
    refs_by_name: dict[str, list[tuple[int, dict[str, str]]]] = defaultdict(list)
    for ordinal, row in enumerate(name_refs, 2):
        refs_by_name[row["nameID"]].append((ordinal, row))
    refs_by_id = {row["ID"]: (ordinal, row) for ordinal, row in enumerate(references, 2)}
    accepted: dict[str, dict[str, object]] = {}
    accepted_by_key: dict[tuple[str, str], list[dict[str, object]]] = defaultdict(list)
    taxon_by_id = {row["ID"]: row for row in taxa}
    # ColDP audit rule: rank comes from Name.ID, not the denormalized Taxon.species field.
    species_rank_taxa = 0
    provisional_species = 0
    for ordinal, taxon in enumerate(taxa, 2):
        name_info = names_by_id.get(taxon.get("nameID"))
        if not name_info or name_info[0].get("rank") != "Species":
            continue
        species_rank_taxa += 1
        name, name_ordinal = name_info
        if taxon.get("provisional") == "1":
            provisional_species += 1
            continue
        record = source_record(taxon, name, refs_by_name, refs_by_id, ordinal, name_ordinal)
        accepted[taxon["ID"]] = record
        accepted_by_key[source_key(name.get("scientificName"), name.get("authorship"))].append(record)
    synonym_by_key: dict[tuple[str, str], list[dict[str, object]]] = defaultdict(list)
    for ordinal, relation in enumerate(synonyms, 2):
        target = accepted.get(relation.get("taxonID"))
        name_info = names_by_id.get(relation.get("nameID"))
        if not target or not name_info or name_info[0].get("rank") != "Species":
            continue
        name, name_ordinal = name_info
        synonym_by_key[source_key(name.get("scientificName"), name.get("authorship"))].append({
            "target": target,
            "relationOrdinal": ordinal,
            "nameOrdinal": name_ordinal,
            "name": name,
        })
    return accepted, accepted_by_key, synonym_by_key, {
        "Name.txt": {"rows": len(names)}, "Taxon.txt": {"rows": len(taxa)},
        "Synonym.txt": {"rows": len(synonyms)}, "NameReference.txt": {"rows": len(name_refs)},
        "Reference.txt": {"rows": len(references)},
        "speciesRankTaxa": species_rank_taxa, "provisionalSpecies": provisional_species,
    }


def read_col() -> tuple[list[dict[str, str]], dict[str, object]]:
    manifest_path = REGISTRY / "manifest.json"
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)
    node_inputs = []
    paths = []
    for item in manifest["hierarchy"]["nodes"]["files"]:
        path = REGISTRY / item["path"]
        payload = path.read_bytes()
        node_inputs.append({"path": f"data/catalogue-of-life/releases/2026-08-20/registry/{item['path']}",
                            "bytes": len(payload), "sha256": digest(payload)})
        paths.append(path)
    parents: dict[str, str | None] = {}
    for path in paths:
        with gzip.open(path, "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                parents[row["id"]] = row.get("parentId")
    rows: list[dict[str, str]] = []
    for path in paths:
        with gzip.open(path, "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                if row.get("rank") != "species" or row.get("status") != "accepted":
                    continue
                current, seen = row["id"], set()
                while current and current not in seen and current != COL_ROOT:
                    seen.add(current)
                    current = parents.get(current)
                if current == COL_ROOT:
                    rows.append({**row, "colId": row["id"],
                                 "colScientificName": row.get("scientificName"),
                                 "colAuthorship": row.get("authorship")})
    if len(rows) != COL_EXPECTED:
        raise ValueError(f"expected {COL_EXPECTED} canonical COL Bryozoa rows, got {len(rows)}")
    return rows, {"manifest": {"path": str(manifest_path.relative_to(ROOT)).replace("\\", "/"),
                                "bytes": len(manifest_bytes), "sha256": digest(manifest_bytes)},
                  "nodeShards": node_inputs}


def gzip_bytes(raw: bytes) -> bytes:
    out = bytearray(gzip.compress(raw, compresslevel=9, mtime=0))
    out[9] = 255
    return bytes(out)


def write_shards(directory: Path, prefix: str, rows: list[dict[str, object]], upstream: list[dict[str, object]]):
    directory.mkdir(parents=True, exist_ok=True)
    for old in directory.glob(f"{prefix}-*.json.gz"):
        old.unlink()
    result = {"files": [], "upstreamOnlyFiles": []}
    for role, values in (("", rows), ("-upstream-only", upstream)):
        chunks: list[list[dict[str, object]]] = []
        current: list[dict[str, object]] = []
        used = 0
        for row in values:
            size = len(encode(row))
            if current and used + size > SHARD_LIMIT:
                chunks.append(current); current = []; used = 0
            current.append(row); used += size
        if current or not values:
            if current: chunks.append(current)
        for index, chunk in enumerate(chunks):
            name = f"{prefix}{role}-{index:03d}.json.gz"
            raw = encode(chunk)
            compressed = gzip_bytes(raw)
            (directory / name).write_bytes(compressed)
            item = {"path": f"other-animals/{name}", "records": len(chunk),
                    "bytes": len(compressed), "sha256": digest(compressed),
                    "sourceBytes": len(raw), "sourceSha256": digest(raw)}
            if role == "":
                item.update(minColId=chunk[0]["colId"], maxColId=chunk[-1]["colId"])
                result["files"].append(item)
            else:
                result["upstreamOnlyFiles"].append(item)
    return result


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", type=Path, default=ROOT / "data/sources/archives/checklistbank-1081-bryozoa-2026-09-01.zip")
    parser.add_argument("--metadata", type=Path, default=ROOT / "data/sources/archives/checklistbank-1081-bryozoa-2026-09-01.metadata.json")
    parser.add_argument("--output-root", type=Path, default=ROOT)
    args = parser.parse_args()
    identity = {"bytes": args.archive.stat().st_size, "sha256": digest(args.archive.read_bytes())}
    if identity != {"bytes": ARCHIVE_BYTES, "sha256": ARCHIVE_SHA}:
        raise ValueError(f"archive does not match pinned source: {identity}")
    metadata = json.loads(args.metadata.read_text(encoding="utf-8"))
    if str(metadata.get("key")) != SOURCE_ID or metadata.get("version") != "2026-09-01" or metadata.get("license") != "cc by":
        raise ValueError("unexpected dataset 1081 metadata identity")
    source_sha = digest(args.archive.read_bytes())
    accepted, accepted_by_key, synonym_by_key, member_counts = read_source(args.archive)
    col_rows, col_input = read_col()
    col_rows = sorted(col_rows, key=lambda row: row["colId"])
    records: list[dict[str, object]] = []
    implicated: set[str] = set()
    counts = {key: 0 for key in ("accepted", "redirect", "ambiguous", "unmatched", "withheld")}
    for col in col_rows:
        key = source_key(col_bare(col), col.get("colAuthorship"))
        candidates = accepted_by_key.get(key, [])
        status = "accepted" if len(candidates) == 1 else "ambiguous" if candidates else "unmatched"
        matched = candidates[0] if len(candidates) == 1 else None
        matched_name = matched
        source_rows = []
        if matched:
            implicated.add(matched["id"])
            source_rows = matched["sourceRows"]
        elif not candidates:
            redirects = synonym_by_key.get(key, [])
            targets = {entry["target"]["id"] for entry in redirects}
            if len(targets) == 1:
                status = "redirect"
                redirect = next(entry for entry in redirects if entry["target"]["id"] in targets)
                matched = redirect["target"]
                matched_name = {"id": redirect["name"]["ID"], "nameId": redirect["name"]["ID"],
                                "scientificName": redirect["name"].get("scientificName"),
                                "authorship": redirect["name"].get("authorship"),
                                "rank": redirect["name"].get("rank"), "status": "synonym",
                                "nameStatus": redirect["name"].get("status"),
                                "sourceRows": [{"member": "Synonym.txt", "row": redirect["relationOrdinal"]},
                                               {"member": "Name.txt", "row": redirect["nameOrdinal"]}]}
                implicated.add(matched["id"])
                source_rows = [{"member": "Synonym.txt", "row": entry["relationOrdinal"]} for entry in redirects]
                source_rows += matched["sourceRows"]
            elif len(targets) > 1:
                status = "ambiguous"
                candidates = [entry["target"] for entry in redirects]
        counts[status] += 1
        records.append({
            "colId": col["colId"], "colScientificName": col.get("colScientificName"),
            "colAuthorship": col.get("colAuthorship"), "status": status,
            "matchedName": matched_name, "acceptedName": matched if status in {"accepted", "redirect"} else None,
            "candidates": candidates if status == "ambiguous" else [],
            "mappingBasis": "Exact scientificName+authorship; explicit ColDP synonym target may redirect.",
            "sourceRows": sorted(source_rows, key=lambda row: (row["member"], row["row"])),
        })
    upstream = []
    for source_id, row in sorted(accepted.items()):
        if source_id in implicated:
            continue
        upstream.append({"colId": None, "colScientificName": None, "colAuthorship": None,
                         "status": "upstream-only", "matchedName": None, "acceptedName": row,
                         "candidates": [], "mappingBasis": "Strict accepted source row not implicated by an exact COL match; not a global-new-species claim.",
                         "sourceRows": row["sourceRows"]})
    output_dir = args.output_root / "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals"
    shard_info = write_shards(output_dir, "worms-bryozoa", records, upstream)
    script_bytes = Path(__file__).read_bytes()
    ledger = {
        "schemaVersion": 1, "importType": "COL26.8-to-WoRMS-Bryozoa-1081-exact-crosswalk",
        "generatedBy": {"scriptPath": "scripts/build-worms-bryozoa-source.py", "scriptSha256": digest(script_bytes)},
        "source": {"datasetId": SOURCE_ID, "provider": "World Register of Marine Species via ChecklistBank",
                    "license": "CC-BY-4.0", "archiveUrl": ARCHIVE_URL,
                    "archiveBytes": ARCHIVE_BYTES, "archiveSha256": source_sha,
                    "archivePath": "data/sources/archives/checklistbank-1081-bryozoa-2026-09-01.zip",
                    "version": metadata["version"], "versionDoi": metadata.get("versionDoi"),
                    "metadataPath": "data/sources/archives/checklistbank-1081-bryozoa-2026-09-01.metadata.json",
                    "metadataBytes": args.metadata.stat().st_size, "metadataSha256": digest(args.metadata.read_bytes())},
        "scope": {"colRootUsageId": COL_ROOT, "eligibleColSpecies": len(col_rows),
                  "sourceSpeciesRankTaxa": member_counts["speciesRankTaxa"],
                  "sourceStrictAcceptedSpecies": len(accepted),
                  "provisionalExcluded": member_counts["provisionalSpecies"]},
        "colInput": col_input,
        "members": member_counts,
    }
    ledger_dir = args.output_root / "data/sources"
    ledger_dir.mkdir(parents=True, exist_ok=True)
    ledger_path = ledger_dir / "worms-bryozoa-1081-import-ledger.json"
    ledger_path.write_bytes(encode(ledger, pretty=True))
    descriptor = {
        "schemaVersion": 1, "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "worms-bryozoa-archive-crosswalk", "packageId": "other-animals",
        "provider": "World Register of Marine Species via ChecklistBank", "rowEncoding": "json",
        "role": "authority-crosswalk", "encoding": "gzip", "mediaType": "application/json",
        "colIdField": "colId", "totalCountField": "total",
        "source": {**ledger["source"], "sourceLedgerPath": "data/sources/worms-bryozoa-1081-import-ledger.json"},
        "scope": {"colRootUsageId": COL_ROOT, "scientificName": "Bryozoa",
                  "eligibleColSpecies": len(col_rows), "sourceStrictAcceptedSpecies": len(accepted)},
        "matching": {"normalization": "Whitespace normalization only; exact scientificName and authorship, preserving source fields.",
                     "synonym": "Explicit Synonym.taxonID target to a strict accepted Species taxon may redirect.",
                     "prohibited": "No fuzzy, case-folded, accent-folded, inferred or concept matching."},
        "counts": {"total": len(records), **counts, "upstreamOnly": len(upstream)},
        "files": shard_info["files"], "upstreamOnlyFiles": shard_info["upstreamOnlyFiles"],
        "totals": {"records": len(records), "sourceOnlyRecords": len(upstream),
                   "compressedBytes": sum(item["bytes"] for item in shard_info["files"]),
                   "sourceCompressedBytes": sum(item["bytes"] for item in shard_info["upstreamOnlyFiles"]),
                   "sourceBytes": sum(item["sourceBytes"] for item in shard_info["files"]),
                   "sourceOnlySourceBytes": sum(item["sourceBytes"] for item in shard_info["upstreamOnlyFiles"])},
        "deliveryProfiles": {
            "web-light": {"payload": "summary-only", "files": [], "records": 0,
                          "totalCompressedBytes": 0, "totalSourceBytes": 0},
            "native-full": {"payload": "complete",
                            "files": [item["path"] for item in shard_info["files"] + shard_info["upstreamOnlyFiles"]],
                            "records": len(records) + len(upstream),
                            "totalCompressedBytes": sum(item["bytes"] for item in shard_info["files"] + shard_info["upstreamOnlyFiles"]),
                            "totalSourceBytes": sum(item["sourceBytes"] for item in shard_info["files"] + shard_info["upstreamOnlyFiles"])}},
        "evidenceBoundary": {"en": "Frozen exact WoRMS nomenclatural crosswalk; not species-concept equivalence, global richness, fossil evidence or expert review.",
                             "zh": "冻结的WoRMS严格命名交叉映射；不是物种概念等同性、全球丰富度、化石证据或专家审查。"},
        "limitations": ["The 2026-09-01 WoRMS archive is not the COL26.8 source snapshot.",
                        "Source-only rows have null COL ownership and are not deduplicated global species additions.",
                        "The archive is supplied as an explicit pinned input; no moving live endpoint is used."],
    }
    descriptor_path = output_dir / "worms-bryozoa-sidecar.json"
    descriptor_path.write_bytes(encode(descriptor, pretty=True))
    ledger["outputs"] = {
        "descriptor": {"path": "data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/worms-bryozoa-sidecar.json",
                       "bytes": descriptor_path.stat().st_size, "sha256": digest(descriptor_path.read_bytes())},
        "shards": shard_info,
    }
    ledger_path.write_bytes(encode(ledger, pretty=True))
    print(json.dumps({"counts": descriptor["counts"], "sourceStrictAcceptedSpecies": len(accepted),
                      "files": shard_info}, ensure_ascii=False))


if __name__ == "__main__":
    main()
