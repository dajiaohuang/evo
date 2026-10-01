---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Probainognathia
    commonName: Probainognathians
    commonNameZh: 原颌兽类
    rank: clade
    taxonId: txn:67452
    firstAppearance: 237
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ruta-2013-cynodont-radiation concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: ruta-2013-cynodont-radiation
          pages: Article 20131865
          figure: Figures 1–3
          quoteLocator: "Abstract; Results: phylogeny, disparity and evolutionary rates"
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ruta-2013-cynodont-radiation @ DOI 10.1098/rspb.2013.1865
      referenceLinks:
        - relation: supports
          referenceId: ruta-2013-cynodont-radiation
          pages: Article 20131865
          figure: Figures 1–3
          quoteLocator: "Abstract; Results: phylogeny, disparity and evolutionary rates"
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia
      rangeKind: global-composite
      taxonomicConcept: Probainognathia — source-bounded sample window
      geographicScope: Late Triassic–Early Jurassic probainognathian matrix sample in Ruta et al.
      olderMa: 237
      youngerMa: 174.7
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: ruta-2013-cynodont-radiation
          locator: "Article 20131865; Abstract; Results: phylogeny, disparity and evolutionary rates"
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Probainognathia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The same revised cynodont matrix recovers Probainognathia as one of the two principal sampled eucynodont branches and reports low early rates relative to Cynognathia; neither result establishes a direct lineage to mammals or a clade-wide first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Topology and rate comparison come from the explicit sampled matrix; the claim separates them from ancestry and range endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Probainognathia is displayed at 237–174.7 Ma only as the sampled matrix coverage, not a clade origin, extinction or direct mammal ancestry. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Probainognathia uses Ruta, M.; Botha-Brink, J.; Mitchell, S.A.; Benton, M.J. (2013) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Triassic–Early Jurassic probainognathian matrix sample in Ruta et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
拓扑与速率比较来自明确取样矩阵；该主张将其与祖先关系和范围端点分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Probainognathia 采用 Ruta, M.; Botha-Brink, J.; Mitchell, S.A.; Benton, M.J.（2013）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Triassic–Early Jurassic probainognathian matrix sample in Ruta et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
同一套修订犬齿兽矩阵把 Probainognathia 恢复为真犬齿兽类两个主要取样分支之一，并报告其早期速率低于犬颌兽类；两项结果都不建立通向哺乳类的直接谱系或全支系首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Probainognathia 仅以 237–174.7 Ma 展示为矩阵采样覆盖，而非类群起源、灭绝或哺乳类直接祖先关系。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the sampled matrix coverage, not a clade origin, extinction or direct mammal ancestry; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The radiation of cynodonts and the ground plan of mammalian morphological diversity directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
