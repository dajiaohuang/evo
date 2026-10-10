---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Carcharodontosaurus saharicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Carcharodontosaurus saharicus
      en: Carcharodontosaurus saharicus
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
            title: PBDB accepted record — Carcharodontosaurus saharicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=65364&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:65364; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:65364
            selectedOccurrenceIds:
              - occ:260021
              - occ:260025
              - occ:260589
              - occ:260595
              - occ:260596
              - occ:260598
              - occ:260601
              - occ:260834
              - occ:260901
              - occ:262347
              - occ:519803
              - occ:566783
              - occ:568470
              - occ:568474
              - occ:624186
              - occ:1080706
              - occ:1243977
              - occ:1243978
              - occ:1243984
              - occ:1243994
              - occ:1243995
              - occ:1244002
              - occ:1480976
              - occ:1480980
              - occ:1480981
              - occ:1480985
              - occ:1605167
              - occ:1606782
            selectedCollectionIds:
              - col:25137
              - col:25139
              - col:25192
              - col:25194
              - col:25195
              - col:25197
              - col:25200
              - col:25221
              - col:25226
              - col:25355
              - col:52887
              - col:59341
              - col:59689
              - col:59690
              - col:67203
              - col:135639
              - col:163916
              - col:163917
              - col:155212
              - col:144705
              - col:206286
              - col:206287
              - col:206288
              - col:187588
              - col:227024
              - col:227231
            sourceReferenceIds:
              - ref:7056
              - ref:30615
              - ref:45826
              - ref:13037
              - ref:68574
              - ref:24593
              - ref:19183
              - ref:43380
              - ref:53517
              - ref:65489
              - ref:82692
              - ref:7098
            originalIdentificationMappings:
              - occurrenceId: occ:260601
                originalIdentifiedName: Megalosaurus saharicus
                acceptedName: Carcharodontosaurus saharicus
                difference: recombined as
              - occurrenceId: occ:260834
                originalIdentifiedName: Megalosaurus saharicus
                acceptedName: Carcharodontosaurus saharicus
                difference: recombined as
              - occurrenceId: occ:568470
                originalIdentifiedName: Megalosaurus africanus n. sp.
                acceptedName: Carcharodontosaurus saharicus
                difference: null
              - occurrenceId: occ:568474
                originalIdentifiedName: Megalosaurus africanus n. sp.
                acceptedName: Carcharodontosaurus saharicus
                difference: null
              - occurrenceId: occ:1080706
                originalIdentifiedName: Sauroniops pachytholus n. gen. n. sp.
                acceptedName: Carcharodontosaurus saharicus
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

# Carcharodontosaurus saharicus
