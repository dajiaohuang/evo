---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ornithischia
    commonName: Ornithischians
    commonNameZh: 鸟臀类
    rank: order
    taxonId: ""
    firstAppearance: 228
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia
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
      reviewedAgainstReferenceVersion: butler-2008-ornithischian-phylogeny concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: butler-2008-ornithischian-phylogeny
          relation: supports
          pages: 1–40
          figure: Figures 1–4; Tables 1–2; appendices
          quoteLocator: Methods and taxon sample; Results; discussion of unstable nodes
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia
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
      reviewedAgainstReferenceVersion: butler-2008-ornithischian-phylogeny @ DOI 10.1017/S1477201907002271
      referenceLinks:
        - relation: supports
          referenceId: butler-2008-ornithischian-phylogeny
          pages: 1–40
          figure: Figures 1–4; Tables 1–2; appendices
          quoteLocator: Methods and taxon sample; Results; discussion of unstable nodes
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia
      rangeKind: global-composite
      taxonomicConcept: Ornithischia — source-bounded sample window
      geographicScope: Lower Elliot Formation Eocursor sample, South Africa
      olderMa: 216.5
      youngerMa: 201.4
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: butler-2008-ornithischian-phylogeny
          locator: 1–40; Methods and taxon sample; Results; discussion of unstable nodes
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Ornithischia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ornithischia is represented by the taxa and characters sampled in Butler and colleagues’ morphology analysis; internal relationships are a matrix hypothesis and do not encode direct ancestors or exact clade duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The broad cladistic analysis is explicit and reproducible, but several placements depend on character scoring and missing data. Medium confidence preserves that scope.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Ornithischia is displayed at 216.5–201.4 Ma only as the source-bounded uppermost-Triassic Eocursor sample and its ICS stage conversion, not an Ornithischia FAD or LAD. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Ornithischia uses Butler, R.J.; Upchurch, P.; Norman, D.B. (2008) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Lower Elliot Formation Eocursor sample, South Africa; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
广泛支序分析明确且可复现，但若干位置依赖字符编码和缺失数据；中等置信度保留该范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Ornithischia 采用 Butler, R.J.; Upchurch, P.; Norman, D.B.（2008）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Lower Elliot Formation Eocursor sample, South Africa；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鸟臀目表示 Butler 等人形态分析中取样的类群和字符；内部关系属于矩阵假说，不编码直接祖先或精确支系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Ornithischia 仅以 216.5–201.4 Ma 展示为论文限定的南非 Eocursor 晚三叠世样本及其 ICS 阶段换算，而非鸟臀类的全球首现或末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the source-bounded uppermost-Triassic Eocursor sample and its ICS stage conversion, not an Ornithischia FAD or LAD; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The phylogeny of the ornithischian dinosaurs directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
