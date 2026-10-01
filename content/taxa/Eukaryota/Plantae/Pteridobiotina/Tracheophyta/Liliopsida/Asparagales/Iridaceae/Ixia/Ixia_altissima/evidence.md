---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ixia altissima Goldblatt & J.C.Manning
    rank: species
    sourceDatasetId: "2232"
    checkedAt: 2026-09-23
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and cultivar history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed; extant floras are not used to infer fossil records.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/6NBTL
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 6NBTL
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0001335355-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 6NBTL / WFO wfo-0001335355
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-2fd9e278-de4a-8514-aa3d-fe2b963bd71e
          metadataVariant: 0
          sourceKey: sanbi_15933_0
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-4d85e647-18c6-87c9-a02f-7cce759f31dd
          metadataVariant: 0
          sourceKey: sanbi_18638_0
          usage:
            locator: Ixia altissima Goldblatt & J.C.Manning account; SANBI/WFO archive rows 95091 (Diagnostic), source identifier 18638.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            sourceIds:
              - sanbi_15933_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/textZh
            sourceIds:
              - sanbi_15933_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/textZh
            sourceIds:
              - sanbi_18638_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - sanbi_15933_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
---

# Ixia altissima

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 6NBTL, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 6NBTL; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional account statements retain their source scope; wild, naturalised, and cultivated occurrences are separated only when stated in the cited text.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted name and authorship identity link only, not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Ixia altissima Goldblatt & J.C.Manning account; SANBI/WFO archive rows 85203 (Morphology), 84946 (Habitat), 84442 (Diagnostic), source identifier 15933.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plants 0.9-1.2 m high, stem surrounded at base by membranous cataphylls, simple or with 1-2 branches subtended by translucent, attenuate bracts and prophylls up to 8 mm long. Corm 15-18 mm diam., mature tunics not known. Leaves 4, lower 3 ± basal, reaching to ± middle of stem, blades linear to linear-sword-shaped, (3-)4-10 mm wide, firm-textured, margins and midrib and often a pair of secondary veins thickened and hyaline (at least when dry), uppermost leaf largely sheathing. Spike erect, elongate, weakly flexuose, 14-20-flowered, lateral spikes 6-14-flowered; bracts dry, membranous, translucent, flecked with brown in upper half, outer ± 7 mm long, usually with 3 prominent veins and 3-toothed, inner bracts ± as long as outer or slightly shorter, 2-veined and 2-toothed. Flowers rotate, mauve-pink; perianth tube narrowly funnel-shaped, ± 4 mm long, filiform and clasping style below, flared in distal ± 2 mm; tepals spreading, oblong-ovate, 12-13 x ± 4 mm. Stamens symmetrically disposed, erect; filaments filiform, inserted just above narrow part of tube, ± 4 mm long, ± white; anthers oblong, ± 3 mm long, erect, dehiscing fully by longitudinal slits, yellow. Style dividing opposite middle of anthers, branches ± 2 mm long, falcate, pale yellow, tubular, stigmatic apically, arching outward between or shortly overtopping anthers.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Ixia altissima Goldblatt & J.C.Manning 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 85203; source identifier 15933.0; cited publication: Goldblatt, P; Manning, JC. 2012. Systematics of the southern African genus Ixia (Iridaceae): 4. Revision of sect. Dichone. Bothalia 42(2): 87 - 110. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
Ixia altissima is a surprising plant, sometimes standing over 1 m in height and flowering late in the season, well into December. The anthers with vestigial connective and the involute style branches, stigmatic only at the tips, indicate its placement in sect. Dichone but the funnel-shaped perianth tube with the filaments inserted in the middle of the upper part of the tube is unusual for the section, most species of which have the tube virtually filiform throughout with the filaments inserted at the apex of the tube. The perianth tube, only ± 4 mm long, and the pale floral bracts are reminiscent of two Roggeveld Escarpment species, I. trifolia and I. rigida, the latter also flowering relatively late in the season, often in November. These species share relatively unspecialized, longitudinally dehiscent anthers. I. altissima seems most like I. rigida, also a tall plant, up to 600 mm high and sometimes flowering as late as November. The latter has flowers with a similarly funnel-shaped perianth tube 2-3 mm long and silvery translucent floral bracts, contrasting with the slightly longer perianth tube, ± 4 mm long, and shorter anthers, just 3 mm long, in I. altissima, which is also unusual in the section in having the style dividing opposite the middle of the anthers. A conservation status for I. altissima is suggested as Rare (R), in light of its evident rarity, but there is no current threat to the species.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Ixia altissima Goldblatt & J.C.Manning 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 84442; source identifier 15933.0; cited publication: Goldblatt, P; Manning, JC. 2012. Systematics of the southern African genus Ixia (Iridaceae): 4. Revision of sect. Dichone. Bothalia 42(2): 87 - 110. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/text -->
A tall plant, sometimes standing over 1 metre high and flowering late in the season, well into December, Ixia altissima has anthers with the vestigial connective and involute style branches, stigmatic only at the tips, characteristic of sect. Dichone but the funnel-shaped perianth tube with the filaments inserted in the middle of the upper part of the tube are unusual for the section, in which other species have the tube virtually filiform throughout. The perianth tube, only ± 4 mm long, and the pale floral bracts are reminiscent of two Roggeveld species of the section, I. rigida and I. trifolia, the former also flowering relatively late in the season, often in November. Both share with I. altissima relatively unspecialised, longitudinally dehiscent anthers. Ixia altissima seems most like I. rigida, also a tall plant, up to 600 mm high, which has flowers with a similarly funnel-shaped perianth tube 2-3 mm long and silvery-translucent floral bracts. This contrasts with the slightly longer perianth tube, ± 4 mm long, and shorter anthers just 3 mm long in I. altissima, which is also unusual in the section in having the style dividing opposite the middle of the anthers.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/textZh -->
SANBI 条目提供了 Ixia altissima Goldblatt & J.C.Manning 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/locator -->
SANBI/WFO archive Diagnostic row 95091; source identifier 18638.0; cited publication: Goldblatt, P; Manning, JC. 2020. Iridaceae of southern Africa. Strelitzia 42: 1 - 1159. South African National Biodiversity Institute, Pretoria. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and available diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Plants grow along stream banks or in marshy seeps on sandstone derived soil, at the Gonnafontein site among Kniphofia plants. The habitat remains moist at least until December and possibly later into the summer.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Plants grow along stream banks or in marshy seeps on sandstone derived soil, at the Gonnafontein site among Kniphofia plants. The habitat remains moist at least until December and possibly later into the summer.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 84946; source identifier 15933.0; cited publication: Goldblatt, P; Manning, JC. 2012. Systematics of the southern African genus Ixia (Iridaceae): 4. Revision of sect. Dichone. Bothalia 42(2): 87 - 110. [CC BY]
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The cited habitat excerpt does not establish seasonality, localities, interaction networks, or ecology across the full species range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
This dossier has source-backed morphology/diagnostics and habitat only; life history, evolution, full distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A systematic literature search and comparison of the regional source concept against the complete COL26.8 species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
