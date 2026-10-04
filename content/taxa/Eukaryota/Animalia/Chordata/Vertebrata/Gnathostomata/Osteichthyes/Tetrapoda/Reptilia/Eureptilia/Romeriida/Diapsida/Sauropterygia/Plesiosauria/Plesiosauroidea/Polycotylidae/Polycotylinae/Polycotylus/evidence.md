---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Polycotylus
    commonName: Polycotylid Plesiosaur
    commonNameZh: 多椎龙
    rank: genus
    taxonId: txn:36506
    firstAppearance: 83.6
    lastAppearance: 72.1
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Polycotylidae/Polycotylinae/Polycotylus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: okeefe-2011-polycotylus-viviparity concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: okeefe-2011-polycotylus-viviparity
          relation: supports
          pages: 870–873
          figure: Figure 1; Supporting Online Material Figure S1
          quoteLocator: Specimen provenance; geological age; description of LACM 129639
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Polycotylidae/Polycotylinae/Polycotylus
      rangeKind: global-composite
      taxonomicConcept: Polycotylus latipinnus adult and fetus LACM 129639 occurrence
      geographicScope: Pierre Shale, Kansas, United States
      olderMa: 83.6
      youngerMa: 72.1
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Gravid_Polycotylus_specimen/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: okeefe-2011-polycotylus-viviparity
          locator: pp. 870–873; Figure 1; Supporting Online Material
      reviewStatus: automated-audit-passed
  catalogue-profile:
    scientificName: Polycotylus
    rank: genus
    sourceDatasetId: null
    name:
      zh: Polycotylus
      en: Polycotylus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbSauropterygiaTaxonomy20261002
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaTaxonomy20261002
          usage:
            title: PBDB classification — Polycotylus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=36506
            locator: Recorded PBDB parent closure beneath the already documented Sauropterygia COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:36506
            readingTargets:
              - name: Polycotylus latipinnis
                pbdbTaxonId: txn:70302
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Polycotylidae/Polycotylinae/Polycotylus/Polycotylus_latipinnis
              - name: Polycotylus sopozkoi
                pbdbTaxonId: txn:447806
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Polycotylidae/Polycotylinae/Polycotylus/Polycotylus_sopozkoi
              - name: Polycotylus suprajurensis
                pbdbTaxonId: txn:89218
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Sauropterygia/Plesiosauria/Plesiosauroidea/Polycotylidae/Polycotylinae/Polycotylus/Polycotylus_suprajurensis
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

# Polycotylus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Polycotylus is represented by gravid specimen LACM 129639 from the Late Cretaceous Pierre Shale at approximately 78 Ma; it is a local specimen boundary, not a genus-wide first or last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen, formation and approximate age are directly stated. High confidence does not extend from that record to complete genus chronology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本、地层与近似年代均有直接陈述。高置信度不从该记录扩展到完整属级年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
双臼椎龙由约 7800 万年前晚白垩世皮埃尔页岩的怀孕标本 LACM 129639 表示；这是局部标本边界，不是属级首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The Campanian navigation envelope is broader than the paper's approximate 78 Ma age for the specimen.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The primary description records LACM 129639 from the Late Cretaceous Pierre Shale and gives an approximate age near 78 Ma.
<!-- /evo:text -->
