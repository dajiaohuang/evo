# Bryonames identifier sidecar

The `other-plants` resource pack includes a small, exact source-record projection
for the 698 strict accepted COL26.8 usages whose ChecklistBank source dataset is
the Bryophyte Nomenclator (Bryonames, dataset `170394`). The source archive is the
30 Aug 2026 ChecklistBank import (`10.48580/d8zmp.v93`, CC BY 4.0). Its archive
SHA-256, member checksums and the complete set of COL source-record request
responses are recorded in the package manifest and source evidence file.

Each row preserves the COL usage ID, the exact Bryonames source name-usage ID,
source URL, scientific name, authorship, status and reference identifiers. The
source relation endpoint is used only to establish the explicit COL-to-source
identifier link; there is no fuzzy or inferred name matching. The current source
archive is not asserted to be the July 2026 import attempt used when COL26.8 was
assembled, so this sidecar is a current source snapshot keyed to the release's
source dataset ID rather than a complete historical Bryonames archive.

Web/Pages publishes the descriptor and hashes only. The native-full profile
contains the single deterministic JSONL gzip shard. Linked papers, images and
other third-party material remain outside the projection.
