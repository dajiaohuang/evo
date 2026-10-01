---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Terebratulida
    commonName: Terebratulids
    commonNameZh: 穿孔贝类
    rank: order
    taxonId: txn:29979
    firstAppearance: 409
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Rhynchonellata/Terebratulida
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lopez-carranza-carlson-2019-terebratulides
      referenceLinks:
        - referenceId: lopez-carranza-carlson-2019-terebratulides
          relation: supports
          pages: e0225528
          quoteLocator: Figures 2–8; geometric-morphometric methods and results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Rhynchonellata/Terebratulida
      rangeKind: global-composite
      taxonomicConcept: Terebratulida — numerical range withheld
      geographicScope: No numerical geographic-temporal range exposed
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: lopez-carranza-carlson-2019-terebratulides
          locator: Article e0225528; Materials and methods; Table 1; Figure 2; S1 Table; 58 museum individuals from eight living species
      reviewStatus: automated-audit-passed
---

# Terebratulida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Three-dimensional geometric morphometrics of long-looped brachidia tests species assignments in selected living terebratulides; this sample does not characterize all Terebratulida or their fossil duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Quantified three-dimensional landmarks support the species-level test, while narrow living-taxon sampling prevents order-wide extrapolation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
量化三维标志点支持物种级检验，但狭窄的现生类群取样阻止了目级外推。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对长环腕骨进行三维几何形态测量，检验了部分现生穿孔贝类的物种归属；该样本不代表全部穿孔贝目，也不界定其化石延续时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 409 Ma–present display is withdrawn because the cited morphometric study samples selected living species and supplies no fossil first-appearance endpoint. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The study is fit for extant species assignment and brachidium morphology, not an order-wide temporal range.
<!-- /evo:text -->
