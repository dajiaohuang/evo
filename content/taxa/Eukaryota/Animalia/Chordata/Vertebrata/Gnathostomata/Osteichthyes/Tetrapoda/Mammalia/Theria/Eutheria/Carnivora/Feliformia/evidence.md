---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Feliformia
    commonName: Cat-like carnivorans
    commonNameZh: 猫型类
    rank: suborder
    firstAppearance: 45
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:72064
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Feliformia
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
          quoteLocator: Family-level relationships; Feliformia results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Feliformia
      rangeKind: global-composite
      taxonomicConcept: Feliformia navigation display — source-bounded sample window — numerical range withheld
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
          locator: Article 12; Family-level relationships; Feliformia results
      reviewStatus: automated-audit-passed
---

# Feliformia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A species-level supertree assembled from 188 source trees recovers Feliformia among extant Carnivora and resolves its sampled families, while several internal relationships differ from earlier trees; it does not supply a fossil first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study gives explicit tree and gene sampling and discusses conflicting source relationships. Scope is limited to extant species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究明确给出树和基因取样，并讨论相互冲突的来源关系；范围仅限现生物种。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一棵由 188 棵来源树组装的物种级超级树在现生食肉目中恢复猫型亚目并解析其取样科，但若干内部关系不同于早期树；它不提供化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the extant-carnivoran supertree does not supply a range-fit fossil first appearance. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Updating the evolutionary history of Carnivora (Mammalia): a new species-level supertree complete with divergence time estimates found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
