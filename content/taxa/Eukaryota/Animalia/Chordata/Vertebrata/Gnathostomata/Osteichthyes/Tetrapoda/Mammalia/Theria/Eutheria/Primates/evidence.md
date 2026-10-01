---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Primates
    commonName: Crown Primates
    commonNameZh: 灵长类冠群
    rank: order
    taxonId: txn:40700
    firstAppearance: 79.2
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: dos-reis-2018-primate-clock concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: dos-reis-2018-primate-clock
          pages: 604–608
          figure: Figures 1 and 5
          quoteLocator: Supplementary time-estimate spreadsheet; calibration strategies A and B
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates
      rangeKind: global-composite
      taxonomicConcept: crown Primates model interval and living continuation
      geographicScope: 372-species phylogeny; global living continuation
      olderMa: 79.2
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 9.2
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Crown-primate_relaxed-clock_interval/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: dos-reis-2018-primate-clock
          locator: pp. 604–608; Figures 1 and 5; Supplementary time-estimate spreadsheet
      reviewStatus: automated-audit-passed
---

# Primates

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 372-species relaxed-clock analysis estimates crown Primates at 79.2–70.0 Ma under its selected autocorrelated model and calibration strategy A, whereas another calibration strategy is younger; neither posterior interval is a fossil occurrence or exact crown-origin observation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The model, calibration strategy and posterior interval are explicit in the primary study. Medium confidence reflects strategy sensitivity rather than poor execution.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究明确给出模型、校准策略与后验区间；中等置信度反映策略敏感性，而非研究执行不足。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项覆盖 372 个物种的松弛时钟分析，在所选自相关模型与校准策略 A 下估计冠群灵长类为 7920 万—7000 万年前，而另一校准策略更年轻；两个后验区间都不是化石出现记录或冠群起源的精确观测。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is the upper end of one model posterior. Calibration strategy B spans 71.4–63.9 Ma; neither interval is a fossil occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Bayesian relaxed-clock posterior under the selected autocorrelated model and calibration strategy A, combined with living crown membership.
<!-- /evo:text -->
