---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Trinacromerum bentonianum
    rank: species
    sourceDatasetId: null
    name:
      zh: Trinacromerum bentonianum
      en: Trinacromerum bentonianum
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
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbSauropterygiaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: evidence
        sourceIds:
          - pbdbSauropterygiaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: sources
        sourceIds:
          - pbdbSauropterygiaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaTaxonomy20261002
          usage:
            title: PBDB accepted record — Trinacromerum bentonianum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=100118&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
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
            locator: 2026-10-02 occurrence response accepted_no txn:100118; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:100118
            selectedOccurrenceIds:
              - occ:821684
              - occ:928419
              - occ:983414
              - occ:983415
              - occ:983416
              - occ:983418
              - occ:983419
              - occ:983420
              - occ:983421
              - occ:983422
              - occ:983423
              - occ:983425
              - occ:983429
            selectedCollectionIds:
              - col:90465
              - col:106182
              - col:117805
              - col:117806
              - col:117807
              - col:117808
              - col:117809
              - col:117810
              - col:117811
              - col:117812
              - col:117813
              - col:117814
              - col:117815
            sourceReferenceIds:
              - ref:30427
              - ref:35391
              - ref:37870
              - ref:37876
            originalIdentificationMappings:
              - occurrenceId: occ:821684
                originalIdentifiedName: Ceraunosaurus brownorum n. gen. n. sp.
                acceptedName: Trinacromerum bentonianum
                difference: null
              - occurrenceId: occ:928419
                originalIdentifiedName: Trinacromerum willistoni n. sp.
                acceptedName: Trinacromerum bentonianum
                difference: null
              - occurrenceId: occ:983414
                originalIdentifiedName: Trinacromerum bentonianum n. gen. n. sp.
                acceptedName: Trinacromerum bentonianum
                difference: null
              - occurrenceId: occ:983423
                originalIdentifiedName: Trinacromerum anonymum n. sp.
                acceptedName: Trinacromerum bentonianum
                difference: null
              - occurrenceId: occ:983429
                originalIdentifiedName: Trinacromerum anonymum
                acceptedName: Trinacromerum bentonianum
                difference: null
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
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

# Trinacromerum bentonianum
