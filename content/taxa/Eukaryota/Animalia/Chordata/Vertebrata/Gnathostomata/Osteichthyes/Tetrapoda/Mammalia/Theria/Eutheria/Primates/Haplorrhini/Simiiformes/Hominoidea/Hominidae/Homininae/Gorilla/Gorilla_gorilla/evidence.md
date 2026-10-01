---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gorilla gorilla (Savage & Wyman, 1847)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 西部大猩猩
      en: Western gorilla
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
    sources:
      referenceBindings:
        - referenceId: ref-2ae530bd-78b4-87a2-a64f-e3c288216639
          metadataVariant: 0
          sourceKey: ortmann2022
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
        - referenceId: ref-90a37661-f89e-869d-ae1f-5d4432c864a8
          metadataVariant: 0
          sourceKey: breuer2005tool
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
        - referenceId: ref-7408cb2f-1826-8f90-a853-c543556454bd
          metadataVariant: 0
          sourceKey: robbins2023gorillalifehistory
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3H3C9
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
    scientificName: Gorilla gorilla (Savage & Wyman, 1847)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-26
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      parentChain:
        - id: 62SMC
          name: Gorilla
          authorship: I. Geoffroy Saint-Hilaire, 1852
          rank: genus
          status: accepted
        - id: JPH
          name: Homininae
          authorship: Gray, 1825
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
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3H3C9
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
        - referenceId: ref-ddc0ba65-757e-83ef-ad53-eee212f94d73
          metadataVariant: 0
          sourceKey: ortmann2022
          usage:
            licenseAppliesTo: Article text; this dossier paraphrases the text and reproduces no figures, tables, or supplementary data.
            stableId: doi:10.1371/journal.pone.0271576
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0271576
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
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
        - referenceId: ref-4536c534-f158-827f-a68f-8195c6ae9a5f
          metadataVariant: 0
          sourceKey: breuer2005tool
          usage:
            licenseAppliesTo: Article text; claims are paraphrased and no figures, tables, or images are reproduced.
            stableId: doi:10.1371/journal.pbio.0030380
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.0030380
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
        - referenceId: ref-c6be4daf-963b-8fd6-a24d-759f6dc67ad5
          metadataVariant: 0
          sourceKey: mcmanus2015gorillagenome
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo
            stableId: doi:10.1093/molbev/msu394
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://academic.oup.com/mbe/article/32/3/600/981274
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAssessment
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - licenseAppliesTo
            - attribution
            - scope
        - referenceId: ref-ba4903ab-5712-8575-a2fe-d52c54b3e3d8
          metadataVariant: 0
          sourceKey: robbins2023gorillalifehistory
          usage:
            licenseAppliesTo: Article text only; this dossier paraphrases the results and reproduces no figures, tables, or supplementary data.
            stableId: doi:10.1002/ajpa.24792
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://pure.mpg.de/pubman/item/item_3517901_4
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
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
        - referenceId: ref-63b95c8b-c875-877f-a348-1ab3fd1e38d8
          metadataVariant: 0
          sourceKey: mcgrath2022facialasymmetry
          usage:
            licenseAppliesTo: Article text. The dossier paraphrases the abstract and reproduces no figures, tables, or supplementary data.
            stableId: doi:10.1098/rspb.2021.2564
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://discovery.ucl.ac.uk/id/eprint/10145514/
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/scope
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            sourceIds:
              - mcgrath2022facialasymmetry
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
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - robbins2023gorillalifehistory
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
              - ortmann2022
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
            sourceIds:
              - ortmann2022
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/textZh
            sourceIds:
              - breuer2005tool
            locator: Abstract; Results, observations of Leah on 9 October 2004 and Efi on 21 November 2004; Discussion; Methods, Mbeli Bai.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/2/lifeStatus
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - mcmanus2015gorillagenome
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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
---

