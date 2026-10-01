---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Orthrozanclus reburrus
    commonName: Orthrozanclus
    commonNameZh: 毛饰刺甲虫
    rank: species
    firstAppearance: 508
    lastAppearance: 505
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
    taxonId: txn:63455
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Aculifera/Sachitida/Orthrozanclidae/Orthrozanclus/Orthrozanclus_reburrus
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: conway-morris-caron-2007-orthrozanclus
      referenceLinks:
        - referenceId: conway-morris-caron-2007-orthrozanclus
          relation: supports
          pages: 1255–1258
          figure: Figures 1–4; supporting online material
          quoteLocator: Description of Orthrozanclus; character matrix; halwaxiid topology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Aculifera/Sachitida/Orthrozanclidae/Orthrozanclus/Orthrozanclus_reburrus
      rangeKind: global-composite
      taxonomicConcept: Orthrozanclus reburrus — numerical range withheld
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
        - referenceId: conway-morris-caron-2007-orthrozanclus
          locator: 1255–1258; Figures 1–4; holotype description, character comparison and matrix
      reviewStatus: automated-audit-passed
---

# Orthrozanclus reburrus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
One articulated Orthrozanclus body combines an anterior shell, three sclerite zones and marginal spines; Halwaxiida placement is a character-matrix hypothesis, not observed molluscan ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The character mosaic is directly preserved, while homology and root placement depend on a small morphological sample.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
性状镶嵌有直接保存，但同源性与根部位置依赖小型形态样本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一件关节相连的 Orthrozanclus 躯体结合前部壳、三带骨片和边缘棘；Halwaxiida 位置是性状矩阵假说，并非已观察软体动物祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 508–505 Ma display is withdrawn because the primary paper supports morphology and sampled topology but does not provide an auditable numerical occurrence endpoint in the atlas locator. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
No museum overview or secondary age page is used to manufacture a numerical endpoint absent from the located primary study.
<!-- /evo:text -->
