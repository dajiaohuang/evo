---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ambulocetidae
    commonName: Ambulocetids
    commonNameZh: 陆行鲸科
    rank: family
    taxonId: txn:53246
    firstAppearance: 48
    lastAppearance: 47
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Ambulocetidae
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
          pages: 198–202
          quoteLocator: Ambulocetidae and amphibious locomotion synthesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Ambulocetidae
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
          pages: 198–202
          quoteLocator: Ambulocetidae and amphibious locomotion synthesis
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Ambulocetidae
      rangeKind: global-composite
      taxonomicConcept: ambulocetidae — source-bounded sample window
      geographicScope: Eocene ambulocetid sample synthesized by Uhen
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Ambulocetidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: uhen-2010-whale-origins
          locator: 198–202; Ambulocetidae and amphibious locomotion synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Ambulocetidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ambulocetidae is treated in the synthesis as a sampled Eocene fossil family with amphibious anatomical interpretations; those specimens test locomotor transitions but do not form a demonstrated linear ancestor series.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Family identity and comparative anatomy are supported by a systematic synthesis of primary studies; direct ancestry is explicitly withheld.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
ambulocetidae is displayed at 48–47 Ma only as the review's sampled ambulocetid interval, not a linear ancestral stage or exact endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
ambulocetidae uses Uhen, M.D. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Eocene ambulocetid sample synthesized by Uhen; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
科级身份与比较解剖由一手研究系统综述支持；主张明确不陈述直接祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
ambulocetidae 采用 Uhen, M.D.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Eocene ambulocetid sample synthesized by Uhen；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综述将陆行鲸科视为具有两栖解剖解释的始新世取样化石科；这些标本用于检验运动转变，但不构成已证实的线性祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
ambulocetidae 仅以 48–47 Ma 展示为综述所采样的陆行鲸科区间，而非线性祖先阶段或精确端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled ambulocetid interval, not a linear ancestral stage or exact endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The Origin(s) of Whales directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
