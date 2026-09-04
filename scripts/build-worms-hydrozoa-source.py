"""Project the pinned WoRMS Hydrozoa archive into the scoped COL package."""

import argparse
import csv
import gzip
import hashlib
import io
import json
import unicodedata
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REGISTRY = ROOT / "data/catalogue-of-life/releases/2026-08-20/registry"
ARCHIVE = ROOT / "data/sources/archives/checklistbank-1112-hydrozoa-2026-09-01.zip"
METADATA = ROOT / "data/sources/archives/checklistbank-1112-hydrozoa-2026-09-01.metadata.json"
ARCHIVE_URL = "https://api.checklistbank.org/dataset/1112/archive?attempt=84"
ARCHIVE_ATTEMPT = 84
ARCHIVE_SHA = "741fdd2f4252d5b45676d1dc6f3f6d9296f022a1ce12019904c999fc8f520902"
ARCHIVE_BYTES = 1819351
API_VERSION = "2026-09-01"
API_VERSION_DOI = "10.48580/d3cd.v84"
COL_SOURCE = "1112"
COL_ROOTS = ("B8V3X",)
OUT = ROOT / "data/packages/invertebrata/sponges-cnidarians/nomenclature"
PREFIX = "worms-hydrozoa"
LEDGER_PATH = ROOT / "data/sources/worms-hydrozoa-archive-1112-import-ledger.json"
SHARD_LIMIT = 2 * 1024 * 1024


def digest(data):
    return hashlib.sha256(data).hexdigest()


def script_digest(path):
    return digest(path.read_bytes().replace(b"\r\n", b"\n"))


def dump(obj, pretty=False):
    return (json.dumps(obj, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (",", ":")) + "\n").encode("utf-8")


def norm(value):
    return " ".join(unicodedata.normalize("NFC", value or "").split())


def col_bare(row):
    name, author = row.get("scientificName") or "", row.get("authorship") or ""
    suffix = " " + author
    return name[:-len(suffix)] if author and name.endswith(suffix) else name


def parse_embedded_metadata(raw):
    fields = {}
    for line in raw.decode("utf-8").splitlines():
        if line and not line[0].isspace() and ":" in line:
            key, value = line.split(":", 1)
            fields[key] = value.strip().strip("'").strip('"')
    return {key: fields.get(key, "") for key in
            ("doi", "title", "issued", "version", "license", "website")}


def read_archive(path):
    members = {}
    with zipfile.ZipFile(path) as archive:
        for member in archive.namelist():
            raw = archive.read(member)
            members[member] = {"bytes": len(raw), "sha256": digest(raw)}

        def rows(member):
            return list(csv.DictReader(io.TextIOWrapper(
                archive.open(member), encoding="utf-8-sig"), delimiter="\t"))

        names = {row["ID"]: (row, index)
                 for index, row in enumerate(rows("Name.txt"), 2)}
        references = {row["ID"]: (row, index)
                      for index, row in enumerate(rows("Reference.txt"), 2)}
        name_references = {}
        for index, row in enumerate(rows("NameReference.txt"), 2):
            name_references.setdefault(row["nameID"], []).append((row, index))
        distributions = {}
        distribution_rows = {}
        for index, row in enumerate(rows("Distribution.txt"), 2):
            item = {key: row.get(key) or "" for key in row}
            distributions.setdefault(row["taxonID"], []).append(item)
            distribution_rows.setdefault(row["taxonID"], []).append(index)
        accepted, species_rank_count, provisional_count = {}, 0, 0
        for index, taxon in enumerate(rows("Taxon.txt"), 2):
            name_entry = names.get(taxon["nameID"])
            if not name_entry or (name_entry[0].get("rank") or "").lower() != "species":
                continue
            species_rank_count += 1
            if taxon.get("provisional") != "0":
                provisional_count += 1
                continue
            if (name_entry[0].get("status") or "").lower() != "established":
                continue
            accepted[taxon["ID"]] = {
                "taxon": taxon, "taxonRow": index, "name": name_entry[0],
                "nameRow": name_entry[1], "distributions": distributions.get(taxon["ID"], []),
                "distributionRows": distribution_rows.get(taxon["ID"], []),
            }
    return (accepted, names, references, name_references, members,
            species_rank_count, provisional_count)


