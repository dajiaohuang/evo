# Global palaeotopography and palaeobathymetry source audit

Audit baseline: Evo Atlas rc63 candidate, checked 2026-08-31.

## Scientific boundary

CAO2024 provides reconstructed vector geometry and observation/constraint points, not elevation or bathymetry. A land mask is categorical coverage, not terrain. Evo Atlas therefore keeps the PALEOMAP numeric grids as an independent model family and does not claim that PALEOMAP, CAO2024 or PBDB palaeocoordinates are spatially co-registered.

## Candidate decision

| Candidate | Scope / rights | Decision |
| --- | --- | --- |
| Scotese & Wright (2018) PALEOMAP PaleoDEMs v2, DOI `10.5281/zenodo.5460860` | Global 0–540 Ma elevation/depth grids; CC BY 4.0; immutable archive and official MD5 | Selected. All 109 official 5 Ma nominal frames are preserved. |
| Müller et al. ocean-crust age and bathymetry | Oceanic crust to 140 Ma; CC BY 3.0, but no complete land palaeotopography | Possible future ocean-only evidence layer, not a substitute. |
| PyBacktrack | Reproducible workflow, but outputs depend on selected inputs and plate model | Not used to fabricate a global series. |
| CAO2024 geometry and observations | 0–1,800 Ma vectors and points under CC BY 4.0, without elevation/depth variables | Explicitly excluded as a terrain source. |

## Pinned source and complete inventory

- Authors: Christopher R. Scotese and Nicky M. Wright.
- Record: PALEOMAP Paleodigital Elevation Models for the Phanerozoic, Zenodo v2.
- DOI / licence: `10.5281/zenodo.5460860`, CC BY 4.0.
- Archive: `Scotese_Wright_2018_Maps_1-88_6minX6min_PaleoDEMS_nc.zip`.
- Retrieval URL: `https://zenodo.org/api/records/5460860/files/Scotese_Wright_2018_Maps_1-88_6minX6min_PaleoDEMS_nc.zip/content`.
- Retrieval date: 2026-08-31.
- Bytes: `207,273,848`.
- Official MD5: `89eb50d8645707ab221b023078535bda`.
- Calculated SHA-256: `ab360184d8260a815ef5ed6b8b4e0abdbf99ef5ee8aa87dfd070af323ceb42da`.

The importer verifies 109 unique members at every nominal age from 0 through 540 Ma in 5 Ma steps. Every member is `NETCDF4_CLASSIC`, uses the shared 3601×1801, 0.1° global coordinate grid, and contains 6,485,401 finite, unmasked, exactly integral metre values representable as signed 16-bit integers. The canonical manifest retains each member's original path, uncompressed byte count, archive compressed byte count and SHA-256; it separately retains the filename nominal age and the verbatim NetCDF description plus parsed internal age. Disagreements are data, not errors to conceal: the nominal 65 Ma filename, for example, has internal description `PALEOMAP:KT_Boundary, 66 Ma`.

Each original grid is projected without numeric loss into deterministic gzip-compressed little-endian signed 16-bit row-major values. The complete independent set totals `168,418,483` compressed bytes and `1,413,817,418` decoded bytes. A measured 12-frame-checkpoint temporal-delta experiment totals `214,432,870` bytes, so it is rejected. Frames remain independently addressable and the client never needs unrelated ages for one view.

## Dual delivery profile

GitHub Pages has a 650 MiB deployment gate and does not publish the 109 full grids. Its `web-preview` release still covers every one of the 109 ages with a 1201×601, 0.3° grid made by selecting every third source row and column. This is exact decimation: there is no averaging, spatial interpolation or temporal interpolation. Every preview records its compressed/decoded byte count and SHA-256 plus the full source grid's decoded SHA-256. The complete preview set totals `24,847,071` compressed bytes and `157,352,618` decoded bytes.

Android and iOS use the `native-full` profile. Both bundles include all 109 original-resolution 3601×1801 0.1° lossless grids and the same complete metadata/hash inventory. Pages-light and browser-offline contain the lightweight previews and omit duplicate downloadable package ZIPs; local native-full builds can still generate those exports. The canonical repository retains both grid profiles. A profile label, resolution and total bytes are visible in the runtime manifest and UI, so the Web preview is not presented as native resolution.

The map chooses the nearest nominal 5 Ma frame, with ties resolved to the younger frame, and performs no temporal interpolation. A worker fetches and verifies only that frame, then dynamically colours visible canvas tiles. No 341-tile-per-frame pyramid is generated. Web Mercator display ends at approximately ±85.051° latitude; full source/native grids and the exact-decimation previews retain their polar rows even though the map cannot display the caps.

## Reproducibility

`scripts/import-scotese-paleodem.py` validates the official archive and regenerates the canonical full and preview grids plus the manifest. `scripts/paleotopography-series.test.mjs` decompresses all 218 payloads, verifies compressed and decoded hashes, and proves that every preview cell is the corresponding every-third full-grid cell. Runtime builders independently verify the chosen profile against the canonical manifest. Native tests verify that Android and iOS inventories point to the complete full-resolution series.

## Prohibited claims

- Do not call CAO2024 geometry, observations or land coverage palaeotopography.
- Do not describe any frame as direct measurement, ground truth, an uncertainty surface or a unique reconstruction.
- Do not silently choose the filename age over the internal description, or vice versa.
- Do not claim PALEOMAP, CAO2024 and PBDB reconstructions are co-registered.
- Do not infer missing ages, interpolate through time or present nearest-frame selection as a continuous terrain history.
- Do not call the 0.3° exact-decimation Web grids 0.1° full-resolution data.
