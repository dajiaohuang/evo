---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Odontoceti
    commonName: Toothed Whales
    commonNameZh: 齿鲸类
    rank: parvorder
    taxonId: ""
    firstAppearance: 34
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Neoceti/Odontoceti
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
      reviewedAgainstReferenceVersion: uhen-2010-whale-origins concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: uhen-2010-whale-origins
          pages: 212–219
          quoteLocator: Modern whales; Odontoceti fossil and anatomical synthesis
    - subject:
        kind: taxon
        path: content/topics/atlas/Neoceti/Odontoceti
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
      reviewedAgainstReferenceVersion: uhen-2010-whale-origins @ DOI 10.1146/annurev-earth-040809-152453
      referenceLinks:
        - relation: supports
          referenceId: uhen-2010-whale-origins
          pages: 212–219
          quoteLocator: Modern whales; Odontoceti fossil and anatomical synthesis
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
    - entityPath: content/topics/atlas/Neoceti/Odontoceti
      rangeKind: global-composite
      taxonomicConcept: odontoceti — source-bounded sample window
      geographicScope: Oligocene fossil evidence through living Odontoceti synthesized by Uhen
      olderMa: 34
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
      confidence: medium
      claimPaths:
        - content/topics/atlas/Neoceti/Odontoceti/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 212–219; Modern whales; Odontoceti fossil and anatomical synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Odontoceti

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Odontoceti is treated as the toothed-whale branch of sampled Neoceti, but its early fossil membership and character sequence are reconstructed from separate taxa; the branch is not a single observed lineage or an exact 34 Ma origin event.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review supports the higher grouping and fossil synthesis, while the claim withholds a direct lineage and exact origination date.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
odontoceti is displayed at 34–0 Ma only as the review's sampled stem-to-living odontocete envelope, not an exact clade origin. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
odontoceti uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Oligocene fossil evidence through living Odontoceti synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述支持高阶组合与化石综合；主张不陈述直接谱系和精确起源日期。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
odontoceti 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Oligocene fossil evidence through living Odontoceti synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
齿鲸类被视为取样新鲸类中的齿鲸分支，但其早期化石成员与性状顺序由彼此独立的类群重建；该分支不是单一已观测谱系，也不是精确的 3400 万年前起源事件。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
odontoceti 仅以 34–0 Ma 展示为综述采样的干群至现生齿鲸包络，而非精确类群起源。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled stem-to-living odontocete envelope, not an exact clade origin; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