def read_col():
    manifest_bytes = (REGISTRY / "manifest.json").read_bytes()
    manifest = json.loads(manifest_bytes)
    parents, candidates, rows = {}, [], {}
    for item in manifest["hierarchy"]["nodes"]["files"]:
        with gzip.open(REGISTRY / item["path"], "rt", encoding="utf-8") as stream:
            for line in stream:
                row = json.loads(line)
                parents[row["id"]] = row.get("parentId")
                if (row.get("rank") == "species" and row.get("status") == "accepted"
                        and row.get("sourceDatasetId") == COL_SOURCE):
                    candidates.append(row)
    for row in candidates:
        current, seen = row.get("parentId"), set()
        while current and current not in seen and current not in COL_ROOTS:
            seen.add(current)
            current = parents.get(current)
        if current in COL_ROOTS:
            rows[row["id"]] = row
    inputs = []
    for item in manifest["hierarchy"]["nodes"]["files"]:
        path = REGISTRY / item["path"]
        inputs.append({"path": f"data/catalogue-of-life/releases/2026-08-20/registry/{item['path']}",
                       "bytes": path.stat().st_size, "sha256": digest(path.read_bytes())})
    return rows, digest(manifest_bytes), inputs


def source_name(entry):
    taxon, name = entry["taxon"], entry["name"]
    aphia_id = taxon["ID"].rsplit(":", 1)[-1]
    return {
        "id": taxon["ID"], "aphiaId": aphia_id,
        "scientificName": name.get("scientificName") or "",
        "authorship": name.get("authorship") or "", "rank": name.get("rank") or "",
        "status": "accepted", "nameStatus": name.get("status") or "",
        "provisional": taxon.get("provisional") or "",
        "nameReferenceId": name.get("referenceID") or "",
        "publishedInYear": name.get("publishedInYear") or "",
        "publishedInPage": name.get("publishedInPage") or "",
        "publishedInPageLink": name.get("publishedInPageLink") or "",
        "url": name.get("link") or taxon.get("link") or "",
        "environment": taxon.get("environment") or "",
        "extinct": taxon.get("extinct") or "",
        "parentId": taxon.get("parentID") or "",
        "distribution": entry["distributions"],
    }


def referenced_ids(entry, name_references):
    taxon, name = entry["taxon"], entry["name"]
    ids = [name.get("referenceID") or "", taxon.get("referenceID") or ""]
    ids.extend(row.get("referenceID") or "" for row, _ in
               name_references.get(name["ID"], []))
    ids.extend(row.get("referenceID") or "" for row in entry["distributions"])
    return list(dict.fromkeys(value.strip() for value in ids if value.strip()))


def source_rows(entry, name_references, references):
    locators = [{"member": "Taxon.txt", "row": entry["taxonRow"]},
                {"member": "Name.txt", "row": entry["nameRow"]}]
    for row, row_number in name_references.get(entry["name"]["ID"], []):
        locators.append({"member": "NameReference.txt", "row": row_number})
    for row_number in entry["distributionRows"]:
        locators.append({"member": "Distribution.txt", "row": row_number})
    for reference_id in referenced_ids(entry, name_references):
        if reference_id in references:
            locators.append({"member": "Reference.txt", "row": references[reference_id][1]})
    return locators


def source_references(entry, name_references, references):
    result = []
    for reference_id in referenced_ids(entry, name_references):
        item = {"referenceID": reference_id, "missing": reference_id not in references}
        if reference_id in references:
            reference, row_number = references[reference_id]
            item["reference"] = reference
            item["sourceRows"] = [{"member": "Reference.txt", "row": row_number}]
        result.append(item)
    return result


