---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ptychopariida
    commonName: Ptychopariids
    commonNameZh: 褶颊虫类
    rank: order
    taxonId: txn:20239
    firstAppearance: 521
    lastAppearance: 443
    extinct: true
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - relation: supports
          referenceId: fortey-2001-trilobite-systematics
          pages: 1141–1151
          figure: Order-level classification review
          quoteLocator: Discussion of Ptychopariida and order-level paraphyly
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida
      rangeKind: global-composite
      taxonomicConcept: Traditional Ptychopariida numerical range withheld because the assemblage is not a stable bounded lineage
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
      confidence: contested
      claimPaths: []
      referenceLocators:
        - referenceId: fortey-2001-trilobite-systematics
          locator: pp. 1141–1151; order-level classification history and discussion of the traditional paraphyletic Ptychopariida
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Ptychopariida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Fortey's order-level review documents that traditional Ptychopariida is a problematic, probably paraphyletic assemblage used in historical trilobite classification. This entity is therefore a historical navigation grade, not a demonstrated clade, ancestor or globally bounded lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited systematic synthesis directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond this entity is therefore a historical navigation grade, not a demonstrated clade, ancestor or globally bounded lineage.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
fortey-2001-trilobite-systematics DOI 10.1666/0022-3360(2001)075<1141:TSTLY>2.0.CO;2; concrete-locator audit at 2026.08-static-v5-rc44
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引系统综述在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
目级综述指出，传统“褶颊虫目”是三叶虫历史分类中问题较多、很可能并系的组合。因此该实体只是历史导航级，不是已证实的演化支、祖先或具有全球端点的谱系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Traditional Ptychopariida is probably paraphyletic and lacks a stable order-wide range concept.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 521–443 Ma display is withheld because the systematic review treats the traditional order as a problematic, probably paraphyletic assemblage rather than one bounded lineage.
<!-- /evo:text -->
