---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Osteichthyes
    commonName: Bony Fish
    commonNameZh: 硬骨鱼类
    rank: superclass
    taxonId: ""
    firstAppearance: 436
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes
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
      reviewedAgainstReferenceVersion: zhu-2026-eosteus primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: zhu-2026-eosteus
          relation: supports
          pages: 128–134
          figure: Figures 1–5; Extended Data and Supplementary Data 1–7
          quoteLocator: Systematic palaeontology; geological age; parsimony and Bayesian phylogenetic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes
      rangeKind: global-composite
      taxonomicConcept: Osteichthyes total-group fossil minimum and living navigation span
      geographicScope: Huixingshao Formation, Chongqing, China; living global continuation
      olderMa: 436
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: zhu-2026-eosteus
          locator: pp. 128–134; Figures 1–5; Extended Data; Supplementary Data 1–7
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Osteichthyes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Eosteus chongqingensis from approximately 436 Ma early Silurian strata anchors the 436–0 Ma Osteichthyes route as the oldest reported articulated bony-fish occurrence; its stem placement is analysis-dependent and is not a crown split or global origination date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The 2026 primary study describes and figures the articulated specimen and supplies parsimony and Bayesian matrices. The occurrence is direct, whereas placement and implications for the actinopterygian–sarcopterygian split are analytical.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
2026 年一手研究描述并绘制了关节连接标本，并提供简约法与贝叶斯矩阵；化石出现是直接证据，而系统位置及其对辐鳍鱼—肉鳍鱼分裂的意义属于分析结果。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
约 436 Ma 早志留世地层中的 Eosteus chongqingensis 以目前报道最早的关节连接硬骨鱼出现记录锚定 436–0 Ma 路线；其干群位置依赖分析，不能当作冠群分裂或全球起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Approximately 436 Ma is the rounded Eosteus occurrence; stem placement is model-dependent and does not date the crown split or origination.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The articulated Eosteus specimen and explicit parsimony and Bayesian analyses anchor the oldest reported osteichthyan occurrence, with living lineages extending to the present.
<!-- /evo:text -->
