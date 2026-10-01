---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Saurischia
    commonName: Saurischians
    commonNameZh: 蜥臀类
    rank: order
    taxonId: ""
    firstAppearance: 233.2
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia
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
      reviewedAgainstReferenceVersion: nesbitt-2009-tawa-saurischian concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: nesbitt-2009-tawa-saurischian
          relation: supports
          pages: 1530–1533
          figure: Figures 1–3; Supplementary Information
          quoteLocator: Holotype; character analysis; early-dinosaur phylogeny
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia
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
      reviewedAgainstReferenceVersion: nesbitt-2009-tawa-saurischian @ DOI 10.1126/science.1180350
      referenceLinks:
        - relation: supports
          referenceId: nesbitt-2009-tawa-saurischian
          pages: 1530–1533
          figure: Figures 1–3; Supplementary Information
          quoteLocator: Holotype; character analysis; early-dinosaur phylogeny
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia
      rangeKind: global-composite
      taxonomicConcept: Saurischia — source-bounded sample window
      geographicScope: Chinle Formation Tawa sample, Ghost Ranch, New Mexico
      olderMa: 215
      youngerMa: 213
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: nesbitt-2009-tawa-saurischian
          locator: 1530–1533; Holotype; character analysis; early-dinosaur phylogeny
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Saurischia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Saurischia is represented by the sampled early-dinosaur matrix that places Tawa within Saurischia; the result is a phylogenetic hypothesis and does not make Tawa a direct ancestor or establish an exact clade range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The nearly complete skeleton and character matrix are direct primary evidence, while early dinosaur branching remains sensitive to taxon and character sampling.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Saurischia is displayed at 215–213 Ma only as the dated Late Triassic Tawa-bearing interval used in the sampled saurischian analysis, not a Saurischia origin date. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Saurischia uses Nesbitt, S.J.; Smith, N.D.; Irmis, R.B.; Turner, A.H.; Downs, A.; Norell, M.A. (2009) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Chinle Formation Tawa sample, Ghost Ranch, New Mexico; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
近完整骨架和字符矩阵是直接主研究证据，而早期恐龙分支仍受类群与字符取样影响。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Saurischia 采用 Nesbitt, S.J.; Smith, N.D.; Irmis, R.B.; Turner, A.H.; Downs, A.; Norell, M.A.（2009）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Chinle Formation Tawa sample, Ghost Ranch, New Mexico；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蜥臀目表示把 Tawa 置于蜥臀目内的早期恐龙取样矩阵；该结果是系统发育假说，不把 Tawa 视为直接祖先，也不建立精确支系范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Saurischia 仅以 215–213 Ma 展示为系统分析所用 Tawa 含化石层的晚三叠世区间，而非蜥臀类起源日期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the dated Late Triassic Tawa-bearing interval used in the sampled saurischian analysis, not a Saurischia origin date; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Complete Skeleton of a Late Triassic Saurischian and the Early Evolution of Dinosaurs directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
