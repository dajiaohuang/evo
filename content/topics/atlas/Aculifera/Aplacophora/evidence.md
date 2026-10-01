---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Aplacophora
    commonName: Aplacophorans
    commonNameZh: 无板类
    rank: historical grade
    firstAppearance: 485
    lastAppearance: 0
    extinct: false
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Aculifera/Aplacophora
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
      reviewedAgainstReferenceVersion: kocot-2019-aplacophora
      referenceLinks:
        - referenceId: kocot-2019-aplacophora
          relation: supports
          pages: "20190115"
          quoteLocator: Figures 1–4; phylogenomic matrices and taxonomic discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Aculifera/Aplacophora
      rangeKind: global-composite
      taxonomicConcept: Aplacophora historical grade — numerical range withheld
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
        - referenceId: kocot-2019-aplacophora
          locator: Article 20190115; taxon sampling and matrices; Figures 1–4
      reviewStatus: automated-audit-passed
---

# Aplacophora

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic analyses test relationships among sampled solenogasters and caudofoveates, but the atlas label Aplacophora remains a historical navigation grade rather than an assumed globally bounded natural clade.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome-scale data support the sampled topology, while legacy nomenclature and incomplete diversity sampling require an explicit historical-grade boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组尺度数据支持取样拓扑，但旧命名和不完整多样性取样要求明确保留历史等级边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统基因组分析检验了取样沟腹类与尾腔类关系，但图谱标签 Aplacophora 仍是历史导航等级，不被假定为具有全球边界的自然支系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 485 Ma–present display is withdrawn because Aplacophora is retained as a historical grade and the living Solenogastres–Caudofoveata sample does not delimit one coherent grade range. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A phylogenomic topology cannot supply temporal endpoints for a historically unstable grouping.
<!-- /evo:text -->
