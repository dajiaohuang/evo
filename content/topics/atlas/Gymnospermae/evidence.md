---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Gymnospermae
    commonName: Gymnosperms
    commonNameZh: 裸子植物
    rank: superclass
    taxonId: ""
    firstAppearance: 370
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gymnospermae
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: gillespie-1981-earliest-seeds
          relation: supports
          pages: 462–464
          figure: Figure 1
          quoteLocator: Famennian age control; three-dimensional morphology and histology of cupule systems and seeds
        - referenceId: ran-2018-gymnosperm-phylogenomics
          relation: contextualizes
          pages: 20181012, pp. 1–9
          figure: Figures 1–2
          quoteLocator: Sampling of all 13 living gymnosperm families and extant-lineage topology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gymnospermae
      rangeKind: global-composite
      taxonomicConcept: Total-seed-plant navigation surrogate for the Gymnospermae package root
      geographicScope: Famennian Hampshire Formation seed sample to living gymnosperm families
      olderMa: 365
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 7
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/topics/atlas/Gymnospermae/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: gillespie-1981-earliest-seeds
          locator: pp. 462–464; Figure 1
        - referenceId: ran-2018-gymnosperm-phylogenomics
          locator: article 20181012, pp. 1–9; Figures 1–2
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Gymnospermae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Gymnospermae atlas root uses a rounded 365–0 Ma total-seed-plant navigation envelope, anchored by Famennian cupulate seeds and living gymnosperm families; it is not the fossil first appearance or crown age of extant Gymnospermae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Famennian cupule systems with lagenostomalean-type seeds are direct fossil evidence, whereas mapping extinct seed plants to the living gymnosperm crown is topology-dependent. The endpoint is intentionally labelled as a total-seed-plant navigation surrogate.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Gillespie et al. 1981 DOI 10.1038/293462a0 and Ran et al. 2018 DOI 10.1098/rspb.2018.1012 checked for 2026.08-static-v5-rc39
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
法门期杯状结构中的种子属于直接化石证据，而灭绝种子植物与现生裸子植物冠群的对应取决于拓扑；端点明确标为总群种子植物导航替代值。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
裸子植物图集根节点采用取整后的 3.65 亿年前至今总群种子植物导航包络，以法门期杯状种子和现生裸子植物各科为锚点；它不是现生裸子植物的化石首现或冠群年龄。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The Famennian endpoint is a rounded total-seed-plant sample and is not a crown age or FAD for living Gymnospermae.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Cupulate lagenostomalean-type seeds anchor the extinct total-group record; complete living-family sampling contextualizes the present endpoint.
<!-- /evo:text -->
