---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Monoplacophora
    commonName: Monoplacophorans
    commonNameZh: 单板纲
    rank: class
    firstAppearance: 480
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:57663
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Monoplacophora
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
      reviewedAgainstReferenceVersion: smith-et-al-2011-mollusca
      referenceLinks:
        - referenceId: smith-et-al-2011-mollusca
          relation: supports
          pages: 364–367
          figure: Figures 1–2; corrected Supplementary Figures 2–9 and Table 1
          quoteLocator: Transcriptome sampling; matrix construction; phylogenomic results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Monoplacophora
      rangeKind: global-composite
      taxonomicConcept: Monoplacophora — numerical range withheld
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
        - referenceId: smith-et-al-2011-mollusca
          locator: 364–367; Figures 1–2; Supplementary Table 1 and phylogenomic matrices
      reviewStatus: automated-audit-passed
---

# Monoplacophora

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An all-living-class phylogenomic sample recovers Monoplacophora with Cephalopoda in principal analyses; the result conflicts with other matrices and is not a fossil range or universal consensus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
All major living classes are represented, while matrix sensitivity and a published corrigendum justify retaining a study-specific boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主要现生纲均有代表，但矩阵敏感性和已发表勘误要求保留研究特定边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
覆盖全部现生纲的系统基因组样本在主要分析中把单板纲与头足纲恢复为一支；该结果与其他矩阵冲突，不是化石范围或普遍共识。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 480 Ma–present display is withdrawn because the cited living transcriptome sample supplies topology but no fossil endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Study-specific living relationships do not establish the lineage’s origin or fossil duration.
<!-- /evo:text -->
