# Metamonada ITIS/COL authority boundary

This release-pinned sidecar audits the requested `Metamonada` boundary against
COL26.8 (2026-08-20) and the official ITIS SQLite export dated 2026-08-26.

Neither pinned source materializes an exact `Metamonada` root. The ITIS export
does not contain an exact `Metamonada` or `Metamonad*` name. It does contain
historical neighboring names such as `Diplomonadida` (TSN 43835), whose parent
chain includes `Zoomastigophora` (TSN 43810), `Mastigophora` (TSN 43782), and
`Sarcomastigophora` (TSN 43781). Those names are audit context only: they are
not treated as a Metamonada proxy, and no rows are inferred from them.

COL26.8 likewise has no exact accepted `Metamonada` hierarchy node in its
registry. The combined Protists/Chromists package remains the declared
`Chromista`/`Protozoa` browsing boundary, not a substitute root for this
request.

Accordingly, this sidecar has zero COL crosswalk rows and zero ITIS-only rows.
GitHub Pages receives only the descriptor summary. Android and iOS include the
complete empty partition, which is complete because the pinned authorities
provide no exact eligible root. The sidecar is a nomenclatural boundary audit,
not a global Metamonada checklist, final classification authority, phylogeny,
species-concept equivalence statement, biological dossier, or scientific
review.

Sources and licensing:

- Catalogue of Life 2026-08-20, CC BY 4.0, DOI `10.48580/dgywk`.
- Integrated Taxonomic Information System export `itisSqlite082626`, CC0 1.0,
  DOI `10.5066/F7KH0KBK`.
- Reproduction inputs, SHA-256 digests, exact-root queries, and the generated
  descriptor digest are recorded in
  `data/sources/itis-metamonada-sidecar-import-ledger.json`.

If a later pinned release exposes an exact Metamonada root, regenerate only
after auditing its rank, accepted status, descendants, matching policy, and
overlap with every existing protist/chromist partition.
