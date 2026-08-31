# Global palaeotopography and palaeobathymetry source audit

Audit baseline: Evo Atlas `5ad60dd15d39ebafa2911ddf28db705786a3756a`, checked 2026-08-31.

## Required scientific distinction

Evo Atlas already publishes six CAO2024 reconstructed geometry series and five CAO2024 observation/constraint point datasets. Coastlines, plate polygons, continental polygons, continent-ocean boundaries and static plate partitions are vector geometry. Palaeomagnetic, geochemistry and metamorphic-gradient records are points. Neither class contains an elevation or bathymetry value. A land mask is categorical coverage, not a terrain surface. This audit therefore accepts only a numeric, global palaeo-elevation/palaeo-depth grid as palaeotopography/palaeobathymetry.

## Candidate matrix

| Candidate | Primary source evidence | Scope and resolution | Rights and reproducibility | Decision |
| --- | --- | --- | --- | --- |
| Scotese & Wright (2018) PALEOMAP PaleoDEMs, Zenodo v2 | [Immutable record](https://zenodo.org/records/5460860), DOI `10.5281/zenodo.5460860`; [EarthByte resource page](https://www.earthbyte.org/paleodem-resource-scotese-and-wright-2018/); [technical report](https://zenodo.org/records/5460860/files/Scotese_Wright2018_PALEOMAP_PaleoDEMs.pdf?download=1) | Global 540–0 Ma palaeotopography and palaeobathymetry. The selected high-resolution archive contains 109 NetCDF frames on a 0.1° grid; values are metres. | Zenodo metadata states `cc-by-4.0`; EarthByte publishes a separate [CC BY 4.0 license file](https://www.earthbyte.org/webdav/ftp/Data_Collections/Scotese_Wright_2018_PaleoDEM/License.txt). The archive has an official MD5 and a stable content URL. | Selected for a one-frame, source-bounded prototype. |
| Müller et al. global ocean-crust age and bathymetry | [EarthByte dataset page](https://www.earthbyte.org/age-and-bathymetry-of-the-worlds-ocean-crust-for-the-last-140-million-years/) | Global oceanic crust to 140 Ma; bathymetry but no complete land palaeotopography. | EarthByte states CC BY 3.0, but the product cannot satisfy a global land-and-ocean terrain layer by itself. | Retain as a possible future ocean-only evidence layer, not a substitute for a global PaleoDEM. |
| PyBacktrack 1.5 | [Official Zenodo software release](https://zenodo.org/records/20809733), DOI `10.5281/zenodo.20809733`; [reproducibility package](https://zenodo.org/records/20810168), DOI `10.5281/zenodo.20810168` | Reproducible palaeobathymetry workflows and model-specific grids; not a ready 540–0 Ma global land-and-ocean elevation series. | GPL-2.0 software is clear, but every generated grid also depends on its selected inputs, plate model and application archive. | Valuable future workflow, not used to fabricate missing global palaeotopography. |
| Existing CAO2024 geometry and observations | `data/paleogeography/provenance.json` and `data/paleogeography/observations/manifest.json` | 0–1,800 Ma geometry plus source observations/constraints. | CC BY 4.0 and already pinned. No elevation or bathymetry variable exists. | Explicitly excluded as a terrain source. |

## Selected immutable source

- Record: PALEOMAP Paleodigital Elevation Models for the Phanerozoic, Zenodo v2.
- Authors: Christopher R. Scotese and Nicky M. Wright.
- DOI: `10.5281/zenodo.5460860`.
- License: CC BY 4.0 in both Zenodo metadata and EarthByte `License.txt`.
- Archive: `Scotese_Wright_2018_Maps_1-88_6minX6min_PaleoDEMS_nc.zip`.
- Official size: `207,273,848` bytes.
- Official MD5: `89eb50d8645707ab221b023078535bda`.
- Independently calculated archive SHA-256: `ab360184d8260a815ef5ed6b8b4e0abdbf99ef5ee8aa87dfd070af323ceb42da`.
- Retrieval URL: `https://zenodo.org/api/records/5460860/files/Scotese_Wright_2018_Maps_1-88_6minX6min_PaleoDEMS_nc.zip/content`.
- Retrieval date: 2026-08-31.

The full 207 MB archive is not copied into Evo Atlas. The audit verified its official MD5 before extracting exactly one reviewed member. The selected member is 25,992,503 bytes with SHA-256 `aa6724ba20b066ad3cbacf2f6f45b7a2d50ccf82c3f7034593c0481c82b07158`.

## Prototype frame and age boundary

The selected member filename is `Map16_PALEOMAP_6min_KT_Boundary_65Ma.nc`, but its NetCDF global description is `PALEOMAP:KT_Boundary, 66 Ma`. Evo Atlas retains and displays both statements. The canonical descriptor calls it the archive's nominal 65 Ma frame, discloses the internal 66 Ma description, and enables it only from 62.5 to 67.5 Ma. This half-cadence window is a UI selection boundary, not evidence that the surface is valid continuously through the interval.

The source frame is `NETCDF4_CLASSIC`, 3,601 longitudes by 1,801 latitudes, at 0.1° spacing. All 6,485,401 `z` values are finite, unmasked, exactly integral metres from −5,920 m to +3,600 m. The lossless canonical projection stores those values as deterministic gzip-compressed little-endian signed 16-bit integers in the original row order. Its decoded SHA-256 is `abfbdb0821999081dc5b0609532f415f73e13638091376e332cb25063edcaba9`.

## Delivery prototype

The canonical metre grid is transformed into a deterministic EPSG:3857 colour-tile pyramid at zoom levels 0–4. Zoom 4 samples at approximately 0.088° per pixel at the equator, close to the native 0.1° grid. The runtime publishes:

- the unchanged checksummed canonical packed grid;
- one maps-manifest frame descriptor with source, age-conflict and scientific boundaries;
- 341 checksummed 256×256 PNG tiles;
- a tile URL template used by the Web map only inside the stated age window; and
- the same inventory-addressed bytes in complete browser-offline, Android and iOS builds.

The Web Mercator visualization excludes the polar caps beyond approximately ±85.051°, while the canonical grid retains the polar rows. Tile colours and bilinear resampling are visualization choices, not new elevation evidence.

## Prohibited claims

- Do not call CAO2024 geometry, observation points or land coverage palaeotopography.
- Do not call the one-frame prototype continuous terrain coverage.
- Do not treat the archive filename's 65 Ma or internal 66 Ma description as silently superseding the other.
- Do not spatially co-register PALEOMAP terrain with CAO2024 geometry or PBDB palaeocoordinates without a separate model-compatibility analysis.
- Do not describe modelled elevation as direct measurement, ground truth, uncertainty bounds or a unique reconstruction.
- Do not infer missing frames, interpolate through time or create decorative relief from unrelated geometry.
