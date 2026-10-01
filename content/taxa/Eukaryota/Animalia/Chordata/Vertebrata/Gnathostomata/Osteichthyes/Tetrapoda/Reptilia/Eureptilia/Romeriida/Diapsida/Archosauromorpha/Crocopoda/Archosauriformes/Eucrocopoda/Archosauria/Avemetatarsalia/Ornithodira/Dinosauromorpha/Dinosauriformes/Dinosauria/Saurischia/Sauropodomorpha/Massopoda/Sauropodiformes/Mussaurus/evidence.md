---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mussaurus
    commonName: Mussaurus
    commonNameZh: 鼠龙
    rank: genus
    taxonId: txn:38643
    firstAppearance: 192.9
    lastAppearance: 184.2
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Mussaurus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: otero-2019-mussaurus concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: otero-2019-mussaurus
          relation: supports
          pages: 9:7614
          figure: Figures 1–2; Supplementary Table S1
          quoteLocator: Specimen sample; geological context; three-dimensional modelling inputs
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Mussaurus
      rangeKind: global-composite
      taxonomicConcept: Mussaurus patagonicus study sample
      geographicScope: Laguna Colorada Formation, Patagonia
      olderMa: 192.9
      youngerMa: 184.2
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Mussaurus_ontogenetic_3-D_stance_models/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: otero-2019-mussaurus
          locator: Cited specimen, figures and methods in the linked claim dossier
      reviewStatus: automated-audit-passed
---

# Mussaurus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mussaurus is represented by hatchling, yearling and adult specimens from the Patagonian sample used for its ontogenetic models; these individuals do not establish complete genus endpoints or an evolutionary ladder.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen set and locality context are explicit. High confidence applies to the sampled growth series, while stance reconstruction remains a model.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本集合和地点背景明确。高置信度适用于取样生长序列，姿态重建仍是模型。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鼠龙由用于个体发育模型的巴塔哥尼亚幼体、一岁个体和成体标本表示；这些个体不建立完整属级端点或演化阶梯。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level occurrence or navigation envelope; not a direct date on ancestry and not a demonstrated global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Primary-study specimen, formation or explicitly bounded dossier evidence.
<!-- /evo:text -->
