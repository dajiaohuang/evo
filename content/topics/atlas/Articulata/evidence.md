---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Articulata
    commonName: Articulate Brachiopods
    commonNameZh: 有铰腕足类
    rank: class
    taxonId: ""
    firstAppearance: 540
    lastAppearance: 0
    extinct: false
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Articulata
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: williams-1996-brachiopod-classification
      referenceLinks:
        - referenceId: williams-1996-brachiopod-classification
          relation: supports
          pages: 1171–1193
          quoteLocator: Classification rationale; Tables 1–3; supra-ordinal diagnoses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Articulata
      rangeKind: global-composite
      taxonomicConcept: Articulata historical brachiopod grade — numerical range withheld
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
        - referenceId: williams-1996-brachiopod-classification
          locator: 1171–1193; Tables 1–3; classification rationale and supraordinal diagnoses
      reviewStatus: automated-audit-passed
---

# Articulata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The traditional brachiopod class Articulata is superseded by a supra-ordinal classification built from shell, soft-anatomical and developmental characters; the atlas retains Articulata only as a historical navigation grade.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The revision explicitly replaces the old dichotomy, so confidence is high for its historical-grade status, not for Articulata as a natural clade.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该修订明确取代旧二分法，因此高置信度仅适用于其历史等级性质，而不是把 Articulata 当作自然支系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
传统腕足动物有铰纲已被基于贝壳、软体解剖和发育性状的超目级分类取代；图谱仅把 Articulata 保留为历史导航等级。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 540 Ma–present display is withdrawn because the cited systematic revision replaces Articulata as a historical grade and does not delimit one coherent clade range. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The systematic revision is fit for historical classification and morphology, but not for numerical endpoints of a superseded grade.
<!-- /evo:text -->
