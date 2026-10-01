---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Nautiloidea
    commonName: Nautiloids
    commonNameZh: 鹦鹉螺类
    rank: subclass
    taxonId: txn:61323
    firstAppearance: 500
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Nautiloidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ward-saunders-1997-allonautilus
      referenceLinks:
        - referenceId: ward-saunders-1997-allonautilus
          relation: supports
          pages: 1054–1064
          quoteLocator: Figures 1–8; diagnosis; nautilid phylogenetic discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Nautiloidea
      rangeKind: global-composite
      taxonomicConcept: Nautiloidea historical navigation route — numerical range withheld
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
        - referenceId: ward-saunders-1997-allonautilus
          locator: 1054–1064; diagnosis and material; Figures 1–8; phylogenetic discussion
      reviewStatus: automated-audit-passed
---

# Nautiloidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Living Allonautilus anatomy supports a distinct genus within Nautilida and informs comparisons with selected fossils; it cannot resolve or temporally bound the broader historical Nautiloidea grouping.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named living specimens and comparative morphology support the genus-level result, while the mismatch between Nautilida sampling and broader Nautiloidea scope requires caution.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名现生标本和比较形态支持属级结果，但鹦鹉螺目取样与更广 Nautiloidea 范围不一致，必须谨慎。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
现生异鹦鹉螺解剖支持其作为鹦鹉螺目内独立属，并用于同部分化石比较；它不能解析或限定更广义历史 Nautiloidea 类群的年代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 500 Ma–present display is withdrawn because the cited study concerns living Allonautilus and Nautilida comparisons, not endpoints for the broader historical Nautiloidea route. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Genus-level living anatomy and Nautilida relationships do not time-bound Nautiloidea.
<!-- /evo:text -->
