---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Caniformia
    commonName: Dog-like carnivorans
    commonNameZh: 犬型类
    rank: suborder
    firstAppearance: 46.2
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:54044
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia
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
      reviewedAgainstReferenceVersion: nyakatura-2012-carnivora-supertree concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: nyakatura-2012-carnivora-supertree
          pages: Article 12
          figure: Figure 2
          quoteLocator: Caniformia family topology; divergence-time methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia
      rangeKind: global-composite
      taxonomicConcept: Caniformia navigation display — source-bounded sample window — numerical range withheld
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
        - referenceId: nyakatura-2012-carnivora-supertree
          locator: Article 12; Caniformia family topology; divergence-time methods
      reviewStatus: automated-audit-passed
---

# Caniformia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The extant-carnivoran supertree recovers Caniformia and its sampled living family branches, but its topology and divergence estimates combine source trees, newly inferred gene trees and fossil calibrations; they are not direct fossil observations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary analysis describes all three evidence layers and their support/conflict metrics. The claim retains that model architecture.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手分析描述三层证据及其支持、冲突指标；主张保留这一模型结构。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
现生食肉类超级树恢复犬型亚目及其取样现生科分支，但其拓扑与分化估计结合来源树、新推断基因树和化石校准；这些不是直接化石观测。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the extant-carnivoran supertree does not supply a range-fit fossil first appearance. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Updating the evolutionary history of Carnivora (Mammalia): a new species-level supertree complete with divergence time estimates found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
