---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rhinopithecus bieti A. Milne-Edwards, 1897
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 滇金丝猴
      en: Black-and-white snub-nosed monkey
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
        - referenceId: ref-ae6ff779-9e7b-873c-af5a-42a01c9bd5cc
          metadataVariant: 0
          sourceKey: li2023rhinopithecusbietibodymass
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4S9ML
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
    scientificName: Rhinopithecus bieti A. Milne-Edwards, 1897
    authorship: A. Milne-Edwards, 1897
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
      - id: JCX
        scientificName: Colobinae Jerdon, 1867
        authorship: Jerdon, 1867
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: L6B
        scientificName: Presbytini Gray, 1825
        authorship: Gray, 1825
        rank: tribe
        status: accepted
        sourceDatasetId: "2144"
      - id: 78S4
        scientificName: Rhinopithecus A. Milne-Edwards, 1872
        authorship: A. Milne-Edwards, 1872
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 4S9ML
        scientificName: Rhinopithecus bieti A. Milne-Edwards, 1897
        authorship: A. Milne-Edwards, 1897
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
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated populations were not studied.
      captive: Captive individuals were not studied.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4S9ML
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4S9ML@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 4S9ML; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4S9ML. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-60b623ec-e709-8b76-a8f2-01900b43ea63
          metadataVariant: 0
          sourceKey: li2023rhinopithecusbietibodymass
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.3390/ani13091576
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
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
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 4S9ML; DOI 10.3390/ani13091576; PMC10177520.
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - li2023rhinopithecusbietibodymass
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
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: not-assessed
        claims: []
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

# Rhinopithecus bieti

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
云南白马雪山保护区 2010–2013 年野生监测群体的体重记录；八岁组比较包含重复年度测量。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Body-mass records from a monitored wild population at Baimaxueshan Reserve, Yunnan, during 2010–2013; the age-eight comparison includes repeated annual measurements.
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
Exact accepted COL26.8 species usage 4S9ML. The biological evidence concerns age-specific body-mass observations of wild monkeys in one monitored reserve population in Yunnan; it does not establish range-wide sexual dimorphism or population-level survival and behavior.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The study monitored wild monkeys at Baimaxueshan National Nature Reserve, Yunnan, China, from January 2010 to March 2013; repeated annual records of the same individuals were treated as separate samples.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article metadata and license block identify © 2023 by the authors and link to the Creative Commons Attribution 4.0 International License.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text under the item-level CC BY 4.0 notice; separately credited third-party content is excluded. Claim paraphrased; no figure or table is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Results §3.1; Figure 5; Methods on study population, record dates, and repeated annual samples; article license statement.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Li Y-P, Huang Z-P, Yang Y, He X-B, Pan R-L, He X-M, Yang G-W, Wu H, Cui L-W, Xiao W (2023). Ontogenetic Development of Sexual Dimorphism in Body Mass of Wild Black-and-White Snub-Nosed Monkey (Rhinopithecus bieti). Animals 13(9):1576. https://doi.org/10.3390/ani13091576. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Age-specific body-mass observations from wild monkeys monitored at one reserve in Yunnan from January 2010 to March 2013; category sample sizes can include repeated annual observations of individuals.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary age-specific body-mass study in a monitored wild population; not a complete species morphology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and each accepted parent node in the pinned COL26.8 registry; reviewed the article's age-eight body-mass comparison, sample definitions, reserve locality, observation dates, repeated-record method, and item-level copyright/license statement.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary research article directly naming R. bieti and reporting an age- and sex-specific body-mass comparison with a defined wild population and observation method.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Range-wide morphology, distinct-individual population counts, behavior, survival, life history, evolution, distribution, fossils, and conservation conclusions not established by this one study.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
For eight-year-old wild black-and-white snub-nosed monkeys monitored at Baimaxueshan National Nature Reserve, the study reports a sexual dimorphism in body mass ratio of 1.85: males averaged 21.8 ± 2.2 kg (n=35) and females 11.8 ± 1.2 kg (n=116), with p < 0.001. The age-sex category counts are study observations, not counts of distinct animals: the methods treat repeated annual records of the same monkey as separate samples. This result is bounded to that monitored population and measurement design.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
在云南白马雪山国家级自然保护区监测的野生黑白仰鼻猴中，研究报告八岁年龄组的体重性二型比为 1.85：雄性平均 21.8 ± 2.2 千克（n=35），雌性平均 11.8 ± 1.2 千克（n=116），p < 0.001。年龄—性别组样本数是研究观测记录数，并非不同个体的数量；方法部分将同一只猴子跨年度的重复记录分别作为样本。该结果受限于这一监测种群和测量设计。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Abstract; Results §3.1 and Figure 5 for the age-eight ratio, body-mass means, sample sizes and significance; Methods for study locality, record period, and repeated annual observations.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Baimaxueshan National Nature Reserve, Weixi County, Yunnan, China; body-mass records collected January 2010–March 2013; wild monkeys in the monitored study population.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild monkeys observed in one monitored reserve population; age-specific category counts may include repeated annual records of individuals.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Body-mass sexual dimorphism at one age in one monitored reserve population does not establish range-wide variation; reported category sample sizes include repeated annual observations and are not unique-animal counts.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The body-mass comparison does not establish a full life cycle, reproductive biology, or survival trajectory.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
A reserve population and body-mass dataset do not characterize habitat use, diet, or ecological interactions.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study does not analyze phylogeny or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
One reserve locality is not a geographic range assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The body-mass study does not provide a dated conservation assessment or population trend analysis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in morphology only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
