---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Amphicyonidae
    commonName: Beardogs
    commonNameZh: 犬熊科
    rank: family
    firstAppearance: 42
    lastAppearance: 1.8
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphicyonidae
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
      reviewedAgainstReferenceVersion: tomiya-tseng-2016-beardogs + spaulding-flynn-2012-carnivoramorpha concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: tomiya-tseng-2016-beardogs
          pages: Article 160518
          figure: Figure 7
          quoteLocator: Phylogenetic analysis; origin of Amphicyonidae discussion
        - relation: supports
          referenceId: spaulding-flynn-2012-carnivoramorpha
          pages: 653–677
          quoteLocator: Caniform and stem carnivoramorphan topology context
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphicyonidae
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
      reviewedAgainstReferenceVersion: tomiya-tseng-2016-beardogs @ DOI 10.1098/rsos.160518
      referenceLinks:
        - relation: supports
          referenceId: tomiya-tseng-2016-beardogs
          pages: Article 160518
          figure: Figure 7
          quoteLocator: Phylogenetic analysis; origin of Amphicyonidae discussion
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
    - entityPath: content/topics/atlas/Amphicyonidae
      rangeKind: global-composite
      taxonomicConcept: Amphicyonidae navigation display — source-bounded sample window
      geographicScope: Amphicyonid fossil sample synthesized by Tomiya and Tseng
      olderMa: 42
      youngerMa: 1.8
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
        - content/topics/atlas/Amphicyonidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: tomiya-tseng-2016-beardogs
          locator: Article 160518; Phylogenetic analysis; origin of Amphicyonidae discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Amphicyonidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Expanded early-amphicyonid morphology sampling recovers Amphicyonidae as a basal caniform branch outside Canoidea, while exact sister relationships remain unresolved; the family is not a dog–bear ancestor blend or one linear lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary reappraisal increases early family sampling and explicitly reports alternative placements around the branch.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Amphicyonidae navigation display is displayed at 42–1.8 Ma only as the source-bounded family sample, not a continuous global range or direct dog–bear ancestry. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Amphicyonidae navigation display uses Tomiya, S.; Tseng, Z.J. (2016) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Amphicyonid fossil sample synthesized by Tomiya and Tseng; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手修订扩大早期科级取样，并明确报告该分支周围的替代位置。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Amphicyonidae navigation display 采用 Tomiya, S.; Tseng, Z.J.（2016）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Amphicyonid fossil sample synthesized by Tomiya and Tseng；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
扩展的早期 Amphicyonidae 形态取样把该科恢复为 Canoidea 之外的基干犬型类分支，但精确姐妹关系仍未解决；该科不是犬—熊祖先混合体，也不是单一线性谱系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Amphicyonidae navigation display 仅以 42–1.8 Ma 展示为来源限定的科级样本，而非连续全球范围或犬熊直接祖先关系。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the source-bounded family sample, not a continuous global range or direct dog–bear ancestry; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Whence the beardogs? Reappraisal of the Middle to Late Eocene “Miacis” from Texas, USA, and the origin of Amphicyonidae directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
