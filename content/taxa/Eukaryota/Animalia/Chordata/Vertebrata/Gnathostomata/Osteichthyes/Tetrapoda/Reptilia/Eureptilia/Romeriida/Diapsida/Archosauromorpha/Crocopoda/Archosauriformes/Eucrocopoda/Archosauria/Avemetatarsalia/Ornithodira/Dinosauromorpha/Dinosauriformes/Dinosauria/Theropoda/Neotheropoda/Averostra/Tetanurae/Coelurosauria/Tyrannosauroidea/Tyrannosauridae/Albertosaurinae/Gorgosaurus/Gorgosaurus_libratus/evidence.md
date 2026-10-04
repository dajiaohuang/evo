---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gorgosaurus libratus
    rank: species
    sourceDatasetId: null
    name:
      zh: Gorgosaurus libratus
      en: Gorgosaurus libratus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Gorgosaurus libratus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53194&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:53194; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53194
            selectedOccurrenceIds:
              - occ:139242
              - occ:139250
              - occ:139252
              - occ:139253
              - occ:139254
              - occ:220028
              - occ:564427
              - occ:564549
              - occ:565105
              - occ:901632
              - occ:1390598
              - occ:1557021
              - occ:1571432
              - occ:1663435
              - occ:2048267
            selectedCollectionIds:
              - col:11890
              - col:11893
              - col:11895
              - col:11896
              - col:11897
              - col:22659
              - col:58913
              - col:58944
              - col:59024
              - col:58156
              - col:52481
              - col:219724
              - col:47629
              - col:69213
              - col:52475
            sourceReferenceIds:
              - ref:13165
              - ref:4205
              - ref:17547
              - ref:5924
              - ref:62727
              - ref:15355
              - ref:15650
              - ref:91084
              - ref:77956
              - ref:55607
            originalIdentificationMappings:
              - occurrenceId: occ:139242
                originalIdentifiedName: Gorgosaurus sternbergi n. sp.
                acceptedName: Gorgosaurus libratus
                difference: null
              - occurrenceId: occ:139254
                originalIdentifiedName: Gorgosaurus libratus n. gen. n. sp.
                acceptedName: Gorgosaurus libratus
                difference: null
              - occurrenceId: occ:220028
                originalIdentifiedName: Albertosaurus libratus
                acceptedName: Gorgosaurus libratus
                difference: recombined as
              - occurrenceId: occ:564549
                originalIdentifiedName: Albertosaurus libratus
                acceptedName: Gorgosaurus libratus
                difference: recombined as
              - occurrenceId: occ:565105
                originalIdentifiedName: Albertosaurus libratus
                acceptedName: Gorgosaurus libratus
                difference: recombined as
              - occurrenceId: occ:901632
                originalIdentifiedName: Laelaps falculus n. sp.
                acceptedName: Gorgosaurus libratus
                difference: null
              - occurrenceId: occ:1390598
                originalIdentifiedName: Albertosaurus libratus
                acceptedName: Gorgosaurus libratus
                difference: recombined as
              - occurrenceId: occ:1663435
                originalIdentifiedName: Dryptosaurus kenabekides n. sp.
                acceptedName: Gorgosaurus libratus
                difference: null
              - occurrenceId: occ:2048267
                originalIdentifiedName: Albertosaurus libratus
                acceptedName: Gorgosaurus libratus
                difference: recombined as
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

# Gorgosaurus libratus
