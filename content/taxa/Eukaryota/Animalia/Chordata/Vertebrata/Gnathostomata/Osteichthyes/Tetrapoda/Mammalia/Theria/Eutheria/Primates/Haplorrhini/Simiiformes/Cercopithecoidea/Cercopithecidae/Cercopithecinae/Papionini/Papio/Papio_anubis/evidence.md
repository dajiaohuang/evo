---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Papio anubis (Lesson, 1827)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 橄榄狒狒
      en: Olive baboon
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
        - referenceId: ref-fb78b50c-67bd-8a0e-a3e2-011fac110c1c
          metadataVariant: 0
          sourceKey: jordan2018
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6TM9B
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
    scientificName: Papio anubis (Lesson, 1827)
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
        - id: 6DGR
          name: Papio
          authorship: Erxleben, 1777
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6TM9B
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115, DOI 10.48580/dgywk
            stableId: col:6TM9B@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6TM9B. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-65a7edd2-4110-8e60-a064-0b49d0943407
          metadataVariant: 0
          sourceKey: kiffner2022
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1371/journal.pone.0263314
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8809570/
            accessedAt: 2026-09-24
            locator: Abstract; Methods; Results and Discussion; Figure 2 and Tables 1–3.
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
        - referenceId: ref-cdce96f3-19d3-86c9-a796-68a523bcff9b
          metadataVariant: 0
          sourceKey: druelle2017
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material, if any, is excluded.
            stableId: doi:10.1111/joa.12602
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5442150/
            accessedAt: 2026-09-26
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
        - referenceId: ref-b8e9a596-b104-8e09-a4f2-5a6c0b867562
          metadataVariant: 0
          sourceKey: bailey2021
          usage:
            licenseAppliesTo: Article text under the stated CC BY 4.0 license; separately credited third-party material is excluded.
            stableId: doi:10.1038/s41598-021-83175-3
            rightsEvidenceUrl: https://www.nature.com/articles/s41598-021-83175-3
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
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
        - referenceId: ref-d75f62ec-c37f-83fe-ad44-a571f0aed645
          metadataVariant: 0
          sourceKey: jordan2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo
            stableId: doi:10.1186/s13100-018-0118-3
            accessedAt: 2026-09-28
            locator: Methods—Samples; Results—Phylogenetically informative Alu insertions; Fig. 4a; Rights and permissions.
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
            rightsEvidenceUrl: https://link.springer.com/article/10.1186/s13100-018-0118-3
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution
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
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - rightsEvidenceUrl
            - rightsEvidenceLocator
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
              - druelle2017
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
              - druelle2017
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
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/textZh
            sourceIds:
              - bailey2021
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/lifeStatus
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
              - kiffner2022
            locator: Abstract; Results and Discussion; Figure 2 and Tables 1–3.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
            sourceIds:
              - bailey2021
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
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
              - jordan2018
            locator: Methods—Samples; Results—Phylogenetically informative Alu insertions; Fig. 4a.
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
  atlas-node:
    name: Papio anubis
    commonName: Olive Baboon
    commonNameZh: 橄榄狒狒
    rank: species
    taxonId: ""
    colUsageId: 6TM9B
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    rangeEvidenceLevel: withheld-no-range-evidence
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: dossier
---

