---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ursidae
    commonName: Bears
    commonNameZh: 熊科
    rank: family
    firstAppearance: 38
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:41301
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae
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
          quoteLocator: Caniform family relationships; divergence-time estimation
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae
      rangeKind: global-composite
      taxonomicConcept: Ursidae navigation display — source-bounded sample window — numerical range withheld
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
          locator: Article 12; Caniform family relationships; divergence-time estimation
      reviewStatus: automated-audit-passed
---

# Ursidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ursidae is recovered as one living family branch in the extant-carnivoran supertree, but family crown dates and relationships are estimates assembled from gene trees and calibrations; extinct stem bears are not comprehensively sampled.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary supertree supports the living family placement and explicitly documents its input and dating method.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手超级树支持现生科位置，并明确记录其输入与定年方法。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
熊科在现生食肉类超级树中被恢复为一个现生科级分支，但科级冠群日期和关系是由基因树与校准组装的估计；灭绝干群熊类未被全面取样。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the extant-carnivoran supertree does not directly sample extinct stem bears or a fossil family range. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Updating the evolutionary history of Carnivora (Mammalia): a new species-level supertree complete with divergence time estimates found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
