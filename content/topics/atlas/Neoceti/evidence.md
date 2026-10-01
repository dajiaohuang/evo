---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Neoceti
    commonName: Crown Whales
    commonNameZh: 新鲸类（鲸类冠群）
    rank: clade
    taxonId: txn:63145
    firstAppearance: 36
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Neoceti
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
          pages: 212–217
          quoteLocator: Origin of modern whales; Mysticeti and Odontoceti discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Neoceti
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
          pages: 212–217
          quoteLocator: Origin of modern whales; Mysticeti and Odontoceti discussion
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
    - entityPath: content/topics/atlas/Neoceti
      rangeKind: global-composite
      taxonomicConcept: neoceti — source-bounded sample window
      geographicScope: Eocene–Oligocene fossil evidence through living Neoceti synthesized by Uhen
      olderMa: 36
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
        - content/topics/atlas/Neoceti/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 212–217; Origin of modern whales; Mysticeti and Odontoceti discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Neoceti

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Neoceti is used for the sampled crown-whale branch joining Mysticeti and Odontoceti in the synthesis; the Eocene–Oligocene timing discussed there combines fossil and model evidence and is not a direct observation of the crown split.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review supports the named crown grouping and separately discusses its temporal evidence. The statement keeps topology and timing distinct.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
neoceti is displayed at 36–0 Ma only as a synthesis-bounded crown-whale navigation envelope, not a directly observed crown split. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
neoceti uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Eocene–Oligocene fossil evidence through living Neoceti synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述支持具名冠群组合，并单独讨论其时间证据；表述将拓扑与时间区分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
neoceti 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Eocene–Oligocene fossil evidence through living Neoceti synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综述以 Neoceti 指连接须鲸类与齿鲸类的取样冠群鲸分支；其中讨论的始新世—渐新世时间综合化石与模型证据，并非对冠群分裂的直接观测。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
neoceti 仅以 36–0 Ma 展示为综述限定的冠群鲸类导航包络，而非直接观测的冠群分化。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to a synthesis-bounded crown-whale navigation envelope, not a directly observed crown split; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
