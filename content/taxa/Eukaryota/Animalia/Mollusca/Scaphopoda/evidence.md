---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Scaphopoda
    commonName: Tusk shells
    commonNameZh: 掘足纲
    rank: class
    firstAppearance: 480
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:8166
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Scaphopoda
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Scaphopoda
      rangeKind: global-composite
      taxonomicConcept: Scaphopoda — numerical range withheld
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

# Scaphopoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Scaphopoda is included in a phylogenomic sample of all major living molluscan classes, but its deep placement varies with matrix and model and does not establish scaphopod origin or fossil endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Direct transcriptome sampling supports inclusion, while analytical instability prevents a stronger whole-lineage claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
直接转录组取样支持其纳入分析，但分析不稳定性阻止更强的全谱系主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
掘足纲被纳入覆盖主要现生软体动物纲的系统基因组样本，但其深层位置随矩阵和模型变化，不能确立掘足纲起源或化石端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 480 Ma–present display is withdrawn because inclusion in a living phylogenomic sample does not establish scaphopod origin or fossil endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The source supports sampled topology only, not a temporal range.
<!-- /evo:text -->
