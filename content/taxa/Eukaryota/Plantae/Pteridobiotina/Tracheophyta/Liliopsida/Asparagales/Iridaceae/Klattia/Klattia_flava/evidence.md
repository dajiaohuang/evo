---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Klattia flava (G.J.Lewis) Goldblatt
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
      wild: Claims concern wild populations described by the regional flora or South African national assessment.
      domesticated: Cultivation is not covered by the cited claims; no domestication claim is made.
      fossil: No fossil claim is made; fossil occurrence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 18
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            url: https://www.checklistbank.org/dataset/316115/taxon/6NKCG
            locator: Accepted taxon usage 6NKCG
          originalFields:
            - id
            - title
            - version
            - license
            - scope
            - url
            - locator
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            url: https://list.worldfloraonline.org/wfo-0000784557-2026-06
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator: Crosswalk row COL 6NKCG / WFO wfo-0000784557
          originalFields:
            - id
            - title
            - version
            - license
            - scope
            - url
            - locator
        - referenceId: ref-a2c82bbf-bb8f-8117-a1e3-5aefbf03dc12
          metadataVariant: 0
          sourceKey: sanbi2020
          usage:
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            locator: Klattia account, printed p. 57; morphology, flowering time, and distribution and ecology paragraphs
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - scope
            - locator
        - referenceId: ref-c052dd0c-fef1-8840-a2f5-bcd72a3557ec
          metadataVariant: 0
          sourceKey: redlist-6nkcg
          usage:
            locator: National status and criteria; assessment date; justification; distribution; habitat and ecology; population trend
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
              - sanbi2020
            locator: Strelitzia 42 (2020), Klattia account, printed p. 57, species morphological description
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
              - sanbi2020
            locator: Strelitzia 42 (2020), Klattia account, printed p. 57, flowering-time entry
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
              - sanbi2020
            locator: Strelitzia 42 (2020), Klattia account, printed p. 57, distribution and ecology
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
              - sanbi2020
            locator: Strelitzia 42 (2020), Klattia account, printed p. 57, distribution and ecology
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
              - redlist-6nkcg
            locator: National status and criteria; assessment date; justification; distribution; habitat and ecology; population trend
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

# Klattia flava

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 6NKCG, name, authorship, rank, and source dataset 2232 checked against the pinned taxon; WFO 2026-06 crosswalk maps it to wfo-0000784557 by exact accepted name and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Klattia flava (G.J.Lewis) Goldblatt as represented by COL26.8 usage 6NKCG; SANBI regional flora and national assessment retain their separate southern African/South African scopes.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, and source-dataset identity only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Identity-link evidence only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional taxonomic flora treatment of southern African Iridaceae; species accounts are not global assessments.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
South African national assessment only; assessment date is distinct from the dataset version and does not establish a current global status.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
An evergreen shrub about 0.9–1.3 m tall, with long, mostly straight stems and glaucous to pale-green leaves that may be densely papillose. The yellow tepals are about 42–48 mm long; the style ultimately projects about 3–4 mm beyond them.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
常绿灌木，高约 0.9–1.3 m，茎长且多直立；叶呈带白粉至浅绿色，部分种群叶面密布乳突。黄色花被片长约 42–48 mm；花柱最终超出花被片约 3–4 mm。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Species-level account in a 2020 southern African flora; locality and period are limited to the source account.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild regional flora/account evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The regional or national account is partial evidence only; a systematic, scope-complete review of morphology for this species has not been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The 2020 account reports flowering mid-November–December; it does not provide a full life-cycle or reproductive study.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
2020 年账户记载其花期为 mid-November–December；账户未提供完整生活史或繁殖研究。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Species-level account in a 2020 southern African flora; locality and period are limited to the source account.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild regional flora/account evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The regional or national account is partial evidence only; a systematic, scope-complete review of lifeHistory for this species has not been completed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The 2020 account records damp slopes, seeps and gullies, often near perennial streams above 800 m, in the Hottentots Holland, Groenland and Bain’s Kloof mountains of the Western Cape; summer cloud and precipitation are frequent there.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
2020 年账户记载其生于西开普 Hottentots Holland、Groenland 与 Bain’s Kloof 山地海拔 800 m 以上的湿坡、渗水处和沟谷，常靠近常年溪流；当地夏季云雾和降水频繁。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Species-level account in a 2020 southern African flora; locality and period are limited to the source account.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild regional flora/account evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The regional or national account is partial evidence only; a systematic, scope-complete review of ecology for this species has not been completed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The 2020 flora account centres the species around Grabouw in the southwestern Western Cape, in the Hottentots Holland and Groenland mountains, with a northern extension to the Bain’s Kloof mountains. This is a dated regional account, not a current global range inventory.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
2020 年植物志将其分布中心记为西开普西南部 Grabouw 周边的 Hottentots Holland 与 Groenland 山地，向北延伸至 Bain’s Kloof 山地。这是有年代的区域性记载，不是当前全球分布清单。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Species-level account in a 2020 southern African flora; locality and period are limited to the source account.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild regional flora/account evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The regional or national account is partial evidence only; a systematic, scope-complete review of distribution for this species has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
SANBI lists the South African national assessment as Vulnerable D1+2, assessed 2007-07-28 and shown in Red List version 2024.1. The assessment describes a South African endemic with EOO 400 km², AOO under 20 km² and fewer than 1,000 mature individuals; groundwater extraction is a potential threat and the recorded trend is stable.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 南非国家评估列为易危 D1+2，评估日期为 2007-07-28，页面列入 Red List 2024.1。评估记载其为南非特有种，分布范围（EOO）400 km²、占域面积（AOO）小于 20 km²、成熟个体少于 1,000；地下水抽取是潜在威胁，所记录的趋势为稳定。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
South African national assessment dated 2007-07-28; page version 2024.1. This is not a global assessment or a new assessment in 2024.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild South African populations within the assessment scope.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The regional or national account is partial evidence only; a systematic, scope-complete review of conservation for this species has not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Five facets have limited regional or national evidence; evolution and fossil occurrence remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence search, fossil review, or external expert review has been completed.
<!-- /evo:text -->
