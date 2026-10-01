---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Diplodocidae
    commonName: Diplodocids
    commonNameZh: 梁龙类
    rank: family
    taxonId: ""
    firstAppearance: 155
    lastAppearance: 145
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Diplodocidae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: tschopp-2015-diplodocidae-revision concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: tschopp-2015-diplodocidae-revision
          relation: supports
          pages: 3:e857
          figure: Figures 113 and 117–118; Appendices 1–3
          quoteLocator: Specimen-level methods; phylogenetic results; operational taxonomic criteria
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Diplodocidae
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
      reviewedAgainstReferenceVersion: tschopp-2015-diplodocidae-revision @ DOI 10.7717/peerj.857
      referenceLinks:
        - relation: supports
          referenceId: tschopp-2015-diplodocidae-revision
          pages: 3:e857
          figure: Figures 113 and 117–118; Appendices 1–3
          quoteLocator: Specimen-level methods; phylogenetic results; operational taxonomic criteria
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Diplodocidae
      rangeKind: global-composite
      taxonomicConcept: Diplodocidae — source-bounded sample window
      geographicScope: Diplodocid specimens included in the Tschopp et al. revision
      olderMa: 168
      youngerMa: 125
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/Diplodocidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: tschopp-2015-diplodocidae-revision
          locator: 3:e857; Specimen-level methods; phylogenetic results; operational taxonomic criteria
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Diplodocidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Diplodocidae is represented by Tschopp and colleagues’ specimen-level matrix and explicit criteria for revising genera and species; the operational taxonomy is analysis-dependent and not a complete fossil-range audit.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study scores individual specimens and states quantitative referral thresholds, but several referrals change with missing data and tree position.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Diplodocidae is displayed at 168–125 Ma only as the broad stage envelope of the revision's specimen sample, not a claim of continuous occupancy or exact family endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Diplodocidae uses Tschopp, E.; Mateus, O.; Benson, R.B.J. (2015) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Diplodocid specimens included in the Tschopp et al. revision; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究对单个标本编码并给出定量归属阈值，但若干归属会随缺失数据和树位置变化。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Diplodocidae 采用 Tschopp, E.; Mateus, O.; Benson, R.B.J.（2015）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Diplodocid specimens included in the Tschopp et al. revision；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
梁龙科由 Tschopp 等人的标本级矩阵及修订属种的明确标准表示；这一操作性分类依赖分析，不是完整化石范围审计。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Diplodocidae 仅以 168–125 Ma 展示为修订研究所采样标本的宽泛阶段包络，而非连续存在或精确科级端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the broad stage envelope of the revision's specimen sample, not a claim of continuous occupancy or exact family endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A specimen-level phylogenetic analysis and taxonomic revision of Diplodocidae (Dinosauria, Sauropoda) directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
