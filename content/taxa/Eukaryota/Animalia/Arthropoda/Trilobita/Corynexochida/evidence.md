---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Corynexochida
    commonName: Corynexochids
    commonNameZh: 栉虫类
    rank: order
    taxonId: txn:19472
    firstAppearance: 516
    lastAppearance: 393
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida
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
      reviewedAgainstReferenceVersion: lee-2008-missisquoiidae-revision DOI 10.1016/j.palaeo.2007.11.008; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: lee-2008-missisquoiidae-revision
          pages: 315–341
          figure: Figures 1–8; cladograms
          quoteLocator: Material, character matrix, cladistic results and systematic revision
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida
      rangeKind: global-composite
      taxonomicConcept: Corynexochida numerical range withheld pending order-wide synthesis
      geographicScope: No defensible global numerical scope established
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: lee-2008-missisquoiidae-revision
          locator: pp. 315–341; Figures 1–8; family-level Missisquoiidae revision and cladograms
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Corynexochida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A cladistic revision of Missisquoiidae provides a documented family-level sample nested within Corynexochida. The family sample does not resolve every corynexochid relationship or establish the order's origin and extinction boundaries.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the family sample does not resolve every corynexochid relationship or establish the order's origin and extinction boundaries.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对 Missisquoiidae 的支序修订提供了一个归入裂肋虫目的科级样本。这一科级样本不能解决裂肋虫目的全部关系，也不能确定该目的起源与灭绝边界。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited revision is limited to Missisquoiidae and cannot establish order-wide endpoints.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 516–393 Ma display is withheld because the available cladistic revision covers one family and does not audit the complete temporal extent of Corynexochida.
<!-- /evo:text -->
