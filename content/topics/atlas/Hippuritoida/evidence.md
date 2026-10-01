---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hippuritoida
    commonName: Rudist Bivalves
    commonNameZh: 厚壳蛤类
    rank: order
    taxonId: ""
    firstAppearance: 160
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Hippuritoida
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
      reviewedAgainstReferenceVersion: rineau-2020-rudists
      referenceLinks:
        - referenceId: rineau-2020-rudists
          relation: supports
          pages: 1243–1297
          quoteLocator: Figures 2–20; 41-character matrix; cladistic results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Hippuritoida
      rangeKind: global-composite
      taxonomicConcept: Hippuritida (rudists) — numerical range withheld
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
        - referenceId: rineau-2020-rudists
          locator: 1243–1297; Introduction; Figure 1; comparative anatomy and sampled cladistic matrix; Figures 2–20
      reviewStatus: automated-audit-passed
---

# Hippuritoida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 41-shell-character cladistic analysis tests relationships among sampled rudists (Hippuritida/Hippuritoida); the resulting trees do not define the group's complete geographic or temporal range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Explicit comparative anatomy and matrices support the sampled topology, while preservation and character dependence limit broader claims.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
明确的比较解剖与矩阵支持取样拓扑，但保存和性状依赖限制了更广主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项 41 个贝壳性状的支序分析检验了取样厚壳蛤类（Hippuritida/Hippuritoida）的关系；所得系统树不界定该群完整地理或年代范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 160–66 Ma display is withdrawn because the cited formal study directly supports comparative anatomy and sampled topology but does not furnish an auditable full-group numerical endpoint pair. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
No secondary summary or general background statement is promoted into a global rudist range without a range-fit primary locator.
<!-- /evo:text -->
