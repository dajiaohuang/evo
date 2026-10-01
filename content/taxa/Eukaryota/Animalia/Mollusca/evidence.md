---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mollusca
    commonName: Mollusks
    commonNameZh: 软体动物
    rank: phylum
    taxonId: txn:7805
    firstAppearance: 558
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca
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
      reviewedAgainstReferenceVersion: fedonkin-waggoner-1997-kimberella
      referenceLinks:
        - referenceId: fedonkin-waggoner-1997-kimberella
          relation: supports
          pages: 868–871
          figure: Figures 1–3
          quoteLocator: Description; reconstruction; discussion of mollusc-like characters
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca
      rangeKind: global-composite
      taxonomicConcept: Mollusca plus explicitly bounded origin-dossier navigation
      geographicScope: Global living Mollusca plus represented origin-dossier sample
      olderMa: 558
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
      confidence: low
      claimPaths:
        - content/events/Kimberella_White_Sea_body-plan_sample/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: open-tree
          locator: https://opentreeoflife.github.io/use
        - referenceId: pbdb-api-2016
          locator: doi:10.1017/pab.2015.39
        - referenceId: fedonkin-waggoner-1997-kimberella
          locator: 868–871; mollusc-like body-plan dossier, not crown assignment
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Mollusca

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 558–0 Ma Mollusca display is a navigation envelope anchored at its old end by White Sea Kimberella morphology and at its young end by living molluscs; it is not a crown-Mollusca origin, a continuous fossil record or a direct-ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Kimberella anatomy is directly documented, but mollusc affinity is interpretive and the navigation endpoint deliberately exceeds what one local fossil assemblage can establish.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Kimberella 解剖有直接记录，但软体动物亲缘仍属解释；导航端点有意不被误写成单一局部化石群能够确定的全群端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
558–0 Ma 的软体动物显示范围是导航包络：老端由白海 Kimberella 形态证据锚定，年轻端由现生软体动物锚定；它不是软体动物冠群起源、连续化石记录或直接祖先主张。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint includes the mollusc-like Kimberella dossier for discovery and is not a crown-Mollusca FAD or divergence estimate.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Teaching-navigation envelope linking living Mollusca to a separately qualified mollusc-like Ediacaran dossier.
<!-- /evo:text -->
