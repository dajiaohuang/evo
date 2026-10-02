---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Chelonia mydas (Linnaeus, 1758)
    authorship: (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "1008"
    checkedAt: 2026-09-27
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CH2
        scientificName: Chordata
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V3
        scientificName: Vertebrata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V5
        scientificName: Gnathostomata
        authorship: null
        rank: infraphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VVWB
        scientificName: Osteichthyes
        authorship: null
        rank: parvphylum
        status: accepted
        sourceDatasetId: null
      - id: 9CK8W
        scientificName: Tetrapoda
        authorship: null
        rank: megaclass
        status: accepted
        sourceDatasetId: null
      - id: RP
        scientificName: Reptilia Laurenti, 1768
        authorship: Laurenti, 1768
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: "477"
        scientificName: Testudines Batsch, 1788
        authorship: Batsch, 1788
        rank: order
        status: accepted
        sourceDatasetId: null
      - id: 87BW5
        scientificName: Cryptodira
        authorship: null
        rank: suborder
        status: accepted
        sourceDatasetId: "1008"
      - id: 87BWH
        scientificName: Chelonioidea
        authorship: null
        rank: superfamily
        status: accepted
        sourceDatasetId: "1008"
      - id: 83J
        scientificName: Cheloniidae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "1008"
      - id: 3MPC
        scientificName: Chelonia
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "1008"
      - id: TVGD
        scientificName: Chelonia mydas (Linnaeus, 1758)
        authorship: (Linnaeus, 1758)
        rank: species
        status: accepted
        sourceDatasetId: "1008"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    lifeStatusScope:
      wild: The claim concerns free-living nesting females at Rose Atoll during 2012–2019.
      domesticated: No domesticated population was studied.
      captive: No captive population was studied.
      fossil: Fossil occurrence and geological age were not assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/TVGD
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:TVGD@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage TVGD; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage TVGD. https://doi.org/10.48580/dgywk.
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-51508512-cbd2-8783-a448-2222e3d3fda9
          metadataVariant: 0
          sourceKey: murakawa2024roseatollgreen-turtle
          usage:
            licenseEvidenceLocator: "Article copyright statement: © 2024 Murakawa et al.; Creative Commons Attribution License (CC BY), linking to CC BY 4.0."
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.3389/fmars.2024.1403240
            locator: Abstract; §§2.1–2.2, 4; copyright and license statement.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            accessedAt: 2026-09-25
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - locator
            - license
            - rightsHolder
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseVersion
            - licenseUrl
            - licenseAssessment
            - scope
            - accessedAt
        - referenceId: ref-17682f52-99a5-8967-ac55-31f5dfe57f84
          metadataVariant: 0
          sourceKey: johnson2017greenturtlegrazingcarbon
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1038/s41598-017-13142-4
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5648853/
            accessedAt: 2026-09-27
            locator: Abstract; Methods, experimental clipping and naturally grazed areas; Results and Table 1; Discussion.
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
          originalFields:
            - id
            - title
            - url
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage TVGD; DOI 10.3389/fmars.2024.1403240.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-25
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - murakawa2024roseatollgreen-turtle
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - johnson2017greenturtlegrazingcarbon
            locator: Abstract; Results, Table 1, the overcast-day exceptions in weeks one and nine, and naturally grazed areas; Discussion.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/3
      evolution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
        claims: []
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
  catalogue-profile:
    scientificName: "Chelonia mydas (Linnaeus, 1758)"
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: "绿海龟"
      en: "Green turtle"
    reviewStatus: source-linked
    checkedAt: 2026-09-27
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
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/TVGD
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
        - referenceId: ref-51508512-cbd2-8783-a448-2222e3d3fda9
          metadataVariant: 0
          sourceKey: murakawa2024roseatollgreen-turtle
          usage:
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
        - referenceId: ref-17682f52-99a5-8967-ac55-31f5dfe57f84
          metadataVariant: 0
          sourceKey: johnson2017greenturtlegrazingcarbon
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
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
---

# Chelonia mydas

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage TVGD. The biological evidence concerns nesting green turtles observed at Rose Atoll National Wildlife Refuge, American Samoa, during 2012–2019; it is not a species-wide abundance or distribution estimate.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1008
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The article text under its item-level CC BY 4.0 notice; claim paraphrased and no table, figure, or supplementary dataset is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Murakawa SK, Gaos AR, Johnson DS, Peck B, MacDonald M, Sachs E, Pendleton F, Allen CD, Staman MK, Ishimaru S, Van Houtan KS, Liusamoa A, Jones TT, Martin SL (2024). Abundance, production, and migrations of nesting green turtles at Rose Atoll, American Samoa, a regionally important rookery in the Central South Pacific Ocean. Front. Mar. Sci. 11:1403240. https://doi.org/10.3389/fmars.2024.1403240. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Minimum count of nesting females at Rose Atoll over eight survey seasons; not a global abundance estimate or complete reproductive-life-history account.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text under the item-level CC BY 4.0 notice. Dossier statements paraphrase the article; no figure, table, or supplementary dataset is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A 2016 in situ clipping experiment and nearby naturally grazed areas in one tropical Thalassia testudinum meadow at Little Cayman, Cayman Islands. The simulated clipping treatment represents green-turtle grazing effects on the meadow; it is not an experiment on turtle populations. Results concern measured ecosystem metabolism and do not directly inventory sediment carbon stocks or establish species-wide effects.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Johnson RA, Gulick AG, Bolten AB, Bjorndal KA (2017). Blue carbon stores in tropical seagrass meadows maintained under green turtle grazing. Scientific Reports 7, 13545. https://doi.org/10.1038/s41598-017-13142-4. Claims paraphrased.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary nesting study; not a complete species life-history, distribution, or conservation review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted COL26.8 usage and every accepted parent node in the pinned hierarchy; reviewed the article abstract, nesting survey methods, tagging and observation limits, discussion of the minimum nester count, and article copyright notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary research article directly identifying Chelonia mydas and reporting an explicitly bounded nesting-female count with survey period and site.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Global abundance, other rookeries, full reproductive history, morphology, evolution, broad distribution, fossils, and conservation status not established by the bounded count.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The selected nesting-abundance result does not document diagnostic morphology or species-level anatomical variation.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Rapid nesting surveys at Rose Atoll National Wildlife Refuge in American Samoa from 2012 through 2019 recorded 218 total female green turtles, with a minimum of 138 unique nesting females confirmed by permanent tags. The authors treat 138 as a minimum because annual surveys averaged 7.6 days and limited survey time could miss nesters. This describes the nesting population at this rookery during those eight seasons, not the species globally.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
2012 至 2019 年间，在美属萨摩亚玫瑰环礁国家野生动物保护区开展的快速筑巢调查记录了 218 只雌性绿海龟；永久标记至少确认其中有 138 只不同的筑巢雌龟。作者将 138 只视为最低数量，因为每年平均调查 7.6 天，有限的调查时间可能漏掉部分筑巢个体。该结果描述的是这八个繁殖季中该筑巢地的种群，不代表全球物种数量。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Abstract; §2.2.1–2.2.2 for rapid survey effort and tagging; §4 Discussion for the minimum count and detection limitations.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Rose Atoll National Wildlife Refuge, American Samoa; nesting seasons from 2012 through 2019; free-living nesting females.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild nesting females at one rookery; captive, domesticated, and fossil evidence was not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
An eight-season rapid-survey minimum at one rookery does not establish the full reproductive life history, lifetime fecundity, population trend, or species-wide nesting abundance.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At a Thalassia testudinum meadow in Little Cayman, experimentally clipped plots used to simulate green-turtle grazing had mean net ecosystem production (NEP) 79% lower than unclipped reference plots (24.7 versus 119.5 mmol C m−2 d−1); the 12-week mean remained positive, although clipped plots were slightly heterotrophic (NEP < 0) on weeks one and nine when overcast sampling days lowered gross primary production. Nearby areas continuously grazed by juvenile green turtles for at least a year had NEP 92% lower than adjacent ungrazed areas on average. The production-to-respiration ratio did not differ significantly among treatments (ANOVA, p = 0.16). These measurements describe one meadow; they do not directly quantify sediment carbon stocks or establish a population-wide effect.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在开曼群岛小开曼岛一处 Thalassia testudinum 海草床中，为模拟绿海龟取食而实验性剪除海草的样地，其平均净生态系统生产力（NEP）比未剪除对照低 79%（24.7 对 119.5 mmol C m−2 d−1）；12 周的平均 NEP 仍为正值，但第 1 周和第 9 周阴天测量时，因总初级生产力较低，剪除样地曾略呈异养（NEP < 0）。附近由幼年绿海龟连续取食至少一年维持的区域，其 NEP 平均比相邻未取食区域低 92%。不同处理间的生产/呼吸比没有显著差异（方差分析，p = 0.16）。这些测量只描述一处海草床；研究没有直接量化沉积物碳储量，也不能证明整个物种或种群的普遍效应。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Little Cayman, Cayman Islands, in 2016, at a tropical Thalassia testudinum meadow. Five clipped and five reference plots were measured weekly during a 12-week experiment. Nearby areas had been naturally and continuously grazed by juvenile green turtles for at least one year. Results are specific to this meadow, experimental period, and comparison; they are not a range-wide estimate.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild green turtles maintained the nearby natural grazing areas; experimental clipping simulated grazing in seagrass plots and was not itself a turtle-population experiment.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The selected claim is a rookery-specific nesting count and does not establish diet, habitat relationships, or ecological interactions.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
One 2016 meadow study does not establish global or population-wide effects, responses in other seagrass species or sites, or long-term changes in sediment carbon stocks.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
The experimentally clipped plots simulate grazing; the natural-grazing comparison is local to Little Cayman and does not establish a general dose-response across turtle populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/3 -->
The study does not establish green turtle diet composition, full habitat use, distribution, demographic trends, or conservation status.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The selected study does not analyze phylogeny or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
One nesting site does not establish the species' global or regional distribution.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The selected study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The selected local nesting count is not a species-wide or population-unit conservation assessment.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Life history remains supported by one rookery-specific nesting source; ecology now adds one bounded study of green-turtle grazing effects in a single seagrass meadow.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphology, evolution, distribution, fossil evidence and conservation remain not assessed; life history and ecology are not complete reviews.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The ecological source combines simulated clipping with local natural-grazing comparisons and does not directly measure long-term sediment carbon stocks or range-wide population effects.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
Independent external expert review has not been completed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Chelonia mydas
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 (2026-08-20) accepted name, rank, parent chain and all strict accepted-species descendants. Supports catalogue identity and the reading index; has no extant flag and does not establish biological claims or equivalence to matching PBDB names.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8（2026-08-20）中的接受名、等级、父链和全部严格接受种后代；分类身份与阅读索引资料，没有现生标志，不是生物学或 PBDB 同名概念等同的证据。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Rapid surveys and permanent-tag confirmation at Rose Atoll, American Samoa, during eight nesting seasons in 2012–2019. Supports a minimum confirmed nesting-female count and survey-effort limits at this rookery, not global abundance, population trends or a complete reproductive life history. Reader prose is paraphrased; no figures or tables are reproduced.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
美属萨摩亚玫瑰环礁 2012–2019 年八个筑巢季的快速调查与永久标记确认；支持该筑巢地雌龟最低确认数及调查时间限制，不支持全种数量、种群趋势或完整繁殖生活史。正文转述，未复制图表。
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
One Thalassia testudinum meadow at Little Cayman, Cayman Islands, in 2016: a 12-week experiment with five clipped and five reference plots, plus nearby areas grazed continuously by juvenile turtles for at least one year. Supports local ecosystem-metabolism measurements; clipping simulated grazing and was not a turtle-population experiment, and sediment carbon stocks were not directly measured. Reader prose is paraphrased; no figures or tables are reproduced.
<!-- /evo:text -->

## Source scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
2016 年开曼群岛小开曼岛一处 Thalassia testudinum 海草床：五个剪除样地与五个对照的 12 周实验，以及附近由幼龟持续取食至少一年的区域。支持该地点的生态系统代谢测量；剪除模拟取食，不是龟种群实验，也没有直接测量沉积物碳储量。正文转述，未复制图表。
<!-- /evo:text -->
