---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Syringodea bifucata M.P.de Vos
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
      wild: Claims concern wild populations described by the cited regional flora or national assessment.
      domesticated: Cultivation is not covered by cited claims; no domestication claim is made.
      fossil: No fossil occurrence claim is made; fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 21
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/542J7
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted taxon usage 542J7
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
        - referenceId: ref-b7a0da64-36cd-8130-ab0c-cf9d69929170
          metadataVariant: 1
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0000786154-2026-06
            version: WFO 2026-06, issued 2026-06-21; DOI 10.5281/zenodo.20782718
            locator: Exact accepted COL 542J7 / WFO wfo-0000786154 crosswalk
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
        - referenceId: ref-240f872a-55ec-83ef-ae4f-5731c9346cae
          metadataVariant: 1
          sourceKey: sanbi-archive
          usage:
            locator: Morphology row 98943; diagnostic row 95193; habitat row 97655
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
        - referenceId: ref-84fb6a85-f27e-8ebb-a977-dac442ef625a
          metadataVariant: 0
          sourceKey: sanbi2019
          usage:
            locator: Syringodea bifucata M.P.de Vos account, flowering-time entry
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
        - referenceId: ref-2c944c2f-979a-8dda-aa6f-0ea2d88dbabf
          metadataVariant: 0
          sourceKey: redlist
          usage:
            locator: National status, criteria, assessment date, range, and population/habitat fields where cited
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, morphology row 98943
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, diagnostic row 95193
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - sanbi2019
            locator: Strelitzia 41(3), species flowering-time entry
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, habitat row 97655
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/textZh
            sourceIds:
              - redlist
            locator: South African national distribution and geographic range fields
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
      conservation:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/textZh
            sourceIds:
              - redlist
            locator: National category, criteria, assessment date, scope, and stated caveats.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Syringodea bifucata

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 542J7, name, authorship, rank, and source dataset 2232; exact accepted-name-and-authorship WFO 2026-06 crosswalk to wfo-0000786154.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Syringodea bifucata M.P.de Vos as represented by COL26.8 usage 542J7; biological claims retain the cited South African regional scope.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and source dataset only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Identity-link evidence only, not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
South African flora morphology, diagnostic, and habitat fields only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Eastern Cape regional flora evidence; phenology does not imply year-round or global flowering.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
South African national assessment only; not a global status.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The SANBI e-Flora morphology field describes Syringodea bifucata M.P.de Vos: plants 60–250 mm high, with 4–8 linear-channelled leaves and pale to deep violet or sometimes white flowers with a yellow or orange throat.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI e-Flora 形态字段记载 Syringodea bifucata M.P.de Vos：株高 60–250 mm，具 4–8 枚线形槽状叶；花色由浅紫至深紫、偶为白色，喉部黄色或橙色。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
SANBI e-Flora source 18638.0 in the South African flora archive; a regional descriptive field, not a global synthesis or current-population estimate.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
The archive distinguishes it from Syringodea concolor by its yellow or orange throat and coarsely sculptured brown seeds, and from S. flanaganii by generally larger flowers.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
档案以黄色或橙色花喉及粗雕纹的褐色种子将其与 Syringodea concolor 区分，并以通常较大的花与 S. flanaganii 区分。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
SANBI e-Flora source 18638.0 in the South African flora archive; a regional descriptive field, not a global synthesis or current-population estimate.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Wild regional-flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Regional evidence is partial; a scope-complete review of morphology has not been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The 2019 Eastern Cape flora reports flowering September–June; this is a regional flowering-time observation, not a full life-history study.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
2019 年东开普植物志记载花期为 9 月至次年 6 月；这是区域花期记载，不构成完整生活史研究。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Eastern Cape flora treatment published 2019; regional flowering season only.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Regional evidence is partial; a scope-complete review of lifeHistory has not been completed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Washes or seasonal drainage lines on clay flats in karroid scrub and open grassland.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
SANBI e-Flora 生境字段记载：喀拉哈里灌丛和开阔草地中的黏土平地冲沟或季节性排水线。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
SANBI e-Flora source 18638.0 in the South African flora archive; a regional descriptive field, not a global synthesis or current-population estimate.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Regional evidence is partial; a scope-complete review of ecology has not been completed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The SANBI national assessment reports the species scattered through the eastern Great and Upper Karoo, from Willowmore and De Aar through central Eastern Cape and central Free State to Heidelberg in Gauteng.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
SANBI 南非国家评估记载其散布于东部大卡鲁和上卡鲁，从 Willowmore、De Aar 经东开普中部和自由州中部至豪登省 Heidelberg。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
SANBI national assessment 2023-02-14; distribution within South Africa only.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Regional evidence is partial; a scope-complete review of distribution has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The SANBI national assessment lists Least Concern (LC), assessed 2023-02-14; it notes widespread occurrence despite local habitat loss. This is a South African national status, not a global assessment.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 南非国家评估列为无危（LC），评估日期 2023-02-14；页面指出该种分布广，尽管部分栖地损失仍然常见。这是南非国家等级，不是全球评估。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
SANBI South African national assessment dated 2023-02-14; not global.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild South African populations within the national assessment scope.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Regional evidence is partial; a scope-complete review of conservation has not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The available evidence is regional; evolution and fossil occurrence remain unassessed, and not all themes have a scope-complete evidence review.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence search or external expert review has been completed.
<!-- /evo:text -->
