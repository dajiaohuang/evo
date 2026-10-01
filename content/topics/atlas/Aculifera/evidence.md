---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Aculifera
    commonName: Spiny molluscs
    commonNameZh: 有棘类软体动物
    rank: clade
    firstAppearance: 520
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Aculifera
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
      reviewedAgainstReferenceVersion: kocot-et-al-2011-mollusca
      referenceLinks:
        - referenceId: kocot-et-al-2011-mollusca
          relation: supports
          pages: 452–456
          figure: Figures 1–3; Supplementary Figures 1–16 and Tables 1–7
          quoteLocator: Taxon and gene sampling; phylogenomic analyses; approximately unbiased tests
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Aculifera
      rangeKind: global-composite
      taxonomicConcept: Aculifera — numerical range withheld
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
        - referenceId: kocot-et-al-2011-mollusca
          locator: 452–456; taxon and gene sampling; Figures 1–3; supplementary matrices
      reviewStatus: automated-audit-passed
---

# Aculifera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Transcriptome–genome matrices recover sampled Polyplacophora plus Aplacophora as Aculifera, but omitted Monoplacophora and alternative matrices limit this to a study-specific living-taxon topology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Dense gene sampling supports the sampled node, while missing classes, models and matrix construction keep deeper molluscan relationships conditional.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
密集基因取样支持该取样节点，但缺失纲、模型和矩阵构建使深层软体动物关系仍有条件。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
转录组—基因组矩阵把取样多板纲与无板类恢复为有棘类，但缺少单板纲且替代矩阵不同，因此仅代表研究特定的现生类群拓扑。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 520 Ma–present display is withdrawn because the cited living phylogenomic topology supplies no fossil first appearance. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Topology support is retained separately and is not converted into temporal occurrence evidence.
<!-- /evo:text -->
