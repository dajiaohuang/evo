---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cephalopoda
    commonName: Cephalopods
    commonNameZh: 头足类
    rank: class
    taxonId: txn:12315
    firstAppearance: 500
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda
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
      reviewedAgainstReferenceVersion: lindgren-2012-cephalopoda
      referenceLinks:
        - referenceId: lindgren-2012-cephalopoda
          relation: supports
          pages: Article 129
          quoteLocator: Figures 1–5; multigene topology and habitat reconstruction
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda
      rangeKind: global-composite
      taxonomicConcept: Cephalopoda — numerical range withheld
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
        - referenceId: lindgren-2012-cephalopoda
          locator: Article 129; Methods, Taxon sampling and sequence data; Table 1; Figures 1–5
      reviewStatus: automated-audit-passed
---

# Cephalopoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A multigene phylogeny of sampled living cephalopods supports repeated convergence associated with habitat shifts; extinct cephalopods and the exact ancestral habitats are not directly sampled.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Several genes and explicit habitat mapping support the comparative result, while living-only sampling limits the whole-class history.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多个基因与明确生境映射支持比较结果，但仅取样现生类群限制了整个纲的历史推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
取样现生头足类的多基因系统树支持与生境转换相关的多次趋同；灭绝头足类和确切祖先生境并未直接取样。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 500 Ma–present display is withdrawn because the multigene study samples living cephalopods and omits extinct lineages needed to audit class-wide temporal endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The source supports a sampled living topology and habitat reconstruction, not a fossil range.
<!-- /evo:text -->
