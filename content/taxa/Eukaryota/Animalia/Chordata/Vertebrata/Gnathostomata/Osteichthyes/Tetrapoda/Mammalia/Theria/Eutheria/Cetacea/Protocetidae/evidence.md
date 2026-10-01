---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Protocetidae
    commonName: Protocetids
    commonNameZh: 原鲸科
    rank: family
    taxonId: txn:42934
    firstAppearance: 47
    lastAppearance: 37.7
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae
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
          pages: 202–207
          quoteLocator: Protocetidae diversity, distribution and locomotor discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae
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
          pages: 202–207
          quoteLocator: Protocetidae diversity, distribution and locomotor discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae
      rangeKind: global-composite
      taxonomicConcept: protocetidae — source-bounded sample window
      geographicScope: Middle Eocene protocetid sample synthesized by Uhen
      olderMa: 47
      youngerMa: 37.7
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 202–207; Protocetidae diversity, distribution and locomotor discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Protocetidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The synthesis recognizes Protocetidae as a diverse, geographically dispersed assemblage of middle Eocene whales with varying amphibious adaptations; it is not reduced to one ancestor, habitat or uninterrupted global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review’s family treatment integrates multiple taxa and localities, so the statement preserves diversity and sampling boundaries.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
protocetidae is displayed at 47–37.7 Ma only as the review's diverse protocetid sample, not uninterrupted global occupancy or exact endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
protocetidae uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Middle Eocene protocetid sample synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述的科级处理整合多个类群与地点，因此表述保留多样性和取样边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
protocetidae 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Middle Eocene protocetid sample synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综述把原鲸科识别为一个多样、地理分散、具有不同两栖适应的中始新世鲸类组合；它不被简化为单一祖先、单一栖息地或连续全球范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
protocetidae 仅以 47–37.7 Ma 展示为综述所采样的多样原鲸科记录，而非连续全球占据或精确端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's diverse protocetid sample, not uninterrupted global occupancy or exact endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
