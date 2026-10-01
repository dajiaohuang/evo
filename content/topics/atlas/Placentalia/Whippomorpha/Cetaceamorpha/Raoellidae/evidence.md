---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Raoellidae
    commonName: Raoellids
    commonNameZh: 劳氏兽科
    rank: family
    taxonId: ""
    firstAppearance: 48
    lastAppearance: 47
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha/Raoellidae
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
          pages: 193–198
          quoteLocator: Artiodactyl relatives and earliest cetaceans; raoellid discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha/Raoellidae
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
          pages: 193–198
          quoteLocator: Artiodactyl relatives and earliest cetaceans; raoellid discussion
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
    - entityPath: content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha/Raoellidae
      rangeKind: global-composite
      taxonomicConcept: raoellidae — source-bounded sample window
      geographicScope: Eocene raoellid sample synthesized by Uhen
      olderMa: 48
      youngerMa: 47
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
        - content/topics/atlas/Placentalia/Whippomorpha/Cetaceamorpha/Raoellidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 193–198; Artiodactyl relatives and earliest cetaceans; raoellid discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Raoellidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The whale-origin synthesis treats sampled raoellids as close fossil relatives used to test the land-to-water transition, while their relationship to Cetacea remains a phylogenetic inference rather than evidence that a raoellid specimen was a direct whale ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review integrates primary morphology, stratigraphy and phylogeny but does not identify a direct ancestor. The statement preserves that distinction.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
raoellidae is displayed at 48–47 Ma only as the sampled raoellid interval in the whale-origin review, not a direct whale ancestor or global family range. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
raoellidae uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Eocene raoellid sample synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述整合一手形态、地层和系统发育证据，但未认定直接祖先；表述保留这一差别。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
raoellidae 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Eocene raoellid sample synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鲸类起源综述把取样 Raoellidae 视为用于检验陆生—水生转变的近缘化石类群；其与鲸目的关系仍是系统发育推断，而不是某件 Raoellidae 标本为鲸类直接祖先的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
raoellidae 仅以 48–47 Ma 展示为鲸类起源综述中的劳氏兽科采样区间，而非鲸类直接祖先或全球科级范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the sampled raoellid interval in the whale-origin review, not a direct whale ancestor or global family range; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
