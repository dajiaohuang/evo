---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Arachnida
    commonName: Arachnids
    commonNameZh: 蛛形类
    rank: class
    taxonId: txn:19008
    firstAppearance: 485
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida
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
      reviewedAgainstReferenceVersion: sharma-2014-arachnida-phylogenomics DOI 10.1093/molbev/msu235; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: sharma-2014-arachnida-phylogenomics
          pages: 2963–2984
          figure: Figures 1–6; supplementary analyses
          quoteLocator: Taxon and gene sampling; data-partition conflict; sensitivity analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida
      rangeKind: global-composite
      taxonomicConcept: Arachnida numerical range withheld because sampled phylogenies do not support one stable monophyletic concept
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
      evidenceLevel: withheld-no-range-evidence
      confidence: contested
      claimPaths: []
      referenceLocators:
        - referenceId: ballesteros-2022-arachnida-paraphyly
          locator: msac021; Figures 1–6; Supplementary analyses; Dense taxon sampling; Heterogeneous models; Total-evidence topology
      reviewStatus: automated-audit-passed
---

# Arachnida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic analyses sample the major arachnid orders and expose systematic conflict among data partitions at deep nodes. The evidence supports a contested sampled topology, not one settled arachnid tree, direct ancestor or temporal origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the evidence supports a contested sampled topology, not one settled arachnid tree, direct ancestor or temporal origin.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统基因组分析抽样主要蛛形纲目级类群，并揭示深层节点在不同数据分区间存在系统冲突。这些证据支持的是有争议的抽样拓扑，而不是唯一确定的蛛形纲树、直接祖先或起源时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Dense taxon sampling recovers Arachnida as paraphyletic, so 485 Ma cannot bound one agreed lineage.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 485–0 Ma display is withheld because topology studies do not establish its older endpoint and dense sampling contests Arachnida monophyly.
<!-- /evo:text -->
