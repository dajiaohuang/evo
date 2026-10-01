---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Rodentia
    commonName: Rodents
    commonNameZh: 啮齿类
    rank: order
    taxonId: txn:41370
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Rodentia
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
      reviewedAgainstReferenceVersion: upham-2019-mammal-tree concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: upham-2019-mammal-tree
          pages: Article e3000494
          figure: Figures 1–3
          quoteLocator: Global ML tree; patch-clade and taxonomic-completion methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Rodentia
      rangeKind: global-composite
      taxonomicConcept: Rodentia — source-bounded sample window — numerical range withheld
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: upham-2019-mammal-tree
          locator: Article e3000494; Global ML tree; patch-clade and taxonomic-completion methods
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Rodentia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Rodentia forms a constrained higher branch in the mammal-wide 31-gene framework, but DNA-missing taxa in completed trees inherit explicit taxonomic placements; the analysis is not direct molecular evidence for every rodent or a fossil origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study provides broad topology while documenting which placements are constrained rather than sequence-derived.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究提供广泛拓扑，并记录哪些位置来自约束而非序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
啮齿目在哺乳动物全局 31 基因框架中形成一个受约束高阶分支，但完整树中缺少 DNA 的类群继承明确的分类位置；该分析不是每一种啮齿类的直接分子证据，也不是化石起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the mammal-wide living-species tree does not support the former 56 Ma fossil start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Inferring the mammal tree: Species-level sets of phylogenies for questions in ecology, evolution, and conservation found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
