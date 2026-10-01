---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Uintacyon
    commonName: Uintacyon
    commonNameZh: 尤因塔犬兽
    rank: genus
    firstAppearance: 55.8
    lastAppearance: 42
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
    taxonId: txn:40989
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Uintacyon
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
      reviewedAgainstReferenceVersion: heinrich-1997-early-miacids concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: heinrich-1997-early-miacids
          pages: 1172–1178
          quoteLocator: Cladistic results for Uintacyon, Vassacyon and other early miacids
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Uintacyon
      rangeKind: global-composite
      taxonomicConcept: Uintacyon navigation display — numerical range withheld — numerical range withheld
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
        - referenceId: heinrich-1997-early-miacids
          locator: 1172–1178; Cladistic results for Uintacyon, Vassacyon and other early miacids
      reviewStatus: automated-audit-passed
---

# Uintacyon

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The same morphology analysis samples Uintacyon and recovers a limited Uintacyon–Vassacyon relationship while emphasizing weak resolution among early “miacids”; the result does not identify Uintacyon as a crown carnivoran ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source supports sampled genus-level placement and explicitly reports unresolved surrounding nodes.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持取样属级位置，并明确报告周围节点未解。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
同一形态分析取样 Uintacyon，并恢复有限的 Uintacyon—Vassacyon 关系，同时强调早期“细齿兽类”之间解析度低；该结果不把 Uintacyon 认定为冠群食肉类祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the available cladistic study samples Uintacyon but does not document auditable numerical genus endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Referral of Miacis jepseni Guthrie to Oödectes Wortman, and an assessment of phylogenetic relationships among early Eocene Miacidae (Mammalia: Carnivora) found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
