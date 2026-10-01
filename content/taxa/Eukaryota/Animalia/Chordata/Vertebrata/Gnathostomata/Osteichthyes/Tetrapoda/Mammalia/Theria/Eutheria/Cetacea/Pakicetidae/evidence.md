---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pakicetidae
    commonName: Pakicetids
    commonNameZh: 巴基鲸科
    rank: family
    taxonId: txn:63147
    firstAppearance: 50
    lastAppearance: 47
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae
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
          pages: 195–200
          quoteLocator: Earliest whales; Pakicetidae anatomical and stratigraphic discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae
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
          pages: 195–200
          quoteLocator: Earliest whales; Pakicetidae anatomical and stratigraphic discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae
      rangeKind: global-composite
      taxonomicConcept: pakicetidae — source-bounded sample window
      geographicScope: Early Eocene pakicetid sample synthesized by Uhen
      olderMa: 50
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 195–200; Earliest whales; Pakicetidae anatomical and stratigraphic discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Pakicetidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pakicetidae is reviewed as a separately sampled early Eocene cetacean family represented by incomplete and composite material; its placement helps test early whale relationships but does not make the family a direct ancestral stage for all later whales.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review supports family-level identification and comparative placement; the wording carries forward specimen and ancestry limits.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
pakicetidae is displayed at 50–47 Ma only as the review's sampled pakicetid interval, not a linear ancestral stage or exact endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
pakicetidae uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Early Eocene pakicetid sample synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述支持科级识别与比较位置；措辞保留标本和祖先关系限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
pakicetidae 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Early Eocene pakicetid sample synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
巴基鲸科在综述中被视为由不完整及组合材料代表、独立取样的早始新世鲸类科；其位置有助于检验早期鲸类关系，但不使该科成为所有后期鲸类的直接祖先阶段。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
pakicetidae 仅以 50–47 Ma 展示为综述所采样的巴基鲸科区间，而非线性祖先阶段或精确端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled pakicetid interval, not a linear ancestral stage or exact endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
