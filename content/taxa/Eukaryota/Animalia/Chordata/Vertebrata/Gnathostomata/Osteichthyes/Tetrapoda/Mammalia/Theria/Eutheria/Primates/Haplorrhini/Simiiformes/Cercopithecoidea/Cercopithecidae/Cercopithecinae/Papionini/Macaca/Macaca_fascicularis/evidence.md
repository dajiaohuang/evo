---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Macaca fascicularis (Raffles, 1821)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 长尾猕猴
      en: Long-tailed macaque
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
        - referenceId: ref-a0926bb0-3b61-8a3c-a4f9-a58219357dc8
          metadataVariant: 0
          sourceKey: reinegger2023
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
        - referenceId: ref-fe4c628b-7b9c-8d56-a9f0-7eb2c7979d8b
          metadataVariant: 0
          sourceKey: chapple2024patterning
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
        - referenceId: ref-3f1be006-dd01-88b8-a5ae-07b7a786283f
          metadataVariant: 0
          sourceKey: bailey2023
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWND
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
    scientificName: Macaca fascicularis (Raffles, 1821)
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWND
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115, DOI 10.48580/dgywk
            stableId: col:3WWND@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 3WWND; accepted status, sourceDatasetId 2144, parentId 5HYC, and Primates classification.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3WWND. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-0044521a-7cab-8e9b-a385-3f5ee7c74236
          metadataVariant: 0
          sourceKey: bailey2023
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1002/ece3.10571
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10577069/
            accessedAt: 2026-09-24
            locator: Abstract; Materials and Methods, Samples and Genome Sequencing; Results; Figures 1 and 3.
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
        - referenceId: ref-735d4aa1-8d83-85c0-a9e6-df2582ae7642
          metadataVariant: 0
          sourceKey: reinegger2023
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1007/s10764-022-00324-9
            rightsEvidenceUrl: https://link.springer.com/article/10.1007/s10764-022-00324-9
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
        - referenceId: ref-7e7c5f57-9aae-80c4-a370-49ae5b8cc34d
          metadataVariant: 0
          sourceKey: chapple2024patterning
          usage:
            licenseAppliesTo: The publisher PDF identified in the Kent repository record; separately credited third-party material may be excluded.
            stableId: doi:10.1016/j.archoralbio.2024.106067
            rightsEvidenceUrl: https://kar.kent.ac.uk/106845/
            accessedAt: 2026-09-26
            locator: Abstract—Design, Results and Conclusions; Methods §2.1—Study sample; Results on accessory-cusp patterning.
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
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
              - chapple2024patterning
            locator: Abstract—Design, Results and Conclusions; Methods §2.1—Study sample.
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
            sourceIds:
              - reinegger2023
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            sourceIds:
              - reinegger2023
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
            translationStatus: untranslated
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
            sourceIds:
              - bailey2023
            locator: Abstract; Results; Figures 1 and 3.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
      reviewers: []
      reviewDigest: null
---

