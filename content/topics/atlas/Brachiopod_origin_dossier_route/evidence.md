---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Brachiopod origin dossier route
    commonName: Stem and early brachiopod evidence
    commonNameZh: 腕足动物干群与早期证据
    rank: navigation group
    firstAppearance: 521
    lastAppearance: 514.5
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Brachiopod_origin_dossier_route
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: holmer-et-al-2008-micrina; zhang-et-al-2014-yuganotheca
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 724–728
          figure: Figures 1–3
          quoteLocator: Mitral and sellate sclerites; reconstruction; muscle scars; brachiopod comparison
        - referenceId: zhang-et-al-2014-yuganotheca
          relation: supports
          pages: Description; Figures 1–3, 6
          figure: Figures 1–3, 6
          quoteLocator: Description and Figures 1–3, anatomical reconstruction; Figure 6, phylogenetic comparison
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Brachiopod_origin_dossier_route
      rangeKind: global-composite
      taxonomicConcept: Brachiopod-origin dossier navigation route — numerical range withheld
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
        - referenceId: holmer-et-al-2008-micrina
          locator: 724–728; Figures 1–3; Table 1; one bounded Micrina reconstruction within a multi-dossier route
      reviewStatus: automated-audit-passed
---

# Brachiopod origin dossier route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The brachiopod-origin dossier is a navigation route joining Micrina and Yuganotheca character tests; it is not a taxon, direct-ancestor sequence or global brachiopod first-appearance claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Each linked study supports a bounded specimen reconstruction, while the route deliberately does not merge them into one lineage or chronological endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
每项链接研究仅支持有限的标本重建；该路线有意不把它们合并成单一谱系或年代端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
腕足动物起源档案是连接 Micrina 与 Yuganotheca 性状检验的导航路线；它不是类群、直接祖先序列或腕足动物全球首现主张。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 530–518 Ma envelope is withdrawn because this identifier is an editorial route connecting separate taxa and hypotheses, not a lineage or ancestor series. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The component taxa retain their own source-bounded records; no composite taxon duration is exposed for the dossier route.
<!-- /evo:text -->
