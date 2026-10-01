---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Macaca mulatta (Zimmermann, 1780)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 恒河猴
      en: Rhesus macaque
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
        - referenceId: ref-cf5ea542-b69f-8dac-ab95-d7a38fb2b1e3
          metadataVariant: 0
          sourceKey: kimock2019
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWNQ
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
    scientificName: Macaca mulatta (Zimmermann, 1780)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-28
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      parentChain:
        - id: 5HYC
          name: Macaca
          authorship: Lacépède, 1799
          rank: genus
          status: accepted
        - id: L4C
          name: Papionini
          authorship: null
          rank: tribe
          status: accepted
        - id: JB3
          name: Cercopithecinae
          authorship: Gray, 1821
          rank: subfamily
          status: accepted
        - id: 7X9
          name: Cercopithecidae
          authorship: Gray, 1821
          rank: family
          status: accepted
        - id: 4X9
          name: Cercopithecoidea
          authorship: Gray, 1821
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
      domesticated: Domestication has not been assessed.
      fossil: Fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 7
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWNQ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115, DOI 10.48580/dgywk
            stableId: col:3WWNQ@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3WWNQ. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-a39ed71c-7a69-8e53-a665-6e43aed65900
          metadataVariant: 0
          sourceKey: liu2018
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1093/gigascience/giy106
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6143732/
            accessedAt: 2026-09-24
            locator: Abstract; Results and Discussion, “Genetic diversity, phylogeny, and population structure”; Figure 1; Table 1.
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
          originalFields:
            - id
            - title
            - url
            - rightsEvidenceUrl
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
        - referenceId: ref-f1baf59b-faa8-87d6-a0fb-44dcfff716d7
          metadataVariant: 0
          sourceKey: sengupta2015
          usage:
            licenseAppliesTo: Article text under the linked CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1371/journal.pone.0140961
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0140961
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
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
        - referenceId: ref-b80b1450-d931-836f-a0cd-96ae0aee726c
          metadataVariant: 0
          sourceKey: sobral2024reproduction
          usage:
            licenseAppliesTo: Article text; claims are paraphrased and no figures, tables, or supplementary files are reproduced.
            stableId: doi:10.1038/s41598-024-52400-0
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://www.nature.com/articles/s41598-024-52400-0
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
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
        - referenceId: ref-5dd64865-388e-8d03-aa18-67286d5c5350
          metadataVariant: 0
          sourceKey: kimock2019
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1038/s41598-019-52633-4
            rightsEvidenceUrl: https://www.nature.com/articles/s41598-019-52633-4
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution
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
        - referenceId: ref-fb72b7b9-3943-88f9-aaac-cb66e5c72126
          metadataVariant: 0
          sourceKey: pragatheesh2011
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/licenseAppliesTo
            stableId: doi:10.11609/JoTT.o2669.1656-62
            accessedAt: 2026-09-28
            locator: Abstract; Methods, Roadkill data collection; Results, Roadkills
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/scope
            attribution: Pragatheesh, A. (2011), Journal of Threatened Taxa 3(4):1656–1662, https://doi.org/10.11609/JoTT.o2669.1656-62.
          originalFields:
            - id
            - title
            - authors
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
              - kimock2019
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - sobral2024reproduction
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
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
              - sengupta2015
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - liu2018
            locator: Abstract; Results and Discussion, “Genetic diversity, phylogeny, and population structure”; Figure 1.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/1/textZh
            sourceIds:
              - kimock2019
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/1/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
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
              - liu2018
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
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
              - pragatheesh2011
            locator: Abstract; Methods, Roadkill data collection; Results, Roadkills
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
      reviewers: []
      reviewDigest: null
  atlas-node:
    name: Macaca mulatta
    commonName: Rhesus Macaque
    commonNameZh: 恒河猴
    rank: species
    taxonId: ""
    colUsageId: 3WWNQ
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    rangeEvidenceLevel: withheld-no-range-evidence
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: dossier
---

