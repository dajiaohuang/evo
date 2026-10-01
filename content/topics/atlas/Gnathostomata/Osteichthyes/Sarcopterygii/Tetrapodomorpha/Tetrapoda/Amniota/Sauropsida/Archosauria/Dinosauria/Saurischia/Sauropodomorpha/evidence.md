---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Sauropodomorpha
    commonName: Sauropods
    commonNameZh: 蜥脚类
    rank: suborder
    taxonId: ""
    firstAppearance: 233.2
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha
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
      reviewedAgainstReferenceVersion: martinez-alcober-2009-panphagia concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: martinez-alcober-2009-panphagia
          relation: supports
          pages: 4(2):e4397
          figure: Figures 1–8; Text S1; Data S1
          quoteLocator: Holotype and locality; phylogenetic analysis; feeding-character discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha
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
      reviewedAgainstReferenceVersion: martinez-alcober-2009-panphagia @ DOI 10.1371/journal.pone.0004397
      referenceLinks:
        - relation: supports
          referenceId: martinez-alcober-2009-panphagia
          pages: 4(2):e4397
          figure: Figures 1–8; Text S1; Data S1
          quoteLocator: Holotype and locality; phylogenetic analysis; feeding-character discussion
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha
      rangeKind: global-composite
      taxonomicConcept: Sauropodomorpha — source-bounded sample window
      geographicScope: Ischigualasto Formation Panphagia sample, Argentina
      olderMa: 231.4
      youngerMa: 225.9
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Sauropodomorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: martinez-alcober-2009-panphagia
          locator: 4(2):e4397; Holotype and locality; phylogenetic analysis; feeding-character discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Sauropodomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Sauropodomorpha is represented by the Panphagia specimen and sampled matrix that recover it near the base of the clade; this does not identify a direct ancestor, a universal ancestral diet or an exact first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype anatomy and matrix are explicit, but basal placement and dietary transition are comparative reconstructions. Medium confidence preserves those limits.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Sauropodomorpha is displayed at 231.4–225.9 Ma only as the Carnian Panphagia-bearing interval, not a global sauropodomorph first appearance. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Sauropodomorpha uses Martinez, R.N.; Alcober, O.A. (2009) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Ischigualasto Formation Panphagia sample, Argentina; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模解剖和矩阵明确，但基部位置与食性转变属于比较重建；中等置信度保留这些限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Sauropodomorpha 采用 Martinez, R.N.; Alcober, O.A.（2009）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Ischigualasto Formation Panphagia sample, Argentina；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蜥脚形亚目由泛食龙标本及把它恢复在支系基部附近的取样矩阵表示；这不识别直接祖先、普遍祖先食性或精确首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Sauropodomorpha 仅以 231.4–225.9 Ma 展示为产出 Panphagia 的卡尼期区间，而非蜥脚形类全球首现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Carnian Panphagia-bearing interval, not a global sauropodomorph first appearance; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Basal Sauropodomorph (Dinosauria: Saurischia) from the Ischigualasto Formation (Triassic, Carnian) and the Early Evolution of Sauropodomorpha directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
