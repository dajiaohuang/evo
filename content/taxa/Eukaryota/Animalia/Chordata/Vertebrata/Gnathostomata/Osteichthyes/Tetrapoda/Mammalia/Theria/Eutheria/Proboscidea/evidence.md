---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Proboscidea
    commonName: Elephants & Relatives
    commonNameZh: 象及其近亲
    rank: order
    taxonId: txn:43230
    firstAppearance: 60.5
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Proboscidea
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
          quoteLocator: Global mammal topology; DNA-only versus completed trees
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Proboscidea
      rangeKind: global-composite
      taxonomicConcept: Proboscidea — source-bounded sample window — numerical range withheld
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
          locator: Article e3000494; Global mammal topology; DNA-only versus completed trees
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Proboscidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Proboscidea is represented in the mammal-wide phylogenetic framework by sampled living elephant lineages and taxonomically completed species placements, while extinct proboscideans require separate fossil evidence; the tree does not date the order’s origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary mammal tree supports living higher placement, and the wording explicitly separates its molecular scope from the fossil record.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手哺乳动物树支持现生高阶位置；措辞明确将其分子范围与化石记录分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在哺乳动物全局系统发育框架中，Proboscidea 由取样的现生象类谱系和分类补全的物种位置代表，而灭绝长鼻类需要独立化石证据；该树不测定目级起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the mammal-wide living-species tree does not directly sample extinct proboscideans or support the former 60.5 Ma start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Inferring the mammal tree: Species-level sets of phylogenies for questions in ecology, evolution, and conservation found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
