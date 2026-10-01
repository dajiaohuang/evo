---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Diprotodontia
    commonName: Kangaroos & Wombats
    commonNameZh: 袋鼠与袋熊
    rank: order
    taxonId: txn:66275
    firstAppearance: 28
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Metatheria/Diprotodontia
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
          quoteLocator: Global maximum-likelihood tree; taxonomy completion and TopoCons methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Metatheria/Diprotodontia
      rangeKind: global-composite
      taxonomicConcept: Diprotodontia — source-bounded sample window — numerical range withheld
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
          locator: Article e3000494; Global maximum-likelihood tree; taxonomy completion and TopoCons methods
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Diprotodontia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Diprotodontia is represented as one constrained branch in a mammal-wide 31-gene phylogenetic framework, but many DNA-missing species in the completed trees were added by taxonomic constraints; the result is not direct sequence evidence for every diprotodontian or a fossil first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study clearly distinguishes DNA-only and taxonomically completed trees. The claim preserves that evidence gradient.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究清楚区分仅 DNA 树与分类补全树；主张保留这一证据梯度。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在一套哺乳动物全局 31 基因系统发育框架中，Diprotodontia 被呈现为一个受约束分支，但完整树中许多缺少 DNA 的物种通过分类约束加入；该结果不是每一种双门齿类的直接序列证据，也不是化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the mammal-wide living-species tree uses taxonomic completion and does not directly support a fossil order range. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Inferring the mammal tree: Species-level sets of phylogenies for questions in ecology, evolution, and conservation found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
