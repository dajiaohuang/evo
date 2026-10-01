---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Carnivora Bowdich, 1821
    rank: order
    sourceDatasetId: "2144"
    name:
      zh: 食肉目
      en: Carnivora
    reviewStatus: source-linked
    checkedAt: 2026-09-23
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
        - referenceId: ref-238e998d-c40e-83b1-a030-62652e8ba062
          metadataVariant: 0
          sourceKey: account
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
            url: https://www.checklistbank.org/dataset/316115/taxon/VS
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
  atlas-node:
    name: Carnivora
    commonName: Carnivorans
    commonNameZh: 食肉类
    rank: order
    taxonId: txn:36905
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: sole-2014-dormaalocyon primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: sole-2014-dormaalocyon
          relation: supports
          pages: 1–21
          figure: Figures 3 and 8–10; Appendices 1–3
          quoteLocator: Dormaal sample; dental and tarsal descriptions; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora
      rangeKind: global-composite
      taxonomicConcept: Carnivora total-group evidence anthology and living crown continuation
      geographicScope: Dormaal locality, Belgium; living global continuation
      olderMa: 56
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: sole-2014-dormaalocyon
          locator: pp. 1–21; Figures 3 and 8–10; Appendices 1–3
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Carnivora

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
支持本段关于食性并非分类定义、裂齿形态存在特化变化的概述；未采用页面中的目内数量、保育资料或分歧年代。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the distinction between diet and taxonomic membership and the stated variation in carnassial form; the page’s order counts, conservation material and divergence dates are not used.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的名称、作者、等级与父子关系；不是系统发育分歧证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned names, authorship, ranks and parent links; not evidence of phylogenetic divergence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 56–0 Ma Carnivora route is a total-group evidence anthology: the Dormaal Carnivoraformes sample anchors the older bound and living crown carnivorans extend to the present; it is not a crown-Carnivora FAD or ancestor chain.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Approximately 280 specimens, tarsal and dental anatomy and a morphology matrix support the stem carnivoraform sample. Explicit total-group wording prevents that sample from being promoted to crown Carnivora.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
约 280 件标本、跗骨与牙齿解剖及形态矩阵支持该食肉形类干群样本；明确的总群措辞防止把它提升为食肉目冠群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
56–0 Ma 的食肉类路线是总群证据选集：Dormaal 的 Carnivoraformes 样本锚定较老端点，现生食肉目冠群延续至今；它不是食肉目冠群首现或祖先链。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
56 Ma is the rounded Dormaal Carnivoraformes sample context; stem carnivoraforms do not establish a crown-Carnivora FAD or direct ancestry.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Dental and tarsal anatomy from the Dormaal sample anchors a total-group browsing route, while living crown carnivorans extend to the present.
<!-- /evo:text -->
