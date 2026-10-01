---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Vultur gryphus Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 安第斯神鹫
      en: Andean Condor
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-f083b029-000d-83ff-aa0d-304a8b3b57b8
          metadataVariant: 0
          sourceKey: kohn2016
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/5BSLM
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Vultur gryphus Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild: Wild-born condor observations and Ecuador field surveys are identified separately and remain geographically limited.
      domesticated: Captive breeding or released birds are not treated as wild-born samples unless a source explicitly distinguishes them.
      fossil: Fossil material, fossil taxonomy, and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 13
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/5BSLM
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Pinned accepted taxon usage 5BSLM; local node fields name, authorship, rank, status, sourceDatasetId, and parentId
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-e8ffeb59-a720-8eac-af67-2e0c283fb677
          metadataVariant: 0
          sourceKey: kohn2016
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            licenseAssessment: item-level-verified
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-fc94dd27-960a-87c5-abb5-1611f1a0514f
          metadataVariant: 0
          sourceKey: restrepo2024
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            licenseAssessment: unknown
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
    facets:
      morphology:
        status: not-assessed
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
              - restrepo2024
            locator: Abstract; Results; Table 1; Discussion, egg-laying and nestling period
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
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
              - restrepo2024
            locator: Abstract; Results; Discussion, interspecific interactions and sampling effort
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
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
              - kohn2016
            locator: Materials and Methods, Geographic distribution and Gap analysis; Results, Geographic distribution; Fig. 1
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
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
              - kohn2016
            locator: Abstract; census methods; Results, Population size and Population viability; Discussion, Population viability
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Vultur gryphus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
CC BY 4.0 厄瓜多尔研究；模型输入为七只追踪个体和 60 个栖息点，普查为 2015 年两日同步计数。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
CC BY 4.0 Ecuador study; models used seven tagged birds and 60 roost locations, and the census was a synchronized two-day count in 2015.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank, and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Pinned COL26.8 hierarchy node 5BSLM was checked for exact accepted name, authorship, species rank, accepted status, and sourceDatasetId against the release registry. Each biological article explicitly names Vultur gryphus; none assigns the COL usage ID, so the record makes no additional synonym or population-to-global concept claim.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal accepted species usage 5BSLM in COL26.8 (parent 87CF). Source claims retain their study population, locality, and dated evaluation scope; they are not extended to the whole range.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source dataset 2144 ITIS
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity, authorship, rank, status, parent, and source-dataset relation only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Materials and Methods, Geographic distribution and Gap analysis; census methods; Results, Geographic distribution and Population size; Discussion, Population viability
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary field survey, species distribution model, and population viability analysis focused on Ecuador; census occurred 2015-09-29 to 2015-09-30 and estimates must not be represented as current global totals or a current formal status assessment.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Materials and Methods, Study Area and Methodology; Results; Discussion, parental care and interspecific interactions
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary observations at eight wild-born nests in Ecuador between 2009 and 2021, including 22 egg-laying attempts, three pairs observed for parental care, and one pair monitored for a decade; not a range-wide demographic study.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Between 2009 and 2021, researchers compiled 22 egg-laying attempts at eight Ecuadorian nests; 16 recorded nestlings remained in nests for six to ten months before first flight. A single monitored pair had a reported mean interval of 15 months between eggs, which is not a species-wide reproductive interval.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
研究者在 2009 至 2021 年间整理了厄瓜多尔八个巢址的 22 次产卵记录；16 只记录到的雏鸟在首次飞行前于巢中停留六至十个月。一个持续监测配对的平均产卵间隔为 15 个月，但这不能代表全种群的繁殖间隔。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Eight nests in the Ecuadorian Andes; observations 2009-2021; the 15-month interval is from the Peñón del Isco pair monitored 2011-2021.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild-born Andean Condors; nest-based observations.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Age at maturity, survival, lifespan, demographic rates, and geographic variation are not synthesized; several observations are non-systematic or from one pair.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At the Ecuadorian nest sites, authors recorded agonistic encounters involving condors and other raptors and a Spectacled Bear; they note that the lack of records at some nests could reflect lower observation effort. These nest-area observations do not quantify the species' broader food-web or scavenging interactions.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在厄瓜多尔巢址，作者记录到秃鹫与其他猛禽以及眼镜熊之间的攻击性遭遇；作者指出，部分巢址未记录到此类事件可能与观察力度较低有关。这些巢区观察并未量化该种更广泛的食物网或食腐关系。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Eight Ecuadorian nest areas; observations 2009-2021, with systematic nest watches at three sites during specified intervals in 2017-2022.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild-born condors at nest sites; source distinguishes nestling rearing from periods without eggs/chicks.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Diet, carrion use, seasonal habitat use, prey/carrion availability, and interaction frequencies across the full range remain unreviewed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
A 2016 Ecuador study modeled the species' national extent of occurrence as 49,550 km² and area of occupancy as 14,106 km² using 60 roosting-site coordinates from seven satellite-tagged condors and seven environmental predictors at 500 m resolution. These are model outputs for Ecuador, not a global distribution estimate.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
一项 2016 年厄瓜多尔研究以七只卫星追踪秃鹫的 60 个栖息点坐标及七项 500 米分辨率环境变量建模，估算该种在厄瓜多尔的分布范围面积为 49,550 平方公里、占域面积为 14,106 平方公里。这些是厄瓜多尔的模型结果，并非全球分布估算。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Ecuador; model based on 60 roosting sites from seven tagged birds; seven environmental predictors, 500 m spatial resolution; source published 2016.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Field observations and satellite telemetry of wild Andean Condors; the model estimates potential distribution.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A current global locality inventory with dates, native/introduced status, spatial uncertainty, unsampled areas, and range-wide reconciliation is incomplete.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The Ecuador-focused 2016 study estimated 94-102 individuals from 93 birds seen in a simultaneous two-day 2015 census, and its population viability scenarios identified habitat loss as the greatest modeled threat in Ecuador. The paper discussed an earlier national Critically Endangered listing but is not itself a current IUCN or national reassessment.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
厄瓜多尔专题研究根据 2015 年同步进行的两日普查中记录的 93 只个体，估算该国种群为 94–102 只；其种群生存力情景模型指出，在厄瓜多尔，栖地丧失是模型中最大的威胁。论文提及当时较早的国家级极危列名，但该研究本身不是当前 IUCN 或国家级重新评估。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Ecuador; census on 2015-09-29 and 2015-09-30; modeled scenario period 100 years from study inputs, not a current official assessment.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild Ecuadorian population; captive reinforcement appears only as a distinct model scenario.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
A current global assessment and up-to-date national assessments, their criteria, dates, and range/population scopes have not been checked; historic Ecuador model results do not supply current category status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Four facets have limited regional partial evidence; morphology, evolution, and fossil evidence have not been assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The 2015 Ecuador census and 2016 model are not current assessments; no current global IUCN or national status review is included.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A systematic literature search, source-concept reconciliation, and external expert review have not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
Chinese paraphrases are machine-generated drafts and have not been independently reviewed.
<!-- /evo:text -->
