---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Rhinocerotoidea
    commonName: Rhinos and Relatives
    commonNameZh: 犀牛及其近亲
    rank: superfamily
    taxonId: txn:43140
    firstAppearance: 54
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea
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
          figure: Figures 6–8
          quoteLocator: Systematic palaeontology; The phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Tapiromorpha/Ceratomorpha/Rhinocerotoidea
      rangeKind: global-composite
      taxonomicConcept: Rhinocerotoidea numerical range withheld pending a direct global range synthesis
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: bai-2020-ceratomorpha
          locator: Article 509; Figures 6–8; Systematic palaeontology and phylogeny; no complete global range ledger
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Rhinocerotoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
New early Eocene material and a broad ceratomorph matrix place several sampled taxa within or near Rhinocerotoidea, while parsimony and Bayesian trees differ at basal nodes; the result does not make any one specimen the group’s ancestor or global first occurrence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named specimens and matrices directly support the sampled placements; medium confidence reflects the reported criterion-dependent basal topology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名标本与矩阵直接支持取样位置；中等置信度反映论文报告的准则依赖基干拓扑。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
新的早始新世材料与广泛的 Ceratomorpha 矩阵把若干取样类群置于犀总科之内或附近，但简约树与贝叶斯树在基干节点存在差异；该结果不把任何单件标本视为该群祖先或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited systematic and phylogenetic study does not establish the former 54 Ma global edge.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 54–0 Ma display is withheld because the primary study revises early rhinocerotoids and tests their topology rather than auditing the complete superfamily fossil range.
<!-- /evo:text -->
