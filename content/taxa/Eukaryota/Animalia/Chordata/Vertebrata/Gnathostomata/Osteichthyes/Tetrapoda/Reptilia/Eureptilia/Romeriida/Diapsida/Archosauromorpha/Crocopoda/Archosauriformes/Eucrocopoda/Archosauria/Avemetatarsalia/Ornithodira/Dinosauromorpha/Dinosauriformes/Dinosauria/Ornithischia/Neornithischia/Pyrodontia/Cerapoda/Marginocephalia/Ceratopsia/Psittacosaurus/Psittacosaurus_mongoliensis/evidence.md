---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Psittacosaurus mongoliensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Psittacosaurus mongoliensis
      en: Psittacosaurus mongoliensis
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
            title: PBDB accepted record — Psittacosaurus mongoliensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52831&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52831; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52831
            selectedOccurrenceIds:
              - occ:300498
              - occ:487449
              - occ:487452
              - occ:487456
              - occ:493046
              - occ:499892
              - occ:514934
              - occ:517526
              - occ:741251
              - occ:806552
              - occ:823902
              - occ:1385610
            selectedCollectionIds:
              - col:28919
              - col:48936
              - col:48937
              - col:48939
              - col:49797
              - col:49343
              - col:52127
              - col:52461
              - col:79703
              - col:88097
              - col:77191
            sourceReferenceIds:
              - ref:64010
              - ref:9632
              - ref:13060
              - ref:14779
              - ref:14000
              - ref:14106
              - ref:30554
              - ref:29599
            originalIdentificationMappings:
              - occurrenceId: occ:487449
                originalIdentifiedName: Psittacosaurus mongoliensis n. gen. n. sp.
                acceptedName: Psittacosaurus mongoliensis
                difference: null
              - occurrenceId: occ:487456
                originalIdentifiedName: Protiguanodon mongoliense n. gen. n. sp.
                acceptedName: Psittacosaurus mongoliensis
                difference: null
              - occurrenceId: occ:493046
                originalIdentifiedName: Psittacosaurus guyangensis n. sp.
                acceptedName: Psittacosaurus mongoliensis
                difference: null
              - occurrenceId: occ:499892
                originalIdentifiedName: Psittacosaurus osborni n. sp.
                acceptedName: Psittacosaurus mongoliensis
                difference: null
              - occurrenceId: occ:1385610
                originalIdentifiedName: Psittacosaurus osborni
                acceptedName: Psittacosaurus mongoliensis
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

# Psittacosaurus mongoliensis
