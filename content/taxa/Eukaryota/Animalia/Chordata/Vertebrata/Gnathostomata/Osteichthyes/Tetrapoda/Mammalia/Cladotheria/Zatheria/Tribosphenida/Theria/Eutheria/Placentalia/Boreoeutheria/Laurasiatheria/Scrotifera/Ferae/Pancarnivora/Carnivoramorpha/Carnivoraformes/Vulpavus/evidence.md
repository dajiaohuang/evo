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
  catalogue-profile:
    scientificName: Vulpavus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Vulpavus
      en: Vulpavus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB classification — Vulpavus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=40991
            locator: Recorded PBDB parent closure beneath the already documented Mammalia COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:40991
            readingTargets:
              - name: Vulpavus canavus
                pbdbTaxonId: txn:48480
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus/Vulpavus_canavus
              - name: Vulpavus ovatus
                pbdbTaxonId: txn:52679
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus/Vulpavus_ovatus
              - name: Vulpavus hargeri
                pbdbTaxonId: txn:52678
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus/Vulpavus_hargeri
              - name: Vulpavus farsonensis
                pbdbTaxonId: txn:52677
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus/Vulpavus_farsonensis
              - name: Vulpavus australis
                pbdbTaxonId: txn:52674
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Placentalia/Boreoeutheria/Laurasiatheria/Scrotifera/Ferae/Pancarnivora/Carnivoramorpha/Carnivoraformes/Vulpavus/Vulpavus_australis
            scope:
              zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
              en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - pbdbTaxonId
            - readingTargets
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
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