# Papio anubis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
六个现生 Papio 物种、每种两只个体的 Alu 插入比较基因组面板；支持面板内的物种指示位点分类，不支持全种变异估计。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Comparative Alu-insertion genomic panel of two individuals from each of six extant Papio species; supports the panel-relative classification of species-indicative insertions, not a species-wide variation estimate.
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
Exact accepted COL26.8 species usage 6TM9B verified against ChecklistBank dataset 316115 search and taxon endpoints; verbatim name, authorship, species rank, accepted status, sourceDatasetId 2144, and Primates parent classification were checked. The complete accepted parent path through Primates was verified from the immutable COL26.8 hierarchy archive.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage 6TM9B only. Evidence spans a wild population at Lake Manyara National Park, Tanzania (2011–2019), a wild Gombe National Park population in Tanzania (reproductive records 1972–2002), and a captive cohort at the CNRS Primatology Station, Rousset-sur-Arc, France. These separate study scopes do not support species-wide generalization. A separate comparative genomic study analyzed two sampled individuals from each of the six extant Papio species; its P. anubis marker count is panel-relative.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Wild ecology evidence comes from one Lake Manyara National Park population monitored 2011–2019. Wild reproductive evidence comes from Gombe National Park, where miscarriage records span 1972–2002. Captive morphology and growth evidence concerns 14 female and 16 male baboons followed from infancy to adulthood over seven years at the CNRS Primatology Station, Rousset-sur-Arc, France. These samples are distinct and do not represent every population. The comparative genome study used 12 sampled baboons, with two individuals per species, but its cited sample description does not classify the samples as wild or captive.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 6TM9B; accepted status, sourceDatasetId 2144, and Primates classification in the taxon record. Pinned COL26.8 parent path through accepted Papionini (L4C) reaches Primates (3W7).
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted scientific name and authorship, rank, status, sourceDatasetId, and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary field study comparing road-based line distance sampling with sleeping-site counts for wild olive baboons at Lake Manyara National Park, Tanzania, using monitoring from 2011–2019. Claims are paraphrased; figures and data files are not reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Kiffner C, Paciência FMD, Henrich G, et al. (2022). Road-based line distance surveys overestimate densities of olive baboons. PLoS ONE 17(2):e0263314. https://doi.org/10.1371/journal.pone.0263314. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Materials and methods—Study site and subjects; Results—Changes in morphotypes (dimensionless segment lengths and masses) with age; Discussion—Sex-related differences.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary longitudinal body-morphometry study of 14 female and 16 male captive olive baboons at the CNRS Primatology Station, Rousset-sur-Arc, France. Claims are paraphrased; article prose, figures, tables, and supplementary data are not reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Druelle F, Aerts P, D'Août K, Moulin V, Berillon G (2017). Segmental morphometrics of the olive baboon (Papio anubis): a longitudinal study from birth to adulthood. Journal of Anatomy 230(6):805–819. https://doi.org/10.1111/joa.12602. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract; Results—rank, rainfall, and miscarriage interaction; Methods—Study area and population, Miscarriage data, Miscarriage and infanticide analyses, and Wounding analysis; Discussion—limitations on interpreting male targeting.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Primary observational study of wild olive baboons in Gombe National Park, Tanzania. Reproductive and miscarriage records span 1972–2002; the known-rank analysis included 732 pregnancies from 175 females, with 65 miscarriages. Claims are paraphrased; no article prose, figure, table, or dataset is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Bailey A, Eberly LE, Packer C (2021). Contrasting effects of male immigration and rainfall on rank-related patterns of miscarriage in female olive baboons. Scientific Reports 11:4042. https://doi.org/10.1038/s41598-021-83175-3. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo -->
Article text under the stated CC BY 4.0 license; separately provided data are waived under CC0 unless otherwise stated. This dossier paraphrases the article and reproduces no third-party material.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Comparative genomic analysis of Alu insertion polymorphisms among six extant Papio species, using two sampled individuals per species. The claim is limited to this 12-individual panel; no article text, figure, table, or supplementary file is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Jordan VE, Walker JA, Beckstrom TO, et al. (2018). A computational reconstruction of Papio phylogeny using Alu insertion polymorphisms. Mobile DNA 9:13. https://doi.org/10.1186/s13100-018-0118-3. Findings paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In a seven-year longitudinal sample of captive olive baboons at the CNRS Primatology Station in Rousset-sur-Arc, France, females and males were similar in measured size and shape at birth; differing growth rates and durations later produced substantial size differences while measured body shape remained similar. This finding describes the studied cohort, not wild populations.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
在法国鲁塞特-苏尔-阿克 CNRS 灵长类研究站开展的一项为期七年的圈养橄榄狒狒纵向研究中，雌雄个体出生时的测量体型与身体形状相近；此后生长速度和持续时间不同，形成明显体型差异，而测量的身体形状仍相近。该发现仅适用于所研究的群体，不代表野外种群。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Abstract; Materials and methods—Study site and subjects; Results—Changes in morphotypes (dimensionless segment lengths and masses) with age; Discussion—Sex-related differences.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
One captive cohort at the CNRS Primatology Station, Rousset-sur-Arc, France; the reported longitudinal study lasted seven years. The article metadata gives first publication as 2017-03-14; calendar start and end years for cohort measurements are not specified here.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Captive olive baboons; not a wild-population comparison.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Morphometric evidence is limited to one captive cohort and does not describe variation across wild populations or the full accepted species concept.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The study followed 14 female and 16 male captive olive baboons from infancy (minimum age two months) to adulthood over seven years. The largest measured changes in body morphometrics occurred during the first two years and involved distal body parts.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
该研究对 14 只雌性和 16 只雄性圈养橄榄狒狒进行了为期七年的追踪，个体从幼年（最小起始年龄为两个月）随访至成年。身体形态测量变化最大集中在前两年，并涉及身体远端部位。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Abstract; Materials and methods—Study site and subjects; Results—Changes in morphotypes (dimensionless segment lengths and masses) with age.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
One captive cohort at the CNRS Primatology Station, Rousset-sur-Arc, France; ages from at least two months to adulthood across a seven-year study. Calendar sampling years are not reported in the cited study sections.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Captive cohort; these growth observations do not establish wild growth trajectories.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/text -->
In the Gombe National Park population of Tanzania, birth and miscarriage records from 1972–2002 included 732 pregnancies from 175 females with known rank; 65 pregnancies ended in miscarriage. In a time-dependent analysis, higher-ranking pregnant females exposed to immigrant males that reached top rank within one year had higher miscarriage hazards outside drought conditions. The rank-related pattern largely disappeared when mean rainfall over two years was below about 1,100 mm; exposure to new immigrants generally did not show the same association. This is a conditional result from one wild population, not a species-wide miscarriage rate or proof of deliberate male-caused pregnancy loss.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/textZh -->
在坦桑尼亚贡贝国家公园的种群中，1972—2002 年的出生与流产记录纳入 175 只已知等级雌性的 732 次妊娠，其中 65 次以流产告终。时变分析显示，在非干旱条件下，接触到移入后一年内升至群体最高等级雄性的高等级孕雌，其流产风险较高；两年平均降雨量低于约 1,100 毫米时，这种等级相关模式基本消失。一般移入雄性的接触并未显示相同关联。这是单一野生种群中的条件性结果，不代表全物种流产率，也不能证明雄性有意造成妊娠损失。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/locator -->
Abstract; Results—three-way interaction and rainfall threshold; Methods—Miscarriage data and Fetal exposure to immigrant males.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/placeTimeScope -->
Gombe National Park, Tanzania; reproductive and miscarriage records from 1972–2002. Rainfall context uses two-year means; article published 2021-02-17.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/lifeStatus -->
Wild olive baboons in the Gombe study population; not captive animals or a range-wide sample.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The captive CNRS morphometric cohort does not establish wild growth trajectories. The Gombe analysis concerns reproductive loss at one wild population; reproductive schedules, fertility rates, survival, and longevity across other populations remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At Lake Manyara National Park, Tanzania, road-transect distance sampling from 2011–2019 produced an estimate more than three times the upper-limit abundance estimated from sleeping-site counts and average group size. The authors note that baboons' use of roads may explain the bias; this is a site- and method-specific result, not a species-wide density estimate.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在坦桑尼亚曼雅拉湖国家公园，2011 至 2019 年的道路样线距离抽样所得估计值，超过按夜宿地点数量和平均群体大小估算的数量上限三倍。作者指出，狒狒使用道路可能解释这种偏差；这是特定地点和方法的结果，不是物种层面的密度估计。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Lake Manyara National Park, Tanzania; road transects and sleeping-site comparison using surveys from 2011–2019.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild olive baboons in one protected area.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
In the Gombe study, pregnancies involving at least one visible wound had a higher modeled miscarriage hazard than pregnancies without a wound (hazard ratio 2.83, 95% CI 1.40–5.72). Pregnant females were wounded more often than expected after the arrival of a male who reached top rank within one year (24.7% observed versus 8.6% expected in the analysis of 768 pregnancies). The authors state that further observations are needed to establish selective targeting; these observational associations do not establish intent or causation.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
在贡贝研究中，至少出现一次可见伤口的妊娠，其模型估计的流产风险高于未受伤妊娠（风险比 2.83，95% 置信区间 1.40–5.72）。在针对 768 次妊娠的分析中，迅速升至群体最高等级的雄性移入后，孕雌受伤比例高于预期（观察值 24.7%，预期值 8.6%）。作者指出仍需更多观察才能确认是否存在选择性攻击；这些观察性关联不能证明行为意图或因果关系。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/locator -->
Results—Wounding; Figure 2; Methods—Wounding analysis; Discussion—paragraph noting that further observational evidence is needed.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Gombe National Park, Tanzania; pregnancy and wounding records analyzed from the long-term study, including the 1972–2002 miscarriage dataset; article published 2021-02-17.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Wild olive baboons; site-specific observational evidence, not a species-wide behavioral account.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The Lake Manyara density study and Gombe social study cover two site-specific populations; neither establishes species-wide abundance, range-wide ecology, population variation, or a global population trend. The reported observational associations do not establish causal mechanisms.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In a comparative genomic analysis of two sampled individuals from each of the six extant Papio species, 4,645 Alu insertion polymorphisms were classified as indicative of P. anubis: they were present in both sampled P. anubis individuals and absent from the other sampled Papio individuals. This panel-relative count does not estimate variation across the species or resolve every reticulate relationship.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
一项比较基因组研究对六个现生 Papio 种各取两只个体进行分析。按论文定义，4,645 个 Alu 插入多态位点出现在两只取样的橄榄狒狒中，且未见于其他取样的 Papio 个体，因此被归为 P. anubis 指示位点。此面板内计数不能代表该物种的全部遗传变异，也不能单独解析所有网状演化关系。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Genome panel of 12 baboons, with two individuals from each of six extant Papio species; collection locations and dates are not specified in the cited sample description. Published 2018.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
The cited sample description does not classify the 12 genomic samples as wild or captive; no ecological status is inferred.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The marker count is defined relative to two sampled individuals per Papio species. It does not estimate range-wide or within-species genomic diversity and does not resolve the full reticulate evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A single study site does not provide a geographic range inventory.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The selected study does not review the fossil record.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The site-level monitoring analysis does not constitute a current species-wide conservation assessment or formal risk category.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The dossier contains bounded evidence on captive-cohort morphometry and growth, site-specific density and reproductive/social correlates, and one Alu insertion marker analysis of a 12-genome Papio panel; each finding is limited to its sampled animals, place, or comparative panel.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Evolutionary evidence is partial: the panel-relative P. anubis marker count does not cover range-wide genomic variation or resolve all reticulate relationships. Distribution, fossil evidence, current formal conservation status, and full coverage of the accepted species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
