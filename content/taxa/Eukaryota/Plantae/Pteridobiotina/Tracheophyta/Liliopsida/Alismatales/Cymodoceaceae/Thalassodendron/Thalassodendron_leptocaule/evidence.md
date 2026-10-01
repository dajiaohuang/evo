---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Thalassodendron leptocaule Maria C.Duarte, Bandeira & Romeiras
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
            url: https://www.checklistbank.org/dataset/316115/taxon/55ZJ7
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 55ZJ7
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
            url: https://list.worldfloraonline.org/wfo-0001334137-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 55ZJ7 / WFO wfo-0001334137
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
        - referenceId: ref-cf7469db-4fe6-8bbb-a80a-b85fd09f36fb
          metadataVariant: 0
          sourceKey: sanbi_18002_0
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
              - sanbi_18002_0
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
              - sanbi_18002_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
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
              - sanbi_18002_0
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

# Thalassodendron leptocaule

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 55ZJ7, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 55ZJ7; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Thalassodendron leptocaule Maria C.Duarte, Bandeira & Romeiras account; SANBI/WFO archive rows 104833 (Morphology), 104793 (Habitat), 104726 (Diagnostic), source identifier 18002.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Perennial, dioecious seagrass; rhizomes with sympodial branching, brown, terete, gnarled, to 3mm diam.; vertical rhizomes rare; roots usually much branched, 2 at the stem-bearing internode (4th), 2 at the preceding internode (3rd), and none at the 1st and 2nd internodes; internodes much condensed (0.5-)1-6 mm. Scales ca. 5 mm, broadly ovate, early deciduous, dark brown; apex obtuse and apiculate; stems erect, 1(2), unbranched or little branched, to 70 cm, 1-2 mm width, with 4 or 5(6) leaves per shoot; leaf sheaths 10-30 x 3-9 mm, cuneate at the base, cream at the base becoming greenish (similar to leaf blade) to the top, with obtuse auricules, caducous, leaving circular scars irregularly spaced, to 10 mm apart; tanniniferous cells usually inconspicuous, margins scarious; ligule obtuse, 0.5-0.75 mm high; leaf blade usually falcate, 3-9 x 0.3-0.7 cm, greenish brown in dried condition; distal margins irregularly serrulate; veins (7)11 to 15(17), united below leaf apex; median and lateral veins slightly prominent; 15 to 23 rows of cells between secondary veins; leaf epidermis cells elongate and rectangular with anticlinal walls sinuous in surface view; leaf apex obtuse, slightly emarginate, denticulate, except at the middle zone; apical teeth to 0.5 mm high, acute or truncate. Squamules in leaf axils in 2 opposite groups of (1)2 to 4 squamules each, of unequal size, the longer about 0.75-2 mm. Male and female flowers solitary on short lateral shoots near the base of leaf clusters. Male flower enclosed in a leafy bract, sessile; anthers ca. 2.5 mm, 2 dorsally connate over entire length and attached at the same height with a short terminal appendage (ca. 0.5 mm), entire. Female flower enclosed in 3 leafy bracts, all differentiated into a sheath and a blade, with a ligule 0.5-0.75 mm; 1st bract outermost with a sheath 13-15 mm, the blade slightly smaller; 2nd bract with a sheath ca. 16-22 mm, the blade slightly shorter or longer; 3rd bract 14-20 mm, the blade equal to or longer, slightly falcate with the apex acute, obscurely veined, somewhat fleshy; ovary ellipsoid, 1.5-2 mm; style divided into 2 stigmatic arms 12-16 mm, strap-shaped. Seedlings viviparous.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Thalassodendron leptocaule Maria C.Duarte, Bandeira & Romeiras 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 104833; source identifier 18002.0; cited publication: Duarte, MC; Bandeira, SO; Romeiras, MM. 2012. Systematics and ecology of a new species of seagrass (Thalassodendron, Cymodoceaceae) from Southeast African coasts. Novon 22: 16 - 24. [doi: 10.3417/2010079]. [All rights reserved]
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
Haec species Thalassodendro ciliato (Forssk.) Hartog affinis, sed ab eo rhizomate usque ad 3 mm diametro, internodiis (0.5)1-6 mm longis, foliis lamina 3-9 cm longa et 3-7 mm lata, epidermidis cellulis pariete anticlinali flexuoso, floribus masculinis in bractea solitaria foliosa inclusis atque floribus femineis in bracteis 3 foliaceis inclusis differt.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Thalassodendron leptocaule Maria C.Duarte, Bandeira & Romeiras 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 104726; source identifier 18002.0; cited publication: Duarte, MC; Bandeira, SO; Romeiras, MM. 2012. Systematics and ecology of a new species of seagrass (Thalassodendron, Cymodoceaceae) from Southeast African coasts. Novon 22: 16 - 24. [doi: 10.3417/2010079]. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and available diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Thalassodendron leptocaule occurs from the intertidal area to the subtidal fringe, usually in rocky pools, in crevices and creeks, and on calcareous sandstone, and is exposed to severe wave action. The species occurs in habitats that are permanently submerged or partially exposed at low water to ordinary spring tides and water temperature in the distribution area ranges between ca. 27°C (at Maputo latitude) and 26°C in the south (at Richards Bay latitude) during the warmest month (February).
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Thalassodendron leptocaule occurs from the intertidal area to the subtidal fringe, usually in rocky pools, in crevices and creeks, and on calcareous sandstone, and is exposed to severe wave action. The species occurs in habitats that are permanently submerged or partially exposed at low water to ordinary spring tides and water temperature in the distribution area ranges between ca. 27°C (at Maputo latitude) and 26°C in the south (at Richards Bay latitude) during the warmest month (February).
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 104793; source identifier 18002.0; cited publication: Duarte, MC; Bandeira, SO; Romeiras, MM. 2012. Systematics and ecology of a new species of seagrass (Thalassodendron, Cymodoceaceae) from Southeast African coasts. Novon 22: 16 - 24. [doi: 10.3417/2010079]. [All rights reserved]
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
