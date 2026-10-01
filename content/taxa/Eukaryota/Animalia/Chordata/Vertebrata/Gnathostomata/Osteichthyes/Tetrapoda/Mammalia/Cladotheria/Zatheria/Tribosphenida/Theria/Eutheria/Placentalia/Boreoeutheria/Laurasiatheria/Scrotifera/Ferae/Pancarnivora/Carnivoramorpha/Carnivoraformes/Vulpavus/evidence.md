---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Vulpavus
    commonName: Vulpavus
    commonNameZh: 狐祖兽
    rank: genus
    firstAppearance: 55.8
    lastAppearance: 42
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
    taxonId: txn:40991
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus
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
          quoteLocator: Cladistic analysis; Results and Discussion of Vulpavus and early miacid relationships
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus
      rangeKind: global-composite
      taxonomicConcept: Vulpavus navigation display — numerical range withheld — numerical range withheld
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
          locator: 1172–1178; Cladistic analysis; Results and Discussion of Vulpavus and early miacid relationships
      reviewStatus: automated-audit-passed
---

# Vulpavus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An early-miaced cladistic analysis samples Vulpavus and supports limited relationships among named genera while leaving broader “Miacidae” structure poorly resolved; Vulpavus is therefore a sampled fossil branch, not a direct carnivoran ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary analysis directly includes Vulpavus and reports unresolved higher relationships. Medium confidence preserves that result.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手分析直接纳入 Vulpavus 并报告高阶关系未解；中等置信度保留这一结果。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项早期“细齿兽类”支序分析取样 Vulpavus，并支持若干具名属间的有限关系，同时使广义“Miacidae”结构仍解析不足；因此 Vulpavus 是取样化石分支，而非食肉类直接祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the available cladistic study samples Vulpavus but does not document auditable numerical genus endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Referral of Miacis jepseni Guthrie to Oödectes Wortman, and an assessment of phylogenetic relationships among early Eocene Miacidae (Mammalia: Carnivora) found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
