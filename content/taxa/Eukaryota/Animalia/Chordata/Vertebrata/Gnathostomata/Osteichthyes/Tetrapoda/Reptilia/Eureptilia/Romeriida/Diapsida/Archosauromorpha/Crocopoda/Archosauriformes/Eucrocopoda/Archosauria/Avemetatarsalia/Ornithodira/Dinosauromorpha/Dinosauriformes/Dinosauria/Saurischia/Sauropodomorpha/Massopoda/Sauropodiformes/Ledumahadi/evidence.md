---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ledumahadi
    commonName: Ledumahadi
    commonNameZh: 巨雷龙
    rank: genus
    taxonId: txn:377354
    firstAppearance: 200.5
    lastAppearance: 195
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Ledumahadi
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
      reviewedAgainstReferenceVersion: mcphee-2018-ledumahadi concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: mcphee-2018-ledumahadi
          relation: supports
          pages: 3143–3151
          figure: Figures 1–2; STAR Methods
          quoteLocator: Holotype; locality and geological setting; osteohistology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Ledumahadi
      rangeKind: global-composite
      taxonomicConcept: Ledumahadi mafube holotype occurrence
      geographicScope: Elliot Formation, South Africa
      olderMa: 200.5
      youngerMa: 195
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
        - content/events/Ledumahadi_BP%2F1%2F7120_gigantism_model/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: mcphee-2018-ledumahadi
          locator: Cited specimen, figures and methods in the linked claim dossier
      reviewStatus: automated-audit-passed
---

# Ledumahadi

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ledumahadi is anchored by partial postcranial holotype BP/1/7120 from the earliest Jurassic Elliot Formation of South Africa; this occurrence does not define a global genus range or the origin of quadrupedal sauropodomorphs.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype, formation and age context are directly reported. High confidence remains occurrence-bound and excludes body-mass and posture extrapolation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模、地层和年代背景有直接报告。高置信度保持在出现记录边界内，不外推体重与姿态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
巨雷龙由南非最早侏罗世埃利奥特组的部分躯干后骨骼正模 BP/1/7120 锚定；该记录不定义全球属级范围或四足蜥脚形类起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level occurrence or navigation envelope; not a direct date on ancestry and not a demonstrated global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Primary-study specimen, formation or explicitly bounded dossier evidence.
<!-- /evo:text -->
