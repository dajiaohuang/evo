---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Macaca sylvanus (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 巴巴利猕猴
      en: Barbary macaque
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
        - referenceId: ref-051c446d-6a45-81dc-a1b7-e8c32495efdb
          metadataVariant: 0
          sourceKey: maibeche2015
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWP8
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
    scientificName: Macaca sylvanus (Linnaeus, 1758)
    authorship: (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-25
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
      - id: 6224G
        scientificName: Mammalia Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 6226C
        scientificName: Theria Parker & Haswell, 1897
        authorship: Parker & Haswell, 1897
        rank: subclass
        status: accepted
        sourceDatasetId: "2144"
      - id: LG
        scientificName: Eutheria Gill, 1872
        authorship: Gill, 1872
        rank: infraclass
        status: accepted
        sourceDatasetId: "2144"
      - id: 3W7
        scientificName: Primates Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4DT
        scientificName: Haplorrhini Pocock, 1918
        authorship: Pocock, 1918
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4PM
        scientificName: Simiiformes Haeckel, 1866
        authorship: Haeckel, 1866
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4X9
        scientificName: Cercopithecoidea Gray, 1821
        authorship: Gray, 1821
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 7X9
        scientificName: Cercopithecidae Gray, 1821
        authorship: Gray, 1821
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: JB3
        scientificName: Cercopithecinae Gray, 1821
        authorship: Gray, 1821
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: L4C
        scientificName: Papionini
        authorship: null
        rank: tribe
        status: accepted
        sourceDatasetId: "2144"
      - id: 5HYC
        scientificName: Macaca Lacépède, 1799
        authorship: Lacépède, 1799
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 3WWP8
        scientificName: Macaca sylvanus (Linnaeus, 1758)
        authorship: (Linnaeus, 1758)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
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
      wild: Evidence concerns two free-ranging groups observed in Gouraya National Park, Algeria, in 2007–2008.
      domesticated: Domesticated populations were not studied.
      captive: Captive populations were not studied.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWP8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:3WWP8@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 3WWP8; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3WWP8. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-7c42a00a-b750-821c-a567-8390e2ea432e
          metadataVariant: 0
          sourceKey: maibeche2015
          usage:
            licenseEvidenceLocator: Article copyright notice; linked Creative Commons Attribution license resolves to CC BY 4.0.
            licenseAppliesTo: Article text; separately credited third-party material may be excluded. Claim paraphrased; no figure or table reused.
            stableId: doi:10.1371/journal.pone.0118596
            locator: Results, Dietary composition—Dietary species richness and diversity; article copyright notice.
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
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 3WWP8; DOI 10.1371/journal.pone.0118596.
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
        status: not-assessed
        claims: []
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
              - maibeche2015
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Macaca sylvanus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
阿尔及利亚 Gouraya 国家公园两个群体在 2007–2008 年的饮食观察；比较限于报告的地点、样本和观察周期。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Diet observations of two groups in Gouraya National Park, Algeria, during 2007–2008; comparison is limited to the reported sites, samples and observation period.
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
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 3WWP8. The cited observation covers two free-ranging groups at one Algerian site for one annual cycle, not a complete species-wide ecology account.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Maibeche Y., Moali A., Yahi N., Menard N. (2015). PLOS ONE 10(2):e0118596. https://doi.org/10.1371/journal.pone.0118596. CC BY 4.0. Claim paraphrased; no figures or tables reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
One historical diet-diversity comparison between two named wild groups at one Algerian site.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary field-observation article; not a complete species ecology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted species usage and every accepted parent node in the pinned COL26.8 registry; reviewed study sites, observation period, diet-diversity methods and results, and article rights notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary study directly naming M. sylvanus and reporting comparative diet-diversity results for identified wild groups with observation-period and site scope.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Species-wide causal claims, current conservation status, complete geographic range, and morphology, evolution, fossils, or other facets not established by this study.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This field study does not assess species morphology or diagnostic variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The cited diet observations do not establish a complete life-history account or demographic rates.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In Gouraya National Park, Algeria, observations from April 2007 through March 2008 reported higher annual dietary species diversity for the peri-urban Les Oliviers group (13.8) than for the non-urban Cap Carbon group (10.4; F=5.51, df=1, P<0.05). This comparison concerns those two observed groups and that annual cycle; it does not establish a species-wide diet pattern or explain the difference causally.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在阿尔及利亚古拉亚国家公园，2007 年 4 月至 2008 年 3 月的观察报告称，城郊 Les Oliviers 群体的年度食物物种多样性（13.8）高于非城郊 Cap Carbon 群体（10.4；F=5.51，df=1，P<0.05）。该比较仅涉及这两个观察群体和这一年度周期，不能代表整个物种的饮食模式，也不能据此解释差异成因。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Results, Dietary composition—Dietary species richness and diversity; Methods, Study sites, macaque groups and periods of observation; Data collection and analyses.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Gouraya National Park, eastern Algeria; two groups observed between April 2007 and March 2008. The peri-urban and non-urban groups were reported as 31–34 and 40–46 individuals, respectively. Dietary analysis excluded unweaned infants.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging wild macaques in two observational groups; not captive, domesticated, or fossil evidence.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One population, two groups, and one annual observation period do not establish species-wide ecological patterns, causal effects of urban proximity, or current conditions.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This study does not analyze phylogeny, domestication, or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
One park population is not a complete geographic range assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
This study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The diet comparison does not establish current population trends, threats, or conservation status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in ecology only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
