---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pongo abelii Lesson, 1827
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 苏门答腊猩猩
      en: Sumatran orangutan
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
    sources:
      referenceBindings:
        - referenceId: ref-612338ca-880b-890a-af14-70fb0c6e9ee5
          metadataVariant: 0
          sourceKey: hardus2012
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
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4LTSY
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
    scientificName: Pongo abelii Lesson, 1827
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-25
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      parentChain:
        - id: 63NZX
          name: Pongo
          authorship: Lacépède, 1799
          rank: genus
          status: accepted
        - id: K72
          name: Ponginae
          authorship: Elliot, 1913
          rank: subfamily
          status: accepted
        - id: 6256T
          name: Hominidae
          authorship: Gray, 1825
          rank: family
          status: accepted
        - id: 58L
          name: Hominoidea
          authorship: Gray, 1825
          rank: superfamily
          status: accepted
        - id: 4PM
          name: Simiiformes
          authorship: Haeckel, 1866
          rank: infraorder
          status: accepted
        - id: 4DT
          name: Haplorrhini
          authorship: Pocock, 1918
          rank: suborder
          status: accepted
        - id: 3W7
          name: Primates
          authorship: Linnaeus, 1758
          rank: order
          status: accepted
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domesticated or captive observations are included; domestication has not been assessed.
      fossil: No fossil evidence is assessed in this record.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 4
          sourceKey: col268
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4LTSY
            version: COL26.8; release issued 2026-08-20; dataset DOI 10.48580/dgywk
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
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
        - referenceId: ref-9ae5763a-2ad8-81b9-aca0-e8296cf2475e
          metadataVariant: 0
          sourceKey: hardus2012
          usage:
            locator: Abstract; Methods, “Study site and subjects”; Results, “Meat-eating”; Table I and Figure 1.
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
            - publisherUrl
            - licenseUrl
            - scope
        - referenceId: ref-2b43f380-3aea-8ec8-ac87-970e0378c71d
          metadataVariant: 0
          sourceKey: hadi2026orangutanstatus
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1016/j.gecco.2026.e04302
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://researchonline.ljmu.ac.uk/id/eprint/28898/7/Population%20status%20of%20Sumatran%20and%20Tapanuli%20orangutans_%20A%20comprehensive%20assessment%202021%E2%80%932023.pdf
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
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
              - hardus2012
            locator: Abstract; Methods, “Study site and subjects”; Results, “Meat-eating and meat sharing”; Table I.
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
              - hardus2012
            locator: Abstract; Results, “Seasonality of slow loris meat-eating”; Figure 2.
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/textZh
            sourceIds:
              - hadi2026orangutanstatus
            locator: Abstract; Methods §§2.1–2.3; Results §3.3 and Table 3; Discussion §4.1 and Table 5.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/1
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

