---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Polyplacophora
    commonName: Chitons
    commonNameZh: 多板纲
    rank: class
    firstAppearance: 490
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Aculifera/Polyplacophora
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
      reviewedAgainstReferenceVersion: irisarri-2020-chitons
      referenceLinks:
        - referenceId: irisarri-2020-chitons
          relation: supports
          pages: Article 22
          quoteLocator: Figures 1–4; mitogenome sampling and phylogenetic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Aculifera/Polyplacophora
      rangeKind: global-composite
      taxonomicConcept: Polyplacophora — numerical range withheld
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
        - referenceId: irisarri-2020-chitons
          locator: Article 22; Methods, taxon sampling; Table 1; Figures 1–4
      reviewStatus: automated-audit-passed
---

# Polyplacophora

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A mitogenomic analysis adds 13 chiton genomes and tests sampled Polyplacophora relationships; mitochondrial inheritance and calibration uncertainty limit deep topology and timing.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Expanded mitogenome sampling supports several internal clades, while one genomic compartment and fossil ambiguity constrain broader conclusions.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
扩展线粒体基因组取样支持若干内部支系，但单一基因组区室和化石歧义限制更广结论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
线粒体基因组分析新增 13 套石鳖基因组并检验取样多板纲关系；线粒体遗传与校准不确定性限制深层拓扑和定年。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 490 Ma–present display is withdrawn because the mitogenomic analysis samples living chitons and its calibrated nodes are estimates rather than occurrences. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Living mitogenomic topology and calibration results do not establish a fossil FAD.
<!-- /evo:text -->
