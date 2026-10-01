---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Thalassocnus
    commonName: Aquatic sloths
    commonNameZh: 海懒兽
    rank: genus
    taxonId: txn:72041
    firstAppearance: 8
    lastAppearance: 3
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Pilosa/Folivora/Eufolivora/Megatherioidea/Megatheria/Nothrotheriidae/Thalassocninae/Thalassocnus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: amson-2014-thalassocnus-bone-density concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: amson-2014-thalassocnus-bone-density
          pages: Article 20140192
          figure: Figures 1–4
          quoteLocator: Species and horizon sampling; Tables S3–S7
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Pilosa/Folivora/Eufolivora/Megatherioidea/Megatheria/Nothrotheriidae/Thalassocninae/Thalassocnus
      rangeKind: global-composite
      taxonomicConcept: Thalassocnus sampled species series
      geographicScope: Neogene Pisco Formation, Peru
      olderMa: 8
      youngerMa: 3
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Thalassocnus_bone-density_series/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: amson-2014-thalassocnus-bone-density
          locator: 20140192; Figures 1–4; Tables S3–S7
      reviewStatus: automated-audit-passed
---

# Thalassocnus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Thalassocnus is bounded by five named species sampled from successive Pisco Formation horizons over an approximately 8–3 Ma envelope; the sequence supports comparative bone-density change but is not a global genus duration, continuous population or direct ancestor series.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimens and successive horizons are documented. Functional adaptation and lineage continuity remain interpretations.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本与连续层位有记录；功能适应与谱系连续性仍属解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Thalassocnus 由 Pisco 组连续层位中取样的五个具名物种约束，覆盖约 800 万—300 万年前；该序列支持骨密度变化比较，但不是全球属级延续、连续种群或直接祖先序列。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level occurrence or model-bounded navigation interval, not a guaranteed global first appearance, direct origination date or ancestor range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Five named species occur in successive Pisco Formation horizons used for the compactness comparison.
<!-- /evo:text -->