# Pongo abelii

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
印度尼西亚苏门答腊 Gunung Leuser 国家公园 Ketambe 研究站；三次事件来自同一母女配对，时间为 2007 年 2 月、12 月和 2008 年 4 月。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Ketambe Research Station, Gunung Leuser National Park, Sumatra, Indonesia; three events from one mother–daughter pair in February and December 2007 and April 2008.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage record queried at ChecklistBank dataset 316115; name, authorship, species rank, accepted status, source sector, and parent chain were checked from the taxon endpoint.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage 4LTSY only. Existing ecology and life-history observations concern one mother–dependent-offspring dyad at Ketambe. The conservation evidence added here is a model-based 2021–2023 range assessment for wild Sumatran orangutans and a separate matched-distribution comparison with 2011; it does not establish a current census or demographic result for every local population.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Ecology and life-history observations are from a free-ranging Sumatran orangutan mother–dependent-offspring dyad at Ketambe. The conservation estimate concerns wild Pongo abelii in northern Sumatra and is modeled from line-transect nest surveys; it is not a direct individual count. Tripa was not directly surveyed and its estimate is extrapolated. No captive or fossil observations are included.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8, ChecklistBank release dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Taxon usage 4LTSY and its source endpoint; sourceDatasetKey 2144, sourceId ITIS TSN 944294, sectorKey 1508; name, authorship, rank, status, parentId, and ancestor records are recorded in identity.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name Pongo abelii, authorship Lesson, 1827, species rank, accepted status, ITIS source dataset 2144, source sector 1508, and COL26.8 parent chain only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Three observations involving one adult female and her dependent offspring at Ketambe, Gunung Leuser National Park, Sumatra, in February and December 2007 and April 2008; prior cases are separately identified by the authors.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Published article. This record contains an independently worded summary of reported facts and attribution only; it reproduces no article prose, table layout, figure, image, or supplementary data. Do not redistribute adapted or translated article expression under this license.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Methods §§2.1–2.3, survey design, distance sampling, and spatial prediction; Results §3.3 and Table 3, current-range population estimate; Discussion §4.1 and Table 5, matched-distribution 2011–2023 comparison.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Hadi AN et al. (2026). Population status of Sumatran and Tapanuli orangutans: A comprehensive assessment 2021–2023. Global Ecology and Conservation 69:e04302. https://doi.org/10.1016/j.gecco.2026.e04302. Claim independently paraphrased; CC BY-NC-ND 4.0; no article prose, figures, tables, or supplementary data reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A northern-Sumatra range assessment using 208 systematic line-transect nest surveys totaling 198 km during 2021–2023 across the Sumatran and Tapanuli orangutan ranges. The Sumatran orangutan estimate of 11,694 (95% CI 10,949–12,518) uses the IUCN 2023 range and eight meta-populations. The 19.5% decline is a separate model-based matched-distribution comparison with 2011, not the current-boundary total. Tripa was not directly surveyed because of permit restrictions and its estimate is model-derived; Jantho and Bukit Tigapuluh reintroduction sites were excluded.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Hardus et al. report three slow-loris meat-eating events involving one adult female and her dependent female offspring at Ketambe. During the observed cases, the mother often rejected the offspring’s meat-sharing requests and the offspring initiated sharing; the observations describe one dyad, not a population-wide mother–offspring pattern.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
Hardus 等人报告，在 Ketambe 观察到一只成年雌性及其依赖型雌性后代三次捕食懒猴的事件。观察期间，母亲经常拒绝后代分享肉食的请求，而后代会发起分享；这些记录仅描述一个母女配对，不能代表整个种群的母子互动模式。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Ketambe Research Station, Gunung Leuser National Park, Sumatra, Indonesia; three events in February 2007, December 2007, and April 2008; one observed mother–dependent-offspring dyad.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-ranging wild adult female and dependent female offspring; the offspring was 6–7 years old and not fully weaned.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Three observations from one dyad cannot establish typical reproductive, developmental, or parental behavior across Pongo abelii; broader life-history evidence has not been assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors report that slow-loris captures in their combined observations occurred only when ripe-fruit availability was low, and propose meat as a possible fallback food. The new cases came from one Ketambe dyad; the proposed seasonal relationship is an inference from a small case set.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
作者报告，其汇总的观察中懒猴捕食事件仅发生在成熟果实可得性较低时，并提出肉食可能是备用食物。新观察来自 Ketambe 的一个母女配对；季节关系是基于少量案例提出的推断。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Ketambe, Sumatra; new observations in 2007–2008 combined with earlier published cases from Ketambe and Suaq Balimbing; not a range-wide diet study.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild orangutan observations; no captive feeding evidence is included.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The small, opportunistic event set does not establish prevalence, a causal fruit-availability effect, or the species’ overall diet and ecological interactions.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
A 2021–2023 northern-Sumatra assessment using 208 systematic line-transect nest surveys totaling 198 km estimated 11,694 Sumatran orangutans (Pongo abelii; 95% CI 10,949–12,518) across eight meta-populations under the IUCN 2023 range boundary. A separate matched-distribution comparison estimated a 19.5% decline from 2011 to 2023 (about 1.8% per year). These are model-derived estimates, not direct counts; the current-boundary total and fixed-range trend use different spatial bases, and Tripa was not directly surveyed.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
一项于 2021—2023 年在苏门答腊北部开展的评估，使用 208 条系统巢址线样带、总调查长度 198 公里，按 IUCN 2023 年分布边界估计苏门答腊猩猩（*Pongo abelii*）数量为 11,694 只（95% 置信区间 10,949—12,518 只），分布于 8 个元种群。另一项采用匹配分布范围的比较估计其 2011—2023 年数量下降 19.5%（约每年 1.8%）。这些是基于模型的估计，并非直接普查；当前边界总量和固定范围趋势使用不同空间基准，且未直接调查 Tripa。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Northern Sumatra, Indonesia; field nest transects from 2021–2023. The 2023-range estimate covers eight Sumatran orangutan meta-populations. The temporal comparison uses a matched spatial distribution for 2011 and 2023. The survey covered both Pongo abelii and P. tapanuliensis; claim values are specifically for P. abelii.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild Sumatran orangutans; abundance was modeled from nest transects rather than direct individual counts. Tripa was not surveyed directly due to permit restrictions and was estimated by spatial extrapolation. Reintroduction sites Jantho and Bukit Tigapuluh were outside the survey scope; no captive or fossil population is included.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The abundance and trend estimates depend on modeled nest-survey data, spatial boundaries, and coverage choices; local abundance in Tripa was extrapolated without direct survey access.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/1 -->
This single 2021–2023 assessment does not constitute ongoing monitoring, a full threat-response evaluation, or independent expert review of current conservation status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The record includes one small behavioral observation set and a 2021–2023 model-based population assessment; morphology, evolution, distribution, fossil evidence, and wider conservation monitoring remain unassessed or incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The population estimate and matched-range trend depend on spatial boundaries and survey coverage; systematic source coverage across the accepted species concept remains incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
