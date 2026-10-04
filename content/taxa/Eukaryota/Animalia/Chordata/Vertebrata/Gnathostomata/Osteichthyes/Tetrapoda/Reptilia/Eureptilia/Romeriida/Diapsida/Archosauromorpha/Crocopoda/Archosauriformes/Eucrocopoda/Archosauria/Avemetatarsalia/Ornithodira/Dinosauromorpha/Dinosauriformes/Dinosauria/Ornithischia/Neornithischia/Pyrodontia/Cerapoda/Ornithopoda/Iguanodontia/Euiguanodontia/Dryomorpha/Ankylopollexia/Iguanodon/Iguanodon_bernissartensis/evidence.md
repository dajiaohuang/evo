---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Iguanodon bernissartensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Iguanodon bernissartensis
      en: Iguanodon bernissartensis
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
            title: PBDB accepted record — Iguanodon bernissartensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58905&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:58905; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:58905
            selectedOccurrenceIds:
              - occ:219965
              - occ:220226
              - occ:458319
              - occ:458321
              - occ:458322
              - occ:458325
              - occ:458326
              - occ:518407
              - occ:522081
              - occ:522083
              - occ:558455
              - occ:607035
              - occ:670223
              - occ:812453
              - occ:812458
              - occ:986561
              - occ:1183821
              - occ:1211340
              - occ:1247663
              - occ:1434593
            selectedCollectionIds:
              - col:22645
              - col:22727
              - col:45148
              - col:45149
              - col:45150
              - col:45151
              - col:45152
              - col:52645
              - col:53675
              - col:53677
              - col:45193
              - col:64776
              - col:72266
              - col:89291
              - col:89293
              - col:118324
              - col:152639
              - col:96817
              - col:164632
              - col:200129
            sourceReferenceIds:
              - ref:19188
              - ref:5691
              - ref:43399
              - ref:11753
              - ref:14142
              - ref:14478
              - ref:55264
              - ref:18695
              - ref:24480
              - ref:55385
              - ref:43049
              - ref:49177
              - ref:51648
              - ref:62309
              - ref:68171
            originalIdentificationMappings:
              - occurrenceId: occ:219965
                originalIdentifiedName: Iguanodon bernissartensis n. sp.
                acceptedName: Iguanodon bernissartensis
                difference: null
              - occurrenceId: occ:670223
                originalIdentifiedName: Iguanodon seelyi n. sp.
                acceptedName: Iguanodon bernissartensis
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

# Iguanodon bernissartensis
