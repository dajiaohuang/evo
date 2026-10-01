---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ceratomorpha
    commonName: Tapir and Rhino Line
    commonNameZh: 貘—犀支系
    rank: suborder
    taxonId: ""
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Ceratomorpha
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bai-2020-ceratomorpha concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: bai-2020-ceratomorpha
          pages: Article 509
          figure: Figures 7–8
          quoteLocator: "The phylogenetic analysis; Discussion: Tapiroidea and early Rhinocerotoidea"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Ceratomorpha
      rangeKind: global-composite
      taxonomicConcept: Ceratomorpha numerical range withheld because the cited study tests competing topologies rather than a complete range
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
        - referenceId: bai-2020-ceratomorpha
          locator: Article 509; Figures 7–8; phylogenetic analysis and Discussion; parsimony and tip-dating disagreement
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Ceratomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 2020 parsimony analysis recovers Ceratomorpha as Tapiroidea plus Rhinocerotoidea, whereas its Bayesian tip-dating tree is less resolved in several basal positions; the atlas treats this as a sampled topology, not a fixed origin or ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study explicitly contrasts two inference criteria and reports their disagreements. The claim preserves those model limits.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究明确比较两种推断准则并报告分歧；该主张保留这些模型限制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
2020 年的简约法分析把 Ceratomorpha 恢复为貘总科加犀总科，而其贝叶斯尖端定年树在若干基干部位解析度更低；图谱将其视为取样拓扑，而非固定起源或祖先序列。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Parsimony and tip-dating results do not establish the former 56 Ma edge.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 56–0 Ma display is withheld because the primary study analyzes Ceratomorpha morphology and competing phylogenetic placements without auditing a complete fossil range.
<!-- /evo:text -->
