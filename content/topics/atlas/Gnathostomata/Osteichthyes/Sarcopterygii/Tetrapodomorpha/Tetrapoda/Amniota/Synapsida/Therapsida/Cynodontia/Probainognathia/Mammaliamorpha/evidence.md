---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mammaliamorpha
    commonName: Mammaliamorphs
    commonNameZh: 哺乳形态类
    rank: clade
    taxonId: ""
    firstAppearance: 225
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha
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
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Higher-taxon definitions; character analysis; discussion of basal mammaliamorph relationships
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha
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
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny @ https://www.app.pan.pl/archive/published/app47/app47-001.pdf
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Higher-taxon definitions; character analysis; discussion of basal mammaliamorph relationships
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha
      rangeKind: global-composite
      taxonomicConcept: Mammaliamorpha — source-bounded sample window
      geographicScope: Mesozoic mammaliamorph sample and living continuation represented in Luo et al.
      olderMa: 225
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: luo-2002-mesozoic-mammal-phylogeny
          locator: 1–78; Higher-taxon definitions; character analysis; discussion of basal mammaliamorph relationships
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Mammaliamorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A broad Mesozoic-mammal character analysis uses Mammaliamorpha for the sampled branch that includes tritylodontids and mammaliaforms, while alternative definitions and matrices alter several basal placements; the label is not a dated crown or direct-ancestor category.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source explicitly discusses higher-taxon definitions and alternative trees. The claim is limited to its sampled topology and concept boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Mammaliamorpha is displayed at 225–0 Ma only as the review's definition-dependent sample envelope, not an exact clade origin or direct ancestor sequence. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Mammaliamorpha uses Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L. (2002) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Mesozoic mammaliamorph sample and living continuation represented in Luo et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源明确讨论高阶类群定义与替代树；该主张仅限于其取样拓扑和概念边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Mammaliamorpha 采用 Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L.（2002）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Mesozoic mammaliamorph sample and living continuation represented in Luo et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项广泛的中生代哺乳类性状分析以 Mammaliamorpha 指包含三列齿兽类和哺乳形类的取样分支，而不同定义与矩阵会改变若干基干部位；该标签不是有日期的冠群或直接祖先类别。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Mammaliamorpha 仅以 225–0 Ma 展示为综述中依赖定义的采样包络，而非精确类群起源或直接祖先序列。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's definition-dependent sample envelope, not an exact clade origin or direct ancestor sequence; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
In quest for a phylogeny of Mesozoic mammals directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
