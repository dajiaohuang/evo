# Ascidiacea, Turbellaria and Rotifer World Catalogue source evidence

These projections improve original-source traceability for existing COL26.8
records. They do not add detailed biological dossiers or constitute independent
expert corroboration.

| Source | COL records | Exact accepted matches | Unmatched | Source-only | Row files |
|---|---:|---:|---:|---:|---:|
| Ascidiacea 1186 | 3,000 | 3,000 | 0 | 0 | 6 |
| Turbellaria 1193 | 6,508 | 6,493 | 15 | 30 | 7 |
| Rotifer World Catalogue 298081 | 2,467 | 2,467 | 0 | 0 | 1 |

The files contain 12,005 rows and occupy 2,152,610 compressed bytes. Original
archives and metadata remain separate build inputs. Every derived shard is at
most 2 MiB uncompressed; whole archive evidence is not part of the resident tree.
Pages publishes the scope/limitation summary without these row files.
Full-data builds retain all rows, including unmatched and unlinked outcomes.

Source-specific rights, pinned hashes and reproduction:

- [Ascidiacea source](sources/worms-ascidiacea-1186.md), [official source](https://www.checklistbank.org/dataset/1186/about).
- [Turbellaria source](turbellaria-1193-archive.md), [official source](https://www.checklistbank.org/dataset/1193/about).
- [Rotifer World Catalogue](rotifera-298081-archive.md), [official source](https://www.checklistbank.org/dataset/298081/about).

Each importer accepts `--output-root` as an isolated repository-mirror output
directory; inputs remain pinned to the checkout. After reproducing the sources,
`node scripts/integrate-worms-small-phyla-archives.mjs` publishes the descriptors.
The three Python source files use LF line endings, ensuring their byte hashes
survive Windows/Linux checkout.

The Ascidiacea class root is B8V3P; Tunicata contains another 78 Thaliacea and
68 Appendicularia records that are not mislabelled as unmatched Ascidiacea.
Turbellaria source ownership is filtered to dataset 1193 before using the
Platyhelminthes/Acoelomorpha hierarchy: 39 accepted source-owned species lack
the original subphylum assignment but remain included. Root ancestry is
nomenclatural routing, not a phylogenetic claim.

Raw `Name.status` in ColDP remains nomenclatural metadata, while nonprovisional
Taxon membership defines the imported accepted concepts. The distinct Rotifer
archive uses literal NameUsage `status=valid`; invalid/synonym/bare-name rows
remain in the original input, not silently promoted or discarded from it.

Replay tests compare complete canonical output and original row IDs, names,
authorship and citations. Delivery assertions use existing build/native helpers,
not human review or device certification. Backend/client protocol work remains
independent of this content revision.
