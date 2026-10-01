---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Crocodylia
    commonName: Crown crocodilians
    commonNameZh: 冠群鳄类
    rank: order
    taxonId: ""
    firstAppearance: 72
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Crocodylomorpha/Crocodylia
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lee-yates-2018-crocodylian-tip-dating concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: lee-yates-2018-crocodylian-tip-dating
          relation: supports
          pages: 285:20181071
          figure: Figures 1–4
          quoteLocator: Morphological, molecular and stratigraphic data; Bayesian tip dating; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Crocodylomorpha/Crocodylia
      rangeKind: global-composite
      taxonomicConcept: Crocodylia crown navigation interval
      geographicScope: Global sampled fossil and living record
      olderMa: 72
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Tip-dated_crown-crocodylian_topology/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: lee-yates-2018-crocodylian-tip-dating
          locator: 20181071; Figures 1–4; Morphological, molecular and stratigraphic data; Bayesian tip dating; Discussion
      reviewStatus: automated-audit-passed
---

# Crocodylia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Crocodylia is represented by a tip-dated analysis of 25 living and 92 extinct sampled taxa; the Gavialis–Tomistoma result and fossil placements are model-dependent topology, not a complete crown range or observed ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The combined morphology, molecular and stratigraphic dataset is explicit, while alternative analyses differ. Medium confidence preserves that analytical dependence.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
形态、分子与地层联合数据集明确，但替代分析结果不同；中等置信度保留这种分析依赖性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鳄目由包含 25 个现生和 92 个灭绝取样类群的尖端定年分析表示；恒河鳄—马来鳄结果及化石位置属于模型依赖拓扑，不是完整冠群范围或被观察到的祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval is a study-level occurrence or model-bounded navigation envelope, not a direct date on ancestry or a guaranteed global first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The preferred tip-dated analysis combines 25 living and 92 extinct taxa, 278 morphological characters and 9284 molecular base pairs and recovers a Gavialis–Tomistoma clade.
<!-- /evo:text -->
