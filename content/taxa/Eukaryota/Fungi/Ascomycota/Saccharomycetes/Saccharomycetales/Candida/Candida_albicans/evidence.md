---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Candida albicans (C.P. Robin) Berkhout
    authorship: (C.P. Robin) Berkhout
    rank: species
    sourceDatasetId: "2073"
    checkedAt: 2026-09-25
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: F
        scientificName: Fungi
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: "2073"
      - id: SM
        scientificName: Ascomycota
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "2073"
      - id: HN
        scientificName: Saccharomycetes
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2073"
      - id: 3ZK
        scientificName: Saccharomycetales
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2073"
      - id: 3GS4
        scientificName: Candida
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "2073"
      - id: 699T3
        scientificName: Candida albicans (C.P. Robin) Berkhout
        authorship: (C.P. Robin) Berkhout
        rank: species
        status: accepted
        sourceDatasetId: "2073"
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
      wild: Wild C. albicans populations were not studied.
      domesticated: Domestication was not assessed.
      captive: The study concerns laboratory mice and a laboratory fungal strain, not a captive-bred fungal population.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/699T3
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:699T3@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 699T3; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 699T3. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-a094edca-5cc2-8551-a28b-d7b742cc1351
          metadataVariant: 0
          sourceKey: bertolini2019candida
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.ppat.1007717
            locator: Figure 1D caption and Results on oral bacterial loads; Methods, mouse chemotherapy model; article copyright notice.
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
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 699T3; DOI 10.1371/journal.ppat.1007717.
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
              - bertolini2019candida
            locator: Figure 1D caption and Results describing oral bacterial loads; Methods, animal model and C. albicans inoculation.
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

# Candida albicans

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 699T3. The biological result concerns laboratory strain SC5314 in an eight-day chemotherapy mouse model; it does not describe natural fungal ecology or human clinical outcomes.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright notice names © 2019 Bertolini et al. and links to the Creative Commons Attribution License; the linked license URL resolves to CC BY 4.0.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text under the item-level CC BY 4.0 notice; separately credited third-party content is excluded. Claim paraphrased; no figure is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Bertolini M, Ranjan A, Thompson A, et al. (2019). Candida albicans induces mucosal bacterial dysbiosis that promotes invasive infection. PLoS Pathog 15(4):e1007717. https://doi.org/10.1371/journal.ppat.1007717. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Day-8 endogenous tongue bacterial-load comparison in female C57BL/6 mice receiving 5-fluorouracil with or without laboratory C. albicans SC5314; study location not stated.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary experimental study on mucosal bacterial loads in a chemotherapy mouse model; not a complete species ecology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and each accepted parent node in the pinned COL26.8 registry; reviewed the mouse strain, host age/sex, chemotherapy and fungal exposure, day-8 assays, sample sizes, results, and item-level copyright/license notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary experiment directly naming C. albicans SC5314 and reporting a defined host model, treatment comparison, assay, sampling time, and quantitative bacterial-load result.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Natural fungal ecology, effects in unperturbed hosts, human clinical outcomes, species-wide host interactions, morphology, life history, evolution, distribution, fossils, and conservation claims not established by this model.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The chemotherapy mouse experiment does not assess fungal morphology or diagnostic variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study does not assess life-cycle, reproduction, growth, survival, or a complete life-history account.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In an eight-day chemotherapy mouse model, tongue samples from 6–9-week-old female C57BL/6 mice receiving 5-fluorouracil plus daily Candida albicans SC5314 had higher endogenous bacterial loads than samples from mice receiving 5-fluorouracil alone. Both CFU and 16S rRNA gene-copy assays showed the difference at day 8 (p=0.008; 4–10 mice per group across 1–2 experiments). This is specific to the laboratory strain and perturbed mouse model; it does not establish natural fungal ecology or human clinical outcomes.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在为期八天的化疗小鼠模型中，接受 5-氟尿嘧啶并每日给予白色念珠菌 SC5314 的 6–9 周龄雌性 C57BL/6 小鼠，其舌部样本的内源细菌负荷高于仅接受 5-氟尿嘧啶的小鼠。CFU 和 16S rRNA 基因拷贝数检测均显示第 8 天存在差异（p=0.008；每组 4–10 只小鼠，来自 1–2 次独立实验）。该结果仅适用于这一实验室菌株和受扰动的小鼠模型，不能据此推断自然真菌生态或人类临床结局。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Eight-day laboratory chemotherapy mouse experiment; the article reports no study-facility location for this model.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Laboratory strain SC5314 was administered in drinking water to laboratory mice; no wild fungal population or human clinical cohort was studied.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One chemotherapy-perturbed mouse model with strain SC5314 does not establish natural fungal ecology, other host contexts, geographic distribution, or human clinical outcomes.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The experiment does not analyze phylogeny or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A laboratory mouse model provides no geographic range assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The experiment does not establish environmental population trends, threats, or a conservation assessment.
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
