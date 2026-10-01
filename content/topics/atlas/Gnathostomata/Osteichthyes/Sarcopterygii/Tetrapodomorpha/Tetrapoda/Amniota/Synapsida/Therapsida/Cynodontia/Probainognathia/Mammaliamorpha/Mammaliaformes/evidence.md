---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mammaliaformes
    commonName: Mammaliaforms
    commonNameZh: 哺乳形类
    rank: clade
    taxonId: txn:67456
    firstAppearance: 225
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes
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
          quoteLocator: Definition and diagnosis of Mammaliaformes and Mammalia; phylogenetic results
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes
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
          quoteLocator: Definition and diagnosis of Mammaliaformes and Mammalia; phylogenetic results
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes
      rangeKind: global-composite
      taxonomicConcept: Mammaliaformes — source-bounded sample window
      geographicScope: Mesozoic mammaliaform sample and living continuation represented in Luo et al.
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: luo-2002-mesozoic-mammal-phylogeny
          locator: 1–78; Definition and diagnosis of Mammaliaformes and Mammalia; phylogenetic results
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Mammaliaformes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The sampled morphological analysis distinguishes Mammaliaformes from narrower crown-based Mammalia and places several early Mesozoic groups around that boundary; membership is definition- and matrix-dependent rather than a continuous ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The claim follows the paper’s explicit concept comparison and does not convert a topology into time or ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Mammaliaformes is displayed at 225–0 Ma only as the review's sampled, definition-dependent navigation envelope, not a crown-Mammalia origin date. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Mammaliaformes uses Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L. (2002) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Mesozoic mammaliaform sample and living continuation represented in Luo et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该主张遵循论文明确的概念比较，不把拓扑转换成时间或祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Mammaliaformes 采用 Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L.（2002）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Mesozoic mammaliaform sample and living continuation represented in Luo et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
取样形态分析将哺乳形类与更狭义的冠群式哺乳纲区分，并把若干早期中生代类群置于这一边界周围；成员资格依赖定义和矩阵，而不是连续祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Mammaliaformes 仅以 225–0 Ma 展示为综述采样且依赖定义的导航包络，而非冠群哺乳类起源日期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled, definition-dependent navigation envelope, not a crown-Mammalia origin date; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
In quest for a phylogeny of Mesozoic mammals directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
