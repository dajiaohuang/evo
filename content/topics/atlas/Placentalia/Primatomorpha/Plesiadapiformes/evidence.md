---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Plesiadapiformes
    commonName: Plesiadapiform-grade Primatomorphans
    commonNameZh: 更猴型灵长形类
    rank: order
    taxonId: ""
    firstAppearance: 66
    lastAppearance: 34
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Primatomorpha/Plesiadapiformes
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
      reviewedAgainstReferenceVersion: silcox-lopez-torres-2017-primate-origins concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: silcox-lopez-torres-2017-primate-origins
          pages: 113–137
          quoteLocator: Plesiadapiform relationships; definition and diagnosis of Primates
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Primatomorpha/Plesiadapiformes
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
      reviewedAgainstReferenceVersion: silcox-lopez-torres-2017-primate-origins @ DOI 10.1146/annurev-earth-063016-015637
      referenceLinks:
        - relation: supports
          referenceId: silcox-lopez-torres-2017-primate-origins
          pages: 113–137
          quoteLocator: Plesiadapiform relationships; definition and diagnosis of Primates
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
    - entityPath: content/topics/atlas/Placentalia/Primatomorpha/Plesiadapiformes
      rangeKind: global-composite
      taxonomicConcept: plesiadapiformes — source-bounded sample window
      geographicScope: Paleogene plesiadapiform record synthesized by Silcox and López-Torres
      olderMa: 66
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
        - content/topics/atlas/Placentalia/Primatomorpha/Plesiadapiformes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: silcox-lopez-torres-2017-primate-origins
          locator: 113–137; Plesiadapiform relationships; definition and diagnosis of Primates
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Plesiadapiformes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The primate-origins synthesis treats Plesiadapiformes as a diverse Paleogene assemblage whose relationship to crown Primates remains central and contested; the atlas label is not a claim that all included families form one crown-primate ancestor group.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
A systematic review supports the diversity and competing membership hypotheses. The statement preserves disagreement instead of selecting one ancestry narrative.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
plesiadapiformes is displayed at 66–34 Ma only as the review's heterogeneous sampled assemblage, not a monophyletic crown-primate range. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
plesiadapiformes uses Silcox, M.T.; López-Torres, S. (2017) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Paleogene plesiadapiform record synthesized by Silcox and López-Torres; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统综述支持多样性及相互竞争的成员假说；表述保留分歧，而非选择一种祖先叙事。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
plesiadapiformes 采用 Silcox, M.T.; López-Torres, S.（2017）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Paleogene plesiadapiform record synthesized by Silcox and López-Torres；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
灵长类起源综述把 Plesiadapiformes 视为一个多样的古近纪组合，其与冠群灵长类的关系仍属核心争议；图谱标签并不主张所有所含科构成一个冠群灵长类祖先群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
plesiadapiformes 仅以 66–34 Ma 展示为综述所采样的异质组合，而非单系冠群灵长类范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's heterogeneous sampled assemblage, not a monophyletic crown-primate range; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Major Questions in the Study of Primate Origins directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
