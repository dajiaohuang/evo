---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Macaca silenus (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 狮尾猴
      en: Lion-tailed macaque
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-a4be9f9d-6cac-8508-a8b5-5e93e2cfa5fc
          metadataVariant: 0
          sourceKey: ram2015
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
        - referenceId: ref-8067db51-5842-803d-a101-57a2c0638a15
          metadataVariant: 0
          sourceKey: dhawale2020
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
        - referenceId: ref-ad558866-079e-8ce5-a0e0-3ab9683476b7
          metadataVariant: 0
          sourceKey: bindu2024preprint
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
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/3/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWP6
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
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
    scientificName: Macaca silenus (Linnaeus, 1758)
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWP6
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115, DOI 10.48580/dgywk
            stableId: col:3WWP6@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3WWP6. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-d1a56d8c-923c-8744-a82d-9500e8f81209
          metadataVariant: 0
          sourceKey: ram2015
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1371/journal.pone.0142597
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0142597
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
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
        - referenceId: ref-4ae7d852-2f5c-8d36-a791-1ebe226e77bd
          metadataVariant: 0
          sourceKey: dhawale2020
          usage:
            licenseAppliesTo: Article text under the item-linked CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1371/journal.pone.0238695
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0238695
            accessedAt: 2026-09-27
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
        - referenceId: ref-4e20f56d-2a4c-8749-aaf3-a7379fcf69bc
          metadataVariant: 0
          sourceKey: bindu2024preprint
          usage:
            licenseEvidenceLocator: "Official bioRxiv details API record collection[0]: version=1, license=cc_by."
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo
            stableId: doi:10.1101/2024.12.09.627456
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://www.biorxiv.org/content/10.1101/2024.12.09.627456v1
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
          originalFields:
            - id
            - stableId
            - title
            - url
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseUrl
            - licenseVersion
            - licenseAppliesTo
            - scope
            - rightsHolder
            - attribution
    facets:
      morphology:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
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
              - dhawale2020
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
          - facet: ecology
            text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
            originalLanguage: en
            translationStatus: translated
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
            sourceIds:
              - dhawale2020
          - facet: ecology
            text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/textZh
            originalLanguage: en
            translationStatus: translated
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/lifeStatus
            sourceIds:
              - bindu2024preprint
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
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
              - ram2015
            locator: Results, “Genetic structure and diversity of lion-tailed macaques in the Western Ghats”; Figure 4; Table 2.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
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
              - ram2015
            locator: Methods, “Study area”; Figure 1 and its caption; “Sample collection”.
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
              - ram2015
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/locator
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
  atlas-node:
    name: Macaca silenus
    commonName: Lion-tailed Macaque
    commonNameZh: 狮尾猕猴
    rank: species
    taxonId: ""
    colUsageId: 3WWP6
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    rangeEvidenceLevel: withheld-no-range-evidence
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: dossier
---

# Macaca silenus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
西高止山脉野生样本的线粒体 DNA 研究，部分分析另列圈养血样；支持所采样地点、标记与碎片化种群的比较。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Mitochondrial-DNA study of wild Western Ghats samples, with separately identified captive blood samples in some analyses; supports comparisons among sampled localities, markers, and fragmented populations.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
2016 年旱季对泰米尔纳德邦 Puthuthottam 一群自由活动狮尾猴的栖地行为与觅食观察。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Dry-season 2016 observations of habitat behaviour and foraging in one free-ranging lion-tailed macaque troop at Puthuthottam, Tamil Nadu.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
bioRxiv v1 未经同行评审；单一 92 公顷斑块四群猴在一个旱季的 375.9 小时观察。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
bioRxiv v1 preprint not certified by peer review; 375.9 observation hours across four troops at one 92-hectare fragment in one dry season.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 species usage 3WWP6 verified against ChecklistBank dataset 316115 search and taxon endpoints; verbatim name, authorship, species rank, accepted status, sourceDatasetId 2144, and Primates parent classification were checked. The complete accepted parent path through Primates was verified from the immutable COL26.8 hierarchy archive.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage 3WWP6 only. Existing mitochondrial evidence is regional to sampled Western Ghats populations. Dhawale et al. (2020) concerns one free-ranging troop at Puthuthottam in February–May 2016. Bindu et al. (2024) is a separate bioRxiv v1 study of four troop groups at Puduthottam during four months of one dry season; its field year is not reported and it was not certified by peer review.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Ram et al. (2015) sampled wild Western Ghats populations. Dhawale et al. (2020) followed one free-ranging Puthuthottam troop in February–May 2016. Bindu et al. (2024) reports 375.9 focal-watch hours across four wild troop groups at Puduthottam during four months of one dry season; the preprint gives no calendar year and was not certified by peer review. These are bounded field samples, not captive, domesticated, or fossil records.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3WWP6; accepted status, sourceDatasetId 2144, and Primates classification in the taxon record. Pinned COL26.8 parent path through accepted Papionini (L4C) reaches Primates (3W7).
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted scientific name and authorship, rank, status, sourceDatasetId, and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Methods, “Study area” and “Sample collection”; Results, “Genetic structure and diversity of lion-tailed macaques in the Western Ghats” and “Genetic diversity in the fragmented population of Anamalai hills”; Figures 1–2; Tables 1 and 3.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary mitochondrial-DNA study of wild Western Ghats samples, with separately identified captive samples in some analyses. Claims are paraphrased and limited to sampled sites and markers; figures and sequences are not redistributed.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Ram MS, Marne M, Gaur A, et al. (2015). Pre-Historic and Recent Vicariance Events Shape Genetic Structure and Diversity in Endangered Lion-Tailed Macaque in the Western Ghats: Implications for Conservation. PLoS ONE 10(11):e0142597. https://doi.org/10.1371/journal.pone.0142597. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Methods—Study area, Study troop and individuals, and Field methods; Results—Ecological and behavioural responses of lion-tailed macaques to habitat types; Fig. 3.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary field study of one habituated, free-ranging troop in the Puthuthottam forest fragment on the Valparai plateau, Tamil Nadu, India. Behaviour was sampled February–May 2016 in four local habitat types; observations covered over 480 follow-hours. Claims are paraphrased; article text, figures, and supplementary files are not reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Dhawale AK, Kumar MA, Sinha A (2020). Changing ecologies, shifting behaviours: Behavioural responses of a rainforest primate, the lion-tailed macaque Macaca silenus, to a matrix of anthropogenic habitats in southern India. PLoS ONE 15(9):e0238695. https://doi.org/10.1371/journal.pone.0238695. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
Paraphrased article text under the stated CC BY 4.0 license; no figures, tables, or supplementary material are copied; separately credited third-party material is excluded.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract, final four sentences on focal-watch effort and age/sex differences in fruit consumption and Ficus seed dispersal; bioRxiv version 1.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Primary field study of free-ranging Macaca silenus across four troop groups at Puduthottam rainforest fragment (92 ha), Valparai plateau, Anamalai Hills, Tamil Nadu, India. The 375.9 focal-watch hours were collected over four months in one dry season; calendar dates/year are not reported. This is a bioRxiv v1 preprint that was not certified by peer review; results are limited to these groups, this fragment, and this season.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Bindu K, Kumara HN, Naniwadekar R (2024). Age and sex influence seed dispersal of native and non-native plants by Lion-tailed Macaques Macaca silenus. bioRxiv 2024.12.09.627456, version 1. https://doi.org/10.1101/2024.12.09.627456. Claims are paraphrased; this is a preprint not certified by peer review.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The mitochondrial-DNA study does not assess species-level anatomical morphology.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-cycle, reproductive, growth, survival, or longevity evidence was assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
From February to May 2016, researchers followed one habituated, free-ranging troop of lion-tailed macaques at Puthuthottam in the Valparai plateau, Tamil Nadu, recording over 480 follow-hours across forest interior, forest edge, an open forest patch, and a human settlement. In this troop, active foraging was higher in the open patch and forest edge, and lower in the human settlement, than in the forest interior; its time-activity budget also differed between the interior and settlement. This dry-season study of one troop does not establish a species-wide response to human-modified habitat.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
2016 年 2 月至 5 月，研究者在泰米尔纳德邦瓦尔帕赖高原的普图托坦，跟踪观察了一群已习惯观察者、自由活动的狮尾猕猴，在林内、林缘、开阔林地斑块和人类居住地四种栖息地累计记录了 480 多小时。在这群猴中，与林内相比，开阔斑块和林缘的主动觅食更多，人类居住地的主动觅食更少；林内与居住地之间的活动时间预算也有差异。这项旱季单群体研究不能证明该物种对人为改造栖息地具有普遍反应。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods—Study area, Study troop and individuals, and Field methods; Results—Ecological and behavioural responses of lion-tailed macaques to habitat types; Fig. 3.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
One Puthuthottam troop on the Valparai plateau, Anamalai Hills, Tamil Nadu, southern Western Ghats; observations in four habitat types during February–May 2016, the dry season; over 480 follow-hours.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging wild troop; one troop and dry-season observations only.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
During the recorded foraging observations, the study troop consumed plant parts from 19 plant species and also non-plant foods; recorded diet composition differed among habitats, with more invertebrate consumption in the Open Forest Patch than in the Forest Interior and more plant matter in the Forest Interior than in the Forest Edge. These are observations of one troop during the study period, not a complete species-wide diet or population-wide resource-use estimate.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
在该研究的觅食观察中，这群狮尾猕猴食用了 19 种植物的部分，也摄食非植物性食物；记录到的食物组成随栖息地而异：在开阔林地斑块中摄食的无脊椎动物多于林内，而林内的植物性食物多于林缘。这些观察仅来自研究期间的一群猴，不是物种完整食谱或种群范围内资源利用估计。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/locator -->
Results, Ecological and behavioural responses of lion-tailed macaques to habitat types; Table 2 and accompanying text comparing plant matter and invertebrate consumption among habitats.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
One free-ranging troop at Puthuthottam, Valparai plateau, Anamalai Hills, Tamil Nadu, India; dry-season observations from February through May 2016 across forest interior, forest edge, open forest patch, and human settlement.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
One free-ranging wild troop; no captive, domesticated, or fossil observations are included.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/text -->
Across four troop groups, 375.9 hours of focal-animal watches were distributed among adult males, adult females, and subadult males. The bioRxiv v1 abstract reports that sampled subadults consumed a greater diversity of native and non-native fruits than adult females and males and dispersed fewer Ficus seeds than females. These are preliminary, group-, site-, and season-specific results; the preprint was not certified by peer review.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/textZh -->
在四个猴群中，研究将 375.9 小时的焦点动物观察分配给成年雄性、成年雌性和亚成年雄性。bioRxiv v1 摘要报告：受观察的亚成体摄食的本地及非本地水果种类多样性高于成年雌性和雄性，传播的榕属种子少于雌性。这些是限定于猴群、地点和季节的初步结果；该预印本未经同行评审。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/locator -->
Methods §§2.1–2.2 (92-ha study site, four troop groups, 375.9 focal-watch hours, and adult/subadult sampling); Abstract (age/sex differences in fruit diversity and Ficus seed dispersal); bioRxiv version 1, not certified by peer review.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/placeTimeScope -->
Four free-ranging troop groups at the 92-ha Puduthottam rainforest fragment on the Valparai plateau, Anamalai Hills, Tamil Nadu, India; 375.9 focal-watch hours spanned four months in one dry season. Calendar sampling dates and year are not reported; these groups, site, and season do not establish species-wide patterns.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/lifeStatus -->
Free-ranging wild macaques in four troop groups; this claim does not include captive, domesticated, or fossil observations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Dhawale et al. (2020) diet and habitat evidence concerns one troop at one forest fragment during one dry season. Bindu et al. (2024) adds observations from four troop groups at one fragment during one dry season; annual variation, other populations, and species-wide resource use remain unassessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Competition, predation, mutualism, and broader parasite interactions remain unassessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Age- and sex-stratified fruit and seed-dispersal evidence comes from 375.9 focal-watch hours across four troop groups at the Puduthottam fragment over four months in one dry season. It is reported in a bioRxiv v1 preprint not certified by peer review; it does not establish species-wide patterns or annual variation. Exact field dates and year are not reported.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Ram et al. recovered north-of-Palghat-gap and south-of-Palghat-gap mitochondrial clades among sampled lion-tailed macaques. A fossil-calibrated analysis of 893 mitochondrial bases estimated a mean time to their most recent common ancestor of 2.11 million years; this is a model-based estimate from mitochondrial markers, not a genome-wide species split date.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
Ram 等人在受采样的狮尾猕猴中识别出帕尔加特山口以北和以南的线粒体分支。基于 893 个线粒体碱基的化石校准分析，将其最近共同祖先的平均时间估为 211 万年前；这是线粒体标记的模型估计，不是全基因组物种分化日期。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Sampled Macaca silenus populations north and south of the Palghat gap in the Western Ghats; divergence time is a fossil-calibrated mitochondrial-model estimate.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Primarily wild fecal samples collected in 2010–2012; 23 captive blood samples were separately identified in the study.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The short mitochondrial markers and regional samples do not establish a complete species phylogeny or genome-wide population history.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The study collected wild fecal samples at 15 named locations in Karnataka, Kerala, and Tamil Nadu in the Western Ghats. The sampling map documents this study's sites and is not a complete current range inventory.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
该研究在西高止山脉的卡纳塔克邦、喀拉拉邦和泰米尔纳德邦 15 个具名地点采集了野生个体粪便样本。采样图记录的是本研究的地点，并非当前完整分布区名录。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Western Ghats study localities in three Indian states; wild samples were collected during 2010–2012.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild-origin fecal samples; captive blood samples are separately described and are not treated as range records.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Study localities do not establish complete current occupancy or a full distribution boundary.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
Fossil occurrence and the broader geological record were not reviewed; fossil calibrations in a molecular model are not a fossil inventory.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
Within the sampled Anamalai hills, HVR-I diversity was lower in eight forest fragments than in the adjacent continuous Nelliyampathy population. The comparison is based on mitochondrial markers from these sites and does not itself estimate current population viability or a formal conservation category.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
在受采样的阿纳马莱丘陵地区，八个森林碎片中的 HVR-I 多样性低于邻近连续分布的内利亚姆帕蒂种群。该比较基于这些地点的线粒体标记，不能据此估算当前种群存续能力或正式保育等级。
<!-- /evo:text -->

## conservation / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/locator -->
Results, “Genetic diversity in the fragmented population of Anamalai hills”; Table 3; Discussion, “Effect of fragmentation on genetic diversity of lion-tailed macaques in Anamalai hills”.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Eight Anamalai forest fragments compared with the continuous Nelliyampathy population in the Western Ghats; samples collected in 2010–2012.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild-origin fecal samples from free-ranging troops.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
This local genetic comparison is not a current species-wide conservation assessment, abundance trend, or viability analysis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Evidence remains geographically and methodologically bounded: regional mitochondrial samples, a one-troop habitat study by Dhawale et al. (2020), and a separate four-troop study at one fragment in a single dry season reported in a bioRxiv v1 preprint not certified by peer review. Broader ecology and population coverage remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphology, life history, and fossil evidence remain unassessed; independent expert review has not been completed.
<!-- /evo:text -->