# Gorilla gorilla

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
加蓬 Loango 国家公园一个习惯化西部低地大猩猩群体，2018 年 1 月至 2020 年 7 月；取食值来自扫描观察。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
One habituated western lowland gorilla group at Loango National Park, Gabon, January 2018–July 2020; feeding values are scan-based.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
刚果共和国 Mbeli Bai 两只自由活动成年雌性西部大猩猩于 2004 年的两次观察；未估算行为频率。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Two 2004 observations of free-ranging adult female western gorillas at Mbeli Bai, Republic of Congo; behavior frequency was not estimated.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
刚果共和国 Mbeli Bai 一个长期监测的西部低地大猩猩种群；产仔年龄和产间隔来自不同雌性子集。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
One long-term monitored western lowland gorilla population at Mbeli Bai, Republic of Congo; age-at-first-birth and interbirth estimates use different female subsets.
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
Exact accepted COL26.8 usage record queried at ChecklistBank dataset 316115; name, authorship, species rank, accepted status, source sector, and parent chain were checked from the taxon endpoint.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage 3H3C9 only. Existing ecology evidence is from one western lowland group at Loango and two tool-use observations at Mbeli Bai; evolutionary evidence is one model-based demographic history from 14 western lowland gorilla genomes; female life-history estimates concern one free-ranging western lowland population at Mbeli Bai; and morphology evidence concerns facial fluctuating asymmetry in one archival western-lowland cranial sample from a comparative study of three subspecies. These bounded samples do not constitute a species-wide or range-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Ecology evidence is from free-ranging gorillas at Loango and Mbeli Bai; life-history evidence is from female western lowland gorillas at one monitored Mbeli Bai population during 1995–2020. The genomic study used samples mostly from wild-caught zoo-held specimens and is not contemporary field sampling. The morphology source used archival crania, but original wild or captive status is not documented specimen by specimen for the target sample. No claim is extrapolated to every Gorilla gorilla population.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
Domestication was not examined. The genomic study used mostly zoo-held, wild-caught specimens; individual origins are not all resolved, and no domesticated biology is asserted.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8, ChecklistBank release dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Taxon usage 3H3C9 and its source endpoint; sourceDatasetKey 2144, sourceId ITIS TSN 573080, sectorKey 1508; name, authorship, rank, status, parentId, and ancestor records are recorded in identity.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name Gorilla gorilla, authorship (Savage & Wyman, 1847), species rank, accepted status, ITIS source dataset 2144, source sector 1508, and COL26.8 parent chain only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods, Study site and data collection; Dietary composition based on feeding time; Results, Dietary composition; Fruit availability and frugivory per month; Table 2; Figure 1; Supporting Information Tables S2 and S5.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Robbins MM, Ortmann S, Seiler N. (2022). Dietary variability of western gorillas (Gorilla gorilla gorilla). PLOS ONE 17(8):e0271576. https://doi.org/10.1371/journal.pone.0271576. CC BY 4.0. Claims are paraphrased; no figures, tables, or supplementary data are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary dietary field study of one habituated group of 10 western lowland gorillas at Loango National Park, Gabon, from January 2018 to July 2020. Diet values are feeding-time estimates from scan sampling; cross-site comparisons are not used as species-wide means.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Results, observations of Leah on 9 October 2004 and Efi on 21 November 2004; Methods, Mbeli Bai; Acknowledgments.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Breuer T, Ndoundou-Hockemba M, Fishlock V. (2005). First Observation of Tool Use in Wild Gorillas. PLoS Biology 3(11):e380. https://doi.org/10.1371/journal.pbio.0030380. CC BY 4.0. Claims are paraphrased and no figures are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Two observations of wild adult female western gorillas from different habituated groups at the 12.9-ha Mbeli Bai swampy forest clearing in Nouabalé-Ndoki National Park, Republic of Congo: Leah on 2004-10-09 and Efi on 2004-11-21. The authors acknowledge park-work permission from the Ministry of Forestry and the Nouabalé-Ndoki Project; no permit number is stated. The study does not estimate behavior prevalence or establish how the behavior was acquired.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
Article text only. The dossier paraphrases the article and redistributes no figures, tables, images, or supplementary datasets.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract; Results, Gorilla Population Structure and Western Gorilla Demographic Inference; Table 2; Methods, Samples and Demographic Inference of Western Lowland Gorilla.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
McManus KF, Kelley JL, Song S, Veeramah KR, Woerner AE, Stevison LS, Ryder OA, Great Ape Genome Project, Kidd JM, Wall JD, Bustamante CD, Hammer MF (2015). Inference of Gorilla Demographic and Selective History from Whole-Genome Sequence Data. Molecular Biology and Evolution 32(3):600–612. https://doi.org/10.1093/molbev/msu394. Claim paraphrased; CC BY-NC 4.0.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Whole-genome sequence analysis of 14 western lowland, 2 eastern lowland, and 1 Cross River gorilla. The demographic claim uses a single-population model of the genome-wide site-frequency spectrum from the 14 western lowland samples. The article says samples were mostly blood from wild-caught zoo specimens; individual origins were diverse and some could not be precisely confirmed. The model does not estimate a current census or the histories of all Gorilla gorilla subspecies.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/locator -->
Methods §2.1, Study sites and data collection; §2.2, interval and surviving-birth-rate definitions; Results §3, age at first parturition, interbirth intervals, and surviving birth rate; Table 3, Mbeli western gorilla column and note.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Robbins MM, Akantorana M, Arinaitwe J, Breuer T, Manguette M, McFarlin S, Meder A, Parnell R, Richardson JL, Stephan C, Stokes EJ, Stoinski TS, Vecellio V, Robbins AM (2023). Comparative life history patterns of female gorillas. American Journal of Biological Anthropology 181(4):564–574. https://doi.org/10.1002/ajpa.24792. CC BY 4.0. Claim paraphrased; no figures, tables, or supplementary data are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Female life-history estimates from one monitored western lowland gorilla population at Mbeli Bai, Nouabalé-Ndoki National Park, Republic of Congo. The long-term demographic database included 525 gorillas in 101 social units observed February 1995–May 2020. Estimates are site-specific and do not establish values across all Gorilla gorilla populations or subspecies.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/locator -->
Abstract; the comparative analysis covers 114 crania from three Gorilla subspecies and reports fluctuating facial asymmetry as a proportion of total facial-shape variation for the western lowland sample.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/attribution -->
McGrath K, Eriksen AB, Garcia-Martinez D, Galbany J, Gomez-Robles A, et al. (2022). Facial asymmetry tracks genetic diversity among Gorilla subspecies. Proceedings of the Royal Society B: Biological Sciences 289(1969):20212564. https://doi.org/10.1098/rspb.2021.2564. CC BY 4.0. Claim paraphrased; no figures, tables, or supplementary data are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
Comparative 3D geometric-morphometric study of adult crania from three Gorilla subspecies. The target result is specific to the western lowland gorilla sample within the accepted species Gorilla gorilla; it is not a species-wide estimate. Precise specimen provenance and original wild/captive status are not documented for every target-sample skull.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In a 3D geometric-morphometric comparison of 114 crania from three Gorilla subspecies, facial fluctuating asymmetry (random departure from bilateral symmetry) explained 6% of total facial-shape variation in the western lowland gorilla sample. This is a comparative archival-skull result, not a species-wide estimate or a description of other anatomical regions.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
在一项对 3 个大猩猩亚种的 114 个头骨进行的 3D 几何形态测量比较中，西部低地大猩猩样本的面部波动不对称（偏离左右对称的随机变异）解释了总面部形状变异的 6%。这是馆藏头骨比较结果，不是全物种估计，也不描述其他解剖部位。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Abstract: comparative study sample, definition of fluctuating asymmetry and reported percentage of total facial-shape variation for the western lowland gorilla sample.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Comparative archival study of 114 adult crania from three Gorilla subspecies. The claim concerns the western lowland gorilla sample; specimen-level collection localities are not available for every skull in this claim.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Archival crania. Original wild or captive status is not documented specimen by specimen for the target sample; no life-status category is inferred.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Evidence covers facial fluctuating asymmetry in one archival western-lowland cranial sample only; other cranial and postcranial anatomy, developmental and sex-related variation, population variation, and specimen-level provenance remain unassessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
At Mbeli Bai, the monitored western lowland gorilla population (Gorilla gorilla gorilla) had a mean female age at first parturition of 12.2 ± 0.6 years (n = 7). Mean interbirth interval was 5.4 ± 0.9 years (n = 54 intervals; the analysis included intervals whose offspring survived to age three), and the rate of offspring surviving to age three was 0.121 per adult female-year. These are estimates for this site and study population, not species-wide values.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
在 Mbeli Bai 受监测的西部低地大猩猩种群（*Gorilla gorilla gorilla*）中，雌性初次分娩的平均年龄为 12.2 ± 0.6 岁（n = 7）。平均产间隔为 5.4 ± 0.9 年（n = 54 个间隔；分析纳入其后代存活至 3 岁的间隔）；后代存活至 3 岁的出生率为每成年雌性年 0.121。这些是该地点和研究种群的估计，不代表全物种数值。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Methods §2.1, Study sites and data collection; §2.2, interbirth interval and surviving-birth-rate definitions; Results §3; Table 3, Mbeli western gorilla column and note.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Mbeli Bai, a swampy clearing in Nouabalé-Ndoki National Park, Republic of Congo. The western-gorilla demographic database included 525 gorillas in 101 social units observed February 1995–May 2020. First-parturition and interval estimates concern female subsets; intervals were limited to offspring surviving to age three for the interbirth-interval analysis.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-ranging wild western lowland gorillas (Gorilla gorilla gorilla) at one long-term monitored site. The claim does not cover captive animals, other gorilla populations, or every Gorilla gorilla subspecies.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Life-history estimates are from one western lowland gorilla population at Mbeli Bai and from specific female subsamples; development, lifespan, and life-history variation across other Gorilla gorilla populations and subspecies remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At Loango National Park, Gabon, a study followed one habituated Atananga group of 10 western lowland gorillas from January 2018 to July 2020, collecting 5,896 observation hours over 652 days. Across the two complete years, mean feeding time was 31% fruit, 21% herbs, 31% tree foods, 10% nuts, and 0% insects. These are scan-based estimates for one group and site, not a species-wide diet.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在加蓬 Loango 国家公园，研究人员于 2018 年 1 月至 2020 年 7 月跟踪一群经习惯化的 Atananga 西部低地大猩猩（10 只），累计观察 652 天、5,896 小时。两个完整年度的平均取食时间中，果实占 31%、草本植物占 21%、树类食物占 31%、坚果占 10%、昆虫占 0%。这些是基于扫描观察的单群体、单地点估计，不能代表整个物种的饮食。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods, Study site and data collection; Dietary composition based on feeding time; Results, Dietary composition; Table 2.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
One Atananga group in Loango National Park, Gabon; field observations from January 2018 to July 2020. Annual food-type values average the two complete years; 2020 was excluded from annual feeding-time summaries because it was incomplete.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging, wild western lowland gorillas (Gorilla gorilla gorilla) in one habituated group; not representative of all Gorilla gorilla populations.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
Across 31 monthly observations at Loango, fruit availability and the group's proportion of feeding scans spent eating fruit were positively correlated (Pearson r = 0.623, t = 4.209, df = 28, p < 0.001). This is an association observed in one group at one site; it does not establish causation or a species-wide seasonal pattern.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
在 Loango 的 31 个月度观察中，果实可获得性与该群体用于取食果实的扫描记录比例呈正相关（Pearson r = 0.623，t = 4.209，df = 28，p < 0.001）。这是单一地点、单一群体中的相关关系，不能证明因果关系或代表整个物种的季节规律。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/locator -->
Methods, Fruit availability index and Statistical analysis; Results, Fruit availability and frugivory per month; Figure 1; Supporting Information Table S5.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Monthly observations for one group at Loango National Park, Gabon, spanning 31 months during 2018–2020.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Free-ranging, wild western lowland gorillas in one habituated group; no inference to other populations or the full species range.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/text -->
At Mbeli Bai, Republic of Congo, two wild adult female western gorillas from different groups used detached plant material for support in swamp water: on 9 October 2004 Leah used a branch to probe depth and steady herself while crossing an elephant pool; on 21 November 2004 Efi used a shrub trunk to stabilize food processing and then as a short bridge over swampy ground. These two observations do not estimate how often the behavior occurs or how it is acquired.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/textZh -->
在刚果共和国 Mbeli Bai，两只来自不同群体的野生成体雌性西部大猩猩在沼泽水域中使用脱落的植物材料支撑身体：2004 年 10 月 9 日，Leah 用树枝探测水深并在穿越象池时保持稳定；2004 年 11 月 21 日，Efi 用灌木树干支撑取食，随后将其当作跨越沼泽地面的短桥。这两次观察不能估计该行为的发生频率，也不能说明其习得方式。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/placeTimeScope -->
Mbeli Bai, a 12.9-ha swampy forest clearing in Nouabalé-Ndoki National Park, Republic of Congo; two observations on 2004-10-09 and 2004-11-21, one adult female from each of two habituated groups.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/2/lifeStatus -->
Free-ranging wild western gorillas; both cases concern adult females observed at one monitored site. No captive or domesticated animals are included.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Diet evidence is from one Atananga feeding group at Loango; tool-use evidence consists of two events, one in each of two habituated groups at Mbeli Bai. Frequency, other populations, causal mechanisms, and the full ecological repertoire remain unassessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Using a diffusion-approximation model of the genome-wide site-frequency spectrum from 14 western lowland gorilla genomes, McManus et al. inferred an ancestral effective-population-size expansion of about 1.4-fold near 970 ka, followed by a 5.6-fold contraction near 23 ka. This is a model-based estimate for the sampled western-lowland lineage, not a current census or an estimate for every Gorilla gorilla subspecies; the authors state that the causes are unclear.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
麦克马纳斯等人使用 14 只西部低地大猩猩的全基因组位点频率谱进行扩散近似建模，推断其祖先有效种群规模在约 97 万年前扩大约 1.4 倍，随后在约 2.3 万年前收缩约 5.6 倍。这是针对所采样西部低地谱系的模型估计，不是当前种群普查数量，也不能代表 *Gorilla gorilla* 的所有亚种；作者指出这些变化的成因尚不清楚。
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Abstract; Results, Gorilla Population Structure and Western Gorilla Demographic Inference; Table 2; Methods, Samples and Demographic Inference of Western Lowland Gorilla.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
A diffusion-approximation analysis of the genome-wide site-frequency spectrum from 14 western lowland gorilla genomes, based on 4,554,752 SNPs with at least 8× coverage in every sample. The inferred expansion and contraction are model dates near 970 ka and 23 ka, respectively; their causes are unresolved.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
The paper says gorilla samples were mostly blood from wild-caught zoo specimens. The sample origins were diverse and some could not be precisely confirmed; this is not a contemporary field sample of free-ranging populations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The demographic estimate is limited to one model of 14 western lowland gorilla genomes. This dossier has not synthesized broader population-structure and introgression evidence or independently reviewed demographic histories across all accepted subspecies.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
One field site is not a current or historical range inventory for Gorilla gorilla.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The dietary study does not assess the fossil record.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No formal species-level conservation assessment, population trend, or risk category was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The record contains bounded site-specific ecology, genomic evolution and female life-history evidence, plus facial asymmetry evidence from one archival western-lowland cranial sample; other anatomy, species-wide distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature coverage across the accepted species concept, morphology, and variation among other populations and subspecies remains incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
