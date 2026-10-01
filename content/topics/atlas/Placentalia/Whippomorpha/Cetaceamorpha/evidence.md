---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cetaceamorpha
    commonName: Cetacean Total-Group Route
    commonNameZh: 鲸类总群导航
    rank: clade
    taxonId: txn:159631
    firstAppearance: 53
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha
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
      reviewedAgainstReferenceVersion: uhen-2010-whale-origins concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: uhen-2010-whale-origins
          pages: 189–219
          quoteLocator: Introduction; Relationships of Cetacea; fossil-transition synthesis
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha
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
          pages: 189–219
          quoteLocator: Introduction; Relationships of Cetacea; fossil-transition synthesis
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
    - entityPath: content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha
      rangeKind: global-composite
      taxonomicConcept: cetaceamorpha — source-bounded sample window
      geographicScope: Raoellid-to-living-cetacean navigation sample synthesized by Uhen
      olderMa: 53
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
        - content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 189–219; Introduction; Relationships of Cetacea; fossil-transition synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Cetaceamorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Cetaceamorpha is used here as a navigation route joining raoellid evidence to sampled Cetacea; Uhen’s synthesis reviews those relationships but does not present the route as one observed lineage, a direct ancestor chain or a dated crown group.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source supports the constituent evidence and competing relationship hypotheses. The claim explicitly identifies the atlas-only route boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
cetaceamorpha is displayed at 53–0 Ma only as an editorial navigation envelope across separately sampled fossils and living whales, not one observed lineage or origin date. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
cetaceamorpha uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Raoellid-to-living-cetacean navigation sample synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持组成证据及相互竞争的关系假说；主张明确标示仅属图谱的路线边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
cetaceamorpha 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Raoellid-to-living-cetacean navigation sample synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
此处 Cetaceamorpha 是连接 Raoellidae 证据与取样鲸目的导航路线；Uhen 的综述讨论这些关系，但不把该路线呈现为单一已观测谱系、直接祖先链或有日期的冠群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
cetaceamorpha 仅以 53–0 Ma 展示为跨多个独立化石样本与现生鲸类的编辑性导航包络，而非单一观测谱系或起源日期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to an editorial navigation envelope across separately sampled fossils and living whales, not one observed lineage or origin date; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
