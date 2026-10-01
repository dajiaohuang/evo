---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Afrotheria
    commonName: African placental radiation
    commonNameZh: 非洲兽总目
    rank: clade
    taxonId: ""
    firstAppearance: 100
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Afrotheria
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
      reviewedAgainstReferenceVersion: murphy-2001-placental-bayesian concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: murphy-2001-placental-bayesian
          pages: 2348–2351
          figure: Figures 1–2
          quoteLocator: Bayesian and maximum-likelihood placental analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Placentalia/Afrotheria
      rangeKind: global-composite
      taxonomicConcept: Afrotheria living navigation and molecular-model interval
      geographicScope: Global sampled living record and molecular model
      olderMa: 100
      youngerMa: 0
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
        - content/events/Placental_four-clade_molecular_topology/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: murphy-2001-placental-bayesian
          locator: 2348–2351; Figures 1–2
      reviewStatus: automated-audit-passed
---

# Afrotheria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 16,397-base-pair placental matrix recovers Afrotheria in its sampled topology and estimates an approximately 103 Ma split under its models; the atlas’s 100 Ma navigation ceiling is rounded model context, not a fossil occurrence, exact crown origin or African ancestor location.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary analysis supports the sampled clade and model estimate; medium confidence preserves topology, rooting, date and biogeographic assumptions.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手分析支持取样支系与模型估计；中等置信度保留拓扑、定根、日期和生物地理假设。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套 16,397 碱基的胎盘类矩阵在其取样拓扑中恢复非洲兽总目，并在模型下估计约 1.03 亿年前的分化；图谱 1 亿年前的导航上限是取整模型背景，不是化石出现、精确冠群起源或非洲祖先地点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The rounded older endpoint is a model-bounded navigation value, not a fossil occurrence or fixed clade origin; the claim retains the study’s approximately 103 Ma estimate.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The rounded navigation endpoint is clipped to the existing Placentalia route; the cited analysis estimated an approximately 103 Ma split and living descendants extend to the present.
<!-- /evo:text -->
