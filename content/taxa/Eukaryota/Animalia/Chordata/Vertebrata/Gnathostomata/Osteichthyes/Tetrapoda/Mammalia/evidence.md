---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mammalia
    commonName: Mammals
    commonNameZh: 哺乳动物
    rank: class
    taxonId: txn:36651
    firstAppearance: 225
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny + bi-2014-euharamiyidans concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Definitions of Mammalia and Mammaliaformes; phylogenetic analyses
        - relation: supports
          referenceId: bi-2014-euharamiyidans
          pages: 579–584
          figure: Figure 4
          quoteLocator: Mammalia phylogeny and alternative placement discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bi-2014-euharamiyidans @ DOI 10.1038/nature13718
      referenceLinks:
        - relation: supports
          referenceId: bi-2014-euharamiyidans
          pages: 579–584
          figure: Figure 4
          quoteLocator: Mammalia phylogeny and alternative placement discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
      rangeKind: global-composite
      taxonomicConcept: Mammalia — source-bounded sample window
      geographicScope: Jurassic euharamiyidan sample under the Mammalia placement tested by Bi et al., continued by living Mammalia
      olderMa: 164.7
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
      confidence: contested
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bi-2014-euharamiyidans
          locator: 579–584; Mammalia phylogeny and alternative placement discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
  classification-support:
    - support: moderate
      groupingBasis:
        markdown: evidence.md
        field: /records/classification-support/0/groupingBasis
      conflicts:
        markdown: evidence.md
        field: /records/classification-support/0/conflicts
      references:
        - open-tree
        - pbdb-api-2016
---

# Mammalia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Broad Mesozoic matrices distinguish crown-based Mammalia from more inclusive mammaliaform usage, and Jurassic euharamiyidan analyses can move key fossils across that boundary; the atlas Mammalia route therefore does not turn its 225 Ma display ceiling into a crown origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Two primary morphological analyses support the concept disagreement and sampled placements. Neither source directly dates the crown’s origin.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Mammalia is displayed at 164.7–0 Ma only as a contested matrix-dependent navigation envelope; it is not a crown-Mammalia origin date. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Mammalia uses Bi, S.; Wang, Y.; Guan, J.; Sheng, X.; Meng, J. (2014) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is contested and applies only to Jurassic euharamiyidan sample under the Mammalia placement tested by Bi et al., continued by living Mammalia; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两项一手形态分析支持概念分歧与取样位置；二者都未直接测定冠群起源。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Mammalia 采用 Bi, S.; Wang, Y.; Guan, J.; Sheng, X.; Meng, J.（2014）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。争议置信度仅适用于 Jurassic euharamiyidan sample under the Mammalia placement tested by Bi et al., continued by living Mammalia；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
广泛的中生代矩阵将冠群式哺乳纲与更包容的哺乳形类用法区分开，而侏罗纪真哈拉米亚类分析可使关键化石跨越这一边界移动；因此图谱的 Mammalia 路线不会把 2.25 亿年前的显示上限转化为冠群起源日期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Mammalia 仅以 164.7–0 Ma 展示为依赖矩阵且存在争议的导航包络；并非冠群哺乳类起源日期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to a contested matrix-dependent navigation envelope; it is not a crown-Mammalia origin date; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Three new Jurassic euharamiyidan species reinforce early divergence of mammals directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->

## classification-support / groupingBasis

<!-- evo:text /records/classification-support/0/groupingBasis -->
Major mammal groups are simplified to keep the atlas navigable.
<!-- /evo:text -->

## classification-support / conflicts

<!-- evo:text /records/classification-support/0/conflicts -->
Stem/crown definitions and divergence estimates vary among morphological and molecular analyses.
<!-- /evo:text -->
