---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cnidaria
    commonName: Corals & Jellyfish
    commonNameZh: 珊瑚与水母
    rank: phylum
    taxonId: txn:4524
    firstAppearance: 580
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Dunn et al. 2022 DOI 10.1038/s41559-022-01807-x checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: dunn-2022-auroralumina
          relation: supports
          pages: 1095–1104
          figure: Figures 1–5; Extended Data Figures 1–8
          quoteLocator: Bed B horizon and 557–562 Ma age; holotype anatomy; phylogenetic position
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria
      rangeKind: global-composite
      taxonomicConcept: Cnidaria under the sampled Auroralumina morphology hypothesis
      geographicScope: Charnwood Forest Bed B sample to living cnidarians
      olderMa: 562
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 5
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Cnidaria/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: dunn-2022-auroralumina
          locator: pp. 1095–1104; Figures 1–5 and Extended Data Figures 1–8
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Cnidaria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Cnidaria root display uses 562–0 Ma as a sampled navigation envelope from the older bound of the 562–557 Ma Auroralumina horizon to living cnidarians; the fossil's crown placement is a morphology-analysis result, not the observed origin of Cnidaria.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named horizon and preserved polypoid anatomy are directly documented, while the medusozoan stem placement and resulting crown-Cnidaria minimum remain character- and matrix-dependent. The range therefore preserves the sampled boundary and its uncertainty.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名层位和保存的水螅体解剖可直接核实，但干群水母类位置及其冠群最小年龄仍依赖性状和矩阵；范围保留采样边界及其不确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
刺胞动物门根节点采用 5.62 亿年前至今的采样导航包络，从 5.62–5.57 亿年前 Auroralumina 层位的较老边界延伸到现生刺胞动物；该化石的冠群位置是形态分析结果，不是刺胞动物起源的直接观察。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The fossil horizon is bracketed at 562–557 Ma; medusozoan-stem placement is a matrix result, not an observed origin.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Auroralumina preserves polypoid anatomy in a dated horizon and is recovered as a stem medusozoan within crown Cnidaria in the sampled analysis.
<!-- /evo:text -->
