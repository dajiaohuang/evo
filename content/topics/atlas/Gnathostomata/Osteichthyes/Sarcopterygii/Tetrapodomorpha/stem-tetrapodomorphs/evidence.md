---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    taxonId: ""
    extinct: true
    name: stem-tetrapodomorphs
    commonName: Stem tetrapodomorph navigation grade
    commonNameZh: 四足形类干群导航级
    rank: paraphyletic navigation grade
    firstAppearance: 392
    lastAppearance: 358.86
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/stem-tetrapodomorphs
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: swartz-2012-tinirau DOI 10.1371/journal.pone.0033683; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: swartz-2012-tinirau
          pages: e33683
          figure: Figures 1–10; supplementary matrix
          quoteLocator: Material and locality; systematic palaeontology; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/stem-tetrapodomorphs
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: swartz-2012-tinirau; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: swartz-2012-tinirau
          pages: Article e33683, pp. 1–4
          figure: Figures 1–4
          quoteLocator: "Age: upper Givetian; locality, holotype and phylogenetic placement"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/stem-tetrapodomorphs
      rangeKind: global-composite
      taxonomicConcept: Tinirau clackae represented stem-tetrapodomorph sample
      geographicScope: Red Hill I beds, Simpson Park Range, Nevada, United States
      olderMa: 387.7
      youngerMa: 382.7
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/stem-tetrapodomorphs/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: swartz-2012-tinirau
          locator: "Article e33683, pp. 1–4; Figures 1–4; Age: upper Givetian; locality, holotype and phylogenetic placement"
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# stem-tetrapodomorphs

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Tinirau clackae material from Devonian Nevada is described and placed in a morphology matrix among stem tetrapodomorph fishes. This entity is a historical grade route: the named sample is not a direct ancestor, a monophyletic grade or a global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond this entity is a historical grade route: the named sample is not a direct ancestor, a monophyletic grade or a global first appearance.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Tinirau clackae from the upper Givetian Red Hill I beds supports a 387.7–382.7 Ma named-sample window inside the stem-tetrapodomorph route; it is not a direct ancestor or grade-wide range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Tinirau clackae represented stem-tetrapodomorph sample: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Tinirau clackae represented stem-tetrapodomorph sample：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
内华达泥盆纪 Tinirau clackae 材料得到描述，并在形态矩阵中置于四足形鱼类干系。该实体是历史分级路线：具名样本不是直接祖先、单系分级或全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
上吉维特期 Red Hill I 层的 Tinirau clackae 支持四足形干群路线中 3.877–3.827 亿年前的具名样本窗口；它不是直接祖先，也不是整个历史级的延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-scale upper Givetian window; the historical grade is not asserted to be monophyletic.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval represents the named Tinirau material only and not a grade-wide first or last appearance.
<!-- /evo:text -->
