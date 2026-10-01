---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Molluscan origin dossier route
    commonName: Problematic early molluscan evidence
    commonNameZh: 有争议的早期软体动物证据
    rank: navigation group
    firstAppearance: 558
    lastAppearance: 505
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Molluscan_origin_dossier_route
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: fedonkin-waggoner-1997-kimberella; conway-morris-caron-2007-orthrozanclus
      referenceLinks:
        - referenceId: fedonkin-waggoner-1997-kimberella
          relation: supports
          pages: 868–871
          figure: Figures 1–3
          quoteLocator: Description; reconstruction; discussion of mollusc-like characters
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
    - entityPath: content/topics/atlas/Molluscan_origin_dossier_route
      rangeKind: global-composite
      taxonomicConcept: Molluscan-origin dossier navigation route — numerical range withheld
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
        - referenceId: fedonkin-waggoner-1997-kimberella
          locator: 868–871; White Sea Kimberella sample; Figures 1–3; separate local specimen evidence only
      reviewStatus: automated-audit-passed
---

# Molluscan origin dossier route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The molluscan-origin dossier is a navigation route through contested Kimberella affinity and the Orthrozanclus character mosaic; it does not define crown Mollusca, a direct ancestor chain or a global origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The sources support separate local specimens and competing comparative interpretations, so the route preserves rather than collapses those boundaries.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持彼此独立的局部标本及相互竞争的比较解释，因此路线保留而不是抹平这些边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
软体动物起源档案是穿过有争议 Kimberella 亲缘与 Orthrozanclus 性状镶嵌的导航路线；它不定义软体动物冠群、直接祖先链或全球起源年代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 558–505 Ma envelope is withdrawn because this identifier is an editorial route joining separate organisms, localities and competing affinities rather than a biological taxon. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A taxon range would be a category error; the linked fossil dossiers remain independently accessible through their own evidence records.
<!-- /evo:text -->