# Macaca fascicularis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
毛里求斯 Mt Calebasses 一个自由活动引入群体，2019 年 12 月至 2020 年 12 月；不是原生分布区调查。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
One free-ranging introduced group at Mt Calebasses, Mauritius, December 2019–December 2020; not a native-range survey.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
单一灵长类中心收藏的 13 颗下颌第二臼齿微型 CT 与几何形态测量样本。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Micro-CT and geometric-morphometric sample of 13 mandibular second molars from one primate-centre collection.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
恒河猴和长尾猕猴异域与同域群体的比较全基因组分析；结果与强化选择模型相容，但不构成证明。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Comparative whole-genome analysis of allopatric and parapatric rhesus and cynomolgus groups; results are consistent with, but do not prove, a reinforcement model.
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
Exact accepted COL26.8 species usage 3WWND verified in the pinned registry search and hierarchy records: verbatim name/authorship, species rank, accepted status, parentId 5HYC, sourceDatasetId 2144, and classification through Primates.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by accepted COL26.8 usage 3WWND. The biological claim concerns comparative whole-genome analyses of selected allopatric and parapatric samples and does not represent every population or the species-wide range. The added morphology evidence analyzes 13 selected mandibular second molars from one research collection and does not represent all populations, ages, or the species-wide range.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The ecological study observed one free-ranging introduced (non-native) group in Mauritius; the genomic study analyzed selected allopatric and parapatric samples. Neither source establishes a species-wide ecological or population account. The added morphology evidence is specimen-based rather than a field-population sample; individual wild or captive histories are not inferred.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted scientific name and authorship, rank, status, sourceDatasetId, and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary comparative whole-genome study of rhesus and cynomolgus macaques using allopatric and parapatric sample groups. Claims are paraphrased; article text only is relied on, with no figure, map, sequence, or supplementary data reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Bailey N, Ruiz C, Tosi A, Stevison L. (2023). Genomic analysis of the rhesus macaque (Macaca mulatta) and the cynomolgus macaque (Macaca fascicularis) uncover polygenic signatures of reinforcement speciation. Ecology and Evolution 13(10):e10571. https://doi.org/10.1002/ece3.10571. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Methods, Study Site; Study Group and Habituation Process; Data Collection; Results, Effects of Fruit Availability on Home Range; Effects of Food Availability on Diet; Tables I, II and S2; Figure 3.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary field study of one partially habituated, free-ranging introduced group at Mt Calebasses, Mauritius, from December 2019 to December 2020. Claims are limited to this site and group; the study is not a native-range survey, species-wide diet or distribution assessment, or measurement of realized plant-invasion outcomes. Article text is paraphrased; no figures, maps, or supplementary tables are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Reinegger N, Oleksy R, Gazagne E, Jones G. (2023). Foraging Strategies of Invasive Macaca fascicularis may Promote Plant Invasion in Mauritius. International Journal of Primatology 44:140–170. https://doi.org/10.1007/s10764-022-00324-9. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Primary micro-CT and geometric-morphometric analysis of 13 selected Macaca fascicularis mandibular second molars. This specimen sample does not estimate population-wide or species-wide variation. Claims are independently paraphrased; no article prose, figures, images, or specimen-level data are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Chapple SA, Smith TM, Skinner MM. (2024). Testing the patterning cascade model of cusp development in Macaca fascicularis mandibular molars. Archives of Oral Biology 167:106067. https://doi.org/10.1016/j.archoralbio.2024.106067. Claims are paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In a micro-CT and geometric-morphometric analysis of 13 selected Macaca fascicularis mandibular second molars (M2s), molars with accessory cusps were larger and had shorter relative cusp heights than molars without accessory cusps; peripheral-cusp presence was associated with more centrally positioned primary cusps. These sample patterns were broadly consistent with the patterning-cascade model, but the authors state that the model did not explain every form of accessory-cusp expression in this sample.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
一项对 13 颗经筛选的长尾猕猴下颌第二臼齿（M2）进行的微型 CT 与几何形态测量研究发现，带附加牙尖的臼齿体积较大、相对牙尖高度较短；周缘牙尖的出现与主要牙尖位置更居中相关。样本中的这些模式总体符合模式级联模型，但作者指出，该模型无法解释本样本中所有附加牙尖的表现。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Specimen-based study from a single primate-centre collection; the cited abstract does not provide specimen collection dates. The article first appeared online 2024-08-08 and was published in the November 2024 issue.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Specimen-based rather than a live field-population sample; the cited abstract does not establish the wild or captive history of each specimen.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The evidence is limited to 13 selected mandibular second molars from one research collection; it does not establish variation across populations, ages, dental positions, or the full species range, and it does not resolve all accessory-cusp expression.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-cycle, reproductive, growth, survival, or longevity evidence was assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At Mt Calebasses, Mauritius, one group of 19–23 long-tailed macaques had a 34.9-ha total home range during the study. Its mean monthly range was 10.6 ± 3.0 ha during the high-fruit period (February–June 2020) and 17.8 ± 5.6 ha outside that period; monthly range was negatively correlated with fruit availability (r = −0.65, adjusted p = 0.037). This is a one-group, one-site seasonal result, not a species-wide estimate.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Results, Effects of Fruit Availability on Home Range; paragraphs beginning ‘Our study group had a total home range’; Figure 3.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Mt Calebasses, Mauritius; one study group observed from December 2019 to December 2020, with the high-fruit period defined as February–June 2020.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
One free-ranging introduced (non-native) group; not representative of native-range populations.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
At this site, invasive plants accounted for 98% of plant-feeding scans and 97% of fruit-feeding scans. In the scan-based fruit-feeding observations, recorded dietary proportions were concentrated in invasive Litsea sp. (40.2%), Psidium cattleyanum (39.3%), and Flacourtia indica (9.5%). The authors discuss possible seed-dispersal effects, but these observations do not measure germination, seedling recruitment, or realized plant-invasion rates.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/locator -->
Results, Effects of Food Availability on Diet; paragraphs beginning ‘The macaques spent the largest percentage’ and ‘Macaques consumed plant parts’; Table S2.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Mt Calebasses, Mauritius; feeding observations of one study group during the December 2019–December 2020 field study.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
One free-ranging introduced (non-native) group; no inference to other populations or the native range.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One field study covers one introduced group at one Mauritius site; species-wide habitat use and diet, population variation, and causal or realized effects on plant invasion remain unassessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Bailey et al. compared whole-genome data from allopatric and parapatric rhesus and cynomolgus macaque sample groups. They reported 184 candidate genes consistent with reinforcement-related patterns and Y-chromosome introgression from M. mulatta into M. fascicularis populations, while describing the results as consistent with, rather than proof of, reinforcement. This is a study-specific comparative result, not a complete species phylogeny.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Comparative samples grouped as allopatric or parapatric; study published 2023. The claim reports genomic analysis, not a dated natural event or geographic range assessment.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Biological sample provenance and group definitions are limited to those in the comparative whole-genome study; not a species-wide census.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
One comparative genomic study does not resolve the species' full phylogeny, divergence history, or all introgression events.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Study sample group origins and a referenced range map do not constitute a reviewed current or historical range inventory.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The selected study does not assess the fossil record.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No formal conservation assessment, global population trend, or risk category was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Three studies support bounded claims in morphology, ecology, and evolution; the new morphology evidence is limited to 13 selected mandibular second molars from one research collection.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Life history, species-wide distribution, fossil evidence, conservation status, and systematic coverage of the accepted species concept remain incomplete or unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