def write_shards(destination, prefix, rows, role):
    if not rows:
        return []
    parts, current, used = [], [], 2
    for row in rows:
        size = len(dump(row)) + 1
        if current and used + size > SHARD_LIMIT:
            parts.append(current)
            current, used = [row], 2 + size
        else:
            current.append(row)
            used += size
    if current:
        parts.append(current)
    items = []
    for index, part in enumerate(parts):
        name = f"{prefix}-{index:03d}.json.gz"
        payload = dump(part)
        if len(payload) > SHARD_LIMIT:
            raise ValueError(f"shard exceeds uncompressed limit: {name}")
        compressed = gzip.compress(payload, compresslevel=9, mtime=0)
        compressed = compressed[:9] + bytes([255]) + compressed[10:]
        (destination / name).write_bytes(compressed)
        item = {"path": f"nomenclature/{name}", "records": len(part),
                "bytes": len(compressed), "sha256": digest(compressed),
                "sourceBytes": len(payload), "sourceSha256": digest(payload),
                "encoding": "gzip", "mediaType": "application/json", "role": role}
        if part and role == "col-partition":
            item.update(minColId=part[0]["colId"], maxColId=part[-1]["colId"])
        items.append(item)
    return items


def project(archive, output_root=None):
    raw = archive.read_bytes()
    if len(raw) != ARCHIVE_BYTES or digest(raw) != ARCHIVE_SHA:
        raise ValueError("archive does not match the pinned Hydrozoa archive")
    metadata_bytes = METADATA.read_bytes()
    api_metadata = json.loads(metadata_bytes)
    if api_metadata.get("attempt") != ARCHIVE_ATTEMPT:
        raise ValueError("metadata does not describe the pinned archive attempt")
    if api_metadata.get("version") != API_VERSION or api_metadata.get("versionDoi") != API_VERSION_DOI:
        raise ValueError("metadata API release changed from the pinned Hydrozoa snapshot")
    with zipfile.ZipFile(archive) as z:
        embedded_bytes = z.read("metadata.yml")
    embedded = parse_embedded_metadata(embedded_bytes)
    accepted, names, references, name_references, members, species_rank_count, provisional_count = read_archive(archive)
    col, col_sha, col_inputs = read_col()
    by_key = {}
    for source_id, entry in accepted.items():
        key = (norm(entry["name"].get("scientificName")), norm(entry["name"].get("authorship")))
        by_key.setdefault(key, []).append((source_id, entry))
    records, used = [], set()
    counts = {key: 0 for key in ("accepted", "redirect", "ambiguous", "unmatched", "withheld")}
    for col_id, row in sorted(col.items()):
        hits = by_key.get((norm(col_bare(row)), norm(row.get("authorship"))), [])
        status = "accepted" if len(hits) == 1 else "ambiguous" if len(hits) > 1 else "unmatched"
        counts[status] += 1
        matched = None
        locators, refs = [], []
        if len(hits) == 1:
            source_id, entry = hits[0]
            used.add(source_id)
            matched = source_name(entry)
            locators = source_rows(entry, name_references, references)
            refs = source_references(entry, name_references, references)
        candidates = [source_name(entry) for _, entry in hits] if len(hits) > 1 else []
        records.append({"colId": col_id, "colScientificName": row["scientificName"],
                        "colAuthorship": row.get("authorship"), "status": status,
                        "matchedName": matched, "acceptedName": matched,
                        "candidates": candidates,
                        "mappingBasis": "Exact NFC+Unicode-whitespace source scientific name plus authorship; no fuzzy fallback.",
                        "sourceRows": locators, "references": refs})
    source_only = []
    for source_id, entry in sorted(accepted.items()):
        if source_id in used:
            continue
        source_only.append({"colId": None, "colScientificName": None, "colAuthorship": None,
                            "status": "source-only", "matchedName": None,
                            "acceptedName": source_name(entry), "candidates": [],
                            "mappingBasis": "Accepted Hydrozoa source concept not linked by exact COL name+authorship; not a global new species claim.",
                            "sourceRows": source_rows(entry, name_references, references),
                            "references": source_references(entry, name_references, references)})
    output_base = Path(output_root) if output_root else ROOT
    destination = output_base / OUT.relative_to(ROOT)
    destination.mkdir(parents=True, exist_ok=True)
    col_files = write_shards(destination, PREFIX, records, "col-partition")
    source_files = write_shards(destination, f"{PREFIX}-source-only", source_only, "source-only")
    all_files = col_files + source_files
    source_info = {
        "datasetId": COL_SOURCE, "title": api_metadata["title"],
        "version": API_VERSION, "versionDoi": API_VERSION_DOI,
        "doi": api_metadata["doi"], "issued": api_metadata["issued"],
        "citation": api_metadata["citation"], "contact": api_metadata.get("contact"),
        "editor": api_metadata.get("editor"), "contributor": api_metadata.get("contributor"),
        "geographicScope": api_metadata.get("geographicScope"),
        "taxonomicScope": api_metadata.get("taxonomicScope"),
        "temporalScope": api_metadata.get("temporalScope"),
        "metadataBytes": len(metadata_bytes), "metadataSha256": digest(metadata_bytes),
        "license": api_metadata["license"], "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
        "archiveUrl": ARCHIVE_URL, "archiveAttempt": ARCHIVE_ATTEMPT,
        "archivePath": "data/sources/archives/checklistbank-1112-hydrozoa-2026-09-01.zip",
        "metadataPath": "data/sources/archives/checklistbank-1112-hydrozoa-2026-09-01.metadata.json",
        "archiveBytes": len(raw), "archiveSha256": digest(raw), "members": members,
        "embeddedMetadata": {**embedded, "bytes": len(embedded_bytes), "sha256": digest(embedded_bytes)},
        "metadataConsistency": {
            "status": "mismatch" if any(api_metadata.get(key) != embedded.get(key)
                                         for key in ("doi", "version", "issued", "license")) else "match",
            "apiResponse": {key: api_metadata.get(key) for key in ("doi", "versionDoi", "version", "issued", "license")},
            "archiveEmbedded": {key: embedded.get(key) for key in ("doi", "version", "issued", "license")},
            "boundary": "The byte-pinned archive is the projection input; embedded metadata.yml is preserved byte-for-byte and the API metadata is retained separately.",
        },
    }
    descriptor = {
        "schemaVersion": 1, "recordType": "release-pinned-authority-archive-crosswalk",
        "id": "worms-hydrozoa-archive-crosswalk", "packageId": "sponges-cnidarians",
        "provider": "World Hydrozoa Database via ChecklistBank", "role": "authority-crosswalk",
        "rowEncoding": "json", "encoding": "gzip", "mediaType": "application/json",
        "colIdField": "colId", "totalCountField": "total", "source": source_info,
        "scope": {"colRootUsageIds": list(COL_ROOTS), "scientificName": "Hydrozoa",
                   "eligibleColSpecies": len(col), "sourceSpeciesRankTaxa": species_rank_count,
                   "sourceAcceptedSpecies": len(accepted), "excludedSourceProvisional": provisional_count},
        "matching": {"normalization": "NFC and Unicode-whitespace normalization only; exact authorship is required.",
                     "prohibited": "No fuzzy, case-folded, accent-folded, synonym, redirect or species-concept matching."},
        "counts": {"total": len(records), **counts, "sourceOnly": len(source_only),
                   "sourceOnlyRecords": len(source_only), "records": len(records) + len(source_only)},
        "files": col_files, "sourceOnlyFiles": source_files, "upstreamOnlyFiles": source_files,
        "evidenceBoundary": {"en": "Frozen exact WoRMS Hydrozoa nomenclatural/source projection for COL26.8 source-1112 Hydrozoa; not species-concept equivalence, a biological dossier, fossil evidence, distribution completeness or expert review.",
                              "zh": "冻结的 COL26.8 source-1112 Hydrozoa 精确 WoRMS 命名/来源投影；不是物种概念等同性、生物档案、化石证据、分布完整性或专家审查。"},
        "limitations": ["Source-only rows are relative only to the COL26.8 source-1112 Hydrozoa closure and retain null colId.",
                         "The source archive's accepted species are the exact rank/status/provisional subset; no global completeness is inferred.",
                         "Archive metadata DOI/version/license fields are preserved separately from current API metadata where they differ."],
        "sourceAudit": {"speciesRankTaxa": species_rank_count, "provisionalSpeciesExcluded": provisional_count,
                        "archiveEmbeddedMetadataSha256": digest(embedded_bytes)},
        "totalCompressedBytes": sum(item["bytes"] for item in all_files),
        "totalSourceBytes": sum(item["sourceBytes"] for item in all_files),
        "deliveryProfiles": {"web-light": {"mode": "summary-only", "records": 0, "files": [],
                                            "totalCompressedBytes": 0, "totalSourceBytes": 0},
                             "native-full": {"mode": "complete", "records": len(records) + len(source_only),
                                             "files": [item["path"] for item in all_files],
                                             "totalCompressedBytes": sum(item["bytes"] for item in all_files),
                                             "totalSourceBytes": sum(item["sourceBytes"] for item in all_files)}},
    }
    descriptor_path = destination / f"{PREFIX}-sidecar.json"
    descriptor_bytes = dump(descriptor, True)
    descriptor_path.write_bytes(descriptor_bytes)
    ledger = {"schemaVersion": 1, "importType": "COL26.8-to-WoRMS-Hydrozoa-1112-archive-projection",
              "source": source_info, "registryManifestSha256": col_sha, "registryInputs": col_inputs,
              "generatedBy": {"script": "scripts/build-worms-hydrozoa-source.py",
                              "scriptSha256": script_digest(Path(__file__)), "hashNormalization": "LF"},
              "outputs": {"descriptor": {"path": f"data/packages/invertebrata/sponges-cnidarians/nomenclature/{PREFIX}-sidecar.json",
                                           "bytes": len(descriptor_bytes), "sha256": digest(descriptor_bytes)},
                          "files": col_files, "sourceOnlyFiles": source_files, "upstreamOnlyFiles": source_files},
              "scopeAudit": {"colRootUsageIds": list(COL_ROOTS), "colSpecies": len(col),
                             "sourceSpeciesRankTaxa": species_rank_count, "sourceAcceptedSpecies": len(accepted),
                             "sourceOnly": len(source_only), "memberDigests": members}}
    ledger_path = output_base / LEDGER_PATH.relative_to(ROOT)
    ledger_path.parent.mkdir(parents=True, exist_ok=True)
    ledger_path.write_bytes(dump(ledger, True))
    print(json.dumps({"counts": descriptor["counts"], "sourceArchive": {"url": ARCHIVE_URL,
        "attempt": ARCHIVE_ATTEMPT, "bytes": len(raw), "sha256": digest(raw)},
        "metadataConsistency": source_info["metadataConsistency"],
        "shards": [{"path": item["path"], "records": item["records"], "bytes": item["bytes"],
                    "sourceBytes": item["sourceBytes"], "sha256": item["sha256"]} for item in all_files]},
                       ensure_ascii=False))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--archive", type=Path, default=ARCHIVE)
    parser.add_argument("--output-root", type=Path)
    args = parser.parse_args()
    project(args.archive, args.output_root)


if __name__ == "__main__":
    main()
