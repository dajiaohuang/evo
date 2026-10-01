---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Basilosauridae
    commonName: Basilosaurids
    commonNameZh: 龙王鲸类
    rank: family
    taxonId: txn:42936
    firstAppearance: 41
    lastAppearance: 34
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pelagiceti/Basilosauridae
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
          pages: 207–212
          quoteLocator: Basilosauridae and late Eocene whale synthesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pelagiceti/Basilosauridae
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
          pages: 207–212
          quoteLocator: Basilosauridae and late Eocene whale synthesis
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pelagiceti/Basilosauridae
      rangeKind: global-composite
      taxonomicConcept: Basilosauridae — source-bounded sample window
      geographicScope: Late Eocene basilosaurid fossil sample synthesized by Uhen
      olderMa: 41
      youngerMa: 34
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pelagiceti/Basilosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 207–212; Basilosauridae and late Eocene whale synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Basilosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Basilosauridae is synthesized as a sampled late Eocene radiation of fully aquatic archaeocetes with several distinct genera; the family grouping does not imply that every basilosaurid lies on the direct ancestry of Neoceti.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The systematic review supports family-level anatomy and diversity while separating the sampled side branches from direct ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Basilosauridae is displayed at 41–34 Ma only as the review's sampled late-Eocene radiation, not exact family FAD/LAD. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Basilosauridae uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Eocene basilosaurid fossil sample synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统综述支持科级解剖与多样性，同时将取样旁支与直接祖先关系区分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Basilosauridae 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Eocene basilosaurid fossil sample synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综述将龙王鲸科概括为晚始新世完全水生古鲸类的一个取样辐射，包含多个不同属；该科级组合不表示每一种龙王鲸科成员都位于新鲸类的直接祖线上。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Basilosauridae 仅以 41–34 Ma 展示为综述所采样的晚始新世辐射，而非精确科级首末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled late-Eocene radiation, not exact family FAD/LAD; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
