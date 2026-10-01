---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Triraphis ramosissima Hack.
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
      domesticated: Cultivation and domestication are not covered by the cited material; no conclusion about either is made.
      fossil: No fossil claim is made; fossil occurrence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-b7a0da64-36cd-8130-ab0c-cf9d69929170
          metadataVariant: 3
          sourceKey: col-wfo-crosswalk
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://list.worldfloraonline.org/wfo-0000904876-2026-06
            version: COL26.8 released 2026-08-20; WFO 2026-06 snapshot; local crosswalk record 59226
            locator: COL ID 59226; exact accepted-name-and-authorship mapping to WFO wfo-0000904876
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
        - referenceId: ref-8df2e3e0-d3d3-8b08-aeb1-59f9ee8269be
          metadataVariant: 0
          sourceKey: sanbi-grasses
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
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
        - referenceId: ref-dfad3127-afab-857b-a2ff-e6d150549613
          metadataVariant: 0
          sourceKey: sanbi-redlist
          usage:
            locator: Species account 1181-6; assessment date 2005-06-30; assessment history cites Raimondo et al. 2009, Strelitzia 25.
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
              - sanbi-grasses
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
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
              - sanbi-grasses
            locator: Strelitzia 36 (2015), species account p. 728; flowering statement.
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
              - sanbi-grasses
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/textZh
            sourceIds:
              - sanbi-grasses
            locator: Strelitzia 36 (2015), species account p. 728; regional distribution statement.
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
              - sanbi-redlist
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/locator
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

# Triraphis ramosissima

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 59226, name, authorship, rank and source dataset 2232 checked in the pinned registry; WFO 2026-06 crosswalk maps the same COL ID by exact accepted-name-and-authorship to wfo-0000904876.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Triraphis ramosissima Hack. as represented by COL26.8 usage 59226. SANBI claims remain attributed to the southern African treatment and its taxonomic concept; exact nomenclatural mapping alone does not prove full circumscription equivalence.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims describe observations in a regional flora treatment; source wording does not consistently distinguish native wild from naturalised populations.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
COL26.8 accepted usage and pinned WFO plant crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Exact accepted identity for Triraphis ramosissima Hack.; mapping does not by itself establish full species-concept equivalence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Strelitzia 36 (2015), species account p. 728; SANBI archive Morphology row 80470 and Habitat row 80190, source identifier 15590.0. Archive citation preserves the publication page range.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Southern African grass flora treatment. Its regional ranges and ecological accounts are not represented as global or exhaustive.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Historical, automated South African national screening record only; not a current detailed or global evaluation.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The account describes a bushy, tufted, rhizomatous perennial 250–810 mm tall, with profusely branching culms and a contracted inflorescence.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
该条目记载其为灌丛状丛生根茎多年生草本，高 250–810 mm，茎秆多分枝，花序收缩。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Strelitzia 36 (2015), species account p. 728; SANBI archive Morphology row 80470 and Habitat row 80190, source identifier 15590.0.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional southern African grass treatment published in 2015; morphology statements are limited to the printed species account and do not imply global coverage.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; it does not consistently distinguish native wild and naturalised populations, and does not cover cultivation.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Population, developmental, sexual, geographic and diagnostic variation have not been comprehensively reviewed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The account reports flowering from February through June.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
该条目记载花期为 2 月至 6 月。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Regional southern African grass treatment published in 2015; flowering phenology statements are limited to the printed species account and do not imply global coverage.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Regional flora account; it does not consistently distinguish native wild and naturalised populations, and does not cover cultivation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Reproduction, pollination, germination, dormancy, recruitment and full life-cycle evidence remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The account records sandy or calcareous soils, rocky slopes, floodplains and dry watercourses.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该条目记载其生于沙质或钙质土、岩质坡地、洪泛平原及干涸水道。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Strelitzia 36 (2015), species account p. 728; SANBI archive Morphology row 80470 and Habitat row 80190, source identifier 15590.0.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional southern African grass treatment published in 2015; habitat statements are limited to the printed species account and do not imply global coverage.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; it does not consistently distinguish native wild and naturalised populations, and does not cover cultivation.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Seasonal use, measured environmental conditions, species interactions and populations beyond these regional accounts remain unreviewed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The regional account marks it endemic within its southern African treatment and lists N and NC; this does not establish a complete global range.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
该区域植物志在其南部非洲处理范围内标注其为特有，并列出 N、NC；这不能证明完整全球分布。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Regional southern African grass treatment published in 2015; distribution statements are limited to the printed species account and do not imply global coverage.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Regional flora account; it does not consistently distinguish native wild and naturalised populations, and does not cover cultivation.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A dated, specimen-backed assessment of the complete native, introduced and cultivated range has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The SANBI Red List page reports an automated South African Least Concern assignment dated 2005-06-30, linked to the 2009 Red List of South African Plants. This is a historical national screening outcome, not a current detailed or global assessment.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 红色名录页面记载，南非曾于 2005-06-30 自动赋予该种无危状态，并关联 2009 年《南非植物红色名录》。这是历史性的国家筛查结果，不是当前详细评估或全球评估。
<!-- /evo:text -->

## conservation / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/locator -->
SANBI Red List species account 1181-6; assessment date 2005-06-30; assessment history cites Raimondo et al. 2009, Strelitzia 25.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
South Africa national record, assessment date 2005-06-30; SANBI page version 2024.1 accessed 2026-09-23.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild South African conservation-screening record; no cultivated, introduced-range or global assessment is inferred.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The record is historical and automated; a current, detailed, range-wide assessment and underlying population evidence have not been reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only regional, source-bounded material partially supports some facets; remaining facets have not been assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature, range, fossil or conservation review or external expert assessment has been completed.
<!-- /evo:text -->
