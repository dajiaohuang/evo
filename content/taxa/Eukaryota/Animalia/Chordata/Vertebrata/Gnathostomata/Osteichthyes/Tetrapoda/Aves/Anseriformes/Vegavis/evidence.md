---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Vegavis
    commonName: Vegavis
    commonNameZh: 维加鸟
    rank: genus
    taxonId: txn:81021
    firstAppearance: 69.2
    lastAppearance: 68.4
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Anseriformes/Vegavis
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: torres-2025-vegavis-skull concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: torres-2025-vegavis-skull
          relation: supports
          pages: 146–151
          figure: Figures 1–4
          quoteLocator: Age statement; AMNH FARB 30899; geological setting; phylogenetic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Anseriformes/Vegavis
      rangeKind: global-composite
      taxonomicConcept: Vegavis iaai, including AMNH FARB 30899
      geographicScope: Vega Island, Antarctica
      olderMa: 69.2
      youngerMa: 68.4
      status: available
      uncertainty:
        olderMa: 69.2
        youngerMa: 68.4
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Vegavis_skull_tests_a_Cretaceous_crown-bird_hypothesis/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: torres-2025-vegavis-skull
          locator: 146–151; Figure 1; age statement; AMNH FARB 30899
      reviewStatus: automated-audit-passed
---

# Vegavis

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Vegavis is represented by skull AMNH FARB 30899 from the 69.2–68.4 Ma Sandwich Bluff Member interval; that dated individual does not establish a genus-wide or crown-bird first appearance, and crown-waterfowl placement remains model-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen and interval are directly reported. High confidence is limited to that occurrence and keeps disputed topology separate.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本与区间有直接报告。高置信度仅限该记录，并把有争议的拓扑分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
维加鸟由 6920 万至 6840 万年前 Sandwich Bluff 段的头骨 AMNH FARB 30899 表示；该定年个体不建立属级或冠群鸟类首现，其冠群水禽位置仍依赖模型。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is the study-reported age interval for the fossil-bearing unit, not a direct radioisotopic date on the skull or the full genus range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The nearly complete skull AMNH FARB 30899 is tied to the latest Cretaceous Sandwich Bluff Member interval reported as 69.2–68.4 Ma.
<!-- /evo:text -->
