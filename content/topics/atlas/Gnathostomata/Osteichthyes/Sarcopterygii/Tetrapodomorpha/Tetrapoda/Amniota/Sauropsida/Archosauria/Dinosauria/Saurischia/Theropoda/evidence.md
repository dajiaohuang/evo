---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Theropoda
    commonName: Theropods
    commonNameZh: 兽脚类
    rank: suborder
    taxonId: ""
    firstAppearance: 228
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Theropoda
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
      reviewedAgainstReferenceVersion: hendrickx-2015-theropod-classification concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: hendrickx-2015-theropod-classification
          relation: supports
          pages: 1–73
          figure: Figures 1–15; Table 1
          quoteLocator: Abstract; history of classification; pp. 10–34 current systematics; unresolved relationships
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Theropoda
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
      reviewedAgainstReferenceVersion: hendrickx-2015-theropod-classification @ https://archives.palarch.nl/index.php/jvp/article/view/353/339
      referenceLinks:
        - relation: supports
          referenceId: hendrickx-2015-theropod-classification
          pages: 1–73
          figure: Figures 1–15; Table 1
          quoteLocator: Abstract; history of classification; pp. 10–34 current systematics; unresolved relationships
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Theropoda
      rangeKind: global-composite
      taxonomicConcept: Theropoda — source-bounded sample window
      geographicScope: Non-avian theropod record synthesized by Hendrickx et al.
      olderMa: 233.2
      youngerMa: 66
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Saurischia/Theropoda/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: hendrickx-2015-theropod-classification
          locator: 1–73; Abstract; history of classification; pp. 10–34 current systematics; unresolved relationships
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Theropoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Theropoda navigation route uses Hendrickx and colleagues only for the reviewed non-avian branches and their classification; living birds extend the app route independently, so the review is not a literal ancestor sequence or an exact total range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The systematic review compares major non-avian theropod classifications and explicitly identifies unstable relationships. Medium confidence limits its support to those branches; the living-bird endpoint is navigation context, not evidence supplied by this paper.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Theropoda is displayed at 233.2–66 Ma only as the review's non-avian theropod coverage; living birds and exact global endpoints are outside this claim. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Theropoda uses Hendrickx, C.; Hartman, S.A.; Mateus, O. (2015) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Non-avian theropod record synthesized by Hendrickx et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统综述比较主要非鸟兽脚类分类，并明确识别不稳定关系。中等置信度仅支持这些分支；现生鸟类端点是导航语境，不是该论文提供的证据。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Theropoda 采用 Hendrickx, C.; Hartman, S.A.; Mateus, O.（2015）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Non-avian theropod record synthesized by Hendrickx et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
兽脚亚目导航路线仅使用 Hendrickx 等人的综述来支持非鸟分支及其分类；现生鸟类独立延伸应用路线，因此该综述不是字面祖先序列或精确总范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Theropoda 仅以 233.2–66 Ma 展示为综述覆盖的非鸟兽脚类记录；现生鸟类与精确全球端点不在该断言范围内。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's non-avian theropod coverage; living birds and exact global endpoints are outside this claim; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
An Overview of Non-Avian Theropod Discoveries and Classification directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