# Macaca mulatta

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
波多黎各圣地亚哥岛管理型自由活动恒河猴种群的数量遗传和性状选择研究；测量 125 只成年雄性及 21 只亲缘雌性。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Quantitative-genetic and trait-selection study of a managed free-ranging rhesus macaque population on Cayo Santiago, Puerto Rico; measurements covered 125 adult males and 21 related females.
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
Exact accepted COL26.8 species usage 3WWNQ verified against ChecklistBank dataset 316115 search and taxon endpoints; verbatim name, authorship, species rank, accepted status, sourceDatasetId 2144, and Primates parent classification were checked. The complete accepted parent path through Primates was verified from the immutable COL26.8 hierarchy archive.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage 3WWNQ only. Existing evidence concerns wild Chinese genomic samples, one free-ranging troop in Buxa Tiger Reserve, India, and high-ranking males in a provisioned, semi-free-ranging Cayo Santiago cohort observed in 2013. New morphology and selection claims concern a separate managed free-ranging Cayo Santiago capture-release cohort measured in 2015. These distinct study scopes do not support species-wide generalization. A new conservation source concerns road mortality on one 11-km NH-7 segment in Madhya Pradesh during 2009–2010; it does not establish a species-wide mortality rate or conservation category.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Wild Chinese population-genomic evidence and ecology evidence from one free-ranging Buxa Tiger Reserve troop remain site-specific. Existing Cayo Santiago life-history evidence concerns provisioned, semi-free-ranging high-ranking males in the 2013 mating season. New morphology and selection evidence concerns a separate managed free-ranging cohort measured in 2015; neither Cayo sample represents native-range or all-population variation.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3WWNQ; accepted status, sourceDatasetId 2144, and Primates classification in the taxon record. Pinned COL26.8 parent path through accepted Papionini (L4C) reaches Primates (3W7).
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted scientific name and authorship, rank, status, sourceDatasetId, and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary population-genomics study of 81 geo-referenced wild Chinese rhesus macaques representing five subspecies and 17 sampling locations. Claims are paraphrased and limited to these samples and model results; figures and data files are not reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Liu Z, Tan X, Orozco-terWengel P, et al. (2018). Population genomics of wild Chinese rhesus macaques reveals a dynamic demographic history and local adaptation, with implications for biomedical research. GigaScience 7(9):giy106. https://doi.org/10.1093/gigascience/giy106. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Methods, Study Area, Study Troop, and Dietary observations and seed handling mechanisms; Results, Fruit availability, degree of provisioning and degree of frugivory, Sites of seed deposition; Table 3.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary field study of one 64-individual free-ranging rhesus macaque troop in Damanpur Block, Buxa Tiger Reserve buffer zone, West Bengal, India, observed October 2013 to September 2014. Claims are paraphrased and limited to this troop and study period; no figures or third-party material are reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Sengupta A, McConkey KR, Radhakrishna S (2015). Primates, Provisioning and Plants: Impacts of Human Cultural Behaviours on Primate Ecological Functions. PLoS ONE 10(11):e0140961. https://doi.org/10.1371/journal.pone.0140961. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract; Methods, Study animals and offspring-paternity calculations; Results, Effect of androgen and color ornamentation on mating and reproductive output; Discussion.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Sobral G, Dubuc C, Winters S, Ruiz-Lambides A, Emery Thompson M, Maestripieri D, Milich KM. (2024). Facial and genital color ornamentation, testosterone, and reproductive output in high-ranking male rhesus macaques. Scientific Reports 14:2621. https://doi.org/10.1038/s41598-024-52400-0. CC BY 4.0. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
A study of 21 high-ranking adult male rhesus macaques aged 7–21 years in nine groups of the semi-free-ranging, food- and water-provisioned Cayo Santiago population, Puerto Rico; mating-season records were collected in February–July 2013. Reproductive success used paternity samples taken when offspring were yearlings, so infants dying before sampling were not assigned to sires. University of Puerto Rico Medical Sciences Campus IACUC protocol A0100108 is stated; no separate field permit is reported in the article.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/locator -->
Abstract; Methods—Field site and subjects, Morphometric data collection, Genetic parentage information, and Statistical analyses; Results—Trait heritability and Selection on traits; Discussion.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Primary quantitative-genetic and selection study of a managed free-ranging rhesus macaque population on Cayo Santiago, Puerto Rico. Morphometric measurements were collected in 2015 from 125 adult males and 21 related females. Claims are paraphrased; article prose, figures, tables, and supplementary data are not reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Kimock CM, Dubuc C, Brent LJN, Higham JP (2019). Male morphological traits are heritable but do not predict reproductive success in a sexually-dimorphic primate. Scientific Reports 9:19794. https://doi.org/10.1038/s41598-019-52633-4. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/licenseAppliesTo -->
The article front page identifies CC BY 3.0 Unported and states that JoTT allows non-profit reuse with attribution. The dossier and app paraphrase factual findings and reproduce no article text, figures or tables.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
Primary one-year field study of rhesus macaque distribution, roadside feeding and road mortality along one 11-km NH-7 segment in the Kanha–Pench corridor, Madhya Pradesh, India.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
During the 15 October–15 December 2015 capture-release period on Cayo Santiago, Puerto Rico, researchers measured 125 free-ranging adult males aged six years or older and 21 female relatives. In pedigree models that combined male and female data, body mass, crown-rump length, canine length, and upper abdominal skinfold thickness met the authors' heritability threshold (h² ≥ 0.1); the testis-volume estimate was below that threshold. The authors caution that heritability intervals were wide. These measurements describe a managed island population and selected traits, not morphological variation across the full species range.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
在波多黎各圣地亚哥岛，研究者于 2015 年 10 月 15 日至 12 月 15 日的捕捉—释放期测量了 125 只年龄至少六岁的自由活动成年雄性恒河猴，以及 21 只与雄性样本有亲缘关系的雌性。在合并雌雄数据的谱系模型中，体重、头臀长、犬齿长度和上腹部皮褶厚度达到作者采用的遗传率阈值（h² ≥ 0.1）；睾丸体积估计值低于该阈值。作者提醒遗传率区间较宽。这些测量描述的是管理型岛屿种群和所选性状，不代表整个物种分布区内的形态变异。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Abstract; Methods—Field site and subjects, Morphometric data collection, and Genetic parentage information; Results—Trait heritability; Discussion on confidence intervals.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Cayo Santiago, Puerto Rico; morphometric capture-release sample collected 2015-10-15 to 2015-12-15. The island population descended from animals introduced from India in 1938; this claim concerns the later managed island population.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Free-ranging rhesus macaques in a managed island population; not a captive laboratory sample or a native-range population sample.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The study measured selected traits in one managed island population and does not characterize female morphology, full ontogenetic change, or variation across native-range and other populations. Heritability intervals were wide.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The result is limited to high-ranking males, one provisioned island population, one mating season, and paternity records for offspring surviving to yearling sampling; it does not establish species-wide reproductive aging or lifetime fecundity.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Among 21 high-ranking adult male rhesus macaques aged 7–21 years in nine groups at the provisioned, semi-free-ranging Cayo Santiago population, age predicted the number of offspring recorded for the 2013 mating-season study, with older males siring fewer offspring. Paternity sampling occurred at the yearling stage; infants that died before sampling were not assigned to sires, so the result is limited to offspring counted by the study protocol.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
在波多黎各圣地亚哥岛一个有补饲的半自由活动群体中，研究了来自 9 个群体、年龄为 7–21 岁的 21 只高等级成年雄性恒河猴。年龄可预测 2013 年交配季研究记录的后代数量，年龄较大的雄性记录到的后代较少。亲子鉴定样本在幼体达到一岁时采集；采样前死亡的幼体无法归属父亲，因此结论仅适用于该研究流程记录到的后代。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Abstract; Methods, Study animals and offspring-paternity calculations; Results, Effect of androgen and color ornamentation on mating and reproductive output; Discussion.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Cayo Santiago, Puerto Rico; 21 high-ranking adult males from nine social groups; behavioral and biological data for the 2013 mating season, February–July 2013.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Semi-free-ranging rhesus macaques in a managed island population provisioned with food and water; this is not an unprovisioned wild population or a species-wide demographic estimate.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In one free-ranging troop of 64 rhesus macaques in the buffer zone of Buxa Tiger Reserve, West Bengal, India, observed from October 2013 to September 2014, fruit comprised 70.8% of the diet in the study-defined non-provisioning period (May–September) and 28.8% in the provisioning period (October–April). Mean daily range was 4.72 km and 2.58 km for those periods, respectively. These are seasonal observations of one troop and do not isolate provisioning from every seasonal influence or describe the species as a whole.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在印度西孟加拉邦布克萨虎保护区缓冲区一个由 64 只恒河猴组成的自由活动群体中，研究于 2013 年 10 月至 2014 年 9 月进行观察。按研究定义，5–9 月为无投喂期、10–4 月为投喂期；水果分别占这两个时期饮食的 70.8% 和 28.8%，平均日活动距离分别为 4.72 千米和 2.58 千米。这是对单一群体的季节性观察，无法排除所有季节影响，也不能代表整个物种。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods, Study Area and Study Troop; Results, Fruit availability, degree of provisioning and degree of frugivory and Sites of seed deposition; Table 3.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Damanpur Block in the buffer zone of Buxa Tiger Reserve, West Bengal, India; one troop observed October 2013–September 2014. The article defines May–September as non-provisioning and October–April as provisioning.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
One free-ranging troop exposed to seasonal tourist and local food provisioning; no captive animals were studied.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The study covers one troop and one annual cycle; broader populations, geographic variation, and causal effects independent of season remain unassessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Liu et al. analyzed 81 geo-referenced wild Chinese rhesus macaques from five subspecies and 17 locations. Their population analyses resolved five genetic lineages across mainland China and Hainan and reported evidence of recent gene flow; these results describe the Chinese sample and study models.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
Liu 等人分析了来自中国 17 个地点、代表 5 个亚种的 81 只具有地理定位信息的野生恒河猴。群体分析识别出分布于中国大陆和海南的 5 个遗传谱系，并报告近期基因流动证据；这些结果限于该研究样本和模型。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Wild-born rhesus macaques sampled at 17 locations in China; the paper's population structure and gene-flow inferences are analysis-specific.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild-born animals; captive reference populations appear only as separately identified context.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/1/text -->
Using pedigree and reproductive records from the Cayo Santiago population, the authors tested whether male morphometric traits predicted average annual offspring production, a proxy rather than lifetime reproductive success. They found no definitive evidence of directional, stabilizing, disruptive, or correlational selection on the measured traits. The analysis therefore does not establish that these traits are never selected; the authors note limits in the proxy and alternative selection mechanisms.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/1/textZh -->
研究者使用圣地亚哥岛种群的谱系和繁殖记录，检验雄性形态测量性状能否预测年均后代产量；该指标是替代量，并非终生繁殖成功。研究未发现测量性状存在明确的定向、稳定化、分裂或相关选择证据。因此，该分析不能证明这些性状从不受选择；作者指出了替代指标的限制以及其他可能的选择机制。
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/1/locator -->
Methods—Genetic parentage information and Statistical analyses; Results—Selection on traits; Discussion on selection gradients and limits of reproductive-success measures.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/1/placeTimeScope -->
Cayo Santiago, Puerto Rico; morphometric data collected in October–December 2015 and evaluated against pedigree-linked reproductive records. Annual offspring count was used as a proxy; lifetime reproductive success was unavailable for most subjects.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/1/lifeStatus -->
Managed free-ranging island population; results do not estimate selection across the native range or all rhesus macaque populations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
One island-population study using average annual offspring production does not resolve lifetime fitness, all forms of selection, or species-wide evolutionary history.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The genomic survey included wild Chinese rhesus macaques from 17 locations on mainland China and Hainan. These sample locations document the study's geographic coverage and do not delimit the species' current global range.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
该基因组调查纳入了中国大陆和海南 17 个地点的野生恒河猴。这些采样地点仅说明研究的地理覆盖范围，并未界定该物种当前的全球分布。
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Abstract; Results and Discussion, “Genetic diversity, phylogeny, and population structure”; Figure 1 and Supplementary Table S1.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Seventeen study locations in China; sampling describes the survey, not the full geographic distribution.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Geo-referenced wild-born samples.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No complete current or historical range inventory was conducted.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The selected study does not review the fossil record.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
On an 11-km NH-7 segment through the Kanha–Pench corridor beside Pench Tiger Reserve in Madhya Pradesh, India, roadkill monitoring recorded 54 Macaca mulatta deaths from August 2009 to July 2010 (27 in summer, 19 in winter and 8 during monsoon). Within this single study, seasonal roadkill counts were positively correlated with traffic intensity, and the highest roadkill hotspot overlapped a location with frequent roadside feeding. These observations do not estimate a population-level mortality rate, establish causation, or describe present-day or range-wide conservation status.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
在印度中央邦、毗邻奔奇虎保护区并穿越 Kanha–Pench 廊道的 NH-7 一段 11 公里路段，研究人员于 2009 年 8 月至 2010 年 7 月的路杀监测中记录了 54 只恒河猴死亡（夏季 27 只、冬季 19 只、季风期 8 只）。在这项单点研究中，季节路杀数量与交通强度呈正相关，最高路杀热点与频繁路边投喂地点重合。这些观察不能估算种群死亡率、证明因果关系，也不代表现今或全分布区的保育状况。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
One 11-km NH-7 segment between Kurai and Gandatola along the eastern boundary of Pench Tiger Reserve and through the Kanha–Pench corridor, Madhya Pradesh, India; roadkill monitoring from August 2009 to July 2010, twice daily in early morning and late evening. Seasonal counts were 27 in summer, 19 in winter and 8 during monsoon.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Free-ranging macaques occupying roadside habitat in the study area; this is not a captive cohort or a range-wide population sample.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
A single road segment and one year of roadside carcass monitoring do not establish a population-level mortality rate, population impact, present-day mortality or a range-wide threat trend; no detection or carcass-persistence correction is reported.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/1 -->
The study does not assign a formal conservation category. Correlation with traffic intensity and overlap with roadside-feeding hotspots are observational associations and do not establish a causal mechanism.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The dossier contains site-specific population-genomic, ecology, high-ranking-male life-history, Cayo Santiago morphology and selection evidence, plus one 11-km roadside mortality study; each finding is limited to its sample, measured traits, place or study period.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Fossil evidence, morphological variation across the species range, formal conservation status, population-level road mortality and systematic coverage of the accepted species concept remain incomplete or unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
