---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    taxonId: txn:33518
    extinct: false
    name: Hemichordata
    commonName: Hemichordates
    commonNameZh: 半索动物门
    rank: phylum
    firstAppearance: 516
    lastAppearance: 0
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Hemichordata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: yang-2025-yunotubus, halanych-1993-rhabdopleura-feeding primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: yang-2025-yunotubus
          relation: supports
          pages: 144:69
          figure: Figures 1–5
          quoteLocator: Geological setting; Systematic palaeontology; phylogenetic analyses
        - referenceId: halanych-1993-rhabdopleura-feeding
          relation: supports
          pages: 417–427
          figure: Figures 1–5
          quoteLocator: Video and electron-microscopy observations of living Rhabdopleura normani
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Hemichordata
      rangeKind: global-composite
      taxonomicConcept: Hemichordata represented-lineage evidence span
      geographicScope: Early Cambrian Xiaoshiba Lagerstätte, Yunnan, China; living marine observations
      olderMa: 516
      youngerMa: 0
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Hemichordata/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: yang-2025-yunotubus
          locator: Figures 1–5; Geological setting; Systematic palaeontology; phylogenetic analyses
        - referenceId: halanych-1993-rhabdopleura-feeding
          locator: pp. 417–427; living Rhabdopleura video and electron-microscopy observations
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Hemichordata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 516–0 Ma Hemichordata route is anchored by the approximately 516 Ma Yunotubus pterobranch sample and living Rhabdopleura observations; it is a represented-lineage span, not the phylum’s origin or a global hemichordate FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Fossil morphology, locality and phylogenetic scoring are explicit for Yunotubus, and living feeding anatomy is directly observed in Rhabdopleura. The two samples support endpoints but not uninterrupted occupancy or a phylum-wide first appearance.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Yunotubus 的化石形态、产地与系统评分均有明确记录，Rhabdopleura 的现生摄食解剖也来自直接观察；二者能约束路线端点，却不能证明连续占据或门级全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
516–0 Ma 的半索动物路线由约 516 Ma 的 Yunotubus 羽鳃类样本和现生 Rhabdopleura 观察共同锚定；它是所代表谱系的证据跨度，不是该门起源或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is the rounded Yunotubus occurrence, not a phylum origin or secure global FAD; the living endpoint does not imply continuous occupancy.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Diagnostic Yunotubus morphology anchors an early pterobranch minimum and living Rhabdopleura observations establish represented survival to the present.
<!-- /evo:text -->
