---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Stenopterygius
    commonName: Narrow-fin Ichthyosaur
    commonNameZh: 狭翼鱼龙
    rank: genus
    taxonId: txn:36574
    firstAppearance: 182.7
    lastAppearance: 174.1
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: lindgren-2018-stenopterygius-soft-tissues
          relation: supports
          pages: 359–365
          figure: Figure 1; Extended Data Figure 1
          quoteLocator: Specimen MH 432; geological provenance; Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius
      rangeKind: global-composite
      taxonomicConcept: Stenopterygius specimen MH 432 occurrence
      geographicScope: Toarcian Posidonia Shale, Holzmaden, Germany
      olderMa: 182.7
      youngerMa: 174.1
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
        - content/events/Stenopterygius_skin_and_blubber/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: lindgren-2018-stenopterygius-soft-tissues
          locator: pp. 359–365; Figure 1; Methods
  catalogue-profile:
    scientificName: Stenopterygius
    rank: genus
    sourceDatasetId: null
    name:
      zh: Stenopterygius
      en: Stenopterygius
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbIchthyosauriformesTaxonomy20261002
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
        - referenceId: ref-2dd404cd-b72b-4fc1-8ad0-0dc4d9df94e9
          metadataVariant: 0
          sourceKey: pbdbIchthyosauriformesTaxonomy20261002
          usage:
            title: PBDB classification — Stenopterygius
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=36574
            locator: Recorded PBDB parent closure beneath the already documented Ichthyosauriformes COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-2dd404cd-b72b-4fc1-8ad0-0dc4d9df94e9
          metadataVariant: 0
          sourceKey: pbdbIchthyosauriformesOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:36574
            readingTargets:
              - name: Stenopterygius megacephalus
                pbdbTaxonId: txn:170899
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius/Stenopterygius_megacephalus
              - name: Stenopterygius cuneiceps
                pbdbTaxonId: txn:170903
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius/Stenopterygius_cuneiceps
              - name: Stenopterygius megalorhinus
                pbdbTaxonId: txn:170900
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius/Stenopterygius_megalorhinus
              - name: Stenopterygius quadriscissus
                pbdbTaxonId: txn:170897
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius/Stenopterygius_quadriscissus
              - name: Stenopterygius triscissus
                pbdbTaxonId: txn:263086
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius/Stenopterygius_triscissus
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

# Stenopterygius

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Stenopterygius is represented by specimen MH 432 from the Posidonia Shale at Holzmaden; this specimen-level occurrence is not a complete genus duration or a global first or last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen identity and formation are explicit in the primary study. High confidence applies only to that locality and horizon.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究明确给出标本身份和地层。高置信度仅适用于该地点与层位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
狭翼鱼龙由霍尔茨马登波西多尼亚页岩的 MH 432 标本表示；这一标本级记录不是完整属级时长，也不是全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The display uses a stage-scale Toarcian envelope broader than the specimen's local stratigraphic information.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen MH 432 is explicitly tied to the Posidonia Shale and Holzmaden in the primary study.
<!-- /evo:text -->
