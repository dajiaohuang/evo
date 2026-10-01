---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Klattia partita Baker
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3R96F
            locator: Accepted taxon usage 3R96F
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
            url: https://list.worldfloraonline.org/wfo-0000784551-2026-06
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator: Crosswalk row COL 3R96F / WFO wfo-0000784551
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
        - referenceId: ref-efaca7bb-0e60-8d4c-ae11-eeda15b98b6c
          metadataVariant: 0
          sourceKey: redlist-3r96f
          usage:
            locator: National status and criteria; assessment history; distribution; habitat and ecology; population trend
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
              - redlist-3r96f
            locator: National status and criteria; assessment history; distribution; habitat and ecology; population trend
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

# Klattia partita

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 3R96F, name, authorship, rank, and source dataset 2232 checked against the pinned taxon; WFO 2026-06 crosswalk maps it to wfo-0000784551 by exact accepted name and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Klattia partita Baker as represented by COL26.8 usage 3R96F; SANBI regional flora and national assessment retain their separate southern African/South African scopes.
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
An evergreen shrub up to about 1 m, arising from a woody base, with deep-green, narrowly lanceolate leaves about 90–120 mm long and generally 3–5 mm wide. Its dark blackish-purple tepals are unusually long (about 55–64 mm); the style is shorter than or nearly as long as the tepals.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
常绿灌木，高至约 1 m，基部木质；叶深绿、狭披针形，约长 90–120 mm、宽 3–5 mm。花被片呈深黑紫色，长度约 55–64 mm；花柱短于或近等长于花被片。
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
The 2020 account reports flowering October–December; it does not provide a full life-cycle or reproductive study.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
2020 年账户记载其花期为 October–December；账户未提供完整生活史或繁殖研究。
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
The 2020 account places this montane endemic on cool, south-facing seep and marsh margins above 600 m, in the Western Cape. It describes year-round moisture and good drainage as apparent survival requirements; sunbird adaptation is presented as a belief that remains unconfirmed.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
2020 年账户记载该西开普山地特有种生于海拔 600 m 以上较凉爽的南向坡面渗水处和沼泽边缘；全年湿润且排水良好似乎是其生存条件。账户称其可能适应由太阳鸟传粉，但尚未证实。
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
The 2020 flora account reports scattered Western Cape localities from the Kogelberg–Hottentots Holland mountain complex east to the Langeberg near Riversdale. It explicitly regards records from the Cape Peninsula and Clanwilliam as incorrect; this is a regional flora summary, not a current global range inventory.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
2020 年植物志记载其在西开普 Kogelberg–Hottentots Holland 山系至 Riversdale 附近 Langeberg 有零散分布，并明确认为开普半岛与 Clanwilliam 的记录有误。这是区域植物志摘要，不是当前全球分布清单。
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
SANBI lists the South African national assessment as Least Concern (LC), assessed 2018-10-02. The assessment describes a South African endemic in the Western Cape, known from at least 20 locations, with stable trend; it notes potential groundwater abstraction and invasive-plant threats.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 南非国家评估列为无危（LC），评估日期为 2018-10-02。该评估将其记为西开普南非特有种，至少已知 20 个地点，种群趋势稳定；潜在威胁包括地下水抽取和入侵植物。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
South African national assessment dated 2018-10-02; page version 2024.1. This is not a global assessment or a new assessment in 2024.
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
