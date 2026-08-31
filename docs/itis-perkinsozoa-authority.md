# Perkinsozoa ITIS authority boundary

The release-pinned audit for the `protists-chromists` package records an
explicit empty partition for `Perkinsozoa`. Neither the complete COL26.8
hierarchy nor the ITIS SQLite export dated 2026-08-26 materializes an exact
`Perkinsozoa` root. COL has no exact root candidate; ITIS has neither an exact
root nor a `perkinso*` root candidate.

The package itself is the operational COL browse owner for exact roots `C`
(`Chromista`) and `Z` (`Protozoa`) and contains 61,518 strict accepted species,
but that broad package is not used as a Perkinsozoa proxy. The existing
Dinoflagellata partition is kept at COL root `622D3` (259 species; ITIS class
TSN `9874`), and the represented Apicomplexa partition is kept at COL root
`87FBN` (`Cryptosporidium`, 21 species; ITIS phylum TSN `553099`). Their rows
are not copied or widened into this sidecar; the recorded overlap is zero.

Consequently the sidecar has zero COL crosswalk rows, zero ITIS current-species
rows, zero synonym links and zero ITIS-only rows. It does not name-match
`Perkinsus`, Dinoflagellata, Apicomplexa or the full package, and it makes no
taxonomic inference. The import ledger records the source, hierarchy,
package, authority and existing-partition hashes.

GitHub Pages uses the descriptor only (`summary-only`). Android and iOS
`native-full` inventories carry the complete empty partition; there are no
non-empty rows to omit. This is a CC0 nomenclatural boundary record, not a
Perkinsozoa checklist, classification authority, phylogeny, species-concept
equivalence statement, biological dossier or scientific-review record.
