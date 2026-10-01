---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Junggarsuchus
    commonName: Junggarsuchus
    commonNameZh: 准噶尔鳄
    rank: genus
    taxonId: txn:158007
    firstAppearance: 168.3
    lastAppearance: 163.5
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Junggarsuchus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: clark-2004-junggarsuchus concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: clark-2004-junggarsuchus
          relation: supports
          pages: 1021–1024
          figure: Figures 1–3
          quoteLocator: Holotype and locality; Description; geological context
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Pseudosuchia/Suchia/Paracrocodylomorpha/Loricata/Crocodylomorpha/Solidocrania/Junggarsuchus
      rangeKind: global-composite
      taxonomicConcept: Junggarsuchus sloani holotype occurrence
      geographicScope: Lower Shishugou Formation, Xinjiang, China
      olderMa: 168.3
      youngerMa: 163.5
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Junggarsuchus_skull_consolidation/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: clark-2004-junggarsuchus
          locator: 1021–1024; Figures 1–3; Holotype and locality; Description; Phylogenetic analysis
      reviewStatus: automated-audit-passed
---

# Junggarsuchus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Junggarsuchus is represented by articulated specimen IVPP V14010 from the Middle Jurassic Shishugou Formation of Xinjiang; this local sample is not a global genus range or crocodylian ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen, locality and formation are explicit in the primary description. High confidence does not extend to direct ancestry or complete chronology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究明确给出标本、地点和地层。高置信度不扩展到直接祖先关系或完整年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
准噶尔鳄由新疆中侏罗统石树沟组的关节相连标本 IVPP V14010 表示；这一局部样本不是全球属级范围或鳄类祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval is a study-level occurrence or model-bounded navigation envelope, not a direct date on ancestry or a guaranteed global first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
IVPP V14010 includes a nearly complete skull, mandible and articulated anterior postcranium; the authors document reduced cranial kinesis and character combinations near the crocodylian skull condition.
<!-- /evo:text -->
